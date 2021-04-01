---
solution: Experience Platform
title: Generic Personalization Preference Field Data Type
topic: overview
description: This document provides an overview of the Generic Personalization Preference Field XDM data type.
---

# [!UICONTROL Generic Personalization Preference Field] data type

[!UICONTROL Generic Personalization Preference Field] is a standard XDM data type that describes a customer's selection for a particular personalization preference.

>[!NOTE]
>
>This data type is intended to be used to customize the structure of your organization's consent schemas using the [[!UICONTROL Privacy/Personalization/Marketing Preferences (Consents)] mixin](../mixins/profile/consents.md) as a baseline.

![](../images/data-types/personalization-field.png)

| Property | Data type | Description |
| --- | --- | --- |
| `val` | String | The customer-provided preference choice for this personalization use case. See the table below for accepted values and definitions. |

The following table outlines the accepted values for `val`:

| Value | Title|  Description |
| --- | --- | --- |
| `y` | Yes | The customer has opted in for the preference. In other words, they **do** consent to the use of their data as indicated by the preference in question. |
| `n` | No | The customer has opted out of the preference. In other words, they **do not** consent to the use of their data as indicated by the preference in question. |
| `p` | Pending verification  | The system has not yet received a final preference value. This is most often used as part of a consent that requires two-step verification. For example, if a customer opts into receiving emails, that consent is set to `p` until they select a link in an email to verify that they have provided the correct email address, at which point the consent would be updated to `y`.<br><br>If this preference does not use a two-set verification process, then the `p` choice may instead be used to indicate that the customer has not yet responded to the consent prompt. For example, you can automatically set the value to `p` on the first page of a website, before the customer has responded to the consent prompt. In jurisdictions that do not require explicit consent, you may also use it to indicate that the customer has not explicitly opted out (in other words, consent is assumed). |
| `u` | Unknown | The customer's preference information is unknown. |
| `LI` | Legitimate Interest | The legitimate business interest to collect and process this data for the specified purpose outweighs the potential harm it poses to the individual. |
| `CT` | Contract | The collection of data for the specified purpose is required to meet contractual obligations with the individual. |
| `CP` | Compliance with a Legal Obligation | The collection of data for the specified purpose is required to meet the legal obligations of the business. |
| `VI` | Vital Interest of the Individual | The collection of data for the specified purpose is required to protect the vital interests of the individual. |
| `PI` | Public Interest | The collection of data for the specified purpose is required to carry out a task in the public interest or in the exercise of official authority. |

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/consent/personalization-field.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/consent/personalization-field.schema.json)