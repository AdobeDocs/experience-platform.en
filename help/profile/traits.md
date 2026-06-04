---
title: Traits Overview
description: Learn how to use traits, which are a lightweight and more efficient way to store profile activity. You can use traits to maintain compliance with your profile license entitlements while preserving rich profile activation.
hide: true
---

# Traits overview

>[!AVAILABILITY]
>
>This feature is currently in **beta**. The functionality and documentation are subject to change.

In Adobe Experience Platform, Real-Time Customer Profile lets you consolidate your customer data into a unified view by combining data from multiple channels. 

## Understanding traits {#understanding}

Currently, you can store the entire "raw event" in Profile through Experience Events. Experience Events contain complete and unfiltered event data, which can use up more storage within Experience Platform.

With traits, you can add "precomputed" data that is based on rules you defined. Traits are based on the conditional logic you specify, and are more storage-efficient than the raw Experience Event.

Traits provide a more lightweight and efficient approach to storing profile activity. As a result, this can help capture behavioral signals for activation use cases even when ingesting event data at scale, while maintaining compliance with your profile license entitlements.

## Prerequisites {#prerequisites}

To use traits, you **must** meet the following prerequisites:

- At least **one** Experience Event dataset that's ingested using Adobe Data Collection on Edge Network
  - You must have the **Manage datasets** permission to enable a dataset for traits.
- The **View traits** permission
  - This lets you see your traits and use traits in Segment Builder
- The **Manage traits** permission
  - This lets you create, edit, and delete your traits
  - Manage traits **includes** all the **View traits** permissions

## Beta limitations {#beta}

With the current traits beta, keep the following limitations in mind:

- You can create a **maximum** of 1000 traits
- The **maximum** request per second (rps) is 1500 rps

## Create a trait {#create}

>[!NOTE]
>
>The following constraints apply when creating a trait:
>
>- You can only create a trait from a **trait-enabled** dataset
>- The trait **must** be created before ingesting data, since traits will only store data once the trait is created
>- Traits currently only support **boolean logic**
>- Traits are evaluated on a per-event basis

To create a trait, go to the **[!UICONTROL Profiles]** section and select **[!UICONTROL Traits]**. 

![The Traits button is highlighted.](/help/profile/images/traits/access-traits.png)

The traits browse page appears. Before you can create a trait, you need to enable datasets for use with traits by selecting **[!UICONTROL Enable dataset for traits]**.

![The Enable dataset for traits button is highlighted.](/help/profile/images/traits/select-enable.png)

>[!IMPORTANT]
>
>Enabling a dataset for traits is an **irreversible process**. If you enable a dataset for traits, it will start storing traits and will no longer store experience events going forward.
>
>In order to enable a dataset for traits, the dataset **must** satisfy the following conditions:
>
>- The dataset **must** be for Experience Events
>- The dataset **must** have no data already ingested in it
>- The dataset **must** be Profile-enabled

The **[!UICONTROL Enable dataset for traits]** popover appears. A list of all your datasets is displayed. Select which datasets you want to enable for traits, followed by **[!UICONTROL Continue]**.

>[!NOTE]
>
>In order to select continue, you **must** agree that you understand that enabling a dataset for traits is irreversible.

![The Enable dataset for traits popover is displayed. The Continue button is highlighted.](/help/profile/images/traits/enable-traits-popover.png)

Now that you have a trait-enabled dataset, you can create your trait. Select **[!UICONTROL Create trait]** to bring up the trait builder.

![The Dataset enabled for traits popover is displayed. The Create trait button is highlighted.](/help/profile/images/traits/select-create-trait.png)

Alternatively, if you've already enabled a dataset for traits, you can select **[!UICONTROL Create trait]** within the traits browse page to open the trait builder.

![The Create traits button is highlighted within the traits browse page.](/help/profile/images/traits/select-create-trait-browse.png)

Within the trait builder, you can create your trait and set your details for the trait. To create a trait, choose an event from the left navigation bar and add it to the canvas.

