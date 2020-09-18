---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;individual profile;fields;schemas;Schemas;identityMap;identity map;Identity map;Schema design;map;Map;union schema;union
solution: Experience Platform
title: IdentityMap mixin
topic: overview
description: This document provides an overview of the XDM Individual Profile class.
---

# [!UICONTROL IdentityMap] mixin

[!UICONTROL IdentityMap] is a standard mixin for the [[!DNL XDM Individual Profile] class](../../classes/individual-profile.md). The mixin provides a single map field, which contains a set of user identities keyed by namespace.

>[!WARNING]
>
>The `IdentityMap` field is automatically updated by the system as identity data is ingested. In order to properly utilize this field for [Real-time Customer Profile](../../../profile/home.md), do not attempt to manually update the field's contents in your data operations.

<img src='../../images/mixins/identitymap.png' width=600 />

See the section on identity maps in the [basics of schema composition](../../schema/composition.md#identityMap) for more information on their use case.