---
keywords: activate destination;activate destinations;activate data
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

The steps in the activate workflow vary slightly between destination types. The complete workflow for all destination types is outlined below. 

### Select which destination to activate data to {#select-destination}

Applies to: All destinations

1. In the Adobe Real-time CDP user interface, navigate to **[!UICONTROL Destinations]** > **[!UICONTROL Browse]**, and select the destination where you want to activate your segments.
![browse to destination](assets/oracle-eloqua-connect.png)
2. Click the name of the destination. This takes you to the activation workflow.
    ![activate-flow](assets/activate-flow.png)
    Note that if an activation workflow already exists for a destination, you can see the segments that are currently being activated to the destination. Select **[!UICONTROL Edit activation]** in the right rail and follow the steps below to modify the activation details.
3. Select **[!UICONTROL Activate]**.

<br>&nbsp;

### **[!UICONTROL Select Segments]** step {#select-segments}

Applies to: All destinations

![Select segments step](/help/rtcdp/destinations/assets/select-segments-icon.png)


In the **[!UICONTROL Activate destination]** workflow, on the **[!UICONTROL Select Segments]** page, select one or more segments to activate to the destination. Press **[!UICONTROL Next]** to proceed to the next step.
![segments-to-destination](assets/email-select-segments.png)

<br>&nbsp;

### **[!UICONTROL Identity mapping]** step {#identity-mapping}

Applies to: social destinations and Google Customer Match advertising destination

![Identity mapping step](/help/rtcdp/destinations/assets/identity-mapping-icon.png)

For *social destinations*, in the **[!UICONTROL Identity mapping]** step, you can select source attributes to map as target identities in the destination. This step is either optional or mandatory, depending on which primary identity you are using in the schema. <br>&nbsp; 

*Email address as primary identity*: If you are using email address as primary identity in your schema, you can skip the Identity mapping step, as shown below:

![Email address as identity](assets/email-as-identity.gif)

<br>&nbsp; 

*Another ID as primary identity*: If you are using another ID, such as *Rewards ID* or *Loyalty ID*, as primary identity in your schema, you need to manually map the email address from your identity schema as a target identity in the social destination, as shown below:

![Loyalty ID as identity](assets/rewardsid-as-identity.gif)


