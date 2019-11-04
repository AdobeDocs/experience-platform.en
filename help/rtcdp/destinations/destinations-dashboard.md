---
title: Destinations UI
seo-title: Destinations UI
description: In Adobe Real-Time Customer Data Platform, you can get to the destinations UI by pressing Destinations in the Platform dashboard.
seo-description: In Adobe Real-Time Customer Data Platform, you can get to the destinations UI by pressing Destinations in the Platform dashboard.
---

# Destinations dashboard {#destinations-dashboard}

In Adobe Real-Time Customer Data Platform, you can get to the destinations dashboard by pressing **Destinations** in the Platform dashboard, as shown below:

![Destinations-overview](/help/rtcdp/destinations/assets/destinations-overview.png)

The Destinations dashboard consists of four sections, **Catalog**, **Browse**, **Accounts**, and **Data flows**, which are described in the sections below.

## Catalog

The **[!UICONTROL Catalog]** tab is the default view in the dashboard. The **[!UICONTROL Catalog]** tab displays all destinations that you can send data to, grouped by destination category. Press any destination in the catalog to open the right rail, which enables you to set up a connection to the destination, inspect the existing connections to the destination, and read documentation about the destination.

![Destination catalog options](/help/rtcdp/destinations/assets/destination-ui-catalog-options.png)

For more information on destination categories and information on each destination, see the [Destination Catalog](/help/rtcdp/destinations/destinations-catalog.md).

## Browse

The **[!UICONTROL Browse]** tab displays the destinations with which you have established a connection and displays whether segments are actively being sent to destinations. See the table below for all the information you can get on each destination:


Element | Description 
---------|----------
 Destination Name | The name you provided for your destination.
 Destination | ---
 Account | ---
 Created | The date and UTC time when this destination was created
 Segments | The number of segments that are being sent to this destination
 Status | Indicates whether data is currently being activated to this destination. If the status is **Disabled**, do this -----

 ![Browse Tab](/help/rtcdp/destinations/assets/browse-tab.png)

Click into any destination row to bring up more information about the destination in the right rail. 

![Click destination row](/help/rtcdp/destinations/assets/click-destination-row.png)

Press the destination name to see information about the segments that are activated to this destination. Press **[!UICONTROL Edit activation]** to modify which segments are being sent to this destination.

## Accounts

In the **[!UICONTROL Accounts]** tab, you can see information about the connections that you have established with various destinations. See the table below for all the information you can get on each destination:

Element | Description 
---------|----------
 Name | For email marketing platforms, the name is a combination between the protocol type and the domain you selected in the [connect destination wizard](/help/rtcdp/destinations/email-marketing-destinations.md#connect-destination).
 Platform | The destination for which you have set up the connection.
 User ID | The username you selected in the [connect destination wizard](/help/rtcdp/destinations/email-marketing-destinations.md#connect-destination).
 Flows | ---
 Authorized | The date when the connection to this destination was authorized.
 Expiration | Indicates when the connection to this destination will expire. If the status is **Expired** or about to expire, do this -----

![Accounts tab](/help/rtcdp/destinations/assets/accounts-tab.png)

## Data flows

The **[!UICONTROL Data flows]** tab displays a graphic representation of the activation flows that you have set up in the Real-Time Customer Data Platform.

![Data-flows1](/help/rtcdp/destinations/assets/data-flows1.png)

Click into any of the destinations displayed on the page and press **[!UICONTROL View flows]** to see get information on all the flows you have set up for each destination.

![Data-flows2](/help/rtcdp/destinations/assets/data-flows2.png)