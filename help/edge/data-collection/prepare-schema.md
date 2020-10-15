---
title: Prepare your XDM Schema
seo-title: Prepare your XDM Schema
description: A guide to help you build your XDM Schema in Adobe Experience Platform
seo-description: A guide to help you build your XDM Schema in Adobe Experience Platform
keywords: XDM;schema;create schema;
---

# Prepare a schema

The Experience Platform Edge Network uses the Experience Data Model (XDM). XDM is a data format that lets you define schemas. The schema defines how the Edge Network expects the data to be formatted. To send data, you must define your schema.

1. [Create a schema](../../xdm/tutorials/create-schema-ui.md)
2. Add the AEP [!DNL Web SDK ExperienceEvent] Mixin to the schema you created.
3. Create a Dataset from the schema you created.

The following video is intended to support you in creating a schema, dataset, and streaming source connector for your [!DNL Web SDK] data.


>[!VIDEO](https://video.tv.adobe.com/v/35395?quality=12&learn=on)

Log in to Adobe Experience platform Launch and install the AEP Web SDK extension. When you install the SDK, you are prompted to configure the extension. Enter the Config ID you requested above. The extension automatically fills in your Organization ID.

For more details on different configuration options, see [Configuring the SDK](../fundamentals/configuring-the-sdk.md).

[Learn more about building out your schema](https://docs.adobe.com/content/help/en/experience-platform/xdm/schema/composition.html)
