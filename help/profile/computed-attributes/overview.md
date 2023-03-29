---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API
title: Introduction to Computed Attributes
type: Documentation
description: Computed attributes are functions to aggregate event-level data into profile-level attributes. These functions are automatically computed so that they can be used across segmentation, activation, and personalization.
exl-id: 13878363-589d-4a3c-811c-21d014a5f3c2
hide: true
hidefromtoc: true
---
# (Alpha) Computed attributes overview

>[!IMPORTANT]
>
>Computed attribute functionality is currently in alpha and is not available to all users. The documentation and the functionality are subject to change.

Computed attributes are functions used to aggregate event-level data into profile-level attributes. These functions are automatically computed so that they can be used across segmentation, activation, and personalization.

Each computed attribute contains an expression, or "rule", that evaluates incoming data and stores the resulting value in a profile attribute. These computations help you to easily answer questions related to things like lifetime purchase value, time between purchases, or number of application opens, without requiring you to manually perform complex calculations each time the information is needed. These computed attribute values can then be viewed in a profile, used to create a segment, or accessed through a number of different access patterns.

This guide will help you to better understand the role of computed attributes within Adobe Experience Platform.

## Understanding computed attributes

Adobe Experience Platform enables you to easily import and merge data from multiple sources in order to generate [!DNL Real-Time Customer Profiles]. Each profile contains important information related to an individual, such as their contact information, preferences, and purchase history, providing a 360-degree view of the customer. 

Some of the information collected in the profile is easily understood when reading the data fields directly (for example, "first name") whereas other data requires performing multiple calculations or relying on other fields and values in order to generate the information (for example, "lifetime purchase total"). To make this data easier to understand at a glance, [!DNL Platform] allows you to create computed attributes that automatically perform these references and calculations, returning the value in the appropriate field.

Computed attributes include creating an expression, or "rule", that operates on incoming data and stores the resulting value in a profile attribute. Expressions can be defined in multiple different ways, allowing you to specify that a rule evaluate incoming events only, an incoming event and profile data, or an incoming event, profile data, and historical events.

### Use cases

Use cases for computed attributes can range from simple calculations to very complex references. Here are a few example use cases for computed attributes:

1. **[!UICONTROL Percentages]:** A simple computed attribute could include taking two numeric fields on a record and dividing them to create a percentage. For example, you could take the total number of emails sent to an individual and divide it by the number of emails the individual opens. Looking at the resulting computed attribute field would quickly show the percentage of total emails opened by the individual.
1. **[!UICONTROL Application use]:** Another example includes the ability to aggregate the number of times a user opens your application. By tracking the total number of application opens, based on individual open events, you could deliver special offers or messages to users on their 100th open, encouraging deeper engagement with your brand.
1. **[!UICONTROL Lifetime values]:** Gathering running totals, such as a lifetime purchase value for a customer, can be very difficult. This requires updating the historic total each time a new purchase event occurs. A computed attribute allows you to do this much more easily by maintaining the lifetime value in a single field that is updated automatically following each successful purchase event related to the customer.

## Known limitations

### Delayed availability of new computed attributes

The availability of new computed attributes may be delayed up to 2 hours after the corresponding schema attribute is added to the union schema.

This delay is due to the current caching configuration. Post-Alpha the cache refresh frequency could be increased.

### Dependency tracking in segments

Schema attributes that have already been used in a segment definition expression, but later turned into a computed attribute will not be tracked as a dependency of that segment. 

Due to the fact that no dependency has been detected, Experience Platform will not automatically evaluate the associated computed attribute each time the segment definition is evaluated.

Alternatively, the creation of computed attributes could be managed through a specific schema field group that adds new computed attributes that do not conflict with existing attributes. Another alternative is to simply recreate the segment with the correct dependency tracking for the new computed attributes.
