---
keywords: Experience Platform;home;popular topics;identity namespace;Identity namespace
solution: Experience Platform
title: Identity Service Troubleshooting Guide
description: This document provides answers to frequently asked questions about Adobe Experience Platform Identity Service, as well as a troubleshooting guide for common errors.
exl-id: dac31bc3-7003-46d6-9d41-9f6fd3645c2c
---
# Identity Service troubleshooting guide

This document provides answers to frequently asked questions about Adobe Experience Platform [!DNL Identity Service], as well as a troubleshooting guide for common errors. For questions and troubleshooting regarding [!DNL Platform] APIs in general, see the [Adobe Experience Platform API troubleshooting guide](../landing/troubleshooting.md).

Data that identifies a single customer is often fragmented across the various devices and systems that they use to engage with your brand. [!DNL Identity Service] gathers these fragmented identities together, facilitating a complete understanding of customer behavior so you can deliver impactful digital experiences in real time. For more information, see the [Identity Service overview](./home.md).

## FAQ

The following is a list of answers to frequently asked questions about [!DNL Identity Service].

## What is identity data?

Identity data is any data that can be used to identify an individual person. Depending on the context of how the data is used within your organization, identity data can include usernames, email addresses, and IDs from CRM systems. Identity data is not limited to registered users of your website or service, as anonymous users can also be identified by their device or cookie ID.

## What is the benefit of labeling data fields as identities?

Labeling certain data fields as identities in your record and time series data allows you to map identity relationships within the natural structure of your data and reconcile duplicate data cross channels. See the [Identity Service overview](./home.md) for more information.

## What are known and anonymous identities?

A known identity refers to an identity value that can be used on its own or with other information to identify, contact, or locate an individual person. Examples of known identities may include email addresses, phone numbers, and CRM IDs.

An anonymous identity refers to an identity value that cannot be used on its own or with other information to identify, contact, or locate an individual person (such as a cookie ID).

## What is a Private Identity Graph?

A Private Identity Graph is a private map of relationships between stitched and linked identities, visible only to your organization. 

When more than one identity is included in any data ingested from a streaming endpoint or sent to a dataset enabled for [!DNL Identity Service], those identities are linked in the Private Identity Graph. [!DNL Identity Service] leverages this graph to glean identities for a given consumer or entity, allowing for identity stitching and profile merging.

## How do I create multiple identity fields within an XDM schema?

[Experience Data Model (XDM)](../xdm/home.md) schemas support multiple identity fields. Any data field of type `string` within a schema that implements the XDM Individual Profile or XDM ExperienceEvent class can be labeled as an identity field. Once labeled, any data contained in these fields is added to the profile's identity map.

For steps on how to label an XDM field as an identity field using the user interface, see the [Identity section](../xdm/tutorials/create-schema-ui.md) in the Schema Editor tutorial. If you are using the API, see the [Identity descriptor section](../xdm/tutorials/create-schema-api.md) in the Schema Registry API tutorial.

## Are there contexts where some fields should not be labeled as identities?

Identity fields should be reserved for values that are unique to each individual. For example, consider a dataset for a customer loyalty program. The "loyalty level" field (gold, silver, bronze) would not be a useful identity field, whereas the loyalty ID&mdash;a unique value&mdash;would be.

Fields like ZIP codes and IP addresses should not be labeled as identities for individuals, as these values can apply to more than one individual person. These types of fields should only be labeled as identities for household-level marketing strategies.

## Why are my identity fields not linking the way I expect?

Using the [`/cluster/members` endpoint](./api/list-cluster-identites.md) in the Identity Service API, you can view the associated identities for one or more identity fields. If the response does not return the linked identities you expect, ensure that you are providing the appropriate identity information in your XDM data. See the section on [providing XDM data to Identity Service](./home.md) in the Identity Service overview for more information.

## What is an identity namespace?

An identity namespace gives context for how identity fields relate to a customer's identity. For example, identity fields under the "Email" namespace should conform to a standard email format (name<span>@emailprovider.com) whereas fields using the "Phone" namespace should conform to a standard phone number (such as 987-555-1234 in North America).

Namespaces distinguish similar identity values between different CRM systems. For example, consider a profile that contains a numerical Loyalty ID associated with your company's rewards program. A namespace of "Loyalty" would separate this value from a similar numeric ID for your eCommerce system that also appears in the same profile.

See the [identity namespace overview](./home.md) for more information.

## How do I associate an identity with an identity namespace?

