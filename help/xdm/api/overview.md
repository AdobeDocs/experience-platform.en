---
keywords: Experience Platform;home;popular topics;api;API;XDM;XDM system;;experience data model;Experience data model;Experience Data Model;data model;Data Model;schema registry;Schema Registry;
solution: Experience Platform
title: Schema Registry API developer guide
description: The Schema Registry is used to access the Schema Library within Adobe Experience Platform, providing a user interface and RESTful API from which all available library resources are accessible. Using the Schema Registry API, you can perform basic CRUD operations in order to view and manage all schemas and related resources available to you within Adobe Experience Platform.
topic: developer guide
---

# [!DNL Schema Registry] API developer guide

The [!DNL Schema Registry] is used to access the Schema Library within Adobe Experience Platform, providing a user interface and RESTful API from which all available library resources are accessible.

The Schema Registry API provides several endpoints that allow you to programmatically manage all schemas and related Experience Data Model (XDM) resources available to you within Platform. This includes those defined by Adobe, [!DNL Experience Platform] partners, and vendors whose applications you use.

These endpoints are outlined below. Please visit the individual endpoint guides for details and refer to the [getting started guide](./getting-started.md) for important information on required headers, reading sample API calls, and more.

To view all available endpoints and CRUD operations, visit the [Schema Registry API swagger](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/schema-registry.yaml).

## Schemas

XDM schemas represent and validate the structure and format of data ingested into Platform. A schema is composed of a class and zero or more mixins. You can create, view, edit, and delete schemas using the `/schemas` endpoint. To learn how to use this endpoint, see the [schemas endpoint guide](./schemas.md).

For a step-by-step guide on how to create a complete schema in the Schema Registry API, including creating and adding mixins and data types, see the [API schema creation tutorial](../tutorials/create-schema-api.md).

## Classes

Classes define the behavioral aspects of the data that a schema will contain (record or time series). In addition, a class determines the base structure of common properties that all schemas based on that class must contain. A schema's class determines which mixins are eligible for use in that schema. See the [classes endpoint guide](./classes.md) for details on working with classes in the API.

## Mixins

Mixins are reuseable components which define one or more fields that represent a particular concept, such as an individual person, a mailing address, or a web browser environment. Mixins are intended to be included as part of a schema that implements a compatible class, depending on the behavior of data they represent (record or time series). See the [mixins endpoint guide](./mixins.md) to learn how to work with mixins in the API.

## Data types

Data types are used as reference-type fields in classes or mixins in the same way as basic literal fields, with the key difference being that data types can define multiple sub-fields. While similar to mixins in that they allow for the consistent use of a multi-field structure, data types are more flexible because they can be included anywhere in the schema structure whereas mixins can only be added at the root level. See the [data types endpoint guide](./data-types.md) for more information on working with data types in the API.

## Descriptors

Descriptors are sets of metadata that are assigned specific fields within a schema, providing various contextual details including how those fields (and the schema itself) are related to other schemas. Each schema can have one or more descriptor entities applied to it, and there are several different descriptor types to serve different purposes. See the [descriptors endpoint guide](./descriptors.md) for more information on working with descriptors in the API, and an overview of the different descriptor types and their use cases.

## Unions

While Platform allows you to compose schemas for particular use cases, it also allows you to compose a "union" of schemas belonging to a specific class. A union schema aggregates the fields of all schemas that share the same class into a single representation. By enabling a schema for use with [Real-time Customer Profile](../../profile/home.md), that schema becomes included in the union for its class type. As such, union schemas cannot be edited directly, and can only be affected by including or excluding schemas for use in Profile.

To learn how to view unions in the Schema Registry API, see the [unions endpoint guide](./unions.md).

## Next steps

To begin making calls using the Schema Registry API, read the [getting started guide](./getting-started.md) then select one of the endpoint guides to learn how to use specific endpoints.