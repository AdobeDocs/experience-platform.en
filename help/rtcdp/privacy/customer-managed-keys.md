---
title: Customer-Managed Keys in Real-Time Customer Data Platform
description: Learn how to set up your own encryption keys for data stored in Real-Time Customer Data Platform.
---
# Customer-managed keys in Real-Time Customer Data Platform (Beta)

>[!IMPORTANT]
>
>This feature is currently in beta and your organization may not have access to it yet. The documentation and functionality are subject to change.

All data stored on Adobe Experience Platform is stored in a Microsoft Azure Data Lake and encrypted at rest using system-level keys. In Real-Time Customer Data Platform (Real-Time CDP), you can opt to use your own encryption keys instead, giving you greater control over your data security.

This document covers the process for enabling the customer-managed keys (CMK) feature in Real-Time CDP.

## Process summary

The process for setting up CMK involves multiple teams:

| Team | Role |
| --- | --- |
| Security team | A team from your organization, responsible for instantiating key vaults and corresponding keys. |
| Adobe customer support team | Responsible for gathering information from the security team and creates a corresponding ticket for the provisioning team. |
| Adobe provisioning team | Responsible for changing the subscription/resource groups from system-managed keys to CMK. |

Each of the above teams collaborate to perform the following steps:

1. After your organization purchases this feature, the Adobe provisioning team configures the CMK app and identities for your organization.
1. Your security team sets up an Azure Key Vault that grants Adobe services access to its stored encryption keys.
1. The Adobe customer support team works with the provisioning team to configure CMK for your organization in the provisioning system
1. Your security team applies CMK to existing and new resources in your Platform implementation

## Create an Azure Key Vault

CMK only supports keys from a Microsoft Azure Key Vault. If you do not have a Key Vault set up already, you can [create a free account](https://azure.microsoft.com/en-us/free/) and follow the steps below to set one up.

Log in to the Azure portal and use the search bar to locate **[!DNL Key vaults]** under the list of services.

![Search and select key vaults](./assets/customer-managed-keys/access-key-vaults.png)

The **[!DNL Key vaults]** page appears after selecting the service. From here, select **[!DNL Create]**.

![Create key vault](./assets/customer-managed-keys/create-key-vault.png)

Using the provided form, fill in the basic details for the key vault, including a name and an assigned resource group. While most options can be left as their default values, make sure that you enable the purge protection option. From here, continue going through the key vault creation workflow and configure the different options how you wish.

![Basic config for the key vault](./assets/customer-managed-keys/basic-config.png)

Once you arrive at the **[!DNL Review + create]** step, you can review the details of the key vault while it goes through validation. Once validation passes, select **[!DNL Create]** to complete the process.

![Basic config for the key vault](./assets/customer-managed-keys/finish-creation.png)

## Generate a key

Once you have created a Key Vault, you can import an existing key or generate a new one. Navigate to the **[!DNL Keys]** tab and select **[!DNL Generate/Import]**.

![Generate a key](./assets/customer-managed-keys/view-keys.png)

## Register for the CMK app

CMK App and Identity registration:

```shell
curl -X POST \
  https://platform.adobe.io/data/infrastructure/manager/byok/app-registration \ 
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}'
```

## Install the CMK app to your Azure instance

Provisioning team gives a login link to customer that lets them give consent to add the app service principal to their Azure instance

Add the service principal to the keyvault
- Add role assignment
- Key Vault Crypto Service Encryption User
- Add Service principal to the role

API stuff goes here?

## Send the key URI to Adobe

```shell
curl -X POST \
  https://platform.adobe.io/data/infrastructure/manager/customer/config \ 
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -d '{
        "name": "config1",
        "type": "BYOK_CONFIG",
        "imsOrgId": "{IMS_ORG}",
        "configData": {
          "providerType": "AZURE_KEYVAULT",
          "keyVaultUri": "https://byok-mi-keyvault.vault.azure.net",
          "keyName": "key1"
        }
      }'
```

## Next steps
