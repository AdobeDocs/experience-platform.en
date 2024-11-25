---
title: Data Distiller Authorization API Guide
description: Learn how to use the Data Distiller Authorization API to enforce network-based IP restrictions for secure connections through SQL. Use this API to enhance data access control for your Adobe Experience Platform data.
role: Developer
exl-id: bcc5ea0e-cb6d-4c7b-bf9f-a0336f76c4c8
---
# Data Distiller Authorization API Guide

>[!AVAILABILITY]
>
>This functionality is available to customers who have purchased the Data Distiller add on. For more information, contact your Adobe representative.

Use the Data Distiller Authorization API to enforce IP-based restrictions. Applying these measures ensure that only approved networks and client machines can access data via SQL in Adobe Experience Platform. These controls help you meet stringent security standards while providing real-time access monitoring and alerting.

With this API, you can configure, enforce, and monitor IP restrictions for accessing data via the SQL interface. This document provides a high-level overview of the API's core features, endpoint functions, and future capabilities.

## Key Features

The following features enable you to define IP-based access restrictions, monitor access attempts, and customize network security settings for Query Service:

- **Define network-based data access controls**: Specify allowed IP ranges for Query Service access. This restriction applies specifically to SQL database connections, including those made through Business Intelligence (BI) tools, database clients, or programming interfaces like JDBC.
- **Enable comprehensive monitoring and alerts**: All access attempts, including denied connections, are logged and sent to the [Adobe Experience Platform Audit Logs](../../landing/governance-privacy-security/audit-logs/overview.md) for real-time tracking. Use this capability to monitor access patterns and detect potential security breaches.
- **Configure flexible IP restrictions**: Specify allowed IPs in both individual IP and CIDR block formats. These settings apply per sandbox, allowing you to tailor network restrictions to your specific security needs.

## Audit and monitoring capabilities

To support secure data access practices, Query Service logs all client IPs that access or attempt to access Experience Platform. Audit events, including denied connections, are sent to Platform Audit Logs. This enables:
   
- **Real-time Monitoring**: Track IP-based access patterns to ensure compliance.
- **Alerting on Unauthorized Access**: Identify and respond to access attempts from unauthorized IPs.

Refer to the [Audit logs overview](../../landing/governance-privacy-security/audit-logs/overview.md) for more details.

## Next Steps

Get started with the Data Distiller Authorization API by reviewing the [Getting Started guide](./getting-started.md) for essential setup steps, including required headers and API call conventions. Then, explore the endpoint-specific guides on [IP Access](./ip-access.md) and [IP Validation](./validate.md) for configuring and managing secure data access.

Refer to the [Data Distiller Authorization OpenAPI reference documentation](https://developer.adobe.com/experience-platform-apis/references/data-distiller-auth/) to view a standardized, machine-readable format for easier integration, testing, and exploration.

For information about the various response parameters for each returned dataset, refer to the [Datasets API developer documentation](https://developer.adobe.com/experience-platform-apis/references/catalog/#tag/Datasets/operation/listDatasets).
