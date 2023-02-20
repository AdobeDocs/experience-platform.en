---
title: Customer.io Source Overview
description: Learn how to connect Customer.io to Adobe Experience Platform using APIs or the user interface by leveraging webhooks 
---
# (Beta) [!DNL Customer.io]

>[!NOTE]
>
>The [!DNL Customer.io] source is in beta. See the [sources overview](../../home.md#terms-and-conditions) for more information on using beta-labelled sources.

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data from Streaming applications. Support for streaming providers include [!DNL Customer.io].

[[!DNL Customer.io]](https://customer.io/) is an automated messaging platform for marketers who want more control and flexibility to craft and send data-driven emails, push notifications, in-app messages, and SMS.

The [!DNL Customer.io] source allows you to ingest supported Webhook Event Schemas and their associated event data from [!DNL Customer.io] using the [[!DNL Customer.io] Reporting Webhooks](https://customer.io/docs/api/webhooks/).

The supported Webhook Event Schemas are:
* Customer Events
* Email Events
* SMS Events
* Push Notification Events
* In-App Message Events
* Slack Events
* Webhook Events

Refer to the [[!DNL Customer.io] Reporting Webhook events](https://customer.io/docs/webhooks/#events) page for a list of  events that are available via webhook.

## Prerequisites {#prerequisites}

Before you can create a [!DNL Customer.io] source connection, you must first ensure that you have the following:

A validated [!DNL Customer.io] account. If you do not have one already see the [[!DNL Customer.io] signup page](https://fly.customer.io/signup) to register and create your account.

Once you have successfully registered, you will also need to have your account validated. Follow the steps documented on the [[!DNL Customer.io] Account verification](https://customer.io/docs/account-verification/) page to complete the process.

Later, after you set up the [!DNL Customer.io] source, you will set up a Reporting Webhook to inform Platform about [!DNL Customer.io] events as explained in the [Get your streaming endpoint URL](../../tutorials/ui/create/marketing-automation/customerio-webhook.md#set-up-webhook) and the [Next Steps](../../tutorials/ui/create/marketing-automation/customerio-webhook.md#next-steps) sections. Webhooks can notify you immediately when customer attributes change or when people open your messages, and send this information to your [!DNL Customer.io] source.

## Connecting [!DNL Customer.io] to Platform {#connect-to-platform}

You can use the [!DNL HTTP API] source connector to stream your data to Platform. The [!DNL HTTP API] source is supported by [!DNL Data Prep] functions, allowing you to map any non XDM-compliant data to an XDM-compliant dataset.

The documentation below provides information on how to create a [!DNL Customer.io] streaming connector to connect with [!DNL Platform] using APIs or the user interface:

### Connect [!DNL Customer.io] to Platform using APIs {#connect-to-platform-using-api}

- [Create a source connection to bring [!DNL Customer.io] data to Platform using APIs.](../../tutorials/api/create/marketing-automation/customerio-webhook.md)

### Connect [!DNL Customer.io] to Platform using the UI {#connect-to-platform-using-ui}

- [Create a source connection to bring [!DNL Customer.io] data to Platform using the user interface](../../tutorials/ui/create/marketing-automation/customerio-webhook.md)

