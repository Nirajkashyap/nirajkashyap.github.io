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

## 5. Add a Theme (PaperMod)
Themes make your site look nice. Add PaperMod by running:
```sh
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```
If you see any errors, ask for help or search online for "Git install on Mac".

---

## 6. Configure Your Site
Edit the `config.toml` or `hugo.yaml` file in your site folder. Add these lines (example for YAML):
```yaml
theme: "PaperMod"
title: "My Awesome Blog"
```
You can change the title to anything you like.

---

## 7. Add Your First Blog Post
Run:
```sh
hugo new posts/my-first-post.md
```
Edit the new file in the `content/posts/` folder. Write your story between the lines that say `---`.

---

## 8. See Your Website Locally
Run:
```sh
hugo server -D
```
Open [http://localhost:1313](http://localhost:1313) in your browser. You’ll see your blog!

---

## 9. Make Changes & Add More Posts
- To add more posts: `hugo new posts/another-post.md`
- To edit posts: Open the file in any text editor and change the content.
- To see changes: Save the file and refresh your browser.

---

## 10. Daily Quick Start command 
- hugo server -D
- hugo new posts/another-post-title.md
- update below config in another-post-title.md 
    tags: ["first"]
    description: "Desc Text."
    canonicalURL: "https://nirajkashyap.github.io/posts/another-post-title"