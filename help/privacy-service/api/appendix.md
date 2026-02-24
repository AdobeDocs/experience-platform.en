---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Privacy Service API Guide Appendix
description: This document contains additional information for working with the Privacy Service API.
role: Developer
exl-id: 7099e002-b802-486e-8863-0630d66e330f
---
# Privacy Service API guide appendix

The following sections contain additional information for working with the Adobe Experience Platform Privacy Service API.

## Standard identity namespaces {#standard-namespaces}

All identities that are sent to [!DNL Privacy Service] must be provided under a specific identity namespace. Identity namespaces are a component of [Adobe Experience Platform Identity Service](../../identity-service/home.md) that indicate the context to which an identity relates.

The following table outlines several commonly used, pre-defined identity types made available by [!DNL Experience Platform], along with their associated `namespace` values:

| Identity type | `namespace` | `namespaceId` |
| --- | --- | --- |
| Email | `Email` | `6` |
| Phone | `Phone`  | `7` |
| Adobe Advertising Cloud ID | `AdCloud` | `411` |
| Adobe Audience Manager UUID | `CORE` | `0` |
| Adobe Experience Cloud ID | `ECID` | `4` |
| Adobe Target ID | `TNTID` | `9` |
| [!DNL Apple] ID for Advertisers  | `IDFA` | `20915` |
| [!DNL Google] Ad ID  | `GAID` | `20914` |
| [!DNL Windows] AID  | `WAID`  | `8` |

{style="table-layout:auto"}

>[!NOTE]
>
>Each identity type also has a `namespaceId` integer value, which can be used in place of the `namespace` string when setting the identity's `type` property to "namespaceId". See the section on [namespace qualifiers](#namespace-qualifiers) for more information.

You can retrieve a list of identity namespaces in use by your organization by making a GET request to the `idnamespace/identities` endpoint in the [!DNL Identity Service] API. See the [Identity Service developer guide](../../identity-service/api/getting-started.md) for more information.

## Namespace qualifiers {#namespace-qualifiers}

When specifying a `namespace` value in the [!DNL Privacy Service] API, a **namespace qualifier** must be included in a corresponding `type` parameter. The following table outlines the different accepted namespace qualifiers.

| Qualifier | Definition |
| --------- | ---------- |
| `standard` | One of the standard namespaces defined globally, not tied to an individual organization data set (for example, email, phone number, etc.). Namespace ID is provided. |
| `custom` | A unique namespace created in the context of an organization, not shared across the [!DNL Experience Cloud]. The value represents the friendly name ("name" field) to be searched for. Namespace ID is provided. |
| `integrationCode` | Integration code - similar to "custom", but specifically defined as the integration code of a datasource to be searched for. Namespace ID is provided. |
| `namespaceId` | Indicates the value is the actual ID of the namespace that was created or mapped through the namespace service. |
| `unregistered` | A freeform string that is not defined in the namespace service and is taken "as is". Any application that handles these kinds of namespaces checks against them and handle if appropriate for the company context and data set. No namespace ID is provided. |
| `analytics` | A custom namespace that is mapped internally in [!DNL Analytics], not in the namespace service. This is passed in directly as specified by the original request, without a namespace ID |
| `target` | A custom namespace understood internally by [!DNL Target], not in the namespace service. This is passed in directly as specified by the original request, without a namespace ID |

{style="table-layout:auto"}

## Accepted product values {#accepted-product-values}

This section lists the product identifier values accepted in the `include` attribute when creating Privacy Service jobs (API or UI). Use these values in the `include` array of your job request.

The following table lists the supported products, their UI display names, and their corresponding code values.

>[!NOTE]
>
>- Product values are case-insensitive; camel case is recommended for consistency.
>- Only the products listed above are supported in the UI and API. If a product is not provisioned for your organization, it may be ignored or cause a validation error—refer to your Adobe contract or provisioning documentation to confirm entitlement.

| Branded product name                                   | UI display name            | `include` value |
| ------------------------------------------------------ | -------------------------- | ---------------------------------------- |
| Adobe Analytics                                        | [!UICONTROL Analytics]                 | `analytics`                              |
| Adobe Audience Manager                                 | [!UICONTROL Audience Manager]          | `audienceManager`                        |
| Adobe Advertising                                      | [!UICONTROL Ad Cloud]                  | `adCloud`                                |
| Adobe Experience Platform (Profile store)              | [!UICONTROL Profile]                   | `profileService`                         |
| Adobe Experience Platform (data lake)                  | [!UICONTROL AEP Data Lake]             | `AdobeCloudPlatform`                     |
| Adobe Campaign                                         | [!UICONTROL Campaign]                  | `campaign`                               |
| Adobe Target                                           | [!UICONTROL Target]                    | `target`                                 |
| Customer Attributes                                    | [!UICONTROL Customer Attributes (CRS)] | `CRS`                                    |
| Adobe Journey Optimizer                                | [!UICONTROL Adobe Journey Optimizer]   | `cjm`                                    |
| Marketo Engage                                         | [!UICONTROL Marketo Engage / AJO B2B]  | `marketo`                                |
| Identity Service                                       | [!UICONTROL Identity]                  | `identity`                               |
| Marketo Measure                                        | [!UICONTROL Marketo Measure]           | `marketomeasure`                         |
| Adobe Commerce                                         | [!UICONTROL Commerce (Personalization)]| `commerceMarketingData`                  |

{style="table-layout:auto"}
