---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
title: Submit Your Source (Beta)
topic-legacy: overview
description: The following document provides steps on how to test and verify a new source using the Flow Service API and integrate a new source through Sources SDK.
hide: true
hidefromtoc: true
---
# Submit your source (Beta)

>[!IMPORTANT]
>
>Sources SDK is currently in beta and your organization may not have access to it yet. The functionality described in this documentation is subject to change.

The final step to integrating your new source to Adobe Experience Platform using [!DNL Sources SDK] is to test your source for verification. Once successful, you can then submit your new source by contacting your Adobe representative.

The following document provides steps on how to test and debug your source using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

* For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../landing/api-guide.md).
* For information on how to generate your credentials for Platform APIs, see the tutorial on [authenticating and accessing Experience Platform APIs](../../../landing/api-authentication.md).
* For information on how to set up [!DNL Postman] for Platform APIs, see the tutorial on [setting up developer console and [!DNL Postman]](../../../landing/postman.md).
* To help your testing and debugging process, download the [[!DNL Sources SDK] verification collection and environment here](../assets/sdk-verification.zip) and follow the steps outlined below.

## Test your source

To test your source, you must run your source through the entire sources API workflow using the [[!DNL Sources SDK] verification collection and environment](../assets/sdk-verification.zip) and ensure that every step works successfully.

The sources process workflow is as follows:

1. Retrieve your connection specification ID
2. Create a base connection
3. Create a source connection
4. Create a target XDM schema
5. Create a target dataset
6. Create a target connection
7. Create a mapping set
8. Create a dataflow
9. Retrieve your dataflow
10. Delete your dataflow

## Submit your source

Once your source is able to complete the entire workflow you can proceed to contact your Adobe representative and submit your source for integration.