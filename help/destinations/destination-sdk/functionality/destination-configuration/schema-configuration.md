---
description: Learn how to configure the schema settings for destinations built with Destination SDK.
title: Schema configuration
---

# Schema configuration

Adobe Experience Platform Destination SDK supports partner-defined schemas. A partner-defined schema allows users to map profile attributes and identities to custom schemas defined by destination partners, similar to the [streaming destinations](destination-configuration.md#schema-configuration) workflow.

Use the parameters in `schemaConfig` to enable the mapping step of the destination activation workflow. By using the parameters described below, you can determine if Experience Platform users can map profile attributes and/or identities to your file-based destination.

You can create static, hardcoded schema fields or you can specify a dynamic schema that Experience Platform should connect to in order to dynamically retrieve and populate fields in the target schema of the mapping workflow. The target schema is shown in the screenshot below.

![Screenshot highlighting the target schema fields in the mapping step of the activation workflow.](assets/target-schema-fields.png)

### Static hardcoded schema field configuration

```json
"schemaConfig":{
      "profileFields":[
           {
              "name":"phoneNo",
              "title":"phoneNo",
              "description":"This is a fixed attribute on your destination side that customers can map profile attributes to. For example, the phoneNumber value in Experience Platform could be phoneNo on your side.",
              "type":"string",
              "isRequired":false,
              "readOnly":false,
              "hidden":false
           }
        ],
      "profileRequired":true,
      "segmentRequired":true,
      "identityRequired":true
}
```

|Parameter | Type | Description|
|---------|----------|------|
|`profileFields` | Array | When you add predefined `profileFields`, Experience Platform users have the option of mapping Platform attributes to the predefined attributes in your destination. |
|`profileRequired` | Boolean | Use `true` if users should be able to map profile attributes from Experience Platform to custom attributes on your destination's side, as shown in the example configuration above. |
|`segmentRequired` | Boolean | Always use `segmentRequired:true`. |
|`identityRequired` | Boolean | Use `true` if users should be able to map identity namespaces from Experience Platform to your desired schema. |

{style="table-layout:auto"}

### Dynamic schema configuration in the mapping step {#dynamic-schema-configuration}

Use the parameters in  `dynamicSchemaConfig` to dynamically retrieve your own schema that Platform profile attributes and/or identities can be mapped to.

```json
"schemaConfig":{
   "dynamicSchemaConfig":{
      "dynamicEnum": {
         "authenticationRule":"CUSTOMER_AUTHENTICATION",
         "destinationServerId":"2aa8a809-c4ae-4f66-bb02-12df2e0a2279",
         "value": "Schema Name",
         "responseFormat": "SCHEMA"
      }
   },
   "profileRequired":true,
   "segmentRequired":true,
   "identityRequired":true
}
```

|Parameter | Type | Description|
|---------|----------|------|
|`profileRequired` | Boolean | Use `true` if users should be able to map profile attributes from Experience Platform to custom attributes on your destination's side, as shown in the example configuration above. |
|`segmentRequired` | Boolean | Always use `segmentRequired:true`. |
|`identityRequired` | Boolean | Use `true` if users should be able to map identity namespaces from Experience Platform to your desired schema. |
|`destinationServerId` | String | The `instanceId` of the [destination server configuration](./destination-server-api.md) that you created for your dynamic schema. This destination server includes the HTTP endpoint which Experience Platform will call to retrieve the dynamic schema used to populate target fields. |
|`authenticationRule` | String | Indicates how [!DNL Platform] customers connect to your destination. Accepted values are `CUSTOMER_AUTHENTICATION`, `PLATFORM_AUTHENTICATION`, `NONE`. <br> <ul><li>Use `CUSTOMER_AUTHENTICATION` if Platform customers log into your system via any of the following methods: <ul><li>`"authType": "S3"`</li><li>`"authType":"AZURE_CONNECTION_STRING"`</li><li>`"authType":"AZURE_SERVICE_PRINCIPAL"`</li><li>`"authType":"SFTP_WITH_SSH_KEY"`</li><li>`"authType":"SFTP_WITH_PASSWORD"`</li></ul> </li><li> Use `PLATFORM_AUTHENTICATION` if there is a global authentication system between Adobe and your destination and the [!DNL Platform] customer does not need to provide any authentication credentials to connect to your destination. In this case, you must create a credentials object using the [Credentials](./credentials-configuration-api.md) configuration. </li><li>Use `NONE` if no authentication is required to send data to your destination platform. </li></ul> |
|`value`|String|The name of the schema to be displayed in the Experience Platform user interface, in the mapping step.|
|`responseFormat`|String|Always set to `SCHEMA` when defining a custom schema.|

{style="table-layout:auto"}

### Required mappings {#required-mappings}

Within the schema configuration, you have the option of adding required (or predefined) mappings. These are mappings that users are able to view but not modify when they set up a connection to your destination. For example, you can enforce the email address field to always be sent to the destination in the exported files. See below two examples of a schema configuration with required mappings and what these look like in the mapping step of the [activate data to batch destinations workflow](/help/destinations/ui/activate-batch-profile-destinations.md). 

```json

    "requiredMappingsOnly": true, // when this is selected true , users cannot map other attributes and identities in the activation flow, apart from the required mappings that you define.
    "requiredMappings": [
      {
        "destination": "identityMap.ExamplePartner_ID", //if only the destination field is specified, then the user is able to select a source field to map to the destination.
        "mandatoryRequired": true,
        "primaryKeyRequired": true
      }
    ] 

```

![Image of the required mappings in the UI activation flow.](assets/required-mappings-1.png)

```json

    "requiredMappingsOnly": true, // when this is selected true , users cannot map other attributes and identities in the activation flow, apart from the required mappings that you define.
    "requiredMappings": [
      {
        "sourceType": "text/x.schema-path",
        "source": "personalEmail.address",
        "destination": "personalEmail.address" //when both source and destination fields are specified as required mappings, then the user can not select or edit any of the two fields and can only view the selection.
      }
    ] 

```

![Image of the required mappings in the UI activation flow.](assets/required-mappings-2.png)

>[!NOTE]
>
>Currently supported combinations of required mappings are: 
>* You can configure a required source field and a required destination field. In this case, users cannot edit or select any of the two fields and can only view the selection.
>* You can configure a required destination field only. In this case, users will be allowed to select a source field to map to the destination.
>
> Configuring a required source field only is currently *not* supported.

Use the parameters described in the table below if you would like to add required mappings in the activation workflow for your destination.

|Parameter | Type | Description|
|---------|----------|------|
|`requiredMappingsOnly`|Boolean|Indicates if users are be able to map other attributes and identities in the activation flow, *apart from* the required mappings that you define.|
|`requiredMappings.mandatoryRequired`|Boolean| Set to true if this field must be a mandatory attribute which should always be present in file exports to your destination. Read more about [mandatory attributes](/help/destinations/ui/activate-batch-profile-destinations.md#mandatory-attributes). |
|`requiredMappings.primaryKeyRequired`|Boolean| Set to true if this field must be used as a deduplication key in file exports to your destination. Read more about [deduplication keys](/help/destinations/ui/activate-batch-profile-destinations.md#deduplication-keys). |
|`requiredMappings.sourceType`|String| Used when you configure a source field as required. Use `"text/x.schema-path"`,  which indicates that the source field is a predefined XDM attribute|
|`requiredMappings.source`|String|Indicates what the required source field should be.|
|`requiredMappings.destination`|String|Indicates what the required destination field should be.|

{style="table-layout:auto"}