---
title: (Beta) Supplement first-party profiles with partner-provided attributes
description: Learn how to supplement first-party profiles with attributes from trusted data partners to improve your data foundation, gain new insights into your customer base, and better audience optimization
hide: yes
hidefromtoc: yes
badgeBeta: label="Beta" type="informative" before-title="true"
---
# Supplement first-party profiles with partner-provided attributes

>[!IMPORTANT]
>
>* This beta functionality is available to customers who have purchased the [Real-Time CDP Prime and Ultimate](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform.html) package. Please contact your Adobe representative for more information. 

Supplement first-party profiles with attributes from trusted data partners to improve your data foundation and gain new insights into your customer base and gain better audience optimization.

![Enrich profiles with partner-provided attributes use case high-level visual overview.](/help/rtcdp/assets/partner-data/enrichment-use-case-overview.png)

## Prerequisites and planning {#prerequisites-and-planning}

As you consider supplementing your own first-party profiles with attributes from data partners, you should discuss and address the following details on the data enrichment loop with the data partner:

* Think about the location where the audience list will be exported out of Real-Time CDP, to be shared with the data vendor. This location needs to support file export.
* What are the identifiers that are expected by the data vendor so they can layer on additional attributes?
* How will the file containing partner-provided attributes be ingested back into Real-time CDP? For example, the files can be ingested through cloud storage source connectors such as [Amazon S3](/help/sources/connectors/cloud-storage/s3.md) or [SFTP](/help/sources/connectors/cloud-storage/sftp.md). 
* What is the cadence with which you expect partner-provided attributes to be brought back into Real-Time CDP and refreshed?

>[!WARNING]
>
>The additional partner-provided attributes ingested into Real-Time CDP impact the *overall profile richness of your profiles*. Read the [Real-Time Customer Data Platform Product Description](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform.html) for more information about profile richness.

## How to achieve the use case: high-level overview {#achieve-the-use-case-high-level}

![Enrich profiles with partner-provided attributes use case high-level visual overview.](/help/rtcdp/assets/partner-data/enrichment-use-case-steps.png)

1. As a **customer**, you license attributes from the **partner**.
2. As a **customer**, you extend your profile data and governance model to accommodate **partner**-provided attributes.
3. As a **customer**, you export audiences that you want enriched keyed off Personal Identifiable Information (PII) or hashed-PII to the **partner**.
4. The **partner** appends licensed attributes for the profiles that they are able to match against. Optionally, a Partner ID can be included and ingested into the partner scoped ID namespace.
5. As a **customer**, you bring the enriched data back into Real-Time CDP and Real-time CDP appends enriched attributes into the customer profile.
 
## How to achieve the use case: Step-by-step instructions {#step-by-step-instructions}

Read through the sections below which include links to further documentation, to complete each of the steps in the high-level overview above.

### License attributes from the partner {#license-attributes-from-partner}

This step is covered in the prerequisites and it is a requirement that must be met between you and the data partner. After you have completed the data license agreements with the partner, proceed to the next steps to augment your profiles with partner-provided attributes.

### Extend your profile data and governance model to accommodate partner-provided attributes. {#extend-governance-model}

At this point, you are extending your data management framework in Real-Time CDP to accommodate partner-provided attributes. 

You have the option to create a new schema of the **[!UICONTROL XDM Individual Profile]** class, or extend an existing schema of the same type to include partner-provided attributes that you are expecting back from the data partner. Adobe recommends that you use the first option, since it allows for your schemas to evolve independently of each other. 

To include partner-provided attributes in a schema, you can either create a new field group with the attributes that you expect, or you can use one of the out-of-the-box field groups provided by Adobe.

Read the documentation pages below for more information:

* [The basics of schema composition](/help/xdm/schema/composition.md)
* [Overview of the [!UICONTROL XDM Individual Profile] class](/help/xdm/classes/individual-profile.md)
* [Create and edit schemas in the UI](/help/xdm/ui/resources/schemas.md)
* [Create and edit schema field groups in the UI](/help/xdm/ui/resources/field-groups.md) 
* [Create and edit schemas using the API](/help/xdm/api/schemas.md#create)
* [Update an existing schema to add field groups using the API](/help/xdm/api/schemas.md#patch)
* Link to new field group documentation page when it exists

Also in this step, think about how your data governance model changes as you expand your data management strategy to include third-party data provided by the partner. Explore the considerations in the documentation links below: 

* (**Coming soon**) Keeping third-party data in a separate dataset so that deleting it and undoing integrations is easy
* (**Coming soon**) Use TTL on the dataset for clients who have the data hygiene add-on
* (**Coming soon**) Exercising caution when creating derived datasets which pull in third-party data, because once mixed together the only solution to remove the third-party data is to delete the whole derived dataset

>[!TIP]
>
>If you choose to supplement your customer profiles with a person-based identifier from the data vendor, you can create a new identity type of the type **[[!UICONTROL Partner ID]](/help/identity-service/namespaces.md)**. 
>
>Read more about Partner ID in the [identity types section](/help/identity-service/namespaces.md).
> Read about [how to define identity fields](/help/xdm/ui/fields/identity.md) in the Experience Platform user interface.


### Export audiences that you want enriched keyed off Personal Identifiable Information (PII) or hashed-PII {#export-audiences}

Export the audiences that you want the partner to enrich. Use the cloud storage destinations provided by Real-time CDP, such as Amazon S3 or SFTP. Read the following documentation pages to complete this step: 

* [Amazon S3 destination](/help/destinations/catalog/cloud-storage/amazon-s3.md) documentation page
* [SFTP destination](/help/destinations/catalog/cloud-storage/sftp.md) documentation page
* How to [connect to a destination](/help/destinations/ui/connect-destination.md)
* How to [export data to a cloud storage destination](/help/destinations/ui/activate-batch-profile-destinations.md)


### The partner appends licensed attributes for the profiles that they are able to match against {#partner-appends-attributes}

In this step, the partner enriches the audiences from your data exports, which were keyed off person-based identifiers such as hashed email addresses, with information that they own. 

### Real-Time CDP appends enriched attributes into the customer profile {#ingest-data}

You now need to ingest data from the partner through a source connector to bring the enriched data back into Real-Time CDP and supplement your profiles with partner-provided data.

Some recommended source connectors for this purpose might be: 

* [Amazon S3](/help/sources/connectors/cloud-storage/s3.md)
* [SFTP](/help/sources/connectors/cloud-storage/sftp.md)

## Limitations and troubleshooting {#limitations-and-troubleshooting}

Note the following limitations as you explore the use case described on this page:

If you select to use Partner IDs, note that these are not used in to build your [identity graph](/help/identity-service/ui/identity-graph-viewer.md). 

## Other use cases achieved through partner data support {#other-use-cases}

Explore further use cases enabled through partner data support in Real-Time CDP:

* (**Coming soon**) [!BADGE Beta]{type=Informative} **Leverage partner aided recognition** for personalizing on-site experiences during the visit, and for off-site retargeting post visit, without the user authenticating or having prior history with your brand.
* (**Coming soon**) [!BADGE Beta]{type=Informative} **Expanded activation** using Partner IDs to publishing ecosystems that do not accept PII or hashed PII.