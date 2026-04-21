(function () {
  var statusEl = document.getElementById("repo-status");
  var listEl = document.getElementById("repo-list");
  var loadMoreButton = document.getElementById("repo-load-more");

  if (!statusEl || !listEl || !loadMoreButton) {
    return;
  }

  var username = listEl.getAttribute("data-github-user") || "Nirajkashyap";
  var pageSize = 100;
  var renderBatchSize = 12;
  var allRepos = [];
  var visibleCount = 0;
  var cacheKey = "landing-repos-" + username;
  var cacheTTLms = 6 * 60 * 60 * 1000;

  function setStatus(message) {
    statusEl.textContent = message;
  }

  function getCachedRepos() {
    try {
      var raw = localStorage.getItem(cacheKey);
      if (!raw) {
        return null;
      }
      var parsed = JSON.parse(raw);
      if (!parsed.savedAt || !Array.isArray(parsed.items)) {
        return null;
      }
      if (Date.now() - parsed.savedAt > cacheTTLms) {
        return null;
      }
      return parsed.items;
    } catch (error) {
      return null;
    }
  }

  function saveCachedRepos(items) {
    try {
      localStorage.setItem(cacheKey, JSON.stringify({ savedAt: Date.now(), items: items }));
    } catch (error) {
      // Ignore cache failures.
    }
  }

  function parseLinkHeader(linkHeader) {
    if (!linkHeader) {
      return {};
    }
    var links = {};
    linkHeader.split(",").forEach(function (part) {
      var section = part.split(";");
      if (section.length < 2) {
        return;
      }
      var url = section[0].trim().replace(/^<|>$/g, "");
      var rel = section[1].trim().replace(/^rel=\"|\"$/g, "");
      links[rel] = url;
    });
    return links;
  }

  function formatDate(isoDate) {
    if (!isoDate) {
      return "";
    }
    var date = new Date(isoDate);
    return date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  }

  function repoCard(repo) {
    var card = document.createElement("article");
    card.className = "repo-card";

    var title = document.createElement("h3");
    var link = document.createElement("a");
    link.href = repo.html_url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = repo.name;
    title.appendChild(link);

    var desc = document.createElement("p");
    desc.textContent = repo.description || "No description provided.";

    var meta = document.createElement("p");
    meta.className = "repo-meta";
    var language = repo.language ? repo.language : "n/a";
    var updated = formatDate(repo.pushed_at);
    var type = repo.fork ? "Fork" : "Original";
    meta.textContent =
      "Language: " + language +
      " | Stars: " + repo.stargazers_count +
      " | Forks: " + repo.forks_count +
      " | Updated: " + updated +
      " | Type: " + type;

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(meta);
    return card;
  }

  function renderNextBatch() {
    var next = allRepos.slice(visibleCount, visibleCount + renderBatchSize);
    next.forEach(function (repo) {
      listEl.appendChild(repoCard(repo));
    });
    visibleCount += next.length;

    if (visibleCount >= allRepos.length) {
      loadMoreButton.hidden = true;
    } else {
      loadMoreButton.hidden = false;
    }

    setStatus("Showing " + visibleCount + " of " + allRepos.length + " repositories.");
  }

  async function fetchAllRepos() {
    var items = [];
    var nextUrl = "https://api.github.com/users/" + username + "/repos?per_page=" + pageSize + "&page=1&sort=updated";

    while (nextUrl) {
      var response = await fetch(nextUrl, {
        headers: {
          Accept: "application/vnd.github+json"
        }
      });

      if (!response.ok) {
        var remaining = response.headers.get("x-ratelimit-remaining");
        if (response.status === 403 && remaining === "0") {
          throw new Error("GitHub API rate limit reached. Please try again later.");
        }
        throw new Error("GitHub API request failed with status " + response.status + ".");
      }

      var pageItems = await response.json();
      items = items.concat(pageItems);

      var links = parseLinkHeader(response.headers.get("link"));
      nextUrl = links.next || "";
    }

    return items;
  }

  async function init() {
    try {
      setStatus("Loading repositories...");

      var cachedRepos = getCachedRepos();
      var repos = cachedRepos;

      if (!repos) {
        repos = await fetchAllRepos();
        saveCachedRepos(repos);
      }

      repos.sort(function (a, b) {
        return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
      });

      allRepos = repos;
      visibleCount = 0;
      listEl.innerHTML = "";

      if (!allRepos.length) {
        setStatus("No repositories found.");
        loadMoreButton.hidden = true;
        return;
      }

      renderNextBatch();
    } catch (error) {
      setStatus(error.message || "Unable to load repositories right now.");
      loadMoreButton.hidden = true;
    }
  }

  loadMoreButton.addEventListener("click", renderNextBatch);
  init();
})();
