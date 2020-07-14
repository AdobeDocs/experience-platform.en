---
title: Google Customer Match Destination
seo-title: Google Customer Match Destination
description: Activate profiles for your Facebook campaigns for audience targeting, personalization and suppression based on hashed emails.
seo-description: Activate profiles for your Facebook campaigns for audience targeting, personalization and suppression based on hashed emails.
---

# Google Customer Match Destination

## Overview {#overview}

[Google Customer Match](https://support.google.com/google-ads/answer/6379332?hl=en) lets you use your online and offline data to reach and re-engage with your customers across Search, Shopping, Gmail, YouTube, and Display.

![Google Customer Match destination in the Real-time CDP UI](/help/rtcdp/destinations/assets/google-customer-match-catalog.png)

## Use Cases

To help you better understand how and when you should use the Google Customer Match destination, here are  sample use cases that Adobe Real-time Customer Data Platform customers can solve by using this feature.


### Use Case #1


An online retailer wants to reach existing customers through social platforms and show them personalized offers based on their previous orders. The online retailer can ingest email addresses from their own CRM to Adobe Real-time CDP, build segments from their own offline data, and send these segments to the Facebook social platform, optimizing their advertising spending.


### Use Case #2


An airline has different customer tiers (Bronze, Silver, and Gold), and wants to provide each of the tiers with personalized offers via social platforms. However, not all customers use the airline's mobile app, and some of them have not logged on to the company's website. The only identifiers the company has about these customers are membership IDs and email addresses. 

To target them across social media, they can onboard the customer data from their CRM into Adobe Real-time CDP, using the email addresses as identifiers.

Next, they can use their offline data including associated membership IDs and customer tiers to build new audience segments that they can target through the Facebook destination.

## Destination specifics {#destination-specs}

### Data governance for Google Customer Match destinations {#data-governance}

>[!IMPORTANT]
>
>Data sent to Facebook should not include stitched identities. You are responsible for honoring this obligation and can do so by ensuring that segments selected for activation do not use a stitching option in their merge policy. Learn more about [merge policies](/help/profile/ui/merge-policies.md).

### Activation Type {#activation-type}

**Segment Export** - you are exporting all members of a segment (audience) with the identifiers (name, phone number, etc.) used in the Google Customer Match destination.

For Google Customer Match, in the activation workflow, you can use customer hashed emails or phone numbers as identifiers

### Google Customer Match account prerequisites {#google-account-prerequisites}

Before you can send your audience segments to [!DNL Google Customer Match], please read the Google Customer Match documentation:

[Use Customer Match partners to upload your data](https://support.google.com/google-ads/answer/7361372?hl=en&ref_topic=6296507)


### Email and phone number hashing requirements {#hashing-requirements}

Google requires that no personally identifiable information (PII) is sent in clear. Therefore, the audiences activated to Google Customer Match must be keyed off *hashed* email addresses or phone numbers. You can choose to hash email addresses before ingesting them into Adobe Experience Platform, or you can choose to work with email addresses in clear in Experience Platform and have our algorithm hash them on activation.

For more information about Google's hashing requirements and other restrictions on activation, see the following sections in Google's documentation:

* [Customer Match with email address, address, or user ID](https://developers.google.com/adwords/api/docs/guides/remarketing#customer_match_with_email_address_address_or_user_id)
* [Customer Match with phone number](https://developers.google.com/adwords/api/docs/guides/remarketing#customer_match_with_phone_number)
* [Customer Match with mobile device IDs](https://developers.google.com/adwords/api/docs/guides/remarketing#customer_match_with_mobile_device_ids)
* [Customer Match considerations](https://developers.google.com/adwords/api/docs/guides/remarketing#customer_match_considerations)

To learn about ingesting email addresses in Experience Platform, see the [batch ingestion overview](/help/ingestion/batch-ingestion/overview.md) and the [steaming ingestion overview](/help/ingestion/streaming-ingestion/overview.md).

If you select to hash the email addresses yourself, make sure to comply with the Google's requirements, outlined in the links above.


>[!IMPORTANT]
>
>If you choose not to hash email addresses, Adobe Real-time CDP will do that for you when you activate segments to Google Customer Match. In the [activation workflow](/help/rtcdp/destinations/activate-destinations.md#activate-data) (see step 5), select the `Email` option as shown below for *raw email addresses* and `Email_LC_SHA256` for *hashed email addresses*.


![Hashing on activation](/help/rtcdp/destinations/assets/identity-mapping.png)

## Connect to destination {#connect-destination}

1. In **[!UICONTROL Destinations > Catalog]**, scroll to the **[!UICONTROL Advertising]** category. Select Google Customer Match, then select **[!UICONTROL Connect destination]**.

    ![Connect to Google Customer Match destination](/help/rtcdp/destinations/assets/connect-google-customer-match.png)

2. In the **Authentication** step, if you had previously set up a connection to your Google Customer Match destination, select **[!UICONTROL Existing Account]** and select your existing connection. Or, you can select **[!UICONTROL New Account]** to set up a new connection to Google Customer Match. Select **[!UICONTROL Connect to destination]** to log in and connect Adobe Experience Cloud to your Google Ad account.

    >[!NOTE]
    >
    >Adobe Real-time CDP supports credentials validation in the authentication process and displays an error message if you input incorrect credentials to your social network account ID. This ensures that you don't complete the workflow with incorrect credentials.

    ![Connect to Google Customer Match destination - authentication step](/help/rtcdp/destinations/assets/google-customer-match-pre-connect-view.png)

3. Once your credentials are confirmed and Adobe Experience Cloud is connected to your Google account, you can select **[!UICONTROL Next]** to proceed to the **[!UICONTROL Setup]** step.

    ![Credentials confirmed](/help/rtcdp/destinations/assets/google-customer-match-connection-success.png)

4. In the **[!UICONTROL Authentication]** step, enter a **[!UICONTROL Name]** and a **[!UICONTROL Description]** for your activation flow and fill your Google the **[!UICONTROL Account ID]**. <br> Also in this step, you can select any **[!UICONTROL Marketing use case]** that should apply to this destination. Marketing use cases indicate the intent for which data will be exported to the destination. You can select from Adobe-defined marketing use cases or you can create your own marketing use case. For more information about marketing use cases, see the [Data Governance in Real-time CDP](/help/rtcdp/privacy/data-governance-overview.md#destinations) page. For information about the individual Adobe-defined marketing use cases, see the [Data usage policies overview](/help/data-governance/policies/overview.md#core-actions). <br> Select **[!UICONTROL Create Destination]** after you filled in the fields above.

    >[!IMPORTANT]
    >
    > For Google Customer Match destinations. **[!UICONTROL Account ID]** is your xxxxxxxxx Account ID. You can find this ID in xxxxxxxx. Prefix the ID with `act_` as shown below: 

    ![Connect to social network destination - setup step](/help/rtcdp/destinations/assets/google-customer-match-authentication-step.png)

5. Your destination is now created. You can select **[!UICONTROL Save & Exit]** if you want to activate segments later on or you can select **[!UICONTROL Next]** to continue the workflow and select segments to activate. In either case, see the next section, [Activate segments to social networks](#activate-segments), for the rest of the workflow.


## Activate segments to Google Customer Match {#activate-segments}

To activate segments to Google Customer Match, follow the steps below: 

1. In **[!UICONTROL Destinations > Browse]**, select the Google Customer Match destination where you want to activate your segments.
2. Click the name of the destination. This takes you to the Activate flow.
    ![activate-flow](/help/rtcdp/destinations/assets/google-customer-match-activate-flow.png)
    Note that if an activation flow already exists for a destination, you can see the segments that are currently being sent to the destination. Select **[!UICONTROL Edit activation]** in the right rail and follow the steps below to modify the activation details.
3. Select **[!UICONTROL Activate]**;
4. In the **[!UICONTROL Activate destination]** workflow, on the **[!UICONTROL Select Segments]** page, select which segments to send to Google Customer Match.
    ![segments-to-destination](/help/rtcdp/destinations/assets/activate-segments-google-customer-match.png)
5. In the **[!UICONTROL Identity mapping]** step, you can select source attributes to map as target identities in the destination. This step is either optional or mandatory, depending on which primary identity you are using in the schema. <br>&nbsp; 

   *Email address as primary identity*: If you are using email address as primary identity in your schema, you can skip the Identity mapping step, as shown below:

   ![Email address as identity](/help/rtcdp/destinations/assets/email-as-identity.gif)

    <br>&nbsp; 

    *Another ID as primary identity*: If you are using another ID, such as *Rewards ID* or *Loyalty ID*, as primary identity in your schema, you need to manually map the email address from your identity schema as a target identity in the social destination, as shown below:

   ![Loyalty ID as identity](/help/rtcdp/destinations/assets/rewardsid-as-identity.gif)


   Select `Email_LC_SHA256` as target identity if you hashed customer email addresses on data ingestion into Adobe Experience Platform, according to Google [hashing requirements](#hashing-requirements). <br> Select `Email` as target identity if the email addresses you are using are not hashed. Adobe Real-time CDP will hash the email addresses to comply with Google requirements.
   
   ![identity mapping after filling in fields](/help/rtcdp/destinations/assets/identity-mapping.png)
   
    >[!NOTE] 
    > 
    >If any data usage labels have been applied to certain fields within a dataset (rather than the entire dataset), enforcement of those field-level labels on activation occurs if the fields are used in the segment definition.

   ![destination-attributes](/help/rtcdp/destinations/assets/select-attributes-step.png)

    <br>&nbsp; 

   For *social destinations*, in the **[!UICONTROL Identity mapping]** step, you can select source attributes to map as target identities in the destination. This step is either optional or mandatory, depending on which primary identity you are using in the schema. <br>&nbsp; 

   *Email address as primary identity*: If you are using email address as primary identity in your schema, you can skip the Identity mapping step, as shown below:

   ![Email address as identity](/help/rtcdp/destinations/assets/email-as-identity.gif)

    <br>&nbsp; 

    *Another ID as primary identity*: If you are using another ID, such as *Rewards ID* or *Loyalty ID*, as primary identity in your schema, you need to manually map the email address from your identity schema as a target identity in the social destination, as shown below:

   ![Loyalty ID as identity](/help/rtcdp/destinations/assets/rewardsid-as-identity.gif)


   Select `Email_LC_SHA256` as target identity if you hashed customer email addresses on data ingestion into Adobe Experience Platform, according to Facebook [email hashing requirements](/help/rtcdp/destinations/facebook-destination.md#email-hashing-requirements). <br> Select `Email` as target identity if the email addresses you are using are not hashed. Adobe Real-time CDP will hash the email addresses to comply with Facebook requirements.
   
   ![identity mapping after filling in fields](/help/rtcdp/destinations/assets/identity-mapping.png)

6. On the **[!UICONTROL Segment schedule]** page, you can see the start date for sending data to the destination, as well as the frequency of sending data to the destination.

    >[!IMPORTANT]
    >
    >For social destinations, you must select the origin of your audience in this step. You can proceed to the next step only after selecting one of the options in the image below.

    ![choose data origin](/help/rtcdp/destinations/assets/choose-data-origin.png) 

7. On the **[!UICONTROL Review]** page, you can see a summary of your selection. Select **[!UICONTROL Cancel]** to break up the flow, **[!UICONTROL Back]** to modify your settings, or **[!UICONTROL Finish]** to confirm your selection and start sending data to the destination.

    >[!IMPORTANT]
    >
    >In this step, Real-time CDP checks for data usage policy violations. Shown below is an example where a policy is violated. You cannot complete the segment activation workflow until you have resolved the violation. For information on how to resolve policy violations, see [Policy enforcement](/help/rtcdp/privacy/data-governance-overview.md#enforcement) in the data governance documentation section.
 
 ![confirm-selection](/help/rtcdp/destinations/assets/data-policy-violation.png)

  If no policy violations have been detected, select **[!UICONTROL Finish]** to confirm your selection and start sending data to the destination. 

 ![confirm-selection](/help/rtcdp/destinations/assets/confirm-selection.png)
