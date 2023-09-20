---
title: Prospect Profiles
description: Learn how to create and use prospect profiles to gather information about unknown customers using third-party information. 
type: Documentation
hide: true
hidefromtoc: true
---

# Prospect profiles

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences for your customers no matter where or when they interact with your brand. 

Prospect profiles are used to represent people who have not yet engaged with your company but you want to reach out to. With prospect profiles, you can supplement your customer profiles with attributes from trusted third-party partners.

## Browse {#browse}

To access prospect profiles, select **[!UICONTROL Profiles]** in the **[!UICONTROL Prospects]** section.

The **[!UICONTROL Browse]** page is displayed. A list of all the prospect profiles for your organization is displayed.

![The [!UICONTROL Profiles] button is highlighted, displaying the [!UICONTROL Browse] page for prospect profiles.](../images/prospect-profile/browse-profiles.png)

>[!IMPORTANT]
>
>While most of the browsing functionality between customer profiles and prospect profiles is the same, you **cannot** browse prospect profiles by merge policy. This is because prospect profiles are automatically governed by a system-designed time-based merge policy. More information about merge policies can be found in the [merge policy overview](../merge-policies/overview.md).

For more information on browsing profiles, please read the [browse section of the Profile user guide](./user-guide.md#browse-identity).

## Prospect profile details {#profile-details}

>[!IMPORTANT]
>
>A prospect profile will automatically expire after 25 days of residing in Adobe Experience Platform.

To view more information about a specific prospect profile, select a profile on the [!UICONTROL Browse] page.

![A prospect profile is highlighted on the browse page.](../images/prospect-profile/select-specific-profile.png)

Information about the prospect profile is displayed, including the attributes associated with the profile and audience membership. 

![The prospect profile details page is displayed.](../images/prospect-profile/profile-details.png)

For more information on these tabs, please read the [view Profile details section of the Profile user guide](./user-guide.md#profile-detail).

You can also see all the attributes in JSON format by selecting **[!UICONTROL View JSON]**.

![The [!UICONTROL View JSON] button is highlighted on the prospect profile details page.](../images/prospect-profile/profile-select-view-json.png)

The [!UICONTROL View JSON] dialog appears. The attributes of the prospect profile are now displayed in JSON form.

![The prospect profile's attributes are displayed in JSON form.](../images/prospect-profile/profile-view-json.png)

## Suggested use cases {#use-cases}

To learn how you can use the prospect profiles functionality in Experience Platform in combination with other Platform functionality, please read the following use case documentation:

- [Engage and acquire new customers through the prospecting functionality](../../rtcdp/partner-data/prospecting.md)

## Next steps

After reading this guide, you now understand how prospect profiles can be used in Adobe Experience Platform. To learn how these prospect profiles can be used in audiences, please read the [prospect audiences guide](../../segmentation/ui/prospect-audience.md).
