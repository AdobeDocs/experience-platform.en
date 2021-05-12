---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;Segment Match;segment match
solution: Experience Platform
title: Segment Match Overview
topic: overview
description: Segment Match is a segment-sharing service in Adobe Experience Platform that allows for two or more Platform users to exchange segment data in a secure, governed, and privacy-friendly manner.
---

# (Alpha) [!DNL Segment Match] overview

>[!IMPORTANT]
>
>[!DNL Segment Match] is currently in alpha. The documentation and the functionality are subject to change.

[!DNL Segment Match] is a segment-sharing service in Adobe Experience Platform that allows for two or more Platform users to exchange segment data in a secure, governed, and privacy-friendly manner. [!DNL Segment Match] uses Platform privacy standards and global identities such as hashed emails, hashed phone numbers, and global device identifiers like IDFAs and GAIDs.

With [!DNL Segment Match] you can:

* Manage the identity overlap process.
* View pre-share estimates.
* Apply data usage labels to control whether data can be shared with partners.
* Maintain shared audience lifecycle management after publishing a feed and continue a dynamic exchange of data through abilities to add, delete, and unshare.

[!DNL Segment Match] uses an identity overlap process to ensure that segment sharing is done in a secure and privacy-focused manner. An **overlapped identity** is an identity that has a match in both your segment and your selected partner's segment. Prior to sharing a segment between a sender and a receiver, the identity overlap process checks for an overlap in namespaces and consent checks between the sender and receiver(s). Both overlap checks must pass in order for a segment to be shared.

The following sections provide more information about [!DNL Segment Match], including details on setup and its end-to-end workflow.

## Prerequisites

The following prerequisites must be set up before you start working with [!DNL Segment Match]:

### Set up identity data and namespaces

The first step to getting started with [!DNL Segment Match] is to make sure you're ingesting data against the supported identity namespaces.

Identity namespaces are a component of [Adobe Experience Platform Identity Service](../../identity-service/home.md). Each customer identity contains an associated namespace that indicates the identity's context. For example, a namespace can distinguish a value. For example, they distinguish a value of "name<span>@email.com" as an email address or "443522" as a numeric CRM ID.

A fully qualified identity includes an ID value and a namespace. When matching record data across profile fragments (such as when [!DNL Real-time Customer Profile] merges profile data), both the identity value and the namespace must match.

In the context of [!DNL Segment Match], namespaces are used in the overlap process when sharing data.

The list of supported namespaces are as follows:

| Namespace | Description |
| --------- | ----------- |
| Emails (SHA256, lowercased) | A namespace for pre-hashed email address. Values provided in this namespace are converted to lowercase before hashing with SHA256. Leading and trailing spaces need to be trimmed before an email address is normalized. This setting cannot be changed retroactively. See the following document on [SHA256 hashing support](https://experienceleague.adobe.com/docs/id-service/using/reference/hashing-support.html?lang=en#hashing-support) for more information. |
| Phone (SHA256_E.164)| A namespace that represents raw phone numbers that need to be hashed using both SHA256 and E.164 format. |
| ECID | A namespace that represents an Experience Cloud ID (ECID) value. This namespace can also be referred to by the following aliases: "Adobe Marketing Cloud ID", "Adobe Experience Cloud ID", "Adobe Experience Platform ID". See the [ECID overview](../../identity-service/ecid.md) for more information. |
| Apple IDFA (ID for Advertisers) | A namespace that represents Apple ID for Advertisers. See the following document on [interest-based ads](https://support.apple.com/en-us/HT202074) for more information. |
| Google Ad ID | A namespace that represents a Google Advertising ID. See the following document on [Google Advertising ID](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en) for more information. |

### Set up consent configuration

You must provide a consent configuration and set its default value to either opt-in or opt-out for a consent check.

The opt-in and opt-out consent check determines whether you can operate with the consent to share user data by default. If the consent configuration default is set to `opt-in`, then user data can be shared, unless a user explicitly opts out. If the default is set to `opt-out`, then user data cannot be shared, unless a user explicitly opts in.

The default consent configuration for [!DNL Segment Match] is set to `opt-out`. To enforce an opt-in model for your data, please send an email request to your Adobe Account Manager

For more information on the specific field group used to capture consumer consent for collection and use of data related to privacy, personalization and marketing preferences, see the following [Consent for Privacy, Personalization and Marketing Preferences GitHub example](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/consent-preferences.schema.md).

### Configure data usage labels

The last prerequisite you must establish is to configure a new data usage label to prevent data sharing. Through data usage labels, you can manage what data is allowed to be shared through [!DNL Segment Match].

Data usage labels allow you to categorize datasets and fields according to usage policies that apply to that data. Labels can be applied at any time, providing flexibility in how you choose to govern data. Best practices encourage labeling data as soon as it is ingested into Experience Platform, or as soon as data becomes available for use in Platform.

For a list of data usage labels and their definitions, see the [data usage labels glossary](../../data-governance/labels/reference.md).

## [!DNL Segment Match] end-to-end workflow

Once you have set up your identity data and namespaces, consent configuration, and data usage label, you can start working with [!DNL Segment Match] and its features.

### Connect partner

The first step with using [!DNL Segment Match] is to establish a connection between you and your partner. This "two-way handshake" acts as a self-service method for users to connect their Platform organizations together at a sandbox level. The connection is required to inform Platform that an agreement has been established and that Platform can facilitate share services between you and your partner(s).

>[!NOTE]
>
>The "two-way handshake" between you and your partner is strictly a connection. No data is exchanged during this process.

The connection process can be summarized as follows:

1. You generate a Share ID through the [!UICONTROL Share Setting] function in the UI.
2. You provide this Share ID to your partner.
3. Your partner enters this Share ID in their sandbox and then makes a request.
4. You accept the request, linking your organization with your partner's organization.

### Create feed

A **feed** is a grouping of data (segments), the rules for how that data can be exposed or used, and the configurations that determine how your data is matched against your partners' data. A feed can be managed independently and exchanged with other Platform users through [!DNL Segment Match].

The basic set up of a feed includes a name, a description, and configurations regarding data usage labels and identity namespaces.

Once you have established the settings of your feed, select the segments you want to share from your list of first-party segments, and then select the partner(s) to share with from your list of linked partners. During this process, you can **Analyze by Segment** and view the pre-share estimates prior to finalizing your feed, view the number of overlapping identities by namespace between you and your partner, as well as view how many of the overlapped identities are given consent to share data.

**Overlap estimates report**

The overlap estimates report allows you to manage overlap and consent checks per partner and per segment prior to sharing your feed.

| Metrics | Description |
| ------- | ----------- |
| Estimated overlapped identities | The number of identities that qualify for the selected segment and also have a match with the selected partner. These identities are displayed by namespace and do not represent individual Profile identities. The overlap estimates are based on Profile sketches. |
| Estimated identities with consent | The total number of overlapped identities that meet the consent requirements configured for your organization. |

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