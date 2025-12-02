---
title: Customer Managed Keys in Adobe Experience Platform
description: Learn how to set up your own encryption keys for data stored in Adobe Experience Platform.
role: Developer
feature: Privacy
exl-id: cd33e6c2-8189-4b68-a99b-ec7fccdc9b91
---
# Customer Managed Keys in Adobe Experience Platform

Data stored on Adobe Experience Platform is encrypted at rest using system-level keys. If you are using an application built on top of Experience Platform, you can opt to use your own encryption keys instead, giving you greater control over your data security.

>[!AVAILABILITY]
>
>Adobe Experience Platform supports Customer Managed Keys (CMK) for both Microsoft Azure and Amazon Web Services (AWS). Experience Platform running on AWS is currently available to a limited number of customers. If your implementation runs on AWS, you have the option of using the Key Management Service (KMS) for Experience Platform data encryption. For more information about the supported infrastructure, see the [Experience Platform multi-cloud overview](https://experienceleague.adobe.com/en/docs/experience-platform/landing/multi-cloud).  
>
>To learn about encryption key creation and management in AWS KMS, refer to the [AWS KMS data encryption guide](./aws/configure-kms.md). For Azure implementations, see the [Azure Key Vault configuration guide](./azure/azure-key-vault-config.md).

>[!NOTE]
>
>For [!DNL Azure] hosted Experience Platform instances, customer profile data stored in Experience Platform's [!DNL Azure Data Lake] and the [!DNL Azure Cosmos DB] Profile store are encrypted exclusively using CMK once enabled. Key revocation in primary data stores can take anywhere from **a few minutes to 24 hours** and **up to 7 days** for transient or secondary data stores. For additional details, refer to the [implications of revoking key access section](#revoke-access).  

This document provides a high-level overview of the process for enabling the Customer Managed Keys (CMK) feature in Experience Platform across [!DNL Azure] and AWS, along with the prerequisite information required to complete these steps.

>[!NOTE]
>
>For Customer Journey Analytics customers, please follow the instructions in the [Customer Journey Analytics documentation](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-privacy/cmk.html).

## Prerequisites

To enable CMK, your platform's hosting environment ([!DNL Azure] or AWS) must meet specific configuration requirements:  

### General prerequisites

To view and access the [!UICONTROL Encryption] section in Adobe Experience Platform, you must have created a role and assigned the [!UICONTROL Manage Customer Managed Key] permission to that role.  Any user with the [!UICONTROL Manage Customer Managed Key] permission can enable CMK for their organization.  

For more information on assigning roles and permissions in Experience Platform, refer to the [configure permissions documentation](https://experienceleague.adobe.com/docs/platform-learn/getting-started-for-data-architects-and-data-engineers/configure-permissions.html).

### Azure-specific prerequisites

For Azure-hosted implementations, configure your [!DNL Azure] Key Vault with the following settings:  

- [Enable purge protection](https://learn.microsoft.com/en-us/azure/key-vault/general/soft-delete-overview#purge-protection)  
- [Enable soft-delete](https://learn.microsoft.com/en-us/azure/key-vault/general/soft-delete-overview)  
- [Configure access using [!DNL Azure] role-based access control](https://learn.microsoft.com/en-us/azure/role-based-access-control/)  

### AWS-specific prerequisites

For AWS-hosted implementations, configure your AWS environment as follows:  

- Ensure you have permissions to manage encryption keys using AWS Identity and Access Management (IAM). For details, see the [IAM Policies for AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/iam-policies.html).  
- Set up AWS KMS with support for CMK. Refer to the [AWS KMS data encryption guide](./aws/configure-kms.md).  

## Process summary {#process-summary}

Customer Managed Keys (CMK) is available through Adobe's Healthcare Shield and Privacy and Security Shield offerings. On Azure, CMK is supported for both Healthcare Shield and Privacy and Security Shield. On AWS, CMK is supported only for Privacy and Security Shield and is not available for Healthcare Shield. Once your organization purchases a license for one of these offerings, you can begin the one-time setup process for enabling CMK.

>[!WARNING]
>
>After setting up CMK, you cannot revert to system-managed keys. You are responsible for securely managing your keys to prevent losing access to your data.

The process is as follows:

### For Azure {#azure-process-summary}

1. [Configure an [!DNL Azure] Key Vault](./azure/azure-key-vault-config.md) based on your organization's policies, then [generate an encryption key](./azure/azure-key-vault-config.md#generate-a-key) to share with Adobe.  
1. Set up the CMK app with your [!DNL Azure] tenant through either [API calls](./azure/api-set-up.md#register-app) or the [UI](./azure/ui-set-up.md#register-app).
1. Send your encryption key ID to Adobe and start the enablement process for the feature, either [in the UI](./azure/ui-set-up.md#send-to-adobe) or with an [API call](./azure/api-set-up.md#send-to-adobe).
1. Check the status of the configuration to verify whether CMK has been enabled, either [in the UI](./azure/ui-set-up.md#check-status) or with an [API call](./azure/api-set-up.md#check-status).

Once the setup process is complete for Azure-hosted Experience Platform instances, all data onboarded into Experience Platform across all sandboxes will be encrypted using your [!DNL Azure] key setup. To use CMK, you will leverage [!DNL Microsoft Azure] functionality that may be part of their [public preview program](https://azure.microsoft.com/en-ca/support/legal/preview-supplemental-terms/).

### For AWS {#aws-process-summary}

1. [Set up AWS KMS](./aws/configure-kms.md) by configuring an encryption key to be shared with Adobe.  
2. Follow the AWS-specific instructions in the [UI setup guide](./aws/ui-set-up.md).  
3. Validate the setup to confirm that Experience Platform data is encrypted using the AWS-hosted key.

<!--  Pending: or [API setup guide]() -->

Once the setup process is complete for AWS-hosted Experience Platform instances, all data onboarded into Experience Platform across all sandboxes will be encrypted using your AWS Key Management Service (KMS) configuration. To use CMK on AWS, you will use the AWS Key Management Service to create and manage your encryption keys in alignment with your organization's security requirements.

## Implications of revoking key access {#revoke-access}

Revoking or disabling access to the Key Vault, key, or CMK app in Azure or the encryption key in AWS can result in significant disruptions, that include breaking changes to your Experience Platform's operations. Once keys are disabled, data in Experience Platform may become inaccessible, and any downstream operations that rely on this data will cease to function. It is crucial to fully understand the downstream impacts before making any changes to your key configurations.

To revoke Experience Platform access to your data in [!DNL Azure], remove the user role associated with the application from the Key Vault. For AWS, you can disable the key or update the policy statement. For detailed instructions on the AWS process, refer to the [key revocation section](./aws/ui-set-up.md#key-revocation).


### Propagation timelines {#propagation-timelines}

After key access is revoked from your [!DNL Azure] Key Vault, the changes will propagate as follows:

| **Store Type**  | **Description**  | **Timeline** |
|---|---|---|
| Primary Data Stores | Includes data lakes (Azure Data Lake, AWS S3) and Azure Cosmos DB Profile stores. Once key access is revoked, data becomes inaccessible.   | A **few minutes to 24 hours**.  |
| Cached/Transient Data Stores | Includes secondary data stores used for performance and core application functionality. The impact of key revocation is delayed. | **Up to 7 days**. |

For example, the Profile dashboard will continue to display data from its cache for up to seven days before the data expires and is refreshed. Similarly, re-enabling access to the application takes the same amount of time to restore data availability across these stores.

>[!NOTE]
>
>Re-enabling access to the application may take the same amount of time as the revocation to restore data availability across these stores.

>[!TIP]
>
>There are two use-case-specific exceptions to the seven day dataset expiration on non-primary (cached/transient) data. See their respective documentation for more information on these features.<ul><li>[Adobe Journey Optimizer URL Shortener](https://experienceleague.adobe.com/docs/journey-optimizer/using/sms/sms-configuration.html#message-preset-sms)</li><li>[Edge Projections](https://experienceleague.adobe.com/docs/experience-platform/profile/home.html#edge-projections)</li></ul>

## Next steps

To begin the process:

- For Azure: Start by [configuring an [!DNL Azure] Key Vault](./azure/azure-key-vault-config.md) and [generate an encryption key](./azure/azure-key-vault-config.md#generate-a-key) to share with Adobe.  
- For AWS: [Set up AWS KMS](./aws/configure-kms.md) and ensure proper IAM and KMS configurations before proceeding to the UI or API setup guides.  
