---
title:Query Service Auth Service API Guide
description: Learn how to use the Query Service Auth Service API to ... . Follow this guide to learn how to perform key operations using the API.
role: Developer
---
# Query Service Auth Service API guide

## Use case and security scope

If you have hightened data security requirements and require tighter control over data access via SQL in AEP, you can ... This includes:

1. **Restricting Data Access by Network**: Organizations can specify allowed IP ranges for network access to Query Service using IP addresses or CIDR blocks. This restriction applies to database connections, including those made through BI tools, database clients, or programming interfaces like JDBC.
2. **Enhanced Monitoring and Alerts**: IP-based access events are logged through the Adobe Experience Platform Audit Logs, capturing both successful and denied access attempts. This enables real-time monitoring of access patterns and detection of unauthorized access attempts.

>[!NOTE]
>
>Currently, IP-based restrictions apply only to database connections (such as connections through BI tools or JDBC). In future updates, Adobe may extend these restrictions to other data access interfaces.
