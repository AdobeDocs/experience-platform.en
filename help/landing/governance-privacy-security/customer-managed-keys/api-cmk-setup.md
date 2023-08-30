---
title: Setup and Configure Customer-Managed Keys using the API
description: Learn how to set up your CMK app with your Azure tenant and send your encryption key ID to Adobe Experience Platform.
---
# Setup and configure customer-managed keys using the API

This document covers the process for enabling the customer-managed keys (CMK) feature in Platform using the API. For instructions on how to complete this process using the UI, refer to the [UI CMK setup document](./ui-cmk-setup.md).

## Prerequisites

In order to enable CMK, your [!DNL Azure] Key Vault must be configured with the following settings:

* [Enable purge protection](https://learn.microsoft.com/en-us/azure/key-vault/general/soft-delete-overview#purge-protection)
* [Enable soft-delete](https://learn.microsoft.com/en-us/azure/key-vault/general/soft-delete-overview)
* [Configure access using [!DNL Azure] role-based access control](https://learn.microsoft.com/en-us/azure/role-based-access-control/)
* [Configure an [!DNL Azure] Key Vault](./azure-key-vault-config.md)

## Set up the CMK app {#register-app}

After you have your key vault configured, the next step is to register for the CMK application that will link to your [!DNL Azure] tenant.

### Getting started

Registering the CMK app requires you to make calls to Platform APIs. For details on how to gather the required authentication headers to make these calls, see the [Platform API authentication guide](../../landing/api-authentication.md).

While the authentication guide provides instructions on how to generate your own unique value for the required `x-api-key` request header, all API operations in this guide use the static value `acp_provisioning` instead. You must still provide your own values for `{ACCESS_TOKEN}` and `{ORG_ID}`, however.

In all API calls shown in this guide, `platform.adobe.io` is used as the root path, which defaults to the VA7 region. If your organization uses a different region, `platform` must be followed by a dash and the region code assigned to your organization: `nld2` for NLD2 or `aus5` for AUS5 (for example: `platform-aus5.adobe.io`). If you do not know your organization's region, please contact your system administrator.

### Fetch an authentication URL

To start the registration process, make a GET request to the app registration endpoint to fetch the required authentication URL for your organization.

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/infrastructure/manager/byok/app-registration \ 
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: acp_provisioning' \
  -H 'x-gw-ims-org-id: {ORG_ID}'
```

**Response**

A successful response returns an `applicationRedirectUrl` property, containing the authentication URL.

```json
{
    "id": "byok",
    "name": "acpebae9422Caepcmkmultitenantapp",
    "applicationUri": "https://adobe.com/acpebae9422Caepcmkmultitenantapp",
    "applicationId": "e463a445-c6ac-4ca2-b36a-b5146fcf6a52",
    "applicationRedirectUrl": "https://login.microsoftonline.com/common/oauth2/authorize?response_type=code&client_id=e463a445-c6ac-4ca2-b36a-b5146fcf6a52&redirect_uri=https://adobe.com/acpebae9422Caepcmkmultitenantapp&scope=user.read"
}
```

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

## Enable the encryption key configuration on Experience Platform {#send-to-adobe}

After installing the CMK app on [!DNL Azure], you can send your encryption key identifier to Adobe. Select **[!DNL Keys]** in the left navigation, followed by the name of the key you want to send.

![Select key](../images/governance-privacy-security/customer-managed-keys/select-key.png)

Select the latest version of the key and its details page appears. From here you can optionally configure the permitted operations for the key. At a minimum, the key must be granted the **[!DNL Wrap Key]** and **[!DNL Unwrap Key]** permissions.

The **[!UICONTROL Key Identifier]** field displays the URI identifier for the key. Copy this URI value for use in the next step.

![Copy key URL](../images/governance-privacy-security/customer-managed-keys/copy-key-url.png)

Once you have obtained the key vault URI, you can send it using a POST request to the CMK configuration endpoint.

>[!NOTE]
>
>Only the key vault and key name are stored with Adobe, not the key version.

**Request**

```shell
curl -X POST \
  https://platform.adobe.io/data/infrastructure/manager/customer/config \ 
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: acp_provisioning' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -d '{
        "name": "Config1",
        "type": "BYOK_CONFIG",
        "imsOrgId": "{ORG_ID}",
        "configData": {
          "providerType": "AZURE_KEYVAULT",
          "keyVaultKeyIdentifier": "https://adobecmkexample.vault.azure.net/keys/adobeCMK-key/7c1d50lo28234cc895534c00d7eb4eb4"
        }
      }'
```

| Property | Description |
| --- | --- |
| `name` | A name for the configuration. Ensure that you remember this value as it will be required to check the configuration's status at a [later step](#check-status). The value is case-sensitive. |
| `type` | The configuration type. Must be set to `BYOK_CONFIG`. |
| `imsOrgId` | Your organization ID. This must be the same value as provided under the `x-gw-ims-org-id` header. |
| `configData` | Contains the following details about the configuration:<ul><li>`providerType`: Must be set to `AZURE_KEYVAULT`.</li><li>`keyVaultKeyIdentifier`: The key vault URI that you copied [earlier](#send-to-adobe).</li></ul> |

**Response**

A successful response returns the details of the configuration job.

```json
{
  "id": "4df7886b-a122-4391-880b-47888d5c5b92",
  "config": {
    "configData": {
      "keyVaultUri": "https://adobecmkexample.vault.azure.net",
      "keyVaultKeyIdentifier": "https://adobecmkexample.vault.azure.net/keys/adobeCMK-key/7c1d50lo28234cc895534c00d7eb4eb4",
      "keyVersion": "7c1d50lo28234cc895534c00d7eb4eb4",
      "keyName": "Config1",
      "providerType": "AZURE_KEYVAULT"
    },
    "name": "acpcf978863Aaepcmkmultitenantapp",
    "type": "BYOK_CONFIG",
    "imsOrgId": "{IMS_ORG}",
    "status": "NEW"
  },
  "status": "CREATED"
}
```

The job should should complete processing within a few minutes.

## Verify the configuration's status {#check-status}

To check the status of the configuration request, you can make a GET request.

**Request**

You must append the `name` of the configuration you want to check to the path (`config1` in the example below) and include a `configType` query parameter set to `BYOK_CONFIG`.

```shell
curl -X GET \
  https://platform.adobe.io/data/infrastructure/manager/customer/config/config1?configType=BYOK_CONFIG \ 
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: acp_provisioning' \
  -H 'x-gw-ims-org-id: {ORG_ID}'
```

**Response**

A successful response returns the status of the job.

```json
{
  "name": "acpcf978863Aaepcmkmultitenantapp",
  "type": "BYOK_CONFIG",
  "status": "COMPLETED",
  "configData": {
    "keyVaultUri": "https://adobecmkexample.vault.azure.net",
    "keyVaultKeyIdentifier": "https://adobecmkexample.vault.azure.net/keys/adobeCMK-key/7c1d50lo28234cc895534c00d7eb4eb4",
    "keyVersion": "7c1d50lo28234cc895534c00d7eb4eb4",
    "keyName": "Config1",
    "providerType": "AZURE_KEYVAULT"
  },
  "imsOrgId": "{IMS_ORG}",
  "subscriptionId": "cf978863-7325-47b1-8fd9-554b9fdb6c36",
  "id": "4df7886b-a122-4391-880b-47888d5c5b92",
  "rowType": "BYOK_KEY"
}
```

The `status` attribute can have one of four values with the following meanings:

1. `RUNNING`: Validates that Platform has the ability to access the key and key vault.
1. `UPDATE_EXISTING_RESOURCES`: The system is adding the key vault and key name to the datastores across all sandboxes in your organization.
1. `COMPLETED`: The key vault and key name have been added to the datastores.
1. `FAILED`: A problem occurred, primarily related to the key, key vault, or multi-tenant app setup.


