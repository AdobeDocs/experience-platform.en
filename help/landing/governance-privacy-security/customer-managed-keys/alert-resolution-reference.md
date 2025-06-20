---
title: CMK Alert Resolution Reference
description: Identify, troubleshoot, and resolve common alerts triggered by Customer Managed Key (CMK) misconfigurations in Adobe Experience Platform. Use this guide to follow clear, step-by-step instructions and restore secure key access.
---
# CMK alert resolution reference

Use this guide to troubleshoot and resolve alerts triggered by misconfigured Customer Managed Key (CMK) settings in Adobe Experience Platform. It helps system administrators and implementation specialists identify causes and apply resolutions to restore secure access.

## Alert categories {#categories}

The following sections outline the types of alerts that may be triggered by Customer Managed Key (CMK) issues in Adobe Experience Platform:

- [Key access disabled](#key-access-disabled)
- [Key access failure](#key-access-failure)
- [Alert notification](#alert-notification)

## Key access disabled {#key-access-disabled}

This alert indicates that Adobe Experience Platform is unable to access the configured CMK due to the key being disabled or rendered inaccessible by related key configuration issues.

>[!IMPORTANT]
>
>In this event, Adobe CMK treats the access failure as a purposeful removal and will purge all data associated with your organization, based on your SLA.

### When it occurs

This alert is triggered when the encryption key in Azure Key Vault is in a disabled state, deleted, or misconfigured in a way that prevents access during platform operations.

### Possible causes

The following are common reasons this alert may occur:

- The key was manually disabled.
- Key operations (wrapKey/unwrapKey) have been removed.
- The key activation date is set in the future.
- The key expiration date is in the past.
- The key has been deleted.
- The MultiTenant App permissions have been removed or altered.
- The MultiTenant App has been deleted.
- The MultiTenant App properties have been changed.
- The Key Vault has been deleted or is no longer accessible.

### Resolution

+++If the key is disabled

1. Navigate to the [Azure Key Vault](https://portal.azure.com/) that contains the CMK.
2. Select the key associated with Adobe Experience Platform.
3. Verify that the key's status is set to **Enabled**.
4. If the key is disabled, enable it using the Azure portal or the CLI command `az keyvault key enable`.

>[!NOTE]
>
>Customize this command for your Azure environment.

+++

+++If key operations have been altered

1. Re-add the `wrapKey` and `unwrapKey` permissions to the key.

>[!NOTE]
>
>All of the key's settings—including activation and expiration dates—must be valid for the key to function.

+++

+++If the activation or expiration date is misconfigured

1. Set the activation date to the past or present.
2. Set the expiration date to a future date.

+++

+++If the key has been deleted

1. Ensure soft-delete is enabled in Azure Key Vault.
2. Navigate to "Manage deleted keys" in the Azure portal or CLI.
3. Select the deleted key from the list of soft-deleted items.
4. Click **Recover** to restore the key.

+++

+++If the MultiTenant App permissions were removed or altered

1. Restore the correct permissions for the MultiTenant App.
2. Ensure the following permission is granted: `Key Vault Crypto Service Encryption User`

+++

+++If the MultiTenant App was deleted

This is a breaking change. You must contact Adobe to restore or regenerate the MultiTenant App.

+++

+++If MultiTenant App settings were changed

1. Revert the changes to the properties associated with the MultiTenant App.

+++

+++If the Key Vault has been deleted

1. Confirm that soft-delete is enabled in Azure.
2. Navigate to "Manage deleted vaults" in the portal or CLI.
3. Recover the deleted vault within your retention period (7–90 days).
4. If purge protection is disabled, you may still be able to recover the vault.

>[!NOTE]
>
>If soft-delete or purge protection is not configured correctly, the key or vault may not be recoverable.

+++

## Key access failure {#key-access-failure}

This alert indicates that Adobe Experience Platform failed to access the CMK due to network-level or configuration-based denial of access.

>[!IMPORTANT]
>
>This is treated as a recoverable error. Data is **not** purged under SLA in this case.

### When it occurs

This alert is typically triggered when the Key Vault firewall is not configured to allow Adobe CMK access or when identity-based access fails.

### Possible causes

- Key Vault firewall is blocking Adobe's static IP (`20.88.123.53`)
- The key no longer exists at the expected location
- Permissions for the Adobe MultiTenant App are missing
- The Key Vault has been deleted or misconfigured
- The MultiTenant App's Object ID has changed

### Resolution

+++If the Key Vault or key no longer exists

1. Verify that the Key Vault and encryption key still exist.
2. If the key was deleted, follow the soft-delete recovery steps under "Key access disabled."

+++

+++If MultiTenant App permissions are missing or changed

1. Confirm that the Adobe MultiTenant App has the following permissions:
   - `get`, `wrapKey`, and `unwrapKey` on the key.
2. Check that the Object ID for the MultiTenant App is correct. If it has changed, reapply permissions.

+++

+++If the firewall is blocking Adobe

1. Review firewall rules in Azure Key Vault.
2. Ensure they allow access from Adobe's static IP: `20.88.123.53`.

>[!NOTE]
>
>Even with correct permissions, a blocked IP will prevent key access.

+++

## Alert notification {#alert-notification}

This alert serves as a general notification for CMK configuration or access anomalies that don't match a known failure type.

>[!NOTE]
>
>This alert may reflect an internal error, a novel misconfiguration, or an unexpected condition.

### When it occurs

This alert appears when Adobe CMK detects an unknown, unsupported, or novel issue during key access or monitoring.

### Possible causes

- Unanticipated firewall/network conditions
- Key or vault changes not covered by predefined alert types
- Internal Adobe network disruptions
- Misconfiguration Adobe has not seen before

### Resolution

+++If the cause is unknown or ambiguous

1. Review the alert message for any contextual details.
2. Check firewall, vault, and key settings for recent changes.
3. If no clear cause is found, contact Adobe support for guidance.
4. Monitor logs and system behavior to identify patterns.

+++

## Next steps

To understand how alerts are triggered and how to configure IP allowlisting for [!DNL Azure] CMK, see the [Configure alerts and IP allowlist for Azure CMK](./azure/alerts-and-ip-access.md) guide.
