---
title: Sandbox Tooling API Guide Appendix
description: This document provides supplemental information related to working with the Sandbox Tooling API.
---

# Sandbox API guide appendix

This document provides supplemental information related to working with the [!DNL Sandbox] API.

## Using query parameters {#query}

The Sandbox Tooling API supports the use of query parameters to paginate and filter results when listing packages.

>[!NOTE]
>
>The `limit` and `offset` query parameters have to be specified together. If you specify only one, the API will return an error. If you specify none, default limit is 50 and offset is 0.

| Parameter | Description |
| --- | --- |
| `limit` | The maximum number of records to be returned in the response. |
| `offset` | The number of entities from the first record to start (offset) the response list from. |
| `targetSandbox` | Represents the sandbox name where you want to import your artifacts. |
| `jobType` | The type of job. This value can be NEW, RESUME, and ROLLBACK. |
| `jobStatus` | The status of the job. This value can be PENDING, IN_PROGRESS, SUCCESS, FAILED, and CANCELLED. |
| `requestType` | The type of request. This value can be EXPORT, IMPORT, and COPY. |
| `expiryPeriod ` | This user-specified time period defines the package expiration date (in days) from the time the package was published. This value should not be negative. |
| `parentId` | This represents the list of `parentId` in a package. |
