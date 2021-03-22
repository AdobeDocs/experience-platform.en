---
keywords: airship attributes;airship destination
title: Airship Attributes connection
description: Seamlessly pass Adobe Audience Data to Airship as Audience Attributes for targeting within Airship.
---

# (Beta) [!DNL Airship Attributes] connection {#airship-attributes-destination}

>[!IMPORTANT]
>
>The [!DNL Airship Attributes] destination in Adobe Experience Platform is currently in beta. The documentation and the functionality are subject to change.

## Overview {#overview}

[!DNL Airship] is the leading Customer Engagement Platform, helping you deliver meaningful, personalized omnichannel messaging to your users at every stage of the customer lifecycle.

This integration passes Adobe profile data into [!DNL Airship] as [Attributes](https://docs.airship.com/guides/audience/attributes/) for targeting or triggering.

To learn more about [!DNL Airship], see the [Airship Docs](https://docs.airship.com).


>[!TIP]
>
>This documentation page was created by the [!DNL Airship] team. For any inquiries or update requests, please contact them directly at [support.airship.com](https://support.airship.com/).

## Prerequisites {#prerequisites}

Before you can send your audience segments to [!DNL Airship], you must:

* Enable attributes in your [!DNL Airship] project.
* Generate a bearer token for authentication.

>[!TIP]
>
>Create an [!DNL Airship] account via [this signup link](https://go.airship.eu/accounts/register/plan/starter/) if you have not already.

## Enable attributes {#enable-attributes}

Adobe Experience Platform profile attributes are similar to [!DNL Airship] attributes and can be easily mapped to one another in Platform using the mapping tool demonstrated further below on this page.

[!DNL Airship] projects have several predefined and default attributes. If you have a custom attribute, you must define it in [!DNL Airship] first. See [Set Up and Manage Attributes](https://docs.airship.com/tutorials/audience/attributes/) for details.

## Generate bearer token {#bearer-token}

Go to **[!UICONTROL Settings]** » **[!UICONTROL APIs & Integrations]** in the [Airship dashboard](https://go.airship.com) and select **[!UICONTROL Tokens]** in the left-hand menu.

Click **[!UICONTROL Create Token]**.

Provide a user-friendly name for your token, e.g., "Adobe Attributes Destination", and select "All Access" for the role.

Click **[!UICONTROL Create Token]** and save the details as confidential.

## Use cases {#use-cases}

To help you better understand how and when you should use the [!DNL Airship Attributes] destination, here are sample use cases that Adobe Experience Platform customers can solve by using this destination.

### Use case #1

Leverage profile data collected within Adobe Experience Platform for personalization of the message and rich content within any of [!DNL Airship]'s channels. For example, leverage [!DNL Experience Platform] profile data to set location attributes within [!DNL Airship]. This will enable a hotel brand to display an image for the nearest hotel location for each user.

### Use case #2

Leverage Attributes from Adobe Experience Platform to further enrich [!DNL Airship] profiles and combine it with SDK or [!DNL Airship] predictive data. For example, a retailer can create a segment with loyalty status and location data (attributes from Platform) and [!DNL Airship] predicted to churn data to send highly targeted messages to users in the gold loyalty status who live in Las Vegas, NV, and have a high probability of churning.

## Connect to [!DNL Airship Attributes] {#connect-airship-attributes}

In **[!UICONTROL Destinations]** > **[!UICONTROL Catalog]**, scroll to the **[!UICONTROL Mobile Engagement]** category. Select **[!DNL Airship Attributes]**, then select **[!UICONTROL Configure]**.

>[!NOTE]
>
>If a connection with this destination already exists, you can see an **[!UICONTROL Activate]** button on the destination card. For more information about the difference between **[!UICONTROL Activate]** and **[!UICONTROL Configure]**, refer to the [Catalog](../../ui/destinations-workspace.md#catalog) section of the destination workspace documentation.

![Connect to Airship Attributes](../../assets/catalog/mobile-engagement/airship/catalog.png)

In the **Account** step, if you had previously set up a connection to your [!DNL Airship Attributes] destination, select **[!UICONTROL Existing Account]** and select your existing connection. Or, you can select **[!UICONTROL New Account]** to set up a new connection to [!DNL Airship Attributes]. Select **[!UICONTROL Connect to destination]** to connect Adobe Experience Platform to your [!DNL Airship] project using the bearer token that you generated from the [!DNL Airship] dashboard.

>[!NOTE]
>
>Adobe Experience Platform supports credentials validation in the authentication process and displays an error message if you input incorrect credentials to your [!DNL Airship] account. This ensures that you don't complete the workflow with incorrect credentials.

![Connect to Airship Attributes](../../assets/catalog/mobile-engagement/airship/connect.png)

Once your credentials are confirmed and Adobe Experience Platform is connected to your [!DNL Airship] project, you can select **[!UICONTROL Next]** to proceed to the **[!UICONTROL Setup]** step.

In the **[!UICONTROL Authentication]** step, enter a **[!UICONTROL Name]** and a **[!UICONTROL Description]** for your activation flow.

Also in this step, you can select either US or EU data center, depending on which [!DNL Airship] data center applies to this destination. Finally, select one or more **[!UICONTROL Marketing Actions]** for which data will be exported to the destination. You can select from Adobe-defined marketing actions or you can create your own. For more information about marketing actions, see the [Data usage policies overview](../../../data-governance/policies/overview.md). 

Select **[!UICONTROL Create Destination]** after you have filled in the fields above.

![Connect to Airship Attributes](../../assets/catalog/mobile-engagement/airship/select-domain.png)

Your destination is now created. You can select **[!UICONTROL Save & Exit]** if you want to activate segments later on or you can select **[!UICONTROL Next]** to continue the workflow and select segments to activate. In either case, see the next section, [Activate segments](#activate-segments), for the rest of the workflow.

## Activate segments {#activate-segments}

To activate segments to [!DNL Airship Attributes], follow the steps below:

In **[!UICONTROL Destinations > Browse]**, select the [!DNL Airship Attributes] destination where you want to activate your segments.

![activate-flow](../../assets/catalog/mobile-engagement/airship/browse.png)

Click the name of the destination. This takes you to the Activate flow.

Note that if an activation flow already exists for a destination, you can see the segments that are currently being sent to the destination. Select **[!UICONTROL Edit activation]** in the right rail and follow the steps below to modify the activation details. 

![activate-flow](../../assets/catalog/mobile-engagement/airship/activate.png)

Select **[!UICONTROL Activate]**. In the **[!UICONTROL Activate destination]** workflow, on the **[!UICONTROL Select Segments]** page, select which segments to send to [!DNL Airship Attributes].

![segments-to-destination](../../assets/catalog/mobile-engagement/airship/select-segments.png)

In the **[!UICONTROL Mapping]** step, select which attributes and identities from the [XDM](../../../xdm/home.md) schema to map to the destination schema. Select **[!UICONTROL Add new mapping]** to browse your schema and map them to the corresponding target identity.

![identity mapping initial screen](../../assets/catalog/mobile-engagement/airship/identity-mapping.png)

[!DNL Airship] attributes can be set either on a channel, which represents device instance, e.g., iPhone, or a named user, which maps all of a user's devices to a common identifier such as a customer ID. If you have plain text (unhashed) email addresses as primary identity in your schema, select the email field in your **[!UICONTROL Source Attributes]** and map to the [!DNL Airship] named user in the right column under **[!UICONTROL Target Identities]**, as shown below.

![Named User Mapping](../../assets/catalog/mobile-engagement/airship/mapping.png)

For identifiers that should be mapped to a channel, i.e., a device, map to the appropriate channel based on the source. The following images show how two mappings are created:

* IDFA iOS Advertising ID to an [!DNL Airship] iOS channel
* Adobe `fullName` attribute to [!DNL Airship] "Full Name" attribute

>[!NOTE]
>
>Use the user-friendly name that appears in the [!DNL Airship] dashboard when selecting the target field for your attribute mapping.
   
**Map identity**

Select source field:

![Connect to Airship Attributes](../../assets/catalog/mobile-engagement/airship/select-source-identity.png)

Select target field:

![Connect to Airship Attributes](../../assets/catalog/mobile-engagement/airship/select-target-identity.png)

**Map attribute**

Select source attribute:

![Select source field](../../assets/catalog/mobile-engagement/airship/select-source-attributes.png)

Select target attribute:

![Select target field](../../assets/catalog/mobile-engagement/airship/select-target-attribute.png)

Verify mapping:

![Channel mapping](../../assets/catalog/mobile-engagement/airship/mapping.png)
   
On the **[!UICONTROL Segment schedule]** page, scheduling is currently disabled. Click **[!UICONTROL Next]** to continue to the review step. 

![Scheduling currently disabled](../../assets/catalog/mobile-engagement/airship/scheduling.png)

On the **[!UICONTROL Review]** page, you can see a summary of your selection. Select **[!UICONTROL Cancel]** to break up the flow, **[!UICONTROL Back]** to modify your settings, or **[!UICONTROL Finish]** to confirm your selection and start sending data to the destination.

>[!IMPORTANT]
>
>In this step, Adobe Experience Platform checks for data usage policy violations. Shown below is an example where a policy is violated. You cannot complete the segment activation workflow until you have resolved the violation. For information on how to resolve policy violations, see [Policy enforcement](../../../data-governance/enforcement/auto-enforcement.md) in the data governance documentation section.
    
![confirm-selection](../../assets/common/data-policy-violation.png)

If no policy violations have been detected, select **[!UICONTROL Finish]** to confirm your selection and start sending data to the destination.

![review](../../assets/catalog/mobile-engagement/airship/review.png)

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, see the [Data Governance overview](../../../data-governance/home.md).
