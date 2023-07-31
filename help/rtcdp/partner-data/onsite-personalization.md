---
title: Use partner-provided attributes to deliver personalized onsite experiences
description: Learn how to use partner-provided attributes to deliver personalized onsite experiences to your visitors.
---
# Use partner-provided attributes to deliver personalized onsite experiences 

Learn how to use partner-provided attributes to deliver personalized experiences to your web property visitors.

![Use partner-provided attributes to deliver personalized experiences to your visitors.](/help/rtcdp/assets/partner-data/onsite-personalization/onsite-personalization-steps.png)

## Industry example {#industry-example}

As an example of how this use case might be implemented and a challenge that it solves, consider that your company is a home improvement brand and has low customer authentication rates. Yet, you still want to deliver personalized experiences to your unauthenticated visitors on their first visit to your website. 

By leveraging valuable signals from a data partner, such as census and recent home sale data, the brand can meaningfully personalize browsing sessions on a website or app. For instance, it might want to use copy that appeals to people who have moved recently and and offer a discount on popular DIY products.

## Prerequisites and planning {#prerequisites-and-planning}

As you consider using partner-provided attributes to deliver personalized experiences to your authenticated and unauthenticated visitors, consider the following prerequisites in your planning process:

* What inputs are expected by the vendor so they can layer on additional attributes?
* To what extent are you comfortable delivering personalization in different channels and for different use cases based on probabilistically derived attributes vs. deterministically confirmed attributes?
* How should the experience for a pre-authenticated but recognized visitor change when they authenticate?

### UI functionality, Platform components, and Experience Cloud products that you will use {#ui-functionality-and-elements}

To successfully implement this use case, you must use multiple areas of Real-Time CDP and other Experience Cloud solutions. Make sure that you have the necessary [attribute-based access control permissions](/help/access-control/abac/overview.md) for all these areas or ask your system administrator to grant you the necessary permissions. 

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

![Use partner-provided attributes to deliver personalized experiences to your visitors.](/help/rtcdp/assets/partner-data/onsite-personalization/onsite-personalization-steps.png)

