---
title: Adobe Experience Platform Release Notes February 2023
description: The February 2023 release notes for Adobe Experience Platform.
---
# Adobe Experience Platform release notes 

**Release date: February 22, 2023**

Updates to existing features in Adobe Experience Platform:

- [Related accounts in Real-Time CDP B2B Edition](#related-accounts)
- [Sources](#sources)

## Related accounts in Real-Time CDP B2B Edition {#related-accounts}

>[!NOTE]
>
>The Related accounts feature is available for customers of the Real-Time CDP B2B Edition only.

Related accounts, [!DNL Real-Time CDP B2B] allows you to view a list of accounts that are similar to the account you are browsing. You can include the related accounts in your segment definitions to broaden your reach or apply wider criteria in your segments.

| Feature | Description |
| --- | --- |
| Enable related accounts service| The new toggle function allows you to enable the related accounts service on your account. For more information, read the guide on [enabling the related accounts service](../../rtcdp/b2b-ai-ml-services/related-accounts.md#enable). |

{style="table-layout:auto"}

Read more about related accounts features in the following documentation pages:

- [Related accounts in Real-Time CDP B2B Edition overview](../../rtcdp/b2b-ai-ml-services/related-accounts.md)
- [Related accounts tab in the Account profile UI guide](../../rtcdp/accounts/account-profile-ui-guide.md#related-accounts-tab)
- [How to use related accounts in segment definitions](../../rtcdp/segmentation/b2b.md#related-accounts)

To learn more about Real-Time CDP B2B Edition, read the [Real-Time CDP B2B Edition overview](../../rtcdp/overview.md).

## Sources {#sources}

Adobe Experience Platform can ingest data from external sources and allows you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

Experience Platform provides a RESTful API and an interactive UI that lets you set up source connections for various data providers with ease. These source connections allow you to authenticate and connect to external storage systems and CRM services, set times for ingestion runs, and manage data ingestion throughput.

| Feature | Description |
| --- | --- |
| Designate subscription-level access with [!DNL Google PubSub] | You can now define access to a specific topic subscription when using the [!DNL Google PubSub] source by providing the subscription ID when authenticating. For more information read the [!DNL Google PubSub] authentication tutorial [using the Flow Service API](../../sources/tutorials/api/create/cloud-storage/google-pubsub.md) or [Platform UI](../../sources/tutorials/ui/create/cloud-storage/google-pubsub.md). |

{style="table-layout:auto"}

To learn more about sources, read the [sources overview](../../sources/home.md).