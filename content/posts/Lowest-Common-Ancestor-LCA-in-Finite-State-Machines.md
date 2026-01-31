---
title: 'Lowest Common Ancestor LCA in Finite State Machines'
date: '2026-01-31T21:18:13+05:30'
# weight: 1
# aliases: ["/first"]
tags: ["first"]
author: ["Niraj Kashyap"]
# author: ["Me", "You"] # multiple authors
showToc: true
TocOpen: false
<!--draft: false  this was default seetings in papermod theme -->
draft: false
hidemeta: false
comments: true
description: "Desc Text."
canonicalURL: "https://nirajkashyap.github.io/posts/"
disableHLJS: true # to disable highlightjs
disableShare: false
<!-- disableHLJS: false -->
hideSummary: false
searchHidden: true
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
ShowRssButtonInSectionTermList: true
UseHugoToc: true
cover:
    image: "<image path/url>" # image path/url
    alt: "<alt text>" # alt text
    caption: "<text>" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: true # only hide on current single page
editPost:
    URL: "https://github.com/Nirajkashyap/nirajkashyap.github.io/content"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
---

## What is Lowest Common Ancestor (LCA)?

The Lowest Common Ancestor (LCA) of two nodes in a tree is the deepest (i.e., lowest) node that is an ancestor of both nodes. In other words, it is the shared ancestor of the two nodes that is located farthest from the root. The concept is fundamental in computer science, especially in the context of tree data structures, such as binary trees, general trees, and state machines.

For example, given two nodes in a tree, their LCA is the node that appears on the path from the root to both nodes and is the last such node before the paths to the two nodes diverge. The LCA is useful in various applications, including finding relationships in hierarchical data, optimizing queries in databases, and analyzing state transitions in finite state machines.

## Real-World Uses of LCA

The concept of Lowest Common Ancestor is widely used in real-world applications where hierarchical relationships exist. Here are a few examples:

### 1. Filesystem Navigation
In operating systems, files and directories are organized in a tree structure. To find the closest shared directory between two files, the LCA algorithm is used. For example, if you want to find the shortest path to move from one file to another, you first find their LCA (the common parent directory), then traverse up and down the tree accordingly.

**Example:**

Suppose you have the following directory structure:

```
/home/user/
├── documents/
│   ├── work/
│   │   └── report.docx
│   └── personal/
│       └── diary.txt
```

To find the shortest path from `report.docx` to `diary.txt`, the LCA is the `documents` directory. The path is:

`report.docx` → `work` → `documents` → `personal` → `diary.txt`

### 2. Organizational Hierarchies
In companies, employees are often organized in a management tree. To find the closest common manager between two employees, the LCA algorithm is used. This is useful for determining reporting structures or resolving permissions.


### 3. State Machines
In finite state machines, states can be organized hierarchically. When transitioning between two states, the LCA helps determine the minimal set of exit and entry actions required, optimizing the transition process.


### 4. Human Daily Activity FSM: LCA in Action

Let's model a daily routine as a hierarchical finite state machine (FSM):

#### High-Level States
- Sleeping
- Working
- Relaxing

#### Nested States (under Working)
- Focused Work
- Meeting
- On Break

#### State Hierarchy (Tree View)
```
HumanDay
├── Sleeping
├── Working        ← LCA
│   ├── FocusedWork
│   ├── Meeting
│   └── OnBreak
└── Relaxing
```

#### LCA Example 1: Transition Within Working
Suppose you're coding (`FocusedWork`) and a meeting starts. You transition from `FocusedWork` to `Meeting`:

**Transition:** `FocusedWork` → `Meeting`
**LCA:** `Working`

**Internal Actions:**
- Exit `FocusedWork`
- Stay inside `Working` (LCA)
- Enter `Meeting`

No need to exit `Working` since both states share it as their lowest common ancestor.

#### LCA Example 2: Another Transition Within Working
Transition from `Meeting` to `OnBreak` (e.g., lunch time):

**Transition:** `Meeting` → `OnBreak`
**LCA:** `Working`

**Internal Actions:**
- Exit `Meeting`
- Enter `OnBreak`
- `Working` remains active

#### LCA Example 3: Transition Across Top-Level States
Transition from `FocusedWork` (nested under `Working`) to `Sleeping` (top-level):

**Transition:** `FocusedWork` → `Sleeping`
**LCA:** `HumanDay` (root)

**Internal Actions:**
- Exit `FocusedWork`
- Exit `Working`
- Enter `Sleeping`

Here, you must exit all nested states up to the root before entering the new top-level state.

---

These examples show how LCA helps minimize unnecessary exits and entries, making transitions efficient in both human routines and software state machines.