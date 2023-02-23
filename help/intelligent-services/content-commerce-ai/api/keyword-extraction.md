---
keywords: Experience Platform;getting started;content ai;commerce ai;content and commerce ai;keyword extraction;Keyword extraction
solution: Experience Platform
title: Keyword Extraction in the Content and Commerce AI API
description: The keyword extraction service, when given a text document, automatically extracts keywords or keyphrases that best describe the subject of the document. In order to extract keywords, a combination of named entity recognition (NER) and unsupervised keyword extraction algorithms are used.
exl-id: 56a2da96-5056-4702-9110-a1dfec56f0dc
---
# Keyword extraction

>[!NOTE]
>
>[!DNL Content and Commerce AI] is in beta. The documentation is subject to change.

The keyword extraction service, when given a text document, automatically extracts keywords or keyphrases that best describe the subject of the document. In order to extract keywords, a combination of named entity recognition (NER) and unsupervised keyword extraction algorithms are used.

The named entities recognized by [!DNL Content and Commerce AI] are listed in the following table:

| Entity name | Description |
| --- | --- |
| PERSON | People, including fictional. |
| NORP | Nationalities or religious or political groups. |
| GPE | Countries, cities, and states. |
| LOC | Non-GPE locations, mountain ranges, bodies of water. |
| FAC | Buildings, airports, highways, bridges, etc. |
| ORG | Companies, agencies, institutions, etc. |
| PRODUCT | Objects, vehicles, foods, etc. (Not services.) |
| EVENT | Named hurricanes, battles, wars, sports events, etc. |
| WORK_OF_ART | Titles of books, songs, etc. |
| LAW | Named documents made into laws. |
| LANGUAGE | Any named language. |

>[!NOTE]
>
>If you plan on processing PDFs, skip to the instructions for [PDF keyword extraction](#pdf-extraction) within this document. Also, support for additional file types such as docx, ppt, amd xml are set to be released at a later date.

**API format**

```http
POST /services/v1/predict
```

**Request**

The following request extracts keywords from a document based on the input parameters provided in the payload.

Simplified JSON of the input file:

```json
{
  "application-id": "1234",
  "language": "en",
  "content-type": "inline",
  "encoding": "utf-8",
  "threshold": 0.01,
  "top-N": 10,
  "custom": {
    "min-n": 2,
    "entity-types": ["PERSON"]
  },
  "data": [
    {
      "content-id": "abc123",
      "content": "But an influential faction on the ATP player council, which is chaired by Novak Djokovic, staged a rebellion against Kermodes regime in the spring, and he will leave the post on Dec 31"
    }
  ]
}
```

See the table below the example payload for more information on the input parameters shown.

>[!CAUTION]
>
>`analyzer_id` determines which [!DNL Sensei Content Framework] is used. Please check that you have the proper `analyzer_id` before making your request. For keyword extraction service, the `analyzer_id` ID is:
>`Feature:cintel-ner:Service-1a35aefb0f0f4dc0a3b5262370ebc709`

```SHELL
curl -w'\n' -i -X POST https://sensei-stage-ue1.adobe.io/sensei-core/v2/predict \
-H 'Prefer: respond-async, wait=59' \
-H "x-api-key: $API_KEY" \
-H "content-type: multipart/form-data" \
-H "authorization: Bearer $API_TOKEN" \
-F 'contentAnalyzerRequests={
  "sensei:name": "test",
  "sensei:invocation_mode": "synchronous",
  "sensei:invocation_batch": false,
  "sensei:engines": [
    {
      "sensei:execution_info": {
        "sensei:engine": "Feature:cintel-ner:Service-1e9081c865214d1e8bace51dd918b5c0"
      },
      "sensei:inputs": {
        "documents": [
          {
            "repo:path": "https://ccaiblobstorage.blob.core.windows.net/sample-text/simple-text.pdf?sp=r&st=2023-02-22T22:26:24Z&se=2024-02-23T06:26:24Z&spr=https&sv=2021-06-08&sr=b&sig=Glsr4qIUVphVcOONviBNwz96N5M%2FEZZL0AM2Ig2xc30%3D",
            "sensei:repoType": "HTTP",
            "dc:format": "application/pdf"
          }
        ]
      },
      "sensei:params": {
        "application-id": "1234",
        "min_key_phrase_length": 1,
        "max_key_phrase_length": 3,
        "top_n": 10,
        "last_semantic_unit_type": "concept"
      },
      "sensei:outputs":{
        "result" : {
          "sensei:multipart_field_name" : "result",
          "dc:format": "application/json"
        }
      }
    }
  ]
}'
```

| Property | Description | Mandatory |
| --- | --- | --- |
| `application-id` | The ID of the created application. | Yes |
| `top_n` | Number of results to be returned. 0, to return all results. When used in conjunction with threshold, the number of results returned will be lesser of either limits. | No |
| `min_relevance` | Threshold of score below which the results need to be returned. Exclude parameter to return all results. | No |
| `min_key_phrase_length` | Minimum number of words required in the key phrases. | No |
| `max_key_phrase_length` | TMaximum number of words required in the key phrases. | No |
| `last_semantic_unit_type` | Return only semantic units upto the given level in the hierarchical response. “key_phrase” returns only key phrases, “linked_entity” returns only key phrases and their corresponding linked entities, and “concept” returns key phrases, linked entities and concepts. | No |
| `entity_types` | Types of entities to be returned as key phrases.| No |

**Response**

A successful response returns a JSON object containing extracted keywords in the `response` array. 

```json
{
     
}
```