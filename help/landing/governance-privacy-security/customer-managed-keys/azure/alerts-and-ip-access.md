---
title: Configure Alerts and IP allowlist for Azure CMK
description: Learn how to allowlist Adobe's static IP address in Azure Key Vault and understand how Experience Platform alerts help detect and resolve Customer Managed Key access issues.
---
# Configure alerts and IP allowlist for [!DNL Azure] CMK

If you manage sensitive data or work under strict compliance policies, restrict [!DNL Azure] Key Vault access to trusted IP addresses to reduce the risk of unauthorized access. Enabling network restrictions reduces the risk of unauthorized access and supports a stronger security posture. 

To improve transparency, Adobe has introduced a monitoring service that checks your Key Vault's access status. If an issue occurs, the system triggers platform alerts so you can respond quickly and avoid service disruptions. To enable this service, you must allowlist Adobe's static IP address.

>[!IMPORTANT]
>
>If you have disabled public network access or configured your [!DNL Azure] Key Vault to allow only selected networks, you must add Adobe's static IP address to your allowlist. This step is required to ensure that Adobe services can continue to access your key vault without interruption.

## Allowlist Adobe's static IP in [!DNL Azure] Key Vault {#add-adobe-static-ip}

To allow Adobe access while maintaining your network restrictions, navigate to your **[!DNL Azure Key Vault]** > **[!DNL Networking settings]**. In the **[!DNL Firewalls and virtual networks]** section, select **[!DNL Allow public access from specific virtual networks and IP addresses]**.

![[!DNL Azure] Key vault Networking settings view with Allow public access from specific virtual networks and IP addresses and Add your current IP address highlighted.](../../../images/governance-privacy-security/customer-managed-keys/key-vault-networking-settings.png)

Next, in the **[!DNL Firewall]** section, select **[!DNL Add your current IP address]**, then replace it with the Adobe-provided static IP address for your environment. Adobe uses a static IP address that must be allowlisted to ensure uninterrupted access to your Key Vault in restricted network configurations.

>[!IMPORTANT]
>
>The Adobe-provided static IP address for Production environments is: `20.88.123.53`. 

>[!NOTE]
>
>After you add or update the static IP address in your [!DNL Azure] Key Vault settings, allow up to 10 minutes for the change to take effect. A background process runs every 10 minutes to check key accessibility and apply any updates.

Once Adobe's static IP address is added to your [!DNL Azure] Key Vault firewall settings, Experience Platform can maintain a secure connection and monitor for access issues. If Adobe services are unable to reach your Key Vault, for example, due to misconfigured firewall rules or removal of the IP address, you will receive platform alerts in your Experience Platform notifications. These alerts give you the visibility needed to quickly resolve access issues. The next section outlines the types of alerts you may receive and how to respond.

## Monitor alerts {#monitor-alerts}

Platform alerts notify you of issues that may interrupt key access, such as **[!UICONTROL Key access failure]** or **[!UICONTROL Key disablement]**. These alerts help you quickly identify problems like a removed static IP or a misconfigured firewall. To restore access, review your [!DNL Azure] firewall settings and re-add the required IP address.

<!-- Link to Les' doc as per PLAT-233033 -->

To receive these alerts in real time, subscribe to Adobe I/O event notifications and integrate them with your organization's monitoring tools. For setup instructions, see [Subscribe to Adobe I/O Event notifications](../../../../observability/alerts/subscribe.md). Or refer to the [alerts UI guide](../../../../observability/alerts/ui.md) to learn how to view and manage alerts within Experience Platform.

## Next steps

You've now configured IP allowlisting and alert monitoring for your [!DNL Azure] Key Vault. Continue with the steps below to complete the Customer Managed Key setup.

- [Configure an [!DNL Azure] Key Vault](./azure-key-vault-config.md)  
- [Use the API to set up CMK](./api-set-up.md)  
- [Use the UI to set up CMK](./ui-set-up.md)
