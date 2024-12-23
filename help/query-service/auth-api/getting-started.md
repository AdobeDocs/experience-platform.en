---
keywords: Experience Platform; Query Service; IP access control; authorization; API; getting started
title: Data Distiller Authorization API Guide
description: Learn how to get started for authorization and IP range restrictions for secure data access within Adobe Experience Platform's Query Service.
role: Developer
exl-id: d93ce774-c8b2-4f15-a4d9-117d9aa5d9e7
---
# Get started with the Data Distiller Authorization API

>[!AVAILABILITY]
>
>This functionality is available to customers who have purchased the Data Distiller add on. For more information, contact your Adobe representative.

The Data Distiller Authorization API provides organizations with tighter control over data access via the SQL interface in Adobe Experience Platform. You can use this API to define IP restrictions, limit data access to specified networks, and enhance security monitoring.

This guide outlines how to set up the authorization credentials and permissions required to make calls to the Data Distiller Authorization API.

## Getting started {#getting-started}

The following sections provide information on preparing the required authorization values and making your first requests to the Data Distiller Authorization API.

### Required permissions {#required-permissions}

To enable secure data access restrictions in Query Service, you need the **[!UICONTROL Manage Allowed List]** permission. This permission allows organizations to define specific IP ranges (in IPv4 or IPv6 format) that are authorized to access data in Platform via the SQL interface. Access is managed at the sandbox level, where users can configure a list of approved IP addresses or CIDR blocks that restrict access only to permitted networks.

>[!NOTE]
>
>System Administrators can set up user permissions from the Adobe [Admin Console](https://adminconsole.adobe.com/). For more information, see the [Admin Console user guide](https://helpx.adobe.com/enterprise/using/admin-console.html).

The following functionalities are available with the **[!UICONTROL Manage Allowed List]** permission:

- **Define allowed IP ranges**: Only IP addresses or CIDR blocks from these defined ranges can access data in Platform using SQL through Query Service.
- **Enforce IP range checks**: Connections from IPs outside the allowed ranges are denied.
- **Audit and alerting capabilities**: All access attempts, including denied connections, are logged as audit events. These events are available in the [Adobe Experience Platform Audit Logs](../../landing/governance-privacy-security/audit-logs/overview.md), enabling monitoring of potential security breaches.

### Gather values for required headers {#gather-values-for-required-headers}

To make calls to the Data Distiller Authorization API, you must complete the [Platform API authentication tutorial](../../landing/api-authentication.md), which provides values for required headers in API calls. Include the following headers in each request:

- **Authorization**: `Bearer {ACCESS_TOKEN}`
- **x-api-key**: `{API_KEY}`
- **x-gw-ims-org-id**: `{ORG_ID}`
- **x-sandbox-name**: `{SANDBOX_NAME}`

>[!NOTE]
>
> For more information on sandboxes, see the [sandbox overview documentation](../../sandboxes/home.md).

All requests that contain a payload (POST, PUT, PATCH) also require this header:

- **Content-Type**: `application/json`

### Next steps

With the required permissions and header values gathered, you're ready to start configuring IP restrictions for Query Service. Continue to the endpoint documentation for detailed examples of CRUD operations, which include:

- API format and sample request/response pairs.
- Headers, payloads, and response codes for each operation.

Each API call example demonstrates how to format requests and interpret responses, helping you enforce secure access to your data in Query Service.

For specific instructions on configuring and validating IP restrictions, refer to the [IP Access endpoint documentation](./ip-access.md) and the [IP Validation endpoint documentation](./validate.md).

Refer to the [Data Distiller Authorization OpenAPI reference documentation](https://developer.adobe.com/experience-platform-apis/references/data-distiller-auth/) to view a standardized, machine-readable format for easier integration, testing, and exploration.
