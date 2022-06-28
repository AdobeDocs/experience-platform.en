---
title: Pega Customer Decision Hub connection
description: Use the Pega Customer Decision Hub destination in Adobe Experience Platform to send profile segment membership data to Pega Customer Decision Hub (Pega CDH) for Next Best Action (NBA) decisioning
---

# Pega Customer Decision Hub connection



## Overview {#overview}

Send profile segment membership data to Pega Customer Descision Hub (Pega CDH) for Next Best Action (NBA) decisioning. 

Adobe Experience Platform Profile Segment membership feed into Pega can be used as predictors in Pega CDH’s adaptive models and help deliver the right contextual and behavioral data for NBA decisioning purposes.

## Use cases 

To help you better understand how and when you should use the Pega CDH destination, here are sample use cases that Adobe Experience Platform customers can solve by using this destination.

### Use case #1

*In Telco:*

*A marketer wants to leverage insights from Data Science model-based NBA as delivered by Pega CDH for customer engagement, Pega CDH is heavily reliant on Customer Intent – for example "Interested_In_5G", "Interested_in_Unlimited_Dataplan" or "Interest_in_iPhone_accessories".*

### Use case #2

*In Financial Services:*

*A marketer wants to optimize the offers for customers who subscribed or unsubscribed for Pension Plan or Retirement Plan News Letters. The Financial Services can ingest CustomerID's from their own CRM to Adobe Experience Platform, build segments from their own offline data, and send profiles that are entering and exiting the segments to Pega CDH, for Next Best Action (NBA) decisioning in outbound channels.*

## Prerequisites {#prerequisites}

To use the  Pega Customer Decision Hub destination to export data out of Experience Platform, you must meet the following prerequisites:

* You must have configured the Adobe Segment Membership Component in your Pega CDH instance.
* You must have configured OAuth 2.0 Client Registration in your Pega CDH instance using Client Credentials grant type.
* You must have configured to run Real-time processing of Adobe Segment Membership Data flow in your CDH instance.

## Supported identities {#supported-identities}

Pega CDH supports the activation of Custom user ID described in the table below. Learn more about [identities](/help/identity-service/namespaces.md).

|Target Identity|Description|Considerations|
|---|---|---|
|CustomerID|Custom user IDs|Select Pega CDH  target identity when your source identity is a custom namespace.|

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Profile-based]** | You are exporting all members of a segment with identifier (CustomerID), attributes (last name, first name, location) and Segment membership data.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on segment evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/connect-destination.html). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

#### OAuth 2 Client Credentials authentication {#oauth-2-client-credentials-authentication}

If you select the **[!UICONTROL OAuth 2 Client Credentials]** authentication type to connect to your HTTP endpoint, input the fields below and select **[!UICONTROL Connect to destination]**:

* **[!UICONTROL Access Token URL]**: The URL on your side which issues access tokens and, optionally, refresh tokens.
* **[!UICONTROL Client ID]**: The [!DNL client ID] that your system assigns to Adobe Experience Platform.
* **[!UICONTROL Client Secret]**: The [!DNL client secret] that your system assigns to Adobe Experience Platform.

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required fields and select **[!UICONTROL Next]**.

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL URL]**: Pega CDH Rest Segment membership Endpoint URL.

## Activate segments to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

Read [Activate profiles and segments to streaming segment export destinations](../../ui/activate/activate-segment-streaming-destinations.md) for instructions on activating audience segments to this destination.

## Exported data / Validate data export {#exported-data}
Your exported [!DNL Experience Platform] data lands in your [!DNL HTTP] destination in JSON format. For example, the export below contains a profile that has qualified for a certain segment, is a member of another two segments, and exited another segment. The export also includes the profile attribute first name, last name, date of birth, and personal email address. The identitifier for this profile is CustomerID.

```json
{
  "CustomerID": "CUSTOMER-1021",
  "Attributes": {
    "BirthDate": "1975-08-29",
    "FirstName": "John",
    "LastName":"Doe"
  },
  "Segments": [{
    "SegmentID": "04a81716-43d6-4e7a-a49c-f1d8b3129ba91",
    "Name": "Interested in iPhone 13",
    "LastQualificationTime": "2020-05-25T21:24:39Z",
    "Status": "existing",
    "Version": "15",
    "ValidUntil": "2020-06-25T21:24:39Z",
    "Namespace": "AAM"
    }, {
    "SegmentID": "53cba6b2-a23b-454a-8069-fc41308f1c0f",
    "Name": "Interested in Unlimited Data Plan",
    "LastQualificationTime": "2020-05-25T23:37:33Z",
    "Status": "exited",
    "Version": "3",
    "ValidUntil": "2020-07-25T23:37:33Z",
    "Namespace": "AAM"
    }]
 }

```

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, see the [Data Governance overview](/help/data-governance/home.md).

