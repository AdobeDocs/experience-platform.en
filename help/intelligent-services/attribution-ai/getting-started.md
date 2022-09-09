---
keywords: Experience Platform;getting started;attribution ai;popular topics
feature: Attribution AI
title: Getting Started in Attribution AI
topic-legacy: Getting started
description: The following guides require an understanding of the various Adobe Experience Platform services involved with using Attribution AI. Before beginning the tutorials, please review the following documents.
exl-id: ab269c24-97ac-4da9-9b6c-7d2dde61f0dc
---
# Getting started in Attribution AI

 The following guides require an understanding of the various [!DNL Adobe Experience Platform] services involved with using Attribution AI. Before beginning the tutorials, please review the following documents:

- [Experience Data Model (XDM) System overview](../../xdm/home.md): XDM is the foundational framework that allows [!DNL Adobe Experience Cloud], powered by Experience Platform, to deliver the right message to the right person, on the right channel, at exactly the right moment. The methodology on which Experience Platform is built, XDM System, operationalizes Experience Data Model schemas for use by Platform services.
- [Basics of schema composition](../../xdm/schema/composition.md): This document provides an introduction to Experience Data Model (XDM) schemas and the building blocks, principles, and best practices for composing schemas to be used in [!DNL Adobe Experience Platform].
- [Building schemas](../../xdm/tutorials/create-schema-ui.md): This tutorial covers the steps for creating a schema using the Schema Editor within Experience Platform.

Attribution AI requires datasets to conform to the Consumer Experience Events (CEE) schema, which is an [Experience Data Model (XDM)](../../xdm/home.md) schema field group. Please contact Adobe support at attributionai-support@adobe.com in order to implement or make changes to this data. If media spend data is present, you can do further analysis such as incremental revenue and ROI. If customer profile data is available, you can further attribute credits to the customer profile level.

## Terminology

- **Conversion event:** Any digital event or digital interaction that customers do to indicate a milestone towards a goal, such as conference registrations. Additional examples include paid conversions, free account sign-ups, or qualifying for a trait.

- **Touchpoint:** Any digital event or digital interaction that customers do in the path towards a goal. Examples include before-purchase-related marketing efforts, display advertising impressions viewed, and paid search clicks.

## Downloading Attribution AI scores

>[!NOTE]
>
>If you do not need to download raw scores, you can skip this step and proceed to the [next steps](#next-steps).

Downloading Attribution AI scores is done through a combination of API calls. In order to make calls to Platform APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

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

When using role-based access control, the **View Attribution AI** and **Manage Attribution AI** privileges grant access to different functionalities of Attribution AI. The **Manage Attribution AI** lets you **create**, **clone**, **edit**, **delete**, **enable**, or **disable** an instance while **View Attribution AI** lets you **read** or **view** it. The **create**, **edit** and **delete** actions are recorded by audit logs.

See the documentation to learn [assigning permissions for access control](../../../help/access-control/home.md) or how to [use audit logs to monitor access and activity](../../../help/landing/governance-privacy-security/audit-logs/overview.md).

## Next steps {#next-steps}

Once you are ready and have all your credentials and schemas in place, start by following the [Attribution AI user interface guide](./user-guide.md). This guide walks you through creating an instance and submitting it for training and scoring.
