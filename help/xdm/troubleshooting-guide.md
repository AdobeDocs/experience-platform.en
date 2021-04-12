---
keywords: Experience Platform;home;popular topics;XDM;XDM system;XDM individual profile;XDM ExperienceEvent;XDM Experience Event;experienceEvent;experience eventExperience event;XDM Experience Event;XDM ExperienceEvent;experience data model;Experience data model;Experience Data Model;data model;Data Model;schema;troubleshooting;FAQ;faq;Union schema;UNION PROFILE;union profile
solution: Experience Platform
title: XDM System Troubleshooting Guide
description: This document provides answers to frequently asked questions about Experience Data Model (XDM) and XDM System in Adobe Experience Platform, as well as a troubleshooting guide for common errors.
topic: troubleshooting
exl-id: a0c7c661-bee8-4f66-ad5c-f669c52c9de3
---
# XDM System troubleshooting guide

This document provides answers to frequently asked questions about [!DNL Experience Data Model] (XDM) and XDM System in Adobe Experience Platform, as well as a troubleshooting guide for common errors. For questions and troubleshooting related to other Platform services, please refer to the [Experience Platform troubleshooting guide](../landing/troubleshooting.md).

**[!DNL Experience Data Model] (XDM)** is an open-source specification that defines standardized schemas for customer experience management. The methodology on which [!DNL Experience Platform] is built, **XDM System**, operationalizes [!DNL Experience Data Model] schemas for use by [!DNL Platform] services. The **[!DNL Schema Registry]** provides a user interface and a RESTful API to access the **[!DNL Schema Library]** within [!DNL Experience Platform]. See the [XDM documentation](home.md) for more information.

## FAQ

The following is a list of answers to frequently asked questions about XDM System and use of the [!DNL Schema Registry] API.

### How do I add fields to a schema?

You can add fields to a schema by using a schema field group. Each field group is compatible with one or more classes, allowing the field group to be used in any schema that implements one of those compatible classes. While Adobe Experience Platform provides several industry field groups with their own pre-defined fields, you can add your own fields to a schema by creating new field groups using the API or the user interface.

