---
title: Pendo Source Overview
description: Learn how to connect Pendo to Adobe Experience Platform using APIs or the user interface by leveraging webhooks 
---
# (Beta) [!DNL Pendo]

>[!NOTE]
>
>The [!DNL Pendo] source is in beta. See the [sources overview](../../home.md#terms-and-conditions) for more information on using beta-labelled sources.

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data from third-party analytics application. Support for analytics providers include [!DNL Pendo].

[[!DNL Pendo]](https://pendo.io/) is a product-analytics app built to help software companies develop products that resonate with customers. The app allows software makers to embed in their products a wide range of tools that can lead both to a better product experience for users and new insights for the product team.

The [!DNL Pendo] source allows you to ingest supported Webhook Event Schemas and their associated event data from [!DNL Pendo.io] using the [[!DNL Pendo] Webhooks](https://support.pendo.io/hc/en-us/articles/360032285012-Webhooks). The [!DNL Pendo] source connector works with [!DNL Pendo] URL webhooks. 

The supported webhooks are:
* [Guide](https://support.pendo.io/hc/en-us/articles/8146679315867-Creating-a-Guide) Displayed
* [Poll](https://support.pendo.io/hc/en-us/articles/360031867152-Polls-Classic-) Displayed / Submitted
* [Net Promoter Score](https://support.pendo.io/hc/en-us/articles/360033527151-Set-up-an-NPS-Survey) Displayed / Submitted

## Prerequisites {#prerequisites}

Before you can create a [!DNL Pendo] source connection, you must first ensure that you have the following:

A [!DNL Pendo] account. If you do not have one already see the [[!DNL Pendo] register](https://app.pendo.io/register) page to register and create your account.

Later, after you set up the [!DNL Pendo] source, you will set up a Webhook to inform Platform about [!DNL Pendo] events as explained in the [Get your streaming endpoint URL](../../tutorials/ui/create/analytics/pendo-webhook.md#set-up-webhook) and the [Next Steps](../../tutorials/ui/create/analytics/pendo-webhook.md#next-steps) sections.[!DNL Pendo] Webhooks can push out real-time notifications to other services when certain events happen, and send this information to your [!DNL Pendo] source. 

## Connecting [!DNL Pendo] to Platform {#connect-to-platform}

You can use the [!DNL HTTP API] source connector to stream your data to Platform. The [!DNL Pendo] source is supported by [!DNL Data Prep] functions, allowing you to map any non XDM-compliant data to an XDM-compliant dataset.

The documentation below provides information on how to create a [!DNL Pendo] streaming connector to connect with [!DNL Platform] using APIs or the user interface:

### Connect [!DNL Pendo] to Platform using APIs {#connect-to-platform-using-api}

- [Create a source connection to bring [!DNL Pendo] data to Platform using APIs.](../../tutorials/api/create/analytics/pendo-webhook.md)

### Connect [!DNL Pendo] to Platform using the UI {#connect-to-platform-using-ui}

- [Create a source connection to bring [!DNL Pendo] data to Platform using the user interface](../../tutorials/ui/create/analytics/pendo-webhook.md)

