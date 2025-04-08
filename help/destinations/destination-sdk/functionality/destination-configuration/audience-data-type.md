---
description: Learn how to configure the audience type for your destinations built with Destination SDK.
title: Configure audience data type
---

# Configure audience data type

Audience data types define how data is structured and exported to destinations. Understanding audience data types ensures proper integration and targeting for marketing campaigns.

When you build a destination with Destination SDK, you can define the type of audience your destination should accept. See the audience data types below to learn about the differences between them and identify the type that you need for your integration.

* [Dataset exports](../../../../catalog/datasets/overview.md): Datasets are collections of structured data stored in the Adobe Experience Platform Data Lake. All data that is successfully ingested into Adobe Experience Platform is stored in datasets. Datasets also contain metadata that describes various aspects of the data they store. 
* [People audiences](../../../../segmentation/types/people-audiences.md): People audiences are based on customer profiles and they allow you to target specific groups of people for your marketing campaigns, such as frequent buyers or users who abandoned their carts.
* [Prospect audiences](../../../../segmentation/types/prospect-audiences.md): Use prospect audiences to target individuals who are not yet customers but share characteristics with your target audience. With prospect profiles, you can supplement your customer profiles with attributes from trusted third-party partners. 
* [Account audiences](../../../../segmentation/types/account-audiences.md): Use account audiences to target individuals within specific organizations, enabling account-based marketing strategies.

Depending on the exported data type that you need, see the sections below for destination configuration examples.

## Export people audiences {#audiences}

Consider adding people audience support to your destination when you want to target specific markets and demographics that you want to advertise to.

To build a destination which supports the export of people audiences, add the configuration snippet below to your [destination configuration](../../authoring-api/destination-configuration/create-destination-configuration.md).

```json
"sources":[
   ""  // Specifies that this destination supports people audiences
]
```

## Export dataset audiences {#dataset}

Consider adding dataset export support to your destination when you are looking to export raw datasets, which are not grouped or structured by audience interests or qualifications. You could use this data for reporting, data science workflows, and many other use cases. For example, as an administrator, data engineer, or analyst, you can export data from Experience Platform to synchronize with your data warehouse, use in [!DNL BI] analysis tools, external cloud [!DNL ML] tools, or store in your system for long-term storage needs.

To build a destination which supports the export of dataset audiences, add the configuration snippet below to your [destination configuration](../../authoring-api/destination-configuration/create-destination-configuration.md).

```json
"sources":[
   "DATASETS" // Specifies that this destination supports dataset exports
]
```

## Export prospect audiences {#prospect}

Consider adding prospect audience support to your destination when you want to target individuals who are not yet customers but share characteristics with your target audience. With prospect profiles, you can supplement your customer profiles with attributes from trusted third-party partners. See this [prospecting use case](../../../../rtcdp/partner-data/prospecting.md) for more information.

To build a destination which supports the export of prospect audiences, add the configuration snippet below to your [destination configuration](../../authoring-api/destination-configuration/create-destination-configuration.md).


```json
"sources":[
   "UNIFIED_PROFILE_PROSPECTS" // Specifies that this destination supports prospect audiences
] 
```

## Export account audiences {#account}

Consider adding account audience support to your destination when you want to configure a destination for account-based marketing. For example, you can use account-based audiences to retrieve records of all the accounts that do not have contact information for any people with the title [!DNL Chief Operating Officer (COO)] or [!DNL Chief Marketing Officer (CMO)].

To build a destination which supports the export of account audiences, add the configuration snippet below to your [destination configuration](../../authoring-api/destination-configuration/create-destination-configuration.md).

```json
"sources":[
   "ACCOUNTS" // Specifies that this destination supports account audiences
] 
```
