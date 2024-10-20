---
title: Sharing Packages Across Organization Using Sandbox Tooling
description: Learn how to use Sandbox Tooling in Adobe Experience Platform to share packages across different organizations.
badge: Beta
---
# Share packages across organizations using Sandbox Tooling

>[!NOTE]
>
>Sharing packages across organizations is currently in beta and only available to select beta customers.

Improve configuration accuracy across sandboxes and seamlessly export and import sandbox configurations between sandboxes across different organizations with the sandbox tooling feature. This document covers how to use sandbox tooling in Adobe Experience Platform to share packages across different organizations. There are two types of shared packages:

- **Private package**

[Private packages](#private-packages) can only be shared with organizations that have approved the sharing request from the source organization via an opt-in allow list.

- **Public package**

[Public packages](./sandbox-tooling.md/#export-and-import-an-entire-sandbox) are available to import without any additional approval. These packages can be shared on a partner's website, blog, or platform. The package payload allows packages to be copied and pasted from these channels to the target organization.

## Private packages {#private-packages}

>[!NOTE]
>
>To initiate and approve a sharing request and share packages across organizations, you will need to have **package-share** role-based access control permission.

Use the Sandbox Tooling feature to create partnerships, track partnership request stats, manage existing partnerships, and share packages with partner organizations.

### Create an organization partnership request

To create an organization partnership request, navigate to the **[!UICONTROL Sandboxes]** **[!UICONTROL Partner orgs]** tab. Next, select **[!UICONTROL Manage partner orgs]**.

![The sandboxes UI, with the Partner orgs tab and Manage partner orgs highlighted.](../images/ui/sandbox-tooling/private-manage-partner-orgs.png)

In the [!UICONTROL Package partner management] dialog, enter the organization ID into **[!UICONTROL Enter Org ID]** and press enter (Windows) or return (Mac). The organization ID is shown in the **[!UICONTROL Selected Org IDs]** section below. After adding the IDs, select **[!UICONTROL Confirm]**.

>[!TIP]
>
>Multiple organization IDs can be entered at a time using comma-separated lists or by entering each organization ID followed by enter.

![The Package Partner orgs dialog with Enter Org ID, Selected Org IDs, and Confirm highlighted.](../images/ui/sandbox-tooling/private-enter-org-id.png)

The sharing request is successfully sent to the partner organization, and you are returned to the [!UICONTROL Sandboxes] **[!UICONTROL Partner orgs]** tab, which displays the **[!UICONTROL Outgoing request]**.

![The Partner orgs tab with Outgoing request highlighted.](../images/ui/sandbox-tooling/private-outgoing-request.png)

### Authorize a partnership request {#authorize-request}

To authorize an organization partnership request, navigate to the [!UICONTROL Sandboxes] **[!UICONTROL Partner orgs]** tab. Next, select **[!UICONTROL Incoming request]**.

![The sandboxes UI with the Partner orgs tab and Incoming request highlighted.](../images/ui/sandbox-tooling/private-authorise-partner-org.png)

The current **[!UICONTROL Status]** for the request, at this stage, is **Pending**. To approve the request, select the ellipsis (`...`) next to the selected request, then select **[!UICONTROL Approve]** from the dropdown.

![List of incoming requests showing the dropdown menu with Approve highlighted.](../images/ui/sandbox-tooling/private-approve-partner-org.png)

The **[!UICONTROL Review partner org request]** dialog displays details about the organization partnership request. Enter a [!UICONTROL Reason] for approval, then select **[!UICONTROL Approve]**.

![Review partner org request dialog with Reason and Approve highlighted.](../images/ui/sandbox-tooling/private-approval-partner-org.png)

You are returned to the [!UICONTROL Incoming request] page, and the request's status has been updated to **[!UICONTROL Approved]**.

![List of incoming requests with Approved highlighted.](../images/ui/sandbox-tooling/private-approved-partner-org.png)

Use this workflow/process to share packages between your organization and the source organization.

### Share packages to partner organizations {#share-package}

>[!NOTE]
>
>Only packages with the status **Published** can be shared.

To share a package to an approved partner organization, navigate to the [!UICONTROL Sandboxes] **[!UICONTROL Packages]** tab. Next, select the ellipsis (`...`) next to the package, and then select **[!UICONTROL Share package]** from the dropdown menu.

![List of packages showing the dropdown menu with Share package highlighted.](../images/ui/sandbox-tooling/private-share-package.png)

In the **[!UICONTROL Share package]** dialog, select the package to share from the **[!UICONTROL Share settings]** dropdown, then select **[!UICONTROL Confirm]**.

>[!TIP]
>
>It is possible to select more than one organization. Selected organizations will show up beneath the [!UICONTROL Share settings] dropdown.

![Share package dialog with Share settings and Confirm highlighted.](../images/ui/sandbox-tooling/private-share-package-confirm.png)

## Next steps {#next-steps}

This document demonstrated how to use the Sandbox tooling feature to share packages across different organizations. For additional information, refer to the [sandbox tooling guide](../ui/sandbox-tooling.md).

To learn how to perform different operations using the Sandbox API, see the [sandbox developer guide](../api/getting-started.md). For a high-level overview of sandboxes in Experience Platform, refer to the [overview documentation](../home.md).
