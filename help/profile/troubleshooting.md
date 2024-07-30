---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API
title: Real-Time Customer Profile Troubleshooting Guide
type: Documentation
description: This document provides answers to frequently asked questions about Real-Time Customer Profile, as well as a troubleshooting guide for common errors when working with Profile data using Adobe Experience Platform.
exl-id: 0b340025-093b-41e4-8053-969a8e80e889
---
# Real-Time Customer Profile troubleshooting guide

This document provides answers to frequently asked questions about Real-Time Customer Profile, as well as a troubleshooting guide for common errors. For questions and troubleshooting related to other services in Adobe Experience Platform, please refer to the [Experience Platform troubleshooting guide](../landing/troubleshooting.md).

With [!DNL Real-Time Customer Profile], you can see a holistic view of each individual customer by combining data from multiple channels, including online, offline, CRM, and third party. This enables marketers to drive coordinated, consistent, and relevant experiences for customers across multiple channels.

## FAQ

The following is a list of answers to frequently asked questions about Real-Time Customer Profile.

### What kinds of data are accepted for Real-Time Customer Profile?

Profile accepts both **record** and **time-series** data, as long as the data in question contains at least one identity value that associates the data with a unique individual person.

Like all Platform services, Profile requires its data to be semantically structured under an Experience Data Model (XDM) schema. In turn, this schema must have a **primary identity** defined and be enabled for use in Profile.

If you are unfamiliar with XDM, start with the [XDM overview](../xdm/home.md) to learn more. Next, see the XDM user guide for steps on how to [set identity fields](../xdm/tutorials/create-schema-ui.md#identity-field) and [enable a schema for Profile](../xdm/tutorials/create-schema-ui.md#profile).

### Where is Profile data stored?

Real-Time Customer Profile maintains its own data store (referred to as the "Profile store"), separate from the Data Lake that contains other ingested Platform data. 

### If I have already ingested data into Platform, can I make it available in the Profile store?

If data has been ingested into a non-Profile dataset, you must re-ingest that data into a Profile-enabled dataset in order to make it available in the Profile store. It is possible to enable an existing dataset for Profile, however any data that was ingested prior to that configuration will still not appear in the Profile store.

If you wish to add previously ingested data to the Profile store, follow the [dataset configuration tutorial](./tutorials/dataset-configuration.md) to create a new dataset or convert an existing dataset to be enabled for Profile, and then re-ingest the desired data into that dataset.

### How can I view my ingested Profile data?

There are multiple methods of viewing Profile data, depending on whether you are using the API or UI.

#### Using the API

If you know the IDs of the Profile entities you want to access, you can use the `/entities` (Profile access) endpoint in the Profile API to look up those entities. See the section on [entities](./api/entities.md) in the developer guide for more information.

You can also use the Adobe Experience Platform Segmentation Service API to access the individual profiles of customers who have qualified for an audience membership. See the [Segmentation Service overview](../segmentation/home.md) for more information.

#### Using the UI

In the Experience Platform UI, the **[!UICONTROL Browse]** tab in the **[!UICONTROL Profiles]** workspace allows you to view the total profile count and search for individual profiles by their identity value. See the [Profile user guide](./ui/user-guide.md) for more information.

You can also view a list of your audiences under the **[!UICONTROL Browse]** tab in the **[!UICONTROL Audiences]** workspace. After selecting an audience, a sample of profiles qualified for that audience is displayed. You can then select any of these listed profiles to view their details. See the [Segmentation UI overview](../segmentation/ui/overview.md) for more information.

## Error codes

The following is a list of error messages that you may encounter when working with the Real-Time Customer Profile API. If the error you are encountering is not listed here, you may find it in the general [Platform troubleshooting guide](../landing/troubleshooting.md) instead.

### Could not lookup schema of the computed attribute for the provided path

```json
{
  "code": "400",
  "message": "Could not lookup schema of the computed attribute for the provided path"
}
```

When creating a new computed attribute, this error occurs when the system could not find the schema provided in the request payload. Ensure that you have provided the correct tenant ID in the payload's `path` property, and that the values of `schema.name` is a valid schema name.

If you do not know your tenant ID, you can retrieve it by following the steps in the [Schema Registry developer guide](../xdm/api/getting-started.md).

### Function with the same name already exists for the specified schema or definedOn

```json
{
  "code": "400",
  "message": "Function with the same name already exists for the specified schema or definedOn"
}
```

When creating a new computed attribute, this error occurs when the provided `name` property is already being used for the schema indicated under `schema.name`. Replace the value with a unique name before trying again.

### Return schema of the expression is not same as the schema of the computed attribute in the XDM schema

```json
{
  "code": "400",
  "message": "Return schema of the expression is not same as the schema of the computed attribute in the XDM schema"
}
```

When creating a new computed attribute, this error occurs when the provided `name` property is already being used for the schema indicated under `schema.name`. Replace the value with a unique name before trying again.

### Invalid delete request (Profile System Job)

```json
{
  "code": "400",
  "message": "Invalid delete request (Profile System Job)"
}
```

This error occurs when an invalid payload is provided for a delete system job. Ensure that you are providing a valid dataset or batch ID under the payload's `dataSetID` or `batchID` property, respectively. See the section on [creating a delete request](./api/profile-system-jobs.md#create-a-delete-request) in the Profile developer guide for more information.

### Batch not found for profile dataset

```json
{
  "requestId":"LlTmQkhgHKFGHGHnIkmUxcIL4YTFSpQw",
  "errors":{
    "400":[
      {
        "code":"400",
        "message":"Batch not found for profile dataset '5da688d2c4e60518ad25b7b1'"
      }
    ]
  }
}
```

This error occurs when a valid batch could not be found when attempting to create a delete request for Profile data. Check that you have entered the correct ID for a Profile-enabled dataset before trying again.

### Unsupported media type

```json
{
  "status": 415,
  "title": "HTTP 415 Unsupported Media Type",
  "type": "http://ns.adobe.com/adobecloud/problem/unsupported-media-type"
}
```

This error occurs when sending a POST or PUT request with an invalid Content-Type header. Double-check that you are providing a valid Content-Type value for the endpoint you are using.

Most Profile endpoints accept "application/json" for their Content-Type header, with the following exceptions:

| Endpoint | Content-Type |
| --- | --- |
| `/config/projections` | application/vnd.adobe.platform.projectionConfig+json; version=1 |
| `/config/destinations` | application/vnd.adobe.platform.projectionDestination+json; version=1 |
