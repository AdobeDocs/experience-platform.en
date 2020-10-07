---
keywords: destinations;destination;destinations detail page;destinations details page
title: Destinations Details Page
seo-title: Destinations Details Page
description: The details page for an individual destination provides an overview of the destination details, such as the destination name, ID, segments mapped to the destination, and controls to edit the activation and to enable and disable the data flow. 
seo-description: The details page for an individual destination provides an overview of the destination details, such as the destination name, ID, segments mapped to the destination, and controls to edit the activation and to enable and disable the data flow. 
---

# Destination details page {#destinations-details-page}

The details page for an individual destination provides an overview of the destination details, such as the destination name, ID, segments mapped to the destination, and controls to edit the activation and to enable and disable the data flow. To view these details, go to **[!UICONTROL Destinations]** > **[!UICONTROL Browse]** and click the name of the destination you want to work with.

Core components of an individual destination are:

* 1 - Destination name and ID
* 2 - Segments activated to destination
* 3 - Right rail information 
* 4 - Controls to edit activation and enable/disable data flow

![Destinations page numbered](/help/rtcdp/destinations/assets/destination-page-numbered.png)

Navigate to an individual destination page to get an overview of the destination details, such as:

## 1. Destination name and ID

You can see the destination name in the page heading and the destination ID in the page URL.

## 2. Segments activated to destination

This section displays which segments are currently mapped to the destination, as well as further information about those segments. See table below for more information:

Item | Description |
---------|----------|
 Segment Name| The name of your segment. |
 Segment Description | The description of your segment. |
 Start Date | The date as of which these segments are being activated to the destination. |
 End Date | The date when these segments will stop being activated to the destination. |
 Mapping ID | *Not available for email marketing destinations*. Indicates the ID by which the segment is known in the destination platform. |

## 3. Right rail information

The right rail includes information about your destination. See the table below for more information:

Item | Description |
---------|----------|
 Platform | Represents the destination platform that audiences are sent to. See [Destinations Catalog](/help/rtcdp/destinations/destinations-catalog.md) for more information. |
 Description | You can edit the description of your destination flow. |
 Category | Indicates the type of destination. See [Destinations Catalog](/help/rtcdp/destinations/destinations-catalog.md) for more information. |
 Connection Type | Indicates in which form your audiences are being sent to the destination. Can be [!UICONTROL Cookie] or [!UICONTROL Profile-based]. |
 Frequency | Indicates how often the audiences are sent to the destination. Can be [!UICONTROL Streaming] or [!UICONTROL Batch].  |
 Identity | Represents the identity namespace accepted by the destination. For example, the Identity field can be GAID, IDFA, email. For all accepted identity namespaces, see standard namespaces in the [Identity namespace overview](../../identity-service/namespaces.md).   |
 Created by | Indicates the user who created this destination flow. |
 Created | Indicates the UTC date and time when this destination flow was created. |

## 4. Controls to edit activation and enable/disable data flow

The Edit activation control allows you to edit which segments are mapped to the destination. Press Edit activation to open the [segment activation workflow](/help/rtcdp/destinations/activate-destinations.md).

Use the **Enable/Disable** toggle to start and pause the data export to a destination.