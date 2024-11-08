---
title: Query Service Authorization API Guide
description: Learn how to use the Query Service Authorization API to enforce network-based IP restrictions for secure connections through SQL. Use this API to enhance data access control for your Adobe Experience Platform data.  
role: Developer
---
# Query Service Authorization API Guide

Use the Query Service Authorization API to enforce IP-based restrictions. Applying these measures ensure that only approved networks and client machines can access data via SQL in Adobe Experience Platform. These controls help you meet stringent security standards while providing real-time access monitoring and alerting.

With this API, you can configure, enforce, and monitor IP restrictions for accessing data via the SQL interface. This document provides a high-level overview of the API's core features, endpoint functions, and future capabilities.

## Key Features

The following features enable you to define IP-based access restrictions, monitor access attempts, and customize network security settings for Query Service:

- **Define network-based data access controls**: Specify allowed IP ranges for Query Service access. This restriction applies specifically to SQL database connections, including those made through Business Intelligence (BI) tools, database clients, or programming interfaces like JDBC.
- **Enable comprehensive monitoring and alerts**: All access attempts, including denied connections, are logged and sent to the [Adobe Experience Platform Audit Logs](../../landing/governance-privacy-security/audit-logs/overview.md) for real-time tracking. Use this capability to monitor access patterns and detect potential security breaches.
- **Configure flexible IP restrictions**: Specify allowed IPs in both individual IP and CIDR block formats. These settings apply per sandbox, allowing you to tailor network restrictions to your specific security needs.

## Audit and monitoring capabilities

To support secure data access practices, Query Service logs all client IPs that access or attempt to access AEP. Audit events, including denied connections, are sent to Platform Audit Logs. This enables:
   
- **Real-time Monitoring**: Track IP-based access patterns to ensure compliance.
- **Alerting on Unauthorized Access**: Identify and respond to access attempts from unauthorized IPs.

For more details on audit logging, refer to the [Audit Service documentation](https://experienceleague.adobe.com/docs/experience-platform/audit/audit-overview.html).

## Next Steps

Get started with the Query Service Authorization API by reviewing the [Getting Started guide](./getting-started.md) for essential setup steps, including required headers and API call conventions. Then, explore the endpoint-specific guides on [IP Access](./ip-access.md) and [IP Validation](./validate.md) for configuring and managing secure data access.
