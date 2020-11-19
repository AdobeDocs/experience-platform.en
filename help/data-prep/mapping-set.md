---
keywords: Experience Platform;home;mapper;mapping set;mapping;
solution: Experience Platform
title: Data Prep functions
topic: overview
description: This document introduces mapping sets used with Data Prep.
---

# Mapping set

A mapping set is a set of mappings that transform one schema to another. A single mapping set is created as part of each data flow. A mapping set is an integral part of the data flows and is created, edited, and monitored as part of the data flows.

An example of a mapping set can be seen below:

```json
{
    "id" : "cbb0da769faa48fcb29e026a924ba29d",
    "name" : "Demo Mapping Set",
    "outputSchema": {
        "schemaRef": {
            "id": "https://ns.adobe.com/platointegrationtest/schemas/6dd1768be928c36d58ad4897219bb52d491671f966084bc0",
            "contentType": "application/vnd.adobe.xed-full+json;version=1"
        }
    },
    "inputSchema" : {
        "id": "a167ff2947ff447ebd8bcf7ef6756232",
        "version": 0
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
| id | The GUID that represents the mapping set. |
| name | The name of the mapping set. |
| inputSchema | The schema of the incoming data. |
| outputSchema | The schema which the data has to be transformed into. |
| mappings | The field-to-field mapping from source to destination. |
| mappings.sourceType | The type of source that is to be mapped. Can be one of `ATTRIBUTE`, `STATIC`, or `EXPRESSION`: <ul><li> `ATTRIBUTE` is used for any value found in the source path. When passing </li><li>`STATIC` is used for values injected into the destination path.</li><li> `EXPRESSION` is used for an expression, which will be resolved during runtime.</li> </ul> |
| mappings.source | The source, based on the source type, that you are mapping. More information about sources can be found in the [sources section](#sources). |
| mappings.destination | The field, or the path to the field, where the extracted value has to be placed. |
| mappings.&#8203;name | *Optional*. The name of the mapping. |
| mappings.description | *Optional*. The description of the mapping. |

## Sources

Sources can be a field, expression, or a static value. Based on the source type given, the value can be extracted in various ways.

### Field in a columnar data

When mapping a field in a column, such as a CSV file, use the `ATTRIBUTE` source type. If the field contains `.` within its name, use `\` to escape the value. An example of this mapping set can be found below:

**Sample CSV file:**

```csv
Name, Email
John Smith, js@example.com
```

**Sample mapping set:**

```json
{
    "source": "Name",
    "destination": "pi.name",
    "sourceType": "text/x.schema-path"
}
```

**Transformed data:**

```json
{
    "pi": {
        "name": "John Smith"
    }
}
```

### Field in nested data

When mapping a field in nested data, such as a JSON file, use the `ATTRIBUTE` source type. If the field contains `.` within its name, use `\` to escape the value. An example of this mapping set can be found below:

**Sample JSON file:**

```json
{
    "customerInfo": {
        "name": "John Smith",
        "email": "js@example.com"
    }
}
```

**Sample mapping set:**

```json
{
    "source": "customerInfo.name",
    "destination": "pi.name",
    "sourceType": "text/x.schema-path"
}
```

**Transformed data:**

```json
{
    "pi": {
        "name": "John Smith"
    }
}
```

### Field within an array

When mapping a field within an array, you can use retrieve a specific value by using an index. To do this, use the `ATTRIBUTE` source type and the index of the value you want to map. An example of this mapping set can be found below:

**Sample JSON file:**

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

**Sample mapping set:**

```json
{
    "source": "customerInfo.emails[0].email",
    "destination": "pi.email",
    "sourceType": "text/x.schema-path"
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

When you are directly mapping an array to an array, you can use the `ATTRIBUTE` source type. Similarly, when you are directly mapping an object to an object, you can use the `ATTRIBUTE` source type. An example of this mapping set can be found below:

**Sample JSON file:**

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

**Sample mapping set:**

```json
{
    "source": "customerInfo.emails",
    "destination": "pi.emailList",
    "sourceType": "text/x.schema-path"
}
```

**Transformed data:**

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

You can iteratively loop through arrays and map them to a target by using the `ATTRIBUTE` source type. An example of this mapping set can be found below:

**Sample JSON file:**

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

**Sample mapping set:**

```json
{
    "source": "customerInfo.emails[*].name",
    "destination": "pi[*].names",
    "sourceType": "text/x.schema-path"
}
```

**Transformed data:**

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

When mapping in a constant (static) value, use the `STATIC` source type. An example of this mapping set can be found below:

**Sample JSON file:**

```json
{
    "name": "John Smith",
    "email": "js@example.com"
}
```

**Sample mapping set:**

```json
{
    "source": "CUSTOMER",
    "destination": "userType",
    "sourceType": "text/plain"
}
```

**Transformed data:**

```json
{
    "userType:": "CUSTOMER"
}
```

### Expressions

When mapping an expression that you want to resolve, use the `EXPRESSION` source type. A list of accepted functions can be found in the [mapping functions guide](./functions.md). An example of this mapping set can be found below:

**Sample JSON file:**

```json
{
    "firstName": "John",
    "lastName": "Smith",
    "email": "js@example.com"
}
```

**Sample mapping set:**

```json
{
    "source": "concat(upper(lastName), upper(firstName), now())",
    "destination": "pi.created",
    "sourceType": "text/x.aep-xl"
}
```

**Transformed data:**

```json
{
    "pi": {
        "created": "SMITHJOHNFri Sep 25 15:17:31 PDT 2020"
    }
}
```