---
title: This Is A Draft
description: Learn about how and why this is a draft.
---
# Draft

Customer graph scenarios can be grouped into three different categories: beginner, intermediate, and advanced. 

| | Beginner | Intermediate | Advanced |
| --- | --- | --- | --- |
| Graph collapse because of shared device | ✔️ |  ✔️ |  ✔️ |
| Graph collapse because of non-unique identities | n/a | ✔️ | ✔️ |
| Use of namespace priority | n/a | n/a | ✔️ |
| Customer graph scenarios | Simple implementation with one cross-device namespace | <ul><li>Simple implementation with additional graph collapse scenarios due to non-unique identifiers.</li><li>Hashed/unhashed(online/offline) CRMIDs.</li><li>Customers using Real-Time CDP and Adobe Commerce</li><li>Three unique namespaces.</li></ul> | <ul><li>Support for multiple lines of businesses.</li><li>Complex implementation.</li></ul> |

{style="table-layout:auto"}

## Use case 1 (beginner)

Generally, Adobe customers have a single cross-device ID that is used across all of their properties, including web, mobile, apps, etc. This system is both industry and geographically agnostic as customers in retail, telecom, and financial services use this implementation.

An end-user is represented by a CRMID, therefore the CRMID should be classified as a unique namespace. 

**Text mode:**

```json
CRMID: John, ECID: 123
CRMID: John, ECID: 999, IDFA: a-b-c
```

**Resulting graph**

(graph here)

**Identity settings (algorithm) configuration**

Before you simulate the events, you must configure the following:

| Unique namespace | Namespace priority |
| --- | --- |
| CRMID | <ul><li>CRMID</li><li>ECID</li><li>IDFA</li></ul> |

| Display name | Identity symbol | Identity type | Unique per graph |
| --- | --- | --- | --- |
| CRMID | CRMID | CROSS_DEVICE |  ✔️  |
| ECID | ECID | COOKIE | |
| IDFA | IDFA | DEVICE | |

### Exercise

**Shared device (PC)**

You are a data engineer at an e-commerce company and you have end-users that visit your website using the same device. For example, John and Jane, a couple in San Jose, California, share the same desktop computer. They use this desktop computer to browse your website.

You can implement this use case in the graph simulation tool by creating your own events or inputting the following in text mode:

**Text mode:**

```json
CRMID: John, ECID: 111
CRMID: Jane, ECID: 111
```

**Resulting graph**

**Shared device (mobile)**

Similarly, John and Jane also share an iPad and will occasionally use this iPad to browse the internet, including your website.

You can implement this use case in the graph simulation tool by creating your own events or inputting the following in text mode:

**Text mode:**

```json
CRMID: John, IDFA: a-b-c
CRMID: Jane, IDFA: a-b-c
```

### Anonymous event association and how authenticated events are associated

A common question is: "If the ECID is linked from John to Jane, then will John's events (on Real-Time Customer Profile) also move over to Jane?"
