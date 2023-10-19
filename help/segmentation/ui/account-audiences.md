---
title: Account audiences
description: Learn how to create and use account audiences to target account profiles in downstream destinations
---

# Account audiences

Adobe Experience Platform allows you to bring the full ease and sophistication of the marketing segmentation experience from people-based audiences to account-based audiences. 

Account-based audiences can be used as an input for account-based destinations, allowing you to target the people within those accounts in downstream services. For example, you can use account-based audiences to retrieve records of all the accounts that do **not** have contact information for any people with the title Chief Operating Officer (COO) or Chief Marketing Officer (CMO).

## Access {#access}

To access account audiences, select **Audiences** in the **Accounts** section.

IMAGE

The Browse page is displayed, showing a list of all the account audiences for the organization.

IMAGE

This view lists information about the audience, including name, profile count, origin, lifecycle status, created date, and last updated date.

## Create audience {#create}

To create an account audience, select **Create audience** on the Browse page.

IMAGE

The Segment Builder appears. The account attributes are displayed on the left navigation bar.

IMAGE

When creating account audiences, please note that events are listed under **People**, rather than being their own tab, since these attributes are associated with people.

IMAGE

For more information on using the Segment Builder, please read the [Segment Builder UI guide](./segment-builder.md)

## Activate audience {#activate}

>[!NOTE]
>
>Only a limited number of destinations support account audiences. Please ensure that the destination you want to activate to supports account audiences before continuing this process.

After creating your account audience, you can activate the audience to other downstream services.

Select the audience you want to activate, followed by **Activate to destination**.

IMAGE

The Activate destination page appears. For more information on the activation process, including details on field mappings, please read the ???.

## Next steps {#next-steps}

After reading this guide, you now have a better understanding of how to create and use your prospect audiences in Adobe Experience Platform.
