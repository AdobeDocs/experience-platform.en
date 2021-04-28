---
keywords: Experience Platform;home;mapper;mapping set;mapping;
solution: Experience Platform
title: Data Prep functions
topic: overview
description: This document introduces mapping sets used with Data Prep.
---

# Mapping set

A mapping set is a set of mappings that transform one schema to another. A single mapping set is created as part of each data flow. 

## Mapping set syntax

A mapping set is comprised of an ID, name, input schema, output schema, as well as a list of all of its associated mappings.

The following JSON is an example of a typical mapping set:

```json
{
    "id" : "cbb0da769faa48fcb29e026a924ba29d",
    "name" : "Demo Mapping Set",
    "inputSchema" : {
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
            "name" : "Id",
            "description" : "Identifier field"
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
| `id` | The unique identifier that represents the mapping set. |
| `name` | The name of the mapping set. |
| `inputSchema` | The schema for the incoming data. |
| `outputSchema` | The schema that the input data has will be transformed to conform to. |
| `mappings` | An array of field-to-field mapping from source to destination. |
| `sourceType` | For each listed mapping, the `sourceType` attributes indicates the type of source that is to be mapped. Can be one of `ATTRIBUTE`, `STATIC`, or `EXPRESSION`: <ul><li> `ATTRIBUTE` is used for any value found in the source path. When passing </li><li>`STATIC` is used for values injected into the destination path.</li><li> `EXPRESSION` is used for an expression, which will be resolved during runtime.</li> </ul> |
| `source` | For each listed mapping, the `source` attribute indicates the field that you want to map. More information about how to configure your source can be found in the [sources section](#sources). |
| `destination` | For each listed mapping, the `destination` attribute indicates he field, or the path to the field, where the extracted value will be placed. More information on how to configure your destinations can be found in the [destination section](#destination). |
| mappings.&#8203;name | *Optional*. A name of the mapping. |
| mappings.description | *Optional*. A description of the mapping. |

## Sources

Sources can be a field, expression, or a static value. Based on the source type given, the value can be extracted in various ways.

### Field in columnar data

When mapping a field in columnar data, such as a CSV file, use the `ATTRIBUTE` source type. If the field contains `.` within its name, use `\` to escape the value. An example of this mapping can be found below:

**Sample CSV file:**

```csv
Name, Email
John Smith, js@example.com
```

**Sample mapping**

```json
{
    "source": "Name",
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

When mapping a field within an array, you can use retrieve a specific value by using an index. To do this, use the `ATTRIBUTE` source type and the index of the value you want to map. An example of this mapping can be found below:

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

**Transformed data:**

```json
{
    "pi": {
        "email": "js@example.com"
    }
}
```

### Array to array or object to object

If you are directly mapping an array to an array, or an object to an object, you can use the `ATTRIBUTE` source type. An example of this mapping can be found below:

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

You can iteratively loop through arrays and map them to a target schema by using the `ATTRIBUTE` source type. An example of this mapping can be found below:

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

When mapping in a constant (static) value, use the `STATIC` source type. An example of this mapping can be found below:

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

When mapping an expression that you want to resolve, use the `EXPRESSION` source type. A list of accepted functions can be found in the [mapping functions guide](./functions.md). An example of this mapping can be found below:

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

## Destination

The destination is the location where the value extracted from the source will be inserted.

### Field at the root level

When you want to map the value from the source at the root level, follow the example below:

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

When you want to map the value from the source within a nested field, follow the example below:

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

### Field at a specific array index

When you want to map the value of the source to a specific index in an array, follow the example below:

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

When you want to iteratively loop through arrays and map the values to the target, follow the the example below: 

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

This document provided detailed information about mapping sets. For more information on other Data Prep features, please read the [Data Prep overview](./home.md).