---
title: chatlio Source Overview
description: Learn how to connect chatlio to Adobe Experience Platform using APIs or the user interface by leveraging webhooks 
---
# (Beta) [!DNL Chatlio]

>[!NOTE]
>
>The [!DNL Chatlio] source is in beta. See the [sources overview](../../home.md#terms-and-conditions) for more information on using beta-labelled sources.

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data from Streaming applications. Support for streaming providers include [!DNL Chatlio].

[[!DNL Chatlio]](https://chatlio.com/) is a live chat app that is fully integrated with Slack and facilitates multiple support agents to help an individual site visitor simultaneously. Using the [!DNL Zapier App](https://chatlio.com/docs/zapier/) you can connect [!DNL Chatlio] to over 2000 different apps and services

The [!DNL Chatlio] source allows you to ingest supported Webhook Event Schemas and their associated event data from [!DNL Chatlio.com] using the [[!DNL Chatlio] Reporting Webhooks](https://chatlio.com/docs/webhooks/).

The supported webhooks are:
* Exporting chat transcripts
* Exporting offline messages
* New conversation has started
* Visitor did not get an answer in time
* Visitor left feedback after a chat

## Prerequisites {#prerequisites}

Before you can create a [!DNL Chatlio] source connection, you must first ensure that you have the following:

A validated [!DNL Chatlio] account. If you do not have one already see the [[!DNL Chatlio] signup page](https://chatlio.com/app/#/signup) to register and create your account.

After sign up, follow the [!DNL Chatlio] [setup](https://chatlio.com/docs/setup/) documentation to complete setup.

Later, after you set up the [!DNL Chatlio] source, you will set up a Reporting Webhook to inform Platform about [!DNL Chatlio] events as explained in the [Get your streaming endpoint URL](../../tutorials/ui/create/marketing-automation/chatlio-webhook.md#set-up-webhook) and the [Next Steps](../../tutorials/ui/create/marketing-automation/chatlio-webhook.md#next-steps) sections. Webhooks can notify you immediately when customer attributes change or when people open your messages, and send this information to your [!DNL Chatlio] source.

## Connecting [!DNL Chatlio] to Platform {#connect-to-platform}

You can use the [!DNL HTTP API] source connector to stream your data to Platform. The [!DNL HTTP API] source is supported by [!DNL Data Prep] functions, allowing you to map any non XDM-compliant data to an XDM-compliant dataset.

The documentation below provides information on how to create a [!DNL Chatlio] streaming connector to connect with [!DNL Platform] using APIs or the user interface:

### Connect [!DNL Chatlio] to Platform using APIs {#connect-to-platform-using-api}

- [Create a source connection to bring [!DNL Chatlio] data to Platform using APIs.](../../tutorials/api/create/marketing-automation/chatlio-webhook.md)

### Connect [!DNL Chatlio] to Platform using the UI {#connect-to-platform-using-ui}

- [Create a source connection to bring [!DNL Chatlio] data to Platform using the user interface](../../tutorials/ui/create/marketing-automation/chatlio-webhook.md)

