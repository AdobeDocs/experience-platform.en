---
title: Use partner-provided attributes to deliver personalized experiences
description: Learn how to use partner-provided probabilistic attributes to deliver personalized experiences to your visitors.
---
# Use partner-provided attributes to deliver personalized experiences 

Learn how to use partner-provided probabilistic attributes to deliver personalized experiences to your web property visitors.

![Use partner-provided probabilistic attributes to deliver personalized experiences to your visitors.](/help/rtcdp/assets/partner-data/onsite-personalization/onsite-personalization-steps.png)

## Industry example {#industry-example}

As an example of how this use case might be implemented and a challenge that it solves, consider that your company is a home improvement brand and has low customer authentication rates. Yet, you still want to deliver personalized experiences to your unauthenticated visitors on their first visit to your website. 

In a scenario, an unauthenticated visitor might have recently moved into a new home and might be looking for materials for DIY projects around the house. By leveraging partner-provided probabilistic data such as whether a house has been bought or sold recently, on their first browsing session on your website or app, you can welcome the visitor with a 10% discount coupon for materials related to DIY projects.

## Prerequisites and planning {#prerequisites-and-planning}

As you consider using partner-provided probabilistic attributes to deliver personalized experiences to your authenticated and unauthenticated visitors, consider the following prerequisites in your planning process:

* What are the identifiers that are expected by the data vendor so they can layer on additional attributes?
* Can you share some things to think about?

### UI functionality, Platform components, and Experience Cloud products that you will use {#ui-functionality-and-elements}

To successfully implement this use case, you must use multiple areas of Real-Time CDP and other Experience Cloud solutions. Make sure that you have the necessary attribute-based access control permissions for all these areas or ask your system administrator to grant you the necessary permissions. 

* Data Collection
  * [Adobe Experience Platform Web SDK](/help/edge/home.md)
  * [Tags](/help/tags/home.md)
  * [Datastreams](/help/datastreams/overview.md)
* Data Management in Real-Time CDP
  * [Identities](/help/identity-service/namespaces.md)
  * [Schemas](/help/xdm/home.md)
  * [Data usage labels](/help/data-governance/labels/overview.md)
  * [Datasets](/help/catalog/datasets/overview.md)
