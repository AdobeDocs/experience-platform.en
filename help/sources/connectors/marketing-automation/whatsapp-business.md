---
title: WhatsApp Source Overview
description: Learn how to connect WhatsApp to Adobe Experience Platform using the user interface by leveraging webhooks.
badge: Beta
hide: true
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---

# [!DNL WhatsApp]

>[!NOTE]
>
>The [!DNL WhatsApp] source is in beta. Read the [Sources overview](../../home.md#terms-and-conditions) for more information on using beta-labeled connectors.

>[!IMPORTANT]
>
>This source is in private beta and available to a limited number of customers. Contact your Adobe representative to request access.

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Experience Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data from streaming applications. Support for messaging providers includes [!DNL WhatsApp].

[!DNL WhatsApp Business] is a messaging platform that businesses use to communicate with customers over [!DNL WhatsApp]. The [!DNL WhatsApp] source streams inbound messages that your customers send to your [!DNL WhatsApp Business] phone number into Experience Platform in near real time.

Meta delivers each message to a Platform streaming endpoint (a webhook), where it is captured as a raw Experience Event record and added to a dataset in the data lake for downstream use. The connector ingests the raw webhook payload as is, so every [!DNL WhatsApp] message type is preserved.

## How the connector works {#how-it-works}

The [!DNL WhatsApp] source follows this sequence to bring a message into Experience Platform:

1. A customer sends a message to your [!DNL WhatsApp Business] phone number.
1. Meta signs the webhook payload with your App Secret (`X-Hub-Signature-256`) and sends it to the Callback URL you configured on the Platform streaming endpoint.
1. Platform validates the signature, captures the raw payload as an Experience Event, and adds it to your [!DNL WhatsApp] dataset.

## Prerequisites {#prerequisites}

Before you create a [!DNL WhatsApp] source connection, complete the following on Meta at [developers.facebook.com](http://developers.facebook.com):

* Create a Meta app of type **[!UICONTROL Business]**, and add the **[!UICONTROL WhatsApp]** product to it.
* Create a [!DNL WhatsApp] Business Account (WABA) with a registered phone number.
* Ensure the app has the `whatsapp_business_management` and `whatsapp_business_messaging` permissions.
* From **[!UICONTROL App Settings]** > **[!UICONTROL Basic]**, copy your App Secret. Meta uses the App Secret to sign webhook payloads.
* Choose a Verify Token. It can be any string, and it is a shared secret you enter on both Platform and Meta.

The following table describes where to find each credential and what it is used for.

| Credential | Where to get it | Used for |
| --- | --- | --- |
| App Secret | Meta > **[!UICONTROL App Settings]** > **[!UICONTROL Basic]** | Validating the `X-Hub-Signature-256` signature on every inbound webhook. |
| Verify Token | You choose it | The one-time verification handshake between Meta and Platform. |

### Subscribe your app to the WABA {#subscribe-app}

Subscribe your Meta app to the WhatsApp Business Account so that Meta routes that WABA's events to your app. This step is required and happens entirely on Meta, but delivery only begins after you configure the Callback URL. See [Connect WhatsApp Business to Experience Platform](#connect-to-platform).

>[!IMPORTANT]
>
>If you skip this step, messages are never delivered and no error is shown in Platform. A missing WABA subscription is the most common cause of "no data ingested" issues. See [Troubleshooting](#troubleshooting).

Subscribe your app using the Graph API:

```
POST https://graph.facebook.com/{VERSION}/{WHATSAPP_BUSINESS_ACCOUNT_ID}/subscribed_apps
```

Verify the subscription with:

```
GET https://graph.facebook.com/{VERSION}/{WHATSAPP_BUSINESS_ACCOUNT_ID}/subscribed_apps
```

Both calls require a token with the `whatsapp_business_management` permission and access to the WABA. Replace `{VERSION}` with a current Graph API version, for example `v21.0` or later.

## What the connector provisions automatically {#automatic-provisioning}

When you finish creating a [!DNL WhatsApp] dataflow, the connector creates and wires the following entities. You do not select a target dataset or map fields yourself.

| Entity | Name or identifier | Created or reused | Notes |
| --- | --- | --- | --- |
| Schema | WhatsApp Webhook Raw Events (XDM ExperienceEvent class) | Reused if present, otherwise created once per sandbox | The first [!DNL WhatsApp] dataflow in a sandbox creates it. Every later dataflow reuses the same schema. |
| Field group | WhatsApp Webhook Payload V2 | Reused (standard) | The connector references the existing standard field group. It never creates one. |
| Dataset | WhatsApp Webhook Raw Events | Created per dataflow | Raw landing Experience Event dataset for the inbound messages. |
| Field mapping | System-generated | Created per dataflow | Maps the raw webhook payload into the schema, and is wired into the dataflow as a transformation. |
| Streaming endpoint (inlet) | Surfaced as the Callback URL | Created per dataflow | Enforces `X-Hub-Signature-256` signature validation and the verify-token handshake. |
| Target (data lake) connection | System-generated | Created per dataflow | Routes the mapped data into the dataset. |

## Rotate secrets {#rotate-secrets}

You can rotate your App Secret or Verify Token at any time by updating the connection. Platform supports a primary and a secondary secret so that you can roll the App Secret without downtime. Add the new value as the primary secret while keeping the previous value as the secondary secret during the transition. Updating the connection applies the change to all dataflows that use it.

## Troubleshooting {#troubleshooting}

The following table describes common issues and how to resolve them.

| Symptom | Likely cause and fix |
| --- | --- |
| Everything in Platform looks healthy, but no data is ingested. | The app is not subscribed to the WABA. Complete the WABA subscription described in [Subscribe your app to the WABA](#subscribe-app). This is the most common cause and fails silently. If the app is subscribed, confirm that the App Secret in Platform matches the current App Secret in Meta under **[!UICONTROL App Settings]** > **[!UICONTROL Basic]**. |
| "[!UICONTROL Verify and Save]" fails in Meta. | The Verify Token in Meta must exactly match the Verify Token entered in Platform. |

## Connect [!DNL WhatsApp] to Experience Platform {#connect-to-platform}

The documentation below provides information on how to create a [!DNL WhatsApp] streaming connector to connect with Experience Platform using the user interface:

### Connect [!DNL WhatsApp] to Experience Platform using the UI {#connect-to-platform-using-ui}

* [Create a source connection to bring WhatsApp data to Experience Platform using the user interface.](../../tutorials/ui/create/marketing-automation/whatsapp-business.md)

## Additional resources {#additional-resources}

* [About the WhatsApp Business Platform](https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform)
* [Graph API Webhooks - Getting started](https://developers.facebook.com/docs/graph-api/webhooks/getting-started)
* [WhatsApp Webhooks - Overview](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview)
