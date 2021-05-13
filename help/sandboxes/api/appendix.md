---
keywords: Experience Platform;home;popular topics;api;API;sandbox;Sandbox;sandboxes;Sandboxes
solution: Experience Platform
title: Sandbox API Guide Appendix
description: This document provides supplemental information related to working with the Sandbox API.
topic-legacy: developer guide
---
# Sandbox API guide appendix

This document provides supplemental information related to working with the [!DNL Sandbox] API.

## Using query parameters {#query}

The [[!DNL Sandbox]](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/sandbox-api.yaml) API supports the use of query parameters to page and filter results when listing sandboxes.

>[!NOTE]
>
>The `limit` and `offset` query parameters have to be specified together. If you specify only one, the API will return an error. If you specify none, default limit is 50 and offset is 0.

| Parameter | Description |
| --- | --- |
| `limit` | The maximum number of records to be returned in the response. |
| `offset` | The number of entities from the first record to start (offset) the response list from. |
