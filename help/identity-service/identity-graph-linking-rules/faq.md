---
title: Troubleshooting Guide For Identity Graph Linking Rules
description: Learn how to troubleshoot common issues in identity graph linking rules
badge: Beta
---
# Troubleshooting guide for identity graph linking rules

As you test and validate identity graph linking rules, you may tun into some issues related to data ingestion and graph behavior. Read this document to learn how to troubleshoot some common issues that you might encounter when working with identity graph linking rules.

## Data ingestion flow overview {#data-ingestion-flow-overview}

The following diagram is a simplified representation of how data flows into Adobe Experience Platform and Applications. Use this diagram as reference to help you get a better understanding of the contents of this page.

It is important to note the following factors:

* For streaming data, all three stores (Real-Time Customer Profile, Identity Service, and data lake) will start processing the data when the data is sent. However, the latency to complete the processing of the data is dependant on the service. Usually, data lake will take a longer time to process, compared to Profile and Identity.
  * If the data does not appear when running a query against a dataset even after a couple of hours, then it is likely that the data did not get ingested into Experience Platform.
* For batch data, all data will flow into data lake first, then the data will be propagated to Profile and Identity if the dataset is enabled for Profile and Identity.

## Data ingestion issues {#data-ingestion-issues}

>[!NOTE]
>
>In this section, the assumption is that data is successfully ingested into data lake and that there are no syntax or other errors that would reject the data from being ingested into Experience Platform in the first place.

### My identities are not getting ingested into Identity Service

There are various reasons for why this could happen, including, but not limited to the following:

* The dataset is not enabled for Profile.
* The record is skipped because there is only one identity in the event.
* A validation failure occurred in Identity Service.
  * For example, an ECID could have exceeded the maximum length of 38 characters.
* By default, AAIDs are blocked from ingestion.
* The identity is removed because of system guardrails.