* Web property personalization
  * [Edge segmentation](/help/segmentation/ui/edge-segmentation.md)
  * [Edge Personalization destinations](/help/destinations/destination-types.md#edge-personalization-destinations)
  * [Adobe Target](/help/destinations/catalog/personalization/adobe-target-connection.md) (or a personalization platform of your choice. This use case tutorial highlights Adobe Target as personalization engine)

## How to achieve the use case: high-level overview {#achieve-the-use-case-high-level}

![Use partner-provided probabilistic attributes to deliver personalized experiences to your visitors.](/help/rtcdp/assets/partner-data/onsite-personalization/onsite-personalization-steps.png)

1. As a **customer**, you license real-time recognition capabilities from the **data partner**.
2. As a **customer**, you deploy client-side libraries on your properties to call **partner** APIs and you configure WebSDK or Mobile SDK to send partner-provided signals to Real-Time CDP.
3. When browsing your website or app, the **visitor** is probabilistically recognized by the **partner**, who returns attributes along with an ID.
4. Real-Time CDP runs edge segmentation to evaluate incoming event hits and persists results against the ECID identifier.
5. Adobe Target uses edge segmentation output to render personalized experience back to the **visitor**.
6. The event is persisted in its entirety for downstream workflows (why does this matter?)

## How to achieve the use case: Step-by-step instructions {#step-by-step-instructions}

Read through the sections below which include links to further documentation, to complete each of the steps in the high-level overview above.

### Data management - Create a new identity namespace, schema, and dataset to manage data attributes 

In preparation for achieving the use case to personalize unauthenticated visitors' experience, you must first set up the data management stucture in Real-Time CDP in order to receive the incoming real-time event and audience qualification data.

#### Create Partner ID identity namespace

First, you need to create a partner ID identity namespace. Navigate to **[!UICONTROL Customer]** > **[!UICONTROL Identities]** in the left rail and then select **[!UICONTROL Create identity namespace]** in the upper right corner of the screen.

![Create partner ID identity namespace](/help/rtcdp/assets/partner-data/onsite-personalization/create-identity-namespace.png)

Read more about how to [create a partner ID identity namespace](/help/rtcdp/partner-data/prospecting.md#create-partner-id-namespace).

#### Create a schema

Next, create an **[!UICONTROL Experience Event]** schema to hold the time-series data that you will later be collecting from your web properties. Read abut how to [create a schema using the Experience Platform UI](/help/xdm/ui/resources/schemas.md#create) and make sure to use **[!UICONTROL XDM ExperienceEvent]** as the base class for the schema. 

![Create Experience Event schema.](/help/rtcdp/assets/partner-data/onsite-personalization/create-experience-event-schema.png)

As you create your schema and [add field groups to it](/help/xdm/ui/resources/schemas.md#add-field-groups) from the set of available field groups, add the following two into your schema. This will ensure that identity and web visit information from the visitor are captured in the data schema. 

* [Visit Web Page](/help/xdm/field-groups/event/web-details.md)
* [Identity Map](/help/xdm/field-groups/profile/identitymap.md)

Additionally, create a new field group with any other information that you want to capture about your web property visitor and add it to your schema. Read how to [create a field group](/help/xdm/ui/resources/field-groups.md) and how to [add fields](/help/xdm/ui/resources/field-groups.md) to the field group. For example, if you are expecting to retrieve from your partner information regarding fields such as `married`, `householdIncome`, `buyingPropensity`, or `homePurchase`, you need to add these manually to the field group that you are creating.

Before saving the schema, make sure to set the **[!UICONTROL Partner ID]** field as an identity and set the identity namespace to the one you created in the earlier step. Remember also to [enable the schema to be included in Profile](help/xdm/ui/resources/schemas.md#profile).

#### Create a dataset

Next, you must create a dataset to hold the data that you collect from your web property visitors and that you will use for onsite personalization.

Read the tutorial on [how to create a dataset](/help/catalog/datasets/user-guide.md#create) and remember to select the option to create the dataset from a schema. Create the dataset based on the schema that you created in the previous step.

Note that similar to the step when creating a schema, you need to enable the dataset to be included in the [!UICONTROL Real-Time Customer Profile]. For more information about enabling the dataset for use in [!UICONTROL Real-Time Customer Profile], read the [create schema tutorial.](/help/xdm/tutorials/create-schema-ui.md#profile) 

### Implement event data collection on your web property

After setting up your data management configuration, you now need to implement real-time event [data collection](/help/collection/home.md) on your web property. You need to instrument your property with the Adobe data collection library - [!UICONTROL Web SDK] - to collect real-time event calls and send them back to Real-Time CDP. This item consists of a few separate tasks across a few data collection components.

>[!IMPORTANT]
>
>In order to retrieve partner-provided probabilistic attributes, you must also *integrate your web property with partner APIs or other methods to call and retrieve attributes from data partners in real-time*. Please discuss this aspect with your partner of choice as it is not subject of this tutorial.

First, use the app switcher to navigate to the **[!UICONTROL Data Collection]** section. 

![App switcher to get to Data Collection section.](/help/rtcdp/assets/partner-data/onsite-personalization/app-switcher-data-collection.png)

The **[!UICONTROL Data Collection]** section of the UI looks similar to the image below.

![Data collection section of the UI.](/help/rtcdp/assets/partner-data/onsite-personalization/data-collection-home.png)

#### Create datastream

As a first step in the data collection section, [create a new datastream](/help/datastreams/configure.md). The datastream is the foundation of how data is collected and correctly routed to the right Adobe app, in this case Experience Platform.

As you create the datastream, in the **[!UICONTROL Event schema]** field, select the schema that you created previously. 

[Select the event dataset](/https://experienceleague.adobe.com/docs/experience-platform/datastreams/configure.html?lang=en#aep) that you created earlier from the dropdown, check the boxes next to **[!UICONTROL Edge Segmentation]** and **[!UICONTROL Personalization Destinations]**, and select **[!UICONTROL Save]**. 

Note that you do not have to select a profile dataset in this scenario since you are bringing in event-based time-series data.

#### Create Tag property

Think of a property as a container that you fill with extensions, rules, data elements, and libraries as you deploy tags to your site. 

Navigate to **[!UICONTROL Tags]** and select **[!UICONTROL New property]**.

![Create a new tag property.](/help/rtcdp/assets/partner-data/onsite-personalization/create-tag-property.png)

Fill in the required fields and select **[!UICONTROL Save]**.

![Fill in required fields for your new property.](/help/rtcdp/assets/partner-data/onsite-personalization/tag-property-fields.png)

Get complete information about how to [create a tag property](https://experienceleague.adobe.com/docs/platform-learn/implement-in-websites/configure-tags/create-a-property.html).

Next, you must install various extensions within the property. Select your tag property and navigate to the [!UICONTROL Extensions] section. 

![Select your new tag property.](/help/rtcdp/assets/partner-data/onsite-personalization/select-tag-property.png)

Notice that the [!UICONTROL Core] extension is already installed. You must install two further extensions, as detailed in the next sections.

![View installed extensions.](/help/rtcdp/assets/partner-data/onsite-personalization/view-existing-extensions.png)

#### Install Web SDK extension

Note that this tutorial indicates how you can instrument your website with WebSDK. You can also use Mobile SDK on your app to personalize the experience to your app visitors.

![View of the Web SDK extension in the extensions catalog.](/help/rtcdp/assets/partner-data/onsite-personalization/web-sdk-extension.png)

Navigate down to the **[!UICONTROL Datastreams]** section and provide information on the Experience Platform sandbox that you are using. Select the appropriate sandbox and the datastream created in the previous 
steps from the next dropdown. You can choose the same sandbox and datastream values for all other environments. Leave the other settings unchanged and select **[!UICONTROL Save]**. 

Get complete information on [how to install WebSDK](https://experienceleague.adobe.com/docs/platform-learn/implement-web-sdk/tags-configuration/install-web-sdk.html).

#### Install ID Service extension

Use this extension to create a unique device-based first-party identity for visitors across all Experience Cloud solutions. Search for **[!UICONTROL ID Service]** in the extension catalog, and install it. Keep all the default settings then installing the extension.
  
![View of the ID Service extension in the extensions catalog.](/help/rtcdp/assets/partner-data/onsite-personalization/id-service-extension.png)

#### Set up environments

Next, head on over to the **[!UICONTROL Environments]** section from the left-hand navigation. In this step you must connect your website to Adobe's Edge Network.

Select the box icon on the right for the development environment, and copy the standard version of the JavaScript code snippet.  

![Select box icon in Environments section.](/help/rtcdp/assets/partner-data/onsite-personalization/select-box-icon.png)

You must add this code snippet to the very top of your website. As a result, your website will make a call to the Adobe Edge Network to retrieve JavaScript logic that will be loaded and executed on the page. This allows for functionality like visitor ID generation, data collection, and real-time experience personalization to work.

### Personalization

#### Set up edge segmentation

Set up edge segmentation so the audience membership of your visitors is evaluated in real-time, as they visit your web property.  

Make sure to set up active-on-edge merge policy.

#### Integrate with Adobe Target or other custom personalization destination

You are now ready to integrate with a personalization engine, to display personalized content to your website or app visitors. 

## Limitations and troubleshooting {#limitations-and-troubleshooting}

Note the following limitations as you explore the use case described on this page:

* If you select to use Partner IDs, be aware that these IDs are not used when building your [identity graph](/help/identity-service/ui/identity-graph-viewer.md). 

## Other use cases achieved through partner data support {#other-use-cases}

Explore further use cases enabled through partner data support in Real-Time CDP:

* [Supplement first-party profiles with attributes from trusted data partners](/help/rtcdp/partner-data/supplement-first-party-profiles.md) to improve your data foundation and gain new insights into your customer base and gain better audience optimization.
* Use third party data support in Real-Time CDP to [expand your profile base with prospect profiles from data partners and engage with them to acquire or reach new customers](/help/rtcdp/partner-data/prospecting.md).
* (**Coming soon**) [!BADGE Beta]{type=Informative} **Expanded activation** using Partner IDs to publishing ecosystems that do not accept PII or hashed PII.