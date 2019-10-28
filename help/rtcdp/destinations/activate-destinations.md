---
title: Activate Data to Destinations
seo-title: Activate Data to Destinations
description: 
seo-description: 
---

# Activate Data to Destinations

Follow the steps below to send your segments to destinations.

## Prerequisites

To activate data to destinations, you must have successfully set up a destination. If you haven't done so already, go to the [destinations catalog](/help/rtcdp/destinations/destinations-catalog.md) and set up one or more destinations.

## Activate Data

1. In **Destinations > Browse**, select the destination where you want to activate your segments. 
2. Click the name of the destination. This takes you to the Activate flow
    ![activate-flow](/help/rtcdp/destinations/assets/activate-flow.png)
    Note that if an activation flow already exists for a destination, you can see the segments that are sent to the destination. Press **Edit activation** and follow the steps below to modify the activation details.
3. Press **Activate**;
4. In **Activate destination** wizard, on the **Select Segments** page, choose which segments you want to send to the destination.
    ![segments-to-destination](/help/rtcdp/destinations/assets/activate-flow.png)
5. on the **Destination Attributes** page, press **Add new Schema field** and enter the attributes that you want to sent to the destination.
   ![destination-attributes](/help/rtcdp/destinations/assets/destination-attributes.png)
6. On the **Schedule** page, you can specify a start date and and end date for sending date to the destination, as well as the frequency of sending data to the destination.
7. On the **Review** page, you can see a summary of your selection. Press **Cancel** to break up the flow, **Back** to modify your settings, or **Finish** to confirm your selection and start sending data to the destination.

![confirm-selection](/help/rtcdp/destinations/assets/confirm-selection.png)


