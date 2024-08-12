---
title: Example Configurations 
description: Learn about example configurations with using the graph simulation tool.
badge: Beta
---
# Example graph configurations

>[!AVAILABILITY]
>
>Identity graph linking rules is currently in beta. Contact your Adobe account team for information on the participation criteria. The feature and documentation are subject to change.

>[!NOTE]
>
>* "CRMID" and "loginID" are custom namespaces. In this document, "CRMID" is a person identifier and "loginID" is a login identifier associated with a given person.
>* To simulate the example graph scenarios outlined in this document, you must first create two custom namespaces, one with the identity symbol "CRMID" and another with the identity symbol "loginID". Identity symbols are case sensitive.

This document outlines example graph configurations of common scenarios that you might encounter when working with identity data.

## CRMID only

This is an example of a simple implementation scenario where online events (CRMID and ECID) are ingested and offline events (profile records) are only stored against the CRMID.

**Implementation:**

| Namespaces used | Web behavior collection method |
| --- | --- |
| CRMID, ECID | Web SDK |

**Events:**

You can create this scenario in graph simulation by copying the following events to text mode:

* CRMID: Tom, ECID: 111

**Algorithm configuration:**

You can create this scenario in graph simulation by configuring the following setup for your algorithm configuration:

| Priority | Display name | Identity type | Unique per graph |
| ---| --- | --- | --- |
| 1 | CRMID | CROSS_DEVICE | Yes |
| 2 | ECID | COOKIE | No |

**Primary identity selection for Real-Time Customer Profile:**

Within the context of this configuration, the primary identity will be defined like this:

| Authentication status | Namespace(s) in events | Primary identity |
| --- | --- | --- |
| Authenticated | CRMID, ECID | CRMID |
| Unauthenticated | ECID | ECID | 

**Graph examples**

>[!BEGINTABS]

>[!TAB Ideal single-person graph scenario]

The following is an example of an ideal single-person graph, where CRMID is unique and given the highest priority.

![A simulated example of an ideal single-person graph, where CRMID is unique and given the highest priority.](../images/graph-examples/crmid_only_single.png)

>[!TAB Multi-person graph scenario]

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

You can create this scenario in graph simulation by copying the following events to text mode:

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

| Authentication status | Namespace(s) in events | Primary identity |
| --- | --- | --- |
| Authenticated | CRMID, ECID | CRMID |
| Unauthenticated | ECID | ECID | 

**Graph examples**

>[!BEGINTABS]

>[!TAB Ideal single-person graph]

The following is an example of two single-person graphs, where each CRMID is associated with their respective hashed email namespace and ECID.

![In this example, two separate graphs are generated, each representing a single-person entity.](../images/graph-examples/crmid_hashed_single.png)

>[!TAB Multi-person graph: shared device]

The following is an example of a multi-person graph scenario where a device  is shared by two people.

![In this example, the simulated graph displays a "shared device" scenario because both Tom and Summer are associated with the same ECID.](../images/graph-examples/crmid_hashed_shared_device.png)

>[!TAB Multi-person graph: non-unique email]

The following is an example of a multi-person graph scenario where email is not unique and is being associated with two different CRMIDs.

![This scenario is similar to a "shared device" scenario. However, instead of having the person entities share ECID, they are instead associate with the same email account.](../images/graph-examples/crmid_hashed_nonunique_email.png)

>[!ENDTABS]

## CRMID with hashed email, hashed phone, GAID, and IDFA

This scenario is similar to the previous one. However, in this scenario, hashed email and phone are being marked as identities to utilize in [!DNL Segment Match].

**Implementation:**

| Namespaces used | Web behavior collection method |
| --- | --- |
| CRMID, Email_LC_SHA256, Phone_SHA256, GAID, IDFA, ECID | Web SDK |

**Events:**

You can create this scenario in graph simulation by copying the following events to text mode:

