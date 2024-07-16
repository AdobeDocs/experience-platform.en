---
title: Example Configurations 
description: Learn about example configurations with using the graph simulation tool.
hide: true
hidefromtoc: true
badge: Beta
---
# Example graph configurations

>[!NOTE]
>
>"CRMID" is a custom namespace. Therefore, the examples below require you to create a custom namespace with a display name and identity symbol of "CRMID".

The following section examples of graph scenarios you might encounter with Graph Simulation.

## CRMID only

Events:

* CRMID: Tom, ECID: 111

Algorithm configuration:

| Priority | Display name | Identity symbol | Identity type | Unique per graph |
| ---| --- | --- | --- | --- |
| 1 | CRMID | CRMID | CROSS_DEVICE | Yes |
| 2 | ECID | ECID | COOKIE | NO |

+++Select to view simulated graph

+++

## CRMID with hashed email

In this scenario, a CRMID is ingested and represents both online (experience event) and offline (profile record) data. This scenario also involves the ingestion of a hashed email, which represents another namespace sent in the CRM record dataset along with the CRMID.

Events:

* CRMID: Tom, Email_LC_SHA256: tom<span>@acme.com
* CRMID: Tom, ECID: 111
* CRMID: Summer, Email_LC_SHA256: summer<span>@acme.com
* CRMID: Summer, ECID: 222

Algorithm configuration:

| Priority | Display name | Identity symbol | Identity type | Unique per graph |
| ---| --- | --- | --- | --- |
| 1 | CRMID | CRMID | CROSS_DEVICE | Yes |
| 2 | Emails (SHA256, lowercased) | Email_LC_SHA256 | Email | NO |
| 3 | ECID | ECID | COOKIE | NO |

+++Select to view simulated graph

+++

## CRMID with hashed email, hashed phone, GAID, and IDFA

Events:

* CRMID: Tom, Email_LC_SHA256: aabbcc, Phone_SHA256: 123-4567
* CRMID: Tom, ECID: 111
* CRMID: Tom, ECID: 222, IDFA: A-A-A
* CRMID: Summer, Email_LC_SHA256: ddeeff, Phone_SHA256: 765-4321
* CRMID: Summer, ECID: 333
* CRMID: Summer, ECID: 444, GAID:B-B-B

Algorithm configuration: 

| Priority | Display name | Identity symbol | Identity type | Unique per graph |
| ---| --- | --- | --- | --- |
| 1 | CRMID | CRMID | CROSS_DEVICE | Yes |
| 2 | Emails (SHA256, lowercased) | Email_LC_SHA256 | Email | NO |
| 3 | Phone (SHA256) | Phone_SHA256 | Phone | NO |
| 4 | Google Ad ID (GAID) | GAID | DEVICE | NO |
| 5 | Apple IDFA (ID for Apple) | IDFA | DEVICE | NO |
| 6 | ECID | ECID | COOKIE | NO |

+++Select to view simulated graph

+++