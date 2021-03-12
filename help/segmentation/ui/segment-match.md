---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;segment match;Segment Match
solution: Experience Platform
title: Segment Match overview
topic: overview
description: Segment match is a segment-sharing service in Adobe Experience Platform that allows for two or more Platform users to exchange segment data in a secure, governed, and privacy-friendly manner.
---

# Segment match overview (Alpha)

>[!IMPORTANT]
>
>Segment match is currently in alpha. The documentation and the functionality are subject to change.

Segment match is a segment-sharing service in Adobe Experience Platform that allows for two or more Platform users to exchange segment data in a secure, governed, and privacy-friendly manner. Segment match uses Platform privacy standards and global identities such as a hashed email, hashed phone number, and global device identifiers like IDFAs and GAIDs. Segment match aims to provide workflows for broader ID transformation and first-party matching, allowing users to collaborate on Platform using their first-party data.

The documentation below provides more information about Segment Match, including details on set up and its end-to-end workflow.

## Prerequisites

The following prerequisites must be set up before you start working with segment match:

### Set up identity data and namespace

The first step to getting started with segment match is to set up your identity data and namespaces.

### Set up consent configuration

You must provide a consent configuration and set up its default value as either opt-in or opt-out for a consent check.

### Configure data usage label

The last prerequisite you must establish is to configure a new data usage label to prevent data sharing.

## Segment Match end-to-end workflow

Once you have set up your identity data and namespaces, consent configuration, and data usage label, you can start working with segment match and its features.

### Connect partner

The first step with using segment match is to establish a connection between you and your partner. This "two-way handshake" acts as a self-service means for users to connect their Platform organizations together, at a sandbox level. The connection is required to inform Platform that an agreement has been established and that Platform can facilitate share services between you and your partner(s).

The following happens during the connection process:

1. You generate a Share ID through the Share Setting function in the UI.
2. You provide this Share ID to your partner.
3. Your partner enters this Share ID in their sandbox and then makes a request.
4. You accept the request, linking your organization with your partner's organization.

### Create feed

A **feed** is a grouping of data (segments) and the rules for how that data can be exposed or used. A feed can be managed independently and exchanged with other Platform users through segment match.

The basic set up of a feed includes a name, a description, and configurations regarding data usage labels and identity namespaces.

Once you have established the settings of your feed, select the segments you want to share from your list of first-party segments, and then select the partner(s) to share with from your list of linked partners. During this process, you can **Analyze by Segment** and view the pre-share estimates prior to finalizing your feed, view the number of overlapping identities by namespace between you and your partner, as well as view how many of the overlapped identities are given consent to share data.

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