```shell
CRMID: Tom, Email_LC_SHA256: aabbcc, Phone_SHA256: 123-4567
CRMID: Tom, ECID: 111
CRMID: Tom, ECID: 222, IDFA: A-A-A
CRMID: Summer, Email_LC_SHA256: ddeeff, Phone_SHA256: 765-4321
CRMID: Summer, ECID: 333
CRMID: Summer, ECID: 444, GAID:B-B-B
```

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

| Authentication status | Namespace(s) in events| Primary identity |
| --- | --- | --- |
| Authenticated | CRMID, IDFA, ECID | CRMID |
| Authenticated | CRMID, GAID, ECID | CRMID |
| Authenticated | CRMID, ECID | CRMID |
| Unauthenticated | GAID, ECID | GAID |
| Unauthenticated | IDFA, ECID | IDFA |
| Unauthenticated | ECID | ECID |

**Graph examples**

>[!BEGINTABS]

>[!TAB Ideal single-person graph]

The following is an ideal single-person graph scenario where hashed email and hashed phone are marked as identities for use in [!DNL Segment Match]. In this scenario, the graphs are split into two, to represent to disparate person entities.

![An ideal single-person graph scenario.](../images/graph-examples/crmid_hashed_single_seg_match.png)

>[!TAB Multi-person graph: shared device, shared computer]

The following is a multi-person graph scenario where a device (computer) is shared by two people. In this scenario, the shared computer is represented by `{ECID: 111}` and is linked to `{CRMID: Summer}` because that link is the most recently established link. `{CRMID: Tom}` is removed because the link between `{CRMID: Tom}` and `{ECID: 111}` is older and because CRMID is the designated unique namespace in this configuration.

![A multi-person graph scenario where two users are sharing a computer.](../images/graph-examples/shared_device_shared_computer.png)

**Graph simulation events input**

```shell
CRMID: Tom, Email_LC_SHA256: aabbcc, Phone_SHA256: 123-4567
CRMID: Tom, ECID: 111
CRMID: Tom, ECID: 222, IDFA: A-A-A
CRMID: Summer, Email_LC_SHA256: ddeeff, Phone_SHA256: 765-4321
CRMID: Summer, ECID: 333
CRMID: Summer, ECID: 444, GAID:B-B-B
CRMID: Summer, ECID: 111
```

>[!TAB Multi-person graph: shared device, android mobile device]

The following is a multi-person graph scenario where an android device is shared by two people. In this scenario, CRMID is configured as a unique namespace, and therefore, the newer link of `{CRMID: Tom, GAID: B-B-B, ECID:444}` supersedes the older `{CRMID: Summer, GAID: B-B-B, ECID:444}`.

![A multi-person graph scenario where two users are sharing an android mobile device.](../images/graph-examples/shared_device_android.png)

**Graph simulation events input**

```shell
CRMID: Tom, Email_LC_SHA256: aabbcc, Phone_SHA256: 123-4567
CRMID: Tom, ECID: 111
CRMID: Tom, ECID: 222, IDFA: A-A-A
CRMID: Summer, Email_LC_SHA256: ddeeff, Phone_SHA256: 765-4321
CRMID: Summer, ECID: 333
CRMID: Summer, ECID: 444, GAID: B-B-B
CRMID: Tom, ECID: 444, GAID: B-B-B
```

>[!TAB Multi-person graph: shared device, apple mobile device, no ECID reset]

The following is a multi-person graph scenario where an Apple device is shared by two people. In this scenario the IDFA is shared, but the ECID does not reset.

![A multi-person graph scenario where two users are sharing an Apple mobile device.](../images/graph-examples/shared_device_apple_no_reset.png)

**Graph simulation events input**

