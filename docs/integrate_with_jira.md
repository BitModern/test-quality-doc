---
title: Jira
---

# Jira

Integrate Jira with TestQuality to sync defects and requirements between both platforms. Changes made in either platform are reflected in real time.

## Prerequisites

- Active TestQuality and Jira accounts
- Admin rights in both TestQuality and Jira

## Setup

1. In TestQuality, go to **Settings → Integrations**
2. In the Jira section, click **Link Project**

   ![img_72.png](img/img_72.png)

3. Select your Jira instance type (Cloud or Server)
4. Enter your Jira subdomain — found in your Jira URL, e.g. `yoursubdomain.atlassian.net`

   ![img_74.png](img/img_74.png)

5. Click **Update**, then click **Jira Application Links**

   ![img_54.png](img/img_54.png)

6. In Jira, paste the TestQuality URL (`https://web.testquality.com`) into the Application URL field and click **Continue**

   ![img_75.png](img/img_75.png)

7. If a warning appears, click **Continue**

   ![img_76.png](img/img_76.png)

8. Fill in the application link form:
   - **Application name**: TestQuality
   - **Application type**: Generic Application
   - Check **Create incoming link**
   - Click **Continue**

   ![img_77.png](img/img_77.png)
   ![img_78.png](img/img_78.png)

9. Copy the **Consumer Key**, **Consumer Name**, and **Public Key** from TestQuality and paste them into the Jira Review Link popup. Click **Continue**

   ![img_79.png](img/img_79.png)
   ![img_80.png](img/img_80.png)

10. Back in TestQuality, click **Integrate**
11. In the **Authorization** section, click **Authorize**
12. When prompted, click **Allow** to grant TestQuality access to your Jira account

    ![img_81.png](img/img_81.png)

Your Jira integration is now active.

## Configuration

Access configuration settings by clicking the gear icon next to a linked project in **Settings → Integrations**.

**Re-authorize** — Click **Re-authorize** to reset and refresh the connection with your Jira account. Use this if the authorized user changes or the connection breaks.

**Add Project** — Click **Add Project** to link an existing TestQuality project to the Jira integration.

**Include TestQuality labels** — When enabled, TestQuality labels are automatically added to issues created in Jira.

**Templates** — Click **Edit Templates** to customize the format of defects and stories created in Jira. You can use static content or dynamic variables using [Handlebars/Mustache syntax](https://handlebarsjs.com/guide/). Click **Revert to defaults** to reset.

**Link comment** — When enabled, a comment is automatically added when linking defects and stories.

**Delete integration** — Removes the integration across all your projects, including all linked defects and requirements.

**WARNING:** This action cannot be undone.

**Disassociation** — Removes your user as the authorized admin for this integration. Another admin will need to re-authorize to restore the connection.

## Troubleshooting

- **Connectivity issues** — Ensure both TestQuality and Jira are accessible and your internet connection is stable
- **Permission errors** — Verify you have admin rights in both TestQuality and Jira
- **URL mistakes** — Double-check copied URLs and subdomains for typos or extra spaces
- **Application link problems** — If Jira rejects the TestQuality URL, verify there are no formatting errors in the URL field