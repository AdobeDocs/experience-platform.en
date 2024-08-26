---
title: Acxiom Audience Connectors
description: Provides access to build an audience--hydrated by [!DNL Acxiom's Real ID] technology for improved match rates and precise scale--and send that audience to selected destinations.
last-substantial-update: 2024-06-17
badge: Beta
exl-id: 
---
# [!DNL Acxiom Audience Connectors] destination connection

>[!NOTE]
>
>The [!DNL Acxiom Audience Connectors] destination connection is in beta. This destination connector and documentation page are created and maintained by the [!DNL Acxiom] team. 


Use the [!DNL Acxiom Audience Connectors] connector to build an audience--hydrated by [!DNL Acxiom's Real ID] technology for improved match rates and precise scale--and send that audience to selected destinations.

This tutorial provides instructions to create an [!DNL Acxiom Audience Connectors] destination connector using the [!DNL Adobe Experience Platform] user interface. This connector is used to build and distribute audiences to selected destinations.

## Use cases {#use-cases}

To help you better understand how and when you should use the [!DNL Acxiom Audience Connectors] destination, here is a sample use case that [!DNL Adobe Experience Platform] customers can solve by using this connector.

### Send audiences from an Experience Platform application to your Acxiom account {#send-audiences}

This connector should be used by marketing professionals aiming to send audiences from an [!DNL Experience Platform] application to your [!DNL Acxiom] account for cross-channel acquisition.

For example, the Marketing Operations department at a global financial services brand uses the [!DNL Acxiom Audience Connector] to send audiences from a [!DNL Platform] application to [!DNL Acxiom] for cross-channel acquisition.

The use case is executed through the [!DNL Acxiom Audience Connectors] connector.

[!DNL Adobe] users start by creating an audience segment that they want to send to [!DNL Acxiom] for distribution. Once the [!DNL Adobe] segmentation service has run and the segment has been created, that segment can then be selected as the audience for a destination. 

While the segmentation runs you must set up the connection to a specific destination (e.g., [!DNL LG Ads], [!DNL Spectrum], [!DNL Altrice], etc.).

Once the connection is set up and the audience is created you can schedule the data flow within the destination card.

## Prerequisites {#prerequisites}
- **Set up sources and profiles**<br> Before you can send profile data from the [!DNL Adobe Experience Platform] to a destination, you must configure sources and profiles to populate your audiences. Read [!DNL Adobe’s] [Source connectors overview](https://experienceleague.adobe.com/en/docs/experience-platform/sources/home) for more information on setting up sources and ingesting data, and/or [Real-Time Customer Profile Overview](https://experienceleague.adobe.com/en/docs/experience-platform/profile/home) for more information on real-time customer profiles.
- **Create or import audiences**<br> [!DNL Acxiom’s Audience Connectors] activates (distributes) to audiences. Read the [Segmentation Service UI guide](https://experienceleague.adobe.com/en/docs/experience-platform/segmentation/ui/overview#create-audience) for additional information on creating and managing audiences and segment definitions.
- **Confirm Terms of Use**<br> Before being able to configure a new connection in the [!DNL Acxiom’s Audience Connectors] card, you must read and sign [!DNL Acxiom’s] Terms of Use Agreement. The Terms link will be sent to you once your executed sales order is complete. Prior to the terms of use being signed, the Acxiom Audience Connectors tile is not available. Once [!DNL Acxiom’s] Terms of Use are accepted, [!DNL Adobe] will complete your onboarding process and the Acxiom Audience Connectors tile will be available for selection.
- **Provide your Adobe organization ID**<br> You must know your [!DNL Adobe] Organization ID. See [!DNL Adobe's] *Organizations in Experience Cloud* topic for details on how to [view your organization ID](https://experienceleague.adobe.com/en/docs/core-services/interface/administration/organizations#concept_EA8AEE5B02CF46ACBDAD6A8508646255).


## Destinations {#destinations}

>[!IMPORTANT]
>
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** access control permissions. Read the [access control overview](https://experienceleague.adobe.com/en/docs/experience-platform/access-control/home) or contact your product administrator to obtain the required permissions.

Once you have your audiences created or imported, you can begin using [!DNL Acxiom’s Audience Connectors] to distribute your audiences to destinations.<br> 
**Supported destinations**<br>
- [!DNL Altice]
- [!DNL Ampersand]
- [!DNL Comcast]
- [!DNL Cox]
- [[!DNL LG Ads]](#lg-ads)
- [!DNL Spectrum]
- [!DNL Viant]

**To access [!DNL Acxiom Audience Connectors]**
1. From the Platform, under the **Connections** section, select **Destinations**. 
2. In the **Search** field on the **Catalog** tab, type *[!DNL Acxiom Audience Connectors]* and press the **Enter** key on your keyboard to search.
3. First time users, select **Setup** to create a new destination and set the parameter(s) correctly.<br>
Returning users, select **Activate Audiences** on the [!DNL Acxiom Audience Connectors] card to reuse all parameters (if there were any) that were set when the destination was created.

*Example*<br>
You create a destination to [!DNL Viant], for example, and set the CPM to 1.0. Then, you can reuse that distribution for any following distributions by using the **Activate Audiences** option. 

If you want to push data to [!DNL Viant] with a different CPM, then you have to create a new destination and set the parameter(s) correctly. 

### Connect a new destination {#connect}
Authentication to [!DNL Acxiom Audience Connectors] destination card is automatically handled behind the scenes for your convenience.

>To connect to [!DNL Acxiom Audience Connectors] destination, read the [destinations overview](https://experienceleague.adobe.com/en/docs/experience-platform/destinations/home).

**To configure a new destination connection**
1. From the Destinations>Activate destinations screen, select **Configure new destinations**.
2. Select the **Account type**.
3. Select **Connect to destination**.

    ![Connect to destination options](../../assets/catalog/data-partner/acxiom/connect_to_destination.png)

4. After you have successfully connected, complete the **Destination details**.

    ![Destination details settings](../../assets/catalog/data-partner/acxiom/destination_details.png)

      a. **Name**: Provide the preferred name for your destination. 
    >[!NOTE]
    >
    >Adobe recommends the following naming convention for destinations: "[!DNL Acxiom Audience Connectors] - Destination Name".  This naming convention helps you quickly identify your destinations in the **Browse** tab of the destinations workspace. **Example**: `[!DNL Acxiom Audience Connectors] - [!DNL LG Ads]`

    b. **Description** - Provide an easily identifiable description of the destination.

    c. **Select Destination** - Select the destination you want to distribute to from the drop-down list. The destination you select here directly affects what you see in **destination-specific settings**.


### Marketing actions {#marketing-actions}
	
From the **Marketing Actions** list, select the type of marketing your destination is intended for. Select **Create** to set up the destination. You can reuse this destination for future processing. The Marketing Actions are optional. They allow you to categorize the destination.
![Marketing actions](../../assets/catalog/data-partner/acxiom/marketing_actions.png)


## Destinations specific settings {#destination-specific-settings}
Some [!DNL Acxiom Audience Connectors] destinations require additional information. The sections below provide detailed guidance on how to setup the destinations that have specific configuration options.

### [!DNL LG Ads] {#lg-ads}
To configure details for the destination, fill in the fields below.
- **Segment Category**: The target category or vertical that your segment falls into, for example, financial services, auto, health, etc.<br>
	
![LG Ads destination details](../../assets/catalog/data-partner/acxiom/lg_ads_destination_details.png)


## Activate destination
Once your destinations are successfully created, you can begin activating (distributing) your audiences to destinations.

**Select destination**
1. Select the destination you want to distribute your audience to. You can only select one destination at this time.
2. Select **[!UICONTROL Next]**.<br>
![Select a destination](../../assets/catalog/data-partner/acxiom/select_destination.png)


**Select audiences**
1. From the **Available audiences** list, select your audience.
2. Select **[!UICONTROL Next]**.<br>
![Select an audience](../../assets/catalog/data-partner/acxiom/select_available_audience.png)


**Scheduling**
1. Define the campaign schedule for your audience. <br>
![Set the schedule](../../assets/catalog/data-partner/acxiom/scheduling.png)
[!DNL Acxiom Audience Connectors] autogenerates a file name, so you do not have to configure it yourself. By default, the naming schema for file names is: `<Adobe Audience ID>_<DateTime Stamp>`.
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
                                                          


### Mapping {#mapping}
You must configure your layout with what the [!DNL Connectors] API expects by mapping the [!DNL Adobe] source fields from your customer profile to the [!DNL Acxiom Audience Connectors] target fields.
1. Under the **Source Field** column, in the red select source field boxes, enter the name of each of the attributes you want to map from your input file to the corresponding target field. If you do not know the attribute name you can search for the attribute by selecting the **Select Arrow** icon and then selecting the source field from the directory on the **Select source field** screen.<br>
![Mapping screen](../../assets/catalog/data-partner/acxiom/mapping_screen.png)
2. Once all your fields are mapped, select **[!UICONTROL Next]**.

**Note**<br> [!DNL Acxiom Audience Connectors] require the profiles that come through our system to be in the following order: 

| Field Name         | Description                                                                                                                      | Field Order | Max Length |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------|-------------|------------|          
|First Name          |First name of individual                                                                                                          |1            |255         |
|Middle              |Middle name or initial of the individual                                                                                          |2            |50          |
|Last Name           |Last name of the individual                                                                                                       |3            |255         |
|Generational Suffix |Suffix of the individual                                                                                                          |4            |10          |
|Address Line 1      |Address 1 field of primary residence                                                                                              |5            |255         |
|Address Line 2      |Address 2 field of primary residence                                                                                              |6            |255         |
|City                |City of primary residence                                                                                                         |7            |255         |
|State               |State abbreviation of primary residence                                                                                           |8            |2           |
|Zip Code            |Full zip code of primary residence                                                                                                |9            |10          |
|Email               |Primary email By default, this field is used as a deduplication key to make the records unique                                    |10           |255         |
|Phone               |Phone number of individual (area code + number) By default, this field is used as a deduplication key to make the records unique  |11           |10          |


At a minimum, the following fields are required:  Last Name, Address Line 1, City, State, Zip Code.  If other fields are not available, then the previously mentioned fields should remain blank.

For additional information on mapping custom audiences in [!DNL Adobe Experience Platform], see the Mapping section in the [Data Prep UI Guide](https://experienceleague.adobe.com/en/docs/experience-platform/data-prep/ui/mapping). The Source Fields are [!DNL Adobe] standard fields that come from the [!DNL Adobe] schema. The Target Fields are the predefined fields required by [!DNL Acxiom’s Audience Connectors].

>[!NOTE]
>
>You cannot map additional fields.

If you are not using [!DNL Adobe’s] standard schema, see the [Query Service UI guide](https://experienceleague.adobe.com/en/docs/experience-platform/query/ui/overview) documentation for information on how to use the query service to populate the [!DNL Adobe] standard schema with your field names. 




### Review {#review}
Once you have completed all the steps above, you have an opportunity to review your destination connection status and audience details before activating (distributing) it. The audiences you selected will show up at the bottom in a list. Each audience will be a separate call to [!DNL Acxiom’s Audience Connectors] API. 

If you are happy with the results, select **Finish** to activate your destination. 

![Review your audience](../../assets/catalog/data-partner/acxiom/review_audience.png)


## Activate audiences to this destination {#activate}

>[!IMPORTANT]
>
>- To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]**. Read the [access control overview](https://experienceleague.adobe.com/en/docs/experience-platform/access-control/home) or contact your product administrator to obtain the required permissions.

Once your audience is distributed to the requested destination, contact your destination representative to begin setting up your campaign.

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


