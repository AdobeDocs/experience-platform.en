---
solution: Experience Platform
title: Export XDM Schemas in the UI
description: Learn how to export an existing schema to a different sandbox or organization in the Adobe Experience Platform user interface.
type: Tutorial
exl-id: c467666d-55bc-4134-b8f4-7758d49c4786
---
# Export XDM schemas in the UI

All resources within the Schema Library are contained in a specific sandbox within an organization. In some cases, you may want to share Experience Data Model (XDM) resources between sandboxes and organizations.

To address this need, the [!UICONTROL Schemas] workspace in the Adobe Experience Platform UI allows you to generate an export payload for any schema within in the Schema Library. This payload can then be used in a call to the Schema Registry API to import the schema (and all dependent resources) into a target sandbox and organization.

>[!NOTE]
>
>You can also use the Schema Registry API to export other resources in addition to schemas, including classes, schema field groups, and data types. See the [export endpoint guide](../api/export.md) for more information.

## Prerequisites

While the Platform UI allows you export XDM resources, you must use the Schema Registry API to import those resources into other sandboxes or organizations to complete the workflow. Refer to guide on [getting started with the Schema Registry API](../api/getting-started.md) for important information regarding required authentication headers before following this guide.

## Generate an export payload {#generate-export-payload}

In the Platform UI, select **[!UICONTROL Schemas]** in the left navigation. Within the [!UICONTROL Schemas] workspace, select the row for the schema that you want to export to open the schema details in the right sidebar.

>[!TIP]
>
>See the guide on [exploring XDM resources](./explore.md) for details on how to find the XDM resource you are looking for.

Next, select the **[!UICONTROL Copy JSON]** icon (![Copy Icon](../images/ui/export/icon.png)) from the available options.

![The Schemas workspace with a schema row and [!UICONTROL Copy to JSON] highlighted.](../images/ui/export/copy-json.png)

This copies a JSON payload to your clipboard, generated based on the schema structure. For the "[!DNL Loyalty Members]" schema shown above, the following JSON is generated:

