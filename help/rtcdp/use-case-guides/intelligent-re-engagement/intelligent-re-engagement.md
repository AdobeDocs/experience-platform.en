---
title: Intelligent Re-engagement
description: Deliver compelling and connected experiences during the key conversion moments to intelligently re-engage infrequent customers.
hide: yes
hidefromtoc: yes
---
# Intelligent re-engagement end-to-end guide

Intelligent re-engagement allows you to set up a tailored, cross-channel drip campaign to persuade clients to perform a particular action. The nudging campaign is intended to operate for a limited amount of time. Once the customer takes the appropriate action, the nudge campaign ends right away.

## Prerequisites and planning

-   Adobe Experience Platform (AEP) 
Adobe Real-Time Customer Data Platform (CDP) – Aggregates data across data sources to fuel the campaign. This data is then used to create the campaign segments and surface personalized data elements used in the email and the web promo tiles (for example, name or account-related info). The CDP is also used to activate the segments across email and the web (via Adobe Target).
    -   Profiles
    -   Segmentation
-   Adobe Journey Optimizer (AJO)
    -   Event or Segment Trigger
    -   Segments/ Events
    -   Journey Actions
-   Adobe Experience Manager (AEM) – Self-service authoring, hosting for the landing page, and integrates with Target for other pages on the site that includes the web promo tiles.
-   Enterprise landing page template – A reusable landing page template in AEM that is pre-integrated with Adobe Target, Claravine, CDP, and Adobe Analytics.
-   Adobe Target – Personalizes key website pages via web promo tiles.
-   Adobe Analytics – Tracks website activity for campaign performance reporting.
-   AWS Data Lake – Aggregates campaign performance reporting as per the global marketing standard to fuel Tableau dashboard.
Also, divisional data lakes fuel the CDP with division-specific client and  behavioral data

## How to achieve the use case: high-level overview

![step by step](../intelligent-re-engagement/images/step-by-step.png) 

>[!NOTE]
>
>While AADC is listed, we are assuming Web SDK is our approach.

1.  Data Ingestion  
    -   Data Ingestion (Streaming) – Web SDK/ Mobile SDK/ Edge Network API ingestion via Edge Network (preferred method).
    -   Data Ingestion (Batch) – Offline data is loaded into AEP. Assumption data is loaded via batch, but can be streamed into AEP.

2.  Unified Profile – Once the data is ingested, it lands in their appropriate datasets marked for Profile.

3.  Segment Qualification – The Add to cart event kicks off a time that waits for 30 mins, then checks for purchase (abandon cart), then adds to the Abandon Cart Segment.

4.  Qualifications
    -   Journey Trigger – Qualification for the Segment enters the customer into a triggered journey in Adobe Journey Optimizer.
    -   Segment Trigger – Qualification for the segment adds customer to destination via RTCDP for re-targeting via paid media ads.
    -   Segment Qualification – The journey checks if customer is in Abandon Cart segment.

5.  Actions
    -   Journey Actions – If AJO is being used, it checks consent and send out to the various Actions configured (for example, email, SMS).
    -   Destination – If Destinations Framework is being used, it checks consent and send out to the various Destinations configured (for example, email, direct mail).

6.  Interaction Feedback – The downstream application sending the email (paid media ad or push notification), in-App message, or SMS sends its activities back to AEP for measurement of activities.

## How to achieve the use case: Step-by-step instructions

Read through the sections below which include links to further documentation, to complete each of the steps in the high-level overview above.

### UI functionality and elements that you use
