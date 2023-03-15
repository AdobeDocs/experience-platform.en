---
description: Learn how to configure the supported target identities for destinations built with Destination SDK.
title: Identity mapping configuration
---

# Identity mapping configuration

Experience Platform uses identity namespaces to describe the type of specific identities. For example, an identity namespace called `Email` identifies a value like name@email.com as an email address.

When creating a destination through Destination SDK, in addition to [configuring a partner schema](schema-configuration.md) that users can map profile attributes and identities to, you can also define identity namespaces supported by your destination platform. When you do this, users have the added choice of selecting target identities, in addition to target profile attributes.

To learn more about identity namespaces in Experience Platform, see the [identity namespaces documentation](../../../../identity-service/namespaces.md).







When configuring identity namespaces for your destination, you can fine tune the target identity mapping supported by your destination, such as:

* Allowing users to map XDM attributes to identity namespaces.
* Allowing users to map [standard identity namespaces](../../../../identity-service/namespaces.md#standard) to your own identity namespaces.
* Allowing users to map [custom identity namespaces](../../../../identity-service/namespaces.md#manage-namespaces) to your own identity namespaces.


To understand where this component fits into an integration created with Destination SDK, see the diagram in the [configuration options](../configuration-options.md) documentation or see the the guide on how to [use Destination SDK to configure a file-based destination](../../guides/configure-file-based-destination-instructions.md#create-server-file-configuration).

You can configure your supported identity namespaces via the `/authoring/destinations` endpoint. See the following API reference pages for detailed API call examples where you can configure the components shown in this page.

* [Create a destination configuration](../../authoring-api/destination-configuration/create-destination-configuration.md)
* [Update a destination configuration](../../authoring-api/destination-configuration/update-destination-configuration.md)

This article describes all the supported identity namespaces configuration options that you can use for your destination, and shows what customers will see in the Platform UI.

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