```json
[
  {
    "$id": "https://ns.adobe.com/<XDM_TENANTID_PLACEHOLDER>/mixins/9ecfd881d0053568d277b792e4d24c6b70ffa7782bd31265",
    "meta:altId": "_<XDM_TENANTID_PLACEHOLDER>.mixins.9ecfd881d0053568d277b792e4d24c6b70ffa7782bd31265",
    "meta:resourceType": "mixins",
    "version": "1.0",
    "title": "Loyalty details",
    "type": "object",
    "description": "",
    "definitions": {
      "customFields": {
        "type": "object",
        "properties": {
          "_<XDM_TENANTID_PLACEHOLDER>": {
            "type": "object",
            "properties": {
              "loyalty": {
                "title": "Loyalty",
                "description": "",
                "type": "object",
                "isRequired": false,
                "required": [
                  
                ],
                "properties": {
                  "loyaltyId": {
                    "title": "Loyalty ID",
                    "description": "",
                    "type": "string",
                    "isRequired": false,
                    "required": [
                      
                    ],
                    "meta:xdmType": "string"
                  },
                  "memberSince": {
                    "title": "Member Since",
                    "description": "",
                    "type": "string",
                    "isRequired": false,
                    "required": [
                      
                    ],
                    "format": "date",
                    "meta:xdmType": "date"
                  },
                  "points": {
                    "title": "Points",
                    "description": "",
                    "type": "integer",
                    "isRequired": false,
                    "required": [
                      
                    ],
                    "meta:xdmType": "int"
                  },
                  "loyaltyLevel": {
                    "title": "Loyalty Level",
                    "description": "",
                    "type": "string",
                    "isRequired": false,
                    "required": [
                      
                    ],
                    "enum": [
                      "platinum",
                      "gold",
                      "silver",
                      "bronze"
                    ],
                    "meta:enum": {
                      "platinum": "Platinum",
                      "gold": "Gold",
                      "silver": "Silver",
                      "bronze": "Bronze"
                    },
                    "meta:xdmType": "string"
                  }
                },
                "meta:xdmType": "object"
              }
            },
            "meta:xdmType": "object"
          }
        },
        "meta:xdmType": "object"
      }
    },
    "allOf": [
      {
        "$ref": "#/definitions/customFields",
        "type": "object",
        "meta:xdmType": "object"
      }
    ],
    "meta:extensible": true,
    "meta:abstract": true,
    "meta:intendedToExtend": [
      
    ],
    "meta:xdmType": "object",
    "meta:sandboxId": "1bd86660-c5da-11e9-93d4-6d5fc3a66a8e",
    "meta:sandboxType": "production"
  },
  {
    "$id": "https://ns.adobe.com/<XDM_TENANTID_PLACEHOLDER>/schemas/1e5a739ded8fd1d766a0e06e881a38031874dddd1c7020ad",
    "meta:altId": "_<XDM_TENANTID_PLACEHOLDER>.schemas.1e5a739ded8fd1d766a0e06e881a38031874dddd1c7020ad",
    "meta:resourceType": "schemas",
    "version": "1.4",
    "title": "Loyalty Members",
    "type": "object",
    "description": "Describes customers who are members of a loyalty program.",
    "allOf": [
      {
        "$ref": "https://ns.adobe.com/xdm/context/profile",
        "type": "object",
        "meta:xdmType": "object"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/context/profile-person-details",
        "type": "object",
        "meta:xdmType": "object"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/context/profile-personal-details",
        "type": "object",
        "meta:xdmType": "object"
      },
      {
        "$ref": "https://ns.adobe.com/<XDM_TENANTID_PLACEHOLDER>/mixins/9ecfd881d0053568d277b792e4d24c6b70ffa7782bd31265",
        "type": "object",
        "meta:xdmType": "object"
      },
      {
        "$ref": "https://ns.adobe.com/xdm/mixins/profile-consents",
        "type": "object",
        "meta:xdmType": "object"
      }
    ],
    "meta:extensible": false,
    "meta:abstract": false,
    "meta:extends": [
      "https://ns.adobe.com/xdm/context/profile-person-details",
      "https://ns.adobe.com/xdm/context/profile-personal-details",
      "https://ns.adobe.com/xdm/common/auditable",
      "https://ns.adobe.com/xdm/data/record",
      "https://ns.adobe.com/xdm/context/profile",
      "https://ns.adobe.com/<XDM_TENANTID_PLACEHOLDER>/mixins/9ecfd881d0053568d277b792e4d24c6b70ffa7782bd31265",
      "https://ns.adobe.com/xdm/mixins/profile-consents"
    ],
    "meta:xdmType": "object",
    "meta:class": "https://ns.adobe.com/xdm/context/profile",
    "meta:sandboxId": "1bd86660-c5da-11e9-93d4-6d5fc3a66a8e",
    "meta:sandboxType": "production",
    "meta:immutableTags": [
      
    ]
  }
]
```

The payload takes the form of an array, with each array item being an object that represents a custom XDM resource to be exported. In the example above, the "[!DNL Loyalty details]" custom field group and the "[!DNL Loyalty Members]" schema are included. Any core resources employed by the schema are not included in the export, as these resources are available in all sandboxes and organizations.

Note that each instance of your organization's tenant ID appears as `<XDM_TENANTID_PLACEHOLDER>` in the payload. These placeholders will be automatically replaced with the appropriate tenant ID value depending on where you import the schema in the next step.

## Import the resource using the API

Once you have copied the export JSON for the schema, you can use it as the payload for a POST request to the `/rpc/import` endpoint in the Schema Registry API. See the [import endpoint guide](../api/import.md) for details on how to configure the call to send the schema to the desired organization and sandbox.

## Next steps

By following this guide, you have successfully exported an XDM schema to a different organization or sandbox. For more information on the capabilities of the [!UICONTROL Schemas] UI, refer to the [[!UICONTROL Schemas] UI overview](./overview.md).