```shell
CRMID: Tom, Email_LC_SHA256: aabbcc, Phone_SHA256: 123-4567
CRMID: Tom, ECID: 111
CRMID: Tom, ECID: 222, IDFA: A-A-A
CRMID: Summer, Email_LC_SHA256: ddeeff, Phone_SHA256: 765-4321
CRMID: Summer, ECID: 333
CRMID: Summer, ECID: 444, GAID: B-B-B
CRMID: Summer, ECID: 222, IDFA: A-A-A
```

>[!TAB Multi-person graph: shared device, apple, ECID resets]

The following is a multi-person graph scenario where an Apple device is shared by two people. In this scenario, the ECID resets, but the IDFA remains the same.

![A multi-person graph scenario where two users are sharing an Apple mobile device, but the ECID is reset.](../images/graph-examples/shared_device_apple_with_reset.png)

**Graph simulation events input**

```shell
CRMID: Tom, Email_LC_SHA256: aabbcc, Phone_SHA256: 123-4567
CRMID: Tom, ECID: 111
CRMID: Tom, ECID: 222, IDFA: A-A-A
CRMID: Summer, Email_LC_SHA256: ddeeff, Phone_SHA256: 765-4321
CRMID: Summer, ECID: 333
CRMID: Summer, ECID: 444, GAID: B-B-B
CRMID: Summer, ECID: 555, IDFA: A-A-A
```

>[!TAB Multi-person graph: Non-unique phone]

The following is a multi-person graph scenario where the same phone number is being shared by two people.

![A multi-person graph scenario where the phone namespace is not unique.](../images/graph-examples/non_unique_phone.png)

**Graph simulation events input**

```shell
CRMID: Tom, Email_LC_SHA256: aabbcc, Phone_SHA256: 123-4567
CRMID: Tom, ECID: 111
CRMID: Tom, ECID: 222, IDFA: A-A-A
CRMID: Summer, Email_LC_SHA256: ddeeff, Phone_SHA256: 765-4321
CRMID: Summer, ECID: 333
CRMID: Summer, ECID: 444, GAID: B-B-B
CRMID: Summer, Phone_SHA256: 123-4567
```

In this example, `{Phone_SHA256}` is also marked as a unique namespace. Therefore, a graph cannot have more than one identity with the `{Phone_SHA256}` namespace. In this scenario, `{Phone_SHA256: 765-4321}` is unlinked from `{CRMID: Summer}` and `{Email_LC_SHA256: ddeeff}` because it is the older link,

![A multi-person graph scenario where Phone_SHA256 is unique.](../images/graph-examples/unique_phone.png)

>[!TAB Multi-person graph: Non-unique email]

The following is a multi-person graph scenario where email is shared by two people.

![A multi-person graph scenario where email is not unique](../images/graph-examples/non_unique_email.png)

**Graph simulation events input**

```shell
CRMID: Tom, Email_LC_SHA256: aabbcc, Phone_SHA256: 123-4567
CRMID: Tom, ECID: 111
CRMID: Tom, ECID: 222, IDFA: A-A-A
CRMID: Summer, Email_LC_SHA256: ddeeff, Phone_SHA256: 765-4321
CRMID: Summer, ECID: 333
CRMID: Summer, ECID: 444, GAID: B-B-B
CRMID: Summer, Email_LC_SHA256: aabbcc
```

>[!ENDTABS]

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

You can create this scenario in graph simulation by copying the following events to text mode:

* CRMID: Tom, loginID: ID_A
* CRMID: Tom, loginID: ID_B
* loginID: ID_A, ECID: 111
* CRMID: Summer, loginID: ID_C
* CRMID: Summer, loginID: ID_D
* loginID: ID_C, ECID: 222

**Algorithm configuration:**

You can create this scenario in graph simulation by configuring the following setup for your algorithm configuration:

| Priority | Display name | Identity type | Unique per graph |
| ---| --- | --- | --- |
| 1 | CRMID | CROSS_DEVICE | Yes |
| 2 | loginID | CROSS_DEVICE | No |
| 3 | ECID | COOKIE | No |

**Primary identity selection for Profile:**

