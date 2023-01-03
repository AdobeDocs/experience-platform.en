---
keywords: Experience Platform;home;popular topics;identity;Identity;XDM graphs;identity service;Identity service
solution: Experience Platform
title: Identity Service Overview
topic-legacy: overview
description: Adobe Experience Platform Identity Service helps you to gain a better view of your customer and their behavior by bridging identities across devices and systems, allowing you to deliver impactful, personal digital experiences in real time.
exl-id: a22dc3f0-3b7d-4060-af3f-fe4963b45f18
---
# [!DNL Identity Service] overview

Delivering relevant digital experiences requires having a complete understanding of your customer. This is made more difficult when your customer data is fragmented across disparate systems, causing each individual customer to appear to have multiple “identities”.

Adobe Experience Platform Identity Service provides you with a comprehensive view of your customers and their behavior by bridging identities across devices and systems, allowing you to deliver impactful, personal digital experiences in real time.

With [!DNL Identity Service], you can:

- Ensure that your customers receive a consistent, personalized, and relevant experience through each interaction.
- Stitch together several different identities from disparate sources and create a comprehensive view of your customers.
- Utilize an identity graph to map different identity namespaces, providing you with a visual representation of how your customers interact with your brand across different channels.

## Getting started

Before diving into the details of [!DNL Identity Service], here is a brief summary of the key terms:

| Term | Definition |
| --- | --- |
| Identity | An identity is data that is unique to an entity, typically an individual person. An identity, such as a log-in ID, ECID, or loyalty ID, is also referred to as a "known identity". |
| ECID | Experience Cloud ID (ECID) is a shared identity namespace used across Experience Platform and Adobe Experience Cloud applications. ECID provides a foundation for customer identity and is used as the primary ID for devices and as a base node for identity graphs. See the [ECID overview](./ecid.md) for more information. |
| Identity namespace | An identity namespace serves to distinguish the context or type of an identity. For example, an identity distinguishes “name<span>@email.com” as an email address or “443522” as a numeric CRM ID. Identity namespaces are used to look up individual identities and provide the context for identity values. This allows you to determine that two [!DNL Profile] fragments that contain different primary IDs, but share the same value for the `email` identity namespace, are in fact, the same individual. See the [identity namespace overview](./namespaces.md) for more information. |
| Identity graph | An identity graph is a map of relationships between different identities, allowing you to visualize and better understand which customer identities are stitched together, and how. See the tutorial on [using the identity graph viewer](./ui/identity-graph-viewer.md) for more information. |
| Personally Identifiable Information (PII) | PII is information that can directly identify a customer, such as an email address or a phone number. PII values are often used to match. a customer's multiple identities across different systems. |
| Unknown or anonymous identities | Unknown or anonymous identities are indicators that isolate devices without identifying the actual person using the device. Unknown and anonymous identities include information such as a visitor's IP address and cookie ID. Although unknown and anonymous identities can provide behavioral data, they are limited until a customer supplies their PII. |

## What is [!DNL Identity Service]?

Each day, customers interact with your business and establish a continuously growing relationship with your brand. A typical customer may be active in any number of systems within your organization's data infrastructure, such as your e-commerce, loyalty, and help-desk systems. That same customer may also engage anonymously on any number of devices. [!DNL Identity Service] allows you to piece together a complete picture of your customer, aggregating related data that might otherwise be siloed across disparate systems.

Consider an everyday example of a consumer's relationship with your brand:

- Mary has an account on your e-commerce site where she has completed a few orders in the past. She typically uses her personal laptop to shop, where she logs in each time. However, during one of her visits she uses her tablet to shop for sandals, but does not place an order and does not log in.
- At this point, Mary’s activity appears as two separate profiles:
  - Her e-commerce login
  - Her tablet device, perhaps identified by device ID
- Mary later resumes her tablet session and provides her email address while subscribing to your newsletter. Upon doing so, streaming ingestion adds a new identity as record data within her profile. As a result, [!DNL Identity Service] now relates Mary’s tablet device activity with her e-commerce account history.
- By the next click on her tablet, your targeted content could reflect Mary’s full profile and history, rather than just a tablet used by an unknown shopper.

![Identity stitching on Platform](./images/identity-service-stitching.png)

Essentially, [!DNL Identity Service] allows you to piece together a complete picture of your customer, aggregating related data that might otherwise be scattered across disparate systems. The identity relationships that [!DNL Identity Service] defines and maintains are leveraged by Real-Time Customer Profile to build a complete a picture of a customer and their interactions with your brand. For more information, see the [Real-Time Customer Profile overview](../profile/home.md).

### Use cases

Examples of [!DNL Identity Service] implementations include:

- A telecom company may rely on the "phone number" value, where a phone number would refer to the same individual of interest in both offline and online data sets.
- A retail company may use "email address" in offline data sets and ECID in online datasets due to the high percentage of anonymous visitors.
- A bank may prefer "account number" in offline data sets, such as branch transactions. They may depend on "login ID" in online data sets, because most visitors would be authenticated during their visit.
- Your customers may also have unique proprietary IDs, such as GUID or other universally unique identifiers.

## Identity namespace {#identity-namespace}

>[!CONTEXTUALHELP]
>id="platform_identity_namespace"
>title="Identity namespaces"
>abstract="An identity namespace serves to distinguish the context or type of an identity. For example, an identity distinguishes “name<span>@email.com” as an email address or “443522” as a numeric CRM ID."
>text="Learn more in documentation"

