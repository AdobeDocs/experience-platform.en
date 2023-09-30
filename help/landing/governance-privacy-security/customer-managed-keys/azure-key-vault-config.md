---
title: Configure an Azure Key Vault
description: Learn how to create a new enterprise account with Azure, or use an existing enterprise account and create the Key Vault.
exl-id: 670e3ca3-a833-4b28-9ad4-73685fa5d74d
---
# Configure an [!DNL Azure] Key Vault

Customer-managed keys (CMK) only supports keys from a [!DNL Microsoft Azure] Key Vault. To get started, you must work with [!DNL Azure] to create a new enterprise account, or use an existing enterprise account and follow the steps below to create the Key Vault.

>[!IMPORTANT]
>
>Only the Premium and Standard service tiers for [!DNL Azure] Key Vault are supported. [!DNL Azure Managed HSM], [!DNL Azure Dedicated HSM] and [!DNL Azure Payments HSM] are not supported. Refer to the [[!DNL Azure] documentation](https://learn.microsoft.com/en-us/azure/security/fundamentals/key-management#azure-key-management-services) for more information on offered key management services.

>[!NOTE]
>
>The documentation below only covers the basic steps to create the Key Vault. Outside of this guidance, you should configure the Key Vault as per your organization's policies.

Log in to the [!DNL Azure] portal and use the search bar to locate **[!DNL Key vaults]** under the list of services.

![The search feature in [!DNL Microsoft Azure] with [!DNL Key vaults] highlighted in the search results.](../../images/governance-privacy-security/customer-managed-keys/access-key-vaults.png)

The **[!DNL Key vaults]** page appears after selecting the service. From here, select **[!DNL Create]**.

![The [!DNL Key vaults] dashboard in [!DNL Microsoft Azure] with [!DNL Create] highlighted.](../../images/governance-privacy-security/customer-managed-keys/create-key-vault.png)

Using the provided form, fill in the basic details for the Key Vault, including a name and an assigned resource group.

>[!WARNING]
>
>While most options can be left as their default values, **make sure that you enable the soft-delete and purge protection options**. If you do not turn on these features, you could risk losing access to your data if the Key Vault is deleted.
>
>![The [!DNL Microsoft Azure] [!DNL Create a Key Vault] workflow with soft delete and purge protection highlighted.](../../images/governance-privacy-security/customer-managed-keys/basic-config.png)

From here, continue going through the Key Vault creation workflow and configure the different options according to your organization's policies.

Once you arrive at the **[!DNL Review + create]** step, you can review the details of the Key Vault while it goes through validation. Once validation passes, select **[!DNL Create]** to complete the process.

![The Microsoft Azure Key vaults Review and create page with Create highlighted.](../../images/governance-privacy-security/customer-managed-keys/finish-creation.png)

## Configure networking options {#configure-network-options}

If your Key Vault is configured to restrict public access to certain virtual networks or disable public access entirely, you must grant [!DNL Microsoft] a firewall exception.

Select **[!DNL Networking]** in the left navigation. Under **[!DNL Firewalls and virtual networks]**, select the checkbox **[!DNL Allow trusted Microsoft services to bypass this firewall]**, then select **[!DNL Apply]**.

![The [!DNL Networking] tab of [!DNL Microsoft Azure] with [!DNL Networking] and [!DNL Allow trusted Microsoft surfaces to bypass this firewall] exception highlighted.](../../images/governance-privacy-security/customer-managed-keys/networking.png)

### Generate a key {#generate-a-key}

Once you have created a Key Vault, you can generate a new key. Navigate to the **[!DNL Keys]** tab and select **[!DNL Generate/Import]**.

![The [!DNL Keys] tab of [!DNL Azure] with [!DNL Generate import] highlighted.](../../images/governance-privacy-security/customer-managed-keys/view-keys.png)

Use the provided form to provide a name for the key, and select **RSA** for the key type. At a minimum, the **[!DNL RSA key size]** must be at least **3072** bits as required by [!DNL Cosmos DB]. [!DNL Azure Data Lake Storage] is also compatible with RSA 3027.

>[!NOTE]
>
>Remember the name that you provide for the key, as it is required to send the key to Adobe.

Use the remaining controls to configure the key you want to generate or import as desired. When finished, select **[!DNL Create]**.

![The Create a key dashboard with [!DNL 3072] bits highlighted.](../../images/governance-privacy-security/customer-managed-keys/configure-key.png)

The configured key appears in the list of keys for the vault.

![The [!DNL Keys] workspace with the key name highlighted.](../../images/governance-privacy-security/customer-managed-keys/key-added.png)

## Next steps

To continue the one-time process for setting up the customer-managed keys feature, continue with either the [API](./api-set-up.md) or [UI](./ui-set-up.md) customer-managed keys setup guides.
