---
title: Salesforce Service Cloud Source Connector Overview
description: Learn how to connect Salesforce Service Cloud to Adobe Experience Platform using APIs or the user interface.
exl-id: 9bebbc00-55b3-4aec-9357-4127c05844e2
TQID: https://experienceleague.adobe.com/okn6tenVmPStEfXwnOAo-Pz9fUey03dqUs1xWd-7UaM
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
---
# [!DNL Salesforce Service Cloud]

[!DNL Salesforce Service Cloud] is a customer success platform designed to automate service workflows and streamline communication between companies and their customers. It consolidates requests from various channels—such as email, phone, social media, and live chat into a unified agent console. This allows support teams to manage "cases" with a 360-degree view of the customer's history, ensuring that responses are personalized and efficient regardless of how the customer reaches out.

You can use the [!DNL Salesforce Service Cloud] source connector in Adobe Experience Platform Sources to connect your [!DNL Salesforce Service Cloud] account and bring your data for use in Experience Platform Services.

Read this document to learn how you can you set up your [!DNL Salesforce Service Cloud] account and connect it to Experience Platform.

## Prerequisites {#prerequisites}

Read this section for prerequisite set up that you must complete before you can successfully connect to Experience Platform.

### IP address allowlist {#allowlist}

You must add region-specific IP addresses to your allowlist prior to connecting your sources to Experience Platform. For more information, read the guide on [allowlisting IP addresses to connect to Experience Platform](../../ip-address-allow-list.md) for more information.

### Gather required credentials {#credentials}

You must provide values for the following credentials to connect your [!DNL Salesforce Service Cloud] account using OAuth2 Client Credential.

| Credential | Description |
| --- | --- |
| Environment URL |  The URL of the [!DNL Salesforce Service Cloud] source instance. |
| Client ID | The client ID is used in tandem with the client secret as part of OAuth2 authentication. Together, the client ID and client secret enable your application to operate on behalf of your account by identifying your application to [!DNL Salesforce Service Cloud]. |
| Client secret | The client secret is used in tandem with the client ID as part of OAuth2 authentication. Together, the client ID and client secret enable your application to operate on behalf of your account by identifying your application to [!DNL Salesforce Service Cloud]. |
| API version | The REST API version of the [!DNL Salesforce Service Cloud] instance that you are using. The value for the API version must be formatted with a decimal. For example, if you are using API version `52`, then you must input the value as `52.0`. If this field is left blank, Experience Platform will automatically use the latest available version. |

For more information on using OAuth for [!DNL Salesforce Service Cloud], read the [[!DNL Salesforce Service Cloud] guide on OAuth Authorization Flows](https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_flows.htm&type=5).

## Connect [!DNL Salesforce Service Cloud ]to Experience Platform using APIs

- [Create a Salesforce Service Cloud base connection using the Flow Service API](../../tutorials/api/create/customer-success/salesforce-service-cloud.md)
- [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
- [Create a dataflow for a customer success source using the Flow Service API](../../tutorials/api/collect/customer-success.md)

## Connect [!DNL Salesforce Service Cloud] to Experience Platform using the UI

- [Create a Salesforce Service Cloud source connection in the UI](../../tutorials/ui/create/customer-success/salesforce-service-cloud.md)
- [Create dataflow for a customer success source connection in the UI](../../tutorials/ui/dataflow/customer-success.md)
