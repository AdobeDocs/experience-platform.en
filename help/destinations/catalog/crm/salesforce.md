---
keywords: crm;CRM;crm destinations;salesforce crm;salesforce crm destination
title: Salesforce CRM connection
description: The Salesforce CRM destination allows you to export your account data and activate it within Salesforce CRM for your business needs.
---

# [!DNL Salesforce CRM] connection

## Overview {#overview}

[Salesforce CRM](https://www.salesforce.com/) is a popular Customer Relationship Management (CRM) platform.

This [!DNL Adobe Experience Platform] [destination](/help/destinations/home.md) leverages the [Salesforce REST API](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/dome_composite_upsert_example.htm?q=contacts), which allows you to add Accounts and create Contacts after activating them within a new Salesforce segment for your business needs.

Salesforce CRM uses [OAuth 2 with Password Grant](https://experienceleague.adobe.com/docs/experience-platform/destinations/destination-sdk/functionality/authentication/oauth2-authentication.html?lang=en) as an authentication mechanism to communicate with the Salesforce REST API.

## Use cases {#use-cases}

To help you better understand how and when you should use the Salesforce CRM destination, here are sample use cases that Adobe Experience Platform customers can solve by using this destination.

### Use case

Marketing teams can add new customer contacts into CRM through Adobe Experience Platform, build segments from their own offline data, and send these segments to Salesforce CRM. Once contacts are added they can be used in various ways. For example sending emails for marketing campaigns or to display ads in their social media feeds.

## Prerequisites {#prerequisites}

Before activating data to the Salesforce CRM destination, you must have a [schema](https://experienceleague.adobe.com/docs/experience-platform/xdm/schema/composition.html), a [dataset](https://experienceleague.adobe.com/docs/platform-learn/tutorials/data-ingestion/create-datasets-and-ingest-data.html?lang=en), and [segments](https://experienceleague.adobe.com/docs/platform-learn/tutorials/segments/create-segments.html?lang=en) created in [!DNL Experience Platform].

The following items are required before you start configuring the destination.

1. You need to have a Salesforce account.
    * Go to the Salesforce [trial](https://www.salesforce.com/in/form/signup/freetrial-sales/) page to register and create a Salesforce account, if you do not have one already.
1. Note down your [Salesforce domain](https://help.salesforce.com/s/articleView?id=sf.domain_name_setting_login_policy.htm&type=5).
1. Create a [connected app](https://help.salesforce.com/s/articleView?id=sf.connected_app_create.htm&language=en_US&r=https%3A%2F%2Fhelp.salesforce.com%2F&type=5), enable its [OAuth Settings](https://help.salesforce.com/s/articleView?id=connected_app_create_api_integration.htm&type=5&language=en_US) and once created successfully note down its *Consumer Key* and *Consumer Secret*. Refer to the [Salesforce documentation](https://help.salesforce.com/s/articleView?id=sf.connected_app_rotate_consumer_details.htm&type=5) if you need additional guidance.
1. Select the following [scopes](https://help.salesforce.com/s/articleView?id=connected_app_create_api_integration.htm&type=5&language=en_US) for the connected app in the Salesforce user interface:
    - chatter_api
    - lightning
    - visualforce
    - content
    - openid
    - full
    - api
    - web
    - refresh_token
    - offline_access

## Supported identities {#supported-identities}

Salesforce CRM supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/namespaces.md).

|Target Identity|Description|Considerations|
|---|---|---|
| state | State ||
| country | Country ||
| number | Mobile Phone ||
| firstName | First Name ||
| postalCode | Mailing Postal Code ||
| city | Mailing City ||
| lastName | Last Name ||
| email |Salesforce Email ID|Note that *Salesforce CRM* does not support hashed email addresses, hence only plain text data without transformation is sent to the destination.|

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Profile-based]** | You are exporting all members of a segment, together with the desired schema fields (for example: email address, phone number, last name), as chosen in the select profile attributes screen of the [destination activation workflow](/help/destinations/ui/activate-batch-profile-destinations.md#select-attributes).|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on segment evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/connect-destination.html). In the configure destination workflow, fill in the fields listed in the two sections below.

![Catalog](../../assets/catalog/crm/salesforce/catalog.png)

### Authenticate to destination {#authenticate}

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

![Account Info](../../assets/catalog/crm/salesforce/account-info.png)

*  **[!UICONTROL Password]**: Your Salesforce account password.
*  **[!UICONTROL Client ID]**: Your Salesforce connected app Consumer Key.
*  **[!UICONTROL Client Secret]**: Your Salesforce connected app Consumer Secret.
*  **[!UICONTROL Username]**: Your Salesforce account username.

1. If the details provided are valid, the UI displays a **Connected** status with a green check mark, you can then proceed to the next step.

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required fields and select **[!UICONTROL Next]**.
![Destination Details](../../assets/catalog/crm/salesforce/destination-details.png)

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL Custom Domain]**: Your Salesforce domain.

## Activate segments to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

Read [Activate profiles and segments to streaming segment export destinations](../../ui/activate/activate-segment-streaming-destinations.md) for instructions on activating audience segments to this destination.

## Exported data / Validate data export {#exported-data}

To validate that you have correctly set up the destination, follow the steps below:

1. Select **[!UICONTROL Destinations]** > **[!UICONTROL Browse]** to navigate to the list of destinations.
![Browse Destinations](../../assets/catalog/crm/salesforce/browse-destinations.png)

1. Select the destination and validate that the status is **[!UICONTROL enabled]**.
![Destinations Dataflow Run](../../assets/catalog/crm/salesforce/destination-dataflow-run.png)

1. Switch to the **[!DNL Activation data]** tab, then select a segment name.
![Destinations Activation Data](../../assets/catalog/crm/salesforce/destinations-activation-data.png)

1. Monitor the segment summary and ensure that the count of profiles corresponds to the count created within the segment.
![Segment](../../assets/catalog/crm/salesforce/segment.png)

1. Login to the Salesforce website then navigate to the **[!DNL Apps]** > **[!DNL Contacts]** page and check if the profiles from the segment have been added.
![Salesforce Contacts](../../assets/catalog/crm/salesforce/contacts.png)

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, see the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

Additional useful information from the [Salesforce developer portal](https://developer.salesforce.com/) is below:
* [Create a Record](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/dome_sobject_create.htm)
* [Custom Recommendation Audiences](https://developer.salesforce.com/docs/atlas.en-us.236.0.chatterapi.meta/chatterapi/connect_resources_recommendation_audiences_list.htm)
* [Using Composite Resources](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/using_composite_resources.htm?q=composite)
* [Quick Start](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/quickstart.htm)