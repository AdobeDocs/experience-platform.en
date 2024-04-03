---
description: Learn how to configure the supported target identities for destinations built with Destination SDK.
title: Identity namespace configuration
exl-id: 30c0939f-b968-43db-b09b-ce5b34349c6e
---
# Identity namespace configuration

Experience Platform uses identity namespaces to describe the type of specific identities. For example, an identity namespace called `Email` identifies a value like `name@email.com` as an email address.

When creating real-time (streaming) destinations through Destination SDK, in addition to [configuring a partner schema](schema-configuration.md) that users can map profile attributes and identities to, you must also define identity namespaces supported by your destination platform. For example, if your destination platform accepts hashed emails and [!DNL IDFA], you must define these two identities as [described further down in this docment](#supported-parameters).

When activating audiences to streaming destinations, users must also map target identities, in addition to target profile attributes. Otherwise, the audiences will not be activated to the destination platform.

When creating file-based destination through Destination SDK, the configuration of identity namespaces is optional.

To learn more about identity namespaces in Experience Platform, see the [identity namespaces documentation](../../../../identity-service/features/namespaces.md).

When configuring identity namespaces for your destination, you can fine tune the target identity mapping supported by your destination, such as:

* Allowing users to map XDM attributes to identity namespaces.
* Allowing users to map [standard identity namespaces](../../../../identity-service/features/namespaces.md#standard) to your own identity namespaces.
* Allowing users to map [custom identity namespaces](../../../../identity-service/features/namespaces.md#manage-namespaces) to your own identity namespaces.

To understand where this component fits into an integration created with Destination SDK, see the diagram in the [configuration options](../configuration-options.md) documentation or see the guide on how to [use Destination SDK to configure a file-based destination](../../guides/configure-file-based-destination-instructions.md#create-server-file-configuration).

You can configure your supported identity namespaces via the `/authoring/destinations` endpoint. See the following API reference pages for detailed API call examples where you can configure the components shown in this page.

* [Create a destination configuration](../../authoring-api/destination-configuration/create-destination-configuration.md)
* [Update a destination configuration](../../authoring-api/destination-configuration/update-destination-configuration.md)

This article describes all the supported identity namespaces configuration options that you can use for your destination, and shows what customers will see in the Platform UI.

>[!IMPORTANT]
>
>All parameter names and values supported by Destination SDK are **case sensitive**. To avoid case sensitivity errors, please use the parameters names and values exactly as shown in the documentation.

## Supported integration types {#supported-integration-types}

Refer to the table below for details on which types of integrations support the functionality described on this page.

|Integration type| Supports functionality |
|---|---|
| Real-time (streaming) integrations | Yes (Required) |
| File-based (batch) integrations | Yes (Optional) |

## Supported parameters {#supported-parameters}

When defining the target identities that your destination supports, you can use the parameters described in the table below to configure their behavior.

|Parameter | Type | Required / Optional |Description|
|---------|----------|---|------|
|`acceptsAttributes` | Boolean | Optional | Indicates if customers can map standard profile attributes to the identity that you are configuring. |
|`acceptsCustomNamespaces` | Boolean | Optional | Indicates if customers can map custom identity namespaces to the identity namespace that you are configuring. |
|`acceptedGlobalNamespaces` | - | Optional | Indicates which [standard identity namespaces](../../../../identity-service/features/namespaces.md#standard) (for example, [!UICONTROL IDFA]) customers can map to the identity that you are configuring. |
|`transformation` | String | Optional | Displays the [[!UICONTROL Apply transformation]](../../../ui/activate-segment-streaming-destinations.md#apply-transformation) check box in the Platform UI, when the source field is either an XDM attribute or a custom identity namespace. Use this option to give users the ability to hash source attributes on export. To enable this option, set the value to `sha256(lower($))`. |
|`requiredTransformation` | String | Optional | When customers select this source identity namespace, the [[!UICONTROL Apply transformation]](../../../ui/activate-segment-streaming-destinations.md#apply-transformation) check box is automatically applied to the mapping, and customers cannot disable it. To enable this option, set the value to `sha256(lower($))`.|

{style="table-layout:auto"}


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

You must indicate which [!DNL Platform] identities customers are able to export to your destination. Some examples are [!DNL Experience Cloud ID], hashed email, device ID ([!DNL IDFA], [!DNL GAID]). These values are [!DNL Platform] identity namespaces that customers can map to identity namespaces from your destination.

Identity namespaces do not require a 1-to-1 correspondence between [!DNL Platform] and your destination.
For instance, customers could map a [!DNL Platform] [!DNL IDFA] namespace to an [!DNL IDFA] namespace from your destination, or they can map the same [!DNL Platform] [!DNL IDFA] namespace to a [!DNL Customer ID] namespace in your destination.

Read more about identities in the [identity namespace overview](../../../../identity-service/features/namespaces.md).

## Mapping considerations

If customers select a source identity namespace and do not select a target mapping, Platform automatically populates the target mapping with an attribute with the same name.

## Configure optional source field hashing

Experience Platform customers can choose to ingest data into Platform in hashed format or in plain text. If your destination platform accepts both hashed and unhashed data, you can give customers the option to choose whether Platform should hash the source field values when they get exported to your destination.

The configuration below enables the optional [Apply transformation](../../../ui/activate-segment-streaming-destinations.md#apply-transformation) option in the Platform UI, in the Mapping step.

```json {line-numbers="true" highlight="5"}
"identityNamespaces":{
      "Customer_contact":{
         "acceptsAttributes":true,
         "acceptsCustomNamespaces":true,
         "transformation": "sha256(lower($))",
         "acceptedGlobalNamespaces":{
            "Email":{
            },
            "Phone":{
            }
         }
      }
   }
```

Check this option when using unhashed source fields, to have Adobe Experience Platform automatically hash them on activation.

When you are mapping unhashed source attributes to target attributes that the destination expects to be hashed (for example: `email_lc_sha256` or `phone_sha256`), check the **Apply transformation** option to have Adobe Experience Platform automatically hash the source attributes on activation.

## Configure mandatory source field hashing

If your destination only accepts hashed data, you can configure the exported attributes to be automatically hashed by Platform. The configuration below automatically checks the **Apply transformation** option when the `Email` and `Phone` identities are mapped.

```json {line-numbers="true" highlight="8,11"}
"identityNamespaces":{
      "Customer_contact":{
         "acceptsAttributes":true,
         "acceptsCustomNamespaces":true,
         "transformation": "sha256(lower($))",
         "acceptedGlobalNamespaces":{
            "Email":{
               "requiredTransformation": "sha256(lower($))"
            },
            "Phone":{
               "requiredTransformation": "sha256(lower($))"
            }
         }
      }
   }
```

## Next steps {#next-steps}

After reading this article, you should have a better understanding of how to configure your identity namespaces for destinations built with Destination SDK.

To learn more about the other destination components, see the following articles:

* [Customer authentication](customer-authentication.md)
* [OAuth2 authorization](oauth2-authorization.md)
* [Customer data fields](customer-data-fields.md)
* [UI attributes](ui-attributes.md)
* [Schema configuration](schema-configuration.md)
* [Identity namespace configuration](identity-namespace-configuration.md)
* [Supported mapping configurations](supported-mapping-configurations.md)
* [Destination delivery](destination-delivery.md)
* [Audience metadata configuration](audience-metadata-configuration.md)
* [Aggregation policy](aggregation-policy.md)
* [Batch configuration](batch-configuration.md)
* [Historical profile qualifications](historical-profile-qualifications.md)
