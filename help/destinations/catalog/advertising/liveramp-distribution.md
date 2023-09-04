---
title: LiveRamp - Distribution connection
description: Learn how to use the LiveRamp - Distribution connector to activate audiences previously onboarded into LiveRamp, to other advertising destinations.
last-substantial-update: 2023-07-26
hide: yes
hidefromtoc: yes
---

# [!DNL LiveRamp - Distribution] connection {#liveramp-onboarding}

The [!DNL LiveRamp - Distribution] enables you to activate audiences from Experience Platform to premium publishers across mobile, web, display, and connected TV mediums.

>[!IMPORTANT]
>
>This destination connector and documentation page are created and maintained by LiveRamp. For any inquiries or update requests, please contact LiveRamp directly [here](mailto:example@email.com).

## Supported destinations {#supported-destinations}

[!DNL LiveRamp - Distribution] currently supports audience activation to the following platforms:

* [!DNL 4C Insights]
* [!DNL Acast]
* [!DNL Amobee]
* [!DNL Ampersand.tv]
* [!DNL Captify]
* [!DNL Cardlytics]
* [[!DNL Disney (Hulu/ESPN/ABC)]](#disney)
* [!DNL iHeartMedia]
* [!DNL Index Exchange]
* [!DNL Magnite CTV Platform]
* [!DNL Magnite DV+ (Rubicon Project)]
* [!DNL One Fox]
* [!DNL Pandora]
* [!DNL Reddit]
* [[!DNL Roku]](#roku)
* [!DNL Spotify]
* [!DNL Taboola]
* [!DNL TargetSpot]
* [!DNL Teads]
* [!DNL WB Discovery]

## Use cases {#use-cases}

To help you better understand how and when you should use the [!DNL LiveRamp - Distribution] destination, here is a sample use case that Adobe Experience Platform customers can solve by using this destination.

The marketing team of a sports apparel retailer used the [LiveRamp - Onboarding](liveramp-onboarding.md) connection to send audiences from Experience Platform to their LiveRamp account.

Through the [!DNL LiveRamp - Distribution] connection they can now trigger the activation of the onboarded audiences to the destinations mentioned at the top of this page, so that they can target users on mobile, open web, social, and [!DNL CTV] platforms.

## Onboard audiences to LiveRamp {#onboarding}

Before activating audiences through the [!DNL LiveRamp - Distribution] connection, use the [LiveRamp - Onboarding](liveramp-onboarding.md) connection to export your Experience Platform audiences to LiveRamp.

After you have onboarded your audiences to LiveRamp, continue the activation workflow from the [connect to the destination](#connect) step.

## Connect to the destination {#connect}

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_identifier_settings"
>title="Identifier Settings"
>abstract="Select the identifiers supported by your destination. See the documentation for the complete list of supported identifiers for each destination."

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

* **[!UICONTROL Token URL]**: Your LiveRamp token URL.
* **[!UICONTROL LiveRamp organization ID]**: The organization ID assigned to your LiveRamp account.
* **[!UICONTROL Username]**: Your LiveRamp account username.
* **[!UICONTROL Password]**: Your LiveRamp account password.

## Destination-specific settings {#destination-settings}

Each of the destinations [supported](#supported-destinations) by [!DNL LiveRamp - Onboarding] requires you to fill in specific configuration options.

See the sections below for detailed guidance on how to configure each destination.

### DESTINATION NAME {#destination-name}

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_<DESTINATION_NAME>_<FIELD_NAME>"
>title="POPOVER TITLE. VISIBLE IN THE UI. USE THE FIELD NAME."
>abstract="ENTER FIELD DESCRIPTION"

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

### [!DNL 4C Insights] {#insights}

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_4cinsights_profile_id"
>title="4C Brand Profile ID"
>abstract="Enter the numeric ID associated with your 4C Brand Profile. If you do not have this ID, please contact your 4C client services representative."

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

### [!DNL Acast] {#acast}

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_acast_client"
>title="Client name"
>abstract="Your advertiser account name, as you would like it to be shown to the destination partner. Use your company name. Do not use spaces or special characters."

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

### [!DNL Amobee] {#amobee}

### [!DNL Ampersand.tv] {#ampersand-tv}

### [!DNL Captify] {#captify}

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_captify_client"
>title="Client name"
>abstract="Your advertiser account name, as you would like it to be shown to the destination partner. Use your company name. Do not use spaces or special characters."

### [!DNL Cardlytics] {#cardlytics}

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_cardlytics_client"
>title="Client name"
>abstract="Your advertiser account name, as you would like it to be shown to the destination partner. Use your company name. Do not use spaces or special characters."

### [!DNL Disney (Hulu/ESPN/ABC)] {#disney}

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_agreement"
>title="Advertiser data destination terms agreement"
>abstract="Type in `I AGREE` to confirm the acknowledgement and agreement to the Disney advertiser data terms."
>additional-url="https://www.disneyadvertising.com/ADVERTISER-DATA-DESTINATION-TERMS/" text="Read the agreement"

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_disney_client"
>title="Client name"
>abstract="Your advertiser account name, as you would like it to be shown to the destination partner. Use your company name. Do not use spaces or special characters."

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_disney_email"
>title="Your email address"
>abstract="Enter an email address tied to an individual. This email address serves as a signature to the advertiser data terms agreement. This email address will also be used to contact you if needed."

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

* **[!UICONTROL Advertiser data destination terms agreement]**: Type in `I AGREE` to confirm the acknowledgement and agreement to the Disney advertiser data terms.
* **[!UICONTROL Distribution account]**: Select your Disney distribution account from the list.
* **[!UICONTROL Email address]**: Enter an email address tied to an individual. This email address serves as a signature to the advertiser data terms agreement.

![Platform UI image showing the destination connection screen]()

**Supported identifiers**

When configuring your destination, select the identifiers you want to use in the activation process, from the list of supported identifiers below.

This destination supports the activation of audiences based on the following identifiers:

* [!DNL Ramp ID]

### [!DNL iHeartMedia] {#iheartmedia}

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_iheartmedia_client"
>title="Client name"
>abstract="Your advertiser account name, as you would like it to be shown to the destination partner. Use your company name. Do not use spaces or special characters."

### [!DNL Index Exchange] {#index-exchange}

### [!DNL Magnite CTV Platform] {#magnite}

### [!DNL Magnite DV+ (Rubicon Project)] {#magnite-dv}

### [!DNL One Fox] {#fox}

### [!DNL Pandora] {#pandora}

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_pandora_data_provider_name"
>title="Data provider name"
>abstract="The name of your company as you would like it to be shown to Pandora. The name can include a maximum of 40 lowercase and alphanumeric characters (e.g. My_Company)."

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_pandora_rep_email"
>title="Account representative email address"
>abstract="The email address of your Pandora account representative. This address is used to send taxonomy updates. To enter multiple addresses, separate them by commas."

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_email"
>title="Email address"
>abstract="This address is used to send taxonomy updates. To enter multiple addresses, separate them by commas."

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_pandora_account_name"
>title="Account name"
>abstract="The name of your Pandora account. Contact your Pandora account representative if you are not sure what your account name is. Do not use spaces or special characters."

### [!DNL Reddit] {#reddit}

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_reddit_advertiser_id"
>title="Reddit advertiser ID"
>abstract="Your Reddit advertiser ID. Must begin with "t2_" or "a2_". Contact your Reddit representative if you do not know your advertiser ID."

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_reddit_advertiser_name"
>title="Reddit advertiser name"
>abstract="Your Reddit advertiser name. Do not use spaces or special characters."

### Roku {#roku}

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_roku_email"
>title="Roku account email address"
>abstract="Enter the email address tied to your Roku account."

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_roku_representative_email"
>title="Roku account representative email address"
>abstract="Enter the email address of your Roku account representative. This address is used to send taxonomy updates. To enter multiple addresses, separate them by commas."

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

* **[!UICONTROL Roku account email address]**: Enter the email address tied to your Roku account.
* **[!UICONTROL Roku account representative email address]**: Enter the email address of your Roku account representative. To enter multiple addresses, separate them by commas.

![Platform UI image showing the destination connection screen]()

**Supported identifiers**

When configuring your destination, select the identifiers you want to use in the activation process, from the list of supported identifiers below.

This destination supports the activation of audiences based on the following identifiers:

* [!DNL Platform ID]

### [!DNL Spotify] {#spotify}

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_spotify_client"
>title="Client name"
>abstract="Your advertiser account name, as you would like it to be shown to the destination partner. Use your company name. Do not use spaces or special characters."

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_spotify_account_token"
>title="Account token"
>abstract="An alphanumeric identifier that informs Spotify where to port the data and that you are verified to use this workflow. Contact your Spotify account manager to obtain this token."

### [!DNL Taboola] {#taboola}

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_taboola_rep_email"
>title="Account manager email address"
>abstract="The email address of your Taboola account manager."

### [!DNL TargetSpot] {#targetspot}

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_targetspot_client"
>title="Client name"
>abstract="Your advertiser account name, as you would like it to be shown to the destination partner. Use your company name. Do not use spaces or special characters."

### [!DNL Teads] {#teads}

### [!DNL WB Discovery] {#wb-discovery}

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_distribution_wb_client"
>title="Client name"
>abstract="Your advertiser account name, as you would like it to be shown to the destination partner. Use your company name. Do not use spaces or special characters."

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, read the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

The [!DNL LiveRamp - Distribution] connection activates audiences which have already been onboarded to your LiveRamp account through the [LiveRamp - Onboarding](liveramp-onboarding.md) connection.

To successfully activate your audiences, in this step, you must select the same audiences that you have previously onboarded to LiveRamp.

>[!IMPORTANT]
>
>Selecting audiences which have not been previously onboarded to LiveRamp will not trigger the onboarding of the new audiences.

## Exported data / Validate data export {#exported-data}

To verify and monitor the activation of your audiences, log in to your LiveRamp account and check the activation metrics.

If you have questions about the audience activation, please contact your LiveRamp account representative.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

For more details on how to configure your [!DNL LiveRamp - Onboarding] storage, see the [official documentation](https://docs.liveramp.com/connect/en/upload-a-file-via-liveramp-s-sftp.html).
