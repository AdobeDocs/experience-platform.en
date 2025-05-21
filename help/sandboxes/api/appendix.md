---
keywords: Experience Platform;home;popular topics;api;API;sandbox;Sandbox;sandboxes;Sandboxes
solution: Experience Platform
title: Sandbox API Guide Appendix
description: This document provides supplemental information related to working with the Sandbox API.
role: Developer
exl-id: 48ffea01-f1b4-48c6-a6f5-c321074023d3
---
# Sandbox API guide appendix

This document provides supplemental information related to working with the [!DNL Sandbox] API.

## Using query parameters {#query}

The [[!DNL Sandbox] API](https://www.adobe.io/experience-platform-apis/references/sandbox) supports the use of query parameters to page and filter results when listing sandboxes.

>[!NOTE]
>
>The `limit` and `offset` query parameters have to be specified together. If you specify only one, the API will return an error. If you specify none, default limit is 50 and offset is 0.

| Parameter | Description |
| --- | --- |
| `limit` | The maximum number of records to be returned in the response. |
| `offset` | The number of entities from the first record to start (offset) the response list from. |
