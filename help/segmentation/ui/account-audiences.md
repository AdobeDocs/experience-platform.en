---
title: Account Audiences
description: Learn how to create and use account audiences to target account profiles in downstream destinations.
badgeLimitedAvailability: label="Limited availability" type="Caution"
badgeB2B: label="B2B Edition" type="Informative" url="https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2b-edition-prime-and-ultimate-packages.html newtab=true"
exl-id: 047930d6-939f-4418-bbcb-8aafd2cf43ba
---
# Account audiences

>[!AVAILABILITY]
>
>Account audiences are only available in the [B2B Edition of Real-Time Customer Data Platform](../../rtcdp/b2b-overview.md). Additionally, account audience functionality is currently in **limited availability**. Contact Adobe Customer Care or your Adobe representative to request access to this functionality.

With account segmentation, Adobe Experience Platform allows you to bring the full ease and sophistication of the marketing segmentation experience from people-based audiences to account-based audiences. 

Account audiences can be used as an input for account-based destinations, allowing you to target the people within those accounts in downstream services. For example, you can use account-based audiences to retrieve records of all the accounts that do **not** have contact information for any people with the title Chief Operating Officer (COO) or Chief Marketing Officer (CMO).

## Terminology {#terminology}

Before getting started with account audiences, please review the differences between the different audience types:

- **Account audiences**: An account audience is an audience that is created using **account** profile data. Account profile data can be used to create audiences that target people within downstream accounts. For more information about account profiles, please read the [account profile overview](../../rtcdp/accounts/account-profile-overview.md).
- **People audiences**: A people audience is an audience that is created using **customer** profile data. Customer profile data can be used to create audiences that targets your business' clientele. For more information on customer profiles, please read the [Real-Time Customer Profile overview](../../profile/home.md).
- **Prospect audiences**: A prospect audience is an audience that is created using **prospect** profile data. Prospect profile data can be used to create audiences from unauthenticated users. For more information about prospect profiles, please read the [prospect profile overview](../../profile/ui/prospect-profile.md).

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

![The location to find events, which is within the [!UICONTROL People] folder, is highlighted.](../images/ui/account-audiences/attributes.png)

For more information on using the Segment Builder, please read the [Segment Builder UI guide](./segment-builder.md).

## Activate audience {#activate}

>[!NOTE]
>
>Only a limited number of destinations support account audiences. Please ensure that the destination you want to activate to supports account audiences before continuing this process.

After creating your account audience, you can activate the audience to other downstream services.

Select the audience you want to activate, followed by **[!UICONTROL Activate to destination]**.

![The [!UICONTROL Activate to destination] button is highlighted in the quick actions menu for the selected audience.](../images/ui/account-audiences/activate.png)

The [!UICONTROL Activate destination] page appears. For more information on the activation process, including supported destinations and details on field mappings, please read the [activate account audiences](/help/destinations/ui/activate-account-audiences.md) tutorial.

## Next steps {#next-steps}

After reading this guide, you now have a better understanding of how to create and use your account audiences in Adobe Experience Platform. To learn how to use other types of audiences in Platform, please read the [Segmentation Service UI guide](./overview.md).
