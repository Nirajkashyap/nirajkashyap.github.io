---
title: 'Flowchart vs Statechart vs BPMN: Which Runs Workflows?'
date: '2026-03-27T14:03:00+05:30'
# weight: 1
# aliases: ["/first"]
tags: ["workflow-orchestration", "finite-state-machine", "business-process"]
author: ["Niraj Kashyap"]
# author: ["Me", "You"] # multiple authors
bookToC: true
draft: true
bookComments: true
description: "How flowcharts, statecharts, and BPMN differ as workflow design and execution models."
canonicalURL: "https://nirajkashyap.github.io/posts/"
---

Workflow conversations often mix up three different layers: how we sketch a process, which tools validate the sketch, and what actually runs in production. This post separates those layers by comparing flowcharts, statecharts (FSMs), and BPMN, so you can choose the right tool for the job.

## What is a diagram

A diagram is a visual model of behavior, structure, or flow. It helps people share understanding faster than plain text by showing relationships, order, and boundaries in one view.

A practical definition is simple: a diagram should be visual and helpful.

- Visual means it gives a shared picture of behavior instead of only linear text.
- Helpful means it improves understanding, communication, or analysis for a specific audience.

In workflow design, diagrams are communication artifacts first. They help engineers, analysts, and stakeholders align on the same process. But they are not automatically executable. For that, you need runtime semantics and an engine that interprets the model consistently.

## What is UML

UML (Unified Modeling Language) is a standardized modeling language used to describe software systems from multiple perspectives, such as structure, behavior, and interactions.

UML itself is not a workflow engine. It gives notations that help teams reason about systems. 

## What are activity diagrams, flowcharts, and sequence diagrams

These three representations are closely related because they describe the same workflow from different angles:

- Flowcharts show the main path and decisions at a high level.
- Activity diagrams (UML) formalize that flow with stronger semantics, including concurrency and swimlane-style responsibility boundaries.
- Sequence diagrams zoom into interactions over time, showing which participant sends which message and in what order.

In practice, teams often use them together in this sequence:

1. Start with a flowchart for quick business understanding.
2. Refine with an activity diagram for clearer control-flow behavior.
3. Add sequence diagrams for service-to-service and API interaction details.

So they are not competing diagrams. They are complementary views of the same system: path view (flowchart), control-flow view (activity), and time/interaction view (sequence).

Reference activity diagram image (Wikimedia Commons):

![UML activity diagram example](https://upload.wikimedia.org/wikipedia/commons/e/e7/Activity_conducting.svg)

Image attribution: "Activity conducting.svg" by Gwaur, source: https://commons.wikimedia.org/wiki/File:Activity_conducting.svg, license: CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/) and GFDL.

These diagrams are strong for analysis and communication. For production behavior, you still need explicit runtime semantics and an execution platform.

## What is BPMN

BPMN (Business Process Model and Notation) is a standardized process notation that keeps flowchart readability while adding richer process semantics. BPMN is a different standard focused specifically on business processes and operational workflows.

The notation defines core building blocks:

- Tasks: units of work performed by people, services, or bots.
- Events: start, intermediate, and end markers that capture triggers and outcomes.
- Gateways: decision points with explicit routing behavior.
- Message flows: interactions between participants or external systems.
- Pools and lanes: ownership and responsibility boundaries.

On its own, BPMN is descriptive. It needs an execution engine to run workflows.

## BPMN as a diagram tool

When you open Camunda Modeler, bpmn.io, Bizagi Modeler, or a similar editor, you are drawing a BPMN diagram. These tools validate shapes, swimlanes, and connections so exported BPMN XML stays compliant with the standard.

Think of them as CAD tools for process design: great for blueprints, not for runtime execution.

## BPMN inside workflow engines

Executing a process requires an engine such as Camunda Platform, Flowable, or Zeebe. These engines take BPMN definitions and:

- Parse the diagram into executable state transitions.
- Step through tasks, timers, and events while persisting state.
- Call APIs, wait for external callbacks, and manage retries or escalations.
- Coordinate humans and services through request/response patterns.

Without an engine, a BPMN file is still just a diagram and nothing in your stack actually moves.

## What is a statechart

A statechart (FSM-style model) represents behavior using explicit states, events, and transitions.

- State: where one workflow instance is now.
- Event: what triggers change.
- Transition: which next state is allowed.
- Guard/action: conditions and effects attached to transitions.

Statecharts are close to execution behavior because legal moves are explicit and testable.

## What is workflow

A workflow is the end-to-end progression of work across tasks, decisions, waiting periods, and outcomes. It can involve humans, services, data updates, and time-based rules.

In production systems, workflow quality depends on determinism, recoverability, observability, and safe retries, not only on visual clarity.

## Workflow from BPMN (flowchart/activity/sequence) vs workflow from statechart

Both can model the same business process, but they lead to different execution styles.

| Concern | Workflow from BPMN (flowchart/activity/sequence style) | Workflow from statechart |
| --- | --- | --- |
| Primary artifact | Diagram + BPMN XML | State/event/transition model |
| Main strength | Business-readable process communication and governance | Deterministic runtime behavior and explicit transition rules |
| Execution mapping | Requires BPMN engine interpretation | Usually maps directly to runtime state transitions |
| Failure handling | Modeled with events/timers and engine features | Modeled as explicit transitions, guards, retries, and error states |
| Change impact | Diagram changes may be broad and governance-heavy | Transition-level diffs make behavioral impact easier to inspect |
| Best fit | Cross-team process visibility and compliance | Event-driven systems requiring strict behavioral control |

## Recent shift toward code-first workflow definitions

One recent shift in workflow orchestration is that many teams no longer start with a diagram as the primary artifact. Instead, they define workflows directly in code as step-by-step logic that humans can read almost like step-by-step text.

Platforms such as Temporal, DBOS, and Restate follow this pattern. The workflow is expressed in application code or platform-specific constructs, while the runtime handles the hard operational parts such as persistence, retries, timers, waiting for callbacks, and recovery after failure.

This approach sits closer to the statechart or FSM side of the spectrum than to pure BPMN-first modeling. The main idea is not that diagrams disappear, but that the executable definition moves closer to the code that already owns business behavior.

That is why many engineering teams prefer this model:

- The workflow stays in version control with the rest of the application logic.
- Changes move through normal CI/CD pipelines.
- The step order is easy for humans to read in code without translating from a separate diagram.
- The runtime still provides durable orchestration semantics behind the scenes.

