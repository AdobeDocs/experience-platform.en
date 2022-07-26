---
title: Lead to account matching in CDP B2B
type: Documentation
description: An overview and more information about the lead to account matching feature in Experience Platform CDP B2B.
exl-id: 
---

# Lead to account matching in CDP B2B

## Overview {#overview}

>[!IMPORTANT]
>
> Lead to account matching may increase the number of businessperson profiles, which may result in a higher licensing cost to the customer.

In the world of B2B marketing, account-based marketing (ABM) is an increasingly important strategy, particularly for those seeking to acquire specific high-value customers. This provides the following key benefits: 

- Clear ROI 
- Sales and marketing alignment 
- A personalized approach 
- Fewer wasted resources 
- A shorter sales cycle

The key to account-based marketing (ABM) success lies in the capability to link known people and anonymous web visitors to sales accounts so that marketing activities can engage the prospects from the target accounts early in the customer journey. A known person record typically includes part or all of the following information:

| Information | Availability |
|---|---|
| Person name | The persons name is almost always available. |
| Email address | The persons email address is almost always available. |
| Contact number | The persons contact number is not always available as the are often hesitant to provide this information. |
| Company name | This is the name of the company to which the person is associated and is almost always available. |
| Company website | The company website is sometimes available. |
| Job title | A persons job title is sometimes available. |
| Location | A persons location is sometimes available. |

With lead to account matching, CDP B2B matches known person profiles to account profiles so that they can be segmented and targeted with B2B context data such as account, opportunity etc. The person profiles can be classified into the following three categories:

- Account person profile: The person profile is already associated to at least one account profile through the relationship from a data source. This implies that there is at least one contact fragment. 

>[!NOTE]
>
> Account person profiles are not matched when running lead to account matching jobs.

- Known person profile: The person profile is NOT associated to any account profile, and at least one of the following person profile attributes has a value:

    - Email address
    - Company name
    - Company website

- Anonymous profile: The person profile is NOT associated to any account profile, and none of the following person profile attributes has value:
  
    - Email address
    - Company name
    - Company website

>[!NOTE]
>
> A person profile may be related to multiple account profiles however, the lead to account matching process will only match to the best match. If a broader set of matches is required, couple the lead to account matching with the related accounts feature.

## How it works {#how-it-works}

Daily-run jobs use both deterministic and probabilistic factors to match known lead profiles without existing account associations. Known lead profiles will have one of the following attributes available:

- b2b.companyName
- b2b.companyWebsite
- workEmail

>[!NOTE]
>
> The b2b.personKey.sourceKey attribute must exist.

Profiles will be best matched only if the match score is over an internal confidence threshold. The results are saved in a new system dataset of the existing account person relation XDM. 

The lead to account matching service runs when a new person profile snapshot becomes available which is once every 24 hours.

See the documentation for more information about the [Lead to account matching configuration](/help/rtcdp/accounts/account-profile-ui-guide.md).

## How to view lead to account matching output {#how-to-view}

After the algorithm is run, the results are saved in a new dataset of the existing account person relation XDM. This dataset will contain the lead to accounts matching as well as the confidence score per match. The **Relationship Source** field indicates whether it came from the lead to account matching process. Results will also be updated with each respective profile in the backend. 
  
See the documentation for more information about the [Lead to account matching output](/).

## Monitoring lead to account matching jobs {#monitoring-jobs}

You have the option to monitor any person-to-account mapping jobs where you can look at the jobs detailed metrics and their status.

See the documentation for more information about the [Monitoring lead to account matching jobs](/help/dataflows/assets/ui/b2b/monitoring-profile-enrichment-jobs.png).
