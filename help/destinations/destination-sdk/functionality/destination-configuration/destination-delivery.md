---
description: Learn how to configure the destination delivery settings for destinations built with Destination SDK, to indicate where the exported data goes and what authentication rule is used in the location where the data will land.
title: Destination delivery
---

# Destination delivery

To offer more control over where the data exported to your destination lands, Destination SDK allows you to specify destination delivery settings.

The destination delivery section indicates where the exported data goes and what authentication rule is used in the location where the data will land.

<!-- When configuring a destination, you must specify an authentication rule and one or more `destinationServerId` parameters, corresponding to the destination servers that define where the data will be delivered to. In most cases, the authentication rule that you should use is `CUSTOMER_AUTHENTICATION`.  -->

To understand where this component fits into an integration created with Destination SDK, see the diagram in the [configuration options](../configuration-options.md) documentation or see the following destination configuration overview pages:

* [Use Destination SDK to configure a streaming destination](../../guides/configure-destination-instructions.md#create-destination-configuration)
* [Use Destination SDK to configure a file-based destination](../../guides/configure-file-based-destination-instructions.md#create-destination-configuration)

You can configure destination delivery settings via the `/authoring/destinations` endpoint. See the following API reference pages for detailed API call examples where you can configure the components shown in this page.

* [Create a destination configuration](../../authoring-api/destination-configuration/create-destination-configuration.md)
* [Update a destination configuration](../../authoring-api/destination-configuration/update-destination-configuration.md)

This article describes all the supported destination delivery options that you can use for your destination.

>[!IMPORTANT]
>
>All parameter names and values supported by Destination SDK are **case sensitive**. To avoid case sensitivity errors, please use the parameters names and values exactly as shown in the documentation.

## Supported integration types {#supported-integration-types}

Refer to the table below for details on which types of integrations support the functionality described on this page.

|Integration type| Supports functionality |
|---|---|
| Real-time (streaming) integrations | Yes |
| File-based (batch) integrations | Yes |

## Supported parameters {#supported-parameters}

When configuring your destination delivery settings, you can use the parameters described in the table below to define where the exported data should be sent.

|Parameter | Type | Description|
|---------|----------|------|
|`authenticationRule` | String | Indicates how [!DNL Platform] should connect to your destination. Supported values:<ul><li>`CUSTOMER_AUTHENTICATION`: Use this option if Platform customers log in to your system via any of the authentication methods described [here](customer-authentication.md).</li><li>`PLATFORM_AUTHENTICATION`: Use this option if there is a global authentication system between Adobe and your destination and the [!DNL Platform] customer does not need to provide any authentication credentials to connect to your destination. In this case, you must create a credentials object using the [credentials API](../../credentials-api/create-credential-configuration.md) configuration. </li><li>`NONE`: Use this option if no authentication is required to send data to your destination platform. </li></ul> |
|`destinationServerId` | String | The `instanceId` of the [destination server](../../authoring-api/destination-server/create-destination-server.md) that you want to export data to. |
|`deliveryMatchers.type`|String|<ul><li>When configuring destination delivery for file-based destinations, always set this to `SOURCE`.</li><li>When configuring destination delivery for a streaming destination, the `deliveryMatchers` section is not required.</li></ul>|
|`deliveryMatchers.value`|String|<ul><li>When configuring destination delivery for file-based destinations, always set this to `batch`.</li><li>When configuring destination delivery for a streaming destination, the `deliveryMatchers` section is not required.</li></ul>|

{style="table-layout:auto"}

## Destination delivery settings for streaming destinations {#destination-delivery-streaming}

The example below shows how the destination delivery settings should be configured for a streaming destination. Note that the `deliveryMatchers` section is not required for streaming destinations.

>[!BEGINSHADEBOX]

```json
{
   "destinationDelivery":[
      {
         "authenticationRule":"CUSTOMER_AUTHENTICATION",
         "destinationServerId":"{{destinationServerId}}"
      }
   ]
}
```

>[!ENDSHADEBOX]

## Destination delivery settings for file-based destinations {#destination-delivery-file-based}

The example below shows how the destination delivery settings should be configured for a file-based destination. Note that the `deliveryMatchers` section is required for file-based destinations.

>[!BEGINSHADEBOX]

```json
{
   "destinationDelivery":[
      {
         "deliveryMatchers":[
            {
               "type":"SOURCE",
               "value":[
                  "batch"
               ]
            }
         ],
         "authenticationRule":"CUSTOMER_AUTHENTICATION",
         "destinationServerId":"{{destinationServerId}}"
      }
   ]
}
```

>[!ENDSHADEBOX]

## Next steps {#next-steps}

After reading this article, you should have a better understanding of how you can configure the locations where your destination should export data, for both streaming and file-based destinations.

To learn more about the other destination components, see the following articles:

* [Customer authentication](customer-authentication.md)
* [OAuth2 authentication](oauth2-authentication.md)
* [UI attributes](ui-attributes.md)
* [Customer data fields](customer-data-fields.md)
* [Schema configuration](schema-configuration.md)
* [Identity namespace configuration](identity-namespace-configuration.md)
* [Supported mapping configurations](supported-mapping-configurations.md)
* [Audience metadata configuration](audience-metadata-configuration.md)
* [Aggregation policy](aggregation-policy.md)
* [Batch configuration](batch-configuration.md)
* [Historical profile qualifications](historical-profile-qualifications.md)