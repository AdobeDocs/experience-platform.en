---
title: Google Customer Match Destination
seo-title: Google Customer Match Destination
description: Google Customer Match lets you use your online and offline data to reach and re-engage with your customers across Google's owned and operated properties, such as Search, Shopping, Gmail, YouTube, and Display.
seo-description: Google Customer Match lets you use your online and offline data to reach and re-engage with your customers across Google's owned and operated properties, such as Search, Shopping, Gmail, YouTube, and Display.
---

# Google Customer Match Destination

## Overview {#overview}

[Google Customer Match](https://support.google.com/google-ads/answer/6379332?hl=en) lets you use your online and offline data to reach and re-engage with your customers across Google's owned and operated properties, such as: Search, Shopping, Gmail, YouTube, and Display.

![Google Customer Match destination in the Real-time CDP UI](/help/rtcdp/destinations/assets/google-customer-match-catalog.png)

## Use Cases

To help you better understand how and when you should use the Google Customer Match destination, here are sample use cases that Adobe Real-time Customer Data Platform customers can solve by using this feature.


### Use Case #1


Fill in with use case


### Use Case #2


Fill in with use case

## Data governance for Google Customer Match destinations {#data-governance}

Are there any data governance callouts that we want to mention?

## Activation Type and Identities {#activation-type}

**Segment Export** - you are exporting all members of a segment (audience) with the identifiers (name, phone number, etc.) used in the Google Customer Match destination.

**Identities** - you can use raw or hashed emails as customer IDs in Google

## Google Customer Match account prerequisites {#google-account-prerequisites}

### Allow list {#allowlist}

>[!NOTE]
>
>The allow list is mandatory before setting up your first Google Ads destination in Adobe Real-time CDP. Please ensure the allow list process described below has been completed by Google before creating a destination.

Before creating the Google Ads destination in Adobe Real-time CDP, you must contact Google for Adobe to be put on the list of allowed data providers, and for your account to be added to the allow list. Contact Google and provide the following information:

* **Account ID** : this is Adobe's account ID with Google. Contact Adobe Customer Care or your Adobe representative to obtain this ID.
* **Customer ID** : this is Adobe's customer account ID with Google. Contact Adobe Customer Care or your Adobe representative to obtain this ID.
* Your account type: **AdWords**
* **Google AdWords ID** : This is your ID with Google. The ID format is typically 123-456-7890.

Before you can send your audience segments to [!DNL Google Customer Match], please read [Use Customer Match partners to upload your data](https://support.google.com/google-ads/answer/7361372?hl=en&ref_topic=6296507) in the Google Customer Match documentation.


### Email hashing requirements {#hashing-requirements}

<!--

>[!IMPORTANT]
>
> When using mobile device IDs as identifiers, an AppId must be provided in the activation flow. For more information, see step 6 in the [Activate segments](#activate-segments) section of this page.

-->

Google requires that no personally identifiable information (PII) is sent in clear. Therefore, the audiences activated to Google Customer Match must be keyed off *hashed* email addresses. You can choose to hash email addresses before ingesting them into Adobe Experience Platform, or you can choose to work with email addresses in clear in Experience Platform and have our algorithm hash them on activation.

For more information about Google's hashing requirements and other restrictions on activation, see the following sections in Google's documentation:

* [Customer Match with email address, address, or user ID](https://developers.google.com/adwords/api/docs/guides/remarketing#customer_match_with_email_address_address_or_user_id)
* [Customer Match with phone number](https://developers.google.com/adwords/api/docs/guides/remarketing#customer_match_with_phone_number)
* [Customer Match with mobile device IDs](https://developers.google.com/adwords/api/docs/guides/remarketing#customer_match_with_mobile_device_ids)
* [Customer Match considerations](https://developers.google.com/adwords/api/docs/guides/remarketing#customer_match_considerations)

To learn about ingesting email addresses in Experience Platform, see the [batch ingestion overview](/help/ingestion/batch-ingestion/overview.md) and the [steaming ingestion overview](/help/ingestion/streaming-ingestion/overview.md).

If you select to hash the email addresses yourself, make sure to comply with Google's requirements, outlined in the links above.


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
    >Adobe Real-time CDP supports credentials validation in the authentication process and displays an error message if you input incorrect credentials to your Google Ad Account. This ensures that you don't complete the workflow with incorrect credentials.

    ![Connect to Google Customer Match destination - authentication step](/help/rtcdp/destinations/assets/google-customer-match-pre-connect-view.png)

3. Once your credentials are confirmed and Adobe Experience Cloud is connected to your Google account, you can select **[!UICONTROL Next]** to proceed to the **[!UICONTROL Setup]** step.

    ![Credentials confirmed](/help/rtcdp/destinations/assets/google-customer-match-connection-success.png)

4. In the **[!UICONTROL Authentication]** step, enter a **[!UICONTROL Name]** and a **[!UICONTROL Description]** for your activation flow and fill your Google the **[!UICONTROL Account ID]**. <br> Also in this step, you can select any **[!UICONTROL Marketing use case]** that should apply to this destination. Marketing use cases indicate the intent for which data will be exported to the destination. You can select from Adobe-defined marketing use cases or you can create your own marketing use case. For more information about marketing use cases, see the [Data Governance in Real-time CDP](/help/rtcdp/privacy/data-governance-overview.md#destinations) page. For information about the individual Adobe-defined marketing use cases, see the [Data usage policies overview](/help/data-governance/policies/overview.md#core-actions). <br> Select **[!UICONTROL Create Destination]** after you filled in the fields above.

    >[!IMPORTANT]
    >
    > For Google Customer Match destinations. **[!UICONTROL Account ID]** is your xxxxxxxxx Account ID. You can find this ID in xxxxxxxx. 

    ![Connect Google Customer Match - authentication step](/help/rtcdp/destinations/assets/google-customer-match-authentication-step.png)

5. Your destination is now created. You can select **[!UICONTROL Save & Exit]** if you want to activate segments later on or you can select **[!UICONTROL Next]** to continue the workflow and select segments to activate. In either case, see the next section, [Activate segments to Google Customer Match](#activate-segments), for the rest of the workflow.


## Activate segments to Google Customer Match {#activate-segments}

To activate segments to Google Customer Match, follow the steps below: 

1. In **[!UICONTROL Destinations > Browse]**, select the Google Customer Match destination where you want to activate your segments.
2. Click the name of the destination. This takes you to the Activate flow.
    ![activate-flow](/help/rtcdp/destinations/assets/google-customer-match-activate-flow.png)
    Note that if an activation flow already exists for a destination, you can see the segments that are currently being sent to the destination. Select **[!UICONTROL Edit activation]** in the right rail and follow the steps below to modify the activation details.
3. Select **[!UICONTROL Activate]**;
4. In the **[!UICONTROL Activate destination]** workflow, on the **[!UICONTROL Select Segments]** page, select which segments to send to Google Customer Match.
    ![segments-to-destination](/help/rtcdp/destinations/assets/activate-segments-google-customer-match.png)
5.  In the **[!UICONTROL Identity mapping]** step, you can select attributes that are not already labeled to be included as an identity in this destination. Identities that are already labeled as primary identities in your unified schema will be included. <br>&nbsp; 

   *Email address as primary identity*: If you are using email address as primary identity in your schema, you can skip the Identity mapping step, as shown below:

   ![Email address as identity](/help/rtcdp/destinations/assets/email-as-identity.gif)

    <br>&nbsp; 

    *Another ID as primary identity*: If you are using another ID, such as *Rewards ID* or *Loyalty ID*, as primary identity in your schema, you need to manually map the email address from your identity schema as a target identity in the social destination, as shown below:

   ![Loyalty ID as identity](/help/rtcdp/destinations/assets/rewardsid-as-identity.gif)
6. On the **[!UICONTROL Segment schedule]** page, you can set the start date for sending data to the destination.
7. On the **[!UICONTROL Review]** page, you can see a summary of your selection. Select **[!UICONTROL Cancel]** to break up the flow, **[!UICONTROL Back]** to modify your settings, or **[!UICONTROL Finish]** to confirm your selection and start sending data to the destination.

    >[!IMPORTANT]
    >
    >In this step, Real-time CDP checks for data usage policy violations. Shown below is an example where a policy is violated. You cannot complete the segment activation workflow until you have resolved the violation. For information on how to resolve policy violations, see [Policy enforcement](/help/rtcdp/privacy/data-governance-overview.md#enforcement) in the data governance documentation section.
 
 ![confirm-selection](/help/rtcdp/destinations/assets/data-policy-violation.png)

  If no policy violations have been detected, select **[!UICONTROL Finish]** to confirm your selection and start sending data to the destination.

 ![confirm-selection](/help/rtcdp/destinations/assets/gcm-review.png)


<!--

Insert in Step 6 when mobile device ID activation is available

    >[!IMPORTANT]
    >
    >If you select mobile device IDs (GAID or IDFA) as primary identity in the Identity mapping step, you must also provide an Application Id in this step. If you selected GAID as identity, see [Set the Application ID](https://developer.android.com/studio/build/application-id) in the Android developer documentation. IF you selected IDFA as identity, see [App ID](https://developer.android.com/studio/build/application-id) in the Apple developer documentation.

    ![segment schedule page](/help/rtcdp/destinations/assets/gcm-segment-schedule.png) 

-->

## Verify that segment activation was successful {#verify-activation}

Check the segment numbers in Google Customer Match. If the activation was successful, audiences are populated in your advertising platform.
