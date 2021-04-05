---
keywords: Experience Platform;home;popular topics;query service;Query service;troubleshooting guide;faq;troubleshooting;
solution: Experience Platform
title: Query Service Troubleshooting Guide
topic: troubleshooting
description: This document contains information on common error codes you encounter and the possible causes.
exl-id: 14cdff7a-40dd-4103-9a92-3f29fa4c0809
---
# [!DNL Query Service] Troubleshooting Guide

## REST API errors

| HTTP Status Code | Description | Possible Causes |
| ---------------- | ----------- | --------------- |
| 400 | Bad request | Malformed or illegal query |
| 401 | Authentication failed | Invalid auth token |
| 500 | Internal server error | Internal system failure |

## PostgreSQL API errors

| Error Code and Connection State | Description | Possible Cause |
| ------------------------------- | ----------- | -------------- |
| **28P01** Start-up - authentication | Invalid password | Invalid authentication token |
| **28000** Start-up - authentication | Invalid authorization type | Invalid authorization type. Must be `AuthenticationCleartextPassword`. |
| **42P12** Start-up - authentication | No tables found | No tables found for use |
| **42601** Query | Syntax error | Invalid command or syntax error |
| **58000** Query | System error | Internal system failure |
| **42P01** Query | Table not found | Table specified in the query was not found |
| **42P07** Query | Table exists | Table already exists with the same name (CREATE TABLE) |
| **53400** Query | LIMIT exceeds max value | User specified a LIMIT clause higher than 100,000 |
| **53400** Query | Statement timeout | The live statement submitted took more than the maximum of 10 minutes |
| **08P01** N/A | Unsupported message type | Unsupported message type |
