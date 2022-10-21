---
title: Pega Profile Export Connector
description: Use the Pega Profile Export Connector for S3 in Adobe Experience Platform to export full and/or incremental profile data to Amazon S3 cloud storage. 
---

# Pega Connector for S3

## Overview {#overview}

Use the [!DNL Pega Profile Export Connector] in Adobe Experience Platform to create a live outbound connection to your [!DNL Amazon Web Services] (AWS) S3 storage to periodically export CSV data files from Adobe Experience Platform into your own S3 buckets. In [!DNL Pega Customer Decision Hub], data jobs can be scheduled to import profiles from S3 storage to update Customer profile data source. This helps setup intitial export of profile data and also help sync up new profiles added from Adobe Experience Platform into Pega Customer Decision Hub.  With up to date profile data in Customer Decision Hub enhances the Pega next-best-action decisioning process both for engagement policies as well as predictors in Adaptive Models.

>[!IMPORTANT]
>
>This documentation page was created by Pegasystems. For any inquiries or update requests, please contact Pega directly [here](mailto:support@pega.com).

## Use cases 

To help you better understand how and when you should use the [!DNL  Pega Profile Export Connector] destination, here are sample use cases that Adobe Experience Platform customers can solve by using this destination.

### Use case 1

A marketer wants up-to-date profile data in Adobe Customer Data Platform available in Pega Customer Decision Hub that enhances the Pega next-best-action decisioning process both for engagement policies as well as predictors in Adaptive Models.

### Use case 2

A marketer wants to setup Pega Customer Decision Hub with profile data loaded from Adobe Experience Platform.

## Prerequisites {#prerequisites}

Before you can use this destination to export data out of Adobe Experience Platform and import profiles into Pega [!DNL Pega Customer Decision Hub], make sure you complete the following prerequisites

* Configure [!DNL Amazon S3] bucket and the folder path to be used for export and import of data fles.
* Configure the [!DNL Amazon S3] access key and [!DNL Amazon S3] secret key: In [!DNL Amazon S3], generate an `access key - secret access key` pair to grant Platform access to your [!DNL Amazon S3] account.
* Make sure your [!DNL Pega Customer Decision Hub] instance is upgraded to version 8.8 or higher. 

## Supported identities {#supported-identities}

[!DNL Pega Customer Decision Hub] supports the activation of custom user IDs described in the table below. For more details, see [identities](/help/identity-service/namespaces.md).

|Target Identity|Description|
|---|---|
|*CustomerID*|Common User Identifier that uniquely identifies a profile in [!DNL Pega Customer Decision Hub] and Adobe Experience Platform|

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Profile-based]** | You are exporting all members of a segment, together with the desired schema fields (for example: email address, phone number, last name), as chosen in the select profile attributes screen of the [destination activation workflow](../../ui/activate-batch-profile-destinations.md#select-attributes).|
| Export frequency | **[!UICONTROL Batch]** | Batch destinations export files to downstream platforms in increments of three, six, eight, twelve, or twenty-four hours. Read more about [batch file-based destinations](/help/destinations/destination-types.md#file-based).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

*Add the fields that customers must fill in when authenticating to your destination. These fields are destination-specific and depend on your configuration in Destination SDK. Your destination's fields may not be the same as the ones listed below. Please also include a screenshot similar to the sample screenshot shown below.*

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

![Add a link here to one or more sample screenshots that show users how to authenticate to your destination](/help/destinations/destination-sdk/docs-framework/assets/authenticate-destination.png)

* **[!UICONTROL Bearer token]**: Fill in the bearer token to authenticate to the destination.

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

*Delete as appropriate - If you are documenting a new streaming destination, keep the first paragraph below. If you are documenting a new file-based destination, keep the second paragraph.*

Read [Activate profiles and segments to streaming segment export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audience segments to this destination.

Read [Activate audience data to batch profile export destinations](/help/destinations/ui/activate-batch-profile-destinations.md) for instructions on activating audience segments to this destination.
### Map attributes and identities {#map}

*Add information about supported mappings between source and target fields in the Mapping step of the activation workflow. Your destination might support exporting profile attributes, identity namespaces, or both. Some fields might be mandatory. Target attributes might be predefined or custom. Call out the important caveats and use examples, preferably with screenshots. Two examples of destination pages which you can use as reference are:*

* *[Pega](https://experienceleague.adobe.com/docs/experience-platform/destinations/catalog/personalization/pega.html?lang=en#mapping-example)*
* *[Medallia](https://experienceleague.adobe.com/docs/experience-platform/destinations/catalog/voice/medallia-connector.html?lang=en#map)*

## Exported data / Validate data export {#exported-data}

*Add a paragraph about how data is exported to your destination. This would help the customer make sure that they have correctly integrated with your destination. For example, you could provide a sample JSON like the one below. Or, you could provide screenshots and information from your destination's interface that show how customers should expect segments to be populating in the destination platform.*

```
{
  "person": {
    "email": "yourstruly@adobe.com"
  },
  "segmentMembership": {
    "ups": {
      "7841ba61-23c1-4bb3-a495-00d3g5fe1e93": {
        "lastQualificationTime": "2020-05-25T21:24:39Z",
        "status": "exited"
      },
      "59bd2fkd-3c48-4b18-bf56-4f5c5e6967ae": {
        "lastQualificationTime": "2020-05-25T23:37:33Z",
        "status": "existing"
      }
    }
  },
  "identityMap": {
    "ecid": [
      {
        "id": "14575006536349286404619648085736425115"
      },
      {
        "id": "66478888669296734530114754794777368480"
      }
    ],
    "email_lc_sha256": [
      {
        "id": "655332b5fa2aea4498bf7a290cff017cb4"
      },
      {
        "id": "66baf76ef9de8b42df8903f00e0e3dc0b7"
      }
    ]
  }
}

```

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

*You can provide further links to your product documentation or any other resources that you consider important for the customer to be successful.*
