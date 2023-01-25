---
description: Learn how to configure the destination delivery settings for destinations built with Destination SDK.
title: Destination delivery
---

# Destination delivery

The destination delivery section indicates where exactly the exported data goes and what authentication rule is used in the location where the data will land. You are required to specify one or more `destinationServerId`s where the data will be delivered and and authentication rule. In most cases, the authentication rule that you should use is `CUSTOMER_AUTHENTICATION`.

## Supported integration types {#supported-integration-types}

Refer to the table below for details on what type of destinations support the functionality described in this page.

|Integration type| Supports functionality |
|---|---|
| Real-time (streaming) integrations | :white_check_mark: |
| File-based (batch) integrations | :white_check_mark: |

## Supported parameters {#supported-parameters}

The `deliveryMatchers` section is optional and can be used if you are specifying multiple `destinationServerId` fields. If that is the case, the `deliveryMatchers` section indicates how the exported data should be split between the various destination servers.

```json
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
```

|Parameter | Type | Description|
|---------|----------|------|
|`authenticationRule` | String | Indicates how [!DNL Platform] customers connect to your destination. Accepted values are `CUSTOMER_AUTHENTICATION`, `PLATFORM_AUTHENTICATION`, `NONE`. <br> <ul><li>Use `CUSTOMER_AUTHENTICATION` if Platform customers log into your system via any of the following methods: <ul><li>`"authType": "S3"`</li><li>`"authType":"AZURE_CONNECTION_STRING"`</li><li>`"authType":"AZURE_SERVICE_PRINCIPAL"`</li><li>`"authType":"SFTP_WITH_SSH_KEY"`</li><li>`"authType":"SFTP_WITH_PASSWORD"`</li></ul> </li><li> Use `PLATFORM_AUTHENTICATION` if there is a global authentication system between Adobe and your destination and the [!DNL Platform] customer does not need to provide any authentication credentials to connect to your destination. In this case, you must create a credentials object using the [credentials API](../../credentials-api/create-credential-configuration.md) configuration. </li><li>Use `NONE` if no authentication is required to send data to your destination platform. </li></ul> |
|`destinationServerId` | String | The `instanceId` of the [destination server configuration](../../authoring-api/destination-server/create-destination-server.md) that you created for this destination. |

{style="table-layout:auto"}
