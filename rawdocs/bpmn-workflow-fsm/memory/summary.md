# Summary

## Current synthesis

- The source separates three layers that teams often mix: diagramming for communication, modeling semantics, and runtime workflow execution.
- Flowcharts and UML variants (activity and sequence diagrams) are presented as complementary analysis views, not direct execution definitions.
- BPMN is framed as a business-process notation that remains descriptive until interpreted by a workflow engine.
- FSM/statechart models are framed as closer to executable behavior because transitions, guards, and events are explicit.
- The post argues that modern durable-execution platforms trend toward code-first workflow definitions that preserve operational guarantees.

## Key claims

- Diagrams help alignment, but execution requires runtime semantics and an engine. (C1)
- BPMN modeling tools validate notation but do not execute workflows by themselves. (C2)
- BPMN engines execute by parsing definitions into persisted state transitions, retries, timers, and callback handling. (C3)
- Statechart/FSM workflows make legal transitions explicit and therefore easier to test deterministically. (C4)
- Code-first durable orchestration (Temporal/DBOS/Vercel Workflows) is becoming a practical alternative to BPMN-first execution design. (C5)

## Draft thesis

- Use BPMN when business readability, governance, and cross-functional communication are primary.
- Use FSM/code-first durable workflows when deterministic runtime behavior, strict transition control, and engineering delivery speed are primary.
- In many systems, BPMN can remain a communication layer while execution is implemented in an FSM-style or code-first runtime.