For details on creating new field groups in the [!DNL Schema Registry] API, see the [field group endpoint guide](api/mixins.md#create). If you are using the UI, see the [Schema Editor tutorial](./tutorials/create-schema-ui.md).

### What are the best uses for field groups vs data types?

[Field groups](./schema/composition.md#mixin) are components that define one or more fields in a schema. Field groups enforce how their fields appear in the schema's hierarchy, and therefore exhibit the same structure in every schema that they are included in. Field groups are only compatible with specific classes, as identified by their `meta:intendedToExtend` attribute. 

[Data types](./schema/composition.md#data-type) can also provide one or more fields for a schema. However, unlike field groups, data types are not constrained to a particular class. This makes data types a more flexible option to describe common data structures that are reusable across multiple schemas with potentially different classes.

### What is the unique ID for a schema?

All [!DNL Schema Registry] resources (schemas, field groups, data types, classes) have a URI that acts as an unique ID for reference and lookup purposes. When viewing a schema in the API, it can be found in the top-level `$id` and `meta:altId` attributes.

For more information, see the [resource identification](api/getting-started.md#resource-identification) section in the [!DNL Schema Registry] API developer guide.

### When does a schema start preventing breaking changes?

Breaking changes can be made to a schema as long as it has never been used in the creation of a dataset or enabled for use in [[!DNL Real-time Customer Profile]](../profile/home.md). Once a schema has been used in dataset creation or enabled for use with [!DNL Real-time Customer Profile], the rules of [Schema Evolution](schema/composition.md#evolution) become strictly enforced by the system.

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

Primary identities are optional, since schemas may have 0 or 1 of them. However, a schema must have a primary identity in order for the schema to be enabled for use in [!DNL Real-time Customer Profile]. See the [identity](./tutorials/create-schema-ui.md#identity-field) section of the Schema Editor tutorial for more information. 

### How do I enable a schema for use in [!DNL Real-time Customer Profile]?

Schemas are enabled for use in [[!DNL Real-time Customer Profile]](../profile/home.md) through the addition of a "union" tag, located in the `meta:immutableTags` attribute of the schema. Enabling a schema for use with [!DNL Profile] can be done using the API or the user interface.

#### Enabling an existing schema for [!DNL Profile] using the API

Make a PATCH request to update the schema and add the `meta:immutableTags` attribute as an array containing the value "union". If the update is successful, the response will show the updated schema which now contains the union tag.

For more information on using the API to enable a schema for use in [!DNL Real-time Customer Profile], see the [unions](./api/unions.md) document of the [!DNL Schema Registry] developer guide. 

#### Enabling an existing schema for [!DNL Profile] using the UI

In [!DNL Experience Platform], select **[!UICONTROL Schemas]** in the left-navigation, and select the name of the schema you wish to enable from the list of schemas. Then, on the right-hand side of the editor under **[!UICONTROL Schema Properties]**, select **[!UICONTROL Profile]** to toggle it on.


For more information, see the section on [use in Real-time Customer Profile](./tutorials/create-schema-ui.md#profile) in the [!UICONTROL Schema Editor] tutorial.

### Can I edit a union schema directly?

Union schemas are read-only and are automatically generated by the system. They cannot be edited directly. Union schemas are created for a specific class when a "union" tag is added to schema that implements that class.

For more information on unions in XDM, see the [unions](./api/unions.md) section in the [!DNL Schema Registry] API developer guide.

### How should I format my datafile to ingest data into my schema?

[!DNL Experience Platform] accepts datafiles in either [!DNL Parquet] or JSON format. The contents of these files must conform to the schema referenced by the dataset. For details about best practices for datafile ingestion, see the [batch ingestion overview](../ingestion/home.md).

## Errors and troubleshooting

The following is a list of error messages that you may encounter when working with the [!DNL Schema Registry] API. 

### Object not found

```json
{
    "type": "/placeholder/type/uri",
    "status": 404,
    "title": "NotFoundError",
    "detail": "Object https://ns.adobe.com/incorrectTenantId/schemas/ee067e31b08514d21e2b82577813409d 
      with version 1 not found"
}
```

This error displays when the system could not find a particular resource. The resource may have been deleted, or the path in the API call is invalid. Ensure that you have entered a valid path for your API call before trying again. You may want to check that you have entered the correct ID for the resource, and that the path is properly namespaced with the appropriate container (global or tenant).

For more information on constructing lookup paths in the API, see the [container](./api/getting-started.md#container) and [resource identification](api/getting-started.md#resource-identification) sections in the [!DNL Schema Registry] developer guide.

### Title must be unique

```json
{
    "type": "/placeholder/type/uri",
    "status": 400,
    "title": "BadRequestError",
    "detail": "Title must be unique. An object 
      https://ns.adobe.com/{TENANT_ID}/schemas/26f6833e55db1dd8308aa07a64f2042d 
      already exists with the same title."
}
```

This error message displays when you attempt to create a resource with a title that is already being used by another resource. Titles must be unique across all resource types. For example, if you try to create a field group with a title that is already being used by a schema, you will receive this error.

### Custom fields must use a top level field

```json
{
    "type": "/placeholder/type/uri",
    "status": 400,
    "title": "BadRequestError",
    "detail": "For custom fields, you must use a top level field named _{TENANT_ID}
       and all the other fields must be defined under it"
}
```

This error message displays when you attempt to create a new field group with improperly namespaced fields. Field groups that are defined by your IMS organization must namespace their fields with a `TENANT_ID` in order to avoid conflicts with other industry and vendor resources. Detailed examples of proper data structures for field groups can be found in the [field groups endpoint guide](./api/mixins.md#create).


### [!DNL Real-time Customer Profile] errors

The following error messages are associated with operations involved in enabling schemas for [!DNL Real-time Customer Profile]. See the [unions](./api/unions.md) section in the [!DNL Schema Registry] API developer guide for more information.

#### To enable profile datasets the schema should be valid

```json
{
    "type": "/placeholder/type/uri",
    "status": 400,
    "title": "BadRequestError",
    "detail": "To enable profile datasets the schema should be valid"
}
```

This error message displays when you attempt to enable a profile dataset for a schema that has not been enabled for [!DNL Real-time Customer Profile]. Ensure that the schema contains a union tag before enabling the dataset.

#### There must be an reference identity descriptor

```json
{
    "type": "/placeholder/type/uri",
    "status": 400,
    "title": "BadRequestError",
    "detail": "For a schema to be able to participate in union, if any of its 
      property is associated with a xdm:descriptorOneToOne descriptor, there must 
      be a xdm:descriptorReferenceIdentity descriptor for that property"
}
```

This error message displays when you attempt to enable a schema for [!DNL Profile] and one of its properties contains a relationship descriptor without a reference identity descriptor. Add a reference identity descriptor to the schema field in question to resolve this error.

#### The namespaces of the reference identity descriptor field and destination schema must match

```json
{
    "type": "/placeholder/type/uri",
    "status": 400,
    "title": "BadRequestError",
    "detail": "If both schemas from an already defined xdm:descriptorOneToOne 
      descriptor are promoted to union, and if there is a primary identity on one of 
      the schemas from the xdm:descriptorOneToOne descriptor, the 
      xdm:identityNamespace of the sourceSchema's descriptorReferenceIdentity and the 
      xdm:namespace field of the xdm:descriptorIdentity for the destinationSchema must 
      match"
}
```

In order to enable schemas that contain relationship descriptors for use in [!DNL Profile], the namespace of the source field and the primary namespace of the target field must be the same. This error message displays when you attempt to enable a schema that contains an unmatched namespace for its reference identity descriptor. Ensure that the `xdm:namespace` value of the destination schema's identity field matches that of the `xdm:identityNamespace` property in the source field's reference identity descriptor to resolve this issue.

For a list of supported identity namespace codes, see the section on [standard namespaces](../identity-service/namespaces.md) in the identity namespace overview.

### Accept header errors

Most GET requests in the [!DNL Schema Registry] API require an Accept header in order for the system to determine how to format the response. The following is a list of common errors associated with the Accept header. For lists of compatible Accept headers for different API requests, please refer to their corresponding sections in the [Schema Registry developer guide](api/getting-started.md).

#### Accept header parameter is required

```json
{
    "type": "/placeholder/type/uri",
    "status": 406,
    "title": "NotAcceptableError",
    "detail": "Accept header parameter is required"
}
```

This error message displays when an Accept header is missing from an API request. Ensure that an Accept header is included before trying again.

#### Unknown Accept media supplied

```json
{
    "type": "/placeholder/type/uri",
    "status": 406,
    "title": "NotAcceptableError",
    "detail": "Unknown Accept media supplied: xed+json"
}
```

This error message displays when an Accept header is invalid. Ensure that you have correctly entered an Accept header that is compatible with the API request you are trying to make before trying again.

#### Unknown Accept format available

```json
{
    "type": "/placeholder/type/uri",
    "status": 406,
    "title": "NotAcceptableError",
    "detail": "Unknown Accept format available "
}
```

This error message displays when the Accept header has been provided incorrectly when looking up a descriptor. Ensure that you have correctly entered one of the [supported Accept headers for descriptors](./api/descriptors.md) before trying again.

#### Version must be supplied in the Accept header

```json
{
    "type": "/placeholder/type/uri",
    "status": 400,
    "title": "BadRequestError",
    "detail": "version must be supplied in the accept header. Example: 
      application/vnd.adobe.xed-full-notext+json; version=1"
}
```

This error message displays when a version number has not been included in the Accept header. Certain elements like schemas require a version to be specified when looking up individual instances. An Accept header containing a version number will look similar to the following: 

```plaintext
application/vnd.adobe.xed+json; version=1
```

For a list of supported Accept headers, see the [Accept header](api/getting-started.md#accept) section in the [!DNL Schema Registry] developer guide.

#### Version must not be supplied in the Accept header

```json
{
    "type": "/placeholder/type/uri",
    "status": 400,
    "title": "BadRequestError",
    "detail": "version must not be supplied in the accept header. Example: 
      application/vnd.adobe.xed-full+json"
}
```

If you attempt to include a version in your Accept header when listing (GET) resources, you will receive this error. Versions are required only when attempting a lookup request on a single resource. Remove the version from the Accept header to resolve the error.
