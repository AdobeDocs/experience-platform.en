---
solution: Experience Platform
title: Travel and Hospitality Industry Data Model ERD
topic-legacy: overview
description: View an entity relationship diagram (ERD) that describes a standardized data model for the travel and hospitality industry, compatible with Experience Data Model (XDM) for use in Adobe Experience Platform.
exl-id: 4d454160-9066-4702-815b-9509942f709e
---
# [!UICONTROL Travel and hospitality] industry data model ERD

The following entity relationship diagram (ERD) represents a standardized data model for the travel and hospitality industry. The ERD is intentionally presented in a de-normalized fashion and with consideration for how data is stored in Adobe Experience Platform.

Use the following legend to interpret this ERD:

* Each entity shown in is based on an underlying [Experience Data Model (XDM) class](../composition.md#class).
* For a given entity, each row marked in **bold** represents a field group or a data type, with the relevant fields it provides listed below in unbolded text.
* The most important fields for a given entity are highlighted in red.
* All the properties that could be used to identify individual customers are marked as "identity", with one of these properties marked as a "primary identity".
* Entity relationships are marked as non-dependent, since cookie-based events often cannot determine the person or individual who did the transaction.

![](../../images/industries/travel-hospitality.png)

>[!NOTE]
>
>The Experience Event entity includes an "_ID" field, which represents the unique identifier (`_id`) attribute provided by the XDM ExperienceEvent class. See the reference document on [XDM ExperienceEvent](../../classes/experienceevent.md) for more details on what is expected for this value.