1. As a **customer**, you license from the **data partner** the ability to fetch insights in real-time on otherwise anonymous website visitors.
2. As a **customer**, you deploy client-side libraries on your properties to call **partner** APIs and you configure WebSDK or Mobile SDK to send partner-provided signals to Real-Time CDP.
3. When browsing your website or app, the **visitor** is probabilistically recognized by the **partner**, who returns attributes along with an ID.
4. Real-Time CDP runs edge segmentation to evaluate incoming event hits and persists results against the [ECID identifier](https://experienceleague.adobe.com/docs/id-service/using/home.html?lang=en).
5. Adobe Target uses edge segmentation output to render the experience back to the **visitor** for in-session personalization.
6. The event is persisted in its entirety for downstream workflows like analysis and retargeting.

## How to achieve the use case: Step-by-step instructions {#step-by-step-instructions}

Read through the sections below which include links to further documentation, to complete each of the steps in the high-level overview above.

### Data management - Create a new identity namespace, schema, and dataset to manage data attributes {#data-management}

In preparation for achieving the use case to personalize unauthenticated visitors' experience, you must first set up the data management stucture in Real-Time CDP in order to receive the incoming real-time event and audience qualification data.

#### Create Partner ID identity namespace

First, you need to create a partner ID identity namespace. Navigate to **[!UICONTROL Customer]** > **[!UICONTROL Identities]** in the left rail and then select **[!UICONTROL Create identity namespace]** in the upper right corner of the screen.

![Create partner ID identity namespace](/help/rtcdp/assets/partner-data/onsite-personalization/create-identity-namespace.png)

Read more about how to [create a partner ID identity namespace](/help/rtcdp/partner-data/prospecting.md#create-partner-id-namespace).

#### Create a schema

Next, create an **[!UICONTROL Experience Event]** schema to hold the time-series data that you will later be collecting from your web properties. Read abut how to [create a schema using the Experience Platform UI](/help/xdm/ui/resources/schemas.md#create) and make sure to use **[!UICONTROL XDM ExperienceEvent]** as the base class for the schema. 

![Create Experience Event schema.](/help/rtcdp/assets/partner-data/onsite-personalization/create-experience-event-schema.png)

As you create your schema and [add field groups to it](/help/xdm/ui/resources/schemas.md#add-field-groups) from the set of available groups, consider adding the following two into your schema, in addition to others which are applicable to your digital property and data collection practices. This will ensure that identity and web visit information from the visitor are captured in the data schema. 

* [Visit Web Page](/help/xdm/field-groups/event/web-details.md)
* [Identity Map](/help/xdm/field-groups/profile/identitymap.md)

Additionally, create or re-use an existing field group to capture partner provided insights about the visitor and add it to your schema. Read how to [create a field group](/help/xdm/ui/resources/field-groups.md) and how to [add fields](/help/xdm/ui/resources/field-groups.md) to the field group. For instance, if you are expecting to personalize against partner provided insights like age range, employment status, monthly spending power, or buying behaviors, have your field group include appropriate fields.

Assuming that the data partner provides a stable identifier for the visitor and you'd like to bring that into Real-Time CDP, be sure to have an appropriately named field in your custom field group, and mark it as an identity in the identity namespace you created earlier. Remember also to [enable the schema to be included in Profile](help/xdm/ui/resources/schemas.md#profile).

#### Create a dataset

Next, you must create a dataset to hold the time-series data that you collect from your web property visitors and that you will use for onsite personalization.

Read the tutorial on [how to create a dataset](/help/catalog/datasets/user-guide.md#create) and remember to select the option to create the dataset from a schema. Create the dataset based on the schema that you created in the previous step.

Note that similar to the step when creating a schema, you need to enable the dataset to be included in the [!UICONTROL Real-Time Customer Profile]. For more information about enabling the dataset for use in [!UICONTROL Real-Time Customer Profile], read the [create schema tutorial.](/help/xdm/tutorials/create-schema-ui.md#profile) 

### Implement event data collection on your web property

After setting up your data management configuration, you now need to implement real-time event [data collection](/help/collection/home.md) on your web property. You need to instrument your property with the Adobe data collection library - [!UICONTROL Web SDK] - to collect real-time event calls and send them back to Real-Time CDP. This item consists of a few separate tasks across a few data collection components.

>[!IMPORTANT]
>
>In order to retrieve partner-provided attributes, you must also *integrate your web property with partner APIs or other methods to call and retrieve attributes from data partners in real-time*. Please discuss this aspect with your partner of choice as it is not subject of this tutorial.

First, use the app switcher to navigate to the **[!UICONTROL Data Collection]** section. 

>[!TIP]
>
>Contact your system administrator to ask for access if you are not able to see [!UICONTROL Data Collection] in the app switcher.

![App switcher to get to Data Collection section.](/help/rtcdp/assets/partner-data/onsite-personalization/app-switcher-data-collection.png)

The **[!UICONTROL Data Collection]** section of the UI looks similar to the image below.

![Data collection section of the UI.](/help/rtcdp/assets/partner-data/onsite-personalization/data-collection-home.png)

#### Create datastream

As a first step in the data collection section, [create a new datastream](/help/datastreams/configure.md). The datastream is the foundation of how data is collected and correctly routed to the right Adobe app, in this case Experience Platform.

As you create the datastream, in the **[!UICONTROL Event schema]** field, select the schema that you created previously. 

![Event schema selector highlighted when configuring a new datastream.](/help/rtcdp/assets/partner-data/onsite-personalization/event-schema-selector-datastream.png)


[Select the event dataset](/help/datastreams/configure.md#aep) that you created earlier from the dropdown, check the boxes next to **[!UICONTROL Edge Segmentation]** and **[!UICONTROL Personalization Destinations]**, and select **[!UICONTROL Save]**. 

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

Note that this tutorial indicates how you can instrument your website with WebSDK. You can also use [Mobile SDK](https://developer.adobe.com/client-sdks/documentation/) on your app to personalize the experience to your app visitors.

![View of the Web SDK extension in the extensions catalog.](/help/rtcdp/assets/partner-data/onsite-personalization/web-sdk-extension.png)

Navigate down to the **[!UICONTROL Datastreams]** section and provide information on the Experience Platform sandbox that you are using. Select the appropriate sandbox and the datastream created in the previous steps from the next dropdown. You can choose the same sandbox and datastream values for all other environments. Leave the other settings unchanged and select **[!UICONTROL Save]**. 

Get complete information on [how to install WebSDK](https://experienceleague.adobe.com/docs/platform-learn/implement-web-sdk/tags-configuration/install-web-sdk.html).

#### Install ID Service extension

Use the [Experience Cloud ID Service extension](/help/tags/extensions/client/id-service/overview.md) to create a unique device-based first-party identity for visitors across all Experience Cloud solutions. Search for **[!UICONTROL ID Service]** in the extension catalog, and install it. Keep all the default settings when installing the extension.
  
![View of the ID Service extension in the extensions catalog.](/help/rtcdp/assets/partner-data/onsite-personalization/id-service-extension.png)

#### Set up environments

Next, head on over to the **[!UICONTROL Environments]** section from the left-hand navigation. In this step you must connect your website to the Adobe Edge Network to retrieve and deliver visitor information in real-time.

Select the box icon on the right for the development environment, and copy the standard version of the JavaScript code snippet that appears in a modal window.  

![Select box icon in Environments section.](/help/rtcdp/assets/partner-data/onsite-personalization/select-box-icon.png)

You must add this code snippet to the very top of your website. As a result, your website will make a call to the Adobe Edge Network to retrieve JavaScript logic that will be loaded and executed on the page. This allows for functionality like visitor ID generation, data collection, and real-time experience personalization to work.

#### Set up Data Elements

Data elements are the building blocks for your data dictionary (or data map). A single data element is a variable whose value can be mapped to query strings, URLs, cookie values, JavaScript variables, and so on. Read more about [data elements](/help/tags/ui/managing-resources/data-elements.md).

For the purpose of this use case, you must set up two data elements.

First, set up a `partnerData` element. Navigate to the **[!UICONTROL Data Elements]** section and select **[!UICONTROL Create New Data Element]**.

![Create a new data element.](/help/rtcdp/assets/partner-data/onsite-personalization/create-data-element.gif)

Name the data element `partnerData`, leave the Extension value as [!UICONTROL Core], and set **[!UICONTROL Data Element Type]** as **[!UICONTROL JavaScript Variable]**. Enter `partnerData` in the field titled **[!UICONTROL JavaScript variable name]** and select **[!UICONTROL Save]**. 

![Selections for the partnerData data element.](/help/rtcdp/assets/partner-data/onsite-personalization/create-partnerdata-data-element.png)

To set up the second data element, name the new variable `pageVisit`, set the **[!UICONTROL Extension]** to **[!UICONTROL Adobe Experience Platform]** and choose **[!UICONTROL XDM Object]** as the data type. 

![Selections for the pageVisit data element.](/help/rtcdp/assets/partner-data/onsite-personalization/page-visit-data-element.png)

From the schema, select the third-party attributes that correspond to the values that you are expecting from the data partner. Then, select the radio button titled **[!UICONTROL Provide entire object]**. Select the icon that looks like a database and choose the `partnerData` data element that you created previously.

#### Set up rules

In the **[!UICONTROL Rules]** section, you can configure your website to 
send a personalization request to Adobe with the attributes loaded into the data elements that you just created. Read more about [creating rules](/help/tags/ui/managing-resources/rules.md).

Select **[!UICONTROL Create new Rule]**. Name this rule **[!UICONTROL Personalize]** and select the + sign next to Events. Select **[!UICONTROL Page Bottom]** as the event and save.

![Selections for the event type part of a rule.](/help/rtcdp/assets/partner-data/onsite-personalization/add-events-rule.png)

Select the + sign next to Actions. Update the Extension to **[!UICONTROL Adobe Experience Platform Web SDK]** and set **[!UICONTROL Action Type]** to **[!UICONTROL Send event]**.

![Selections for the action type part of a rule.](/help/rtcdp/assets/partner-data/onsite-personalization/add-action-rule.png)

From the Type dropdown selector on the right, select `web.webpagedetails.pageViews` as the event type.  

![Select event type.](/help/rtcdp/assets/partner-data/onsite-personalization/add-pageview-type-rule.png)

Select the database icon next to XDM data and select the `pageVisit` data element.

Scroll down and be sure to check the box titled **[!UICONTROL Render visual personalization decisions]**. This is important to allow experiences delivered via Adobe Target or other similar products to be rendered visually on the web page. Select **[!UICONTROL Keep Changes]**, and then **[!UICONTROL Save]** the rule.
  
![Select Render visual personalization decisions checkbox.](/help/rtcdp/assets/partner-data/onsite-personalization/render-visual-personalization-toggle.png)

#### Set up publishing workflow

To deploy this configuration to the webpage, the next step is to build a library which includes the resources that you just created. Read more about [setting up a publishing flow](/help/tags/ui/publishing/publishing-flow.md).

Select **[!UICONTROL Publishing Flow]** and then **[!UICONTROL Add Library]**.

Select **[!UICONTROL Add all Changed Resources]**, give the library a name, set the environment to **[!UICONTROL Development]** and select **[!UICONTROL Save & Build to Development]**.

![Create library and deploy to development environment](/help/rtcdp/assets/partner-data/onsite-personalization/create-publishing-workflow.gif)

#### Test your website

At this point, your website should be fully instrumented with Web SDK. To test that data collection is working as expected, you can navigate to your website and use your browser's developer tools to inspect network traffic.

Input `interact` in the search box, refresh the page, and you should see network calls from your website to the Adobe Edge network populating.

![View of network events populating in developer tools.](/help/rtcdp/assets/partner-data/onsite-personalization/events-filtered.png)

### Personalization

You are now ready to create and activate audiences for personalization.

#### Set up edge segmentation

Set up [edge segmentation](/help/segmentation/ui/edge-segmentation.md) so the audience membership of your visitors is evaluated in real-time, as they visit your web property.  

Make sure to also set up and active-on-edge merge policy for the edge audiences 

#### Integrate with Adobe Target or other custom personalization destination

You are now ready to integrate with a personalization engine, to display personalized content to your website or app visitors. Adobe recommends using the [Adobe Target destination](/help/destinations/catalog/personalization/adobe-target-connection.md) for this purpose. 

>[!IMPORTANT]
>
>Read the tutorial on [activating audiences to edge personalization destinations](/help/destinations/ui/activate-edge-personalization-destinations.md) for a complete view of steps necessary to activate your audiences.

## Limitations and troubleshooting {#limitations-and-troubleshooting}

Note the following limitations as you explore the use case described on this page:

* If you select to use Partner IDs, be aware that these IDs are not used when building your [identity graph](/help/identity-service/ui/identity-graph-viewer.md). 

## Other use cases achieved through partner data support {#other-use-cases}

Explore further use cases enabled through partner data support in Real-Time CDP:

* [Supplement first-party profiles with attributes from trusted data partners](/help/rtcdp/partner-data/supplement-first-party-profiles.md) to improve your data foundation and gain new insights into your customer base and gain better audience optimization.
* Use third party data support in Real-Time CDP to [expand your profile base with prospect profiles from data partners and engage with them to acquire or reach new customers](/help/rtcdp/partner-data/prospecting.md).
* (**Coming soon**) [!BADGE Beta]{type=Informative} **Expanded activation** using Partner IDs to publishing ecosystems that do not accept PII or hashed PII.