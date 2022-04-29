---
keywords: Experience Platform;home;popular topics;data prep;Data Prep;streaming;upsert;streaming upsert
title: Streaming Upserts in Data Prep
description: This document provides information on how to use streaming upserts in Data Prep.
---
# Streaming upserts in [!DNL Data Prep]

Through streaming upserts, [!DNL Data Prep] allows you to retain the format of your data while translating data to Profile Service PATCH requests in flight, during ingestion. Based on the inputs you provide, [!DNL Data Prep] allows you to send a single API payload and translate them to both Profile Service PATCH and Identity Service CREATE requests. 

This document provides information on how to stream upserts in [!DNL Data Prep].

<!--
The goal of Streaming Upserts support in Data Prep is to extend this functionality by allowing customers to retain their data formats as-is and translate that data format to Profile Patch requests in flight during ingestion and eventually to CDC when CDC is available. Data Prep will support receiving a single payload API from customers and translate them to Profile Patch requests and Identity Create requests based on the inputs given. This effort does not change any other existing behavior of Profile Patch requests or other ingestion processes. All other considerations and limitations will remain as is and will be addressed as part of the CDC integration or other initiatives.
-->

