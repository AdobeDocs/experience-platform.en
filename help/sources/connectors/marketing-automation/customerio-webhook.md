---
title: Customer.io Source Overview
description: Learn how to connect Customer.io to Adobe Experience Platform using APIs or the user interface by leveraging webhooks
badge: Beta
exl-id: 0f4ee106-c22b-465c-9c5e-83709e8424f5
---
# [!DNL Customer.io]

>[!NOTE]
>
>The [!DNL Customer.io] source is in beta. Please read the [sources overview](../../home.md#terms-and-conditions) for more information on using beta-labeled sources.

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data from streaming applications. Support for streaming providers include [!DNL Customer.io].

[[!DNL Customer.io]](https://customer.io/) is an automated messaging platform for marketers who want more control and flexibility to craft and send data-driven emails, push notifications, in-app messages, and SMS.

The [!DNL Customer.io] source allows you to ingest supported webhook event schemas and their associated event data from [!DNL Customer.io] using the [[!DNL Customer.io] Reporting Webhooks](https://customer.io/docs/api/webhooks/).

The supported webhook event schemas are:

* Customer Events
* Email Events
* SMS Events
* Push Notification Events
* In-App Message Events
* Slack Events
* Webhook Events

For a list of events that are available through webhooks, please refer to the [[!DNL Customer.io] Reporting Webhook events](https://customer.io/docs/webhooks/#events) documentation.

## Prerequisites {#prerequisites}

Before you can create a [!DNL Customer.io] source connection, you must first ensure that you have the following:

* A [!DNL Customer.io] account. If you do not have one read the [[!DNL Customer.io] signup page](https://fly.customer.io/signup) to register and create your account.
* After creating your account, you will also need to have your account validated. Follow the steps documented on the [[!DNL Customer.io] Account verification](https://customer.io/docs/account-verification/) page to complete the process.

### Set up [!DNL Customer.io] Webhook {#set-up-webhook}

Once you have successfully created your dataflow, you must set up a Reporting Webhook to inform Platform about [!DNL Customer.io] events. Webhooks can notify you immediately when customer attributes change or when people open your messages, and send this information to your [!DNL Customer.io] source. For more information, read the tutorials on [getting your streaming endpoint URL](../../tutorials/ui/create/marketing-automation/customerio-webhook.md#get-streaming-endpoint) and [setting up a [!DNL Customer.io] Webhook](../../tutorials/ui/create/marketing-automation/customerio-webhook.md#set-up-webhook).

## Connecting [!DNL Customer.io] to Platform {#connect-to-platform}

The documentation below provides information on how to create a [!DNL Customer.io] streaming connection to connect with [!DNL Platform] using APIs or the user interface:

### Connect [!DNL Customer.io] to Platform using APIs {#connect-to-platform-using-api}

* [Create a source connection and dataflow to bring [!DNL Customer.io] data to Platform using APIs.](../../tutorials/api/create/marketing-automation/customerio-webhook.md)

### Connect [!DNL Customer.io] to Platform using the UI {#connect-to-platform-using-ui}

* [Create a source connection and dataflow to bring [!DNL Customer.io] data to Platform using the user interface](../../tutorials/ui/create/marketing-automation/customerio-webhook.md)
