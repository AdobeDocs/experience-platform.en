---
keywords: Experience Platform;getting started;customer ai;popular topics
solution: Experience Platform, Real-time Customer Data Platform
feature: Customer AI
title: Getting Started in Customer AI
topic-legacy: Getting started
description: This guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads.
exl-id: 90c9a83a-8e66-4239-b2d6-2049a6319b25
---
# Getting started in Customer AI

The guides for Customer AI require a working understanding of the various Platform services involved in using Customer AI. Before you start, please review the following documents:

- [Experience Data Model (XDM) System overview](../../xdm/home.md): XDM is the foundational framework that allows [!DNL Adobe Experience Cloud], powered by Experience Platform, to deliver the right message to the right person, on the right channel, at exactly the right moment. The methodology on which Experience Platform is built, XDM System, operationalizes Experience Data Model schemas for use by Platform services.
- [Basics of schema composition](../../xdm/schema/composition.md): This document provides an introduction to Experience Data Model (XDM) schemas and the building blocks, principles, and best practices for composing schemas to be used in [!DNL Adobe Experience Platform].
- [Building schemas](../../xdm/tutorials/create-schema-ui.md): This tutorial covers the steps for creating a schema using the Schema Editor within Experience Platform.
- [Real-Time Customer Profile overview](../../rtcdp/overview.md): Built on [!DNL Adobe Experience Platform], Adobe Real-Time Customer Data Platform (Real-Time CDP) helps companies bring together known and unknown data to activate customer profiles with intelligent decisioning throughout the customer journey. Real-Time CDP combines multiple enterprise data sources to create unified profiles in real time that can be used to provide one-to-one personalized customer experiences across all channels and devices.
- [Segmentation Service overview](../../segmentation/home.md): Segmentation is the process of defining specific attributes or behaviors shared by a subset of profiles from your profile store to distinguish a marketable group of people from your customer base. For example, in an email campaign called "Did you forget to buy your sneakers?", you may want an audience of all users who searched for running shoes within the last 30 days, but who did not complete a purchase. Using different segments, you can focus on your various audiences, delivering a more customized marketing experience.
- [Segment Builder user guide](../../segmentation/tutorials/create-a-segment.md): Platform allows you to easily create and access segments, as well as use different building blocks to further characterize your segments.

## Downloading Customer AI scores

>[!NOTE]
>
>If you do not need to download raw scores, you can skip this step and proceed to the [configuration guide](./user-guide/configure.md).

Downloading Customer AI scores is done through a combination of API calls. In order to make calls to Platform APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{ORG_ID}`

All resources in Experience Platform are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

- x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in Platform, see the [sandbox overview documentation](../../sandboxes/home.md). 

### Reading sample API calls

This guide provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md) in the Experience Platform troubleshooting guide.

## Access control {#access-control}

When using access control, the **View Customer AI** and **Manage Customer AI** privileges grant access to different functionalities of Customer AI. The **Manage Customer AI** permission lets you **create**,**update**, **delete**, **enable**, or **disable** an instance while **View Customer AI** lets you read or view it. The **create**, **update** and **delete** actions are recorded by audit logs.

See the documentation to learn [assigning permissions for access control](../../../help/access-control/home.md) or how to [use audit logs to monitor access and activity](../../../help/landing/governance-privacy-security/audit-logs/overview.md).

## Next steps

Once you have completed the steps outlined in the document above, visit the [Input and Output](./input-output.md) documentation. This document give a brief overview of what types of data are used and produced in Customer AI.
