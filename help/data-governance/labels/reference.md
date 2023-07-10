---
keywords: Experience Platform;home;popular topics;data governance;data usage label api;policy service api;supported data usage labels;contract labels;identity labels;sensitive labels
solution: Experience Platform
title: Data Usage Labels Glossary
description: This document outlines all data usage labels currently supported by Adobe Experience Platform.
exl-id: 70d0702d-def7-4ab2-a861-eaf0f0cde1d4
---
# Data usage labels glossary {#data-usage-labels-glossary}

>[!CONTEXTUALHELP]
>id="platform_policies_labeltype"
>title="Label types"
>abstract="There are several categories of data usage labels. Adobe-defined labels include contract labels, identity labels, and sensitive labels. Labels defined by your organization are categorized as custom labels."
>text="See the data usage labels glossary for more information on these label types."

Data usage labels allow you to categorize datasets and fields according to [governance policies](../policies/overview.md) and [access control policies](../../access-control/abac/overview.md) that apply to that data. Adobe Experience Platform provides several core data usage labels out-of-the-box that you can use to start categorizing your data.

This document outlines the core data usage labels currently provided by Experience Platform.

## Contract labels {#contract}

Contract "C" labels are used to categorize data that has contractual obligations or is related to your organization's data governance policies.

| Label | Definition |
| --- | --- |
| [C1](#c1) | Data can only be exported from Adobe Experience Cloud in an aggregated form without including individual or device identifiers. |
| [C2](#c2) | Data cannot be exported to a third-party. |
| [C3](#c3) | Data cannot be combined or otherwise used with directly identifiable information. |
| [C4](#c4) | Data cannot be used for targeting any ads or content, either on-site or cross-site. |
| [C5](#c5) | Data cannot be used for interest-based, cross-site targeting of content or ads. |
| [C6](#c6) | Data cannot be used for on-site ad targeting. |
| [C7](#c7) | Data cannot be used for on-site targeting of content. |
| [C8](#c8) | Data cannot be used for measurement of your organization's websites or apps. |
| [C9](#c9) | Data cannot be used in Data Science workflows. |
| [C10](#c10) | Data cannot be used for stitched identity activation. |
| [C11](#c11) | Data cannot be shared with Segment Match partners. |
| [C12](#c12) | Data cannot be exported in any way. |

## Identity labels {#identity}

Identity "I" labels are used to categorize data that can identify or contact a specific person.

| Label | Definition |
| --- | --- |
| **I1** | Directly identifiable data that can identify or contact a specific person, rather than a device. |
| **I2** | Indirectly identifiable data that can be used in combination with any other data to identify or contact a specific person. |

## Sensitive labels {#sensitive}

Sensitive "S" labels are used to categorize data that you, and your organization, consider sensitive.  

One type of data you may consider to be sensitive may be different types of geographic data; however, this category is not limited to geographic data.

| Label | Definition |
| --- | --- |
| **S1** | Data specifying latitude and longitude that can be used to determine the precise location of a device. |
| **S2** | Data that can be used to determine a broadly defined geofence area. |
| **PSPD** | Permitted Sensitive Personal Data (PSPD) refers to data that you are contractually permitted by Adobe to upload that is deemed "sensitive", "special category of data", or a similar term used by applicable laws. This specifically excludes Protected Health Information (PHI) and other regulated health data. |
| **RHD** | Data that refers to Protected Health Information (PHI) or information about a patient that you are contractually permitted by Adobe to upload. |

## Partner ecosystem {#partner}

Partner Ecosystem labels are used to categorize data obtained from sources external to your organization

This label is used to govern the use of prospect data.

| Label | Definition |
| --- | --- |
| **Third-Party** | Third-party data is data provided to you by a third-party data vendor. A third-party data vendor is an entity that has entered into an agreement with your organization authorizing you to access, use, display, and transmit the third party's data in conjunction with Adobe Experience Platform.  |

## Appendix

The sections below provide additional information about available data usage labels.

### Contract label details

The following sections provide detailed information related to the implementation of specific contract "C" labels.

#### C1 {#c1}

Some data can only be exported from Adobe Experience Cloud in an aggregated form without including individual or device identifiers. For example, data that originated from social networks.

#### C2 {#c2}

Some data providers have terms in their contracts that prohibit the export of data from where it was originally collected. For example, social network contracts often restrict the transfer of data you receive from them. The C2 label is more restrictive than [C1](#c1), which only requires aggregation and anonymous data, but it is less restrictive than [C12](#c12), which prevents data exports completely regardless of the destination.

#### C3 {#c3}

Some data providers have terms in their contracts that prohibit the combination or use of that data with directly identifiable information. For example, contracts for data sourced from ad networks, ad servers, and third-party data providers often include specific contractual prohibitions on the use of such data with directly identifiable data. 

#### C4 {#c4}

C4 encompasses labels [C5](#c5), [C6](#c6), and [C7](#c7). It is one of the most restrictive labels, second only to [C12](#c12).

#### C5 {#c5}

Interest-based targeting, or personalization, occurs if the following three conditions are met: The data collected on-site is (1) used to make inferences about a users' interests, (2) is used in another context, such as on another site or app (off-site) AND (3) is used to select which content or ads are served based on those inferences.

The combination of data from several sites, including a combination of on-site data and off-site data or a combination of data from several off-site sources, is referred to as cross-site data. Different sites represent different contexts such that the use of cross-site data in any context is different than the original. Cross-site data is typically collected and processed to make inferences about users' interests. As a result, the use of cross-site data for targeting ads or content typically qualifies as interest-based targeting, regardless of whether the ad or content appears on-site or off-site. For example, if on-site data was used in combination with off-site data to select which ad to show a user on an organization's own site, that use would qualify as interest-based targeting. As another example, retargeting ads to users off-site would also likely qualify as interest-based targeting.

Use of off-site data alone for targeting would likely also qualify as interest-based targeting since off-site data is usually collected and processed to make inferences about users' interests.

However, targeting content or ads using only on-site data would not typically qualify as interest-based targeting. On-site targeting that doesn't otherwise qualify as interest-based targeting is treated as two distinct labels. Specifically, Label C6 addresses the on-site ad targeting and reporting and specifically speaks to ad selection, delivery, and reporting, and Label C7 addresses on-site content selection, delivery, and reporting (on-site content targeting).

Ultimately, the interpretation of the label and how usage of data with that label is enforced is up to you. For reference, the IAB and DAA frameworks are provided below:

IAB: Personalization. The collection and processing of information about your use of this service to subsequently personalize advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests which inform future selection of advertising and/or content.

DAA: On-line behavioral adverting. Collecting data from a particular computer or device regarding web viewing behaviors over time and across non-affiliate websites for the purpose of using such data to predict user preferences or interests to deliver advertising to that computer or device based on preferences or interests inferred from such web viewing behaviors. 

#### C6 {#c6}

Ads are messages or notifications, including text and images, appearing on a website or app that are primarily intended to promote the sale of goods or services. It is up to you to determine the purpose of such messages or notifications. Ads are separate from on-site content, covered by label [C7](#c7). Data with a C6 label cannot be used for on-site ad targeting, including the selection and delivery of advertisements on your organization's websites or apps or to measure the delivery and effectiveness of such advertisements. This includes using previously collected on-site data about the users' interests to select ads, process data about what advertisements were shown, when and where they were shown, and whether the users took any action related to the advertisement, such as selecting an ad or making a purchase. Typically, making inferences about a users' preferences based on that users' on-site activities and then using those preferences in on-site ad targeting would not qualify as interest-based targeting (also called personalization), since it would not meet all three of the requirements necessary for interest-based targeting. *[See label C5 for these requirements.](#c5)*

Ultimately, the interpretation of the label and how usage of data with that label is enforced is up to you. For reference, the IAB and DAA frameworks are provided below:

IAB: 3. Ad selection, delivery, reporting: The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example selecting an ad or making a purchase. This does not include Personalization, which is the collection and processing of information about your use of this service to subsequently personalize advertising and/or content for you in other contexts, such as websites or apps, over time.

DAA: Online Behavioral Adverting does not include the activities of First Parties, Ad Delivery or Ad Reporting, or contextual advertising (i.e. advertising based on the content of the Web page being visited, a consumer's current visit to a Web page, or a search query).

#### C7 {#c7}

On-site content is text and images that are designed to inform, educate, or entertain, and are not created to promote the sale of goods or services. It is up to you to determine the purpose of the content, including whether the content would qualify as native advertising. The C7 label is not intended to cover on-site ads, which are covered by label [C6](#c6). Data with a C7 label cannot be used for on-site content targeting, including the selection and delivery of content on your organization's websites or apps, or to measure the delivery and effectiveness of such content. This includes previously collected information about users' interests in select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the uses took any actions related to the content, including for example, selecting content. Typically, making inferences about a users' preferences based on that users' on-site activities and then using those preferences in on-site content targeting would not qualify as interest-based targeting (also called personalization), since it would not meet all three of the requirements necessary for interest-based targeting. *[See label C5 for these requirements.](#c5)*

Ultimately, the interpretation of the label and how usage of data with that label is enforced is up to you. For reference, the IAB and DAA frameworks are provided below:

IAB: 4. Content selection, delivery, reporting: The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example selecting content. This does not include Personalization, which is the collection and processing of information about your use of this service to subsequently personalize content and/or advertising for you in other contexts, such as websites or apps, over time.

DAA: Online Behavioral Adverting does not include the activities of First Parties, Ad Delivery or Ad Reporting, or contextual advertising (i.e. advertising based on the content of the Web page being visiting, a consumer's current visit to a Web page, or a search query).

#### C8 {#c8}

Data cannot be used to measure, understand, and report on users' usage of your organization's sites or apps. This does not include interest-based targeting (cross-site targeting), which is the collection of information about your use of this service to subsequently personalize content and/or advertising for you in other contexts, i.e. on other services, such as websites or apps, over time.

#### C9 {#c9}

Some contracts include explicit prohibitions on data use for data science. Sometimes these are phrased in terms that prohibit the use of data for Artificial Intelligence (AI), machine learning (ML), or modeling.

#### C10 {#c10}

Some data governance policies restrict the use of stitched identity data for personalization. The C10 label is automatically applied to segments if their merge policies use the "private graph" option.

#### C11 {#c11}

Adobe Experience Platform Segment Match allows you to match first-party segments with privacy and consent preferences, facilitating enriched profiling and downstream insights. The C11 label denotes data that should not be used in [!DNL Segment Match] processes. After you have determined which datasets and/or fields you want to exclude from Segment Match and added the C11 label accordingly, the label is automatically enforced by the Segment Match workflow.

#### C12 {#c12}

Data with this label cannot be exported from Platform in any way. C12-labeled fields are excluded from CSV downloads, API consumption, and activation workflows.
