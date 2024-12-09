---
title: Sandbox Tooling API Guide Appendix
description: This document provides supplemental information related to working with the Sandbox Tooling API.
exl-id: fdfa019d-ce0e-456b-b591-7d96d1115e02
---
# Sandbox API guide appendix

This document provides supplemental information related to working with the [!DNL Sandbox] API.

## Using query parameters {#query}

The Sandbox Tooling API supports the use of query parameters to paginate and filter results when listing packages.

>[!NOTE]
>
>The `limit` can be passed and started individually.

| Parameter | Description |
| --- | --- |
| `limit` | The maximum number of records to be returned in the response. The default limit is 20. |
| `start` | The start of where a sub-setted list of items should begin. |
| `targetSandbox` | Represents the sandbox name where you want to import your artifacts. |
| `jobType` | The type of job. This value can be `NEW`, `RESUME`, or `ROLLBACK`. |
| `jobStatus` | The status of the job. This value can be `PENDING`, `IN_PROGRESS`, `SUCCESS`, `FAILED`, or `CANCELLED`. |
| `requestType` | The type of request. This value can be `EXPORT`, `IMPORT`, or `COPY`. |
| `expiryPeriod` | This user-specified time period defines the package expiration date (in days) from the time the package was published. This value should not be negative. The default value is 90 days from the time the update or publish API is called. |
| `packageType` |  The type of package. This value can be `PARTIAL` or `FULL`. |
| `status` | The status of the package. This value can be `DRAFT`, `PUBLISHED`, `PUBLISH_IN_PROGRESS`, or `PUBLISH_FAILED`. |
