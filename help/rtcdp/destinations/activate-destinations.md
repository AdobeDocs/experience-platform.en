---
title: Activate profiles and segments to a destination
seo-title: Activate profiles and segments to a destination
description: Activate the data you have in Adobe Real-time Customer Data Platform by mapping segments to destinations. To accomplish this, follow the steps below.
seo-description: Activate the data you have in Adobe Real-time Customer Data Platform by mapping segments to destinations. To accomplish this, follow the steps below.
---

# Activate profiles and segments to a destination

Activate the data you have in Adobe Real-time Customer Data Platform by mapping segments to destinations. To accomplish this, follow the steps below.

## Prerequisites {#prerequisites}

To activate data to destinations, you must have successfully [connected a destination](/help/rtcdp/destinations/connect-destination.md). If you haven't done so already, go to the [destinations catalog](/help/rtcdp/destinations/destinations-catalog.md), browse the supported destinations, and set up one or more destinations.

## Activate data {#activate-data}

1. In **[!UICONTROL Destinations > Browse]**, select the destination where you want to activate your segments.
2. Click the name of the destination. This takes you to the Activate flow.
    ![activate-flow](/help/rtcdp/destinations/assets/activate-flow.png)
    Note that if an activation flow already exists for a destination, you can see the segments that are currently being sent to the destination. Select **[!UICONTROL Edit activation]** in the right rail and follow the steps below to modify the activation details.
3. Select **[!UICONTROL Activate]**;
4. In the **[!UICONTROL Activate destination]** workflow, on the **[!UICONTROL Select Segments]** page, select which segments to send to the destination.
    ![segments-to-destination](/help/rtcdp/destinations/assets/email-select-segments.png)
5. *Conditional*. This step differs depending on the type of destination where you are activating your segments. <br> For *email marketing destinations* and *cloud storage destinations*, on the **[!UICONTROL Select Attributes]** page, select **[!UICONTROL Add new field]** and select the attributes that you want to send to the destination.
   We recommend one of the attributes to be a [unique identifier](/help/rtcdp/destinations/email-marketing-destinations.md#identity) from your union schema. For more information about mandatory attributes, see Identity in the [Email marketing destinations](/help/rtcdp/destinations/email-marketing-destinations.md#identity) article. 
   
    >[!NOTE] 
    > 
    >If any data usage labels have been applied to certain fields within a dataset (rather than the entire dataset), enforcement of those field-level labels on activation occurs under the following conditions:
    >* The fields are used in the segment definition.
    >* The fields are configured as projected attributes for the target destination.
    >
    > Consider the screenshot below. If, for example, the field `person.name.first.Name` had certain data usage labels that conflict with the destination's marketing use case, you would be shown a data usage policy violation in the review step (step 7). For more information, see [Data Governance in Real-time CDP](/help/rtcdp/privacy/data-governance-overview.md#destinations) 

   ![destination-attributes](/help/rtcdp/destinations/assets/select-attributes-step.png)

    <br>&nbsp; 

   For *social destinations*, in the **[!UICONTROL Identity mapping]** step, you can select source attributes to map as target identities in the destination. This step is either optional or mandatory, depending on which primary identity you are using in the schema. <br>&nbsp; 

   *Email address as primary identity*: If you are using email address as primary identity in your schema, you can skip the Identity mapping step, as shown below:

   ![Email address as identity](/help/rtcdp/destinations/assets/email-as-identity.gif)

    <br>&nbsp; 

    *Another ID as primary identity*: If you are using another ID, such as *Rewards ID* or *Loyalty ID*, as primary identity in your schema, you need to manually map the email address from your identity schema as a target identity in the social destination, as shown below:

   ![Loyalty ID as identity](/help/rtcdp/destinations/assets/rewardsid-as-identity.gif)


   Select `Email_LC_SHA256` as target identity if you hashed customer email addresses on data ingestion into Adobe Experience Platform, according to [!DNL Facebook] [email hashing requirements](/help/rtcdp/destinations/facebook-destination.md#email-hashing-requirements). <br> Select `Email` as target identity if the email addresses you are using are not hashed. Adobe Real-time CDP will hash the email addresses to comply with [!DNL Facebook] requirements.
   
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



## Edit activation {#edit-activation}

Follow the steps below to edit existing activation flows in Real-time CDP: 

1. Select **[!UICONTROL Destinations]** in the left navigation bar, then click the **[!UICONTROL Browse]** tab, and click the destination name.
2. Select **[!UICONTROL Edit activation]** in the right rail to change which segments to send to the destination.

## Verify that segment activation was successful {#verify-activation}

### Email marketing destinations and cloud storage destinations

For email marketing destinations and cloud storage destinations, Adobe Real-time CDP creates a tab-delimited `.txt` or `.csv` file in the storage location that you provided. Expect a new file to be created in your storage location every day. The file format is:
`<destination name>id<destination id><timestamp-yyyymmddhhmmss>`

The files you would receive on three consecutive days could look like this:

```
Salesforce_id3544_20191120110000.csv
Salesforce_id3544_20191121123000.csv
Salesforce_id3544_20191122124530.csv
```

The presence of these files in your storage location is confirmation of successful activation.

### Advertising destinations

Check the respective advertising destination that you are activating your data to. If activation was successful, audiences are populated in your advertising platform.

### Social network destinations

For [!DNL Facebook], a successful activation means that a [!DNL Facebook] custom audience would be created programmatically in [Facebook Ads Manager](https://www.facebook.com/adsmanager/manage/). Segment membership in the audience would be added and removed as users are qualified or disqualified for the activated segments.

>[!TIP]
>
>The integration between Adobe Real-time CDP and [!DNL Facebook] supports historical audience backfills. All historical segment qualifications get sent to [!DNL Facebook] when you activate the segments to the destination.

## Disable activation {#disable-activation}

To disable an existing activation flow, follow the steps below:

1. Select **[!UICONTROL Destinations]** in the left navigation bar, then click the **[!UICONTROL Browse]** tab, and click the destination name.
2. Click the **[!UICONTROL Enabled]** control in the right rail to change the activation flow state.
3. In the **Update data flow state** window, select **Confirm** to disable the activation flow.
