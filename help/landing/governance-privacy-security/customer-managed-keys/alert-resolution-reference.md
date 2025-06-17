---
title: CMK Alert Resolution Reference
description: Identify, troubleshoot, and resolve common alerts triggered by Customer Managed Key (CMK) misconfigurations in Adobe Experience Platform. Use this guide to follow clear, step-by-step instructions and restore secure key access.
---
# CMK alert resolution reference

Use this guide to troubleshoot and resolve alerts triggered by misconfigured Customer Managed Key (CMK) settings in Adobe Experience Platform. It helps system administrators and implementation specialists identify causes and apply resolutions to restore secure access.

Use the following sections to understand and resolve each alert.

## Key access disabled

This alert indicates that Adobe Experience Platform is unable to access the configured CMK due to the key being disabled in the customer's key management service.

### When it occurs

This alert is triggered when the encryption key in Azure Key Vault is in a disabled state at the time of an access attempt by Adobe services.

### Possible causes

- The key was manually disabled in Azure Key Vault.
- The key was automatically disabled by a lifecycle policy or external automation.
- An update to key access policies disabled access without re-enabling the key.

### Resolution steps

1. Navigate to the [Azure Key Vault](https://portal.azure.com/) that contains the CMK.
2. Select the key associated with Adobe Experience Platform.
3. Verify that the key's status is set to **Enabled**.
4. If the key is disabled, enable it using the Azure portal or by running a CLI command such as `az keyvault key enable`.  
   
   >[!NOTE]  
   >
   >Replace this command with your actual environment-specific usage if necessary.

5. Ensure that no automated scripts or lifecycle policies disable the key again.

### Notes

>[!NOTE]  
>
>If soft-delete is enabled in Azure Key Vault, restoring a disabled key may require additional steps. Confirm that the key was not deleted or scheduled for deletion.

## Key access failure

This alert indicates that Adobe Experience Platform failed to access the CMK due to network-level or configuration-based denial of access.

### When it occurs

This alert is triggered when Adobe attempts to access the CMK and encounters permission, network, or identity-related issues.

### Possible causes

- The CMK no longer exists at the expected location.
- The Key Vault has been deleted or is misconfigured.
- Required permissions for the Adobe-managed application are missing.
- Firewall or network allowlist settings block Adobe IPs.
- The identity (Object ID) of the MultiTenant App has changed.

### Resolution steps

1. Verify that the Azure Key Vault and encryption key still exist and are not deleted.
2. Confirm that the Adobe MultiTenant App has the following permissions:
   - `get`, `wrapKey`, and `unwrapKey` on the key.
3. Review the Key Vault's access policies or role assignments.
4. Ensure the Object ID for the Adobe MultiTenant App is current. If changed, reapply the necessary permissions.
5. Verify that firewall rules allow access from Adobe's static IP address: `20.88.123.53`.  
   
   >[!NOTE]  
   >
   >Adobe's IP must be allowlisted. Firewall rules can block access even if permissions are configured correctly.

6. Confirm that the key is not in a pending deletion or recoverable state.
7. If soft-delete is enabled and the key was deleted, recover the key before reapplying permissions.

## Alert notification

This alert serves as a general notification about a CMK configuration or access issue that may require customer attention but does not match a specific failure category.

### When it occurs

This alert appears when a general issue is detected with CMK configuration or access, such as transient failures or unsupported key states.

### Possible causes

- Temporary network disruption between Adobe and the Key Vault.
- A non-fatal but recurring access issue has been observed.
- The key's status or configuration is transitioning between valid and invalid states.

### Resolution steps

1. Review your Azure Key Vault logs for recent anomalies or intermittent errors.
2. Confirm that the key is in a valid state and not disabled or pending deletion.
3. Monitor for any automatic processes that might affect key accessibility.
4. Reapply access permissions to the key if any recent changes were made.
5. Check for any Azure-side incidents that may affect Key Vault availability.

### Notes

>[!NOTE]  
>
>You may receive this alert even if the CMK recovers automatically. Audit your key settings and access configurations to ensure continued stability.
