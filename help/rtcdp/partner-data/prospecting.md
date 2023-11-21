---
title: Engage and acquire new customers without dependency on third-party cookies
description: Learn how to engage and acquire new customers through prospecting use cases, without relying on third-party cookies.
exl-id: b9e7b3af-2a13-4904-bd12-e3ed05a1988e
---
# Engage and acquire new customers without dependency on third-party cookies

>[!AVAILABILITY]
>
>* This functionality is available to customers who have licensed Real-Time CDP (App Service), Adobe Experience Platform Activation, Real-Time CDP, Real-Time CDP Prime, Real-Time CDP Ultimate. Read more about these packages in the [product descriptions](https://helpx.adobe.com/legal/product-descriptions.html) and contact your Adobe representative for more information. 

Use third party data support in Real-Time CDP to expand your profile base with prospect profiles from data partners and engage with them to acquire or reach new customers.

![Customer prospecting use case high-level visual overview.](/help/rtcdp/assets/partner-data/prospecting/prospecting-use-case-overview.png)

## Why consider this use case {#why-this-use-case}

Brands are simultaneously facing daunting challenges of responsibly executing top-of-the-funnel customer acquisition use-cases without dependency on third-party cookies, limited budgets, and higher demand on transparency and return on ad-spend. 

Adobe Real-Time Customer Data Platform can help brands safely transition their Data Management Platform (DMP) supported use-cases to cookie-less alternatives and do so in a way that brings forward the full sophistication and power of self-serve segmentation, audience curation, and activation into a single system. All without compromising on Adobe's unwavering focus on responsible use of data via a patented data governance and consent framework.

For example, follow the steps described in this use case when you need to run a campaign to attract prospects to become users or known customers.

## Prerequisites and planning {#prerequisites-and-planning}

As you consider reaching out to and acquiring new customers, consider the following prerequisites in your planning process:

* What is the cadence with which you expect partner-provided profiles to be ingested into Real-Time CDP and refreshed?
* What identities do your downstream destinations require?
* Ensure that the identifiers ingested are actionable downstream
* Is the partner data that you are ingesting tied to a widely accepted durable identifier, such as Personal Identifiable Information (PII), hashed PII, or a partner identifier?
* What data usage policies do you need be aware of from the partner perspective and from your own legal, privacy, or compliance team?

## How to achieve the use case: high-level overview {#achieve-the-use-case-high-level}

Before you expand Real-Time CDP to engage and acquire new customers, make sure to use Real-Time CDP to build a robust foundation for your first-part data. The workflows to achieve this use case are similar to workflows to engage with your known customers.

![Customer prospecting use case high-level visual overview.](/help/rtcdp/assets/partner-data/prospecting/prospecting-use-case-steps.png)

1. As a **customer**, you license prospect profiles from one or more **data partners** to help drive top of the funnel customer acquisition.
2. As a **customer**, you extend your profile data and governance model to ingest the **partner**-provided list of prospect profiles.
3. As a **customer**, you load prospect profiles into Real-Time CDP and build governance policies to ensure responsible use.
4. As a **customer**, you build focused audiences from the list of prospect profiles.
5. As a **customer**, you activate prospect audiences to destinations which are accepting of the identities available in your prospect list.
6. If needed, work with the **data partner** for last-mile activation of audiences to desired paid-media destinations.
 
## Video walkthrough {#video-walkthrough}

View the video tutorial below for a walkthrough of how to reach and engage prospect audiences:

>[!VIDEO](https://video.tv.adobe.com/v/3423071/?learn=on)

## How to achieve the use case: Step-by-step instructions {#step-by-step-instructions}

Read through the sections below which include links to further documentation, to complete each of the steps in the high-level overview above.

### UI functionality and elements that you will use {#ui-functionality-and-elements}

As you complete the steps to implement the use case, you will make use of the following Real-Time CDP functionality and UI elements (listed in the order in which you will use them). Make sure that you have the necessary attribute-based access control permissions for all these areas or ask your system administrator to grant you the necessary permissions. 

* [Identities](/help/identity-service/namespaces.md)
* [Schemas](/help/xdm/home.md)
* [Data usage labels](/help/data-governance/labels/overview.md)
* [Datasets](/help/catalog/datasets/overview.md)
* [Sources](/help/sources/home.md)
* [Prospect profiles](/help/profile/ui/prospect-profile.md)
* [Prospect audiences](/help/segmentation/ui/prospect-audience.md)
* [Destinations](/help/destinations/home.md)

### License third-party profile details from the partner {#license-profiles-from-partner}

This step is covered in the [prerequisites](#prerequisites-and-planning) and Adobe assumes that you have the right contractual agreements in place with trusted data vendors to ingest prospect profiles provided by the data partner.

### Extend your profile data and governance model to accommodate partner-provided prospect profiles {#extend-governance-model}

In preparation to receive prospect profiles from your data partner, you must extend your data management framework in Real-Time CDP to accommodate this new profile type. 

The identity, data management, and governance components that you will be using are:

* A new **[!UICONTROL Partner ID]** identity type for the partner-provided profiles
* A new **[!UICONTROL XDM Individual Prospect Profile]** XDM class
* **(Documentation coming soon)** Field groups tailored to partner data support
* **(Documentation coming soon)** Third party labels which you will add on the attributes coming in from partners

#### Create a Partner ID identity namespace {#create-partner-id-namespace}

Begin by creating a new identity type for the profiles that you will be receiving from the partner. To do this, in the Identity section, you must create a new identity namespace of the type **[!UICONTROL Partner ID]**. 

![Create a new Partner ID identity namespace.](/help/rtcdp/assets/partner-data/prospecting/create-partner-identity-namespace.png)

* Read more about Partner ID namespaces in the [identity types section](/help/identity-service/namespaces.md).
* Read about [how to define identity fields](/help/xdm/ui/fields/identity.md) in the Experience Platform user interface.

#### Create a new schema with the **[!UICONTROL XDM Individual Prospect Profile]** class

Next, in **[!UICONTROL Data Management]** > **[!UICONTROL Schemas]**, create a new schema and assign it the **[!UICONTROL XDM Individual Prospect Profile]** class. 

![Search for XDM Individual Prospect Profile class in the XDM schema builder.](/help/rtcdp/assets/partner-data/prospecting/xdm-individual-prospect-class.png)

Read how to [create and edit schemas in the UI](/help/xdm/ui/resources/schemas.md) and get complete information about the XDM Individual Prospect Profile class (link upcoming).

The **[!UICONTROL XDM Individual Prospect Profile]** class comes pre-configured with the fields shown below. To enrich your schema with partner-provided attributes for the prospect profiles, you can either create a new field group with the attributes that you expect and add it to the schema, or you can use one of the pre-configured field groups provided by Adobe.

![Preconfigured fields for the XDM Individual Prospect Profile class.](/help/rtcdp/assets/partner-data/prospecting/preconfigured-fields-individual-prospect-class.png)

Next, you must select the partnerID identity that you created earlier as the primary identity for the schema. Profile records must carry a primary identifier. This step is required to make sure that prospect data can be loaded into the profile store and made available for segmentation and activation.

>[!AVAILABILITY]
>
>Prospect profiles are automatically restricted to only use ID namespaces of the Partner ID type. This is by design and ensures clean separation between your first-party and prospect profiles.

![Select previously configured Partner ID as primary identity in the schema.](/help/rtcdp/assets/partner-data/prospecting/select-partner-id-as-primary-identity.gif)

Note that the schema is not yet enabled for profile. Toggle the profile button to enable this schema for inclusion in the profile service. For more information about enabling the schema for use in Real-Time Customer Profile, read the [create schema tutorial.](/help/xdm/tutorials/create-schema-ui.md#profile) 

![Enable schema for profile.](/help/rtcdp/assets/partner-data/prospecting/enable-schema-for-profile.png)

#### Add the third-party data governance label to all fields in the schema

Consider adding third-party data governance labels to all of the fields that make up the schema. This is important in order to ensure responsible use of third-party data and minimize the risk of data leakage. Find more information about [third-party data governance labels](../../data-governance/labels/reference.md#partner-ecosystem-labels).

To do this, follow the steps below: 

1. Navigate to the schema you created and select the **[!UICONTROL Labels]** tab.
2. Select all the fields in this schema using the checkbox button at the very top and then click the pencil icon on the right to apply data governance labels to this schema. 
3. Select the **[!UICONTROL Partner Ecosystem]** Label from the categories on the left. 
4. Choose the label called **[!UICONTROL Third Party]** and select **[!UICONTROL Save]**.
5. Notice that all the fields in the schema now carry the label you selected in the previous step.   

>[!SUCCESS]
>
>Your schema is now ready to use and you can proceed to the next step to ingest prospect data from your data partner.

Also in this step, think about how your data governance model changes as you expand your data management strategy to include third-party data provided by the partner. Explore the considerations in the documentation links below: 

* (**Coming soon**) Keep third-party data in a separate dataset so that deleting it and undoing integrations is easy.
* (**Coming soon**) Use the [dataset expiration](/help/hygiene/ui/dataset-expiration.md) functionality on the dataset for clients who purchased the data hygiene add-on.
* (**Coming soon**) Exercise caution when creating derived datasets which pull in third-party data, because once mixed together the only solution to remove the third-party data is to delete the whole derived dataset.

### Load the list of prospect profiles and inspect the prospect profiles view 

After you have your data model prepared for managing prospect profiles, it is time to ingest data.

#### Create a dataset and load sample prospect data

To load some sample data and populate prospect profiles, create a dataset and upload a file that you received from the data partner. Complete the steps below:

1. Navigate to **[!UICONTROL Data Management]** > **[!UICONTROL Datasets]** and select **[!UICONTROL Create dataset]**.
2. Select Create dataset from schema
3. Select the schema that you created in a previous step
4. Give your dataset a name and optionally a description.
5. Select **[!UICONTROL Finish]**.

![A recording of the steps to create a dataset for prospect profiles.](/help/rtcdp/assets/partner-data/prospecting/create-dataset-for-prospect-profiles.gif)

Note that similar to the step to create a schema, you need to enable the dataset to be included in the Real-Time Customer Profile. For more information about enabling the dataset for use in Real-Time Customer Profile, read the [create schema tutorial.](/help/xdm/tutorials/create-schema-ui.md#profile) 

![Enable dataset for profile.](/help/rtcdp/assets/partner-data/prospecting/enable-dataset-for-profile.png)

To load a file that you received from the partner into the dataset, select the dataset, scroll down in the right rail, and select **[!UICONTROL Add data]**. You can drag drop your file or select **[!UICONTROL Choose files]** to navigate to the file location and select it. 

![Add file to dataset.](/help/rtcdp/assets/partner-data/prospecting/add-file-to-dataset.png)

After loading the list of profiles from the data partner into Real-Time CDP, proceed to the [Inspect the loaded prospect profiles section](#inspect-profiles) to check that the prospect profiles are populating in the UI.

#### Ingest prospect data through source connectors

You can set up recurrent file imports to ingest data from the partner through a source connector and bring the list of prospect profiles into Real-Time CDP.

Some recommended source connectors for this purpose are listed below but note that any file-based ingestion method into Real-Time CDP works for your purpose. 

* [Amazon S3](/help/sources/connectors/cloud-storage/s3.md)
* [SFTP](/help/sources/connectors/cloud-storage/sftp.md)

After loading the list of profiles from the data partner into Real-Time CDP, proceed to the next section to check that the prospect profiles are populating in the UI.

#### Inspect the loaded prospect profiles {#inspect-profiles}

To see the list of prospect profiles, navigate to **[!UICONTROL Prospects]** > **[!UICONTROL Profiles]** in the left rail.

Note that it might take up to two hours for the prospect profiles you just loaded into Real-Time CDP to show in the **[!UICONTROL Browse]** view of the Prospect Profile screen. If the page displays the message "There are no prospect profiles to browse right now", please try again after some time. After some wait, prospect profiles should start to show up in the **[!UICONTROL Browse]** view. 

>[!TIP]
>
>Note the presence of the **[!UICONTROL Identity Namespace]** column. If you're working with multiple data vendors, use this column to infer the origin of prospect profiles. 

![View of the prospect profiles loaded into Real-Time CDP.](/help/rtcdp/assets/partner-data/prospecting/prospect-profiles-view.png)

You can also select any prospect profile for further inspection, as shown below.

![View of how to inspect prospect profiles.](/help/rtcdp/assets/partner-data/prospecting/inspect-prospect-profile.gif)

Read more about [prospect profiles](/help/profile/ui/prospect-profile.md).

### Create prospect audiences {#create-prospect-audiences}

Use the segmentation functionality in Real-Time CDP to create audiences from your prospect profiles. Use desired segmentation rules to create tailored audiences. 

To get started and build audiences composed of prospect profiles, navigate to **[!UICONTROL Prospects]** > **[!UICONTROL Audiences]**.

![View of prospect audiences.](/help/rtcdp/assets/partner-data/prospecting/prospect-audiences.png)

Note that the audience building experience for prospect profiles differs from the experience to build audiences from your known, first party customers. This view is limited to: 

* Attributes from the prospect class that you created earlier. 
* Batch profile evaluation only. 
* Does not support building audiences based on time-series events. 

Read more about [prospect audiences](/help/segmentation/ui/prospect-audience.md).

### Activate prospect profiles to destinations {#activate-to-destinations}

Make use of the prospect audiences by exporting them to destinations. Currently, only certain cloud storage destinations support activation of prospect profiles. 

![Destinations which support prospect audiences.](/help/destinations/assets/ui/activate-prospect-audiences/data-types-filter.png)

[Read more](/help/destinations/ui/activate-prospect-audiences.md) about activating prospects to cloud storage destinations.

## Other use cases achieved through partner data support {#other-use-cases}

Explore further use cases enabled through partner data support in Real-Time CDP:

* [Supplement first-party profiles with attributes from trusted data partners](/help/rtcdp/partner-data/supplement-first-party-profiles.md) to improve your data foundation and gain new insights into your customer base and gain better audience optimization.
* [Personalize onsite experiences for unknown visitors using partner-aided visitor recognition](/help/rtcdp/partner-data/onsite-personalization.md) during the visit without the user authenticating or having prior history with your brand.
* [Expanded activation of prospect profiles and prospect audiences](/help/destinations/ui/activate-prospect-audiences.md) to select destinations.
