---
keywords: Experience Platform;popular topics;XDM;XDM system;XDM individual profile;XDM ExperienceEvent;XDM Experience Event;experienceEvent;experience eventExperience event;XDM Experience Event;XDM ExperienceEvent;experience data model;Experience data model;Experience Data Model;data model;Data Model;schema;troubleshooting;FAQ;faq;Union schema;UNION PROFILE;union profile;http://ns.adobe.com/aep/errors/XDM-1010-404;http://ns.adobe.com/aep/errors/XDM-1011-404;http://ns.adobe.com/aep/errors/XDM-1012-404;http://ns.adobe.com/aep/errors/XDM-1013-404;http://ns.adobe.com/aep/errors/XDM-1014-404;http://ns.adobe.com/aep/errors/XDM-1015-404;http://ns.adobe.com/aep/errors/XDM-1016-404;http://ns.adobe.com/aep/errors/XDM-1017-404;http://ns.adobe.com/aep/errors/XDM-1521-400;http://ns.adobe.com/aep/errors/XDM-1020-400;http://ns.adobe.com/aep/errors/XDM-1021-400;http://ns.adobe.com/aep/errors/XDM-1022-400;http://ns.adobe.com/aep/errors/XDM-1023-400;http://ns.adobe.com/aep/errors/XDM-1024-400;http://ns.adobe.com/aep/errors/XDM-1006-400;http://ns.adobe.com/aep/errors/XDM-1007-400;http://ns.adobe.com/aep/errors/XDM-1008-400;http://ns.adobe.com/aep/errors/XDM-1009-400;http://ns.adobe.com/aep/errors/XDM-1526-400;http://ns.adobe.com/aep/errors/XDM-1527-400;http://ns.adobe.com/aep/errors/XDM-1528-400;XDM-1010-404;XDM-1011-404;XDM-1012-404;XDM-1013-404;XDM-1014-404;XDM-1015-404;XDM-1016-404;XDM-1017-404;XDM-1521-400;XDM-1020-400;XDM-1021-400;XDM-1022-400;XDM-1023-400;XDM-1024-400;XDM-1006-400;XDM-1007-400;XDM-1008-400;XDM-1009-400;XDM-1413-400;XDM-1526-400;XDM-1527-400;XDM-1528-400;
solution: Experience Platform
title: XDM System Troubleshooting Guide
description: Find answers to frequently asked questions about Experience Data Model (XDM), including steps to resolve common API errors.
exl-id: a0c7c661-bee8-4f66-ad5c-f669c52c9de3
---
# XDM System troubleshooting guide

This document provides answers to frequently asked questions about [!DNL Experience Data Model] (XDM) and XDM System in Adobe Experience Platform, including a troubleshooting guide for common errors. For questions and troubleshooting related to other Platform services, please refer to the [Experience Platform troubleshooting guide](../landing/troubleshooting.md).

**[!DNL Experience Data Model] (XDM)** is an open-source specification that defines standardized schemas for customer experience management. The methodology on which [!DNL Experience Platform] is built, **XDM System**, operationalizes [!DNL Experience Data Model] schemas for use by [!DNL Platform] services. The **[!DNL Schema Registry]** provides a user interface and a RESTful API to access the **[!DNL Schema Library]** within [!DNL Experience Platform]. See the [XDM documentation](home.md) for more information.

## FAQ

The following is a list of answers to frequently asked questions about XDM System and use of the [!DNL Schema Registry] API.

### How do I add fields to a schema?

You can add fields to a schema by using a schema field group. Each field group is compatible with one or more classes, allowing the field group to be used in any schema that implements one of those compatible classes. While Adobe Experience Platform provides several industry field groups with their own pre-defined fields, you can add your own fields to a schema by creating custom field groups using the API or the user interface.

