---
title: Stripe
description: Learn how to bring your payments data from Stripe to Adobe Experience Platform
---
# [!DNL Stripe]

* INTRODUCTION ABOUT STRIPE
* USE CASE EXAMPLE

## Prerequisites {#prerequisites}

### Retrieve your access tokeen

* Log in to the [[!DNL Stripe] dashboard](https://dashboard.stripe.com/login) using your [!DNL Stripe] email and password credentials.
* In the [!DNL Developers] dashboard, select **[!DNL API keys for developers]**.
* Under the **API keys** tab, select **[!DNL Reveal test key]** reveal your access token.
* You can now use this token as your access token when connection your [!DNL Stripe] account to Experience Platform, using either the [!DNL Flow Service] API or the Experience Platform UI.

### Gather required credentials

In order to connect your [!DNL Stripe] account to Experience Platform, you must provide values for the following authentication credentials:

>[!BEGINTABS]

>[!TAB API]

| Credential | Description |
| --- | --- |
| `accessToken` |
| `connectionSpec.id` | The connection spec ID of the [!DNL Stripe] source. This ID is fixed as: `cc2c31d6-7b8c-4581-b49f-5c8698aa3ab3`. |

>[!TAB UI]

| Credential | Description |
| --- | --- |
| Access token |

>[!ENDTABS]

For more information on using [!DNL Stripe] APIs, read the [[!DNL Stripe] documentation on API keys](https://docs.stripe.com/keys).

### Create an Experience Data Model (XDM) schema

### IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

The documentation below provides information on how to connect [!DNL Stripe] to Platform using APIs or the user interface:

## Next steps

Once you have completed your prerequisite setup, you can proceed to the connect and bring your [!DNL Stripe] data to Experience Platform. Read the following guides for more information:

* API
* UI