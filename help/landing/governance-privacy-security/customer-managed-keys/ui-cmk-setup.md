---
title: Setup and Configure Customer-Managed Keys using the Platform UI
description: Learn how to set up your CMK app with your Azure tenant and send your encryption key ID to Adobe Experience Platform.
---
# Setup and configure customer-managed keys using the Platform UI

This document covers the process for enabling the customer-managed keys (CMK) feature in Platform using the UI. For instructions on how to complete this process using the API, refer to the [API CMK setup document](./ui-cmk-setup.md).

## Prerequisites

In order to enable CMK, your [!DNL Azure] Key Vault must be configured with the following settings:

* [Enable purge protection](https://learn.microsoft.com/en-us/azure/key-vault/general/soft-delete-overview#purge-protection)
* [Enable soft-delete](https://learn.microsoft.com/en-us/azure/key-vault/general/soft-delete-overview)
* [Configure access using [!DNL Azure] role-based access control](https://learn.microsoft.com/en-us/azure/role-based-access-control/)
* [Configure an [!DNL Azure] Key Vault](./azure-key-vault-config.md)

To view and visit the [!UICONTROL Encryption] section in Adobe Experience Platform, you must have created a role and assigned the [!UICONTROL Manage Customer Managed Key] permission to that role. It is best practice to create a CMK admin role and then provide the [!UICONTROL Manage Customer Managed Key] permission to that role. As there is only one action provided by this permission, any user assigned this role can act as the CMK admin.

In the permissions workspace, make sure to grant your [!UICONTROL User] the CMK admin role before continuing with the guide. 

For more information on assigning roles and permissions in Experience Platform, refer to the [configure permissions documentation](https://experienceleague.adobe.com/docs/platform-learn/getting-started-for-data-architects-and-data-engineers/configure-permissions.html).

## Set up the CMK app {#register-app}

After you have your key vault configured, the next step is to register for the CMK application that will link to your [!DNL Azure] tenant.

### Getting started

To view the [!UICONTROL Encryption configurations] dashboard, select **[!UICONTROL Encryption]** under the [!UICONTROL Administration] heading of the left navigation sidebar.

![The Encryption configuration dashboard with Encryption and the Customer Managed Keys card highlighted.](../../images/governance-privacy-security/customer-managed-keys/encryption-configraion.png)

Select **[!UICONTROL Configure]** to open the [!UICONTROL Customer Managed Keys configuration] view. This workspace contains all the necessary values to complete the steps described below and perform the integration with your Azure Key vault.

### Copy authentication URL {#copy-authentication-url}

To start the registration process, copy the application authentication URL for your organization from the [!UICONTROL Customer Managed Keys configuration] view and paste it into your [!DNL Azure] environment **[!DNL Key Vault Crypto Service Encryption User]**. Details on how to do this are provided in the [next section](#assign-to-role). 

Select the copy icon (![The copy icon.](../../images/governance-privacy-security/customer-managed-keys/copy-icon.png)) by the [!UICONTROL Application authentication url].

![The [!UICONTROL Customer Managed Keys configuration] view with the Application authentication url section highlighted.](../../images/governance-privacy-security/customer-managed-keys/application-authentication-url.png)

Copy and paste the [!UICONTROL Application authentication url] into a browser to open an authentication dialog. Select **[!DNL Accept]** to add the CMK app service principal to your [!DNL Azure] tenant. This redirects to the Experience Cloud landing page.

![A Microsoft permission request dialog with [!UICONTROL Accept] highlighted.](../images/governance-privacy-security/customer-managed-keys/app-permission.png)

>[!IMPORTANT]
>
>If you have multiple Microsoft Azure subscriptions then your  potential for them to run into the same problem. In this situation you must swap the `common` section of the application authentication URL name for the CMK directory ID.<br>Copy the CMK directory ID from the Portal settings, Directories and Subscriptions page of the Microsoft Azure application<br>![The Microsoft Azure application Portal settings, Directories and Subscriptions page with the Directory ID highlighted.]()<br>Next, paste it into your browser address bar.<br>![A Google browser page with the 'common' section of the Application authentication url highlighted.]()

### Assign the CMK app to a role {#assign-to-role}

After completing the authentication process, navigate back to your [!DNL Azure] Key Vault and select **[!DNL Access control]** in the left navigation. From here, select **[!DNL Add]** followed by **[!DNL Add role assignment]**.

![The Microsoft Azure dashboard with Add and Add role assignment highlighted.](../images/governance-privacy-security/customer-managed-keys/add-role-assignment.png)

The next screen prompts you to choose a role for this assignment. Select **[!DNL Key Vault Crypto Service Encryption User]** before selecting **[!DNL Next]** to continue.

![The Microsoft Azure dashboard with the Key Vault Crypto Service Encryption User highlighted.](../images/governance-privacy-security/customer-managed-keys/select-role.png)

On the next screen, choose **[!DNL Select members]** to open a dialog in the right rail. Use the search bar to locate the service principal for the CMK application and select it from the list. When finished, select **[!DNL Save]**.

>[!NOTE]
>
>If you cannot find your application in the list, then your service principal has not been accepted into your tenant. Please work with your [!DNL Azure] administrator or representative to ensure that you have correct privileges.

You can verify the application by comparing the [!UICONTROL Application ID] provided on the [!UICONTROL Customer Managed Keys configuration] view with the [!DNL Application ID] provided on the [!DNL Microsoft Azure] application overview.

![The [!UICONTROL Customer Managed Keys configuration] view with the [!UICONTROL Application ID] highlighted.](../../images/governance-privacy-security/customer-managed-keys/application-id.png)

All the details necessary for verifying Azure tools are included the Platform UI. This level of granularity is provided as many users wish to utilize other Azure tooling to enhance their ability to monitor and log these applications access to their key vault. Understanding these identifiers is critical for that purpose and to help Adobe services to access the key.

## Enable the encryption key configuration on Experience Platform {#send-to-adobe}

After installing the CMK app on [!DNL Azure], you can send your encryption key identifier to Adobe. Select **[!DNL Keys]** in the left navigation, followed by the name of the key you want to send.

![The Microsoft Azure dashboard with the Keys object and the key name highlighted.](../images/governance-privacy-security/customer-managed-keys/select-key.png)

Select the latest version of the key and its details page appears. From here you can optionally configure the permitted operations for the key. 

>[!IMPORTANT]
>
>The minimum required operations to be permitted for the key are the **[!DNL Wrap Key]** and **[!DNL Unwrap Key]** permissions. You have the option to include [!DNL Encrypt], [!DNL Decrypt], [!DNL Sign], and [!DNL Verify] should you want.

The **[!UICONTROL Key Identifier]** field displays the URI identifier for the key. Copy this URI value for use in the next step.

![The Microsoft Azure dashboard Key details with the Permitted operations and the copy key URL sections highlighted.](../images/governance-privacy-security/customer-managed-keys/copy-key-url.png)

Once you have obtained the [!DNL Key vault URI], return to the [!UICONTROL Customer Managed Keys configuration] view and enter a descriptive **[!UICONTROL Configuration name]**. Next, add the [!DNL Key Identifier] taken from the Azure Key details page into the **[!UICONTROL Key vault key identifier]** and select **[!UICONTROL  Save]**. 

![The [!UICONTROL Customer Managed Keys configuration] view with the [!UICONTROL Configuration name] and the [!UICONTROL Key vault key identifier] sections highlighted.](../../images/governance-privacy-security/customer-managed-keys/configuration-name.png)

You are returned to the [!UICONTROL Encryption configurations dashboard]. The status of the [!UICONTROL Customer Managed Keys] configuration displays as [!UICONTROL Processing]. 

![The [!UICONTROL Encryption configurations] dashboard with [!UICONTROL Processing] highlighted on the [!UICONTROL Customer Managed Keys] card.](../../images/governance-privacy-security/customer-managed-keys/processing.png)

## Verify the configuration's status {#check-status}

Please allow a significant amount of time for processing. To check the status of the configuration, return to the [!UICONTROL Customer Managed Keys configuration] view and scroll down to the [!UICONTROL Configuration status]. The progress bar has advanced to step one of three and explains that the system is validating that Platform has access to the key and key vault.

There are four potential statuses of the CMK configuration. They are as follows:

* Step 1: Validates that Platform has the ability to access the key and key vault.
* Step 2: Adding the key vault and key name to all datastores across your organization.
* Step 3: The key vault and key name have been added to the datastores.
* `FAILED`: A problem occurred, primarily related to the key, key vault, or multi-tenant app setup.

