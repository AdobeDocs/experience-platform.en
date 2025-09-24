---
title: Shared Private Extension Packages
description: Learn how you can share private extension packages in Adobe Experience Platform.
---
# Shared private extension packages

Adobe Experience Platform Tags now supports **[!UICONTROL Usage Authorizations]**, a powerful feature that enables you to securely share private extension packages with trusted partners without making them publicly available in the extension catalog. This feature creates a secure bridge between organizations, allowing you to leverage each other's custom extension code while maintaining privacy and control over your proprietary solutions.

## Sharing extension packages with other organizations

>[!NOTE]
>
>Both public and private extension packages can be shared through [!UICONTROL Usage Authorizations], though extensions in Development availability cannot have authorizations tied to them. 

Organizations often develop specialized extensions tailored to their unique business requirements. These extensions may contain proprietary logic, custom integrations, or sensitive configurations that shouldn't be made publicly available. Usage authorizations solve this challenge by enabling:

- **Selective sharing**: Share private extensions only with trusted partner organizations
- **Maintained privacy**: Keep sensitive extension code out of the public catalog
- **Collaborative development**: Enable trusted partners to benefit from your custom solutions
- **Controlled access**: Maintain full control over who can access and use your private extensions

The sharing process involves two key participants:

1. **Sharing organization**: The organization that owns and shares the private extension package
2. **Receiving organization**: The trusted organization that gains access to the shared extension

When a private version is shared, the receiving organization gains access to that specific version, creating a direct connection between the two organizations.

## Create an extension package usage authorization

To share an extension, navigate to the Data Collection UI and select **[!UICONTROL Tags]** from the left navigation. From here, select an existing property or create a new property.

Once you have selected or created the desired property, select **[!UICONTROL Extensions]** in the left navigation, then select the **[!UICONTROL Usage Authorizations]** tab.

Here, you see a list of existing shared authorizations organized into two categories:

- **Shared with this org**: Extensions that other organizations have shared with you.
- **Shared with other orgs**: Extensions that you have shared with other organizations.

Select **[!UICONTROL Add Authorization]**.

![The [!UICONTROL Usage Authorizations] tab showing a list of extensions shared with this org, highlighting [!UICONTROL Add Authorization]](../images/shared-extensions/add-authorization.png)

>[!IMPORTANT]
>
>You must obtain the target organization's **`Organization ID`**. Organizations cannot be searched by name.

Select the **[!UICONTROL Extension]** you want to share from your available extensions in the dropdown. The list displays extensions owned by your organization along with their availability status.

Next, enter the receiving organization's ID, then select **[!UICONTROL Save]**.

![The [!UICONTROL Create extension package usage authorization] page showing a selected extension and Adobe organization ID entered, highlighting [!UICONTROL Save]](../images/shared-extensions/save-authorization.png)

You are returned to the [!UICONTROL Usage Authorizations] tab where you can see the extension in your **[!UICONTROL Shared with other orgs]** list. The status will show **Awaiting Approval** until the receiving organization approves the authorization.

![The [!UICONTROL Usage Authorizations] tab showing a list of extensions shared with other orgs, highlighting the new authorization](../images/shared-extensions/new-authorization.png)

>[!TIP]
>
>You can also share extensions directly from the **[!UICONTROL Extension Catalog]** by selecting the menu (⋯) on the extension card, and then select the sharing option from the menu.

When an authorization is active, the shared extension displays a ***Sharing*** badge in the catalog indicating it is being shared with other organizations.

![The [!UICONTROL Catalog] tab showing the shared extension with the badge](../images/shared-extensions/sharing-badge.png)

## Authorize and manage shared extensions

>[!NOTE]
>
>As a receiving organization, you can only approve or reject shared extensions. You cannot manage or modify the authorization details, as these are controlled by the sharing organization.

To authorize a shared extension for your organization, navigate to the Data Collection UI and select **[!UICONTROL Tags]** from the left navigation, and select the property. Next, select **[!UICONTROL Extensions]** in the left navigation, then select the **[!UICONTROL Usage Authorizations]** tab.

You can see a list of shared extensions including those **Awaiting Approval** in the **[!UICONTROL Shared with this org]** section. Select the extension you want to approve, then select **[!UICONTROL Approve]**.

![The [!UICONTROL Usage Authorizations] tab showing a list of extensions shared with this org with the extension that is Awaiting Approval selected, highlighting [!UICONTROL Approve]](../images/shared-extensions/approve-authorization.png)

>[!NOTE]
>
>You can also reject a request within the **[!UICONTROL Usage Authorizations]** tab if the shared extension is no longer required by your organization.

Select **[!UICONTROL OK]** in the **[!UICONTROL Authorization Usages]** dialog.

![The [!UICONTROL Authorization Usages] dialog, highlighting [!UICONTROL OK]]()

You are returned to the [!UICONTROL Usage Authorizations] tab where you can see the extension now shows an **Approved** status.

![The [!UICONTROL Usage Authorizations] tab showing a list of extensions shared with this org, highlighting the extension with Approved status](../images/shared-extensions/approved-authorization.png)

Once the authorization is approved, the extension is available in your catalog and can be installed and used like any other extension. The shared extension displays a ***Receiving*** badge indicating it is a shared extension.

![The [!UICONTROL Catalog] tab showing the shared extension with the "Receiving" badge](../images/shared-extensions/receiving-badge.png)

## Next steps

This document demonstrated how to use the shared extension feature within Experience Platform. For information on extension development, see the [extension development user guide](./getting-started.md).

For a high-level overview of extension development in Experience Platform, refer to the [overview documentation](./overview.md).
