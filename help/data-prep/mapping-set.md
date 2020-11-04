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
    }
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
| mappings.source | The source, based on the source type, that you are mapping. |
| mappings.destination | The field, or the path to the field, where the extracted value has to be placed. |
| mappings.&#8203;name | *Optional*. The name of the mapping. |
| mappings.description | *Optional*. The description of the mapping. |