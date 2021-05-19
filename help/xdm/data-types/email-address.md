---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;fields;schemas;Schemas;emailAddress;xdm:emailAddress;email;email address;datatype;data-type;data type;
solution: Experience Platform
title: Email Address Data Type
topic-legacy: overview
description: This document provides an overview of the Email Address XDM data type.
exl-id: 1364df42-f89f-4f48-bcda-5332f3828326
---
# [!UICONTROL Email address] data type

[!UICONTROL Email address] is a standard XDM data type that describes the details of an email address.

<img src='../images/data-types/email-address.png' width=450 /><br />

| Property | Description |
| --- | --- |
| `address` | The technical address of the email as commonly defined in RFC2822 and subsequent standards (for example, `name@domain.com`). |
| `label` | Additional display information that may be available. For example, if an email has a Microsoft Outlook rich address display of `John Smith smithjr@company.uk`, `John Smith` would be placed in this field. |
| `primary` | Indicates whether this is the individual's primary email address. A profile can have only one `primary` email address at a given point of time. |
| `status` | Indicates whether the email address can be currently used |
| `statusReason` | A description of the current `status`. |
| `type` | The way the account relates to the person (such as `work` or `personal`). |


For more details on the email address data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/emailaddress.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/emailaddress.schema.json)
