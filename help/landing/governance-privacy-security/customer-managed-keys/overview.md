---
title: Customer-Managed Keys in Adobe Experience Platform
description: Learn how to set up your own encryption keys for data stored in Adobe Experience Platform.
exl-id: cd33e6c2-8189-4b68-a99b-ec7fccdc9b91
---
# Customer-managed keys in Adobe Experience Platform

Data stored on Adobe Experience Platform is encrypted at rest using system-level keys. If you are using an application built on top of Platform, you can opt to use your own encryption keys instead, giving you greater control over your data security.

>[!NOTE]
>
>Data in Adobe Experience Platform data lake and Profile Store are encrypted using CMK. These are regarded as your primary data stores.

This document provides a high level overview of the process for enabling the customer-managed keys (CMK) feature in Platform, and the prerequisite information required to complete these steps.

>[!NOTE]
>
>For Customer Journey Analytics customers, please follow the instructions in the [Customer Journey Analytics documentation](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-privacy/cmk.html).

## Prerequisites

To view and visit the [!UICONTROL Encryption] section in Adobe Experience Platform, you must have created a role and assigned the [!UICONTROL Manage Customer Managed Key] permission to that role. Any user that has the [!UICONTROL Manage Customer Managed Key] permission can enable CMK for their organization. 

For more information on assigning roles and permissions in Experience Platform, refer to the [configure permissions documentation](https://experienceleague.adobe.com/docs/platform-learn/getting-started-for-data-architects-and-data-engineers/configure-permissions.html).

In order to enable CMK, your [!DNL Azure] Key Vault must be configured with the following settings:

* [Enable purge protection](https://learn.microsoft.com/en-us/azure/key-vault/general/soft-delete-overview#purge-protection)
* [Enable soft-delete](https://learn.microsoft.com/en-us/azure/key-vault/general/soft-delete-overview)
* [Configure access using [!DNL Azure] role-based access control](https://learn.microsoft.com/en-us/azure/role-based-access-control/)

Please read the linked documentation to better understand the process.

## Process summary {#process-summary}

CMK is included in the Healthcare Shield and the Privacy and Security Shield offerings from Adobe. After your organization purchases a license for one of these offerings, you can begin a one-time process for setting up the feature.

>[!WARNING]
>
>After setting up CMK, you cannot revert to system-managed keys. You are responsible for securely managing your keys and providing access to your Key Vault, Key, and CMK app within [!DNL Azure] to prevent losing access to your data.

The process is as follows:

1. [Configure an [!DNL Azure] Key Vault](./azure-key-vault-config.md) based on your organization's policies, then [generate an encryption key](./azure-key-vault-config.md#generate-a-key) that will ultimately be shared with Adobe.
1. Set up the CMK app with your [!DNL Azure] tenant through either [API calls](./api-set-up.md#register-app) or the [UI](./ui-set-up.md#register-app). 
1. Send your encryption key ID to Adobe and start the enablement process for the feature either [in the UI](./ui-set-up.md#send-to-adobe) or with an [API call](./api-set-up.md#send-to-adobe).
1. Check the status of the configuration to verify whether CMK has been enabled either [in the UI](./ui-set-up.md#check-status) or with an [API call](./api-set-up.md#check-status).

Once the setup process is complete, all data onboarded into Platform across all sandboxes will be encrypted using your [!DNL Azure] key setup. To use CMK, you will leverage [!DNL Microsoft Azure] functionality that may be part of their [public preview program](https://azure.microsoft.com/en-ca/support/legal/preview-supplemental-terms/).

## Revoke access {#revoke-access}

If you want to revoke Platform access to your data, you can remove the user role associated with the application from the key vault within [!DNL Azure].

>[!WARNING]
>
>Disabling the key vault, Key, or CMK app can result in a breaking change. Once the key vault, Key, or CMK app is disabled and data is no longer accessible in Platform, any downstream operations related to that data will no longer be possible. Ensure that you understand the downstream impacts of revoking Platform access to your key before you make any changes to your configuration.

After removing key access or disabling/deleting the key from your [!DNL Azure] key vault, it may take anywhere from a few minutes, to 24 hours for this configuration to propagate to primary data stores. Platform workflows also include cached and transient data stores required for performance and core application functionality. The propagation of CMK revocation through such cached and transient stores may take up to seven days as determined by their data processing workflows. For example, this means that the Profile dashboard would retain and display data from its cache data store and take seven days to expire the data held in cache data stores as part of the refresh cycle. The same time delay applies for data to become available again when re-enabling access to the application.

>[!NOTE]
>
>There are two use-case-specific exceptions to the seven day dataset expiration on non-primary (cached/transient) data. See their respective documentation for more information on these features.<ul><li>[Adobe Journey Optimizer URL Shortener](https://experienceleague.adobe.com/docs/journey-optimizer/using/sms/sms-configuration.html#message-preset-sms)</li><li>[Edge Projections](https://experienceleague.adobe.com/docs/experience-platform/profile/home.html#edge-projections)</li></ul>

## Next steps

To begin the process, start by [configuring an [!DNL Azure] Key Vault](./azure-key-vault-config.md) and [generate an encryption key](./azure-key-vault-config.md#generate-a-key) to share with Adobe.