For details on creating field groups in the [!DNL Schema Registry] API, see the [field group endpoint guide](api/field-groups.md#create). If you are using the UI, see the [Schema Editor tutorial](./tutorials/create-schema-ui.md).

### What are the best uses for field groups vs data types?

[Field groups](./schema/composition.md#field-group) are components that define one or more fields in a schema. Field groups enforce how their fields appear in the schema's hierarchy, and therefore exhibit the same structure in every schema that they are included in. Field groups are only compatible with specific classes, as identified by their `meta:intendedToExtend` attribute. 

[Data types](./schema/composition.md#data-type) can also provide one or more fields for a schema. However, unlike field groups, data types are not constrained to a particular class. This makes data types a more flexible option to describe common data structures that are reusable across multiple schemas with potentially different classes.

### What is the unique ID for a schema?

All [!DNL Schema Registry] resources (schemas, field groups, data types, classes) have a URI that acts as a unique ID for reference and lookup purposes. When viewing a schema in the API, it can be found in the top-level `$id` and `meta:altId` attributes.

For more information, see the [resource identification](api/getting-started.md#resource-identification) section in the [!DNL Schema Registry] API guide.

### When does a schema start preventing breaking changes?

Breaking changes can be made to a schema as long as it has never been used in the creation of a dataset or enabled for use in [[!DNL Real-Time Customer Profile]](../profile/home.md). Once a schema has been used in dataset creation or enabled for use with [!DNL Real-Time Customer Profile], the rules of [Schema Evolution](schema/composition.md#evolution) become strictly enforced by the system.

### What is the maximum size of a long field type?

A long field type is an integer with a maximum size of 53(+1) bits, giving it a potential range between -9007199254740992 and 9007199254740992. This is due to a limitation of how JavaScript implementations of JSON represent long integers.

For more information on field types, see the document on [XDM field type constraints](./schema/field-constraints.md).

### How do I define identities for my schema?

In [!DNL Experience Platform], identities are used to identify a subject (typically an individual person) regardless of the sources of data being interpreted. They are defined in schemas by marking key fields as "Identity". Commonly used fields for identity include email address, phone number, [[!DNL Experience Cloud ID (ECID)]](https://experienceleague.adobe.com/docs/id-service/using/home.html), CRM ID, and other unique ID fields.

Fields can be marked as identities using either the API or user interface.

#### Defining identities in the API

In the API, identities are established by creating identity descriptors. Identity descriptors signal that a particular property for a schema is a unique identifier.

Identity descriptors are created by a POST request to the /descriptors endpoint. If successful, you will receive an HTTP Status 201 (Created) and a response object containing the details of the new descriptor.

For more details on creating identity descriptors in the API, see the document on [descriptors](api/descriptors.md) section in the [!DNL Schema Registry] developer guide.

#### Defining identities in the UI

With your schema open in the Schema Editor, select the field in the **[!UICONTROL Structure]** section of the editor that you wish to mark as an identity. Under **[!UICONTROL Field Properties]** on the right-hand side, select the **[!UICONTROL Identity]** checkbox. 

For more details on managing identities in the UI, see the section on [defining identity fields](./tutorials/create-schema-ui.md#identity-field) section in the Schema Editor tutorial.

### Does my schema need a primary identity?

Primary identities are optional, since schemas may have either zero or one of them. However, a schema must have a primary identity in order for the schema to be enabled for use in [!DNL Real-Time Customer Profile]. See the [identity](./tutorials/create-schema-ui.md#identity-field) section of the Schema Editor tutorial for more information. 

### How do I enable a schema for use in [!DNL Real-Time Customer Profile]?

Schemas are enabled for use in [[!DNL Real-Time Customer Profile]](../profile/home.md) through the addition of a "union" tag within the `meta:immutableTags` attribute of the schema. Enabling a schema for use with [!DNL Profile] can be done using the API or the user interface.

#### Enabling an existing schema for [!DNL Profile] using the API

Make a PATCH request to update the schema and add the `meta:immutableTags` attribute as an array containing the value "union". If the update is successful, the response will show the updated schema which now contains the union tag.

For more information on using the API to enable a schema for use in [!DNL Real-Time Customer Profile], see the [unions](./api/unions.md) document of the [!DNL Schema Registry] developer guide. 

#### Enabling an existing schema for [!DNL Profile] using the UI

In [!DNL Experience Platform], select **[!UICONTROL Schemas]** in the left-navigation, and select the name of the schema you wish to enable from the list of schemas. Then, on the right-hand side of the editor under **[!UICONTROL Schema Properties]**, select **[!UICONTROL Profile]** to toggle it on.


For more information, see the section on [use in Real-Time Customer Profile](./tutorials/create-schema-ui.md#profile) in the [!UICONTROL Schema Editor] tutorial.

### Can I edit a union schema directly?

Union schemas are read-only and are automatically generated by the system. They cannot be edited directly. Union schemas are created for a specific class when a "union" tag is added to schema that implements that class.

For more information on unions in XDM, see the [unions](./api/unions.md) section in the [!DNL Schema Registry] API guide.

### How should I format my datafile to ingest data into my schema?

[!DNL Experience Platform] accepts datafiles in either [!DNL Parquet] or JSON format. The contents of these files must conform to the schema referenced by the dataset. For details about best practices for datafile ingestion, see the [batch ingestion overview](../ingestion/home.md).

## Errors and troubleshooting

The following is a list of error messages that you may encounter when working with the [!DNL Schema Registry] API. 

### Resource not found

```json
{
    "type": "http://ns.adobe.com/aep/errors/XDM-1010-404",
    "title": "Resource not found",
    "status": 404,
    "report": {
        "registryRequestId": "a15996b5-5133-4cec-9bf7-7d1207904ae3",
        "timestamp": "06-01-2021 04:11:06",
        "detailed-message": "The requested class resource https://ns.adobe.com/{TENANT_ID}/classes/11447bb484d4599d2cd9b0aseefff78b463cbbde1527f498 with version 1 is not found.",
        "sub-errors": []
    },
    "detail": "The requested class resource https://ns.adobe.com/{TENANT_ID}/classes/11447bb484d4599d2cd9b0aseefff78b463cbbde1527f498 with version 1 is not found."
}
```

This error displays when the system could not find a particular resource. The resource may have been deleted, or the path in the API call is invalid. Ensure that you have entered a valid path for your API call before trying again. You may want to check that you have entered the correct ID for the resource, and that the path is properly namespaced with the appropriate container (global or tenant).

>[!NOTE]
>
>Depending on the resource type being retrieved, this error can use any of the following `type` URIs:
>
>* `http://ns.adobe.com/aep/errors/XDM-1010-404`
>* `http://ns.adobe.com/aep/errors/XDM-1011-404`
>* `http://ns.adobe.com/aep/errors/XDM-1012-404`
>* `http://ns.adobe.com/aep/errors/XDM-1013-404`
>* `http://ns.adobe.com/aep/errors/XDM-1014-404`
>* `http://ns.adobe.com/aep/errors/XDM-1015-404`
>* `http://ns.adobe.com/aep/errors/XDM-1016-404`
>* `http://ns.adobe.com/aep/errors/XDM-1017-404`

For more information on constructing lookup paths in the API, see the [container](./api/getting-started.md#container) and [resource identification](api/getting-started.md#resource-identification) sections in the [!DNL Schema Registry] developer guide.

### Title not unique

```json
{
    "type": "http://ns.adobe.com/aep/errors/XDM-1521-400",
    "title": "Title not unique",
    "status": 400,
    "report": {
        "registryRequestId": "a15996b5-5133-4cec-9bf7-7d1207904ae3",
        "timestamp": "06-01-2021 04:11:06",
        "detailed-message": "Object titles must be unique. An object https://ns.adobe.com/{TENANT_ID}/classes/11447bb484d4599d2cd9b0aseefff78b463cbbde1527f498 already exists with the same title",
        "sub-errors": []
    },
    "detail": "Object titles must be unique. An object https://ns.adobe.com/{TENANT_ID}/classes/11447bb484d4599d2cd9b0aseefff78b463cbbde1527f498 already exists with the same title"
}
```

This error message displays when you attempt to create a resource with a title that is already being used by another resource. Titles must be unique across all resource types. For example, if you try to create a field group with a title that is already being used by a schema, you will receive this error.

### Namespace validation error

```json
{
    "type": "http://ns.adobe.com/aep/errors/XDM-1021-400",
    "title": "Namespace validation error",
    "status": 400,
    "report": {
        "registryRequestId": "a15996b5-5133-4cec-9bf7-7d1207904ae3",
        "timestamp": "06-01-2021 04:11:06",
        "detailed-message": "A custom field is defined under an invalid namespace. All custom fields must be defined under a top-level field named {TENANT_ID}.",
        "sub-errors": []
    },
    "detail": "A custom field is defined under an invalid namespace. All custom fields must be defined under a top-level field named {TENANT_ID}."
}
```

This error message displays when you attempt to create a resource with improperly namespaced fields, or add improperly namespaced fields to an existing resource.

Resources that are defined by your IMS organization must namespace their fields under your tenant ID in order to avoid conflicts with other industry and vendor resources. When building a schema using standard field groups, any custom fields that you add within the structure of those field groups must also be namespaced under your tenant ID.

>[!NOTE]
>
>Depending on the specific nature of the namespace error, this error can use any of the following `type` URIs along with different message details:
>
>* `http://ns.adobe.com/aep/errors/XDM-1020-400`
>* `http://ns.adobe.com/aep/errors/XDM-1021-400`
>* `http://ns.adobe.com/aep/errors/XDM-1022-400`
>* `http://ns.adobe.com/aep/errors/XDM-1023-400`
>* `http://ns.adobe.com/aep/errors/XDM-1024-400`

Detailed examples of proper data structures for XDM resources can be found in the Schema Registry API guide:

* [Create a custom class](./api/classes.md#create)
* [Create a custom field group](./api/field-groups.md#create)
* [Create a custom data type](./api/data-types.md#create)

### Accept header invalid

```json
{
    "type": "http://ns.adobe.com/aep/errors/XDM-1006-400",
    "title": "Accept header invalid",
    "status": 400,
    "report": {
        "registryRequestId": "a15996b5-5133-4cec-9bf7-7d1207904ae3",
        "timestamp": "06-01-2021 04:11:06",
        "detailed-message": "The supplied Accept header is not valid: application/vnd.adobe.xed+json;version=1 - A valid Accept value should look like application/vnd.adobe.{xed|xdm}+json",
        "sub-errors": []
    },
    "detail": "The supplied Accept header is not valid: application/vnd.adobe.xed+json;version=1 - A valid Accept value should look like application/vnd.adobe.{xed|xdm}+json"
}
```

GET requests in the [!DNL Schema Registry] API require an `Accept` header in order for the system to determine how to format the response. This error occurs when a required `Accept` header is invalid or missing.

Depending on the endpoint you are using, the `detailed-message` property indicates what a valid `Accept` header should look like for a successful response. Ensure that you have correctly entered an `Accept` header that is compatible with the API request you are trying to make before trying again.

>[!NOTE]
>
>Depending on the endpoint being used, this error can use any of the following `type` URIs:
>
>* `http://ns.adobe.com/aep/errors/XDM-1006-400`
>* `http://ns.adobe.com/aep/errors/XDM-1007-400`
>* `http://ns.adobe.com/aep/errors/XDM-1008-400`
>* `http://ns.adobe.com/aep/errors/XDM-1009-400`

For lists of compatible Accept headers for different API requests, please refer to their corresponding sections in the [Schema Registry developer guide](./api/overview.md).

### [!DNL Real-Time Customer Profile] errors

The following error messages are associated with operations involved in enabling schemas for [!DNL Real-Time Customer Profile]. See the [unions](./api/unions.md) section in the [!DNL Schema Registry] API guide for more information.

#### There must be a reference identity descriptor

```json
{
    "type": "http://ns.adobe.com/aep/errors/XDM-1526-400",
    "title": "Union descriptor validation error",
    "status": 400,
    "report": {
        "registryRequestId": "a15996b5-5133-4cec-9bf7-7d1207904ae3",
        "timestamp": "06-01-2021 04:11:06",
        "detailed-message": "If a schema contains properties that are associated with an xdm:descriptorOneToOne descriptor, those properties must also have a xdm:descriptorReferenceIdentity descriptor for that schema to participate in a union.",
        "sub-errors": []
    },
    "detail": "If a schema contains properties that are associated with an xdm:descriptorOneToOne descriptor, those properties must also have a xdm:descriptorReferenceIdentity descriptor for that schema to participate in a union."
}
```

This error message displays when you attempt to enable a schema for [!DNL Profile] and one of its properties contains a relationship descriptor without a reference identity descriptor. Add a reference identity descriptor to the schema field in question to resolve this error.

#### The namespaces of the reference identity descriptor field and destination schema must match

```json
{
    "type": "http://ns.adobe.com/aep/errors/XDM-1527-400",
    "title": "Union descriptor validation error",
    "status": 400,
    "report": {
        "registryRequestId": "a15996b5-5133-4cec-9bf7-7d1207904ae3",
        "timestamp": "06-01-2021 04:11:06",
        "detailed-message": "If both schemas from an existing xdm:descriptorOneToOne descriptor are promoted to union, and one of those schemas contains a primary identity, the xdm:identityNamespace of the source schema's descriptorReferenceIdentity field must match the xdm:namespace field of destination schema's xdm:descriptorIdentity field.",
        "sub-errors": []
    },
    "detail": "If both schemas from an existing xdm:descriptorOneToOne descriptor are promoted to union, and one of those schemas contains a primary identity, the xdm:identityNamespace of the source schema's descriptorReferenceIdentity field must match the xdm:namespace field of destination schema's xdm:descriptorIdentity field."
}
```

>[!NOTE]
>
>For this error, the "destination schema" refers to the reference schema in the relationship.

In order to enable schemas that contain relationship descriptors for use in [!DNL Profile], the namespace of the source field and the primary namespace of the reference field must be the same. This error message displays when you attempt to enable a schema that contains an unmatched namespace for its reference identity descriptor.

Ensure that the `xdm:namespace` value of the reference schema's identity field matches that of the `xdm:identityNamespace` property in the source field's reference identity descriptor to resolve this issue.

For a list of standard identity namespace codes, see the section on [standard namespaces](../identity-service/namespaces.md) in the identity namespace overview.

#### The schema must include an identityMap or primary identity

```json
{
    "type": "http://ns.adobe.com/aep/errors/XDM-1528-400",
    "title": "Union descriptor validation error",
    "status": 400,
    "report": {
        "registryRequestId": "a15996b5-5133-4cec-9bf7-7d1207904ae3",
        "timestamp": "06-01-2021 04:11:06",
        "detailed-message": "To participate in a union, a schema must include an identityMap fieldgroup or a primary identity descriptor.",
        "sub-errors": []
    },
    "detail": "To participate in a union, a schema must include an identityMap fieldgroup or a primary identity descriptor."
}
```

Before enabling a schema for Profile, you must first [create a primary identity descriptor](./api/descriptors.md#create) for the schema, or include an identity map field to act at the primary identity instead.

#### Cannot merge incompatible data types

```json
{
    "type": "http://ns.adobe.com/aep/errors/XDM-1413-400",
    "title": "Merge Schema Error",
    "status": 400,
    "report": {
        "registryRequestId": "a15996b5-5133-4cec-9bf7-7d1207904ae3",
        "timestamp": "06-01-2021 04:11:06",
        "detailed-message": "Cannot merge incompatible data types. The path /person/name has already been defined in schema (id=0238be93d3e7a06aec5e0655955901ec) using a different data type. Types: string, object",
        "sub-errors": []
    },
    "detail": "Cannot merge incompatible data types. The path /person/name has already been defined in schema (id=0238be93d3e7a06aec5e0655955901ec) using a different data type. Types: string, object"
}
```

All Profile-enabled schemas belonging to the same class must be able to merge together in order to construct the union schema for that class. This error appears when you try to add a field to a schema whose path is shared by another Profile-enabled schema and the data type is different than the original. Since the schemas are both Profile-enabled and contain the same field path, Profile would attempt to merge these two fields into one when constructing the union schema. Since different data types cannot be merged together, this would be considered a merge conflict and is not allowed.

To resolve the issue, choose a different name for the field or nest it under a uniquely namespaced object in order to avoid merge conflicts with other Profile-enabled schemas under the same class with similar fields.
