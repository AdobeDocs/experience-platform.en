---
title: CSV Template to Schema Conversion API Endpoint
description: The /rpc/csv2schema endpoint in the Schema Registry API allows you to use CSV templates to automatically create Experience Data Model (XDM) schemas.
exl-id: cf08774a-db94-4ea1-a22e-bb06385f8d0e
---
# CSV template to schema conversion API endpoint

The `/rpc/csv2schema` endpoint in the [!DNL Schema Registry] API allows you to automatically create an Experience Data Model (XDM) schema using a CSV file as a template. Using this endpoint, you can create templates to bulk-import schema fields and cut down on manual API or UI work.

## Getting started

The `/rpc/csv2schema` endpoint is part of the [[!DNL Schema Registry] API](https://www.adobe.io/experience-platform-apis/references/schema-registry/). Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Adobe Experience Platform API.

The `/rpc/csv2schema` endpoint is part of the remote procedure calls (RPCs) that are supported by the [!DNL Schema Registry]. Unlike other endpoints in the [!DNL Schema Registry] API, RPC endpoints do not require additional headers like `Accept` or `Content-Type`, and do not use a `CONTAINER_ID`. Instead, they must use the `/rpc` namespace, as demonstrated in the API calls below.

## CSV file requirements

To make use of this endpoint, you must first create a CSV file with appropriate column headers and corresponding values. Some columns are required, while the rest are optional. The table below describes these columns and their role in schema construction.

| CSV header position | CSV header name | Required/Optional | Description |
| --- | --- | --- | --- |
| 1 | `isIgnored` | Optional | When included and set to `true`, indicates the field is not ready for API upload and should be ignored. |
| 2 | `isCustom` | Required | Indicates whether the field is a custom field or not. |
| 3 | `fieldGroupId` | Optional | The ID of the field group a custom field should be associated with. |
| 4 | `fieldGroupName` | (See description) | The name of the field group to associate this field with.<br><br>Optional for custom fields not extending existing standard fields. If left blank, system will auto assign name.<br><br>Required for standard fields or custom fields extending standard field groups, which is used to query the `fieldGroupId`. |
| 5 | `fieldPath` | Required | The full XED dot-notation path for the field. To include all fields from a standard field group (as indicated under `fieldGroupName`), set the value to `ALL`. |
| 6 | `displayName` | Optional | The title or friendly display name for the field. Can also be an alias for the title if one exists. |
| 7 | `fieldDescription` | Optional | A description for the field. Can also be an alias for the description if one exists. |
| 8 | `dataType` | (See description) | Indicates the [basic data type](../schema/field-constraints.md#basic-types) for the field. Required for all custom fields.<br><br>If `dataType` is set to `object`, either `properties` or `$ref` needs to also be defined for the same row, but not both. |
| 9 | `isRequired` | Optional | Indicates whether the field is required for data ingestion. |
| 10 | `isArray` | Optional | Indicates whether the field is an array of its indicated `dataType`. |
| 11 | `isIdentity` | Optional | Indicates whether the field is an identity field. |
| 12 | `identityNamespace` | Required if `isIdentity` is true | The [identity namespace](../../identity-service/features/namespaces.md) for the identity field. |
| 13 | `isPrimaryIdentity` | Optional | Indicates whether the field is the primary identity for the schema. |
| 14 | `minimum` | Optional | (For numeric fields only) The minimum value for the field. |
| 15 | `maximum` | Optional | (For numeric fields only) The maximum value for the field. |
| 16 | `enum` | Optional | A list of enum values for the field, expressed as an array (e.g. `[value1,value2,value3]`). |
| 17 | `stringPattern` | Optional | (For string fields only) A regex pattern that the string value must match in order to pass validation during data ingestion. |
| 18 | `format` | Optional | (For string fields only) The format for the string field. |
| 19 | `minLength` | Optional | (For string fields only) The minimum length of the string field. |
| 20 | `maxLength` | Optional | (For string fields only) The maximum length of the string field. |
| 21 | `properties` | (See description) | Required if `dataType` is set to `object` and `$ref` is not defined. This defines the object body as a JSON string (e.g. `{"myField": {"type": "string"}}`). |
| 22 | `$ref` | (See description) | Required if `dataType` is set to `object` and `properties` is not defined. This defines the `$id` of the referenced object for the object type (e.g. `https://ns.adobe.com/xdm/context/person`). |
| 23 | `comment` | Optional | When `isIgnored` is set to `true`, this column is used to provide the schema's header information. |

{style="table-layout:auto"}

Refer to the following [CSV template](../assets/sample-csv-template.csv) to determine how your CSV file should be formatted.

## Create an export payload from a CSV file

Once you have set up your CSV template, you can send the file to the `/rpc/csv2schema` endpoint and convert it to an export payload.

**API format**

```http
POST /rpc/csv2schema
```

**Request**

The request payload must use form data as its format. The required form fields are shown below.

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/schemaregistry/rpc/csv2schema \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -F 'csv-file=@"/Users/userName/Documents/sample-csv-template.csv"' \
  -F 'schema-class-id="https://ns.adobe.com/xdm/context/profile"' \
  -F 'schema-name="Example Schema"' \
  -F 'schema-description="Example schema description."'
```

| Property | Description |
| --- | --- |
| `csv-file` | The path to the CSV template stored on your local machine. |
| `schema-class-id` | The `$id` of the XDM [class](../schema/composition.md#class) that this schema will employ. |
| `schema-name` | A display name for the schema. |
| `schema-description` | A description for the schema. |

**Response**

A successful response returns an export payload that was generated from the CSV file. The payload takes a form of an array, and each array item is an object that represents a dependent XDM component for the schema. Select the section below to view a full example of an export payload generated from a CSV file.

+++ Example response payload

```json
[
    {
        "$id": "https://ns.adobe.com/ddgxdmint/mixins/68397e9293a6904b3006311fb46c9573a8aaad49780dd65a",
        "$schema": "http://json-schema.org/draft-06/schema#",
        "type": "object",
        "meta:xdmType": "object",
        "meta:resourceType": "mixins",
        "title": "Generated field group 68397e9293a6904b3006311fb46c9573a8aaad49780dd65a",
        "description": "Generated field group 68397e9293a6904b3006311fb46c9573a8aaad49780dd65a",
        "meta:intendedToExtend": [
            "https://ns.adobe.com/xdm/context/profile"
        ],
        "required": [
            "_ddgxdmint"
        ],
        "properties": {
            "_ddgxdmint": {
                "properties": {
                    "customField1": {
                        "type": "string",
                        "title": "my custom field1",
                        "description": "Sample custom field1"
                    },
                    "customField2": {
                        "properties": {
                            "customerField22": {
                                "type": "string",
                                "title": "my custom field22",
                                "description": "Sample custom field22"
                            }
                        },
                        "type": "object",
                        "required": [
                            "customerField22"
                        ]
                    },
                    "customField3": {
                        "type": "number",
                        "title": "my custom field3",
                        "description": "Sample custom field3",
                        "minimum": 0,
                        "maximum": 10
                    },
                    "customField4": {
                        "type": "string",
                        "title": "my custom field4",
                        "description": "Sample custom field4",
                        "enum": [
                            "one",
                            "two",
                            "three"
                        ]
                    },
                    "customField5": {
                        "type": "array",
                        "title": "my custom field5",
                        "description": "Sample custom field5",
                        "items": {
                            "type": "string"
                        }
                    },
                    "customField6": {
                        "type": "string",
                        "title": "my custom field6",
                        "description": "Sample custom field6",
                        "format": "date"
                    }
                },
                "type": "object",
                "required": [
                    "customField1",
                    "customField2"
                ]
            }
        }
    },
    {
        "$id": "https://ns.adobe.com/ddgxdmint/mixins/7d4edf1a4c2b8c97d31f9931a10618e0b7341cefc97edad6",
        "$schema": "http://json-schema.org/draft-06/schema#",
        "type": "object",
        "meta:xdmType": "object",
        "meta:resourceType": "mixins",
        "title": "SampleFieldGroup",
        "description": "Generated field group 7d4edf1a4c2b8c97d31f9931a10618e0b7341cefc97edad6",
        "meta:intendedToExtend": [
            "https://ns.adobe.com/xdm/context/profile"
        ],
        "properties": {
            "_ddgxdmint": {
                "properties": {
                    "customField7": {
                        "type": "object",
                        "title": "my custom field7",
                        "description": "Sample custom field7",
                        "properties": {
                            "myField": {
                                "type": "string"
                            }
                        }
                    },
                    "customField8": {
                        "type": "array",
                        "title": "my custom field8",
                        "description": "Sample custom field8",
                        "items": {
                            "type": "object",
                            "$ref": "https://ns.adobe.com/xdm/context/person"
                        }
                    }
                },
                "type": "object"
            }
        }
    },
    {
        "$id": "https://ns.adobe.com/ddgxdmint/mixins/6420020c79930a4c3aa7c9fd03b218e0e85c9a7d9990ecf",
        "$schema": "http://json-schema.org/draft-06/schema#",
        "type": "object",
        "meta:xdmType": "object",
        "meta:resourceType": "mixins",
        "title": "Demographic Details:Generated field group 6420020c79930a4c3aa7c9fd03b218e0e85c9a7d9990ecf",
        "description": "Generated field group 6420020c79930a4c3aa7c9fd03b218e0e85c9a7d9990ecf",
        "meta:intendedToExtend": [
            "https://ns.adobe.com/xdm/context/profile"
        ],
        "meta:extends": [
            "https://ns.adobe.com/xdm/context/profile-person-details"
        ],
        "allOf": [
            {
                "properties": {
                    "person": {
                        "properties": {
                            "name": {
                                "properties": {
                                    "_ddgxdmint": {
                                        "properties": {
                                            "nickName": {
                                                "type": "string"
                                            }
                                        },
                                        "type": "object",
                                        "required": [
                                            "nickName"
                                        ]
                                    }
                                },
                                "type": "object",
                                "required": [
                                    "_ddgxdmint"
                                ]
                            }
                        },
                        "type": "object",
                        "required": [
                            "name"
                        ]
                    }
                },
                "required": [
                    "person"
                ]
            },
            {
                "$ref": "https://ns.adobe.com/xdm/context/profile-person-details"
            }
        ]
    },
    {
        "$id": "https://ns.adobe.com/ddgxdmint/mixins/39e6bb291e5b9072878c5c80c0ff5a325df79385ed10d241",
        "$schema": "http://json-schema.org/draft-06/schema#",
        "type": "object",
        "meta:xdmType": "object",
        "meta:resourceType": "mixins",
        "title": "Loyalty Details:Generated field group 39e6bb291e5b9072878c5c80c0ff5a325df79385ed10d241",
        "description": "Generated field group 39e6bb291e5b9072878c5c80c0ff5a325df79385ed10d241",
        "meta:intendedToExtend": [
            "https://ns.adobe.com/xdm/context/profile"
        ],
        "meta:extends": [
            "https://ns.adobe.com/xdm/mixins/profile/profile-loyalty-details"
        ],
        "allOf": [
            {
                "properties": {
                    "loyalty": {
                        "properties": {
                            "_ddgxdmint": {
                                "properties": {
                                    "joinDate": {
                                        "type": "string"
                                    }
                                },
                                "type": "object"
                            }
                        },
                        "type": "object"
                    }
                }
            },
            {
                "$ref": "https://ns.adobe.com/xdm/mixins/profile/profile-loyalty-details"
            }
        ]
    },
    {
        "$id": "https://ns.adobe.com/ddgxdmint/schemas/632cb76723ce2fd3876385168c03eb5201c5997f3f367a2f",
        "$schema": "http://json-schema.org/draft-06/schema#",
        "type": "object",
        "meta:xdmType": "object",
        "meta:resourceType": "schemas",
        "title": "My Sample Schema",
        "description": "My Sample Schema",
        "meta:extends": [
            "https://ns.adobe.com/xdm/context/profile"
        ],
        "allOf": [
            {
                "$ref": "https://ns.adobe.com/xdm/context/profile"
            },
            {
                "$ref": "https://ns.adobe.com/ddgxdmint/mixins/68397e9293a6904b3006311fb46c9573a8aaad49780dd65a"
            },
            {
                "$ref": "https://ns.adobe.com/ddgxdmint/mixins/7d4edf1a4c2b8c97d31f9931a10618e0b7341cefc97edad6"
            },
            {
                "$ref": "https://ns.adobe.com/ddgxdmint/mixins/6420020c79930a4c3aa7c9fd03b218e0e85c9a7d9990ecf",
                "meta:refProperty": [
                    "/person/name/firstName",
                    "/person/name/lastName",
                    "/person/name/_ddgxdmint/nickName"
                ]
            },
            {
                "$ref": "https://ns.adobe.com/ddgxdmint/mixins/39e6bb291e5b9072878c5c80c0ff5a325df79385ed10d241"
            }
        ]
    },
    {
        "@type": "xdm:alternateDisplayInfo",
        "meta:resourceType": "descriptors",
        "xdm:sourceSchema": "https://ns.adobe.com/ddgxdmint/schemas/632cb76723ce2fd3876385168c03eb5201c5997f3f367a2f",
        "xdm:sourceVersion": 1,
        "xdm:sourceProperty": "/person/name/firstName",
        "xdm:title": {
            "en_us": "My first name"
        }
    },
    {
        "@type": "xdm:descriptorIdentity",
        "meta:resourceType": "descriptors",
        "xdm:sourceSchema": "https://ns.adobe.com/ddgxdmint/schemas/632cb76723ce2fd3876385168c03eb5201c5997f3f367a2f",
        "xdm:sourceVersion": 1,
        "xdm:sourceProperty": "/_ddgxdmint/customField1",
        "xdm:namespace": "email",
        "xdm:property": "xdm:code",
        "xdm:isPrimary": true
    }
]
```

+++

## Import the schema payload

After generating the export payload from the CSV file, you can send that payload to the `/rpc/import` endpoint to generate the schema.

See the [import endpoint guide](./import.md) for details on how to generate schemas from export payloads.
