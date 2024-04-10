---
title: Roles

---

Roles in TestQuality are predefined sets of permissions that determine what users can do on the platform. Here's how you can manage roles and understand their distinctions.

### Accessing Roles

To access Roles in TestQuality, follow these steps:

1. Click on your profile icon in the top right corner.
2. Choose **'User Management'** from the dropdown menu.
3. Select **'Roles'**  from the left-hand menu in the User Management page.

### Managing Roles

Each role in TestQuality has specific permissions and responsibilities. Here are the built-in roles and their distinctions:

- **Administrator:** Has full access to all TestQuality features and settings.
- **Project Manager:** Manages projects, assigns tasks, and oversees project progress.
- **Test Developer:** Creates and updates tests and test setups.
- **Tester:** Runs tests and reports issues found during testing.
- **Viewer:** Can view but not modify information within TestQuality.

### Customizing Roles

You can customize roles in TestQuality to better fit your organization's needs. Here's how:

- **Modify Permissions:** Change the default permissions associated with a role to align with your workflow.
- **Create New Roles:** Tailor roles to specific requirements within your organization.

### Project-Level Access

In TestQuality, project-level access can be restricted by specifying relevant projects in the **'Projects'** field on the **'Role Details'** popup. When **'All Projects'** is selected, it grants global access to all projects within TestQuality.

### Grant-Based Model

TestQuality operates on a grant-based model for roles and permissions. This means that access permissions are granted to users based on specific actions or requests rather than being restricted by default. Permissions are granted on a need-to-have basis, ensuring that users only have access to what is required for their roles or tasks.

### Default Role

In TestQuality, one role always serves as the default role. This default role acts as a fallback if you delete roles that are still in use. Additionally, the default role is automatically preselected when adding new users to TestQuality.

**Warning:** Deleting a role in TestQuality will remove associated permissions for all users with that role, unless those permissions are also assigned from another role.

### Role Permissions Overview

| Role            | Can Do... (Summary)                                             | Cannot Do... (Summary)                                    |
|-----------------|-----------------------------------------------------------------|-----------------------------------------------------------|
| Administrator   | • Everything                                                    | • Not Applicable                                          |
| Project Manager | • Add or modify configurations.                                 | • Edit site details or delete site                         |
|                 | • Add or modify customizations.                                 | • Add/update SSO or OpenID.                               |
|                 | • Assign tests.                                                 | • Add users.                                              |
|                 | • Add milestones.                                               | • View or modify roles.                                   |
|                 |                                                                 | • Create projects.                                        |
|                 |                                                                 | • Modify integrations.                                    |
|                 |                                                                 | • View/add lookup data.                                   |
|                 |                                                                 | • Modify subscriptions.                                   |
|                 |                                                                 | • View space used.                                        |
| Test Developer  | • Create, modify and manage tests.                              | • Everything that a Project Manager can't do PLUS         |
|                 | • Create and manage test-related data.                           | • Add or modify configurations.                           |
|                 | • Add or modify milestones.                                     | • Add or modify customizations.                           |
| Tester          | • Execute tests (in stories, cycles, and runs).                  | • Everything that a Test Developer can't do PLUS           |
|                 | • Authorize users for integration.                              | • Modify runs                                             |
|                 | • Add bugs.                                                     |                                                           |
|                 | • Add labels.                                                   |                                                           |
| Viewer          | • View Project                                                  | • Everything that a Tester can't do                  |
|                 | • View Tests                                                    |                                                           |
|                 | • View Runs                                                     |                                                           |
|                 | • View Milestones                                               |                                                           |


**Note:** Watches are accessible to all roles within TestQuality, regardless of their permissions. This means that all users, regardless of their role or level of access, can utilize the watch feature to manage their watched items.



