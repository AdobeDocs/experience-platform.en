---
description: Learn how to configure the identities and attributes settings for destinations built with Destination SDK.
title: Identities and attributes
---

# Identities

When users export data to a destination that you built through Destination SDK, they can choose to export [!DNL XDM] [identities](../../../../identity-service/namespaces.md) or attributes.





The parameters in this section determine which identities and/or attributes your destination accepts. This configuration also populates the target identities and attributes in the [mapping step](../../../ui/activate-segment-streaming-destinations.md#mapping) of the Experience Platform user interface, where users map identities and attributes from their XDM schemas to the schema in your destination.

## Supported integration types {#supported-integration-types}

Refer to the table below for details on what type of destinations support the functionality described in this page.

|Integration type| Supports functionality |
|---|---|
| Real-time (streaming) integrations | Yes |
| File-based (batch) integrations | Yes |

## Supported parameters {#supported-parameters}

You must indicate which [!DNL Platform] identities customers are able to export to your destination. Some examples are [!DNL Experience Cloud ID], hashed email, device ID ([!DNL IDFA], [!DNL GAID]). These values are [!DNL Platform] identity namespaces that customers can map to identity namespaces from your destination. You can also indicate if customers can map custom namespaces to identities supported by your destination (`acceptsCustomNamespaces: true`) and if customers can map standard XDM attributes to identities supported by your destination (`acceptsAttributes: true`). 

Identity namespaces do not require a 1-to-1 correspondence between [!DNL Platform] and your destination.
For instance, customers could map a [!DNL Platform] [!DNL IDFA] namespace to an [!DNL IDFA] namespace from your destination, or they can map the same [!DNL Platform] [!DNL IDFA] namespace to a [!DNL Customer ID] namespace in your destination.

Read more about identities in the [Identity Namespace overview](../../../../identity-service/namespaces.md).

![Render target identities in the UI](../../assets/functionality/destination-configuration/target-identities-ui.png) 

```json
"identityNamespaces":{
      "external_id":{
         "acceptsAttributes":true,
         "acceptsCustomNamespaces":true,
         "acceptedGlobalNamespaces":{
            "Email":{
            }
         }
      },
      "another_id":{
         "acceptsAttributes":true,
         "acceptsCustomNamespaces":true
      }
   }
```

|Parameter | Type | Description|
|---------|----------|------|
|`acceptsAttributes` | Boolean | Indicates if customers can map standard profile attributes to the identity that you are configuring. |
|`acceptsCustomNamespaces` | Boolean | Indicates if customers can map namespaces to other partner-defined namespaces. |
|`transformation` | String | *Not shown in example configuration*. Used, for example, when the [!DNL Platform] customer has plain email addresses as an attribute and your platform only accepts hashed emails. In this object, you can the transformation that needs to be applied (for example, transform the email to lowercase, then hash).|
|`acceptedGlobalNamespaces` | - | Indicates which [standard identity namespaces](../../../../identity-service/namespaces.md#standard) (for example, IDFA) customers can map to the identity that you are configuring. <br> When you use `acceptedGlobalNamespaces`, you can use `"requiredTransformation":"sha256(lower($))"` to lowercase and hash email addresses or phone numbers. |

{style="table-layout:auto"}

## How to configure destinations to hash identities and attribs on export



