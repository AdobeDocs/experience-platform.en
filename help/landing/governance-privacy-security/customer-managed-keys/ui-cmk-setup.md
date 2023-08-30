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

## Set up the CMK app {#register-app}

After you have your key vault configured, the next step is to register for the CMK application that will link to your [!DNL Azure] tenant.

<!-- Not idea if the stuff below is accurate. Fact check -->

### Getting started

Registering the CMK app requires you to ...

### Fetch an authentication URL

To start the registration process, acquire the required authentication URL for your organization from ...

Copy and paste the `applicationRedirectUrl` address into a browser to open an authentication dialog. Select **[!DNL Accept]** to add the CMK app service principal to your [!DNL Azure] tenant.

![Accept permission request](../images/governance-privacy-security/customer-managed-keys/app-permission.png)

### Assign the CMK app to a role {#assign-to-role}

After completing the authentication process, navigate back to your [!DNL Azure] Key Vault and select **[!DNL Access control]** in the left navigation. From here, select **[!DNL Add]** followed by **[!DNL Add role assignment]**.

![Add role assignment](../images/governance-privacy-security/customer-managed-keys/add-role-assignment.png)

The next screen prompts you to choose a role for this assignment. Select **[!DNL Key Vault Crypto Service Encryption User]** before selecting **[!DNL Next]** to continue.

![Select role](../images/governance-privacy-security/customer-managed-keys/select-role.png)

On the next screen, choose **[!DNL Select members]** to open a dialog in the right rail. Use the search bar to locate the service principal for the CMK application and select it from the list. When finished, select **[!DNL Save]**.

>[!NOTE]
>
>If you cannot find your application in the list, then your service principal has not been accepted into your tenant. Please work with your [!DNL Azure] administrator or representative to ensure that you have correct privileges.

### Assign the CMK app to a role {#assign-to-role}

After completing the authentication process, navigate back to your [!DNL Azure] Key Vault and select **[!DNL Access control]** in the left navigation. From here, select **[!DNL Add]** followed by **[!DNL Add role assignment]**.

![Add role assignment](../images/governance-privacy-security/customer-managed-keys/add-role-assignment.png)

The next screen prompts you to choose a role for this assignment. Select **[!DNL Key Vault Crypto Service Encryption User]** before selecting **[!DNL Next]** to continue.

![Select role](../images/governance-privacy-security/customer-managed-keys/select-role.png)

On the next screen, choose **[!DNL Select members]** to open a dialog in the right rail. Use the search bar to locate the service principal for the CMK application and select it from the list. When finished, select **[!DNL Save]**.

>[!NOTE]
>
>If you cannot find your application in the list, then your service principal has not been accepted into your tenant. Please work with your [!DNL Azure] administrator or representative to ensure that you have correct privileges.

## Enable the encryption key configuration on Experience Platform {#send-to-adobe}

After installing the CMK app on [!DNL Azure], you can send your encryption key identifier to Adobe. Select **[!DNL Keys]** in the left navigation, followed by the name of the key you want to send.

![Select key](../images/governance-privacy-security/customer-managed-keys/select-key.png)

Select the latest version of the key and its details page appears. From here you can optionally configure the permitted operations for the key. At a minimum, the key must be granted the **[!DNL Wrap Key]** and **[!DNL Unwrap Key]** permissions.

The **[!UICONTROL Key Identifier]** field displays the URI identifier for the key. Copy this URI value for use in the next step.

![Copy key URL](../images/governance-privacy-security/customer-managed-keys/copy-key-url.png)

Once you have obtained the key vault URI, you ... {unknown}

## Verify the configuration's status {#check-status}

<!-- unconfirmed -->

To check the status of the configuration request, refer to the progress bar at the bottom of the screen.
