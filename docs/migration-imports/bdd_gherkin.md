---
title: BDD & Gherkin

---

TestQuality supports most of the standard [Gherkin](https://cucumber.io/docs/gherkin/reference/) keywords used to write clear, structured test cases. This allows QA teams to define scenarios in a natural language format while maintaining consistent test structure.

Below is a list of supported keywords, how they are typically used, and how each is mapped within the TestQuality interface.

> ⚠️ **Note:** `Rule` is not supported yet.  
> 🖍️ **Syntax highlighting** is planned — track progress on our [public roadmap](https://testquality.productlift.dev/p/support-for-gherkin-syntax-highlighting-for-your-manual-test-H2Yue2).

| **Gherkin Keyword** | **Usage**                                          | **TestQuality UI Mapping**      |
|---------------------|----------------------------------------------------|---------------------------------|
| `Feature`           | Groups related scenarios                           | Folder name                     |
| `Scenario`          | Describes a single test case                       | Test case name                  |
| `Scenario Outline`  | Defines a parameterized scenario                   | Test case with dataset          |
| `Examples`          | Provides data sets for a scenario outline          | Dataset                         |
| `Background`        | Setup shared by all scenarios in a feature         | Precondition                    |
| `Given`             | Defines initial context                            | Test step                       |
| `When`              | Describes an action                                | Test step                       |
| `Then`              | Expected outcome                                   | Expected result                 |
| `And`               | Additional step/context/outcome                    | Test step                       |
| `But`               | Negative or exception step                         | Test step                       |
| `# Comment`         | Inline notes, not executed                         | Ignored/comment only            |
| `"""` (Doc Strings) | Preserved multi-line text in steps                 | Multiline text in test step     |
| `\|` (Data Tables)   | Tabular values passed to a step (with escaping)    | Table input within test step    |
