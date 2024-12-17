---
title: RainFocus Attendee Profiles
description: Learn how to use the RainFocus Attendee Profiles destination connector to synchronize audience profiles with the RainFocus Global Attendee Profile.
last-substantial-update: 2024-12-17
exl-id: 27c3848c-411a-4305-a5d5-00b145b95287
---
# RainFocus Attendee Profiles {#rainfocus-destination}

## Overview {#overview}

Use the [!DNL RainFocus Attendee Profiles] destination to stream customer profiles from Adobe Experience Platform into the [!DNL RainFocus] platform in order to create and update attendee profiles.

>[!IMPORTANT]
>
>The destination connector and documentation page are created and maintained by the [!DNL RainFocus] team. For any inquiries or update requests, please contact them directly at `clientcare@rainfocus.com` or visit the RainFocus [Help Center](https://help.rainfocus.com/hc/en-us).

## Use cases {#use-cases}

To help you better understand how and when you should use the RainFocus destination, here are sample use cases that Adobe Experience Platform customers can solve by using this destination.

### Use case #1 {#use-case-1}

A large enterprise technology company is due to open registration for its upcoming global expo and would like to push customer profiles to [!DNL RainFocus] in order to streamline the registration process.

### Use case #2 {#use-case-2}

A financial services brand is due to host a series of roadshows targeting new and existing customers. They have a series of audience segments with target customers in Adobe Experience Platform. Using the [!DNL RainFocus] Destination Connector, they are able to easily send those profiles to [!DNL RainFocus] for activation.

## Prerequisites {#prerequisites}

Before you can use the [!DNL RainFocus] destination, make sure to meet the following prerequisites:
  
* Create a [!DNL RainFocus] API Profile with OAuth (Global). 
  * The **Attendee Store** endpoint must be enabled. 
  * A **Client ID** and **Client Secret** will need to be generated.

You must also have a RainFocus **event code** identifier, into which you would like profiles sent to.

## Supported identities {#supported-identities}

[!DNL RainFocus] supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/features/namespaces.md).

|Target Identity|Description|Considerations|
|---|---|---|
|email_lc_sha256|Email addresses hashed with the SHA256 algorithm|Both plain text and SHA256 hashed email addresses are supported by Adobe Experience Platform. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation.|

{style="table-layout:auto"}

## Supported audiences {#supported-audiences}

This section describes which type of audiences you can export to this destination.

| Audience origin | Supported | Description | 
---------|----------|----------|
| [!DNL Segmentation Service] | ✓ | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).|
| Custom uploads | ✓ | Audiences [imported](../../../segmentation/ui/overview.md#import-audience) into Experience Platform from CSV files. |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Profile-based]** | You are exporting all members of a segment, together with the desired schema fields (for example: email address, phone number, last name), as chosen in the select profile attributes screen of the [destination activation workflow](/help/destinations/ui/activate-batch-profile-destinations.md#select-attributes).|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on segment evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

![Provide authentication details for the RainFocus Destination Connector](/help/destinations/assets/catalog/marketing-automation/rainfocus/rainfocus-destination-authentication.png)

* **[!UICONTROL Client ID]**: Fill in the [!DNL Client ID] provided by RainFocus API Profile.
* **[!UICONTROL Client secret]**: Fill in the [!DNL Client Secret] provided by RainFocus API Profile.
* **[!UICONTROL Environment]**: Specify which RainFocus environment you are connecting to, for example `dev`, `prod`.
* **[!UICONTROL Org ID]**: Provide the unique `orgid` for your instance of RainFocus.

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

![Provide connection details for the RainFocus Destination Connector](/help/destinations/assets/catalog/marketing-automation/rainfocus/rainfocus-configure-destination-details.png)

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL Event ID]**: Your [!DNL RainFocus] event code identifier, into which you would like profiles sent to.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate segments to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

Read [Activate profiles and segments to streaming segment export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audience segments to this destination.

### Map attributes and identities {#map}

The following target identity namespace(s) must be mapped depending on the use case:

* **Email** must be mapped as a target field using **Target field > Select identity namespace > email**

![How to map profile and identity fields](/help/destinations/assets/catalog/marketing-automation/rainfocus/rainfocus-destination-mapping.png)

It is recommended to map additional profile fields, as this will ensure the attendee profile in [!DNL RainFocus] is fully populated. The following target fields are available from [!DNL RainFocus]:

| Target Field | Description |
|------------|-------------|
| `address1`   | The first line of the street address |
| `address2`   | The second line of the street address (if applicable) |
| `city`       | The city name |
| `companyname`| The name of the company |
| `countryid`  | An ISO 3166-1 alpha-2 country code identifier for the country |
| `email`      | The email address |
| `firstname`  | The person's first name |
| `lastname`   | The person's last name |
| `jobtitle`   | The person's job title |
| `phone`      | The phone number |
| `state`      | The FIPS state alpha code for the state or province |
| `zip`        | The postal code or ZIP code |

{style="table-layout:auto"}

## Exported data / Validate data export {#exported-data}

Once a set of profiles has been sent to [!DNL RainFocus], use the API Profile logging in [!DNL RainFocus] to validate that the profiles have been ingested successfully. 

![View logs in the API Profile in RainFocus](/help/destinations/assets/catalog/marketing-automation/rainfocus/rainfocus-destination-api-profile.png)

![Validate that profiles have been successfully ingested](/help/destinations/assets/catalog/marketing-automation/rainfocus/rainfocus-destination-api-logging.png)

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

* [RainFocus Streaming Source Connector](https://experienceleague.adobe.com/en/docs/experience-platform/sources/connectors/analytics/rainfocus)
