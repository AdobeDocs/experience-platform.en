---
keywords: Experience Platform;getting started;customer ai;popular topics
solution: Experience Platform, Real-Time Customer Data Platform
feature: Customer AI
title: Getting Started in Customer AI
description: This guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads.
exl-id: 90c9a83a-8e66-4239-b2d6-2049a6319b25
TQID: https://experienceleague.adobe.com/nzQw-ni1l1pjMsfpaCkTVovuu2fYSRzy8hjPYjAWTmI
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: fdddec33-c9cb-4459-b8b6-2664395a6f10
    internal-label: Real-Time Customer Data Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
subfeature_v2:
  - id: cbd4a8d8-97a6-4ac9-b8d6-b6c1f28d3342
    internal-label: Segments
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: fd2e3797-f2ea-4b36-a9af-52acf5e90513
    internal-label: Customer profiles
---
# Getting started in Customer AI

The guides for Customer AI require a working understanding of the various Experience Platform services involved in using Customer AI. Before you start, please review the following documents:

- [Experience Data Model (XDM) System overview](../../xdm/home.md): XDM is the foundational framework that allows [!DNL Adobe Experience Cloud], powered by Experience Platform, to deliver the right message to the right person, on the right channel, at exactly the right moment. The methodology on which Experience Platform is built, XDM System, operationalizes Experience Data Model schemas for use by Experience Platform services.
- [Basics of schema composition](../../xdm/schema/composition.md): This document provides an introduction to Experience Data Model (XDM) schemas and the building blocks, principles, and best practices for composing schemas to be used in [!DNL Adobe Experience Platform].
- [Building schemas](../../xdm/tutorials/create-schema-ui.md): This tutorial covers the steps for creating a schema using the Schema Editor within Experience Platform.
- [Real-Time Customer Profile overview](../../rtcdp/overview.md): Built on [!DNL Adobe Experience Platform], Adobe Real-Time Customer Data Platform (Real-Time CDP) helps companies bring together known and unknown data to activate customer profiles with intelligent decisioning throughout the customer journey. Real-Time CDP combines multiple enterprise data sources to create unified profiles in real time that can be used to provide one-to-one personalized customer experiences across all channels and devices.
- [Segmentation Service overview](../../segmentation/home.md): Segmentation is the process of defining specific attributes or behaviors shared by a subset of profiles from your Profile store to distinguish a marketable group of people from your customer base. For example, in an email campaign called "Did you forget to buy your sneakers?", you may want an audience of all users who searched for running shoes within the last 30 days, but who did not complete a purchase. Using different segments, you can focus on your various audiences, delivering a more customized marketing experience.
- [Segment Builder user guide](../../segmentation/tutorials/create-a-segment.md): Experience Platform allows you to easily create and access segments, as well as use different building blocks to further characterize your segments.

## Downloading Customer AI scores

>[!NOTE]
>
>If you do not need to download raw scores, you can skip this step and proceed to the [configuration guide](./user-guide/configure.md).

Downloading Customer AI scores is done through a combination of API calls. In order to make calls to Experience Platform APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{ORG_ID}`

All resources in Experience Platform are isolated to specific virtual sandboxes. All requests to Experience Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

- x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in Experience Platform, see the [sandbox overview documentation](../../sandboxes/home.md). 

### Reading sample API calls

This guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md) in the Experience Platform troubleshooting guide.

## Next steps

Once you have completed the steps outlined in the document above, visit the [Input and Output](./data-requirements.md) documentation. This document give a brief overview of what types of data are used and produced in Customer AI.
