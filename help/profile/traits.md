---
title: Traits Overview
description: a
hide: true
hidefromtoc: true
---

# Traits overview

>[!AVAILABILITY]
>
>This feature is currently in **beta**. The functionality and documentation are subject to change.

In Adobe Experience Platform, Real-Time Customer Profile lets you consolidate your customer data into a unified view by combining data from multiple channels. 

## Understanding traits {#understanding}

Currently, you can store the entire "raw event" in Profile through Experience Events. Experience Events contain complete and unfiltered event data, which can use up more storage within Experience Platform.

With traits, you can add "precomputed" data that is based on rules you defined. Traits are based on the conditional logic you specify, and are more storage-efficient than the raw Experience Event.

Traits provide 

## Prerequisites {#prerequisites}

To use traits, you **must** meet the following prerequisites:

- At least **one** Experience Event dataset that's ingested using Adobe Data Collection on Edge Network
- The **View traits** permission
  - This lets you see your traits and use traits in Segment Builder
- The **Manage traits** permission
  - This lets you create, edit, and delete your traits
  - Manage traits **includes** all the **View traits** permissions

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

IMAGE

The traits browse page appears. Before you can create a trait, you need to enable datasets for use with traits by selecting **Enable dataset for traits**.

IMAGE

>[!IMPORTANT]
>
>Enabling a dataset for trait is an **irreversible process**. If you enable a dataset for traits, it cannot be enabled for Profile.

The **Enable dataset for traits** popover appears. A list of all your datasets is displayed. Select which datasets you want to enable for traits, followed by **Continue**.

IMAGE

Now that you have a trait-enabled dataset, you can create your trait. Select **Create trait** followed by the dataset to bring up the trait builder.

IMAGE

Within the trait builder, you can create your trait and set your details for the trait. To create a trait, choose an event from the left navigation bar and add it to the canvas.

IMAGE

After adding your events, you can add the trait details.

| Field | Description |
| ----- | ----------- |
| Display name | The display name of the trait. |
| Field name | The field name for the trait. This name is automatically generated from the display name. |
| Dataset | The dataset the trait belongs to. This was already chosen when creating the trait. |
| Description | A description for the trait. |
| Data expiration | The data expiration for the trait. This determines the length of time the data within the trait is active. This value can be set to a maximum of 120 days. By default, this value is set to 1 day. |

Once you have your trait details set, you can either **Save as draft** or **Publish** your trait. In order to use your trait within an audience, you **must** publish the trait.

>[!NOTE]
>
>Once you publish your trait, it can take up to 24 hours to start storing and processing data. Additionally, you **will not** be able to edit your trait once it's published.

## Using traits {#using}

Once you've created your trait, you can use them within your audience definitions. To open Segment Builder, select **Audiences** followed by **Create audience**, **Build rule**, and **Create**. 

IMAGE

The Segment Builder appears. In Segment Builder, you can see all the published traits that belong to your sandbox.

IMAGE

After adding the traits to the rule building canvas, you can choose to create an audience that either **includes** or **excludes** the added trait. Optionally, you can select **Recency** to check if the trait condition has been met in the specified time frame.

IMAGE

## Manage traits {#manage}

You can monitor and manage your traits through a variety of different interfaces.

In the **Traits** list view, you can see all the traits that were created within the sandbox, along with an overview of all the trait definitions.

IMAGE

| Field | Description |
| ----- | ----------- |
| Name | The name of the trait. |
| Description | The description of the trait. |
| Dataset | The dataset the trait belongs to. |
| Created by | The username of the person who created the trait. |
| Data expiration | The data expiration value for the trait. This determines the length of time the data within the trait is active. |
| Lifecycle status | The status of the trait. Possible values include ??? |
| Last updated | The date and time the trait was last updated. |
| Created | The date and time the trait was created. |

You can also select the ellipses (...) next to the trait for additional options, including creating an audience using the selected trait, deactivating the trait, and deleting the trait.

In the **Profile viewer**, you can see a list of all the traits the profile qualifies for.

IMAGE

In the **audience details** page, you can see all the traits that were used within that audience.

IMAGE

In the **dataset details** page, you can see all the traits that were created from that dataset.

IMAGE
