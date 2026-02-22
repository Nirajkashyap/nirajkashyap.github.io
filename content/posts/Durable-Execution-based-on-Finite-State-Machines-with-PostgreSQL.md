---
title: 'Durable Execution/Workflow Based on Finite State Machines With PostgreSQL'
date: '2026-02-06T22:16:28+05:30'
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

What is a durable workflow?
A durable workflow is a long‑running, stateful business process that automatically remembers where it left off, survives crashes or restarts, and can resume or retry instead of starting over.

Unlike a simple script that runs once and dies, a durable workflow:

Persists its state (current step, variables, context) in a database or durable store.

Handles timeouts, retries, and failures without losing progress.

Supports human‑in‑the‑loop steps, approvals, and external events (e.g., a user clicking “confirm”).

In effect, durable workflows bring human‑like resilience to automation: they pause, recover, and continue, just like a person who remembers what they’ve already done.

Why durable workflows are important
Resilience to failures
If a service crashes, a network call times out, or a task fails, the workflow engine persists state and resumes from the last checkpoint instead of dropping everything. This is crucial for production‑grade systems where “starting over” is not acceptable.

Long‑running business processes
Many real‑world flows—checkout, onboarding, approvals, batch jobs, or AI‑agent pipelines—take minutes, hours, or even days. Durable workflows manage timeouts, retries, and waiting for external events without requiring manual state management.

Cleaner, more maintainable code
Instead of sprinkling retry logic, state‑saving, and rollback code everywhere, developers write imperative, readable workflows. The platform handles the reliability “plumbing” under the hood.

Observability and debugging
Because every step is checkpointed, you get built‑in dashboards, logs, and traces for each workflow instance. This makes it much easier to debug, audit, and optimize complex flows.

AI agents and microservice orchestration
Durable workflows are increasingly used to coordinate LLM calls, agents, and microservices, ensuring that multi‑step AI pipelines don’t lose progress when a call fails or times out.

Major durable‑workflow platforms today
Here are some of the leading durable‑workflow platforms shaping modern architectures:

Temporal – Open‑source, code‑first workflow engine that lets you write workflows as plain code (Go, Java, Python, TypeScript). It provides automatic retries, timeouts, compensation logic, and strong support for microservices and AI‑agent orchestration.

Azure Durable Functions – Microsoft’s serverless durable‑workflow offering on Azure. It’s ideal for event‑driven, long‑running serverless flows tightly integrated with the Azure ecosystem.

AWS Step Functions – Amazon’s visual, JSON‑based state‑machine workflows. It’s widely used for AWS‑native apps and offers a visual editor for modeling and debugging complex flows.

Camunda Platform 8 – BPMN‑based workflow and decision automation platform. It’s popular in business‑process‑heavy and compliance‑sensitive environments, with strong support for human tasks and complex routing.

Inngest – Event‑driven durable‑workflow platform focused on background jobs and AI workflows. It’s lightweight, developer‑friendly, and designed for modern, event‑driven architectures.

Hatchet – Open‑source durable task queue and workflow engine that runs on Postgres. It’s well‑suited for AI agents and background tasks where durability and distribution matter.

Render Workflows – Durable workflows tailored for AI and LLM workloads, with automatic retries, distributed execution, and strong durability guarantees.
​

DBOS / Postgres‑based workflows – Platforms that build durable workflows directly on top of Postgres, using the database as the single source of truth for state and checkpoints.