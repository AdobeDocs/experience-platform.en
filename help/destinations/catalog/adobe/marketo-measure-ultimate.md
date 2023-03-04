# Marketo Measure Ultimate Destination {#mmu-destination}

## Overview {#overview}

Marketo Measure (formerly Bizible) gives marketers insight into which marketing efforts are the most effective in driving revenue and maximizing return on investment for their company. Marketo Measure is a marketing attribution solution that automatically tracks and reports on channel performance, providing visibility into which channels are driving the most customer engagement and allowing you to optimize your marketing spend accordingly.

The destination enables the B2B data flows from Adobe Experience Platform to Marketo Measure.

## Use cases {#use-cases}

To help you better understand how and when you should use the Marketo Measure destination, here are sample use cases that Adobe Experience Platform customers can solve by using this destination.

* Satisfies the complex data and performance reporting requirements of large enterprises.
* Enables B2B attribution reporting with multiple CRM and marketing automation systems. 
* Provides ease of bringing in 3rd party offline touchpoint data. 

## Prerequisites {#prerequisites}

* AEP Sandbox Mapping should be completed in the Marketo Measure Settings page. Without the Sandbox Mapping, the destination save will fail. 
* Only datasets of B2B XDM classes can be exported. For a given data source, only one dataset for each B2B XDM class is allowed. Each dataset can only be included in one data flow. 

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Dataset export]** | You are exporting raw datasets, which are not grouped or structured by audience interests or qualifications.|
| Export frequency | **[!UICONTROL Batch]** | Batch destinations export files to downstream platforms every two hours. Read more about [batch file-based destinations](/help/destinations/destination-types.md#file-based).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Fill in destination details {#destination-details}

*Add the fields that customers must fill in when configuring a new destination. These fields are destination-specific and depend on your configuration in Destination SDK. Your destination's fields may not be the same as the ones listed below. Please also include a screenshot similar to the sample screenshot shown below.*

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

![Add a link here to one or more sample screenshots that show users how to fill in details for your destination](/help/destinations/destination-sdk/docs-framework/assets/configure-destination-details.png)

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL Account ID]**: Your *YourDestination* account ID.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate segments to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

Read [(Beta) Export datasets](/help/destinations/ui/export-datasets.md) for extensive instructions on exporting datasets to this destination.

## Exported data / Validate data export {#exported-data}

To validate a successful dataset export, you can check that your dataset has successfully made it through to your [Snowflake datawarehouse](https://experienceleague.adobe.com/docs/marketo-measure/using/marketo-measure-data-warehouse/data-warehouse-access-reader-account.html?lang=en). 

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

*You can provide further links to your product documentation or any other resources that you consider important for the customer to be successful.*
