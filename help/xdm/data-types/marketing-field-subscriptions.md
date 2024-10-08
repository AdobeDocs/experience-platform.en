---
solution: Experience Platform
title: Generic Marketing Preference Field With Subscriptions Data Type
description: Learn about the Generic Marketing Preference Field with Subscriptions XDM data type.
exl-id: 170ea6ca-77fc-4b0a-87f9-6d4b6f32d953
---
# [!UICONTROL Generic Marketing Preference Field with Subscriptions] data type

[!UICONTROL Generic Marketing Preference Field with Subscriptions] is a standard XDM data type that describes a customer's selection for a particular marketing preference.

>[!NOTE]
>
>This data type is intended to be used to customize the structure of your organization's consent schemas using the [[!UICONTROL Consents and Preferences] field group](../field-groups/profile/consents.md) as a baseline.
>
>If you do not require a `subscriptions` map for a particular marketing preference field, you can use the [basic marketing field data type](./marketing-field.md) instead.

![](../images/data-types/marketing-field-subscriptions.png)

| Property | Data type | Description |
| --- | --- | --- |
| `reason` | String | When a customer opts out of a marketing use case, this string field represents the reason why the customer opted out. |
| `subscriptions` | Map | A map of customer marketing preferences for specific subscriptions. See the section on [subscriptions](#subscriptions) for more information. |
| `time` | DateTime | An ISO 8601 timestamp of when the marketing preference changed, if applicable. |
| `val` | String | The customer-provided preference choice for this marketing use case. See the [next section](#val) for accepted values and definitions. |

{style="table-layout:auto"}

## `val` {#val}

The following table outlines the accepted values for `val`:

| Value | Title|  Description |
| --- | --- | --- |
| `y` | Yes (opt-in) | The customer has opted in for the preference. In other words, they **do** consent to the use of their data as indicated by the preference in question. |
| `n` | No (opt-out) | The customer has opted out of the preference. In other words, they **do not** consent to the use of their data as indicated by the preference in question. |
| `p` | Pending verification  | The system has not yet received a final preference value. This is most often used as part of a consent that requires two-step verification. For example, if a customer opts into receiving emails, that consent is set to `p` until they select a link in an email to verify that they have provided the correct email address, at which point the consent would be updated to `y`.<br><br>If this preference does not use a two-set verification process, then the `p` choice may instead be used to indicate that the customer has not yet responded to the consent prompt. For example, you can automatically set the value to `p` on the first page of a website, before the customer has responded to the consent prompt. In jurisdictions that do not require explicit consent, you may also use it to indicate that the customer has not explicitly opted out (in other words, consent is assumed). |
| `u` | Unknown | The customer's preference information is unknown. |
| `dy` | Default of Yes (opt-in) | The customer has not provided a consent value themselves, and is treated as an opt-in ("Yes") by default. In other words, consent is assumed until the customer indicates otherwise.<br><br>Note that if laws or changes to your company's privacy policy result in changes to the defaults of some or all users, you must manually update all profiles containing default values. |
| `dn` | Default of No (opt-out) | The customer has not provided a consent value themselves, and is treated as an opt-out ("No") by default. In other words, the customer is assumed to have denied consent until they indicate otherwise.<br><br>Note that if laws or changes to your company's privacy policy result in changes to the defaults of some or all users, you must manually update all profiles containing default values. |
| `LI` | Legitimate Interest | The legitimate business interest to collect and process this data for the specified purpose outweighs the potential harm it poses to the individual. |
| `CT` | Contract | The collection of data for the specified purpose is required to meet contractual obligations with the individual. |
| `CP` | Compliance with a Legal Obligation | The collection of data for the specified purpose is required to meet the legal obligations of the business. |
| `VI` | Vital Interest of the Individual | The collection of data for the specified purpose is required to protect the vital interests of the individual. |
| `PI` | Public Interest | The collection of data for the specified purpose is required to carry out a task in the public interest or in the exercise of official authority. |

{style="table-layout:auto"}

## `subscriptions` {#subscriptions}

Some businesses allow customers to opt in for different subscriptions that are associated with a particular marketing channel. For example, a banking company may allow customers to subscribe to phone alerts for overdrawn accounts, or receive sales calls for loyalty program offers.

The following JSON represents an example marketing field for a phone call marketing channel that contains a `subscriptions` map. Each key in the `subscriptions` object represents an individual subscription for the marketing channel. In turn, each subscription contains an opt-in value (`val`).

```json
"email-marketing-field": {
  "val": "y",
  "time": "2019-01-01T15:52:25+00:00",
  "subscriptions": {
    "loyalty-offers": {
      "val": "y",
      "type": "sales",
      "topics": ["discounts", "early-access"],
      "subscribers": {
        "jdoe@example.com": {
          "time": "2019-01-01T15:52:25+00:00",
          "source": "website"
        }
      }
    },
    "newsletters": {
      "val": "y",
      "type": "advertising",
      "topics": ["hardware"],
      "subscribers": {
        "jdoe@example.com": {
          "time": "2021-01-01T08:32:53+07:00",
          "source": "website"
        },
        "tparan@example.com": {
          "time": "2020-02-03T07:54:21+07:00",
          "source": "call center"
        }
      }
    }
  }
}
```

| Property | Description |
| --- | --- |
| `val` | The [consent value](#val) for the subscription. |
| `type` | The subscription type. This can be any descriptive string, provided it is 15 characters or less. |
| `topics` | An array of strings that represent the areas of interest a customer as subscribed to, which can be used to send them relevant content. |
| `subscribers` | An optional map-type field that represents a set of identifiers (such as email addresses or phone numbers) that have subscribed to a particular subscription. Each key in this object represents the identifier in question, and contains two sub-properties: <ul><li>`time`: An ISO 8601 timestamp of when the identity subscribed, if applicable.</li><li>`source`: The source that the subscriber originated from. This can be any descriptive string, provided it is 15 characters or less.</li></ul> |

{style="table-layout:auto"}

## Additional resources

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/consent/marketing-field-basic.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/consent/marketing-field-basic.schema.json)
