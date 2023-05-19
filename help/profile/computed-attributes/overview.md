---
title: Computed Attributes overview
description: Computed attributes are functions to aggregate event-level data into profile-level attributes. These functions are automatically computed so that they can be used across segmentation, activation, and personalization.
badge: "Beta"
---
# Computed attributes overview

Personalization based on user behavior is a key requirement for digital marketers to maximize returns on their marketing dollars. For instance, personalizing marketing email with the most recently viewed product to drive conversion, or personalizing webpage based on total purchases made by user in the last month. 

Computed attributes help quickly convert profile behavioral data into aggregated values at the profile level without dependence on engineering resources for:

- Enabling targeted personalization with activation of behavioral aggregates to Real-time Customer Data Platform destinations, usage in journeys, or in segmentation
- Standardization of aggregated profile behavioral data for usage across platform and apps
- Better data management with consolidation of old profile events data into meaningful behavioral insights

These aggregates are computed based on profile enabled datasets ingested into Adobe Experience Platform. Each computed attribute is a profile attribute created on your profile union schema, and is grouped under "Computed Attribute" mixin in your union schema.

This guide will help you to better understand the role of computed attributes within Platform, in addition to explaining the basics of computed attributes.

## Understanding computed attributes

Adobe Experience Platform enables you to easily import and merge data from multiple sources in order to generate [!DNL Real-Time Customer Profiles]. Each profile contains important information related to an individual, such as their contact information, preferences, and purchase history, providing a 360-degree view of the customer. 

Some of the information collected in the profile is easily understood when reading the data fields directly (for example, "first name") whereas other data requires performing multiple calculations or relying on other fields and values in order to generate the information (for example, "lifetime purchase total"). To make this data easier to understand at a glance, [!DNL Platform] allows you to create computed attributes that automatically perform these references and calculations, returning the value in the appropriate field.

Computed attributes include creating an expression, or "rule", that operates on incoming data and stores the resulting value in a profile attribute. Expressions can be defined in multiple different ways, allowing you to specify that a rule evaluate incoming events only, an incoming event and profile data, or an incoming event, profile data, and historical events.

### Functions

Computed attributes let you define aggregates in a self-serve manner by leveraging pre-defined functions. The details on these functions can be found below:

| Function | Description |
| -------- | ----------- |
| SUM | A |
| COUNT | A |
| MIN | A |
| MAX | A |

### Lookback periods

