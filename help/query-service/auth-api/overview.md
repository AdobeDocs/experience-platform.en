---
title: Query Service Authorization API Guide
description: Learn how to use the Query Service Authorization API to enforce network-based IP restrictions for secure connections through SQL. Use this API to enhance data access control for your Adobe Experience Platform data.  
role: Developer
---
# Query Service Authorization API Guide

Use the Query Service Authorization API to meet heightened data security requirements and enforce tighter control over data access via SQL in Adobe Experience Platform. You can apply IP-based restrictions with this API to ensure that data access is limited to approved networks and client machines. This gives you control over data access in compliance with security standards.
<!-- a robust tool to manage data access. -->
With this API you can configure, enforce, and monitor IP restrictions for accessing data via the SQL interface. This document provides a high-level overview of the API's core features, endpoint functions, and future capabilities.

## Key Features

The following features enable you to define IP-based access restrictions, monitor access attempts, and customize network security settings for Query Service:

- **Restrict data access by network**: You can define allowed IP ranges from which data can be accessed using Query Service. This restriction applies specifically to SQL database connections made through Business Intelligence (BI) tools, database clients, or programming interfaces like JDBC.
- **Enhanced monitoring and alerts**: All access attempts, including denied connections due to IP restrictions, are logged and sent to the [Adobe Experience Platform Audit Logs](../../landing/governance-privacy-security/audit-logs/overview.md) for comprehensive monitoring. You can track access patterns and identify potential security breaches promptly with this real-time auditing capability.
- **Flexible IP restriction setup**: You can specify allowed IPs in both individual IP and CIDR block formats. These settings are applied per sandbox and offer tailored network restrictions based on your specific security needs.

## Audit and monitoring capabilities

To support secure data access practices, Query Service logs all client IPs that access or attempt to access AEP. Audit events, including denied connections, are sent to Platform Audit Logs. This enables:
   
- **Real-time Monitoring**: Track IP-based access patterns to ensure compliance.
- **Alerting on Unauthorized Access**: Identify and respond to access attempts from unauthorized IPs.

For more details on audit logging, refer to the [Audit Service documentation](https://experienceleague.adobe.com/docs/experience-platform/audit/audit-overview.html).

## Next Steps

To begin using the Query Service Authorization API, first review the [Getting Started guide](./getting-started.md) for important setup instructions, including gathering required header values and understanding sample API calls. Then explore the endpoint-specific documentation for information on [IP Access](./ip-access.md) and [IP Validation](./ip-validation.md). Each guide provides in-depth details for configuring and managing IP restrictions, to help you enforce secure data access within Adobe Experience Platform.
