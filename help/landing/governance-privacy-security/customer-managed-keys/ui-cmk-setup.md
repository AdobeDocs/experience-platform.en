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


