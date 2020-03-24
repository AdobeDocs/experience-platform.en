---
title: Destinations workspace
seo-title: Destinations workspace
description: In Adobe Real-time Customer Data Platform, select Destinations from the left navigation bar to access the destinations workspace.
seo-description: In Adobe Real-time Customer Data Platform, select Destinations from the left navigation bar to access the destinations workspace.
---

# Destinations workspace {#destinations-workspace}

In Adobe Real-time Customer Data Platform, select **Destinations** from the left navigation bar to access the Destinations workspace.

The Destinations workspace consists of four sections, **Catalog**, **Browse**, **Accounts**, and **System View**, which are described in the sections below.

![Destinations-overview](/help/rtcdp/destinations/assets/destinations-overview.png)

## Catalog {#catalog}

The **[!UICONTROL Catalog]** tab displays a list of all destinations offered by Adobe, that you can send data to. 

Use the search functionality on the page to locate a specific destination or filter destinations using the **[!UICONTROL Categories]** control. 

Select a destination in the catalog to open the right rail. Here, you can set up a connection to the destination (**Connect destination**), view existing destination connections (**Browse destinations**) or learn more detailed information about each destination by viewing the documentation (**View documentation**).

![Destination catalog options](/help/rtcdp/destinations/assets/destination-ui-catalog-options.png)

For more information on destination categories and information on each destination, see [Destination Catalog](/help/rtcdp/destinations/destinations-catalog.md).

## Browse {#browse}

The **[!UICONTROL Browse]** tab displays the destinations with which you have established a connection. Destinations with the **enabled** toggle turned on set the destination to active and vice-versa. You can also view the destinations where you have data flowing by selecting **Segments > Browse** and selecting a segment to inspect. See the table below for all the information that is provided for each destination in the Browse tab:

![Browse Tab](/help/rtcdp/destinations/assets/browse-tab.png)

Element | Description 
---------|----------
 Destination Name | The name you provided for your activation flow to this destination.
 Destination | The destination platform that you selected for your activation flow.
 Created | The date and UTC time when the activation flow to the destination was created.
 Connection Type | *For email marketing destinations only*. Represents the connection type to your storage bucket. Can be S3 or FTP. 
 Username | The account credentials you selected for the destination flow.
 Segments | The number of segments that are being activated to this destination.
 Status | `Active` or `Inactive`. Indicates whether data is currently being activated to this destination. To edit the status, see [Disable activation](/help/rtcdp/destinations/activate-destinations.md#disable-activation).

Click on a destination row to bring up more information about the destination in the right rail.

![Click destination row](/help/rtcdp/destinations/assets/click-destination-row.png)

Select the destination name to see information about the segments activated to this destination. Click **[!UICONTROL Edit activation]** to modify or add to the segments that are being sent to this destination.

## Accounts {#accounts}

In the **[!UICONTROL Accounts]** tab, you can learn more about the connections that you have established with various destinations. See the table below for all the information you can get on each destination:

![Accounts tab](/help/rtcdp/destinations/assets/accounts-tab.png)

Element | Description
---------|----------
 Platform | The destination for which you have set up the connection.
 Username | The username you selected in the [connect destination wizard](/help/rtcdp/destinations/email-marketing-destinations.md#connect-destination).
 Flows | Represents the number of unique successful destination flows connected with basic information created for a destination.
 Authorized | The date when the connection to this destination was authorized.
 
## System View {#system-view}

The **[!UICONTROL System View]** tab displays a graphic representation of the activation flows that you have set up in the Real-time Customer Data Platform.

![Data-flows1](/help/rtcdp/destinations/assets/data-flows1.png)

Select any of the destinations displayed on the page and press **[!UICONTROL View flows]** to see information on all the connections you have set up for each destination.

![Data-flows2](/help/rtcdp/destinations/assets/data-flows2.png)