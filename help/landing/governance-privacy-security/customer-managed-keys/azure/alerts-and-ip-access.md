---
title: Manage Alerts and IP Access for Azure CMK
description: Learn how to allowlist Adobe's static IP for secure access to your Azure Key Vault and understand how platform alerts help you monitor and resolve Customer Managed Key access issues.
---
# Manage alerts and IP access for Azure CMK

When managing sensitive data or operating under strict compliance requirements, it is best practice for security-conscious organizations to restrict key vault access to only trusted sources. To enhance security and prevent unauthorized access attempts from outside your organization, limit key vault access to specific IP addresses by enabling network restrictions.

>[!IMPORTANT]
>
>If you have disabled public network access or configured your Azure Key Vault to allow only selected networks, you must add Adobe's static IP address to your allowlist. This step is required to ensure that Adobe services can continue to access your key vault without interruption.

<!-- Add Adobe's static IP to Azure's networking firewall allowlist to maintain your secure setup while still allowing Adobe services to access the key vault. -->


