---
title: Configure Alerts and IP allowlist for Azure CMK
description: Learn how to allowlist Adobe's static IP address in Azure Key Vault and understand how Experience Platform alerts help detect and resolve Customer Managed Key access issues.
---
# Configure alerts and IP allowlist for Azure CMK

If you manage sensitive data or operate under strict compliance requirements, it is considered best practice to restrict key vault access to trusted sources only. To enhance security and reduce the risk of unauthorized access, enable network restrictions and limit key vault access to specific, approved IP addresses.

>[!IMPORTANT]
>
>If you have disabled public network access or configured your Azure Key Vault to allow only selected networks, you must add Adobe's static IP address to your allowlist. This step is required to ensure that Adobe services can continue to access your key vault without interruption.

## Allowlist Adobe's static IP in Azure Key Vault

To allow Adobe access while maintaining your network restrictions, navigate to your **[!DNL Azure Key Vault]** > **[!DNL Networking settings]**. In the **[!DNL Firewalls and virtual networks]** section, select **[!DNL Allow public access from specific virtual networks and IP addresses]**.

![Azure Key vault Networking settings view with Allow public access from specific virtual networks and IP addresses and Add your current IP address highlighted.](../../../images/governance-privacy-security/customer-managed-keys/key-vault-networking-settings-placeholder.png)

Next, in the **[!DNL Firewall]** section, select **[!DNL Add your current IP address]**. Enter the Adobe-provided static IP address for your Production or Stage environment. This is a fixed IP address provided by Adobe that all Azure-based CMK customers must allowlist.

>[!NOTE]
>
>After you add or update the static IP address in your Azure Key Vault settings, allow up to 10 minutes for the change to take effect. A background process runs every 10 minutes to check key accessibility and apply any updates.

Once Adobe's static IP address is allowlisted in your Azure network firewall, Adobe services can reliably access your Key Vault even in restricted network configurations. This secure connection allows Experience Platform to proactively monitor for access issues. If a problem occurs, such as Adobe being unable to reach your key, Platform alerts will notify you so you can take corrective action and ensure uninterrupted access to your encrypted data.

## Monitor alerts

Once Adobe's static IP address is added to your allowlist, you can begin receiving platform alerts if Adobe services are unable to access your Key Vault. These alerts may appear under your Experience Platform notifications and indicate issues such as key access failure or key disablement.

If you receive a **[!UICONTROL Key access failure]** alert, it often indicates that Adobe's IP was removed from the firewall allowlist or that networking restrictions are misconfigured. In these cases, check your Azure firewall settings and re-add the required IP if necessary. These alerts are designed to help you take immediate corrective action and prevent data loss or service interruptions.

## Next steps

By reading this document, you have learned how to allowlist Adobe's static IP address and monitor alerts related to Customer Managed Key access issues. To complete the CMK setup process for Azure-hosted environments, continue with the following guides:

- [Configure an Azure Key Vault](./azure-key-vault-config.md)  
- [Use the API to set up CMK](./api-set-up.md)  
- [Use the UI to set up CMK](./ui-set-up.md)
