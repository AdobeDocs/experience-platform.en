---
title: Salesforce Marketing Cloud (V2) Source Overview 
description: Learn how to connect Salesforce Marketing Cloud (V2) to Adobe Experience Platform using APIs or the user interface.
---
# [!DNL Salesforce Marketing Cloud] (V2) source overview

[!DNL Salesforce Marketing Cloud] is a robust, comprehensive digital marketing automation and analytics platform designed to help businesses manage customer interactions across multiple channels. [!DNL Salesforce Marketing Cloud] empowers you to transition from siloed campaigns to intelligent, personalized customer journeys across all touch points, including email, mobile, social, and web. By unifying your customer data and leveraging built-in AI, you can automate highly specific messages and content, ensuring you deliver the right experience at the right moment. This capability allows you to build stronger relationships, increase conversion rates, and achieve measurable growth by keeping your customers at the center of your entire marketing strategy.

You can use the [!DNL Salesforce Marketing Cloud] source to connect your [!DNL Salesforce Marketing Cloud] account to Adobe Experience Platform. Read the documentation below to learn how to get started.

## Prerequisites {#prerequisites}

Read the sections below for prerequisite set up that you must complete before you can connect your source to Experience Platform.

### IP address allowlist

You must add region-specific IP addresses to your allowlist prior to connecting your sources to Experience Platform. For more information, read the guide on [allowlisting IP addresses to connect to Experience Platform](../../ip-address-allow-list.md) for more information.

>[!WARNING]
>
>If you do not add the necessary IP addresses to your allowlist, your [!DNL Salesforce Marketing Cloud] account will not connect to Experience Platform.

### Set up application for authentication {#set-up-application-for-authentication}

When building an integration with [!DNL Salesforce Marketing Cloud], one of the first steps is to create an **Installed Package** within [!DNL Salesforce Marketing Cloud]. The installed package generates the client credentials required to authenticate API calls, defines the integration type and associated permission scopes. Additionally, the installed package provides the correct API endpoints for your tenant. It also serves as a managed container for administering, monitoring, and revoking access, ensuring that all integrations are secure, auditable, and aligned with Salesforce's recommended authentication model.

To create an installed package, use the [!DNL Salesforce Marketing Cloud] UI and navigate to **[!DNL Setup]** > **[!DNL Apps]** > **[!DNL Installed Packages]** and then select **[!DNL New]**. Use the [!DNL New Package Details] interface to provide a name and information for your package. When finished, select **[!DNL Save]**.

![The new package interface of the Salesforce Marketing Cloud UI.](../../images/tutorials/create/sfmc/new-package.png)

Once the new package is created, select **[!DNL Add Component]**.

![The Add Component interface of the Salesforce Marketing Cloud UI.](../../images/tutorials/create/sfmc/add-component.png)

Select **[!DNL API Integration]** as your component type.

![The component selection window with "API Integration" selected.](../../images/tutorials/create/sfmc/api-integration.png)

Select **[!DNL Server-to-Server]** as your integration type.

![The integration type selection window](../../images/tutorials/create/sfmc/server-to-server.png)

Finally, navigate to **[!DNL Scope]** > **[!DNL Data]**. Under **[!DNL Data Extensions]**, select **[!DNL Read]**.

![The data extensions section of Scope in Salesforce Marketing](../../images/tutorials/create/sfmc/data-extensions.png)

Select **[!DNL Save]** and then copy and save your **client secret**. When complete, select **[!DNL Finish]**.

![The Salesforce Marketing Cloud window for generating a client secret.](../../images/tutorials/create/sfmc/generate-secret.png)

Before leaving the [!DNL Salesforce Marketing Cloud] UI, copy the **client ID** and **unique base URI prefix** as you will use both values to create a connection to Experience Platform. For the Authentication Base URI, please ensure you remove everything after `.auth.marketingcloudapis.com/`

![The Salesforce Marketing Cloud components interface where the client ID and unique base URI can be retrieved.](../../images/tutorials/create/sfmc/client-id-and-uri.png)

For detailed steps on creating an installed package, read the [[!DNL Salesforce] documentation](https://trailhead.salesforce.com/content/learn/modules/marketing-cloud-developer-basics/set-up-your-developer-environment).

### Gather required credentials {#gather-required-credentials}

You must provide values for the following credentials to connect [!DNL Salesforce Marketing Cloud] to Experience Platform.

| Credential | Description |
| --- | --- |
| Client ID | The publicly exposed identifier used by [!DNL Salesforce Marketing Cloud] to identify your account when authorizing to Experience Platform. The client ID can be retrieved from the components panel of the [!DNL Salesforce Marketing Cloud] UI. |
| Client secret | The confidential key known only to the client application and authorization server. You can generate your client secret by following the [application set up steps outlined above](#set-up-application-for-authentication). |
| Base endpoint | The prefix of your authentication base URI for [!DNL Salesforce Marketing Cloud]. |

## Connect [!DNL Salesforce Marketing Cloud] to Experience Platform

## Next steps

Proceed to configure your [!DNL Salesforce Marketing Cloud] source connection within Experience Platform. For a step-by-step guide on setting up the connection through the UI, refer to the [tutorial here](../../tutorials/ui/create/marketing-automation/sfmc.md). Read this tutorial to learn about connecting your [!DNL Salesforce Marketing Cloud] account, selecting data, mapping fields, scheduling ingestions, and monitoring your dataflows.
