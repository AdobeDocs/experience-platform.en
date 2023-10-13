---
title: Medallia connection
description: Activate profiles for targeted Medallia surveys and feedback collection to better understand customer needs and expectations.
exl-id: 2c2766eb-7be1-418c-bf17-d119d244de92
---
# Medallia connection

## Overview {#overview}

Activate profiles for targeted Medallia surveys and feedback collection to better understand customer needs and expectations.

>[!IMPORTANT]
>
>This destination connector and documentation page are created and maintained by the Medallia team. For any inquiries or update requests, please contact them directly at adobe-integrations@medallia.com.

## Use cases {#use-cases}

To help you better understand how and when you should use the Medallia destination, here are sample use cases that Adobe Experience Platform customers can solve by using this destination.

### Use case #1

A B2B brand wants to evaluate and streamline its onboarding program. They'd like to send personalized surveys in real-time to clients who just completed the onboarding process.

### Use case #2

A retailer is looking to better understand customer preferences for order fulfillment. They want to send a short 1-question SMS survey to customers who have made online and in-store purchases over the past month.

## Prerequisites {#prerequisites}

The following information is required to establish the Medallia connection:
* **OAuth Token Endpoint URL**
* **Client ID**
* **Client Secret**
* **API Gateway URL**
* **Import API Name**

Work with your Medallia delivery team to obtain these details.

## Supported identities {#supported-identities}

Medallia supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/namespaces.md).

|Target Identity|Description|Considerations|
|---|---|---|
|email|Email address|Select the email target identity when you want to send email-invitation surveys. When a profile is associated with multiple email addresses, Medallia will trigger the invitation to the first email only.|
|phone|Phone numbers hashed in E.164 format |Select the phone target identity when you want to send SMS-based surveys. The phone number must be in E.164 format, which includes a plus sign (+), an international country calling code, a local area code, and a phone number. For example: (+)(country code)(area code)(phone number). When a profile is associated with multiple phone numbers, Medallia will trigger the invitation to the first phone number only.|

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Profile-based]** | You are exporting all newly qualified members of a segment, together with the desired schema fields (for example: email address, phone number, last name), as chosen in the select profile attributes screen of the [destination activation workflow](/help/destinations/ui/activate-batch-profile-destinations.md#select-attributes).|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

* **[!UICONTROL OAuth Token Endpoint URL]**: Typically takes the form of https://instance.medallia.tld/oauth/tenant/token.
* **[!UICONTROL Client ID]**: Obtain from your Medallia delivery team.
* **[!UICONTROL Client Secret]**: Obtain from your Medallia delivery team.

![Image showing the authentication screen for this destination.](/help/destinations/assets/catalog/voice/medallia-destination-oauth.png)

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL API Gateway URL]**: Obtain from your Medallia delivery team. Typically takes the form of https://instance-tenant.apis.medallia.com.
*  **[!UICONTROL Import API Name]**: Obtain from your Medallia delivery team. Name of the Medallia Import API (also known as Web Feed) to be used in this connection. You can activate different audiences to different Import APIs to trigger different survey programs.

![Image showing the destination details screen for this destination.](/help/destinations/assets/catalog/voice/medallia-destination-details.png)

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

Read [Activate profiles and audiences to streaming audience export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audiences to this destination.

### Map attributes and identities {#map}

The following target identity namespace(s) must be mapped depending on the use case:
* For email-based surveys, **email** must be mapped as a target field using **Target field** > **Select identity namespace** > **email**
* For SMS-based surveys, **phone** must be mapped as a target field using **Target field** > **Select identity namespace** > **phone**. Phone numbers must be in E.164 format, which includes a plus sign (+), an international country calling code, a local area code, and a phone number

It is strongly recommended that you also map additional target custom attributes to create personalized surveys and append additional information about the customer to the survey record:

* Personalized surveys typically address the customer by name
    *  Map the customer's first name to **Target field** > **Select custom attributes** > **Attribute name** > **firstname**
    *  Map the customer's last name to **Target field** > **Select custom attributes** > **Attribute name** > **lastname**
* Add mappings for any other target custom attributes as desired

![Image showing a sample mapping for identities and attributes.](/help/destinations/assets/catalog/voice/medallia-destination-mapping.png)

>[!IMPORTANT]
> 
> Share with your Medallia delivery team the exact **Attribute names** for every target custom attribute you map using **Target field** > **Select custom attributes** > **Attribute name**. You may wish to take a screenshot of the mapping page to share directly.

## Exported data {#exported-data}

Once you have activated your segment(s) to the destination, inform your Medallia delivery team, who will be able to validate the exported data from Adobe Experience Platform to Medallia. Note that surveys can only be activated within Medallia after successful data verification; prior to this, data will be exported to Medallia but will not trigger surveys to customers.

A sample JSON of the exported data is provided below, which uses the example mapping from the screenshot above in the **Map attributes and identities** section:

```json
[
    {
        "profile_raw_encoded": "eyJhdHRyaWJ1dGVzIjp7ImZpcnN",
        "email": "johnsmith@example.com",
        "aep_segments_new": ["c1c3edcc-07cb-4f66-b5dd-aff485148aba"],
        "aep_segments_existing": [],
        "aep_segments_removed": [],
        "firstname":  "John" ,
        "lastname":  "Smith",
        "contactId": "jsmith120002",
    }
]
```

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, see the [Data Governance overview](/help/data-governance/home.md).