Select `Email_LC_SHA256` as target identity if you hashed customer email addresses on data ingestion into Adobe Experience Platform, according to [!DNL Facebook] [email hashing requirements](/help/rtcdp/destinations/facebook-destination.md#email-hashing-requirements). <br> Select `Email` as target identity if the email addresses you are using are not hashed. Adobe Real-time CDP will hash the email addresses to comply with [!DNL Facebook] requirements.
   
![identity mapping after filling in fields](assets/identity-mapping.png)

<br>&nbsp;

### **[!UICONTROL Configure]** step {#configure}

Applies to: Email marketing destinations and cloud storage destinations

![Configure step](/help/rtcdp/destinations/assets/configure-icon.png)

This step is optional. In the **[!UICONTROL Configure]** step, you can configure the file names for each segment you are exporting. The default file names consist of destination name, segment ID, and a date and time indicator. For example, you can edit your exported file names to distinguish between different campaigns or to have the data export time appended to the files.

Select **[!UICONTROL Next]** to use the default file names or click the pencil icon to open a modal window and edit the file names. Note that file names are limited to 255 characters.

![configure file name](assets/activation-workflow-configure-step.png)

In the file name editor, you can select different components to add to the file name. The destination name and segment ID cannot be removed from file names. In addition to these, you can add the following:

* **[!UICONTROL Segment name]**: You can append the segment name to the file name.
* **[!UICONTROL Date and time]**: Select between adding a `MMDDYYYY_HHMMSS` format or a Unix 10-digit timestamp of the time when the files are generated. Select one of these options if you would like your files to have a dynamic file name generated with each incremental export.
* **[!UICONTROL Custom text]**: Add custom text to the file names.

Select **[!UICONTROL Apply changes]** to confirm your selection. 

>[!IMPORTANT] 
> 
>If you don't select the **[!UICONTROL Date and Time]** component, the file names will be static and the new exported file will overwrite the previous file in your storage location with each export. When running a recurring import job from a storage location into an email marketing platform, this is the recommended option.

![edit file name options](assets/activate-workflow-configure-step-2.png)

<br>&nbsp;

### **[!UICONTROL Segment Schedule]** step {#segment-schedule}

Applies to: advertising destinations, social destinations

![segment schedule step](/help/rtcdp/destinations/assets/segment-schedule-icon.png)

On the **[!UICONTROL Segment schedule]** page, you can set the start date for sending data to the destination, as well as the frequency of sending data to the destination.

>[!IMPORTANT]
>
>For social destinations, you must select the origin of your audience in this step. You can proceed to the next step only after selecting one of the options in the image below.

![choose data origin](assets/choose-data-origin.png) 

<br>&nbsp;

### **[!UICONTROL Scheduling]** step {#scheduling}

Applies to: email marketing destinations and cloud storage destinations

![segment schedule step](assets/scheduling-icon.png)

On the **[!UICONTROL Scheduling]** page, you can see the start date for sending data to the destination as well as the frequency of sending data to the destination. These values cannot be edited.

<br>&nbsp;

### **[!UICONTROL Select attributes]** step {#select-attributes}

Applies to: email marketing destinations and cloud storage destinations

![select attributes step](/help/rtcdp/destinations/assets/select-attributes-icon.png)


On the **[!UICONTROL Select Attributes]** page, select **[!UICONTROL Add new field]** and select the attributes that you want to send to the destination.

>[!NOTE] 
>
> Adobe Real-time CDP prefills your selection with four recommended, commonly-used attributes from your schema: `person.name.firstName`, `person.name.lastName`, `personalEmail.address`, `segmentMembership.status`.
> 
File exports will vary as follows, depending on whether `segmentMembership.status` is selected:
* If the `segmentMembership.status` field is selected, exported files include **Active** members in the initial full snapshot and **Active** and **Expired** members in subsequent incremental exports.
* If the `segmentMembership.status` field is not selected, exported files include only **Active** members in the initial full snapshot and in subsequent incremental exports.

![recommended attributes](/help/rtcdp/destinations/assets/recommended-attributes.png) 


We recommend one of the attributes to be a [unique identifier](/help/rtcdp/destinations/email-marketing-destinations.md#identity) from your schema. For more information about mandatory attributes, see Identity in the [Email marketing destinations](/help/rtcdp/destinations/email-marketing-destinations.md#identity) article. 
   
>[!NOTE] 
> 
>If any data usage labels have been applied to certain fields within a dataset (rather than the entire dataset), enforcement of those field-level labels on activation occurs under the following conditions:
>* The fields are used in the segment definition.
>* The fields are configured as projected attributes for the target destination.
>
> Consider the screenshot below. If, for example, the field `person.name.firstName` had certain data usage labels that conflict with the destination's marketing use case, you would be shown a data usage policy violation in the review step (step 9). For more information, see [Data Governance in Real-time CDP](/help/rtcdp/privacy/data-governance-overview.md#destinations).

![destination-attributes](assets/select-attributes-step.png)

<br>&nbsp;

### **[!UICONTROL Review]** step {#review}

Applies to: all destinations 

![review step](/help/rtcdp/destinations/assets/review-icon.png)

On the **[!UICONTROL Review]** page, you can see a summary of your selection. Select **[!UICONTROL Cancel]** to break up the flow, **[!UICONTROL Back]** to modify your settings, or **[!UICONTROL Finish]** to confirm your selection and start sending data to the destination.

>[!IMPORTANT]
>
>In this step, Real-time CDP checks for data usage policy violations. Shown below is an example where a policy is violated. You cannot complete the segment activation workflow until you have resolved the violation. For information on how to resolve policy violations, see [Policy enforcement](/help/rtcdp/privacy/data-governance-overview.md#enforcement) in the data governance documentation section.
 
![data policy violation](assets/data-policy-violation.png)

If no policy violations have been detected, select **[!UICONTROL Finish]** to confirm your selection and start sending data to the destination. 

![confirm-selection](assets/confirm-selection.png)


## Edit activation {#edit-activation}

Follow the steps below to edit existing activation flows in Real-time CDP: 

1. Select **[!UICONTROL Destinations]** in the left navigation bar, then click the **[!UICONTROL Browse]** tab, and click the destination name.
2. Select **[!UICONTROL Edit activation]** in the right rail to change which segments to send to the destination.

## Verify that segment activation was successful {#verify-activation}

### Email marketing destinations and cloud storage destinations {#esp-and-cloud-storage}

For email marketing destinations and cloud storage destinations, Adobe Real-time CDP creates a tab-delimited `.csv` or `.txt` file in the storage location that you provided. Expect a new file to be created in your storage location every day. The default file format is:
`<destinationName>_segment<segmentID>_<timestamp-yyyymmddhhmmss>.csv|txt`

Note that you can edit the file format. For more information, go to the [Configure](/help/rtcdp/destinations/activate-destinations.md#configure) step for cloud storage destinations and email marketing destinations. 

With the default file format, the files you would receive on three consecutive days could look like this:

```console
Salesforce_Marketing_Cloud_segment12341e18-abcd-49c2-836d-123c88e76c39_20200408061804.csv
Salesforce_Marketing_Cloud_segment12341e18-abcd-49c2-836d-123c88e76c39_20200409052200.csv
Salesforce_Marketing_Cloud_segment12341e18-abcd-49c2-836d-123c88e76c39_20200410061130.csv
```

The presence of these files in your storage location is confirmation of successful activation. To understand how the exported files are structured, you can [download a sample .csv file](assets/sample_export_file_segment12341e18-abcd-49c2-836d-123c88e76c39_20200408061804.csv). This sample file includes the profile attributes `person.firstname`, `person.lastname`, `person.gender`, `person.birthyear`, and `personalEmail.address`.

### Advertising destinations

Check your account in the respective advertising destination that you are activating your data to. If activation was successful, audiences are populated in your advertising platform.

### Social network destinations

For [!DNL Facebook], a successful activation means that a [!DNL Facebook] custom audience would be created programmatically in [[!UICONTROL Facebook Ads Manager]](https://www.facebook.com/adsmanager/manage/). Segment membership in the audience would be added and removed as users are qualified or disqualified for the activated segments.

>[!TIP]
>
>The integration between Adobe Real-time CDP and [!DNL Facebook] supports historical audience backfills. All historical segment qualifications get sent to [!DNL Facebook] when you activate the segments to the destination.

## Disable activation {#disable-activation}

To disable an existing activation flow, follow the steps below:

1. Select **[!UICONTROL Destinations]** in the left navigation bar, then click the **[!UICONTROL Browse]** tab, and click the destination name.
2. Click the **[!UICONTROL Enabled]** control in the right rail to change the activation flow state.
3. In the **Update data flow state** window, select **Confirm** to disable the activation flow.
