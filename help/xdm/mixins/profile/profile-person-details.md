---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;individual profile;fields;schemas;Schemas;identityMap;identity map;Identity map;Schema design;map;Map;union schema;union
solution: Experience Platform
title: Profile person details mixin
topic: overview
description: This document provides an overview of the XDM Individual Profile class.
---

# [!UICONTROL Profile person details] mixin

[!UICONTROL Profile person details] is a standard mixin for the [[!DNL XDM Individual Profile] class](../../classes/individual-profile.md). The mixin provides a root-level `person` object, whose sub-fields describe personal information about an individual person.

<img src='../../images/mixins/profile-person-details.png' width=600 />

| Property | Description |
| --- | --- |
| `name` | An object whose sub-fields describe various elements of a person's name: <ul><li>`courtesyTitle`: An abbreviation of a person's title, honorific, or salutation (such as Mr., Miss., or Dr.).</li><li>`firstName`: The first segment of the name in the writing order most commonly accepted in the language of the name.</li><li>`fullName`: The full name of the person, in the writing order most commonly accepted in the language of the name.</li><li>`lastName`: The last segment of the name in the writing order most commonly accepted in the language of the name.</li><li>`middleName`: Middle, alternative, or additional names supplied between the first name and last name.</li><li>`suffix`: A group of letters provided after a person's name to provide additional information (such as Jr., Sr., M.D., PhD, I, II, III, and so on).</li></ul> |
| `birthDate` | |
| `birthDayAndMonth` | |
| `birthYear` | |
| `gender` | |
| `martialStatus` | |
| `nationality` | |
| `taxId` | |

See the section on identity maps in the [basics of schema composition](../../schema/composition.md#identityMap) for more information on their use case.
