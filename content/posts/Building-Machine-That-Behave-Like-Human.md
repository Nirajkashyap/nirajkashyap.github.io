---
title: 'Building Machine That Behave Like Human'
date: '2026-02-06T14:43:46+05:30'
# weight: 1
# aliases: ["/first"]
tags: ["first"]
author: ["Niraj Kashyap"]
# author: ["Me", "You"] # multiple authors
showToc: true
TocOpen: false
<!--draft: false  this was default seetings in papermod theme -->
draft: true
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
UseHugoToc: false
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


### The Think–Act Model of Human Behavior


Human action for any task can be divided into two main parts:

#### 1. Think

This involves perception, reasoning, and decision-making. Today, Large Language Models (LLMs) and AI systems are increasingly capable of handling the "thinking" part—analyzing information, generating ideas, and making recommendations.

#### 2. Act

Acting is about executing decisions in the real world. Human actions are shaped by goals, context, memory, and experience. Importantly, when humans act, they are able to handle interruptions—pausing, resuming, or adapting their actions as needed. This resilience allows us to recover from distractions or failures and continue working toward our objectives without starting over.

By studying how humans approach tasks—separating thinking from acting, and combining both with adaptability—we can create machines that are not only efficient but also resilient and capable of handling real-world complexity.

![Alt text](/image.png)

---

### Durable Execution: Emulating Human Task

This blog post explores how the core principles behind human traits such as adaptability, memory, goal-orientation, and resilience can be translated into the design of machines and software systems. We will look at:

- How humans approach and complete tasks, even in the face of interruptions or uncertainty
- The parallels between human task execution and durable workflow systems
- How to model these behaviors in software using concepts like finite state machines (FSMs) and durable execution

By drawing inspiration from human intelligence and action, we aim to build systems that are robust, flexible, and capable of handling real-world challenges.


Durable execution is not just a technical term—it is deeply rooted in how humans naturally operate. In everyday life, when we encounter interruptions, distraction or failures, we rarely start over from scratch. Instead, we remember our progress, recall our goals, and resume from where we left off. This ability to persist state and recover is fundamental to human effectiveness.

Similarly, durable workflow systems in software are designed to mimic this human trait. By persisting the state of a process and enabling it to resume after a disruption, these systems bring human-like resilience and continuity to automation. Modeling workflows as finite state machines (FSMs) and storing their state externally (such as in a database) allows software to handle interruptions gracefully—just as humans do.

In this blog, we will see how these ideas can be applied to build machines and workflows that are not only technically robust but also inspired by the way humans act and adapt in the real world.


![Alt text](/image-1.png)

---

### Durable Execution: FSM-based Orchestration  Platform

#### 1. What is Durable Execution / Durable Workflow?

Durable execution (or durable workflow) refers to the ability of a system to reliably track, persist, and resume the progress of long-running workflows or processes, even in the face of failures, restarts, or interruptions. This means that the state of the workflow is saved externally (often in a database), so that if the application crashes or needs to be restarted, the workflow can continue from where it left off without loss of information or progress.

Durable workflows are essential for business processes that span hours, days, or even weeks, and require reliability, consistency, and recoverability.

#### 2. How Durable Execution is Related to FSM

Finite State Machines (FSMs) provide a natural model for representing the state and transitions of a workflow. By persisting the current state and transition history of an FSM, you can achieve durable execution:

- Each step or stage in a workflow is a state in the FSM.
- Transitions represent progress or events in the workflow.
- By storing the FSM state in a durable store (like PostgreSQL), you ensure that the workflow can be resumed after failures.

This approach allows you to build robust, fault-tolerant workflow engines where business logic is modeled as state transitions, and the system can always recover and continue processing from the last known state.

![Alt text](/image-2.png)

---

In the upcoming blog series, we will discover how to build [Durable Execution/Workflow based on Finite State Machines (FSM) with PostgreSQL]({{< ref "posts/Durable-Execution-based-on-Finite-State-Machines-with-PostgreSQL.md" >}}).  By the end of the series, you'll see how PostgreSQL can serve as more than just a data store—it can be the engine that drives your application's stateful logic.



