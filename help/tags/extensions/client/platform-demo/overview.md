---
title: Adobe Experience Platform Demo Extension Overview
description: Learn about the Adobe Experience Platform Demo extension in Adobe Experience Platform.
exl-id: 4bafa132-0d21-4140-ab46-f09cc20bce6f
---
# Adobe Experience Platform Demo Extension

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../../term-updates.md) for a consolidated reference of the terminology changes.

>[!NOTE]
>
>This extension has been deprecated in favor of the [Adobe Experience Platform Web SDK](../web-sdk/overview.md).

The features of this extension are being ported over to new extension. Here is a quick comparison of current features. 

| Platform Demo Extension | Platform Web SDK |
| ------------------ | ----------- |
| Support for Custom Customer IDs | Support for Custom Cusotmer IDs|
| Client-Side Mapping UI for XDM | Build in ECID (No need for visitor.js)|
| Ability to create a streaming connection | Opt-in Support |
| | XDM Support as a data element | 
| | First Party Domain Support | 
| | Debugging tools built in | 
| | Automatically collects browser context | 
| | Fully open source | 


## Configure the Adobe Experience Platform extension

This section provides a reference for the options available when configuring the Adobe Experience Platform extension.

If the Adobe Experience Platform extension is not yet installed, open your property, then select **[!UICONTROL Extensions > Catalog]**, hover over the Adobe Experience Platform extension, and select **[!UICONTROL Install]**.

To configure the extension, open the [!UICONTROL Extensions] tab, hover over the extension, and then select **[!UICONTROL Configure]**.

![](../../../images/adobe-experience-platform-extension-configuration.png)

### Streaming Connection

Choosing a streaming connection is the first step for you to start streaming data to Adobe Experience Platform. You can select one from the streaming connection combobox. Streaming connection is a required field. In case you don't have any streaming connection created, you can create one by selecting the **[!UICONTROL Create a streaming connection]** button.

If you select **[!UICONTROL Create a streaming connection]** a modal window will appear.

![](../../../images/adobe-experienc-platform-create-streaming-connection.png)

The modal contains fields with pre-populated values that can be changed to suit your needs. If you plan to create more than one streaming connection, you should be aware that the **[!UICONTROL Data Source]** field needs to be unique. Trying to create another streaming connection using a **[!UICONTROL Data Source]** already used on another connection will fail.

Once you selected a streaming endpoint, you will the streaming endpoint URL and source.

![](../../../images/adobe-experience-platform-streaming-endpoint-selected.png)

## Adobe Experience Platform extension action types

This section describes the action types available in the Adobe Experience Platform extension.

### Send Beacon {#send-beacon}

This is the action type you will use in order to send data to the Adobe Experience Platform.

![](../../../images/adobe-experience-platform-send-beacon-dataset.png)

You first need to select the dataset where the data will be stored. Generally, datasets represent a table that will store the data sent via the streaming connection. You need to create the datasets inside the Adobe Experience Platform before using this action type.

![](../../../images/adobe-experience-platform-send-beacon-dataset-selected1.png)

After you select the dataset where the data will be stored, you will see details about the schema that is linked to the selected dataset.

### Schema Mapping

After selecting the dataset you can define your schema mapping.

![](../../../images/adobe-experience-platform-send-beacon-schema-mapping.png)

The source value field accepts a value or a data element. You can add a data element by selecting the data element button that is located next to the source value field.

The target schema field contains the path of an XDM field defined in the dataset schema. For fields defined deeper in the schema hierarchy, you can use the dot as a separator between the path parts  (eg. timeSeriesEvents.eventType).

### Schema Field Selector

The extension offers also the possibility to select a target schema field using a visual selector. If you select the target button that sits next to the target schema field input, a modal will be shown where you will see the dataset's schema tree. You can choose a field, then select the **Select** button and the target schema field input will be updated the contain the correct XDM path.

![](../../../images/adobe-experience-platform-send-beacon-schema-field-selector.png)

### Identity fields inside the Adobe Experience Platform

Record data schemas and time-series data schemas may contain one or more identity fields. Identity fields stitch together to form a single identity representation of a subject and include information such as a CRM identifier, Experience Cloud ID (ECID), browser cookie, AdvertisingId, or other IDs in different domains.

Identity fields can be defined in two ways inside the schema:

1. Record and Time Series schemas both contain a special field called `xdm:identityMap` that can contain a map of identities.
1. Key fields can be marked as "Identity" fields inside the schema.

### Identity fields inside the Adobe Experience Platform Extension

For each schema field defined as an identity field, a row will be added to the schema mapping section. Each added row will contain the target schema field already filled in with its corresponding XDM schema path. You can recognize if a schema field is also an identity field if you see a profile icon near the field.

![](../../../images/adobe-experience-platform-send-beacon-identity-field.png)

The primary identity fields are always required, so you can not delete the rows containing them from the schema mapping section.

A schema field that is defined as a non-primary identity field, will be automatically added to the schema mapping section, but the source value input can remain empty. That field can be deleted. The field will get discarded if its corresponding source value input is empty.

![](../../../images/adobe-experience-platform-send-beacon-identity-field-warning.png)

You will see a warning icon near each non-primary identity field that doesn't contain a value.

An identity section will be visible if your schema contains an `xdm:identityMap` field. You can use this section if you prefer to send data related to identities using the `xdm:identityMap`.

![](../../../images/adobe-experience-platform-send-beacon-identity-section.png)

The identity mapping section can contain multiple rows. Each row can define a certain identity type. You can define the following attributes for an identity: type, authenticated state, primary, and value.

If you have multiple identities inside the identity mapping section, only one identity can be marked as primary.

If you have a schema that has an `xdm:identityMap` field and at the same time another field is marked as a primary identity field, the primary column from inside the identity mapping section will not be visible.

![](../../../images/adobe-experience-platform-send-beacon-identity-section-not-primary.png)

### Required fields

Some schemas will have top-level required fields. The most commons ones are `timestamp` and `_id`. Without defining these fields, the beacon will fail. You can define them inside the schema mapping section.

If your schema mapping section won't contain `timestamp` or `_id`, but the dataset schema requires them, the Adobe Experience Platform extension will send a beacon containing automatically generated values so that the beacon will not fail. The automatically generated values will be added to the beacon data only if you haven't defined those fields inside the schema mapping section.
