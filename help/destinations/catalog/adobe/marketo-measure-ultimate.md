---
title: Marketo Measure Ultimate destination
description: Learn how to connect and activate data to the Marketo Measure Ultimate destination.
last-substantial-update: 2023-03-07
exl-id: b4220841-8908-41ff-b977-dbeebfa787c8
---
# Marketo Measure Ultimate Destination {#mmu-destination}

## Overview {#overview}

Marketo Measure (formerly Bizible) gives marketers insight into which marketing efforts are the most effective in driving revenue and maximizing return on investment for their company. Marketo Measure is a marketing attribution solution that automatically tracks and reports on channel performance, providing visibility into which channels are driving the most customer engagement and allowing you to optimize your marketing spend accordingly.

The destination enables the business-to-business (B2B) data flows from Adobe Experience Platform to Marketo Measure. The card is only available to Marketo Measure Ultimate customers. 

## Use cases {#use-cases}

To help you better understand how and when you should use the Marketo Measure destination, here are sample use cases that Adobe Experience Platform customers can solve by using this destination. This integration:

* Satisfies the complex data and performance reporting requirements of large enterprises.
* Enables B2B attribution reporting with multiple CRM and marketing automation systems. 
* Provides ease of bringing in 3rd party offline touchpoint data. 

## Prerequisites {#prerequisites}

Note the following prerequisites for the Marketo Measure destination:

* Experience Platform Sandbox Mapping should be completed in the Marketo Measure settings page by the Admin. Without the Sandbox Mapping, you cannot complete the workflow to connect to the destination save and activate data. 
* Only datasets of B2B XDM classes can be exported (see, for example, the XDM Business Account and XDM Business Opportunity classes). You can't bring in multiple datasets of the same B2B XDM class for a given data source. 
* Each dataset can only be included in one dataflow to the Marketo Measure destination. 

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Dataset export]** | You are exporting raw datasets, which are not grouped or structured by audience interests or qualifications. Read more about [dataset exports](/help/destinations/destination-types.md#dataset-export-destinations).|
| Export frequency | **[!UICONTROL Batch]** | This batch destination exports files to the Marketo Measure platform every two hours. Read more about [scheduling dataset exports](/help/destinations/ui/export-datasets.md#scheduling).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the section below.

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.

![The Connect to destination workflow for the Marketo Measure destination.](/help/destinations/assets/catalog/adobe/marketo-measure-ultimate/marketo-measure-connect-to-destination.png)

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Export datasets to this destination {#export-datasets}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL Manage and Activate Dataset Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

Read the [Export datasets](/help/destinations/ui/export-datasets.md) tutorial for extensive instructions on exporting datasets to this destination.

## Validate data export {#exported-data}

To validate a successful dataset export, you can check that your dataset has successfully made it through to your [Snowflake data warehouse](https://experienceleague.adobe.com/docs/marketo-measure/using/marketo-measure-data-warehouse/data-warehouse-access-reader-account.html). 

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).
