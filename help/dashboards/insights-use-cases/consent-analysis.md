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

<!-- ## Build a consent dashboard {#build-a-consent-dashboard} -->

## Create consented audiences {#create-consent-audiences}

To build a consent dashboard, you must first create an audience of all the profiles that have consented to contact. To navigate to the Real-Time Customer Data Platform Segment Builder, select **Customer**, then **Audiences** in the left navigation of the Platform UI. From the Audiences dashboard, select **[!UICONTROL Create segment]** in the top right of the view.

![The [!UICONTROL Audiences] dashboard with [!UICONTROL Customer], [!UICONTROL Audiences], and [!UICONTROL Create segment] highlighted.](../images/insights-use-cases/consent-analysis/create-segment.png)

The Segment Builder appears. Next, select **[!UICONTROL XDM Individual Profile]** from the available options. See the documentation for more information on the [rule builder canvas](../../segmentation/ui/segment-builder.md#rule-builder-canvas). 

![The Segment Builder with the [!UICONTROL XDM Individual Profile] attribute folder highlighted.](../images/insights-use-cases/consent-analysis/xdm-individual-profile.png)

Locate your consent attributes from the options available. Select **[!UICONTROL Consents and Preferences]**. 

>[!NOTE]
>
>If you have maintained your user consent in an attribute different to the Adobe recommended field group, then you would need to select those attributes instead of the ones shown below.

More information can be found on the [handling consent in segmentation](../../segmentation/consents.md#handling-consent-in-segmentation) documentation.

![The Segment Builder with the [!UICONTROL Consent and Preferences] attribute folder highlighted.](../images/insights-use-cases/consent-analysis/consent-and-preferences.png)

The various consent and preference options are displayed. As this demonstration focuses on consent to contact over various marketing channels, select **[!UICONTROL Marketing Preferences]**.

![The Segment Builder with the [!UICONTROL Marketing Preferences] folder highlighted.](../images/insights-use-cases/consent-analysis/marketing-preferences.png)

Then the list of marketing preferences are displayed. Although, this example use case focuses on email, SMS, and calls, you can build insights for any other combination or the entirity of options as well. For each of the channels, perform the below steps to create an audience for each.

To begin configuring an audience select **[!UICONTROL Receive SMS]** / **[!UICONTROL Receive email]** / **[!UICONTROL Receive calls]**.

![The available contact channels for marketing are highlighted in the audience builder.](../images/insights-use-cases/consent-analysis/channels.png)

The [!UICONTROL Subscriptions] folder appears. From the options available, select and drag the **[!UICONTROL Choice Value]** attribute to the center pane, then select the desired value from the drop-down. In this case, select **Yes (opt in)**. Next, name the audience according to your business needs and provide a user friendly description.

>[!NOTE]
>
>There is a soft limit on the number of audiences you are recommended to create. More information can be found in the [segmentation guardrails documentation](https://experienceleague.adobe.com/docs/experience-platform/profile/guardrails.html?lang=en#segmentation-guardrails).

![The [!UICONTROL Choice Value] attribute with the [!UICONTROL Yes (opt-in)] value highlighted in the segment builder. The name and description of the audience are also highlighted.](../images/insights-use-cases/consent-analysis/choice-value.png)

Once you have created the necessary audiences, they are listed in the [!UICONTROL Audiences] [!UICONTROL Browse] tab. 

>[!NOTE]
>
>When creating an audience, you have to wait for the batch segmentation job to complete before the data is available to start building your consent dashboard. Batch segmentation describes the process of moving all your profile data at once through your segment definitions to produce the corresponding audiences. Once created, this audience is saved and stored for you to export and use. Batch segments are automatically evaluated every 24 hours.


## Consume insights

Adobe had created a variety of insights that are automatically available for you in the Profiles, Audiences, and Destinations dashboards. Any audience that you create is then automatically usable with these preconfigured insights. See the standard widget documentation for a list of the insights available in the [Profiles](../guides/profiles.md#standard-widgets), [Audiences](../guides/audiences.md#standard-widgets), and [Destinations](../guides/destinations.md) dashboards.

## Audience Overlap

To review the overlap between any two consent audiences, add the [!UICONTROL Audience overlap by merge policy] to your Profiles dashboard and select the desired audiences in the dropdown menus. See the documentation for instructions on how to add a widget to your dashboard the [*Audience overlap by merge policy*](../guides/profiles.md#audience-overlap-by-merge-policy) for more information on the insight.

![The Profiles dashboard with the Audience overlap my merge policy widget highlighted.]()
 
You can view the overlap of all audiences where users have consented to receive calls across all other audiences, with the *Audience overlap report* in the Audiences dashboard. To do this, first navigate to the [!UICONTROL Audiences] [!UICONTROL Overview] tab. From there you can add the [!UICONTROL Audience overlap report] widget to the Audiences dashboard. Once the widget has been added, select the *User consented to calls* audience from the overview of audience dropdown menu at the top of the page. Next, select **[!UICONTROL View more]** in the *Audience overlap report* widget to see up to 50 of the top overlaps and up to 50 of the least overlaps with respect to the selected segment.

![The Audiences dashboard with the Audience overlap report widget displayed. The User consented to calls audience and View more link are highlighted.]()

The *Audience overlap report* dialog expands to show additional audience overlap data.

![The Audience overlap report with the Users consented to email audience highlighted.]()

<!--  -->

## Audience Size Trends

Any consent based audiences you have created will automatically be trended up to 12 months from the date you created the respectuve audience. Once you visit Segments Overview page add the following widgets, you should have a fully functionaly trend of your conset. This is a powerful way of tracking how your consent is changing over time and even correlating with campaigns you might be running in parallel that might have impacts in a positve or negative manner to consent.

- [Audience size trend](../guides/audiences.md#audience-size-trend) : In the use case of Consent, this is a way to track how your respective consent has changed over time
- [Audience size change trend](../guides/audiences.md#audience-size-change-trend) : In the use case of Consent, this is a way to track how your respective consent has changed on a daily basis. For ex: if your consent dropped by 100K then you can see that change over daily basis
- [Audience size trend by identity](../guides/audiences.md#audience-size-trend-by-identity) : In the use case of Consent, this is a way to track how your respective consent has changed over time further filtered by a specific identity such as email

![The Audiences dashboard with the Audience size trend, Audience size trend by identity and Audience size change trend widget displayed. The Users consented to email audience is highlighted.]()

## Segment Overview Dashboard

Once you have created a concent realted segment such as "Users Consented to SMS", you can go to Segments Overivew and add the widgets you like to monitor from the widget library using "Add widget". Any widget added to your view of the dashboard can be re-sized and moved as per your desire using "Modify dashboard". Once done you could be having a personalized view to review key information about your audinece who have consented to SMS such as the trend over time (up to 12 months), the overlaps with other audiences and the identity composition. An example view is shown below:
