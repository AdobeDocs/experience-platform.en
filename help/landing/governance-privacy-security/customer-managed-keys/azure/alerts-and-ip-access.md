---
title: Configure Alerts and IP allowlist for Azure CMK
description: Learn how to allowlist Adobe's static IP address in Azure Key Vault and understand how Experience Platform alerts help detect and resolve Customer Managed Key access issues.
---
# Configure alerts and IP allowlist for [!DNL Azure] CMK

If you manage sensitive data or work under strict compliance policies, restrict [!DNL Azure] Key Vault access to trusted IP addresses. Enabling network restrictions strengthens security and helps prevent unauthorized access.

To improve transparency, Adobe provides a [monitoring service](../../../../observability/alerts/ui.md){target="_blank"} that checks your key vault's access status and triggers alerts if issues occur. These alerts help you to respond quickly and avoid service disruptions. To enable this service, allowlist Adobe's static IP address.

>[!IMPORTANT]
>
>If you have disabled public network access or configured your [!DNL Azure] Key Vault to allow only selected networks, you must add Adobe's static IP address to your allowlist. This step is required to ensure that Adobe services can continue to access your key vault without interruption. Without it, you may not be notified of access issues that could impact your Experience Platform instance.

## Allowlist Adobe's static IP in [!DNL Azure] Key Vault {#add-adobe-static-ip}

To allow Adobe access while maintaining your network restrictions, navigate to your **[!DNL Azure Key Vault]** > **[!DNL Networking settings]**. In the **[!DNL Firewalls and virtual networks]** tab, select **[!DNL Allow public access from specific virtual networks and IP addresses]**.

![[!DNL Azure] Key vault Networking settings screen showing where to add Adobe's static IP address and with the Allow access from option highlighted.](../../../images/governance-privacy-security/customer-managed-keys/key-vault-networking-settings.png)

### Adobe's static IP address

>[!IMPORTANT]
>
>The Adobe-provided static IP address is: `20.88.123.53`. 

Next, in the **[!DNL Firewall]** section, select **[!DNL Add your current IP address]** and replace it with Adobe's static IP address. All outbound connections are treated as Production environments, so this static IP address must be allowlisted to ensure uninterrupted access to your key vault in restricted network configurations.

>[!NOTE]
>
>After you add or update the static IP address in your [!DNL Azure] Key Vault settings, allow up to 10 minutes for the change to take effect. A background process runs every 10 minutes to check key accessibility and apply any updates.

After allowlisting Adobe's static IP, Experience Platform can monitor access to your key vault and trigger alerts if issues arise. These alerts provide early warnings so you can act before service is impacted. The next section details the types of alerts you may receive and how to respond.

## Monitor alerts {#monitor-alerts}

Platform alerts notify you of issues that may interrupt key access, such as **[!UICONTROL Key access failure]** or **[!UICONTROL Key disablement]**. These alerts help you quickly identify problems like a removed static IP or a misconfigured firewall. To restore access, review your [!DNL Azure] firewall settings and re-add the required IP address.

<!-- For a complete list of alert types and recommended resolutions, see the [CMK alert resolution reference](../alert-resolution-reference.md). -->

Subscribe to Adobe I/O event notifications to receive real-time alerts in your monitoring tools. For setup instructions, see [Subscribe to Adobe I/O Event notifications](../../../../observability/alerts/subscribe.md). You can also refer to the [alerts UI guide](../../../../observability/alerts/ui.md) to learn how to view and manage alerts within Experience Platform.

## Next steps

You've now configured IP allowlisting and alert monitoring for your [!DNL Azure] Key Vault. To complete the setup for Customer Managed Keys in [!DNL Azure], follow these configuration guides.

- [Configure an [!DNL Azure] Key Vault](./azure-key-vault-config.md)  
- [Use the API to set up CMK](./api-set-up.md)  
- [Use the UI to set up CMK](./ui-set-up.md)
