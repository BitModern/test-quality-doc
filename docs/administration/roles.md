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

| Role             | Can Add Users | Can Modify Roles | Can Create Project | Can Do... (Summary)                                     | Cannot Do... (Summary)                                  |
|------------------|---------------|------------------|--------------------|---------------------------------------------------------|--------------------------------------------------------|
| Admin            | Yes           | Yes              | Yes                | - Manage users, roles, and permissions.                  | - Perform testing or defect management tasks.           |
|                  |               |                  |                    | - Create and manage projects.                             | - Access specific project-related actions.              |
|                  |               |                  |                    | - Configure system settings.                              |                                                        |
| Project Manager  | Yes           | No               | Yes                | - Create and manage projects.                             | - Modify system configurations or user roles.           |
|                  |               |                  |                    | - Assign tasks and manage project timelines.              | - Perform testing or defect management tasks.          |
|                  |               |                  |                    | - Monitor project progress.                               |                                                        |
| Test Developer   | Yes           | No               | Yes                | - Access and work on projects.                            | - Modify system configurations or user roles.           |
|                  |               |                  |                    | - Create and modify project content (e.g., code, issues). | - Manage billing, payments, or platform-level settings.|
| Tester           | No            | No               | No                 | - Access the application.                                 | - Modify system configurations or user roles.           |
|                  |               |                  |                    | - Perform various actions related to tests, defects, etc. | - Manage billing, payments, or platform-level settings.|
| Viewer           | No            | No               | No                 | - Access the application.                                 | - Modify system configurations or user roles.           |
|                  |               |                  |                    | - View project content and data.                          | - Perform actions requiring editing or creation rights. |
|                  |               |                  |                    | - Cannot perform any modifications or actions.            |                                                        |