>[!CONTEXTUALHELP]
>id="platform_identity_value"
>title="Identity values"
>abstract="An identity value is an identifier that represents a unique individual, organization, or asset. The context or type of identity that the value represents is defined by a corresponding identity namespace. When matching record data across profile fragments, the namespace and identity value must matchWhen matching record data across profile fragments the namespace and identity value must match."
>text="Learn more in documentation"

If you asked a person "What is your ID?" without any further context, it would be difficult for them to provide a useful answer. By the same logic, a string value representing an identity value, whether it is a system generated ID or an email address, is only complete when supplied with a qualifier that gives the string value context: the identity namespace.

Your customers may interact with your brand through a combination of online and offline channels, resulting in the challenge of how to reconcile those fragmented interactions into a single customer identity.

Understanding your customer across multiple devices and channels starts by recognizing them in each channel. Platform achieves this by using identity namespaces. An identity namespace is an identifier such as Email or Phone, used to provide additional context to customer identities. Identity namespaces are used to look up or link individual identities and provide context for identity values. See the [identity namespace overview](./namespaces.md) for more information.

## Identity graphs

An identity graph is a map of relationships between different identity namespaces, allowing you to visualize and better understand what customer identities are stitched together, and how. See the tutorial on [using the identity graph viewer](./ui/identity-graph-viewer.md) for more information.

The following video is intended to support your understanding of identities and identity graphs.

>[!VIDEO](https://video.tv.adobe.com/v/27841?quality=12&learn=on)

## Supplying identity data to [!DNL Identity Service]

This section covers how data provided to Adobe Experience Platform is processed prior to being used by [!DNL Identity Service] to build an identity graph for each customer.

### Decide on identity fields

Depending on your enterprise data collection strategy, the data fields you label as identities determine which data is included in your identity map. To get the maximum benefit of Adobe Experience Platform and the most comprehensive customer identities possible, you should upload both online and offline data.

- Online data is data that describes online presence and behavior, such as usernames and email addresses.

- Offline data refers to data that is not directly related to online presence, such as IDs from CRM systems. This type of data makes your identities more robust and supports data cohesion across your disparate systems.

### Create additional identity namespaces

While Experience Platform offers a variety of standard namespaces, you may need to create additional namespaces to properly categorize your identities. For more information, see the section on [viewing and creating namespaces for your organization](./namespaces.md) in the identity namespace overview.

>[!NOTE]
>
>Identity namespaces are a qualifier for identities. As a result, once a namespace has been created, it cannot be deleted.

### Include identity data in [!DNL Experience Data Model] (XDM)

As the standardized framework by which [!DNL Platform] organizes customer data, [!DNL Experience Data Model] (XDM) allows data to be shared and understood across Experience Platform and other services interacting with [!DNL Platform]. For more information see the [XDM System overview](../xdm/home.md).

Both record and time series schemas provide the means to include identity data. As data is ingested, the identity graph will create new relationships between data fragments from different namespaces if they are found to share common identity data.

### Marking XDM fields as identity

Any field of type `string` in schemas that implement either record or time series XDM classes can be labeled as an identity field. As a result, all data ingested into that field would be considered identity data. 

>[!NOTE]
>
>Array and map type fields are not supported and cannot be marked and labeled as identity fields.

Identity fields also allow for the linking of identities if they share common PII data.
For example, by labeling phone number fields as identity fields, [!DNL Identity Service] automatically graphs relationships with the other individuals found to be using the same phone number.

>[!NOTE]
>
>The namespace of resulting identities is provided at the time the field is labeled.

### Configure a dataset for [!DNL Identity Service]

During the streaming ingestion process, [!DNL Identity Service ]automatically extracts identity data from record and time series data. However, before data can be ingested, it must be enabled for [!DNL Identity Service]. See the tutorial on  [configuring a Dataset for Real-Time Customer Profile and Identity Service using APIs](../profile/tutorials/dataset-configuration.md) for more information.

### Ingest data to [!DNL Identity Service]

[!DNL Identity Service] consumes XDM compliant data sent to Experience Platform either by [batch ingestion](../ingestion/batch-ingestion/overview.md) or [streaming ingestion](../ingestion/streaming-ingestion/overview.md).

The following video is intended to support your understanding of Identity Service. This video shows you how to label data fields as identities, ingest Identity data and then verify that the data has made it to the Adobe Experience Platform Identity Service Private Graph. 

>[!WARNING]
>
>The [!DNL Platform] UI shown in the following video is out-of-date. Please refer to the documentation for the latest UI screenshots and functionality.

>[!VIDEO](https://video.tv.adobe.com/v/28167?quality=12&learn=on)

## Data governance

Adobe Experience Platform was built with privacy in mind and includes a data governance framework to protect your customer PII data. Identity data under the "email" or "phone" namespace is encrypted by default, but in order to ensure sensitive data is encrypted before it is persisted, data usage labels can be applied to data as it is ingested or once it arrives in [!DNL Platform]. For more information, please read the [Data Governance overview](../data-governance/home.md).

## Next steps

Now that you understand the key concepts of [!DNL Identity Service] and its role within Experience Platform, you can begin to learn how to work with your identity graph using the [[!DNL Identity Service API]](./api/getting-started.md).
