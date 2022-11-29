---
keywords: Experience Platform;home;popular topics;api;API;audit;Audit;audits;Audits
solution: Experience Platform
title: Audit Query API Guide Appendix
description: This document provides supplemental information related to working with the Audit Query API.
topic-legacy: developer guide
---
# Audit query API guide appendix

The Audit Query supports the use of query parameters to page and filter results when listing events.

## Using query parameters {#query}

The [[!DNL Audit Query] API](https://developer.adobe.com/experience-platform-apis/references/audit-query) supports the use of query parameters to page and filter results when listing events.

| Parameter | Description |
| --- | --- |
| `limit` | The maximum number of records to be returned in the response. The default `limit` is 50.|
| `start` | A pointer to the first item for the returned search results. To access the next page of results, this parameter should increment by the same amount indicated by limit. Example: To access the next page of results for a request with limit=50, use the parameter start=50, then start=100 for the page after that, and so on. |
| `queryId` | When making a query to the /audit/events endpoint, the response includes a queryId string property. To make the same query in a separate call, you can include the Id value as a single query parameter instead of manually configuring the search parameters again. |
