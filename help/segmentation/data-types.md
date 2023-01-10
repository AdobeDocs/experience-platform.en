---
keywords: Experience Platform;home;popular topics;data type;data types;Data types;Data type;Segmentation data types;Segmentation;segmentation;Segmentation Service;Segmentation service data types;
solution: Experience Platform
title: Supported Data Types in Segmentation Service
description: All Experience Data Model (XDM) data types are supported within Adobe Segmentation Service. The rules that constitute a segment definition are contextualized by the following data types.
exl-id: 73f932a7-f864-4566-ade7-c148a12dc83c
---
# Supported data types in Segmentation Service

All Experience Data Model (XDM) data types are supported within Adobe Experience Platform Segmentation Service. The rules that constitute a segment definition are contextualized by the following data types.

## String data

Segment definitions use string data to define non-numerical constraints for segment audiences, such as "country name" or "loyalty program level". 

String data is included in segment definitions using logical, inclusive/exclusive, and comparison statements. Once a string attribute is added to your segment definition, you can use string-relevant statements to evaluate it against other string fields.

| Statement type | Examples |
| -------------- | -------- |
| Logical | `and`, `or`, `not` |
| Inclusive/exclusive | `include`, `must` `exist`, `exclude`, `must not exist` |
| Comparison | `equals`, `does not equal`, `contains`, `starts with` |

## Date data

Date data allows you to assign time-based context to your segment definitions, either by using specific start/end dates or by using date-relevant statements as shown in the table below. One implementation might be creating an audience of customers that have interacted with your brand anytime *this year* and has also been active *within* the last few days.

| Example field | Date-relevant statements | Timeline |
| ------------- | ------------------------ | --------- |
| person.firstPurchase | `today`, `yesterday`, `this month`, `this year` | Relevant to the day the segment was built. |
| person.lastPurchase | `in last`, `during`, `before`, `after`, `within` | Relevant within any given week/month. |

## Experience Events

As an Adobe Experience Platform schema, [!DNL XDM ExperienceEvents] record explicit and implicit customer interactions with [!DNL Platform]-integrated applications, including a snapshot of the system at the time the interaction took place. [!DNL ExperienceEvents] are fact records. As such, they are a data source available to you during segment definition.

As seen in the table below, event data is rendered using keywords which help refine event behavior and specify event attributes. 

| Keyword | Use |
| ------- | --- |
| Include/exclude | Describes the behavior of the event through the inclusion or omission of data. |
| Any/all | Helps determine the number of qualifying segments. |
| "Apply time rule" toggle button | Incorporates date data. |
| Equals, does not equal, starts with, does not start with, ends with, does not end with, contains, does not contain, exists, does not exist | Incorporates string data. |

### Audience sharing

External audiences can also be used as components of a new segment definition, adding their attribute rules to the new segment.

Currently, only Adobe Audience Manager is supported as an external audience, with additional sources being enabled in the future. More information about using Adobe Audience Manager audiences with Platform can be found in the [audience sharing guide within the Adobe Audience Manager documentation](https://experienceleague.adobe.com/docs/audience-manager/user-guide/implementation-integration-guides/integration-experience-platform/aam-aep-audience-sharing.html).

### Segment sharing

Segments created in Platform can be used within other [Adobe Experience Cloud Core Services](https://experienceleague.adobe.com/docs/core-services/interface/experience-cloud.html). To enable this feature, you will need to contact your solution architect or your consultant.

## Other data types

In addition to the data types mentioned above, the list of supported data types also includes:

- Uniform resource identifier (URI)
- Enum
- Number
- Long
- Integer
- Short
- Byte
- Boolean
- Array
- Object
- Map
