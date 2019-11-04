---
title: Activate Data to Destinations
seo-title: Activate Data to Destinations
description: 
seo-description: 
---

# Activate Data to Destinations

Activate the data you have in Adobe Real-Time Customer Data Platform by sending segments to destinations. To accomplish this, follow the steps below.

## Prerequisites {#prerequisites}

To activate data to destinations, you must have successfully set up a destination. If you haven't done so already, go to the [destinations catalog](/help/rtcdp/destinations/destinations-catalog.md). Browse the supported destinations and set up one or more destinations.

## Activate Data {#activate-data}

1. In **Destinations > Browse**, select the destination where you want to activate your segments. 
2. Click the name of the destination. This takes you to the Activate flow.
    ![activate-flow](/help/rtcdp/destinations/assets/activate-flow.png)
    Note that if an activation flow already exists for a destination, you can see the segments that are currently being sent to the destination. Press **Edit activation** and follow the steps below to modify the activation details.
3. Press **Activate**;
4. In **Activate destination** wizard, on the **Select Segments** page, choose which segments you want to send to the destination.
    ![segments-to-destination](/help/rtcdp/destinations/assets/activate-flow.png)
5. On the **Destination Attributes** page, press **Add new Schema field** and enter the attributes that you want to send to the destination.
   Note that for email marketing destinations, we recommend that one of the attributes is a [unique identifier](/help/rtcdp/destinations/email-marketing-destinations.md#identity) from your union schema.
   ![destination-attributes](/help/rtcdp/destinations/assets/destination-attributes.png)
6. On the **Schedule** page, you can see the start date for sending data to the destination, as well as the frequency of sending data to the destination.
7. On the **Review** page, you can see a summary of your selection. Press **Cancel** to break up the flow, **Back** to modify your settings, or **Finish** to confirm your selection and start sending data to the destination.

![confirm-selection](/help/rtcdp/destinations/assets/confirm-selection.png)

## Edit activation {#edit-activation}

You can edit existing activation flows in Real-Time CDP.  

## Verify that segment activation was successful {#verify-activation}



### Email marketing destinations

For email marketing destinations, Adobe Real-Time CDP drops a tab-delimited txt or csv file into your storage location. The file format is:

```
<destination name>id<destination id><timestamp>
```

Your files could look like this:

Salesforce_id3544_YYYYMMDDHHMMSS

The presence of this file in your storage location is confirmation of successful activation.

### Advertising destinations



