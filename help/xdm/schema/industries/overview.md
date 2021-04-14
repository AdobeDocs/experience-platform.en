---
solution: Experience Platform
title: Industry Data Models Overview
topic: overview
description: Learn about the standardized data models for various industry verticals that can be constructed using standard Experience Data Model (XDM) components.
exl-id: 8fa9a610-36b5-470f-ad63-f2a4a060e0f1
---
# Industry data models overview

Experience Data Model (XDM) allows you to create highly customizable schemas to capture key customer experience data related to your business. To help streamline the process of modeling your data to conform to XDM, Adobe Experience Platform provides a versatile suite of standard XDM components, which capture concepts that are commonly used across several industries.

>[!NOTE]
>
>New standard XDM components are being continuously released to best fit consumer needs. For a list of the most up-to-date components, you can [explore existing resources in the UI](../../ui/explore.md) or refer to the [official XDM repository](https://github.com/adobe/xdm/tree/master/components) on GitHub.

Depending on the industry that your business operates under, some XDM components will be more relevant to your needs than others. In addition, the relationships you establish between your XDM schemas will vary depending on your industry.

In order to help guide your data modeling strategy based on your particular industry, this guide provides a reference of entity relationship diagrams (ERDs) for several supported industry verticals.

## Prerequisites

To read the ERDs referenced in this guide, you must have a working understanding of how XDM components interact to form schemas and how XDM schemas operate in Experience Platform as a whole. Ensure that you have read the following overview documentation before continuing:

* [XDM System overview](../../home.md): Learn how XDM operates in the Platform ecosystem.
* [Basics of schema composition](../../schema/composition.md): Learn how XDM components (such as mixins, classes, and data types) contribute to the structure of a schema, as well as the role of identity fields.

It is also recommended that you review the [data modeling best practices guide](../../schema/best-practices.md) for general guidelines on how to map your data to XDM.

## Industry data model ERDs {#erds}

The industry vertical models represented by ERDs below are intentionally created in a de-normalized fashion and with consideration for how data is stored in Platform.

For a given ERD, each entity shown in is based on an underlying XDM class. For a given entity, each row marked in **bold** represents a mixin or a data type, with the relevant fields it provides listed below in unbolded text. The most important fields for a given entity are highlighted in red.

>[!NOTE]
>
>Some entities may include an "_ID" field. This represents the unique identifier (`_id`) that Platform automatically assigns to event or profile entities when they are ingested. However, you can choose to use your own unique ID values for this field if you wish.

All the properties that could be used to identify individual customers are marked as "identity", with one of these properties marked as a "primary identity".

Entity relationships are marked as non-dependent, since cookie-based events often cannot determine the person or individual who did the transaction.

ERDs are provided for the following industry verticals:

* [[!UICONTROL Retail]](./retail.md)
* [[!UICONTROL Financial services]](./financial.md)
* [[!UICONTROL Travel and hospitality]](./travel-hospitality.md)

## Next steps

This document provided an overview of the industry data model ERDs and how to interpret them. To view an ERD, select one from the list above.
