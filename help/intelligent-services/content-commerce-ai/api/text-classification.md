---
keywords: text classification;Text classification
solution: Experience Platform
title: Text classification API endpoint
topic: Developer guide
description: The text classification service, when given a text fragment, can classify it into one or more labels. The classification can be single-label, multi-label, or hierarchical.
---

# Text classification API endpoint

>[!NOTE]
>
>Content and Commerce AI is in beta. The documentation is subject to change.

The text classification service, when given a text fragment, can classify it into one or more labels. The classification can be single-label, multi-label, or hierarchical.

Text classification uses a [FastText](https://fasttext.cc/) based model that has been trained using custom data.

**API format**

```http
POST /sensei-core/v1/predict
```

**Request**

The request to the text classification endpoint (POST) must include certain input parameters. See the table below for more information on the mandatory input parameters.

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
    \"data\": [{
      \"content-id\": \"abc123\", 
      \"content\": \"Server and Workstation Processors, Microcode Update is a self-extracting executable file containing the latest beta microcode updates (System Configuration Data) and software license agreement.\"
      }]
    }" \
  -F 'contentAnalyzerRequests={
    "enable_diagnostics":"true",
    "requests":[{
         "analyzer_id": "Feature:cintel-text-classifier:Service-38a4cc7b286449e6bc1977f59df01b47",
         "parameters": {}
    }]
}'
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
| `content` | The content used by the text classification service. The content can be raw text (‘inline’ content-type). <br> If the content is a file on S3 ('s3-bucket' content-type), pass the signed url. | Yes |

The following parameters can be overridden by adding values to them in the `data` array:

- `content`
- `content-id`
- `language`
- `content-type`
- `encoding`
- `threshold`
- `top-N`
- `custom`

**Response**

A successful response returns a JSON object containing classified text in the `response` array. 

```json
{
  "status": 200,
  "cas_responses": [
    {
      "status": 200,
      "analyzer_id": "Feature:cintel-text-classifier:Service-38a4cc7b286449e6bc1977f59df01b47",
      "content_id": "",
      "result": {
        "response_type": "feature",
        "response": [
          {
            "feature_name": "abc123",
            "feature_value": [
              {
                "feature_value": [
                  {
                    "feature_value": 0.6899315714836121,
                    "feature_name": "Embedded & IoT"
                  }
                ],
                "feature_name": "labels"
              },
              {
                "feature_name": "status",
                "feature_value": "success"
              }
            ]
          }
        ]
      }
    }
  ],
  "error": []
}
```