---
keywords: Experience Platform;home;mapper;mapping set;mapping;
solution: Experience Platform
title: Mapping sets overview
description: Learn how to use mapping sets with Adobe Experience Platform Data Prep.
exl-id: b45545b7-3ae7-400d-b6fd-b2cb76061093
---
# Mapping sets overview

A mapping set is a set of mappings that transforms data from one schema to another. This document provides information on how mapping sets are comprised, including input schema, output schema, and mappings.

## Getting started

This overview requires a working understanding of the following components of Adobe Experience Platform:

- [Data Prep](./home.md): Data Prep allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).
- [Dataflows](../dataflows/home.md): Dataflows are a representation of data jobs that move data across Platform. Dataflows are configured across different services, helping move data from source connectors to target datasets, to [!DNL Identity] and [!DNL Profile], and to [!DNL Destinations].
- [[!DNL Adobe Experience Platform Data Ingestion]](../ingestion/home.md): The methods by which data can be sent to [!DNL Experience Platform].
- [[!DNL Experience Data Model (XDM) System]](../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.

## Mapping set syntax

A mapping set is comprised of an ID, name, input schema, output schema, and a list of associated mappings.

The following JSON is an example of a typical mapping set:

```json
{
    "id": "cbb0da769faa48fcb29e026a924ba29d",
    "name": "Demo Mapping Set",
    "inputSchema": {
        "id": "a167ff2947ff447ebd8bcf7ef6756232",
        "version": 0
    },
    "outputSchema": {
        "schemaRef": {
            "id": "https://ns.adobe.com/{TENANT_ID}/schemas/6dd1768be928c36d58ad4897219bb52d491671f966084bc0",
            "contentType": "application/vnd.adobe.xed-full+json;version=1"
        }
    },
    "mappings": [
        {
            "sourceType": "ATTRIBUTE",
            "source": "Id",
            "destination": "_id",
            "name": "Id",
            "description": "Identifier field"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "FirstName",
            "destination": "person.name.firstName"
        },
        {
            "sourceType": "ATTRIBUTE",
            "source": "LastName",
            "destination": "person.name.lastName"
        }
    ]
}
```

| Property | Description | 
| -------- | ----------- |
| `id` | A unique identifier for the mapping set. |
| `name` | The name of the mapping set. |
| `inputSchema` | The XDM schema for the incoming data. |
| `outputSchema` | The XDM schema that the input data has will be transformed to conform to. |
| `mappings` | An array of field-to-field mappings from the source schema to the destination schema. |
| `sourceType` | For each listed mapping, its `sourceType` attribute indicates the type of source that is to be mapped. Can be one of `ATTRIBUTE`, `STATIC`, or `EXPRESSION`: <ul><li> `ATTRIBUTE` is used for any value found in the source path. </li><li>`STATIC` is used for values injected into the destination path. This value remains constant and is not affected by the source schema.</li><li> `EXPRESSION` is used for an expression, which will be resolved during runtime. A list of available expressions can be found in the [mapping functions guide](./functions.md).</li> </ul> |
| `source` | For each listed mapping, the `source` attribute indicates the field that you want to map. More information about how to configure your source can be found in the [sources overview](../sources/home.md). |
| `destination` | For each listed mapping, the `destination` attribute indicates the field, or the path to the field, where the value extracted from the `source` field will be placed. More information on how to configure your destinations can be found in the [destination overview](../destinations/home.md). |
| `mappings.name` | (*Optional*) A name for the mapping. |
| `mappings.description` | (*Optional*) A description of the mapping. |

## Configuring mapping sources

In a mapping, the `source` can be a field, expression, or a static value. Based on the source type given, the value can be extracted in various ways.

### Field in columnar data

When mapping a field in columnar data, such as a CSV file, use the `ATTRIBUTE` source type. If the field contains `.` within its name, use `\` to escape the value. An example of this mapping can be found below:

**Sample CSV file:**

```csv
Full.Name, Email
John Smith, js@example.com
```

**Sample mapping**

```json
{
    "source": "Full.Name",
    "destination": "pi.name",
    "sourceType": "ATTRIBUTE"
}
```

**Transformed data**

```json
{
    "pi": {
        "name": "John Smith"
    }
}
```

### Field in nested data

When mapping a field in nested data, such as a JSON file, use the `ATTRIBUTE` source type. If the field contains `.` within its name, use `\` to escape the value. An example of this mapping can be found below:

**Sample JSON file**

```json
{
    "customerInfo": {
        "name": "John Smith",
        "email": "js@example.com"
    }
}
```

**Sample mapping**

```json
{
    "source": "customerInfo.name",
    "destination": "pi.name",
    "sourceType": "ATTRIBUTE"
}
```

**Transformed data**

```json
{
    "pi": {
        "name": "John Smith"
    }
}
```

### Field within an array

When mapping a field within an array, you can retrieve a specific value by using an index. To do this, use the `ATTRIBUTE` source type and the index of the value you want to map. An example of this mapping can be found below:

**Sample JSON file**

```json
{
    "customerInfo": {
        "emails": [
            {
                "name": "John Smith",
                "email": "js@example.com"
            },
            {
                "name": "Jane Smith",
                "email": "jane@example.com"
            }
        ]
    }
}
```

**Sample mapping**

```json
{
    "source": "customerInfo.emails[0].email",
    "destination": "pi.email",
    "sourceType": "ATTRIBUTE"
}
```

**Transformed data**

```json
{
    "pi": {
        "email": "js@example.com"
    }
}
```

### Array to array or object to object

Using the `ATTRIBUTE` source type, you can also directly map an array to an array or an object to an object. An example of this mapping can be found below:

**Sample JSON file**

```json
{
    "customerInfo": {
        "emails": [
            {
                "name": "John Smith",
                "email": "js@example.com"
            },
            {
                "name": "Jane Smith",
                "email": "jane@example.com"
            }
        ]
    }
}
```

**Sample mapping**

```json
{
    "source": "customerInfo.emails",
    "destination": "pi.emailList",
    "sourceType": "ATTRIBUTE"
}
```

**Transformed data**

```json
{
    "pi": {
        "emailList": [
            {
                "name": "John Smith",
                "email": "js@example.com"
            },
            {
                "name": "Jane Smith",
                "email": "jane@example.com"
            }
        ]
    }
}
```

### Iterative operations on arrays

Using the `ATTRIBUTE` source type, you can iteratively loop through arrays and map them to a target schema by using a wildcard index (`[*]`). An example of this mapping can be found below:

**Sample JSON file**

```json
{
    "customerInfo": {
        "emails": [
            {
                "name": "John Smith",
                "email": "js@example.com"
            },
            {
                "name": "Jane Smith",
                "email": "jane@example.com"
            }
        ]
    }
}
```

**Sample mapping**

```json
{
    "source": "customerInfo.emails[*].name",
    "destination": "pi[*].names",
    "sourceType": "ATTRIBUTE"
}
```

**Transformed data**

```json
{
    "pi": [
        {
            "names": {
                "name": "John Smith"
            } 
        },
        {
            "names": {
                "name": "Jane Smith"
            }
        }
    ]
}
```

### Constant value

If you want to map a constant, or a static value, use the `STATIC` source type.  When using the `STATIC` source type, the `source` represents the hard-coded value that you want to assign to the `destination`. An example of this mapping can be found below:

**Sample JSON file**

```json
{
    "name": "John Smith",
    "email": "js@example.com"
}
```

**Sample mapping**

```json
{
    "source": "CUSTOMER",
    "destination": "userType",
    "sourceType": "STATIC"
}
```

**Transformed data**

```json
{
    "userType:": "CUSTOMER"
}
```

### Expressions

If you want to map an expression, use the `EXPRESSION` source type. A list of accepted functions can be found in the [mapping functions guide](./functions.md). When using the `EXPRESSION` source type, the `source` represents the function you want to resolve. An example of this mapping can be found below:

**Sample JSON file**

```json
{
    "firstName": "John",
    "lastName": "Smith",
    "email": "js@example.com"
}
```

**Sample mapping**

```json
{
    "source": "concat(upper(lastName), upper(firstName), now())",
    "destination": "pi.created",
    "sourceType": "EXPRESSION"
}
```

**Transformed data**

```json
{
    "pi": {
        "created": "SMITHJOHNFri Sep 25 15:17:31 PDT 2020"
    }
}
```

## Configuring mapping destinations

In a mapping, the `destination` is the location where the value extracted from the `source` will be inserted.

### Field at the root level

When you want to map the `source` value to the root level of your transformed data, follow the example below:

**Sample JSON file**

```json
{
    "customerInfo": {
        "name": "John Smith",
        "email": "js@example.com"
    }
}
```

**Sample mapping**

```json
{
    "source": "customerInfo.name",
    "destination": "name",
    "sourceType": "ATTRIBUTE"
}
```

**Transformed data**

```json
{
    "name": "John Smith"
}
```

### Nested field

When you want to map the `source` value to a nested field in your transformed data, follow the example below:

**Sample JSON file**

```json
{
    "name": "John Smith",
    "email": "js@example.com"
}
```

**Sample mapping**

```json
{
    "source": "name",
    "destination": "pi.name",
    "sourceType": "ATTRIBUTE"
}
```

**Transformed data**

```json
{
    "pi": {
        "name": "John Smith"
    }
}
```

### Field at a specific array index

When you want to map the `source` value to a specific index in an array in your transformed data, follow the example below:

**Sample JSON file**

```json
{
    "customerInfo": {
        "name": "John Smith",
        "email": "js@example.com"
    }
}
```

**Sample mapping**

```json
{
    "source": "customerInfo.name",
    "destination": "piList[0]",
    "sourceType": "ATTRIBUTE"
}
```

**Transformed data**

```json
{
    "piList": ["John Smith"]
}
```

### Iterative array operation

When you want to iteratively loop through arrays and map the values to the target, you can use a wildcard index (`[*]`). An example of this can be seen below: 

```json
{
    "customerInfo": {
        "emails": [
            {
                "name": "John Smith",
                "email": "js@example.com"
            },
            {
                "name": "Jane Smith",
                "email": "jane@example.com"
            }
        ]
    }
}
```

**Sample mapping**

```json
{
    "source": "customerInfo.emails[*].name",
    "destination": "pi[*].names",
    "sourceType": "ATTRIBUTE"
}
```

**Transformed data**

```json
{
    "pi": [
        {
            "names": {
                "name": "John Smith"
            } 
        },
        {
            "names": {
                "name": "Jane Smith"
            }
        }
    ]
}
```

## Next steps

By reading this document, you should now understand how mapping sets are constructed, including how to configure individual mappings within a mapping set. For more information on other Data Prep features, please read the [Data Prep overview](./home.md). To learn how to use mapping sets within the Data Prep API, please read the [Data Prep developer guide](./api/overview.md).
