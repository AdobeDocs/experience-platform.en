---
keywords: Experience Platform;getting started;content ai;commerce ai;content and commerce ai;keyword extraction;Keyword extraction
solution: Experience Platform
title: Color extraction API endpoint
topic: Developer guide
description: The keyword extraction service, when given a text document, automatically extracts keywords or keyphrases that best describe the subject of the document. In order to extract keywords, a combination of named entity recognition (NER) and unsupervised keyword extraction algorithms are used.
---

# Keyword extraction API endpoint

>[!NOTE]
>
>Content and Commerce AI is in beta. The documentation is subject to change.

The keyword extraction service, when given a text document, automatically extracts keywords or keyphrases that best describe the subject of the document. In order to extract keywords, a combination of named entity recognition (NER) and unsupervised keyword extraction algorithms are used.

**Unsupervised keyword extraction**

For unsupervised keyword extraction, [[!DNL YAKE]](http://yake.inesctec.pt/) is used. [!DNL YAKE] is a fast and accurate unsupervised automatic keyword extraction method used to select the most important keywords from the document. The keywords from [!DNL YAKE] are then filtered to select only the noun phrases.

**Named entity recognition**

For named entity recognition, [[!DNL spaCy]](https://spacy.io/)'s OntoNotes model is used. This model assigns context-specific token vectors, part-of-speech (POS) tags, dependency parse, and named entities. The OntoNotes model is one of the core [!DNL spaCy] models. More information on the OntoNotes model can be found [here](https://spacy.io/models/en).

The following table contains the recognized entities:

| Type | Description |
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

The OntoNotes results and the keywords from [!DNL YAKE] are combined then ranked according to their importance before returning them in the response.

**API format**

```http
POST /sensei-core/v1/predict
```

**Request**

The request to extract keywords (POST) must include certain input parameters. See the table below for more information on the mandatory input parameters.

```SHELL
curl -w'\n' -i -X POST https://sensei-stage-ew1.adobe.io/sensei-core/v1/predict \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "Content-Type: multipart/form-data" \
  -H "cache-control: no-cache,no-cache" \
  -H "x-api-key: {API_KEY}" \
  -F file="{
    \"application-id\": \"1234\", 
    \"language\": \"en\", 
    \"content-type\": \"inline\", 
    \"encoding\": \"utf-8\",
    \"threshold\": 0.01,
    \"top-N\": 10,
    \"custom\": {
        \"min-n\": 2,
        \"entity-types\": [\"PERSON\"]
      },
    \"data\": [{
      \"content-id\": \"abc123\", 
      \"content\": \"But an influential faction on the ATP player council, which is chaired by Novak Djokovic, staged a rebellion against Kermodes regime in the spring, and he will leave the post on Dec 31\"
      }]
    }" \
  -F 'contentAnalyzerRequests={
    "enable_diagnostics":"true",
    "requests":[{
         "analyzer_id": "Feature:cintel-ner:Service-1a35aefb0f0f4dc0a3b5262370ebc709",
         "parameters": {}
    }]
}'
```

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

| Property | Description | Mandatory |
| --- | --- | --- |
| `application-id` | The ID of application created. | Yes |
| `data` | An array that contains a JSON object with each object in the array representing a document. Any parameters passed as part of this array overrides the global parameters specified outside the `data` array. To view a list of parameters that can be overridden, see the list below for more information. | Yes |
| `language` | Language of input text. The default value is `en`. | No |
| `content-type` | Used to indicate whether the input is part of the request body or a signed url for an S3 bucket. The default for this property is `inline`. | Yes |
| `encoding` | The encoding format of input text. This can be `utf-8` or `utf-16`. The default for this property is `utf-8`. | No |
| `threshold` | The threshold of score (0 to 1) above which the results need to be returned. Use the value 0, to return all results. The default for this property is `0`. | No |
| `top-N` | The number of results to be returned (cannot be a negative integer). Use the value 0, to return all results. When used in conjunction with `threshold`, the number of results returned is the lesser of either limit set. The default for this property is `0`. | No |
| `custom` | Any custom parameters to be passed. This property requires a valid JSON object to function. | No |
| `content-id` | The unique ID for the data element thats returned in the response. If this is not passed an auto-generated ID is assigned. | No |
| `content` | The content used by the keyword extraction service. The content can be raw text (‘inline’ content-type). <br> If the content is a file on S3 ('s3-bucket' content-type), pass the signed url. When content is part of request-body, the list of data elements should have only one object. If more than one object is passed, only the first object is processed. | Yes |

The following parameters can be overridden by adding values to them in the `data` array:

- `content`
- `content-id`
- `language`
- `content-type`
- `encoding`
- `threshold`
- `top-N`
- `custom`

Available custom parameters:

| Name | Description | Mandatory |
| --- | --- | --- |
| `min-n` | The minimum number of words required in the keywords. | No |
| `entity-types` | Types of entities to be returned. See the named entity recognition table at the beginning of this document. | No |

**Response**

A successful response returns a JSON object containing extracted keywords in the `response` array. 

```json
{
  "status": 200,
  "cas_responses": [
    {
      "status": 200,
      "analyzer_id": "Feature:cintel-ner:Service-1a35aefb0f0f4dc0a3b5262370ebc709",
      "content_id": "",
      "result": {
        "response_type": "feature",
        "response": [
          {
            "feature_value": [
              {
                "feature_value": "success",
                "feature_name": "status"
              },
              {
                "feature_name": "labels",
                "feature_value": [
                  {
                    "feature_name": "atp player",
                    "feature_value": [
                      {
                        "feature_value": "KEYWORD",
                        "feature_name": "type"
                      },
                      {
                        "feature_value": 0.007743432063478832,
                        "feature_name": "score"
                      }
                    ]
                  },
                  {
                    "feature_name": "Novak Djokovic",
                    "feature_value": [
                      {
                        "feature_name": "type",
                        "feature_value": "PERSON"
                      },
                      {
                        "feature_name": "score",
                        "feature_value": 0
                      }
                    ]
                  },
                  {
                    "feature_value": [
                      {
                        "feature_name": "type",
                        "feature_value": "KEYWORD"
                      },
                      {
                        "feature_value": 0.00899321792126428,
                        "feature_name": "score"
                      }
                    ],
                    "feature_name": "player council"
                  },
                  {
                    "feature_value": [
                      {
                        "feature_value": "KEYWORD",
                        "feature_name": "type"
                      },
                      {
                        "feature_value": 0.007743432063478832,
                        "feature_name": "score"
                      }
                    ],
                    "feature_name": "kermodes regime"
                  },
                  {
                    "feature_value": [
                      {
                        "feature_name": "type",
                        "feature_value": "KEYWORD"
                      },
                      {
                        "feature_name": "score",
                        "feature_value": 0.0006052376660884209
                      }
                    ],
                    "feature_name": "atp player council"
                  }
                ]
              }
            ],
            "feature_name": "abc123"
          }
        ]
      }
    }
  ],
  "error": []
}
```

