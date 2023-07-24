---
title: Use partner-provided attributes to deliver personalized experiences
description: Learn how to use partner-provided probabilistic attributes to deliver personalized experiences to your visitors.
---
# Use partner-provided attributes to deliver personalized experiences

Learn how to use partner-provided probabilistic attributes to deliver personalized experiences to your visitors.

![Use partner-provided probabilistic attributes to deliver personalized experiences to your visitors.](/help/rtcdp/assets/partner-data/onsite-personalization/onsite-personalization-steps.png)

## Prerequisites and planning {#prerequisites-and-planning}

As you consider using partner-provided probabilistic attributes to deliver personalized experiences to your authenticated and unauthenticated visitors, consider the following prerequisites in your planning process:


* What are the identifiers that are expected by the data vendor so they can layer on additional attributes?
* Can you share some things to think about?

### UI functionality, Platform components, and Experience Cloud products that you will use {#ui-functionality-and-elements}

As you complete the steps to implement the use case, you will make use of the following Real-Time CDP functionality, UI elements, and Experience Cloud products (listed in the order in which you will use them). Make sure that you have the necessary attribute-based access control permissions for all these areas or ask your system administrator to grant you the necessary permissions. 

* Web SDK
* [Identities](/help/identity-service/namespaces.md)
* [Schemas](/help/xdm/home.md)
* [Data usage labels](/help/data-governance/labels/overview.md)
* [Datasets](/help/catalog/datasets/overview.md)
* [Sources](/help/sources/home.md)
* Profiles (link to prospect profiles)
* Edge segmentation
* [Edge Personalization destinations](/help/destinations/home.md)
* Adobe Target (or a personalization platform of your choice. This use case tutorial highlights Adobe Target)

## Industry example {#industry-example}

As an example of how this use case might be implemented, your company is a home improvement brand and has low customer authentication rates. Yet, you still want to deliver personalized experiences to your unauthenticated visitors. 

An unauthenticated visitor might have moved recently into a new home and might be looking for materials for DIY projects around the house. By leveraging partner-provided probabilistic data, on their first browsing session on your website or app, you can welcome the visitor with a 10% discount coupon for materials related to DIY projects.

## How to achieve the use case: high-level overview {#achieve-the-use-case-high-level}

![Use partner-provided probabilistic attributes to deliver personalized experiences to your visitors.](/help/rtcdp/assets/partner-data/onsite-personalization/onsite-personalization-steps.png)

1. As a **customer**, you license real-time recognition capabilities from the **data partner**.
2. As a **customer**, you deploy client-side libraries on your properties to call **partner** APIs and you configure WebSDK or Mobile SDK to include partner-provided signals sent to Real-Time CDP.
3. When browsing your website or app, the **visitor** is probalistically recognized by the **partner**, who returns attributes along with an ID.
4. Real-Time CDP runs edge-segmentation to evaluate incoming event hits and persists results against the ECID identifier.
5. Adobe Target uses edge segmentation output to render personalized experience back to the **visitor**.
6. The event is persisted in its entirety for downstream workflows (why does this matter?)

## How to achieve the use case: Step-by-step instructions {#step-by-step-instructions}

Read through the sections below which include links to further documentation, to complete each of the steps in the high-level overview above.

### Create a new identity namespace and schema for Partner ID

First, you need to create a partner ID identity namespace. Read abput how to [create a partner ID identity namespace](/help/rtcdp/partner-data/prospecting.md#create-partner-id-namespace).

Next, create an experience event schema to hold the time-series data that you will later be collecting from your web properties.

As you create your schema, from the set of available field groups, add the following two into your schema. 

* [Visit Web Page ](/help/xdm/field-groups/event/web-details.md)
* [Identity Map ](/help/xdm/field-groups/profile/identitymap.md)
 
#### Create a dataset and load sample prospect data

Datasets > Create dataset 
Choose the "Create dataset from schema" option
Search for the schema you just created. Check to make sure it is enabled for profile and click Next. 
Give the dataset a name and enable it for profile 
  
Step 18: Enable the dataset for profile. 

### Implement event data collection on your web property - 

You now need to set up Web SDK on your web properties and set up datastreams, as well as tag properties. 

Note that this tutorial indicates how you can instrument your website with 

### Integrate with Adobe Target or other custom personalization destination

You are now ready to integrate with 

## Limitations and troubleshooting {#limitations-and-troubleshooting}

Note the following limitations as you explore the use case described on this page:

* If you select to use Partner IDs, be aware that these IDs are not used when building your [identity graph](/help/identity-service/ui/identity-graph-viewer.md). 

## Other use cases achieved through partner data support {#other-use-cases}

Explore further use cases enabled through partner data support in Real-Time CDP:

* (**Coming soon**) [!BADGE Beta]{type=Informative} **Leverage partner aided recognition** for personalizing on-site experiences during the visit, and for off-site retargeting post visit, without the user authenticating or having prior history with your brand.
* (**Coming soon**) [!BADGE Beta]{type=Informative} **Expanded activation** using Partner IDs to publishing ecosystems that do not accept PII or hashed PII.