---
title: Derived Attributes
description: Derived attributes allows you to compute attributes on a regular cadence and optionally publish these derived attributes into Profiles as profile attributes. This document provides an overview of how to use Query Service to create derived attributes for use with your Profile data.
---
# Derived attributes

Derived attributes allow you to compute attributes on a regular cadence and optionally publish these derived attributes into Profiles as profile attributes. 

Derived attributes, such as those created with decile data, are necessary for a variety of use cases with Profile data. Using decile data you can create audiences from segments based on the their percentile of a given attribute. For example, potential use cases might include:

* Identify the lowest 10% of subscribers based on viewership by channel. This would allow marketers to target a particular audience and sell a new subscriber package.
* Identify an audience who are in the top 10% of flyers based on their total miles travelled and have "Flyer" status. This audience cold be used to selectively target the sale of a new credit card offer.

## Getting started

This overview requires a working understanding of the following components of Adobe Experience Platform:

* [Basics of schema composition](../../xdm/schema/composition.md)
* [creating a schema using APIs](../../xdm/tutorials/create-schema-api.md)
* [creating a schema using the Schema Editor UI.](../../xdm/tutorials/create-schema-ui.md)
* [Real-time Customer Profile](): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.


## SQL support for derived attributes

<!-- 

[Enable a schema for Real-time Customer Profile](https://experienceleague.adobe.com/docs/experience-platform/profile/tutorials/add-profile-data.html?lang=en)

Data being ingested into Experience Platform for use by Real-time Customer Profile must conform to an Experience Data Model (XDM) schema that is enabled for Profile. In order for a schema to be enabled for Profile, it must implement either the XDM Individual Profile or XDM ExperienceEvent class.

You can enable a schema for use in Real-time Customer Profile using the Schema Registry API or the Schema Editor user interface. -->

Query Service also allows you to set an identity or a primary identity for ad hoc schema dataset fields directly through SQL. See the documentation on [setting a secondary identity and primary identity in ad hoc schema identities](../data-governance/ad-hoc-schema-identities.md) for more information.

## Identify the schema for profile

To define the ranking of deciles based on a particular a dimension (category) and a corresponding metric (revenue, points, viewership duration, etc), a schema must be designed to allow for decile bucketing. This schema can be used as part of the larger Profile schema. 
(This takes place in ....... outside query service)
Please see the ....documentation for detailed instruction on how to enable a schema for Profile

## Create derived attributes for the schema

Deciles are one example of derived attributes that  A decile is a way to divide a distribution into 10 equal parts. When the data is divided into deciles, a decile rank is assigned to each row in the data set, in order to sort the data in descending or ascending order. Decile buckets are used to assign the ranking to a dimension (category) in the dataset. Similarly, quartiles are used to divide the distribution by 4 and percentiles by 100.

Creating the Decile Schema (and marking it for profile)
Using Query Service to Create Deciles

## Other examples 

Nike..?
