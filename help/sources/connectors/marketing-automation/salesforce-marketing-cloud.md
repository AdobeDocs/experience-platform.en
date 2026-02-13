---
title: Salesforce Marketing Cloud Source Overview
description: Learn how to connect Salesforce Marketing Cloud to Adobe Experience Platform using APIs or the user interface.
exl-id: 2177d68c-0cef-4031-a0e7-8bf22ee2e70b
last-substantial-update: 2025-05-17
---
# [!DNL Salesforce Marketing Cloud]

>[!WARNING]
>
>The [!DNL Oracle Salesforce Marketing Cloud] source is now deprecated and is no longer available. Use the new [[!DNL Salesforce Marketing Cloud] (V2) source](sfmc.md) as a new connector for your [!DNL Salesforce Marketing Cloud] data.

[!DNL Salesforce Marketing Cloud] empowers you to manage and automate customer engagement across email, mobile, social media, and advertising—all from one platform. With tools like Email Studio, Journey Builder, and Audience Builder, you can create personalized campaigns and customer journeys tailored to your audience.

You can use the [!DNL Salesforce Marketing Cloud] source to connect your account and bring your data to Adobe Experience Platform.

## Prerequisites

Before you can connect your [!DNL Salesforce Marketing Cloud] source to Experience Platform, you must ensure that the following **permission scopes** are provisioned to your [!DNL Salesforce Marketing Cloud] client ID and client secret combination:

* `campaign_read`
* `list_and_subscribers_read`

You can request for scopes by making a call to the `v2/userinfo` resource of the [!DNL Salesforce Marketing Cloud] API. See the [[!DNL Salesforce Marketing Cloud] API Integration Permission Scopes document](<https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/data-access-permissions.html>) for guidance on how to request and compare scopes.

For more information on scopes including a list of their related permissions and behaviors, see this [[!DNL Salesforce Marketing Cloud] REST API document](<https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/rest-permissions-and-scopes.html>).

>[!IMPORTANT]
>
>Custom object ingestion is currently not supported by the [!DNL Salesforce Marketing Cloud] source integration.

### IP address allowlist

You must add region-specific IP addresses to your allowlist prior to connecting your sources to Experience Platform. For more information, read the guide on [allowlisting IP addresses to connect to Experience Platform](../../ip-address-allow-list.md) for more information.

>[!WARNING]
>
>If you do not add the necessary IP addresses to your allowlist, your [!DNL Salesforce Marketing Cloud] account will not connect to Experience Platform.

### Authenticate to Experience Platform on Azure {#azure}

You must provide values for the following credentials to connect [!DNL Salesforce Marketing Cloud] to Experience Platform on [!DNL Azure].

| Credential | Description |
| --- | --- |
| Host | The host server of your application. This is often your subdomain. **Note:** When entering your `host` value, you need to specify the `{subdomain}.rest.marketingcloudapis.com`. For example, if your host URL is `https://acme-ab12c3d4e5fg6hijk7lmnop8qrst.auth.marketingcloudapis.com/`, then you must enter `acme-ab12c3d4e5fg6hijk7lmnop8qrst.rest.marketingcloudapis.com/` as your host value. |
| Client ID | The client ID associated with your [!DNL Salesforce Marketing Cloud] application. |
| Client secret | The client secret associated with your [!DNL Salesforce Marketing Cloud] application. |
| Connection spec ID | The **connection spec** provides the connector properties of a data source. This includes details such as authentication specifications and requirements for creating both **base** and **source** connections. For [!DNL Salesforce Marketing Cloud], the connection spec ID is: `ea1c2a08-b722-11eb-8529-0242ac130003`. **Note:** This credential is only necessary when connecting via APIs. |

### Authenticate to Experience Platform on Amazon Web Services (AWS) {#aws}

>[!AVAILABILITY]
>
>This section applies to implementations of Experience Platform running on Amazon Web Services (AWS). Experience Platform running on AWS is currently available to a limited number of customers. To learn more about the supported Experience Platform infrastructure, see the [Experience Platform multi-cloud overview](../../../landing/multi-cloud.md).

You must provide values for the following credentials to connect [!DNL Salesforce Marketing Cloud] to Experience Platform on AWS.

| Credential | Description |
| --- | --- |
| Subdomain | The unique part of your [!DNL Salesforce Marketing Cloud] instance's URL, used to construct API endpoints. |
| Client ID | A public identifier for your application, generated when you create an installed package in [!DNL Salesforce Marketing Cloud] |
| Client secret | A confidential key associated with your Client ID, also generated in the installed package. |
| Connection spec ID | The **connection spec** provides the connector properties of a data source. This includes details such as authentication specifications and requirements for creating both **base** and **source** connections. For [!DNL Salesforce Marketing Cloud], the connection spec ID is: `ea1c2a08-b722-11eb-8529-0242ac130003`. **Note:** This credential is only necessary when connecting via APIs. |

For more information, read the [[!DNL Salesforce] documentation on access token for server-to-server integrations](https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/access-token-s2s.html).

## Connect [!DNL Salesforce Marketing Cloud] to Experience Platform using APIs

The documentation below provides information on how to connect [!DNL Salesforce Marketing Cloud] to Experience Platform using APIs:

* [Connect [!DNL Salesforce Marketing Cloud] to Experience Platform using the Flow Service API](../../tutorials/api/create/marketing-automation/salesforce-marketing-cloud.md)
* [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
* [Create a dataflow for a marketing automation source using the Flow Service API](../../tutorials/api/collect/marketing-automation.md)

## Connect [!DNL Salesforce Marketing Cloud] to Experience Platform using the UI

The documentation below provides information on how to connect [!DNL Salesforce Marketing Cloud] to Experience Platform using the user interface:

* [Connect [!DNL Salesforce Marketing Cloud] to Experience Platform in the UI](../../tutorials/ui/create/marketing-automation/salesforce-marketing-cloud.md)
* [Create a dataflow for a marketing automation source connection in the UI](../../tutorials/ui/dataflow/marketing-automation.md)
