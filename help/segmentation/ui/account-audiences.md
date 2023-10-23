---
title: Account audiences
description: Learn how to create and use account audiences to target account profiles in downstream destinations.
---

# Account audiences

Adobe Experience Platform allows you to bring the full ease and sophistication of the marketing segmentation experience from people-based audiences to account-based audiences. 

Account-based audiences can be used as an input for account-based destinations, allowing you to target the people within those accounts in downstream services. For example, you can use account-based audiences to retrieve records of all the accounts that do **not** have contact information for any people with the title Chief Operating Officer (COO) or Chief Marketing Officer (CMO).

## Access {#access}

To access account audiences, select **[!UICONTROL Audiences]** in the **[!UICONTROL Accounts]** section.

![The Audiences button is highlighted within the Accounts section.](../images/ui/account-audiences/select.png)

The [!UICONTROL Browse] page is displayed, showing a list of all the account audiences for the organization.

![The account audiences belonging to the organization are displayed.](../images/ui/account-audiences/browse.png)

This view lists information about the audience, including name, profile count, origin, lifecycle status, created date, and last updated date.

## Create audience {#create}

To create an account audience, select **[!UICONTROL Create audience]** on the [!UICONTROL Browse] page.

![The [!UICONTROL Create audience] button is highlighted on the account audience browse page.](../images/ui/account-audiences/select-create-audience.png)

The Segment Builder appears. The account attributes are displayed on the left navigation bar.

![The Segment Builder is displayed. Note that only the attributes are displayed.](../images/ui/account-audiences/segment-builder.png)

When creating account audiences, please note that events are listed under **[!UICONTROL People]**, rather than being their own tab, since these attributes are associated with people.

![The location to find events, which is within the [!UICONTROL People] folder, is highlighted.](../images/ui/account-audiences/activate.png)

For more information on using the Segment Builder, please read the [Segment Builder UI guide](./segment-builder.md)

## Activate audience {#activate}

>[!NOTE]
>
>Only a limited number of destinations support account audiences. Please ensure that the destination you want to activate to supports account audiences before continuing this process.

After creating your account audience, you can activate the audience to other downstream services.

Select the audience you want to activate, followed by **[!UICONTROL Activate to destination]**.

![The [!UICONTROL Activate to destination] button is highlighted in the quick actions menu for the selected audience.](../images/ui/account-audiences/activate.png)

The [!UICONTROL Activate destination] page appears. For more information on the activation process, including details on field mappings, please read the ???.

## Next steps {#next-steps}

After reading this guide, you now have a better understanding of how to create and use your account audiences in Adobe Experience Platform.
