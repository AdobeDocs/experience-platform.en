---
keywords: rtcdp profile;profiles rtcdp;rtcdp identities;rtcdp merge policies;real-time customer profile
title: Account Profile UI Guide
description: Through the use of account profiles, Real-time Customer Data Platform B2B Edition enables you to aggregate account information from multiple sources and deduplicate account data. This guide provides details for interacting with account profiles in the Adobe Experience Platform user interface.
---

# Account profile UI guide

>[!IMPORTANT]
>
>Real-time Customer Data Platform B2B Edition is currently in beta. The documentation and functionality are subject to change.

>[!NOTE]
>
>Account profiles are only available to Real-time Customer Data Platform B2B Edition customers. To learn more about Real-time CDP, including the features and functionality available to each license type, please begin by reading the [Real-time CDP overview](../overview.md).

Account profiles enable you to aggregate account information from multiple sources and deduplicate account data from a single source. These aggregated views of an account bring together data from across your many marketing channels and the diverse systems that your organization is currently using to store customer account data. This document provides a guide to interacting with account profiles using the Real-time CDP, B2B Edition capabilities available in the Adobe Experience Platform user interface (UI).

## Browse account profiles

To browse account profiles, begin by selecting **[!UICONTROL Profiles]** under Accounts in the left-navigation. 

![](images/b2b-account-browse.png)

On the **[!UICONTROL Browse]** tab, you can explore account profiles using an account id from a connected enterprise source or by entering source details ad-hoc.

![](images/b2b-account-browse-by.png)

### Browse by connected enterprise source

To browse account profiles by a connected enterprise source, you must first select a connected source using the selector button next to the **[!UICONTROL Source]** field.

![](images/b2b-account-browse.png)

This opens the **[!UICONTROL Select source]** dialog, where you can select a source based on the connections that your organization has established.

>[!NOTE]
>
>Your organization may have more than one connection to the same source, so it is important to review the connection name, source system, and source system instance to ensure you are searching by the correct source instance.

To learn more about connecting enterprise sources, please refer to the [sources overview](../sources/sources-overview.md).

![](images/b2b-account-select-source.png)

You can choose a source by selecting the radio button next to the connection name, and then use **[!UICONTROL Select]** to return to the [!UICONTROL Browse] tab.

With a source selected, you must now enter an **[!UICONTROL Account id]** related to the source. For example, selecting a Salesforce source would require you to enter an account ID from the Salesforce instance in order to view the account profile tied to that ID.

>[!NOTE]
>
>For Marketo account IDs, there are two possible account tables that can be referenced, therefore you must use a specific syntax in order to ensure you are viewing the correct account. 
>
>The most common, standard syntax is the Marketo account ID appended by `.mkto_org` (for example, `1234567.mkto_org`). Marketo Account-Based Marketing customers may have additional values that can be found using the Marketo account ID appended by `.mkto_account`. If you are unsure of which syntax to use, please check with your Marketo administrator.

![](images/b2b-account-browse-id.png)

### Browse by ad hoc

Real-time CDP, B2B Edition supports the ability to perform an "ad hoc" browse by allowing you to enter a **[!UICONTROL Source name]**, **[!UICONTROL Source instance]**, and **[!UICONTROL Account id]** for an account that you would like to view. By entering the source name and instance you provide the context necessary for Experience Platform to search for, and display, the correct account profile data.

The ability to perform an ad hoc browse is useful under circumstances where a source connection directly to the data is not possible. For example, if your organization has data governance policies in place that prevent connecting directly to a CRM, you can export that data into a cloud storage system and then ingest it into Experience Platform. 

Another example could be that you are performing a transformation on the data between the time it leaves a system and enters Platform. You can use adhoc browse to provide context for the data (specifying that this is Marketo data, despite the fact that it is coming from an Amazon S3 bucket, for example) so that the system knows where to look for, and how to properly render, the data.

![](images/b2b-account-browse-adhoc.png)

## View account profile details

After using the **[!UICONTROL Browse]** tab to locate an account profile, selecting the **[!UICONTROL Profile ID]** opens the **[!UICONTROL Detail]** tab for the account profile. The profile information displayed on the **[!UICONTROL Detail]** tab has been merged together from multiple profile fragments to form a single view of the individual account. This includes account details such as basic attributes and social media data. 

The default fields shown can also be changed at an organizational-level to display preferred account profile attributes. 

>[!NOTE]
>
>Similar functionality is available for customer profiles and a step-by-step guide has been created with instructions for adding and removing attributes, resizing panels, etc. Please read the [profile detail customization guide](../../profile/ui/profile-customization.md) to learn more.

![](images/b2b-account-details.png)

You can view additional information related to the account by selecting another of the available tabs. These tabs include attributes, people, and the opportunities tab that shows all of the open and closed opportunities related to the account across your enterprise systems.

## Attributes tab

The **[!UICONTROL Attributes]** tab lists all of the record information related to the account. This includes attribute data coming from multiple sources that has been merged together to form a single view of the account.

In addition to being able to view the data in a list, you can use the search bar to search for specific attributes or view the record data as JSON.

![](images/b2b-account-attributes.png)

## People tab

The **[!UICONTROL People]** tab provides a list of individual people associated with the account. These people may be contacts and leads from different enterprise systems managed by different teams within your organization, but in Real-time CDP, B2B Edition they are presented together as a single list enabling you to see a more holistic view of your account contacts.

In addition to showing you a snapshot of information for the contact, each person listed also includes a **[!UICONTROL Profile ID]**, which is a clickable link that allows you to explore the Real-time Customer Profile for that individual. To learn more about viewing individual customer profiles related to your accounts, please visit the guide for [browsing profiles in Real-time CDP, B2B Edition](../profile/profile-browse.md).

![](images/b2b-account-people.png)

## Opportunities tab

The **[!UICONTROL Opportunities]** tab provides details related to open and closed opportunities related to the account. These opportunities may be ingested into Experience Platform from multiple sources, however Real-time CDP, B2B Edition makes it easy for marketers to see all of these opportunities together in one place.

Each opportunity includes information such as the name of the opportunity, its amount, stage, and whether the opportunity is open, closed, won, or lost.

![](images/b2b-account-opportunities.png)