Within the context of this configuration, the primary identity will be defined like this:

| Authentication status | Namespace(s) in events| Primary identity |
| --- | --- | --- |
| Authenticated | loginID, ECID | loginID |
| Authenticated | loginID, ECID | loginID |
| Authenticated | CRMID, loginID, ECID | CRMID |
| Authenticated | CRMID, ECID | CRMID |
| Unauthenticated | ECID | ECID |

**Graph examples**

>[!BEGINTABS]

>[!TAB Ideal single-person scenario]

![A graph scenario that includes a single CRMID and multiple loginIDs.](../images/graph-examples/single_crmid.png)

>[!TAB Multi-person graph scenario: shared device]

![A multi-person shared device scenario.](../images/graph-examples/single_crmid_shared_device.png)

**Graph simulation events input**

```shell
CRMID: Tom, loginID:ID_A
CRMID: Tom, loginID:ID_B
loginID:ID_A, ECID:111
CRMID: Summer, loginID:ID_C
CRMID: Summer, loginID:ID_D
loginID:ID_C, ECID:222
loginID:ID_C, ECID:111
```

>[!TAB Multi-person graph scenario: bad data]

![A multi-person graph scenario with bad data.](../images/graph-examples/single_crmid_bad_data.png)

**Graph simulation events input**


```shell
CRMID: Tom, loginID:ID_A
CRMID: Tom, loginID:ID_B
loginID:ID_A, ECID:111
CRMID: Summer, loginID:ID_C
CRMID: Summer, loginID:ID_D
loginID:ID_C, ECID:222
CRMID: Tom, loginID:ID_D
```

>[!TAB 'Dangling' loginID]

![A dangling loginID scenario.](../images/graph-examples/dangling_example.png)

**Graph simulation events input**

```shell
CRMID: Tom, loginID:ID_A
CRMID: Tom, loginID:ID_B
loginID:ID_A, ECID:111
loginID:ID_C, ECID:111
```

>[!ENDTABS]

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

You can create this scenario in graph simulation by copying the following events to text mode:

CRMID: Tom, Email_LC_SHA256: aabbcc, Phone_SHA256: 123-4567
CRMID: Tom, loginID:ID_A
CRMID: Tom, loginID:ID_B
loginID:ID_A, ECID:111, AAID:AAA
CRMID: Summer, Email_LC_SHA256: ddeeff, Phone_SHA256: 765-4321
CRMID: Summer, loginID:ID_C
CRMID: Summer, loginID:ID_D
loginID:ID_C, ECID:222, AAID:BBB

**Algorithm configuration:**

You can create this scenario in graph simulation by configuring the following setup for your algorithm configuration:

| Priority | Display name | Identity type | Unique per graph |
| ---| --- | --- | --- | 
| 1 | CRMID | CROSS_DEVICE | Yes |
| 2 | Email_LC_SHA256 | Email | No |
| 3 | Phone_SHA256 | Phone | No |
| 4 | loginID | CROSS_DEVICE | No |
| 5 | ECID | COOKIE | No |
| 6 | AAID | COOKIE | No |

**Primary identity selection for Profile:**

Within the context of this configuration, the primary identity will be defined like this:

| Authentication status | Namespace(s) in events| Primary identity |
| --- | --- | --- |
| Authenticated | loginID, ECID | loginID |
| Authenticated | loginID, ECID, AAID | loginID |
| Authenticated | CRMID, loginID, ECID, AAID | CRMID |
| Authenticated | CRMID, ECID | CRMID |
| Unauthenticated | ECID | ECID |

**Graph examples**

>[!BEGINTABS]

>[!TAB Ideal single-person graph]

![A single-person graph that involves one CRMID and multiple loginIDs](../images/graph-examples/complex_single_person.png)

>[!TAB Multi-person graph: shared device 1]

![A multi-person shared device graph scenario.](../images/graph-examples/complex_shared_device_one.png)

