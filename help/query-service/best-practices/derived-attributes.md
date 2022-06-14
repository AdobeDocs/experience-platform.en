---
title: Derived Attributes
description: Derived attributes allows you to compute attributes on a regular cadence and optionally publish these derived attributes into Profiles as profile attributes. This document provides an overview of how to use Query Service to create derived attributes for use with your Profile data.
---
# Derived attributes

Derived attributes allow you to compute attributes on a regular cadence and optionally publish these derived attributes into Real-time Customer Profile as profile attributes. 

Derived attributes, such as those created with decile data, are necessary for a variety of use cases that analyse profile data. Using decile data you can create audiences from segments based on the their percentile, or ranking of a given attribute. For example, potential use cases might include:

* Identify the lowest 10% of subscribers based on viewership by channel. This would allow marketers to target a particular audience and sell a new subscriber package.
* Identify an audience who are in the top 10% of flyers based on their total miles travelled and have "Flyer" status. This audience cold be used to selectively target the sale of a new credit card offer.

## Getting started

This overview requires a working understanding of Platform API calls and the following components of Adobe Experience Platform:

* [Real-time Customer Profile overview](../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
* [Basics of schema composition](../../xdm/schema/composition.md): An introduction to Experience Data Model (XDM) schemas and the building blocks, principles, and best practices for composing schemas.
* [Enable a schema for Real-time Customer Profile](https://experienceleague.adobe.com/docs/experience-platform/profile/tutorials/add-profile-data.html)

## SQL support for derived attributes

<!-- How does QS support derived attributes exactly? -->

To define the ranking of deciles based on a particular a dimension (category) and a corresponding metric (revenue, points, viewership duration, etc), a schema must be designed to allow for decile bucketing. This schema can be used as part of the larger Profile schema. 

### Identify the schema for Profile

Data being ingested into Experience Platform for use by Real-time Customer Profile must conform to an Experience Data Model (XDM) schema that is enabled for Profile. In order for a schema to be enabled for Profile, it must implement either the XDM Individual Profile or XDM ExperienceEvent class.

The primary identity descriptor can either be assigned to a field in the Schemas UI, or can be created using the Schema Registry API. See the documentation for [instructions on how to define an identity field in the Adobe Experience Platform UI](../../xdm/ui/fields/identity.md#define-an-identity-field), or through the [Schema Registry API](../../xdm/api/descriptors.md#create).

Query Service also allows you to set an identity or a primary identity for ad hoc schema dataset fields directly through SQL. See the documentation on [setting a secondary identity and primary identity in ad hoc schema identities](../data-governance/ad-hoc-schema-identities.md) for more information.

You can [enable a schema for use in Real-time Customer Profile using the Schema Registry API](../../xdm/tutorials/create-schema-api.md) or the [Schema Editor user interface](../../xdm/tutorials/create-schema-ui.md).  Detailed instructions on how to enable a schema for Profile are available in their respective documentation.

## Create derived attributes

A decile is a way to divide a distribution into 10 equal parts. When the data is divided into deciles, a decile rank is assigned to each row in the data set, in order to sort the data in descending or ascending order. Decile buckets are used to assign the ranking to a dimension (category) in the dataset. Similarly, quartiles are used to divide the distribution by 4 and percentiles by 100.

### Create the schema for decile buckets

The schema created for decile buckets has three integral parts: a data type, a field group for the data type (per source dataset), and a primary identity field. As a prerequisite to using a primary identity, an identity namespace must be created before the schema can be created.

Identity namespaces are a component of [Identity Service](../../identity-service/home.md) that serve as indicators of the context to which an identity relates. A fully qualified identity includes an ID value and a namespace. When matching and merging record data across profile fragments, both the identity value and the namespace must match.

See the guide on how to [create and edit schemas in the UI](https://experienceleague.adobe.com/docs/experience-platform/xdm/ui/resources/schemas.html?lang=en#create). Adobe provides several standard (“core”) XDM classes, including XDM Individual Profile and XDM ExperienceEvent. In addition to these core classes, you can also create your own custom classes to describe more specific use cases for your organization. 

### Create a data type

Data types are used as reference-type fields in classes or schema field group and allow for the consistent use of a multi-field structure that can be included anywhere in the schema. Creation of the data type is a one-time step per sandbox, as it can be reused for all decile related field groups.

See the documentation for instructions on [how to define a custom data type](../../xdm/api/data-types.md) using the [Schema Registry API](https://www.adobe.io/experience-platform-apis/references/schema-registry/).

### Create the decile field group

Creation of the field group is a one-time step per sandbox. It can also be reused for all decile related schemas.

[Create filed groups through the UI](../../xdm/ui/resources/field-groups.md#create)

## Use Query Service to create deciles

## Other examples 

Nike..?
