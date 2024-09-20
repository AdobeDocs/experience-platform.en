---
title: Acxiom Audience Distribution
description: Use the [!DNL Acxiom Audience Distribution] destination to enhance audiences with [!DNL Acxiom's Real ID] technology and activate audiences to multiple platforms, such as [!DNL Altice], [!DNL Ampersand], [!DNL Comcast], and more.
badge: Beta
---
# [!DNL Acxiom Audience Distribution] destination 

>[!NOTE]
>
>The [!DNL Acxiom Audience Distribution] destination is in beta. This destination connector and documentation page are created and maintained by the [!DNL Acxiom] team. For any inquiries or update requests, contact Acxiom directly [here](mailto:acxiom-adobe-help@acxiom.com).

Use the [!DNL Acxiom Audience Distribution] destination to enhance audiences with [!DNL Acxiom's Real ID] technology and activate audiences to multiple platforms, such as [!DNL Altice], [!DNL Ampersand], [!DNL Comcast], and more.

This tutorial provides instructions to create an [!DNL Acxiom Audience Distribution] destination connector using the [!DNL Adobe Experience Platform] user interface. This connector is used to build and distribute audiences to selected destinations.

## Use cases {#use-cases}

To help you better understand how and when you should use the [!DNL Acxiom Audience Distribution] destination, here is a sample use case that [!DNL Adobe Experience Platform] customers can solve by using this connector.

### Send audiences from Experience Platform to your Acxiom account {#send-audiences}

Use this destination connector if you are a marketing professional who wants to send audiences from [!DNL Experience Platform] to your [!DNL Acxiom] account, for cross-channel acquisition.

For example, the Marketing Operations department at a global financial services brand uses the [!DNL Acxiom Audience Distribution] destination to send audiences from [!DNL Experience Platform] to [!DNL Acxiom] for cross-channel acquisition.


While the segmentation runs, you must set up the connection to a specific destination (e.g., [!DNL LG Ads], [!DNL Spectrum], [!DNL Altrice], etc.).

Once the connection is set up and the audience is created, you can schedule the data flow within the destination card.

## Prerequisites {#prerequisites}
- **Confirm Terms of Use:** Before you can configure a new [!DNL Acxiom Audience Distribution] destination, you must read and sign [!DNL Acxiom’s] Terms of Use Agreement. You will receive the link to the agreement once your executed sales order is complete. Until you sign the agreement, you will not see the [!DNL Acxiom Audience Distribution] destination card in the Experience Platform destination catalog. After you accept and sign the agreement, [!DNL Adobe] will complete your onboarding process and you will see the [!DNL Acxiom Audience Distribution] destination card.
- **Know your Adobe organization ID:** Your [!DNL Adobe] organization ID is needed to complete your Terms of User Agreement. See [!DNL Adobe's] *Organizations in Experience Cloud* topic for details on how to [view your organization ID](https://experienceleague.adobe.com/en/docs/core-services/interface/administration/organizations#concept_EA8AEE5B02CF46ACBDAD6A8508646255).


## Supported Destinations {#supported-destinations}

[!DNL Acxiom’s Audience Distribution] destination currently supports audience activation to the following platforms.<br> 
	
- [!DNL Altice]
- [!DNL Ampersand]
- [!DNL Comcast]
- [!DNL Cox]
- [[!DNL LG Ads]](#lg-ads)
- [!DNL Spectrum]
- [!DNL Viant]


## Connect to a new destination {#connect}
Authentication to [!DNL Acxiom's Audience Distribution] destination is automatically handled behind the scenes for your convenience.


## Destinations specific settings {#destination-specific-settings}
Some [!DNL Acxiom Audience Distribution] destinations require additional information. The sections below provide detailed guidance on how to setup the destinations that have specific configuration options.

### [!DNL LG Ads] {#lg-ads}
To configure details for the destination, fill in the fields below.
- **Segment Category**: The target category or vertical that your segment falls into. Example: financial services, automotive, health, etc.
	
![LG Ads destination details](../../assets/catalog/data-partner/acxiom/lg_ads_destination_details.png)


## Activate audiences to this destination {#activate} 
>[!IMPORTANT]
>
>- To activate data, you need the [!UICONTROL View Destinations], [!UICONTROL Activate Destinations], [!UICONTROL View Profiles], and [!UICONTROL View Segments] [access control permissions](../../../access-control/home.md#permissions). Read the [access control overview](../../../access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.


**Scheduling**
1. Define the campaign schedule for your audience. <br>
![Set the schedule](../../assets/catalog/data-partner/acxiom/scheduling.png)
[!DNL Acxiom Audience Distribution] autogenerates a file name, so you do not have to configure it yourself. By default, the naming schema for file names is: `<Adobe Audience ID>_<DateTime Stamp>`.
2. Once your schedule is defined, select **[!UICONTROL Create]** to save it.
3. Select **[!UICONTROL Next]**.

| Scheduling configuration  | Description                                |
|---------------------------|-------------------------------------------------------------|
| Export full files         | Select **Export full files**, as opposed to incremental files.<br> **Note**<br>[!DNL Acxiom’s Audience Connectors] does not currently support [Incremental file exports](https://experienceleague.adobe.com/en/docs/experience-platform/destinations/ui/activate/activate-batch-profile-destinations).    |
| Frequency                 | By default, the scheduling frequency is set to once and creates a one-time distribution. This option indicates how often the destination connection is invoked for distribution. Currently it is limited to one run. |
| Scheduled                 | Select this option if you want to run your distributions at a scheduled time. Processing time is approximate.      |
| Scheduled start time      | The timestamp for the projected run is presented in a UTC time zone. This tells [!DNL Acxiom] when to distribute the audience to the selected destination.  
| After segment evaluation  | Select this option to have your distribution run right after it clears [!DNL Adobe’s] segment evaluation.    |
| Date                      | Select the start date from the calendar display. Use the left and right carrot brackets (< and >) to move through the months of the calendar and select the date to set the start date.       |
                                                          

Once your audience is distributed to the selected destination, contact your destination representative to begin setting up your campaign.

### Map attributes and identities {#map}
For the [!DNL Acxiom Audience Distribution] destination to correctly receive the audience data, you must map the source fields from Experience Platform to the correct [!DNL Acxiom Audience Distribution] target fields.

[!DNL Acxiom Audience Distribution] only allows mapping with the following fields and requires the profiles that come through our system to be in the following order: 

| Field Name         | Description|Required| Field Order | Max Length |
|--------------------|------------|--------|-------------|------------|          
|First Name          |First name of individual                                                                                                         |N|1           |255         |
|Middle              |Middle name or initial of the individual                                                                                         |N|2           |50          |
|Last Name           |Last name of the individual                                                                                                      |Y|3           |255         |
|Generational Suffix |Suffix of the individual                                                                                                         |N|4            |10          |
|Address Line 1      |Address 1 field of primary residence                                                                                             |Y|5            |255         |
|Address Line 2      |Address 2 field of primary residence                                                                                             |N|6            |255         |
|City                |City of primary residence                                                                                                        |Y|7           |255         |
|State               |State abbreviation of primary residence                                                                                          |Y|8           |2           |
|Zip Code            |Full zip code of primary residence                                                                                               |Y|9            |10          |
|Email               |Primary email By default, this field is used as a deduplication key to make the records unique                                   |N|10         |255         |
|Phone               |Phone number of individual (area code + number)<br> By default, this field is used as a deduplication key to make the records unique. |N|11          |10          |


1. Under the **Source Field** column, in the red select source field boxes, enter the name of each of the attributes you want to map from your input file to the corresponding target field. If you do not know the attribute name, you can search for the attribute by selecting the **Select Arrow** icon and then selecting the source field from the directory on the **Select source field** screen.<br>
![Mapping screen](../../assets/catalog/data-partner/acxiom/mapping_screen.png)
2. Once all your fields are mapped, select **[!UICONTROL Next]**.

If you are not using [!DNL Adobe’s] standard schema, see the [Query Service UI guide](../../../query-service/ui/overview.md) documentation for information on how to use the query service to populate the [!DNL Adobe] standard schema with your field names. 



### Review {#review}
Once you have completed all the steps above, you have an opportunity to review your destination connection status and audience details before activating (distributing) it. The audiences you selected will show up at the bottom in a list. Each audience will be a separate call to the [!DNL Acxiom Audience Distribution] API. 

If you are happy with the results, select **Finish** to activate your destination. 

![Review your audience](../../assets/catalog/data-partner/acxiom/review_audience.png)



## Troubleshooting {#troubleshooting}
If your destination representative is unable to locate the audience, contact [!DNL Adobe] support for assistance in troubleshooting the delivery. 

You will need the following information to provide to [!DNL Adobe] support:
- Segment name
- Destination name
- Date of distribution
- File name


## Next steps

By following this tutorial, you have successfully distributed an audience to the selected destination. Next, contact your destination representative to begin setting up your campaign.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](https://experienceleague.adobe.com/en/docs/experience-platform/data-governance/home).


