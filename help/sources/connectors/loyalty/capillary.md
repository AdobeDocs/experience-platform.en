---
title: Capillary Streaming Events Overview
description: Learn how to stream data from Capillary to Experience Platform.
badge: Beta
exl-id: 3b8eb2f6-3b4a-4b91-89d4-b6d9027c6ab4
---
# [!DNL Capillary Streaming Events]

>[!AVAILABILITY]
>
>The [!DNL Capillary Streaming Events] source is in beta. Read the [terms and conditions](../../home.md#terms-and-conditions) in the sources overview for more information on using beta-labeled sources.

[!DNL Capillary Technologies] is a leading loyalty and engagement platform, trusted by over 300 brands around the world. Use the [!DNL Capillary Streaming Events] source to enable your business to seamlessly stream customer profiles, loyalty data, and transactional events from [!DNL Capillary] into Adobe Experience Platform. Connect your [!DNL Capillary] source to enable real-time personalization, advanced audience segmentation, and omnichannel campaign orchestration.

By integrating [!DNL Capillary] with Experience Platform, you can:

* Synchronize **loyalty points, tiers, and rewards** in real-time.
* Send **transactional data** into Experience Platform for analytics and activation.
* Leverage Real-Time CDP, Experience Platform, and Adobe Journey Optimizer for segmentation, journey orchestration, and personalization.

## Prerequisites

Before you connect [!DNL Capillary] to Adobe Experience Platform, make sure you have:

* A valid **Adobe Organization ID** and access to an enabled Experience Platform sandbox.
* **[!DNL Capillary] source credentials** (Client ID and Client Secret).
* The necessary permissions in the Adobe Admin Console to create sources and dataflows.

### Gather required credentials

You must provide values for the following credentials to connect your [!DNL Capillary] account to Experience Platform:

| Credential | Description | Example |
| --- | --- | --- |
| Client ID | The client identifier for the [!DNL Capillary] source. | `321c8a8fee0d4a06838d46f9d3109e8a` |
| Client Secret | The client secret issued with the Client ID | `xxxxxxxxxxxxxxxxxx` |
| Org ID | Your Adobe Organization ID | `0A7D42FC5DB9D3360A495FD3@AdobeOrg` |

For more information on generating access tokens, read the [Adobe authentication guide](https://developer.adobe.com/developer-console/docs/guides/authentication/).

### Generate an access token

Next, use your Client ID and Client Secret to generate an access token from Adobe.

**Request**

```shell
curl -X POST 'https://ims-na1.adobelogin.com/ims/token' \
  -d 'client_id={CLIENT_ID}' \
  -d 'client_secret={CLIENT_SECRET}' \
  -d 'grant_type=client_credentials' \
  -d 'scope=openid AdobeID read_organizations additional_info.projectedProductContext session'
```

**Response**

```json
{
  "access_token": "eyJhbGciOi...",
  "token_type": "bearer",
  "expires_in": 86399994
}
```

## Next steps

Once you have completed the prerequisite setup for [!DNL Capillary], read the following documentation to learn how you can connect your account and start streaming data from [!DNL Capillary] to Experience Platform.

* [Connect [!DNL Capillary Streaming Events] to Experience Platform using the API](../../tutorials/api/create/loyalty/capillary.md)
* [Connect [!DNL Capillary Streaming Events] to Experience Platform using the UI](../../tutorials/ui/create/loyalty/capillary.md)
