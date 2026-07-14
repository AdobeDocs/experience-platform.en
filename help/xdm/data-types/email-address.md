---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;fields;schemas;Schemas;emailAddress;xdm:emailAddress;email;email address;datatype;data-type;data type;
solution: Experience Platform
title: Email Address Data Type
description: Learn about the Email Address XDM data type.
exl-id: 1364df42-f89f-4f48-bcda-5332f3828326
TQID: https://experienceleague.adobe.com/sIHiLJzOEHq29jjgfKU0C3V5ciWBEQ8ahiOKC-cd8a8
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# [!UICONTROL Email address] data type

[!UICONTROL Email address] is a standard Experience Data Model (XDM) data type that describes the details of an email address.

![](../images/data-types/email-address.png){width=450}

| Property | Description |
| --- | --- |
| `address` | The technical address of the email as commonly defined in RFC2822 and subsequent standards (for example, `name@domain.com`).<br><br>In XDM, email addresses must contain a valid top-level domain in order to pass validation. Refer to the following [document](https://data.iana.org/TLD/tlds-alpha-by-domain.txt) for a full list of valid top-level domains as defined by the Internet Assigned Numbers Authority (IANA). |
| `label` | Additional display information that may be available. For example, if an email has a Microsoft Outlook rich address display of `John Smith smithjr@company.uk`, `John Smith` would be placed in this field. |
| `primary` | Indicates whether this is the individual's primary email address. A profile can have only one `primary` email address at a given point of time. |
| `status` | Indicates whether the email address can be currently used |
| `statusReason` | A description of the current `status`. |
| `type` | The way the account relates to the person (such as `work` or `personal`). |

{style="table-layout:auto"}


For more details on the email address data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/demographic/emailaddress.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/demographic/emailaddress.schema.json)
