---
title: Environments

---

## **Overview**
The **Environments** feature in TestQuality allows you to define, organize, and manage the physical and virtual setups required for testing. This feature is structured to align resources and their corresponding values within specific testing environments, making it easier to replicate real-world scenarios.

An **environment** represents a test setup (e.g., Mobile Testing Environment, Web Application Testing Environment). Each environment comprises:
- **Resources**: Components like browsers, devices, operating systems, etc.
- **Resource Values**: Specific configurations for the resources (e.g., Chrome Mobile, iPhone 14 with iOS 16).

This feature ensures your test results are tied to consistent and well-documented configurations.

---

## **How to Use the Environments Feature**

### **Step 1: Create an Environment**
1. Navigate to the **Environments & Resources** section.
2. Click **Add** under the **Environments** tab.
3. Enter a name for the environment (e.g., **Mobile Testing Environment**).
4. Save the environment.

### **Step 2: Add Resources**
There are two ways to add resources to an environment:
1. **From the Resources Tab**:
   - Go to the **Resources** tab and click **Add**.
   - Enter the name of the resource (e.g., **Browser**).
   - Assign a **Resource Type** (e.g., **Devices**, **Operating System**) and save it.

2. **Directly from the Environments Tab**:
   - Open an existing environment.
   - In the **Linked Resources** section, select a preexisting resource from the dropdown.
   - Alternatively, type a new resource name to create it directly.

### **Step 3: Define Resource Values**
1. Select a resource (e.g., **Browser**) in either the **Resources** tab or the **Linked Resources** section within an environment.
2. Click **Add** under **Resource Values**.
3. Enter a value for the resource (e.g., **Chrome Mobile**, **Safari 16**) and save it.

### **Step 4: Link Resources to Environments**
1. Navigate back to the **Environments** tab.
2. Select an environment (e.g., **Mobile Testing Environment**).
3. Under **Linked Resources**, assign the relevant resources and their values.
4. Save the configuration.

---

## **Example Use Cases**

### **Mobile Testing Environment**
- **Resources**: Devices, Network Conditions, Browser
- **Resource Values**:
  - **Devices**: iPhone 14 with iOS 16
  - **Network Conditions**: 5G
  - **Browser**: Chrome Mobile

### **Web Application Testing Environment**
- **Resources**: Operating System, Browsers, Screen Resolution
- **Resource Values**:
  - **Operating System**: Windows 11
  - **Browsers**: Microsoft Edge 105
  - **Screen Resolution**: 1366x768

### **API Testing Environment**
- **Resources**: Server Configuration, Authentication, Software
- **Resource Values**:
  - **Server Configuration**: Ubuntu 20.04
  - **Authentication**: OAuth2, API Keys
  - **Software**: PostgreSQL Database, NGINX

---

## **Best Practices**
While optional, following these practices can enhance your experience with the **Environments** feature:
1. **Consistency is Key**: Always ensure resources and values match the real-world setup to produce reliable results.
2. **Reusability**: Define reusable resources and values across multiple environments to save time and effort.
3. **Documentation**: Keep environments well-documented within the tool to facilitate better understanding for your team.
4. **Keep It Modular**: Use modular environments for flexibility in managing different test configurations.
