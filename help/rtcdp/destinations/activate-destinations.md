---
title: Activate profiles and segments in a destination
seo-title: Activate profiles and segments in a destination
description: Activate the data you have in Adobe Real-time Customer Data Platform by mapping segments to destinations. To accomplish this, follow the steps below.
seo-description: Activate the data you have in Adobe Real-time Customer Data Platform by mapping segments to destinations. To accomplish this, follow the steps below.
---

# Activate profiles and segments to a destination

Activate the data you have in Adobe Real-time Customer Data Platform by mapping segments to destinations. To accomplish this, follow the steps below.

## Prerequisites {#prerequisites}

To activate data to destinations, you must have successfully [connected a destination](/help/rtcdp/destinations/assets/connect-destination.png). If you haven't done so already, go to the [destinations catalog](/help/rtcdp/destinations/destinations-catalog.md), browse the supported destinations, and set up one or more destinations.

## Activate data {#activate-data}

1. In **Destinations > Browse**, select the destination where you want to activate your segments.
2. Click the name of the destination. This takes you to the Activate flow.
    ![activate-flow](/help/rtcdp/destinations/assets/activate-flow.png)
    Note that if an activation flow already exists for a destination, you can see the segments that are currently being sent to the destination. Press **Edit activation** in the right rail and follow the steps below to modify the activation details.
3. Press **Activate**;
4. In **Activate destination** wizard, on the **Select Segments** page, select which segments to send to the destination.
    ![segments-to-destination](/help/rtcdp/destinations/assets/select-segments.png)
5. *Conditional*. This step only applies for segments mapped to email marketing destinations. <br> On the **Destination Attributes** page, press **Add new field** and select the attributes that you want to send to the destination.
   We recommend one of the attributes to be a [unique identifier](/help/rtcdp/destinations/email-marketing-destinations.md#identity) from your union schema. For more information about mandatory attributes, see Identity in the [Email marketing destinations](/help/rtcdp/destinations/email-marketing-destinations.md#identity) article. 
   ![destination-attributes](/help/rtcdp/destinations/assets/destination-attributes.png)
6. On the **Schedule** page, you can see the start date for sending data to the destination, as well as the frequency of sending data to the destination.
7. On the **Review** page, you can see a summary of your selection. Press **Cancel** to break up the flow, **Back** to modify your settings, or **Finish** to confirm your selection and start sending data to the destination.

![confirm-selection](/help/rtcdp/destinations/assets/confirm-selection.png)

## Edit activation {#edit-activation}

Follow the steps below to edit existing activation flows in Real-time CDP: 

1. Select **Destinations** in the left navigation bar, then click the **Browse** tab, and click the destination name.
2. Select **[!UICONTROL Edit activation]** in the right rail to change which segments to send to the destination.

## Verify that segment activation was successful {#verify-activation}

### Email marketing destinations

For email marketing destinations, Adobe Real-time CDP creates a tab-delimited `.txt` or `.csv` file in the storage location that you provided. Expect a new file to be created in your storage location every day. The file format is:
`<destination name>id<destination id><timestamp-yyyymmddhhmmss>`

The files you would receive on three consecutive days could look like this:

```
Salesforce_id3544_20191120110000.csv
Salesforce_id3544_20191121123000.csv
Salesforce_id3544_20191122124530.csv
```

The presence of these files in your storage location is confirmation of successful activation.

### Advertising destinations

Check the respective advertising destination that you are activating your data to. If activation was successful, audiences are populated in your advertising platform.  

## Disable activation {#disable-activation}

To disable an existing activation flow, follow the steps below:

1. Select **Destinations** in the left navigation bar, then click the **Browse** tab, and click the destination name.
2. Click the **[!UICONTROL Enabled]** control in the right rail to change the activation flow state.
3. In the **Update data flow state** window, press **Confirm** to disable the activation flow.

