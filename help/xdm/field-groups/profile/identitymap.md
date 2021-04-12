---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;individual profile;fields;schemas;Schemas;identityMap;identity map;Identity map;Schema design;map;Map;union schema;union
solution: Experience Platform
title: IdentityMap Field Group
topic: overview
description: This document provides an overview of the XDM Individual Profile class.
exl-id: c9928e85-ef1e-4739-ba1d-80505a9e60c3
---

# [!UICONTROL IdentityMap] field group

>[!NOTE]
>
>The names of several field groups have changed. See the document on [field group name updates](../name-updates.md) for more information.

[!UICONTROL IdentityMap] is a standard field group for the [[!DNL XDM Individual Profile] class](../../classes/individual-profile.md). The field group provides a single map field, which contains a set of user identities keyed by namespace.

>[!WARNING]
>
>The `IdentityMap` field is automatically updated by the system as identity data is ingested. In order to properly utilize this field for [Real-time Customer Profile](../../../profile/home.md), do not attempt to manually update the field's contents in your data operations.

<img src='../../images/field-groups/identitymap.png' width=600 /><br />

See the section on identity maps in the [basics of schema composition](../../schema/composition.md#identityMap) for more information on their use case.
