---
title: Acxiom Real ID Audience Connection
description: Use the [!DNL Acxiom Real ID Audience Connection] destination to enhance audiences with [!DNL Acxiom's Real ID] technology and activate audiences to multiple platforms, such as [!DNL Altice], [!DNL Ampersand], [!DNL Comcast], and more.
badge: label="Beta" type="Informative"
exl-id: 5f1f0f7f-ac46-42bd-8002-be50fab5a76b
---
# [!DNL Acxiom Real ID Audience Connection] destination 

>[!NOTE]
>
>The [!DNL Acxiom Real ID Audience Connection] destination is in beta. This destination connector and documentation page are created and maintained by the [!DNL Acxiom] team. For any inquiries or update requests, contact Acxiom directly [here](mailto:acxiom-adobe-help@acxiom.com).

Use the [!DNL Acxiom Real ID Audience Connection] destination to enhance audiences with [!DNL Acxiom's] [Real ID](https://www.acxiom.com/real-id/real-id/) technology and activate audiences to multiple platforms, such as [!DNL Altice], [!DNL Ampersand], [!DNL Comcast], and more.

This tutorial provides instructions to create an [!DNL Acxiom Real ID Audience Connection] destination connector using the [!DNL Adobe Experience Platform] user interface. This connector is used to build and distribute audiences to selected destinations.

## Use cases {#use-cases}

This connector supports clients who have Acxiom Real Identity loaded into Real-Time CDP as an identifier. To help you better understand how and when you should use the [!DNL Acxiom Real ID Audience Connection] destination, here is a sample use case that [!DNL Adobe Experience Platform] customers can solve by using this connector.

### Send audiences from Experience Platform to your Acxiom account {#send-audiences}

Use this destination connector if you are a marketing professional who wants to send audiences from [!DNL Experience Platform] to your [!DNL Acxiom] account, for cross-channel acquisition.

For example, the Marketing Operations department at a global financial services brand is interested in cross-channel customer acquisition through multiple advertising platforms. They can use the [!DNL Acxiom Real ID Audience Connection] destination connector to send audiences from [!DNL Experience Platform] to [!DNL Acxiom], enhance the audiences with [!DNL Acxiom's Real ID] technology, and activate the audiences to multiple platforms, such as [!DNL Altice], [!DNL Ampersand], [!DNL Comcast], and more.


## Prerequisites {#prerequisites}

* **Confirm Terms of Use:** Before you can configure a new [!DNL Acxiom Real ID Audience Connection] destination, you must read and sign [!DNL Acxiom's] Terms of Use Agreement. You will receive the link to the agreement once your executed sales order is complete. Until you sign the agreement, you will not see the [!DNL Acxiom Real ID Audience Connection] destination card in the Experience Platform destination catalog. After you accept and sign the agreement, [!DNL Adobe] will complete your onboarding process and you will see the [!DNL Acxiom Real ID Audience Connection] destination card.
* **Know your Adobe organization ID:** Your [!DNL Adobe] organization ID is needed to complete your Terms of User Agreement. See [!DNL Adobe's] *Organizations in Experience Cloud* topic for details on how to [view your organization ID](https://experienceleague.adobe.com/en/docs/core-services/interface/administration/organizations#concept_EA8AEE5B02CF46ACBDAD6A8508646255).
* **Obtain license for [!DNL Acxiom's Real ID] product:** Once a license is obtained, make Acxiom's Real ID available within Real-Time CDP. See [Acxiom Data Enhancement](https://experienceleague.adobe.com/en/docs/experience-platform/destinations/catalog/data-partner/acxiom-data-enhancement) for more information.


## Supported identities {#supported-identities}

[!DNL Acxiom's Real ID Audience Connection] destination supports the activation of identities described in the table below. Learn more about [identities](https://experienceleague.adobe.com/en/docs/experience-platform/identity/features/namespaces).

|Target Identity |Description |Considerations |
|---------------|----------------|----------------|
|Real ID|[!DNL Acxiom Real ID]|Select this target identity when your source identity is an Acxiom Real ID namespace.|
|extern_id|Custom user IDs|Select this target identity when your source identity is a custom namespace.|

## Supported audiences {#supported-audiences}

This section describes which types of audiences you can export to this destination.

|Audience origin |Supported |Description |
|---------------|----------------|----------------|
|Segmentation Service|✓|Audiences generated through the Experience Platform [Segmentation Service](https://experienceleague.adobe.com/en/docs/experience-platform/segmentation/home).|
|Custom uploads|✓|Audiences [imported](https://experienceleague.adobe.com/en/docs/experience-platform/segmentation/ui/audience-portal#import-audience) into Experience Platform from CSV files.|


## Supported destinations {#supported-destinations}

[!DNL Acxiom's Real ID Audience Connection] destination currently supports audience activation to the following platforms. 

* [!DNL Altice]
* [!DNL Ampersand]
* [!DNL Comcast]
* [!DNL Cox]
* [[!DNL LG Ads]](#lg-ads)
* [!DNL Spectrum]
* [!DNL Viant]

## Connect to the destination {#connect}

Authentication to [!DNL Acxiom's Real ID Audience Connection] destination is automatically handled behind the scenes for your convenience.

## Destination-specific settings {#destination-settings}

Some [!DNL Acxiom Real ID Audience Connection] destinations require additional information. The sections below provide detailed guidance on how to configure these options.

### [!DNL LG Ads] {#lg-ads}

To configure details for the destination, fill in the fields below.

* **Segment Category**: The target category or vertical that your segment falls into. Example: financial services, automotive, health, etc.
    
![LG Ads destination details](../../assets/catalog/advertising/acxiom-real-id-audience-connection/real_id_lg_ads_destination_details.png)


## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}



Read [Activate audience data to batch profile export destinations](https://experienceleague.adobe.com/en/docs/experience-platform/destinations/ui/activate/activate-batch-profile-destinations) for instructions on activating audiences to this destination.

>[!NOTE]
>
>The [!DNL Acxiom Real ID Audience Connection] destination only supports full file exports.


### Map attributes and identities {#map}

For the [!DNL Acxiom Real ID Audience Connection] destination to correctly receive the audience data, you must map the source field from Experience Platform to the correct [!DNL Acxiom Real ID Audience Connection] target field.

[!DNL Acxiom Real ID Audience Connection] only allows mapping to the following target field.  

| Field Name | Description|Required |
|--------------------|------------|--------| 
|Real ID|A Real ID is a unique 36 byte alpha-numeric identifier (ID) from Acxiom's proprietary identity resolution graph, similar to a primary key for a relational database. It's an identifier that represents a person, household or address. |Yes|



In the **[!UICONTROL Source Field]** column, enter the name of the source attribute that you want to map to the corresponding target field, or select the arrow icon to open the **[!UICONTROL  Select source field]** screen. Then, select **[!UICONTROL Next]**.
![Mapping screen](../../assets/catalog/advertising/acxiom-real-id-audience-connection/real_id_mapping_screen.png)


If you are not using [!DNL Adobe's] standard schema, see the [Query Service UI guide](../../../query-service/ui/overview.md) documentation for information on how to use the query service to populate the [!DNL Adobe] standard schema with your field names. 


### Review {#review}

Once you have completed all the steps above, you have an opportunity to review your destination connection status and audience details before activating (distributing) it. The audiences you selected will show up at the bottom in a list. Each audience will be a separate call to the [!DNL Acxiom Real ID Audience Connection] API. 

If you are happy with the results, select **[!UICONTROL Finish]** to activate your destination. 

![Review your audience](../../assets/catalog/advertising/acxiom-real-id-audience-connection/real_id_review_audience.png)


## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](https://experienceleague.adobe.com/en/docs/experience-platform/data-governance/home).

## Troubleshooting {#troubleshooting}

If your destination representative is unable to locate your audience, contact your [!DNL Adobe] representative for assistance. 

You will need to provide the following information to your [!DNL Adobe] representative:

* Audience name
* Destination name
* Audience activation date
* Exported file name

## Next steps {#next-steps}

By following this tutorial, you have successfully activated an audience to the selected destination platform. Next, contact your destination platform representative to begin setting up your campaign.
