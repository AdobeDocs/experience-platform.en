---
title: Azure Private Endpoint Support in the UI
description: Learn how to create private endpoints using the sources workspace in the Experience Platform UI.
badge: Beta
---
# Create an [!DNL Azure] private endpoint in the UI

>[!AVAILABILITY]
>
>This feature is in beta and is currently only supported for the following sources:
>
>* [[!DNL Azure Blob Storage]](../../connectors/cloud-storage/blob.md)
>* [[!DNL ADLS Gen2]](../../connectors/cloud-storage/adls-gen2.md)
>* [[!DNL Azure File Storage]](../../connectors/cloud-storage/azure-file-storage.md)
>* [[!DNL Snowflake]](../../connectors/databases/snowflake.md)

You can use the [!DNL Azure] private endpoint feature of Adobe Experience Platform sources to establish a private endpoint in which your source can connect to. With this feature, you can ensure security and additional data protection when creating ingestion jobs and dataflows between your source and Experience Platform.

Read this guide to learn how you can use the sources workspace in the Experience Platform UI to create and use a private endpoint.

## Create a private endpoint

To get started with [!DNL Azure] private endpoints, navigate to the *[!UICONTROL Sources]* catalog of the Experience Platform UI and select **[!UICONTROL Private endpoints]** from the menu of tabs in the sources workspace.

![The sources catalog with "Private endpoints".](../../images/tutorials/private-links/catalog.png)

Use the interface to view information about existing private endpoints, such as their ID, associated source, and current status. To create a new private endpoint, select **[!UICONTROL Create private endpoint]**.

![The Private endpoints interface with "Create private endpoint" selected.](../../images/tutorials/private-links/private-endpoints.png)


Next, choose your desired source, and then enter values for the following properties:

| Property | Description |
| --- | --- |
| `name` | The name of your private endpoint. |
| `subscriptionId` | The ID associated with your [!DNL Azure] subscription. For more information, read the [!DNL Azure] guide on [retrieving your subscription and tenant IDs from the [!DNL Azure Portal]](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id). |
| `resourceGroupName` | The name of your resource group on [!DNL Azure]. A resource group contains related resources for an [!DNL Azure] solution. For more information, read the [!DNL Azure] guide on [managing resource groups](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal). | 
| `resourceGroup` | The name of your resource. In [!DNL Azure], a resource refers to instances like virtual machines, web apps, and databases. For more information, read the [!DNL Azure] guide on [understanding the [!DNL Azure] resource manager](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview). |
| `fqdns` | The fully-qualified domain names for your source. **NOTE**: This property is required only when using the [!DNL Snowflake] source. |

{style="table-layout:auto"}

When finished, select **[!UICONTROL Submit]**.

![The authentication window for creating a new private endpoint in the sources UI workspace.](../../images/tutorials/private-links/create-private-endpoint.png)

Initially, the newly created endpoint will be pending until approved by an administrator. Once approved, the endpoint status updates to [!UICONTROL Enabled].

## Create an account with a private endpoint

Navigate to the sources catalog and select a source that supports private endpoints. Next, create a new account with your source and during account authentication, select the **[!UICONTROL Private endpoint]** toggle. Provide your source's authentication credentials and then select **[!UICONTROL Connect to source]** and allow for a few minutes for your connection to be established.

>[!NOTE]
>
>If the [!UICONTROL Private endpoint] option is enabled, Experience Platform will check whether an approved private endpoint exists for the selected source. If no approved endpoint is found, you will not be able to establish a connection.

<!--- ![The new account authentication step with private endpoints enabled.] --->

Next, navigate to the [!UICONTROL Existing account] interface of your source. Use this interface to view a list of your existing accounts and their corresponding statuses. You can select the filter icon ![filter icon](../../../images/icons/filter.png) to display only the accounts that have been enabled to connect with a private endpoint.

![The existing account interface of the sources workflow with the accounts filtered to display only the ones enabled for a private endpoint connection.](../../images/tutorials/private-links/existing-private-endpoints.png)

Select the account you want to use, then enable **[!UICONTROL Interactive authoring]**. This toggle activates [!UICONTROL Interactive Authoring], an [!DNL Azure] feature that allows you to test connections, browse folder lists, and preview data. Enabling [!UICONTROL Interactive Authoring] is required for private endpoint connections. Note that you cannot manually turn off this toggle; it will automatically disable after 60 minutes.

[!UICONTROL Interactive Authoring] takes a few minutes to be enabled. Once the setting is activated, select **[!UICONTROL Next]** to proceed to the next step and select the data that you want to ingest.

![An existing account is selected and interactive authoring is enabled.](../../images/tutorials/private-links/interactive-authoring.png)

## Next steps

Now that you have successfully created a private endpoint, you can now create source connections and dataflows, and ingest data using private endpoints. Read the following guides for information on how to create dataflows in the UI:

* [Create a dataflow for a cloud storage source](../ui/dataflow/batch/cloud-storage.md)
* [Create a dataflow for a database source](../ui/dataflow/databases.md)