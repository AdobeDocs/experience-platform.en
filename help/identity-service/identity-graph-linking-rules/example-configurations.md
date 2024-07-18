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
>* "CRMID" and "loginID" are custom namespaces. In this document, "CRMID" and "loginID" are treated as generic namespaces that represent a person identifier.
>* To simulate the example graph scenarios outlined in this document, you must first create two custom namespaces, one with the identity symbol "CRMID" and another with the identity symbol "loginID".

This document outlines example graph configurations of common scenarios that you might encounter when working with identity data.

## CRMID only

This is an example of a simple implementation scenario where online events (CRMID and ECID) are ingested and offline events (profile records) are only stored against the CRMID.

**Implementation:**

| Namespaces used | Web behavior collection method |
| --- | --- |
| CRMID, ECID | Web SDK |

**Events:**

You can create this scenario in graph simulation by entering the following events:

* CRMID: Tom, ECID: 111

**Algorithm configuration:**

You can create this scenario in graph simulation by configuring the following setup for your algorithm configuration:

| Priority | Display name | Identity type | Unique per graph |
| ---| --- | --- | --- |
| 1 | CRMID | CROSS_DEVICE | Yes |
| 2 | ECID | COOKIE | No |

**Primary identity selection for Real-Time Customer Profile:**

Within the context of this configuration, the primary identity will be defined like this:

| Authentication status | identityMap | Primary identity |
| --- | --- | --- |
| Authenticated | {CRMID, ECID} | CRMID |
| Unauthenticated | {ECID} | ECID | 

>[!BEGINTABS]

>[!TAB Ideal single-person graph scenario]

The following is an example of an ideal single-person graph, where CRMID is unique and given the highest priority.

![A simulated example of an ideal single-person graph, where CRMID is unique and given the highest priority.](../images/graph-examples/crmid_only_single.png)

>[!TAB multi-person graph scenario]

The following is an example of  a multi-person graph. This example displays a "shared device" scenario, where there are two CRMIDs and the one with the older established link gets removed.

![A simulated example of a multi-person graph. This example displays a shared device scenario, where there are two CRMIDs and the older established link gets removed.](../images/graph-examples/crmid_only_multi.png)

>[!ENDTABS]

## CRMID with hashed email

In this scenario, a CRMID is ingested and represents both online (experience event) and offline (profile record) data. This scenario also involves the ingestion of a hashed email, which represents another namespace sent in the CRM record dataset along with the CRMID.

**Implementation:**

| Namespaces used | Web behavior collection method |
| --- | --- |
| CRMID, Email_LC_SHA256, ECID | Web SDK |

**Events:**

You can create this scenario in graph simulation by entering the following events:

* CRMID: Tom, Email_LC_SHA256: tom<span>@acme.com
* CRMID: Tom, ECID: 111
* CRMID: Summer, Email_LC_SHA256: summer<span>@acme.com
* CRMID: Summer, ECID: 222

**Algorithm configuration:**

You can create this scenario in graph simulation by configuring the following setup for your algorithm configuration:

| Priority | Display name | Identity type | Unique per graph |
| ---| --- | --- | --- |
| 1 | CRMID | CROSS_DEVICE | Yes |
| 2 | Emails (SHA256, lowercased) | Email | No |
| 3 | ECID | COOKIE | No |

**Primary identity selection for Profile:**

Within the context of this configuration, the primary identity will be defined like this:

| Authentication status | identityMap | Primary identity |
| --- | --- | --- |
| Authenticated | {CRMID, ECID} | CRMID |
| Unauthenticated | {ECID} | ECID | 

>[!BEGINTABS]

>[!TAB Ideal single-person graph scenario]

![In this example, two separate graphs are generated, each representing a single-person entity.](../images/graph-examples/crmid_hashed_single.png)

>[!TAB multi-person graph: shared device]

![In this example, the simulated graph displays a "shared device" scenario because both Tom and Summer are associated with the same ECID.](../images/graph-examples/crmid_hashed_shared_device.png)

>[!TAB multi-person graph: non-unique email]

![This scenario is similar to a "shared device" scenario. However, instead of having the person entities share ECID, they are instead associate with the same email account.](../images/graph-examples/crmid_hashed_nonunique_email.png)


>[!ENDTABS]

## CRMID with hashed email, hashed phone, GAID, and IDFA

This scenario is similar to the previous one. However, in this scenario, hashed email and phone are being marked as identities to utilize in segment match.

**Implementation:**

| Namespaces used | Web behavior collection method |
| --- | --- |
| CRMID, Email_LC_SHA256, Phone_SHA256, GAID, IDFA, ECID | Web SDK |

**Events:**

You can create this scenario in graph simulation by entering the following events:

