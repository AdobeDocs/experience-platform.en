---
keywords: streaming, Qualtrics destination
title: Qualtrics Automations
description: Synchronize experience and operational customer data to unlock personalization at scale. Use the aggregation of multiple sources of operational data in Adobe Experience Platform as an input in Qualtrics Experience iD to better understand your customers and enable targeted outreach to close the gap when it comes to understanding intent, emotion and experience drivers.
last-substantial-update: 2023-10-25
exl-id: 3289ed4c-8542-4e22-a574-e49cc6527a24
---
# Qualtrics Automations

## Overview {#overview}

Synchronize experience and operational customer data to unlock personalization at scale. 

Use the aggregation of multiple sources of operational data in Adobe Experience Platform as an input in Qualtrics Experience iD to better understand your customers and enable targeted outreach to close the gap when it comes to understanding intent, emotion and experience drivers.

>[!IMPORTANT]
>
>The destination connector and documentation page are created and maintained by the Qualtrics team. For any inquiries or update requests, please contact them directly by logging into the [Customer Success Hub](https://support-portal.qualtrics.com/).

## Use cases {#use-cases}

To help you better understand how and when you should use the *Qualtrics Automations* destination, here are sample use cases that Adobe Experience Platform customers can solve by using this destination.

### Use case #1 {#use-case-1}

**Scenario**: A company wants to measure customer satisfaction across various digital touchpoints, such as their website and mobile app. They use Adobe Experience Platform to trigger Qualtrics surveys based on user interactions, such as completing a purchase or visiting a specific webpage.

**Outcome**: By collecting real-time feedback, the company can make data-driven improvements to their customer experience, leading to increased satisfaction and loyalty.

### Use case #2 {#use-case-2}

**Scenario**: An organization aims to enhance its employee onboarding process. They utilize Adobe Experience Platform to gather feedback from new hires through Qualtrics surveys. Surveys are automatically triggered after a predefined onboarding period.

**Outcome**: Continuous feedback enables the organization to adapt and improve the onboarding process, resulting in better engagement and productivity among new employees.

## Prerequisites

Before setting up the Qualtrics destination in Adobe Experience Platform, please ensure the following prerequisites have been met:

* You have a Qualtrics account.
* You have obtained the necessary API token from Qualtrics.

### Obtaining an API Token

Below are the necessary steps for obtaining an API token from Qualtrics.

1. Sign in to your Qualtrics account.
2. Go to **Account Settings**.
3. Select **Qualtrics IDs**.
4. On this page, look for the **API** section, it contains a **Token** field. This is the API Token, and will be required during destination setup.

## Supported identities {#supported-identities}

*Qualtrics Automations* supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/features/namespaces.md).

|Target Identity|Description|Considerations|
|---|---|---|
|email|Plain text email addresses|Only plain text email addresses are supported by Qualtrics.|
|external_id|Custom user IDs|Select this target identity when your source identity is a custom namespace.|

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Segment export]** | You are exporting all members of a segment (audience) with the identifiers (name, phone number, or others) used in the *Qualtrics Automations* destination.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on segment evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

As part of authentication you will need to provide a **Username** and **Password**. The username is your Qualtrics username, and the password is your Qualtrics account's API token. To retrieve the API token follow the instructions from the **Prerequisites** section above.

![Authentication](/help/destinations/assets/catalog/survey/qualtrics/authentication.png)

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL URL]**: The URL found in the [JSON Event](https://www.qualtrics.com/support/survey-platform/actions-module/json-events/#About) that triggers your [workflow in Qualtrics](https://www.qualtrics.com/support/survey-platform/actions-module/setting-up-actions/#About). See below screenshot for an example.

![URL](/help/destinations/assets/catalog/survey/qualtrics/json-event-url.png)

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

Read [Activate profiles and segments to streaming segment export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audience segments to this destination.

### Map attributes and identities {#map}

This destination has an open schema so you may send any properties to Qualtrics.

#### Map attributes

To add an attribute to your mapping, simply select **custom attributes** when adding a new mapping. You may enter any name for your attribute. Qualtrics encourages the *camelCase* naming convention for attribute names (see below screenshot for an example).

![Custom attribute](/help/destinations/assets/catalog/survey/qualtrics/custom-attribute.png)

See below screenshot for an example of possible attribute mappings.

![Example mappings](/help/destinations/assets/catalog/survey/qualtrics/example-mappings.png)

#### Map identities

It's mandatory to select an identity namespace for this destination. The two possible source field to target field mappings are:

| Source Field       | Target Field          |
|--------------------|-----------------------|
| IdentityMap: Email | Identity: email       |
| IdentityMap: ECID  | Identity: external_id |

See below screenshot for an example.

![Identity namespace](/help/destinations/assets/catalog/survey/qualtrics/identity-namespace.png)

## Exported data / Validate data export {#exported-data}

As previously mentioned, this destination uses an open schema, so any properties may be sent to Qualtrics. Nonetheless, the data sent to Qualtrics will follow the below structure:

```json
{
  "person": {
    "name": {
      "firstName": "Dave"
    }
  },
  "mobilePhone": {
    "number": "0123456789"
  },
  "identityMap": {
    "Email": [
      {
        "id": "Email-2Sf6C"
      }
    ]
  },
  "segmentMembership": {
    "ups": {
      "046456e3b-18e1-48a6-9bda-d68547861283": {
        "lastQualificationTime": "2023-09-05T10:43:55.602687Z",
        "status": "realized"
      },
      "007844dd1-9e5d-4531-a4ee-05470doe759dd": {
        "lastQualificationTime": "2023-09-05T10:43:55.602689Z",
        "status": "realized"
      }
    }
  }
}
```

To verify data has been ingested in Qualtrics, head over to the workflow containing your **JSON Event**, from there, go to **Run history** where you should see the executions of your workflow. Each workflow has a status of either **Succeeded** or **Failed**. Selecting a particular execution will reveal more information about it, allowing you to troubleshoot should you run into any issues.

If there are no executions visible in **Run history**, it means the workflow hasn't been triggered yet, indicating that there may be an issue. Ensure the workflow is enabled, and that the **URL** in the destination in Adobe Experience Platform is correct. Workflow executions aren't instant, so you may have to wait a short while before it completes.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).
