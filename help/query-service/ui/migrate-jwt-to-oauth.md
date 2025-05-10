---
title: Migrate From JWT to OAuth Server-to-Server Credentials
description: Learn how to migrate non-expiring JWT credentials to OAuth Server-to-Server credentials in Adobe Experience Platform. Secure, uninterrupted access to Query Service before the June 30, 2025 deprecation deadline.
---
# Migrate from JWT to OAuth Server-to-Server credentials

>[!IMPORTANT]
>
>Adobe is deprecating support for Service Account (JWT) credentials used by Query Service. After June 30, 2025, non-expiring credentials based on JWT will no longer refresh or authenticate API requests. To prevent service interruptions, you must migrate each eligible credential to OAuth Server-to-Server authentication.

Follow this guide to migrate your non-expiring JWT credentials to OAuth Server-to-Server credentials in Adobe Experience Platform UI. Maintain secure, uninterrupted access to Query Service before the June 30, 2025 deprecation deadline.

This document provides step-by-step instructions for performing the migration, understanding the impact, and verifying your updated credentials.

## Who needs to migrate {#who-needs-to-migrate}

You must migrate if you use non-expiring credentials in Query Service. This includes credentials used in:

* Automated workflows
* Scheduled queries
* Custom API integrations

If you see credentials listed under the **[!UICONTROL Non-expiring Credentials]** section in the **[!UICONTROL Credentials]** tab, those credentials are affected.

## How to migrate a credential {#how-to-migrate}

To migrate a credential, navigate to **[!UICONTROL Queries]** in the left navigation of Adobe Experience Platform, then select the **[!UICONTROL Credentials]** tab. In the **[!UICONTROL Non-expiring Credentials]** section, identify a credential marked as eligible for migration and select **[!UICONTROL Migrate]** next to it.

>[!NOTE]
>
>The migration process takes approximately 30 to 40 seconds. Once started, it cannot be canceled.

![The Query Service Credentials workspace with Queries, Credentials, and Migrate highlighted.]()

Once migration completes successfully:

* A new OAuth Server-to-Server credential replaces the JWT-based one.
* The system automatically retires the JWT credential.
* The status of the credential updates to **[!UICONTROL Migrated]**.

No reconfiguration is required. Existing jobs and integrations using the migrated credential continue to function without interruption.

## What happens after migration {#after-migration}

After a successful migration:

* The system uses the new OAuth Server-to-Server credential.
* Scheduled jobs, queries, and API calls that previously relied on the JWT credential continue to run as expected.
* The old JWT credential is no longer valid.

>[!IMPORTANT]
>
> You cannot revert a credential back to JWT after migration.

## Frequently asked questions {#faq}

The following questions address common concerns about the migration from JWT to OAuth credentials. Review this section to better understand the reasons behind the change, identify whether you're affected, and ensure an uninterrupted transition.

### Why is Adobe deprecating JWT credentials?

OAuth Server-to-Server is a more secure and standardized authentication method. It provides better lifecycle management and supports broader platform consistency.

### What happens if I don't migrate by June 30, 2025?

JWT credentials will stop refreshing. Scheduled jobs and integrations will fail. Adobe cannot migrate credentials on your behalf.

### How do I know if I need to migrate?

If you see credentials under the **[!UICONTROL Non-expiring Credentials]** section in the Credentials tab, those credentials must be migrated.

### Do I need to update my integrations or reconfigure anything?

No. After migration, the OAuth credential automatically takes over. No manual changes are required in your jobs or integrations.

### Can I migrate all credentials at once?

No. You must migrate each credential individually using the **[!UICONTROL Migrate]** button.

### Can I continue using expiring credentials?

Expiring credentials are not affected by this change. Only non-expiring JWT credentials must be migrated.

## Next steps {#next-steps}

Review all non-expiring credentials in the Credentials tab and migrate each one before June 30, 2025. For questions or support, contact your Adobe account representative.