* CRMID: Tom, Email_LC_SHA256: aabbcc, Phone_SHA256: 123-4567
* CRMID: Tom, ECID: 111
* CRMID: Tom, ECID: 222, IDFA: A-A-A
* CRMID: Summer, Email_LC_SHA256: ddeeff, Phone_SHA256: 765-4321
* CRMID: Summer, ECID: 333
* CRMID: Summer, ECID: 444, GAID:B-B-B

**Algorithm configuration:**

You can create this scenario in graph simulation by configuring the following setup for your algorithm configuration:

| Priority | Display name | Identity type | Unique per graph |
| ---| --- | --- | --- |
| 1 | CRMID | CROSS_DEVICE | Yes |
| 2 | Emails (SHA256, lowercased) | Email | No |
| 3 | Phone (SHA256) | Phone | No |
| 4 | Google Ad ID (GAID) | DEVICE | No |
| 5 | Apple IDFA (ID for Apple) | DEVICE | No |
| 6 | ECID | COOKIE | No |

**Primary identity selection for Profile:**

Within the context of this configuration, the primary identity will be defined like this:

| Authentication status | identityMap | Primary identity |
| --- | --- | --- |
| Authenticated | {CRMID, IDFA, ECID} | CRMID |
| Authenticated | {CRMID, GAID, ECID} | CRMID |
| Authenticated | {CRMID, ECID} | CRMID |
| Unauthenticated | {GAID, ECID} | GAID |
| Unauthenticated | {IDFA, ECID} | IDFA |
| Unauthenticated | {ECID} | ECID |

>[!BEGINTABS]

>[!TAB Ideal single-person graph scenario]

![](../images/graph-examples/crmid_hashed_single_seg_match.png)

>[!ENDTABS]

<!-- 
## Single CRMID with multiple login IDs (simple)

In this scenario, there is a single CRMID that represents a person entity. However, a person entity may have multiple login identifiers:

* A given person entity can have different account account types (personal vs. business, account by state, account by brand, etc.)
* A given person entity may use different email addresses for any number of accounts.

Therefore, **it is crucial that the CRMID is always sent for every user**. Failure to do so may result in a "dangling" login ID scenario, where a single person entity is assumed to be sharing a device with another person.

**Implementation:**

| Namespaces used | Web behavior collection method |
| --- | --- |
| CRMID, loginID, ECID | Web SDK |

**Events:**

You can create this scenario in graph simulation by entering the following events:

* CRMID: John, loginID: ID_A
* CRMID: John, loginID: ID_B
* loginID: ID_A, ECID: 111
* CRMID: Jane, loginID: ID_C
* CRMID: Jane, loginID: ID_D
* loginID: ID_C, ECID: 222

**Algorithm configuration:**

You can create this scenario in graph simulation by configuring the following setup for your algorithm configuration:

| Priority | Display name | Identity symbol | Identity type | Unique per graph |
| ---| --- | --- | --- | --- |
| 1 | CRMID | CRMID | CROSS_DEVICE | Yes |
| 2 | loginID | loginID | CROSS_DEVICE | No |
| 3 | ECID | ECID | COOKIE | No |

## Single CRMID with multiple login IDs (complex)

In this scenario, there is a single CRMID that represents a person entity. However, a person entity may have multiple login identifiers:

* A given person entity can have different account account types (personal vs. business, account by state, account by brand, etc.)
* A given person entity may use different email addresses for any number of accounts.

The case of "dangling" loginID also applies for this scenario.

**Implementation:**

| Namespaces used | Web behavior collection method |
| --- | --- |
| CRMID, Email_LC_SHA256, Phone_SHA256, loginID, ECID, AAID | Adobe Analytics source connector |


**Events:**

You can create this scenario in graph simulation by entering the following events:

* CRMID: John, Email_LC_SHA256: aabbcc, Phone_SHA256: 123-4567
* CRMID: John, loginID: ID_A
* CRMID: John, loginID: ID_B
* loginID:ID_A, ECID: 111, AAID: AAA
* CRMID: Jane, Email_LC_SHA256: ddeeff, Phone_SHA256: 765-4321
* CRMID: Jane, loginID: ID_C
* CRMID: Jane, loginID: ID_D
* loginID: ID_C, ECID: 222, AAID: BBB

**Algorithm configuration:**

You can create this scenario in graph simulation by configuring the following setup for your algorithm configuration:

| Priority | Display name | Identity symbol | Identity type | Unique per graph |
| ---| --- | --- | --- | --- |
| 1 | CRMID | CRMID | CROSS_DEVICE | Yes |
| 2 | Email_LC_SHA256 | Email_LC_SHA256 | EMAIL | No |
| 3 | Phone_SHA256 | Phone_SHA256 | PHONE | No |
| 4 | loginID | loginID | CROSS_DEVICE | No |
| 5 | ECID | ECID | COOKIE | No |
| 6 | AAID | AAID | COOKIE | No |
 -->
