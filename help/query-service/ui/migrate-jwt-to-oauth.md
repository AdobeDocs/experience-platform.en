---
title: Migrate From JWT to OAuth Server-to-Server Credentials
description: Learn how to migrate non-expiring JWT credentials to OAuth Server-to-Server credentials in Adobe Experience Platform to maintain secure, uninterrupted access to Query Service before support for JWT ends on June 30, 2025. This guide provides step-by-step instructions, explains post-migration behavior, and answers common questions.
---
# Migrate from JWT to OAuth Server-to-Server credentials

>[!IMPORTANT]
>
>Adobe is deprecating support for Service Account (JWT) credentials used by Query Service. After June 30, 2025, non-expiring credentials based on JWT will no longer refresh or authenticate API requests. To prevent service interruptions, you must migrate each eligible credential to OAuth Server-to-Server authentication.

This guide shows you how to migrate non-expiring JWT credentials to OAuth Server-to-Server credentials in Adobe Experience Platform. Completing this process ensures uninterrupted access to Query Service before support for JWT credentials ends on June 30, 2025.

This document provides step-by-step instructions for performing the migration, understanding the impact, and verifying your updated credentials.

## Who needs to migrate {#who-needs-to-migrate}

If you use non-expiring credentials in Query Service, you must migrate each one. This applies to credentials used for the following purposes:

* Automated workflows
* Scheduled queries
* Custom API integrations

If you see credentials listed under the **[!UICONTROL Non-expiring Credentials]** section in the **[!UICONTROL Credentials]** tab, those credentials are affected.

## How to migrate a credential {#how-to-migrate}

You can migrate credentials directly in the Experience Platform UI. To do so, navigate to **[!UICONTROL Queries]** in the left navigation of Adobe Experience Platform, then select the **[!UICONTROL Credentials]** tab. In the **[!UICONTROL Non-expiring Credentials]** section, identify a credential marked as eligible for migration and select **[!UICONTROL Migrate]** next to it.

>[!NOTE]
>
>The migration takes 30 to 40 seconds and cannot be canceled once started.

![The Query Service Credentials workspace with Queries, Credentials, and Migrate highlighted.]()

Once migration completes successfully:

* A new OAuth Server-to-Server credential replaces the JWT-based one.
* The system automatically retires the JWT credential.
* The status of the credential updates to **[!UICONTROL Migrated]**.

No reconfiguration is required. Existing jobs and integrations using the migrated credential continue to function without interruption.

## What happens after migration {#after-migration}

After a successful migration:

* After migration, Query Service automatically uses the new OAuth credential.
* Scheduled jobs, queries, and API calls that previously relied on the JWT credential continue to run as expected.
* The old JWT credential is no longer valid.

>[!IMPORTANT]
>
>You cannot undo this change. Once migrated, the credential cannot be reverted to JWT.

## Frequently asked questions {#faq}

These questions address common concerns and help you ensure a smooth, interruption-free migration.

### Why is Adobe deprecating JWT credentials?

OAuth Server-to-Server is a more secure and standardized authentication method. It provides better lifecycle management and supports broader platform consistency.

### What happens if I don't migrate by June 30, 2025?

JWT credentials will stop refreshing. Scheduled jobs and integrations will fail. Adobe cannot migrate credentials on your behalf.

### How do I know if I need to migrate?

If a credential appears under the **[!UICONTROL Non-expiring Credentials]** section in the Credentials tab, those credentials must be migrated.

### Do I need to update my integrations or reconfigure anything?

No. After migration, the OAuth credential automatically takes over. No manual changes are required in your jobs or integrations.

### Can I migrate all credentials at once?

No. You must migrate each credential individually using the **[!UICONTROL Migrate]** button.

### Can I continue using expiring credentials?

Expiring credentials are not affected by this change. Only non-expiring JWT credentials must be migrated.

## Next steps {#next-steps}

Review each non-expiring credential in the [!UICONTROL Credentials] tab and migrate them individually before June 30, 2025. For questions or support, contact your Adobe account representative.
