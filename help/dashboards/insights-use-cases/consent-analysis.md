---
title: Consent Analysis and Tracking
description: Learn how to build a consent analysis dashboard to track how user consent has trended over time. 
---
# Consent analysis and tracking

In today's marketing landscape, it is critical to understand and respect customer consent preferences. Adobe Real-Time Customer Data Platform provides the ability for marketers to analyze customer consent to build trust, comply with privacy regulations, and deliver more personalized experiences.

This document details how to build a consent dashboard for a variety of marketing use cases for Real-Time CDP data. Specifically, it focusses on how to create a segment with the appropriate attributes for your business needs, and then consume the insights through the use of pre-configured widgets in the Adobe Experience Platform UI. Additionally, an alternative method of building your own custom widget with the user-defined dashboards feature is also presented.

## Use cases

The use cases covered in this guide are consent trending and consent overlap.

- **Consent Trending**: This tracks how user consent has trended over time. Analyzing consent preference changes helps marketers plan and execute campaigns that adapt to those user preference changes. For example, you may want to run targeted educational campaigns, transparency and trust campaigns, or incentive campaigns to respectfully drive consent choices. You could also correlate campaigns that might have been negatively impacting consent to proactively reduce the frequency of those campaigns.
- **Consent Overlap**: You can use the overlap among consent channels to deliver consistent personalized messaging on multiple channels for the users who have consented to multiple channels. Marketers can prioritize and allocate resources to certain channels where there is a higher degree of consent and personalized messaging might resonate with customers thereby generating higher response rates.

## Build a consent dashboard {#build-a-consent-dashboard}

To build a consent dashboard, you must first create an audience of all the profiles that have consented to contact. To navigate to the Real-Time Customer Data Platform Segment Builder, select **Customer**, then **Audiences** in the left navigation of the Platform UI. From the Audiences dashboard, select **[!UICONTROL Create segment]** in the top right of the view.

![The [!UICONTROL Audiences] dashboard with [!UICONTROL Customer], [!UICONTROL Audiences], and [!UICONTROL Create segment] highlighted.](../images/insights-use-cases/consent-analysis/create-segment.png)

The Segment Builder appears. Next, select **[!UICONTROL XDM Individual Profile]** from the available options. 

![The Segment Builder with the [!UICONTROL XDM Individual Profile] attribute folder highlighted.](../images/insights-use-cases/consent-analysis/xdm-individual-profile.png)

Locate your consent attributes from the options available. Select **[!UICONTROL Consents and Preferences]**.

>[!NOTE]
>
>If you have maintained your user consent in an attribute different to the Adobe recommended field group, then you would need to select those attributes instead of the ones shown below.

More information can be found on the [handling consent in segmentation](../../segmentation/consents.md#handling-consent-in-segmentation) documentation.

![The Segment Builder with the [!UICONTROL Consent and Preferences] attribute folder highlighted.](../images/insights-use-cases/consent-analysis/consent-and-preferences.png)

The various consent and preference options are displayed. As this demonstration focuses on consent to contact over various marketing channels, select **[!UICONTROL Marketing Preferences]**.

![The Segment Builder with the [!UICONTROL Marketing Preferences] folder highlighted.](../images/insights-use-cases/consent-analysis/marketing-preferences.png)

Then the list of marketing preferences are displayed. This example use case focuses on Email, SMS, and Calls however, you can build insights for any other combination or the entirity of options as well. For each of the channels, perform the below steps to create a segment for each.

Select **[!UICONTROL Receive email]**, **[!UICONTROL Receive SMS]**, and **[!UICONTROL Receive calls]**.

![The available contact channels for marketing are highlighted in the audience builder.](../images/insights-use-cases/consent-analysis/channels.png)

Select and drag the "Choice Value" attribute to the center pane. Then from the drop-down select the desired value ["Yes (opt in)"].

Then name the segment as follow:

for email, we will create a segment called "Users Consented to Email"
for SMS, we will create a segment called "Users Consented to SMS"
for Calls, we will create a segment called "Users Consented to Calls"
Note:

you can use segment names that suite your business needs
these is a soft limit on the number of segments you are recommended to create - review Segmentation guardrails
Optionally add a description to this segment

![The [!UICONTROL Choice Value] attribute highlighted in the segment builder with the [!UICONTROL Yes (opt-in)] value highlighted. The name and description of the audience are also highlighted.]()

Once you have created the desired segments, they will be listed in the Audiences - Browse tab. Please note that you have to wait for the batch segmentation job to complete before starting to build the dashboards in the following sections.

<!--  -->


