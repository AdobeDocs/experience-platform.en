---
title: LiveRamp - Distribution connection
description: Learn how to use the LiveRamp - Distribution connector to activate audiences previously onboarded into LiveRamp, to other advertising destinations.
last-substantial-update: 2023-07-26
hide: yes
hidefromtoc: yes
---

# [!DNL LiveRamp - Distribution] connection {#liveramp-onboarding}

Use the [!DNL LiveRamp - Distribution] connection to activate audiences previously onboarded into LiveRamp through the [LiveRamp - Onboarding](liveramp-onboarding.md) connection, to destinations which use the [!DNL Ramp ID] identifier.

## Supported destinations {#supported-destinations}

[!DNL LiveRamp - Distribution] currently supports audience activation to the following platforms:

* 4C Insights
* Acast
* Amobee
* Ampersand.tv
* Captify
* Cardlytics
* DAX
* [Disney](#disney)
* Hulu
* Ibotta
* iHeartMedia
* Index Exchange
* Magnite
* One Fox
* Pandora
* Reddit
* Rhythm One (Unruly)
* [Roku](#roku)
* Spotify
* Taboola
* TargetSpot
* Teads
* WB Discovery

## Use cases {#use-cases}

To help you better understand how and when you should use the [!DNL LiveRamp - Distribution] destination, here is a sample use case that Adobe Experience Platform customers can solve by using this destination.

The marketing team of a sports apparel retailer used the [LiveRamp - Onboarding](liveramp-onboarding.md) connection to send audiences from Experience Platform to their LiveRamp account.

Through the [!DNL LiveRamp - Distribution] connection they can now trigger the activation of the onboarded audiences to the destinations mentioned at the top of this page, so that they can target users on mobile, open web, social, and [!DNL CTV] platforms.

## Prerequisites {#prerequisites}

The [!DNL LiveRamp - Distribution] connection requires you to have already onboarded audiences from Experience Platform into LiveRamp. To do that, see the [LiveRamp - Onboarding](liveramp-onboarding.md) documentation.

Before you can send data from Experience Platform to [!DNL LiveRamp - Onboarding], you need your [!DNL LiveRamp] credentials. Please reach out to your [!DNL LiveRamp] representative to obtain your credentials, if you don't already have them.

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

* **[!UICONTROL Username]**: Your LiveRamp account username.
* **[!UICONTROL Password]**: Your LiveRamp account password.
* **[!UICONTROL Token URL]**: Your LiveRamp token URL.
* **[!UICONTROL LiveRamp organization ID]**: The organization ID assigned to your LiveRamp account.

## Destination-specific settings {#destination-settings}

Each of the destinations [supported](#supported-destinations) by [!DNL LiveRamp - Onboarding] requires you to fill in specific configuration options.

See the sections below for detailed guidance on how to configure each destination.



### DESTINATION NAME {#destination-name}

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_<DESTINATION_NAME>_<FIELD_NAME>"
>title="POPOVER TITLE. VISIBLE IN THE UI. USE THE FIELD NAME."
>abstract="ENTER FIELD DESCRIPTION"

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.



### 4C Insights {#4cinsights}

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_4cinsights_profile_id"
>title="4C Brand Profile ID"
>abstract="Enter the numeric ID associated with your 4C Brand Profile. If you do not have this ID, please contact your 4C client services representative."

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

### Acast {#acast}

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_acast_client"
>title="Client name"
>abstract="Enter the name of the client distributing data. Do not use spaces in the client name."

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

### Disney {#disney}

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_agreement"
>title="Advertiser data destination terms agreement"
>abstract="Type in `I AGREE` to confirm the acknowledgement and agreement to the Disney advertiser data terms."
>additional-url="https://www.disneyadvertising.com/ADVERTISER-DATA-DESTINATION-TERMS/" text="Read the agreement"

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_disney_client"
>title="Distribution account"
>abstract="The name of your company/distribution account as you would like it to appear to the partner. Use your company name by default, but please contact your partner account representative if unsure. Do not use whitespace or special characters."

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_disney_email"
>title="Email address"
>abstract="Enter an email address tied to an individual. This email address serves as a signature to the advertiser data terms agreement. This email address will also be used to contact you if needed."

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

* **[!UICONTROL Advertiser data destination terms agreement]**: Type in `I AGREE` to confirm the acknowledgement and agreement to the Disney advertiser data terms.
* **[!UICONTROL Distribution account]**: Select your Disney distribution account from the list.
* **[!UICONTROL Email address]**: Enter an email address tied to an individual. This email address serves as a signature to the advertiser data terms agreement.

![Platform UI image showing the destination connection screen]()

### Roku {#Roku}

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_roku_email"
>title="Roku account email address"
>abstract="Enter the email address tied to your Roku account."

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_roku_representative-email"
>title="Roku account representative email address"
>abstract="Enter the email address of your Roku account representative. This address is used to send taxonomy updates. To enter multiple addresses, separate them by commas."

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

* **[!UICONTROL Roku account email address]**: Enter the email address tied to your Roku account.
* **[!UICONTROL Roku account representative email address]**: Enter the email address of your Roku account representative. To enter multiple addresses, separate them by commas.

![Platform UI image showing the destination connection screen]()

## Configure identifier settings {#identifier-settings}

Each of the destinations [supported](#supported-destinations) by [!DNL LiveRamp - Onboarding] supports specific identifiers.

Before you can connect to the destination, select the identifiers supported by your destination, from the list below.

|Destination|Supported identifiers|
|---|---|
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|Roku|<ul><li>[!UICONTROL [Platform ID]]</li></ul>|

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, read the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

The [!DNL LiveRamp - Distribution] connection activates audiences which have already been onboarded to your LiveRamp account through the [LiveRamp - Onboarding](liveramp-onboarding.md) connection.

To successfully activate your audiences, in this step, you must select the same audiences that you have already onboarded to LiveRamp.

>[!IMPORTANT]
>
>Selecting audiences which have not been previously onboarded to LiveRamp will not trigger the onboarding of the new audiences.

## Exported data / Validate data export {#exported-data}

The [!DNL LiveRamp - Distribution] connection does not transfer any data between Experience Platform and [!DNL LiveRamp].

This destination is only used to activate audiences that you have sent to LiveRamp through the [LiveRamp - Onboarding](liveramp-onboarding.md) connection.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

For more details on how to configure your [!DNL LiveRamp - Onboarding] storage, see the [official documentation](https://docs.liveramp.com/connect/en/upload-a-file-via-liveramp-s-sftp.html).
