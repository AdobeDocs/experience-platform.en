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

**Simulated graph**

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

## Use case 2: Intermediate-level integrations

### Simple implementation with non-unique identities

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

**Simulated graph**

+++Select to view simulated graph

![The simulated graph.]

+++

>[!TAB Scenario two]

Due to unclean data, an invalid credit card number is ingested into Experience Platform.

**Text mode:**

```json
CRMID: John, CChash: undefined
CRMID: Jane, CChash: undefined
CRMID: Jack, CChash: undefined
CRMID: Jill, CChash: undefined
```

**Simulated graph**

+++Select to view simulated graph

![The simulated graph.]

+++

>[!ENDTABS]

### Hashed or unhashed CRMIDs

Your customer is ingesting both an unhashed (offline) CRMID and a hashed (online) CRMID. They expect a direct relationship between both unhashed and hashed CRMIDs. However, when a user browses with an authenticated account, the hashed CRMID is sent along with the device ID (represented on Identity Service as an ECID).

Ensure that you have have the following configuration before you simulate the events.

| Unique namespace | Namespace priority |
| --- | --- |
| <ul><li>CRMID</li><li>CRMIDhash</li></ul> | <ul><li>CRMID</li><li>CChash</li><li>ECID</li><li>IDFA</li></ul> |

**Exercise**

Simulate the following configurations in the graph simulation tool. You can either create your own events, or copy and paste using text mode.

>[!BEGINTABS]

>[!TAB Scenario 1: shared device]

John and Jane share a device.

**Text mode:**

```json
CRMID: John, CRMIDhash: John
CRMID: Jane, CRMIDhash: Jane
CRMIDhash: John, ECID: 111 
CRMIDhash: Jane, ECID: 111
```

>[!TAB Scenario 2: bad data]

Due to errors in the hashing process, a non-unique hashed CRMID is generated and sent to Identity Service.

**Text mode:**

```json
CRMID: John, CRMIDhash: aaaa
CRMID: Jane, CRMIDhash: aaaa
```

>[!ENDTABS]

### Real-Time CDP and Adobe Commerce

You have two types of end-users:

* **Members**: An end-user who is assigned a CRMID and has an email account registered to your system.
* **Guests**: An end-user who is not a member. They do not have an assigned CRMID and their email accounts are not registered to your system.

In this scenario, your customers are sending data from Adobe Commerce to Real-Time CDP.

**Exercise**

Simulate the following configurations in the graph simulation tool. You can either create your own events, or copy and paste using text mode.

>[!BEGINTABS]

>[!TAB Shared device between two members]

In this scenario, two members share the same device to browse an e-commerce website.

**Text mode**

```json
CRMID: John, Email: john@g
CRMID: Jane, Email: jane@g
CRMID: John, ECID: 111
CRMID: Jane, ECID: 111
```

>[!TAB Shared device between two guests]

In this scenario, two guests share the same device to browse an e-commerce website.

**Text mode**

```json
Email: john@g, ECID: 111
Email: jane@g, ECID: 111
```

>[!TAB Shared device between a member and a guest]

In this scenario, a member and a guest share the same device to browse an e-commerce website.

**Text mode**

```json
CRMID: John, Email: john@g
CRMID: John, ECID: 111
Email: jane@g, ECID: 111
```


>[!ENDTABS]

### Three unique namespaces

Your customer defines a single-person entity as follows:

* An end-user with an assigned CRMID.
* An end-user who is associated to a hashed email address, so that profiles can be activated to destinations that support hashed email (for example, [!DNL Facebook]).
* An end-user associated with an email addresss, so that support personnel can look up their profile on Real-Time CDP using said email address.

| Unique namespace | Namespace priority |
| --- | --- |
| <ul><li>CRMID</li><li>Email</li><li>Email_LC_SHA256</li></ul> | <ul><li>CRMID</li><li>Email</li><li>Email_LC_SHA256</li><li>ECID</li></ul> |

Simulate the following configurations in the graph simulation tool. You can either create your own events, or copy and paste using text mode.

>[!BEGINTABS]

>[!TAB Two end-users log in]

In this scenario, John and Jane both log in to an e-commerce website.

**Text mode**

```json
CRMID: John, Email: john@g, Email_LC_SHA256: john_hash 
CRMID: Jane, Email: jane@g, Email_LC_SHA256: jane_hash 
CRMID: John, ECID: 111 CRMID: Jane, ECID: 111
```

>[!TAB An end-user changes their email]

**Text mode**

```json
CRMID: John, Email: john@g, Email_LC_SHA256: john_hash
CRMID: John, Email: john@y, Email_LC_SHA256: john_y_hash
```

>[!ENDTABS]