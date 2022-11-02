---
keywords: Experience Platform;home;popular topics;query service;Query service;query
solution: Experience Platform
title: Query Service API Guide
topic-legacy: query templates
description: The Query Service API allows developers to query their Adobe Experience Platform data using standard SQL. Follow this guide to learn how to perform key operations using the API.
exl-id: 2f4a156b-5623-419a-a9b2-72310f755708
---
# [!DNL Query Service] API guide

This developer guide provides steps for performing various operations in the Adobe Experience Platform [!DNL Query Service] API.

## Getting started

This guide requires a working understanding of the various Adobe Experience Platform services involved with using [!DNL Query Service].

- [[!DNL Query Service]](../home.md): Provides the ability to query datasets and capture the resulting queries as new datasets in [!DNL Experience Platform].
- [[!DNL Experience Data Model (XDM) System]](../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
- [[!DNL Sandboxes]](../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully use [!DNL Query Service] using the API.

### Reading sample API calls

This guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in this documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Experience Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Platform] API calls, as shown below:

- Authorization: `Bearer {ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{ORG_ID}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox in which the operation will take place:

- x-sandbox-name: `{SANDBOX_NAME}`
  
>[!NOTE]
>
>For more information on working with sandboxes in [!DNL Experience Platform], see the [sandboxes overview documentation](../../sandboxes/home.md).

## Sample API calls

Now that you understand what headers to use, you are ready to begin making calls to the [!DNL Query Service] API. The following documents walk through the various API calls you can make using the [!DNL Query Service] API. Each example call includes the general API format, a sample request showing required headers, and a sample response.

- [Queries](queries.md)
- [Connection parameters](connection-parameters.md)
- [Scheduled queries](scheduled-queries.md)
- [Runs for scheduled queries](runs-scheduled-queries.md)
- [Query templates](query-templates.md)
- [Accelerated queries](./accelerated-queries.md)
- [Alert subscriptions](./alert-subscriptions.md)

## Next steps

Now that you have learned how to make calls using the [!DNL Query Service] API, you can create your own non-interactive queries. For more information on how to create queries, please read the [SQL reference guide](../sql/overview.md).
