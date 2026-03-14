---
title: Key concepts
---

# Key concepts

TestQuality is built around a simple core flow: write test cases, execute them as runs, and review results in insights. Everything else — cycles, plans, stories — layers on top when you need it.

## Core flow

[Test Case] → [Run] → [Insights]

- **Test case**: Define steps, expected outcomes, and test data
- **Run**: Execute the test and log results (manually or via CI)
- **Insights**: See pass/fail trends, flaky tests, and coverage over time

Every test you execute — whether ad-hoc or through a cycle, story, or plan — automatically creates a Run.

## Optional modules

These modules help you organize and scale your testing. None are required to get started.

| Module        | Purpose                                      | Required? | Example Use                          |
|---------------|----------------------------------------------|-----------|---------------------------------------|
| **Test Plan** | Set scope, objectives, and release milestones| ❌        | Plan tests for a major release        |
| **Cycle**     | Group reusable test sets                     | ❌        | Create a smoke suite or sprint suite |
| **Story**     | Link tests to requirements                   | ❌        | Map user stories to validation steps  |
| **Exploration** | Log exploratory or ad-hoc test sessions    | ❌        | Document session-based QA             |

## Projects

All work in TestQuality is organized under a **Project** — your QA workspace for a specific product, team, or sprint.

```
Project  
├── Test Cases (core)  
├── Runs (created whenever tests are executed)  
├── Cycles  
├── Test Plan  
├── Stories  
├── Explorations  
├── Integrations (Jira, GitHub, CI/CD)  
└── Insights  
```

> **Tip:** You can start simple with just Test Cases and Runs. As your testing evolves, layer in Cycles, Plans, and Stories to add structure and traceability.

## TestQuality and the STLC

TestQuality is aligned with the Software Testing Life Cycle (STLC), making it easy to plug into your team’s workflow — whether you're doing manual QA, automation, or both.

| STLC Phase                  | TestQuality Module(s)                      |
|-----------------------------|--------------------------------------------|
| Requirements Analysis       | **Stories**                                |
| Test Planning               | **Test Plan**                              |
| Test Design                 | **Test Cases**                             |
| Test Environment Setup      | **Environments & Resources**, **Integrations** |
| Test Execution              | **Runs**, **Explorations**                 |
| Test Closure & Reporting    | **Insights**, **Reports** (from Run or Overview) |


### TL;DR for New Users

If you’re just getting started, here’s all you need:

1. **Create a Test Case**  
2. **Run it** → This creates a **Run**  
3. **View results** in **Insights**

When you're ready to level up:
- Use **Cycles** to group reusable test sets  
- Use **Test Plans** to align testing with releases or goals  
- Link test cases to **Stories** for traceability  
- Log session-based testing with **Explorations**

Start small. Scale when you're ready.


