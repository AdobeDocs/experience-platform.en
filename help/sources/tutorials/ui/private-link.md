---
title: Azure Private Link Support in the UI
description:
---
# Azure Private Link Support in the UI


The problem:

* Adobe Experience Platform supports data ingestion through public network connections.
* Customers are concerned with security and prefer to use a private network for extra data protection.
* Currently, Experience Platform doesn't support private endpoints and customers are unable to fully adopt the product.

The solution:

* Utilize Azure Data Factory to create a virtual network and establish a private endpoint to connect to the data source over a Microsoft-provided network.

Current support includes: 

* Azure Blob Storage
* ADLS Gen2
* Azure File Storage
* Snowflake (hosted on Azure)

1. Create the private endpoint
2. Create a source connection with a private endpoint
3. Enable interactive authoring

## Create a private endpoint

Select **[!UICONTROL Private endpoints]** from the menu of tabs in the sources workspace.

Use the interface to view existing private endpoints. Here you can view information on existing private endpoints, such as their ID, corresponding source, and status.

Select **[!UICONTROL Create private endpoint]** and select the source that you want to use. Next, provide values for the following properties:

| Property | Description |
| --- | --- |
| `name` | The name of your private endpoint. |
| `subscriptionId` | The ID associated with your [!DNL Azure] subscription. For more information, read the [!DNL Azure] guide on [retrieving your subscription and tenant IDs from the [!DNL Azure Portal]](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id). |
| `resourceGroupName` | The name of your resource group on [!DNL Azure]. A resource group contains related resources for an [!DNL Azure] solution. For more information, read the [!DNL Azure] guide on [managing resource groups](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal). | 
| `resourceGroup` | The name of your resource. In [!DNL Azure], a resource refers to instances like virtual machines, web apps, and databases. For more information, read the [!DNL Azure] guide on [understanding the [!DNL Azure] resource manager](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview). |
| `fqdns` | The fully-qualified domain names for your source. **NOTE**: This property is required only when using the [!DNL Snowflake] source. |

{style="table-layout:auto"}

When finished, select **[!UICONTROL Submit]**.

Initially, the newly created endpoint will be pending until 

* Endpoint status is pending and must be approved from within the storage account.
* Once the endpoint is approved, the status will update to enabled.

## Create an account with a private endpoint

* Select a source, create a new account and enable the private endpoint toggle
* You must provide the correct details in order to connect via private endpoint
* Authentication will be pending
* Use the existing account page to view accounts created with private endpoints.
* Select the account that you want to use and then select the [!UICONTROL Enable Interactive Authoring] toggle.
* Interactive Authoring is an Azure capability used to test connections, browse folder lists, and preview data. This is required in order to use private endpoints.
* Processing may take a few minutes.
* Toggle cannot be disabled, but will automatically disable after 60 minutes.
* Select Next to continue the workflow.