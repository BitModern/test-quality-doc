---
title: Roles
---

# Roles

Roles define what users can do in TestQuality. Each user must have at least one role assigned.

## Built-in roles

TestQuality includes the following roles by default:

- **Administrator** — Full access to all features and settings
- **Project Manager** — Manages projects and configurations, cannot manage users or site settings
- **Test Developer** — Creates and manages tests and test data
- **Tester** — Executes tests, adds bugs and labels, authorizes integrations
- **Viewer** — View-only access to projects, tests, runs, and milestones

> Watches are accessible to all roles regardless of other permissions.

## Add a role

Click **Add Role** in the top right to create a custom role. In the Role details dialog:

- **Name** — Required
- **Projects** — Restrict the role to specific projects, or select **All Projects** for global access
- **Description** — Optional
- **Is default** — Check this to make the role the default for new users signing up to your site
- **Permissions** — Toggle **View** and **Edit** per section. Blue indicates the permission is active.

Permissions are grouped into two areas:

**Administration:** Company, User Management, Customizations, Integrations

**Project:** Project, Test, Run, Milestone

Click **Save** when done.

## Edit a role

Click any role in the list to open the Role details dialog and modify its settings or permissions.

## Default role

One role acts as the default — it is automatically assigned when new users sign up. The default role is marked with a `default` badge in the list. To change it, open a role and check **Is default**.

**WARNING:** Deleting a role removes its permissions from all users assigned to that role, unless those permissions are covered by another role.

## Delete a role

Click the delete icon next to the role you want to remove. You cannot delete a role that is currently set as the default.

## Role permissions overview

| Role | Can do | Cannot do |
|---|---|---|
| Administrator | Everything | — |
| Project Manager | Modify configurations, customizations, assign tests, add milestones | Edit site details, manage SSO, add users, manage roles, create projects, modify integrations, view lookup data, manage subscriptions, view space used |
| Test Developer | Create and manage tests and test data, add milestones | Everything Project Manager cannot do, plus: modify configurations and customizations |
| Tester | Execute tests, authorize integrations, add bugs and labels | Everything Test Developer cannot do, plus: modify runs |
| Viewer | View projects, tests, runs, milestones | Everything Tester cannot do |