Identity fields must be associated with an existing identity namespace when they are created. Any new namespaces must be [created using the API](#how-do-i-create-a-custom-namespace-for-my-organization) before associating them with identity fields.

For step-by-step instructions for defining a namespace when creating an identity descriptor using the API, please see the section on [creating a descriptor](../xdm/tutorials/create-schema-ui.md) in the Schema Registry developer guide. For marking a schema field as an identity in the UI, follow the steps in the [Schema Editor tutorial](../xdm/tutorials/create-schema-api.md).

## What are the standard identity namespaces provided by Experience Platform? {#standard-namespaces}

Standard identity namespaces are namespaces available to all organizations. See the [Identity namespaces overview](./namespaces.md) for a full list of available standard namespaces.

## Where can I find the list of identity namespaces available for my organization?

Using the [Identity Service API](https://www.adobe.io/experience-platform-apis/references/identity-service), you can list all available identity namespaces for your organization by making a GET request to the `/idnamespace/identities` endpoint. See the section on [listing available namespaces](./api/list-namespaces.md) in the Identity Service API overview for more information.

## How do I create a custom namespace for my organization?

Using the [Identity Service API](https://www.adobe.io/experience-platform-apis/references/identity-service), you can create a custom identity namespace for your organization by making a POST request to the `/idnamespace/identities` endpoint. See the section on [creating a custom namespace](./api/create-custom-namespace.md) in the Identity Service API overview for more information.

## What are composite identities and XIDs?

Identities are referenced in API calls either by their composite identity or XID. A composite identity is a representation of an identity that contains an ID value and a namespace. An XID is a single-value identifier that represents the same construct as a composite identity (an ID and a namespace), and is automatically assigned to new identities when persisted by Identity Service. See the [Identity Service API overview](./home.md) for more information.

## How does Identity Service handle personally identifiable information (PII)?

Identity Service has standard namespaces to support the ingestion of hashed identity values for phone numbers and emails. However, you are responsible for the hashing of values. To learn more about hashing data that is ingested into Platform, see the [[!DNL Data Prep] mapping functions guide](../data-prep/functions.md#hashing).

## Are there any considerations when hashing PII-based identities?

If you are sending hashed PII values to Identity Service, you must use the same encryption method across your datasets. This ensures that the same identity value across datasets generates the same hashed values and are able to be properly matched and linked in the identity graph.

<!-- Documentation does not show any methods of editing the identityMap directly, and this table never overtly recommends using identityMap anyway. This should probably be removed unless PM thinks otherwise. -->
<!-- ## When should I use the Identity map rather than labeling individual XDM schema fields?

The following table describes when the recommended approach for including identity data in your XDM would be identity map and when an identity field is the better method.

>[!NOTE]
>
>An advantage `identityMap` has is the ability to include multiple identity values for a single namespace.

Write|XDM identity field|`identityMap`
---|---|---
UI|Supported|Supported
Developer|Recommended|Supported
ETL|Recommended|Avoid - While this is supported, data should be formatted naturally when using an ETL, favoring identity fields over `identityMap`.
Internal solutions|Preferred|Common

--- -->

## Why can't I access the identity graph page or APIs?

Your Platform administrator must provision you with the `view-identity-graph` permission in order for you to view identity graph data. Without this permission, you will receive a permission denied message on the identity graph viewer page and when calling Platform APIs. See the [access control overvew](../access-control/home.md) for more information on permissions.

## Troubleshooting

The following section provides troubleshooting suggestions for specific error codes and unexpected behavior you may encounter while working with the [!DNL Identity Service] API.

## [!DNL Identity Service] error messages

The following is a list of error messages you may encounter when using the [!DNL Identity Service] API.

### Missing required query parameter

```json
{
    "title": "InvalidInput",
    "status": 400,
    "detail": "Missing required query parameter - namespace"
}
```

This error displays when a required query parameter was not included in the request path. The `detail` of the error message provides the name of the missing parameter. Variations of this error message include:

- Missing required query parameter &ndash; nsId
- Missing required query parameter &ndash; id
- Missing required query parameter &ndash; xid or (nsid,id)
- Missing required query parameter &ndash; targetNs
- Missing required query parameter &ndash; xids or compositeXids

Check that you are properly including the indicated parameter in the request path before trying again.

### Timestamp should be within last 180 days

```json
{
    "title": "InvalidInput",
    "status": 400,
    "detail": "Timestamp should be within last 180 days"
}
```

[!DNL Identity Service] purges data older than 180 days. This error message displays when you attempt to access data older than this.

### There is a limit of 1000 XIDs in a single call

```json
{
    "title": "InvalidInput",
    "status": 400,
    "detail": "There is a limit of 1000 XIDs in a single call"
}
```

This error message displays when you attempt to retrieve identity information for more than the maximum number of [XIDs](#what-are-composite-identities-and-xids) permitted in a single API call. Reduce the number of XIDs in your request to below the displayed limit to resolve this issue.


### There is a limit for 1000 compositeXids in a single call

```json
{
    "title": "InvalidInput",
    "status": 400,
    "detail": "There is a limit for 1000 compositeXids in a single call"
}
```

This error message displays when you attempt to retrieve identity information for more than the maximum number of [composite identities](#what-are-composite-identities-and-xids) permitted in a single API call. Reduce the number of composite identities in your request to below the displayed limit to resolve this issue.

### The graph-type specified is invalid

```json
{
    "title": "InvalidInput",
    "status": 400,
    "detail": "The graph-type abc specified is invalid. Please provide a valid graph-type"
}
```

This error message displays when a `graph-type` query parameter is given an invalid value in the request path. See the section on [identity graphs](./home.md) in the [!DNL Identity Service] overview to learn which graph-types are supported.

### Service token does not have valid scope

```json
{
    "title": "UnauthorizedAccess",
    "status": 401,
    "detail": "Service token does not have valid scope. Either acp.core.identity or acp.foundation is required"
}
```

This error message displays when your organization has not been provisioned with the proper permissions for [!DNL Identity Service]. Contact your system administrator to resolve this issue.

### Gateway service token is not valid

```json
{
    "title": "UnauthorizedAccess",
    "status": 401,
    "detail": "Gateway service token is not valid"
}
```

In the case of this error, your access token is invalid. Access tokens expire every 24 hours and must be regenerated to continue using [!DNL Platform] APIs. See the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en) for instructions on generating new access tokens.

### Authorization service token is not valid

```json
{
    "title": "UnauthorizedAccess",
    "status": 401,
    "detail": "Authorization service token is not valid"
}
```

In the case of this error, your access token is invalid. Access tokens expire every 24 hours and must be regenerated to continue using [!DNL Platform] APIs. See the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en) for instructions on generating new access tokens.

### User token does not have valid product context

```json
{
    "title": "UnauthorizedAccess",
    "status": 401,
    "detail": "User token does not have valid product context"
}
```

This error message displays when your access token has not been generated from an [!DNL Experience Platform] integration. See the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en) for instructions on generating new access tokens for an [!DNL Experience Platform] integration.

### Internal error when getting native XID from identity and namespace code

```json
{
    "title": "UnauthorizedAccess",
    "status": 401,
    "detail": "Invalid IMS Token/IMS Org | Internal error - when tried to get native XID from identity and namespace code"
}
```

When [!DNL Identity Service] persists an identity, the identity's ID and associated namespace ID are assigned a unique identifier called an XID. This message displays when an error occurs during the process of finding the XID for a given ID value and namespace.

### The IMS Org is not provisioned for [!DNL Identity Service] usage

```json
{
    "title": "AccountNotProvisioned",
    "status": 403,
    "detail": "The IMS Org. {IMS_ORG_NAME} is not provisioned for Identity Service usage"
}
```

This error message displays when your organization has not been provisioned with the proper permissions for [!DNL Identity Service]. Contact your system administrator to resolve this issue.

### Internal Server Error

```json
{
    "title": "InternalError",
    "status": 500,
    "detail": "Internal Server Error. There was a problem processing your request"
}
```

This error displays when an unexpected exception occurs in the execution of a [!DNL Platform] service call. Best practice is to program your automated calls to retry their requests a few times at a timed interval when receiving this error. If the problem persists, contact your system administrator.

## Batch Ingestion error codes

[!DNL Identity Service] ingests identity data from record and time series data that is uploaded to [!DNL Platform] using Batch Ingestion. As batch ingestion is an asynchronous process, you must view the details for a batch to view errors. Errors will accumulate as the batch progresses until the batch is complete.

The following is a list of error messages related to [!DNL Identity Service] you may encounter when using the [Batch Ingestion API](https://developer.adobe.com/experience-platform-apis/references/batch-ingestion/).

### Unknown XDM schema

```json
{
    "title": "InvalidInput",
    "status": 400,
    "detail": "Unknown XDM schema"
}
```

[!DNL Identity Service] only consumes identities for record or time series data that conforms to the [!DNL Profile] or [!DNL ExperienceEvent] classes, respectively. Attempting to ingest data for [!DNL Identity Service] that does not adhere to either class will trigger this error.

### There were 0 valid identities in the first 100 rows of the processed batch

```json
{
    "title": "InvalidInput",
    "status": 400,
    "detail": "There were 0 valid identities in the first 100 rows of the processed batch"
}
```

This error displays when the first 100 rows of a batch presented no identities. This error does not indicate conclusively that no identities were found in subsequent records, however.

### Skipped records as they had only 1 identity per XDM record

```json
{
    "title": "InvalidInput",
    "status": 400,
    "detail": "Skipped {NUMBER_OF_RECORDS} records as they had only 1 identity per XDM record"
}
```

[!DNL Identity Service] only links identities when single records present two or more identity values. This error message occurs once for each ingested batch, and displays the number of records where only one identity could be found and resulted in no change to the identity graph.

### Namespace Code is not registered for this IMS Org

```json
{
    "title": "InvalidInput",
    "status": 400,
    "detail": "Namespace Code {ERRONEOUS_CODE} is not registered for this IMS Org"
}
```

This error displays when an ingested record presents an identity whose associated namespace does not exist or is inaccessible by your organization.

### Skipping batch ingestion as IMS Org is not provisioned for Private Identity Graph

```json
{
    "title": "AccountNotProvisioned",
    "status": 403,
    "detail": "Skipping batch ingestion as IMS Org is not provisioned for Private Identity Graph"
}
```

When ingesting batch data, this error message displays when your organization has not been provisioned with the proper permissions for [!DNL Identity Service]. Contact your system administrator to resolve this issue.

### Internal Error

```json
{
    "title": "InternalError",
    "status": 500,
    "detail": "Internal Error. There was a problem during the ingestion"
}
```

This error displays when an unexpected exception occurs during a batch ingestion. Best practice is to program your automated calls to retry their requests a few times at a timed interval when receiving this error. If the problem persists, contact your system administrator.
