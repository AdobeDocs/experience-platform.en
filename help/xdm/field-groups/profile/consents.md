---
solution: Experience Platform
title: Consents and Preferences Schema Field Group
topic-legacy: overview
description: This document provides an overview of the Consents and Preferences schema field group.
exl-id: ec592102-a9d3-4cac-8b94-58296a138573
---
# [!UICONTROL Consents and Preferences] field group

[!UICONTROL Consents and Preferences]is a standard field group for the [[!DNL XDM Individual Profile] class](../../classes/individual-profile.md), which is used to capture customer consent and preference information.

>[!NOTE]
>
>Since this field group is only compatible with [!DNL XDM Individual Profile], it cannot be used for [!DNL XDM ExperienceEvent] schemas. If you want to include consent and preference data in your Experience Event schema, add the [[!UICONTROL Consent for Privacy, Personalization and Marketing Preferences] data type](../../data-types/consents.md) to the schema through the use of a [custom field group](../../ui/resources/field-groups.md#create) instead.

## Field group structure {#structure} 

>[!IMPORTANT]
>
>The [!UICONTROL Consents and Preferences] field group is designed to cover a range of consent and preference management use cases. As a result, this document describes the use of the field group's fields in general terms, and only makes suggestions as to how you should interpret the use of these fields. Please consult with your privacy legal team to align the field group's structure with how your organization interprets and presents these consent and preference choices to your customers.

The [!UICONTROL Consents and Preferences] field group provides several fields used to capture **consent** and **preference** information.

A consent is an option that allows a customer to specify how their data may be used. Most consents have a legal aspect, in that some jurisdictions require obtaining permission before data can be used in a particular way, or require that the customer has an option to stop that use (opt out) if affirmative consent is not required.

A preference is an option that allows the customer to specify how different aspects of their experience with a brand should be handled. These fall within two categories:

* **Personalization preferences**: Preferences regarding how the brand should personalize experiences delivered to a customer.
* **Marketing preferences**: Preferences regarding whether a brand is allowed to contact a customer through various channels.

The following screenshot shows how the structure of the field group is represented in the Platform UI:

![](../../images/field-groups/consent.png)

>[!TIP]
>
>See the guide on [exploring XDM resources](../../ui/explore.md) to for steps on how to look up any XDM resource and inspect its structure in the Platform UI.

The following JSON shows an example of the type of data that the [!UICONTROL Consents and Preferences] field group can process. Information on the specific use of each of these fields is provided in the sections that follow.

```json
{
  "consents": {
    "collect": {
      "val": "VI"
    },
    "share": {
      "val": "y"
    },
    "personalize": {
      "content": {
        "val": "y"
      }
    },
    "marketing": {
      "preferred": "email",
      "any": {
        "val": "y"
      },
      "email": {
        "val": "y"
      }
    },
    "idSpecific": {
      "ECID": {
        "37784337855396895622558625508046772577": {
          "adID": {
            "val": "n",
          },
          "share": {
            "val": "n"
          },
          "marketing": {
            "push": {
              "val": "n",
              "time": "2020-09-30T01:02:33+00:00",
              "reason": "not relevant"
            }
          }
        }
      },
      "email": {
        "john@xyz.com": {
          "marketing": {
            "email": {
              "val": "y"
            }
          }
        }
      }
    },
    "metadata": {
      "time": "2019-01-01T15:52:25+00:00"
    }
  }
}
```

>[!TIP]
>
>You can generate sample JSON data for any XDM schema that you define in Experience Platform in order to help visualize how your customer consent and preference data should be mapped. See the following documentation for more information:
>
>* [Generate sample data in the UI](../../ui/sample.md)
>* [Generate sample data in the API](../../api/sample-data.md)

## Field use cases

The intended use cases for each of these fields are provided in the sections below.

### `collect`

`collect` represents the customer's consent for having their data collected.

```json
"collect" : {
  "val": "y"
}
```

| Property | Description |
| --- | --- |
| `val` | The customer-provided consent choice for this use case. See the [appendix](#choice-values) for accepted values and definitions. |

{style="table-layout:auto"}

### `share`

`share` represents the customer's consent for whether their data can be shared with (or sold to) second or third parties.

```json
"share" : {
  "val": "y"
}
```

| Property | Description |
| --- | --- |
| `val` | The customer-provided consent choice for this use case. See the [appendix](#choice-values) for accepted values and definitions. |

{style="table-layout:auto"}

### `personalize` {#personalize}

`personalize` captures customer preferences regarding which ways their data can be used for personalization. Customers can opt out of specific personalization use cases, or opt out of personalization entirely.

>[!IMPORTANT]
>
>`personalize` does not cover marketing use cases. For example, if a customer opts out of personalization for all channels, they should not stop receiving communications through those channels. Rather, the messages they receive should be generic and not based on their profile.
>
>By the same example, if a customer opts out of direct marketing for all channels (through `marketing`, explained in the [next section](#marketing)), then that customer should not receive any messages, even if personalization is permitted.

```json
"personalize": {
  "content": {
    "val": "y",
  }
}
```

| Property | Description |
| --- | --- |
| `content` | Represents the customer's preferences for personalized content on your website or application. |
| `val` | The customer-provided personalization preference for the specified use case. In cases where the customer does not have to be prompted to provide consent, the value of this field should indicate the basis on which personalization should take place. See the [appendix](#choice-values) for accepted values and definitions. |

{style="table-layout:auto"}

### `marketing` {#marketing}

`marketing` captures customer preferences regarding what marketing purposes their data can be used for. Customers can opt out of specific marketing use cases, or opt out of direct marketing entirely.

```json
"marketing": {
  "preferred": "email",
  "any": {
    "val": "u"
  },
  "email": {
    "val": "n",
    "reason": "Too Frequent"
  },
  "push": {
    "val": "y"
  },
  "sms": {
    "val": "y"
  }
}
```

| Property | Description |
| --- | --- |
| `preferred` | Indicates the customer's preferred channel for receiving communications. See the [appendix](#preferred-values) for accepted values. |
| `any` |  Represents the customer's preferences for direct marketing as a whole. The consent preference provided in this field is considered the "default" preference for any marketing channel, unless overridden by additional sub-fields provided under `marketing`. If you plan on using more granular consent options, it is recommended that you exclude this field.<br><br>If the value is set to `n`, then all more specific personalization settings should be ignored. If the value is set to `y`, then all finer-grained personalization options should also be treated as `y`, unless explicitly set to `n`. If the value is unset, then the values for each personalization option should be honored as specified. |
| `email` | Indicates whether the customer agrees to receive email messages. The customer can also provide preferences for individual subscriptions within this channel. See the section on [subscriptions](#subscriptions) below for more information. | 
| `push` | Indicates whether the customer permits receiving push notifications. The customer can also provide preferences for individual subscriptions within this channel. See the section on [subscriptions](#subscriptions) below for more information. | 
| `sms` | Indicates whether the customer agrees to receive text messages. The customer can also provide preferences for individual subscriptions within this channel. See the section on [subscriptions](#subscriptions) below for more information. | 
| `val` | The customer-provided preference for the specified use case. In cases where the customer does not have to be prompted to provide consent, the value of this field should indicate the basis on which the marketing use case should take place. See the [appendix](#choice-values) for accepted values and definitions. |
| `time` | An ISO 8601 timestamp of when the marketing preference changed, if applicable. Note that if the timestamp for any individual preference is the same as the one provided under `metadata`, then this field does not to be set for that preference. |
| `reason` | When a customer opts out of a marketing use case, this string field represents the reason why the customer opted out. |

{style="table-layout:auto"}

#### `subscriptions` {#subscriptions}

The `email`, `push`, and `sms` properties of the `marketing` object are capable of representing customer subscriptions for those individual channels. This is accomplished by adding a `subscriptions` property to the marketing channel in question.

```json
"marketing": {
  "email": {
    "val": "y",
    "subscriptions": {
      "daily-mail": {
        "val": "y",
        "type": "paid",
        "subscribers": {
          "john@xyz.com": {
            "time": "2019-01-01T15:52:25+00:00",
            "source": "website"
          }
        }
      },
      "shipped": {
        "val": "y",

        "subscribers": {
          "john@xyz.com": {
            "time": "2021-01-01T08:32:53+07:00",
            "source": "website"
          },
          "jane@xyz.com": {
            "time": "2020-02-03T07:54:21+07:00",
            "source": "call center",
          }
        }
      }
    }
  }
}
```

| Property | Description |
| --- | --- |
| `type` | The subscription type. This can be any descriptive string, provided it is 15 characters or less. |
| `subscribers` | An optional map-type field that represents a set of identifiers (such as email addresses or phone numbers) that have subscribed to a particular subscription. Each key in this object represents the identifier in question, and contains two sub-properties: <ul><li>`time`: An ISO 8601 timestamp of when the identity subscribed, if applicable.</li><li>`source`: The source that the subscriber originated from. This can be any descriptive string, provided it is 15 characters or less.</li></ul> |

{style="table-layout:auto"}


### `metadata`

`metadata` captures general metadata about the customer's consents and preferences whenever they were last updated.

```json
"metadata": {
  "time": "2019-01-01T15:52:25+00:00",
}
```

| Property | Description |
| --- | --- |
| `time` | An ISO 8601 timestamp for the last time any of the customer's consents and preferences were updated. This field can be used instead of applying timestamps to individual preferences in order to reduce load and complexity. Providing an `time` value under an individual preference overrides the `metadata` timestamp for that particular preference. |

{style="table-layout:auto"}

### `idSpecific`

`idSpecific` can be used when a particular consent or preference does not universally apply to a customer, but is restricted to a single device or ID. For example, a customer can opt out of receiving emails to one address, while potentially allowing emails on another.

>[!IMPORTANT]
>
>Channel-level consents and preferences (i.e. those provided under `consents` outside of `idSpecific`) apply to IDs within that channel. Therefore, all channel-level consents and preferences directly effect whether equivalent ID- or device-specific settings are honored:
>
>* If the customer has opted out at the channel level, then any equivalent consents or preferences in `idSpecific` are ignored.
>* If the channel-level consent or preference is not set, or the customer has opted in, then the equivalent consents or preferences in `idSpecific` are honored.

Each key in the `idSpecific` object represents a specific identity namespace recognized by Adobe Experience Platform Identity Service. While you can define your own custom namespaces to categorize different identifiers, it is recommended that you use one of the standard namespaces provided by Identity Service to reduce storage sizes for Real-time Customer Profile. For more information on identity namespaces, see the [identity namespace overview](../../../identity-service/namespaces.md) in the Identity Service documentation.

The keys for each namespace object represent the unique identity values that the customer has set preferences for. Each identity value can contain a complete set of consents and preferences, formatted in the same way as `consents`.

```json
"idSpecific": {
  "email": {
    "jdoe@example.com": {
      "marketing": {
        "email": {
          "val": "n"
        }
      }
    }
  },
  "ECID" : {
    "37784337855396895622558625508046772577": {
      "collect": {
        "val": "y"
      },
      "adID": {
        "val": "n"
      },
      "marketing": {
        "push": {
          "val": "n"
        }
      }
    }
  }
}
```

Within `marketing` objects provided in the `idSpecific` section, the `any` and `preferred` fields are not supported. These fields can only be configured at the user level. In addition, the `idSpecific` marketing preferences for `email`, `sms`, and `push` do not support `subscriptions` fields.

There is also a consent that can only be provided in the `idSpecific` section: `adID`. This field is covered in the subsection below.

#### `adID`

The `adID` consent represents the customer's consent for whether an advertiser ID (IDFA or GAID) can be used to link the customer across apps on this device. This value can only be configured under the `ECID` identity namespace in the `idSpecific` section, and cannot be set for other namespaces or at the user level for this field group.

```json
"idSpecific": {
  "ECID" : {
    "37784337855396895622558625508046772577": {
      "collect": {
        "val": "y"
      },
      "adID": {
        "val": "n"
      },
      "marketing": {
        "push": {
          "val": "n"
        }
      }
    }
  }
}
```

>[!NOTE]
>
>You are not expected to set this value directly, since the Adobe Experience Platform Mobile SDK automatically sets it when appropriate.

## Ingesting data using the field group {#ingest}

In order to use the [!UICONTROL Consents and Preferences] field group to ingest consent data from your customers, you must create a dataset based on a schema that contains that field group.

See the tutorial on [creating a schema in the UI](http://www.adobe.com/go/xdm-schema-editor-tutorial-en) for steps on how to assign field groups to fields. Once you have created a schema containing a field with the [!UICONTROL Consents and Preferences] field group, refer to the the section on [creating a dataset](../../../catalog/datasets/user-guide.md#create) in the dataset user guide, following the steps to create a dataset with an existing schema.

>[!IMPORTANT]
>
>If you want to send consent data to [!DNL Real-time Customer Profile], it is required that you create a [!DNL Profile]-enabled schema based on the [!DNL XDM Individual Profile] class that contains the [!UICONTROL Consents and Preferences] field group. The dataset that you create based on that schema must also be enabled for [!DNL Profile]. Refer to the tutorials linked above for specific steps related to [!DNL Real-time Customer Profile] requirements for schemas and datasets.
>
>In addition, you must also ensure that your merge policies are configured to prioritize the dataset(s) that contain the latest consent and preference data, in order for customer profiles to be updated correctly. See the overview on [merge policies](../../../rtcdp/profile/merge-policies.md) for more information.

## Handling consent and preference changes

When a customer changes their consents or preferences on your website, these changes should be collected and immediately enforced using the [Adobe Experience Platform Web SDK](../../../edge/consent/supporting-consent.md). If a customer opts out of data collection, all data collection must immediately cease. If a customer opts out of personalization, then there should be no personalization present on the next page they visit. 

## Appendix {#appendix}

The sections below provide additional reference information regarding the [!UICONTROL Consents and Preferences] field group.

### Accepted values for `val` {#choice-values}

The following table outlines the accepted values for `val`:

| Value | Title|  Description |
| --- | --- | --- |
| `y` | Yes | The customer has opted in for the consent or preference. In other words, they **do** consent to the use of their data as indicated by the consent or preference in question. |
| `n` | No | The customer has opted out of the consent or preference. In other words, they **do not** consent to the use of their data as indicated by the consent or preference in question. |
| `p` | Pending verification  | The system has not yet received a final consent or preference value. This is most often used as part of a consent that requires two-step verification. For example, if a customer opts into receiving emails, that consent is set to `p` until they select a link in an email to verify that they have provided the correct email address, at which point the consent would be updated to `y`.<br><br>If this consent or preference does not use a two-set verification process, then the `p` choice may instead be used to indicate that the customer has not yet responded to the consent prompt. For example, you can automatically set the value to `p` on the first page of a website, before the customer has responded to the consent prompt. In jurisdictions that do not require explicit consent, you may also use it to indicate that the customer has not explicitly opted out (in other words, consent is assumed). |
| `u` | Unknown | The customer's consent or preference information is unknown. |
| `LI` | Legitimate Interest | The legitimate business interest to collect and process this data for the specified purpose outweighs the potential harm it poses to the individual. |
| `CT` | Contract | The collection of data for the specified purpose is required to meet contractual obligations with the individual. |
| `CP` | Compliance with a Legal Obligation | The collection of data for the specified purpose is required to meet the legal obligations of the business. |
| `VI` | Vital Interest of the Individual | The collection of data for the specified purpose is required to protect the vital interests of the individual. |
| `PI` | Public Interest | The collection of data for the specified purpose is required to carry out a task in the public interest or in the exercise of official authority. |

{style="table-layout:auto"}

### Accepted values for `preferred` {#preferred-values}

The following table outlines the accepted values for `preferred`:

| Value | Description |
| --- | --- |
| `email` | Email messages. |
| `push` | Push notifications. |
| `inApp` | In-app messages. |
| `sms` | SMS messages. |
| `phone` | Phone call interactions. |
| `phyMail` | Physical mail. |
| `inVehicle` | In-vehicle messages. |
| `inHome` | In-home messages. |
| `iot` | Internet of things (IoT) messages. |
| `social` | Social media content. |
| `other` | A channel that does not fit into a standard category. |
| `none` | No preferred channel. |
| `unknown` | The preferred channel is unknown. |

{style="table-layout:auto"}

### Full [!UICONTROL Consents and Preferences] schema {#full-schema}

To view the full schema for the [!UICONTROL Consents and Preferences] field group, refer to the [official XDM repository](https://github.com/adobe/xdm/blob/master/components/datatypes/consent-preferences.schema.json).
