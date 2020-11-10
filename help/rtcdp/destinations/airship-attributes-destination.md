---
keywords: airship attributes;airship destination
title: Airship Attributes Destination
seo-title: Airship Attributes Destination
description: Seamlessly pass Adobe Audience Data to Airship as Audience Attributes for targeting within Airship.
seo-description: Seamlessly pass Adobe Audience Data to Airship as Audience Attributes for targeting within Airship.
---

# Airship Attributes Destination {#airship-attributes-destination}



## Overview

Airship is the leading Customer Engagement Platform, helping you deliver meaningful, personalized omnichannel messaging to your users at every stage of the customer lifecycle.

This integration passes Adobe segment data into Airship as [Attributes](https://docs.airship.com/guides/audience/attributes/) for targeting or triggering.

To learn more about Airship, see the [Airship Docs](https://docs.airship.com).


>[!TIP]
>
>This documentation page was created by the Airship team. For any inquiries or update requests, please contact them directly at [support.airship.com](https://support.airship.com/).

## Prerequisites

Before you can send your audience segments to Airship, you must:

* Enable attributes in your Airship project.
* Generate a bearer token for authentication.

> [!TIP]
> Create an Airship account via [this signup link](https://go.airship.eu/accounts/register/plan/starter/) if you have not already.

### Tag groups

The concept of Adobe *Segments* is similar to [Attributes](https://docs.airship.com/guides/audience/attributes/) in Airship, with slight differences in implementation. This integration maps the status of a user's [membership in an Adobe segment](https://experienceleague.adobe.com/docs/experience-platform/xdm/mixins/profile/segmentation.html?lang=en#mixins) to the presence or non-presence of an Airship tag. For example, in an Adobe segment where the `xdm:status` changes `realized`,
the tag is added to the Airship channel or named user this profile is mapped to. If the `xdm:status` changes to `exited`, the tag is removed.

To enable this integration, create a *tag group* in Airship named `ADOBEEXPERIENCEPLATFORMSEGMENTS`.

See [Manage Tag Groups](https://docs.airship.com/tutorials/manage-project/messaging/tag-groups) for instructions on creating the tag group.

### Bearer token

1. Go to *Settings » APIs & Integrations* in the [Airship dashboard](https://go.airship.com) and select *Tokens* in the left-hand menu.
1. Click *Create Token*.
1. Provide a user-friendly name for your token, e.g., "Adobe Attributes Destination", and select "All Access" for the role.
1. Click *Create Token* and save the details as confidential.




## Use Cases

To help you better understand how and when you should use the *Airship Attributes* destination, here are sample use cases that Adobe Real-time Customer Data Platform customers can solve by using this destination.


### Use Case #1

Leverage profile data collected within Adobe CDP for personalization of the message and rich content within any of Airship's channels. For example, leverage Adobe profile data to set location attributes within Airship. This will enable a hotel brand to display an image for the nearest hotel location for each user.

### Use Case #2

Leverage Attributes set by Adobe to further enrich Airship profiles and combine it with SDK or Airship predictive data. For example, a retailer can create a segment with loyalty status and location data (attributes from Adobe) and Airship predicted to churn data to send highly targeted messages to users in the gold loyalty status who live in Las Vegas, NV, and have a high probability of churning.

## Connect to Airship Attributes {#connect-airship-attributes}

1. In **[!UICONTROL Destinations]** > **[!UICONTROL Catalog]**, scroll to the ***Mobile Engagement*** category. Select ***Airship Attributes***, then select **[!UICONTROL Configure]**.


    >[!NOTE]
    >
    >If a connection with this destination already exists, you can see an **[!UICONTROL Activate]** button on the destination card. For more information about the difference between **[!UICONTROL Activate]** and **[!UICONTROL Configure]**, refer to the [Catalog](/help/rtcdp/destinations/destinations-workspace.md#catalog) section of the destination workspace documentation.

    ![Connect to Airship Attributes](/help/rtcdp/destinations/assets/yourdestination1.png)

2. In the **Account** step, if you had previously set up a connection to your *Airship Attributes* destination, select **[!UICONTROL Existing Account]** and select your existing connection. Or, you can select **[!UICONTROL New Account]** to set up a new connection to *Airship Attributes*. Select **[!UICONTROL Connect to destination]** to connect Adobe Experience Cloud to your *Airship* project using the bearer token that you generated from the Airship dashboard.


    >[!NOTE]
    >
    >Adobe Experience Platform supports credentials validation in the authentication process and displays an error message if you input incorrect credentials to your ***Airship*** account. This ensures that you don't complete the workflow with incorrect credentials.

    ![Connect to Airship Attributes](/help/rtcdp/destinations/assets/airship1-connect-to-airship.png)

3. Once your credentials are confirmed and Adobe Experience Cloud is connected to your ***Airship*** project, you can select **[!UICONTROL Next]** to proceed to the **[!UICONTROL Setup]** step.

4. In the **[!UICONTROL Authentication]** step, enter a **[!UICONTROL Name]** and a **[!UICONTROL Description]** for your activation flow. <br> Also in this step, you can select either US or EU data center, depending on which Airship data center applies to this destination. Finally, select one or more marketing use cases for which data will be exported to the destination. You can select from Adobe-defined marketing use cases or you can create your own. For more information about marketing use cases, see the [Data Governance in Real-time CDP](/help/rtcdp/privacy/data-governance-overview.md#destinations) page. For information about the individual Adobe-defined marketing use cases, see the [Data usage policies overview](/help/data-governance/policies/overview.md#core-actions). <br> Select **[!UICONTROL Create Destination]** after you have filled in the fields above.

    ![Connect to Airship Attributes](/help/rtcdp/destinations/assets/airship2-select-airship-domain.png)

5. Your destination is now created. You can select **[!UICONTROL Save & Exit]** if you want to activate segments later on or you can select **[!UICONTROL Next]** to continue the workflow and select segments to activate. In either case, see the next section, [Activate segments](#activate-segments), for the rest of the workflow.

## Activate segments {#activate-segments}

To activate segments to *Airship Attributes*, follow the steps below:

1. In **[!UICONTROL Destinations > Browse]**, select the *Airship Attributes* destination where you want to activate your segments.
2. Click the name of the destination. This takes you to the Activate flow.
    ![activate-flow](/help/rtcdp/destinations/assets/yourdestination3.png)
    Note that if an activation flow already exists for a destination, you can see the segments that are currently being sent to the destination. Select **[!UICONTROL Edit activation]** in the right rail and follow the steps below to modify the activation details.
3. Select **[!UICONTROL Activate]**;
4. In the **[!UICONTROL Activate destination]** workflow, on the **[!UICONTROL Select Segments]** page, select which segments to send to *Airship Attributes*.
    ![segments-to-destination](/help/rtcdp/destinations/assets/airshiptags3-select-segments.png)
5.  In the **[!UICONTROL Mapping]** step, select which attributes and identities from the [XDM](https://docs.adobe.com/content/help/en/experience-platform/xdm/home.html) schema to map to the destination schema. Select **[!UICONTROL Add new mapping]** to browse your schema and map them to the corresponding target identity.
![identity mapping initial screen](/help/rtcdp/destinations/assets/gcm-identity-mapping.png)
   Airship tags can be set either on a channel, which represents device instance, e.g., iPhone, or a named user, which maps all of a user's devices to a common identifier such as a customer ID. If you have plain text (unhashed) email addresses as primary identity in your schema, select the email field in your **[!UICONTROL Source Attributes]** and map to the Airship named user in the right column under **[!UICONTROL Target Identities]**, as shown below.
   ![Named User Mapping](/help/rtcdp/destinations/assets/airshiptags7-mappingoption2.png)
   For identifiers that should be mapped to a channel, i.e., a device, map to the appropriate channel based on the source. In the following screen shots, we will map a Google Advertising ID to an Airship Android channel. ![Connect to Airship Attributes](/help/rtcdp/destinations/assets/airshiptags4-select-source-identity.png) ![Connect to Airship Attributes](/help/rtcdp/destinations/assets/airshiptags5-select-target-identity.png) ![Channel Mapping](/help/rtcdp/destinations/assets/airshiptags6-mappingoption1.png)


6. On the **[!UICONTROL Segment schedule]** page, you can set the start date for sending data to the destination.
7. On the **[!UICONTROL Review]** page, you can see a summary of your selection. Select **[!UICONTROL Cancel]** to break up the flow, **[!UICONTROL Back]** to modify your settings, or **[!UICONTROL Finish]** to confirm your selection and start sending data to the destination.

>[!IMPORTANT]
>
>In this step, Adobe Experience Platform checks for data usage policy violations. Shown below is an example where a policy is violated. You cannot complete the segment activation workflow until you have resolved the violation. For information on how to resolve policy violations, see [Policy enforcement](/help/rtcdp/privacy/data-governance-overview.md#enforcement) in the data governance documentation section.

![confirm-selection](/help/rtcdp/destinations/assets/data-policy-violation.png)

If no policy violations have been detected, select **[!UICONTROL Finish]** to confirm your selection and start sending data to the destination.

![confirm-selection](/help/rtcdp/destinations/assets/gcm-review.png)










