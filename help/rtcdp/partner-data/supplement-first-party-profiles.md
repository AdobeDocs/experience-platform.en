---
title: (Beta) Supplement first-party profiles with partner-provided attributes
description: Learn how to supplement first-party profiles with attributes from trusted data partners to improve your data foundation, gain new insights into your customer base, and better audience optimization
badgeBeta: label="Beta" type="informative" before-title="true"
---
# Supplement first-party profiles with partner-provided attributes

>[!IMPORTANT]
>
>* This beta functionality is available to customers who have purchased the [Real-Time CDP Prime and Ultimate](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform.html) package. Please contact your Adobe representative for more information. 

Supplement first-party profiles with attributes from trusted data partners to improve your data foundation, gain new insights into your customer base, and better audience optimization.

![Prospecting use case high-level visual overview.](/help/rtcdp/assets/partner-data/enrichment-use-case-overview.png)

<!--

See also https://adobe-my.sharepoint.com/personal/giurgiu_adobe_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fgiurgiu%5Fadobe%5Fcom%2FDocuments%2FRecordings%2FPartner%20data%20in%20RTCDP%20%2D%20documentation%20for%20beta%2D20230516%5F133209%2DMeeting%20Recording%2Emp4&ga=1 at around 8 minutes in. 

-->

## Prerequisites and planning

{add information about prereqs and planning that customers must complete before getting started with the use case}

## How to achieve the use case: high-level overview

1. As a **customer**, you license attributes from the **partner**.
2. As a **customer**, you extend your profile data and governance model to accommodate **partner**-provided attributes.
3. As a **customer**, you export audiences that you want enriched keyed off Personal Identifiable Information (PII) or hashed-PII to the **partner**.
4. The **partner** appends licensed attributes for the profiles that they are able to match against. Optionally, a Partner ID can be included and ingested into the partner scoped ID namespace.
5. Real-Time CDP appends enriched attributes into the customer profile.
 
## How to achieve the use case: step-by-step instructions

Read through the sections below which include links to further documentation, to complete each of the steps in the high-level overview above.

### License attributes from the partner

To license attributes from a data partner, you must {ANSHUMAN TO PROVIDE INFO}

In this step, you also must create a new identity type of the type [Partner ID](/help/identity-service/namespaces.md). Link to how to create an identity and to the Partner ID identity type

### Extend your profile data and governance model to accommodate partner-provided attributes.

At this point, you are extending your data management framework in Real-Time CDP to accommodate partner-provided attributes. 

You need to create a new schema or extend an existing schema to include attributes that you are expecting to get back from the partner. Read the links below in order to achieve this task:

* Link to extend an exiting schema with a new field group
* Link to new field group doc when it exists

Also in this step, think about how your data governance model changes as you expand your data management strategy to include third-party data provided by the partner. Explore the considerations in the documentation links below: 

* keeping third party data in a separate dataset so that deleting it and undoing integrations is easy
* Use TTL on the dataset for clients who have the data hygiene add-on
* Exercising caution when creating derived datasets which pull in third party data, because once mixed together the only solution to remove the 3rd party data is to delete the whole derived dataset

### Export audiences that you want enriched keyed off Personal Identifiable Information (PII) or hashed-PII

Export the audiences that you want the partner to enrich. Use the cloud storage destinations provided by Real-time CDP, such as Amazon S3 or SFTP. Use the following documentation pages to complete this step: 

* [Amazon S3 destination](/help/destinations/catalog/cloud-storage/amazon-s3.md) documentation page
* [SFTP destination](/help/destinations/catalog/cloud-storage/sftp.md) documentation page
* How to [connect to a destination](/help/destinations/ui/connect-destination.md)
* How to [export data to a cloud storage destination](/help/destinations/ui/activate-batch-profile-destinations.md)

Question - after the export is complete, how does the partner import the audiences from the storage location into wherever they need them for enrichment?

### The partner appends licensed attributes for the profiles that they are able to match against

In this step, the partner matches the profiles from your data exports, which were keyed off personally identifiable information such as email addresses. 

To increase the likelihood of matching your existing profiles with data from the partner, you can {INSERT RECOMMENDATION HERE}.

### Real-Time CDP appends enriched attributes into the customer profile

You now need to ingest data from the partner through the sources provided by Real-Time CDP. 

## Limitations and troubleshooting

Note the following limitations as you explore the use case described on this page:

Partner IDs are not ingested into Identity service. 

## Other use cases achieved through partner data support

Explore further use cases enabled through partner data support in Real-Time CDP:

* [!BADGE Beta]{type=Informative} **Leverage partner aided recognition** for personalizing on-site experiences during the visit, and for off-site retargeting post visit, without the user authenticating or having prior history with your brand.
* [!BADGE Beta]{type=Informative} **Expanded activation** using Partner IDs to publishing ecosystems that do not accept PII or hashed PII.


