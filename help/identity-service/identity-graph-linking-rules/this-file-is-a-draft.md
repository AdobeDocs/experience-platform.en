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

## Use case 1: Beginner-level integration

Generally, Adobe customers have a single cross-device ID that is used across all of their properties, including web, mobile, and applications. This system is both industry and geographically agnostic as customers in retail, telecom, and financial services use this implementation.

An end-user is represented by a CRMID, therefore the CRMID should be classified as a unique namespace. An end-user who owns a computer or an [!DNL iPhone] and does not share their device, could have an identity graph that looks like the following.

**Text mode:**

```json
CRMID: John, ECID: 123
CRMID: John, ECID: 999, IDFA: a-b-c
```

**Resulting graph**

![An identity graph with one CRMID.]

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

Simulate the following configuration in the graph simulation tool. You can either create your own events, or copy and paste using text mode.

>[!BEGINTABS]

>[!TAB Shared device (PC)]

**Shared device (PC)**

* You are a data architect at e-commerce company called "ACME".
* John and Jane live together in San Jose, California. They share a desktop computer and use this computer to browse your website.

You can implement this use case in the graph simulation tool by creating your own events or inputting the following in text mode:

**Text mode:**

```json
CRMID: John, ECID: 111
CRMID: Jane, ECID: 111
```

**Simulated graph**

![Image of the simulated graph]

>[!TAB Shared device (mobile)]

**Shared device (mobile)**

Similarly, John and Jane also share an [!DNL iPad] and occasionally use this [!DNL iPad] to browse the internet, including your website.

You can implement this use case in the graph simulation tool by creating your own events or inputting the following in text mode:

**Text mode:**

```json
CRMID: John, IDFA: a-b-c
CRMID: Jane, IDFA: a-b-c
```

**Simulated graph**

![Image of the simulated graph]

>[!ENDTABS]

### Anonymous event association and how authenticated events are associated

A common question is: "If the ECID is linked from John to Jane, then will John's events (on Real-Time Customer Profile) also move over to Jane?"

| Event type | Association (primary identity of the event) |
| --- | --- |
| John's authenticated (logged in) events | John |
| Jane's unauthenticated events | Jane |
| Unauthenticated (logged out) events | The last authenticated user, which can be either John or Jane. |

Authenticated events are tied to the person and unauthenticated events are tied to the device. There will never be a scenario where Jane's browsing events get associated with John, and vice versa.


## Use case 2: Intermediate-level integration

You are a data architect working for a commercial bank that issues credit cards. Your marketing team has indicated that they want to include past credit card transaction history to a profile. This identity graph could look like the following.

**Text mode:**

```json
CRMID: John, CChash: 1111-2222 
CRMID: John, CChash: 3333-4444 
CRMID: John, ECID: 123 
CRMID: John, ECID: 999, IDFA: a-b-c
```

**Simulated graph**

![Image of the simulated graph]

* However, there are no guarantees that these credit card numbers, or any other non-unique namespaces, will always be associated to one single person. 
* Two people may register the same credit card, there may be non-unique dummy values that may be ingested. 
* Simply put, non-unique namespaces will cause two CRMIDs to collapse.

To solve this issue, Identity Service removes the oldest links and retains the most recent links. This ensures that you just have one CRMID in a graph, thereby preventing scenarios of graph collapse.

Ensure that you have have the following configuration before you simulate the events.

| Unique namespace | Namespace priority |
| --- | --- |
| CRMID | <ul><li>CRMID</li><li>CChash</li><li>ECID</li><li>IDFA</li></ul> |

| Display name | Identity symbol | Identity type | Unique per graph |
| --- | --- | --- | --- |
| CRMID | CRMID | CROSS_DEVICE |  ✔️  |
| CChash | CChash | CROSS_DEVICE | |
| ECID | ECID | COOKIE | |
| IDFA | IDFA | DEVICE | |

### Exercise

Simulate the following configurations in the graph simulation tool. You can either create your own events, or copy and paste using text mode.

>[!BEGINTABS]

>[!TAB Scenario one]

A credit card number is registered by two end-users. Your marketing team wants to prevent graph collapse and wants that credit card to be associated with just a single profile. 

**Text mode:**

```json
CRMID: John, CChash: 1111-2222
CRMID: Jane, CChash: 1111-2222
CRMID: John, ECID: 123
CRMID: Jane, ECID:456
```

>[!TAB Scenario two]

Due to unclean data, an invalid credit card number is ingested into Experience Platform.

**Text mode:**

```json
CRMID: John, CChash: undefined
CRMID: Jane, CChash: undefined
CRMID: Jack, CChash: undefined
CRMID: Jill, CChash: undefined
```

>[!ENDTABS]