---
title: Quick start with Launch
seo-title: Adobe Experience Platform Web SDK quick start with Launch
description: Quick start guide for using the Experience Platform Web SDK extension to collect data
seo-description: Quick start guide for using the Experience Platform Web SDK extension to collect data
---

# Prerequisites

Currently the Adobe Experience Platform Web SDK only supports sending data to Adobe Experience Platform using XDM. You must satisfy the following prerequisites.

- Have a [1st-party domain (CNAME)](https://docs.adobe.com/content/help/en/core-services/interface/ec-cookies/cookies-first-party.html) enabled. If you already have a CNAME for Analytics, you should use that one.
- Be entitled to Adobe Experience Platform
- Be using the latest version of the Visitor ID service

## Prepare platform

To be able to send data to Adobe Experience Platform, you must create an XDM schema and a dataset that uses that schema.

- [Create a schema](https://www.adobe.io/apis/experienceplatform/home/tutorials/alltutorials.html#!api-specification/markdown/narrative/tutorials/schema_editor_tutorial/schema_editor_tutorial.md) with the following mixins:
  - ExperienceEvent Implementation Details
  - ExperienceEvent Environment Details
  - ExperienceEvent Web Details
- Add the Adobe Experience Platform Web SDK mixin to the schema you created
- [Create a dataset](https://platform.adobe.com/dataset/overview) with your schema where you would like the data to land

## Requesting a configuration ID

You must have a configuration ID to use the SDK. The configuration ID ensures that your data is routed to the right place. You can obtain a configuration ID either from your consultant or through Client Care. They will need the following information:

- **Org ID:** You can find this using the instructions [here](https://docs.adobe.com/content/help/en/core-services/interface/manage-users-and-products/organizations.html)
- **Dataset ID:** This is available in the dataset UI when you click on a dataset
- **Schema ID:** This is available in the URL of the schema creation screen
- **Friendly Name:** This is the friendly name that will be used in future UIs for this configuration

## Install the SDK in Launch

Log in to Launch and install the `AEP Web SDK` extension. As part of installing the SDK, you will be prompted to configure the extension. Enter the Config ID you requested above. The extension automatically fills in your Organization ID.

For more details on different configuration options, see [Configuring the SDK](../fundamentals/configuring-the-sdk.md).

## Send an event

After the extension is installed, start sending events by adding a "Send Beacon" action from the AEP Web SDK extension. It is recommended that you send at least one event every time a page is loaded with the "occurs at the start of a view" option checked.

For more details on how to track events, see [Tracking Events](../fundamentals/tracking-events.md).

## Send data

You can send data that matches the schema you created earlier along with your events. For example, if you own a commerce site and added the commerce mixin to your schema, you would send the following structure when someone views a product.

```javascript
{
  "commerce": {
    "productListAdds": {
        "value":1
    }
  },
  "productListItems":{
      "name":"Floppy Green Hat",
      "SKU":"HATFLP123",
      "product":"1234567",
      "quantity":2
  }
}
```
