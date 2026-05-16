# Help Guide: Building Your Blog Website (For Non-Tech Users)

Welcome! This guide will help you create and manage your own blog website using [Hugo](https://gohugo.io/) and the PaperMod theme. No technical experience required—just follow the steps below!

---

## 1. What is Hugo?
Hugo is a free tool that helps you build fast, modern websites. You write your content in simple text files, and Hugo turns them into a beautiful website.

## 2. Prerequisites
You need:
- A Mac computer
- [Homebrew](https://brew.sh/) installed (for easy software installation)
- Basic knowledge of using Terminal (don't worry, steps are simple)

---

## 3. Install Hugo
Open Terminal and run:
```sh
brew install hugo
hugo version
```
This installs Hugo and checks the version.

---

## 4. Create Your Blog Website
In Terminal, run:
```sh
hugo new site my-blog
cd my-blog
```
This creates a new folder called `my-blog` for your website.

---

## 5. Add a Theme
Themes make your site look nice. Choose one theme setup below.

### a. Add PaperMod theme
```sh
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod hugo-blog-source/themes/PaperMod
git submodule update --init --recursive
```

### b. Add HugoBook theme
```sh
git init
git submodule add https://github.com/alex-shpak/hugo-book hugo-blog-source/themes/hugo-book
git submodule update --init --recursive
```
If you see any errors, ask for help or search online for "Git install on Mac".

---

## 6. Configure Your Site
Keep your active site config in `hugo.yaml`. You can also keep theme-specific reference configs in `themeRef/`.


### a. PaperMod theme config and reference
Create a PaperMod reference file.
```sh
mkdir -p themeRef
```


### b. HugoBook theme config and reference
Create a HugoBook reference config file:
```sh
mkdir -p themeRef
```
To run Hugo with a specific reference config, use:
```sh
hugo server -D --config themeRef/papermod.theme.hugo.yaml
```
or
```sh
hugo server -D --config themeRef/hugobook.theme.hugo.yaml
```

---

## 7. Add Your First Blog Post
Run:
```sh
hugo new posts/my-first-post.md
```
Edit the new file in the `content/posts/` folder. Write your story between the lines that say `---`.

---


## 8. Add More Posts
- To add more posts: `hugo new posts/another-post.md`
- To edit posts: Open the file in any text editor and change the content.
- To see changes: Save the file and refresh your browser.

---

## 9. Daily Quick Start command 
- hugo server -D --config themeRef/hugobook.theme.hugo.yaml
- hugo new posts/another-post-title.md
- update below config in another-post-title.md 
    tags: ["first"]
    description: "Desc Text."
    canonicalURL: "https://nirajkashyap.github.io/posts/another-post-title"