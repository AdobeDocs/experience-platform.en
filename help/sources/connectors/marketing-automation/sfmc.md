---
title: Salesforce Marketing Cloud (V2) Source Overview 
description: Learn how to connect Salesforce Marketing Cloud (V2) to Adobe Experience Platform using APIs or the user interface.
---
# [!DNL Salesforce Marketing Cloud] source overview

[!DNL Salesforce Marketing Cloud] is a robust, comprehensive digital marketing automation and analytics platform designed to help businesses manage customer interactions across multiple channels. [!DNL Salesforce Marketing Cloud] empowers you to transition from siloed campaigns to intelligent, personalized customer journeys across all touch points, including email, mobile, social, and web. By unifying your customer data and leveraging built-in AI, you can automate highly specific messages and content, ensuring you deliver the right experience at the right moment. This capability allows you to build stronger relationships, increase conversion rates, and achieve measurable growth by keeping your customers at the center of your entire marketing strategy.

You can use the [!DNL Salesforce Marketing Cloud] source to connect your [!DNL Salesforce Marketing Cloud] account to Adobe Experience Platform. Read the documentation below to learn how to get started.

## Prerequisites

Read the sections below for prerequisite set up that you must complete before you can connect your source to Experience Platform.

### IP address allowlist

You must add region-specific IP addresses to your allowlist prior to connecting your sources to Experience Platform. For more information, read the guide on [allowlisting IP addresses to connect to Experience Platform](../../ip-address-allow-list.md) for more information.

>[!WARNING]
>
>If you do not add the necessary IP addresses to your allowlist, your [!DNL Salesforce Marketing Cloud] account will not connect to Experience Platform.

### Set up the [!DNL Salesforce Marketing Cloud] app for authentication

When building an integration with [!DNL Salesforce Marketing Cloud], one of the first steps is to create an **Installed Package** within [!DNL Salesforce Marketing Cloud]. The installed package generates the client credentials required to authenticate API calls, defines the integration type and associated permission scopes. Additionally, the installed package provides the correct API endpoints for your tenant. It also serves as a managed container for administering, monitoring, and revoking access, ensuring that all integrations are secure, auditable, and aligned with Salesforce's recommended authentication model.

To create an installed package, use the [!DNL Salesforce Marketing Cloud] UI and navigate to **[!DNL Setup]** > **[!DNL Apps]** > **[!DNL Installed Packages]** and then select **[!DNL New]**.

Use the [!DNL New Package Details] interface to provide a name and information for your package. When finished, select **[!DNL Save]**.

Once the new package is created, select **[!DNL Add Component]**.

Select [!DNL API Integration] as your component type.

Select [!DNL Server-to-Server] as your integration type.

Finally, navigate to [!DNL Scope] > [!DNL Data]. Under [!DNL Data Extensions], select [!DNL Read].

Select [!DNL Save] and then copy and save your **client secret**. When complete, select [!DNL Finish].

Before leaving the [!DNL Salesforce Marketing Cloud] UI, copy the **client ID** and **unique base URI prefix** as you will use both values to create a connection to Experience Platform. For the Authentication Base URI, please ensure you remove everything after `.auth.market==ingcloudapis.com/`

For detailed steps on creating an installed package, read the [[!DNL Salesforce] documentation](https://trailhead.salesforce.com/content/learn/modules/marketing-cloud-developer-basics/set-up-your-developer-environment).

