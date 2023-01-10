---
keywords: Experience Platform;home;popular topics;api;API;XDM;XDM system;experience data model;data model;ui;workspace;relationship;field;
solution: Experience Platform
title: Define Relationship Fields in the UI
description: Learn how to define a relationship field in the Experience Platform user interface.
exl-id: 8a6be545-0edb-4b9c-b164-e44a7a5f54f5
---
# Define relationship fields in the UI

In Experience Data Model (XDM), a [union schema](../../schema/composition.md#union) is a unified view of all schemas belonging to the same class that have also been enabled for [Real-Time Customer Profile](../../../profile/home.md). The union schema is leveraged by Profile in order to construct a complete representation of a customer from disparate experience data.

In some cases, you may be ingesting data that is not necessarily part of a profile, but is nonetheless related to the profile. An example of this kind of data would be a "favorite hotel" field for a customer. Since the attributes of a person's favorite hotel are not attributes of the person themselves, a hotel is best represented by a separate schema based on a custom class rather than [!DNL XDM Individual Profile].

Since union schemas are only based on schemas that share the same class, simply enabling the "Hotels" schema for use in Profile will not include its fields union schema for [!DNL XDM Individual Profile]. Instead, you must define a relationship between "Hotels" and another schema belonging to the union. This involves defining a **relationship field** in a source schema that references the primary identity of a destination schema.

For detailed steps on defining a relationship between two schemas in the Adobe Experience Platform UI, see the [relationship UI tutorial](../../tutorials/relationship-ui.md).
