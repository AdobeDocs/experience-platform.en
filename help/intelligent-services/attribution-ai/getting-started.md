---
keywords: Experience Platform;getting started;attribution ai;popular topics
solution: Experience Platform
title: Getting started in Attribution AI
topic: Getting started  
---

# Getting started in Attribution AI

 The following guides require an understanding of the various Adobe Experience Platform services involved with using Attribution AI. Before beginning the tutorials, please review the following documents:

- [Experience Data Model (XDM) System overview](../../xdm/home.md): XDM is the foundational framework that allows Adobe Experience Cloud, powered by Experience Platform, to deliver the right message to the right person, on the right channel, at exactly the right moment. The methodology on which Experience Platform is built, XDM System, operationalizes Experience Data Model schemas for use by Platform services.
- [Basics of schema composition](../../xdm/schema/composition.md): This document provides an introduction to Experience Data Model (XDM) schemas and the building blocks, principles, and best practices for composing schemas to be used in Adobe Experience Platform.
- [Building schemas](../../xdm/tutorials/create-schema-ui.md): This tutorial covers the steps for creating a schema using the Schema Editor within Experience Platform.

Attribution AI requires datasets to conform to the Consumer Experience Events (CEE) schema, which is a mixin in the [Experience Data Model](../../xdm/home.md) (XDM). Please contact Adobe support at attributionai-support@adobe.com in order to implement or make changes to this data. If media spend data is present, you can do further analysis such as incremental revenue and ROI. If customer profile data is available, you can further attribute credits to the customer profile level.

## Downloading and querying scores

>[!NOTE] If you do not need to query or download raw scores, you can skip this step and proceed to the user interface guide.

Downloading and querying scores for Attribution AI is done through Snowflake. Currently, you need to email Adobe support at attributionai-support@adobe.com in order to set up and receive the credentials to your reader account for Snowflake or to bulk export raw data.

Once Adobe support has processed your request, you are provided a URL for the reader account to Snowflake and the corresponding credentials below:

- Snowflake URL
- Username
- Password

## Terminology

- **Conversion event:** Any digital event or digital interaction that customers do to indicate a milestone towards a goal, such as conference registrations. Additional examples include paid conversions, free account sign-ups, or qualifying for a trait.

- **Touchpoint:** Any digital event or digital interaction that customers do in the path towards a goal. Examples include before-purchase-related marketing efforts, display advertising impressions viewed, and paid search clicks.

## Next steps

Once you are ready and have all your credentials and schemas in place, start by following the [Attribution AI user interface guide](./user-guide.md). This guide walks you through creating an instance and submitting it for training and scoring.