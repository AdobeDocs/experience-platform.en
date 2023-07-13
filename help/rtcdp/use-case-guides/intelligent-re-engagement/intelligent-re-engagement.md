---
title: Intelligent Re-engagement
description: Deliver compelling and connected experiences during the key conversion moments to intelligently re-engage infrequent customers.
hide: yes
hidefromtoc: yes
---
# Intelligently re-engage your customers to return 

Intelligent re-engagement allows you to set up a tailored, cross-channel drip campaign to persuade clients to perform a particular action. The nudging campaign is intended to operate for a limited amount of time. Once the customer takes the appropriate action, the nudge campaign ends right away.

## Prerequisites and planning

Use UI functionality and elements intro from Vic's doc.

In order to achieve this use case you will need the following products.....

-   Adobe Experience Platform 
Adobe Real-Time Customer Data Platform (Real-Time CDP) – Aggregates data across data sources to fuel the campaign. This data is then used to create the campaign segments and surface personalized data elements used in the email and the web promo tiles (for example, name or account-related info). The CDP is also used to activate the segments across email and the web (via Adobe Target).
    -   Profiles
    -   Segmentation
-   Adobe Journey Optimizer
    -   Event or Segment Trigger
    -   Segments/ Events
    -   Journey Actions
-   Adobe Experience Manager – Self-service authoring, hosting for the landing page, and integrates with Target for other pages on the site that includes the web promo tiles.
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

<!-- **TOUCH ON CONSENT AND DATA GOVERNANCE BETWEEN 2 AND 3**-->

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

6.  Interaction Feedback – The downstream application sending the email (paid media ad or push notification), in-App message, or SMS sends its activities back to AEP for measurement of activities. <!--**SPEAK TO DANNY MILLER**-->

## How to achieve the use case: Step-by-step instructions

### Use case overview

You will go through an example intelligent re-engagement workflow where you will:

1. Develop the campaign brief 
2. Campaign project management
3. Creating segments in CDP
4. Developing creative asset
5. Authoring/publishing AEM land pages
6. Configuring web personalization in Adobe Target
7. Generating campaign metadata in Claravine
8. Managing the media agency relationship.

This use case is outlined below:

#### Data Preparation & Audience Segmentation

You are a part of the marketing team and need to identify the types of data that are needed for the campaign. You check to see which existing audiences, profile attributes and events already exist in CDP customer profiles.

Source New Data: If new data attributes are needed, Marketing works with MarTech and CDAO to identify data sources for the new attributes. MarTech is responsible for sourcing digital data produced by MarTech platforms. CDAO is responsible for all other data sources. Some data attributes may not be feasible to collect in time for the campaign. If so, the campaign approach may need to change.

Gather New Data: CDAO and MarTech work on ingesting into the CDP. In some cases, data will land in a data lake first, in other cases data may land directly into the CDP, depending to the type of data.

Create Segments: After the data is available in the CDP, marketing creates audience segments in the CDP. Make sure to:
    1. Reuse existing foundational "building block" segments as much as possible, and 
    2. Adhere to Vanguard segment naming conventions 

#### Email Template and Journey Development

- Create the Email: Marketing determines if there is an existing email template available or if a new template will need to be created for the campaign. Make sure to:
    1. update the images, URLs and text as appropriate to fit the email campaign, 
    2. work with ETO to proof and test the email to ensure copy renders correctly.
 
- Import the Segment: Marketing will engage with MarTech to confirm that any "net new" CDP segment has been imported into SFMC and has been mapped correctly and is ready to use in Journey Builder.
 
- Create the Journey: Marketing and ETO will work to set up the Journey Builder canvas.
    1. Determine the type of Journey appropriate for the campaign 
    2. Identify the Journey entry data source 
    3. Manage how contacts proceed through the Journey by assigning decision points / splits 
    4. Create schedule automation to send messages.

- Configure the Email Message(s): Select the corresponding email message from Content Builder, set send configurations and delivery options (repeat for each engagement split).

### UI functionality and elements that you use

