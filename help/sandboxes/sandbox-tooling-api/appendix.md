---
title: Sandbox Tooling API Guide Appendix
description: This document provides supplemental information related to working with the Sandbox Tooling API.
---

# Sandbox API guide appendix

This document provides supplemental information related to working with the [!DNL Sandbox] API.

## Using query parameters {#query}

The Sandbox Tooling API supports the use of query parameters to page and filter results when listing packages.

>[!NOTE]
>
>The `limit` and `offset` query parameters have to be specified together. If you specify only one, the API will return an error. If you specify none, default limit is 50 and offset is 0.

| Parameter | Description |
| --- | --- |
| `limit` | The maximum number of records to be returned in the response. |
| `offset` | The number of entities from the first record to start (offset) the response list from. |
| `targetSandbox` | Represents the sandbox name where the end-user wants to import their artifacts. |
| `jobType` | NEW, RESUME, ROLLBACK |
| `jobStatus` | PENDING, IN_PROGRESS, SUCCESS, FAILED, CANCELLED |
| `requestType` | EXPORT, IMPORT, COPY |
