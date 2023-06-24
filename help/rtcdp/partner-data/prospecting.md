---
title: (Beta) Accomplish customer prospecting use cases through partner data support
description: Learn how to accomplish customer prospecting use cases through partner data support.
hide: yes
hidefromtoc: yes
badgeBeta: label="Beta" type="informative" before-title="true"
---
# Accomplish customer prospecting use cases through partner data support

>[!AVAILABILITY]
>
>* This beta functionality is available to customers who have licensed Real-Time CDP (App Service), Adobe Experience Platform Activation, Real-time CDP, Real-Time CDP Prime, Real-Time CDP Ultimate. Read more about these packages in the [product descriptions](https://helpx.adobe.com/legal/product-descriptions.html) and contact your Adobe representative for more information. 

Use third party data support in Real-Time CDP to accomplish prospecting use cases. Expand your profile base with prospect profiles from data partners and engage with them to acquire or reach new customers.

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

### License attributes from the partner {#license-attributes-from-partner}

This step is covered in the [prerequisites](#prerequisites-and-planning) and Adobe assumes that you have the right contractual agreements in place with trusted data vendors to augment your first-party profiles.

### Discuss with partner which prospect profiles you need {#partner-builds-prospect-list}

Add brief information for this step. 

### Extend your profile data and governance model to accommodate partner-provided prospect profiles {#extend-governance-model}

At this point, you are extending your data management framework in Real-Time CDP to accommodate partner-provided attributes. 

The data governance components that you will be using are: 

* **[!UICONTROL XDM Individual Prospect Profile]** class
* field groups
* third party labels

Begin by creating a new schema and assign it the **[!UICONTROL XDM Individual Prospect Profile]** class. 

![XDM Individual Prospect Profile class](/help/rtcdp/assets/partner-data/xdm-individual-prospect-class.png)

Read how to [create and edit schemas in the UI](/help/xdm/ui/resources/schemas.md) and get complete information about the XDM Individual Prospect Profile class (add link here to material by Jordan).

To include partner-provided attributes in a schema, you can either create a new field group with the attributes that you expect and add it to the schema, or you can use one of the pre-configured field groups provided by Adobe. (link to docs by Jordan about field groups).

<!--

Read the documentation pages below for more information:

* [The basics of schema composition](/help/xdm/schema/composition.md)
* [Overview of the [!UICONTROL XDM Individual Profile] class](/help/xdm/classes/individual-profile.md)
* [Create and edit schemas in the UI](/help/xdm/ui/resources/schemas.md)
* [Create and edit schema field groups in the UI](/help/xdm/ui/resources/field-groups.md) 

Commenting out links for now
* [Create and edit schemas using the API](/help/xdm/api/schemas.md#create)
* [Update an existing schema to add field groups using the API](/help/xdm/api/schemas.md#patch)
* Link to new field group documentation page when it exists

-->

Also in this step, think about how your data governance model changes as you expand your data management strategy to include third-party data provided by the partner. Explore the considerations in the documentation links below: 

* (**Coming soon**) Keep third-party data in a separate dataset so that deleting it and undoing integrations is easy.
* (**Coming soon**) Use the [dataset expiration](/help/hygiene/ui/dataset-expiration.md) functionality on the dataset for clients who purchased the data hygiene add-on.
* (**Coming soon**) Exercise caution when creating derived datasets which pull in third-party data, because once mixed together the only solution to remove the third-party data is to delete the whole derived dataset.

>[!TIP]
>
>If you choose to supplement your customer profiles with a person-based identifier from the data vendor, you can create a new identity type of the type **[[!UICONTROL Partner ID]](/help/identity-service/namespaces.md)**. 
>
>Read more about Partner ID in the [identity types section](/help/identity-service/namespaces.md).
>Read about [how to define identity fields](/help/xdm/ui/fields/identity.md) in the Experience Platform user interface.

### Load the list of prospect profiles and inspect the prospect profiles view 

Ingest data from the partner through a source connector to bring the list of prospect profiles into Real-Time CDP.

Some recommended source connectors for this purpose might be: 

* [Amazon S3](/help/sources/connectors/cloud-storage/s3.md)
* [SFTP](/help/sources/connectors/cloud-storage/sftp.md)

Or, use dataset ingestion

Check that prospect profiles are populating in the UI. Insert link from Caleb for further reading

### Create prospect audiences 

### Activate to destinations

## Other use cases achieved through partner data support {#other-use-cases}

Explore further use cases enabled through partner data support in Real-Time CDP:

* [!BADGE Beta]{type=Informative} Supplement first-party profiles with attributes from trusted data partners to improve your data foundation and gain new insights into your customer base and gain better audience optimization.
* (**Coming soon**) [!BADGE Beta]{type=Informative} **Leverage partner aided recognition** for personalizing on-site experiences during the visit, and for off-site retargeting post visit, without the user authenticating or having prior history with your brand.