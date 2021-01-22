---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping;Activities mapping;activities mapping;activities
solution: Experience Platform
title: Mapping Marketo activities fields to XDM
topic: overview
description: The table below contains the mappings between the fields in the Marketo activities dataset and their corresponding XDM fields.
---

# Mapping Marketo activities fields to XDM

The table below contains the mappings between the fields in the [!DNL Marketo] activities dataset and their corresponding XDM fields.

| Source dataset | XDM target field |
| -------------- | ---------------- |
| activityKey | _id |
| eventType | eventType |
| activityDate | timestamp |
| removeFromList.listID | listOperations.listID |
| visitWebPage.userAgent | environment.browserDetails.userAgent |
| visitWebPage.clientIPAddress | environment.ipV4 |
| visitWebPage.searchQuery| search.keywords |
| visitWebPage.searchEngine | search.searchEngine |
| visitWebPage.personalizedURL | web.webPageDetails.isPersonalizedURL |
| visitWebPage.webPageName | web.webPageDetails.name |
| visitWebPage.queryParameters | web.webPageDetails.queryParamaters |
| visitWebPage.webPageID | web.webPageDetails.webPageID |
| visitWebPage.referrerURL | web.webReferrer.URL |
| visitWebPage.webPageURL | web.webPageDetails._marketo.URL |
| Person-key | personID |
