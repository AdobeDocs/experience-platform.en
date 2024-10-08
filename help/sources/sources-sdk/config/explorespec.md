---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
title: Configure explore specifications for Self-Serve Sources (Batch SDK)
description: This document provides an overview of the configurations you need to prepare in order to use Self-Serve Sources (Batch SDK).
exl-id: 423a7e56-9dd1-4071-bd26-ee4f9f206122
---
# Configure explore specifications for Self-Serve Sources (Batch SDK)

Explore specifications defines the parameters required for exploring and inspecting objects contained in your source. Explore specifications also defines the response format returned when objects are explored and inspected.

>[!TIP]
>
>Explore specifications are hard-coded and you can simply copy and paste the payload below to your connection specification.

```json
"exploreSpec": {
  "name": "Resource",
  "type": "Resource",
  "requestSpec": {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object"
  },
  "responseSpec": {
    "$schema": "http: //json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "format": {
        "type": "string"
      },
      "schema": {
        "type": "object",
        "properties": {
          "columns": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "type": {
                  "type": "string"
                }
              }
            }
          }
        }
      },
      "data": {
        "type": "array",
        "items": {
          "type": "object"
        }
      }
    }
  }
}
```

| Explore specifications | Description | Example |
| --- | --- | --- |
| `name` | Defines the name or identifier of the explore specification. | `Resource` |
| `type` | Defines the type of the explore specification. | `Resource` |
| `requestSpec` | Contains the parameters required to explore objects in the connection. |
| `requestSpec.type` | Defines the data type of the request specification. | `object` |
| `responseSpec` | Contains the parameters that define the format of the response message returned against an explore call. |
| `responseSpec.type` | Defines the data type of the response specification. | `object` |
| `responseSpec.properties` | Contains information pertaining to how the response message is formatted. |
| `responseSpec.properties.format` | Defines the formatting of the response schema. | `object` |
| `responseSpec.properties.format.type` | Defines the data type of properties. | `string` |
| `responseSpec.schema` | Contains information pertaining to how the response schema is formatted. |
| `responseSpec.schema.type`  | Defines the data type of the schema. | `object` |
| `responseSpec.schema.properties` | Contains information on the columns, type, and items held within a schema. |
| `responseSpec.schema.properties.columns.items.properties.name` | Displays the name of the file. |
| `responseSpec.schema.properties.columns.items.properties.name.type` | Defines the data type of the file name. | `string` |

{style="table-layout:auto"}

## Next steps

With your explore specifications populated, you can proceed to create a complete connection specification using the [!DNL Flow Service] API. See the [Self-Serve Sources (Batch SDK) API guide](../api/api-overview.md) for more information.
