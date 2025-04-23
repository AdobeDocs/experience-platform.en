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

Once your Azure network firewall is configured, you will receive notifications 

## Configure networking options

To allow Adobe access while maintaining your network restrictions, navigate to your **[!DNL Azure Key vault]** > **[!DNL Networking settings]**. In the [!DNL Firewalls and Virtual Networks] section, select **[!DNL Allow public access from specific virtual networks and IP addresses]**.

![Azure Key vault Networking settings view with Allow public access from specific virtual networks and IP addresses and Add your current IP address highlighted.]()

Next, in the [!DNL Firewall] section, select [!DNL Add your current IP address]. Enter your IP address for your Prod or Stage environment.
  
<!-- Q) Is this s fixed number that every customer needs to add? The '88 one'? -->

>[!NOTE]
>
>After you add or update the static IP address in your Azure Key Vault settings, allow up to 10 minutes for the change to take effect. A background process runs every 10 minutes to check key accessibility and apply any updates.

## Monitor alerts 

Once Adobe's static IP address is added to your allowlist IP allow list, you can ...

