---
keywords: Experience Platform;home;popular topics;ECID;ecid
solution: Experience Platform
title: Identity Data for Privacy Requests
description: This document provides general guidance on how to configure your data operations and leverage Adobe technologies to effectively retrieve the appropriate identity information for customer privacy requests.
exl-id: 43b0292a-ea4d-4858-b584-ba71029724f6
---
# Identity data for privacy requests

In order for Adobe Experience Platform [!DNL Privacy Service] to process customer requests for their private data (including access, delete, or opt-out-of-sale requests), it must be provided with unique identifiers that link a specific customer to their stored private data in your Adobe Experience Cloud enabled applications. [!DNL Privacy Service] then uses these identifiers to gather all data stored under the customer's identity within [!DNL Experience Cloud], and process it according to the customer's request.

This document provides general guidance on how to configure your data operations and leverage Adobe technologies to effectively retrieve the appropriate identity information for customer privacy requests.

## Identities and namespaces

When a customer can interact with your brand through several different channels, it can be challenging to reconcile the disparate identifiers that are recorded from those many interactions. This in turn can make it difficult to determine which data belongs to a particular person in your [!DNL Experience Cloud] applications.

For example, when handling customer data requests in [!DNL Privacy Service], an identity may represent a cookie value set under an Adobe-controlled domain, a cookie value under a third-party domain and shared with Adobe, or a custom identifier that you explicitly define within your organization.

It is therefore required that each identity sent to [!DNL Privacy Service] is accompanied with a namespace that provides context by relating the identity value to its system of origin. A namespace can represent a generic concept such as an email address ("Email") or associate the identity with a specific application, such as an Adobe Advertising Cloud ID ("AdCloud") or Adobe Target ID ("TNTID").

Adobe Experience Platform Identity Service maintains a store of globally defined and user-defined identity namespaces. For more detailed information on namespaces, see the [identity namespace overview](../identity-service/features/namespaces.md). For a list of standard namespaces and namespace qualifiers that are commonly used in [!DNL Privacy Service], see the [appendix section](api/appendix.md) in the API guide.

## ECID and Opt-in Service

Adobe Experience Cloud [!DNL Identity Service] serves as a common identification framework for [!DNL Experience Cloud], and assigns a unique, persistent ID to each site visitor. The [!DNL Experience Cloud] ID (ECID) tracks a customer's activity through the use of a first-party cookie, can uniquely identify a device across multiple applications, and allows you to identify the same site visitor and their data in different [!DNL Experience Cloud] applications. See the [Experience Cloud Identity Service overview](https://experienceleague.adobe.com/docs/id-service/using/intro/overview.html) for more information.

Opt-in Service, an extension of [!DNL Experience Cloud Identity Service], allows you set up protocols on your application to let visitors determine whether you can set a cookie on the visitor's device or browser. For more detailed information on the Opt-in Service, including how to set up the service for your application, please refer [Opt-in Service documentation](https://experienceleague.adobe.com/docs/id-service/using/implementation/opt-in-service/optin-overview.html).

Once your site visitors have been assigned ECIDs, you can utilize the Adobe [!DNL Privacy JavaScript Library] to retrieve those IDs for use in privacy requests, as described in the next section.

## [!DNL Privacy JS Library]

The [!DNL Adobe Privacy JavaScript Library] provides several functions that allow you to retrieve and remove customer identities that are stored in the browser. The library can be configured to retrieve identity information from several Adobe applications, including ECID. Through the use of callbacks or promises, you can programmatically handle successfully retrieved IDs and send them to the [!DNL Privacy Service] API.

For more information about [!DNL Privacy JS Library], including code samples for several common use cases, please refer to the [Privacy JS Library overview](js-library.md).

## Next steps

This document provided a brief overview of the central concepts involved in retrieving customer identity data for use in privacy requests. It is recommended that you review the documentation links provided in each section for more detailed information about these concepts and services. For steps on how to send retrieved IDs to [!DNL Privacy Service] for creating access, delete, or opt-out-of-sale requests, see the [Privacy Service API guide](api/overview.md).
