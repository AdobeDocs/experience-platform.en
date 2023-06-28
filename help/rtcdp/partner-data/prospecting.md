---
title: (Beta) Engage with new customers through prospecting use cases
description: Learn how to engage with new customers through prospecting use cases, enabled by the partner data support in Real-Time CDP.
hide: yes
hidefromtoc: yes
badgeBeta: label="Beta" type="informative" before-title="true"
---
# Engage with new customers through prospecting use cases

>[!AVAILABILITY]
>
>* This beta functionality is available to customers who have licensed Real-Time CDP (App Service), Adobe Experience Platform Activation, Real-time CDP, Real-Time CDP Prime, Real-Time CDP Ultimate. Read more about these packages in the [product descriptions](https://helpx.adobe.com/legal/product-descriptions.html) and contact your Adobe representative for more information. 

Use third party data support in Real-Time CDP to expand your profile base with prospect profiles from data partners and engage with them to acquire or reach new customers.

![Customer prospecting use case high-level visual overview.](/help/rtcdp/assets/partner-data/prospecting-use-case-overview.png)

## Prerequisites and planning {#prerequisites-and-planning}

As you consider reaching out to and acquiring new customers by using partner data support in Real-Time CDP, consider the following prerequisites in your planning process:

* What is the cadence with which you expect partner-provided profiles to be ingested into Real-Time CDP and refreshed?

## How to achieve the use case: high-level overview {#achieve-the-use-case-high-level}

![Customer prospecting use case high-level visual overview.](/help/rtcdp/assets/partner-data/prospecting-use-case-steps.png)

1. As a **customer**, you license prospect profiles from the **data partner**.
2. The **partner** builds a prospect list to your needs.
3. As a **customer**, you extend your profile data and governance model to ingest the **partner**-provided list of prospect profiles.
4. As a **customer**, you load the list of prospect profiles into Real-Time CDP.
5. As a **customer**, you build focused audiences from the list of prospect profiles.
6. As a **customer**, you activate segments to destinations which accept the Partner ID used for the profiles.
7. The **partner** activates the audiences exported to them to destinations in their ecosystem.
 
## How to achieve the use case: Step-by-step instructions {#step-by-step-instructions}

Read through the sections below which include links to further documentation, to complete each of the steps in the high-level overview above.

### UI functionality and elements that you will use

As you complete the steps to implement the use case, you will make use of the following Real-Time CDP functionality and UI elements (listed in the order in which you will use them). Make sure that you have the necessary attribute-based access control permissions for all these areas or ask your system administrator to grant you the necessary permissions. 

* [Identities](/help/identity-service/namespaces.md)
* [Schemas](/help/xdm/home.md)
* [Data usage labels](/https://experienceleague.adobe.com/docs/experience-platform/data-governance/labels/overview.html?lang=en)
* [Datasets](/help/catalog/datasets/overview.md)
* [Sources](/help/sources/home.md)
* Profiles (link to prospect profiles)
* Audiences (link to prospect audiences)
* [Destinations](/help/destinations/home.md)

### License third-party profile details from the partner {#license-profiles-from-partner}

This step is covered in the [prerequisites](#prerequisites-and-planning) and Adobe assumes that you have the right contractual agreements in place with trusted data vendors to ingest prospect profiles provided by the data partner.

### The partner prepares a list of prospect profiles for you {#partner-builds-prospect-list}

Add brief information for this step. 

### Extend your profile data and governance model to accommodate partner-provided prospect profiles {#extend-governance-model}

In preparation to receive prospect profiles from your data partner, you must extend your data management framework in Real-Time CDP to accommodate this new profile type. 

The identity, data management, and governance components that you will be using are:

* A new **[!UICONTROL Partner ID]** identity type for the partner-provided profiles
* A new **[!UICONTROL XDM Individual Prospect Profile]** XDM class
* **(Documentation coming soon)** Field groups tailored to partner data support
* **(Documentation coming soon)** Third party labels which you will add on the attributes coming in from partners

#### Create a Partner ID identity namespace

Begin by creating a new identity type for the profiles that you will be receiving from the partner. To do this, in the Identity section, you must create a new identity namespace of the type **[!UICONTROL Partner ID]**. 

![Create a new Partner ID identity namespace.](/help/rtcdp/assets/partner-data/create-partner-identity-namespace.png)

* Read more about Partner ID namespaces in the [identity types section](/help/identity-service/namespaces.md).
* Read about [how to define identity fields](/help/xdm/ui/fields/identity.md) in the Experience Platform user interface.

#### Create a new schema with the **[!UICONTROL XDM Individual Prospect Profile]** class

Next, in **[!UICONTROL Data Management]** > **[!UICONTROL Schemas]**, create a new schema and assign it the **[!UICONTROL XDM Individual Prospect Profile]** class. 

![Search for XDM Individual Prospect Profile class in the XDM schema builder.](/help/rtcdp/assets/partner-data/xdm-individual-prospect-class.png)

Read how to [create and edit schemas in the UI](/help/xdm/ui/resources/schemas.md) and get complete information about the XDM Individual Prospect Profile class (add link here to material by Jordan).

The **[!UICONTROL XDM Individual Prospect Profile]** class comes pre-configured with the fields shown below. To enrich your schema with partner-provided attributes for the prospect profiles, you can either create a new field group with the attributes that you expect and add it to the schema, or you can use one of the pre-configured field groups provided by Adobe. (link to docs by Jordan about field groups).

![Preconfigured fields for the XDM Individual Prospect Profile class.](/help/rtcdp/assets/partner-data/preconfigured-fields-individual-prospect-class.png)

Next, you must select the partnerID identity that you created earlier as the primary identity for the schema. (Why?). 

![Select previously configured Partner ID as primary identity in the schema.](/help/rtcdp/assets/partner-data/select-partner-id-as-primary-identity.gif)

Note that the schema is not yet enabled for profile. Toggle the profile button to enable this schema for inclusion in the profile service. For more information about enabling the schema for use in Real-Time Customer Profile, read the [create schema tutorial.](/help/xdm/tutorials/create-schema-ui.md#profile) 

![Enable schema for profile.](/help/rtcdp/assets/partner-data/enable-schema-for-profile.png)

#### Add the third-party data governance label to all fields in the schema

You now need to the third-party data governance label to all of the fields that make up the schema. Add the third-party label so that {brief reason}. Find more information about third-party data governance labels (add link to docs by Jordan)

To do this, follow the steps below: 

1. Navigate to the schema you created and select the **[!UICONTROL Labels]** tab.
2. Select all the fields in this schema using the checkbox button at the very top and then click the pencil icon on the right to apply data governance labels to this schema. 
3. Select the **[!UICONTROL Partner Ecosystem]** Label from the categories on the left. 
4. Choose the label called **[!UICONTROL Third Party]** and select Save.
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

![A recording of the steps to create a dataset for prospect profiles.](/help/rtcdp/assets/partner-data/create-dataset-for-prospect-profiles.gif)

Note that similar to the step to create a schema, you need to enable the dataset to be included in the Real-Time Customer Profile. For more information about enabling the dataset for use in Real-Time Customer Profile, read the [create schema tutorial.](/help/xdm/tutorials/create-schema-ui.md#profile) 

![Enable dataset for profile.](/help/rtcdp/assets/partner-data/enable-dataset-for-profile.png)

To load a file that you received from the partner into the dataset, select the dataset, scroll down in the right rail, and select **[!UICONTROL Add data]**. You can drag drop your file or select **[!UICONTROL Choose files]** to navigate to the file location and select it. 

![Add file to dataset.](/help/rtcdp/assets/partner-data/add-file-to-dataset.png)

After loading the list of profiles from the data partner into Real-Time CDP, proceed to the [Inspect the loaded prospect profiles section](#inspect-profiles) to check that the prospect profiles are populating in the UI.

#### Ingest prospect data through source connectors

Ingest data from the partner through a source connector to bring the list of prospect profiles into Real-Time CDP.

Some recommended source connectors for this purpose might be: 

* [Amazon S3](/help/sources/connectors/cloud-storage/s3.md)
* [SFTP](/help/sources/connectors/cloud-storage/sftp.md)

After loading the list of profiles from the data partner into Real-Time CDP, proceed to the next section to check that the prospect profiles are populating in the UI.

#### Inspect the loaded prospect profiles {#inspect-profiles}

To see the list of prospect profiles, navigate to **[!UICONTROL Prospects]** > **[!UICONTROL Profiles]** in the left rail.

It might take up to two hours for the prospect profiles you just loaded into Real-Time CDP to show in the Prospect Profile Browse view. If the page says "There are no prospect profiles to browse right now", please try again after some time. After some wait, prospect profiles should start to show up in the browse view. 

>[!TIP]
>
>Note the presence of the **[!UICONTROL Identity Namespace]** column. If you're working with multiple data vendors, use this column to infer the origin of prospect profiles. 

![View of the prospect profiles loaded into Real-Time CDP.](/help/rtcdp/assets/partner-data/prospect-profiles-view.png)

You can also select any prospect profile for further inspection, as shown below.

![View of how to inspect prospect profiles.](/help/rtcdp/assets/partner-data/inspect-prospect-profile.gif)

(**Coming soon**) Read more about prospect profiles.

### Create prospect audiences {#create-prospect-audiences}

Use the segmentation functionality in Real-Time CDP to create audiences from your prospect profiles. Use desired segmentation rules to create tailored audiences. 

To get started and build audiences composed of prospect profiles, navigate to **[!UICONTROL Prospects]** > **[!UICONTROL Audiences]**.

![View of prospect audiences.](/help/rtcdp/assets/partner-data/prospect-audiences.png)

Note that the audience building experience for prospect profiles differs from the experience to build audiences from your known, first party customers. This view is limited to: 

* Attributes from the prospect class that you created earlier. 
* Batch profile evaluation only. 
* Does not support building audiences based on time-series events. 

(**Coming soon**) Read more about prospect audiences.

### Activate prospect profiles to destinations

Make use of the prospect audiences by exporting them to destinations, so that the data partner can then further activate them to desired platforms, for your messaging to reach the prospected audiences. 

## Other use cases achieved through partner data support {#other-use-cases}

Explore further use cases enabled through partner data support in Real-Time CDP:

* [!BADGE Beta]{type=Informative} [Supplement first-party profiles with attributes from trusted data partners](/help/rtcdp/partner-data/supplement-first-party-profiles.md) to improve your data foundation and gain new insights into your customer base and gain better audience optimization.
* (**Coming soon**) [!BADGE Beta]{type=Informative} **Leverage partner aided recognition** for personalizing on-site experiences during the visit, and for off-site retargeting post visit, without the user authenticating or having prior history with your brand.