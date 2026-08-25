---
title: Create a WhatsApp Source Connection in the UI
description: Learn how to create a WhatsApp source connection using the Adobe Experience Platform UI.
badge: Beta
hide: true
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---

# Create a [!DNL WhatsApp] source connection in the UI

>[!NOTE]
>
>The [!DNL WhatsApp] source is in beta. Read the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labeled connectors.

This tutorial provides steps for creating a [!DNL WhatsApp] source connection using the Adobe Experience Platform user interface.

## Getting started {#getting-started}

This tutorial requires a working understanding of the following components of Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data. The connector assigns a WhatsApp specific ExperienceEvent schema for you automatically.
* [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

## Prerequisites {#prerequisites}

Before you create a [!DNL WhatsApp] source connection, complete the [Prerequisites](../../../../connectors/marketing-automation/whatsapp-business.md#prerequisites) in the [!DNL WhatsApp] source overview, including subscribing your app to the WABA, and have the following ready:

* Your Meta App Secret
* Your Verify Token

## Step 1: Create an account {#create-account}

In the Experience Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the [!UICONTROL Sources] workspace.

Go to the *[!UICONTROL Marketing automation]* category, select the [!DNL WhatsApp] source card, and select **[!UICONTROL Add data]**.

<!-- TODO: screenshot of the WhatsApp source card in the sources catalog -->

The **[!UICONTROL Authentication]** tab appears. Select **[!UICONTROL New account]**, or select an existing [!DNL WhatsApp] account to reuse, then provide the following information.

<!-- TODO: screenshot of the account page showing the App Secret and Verify Token fields -->

| Field | What to enter |
| --- | --- |
| Account name | A name for this connection. |
| Description *(optional)* | A short description of the account. |
| App Secret | Your Meta App Secret from Prerequisites. Stored as the primary secret and used to validate the `X-Hub-Signature-256` signature on inbound webhooks. |
| Secondary secret *(optional)* | A second App Secret, used only during secret rotation, so that you can roll the App Secret without downtime. |
| Verify Token | The Verify Token you chose in Prerequisites. It is the shared secret used for the one-time webhook verification handshake with Meta. |

Select **[!UICONTROL Connect to source]** to validate and create the account, then select **[!UICONTROL Next]**. An account can be reused across multiple dataflows, so you only enter these credentials once per account.

## Step 2: Configure the dataflow {#configure-dataflow}

The **[!UICONTROL Dataflow detail]** tab appears. Enter a **[!UICONTROL Dataflow name]**, an optional **[!UICONTROL Description]**, and optionally subscribe to **[!UICONTROL Alerts]** for dataflow run start, success, or failure.

>[!NOTE]
>
>You do not select a target dataset or map fields. The connector creates and assigns the dataset, schema, and field mapping automatically.

Select **[!UICONTROL Next]**.

The **[!UICONTROL Review]** tab appears. Review the dataflow details and select **[!UICONTROL Finish]**.

## Step 3: Copy the Callback URL {#copy-callback-url}

After the dataflow is created, Platform exposes a Callback URL on the dataflow. Copy it. You enter it into Meta in the next step. It has the form:

```
https://dcs.adobedc.net/collection/webhooks/{inletId}?x-adobe-flow-id={flowId}
```

<!-- TODO: screenshot of the Callback URL (streaming endpoint) on the dataflow -->

## Step 4: Configure the webhook in Meta {#configure-webhook}

In Meta, go to **[!DNL WhatsApp]** > **[!DNL Configuration]** and complete the following steps.

1. Enter the Callback URL from Step 3 and the same Verify Token from Prerequisites.
1. Select **[!DNL Verify and Save]**. Meta calls the Callback URL with a `GET` challenge, which Platform answers to complete the handshake.
1. Subscribe to the `messages` webhook field.

## Next steps {#next-steps}

By following this tutorial, you have configured a streaming dataflow to bring your [!DNL WhatsApp] data to Experience Platform. To monitor the data that is being ingested, refer to the guide on [monitoring streaming dataflows using Experience Platform UI](../../monitor-streaming.md).

If no data appears after you send a test message, see [Troubleshooting](../../../../connectors/marketing-automation/whatsapp-business.md#troubleshooting) in the [!DNL WhatsApp] source overview.
