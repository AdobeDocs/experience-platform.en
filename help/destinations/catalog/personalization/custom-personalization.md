---
keywords: custom personalization; destination; experience platform custom destination;
title: Custom Personalization Destination
description: This destination provides external personalization, content management systems, ad servers, and other applications that are running on your site a way to retrive segment information from Adobe Experience Platform. This destinatination provides real-time 1:1 and personalization based on a user profile's segment membership.
---
# Custom personalization connection (Beta) {#custom-personalization-connection} 

## Overview {#overview}

>[!IMPORTANT]
>
>The Custom personalization connection in Adobe Experience Platform is currently in Beta. The documentation and functionality are subject to change.

This destination provides a way to retrieve segment information from Adobe Experience Platform to external personalization platforms, content management systems, ad servers, and other applications that are running on customer websites.

## Prerequisites {#prerequisites}

This integration is powered by the [Adobe Experience Platform Web SDK](../../../edge/home.md). You must be using this SDK to use this destination.

## Export type {#export-type}

**Profile request** - you are requesting all the segments that are mapped in the custom personalization destination for a single profile. Different custom personalization destinations can be set up for different Adobe Data Collection datastreams.

## Use cases {#use-cases}

This destination shares audiences with an ad servers and non-Adobe personalization applications, to be used in real-time, for deciding which advertisement users should see on a website.

### Use Case #1

**Personalizing a home page**

A home rental and sales website wants to personalize their home page based on segment qualifications in Adobe Experience Platform. The company can select what audiences should get a personalized experience and map those to the custom personalization destination that had been set up for their non-Adobe personalization application as targeting criteria.

**Targeted on-site advertising**

Using a separate custom personalization destination for their ad server, the same website can target on-site advertising using a different set of segments from Adobe Experience Platform as targeting criteria.

## Connect to the destination {#connect}

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

*  **[!UICONTROL Name]**: Fill in the preferred name for this destination.
*  **[!UICONTROL Description]**: Enter a description for your destination. For example, you can mention which campaign you are using this destination for. This field is optional.
*  **[!UICONTROL Integration alias]**: This value is sent to the Experience Platform Web SDK as a JSON object name. 
*  **[!UICONTROL Datastream ID]**: This determines in which Data Collection datastream the segments will be included in the response to the page. The drop down menu shows only datastreams that have the destination configuration enabled. See [Configuring a datastream](../../../edge/fundamentals/datastreams.md) for more details.

## Activate segments to this destination {#activate}

Read [Activate profiles and segments to profile request destinations](../../ui/activate-profile-request-destinations.md) for instructions on activating audience segments to this destination.

## Exported data {#exported-data}

The segments a profile qualifies for are sent to the page based on the configuration of the destinations configured to be returned to the datastream and what segments have been mapped to the corresponding destinations.

If you are using Adobe Launch to deploy the Experience Platform Web SDK, use the [send event](../../../edge/fundamentals/tracking-events.md#handling-responses-from-events) functionality and your custom code action will have an `event.destinations` variable that you can use to see the exported data.

If you are not using Adobe Launch to deploy the Experience Platform Web SDK, use the [handling responses from events](../../../edge/fundamentals/tracking-events.md#handling-responses-from-events) functionality.

The JSON response from Adobe Experience Platform can be parsed to find the corresponding integration alias of the application you are integrating with Adobe Experience Platform. The segment IDs can be passed into the application's code as targeting parameters. Below is a sample of what this would look like specific to the destination response.

```
alloy("sendEvent", {
  "renderDecisions": true,
  "xdm": {
    "commerce": {
      "order": {
        "purchaseID": "a8g784hjq1mnp3",
        "purchaseOrderNumber": "VAU3123",
        "currencyCode": "USD",
        "priceTotal": 999.98
      }
    }
  }
}).then(function(results) {
    if(results.destinations) { // Looking to see if the destination results are there
 
        // Get the destination with a particular alias
        var personalizationDestinations = results.destinations.filter(x => x.alias == “personalizationAlias”)
        if(personalizationDestinations.length > 0) {
             // Code to pass the segment IDs into the system that corresponds to personalizationAlias
        }
        var adServerDestinations = results.destinations.filter(x => x.alias == “adServerAlias”)
        if(adServerDestinations.length > 0) {
            // Code to pass the segment ids into the system that corresponds to adServerAlias
        }
     }
   })
  .catch(function(error) {
    // Tracking the event failed.
  });
```


## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](../../../data-governance/home.md).