![The trait builder is displayed.](/help/profile/images/traits/trait-builder.png)

After adding your events, you can add the trait details.

| Field | Description |
| ----- | ----------- |
| Display name | The display name of the trait. |
| Field name | The field name for the trait. This name is automatically generated from the display name. |
| Dataset | The dataset the trait belongs to. This was already chosen when creating the trait. |
| Description | A description for the trait. |
| Data expiration | The data expiration for the trait. This determines the length of time the data within the trait is active. This value can be set to a maximum of 120 days. By default, this value is set to 1 day. |

Once you have your trait details set, you can either **[!UICONTROL Save as draft]** or **[!UICONTROL Publish]** your trait. In order to use your trait within an audience, you **must** publish the trait.

>[!NOTE]
>
>Once you publish your trait, it can take up to 24 hours to start storing and processing data. Additionally, you **will not** be able to edit your trait once it's published.

## Using traits {#using}

>[!IMPORTANT]
>
>You can **only** use traits in audiences that are evaluated using either batch segmentation or edge segmentation. Streaming segmentation is **not** supported at this time.

Once you've created your trait, you can use them within your audience definitions. To open Segment Builder, select **[!UICONTROL Audiences]** followed by **[!UICONTROL Create audience]**, **[!UICONTROL Build rule]**, and **[!UICONTROL Create]**. 

![The path to access Audience Builder is displayed and highlighted.](/help/profile/images/traits/create-audience.png)

The Segment Builder appears. In Segment Builder, you can see all the published traits that belong to your sandbox.

![The Traits tab is displayed within Audience Builder, showing all the Traits you can use during audience creation.](/help/profile/images/traits/traits-in-audience-builder.png)

After adding the traits to the rule building canvas, you can choose to create an audience that either **includes** or **excludes** the added trait. Optionally, you can select **[!UICONTROL Recency]** to check if the trait condition has been met in the specified time frame.

![The options available within traits in Audience Builder are displayed.](/help/profile/images/traits/trait-attribute.png)

## Manage traits {#manage}

You can monitor and manage your traits through a variety of different interfaces.

In the **[!UICONTROL Traits]** list view, you can see all the traits that were created within the sandbox, along with an overview of all the trait definitions.

![The Browse traits page is displayed, showing the available traits for the sandbox.](/help/profile/images/traits/browse-traits.png)

| Field | Description |
| ----- | ----------- |
| Name | The name of the trait. |
| Description | The description of the trait. |
| Dataset | The dataset the trait belongs to. |
| Created by | The username of the person who created the trait. |
| Data expiration | The data expiration value for the trait. This determines the length of time the data within the trait is active. |
| Lifecycle status | The status of the trait. Possible values include **[!UICONTROL Invalid]**, **[!UICONTROL Pending]**, and **[!UICONTROL Published]**. |
| Last updated | The date and time the trait was last updated. |
| Created | The date and time the trait was created. |

You can also select the ellipses (...) next to the trait for quick actions, including creating an audience using the selected trait, deactivating the trait, and deleting the trait.

| Quick action | Description |
| ------------ | ----------- |
| Create audience using trait | Automatically opens Audience Builder with the trait added to the audience's rules. |
| Deactivate | Deactivates the trait. Deactivating the trait does **not** remove the trait from the UI. However, it no longer affects your license entitlements nor can it be used in audiences. |
| Delete | Deletes the trait. Deleting the trait removes the trait from the UI, so it can no longer be used. |

You can view more details by selecting the trait's name. The traits details page appears. This page displays information including the trait summary, profiles qualified over time, and audiences with this trait.

![The traits detail page is displayed, showing the available information about the trait.](/help/profile/images/traits/traits-details.png)

<!-- In the **audience details** page, you can see all the traits that were used within that audience. -->

<!-- IMAGE -->

<!-- In the **dataset details** page, you can see all the traits that were created from that dataset. -->

<!-- IMAGE -->

