---
title: CI/CD Integration Overview
---

TestQuality offers seamless integration with CI/CD pipelines to incorporate automated testing into your development workflows efficiently. By utilizing TestQuality's CLI tool, teams can effortlessly submit automated test results, whether integrated within CI/CD pipelines or executed manually. 
This documentation provides an overview of the integration process and specific guides for popular CI/CD tools such as GitHub Actions, Travis CI, and more.

## CI/CD Integration Process

The integration process with TestQuality involves several key steps that remain consistent across different CI/CD tools:

1. **Install TestQuality CLI tool:** During your CI/CD pipeline or build, install the [TestQuality CLI tool](/testquality_cli/overview). This tool is compatible with various operating systems and environments, ensuring easy installation.

2. **Run automated tests:** Execute your automated tests as usual, ensuring that your automation tool or framework generates a JUnit XML report file. 

3. **Submit test results:** Utilize the TestQuality CLI tool to submit your test results. The tool automatically reads test outcomes, creates test runs, and submits results to TestQuality for analysis and reporting.

### Integration Guides

TestQuality offers comprehensive guides for integrating with various CI/CD tools:

## Security Considerations

When integrating TestQuality into your CI/CD pipeline, ensure adherence to security best practices:

1. **API Key Management:** Generate and securely manage API keys for TestQuality authentication, ensuring sensitive information remains protected.
   
2. **Secret Management:** Avoid storing API keys in code repositories; instead, leverage CI/CD tools' secret management features to securely store and access API keys during pipeline execution.

For detailed guidance on securely storing API keys and managing secrets in various CI/CD tools, refer to the respective documentation links provided.
