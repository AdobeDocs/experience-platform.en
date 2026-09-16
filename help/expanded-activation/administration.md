---
title: Expanded Activation Account Administration
description: Learn how to perform administrative tasks on your Expanded Activation account, such as monitoring license usage and assigning the correct permissions.
exl-id: ee0ec4b9-a083-447b-b7a7-e1307e90c646
TQID: https://experienceleague.adobe.com/UdI5T0riJi695ZM3d3ymVEDTSFFmPgx46q6Dgjy4PJQ
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: adf04a6a-050f-44bc-a52c-db79ccb22ebf
    internal-label: Administration
subfeature_v2:
  - id: a9b953c0-98db-499b-97f5-a0dc3290bda3
    internal-label: Adobe Admin Console
  - id: a9eb38d5-9d89-492f-af4e-b968a07f2d91
    internal-label: Permissions
  - id: d175cb4c-5781-454e-a826-bf6dff786265
    internal-label: Roles
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
topic_v2:
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
    internal-label: Administration
---
# Account administration

To ingest audiences from Audience Manager and activate them to social and advertising destinations, you must first create an Expanded Activation user account and assign the account to the correct permission role.

This page explains how to creata a user account in the Admin Console and assing the correct permissions for Expanded Activation.

## Create user accounts {#create-users}

Before you can use [!DNL Audience Manager Expanded Activation], you must create a user account.

To create a user account for [!DNL Expanded Activation], follow the instructions on managing users from the [Adobe Admin Console](https://helpx.adobe.com/enterprise/using/manage-users-individually.html) documentation.

## Add users to permission role {#permissions}

After you have created a user account, you must add it to the [!DNL Expanded Activation] permission role, in the [!DNL Expanded Activation] user interface.

Go to **[!UICONTROL Administration]** -> **[!UICONTROL Permissions]** -> **[!UICONTROL Roles]**, and select the **[!UICONTROL Expanded Activation Default Role]**.

![Expanded Activation user interface image showing the Roles page.](assets/expanded-activation-role.png)

Go to the **[!UICONTROL Users]** tab and select **[!UICONTROL Add Users]**.

![Expanded Activation user interface image showing the Users page.](assets/add-users.png)

Select the newly created user from the available list and select **[!UICONTROL Save]**.

![Expanded Activation user interface image showing the Add Users page.](assets/add-user.png)

The user account is now created and assigned to the correct role. It is now ready to access the **[!UICONTROL Expanded Activation]** user interface.

## Monitor license usage {#license-usage}

Your [!DNL Audience Manager Expanded Activation] contract specifies the maximum number of hashed emails you can ingest to your account.

You can find this information by going to the **[!UICONTROL Administration]** -> **[!UICONTROL License Usage]** page.

![Expanded Activation user interface image showing the license usage screen.](assets/license-usage.png)

On this page you can find the following information:

* **[!UICONTROL Product]**: The Adobe product that you are licensed for. This will always be **[!UICONTROL Audience Manager Expanded Activation]**.
* **[!UICONTROL Primary metric]**: The name of the metric being tracked for usage. This will always be **[!UICONTROL Addressable audience]**.
* **[!UICONTROL License amount]**: The maximum number of hashed emails that you are licensed to ingest.

    >[!TIP]
    >
    >You ingest hashed emails through the [Audience Manager source connector](../sources/connectors/adobe-applications/audience-manager.md). See the documentation on [how to activate audiences](activate-audiences.md) for more details.

* **[!UICONTROL Usage]**: the number of hashed emails that you have ingested.
* **[!UICONTROL Usage %]**: the percentage of your license amount that you have used.

To learn more about license usage in Experience Platform, see the [license usage documentation](../dashboards/guides/license-usage.md).

## Next steps {#next-steps}

Now that you have configured at least one user account with the correct access to Expanded Activation, you can start using the account to [activate audiences](activate-audiences.md).
