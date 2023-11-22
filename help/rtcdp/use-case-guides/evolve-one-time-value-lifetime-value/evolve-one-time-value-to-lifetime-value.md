---
title: Evolve one-time customer value to lifetime value
description: Learn how to create personalized campaigns to offer the best complementary products or services based on a specific customer's attributes, behavior, and past purchases.
feature: Use Cases
---
# Evolve one-time customer value to lifetime value

>[!IMPORTANT]
> 
>* This page presents a sample implementation of Real-Time CDP and Adobe Journey Optimizer to achieve the described use case. Use the figures, qualification criteria, and other fields given on the page as a guide, not as prescriptive figures.
>* To complete this use case, you need to be licensed for Real-Time CDP and Adobe Journey Orchestration. Read more in the [prerequisites and planning section](#prerequisites-and-planning) further below.

Learn how to create personalized campaigns to offer the best complementary products or services based on a specific customer's attributes, behavior, and past purchases.

![Step by step Evolve one-time value to lifetime value high level visual overview.](../evolve-one-time-value-lifetime-value/images/step-by-step.png){width="1000" zoomable="yes"}

## Use case overview

Consider that you have customers who visit your properties and sporadically purchase the products or services you offer. You may want to create personalized campaigns to appeal to these customers so your brand can offer them longer-term value instead of one-time value. Learn how to collect and manage data, create audiences, and create journeys to action upon these audiences in Real-Time CDP and Adobe Journey Optimizer in order to evolve from offering one-time value to offering long-term value to your customers.

## Prerequisites and planning {#prerequisites-and-planning}

As you work through the steps to implement the use case, you will use various [Real-Time CDP](https://experienceleague.adobe.com/docs/experience-platform/rtcdp/overview.html) and [Adobe Journey Optimizer](https://experienceleague.adobe.com/docs/journey-optimizer/using/get-started/get-started.html) functionality and UI elements, listed below. 

Make sure that you have the necessary [attribute-based access control permissions](/help/access-control/abac/end-to-end-guide.md) for all these areas, or ask your system administrator to grant you the necessary permissions.

* [[!DNL Adobe Real-Time Customer Data Platform (Real-Time CDP)]](https://experienceleague.adobe.com/docs/platform-learn/tutorials/rtcdp/understanding-the-real-time-customer-data-platform.html): Integrate data across data sources to fuel the campaign. This data is then used to create the campaign audiences and surface personalized data elements used in the email and the web promo tiles (for example, name or account-related information). Finally, Real-Time CDP is also used to activate audiences to paid media destinations.
  * [Schemas](/help/xdm/home.md)
  * [Profiles](/help/profile/home.md)
  * [Datasets](/help/catalog/datasets/overview.md)
  * [Audiences](/help/segmentation/home.md)
  * [Destinations](/help/destinations/home.md)
* [[!DNL Adobe Journey Optimizer]](https://experienceleague.adobe.com/docs/journey-optimizer/using/orchestrate-journeys/journey.html): Design journeys, set up triggers, and create the right messaging to address your visitors.
  * [Event or Audience Trigger](https://experienceleague.adobe.com/docs/journey-optimizer/using/offer-decisioning/collect-event-data/data-collection.html)
  * [Audiences and Events](https://experienceleague.adobe.com/docs/journey-optimizer/using/audiences-profiles-identities/audiences/about-audiences.html)
  * [Journeys](https://experienceleague.adobe.com/docs/journey-optimizer/using/orchestrate-journeys/journey.html)

## Real-Time CDP and Journey Optimizer architecture

Below is a high-level architecture view of the various components of Real-Time CDP and Journey Optimizer. This diagram shows how data flows through the two Experience Platform apps from data collection up to the point where it is activated through journeys or campaigns to destinations, in order to achieve the use case described on this page.

![Architecture high level visual overview.](/help/rtcdp/use-case-guides/evolve-one-time-value-lifetime-value/images/architecture-diagram.png){width="1000" zoomable="yes"}

## How to achieve the use case: high-level overview {#achieve-the-use-case-high-level}

Below is a high level overview of the workflow - a combination of a journey workflow and an activation workflow.

In the sample workflow pictured below, you look for customers who meet a certain criteria and you want to entice them to return to your website or app. You are looking to set them on a journey where instead of limited activity on your property, they return in a more recurrent manner. You are trying to get them back to your property and then once they are back, you have them enter the journey to recurringly make purchases on your site. The campaign set up here is capped at one engagement with customers per month. 

You start by sending your audience of high valued and low frequency customers a message. You then check if they received this message within the last thirty days. If they have not, then you can enter them into a journey about, for example, a new subscription program. You can then wait for a few days (seven days in this example). After this time, if they have not purchased the subscription that you messaged them about, you can deliver paid media ads via destinations. If they have purchased the subscription, you can have them enter an order confirmation journey, thereby completing the use case. 

>[!BEGINSHADEBOX]

![Step by step Evolve one-time value to lifetime value high level visual overview.](../evolve-one-time-value-lifetime-value/images/step-by-step.png){width="1000" zoomable="yes"}

1. You create schemas and datasets, then mark these for [!UICONTROL Profile].
2. Data is collected and integrated into Experience Platform via Web SDK, Mobile Edge SDK or API. Analytics Data Connector can also be utilized, but may result in journey latency.
3. You load profiles into Real-Time CDP and build governance policies to ensure responsible use.
4. You build focused audiences from the list of profiles to check for high valued and low frequency customers.
5. You create two journeys in [!DNL Adobe Journey Optimizer], one to message users about a new subscription program, and another to message them to confirm the purchase later on.
6. If desired, you activate the audience of customers who have not purchased your subscription to desired paid-media destinations.
7. [!DNL Adobe Journey Optimizer] checks for consent and sends out the various actions configured.

>[!ENDSHADEBOX]

## How to achieve the use case {#achieve-use-case-instruction}

To complete each of the steps in the high-level overview above, read through the sections below, which offer links to more information and more detailed instructions.

### UI functionality and elements that you will use {#ui-functionality-and-elements}

As you complete the steps to implement the use case, you will make use of the Real-Time CDP and Adobe Journey Optimizer functionality and UI elements listed at the beginning of this document. Make sure that you have the necessary attribute-based access control permissions for all these areas, or ask your system administrator to grant you the necessary permissions. 

### Create a schema design and specify field groups {#schema-design}

Experience Data Model (XDM) resources are managed in the [!UICONTROL Schemas] workspace in [!DNL Adobe Experience Platform]. You can view and explore core resources provided by [!DNL Adobe] (for example, [!UICONTROL Field Groups]) and create custom resources and schemas for your organization.

For more information about creating [schemas](https://experienceleague.adobe.com/docs/experience-platform/xdm/home.html), read the [create schema tutorial.](/help/xdm/tutorials/create-schema-ui.md) 

There are several schema designs that you can use in this sample implementation for the use case to evolve one-time value to lifetime value. Each schema includes specific required fields to be set up, and some fields that are strongly suggested.

Based on sample implementations, Adobe suggests that you create the following three schemas to accomplish this use case: 

* Customer attributes schema (a profile schema)
* Customer digital transactions schema (an experience event schema)
* Customer offline transactions (an experience event schema)

#### Customer attributes schema

Use this schema to structure and reference the profile data that makes up your customer information. This data is typically ingested into [!DNL Adobe Experience Platform] via your CRM or similar system and is necessary to reference customer details that are used for personalization, marketing consent, and enhanced segmentation capabilities.

![Customer attributes schema with field groups highlighted](/help/rtcdp/use-case-guides/evolve-one-time-value-lifetime-value/images/customer-attributes-schema.png)

The customer attributes schema is represented by an [!UICONTROL XDM Individual Profile] class, which includes the following field groups:

+++Personal Contact Details (Field Group)

[Personal Contact Details](/help/xdm/field-groups/profile/personal-contact-details.md) is a standard schema field group for the XDM Individual Profile class which describes the contact information for an individual person.

| Fields | Requirement | Description |
| --- | --- | --- |
| `mobilePhone.number` | Required | The person's mobile phone number, which will be used for SMS notifications. |
| `personalEmail.address` | Required | The person's email address. |

+++

+++Demographic Details (Field Group)

[Demographic Details](/help/xdm/field-groups/profile/demographic-details.md) is a standard schema field group for the XDM Individual Profile class. The field group provides a root-level person object, whose sub-fields describe information about an individual person.

| Fields | Requirement |
| --- | --- |
| `person.name.firstName`| Suggested | 
| `person.name.lastName` | Suggested |

+++

+++External Source System Audit Details (Field Group)

[External Source System Audit Attributes](/help/xdm/data-types/external-source-system-audit-attributes.md) is a standard Experience Data Model (XDM) data type that captures audit details about an external source system.

+++

+++Consent and Preference Field Groups (Field Group)

[The Consents and Preferences](/help/xdm/field-groups//profile/consents.md) field group provides a single object-type field, consents, to capture consent and preference information.

| Fields | Requirement |
| --- | --- |
| `consents.marketing.email.val` | Required |
| `consents.marketing.preferred` | Required |
| `consents.marketing.push.val` | Required |
| `consents.marketing.sms.val` | Required |
| `consents.personalize.content.val` | Required |
| `consents.share.val` | Required |

+++

#### Customer digital transactions schema

This schema is used to structure and reference the event data that makes up your customer activity that occurs on your website and/or associated digital platforms. This data is typically ingested into [!DNL Adobe Experience Platform] via Web SDK and is necessary to reference the various browse and conversion events that are used for triggering journeys, detailed online customer analysis, and enhanced segmentation capabilities.

![Customer digital transactions schema with field groups highlighted](/help/rtcdp/use-case-guides/evolve-one-time-value-lifetime-value/images/customer-digital-transactions-schema.png)

The customer digital transactions schema is represented by an [!UICONTROL XDM ExperienceEvent] class, which includes the following field groups:

+++Adobe Experience Platform Web SDK ExperienceEvent (Field Group)

| Fields | Requirement |
| --- | --- |
| `device.model` | Suggested |
| `environment.browserDetails.userAgent` | Suggested |

+++

+++Web Details (Field Group)

Web Details is a standard schema field group for the XDM ExperienceEvent class, used to describe information regarding web details events such as interaction, page details, and referrer.

| Fields | Requirement | Description |
| --- | --- | --- |
| `web.webInteraction.linkClicks.id` | Suggested | The id for the web link or URL that corresponds to the interaction. |
| `web.webInteraction.linkClicks.value` | Suggested | The number of clicks for the web link or URL that corresponds to the interaction. |
| `web.webInteraction.name` | Suggested | The name of the web page. |
| `web.webInteraction.URL` | Suggested | The URL for the web page. |
| `web.webPageDetails.name` | Suggested | The name of the web page where the web interaction occurred. |
| `web.webPageDetails.URL` | Suggested | The URL of the web page where the web interaction occurred. |
| `web.webReferrer.URL` | Suggested | Describes the referrer of a web interaction, which is the URL a visitor came from immediately before the current web interaction was recorded. |

+++

+++Consumer Experience Event (Field Group)

This field group includes various information about actions, such as purchase or browsing events, taken by users on your web property.

| Field | Requirement |
| --- | --- |
| `commerce.cart.cartID` | Suggested |
| `commerce.cart.cartSource` | Suggested |
| `commerce.cartAbandons.id` | Suggested |
| `commerce.cartAbandons.value` | Suggested |
| `commerce.order.orderType` | Suggested |
| `commerce.order.payments.paymentAmount` | Suggested |
| `commerce.order.payments.paymentType` | Suggested |
| `commerce.order.payments.transactionID` | Suggested |
| `commerce.order.priceTotal` | Suggested |
| `commerce.order.purchaseID` | Suggested |
| `commerce.productListAdds.id` | Suggested |
| `commerce.productListAdds.value` | Suggested |
| `commerce.productListOpens.id` | Suggested |
| `commerce.productListOpens.value` | Suggested |
| `commerce.productListRemoval.id` | Suggested |
| `commerce.productListRemoval.value` | Suggested |
| `commerce.productListViews.id` | Suggested |
| `commerce.productListViews.value` | Suggested |
| `commerce.productViews.id` | Suggested |
| `commerce.productViews.value` | Suggested |
| `commerce.purchases.id` | Suggested |
| `commerce.purchases.value` | Suggested |
| `marketing.campaignGroup` | Suggested |
| `marketing.campaignName` | Suggested |
| `marketing.trackingCode` | Suggested |
| `productListItems.name` | Suggested |
| `productListItems.priceTotal` | Suggested |
| `productListItems.product` | Suggested |
| `productListItems.quantity` | Suggested |

+++

+++End User ID Details (Field Group)

This field group includes various information about your users, such as whether they are authenticated on your site when visiting, and information about their identity.

| Fields | Requirement | Description |
| --- | --- | --- |
| `endUserIDs._experience.emailid.authenticatedState` | Required | End user email address ID authenticated state. |
| `endUserIDs._experience.emailid.id` | Required | End user email address ID. |
| `endUserIDs._experience.emailid.namespace.code` | Required | End user email address ID namespace code. |
| `endUserIDs._experience.mcid.authenticatedState` | Required | [!DNL Adobe] Marketing Cloud ID (MCID) authenticated state. The MCID is now known as the Experience Cloud ID (ECID). |
| `endUserIDs._experience.mcid.id` | Required | [!DNL Adobe] Marketing Cloud ID (MCID). The MCID is now known as the Experience Cloud ID (ECID). |
| `endUserIDs._experience.mcid.namespace.code` | Required | [!DNL Adobe] Marketing Cloud ID (MCID) namespace code. |

+++

+++External Source System Audit Details (Field Group)

External Source System Audit Attributes is a standard Experience Data Model (XDM) data type that captures audit details about an external source system.

+++

#### Customer offline transactions schema

This schema is used to structure and reference the event data that makes up your customer activity that occurs on platforms outside of your website. This data is typically ingested into [!DNL Adobe Experience Platform] from a POS (or similar system) and most often streamed into Platform via an API connection. Its purpose is to reference the various offline conversion events that are used for triggering journeys, deep online and offline customer analysis, and enhanced segmentation capabilities.

![Customer offline transactions schema with field groups highlighted](/help/rtcdp/use-case-guides/evolve-one-time-value-lifetime-value/images/customer-offline-transactions-schema.png)

The customer offline transactions schema is represented by an [!UICONTROL XDM ExperienceEvent] class, which includes the following field groups:

+++Commerce Details (Field Group)

| Fields | Requirement | Description |
| --- | --- | --- |
| `commerce.cart.cartID` | Required | An ID for the shopping cart. |
| `commerce.order.orderType` | Required | An object that describes product order type. |
| `commerce.order.payments.paymentAmount` | Required | An object that describes product order payment amount. |
| `commerce.order.payments.paymentType` | Required | An object that describes product order payment type. |
| `commerce.order.payments.transactionID` | Required | An object product order transaction ID. |
| `commerce.order.purchaseID` | Required | An object product order purchase ID. |
| `productListItems.name` | Required | A list of item names representing the product(s) selected by a customer. |
| `productListItems.priceTotal` | Required | The total price of list of items representing the product(s) selected by a customer. |
| `productListItems.product` | Required | The product(s) selected. |
| `productListItems.quantity` | Required | The quantity of list of items representing the product(s) selected by a customer. |

+++

+++Personal Contact Details (Field Group)

| Fields | Requirement | Description |
| --- | --- | --- |
| `mobilePhone.number` | Required | The person's mobile phone number, which will be used for SMS. |
| `personalEmail.address` | Required | The person's email address. |

+++

+++External Source System Audit Details (Field Group) 

External Source System Audit Attributes is a standard Experience Data Model (XDM) data type that captures audit details about an external source system.

+++

#### Adobe web connector schema

>[!NOTE]
>
>This is an optional implementation if you are using the [!DNL Adobe Analytics Data Connector].

This schema is used to structure and reference the event data that makes up your customer activity that occurs on your website and/or associated digital platforms. This schema is similar to the Customer Digital Transactions schema but differs in that it is intended to be used when Web SDK is not an option for data collection; thus, this schema is needed when you are utilizing the [!DNL Adobe Analytics Data Connector] to send your online data into [!DNL Adobe Experience Platform] either as a primary or secondary datastream.

![Adobe web connector schema with field groups highlighted](/help/rtcdp/use-case-guides/evolve-one-time-value-lifetime-value/images/adobe-web-schema.png)

The [!DNL Adobe] web connector schema is represented by a [!UICONTROL XDM ExperienceEvent] class, which includes the following field groups:

+++Adobe Analytics ExperienceEvent Template (Field Group)

| Fields | Requirement | Description |
| --- | --- | --- |
| `web.webInteraction.linkClicks.id` | Suggested | The id for the web link or URL that corresponds to the interaction. |
| `web.webInteraction.linkClicks.value` | Suggested | The number of clicks for the web link or URL that corresponds to the interaction. |
| `web.webInteraction.name` | Suggested | The name of the web page. |
| `web.webInteraction.URL` | Suggested | The URL for the web page. |
| `web.webPageDetails.name` | Suggested | The name of the web page where the web interaction occurred. |
| `web.webPageDetails.URL` | Suggested | The URL of the web page where the web interaction occurred. |
| `web.webReferrer.URL` | Suggested | Describes the referrer of a web interaction, which is the URL a visitor came from immediately before the current web interaction was recorded. |
| `commerce.cart.cartID` | Suggested | |
| `commerce.cart.cartSource` | Suggested | |
| `commerce.cartAbandons.id` | Suggested | |
| `commerce.cartAbandons.value` | Suggested | |
| `commerce.order.orderType` | Suggested | |
| `commerce.order.payments.paymentAmount` | Suggested | |
| `commerce.order.payments.paymentType` | Suggested | |
| `commerce.order.payments.transactionID` | Suggested | |
| `commerce.order.priceTotal` | Suggested | |
| `commerce.order.purchaseID` | Suggested | |
| `commerce.productListAdds.id` | Suggested | |
| `commerce.productListAdds.value` | Suggested | |
| `commerce.productListOpens.id` | Suggested | |
| `commerce.productListOpens.value` | Suggested | |
| `commerce.productListRemoval.id` | Suggested | |
| `commerce.productListRemoval.value` | Suggested | |
| `commerce.productListViews.id` | Suggested | |
| `commerce.productListViews.value` | Suggested | |
| `commerce.productViews.id` | Suggested | |
| `commerce.productViews.value` | Suggested | |
| `commerce.purchases.id` | Suggested | |
| `commerce.purchases.value` | Suggested | |
| `marketing.campaignGroup` | Suggested | |
| `marketing.campaignName` | Suggested | |
| `marketing.trackingCode` | Suggested | |
| `productListItems.name` | Suggested | |
| `productListItems.priceTotal` | Suggested | |
| `productListItems.product` | Suggested | |
| `productListItems.quantity` | Suggested | |
| `endUserIDs._experience.emailid.authenticatedState` | Required | End user email address ID authenticated state. |
| `endUserIDs._experience.emailid.id` | Required | End user email address ID. |
| `endUserIDs._experience.emailid.namespace.code` | Required | End user email address ID namespace code. |
| `endUserIDs._experience.mcid.authenticatedState` | Required | [!DNL Adobe] Marketing Cloud ID (MCID) authenticated state. The MCID is now known as the Experience Cloud ID (ECID). |
| `endUserIDs._experience.mcid.id` | Required | [!DNL Adobe] Marketing Cloud ID (MCID). The MCID is now known as the Experience Cloud ID (ECID). |
| `endUserIDs._experience.mcid.namespace.code` | Required | [!DNL Adobe] Marketing Cloud ID (MCID) namespace code. |

+++

### Create a dataset from a schema {#dataset-from-schema}

A dataset is a storage and management structure for a group of data. Each schema used to accomplish this sample implementation has a single dataset. 

For more information on how to create a [dataset](/help/catalog/datasets/overview.md) from a schema, read the [Datasets UI guide](/help/catalog/datasets/user-guide.md).

>[!NOTE] 
>
>Similar to the step to create a schema, you need to enable the dataset to be included in the Real-Time Customer Profile. For more information about enabling the dataset for use in Real-Time Customer Profile, read the [create schema tutorial.](/help/xdm/tutorials/create-schema-ui.md#profile).

### Privacy, consent and data governance {#privacy-consent}

#### Consent policies

>[!IMPORTANT]
>
>Providing customers with the capability to unsubscribe from receiving communications from a brand, as well as ensuring this choice is honored, is a legal requirement. Learn more about the applicable legislation in the [Privacy regulations overview](https://experienceleague.adobe.com/docs/experience-platform/privacy/regulations/overview.html).

Consider implementing the following [consent policies](https://experienceleague.adobe.com/docs/platform-learn/data-collection/web-sdk/consent/overview.html) and asking your visitors for consent before you  reaching out to them:

* If `consents.marketing.email.val = "Y"` then Can Email
* If `consents.marketing.sms.val = "Y"` then Can SMS
* If `consents.marketing.push.val = "Y"` then Can Push
* If `consents.share.val = "Y"` then Can Advertise

#### Data Governance label and enforcement

Consider adding and enforcing the following [data governance labels](/help/data-governance/labels/overview.md):

* Personal email addresses are utilized as direct identifiable data that is used for identifying or getting in touch with a specific individual rather than a device.
    * `personalEmail.address = I1`

#### Marketing policies

There are no [marketing policies](/help/data-governance/policies/overview.md) required for the re-engagement journeys however, the following should be considered as desired:

* Restrict Sensitive Data
* Restrict Onsite Advertising
* Restrict Email Targeting
* Restrict cross site Targeting
* Restrict combining directly identifiable data with anonymous data

### Create audiences {#create-audiences}

This use cases requires that you create two audiences to define specific attributes or behaviors shared by a subset of profiles from your profile store to distinguish a marketable group of people from your customer base. Audiences can be created in multiple ways in [!DNL Adobe Experience Platform].

For more information on how to create an audience, read the [Audience service UI guide](https://experienceleague.adobe.com/docs/experience-platform/segmentation/ui/overview.html#create-audience).

For more information on how to directly compose [Audiences](/help/segmentation/home.md), read the [Audience Composition UI guide](/help/segmentation/ui/audience-composition.md).

For more information on how to build audiences through Platform-derived segment definitions, read the [Audience Builder UI guide](/help/segmentation/ui/segment-builder.md).

Specifically, you need to create and use two audiences at different steps of the use case, as shown in the image below.

![Audiences highlighted.](/help/rtcdp/use-case-guides/evolve-one-time-value-lifetime-value/images/audiences-highlighted-in-diagram.png){width="1000" zoomable="yes"}

>[!BEGINTABS]

>[!TAB Adobe Journey Optimizer Qualifying Audience]

This high value and low frequency audience includes the profiles that you want to reach out to via a journey, to let them know about a new subscription program.

* Description: Profiles who have spent more than $250 in aggregate in the last 3 months
* Fields & Conditions Needed in the audience:
  * Event: `commerce.order.payments.paymentamount`
        * Aggregate Sum: >= $250
  * EventType: `commerce.purchases`
        * Timestamp: less than 3 months before now


>[!TAB Paid media audience]

This audience is created to include profiles who have spent more than $250 in aggregate in the last 3 months, and have not had a purchase in the last 7 days. 

* Description: profiles who have spent more than $250 in aggregate in the last 3 months, and have not had a purchase in the last 7 days. 
* Fields & Conditions Needed:
  * EventType: `journey.feedback`
    * Operand: = true
  * Event: `experience.journeyOrchestration.stepEvents.nodeName`
    * Operand: = JourneyStepEventTracker - Subscription Not Purchased
    * Timestamp: in last 7 days
  * EventType is not: `commerce.purchases`
    * Timestamp: <= 7 days before now
  * Event: SKU
    * Value: = `subscription`

>[!ENDTABS]

### Journey setup in Adobe Journey Optimizer {#journey-setup}

>[!NOTE]
>
>[!DNL Adobe Journey Optimizer] does not encompass everything shown in the diagrams. All [paid media ads](/help/destinations/catalog/social/overview.md) are created in [!UICONTROL Destinations].

[[!DNL Adobe Journey Optimizer]](https://experienceleague.adobe.com/docs/journey-optimizer/using/orchestrate-journeys/journey.html) helps you deliver connected, contextual, and personalized experiences to your customers. The customer journey is the entire process of a customer's interactions with the brand. Each use case journey requires specific information. Listed below is the precise data needed for each Journey branch.

>[!BEGINTABS]

>[!TAB Lifetime Journey]

The lifetime journey addresses the audience of high value and low frequency customers who were not targeted within the last 30 days. A message is shown to these customers and then, if after 7 days they still do not purchase, you can include the non-purchasers in an audience which will you can show paid media ads to.

![Lifetime journey high level visual overview.](/help/rtcdp/use-case-guides/evolve-one-time-value-lifetime-value/images/lifetime-journey.png "Customer intelligent re-engagement journey high level visual overview."){width="2560" zoomable="yes"}

+++Events

* Event 1: Product Views
    * Schema: Customer Digital Transactions
    * Fields:
        * `EventType`
    * Condition: 
        * `EventType = commerce.productViews`
        * Fields:
            * `Commerce.productViews.id`
            * `Commerce.productViews.value`
            * `eventType`
            * `identityMap.authenticatedState`
            * `identityMap.id`
            * `identityMap.primary`
            * `productListItems.SKU`
            * `productListItems.currencyCode`
            * `productListItems.name`
            * `productListItems.priceTotal`
            * `productListItems.product`
            * `productListItems.productImageUrl`
            * `productListItems.quantity`
            * `timestamp`
            * `endUserIDs._experience.emailid.authenticatedState`
            * `endUserIDs._experience.emailid.id`
            * `endUserIDs._experience.emailid.namespace.code`
            * `_id`

* Event 2: Add to Cart
    * Schema: Customer Digital Transactions
    * Fields:
        * `EventType`
    * Condition:
        * `EventType = commerce.productListAdds`
        * Fields:
            * `Commerce.productListAdds.id`
            * `Commerce.productListAdds.value`
            * `eventType`
            * `identityMap.authenticatedState`
            * `identityMap.id`
            * `identityMap.primary`
            * `productListItems.SKU`
            * `productListItems.currencyCode`
            * `productListItems.name`
            * `productListItems.priceTotal`
            * `productListItems.product`
            * `productListItems.productImageUrl`
            * `productListItems.quantity`
            * `timestamp`
            * `commerce.cart.cartID`
            * `endUserIDs._experience.emailid.authenticatedState`
            * `endUserIDs._experience.emailid.id`
            * `endUserIDs._experience.emailid.namespace.code`
            * `_id`

* Event 3: Brand Engagement
    * Schema: Customer Digital Transactions
    * Fields:
        * `EventType`
    * Condition: 
        * `EventType in application.launch, commerce.purchases, web.webpagedetails.pageViews`
        * Fields:
            * `eventType`
            * `identityMap.authenticatedState`
            * `identityMap.id`
            * `identityMap.primary`
            * `productListItems.SKU`
            * `productListItems.currencyCode`
            * `productListItems.name`
            * `productListItems.priceTotal`
            * `productListItems.product`
            * `productListItems.productImageUrl`
            * `productListItems.quantity`
            * `timestamp`
            * `web.webpagedetails.URL`
            * `web.webpagedetails.isHomePage`
            * `web.webpagedetails.name`
            * `endUserIDs._experience.emailid.authenticatedState`
            * `endUserIDs._experience.emailid.id`
            * `endUserIDs._experience.emailid.namespace.code`
            * `_id`
            * `Commerce.purchases.id`
            * `Commerce.purchases.value`
            * `shipping.address.city`
            * `shipping.address.countryCode`
            * `shipping.address.postalCode`
            * `shipping.address.state`
            * `shipping.address.street1`
            * `shipping.address.street2`
            * `shipping.shipDate`
            * `shipping.trackingNumber`
            * `shipping.trackingURL`

+++

+++Key Journey logic

* Journey Entry Logic
    * Product View Event

* Conditions 
    * Check for at least one online or offline purchase event since the product was last viewed.
        * Schema: Customer Digital Transactions
        * `eventType = commerce.purchases` 
        * `timestamp > timestamp of product last viewed`
    
    * Check for at least one offline purchase since product last viewed: 
        * Schema: Customer Offline Transactions
        * `eventType = commerce.purchases`
        * `timestamp > timestamp of product last viewed`

    * Conditions - Select the Target channel
        * Email
            * `consents.marketing.email.val = y`
        * Push 
            * `consents.marketing.push.val=y`
        * SMS
            * `consents.marketing.sms.val = y`

    * Channel Personalization
        * Personalized channel content based on product view.

+++

Add a custom condition at the end of journey, creating a journey.feedback event. You will use this event to segment the audience which has not purchased the subscription and which you can target via paid media ads.

>[!TAB Order Confirmation Journey]

The order confirmation journey focuses on whether a purchase was made through the website or mobile app.<p>![Customer order confirmation journey high level visual overview.](/help/rtcdp/use-case-guides/evolve-one-time-value-lifetime-value/images/order-confirmation-journey.png "Customer order confirmation journey high level visual overview."){width="2560" zoomable="yes"}</p>

+++Events

* Event 4: Online Purchases
    * Schema: Customer Digital Transactions
    * Fields:
        * `EventType`
    * Condition: 
        * `EventType = commerce.purchases`
        * Fields: 
            * `Commerce.purchases.id`
            * `Commerce.purchases.value`
            * `eventType`
            * `identityMap.authenticatedState`
            * `identityMap.id`
            * `identityMap.primary`
            * `productListItems.SKU`
            * `productListItems.currencyCode`
            * `productListItems.name`
            * `productListItems.priceTotal`
            * `productListItems.product`
            * `productListItems.productImageUrl`
            * `productListItems.quantity`
            * `timestamp`
            * `endUserIDs._experience.emailid.authenticatedState`
            * `endUserIDs._experience.emailid.id`
            * `endUserIDs._experience.emailid.namespace.code`
            * `_id`

+++

+++Key Journey logic

* Journey Entry Logic
    * Order Event

* Conditions 
    * Select Target Channel (Select one, or multiple channels for wider reach).
        * Order confirmation is considered serving in nature, so consent checking is usually unnecessary.
        * Email
        * Push
        * SMS

    * Channel Content Personalization
        * Display order details information and can display a list of products using a table format. 

+++

>[!ENDTABS]

For more information about creating journeys in [!DNL Adobe Journey Optimizer], read the [Get started with journeys guide](https://experienceleague.adobe.com/docs/journey-optimizer/using/orchestrate-journeys/journey.html).

### Set up paid media ads in destinations {#paid-media-ads}

Some users might not have purchased your subscription even after you message them about the new program. After waiting for a number of days, (seven in our example use case), you can decide to show paid media ads to those users. 

Use the destinations framework in Real-Time CDP for paid media ads. Select one of the many available destinations to display paid media ads to your customers. See an overview of available [advertising](/help/destinations/catalog/advertising/overview.md) and [social](/help/destinations/catalog/social/overview.md) destinations. Browse all available destinations in the destinations catalog. 

As part of the activation process, the destination checks for customer consent. 

#### Data required for destinations

Streaming segment export destinations (such as Facebook, Google Customer Match, Google DV360) support various identities from customer data: 

* `personalEmail.address`
* `ECID`
* `mobilePhone.number`

The Abandon Cart Segment is streaming and therefore can be used by the Destination framework for this use case.

* Stream/Triggered
    * [Advertising](/help/destinations/catalog/advertising/overview.md)/[Paid Media & Social](/help/destinations/catalog/social/overview.md)
    * [Mobile](/help/destinations/catalog/mobile-engagement/overview.md)
    * [Streaming Destination](/help/destinations/catalog/streaming/http-destination.md)
    * [Custom Destination SDK](/help/destinations/destination-sdk/overview.md)
