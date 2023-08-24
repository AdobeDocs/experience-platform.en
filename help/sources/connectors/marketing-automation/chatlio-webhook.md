---
title: Chatlio Source Overview
description: Learn how to connect Chatlio to Adobe Experience Platform using APIs or the user interface by leveraging webhooks
last-substantial-update: 2023-08-23
exl-id: 4a71d1dc-e0eb-443e-a956-8caa0e82fa18
---
# [!DNL Chatlio]

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data from Streaming applications. Support for streaming providers include [!DNL Chatlio].

[[!DNL Chatlio]](https://chatlio.com/) is a live chat app that is fully integrated with [!DNL Slack] and facilitates multiple support agents to  simultaneously help an individual site visitor. [!DNL Chatlio] uses the [!DNL Chatio Zapier App] to connect [!DNL Chatlio] with over 2000 different apps and services.

The [!DNL Chatlio] source allows you to ingest supported webhook event schemas and their associated event data from [!DNL Chatlio.com] using the [[!DNL Chatlio] Webhooks](https://chatlio.com/docs/webhooks/).

The supported webhooks are:

* Exporting chat transcripts
* Exporting offline messages
* New conversation has started
* Visitor did not get an answer in time
* Visitor left feedback after a chat

## Prerequisites {#prerequisites}

Before you can create a [!DNL Chatlio] source connection, you must first ensure that you have the following:

* A [!DNL Chatlio] account. If you do not have one already visit the [[!DNL Chatlio] signup page](https://chatlio.com/app/#/signup) to register and create your account.
* After you have successfully registered an account, follow the [[!DNL Chatlio] setup documentation](https://chatlio.com/docs/setup/) to complete your account set up.

### Setup [!DNL Chatlio] webhook {#set-up-webhook}

Once you have successfully created your dataflow, you must set up a webhook to inform Platform about [!DNL Chatlio] events. Webhooks can notify you immediately when customer attributes change or when people open your messages and send this information to your [!DNL Chatlio] source. 

For more information, read the tutorials on [getting your streaming endpoint URL](../../tutorials/ui/create/marketing-automation/chatlio-webhook.md#get-streaming-endpoint) and [setting up a [!DNL Chatlio] Webhook](../../tutorials/ui/create/marketing-automation/chatlio-webhook.md#set-up-webhook).

## Connect [!DNL Chatlio] to Platform {#connect-to-platform}

The documentation below provides information on how to create a [!DNL Chatlio] streaming connector to connect with [!DNL Platform] using APIs or the user interface:

### Connect [!DNL Chatlio] to Platform using APIs {#connect-to-platform-using-api}

* [Create a source connection to bring [!DNL Chatlio] data to Platform using APIs.](../../tutorials/api/create/marketing-automation/chatlio-webhook.md)

### Connect [!DNL Chatlio] to Platform using the UI {#connect-to-platform-using-ui}

* [Create a source connection to bring [!DNL Chatlio] data to Platform using the user interface](../../tutorials/ui/create/marketing-automation/chatlio-webhook.md)
