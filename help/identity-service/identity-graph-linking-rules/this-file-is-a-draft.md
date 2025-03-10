---
title: This Is A Draft
description: Learn about how and why this is a draft.
---
# Draft

Customer graph scenarios can be grouped into three different categories: beginner, intermediate, and advanced. 

| | Beginner | Intermediate | Advanced |
| --- | --- | --- | --- |
| Graph collapse because of shared device | ✔️ |  ✔️ |  ✔️ 
| Graph collapse because of non-unique identities | n/a |  ✔️  |  ✔️ 
| Use of namespace priority | n/a | n/a |  ✔️  |
| Customer graph scenarios | Simple implementation with one cross-device namespace | <ul><li>Simple implementation with additional graph collapse scenarios due to non-unique identifiers.</li><li>Hashed/unhashed(online/offline) CRMIDs.</li><li>Customers using Real-Time CDP and Adobe Commerce</li><li>Three unique namespaces.</li></ul> | <ul><li>Support for multiple lines of businesses.</li><li>Complex implementation.</li></ul> |

{style="table-layout:auto"}

## Use case 1 (beginner)

Generally, Adobe customers have a single cross-device ID that is used across all of their properties, including web, mobile, apps, etc. This system is both industry and geographically agnostic as customers in retail, telecom, and financial services use this implementation.

An end-user is represented by a CRMID, therefore the CRMID should be classified as a unique namespace. 

**Text mode**

```json
CRMID: John, ECID: 123
CRMID: John, ECID: 999, IDFA: a-b-c
```