**Graph simulation events input**

```shell
CRMID: Tom, Email_LC_SHA256: aabbcc, Phone_SHA256: 123-4567
CRMID: Tom, loginID:ID_A
CRMID: Tom, loginID:ID_B
loginID:ID_A, ECID:111, AAID:AAA
CRMID: Summer, Email_LC_SHA256: ddeeff, Phone_SHA256: 765-4321
CRMID: Summer, loginID:ID_C
CRMID: Summer, loginID:ID_D
loginID:ID_C, ECID:222, AAID:BBB
loginID:ID_C, ECID:111, AAID:AAA
```

>[!TAB Multi-person graph: shared device 2]

![A multi-person shared device graph scenario where both loginID and CRMID are sent as experience events.](../images/graph-examples/complex_shared_device_two.png)

**Graph simulation events input**

```shell
CRMID: Tom, Email_LC_SHA256: aabbcc, Phone_SHA256: 123-4567
CRMID: Tom, loginID:ID_A
CRMID: Tom, loginID:ID_B
loginID:ID_A, ECID:111, AAID:AAA
CRMID: Summer, Email_LC_SHA256: ddeeff, Phone_SHA256: 765-4321
CRMID: Summer, loginID:ID_C
CRMID: Summer, loginID:ID_D
loginID:ID_C, ECID:222, AAID:BBB
CRMID: Summer, loginID:ID_C, ECID:111, AAID:AAA
loginID:ID_A, ECID:111, AAID:AAA
```

>[!TAB Multi-person graph: bad loginID data]

![A multi-person graph scenario that involves bad login data.](../images/graph-examples/complex_bad_data.png)

**Graph simulation events input**

```shell
CRMID: Tom, Email_LC_SHA256: aabbcc, Phone_SHA256: 123-4567
CRMID: Tom, loginID:ID_A
CRMID: Tom, loginID:ID_B
loginID:ID_A, ECID:111, AAID:AAA
CRMID: Summer, Email_LC_SHA256: ddeeff, Phone_SHA256: 765-4321
CRMID: Summer, loginID:ID_C
CRMID: Summer, loginID:ID_D
loginID:ID_C, ECID:222, AAID:BBB
CRMID: Tom, loginID:ID_C
```

>[!TAB Multi-person graph: non-unique email]

![A multi-person graph scenario that involves a non-unique email.](../images/graph-examples/complex_non_unique_email.png)

**Graph simulation events input**

```shell
CRMID: Tom, Email_LC_SHA256: aabbcc, Phone_SHA256: 123-4567
CRMID: Tom, loginID:ID_A
CRMID: Tom, loginID:ID_B
loginID:ID_A, ECID:111, AAID:AAA
CRMID: Summer, Email_LC_SHA256: ddeeff, Phone_SHA256: 765-4321
CRMID: Summer, loginID:ID_C
CRMID: Summer, loginID:ID_D
loginID:ID_C, ECID:222, AAID:BBB
CRMID: Summer, Email_LC_SHA256: aabbcc
```

>[!TAB Multi-person graph: non-unique phone]

![A multi-person graph scenario that involves a non-unique phone number.](../images/graph-examples/complex_non_unique_phone.png)

**Graph simulation events input**

```shell
CRMID: Tom, Email_LC_SHA256: aabbcc, Phone_SHA256: 123-4567
CRMID: Tom, loginID:ID_A
CRMID: Tom, loginID:ID_B
loginID:ID_A, ECID:111, AAID:AAA
CRMID: Summer, Email_LC_SHA256: ddeeff, Phone_SHA256: 765-4321
CRMID: Summer, loginID:ID_C
CRMID: Summer, loginID:ID_D
loginID:ID_C, ECID:222, AAID:BBB
CRMID: Tom, Phone_SHA256: 111-1111
CRMID: Summer, Phone_SHA256: 111-1111
```

>[!ENDTABS]