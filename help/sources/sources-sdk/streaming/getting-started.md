---
title: Getting Started with Self-Serve Sources (Streaming SDK)
description: This document provides an introduction to the prerequisite information you need to know before attempting to create a new source using Self-Serve Sources (Streaming SDK).
exl-id: 6cc13279-ce0b-45bc-ad25-e2e6aafc2af0
badge: Beta
---
# Getting Started with Self-Serve Sources (Streaming SDK)

>[!NOTE]
>
>Self-Serve Sources Streaming SDK is in beta. Please read the [sources overview](../../home.md#terms-and-conditions) for more information on using beta-labeled sources.

Self-Serve Sources (Streaming SDK) allows you to integrate your own source to bring streaming data to Adobe Experience Platform. This document provides an introduction to the core concepts you need to know before attempting to make calls to the [[!DNL Flow Service] API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/flow-service.yaml).

## High-level process

The step-by-step process to configure your source in Experience Platform is outlined below:

### Integration

* [Create a new connection specification for Streaming SDK](create.md).
* [Update the streaming flow specification with your new connection specification ID](update-flow-specs.md).
* [Test and submit your streaming source](submit.md).

### Documentation

* To start documenting your source, read the [overview on creating documentation for Self-Serve Sources](../documentation/doc-overview.md).
* Read the guide on [using the GitHub web interface](../documentation/github.md) for steps on how to create documentation using GitHub.
* Read the guide on [using a text editor](../documentation/text-editor.md) for steps on how to create documentation using your local machine.
* [Use the Streaming SDK API documentation template to document your source in the API](streaming-template-api.md).
* [Use the Streaming SDK UI documentation template to document your source in the UI](streaming-template-ui.md).

You can also download the documentation templates below:

* [API documentation template](../assets/streaming/streaming-template-api.zip)
* [UI documentation template](../assets/streaming/streaming-template-ui.zip)

## Prerequisites

>[!IMPORTANT]
>
>The source that you are integrating with Experience Platform must be able to support a webhook to which an endpoint can be subscribed to, to send updates.

To use Self-Serve Sources (Streaming SDK), you must ensure that you have access to a sandbox organization provisioned with Adobe Experience Platform Sources.

This guide also requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Sandboxes](../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

## Reading sample API calls

The Self-Serve Sources (Streaming SDK) and [!DNL Flow Service] API documentation provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

## Gather values for required headers

In order to make calls to Platform APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {ORG_ID}`

All resources in Platform, including those belonging to [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

* `x-sandbox-name: {SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in Platform, see the [sandbox documentation](../../../sandboxes/home.md). 

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

* `Content-Type: application/json`

## Next steps

To begin creating a new source with Self-Serve Sources (Streaming SDK), see the tutorial on [creating a new source](./create.md).
