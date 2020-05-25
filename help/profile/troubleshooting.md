---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API
solution: Adobe Experience Platform
title: Real-time Customer Profile troubleshooting guide
topic: guide
---

# Real-time Customer Profile troubleshooting guide

This document provides answers to frequently asked questions about Real-time Customer Profile, as well as a troubleshooting guide for common errors. For questions and troubleshooting related to other services in Adobe Experience Platform, please refer to the [Experience Platform troubleshooting guide](../landing/troubleshooting.md).

Real-time Customer Profile is a generic lookup entity store that merges data from various enterprise data assets, and then provides access to that data in the form of individual customer profiles and related time series events. This feature enables marketers to drive coordinated, consistent and relevant experiences with their audiences across multiple channels.

## FAQ

### What kinds of data are required for Real-time Customer Profile?

### If I have already ingested data into Platform, can I convert it into Profile data?

### Where is Profile data stored?

### How can I access my Profile data?


## Error codes

The following is a list of error messages that you may encounter when working with the Real-time Customer Profile API. If the error you are encountering is not listed here, you may find it in the general [Platform troubleshooting guide](../landing/troubleshooting.md) instead.

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

###  Invalid delete request (Profile System Job)

```json
{
  "code": "400",
  "message": "Invalid delete request (Profile System Job)"
}
```

This error occurs when an invalid payload is provided for a delete system job. Ensure that you are providing a valid dataset or batch ID under the payload's `dataSetID` or `batchID` property, respectively. See the section on [creating a delete request](./api/profile-system-jobs.md#create-a-delete-request) in the Profile developer guide for more information.