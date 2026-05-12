---
title: Lead to account matching in Real-Time CDP B2B
type: Documentation
description: An overview and more information about the lead to account matching feature in Experience Platform CDP B2B.
feature: Get Started, Profiles, B2B
badgeB2B: label="B2B Edition" type="Informative" url="https://experienceleague.adobe.com/docs/experience-platform/rtcdp/intro/rtcdp-intro/overview.html#rtcdp-editions" newtab=true
exl-id: 2f853599-6bca-4ba6-bbba-131a49d8854e
---
# Lead to account matching in Real-Time CDP B2B

## Overview {#overview}

Account-based marketing is an increasingly important strategy for B2B marketing. Account-based marketing provides the following key benefits to acquire specific high-value customers:

- Clear ROI 
- Sales and marketing alignment 
- A personalized approach 
- Fewer wasted resources 
- A shorter sales cycle

Account-based marketing provides the capability to link known customers to sales accounts. This allows marketing teams to engage with potential leads from the target accounts early in the customer journey to increase their chances of conversion. A known person record typically includes part or all of the following information:

- Person name
- Email address
- Contact number
- Company name
- Company website
- Job title
- Location

## How it works {#how-it-works}

Daily-run jobs use both deterministic and probabilistic factors to match known lead profiles without existing account associations. Known lead profiles will have one of the following attributes available:

- b2b.companyName
- b2b.companyWebsite
- workEmail

>[!NOTE]
>
> The b2b.personKey.sourceKey attribute must exist.

The b2b.companyName, b2b.companyWebsite and b2b.personKey.sourceKey attributes can be located in the b2b field group in the B2B person schema.

![B2B person schema showing attributes](/help/rtcdp/accounts/images/b2b-person-schema.png)

The workEmail attribute can be found as a top-level field group in the B2B person schema.

![B2B person schema showing workEmail](/help/rtcdp/accounts/images/b2b-person-workemail.png)

Profiles will be best matched only if the match score is over an internal confidence threshold. The results are saved in a new system dataset of the existing account person relation XDM. 

The lead to account matching service runs when a new person profile snapshot becomes available which is once every 24 hours. See the documentation for more information about the [configuration of lead to account matching](/help/rtcdp/accounts/account-profile-ui-guide.md).

## How to view lead to account matching output {#how-to-view}

After the job run, the results are saved in a new dataset of the existing account person relation XDM. 

To preview the dataset, select **[!UICONTROL Preview dataset]** in the top right. 

![New dataset](/help/rtcdp/accounts/images/b2b-dataset-output.png)

The dataset includes the matched account information as well as the match score for your chosen dataset. The **[!UICONTROL Relationship Source]** field indicates whether it came from the lead to account matching process. 
  
![Preview dataset confidence scores and output](/help/rtcdp/accounts/images/b2b-dataset-preview.png)

## Monitoring lead to account matching jobs {#monitoring-jobs}

You can monitor the job status and associated metrics for any lead to account matching jobs through the dashboard.

See the documentation for more information about the [monitoring jobs for lead to account matching](/help/dataflows/ui/b2b/monitor-profile-enrichment.md).
