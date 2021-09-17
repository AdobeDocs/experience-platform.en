---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;Segment Match;segment match
solution: Experience Platform
title: Segment Match FAQ
description: Segment Match is a segment-sharing service in Adobe Experience Platform that allows for two or more Platform users to exchange segment data in a secure, governed, and privacy-friendly manner.
---
# [!DNL Segment Match] frequently asked questions

This guide provides answers to privacy and legal questions often asked about Adobe Experience Platform Segment Match.

## How are overlap estimates generated for use with internal legal and privacy teams?

Data does not move across different sandboxes. Raw emails in any given sandbox are added to a probabilistic data structure. The IDs themselves are represented in a hashed format within a data structure.

This is a one-way process as IDs cannot be obtained from a data structure.

A billion email IDs are hashed into a 1 MB data structure, making them impossible to be reverse-engineered into raw IDs. These data structures have unique properties that allow engineering to perform `union` and `intersection` operations between them, even if the information encoded is severely compressed or hashed. These operations allow Segment Match to get the intersection of two data structures composed of IDs from two different audiences without having to compare the actual raw values. Furthermore, the resulting intersection counts are probabilistic estimates because speed is prioritized over accuracy. Since Segment Match only uses the data structures, the raw IDs never leave their respective IMS Organizations' Profile storages for estimation purposes.

For this beta, the IDs in the overlap are hashed by the user from the beginning, so that the "raw" IDs are in fact already pre-hashed, before they even enter further hashing and matching processes.  

## What is the process behind designating which identities receive the shared segment IDs?

There is a match process (separate from the overlap sketches) that allows you to identify which identities receive the shared segment IDs.

The intersection between the encrypted identities of two differeent organizations is performed in a neutral (spark) compute environment. The intersection job is owned by the Identity Service team. The organizations involved in the partnership do not have access to this environment, nor do they get access to any intermediate data, metrics, or logs that may be an outcome from the intersection job.

Only segment membership is ingested into a receiver IMS Organization's overlapping Profile fragments and no additional identity is transferred from the sender IMS Organization to the receiver IMS Organization. No plain text personally identifiable information (PII) is read by the intersection job because Segment Match allows overlaps only on SHA256 encrypted namespaces (email/phone) wherever data is PII. Any results are not stored in the compute environment.