---
title: Configure an Azure Key Vault
description: Learn how to create a new enterprise account with Azure, or use an existing enterprise account and create the Key Vault.
---
# Configure an Azure Key Vault

## Configure an [!DNL Azure] Key Vault {#create-key-vault}

Customer-managed keys (CMK) only supports keys from a [!DNL Microsoft Azure] Key Vault. To get started, you must work with [!DNL Azure] to create a new enterprise account, or use an existing enterprise account  and follow the steps below to create the Key Vault.

>[!IMPORTANT]
>
>Only the Premium and Standard service tiers for [!DNL Azure] Key Vault are supported. [!DNL Azure Managed HSM], [!DNL Azure Dedicated HSM] and [!DNL Azure Payments HSM] are not supported. Refer to the [[!DNL Azure] documentation](https://learn.microsoft.com/en-us/azure/security/fundamentals/key-management#azure-key-management-services) for more information on offered key management services.

>[!NOTE]
>
>The documentation below only covers the basic steps to create the key vault. Outside of this guidance, you should configure the key vault as per your organization's policies.

Log in to the [!DNL Azure] portal and use the search bar to locate **[!DNL Key vaults]** under the list of services.

![Search and select key vaults](../images/governance-privacy-security/customer-managed-keys/access-key-vaults.png)

The **[!DNL Key vaults]** page appears after selecting the service. From here, select **[!DNL Create]**.

![Create key vault](../images/governance-privacy-security/customer-managed-keys/create-key-vault.png)

Using the provided form, fill in the basic details for the key vault, including a name and an assigned resource group.

>[!WARNING]
>
>While most options can be left as their default values, **make sure that you enable the soft-delete and purge protection options**. If you do not turn these features on, you could risk losing access to your data if the key vault is deleted.
>
>![Enable purge protection](../images/governance-privacy-security/customer-managed-keys/basic-config.png)

From here, continue going through the key vault creation workflow and configure the different options according to your organization's policies.

Once you arrive at the **[!DNL Review + create]** step, you can review the details of the key vault while it goes through validation. Once validation passes, select **[!DNL Create]** to complete the process.

![Basic config for the key vault](../images/governance-privacy-security/customer-managed-keys/finish-creation.png)

### Configure networking options

If your key vault is configured to restrict public access to certain virtual networks or disable public access entirely, you must grant Microsoft a firewall exception.

Select **[!DNL Networking]** in the left navigation. Under **[!DNL Firewalls and virtual networks]**, select the checkbox **[!DNL Allow trusted Microsoft services to bypass this firewall]**, then select **[!DNL Apply]**.

![Basic config for the key vault](../images/governance-privacy-security/customer-managed-keys/networking.png)

### Generate a key {#generate-a-key}

Once you have created a key vault, you can generate a new key. Navigate to the **[!DNL Keys]** tab and select **[!DNL Generate/Import]**.

![Generate a key](../images/governance-privacy-security/customer-managed-keys/view-keys.png)

Use the provided form to provide a name for the key, and select **RSA** for the key type. At a minimum, the **[!DNL RSA key size]** must be at least **3072** bits as required by [!DNL Cosmos DB]. [!DNL Azure Data Lake Storage] is also compatible with RSA 3027.

>[!NOTE]
>
>Remember the name you provide for the key, as it will be used in later step when [sending the key to Adobe](#send-to-adobe).

Use the remaining controls to configure the key you want to generate or import as desired. When finished, select **[!DNL Create]**.

![Configure key](../images/governance-privacy-security/customer-managed-keys/configure-key.png)

The configured key appears in the list of keys for the vault.

![Key added](../images/governance-privacy-security/customer-managed-keys/key-added.png)

## Next steps

To continue the one-time process for setting up the customer managed keys feature, continue with either the [API](./api-cmk-setup) or [UI](./ui-cmk-setup) customer-managed keys setup guides.
