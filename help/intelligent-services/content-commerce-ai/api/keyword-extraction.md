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
            "repo:path": "https://nikotatmg.s3.us-east-2.amazonaws.com/simple-text.pdf",
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
| `analyzer_id` | The [!DNL Sensei] service ID that your request is deployed under. This ID determines which of the [!DNL Sensei Content Frameworks] are used. For custom services, please contact the Content and Commerce AI team to set up a custom ID. | Yes |
| `application-id` | The ID of the created application. | Yes |
| `data` | An array that contains a JSON object with each object in the array representing a document. Any parameters passed as part of this array overrides the global parameters specified outside the `data` array. Any of the remaining properties outlined below in this table can be overridden from within `data`. | Yes |
| `language` | Language of input text. The default value is `en`. | No |
| `content-type` | Used to indicate whether the input is part of the request body or a signed url for an S3 bucket. The default for this property is `inline`. | Yes |
| `encoding` | The encoding format of input text. This can be `utf-8` or `utf-16`. The default for this property is `utf-8`. | No |
| `threshold` | The threshold of score (0 to 1) above which the results need to be returned. Use the value `0` to return all results. The default for this property is `0`. | No |
| `top-N` | The number of results to be returned (cannot be a negative integer). Use the value `0` to return all results. When used in conjunction with `threshold`, the number of results returned is the lesser of either limit set. The default for this property is `0`. | No |
| `custom` | Any custom parameters to be passed. This property requires a valid JSON object to function. See the [appendix](#appendix) for more information on the custom parameters. | No |
| `content-id` | The unique ID for the data element thats returned in the response. If this is not passed, an auto-generated ID is assigned. | No |
| `content` | The content used by the keyword extraction service. The content can be raw text ('inline' content-type). <br> If the content is a file on S3 ('s3-bucket' content-type), pass the signed url. When content is part of request-body, the list of data elements should have only one object. If more than one object is passed, only the first object is processed. | Yes |

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

## PDF keyword extraction {#pdf-extraction}

Keyword extraction service supports PDFs, however, you need to use a new AnalyzerID for PDF files and change the document type to PDF. See the example below for more information.

**API format**

```http
POST /services/v1/predict
```

**Request**

The following request extracts keywords from a PDF document based on the input parameters provided in the payload.

>[!CAUTION]
>
>`analyzer_id` determines which [!DNL Sensei Content Framework] is used. Please check that you have the proper `analyzer_id` before making your request. For PDF keyword extraction, the `analyzer_id` ID is:
>`Feature:cintel-ner:Service-7a87cb57461345c280b62470920bcdc5`

```SHELL
curl -w'\n' -i -X POST https://sensei.adobe.io/services/v1/predict \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "Content-Type: multipart/form-data" \
  -H "cache-control: no-cache,no-cache" \
  -H "x-api-key: {API_KEY}" \
  -F file=@TestPDF.pdf \
  -F 'contentAnalyzerRequests={
    "enable_diagnostics":"true",
    "requests":[{
    "analyzer_id": "Feature:cintel-ner:Service-7a87cb57461345c280b62470920bcdc5",
    "parameters": {
      "application-id": "1234",
      "content-type": "file",
      "encoding": "pdf",
      "threshold": "0.01",
      "top-N": "0",
      "custom": {},
      "data": [{
        "content-id": "abc123",
        "content": "file",
        }]
      }
    }]
  }'
```

| Property | Description | Mandatory |
| --- | --- | --- |
| `analyzer_id` | The [!DNL Sensei] service ID that your request is deployed under. This ID determines which of the [!DNL Sensei Content Frameworks] are used. For custom services, please contact the Content and Commerce AI team to set up a custom ID. | Yes |
| `application-id` | The ID of the created application. | Yes |
| `data` | An array that contains a JSON object with each object in the array representing a document. Any parameters passed as part of this array overrides the global parameters specified outside the `data` array. Any of the remaining properties outlined below in this table can be overridden from within `data`. | Yes |
| `language` | Language of input. The default value is `en` (english). | No |
| `content-type` | Used to indicate the inputs content type. This should be set to `file`. | Yes |
| `encoding` | The encoding format of the input. This should be set to `pdf`. More encoding types are set to be supported at a later date. | Yes |
| `threshold` | The threshold of score (0 to 1) above which the results need to be returned. Use the value `0` to return all results. The default for this property is `0`. | No |
| `top-N` | The number of results to be returned (cannot be a negative integer). Use the value `0` to return all results. When used in conjunction with `threshold`, the number of results returned is the lesser of either limit set. The default for this property is `0`. | No |
| `custom` | Any custom parameters to be passed. This property requires a valid JSON object to function. See the [appendix](#appendix) for more information on the custom parameters. | No |
| `content-id` | The unique ID for the data element thats returned in the response. If this is not passed, an auto-generated ID is assigned. | No |
| `content` | This should be set to `file`. | Yes |

**Response**

A successful response returns a JSON object containing extracted keywords in the `response` array. 

```json
{
  "statusCode": 200,
  "body": {
    "type": "JSON",
    "matchType": "strict",
    "json": {
      "status": 200,
      "content_id": "161hw2.pdf",
      "cas_responses": [
        {
          "status": 200,
          "analyzer_id": "Feature:cintel-ner:Service-7a87cb57461345c280b62470920bcdc5",
          "content_id": "161hw2.pdf",
          "result": {
            "response_type": "feature",
            "response": [
              {
                "feature_value": [
                  {
                    "feature_name": "status",
                    "feature_value": "success"
                  },
                  {
                    "feature_value": [
                      {
                        "feature_name": "delbick",
                        "feature_value": [
                          {
                            "feature_name": "score",
                            "feature_value": 0.03673855028832046
                          },
                          {
                            "feature_name": "type",
                            "feature_value": "KEYWORD"
                          }
                        ]
                      },
                      {
                        "feature_name": "Ci",
                        "feature_value": [
                          {
                            "feature_name": "score",
                            "feature_value": 0
                          },
                          {
                            "feature_name": "type",
                            "feature_value": "PERSON"
                          }
                        ]
                      }
                    ],
                    "feature_name": "labels"
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
  }
}
```

For more information and a sample on using PDF extraction containing instructions on how to set up, deploy, and integrate with the AEM cloud service. Visit the [CCAI PDF extraction worker github repository](https://github.com/adobe/asset-compute-example-workers/tree/master/projects/worker-ccai-pdfextract).

## Appendix {#appendix}

The following table contains the available parameters that can be utilized from within `custom`.

| Name | Description | Mandatory |
| --- | --- | --- |
| `min-n` | The minimum number of words required in the keywords. | No |
| `entity-types` | Types of entities to be returned. See the named entity recognition table at the beginning of this document. | No |
