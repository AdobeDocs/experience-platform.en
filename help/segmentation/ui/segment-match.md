---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;Segment Match;Segment Match
solution: Experience Platform
title: Segment Match overview
topic: overview
description: Segment Match is a segment-sharing service in Adobe Experience Platform that allows for two or more Platform users to exchange segment data in a secure, governed, and privacy-friendly manner.
---

# Segment Match overview (Alpha)

>[!IMPORTANT]
>
>Segment Match is currently in alpha. The documentation and the functionality are subject to change.

Segment Match is a segment-sharing service in Adobe Experience Platform that allows for two or more Platform users to exchange segment data in a secure, governed, and privacy-friendly manner. Segment Match uses Platform privacy standards and global identities such as a hashed email, hashed phone number, and global device identifiers like IDFAs and GAIDs.

With Segment Match you can:

* Manage the Identity overlap process.
* View pre-share estimates.
* Apply data usage labels to control the that data can and cannot be shared with partners.
* Maintain shared audience lifecycle management after publishing a feed and continue a dynamic exchange of data through abilities to add, delete, and unshare.

The documentation below provides more information about Segment Match, including details on set up and its end-to-end workflow.

## Prerequisites

The following prerequisites must be set up before you start working with Segment Match:

### Set up identity data and namespace

The first step to getting started with started with Segment Match is to make sure you're ingesting data against the supported identity namespaces.

Identity namespaces are a component of Identity Service that serve as indicators of the context to which an identity relates. For example, they distinguish a value of "name<span>@email.com" as an email address or "443522" as a numeric CRM ID.

A fully qualified identity includes an ID value and a namespace. When matching record data across profile fragments, as when Real-time Customer Profile merges profile data, both the identity value and the namespace must match.

In the context of Segment Match, namespaces are used in the overlap process when sharing data.

The list of supported namespaces are as follows:

| Namespace | Description |
| --------- | ----------- |
| Hashed email |
| Hashed phone |
| ECID | A namespace that represents ECID. This namespace can also be referred to by the following aliases: "Adobe Marketing Cloud ID", "Adobe Experience Cloud ID", "Adobe Experience Platform ID". |
| Apple IDFA (ID for Advertisers) | A namespace that represents Apple ID for Advertisers. See the following document on [interest-based ads](https://support.apple.com/en-us/HT202074) for more information. |
| Google Ad ID | A namespace that represents a Google Advertising ID. See the following document on [Google Advertising ID](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en) for more information. |

### Set up consent configuration

You must provide a consent configuration and set its default value to either opt-in or opt-out for a consent check.

<!--

opt-in vs opt-out refers to whether our customers operate under the understanding that they are allowed to share user data by default unless a user explicitly opts out OR if the default is user data cannot be shared unless the user explicitly opts-in

and thats based on regional restrictions (EMEA vs US, US vs CA, etc.) and the customers own privacy policy (what they disclose they do with yoour data)

so kind of complicated which is why we ask customers to tell us what they want their default to be

and then based on that default, when we are doing the overlap process we know whether to look for an explicit opt-in signle (i.e. consenttoshare = y) or if we should assume their data can be shared unless we receive the opt-out signal (consenttoshare=n)
-->

The default consent setting for Segment Match is opt-out. To enforce an opt-in model for your data, please send an email request to [email contact here].

### Configure data usage label

The last prerequisite you must establish is to configure a new data usage label to prevent data sharing.

Data usage labels allow you to categorize datasets and fields according to usage policies that apply to that data. Labels can be applied at any time, providing flexibility in how you choose to govern data. Best practices encourage labeling data as soon as it is ingested into Experience Platform, or as soon as data becomes available for use in Platform.

Through data usage labels, you can manage what data is allowed to be shared through Segment Match.

For more information on data usage labels, see the [data usage labels overview](https://experienceleague.adobe.com/docs/experience-platform/data-governance/labels/overview.html?lang=en#understanding-data-usage-labels).

## Segment Match end-to-end workflow

Once you have set up your identity data and namespaces, consent configuration, and data usage label, you can start working with Segment Match and its features.

### Connect partner

The first step with using Segment Match is to establish a connection between you and your partner. This "two-way handshake" acts as a self-service means for users to connect their Platform organizations together, at a sandbox level. The connection is required to inform Platform that an agreement has been established and that Platform can facilitate share services between you and your partner(s).

>[!NOTE]
>
>The "two-way handshake" between you and your partner is strictly a connection, no data is exchanged during this process.

The following happens during the connection process:

1. You generate a Share ID through the Share Setting function in the UI.
2. You provide this Share ID to your partner.
3. Your partner enters this Share ID in their sandbox and then makes a request.
4. You accept the request, linking your organization with your partner's organization.

### Create feed

A **feed** is a grouping of data (segments), the rules for how that data can be exposed or used, and the configurations that determine how your data is matched against your partners' data. A feed can be managed independently and exchanged with other Platform users through Segment Match.

The basic set up of a feed includes a name, a description, and configurations regarding data usage labels and identity namespaces.

Once you have established the settings of your feed, select the segments you want to share from your list of first-party segments, and then select the partner(s) to share with from your list of linked partners. During this process, you can **Analyze by Segment** and view the pre-share estimates prior to finalizing your feed, view the number of overlapping identities by namespace between you and your partner, as well as view how many of the overlapped identities are given consent to share data.

**Overlap estimates report**

The overlap estimates report allows you to manage overlap and consent checks per partner and per segment prior to sharing your feed.

| Metrics | Description |
| ------- | ----------- |

### Publish feed

When a feed is created, a partner user can view the feed under the **Receiving** section of the Segments UI. During this process, a receiving partner can review details and terms prior to accepting the shared feed. 

Once a partner accepts the shared feed, they can start using the shared data to build new segments.

You can edit an "active" feed to add or remove segments or identity namespaces:

**Add a new segment** 

To add a new segment, select the segment you intend to add and then save and publish the feed. Your partner must then confirm that the shared feed contains the new metadata, associated with the segment you added.

**Add a new identity namespace**

To add a new namespace, select the namespace you intend to add and then share the new estimate of overlapped namespaces with your partner for confirmation.

**Remove a segment**

You can unshare a segment from an active feed by selecting a segment for removal, and then confirming that the segment is no longer "active".