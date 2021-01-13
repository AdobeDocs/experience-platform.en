---
keywords: Experience Platform;home;popular topics;Marketo mapping;marketo mapping;Activities mapping;activities mapping;activities
solution: Experience Platform
title: Activities mapping field
topic: overview
description: The tables below contain the mappings between the fields in the Marketo Activities dataset and their corresponding XDM fields.
---

# Activities mapping field

The tables below contain the mappings between the fields in the Marketo Activities dataset and their corresponding XDM fields.

## Activities dataset

| Source dataset | XDM target field |
| -------------- | ---------------- |
| `activityKey` | `_id` |
| `eventType` | `eventType` |
| `activityDate` | `timestamp` |
| `removeFromList.listID` | `listOperations.listID` |
| `visitWebPage.userAgent` | `environment.browserDetails.userAgent` |
| `visitWebPage.clientIPAddress` | `environment.ipV4` |
| `visitWebPage.searchQuery`| `search.keywords` |
| `visitWebPage.searchEngine` | `search.searchEngine` |
| `visitWebPage.personalizedURL` | `web.webPageDetails.isPersonalizedURL` |
| `visitWebPage.webPageName` | `web.webPageDetails.name` |
| `visitWebPage.queryParameters` | `web.webPageDetails.queryParamaters` |
| `visitWebPage.webPageID` | `web.webPageDetails.webPageID` |
| `visitWebPage.referrerURL` | `web.webReferrer.URL` |
| `visitWebPage.webPageURL` | `web.webPageDetails._marketo.URL` |
| `Person-key` | `personID` |
