---
keywords: Visual similarity;visual similarity;ccai api
solution: Experience Platform
title: Visual similarity API endpoint
topic: Developer guide
description: The visual similarity service, when given an image, automatically finds visually similar images from a catalog.
---

# Visual similarity API endpoint

>[!NOTE]
>
>Content and Commerce AI is in beta. The documentation is subject to change.

The visual similarity service, when given an image, automatically finds visually similar images from a catalog. 

The following image was used in the example request below:

![test image](../images/test_image.jpeg)

**API format**

```http
POST /sensei-core/v1/predict
```

**Request**

The request to the visual similarity endpoint (POST) must include certain input parameters. See the table below for more information on the mandatory input parameters.

```SHELL
curl -i -X POST https://sensei-stage-ew1.adobe.io/sensei-core/v1/predict \
  -H 'Authorization: Bearer $API_TOKEN' \
  -H 'Content-Type: multipart/form-data' \
  -H 'cache-control: no-cache,no-cache' \
  -H 'x-api-key: $API_KEY' \
  -F file=@test_image.jpg \
  -F 'contentAnalyzerRequests={
   "enable_diagnostics":"true",
   "requests":[
     {
         "analyzer_id": "Feature:cintel-deep-product-search:Service-316a8cf750c6440396061c8f73a7a585",
         "parameters": {
          "application-id": "1234", 
          "content-type": "inline", 
          "encoding": "jpeg", 
          "threshold": "0", 
          "top-N": "0", 
          "custom": {}, 
          "data": [{
            "content-id": "0987", 
            "content": "inline-image", 
            "content-type": "inline", 
            "encoding": "jpeg", 
            "threshold": "0", 
            "top-N": "0", 
            "historic-metadata": [], 
            "custom": {}
            }]
          }
      }
    ]
}'
```

**Mandatory input parameters**

| Property | Description | Mandatory |
| --- | --- | --- |
| `analyzer_id` | The [!DNL Sensei] service ID that your request is deployed under. | Yes |
| `application-id` | The ID of your created application. | Yes |
| `data` | An array that contains a JSON object with each object in the array representing an image. Any parameters passed as part of this array overrides the global parameters specified outside the `data` array. To view a list of parameters that can be overridden, see the optional input parameters below.  | Yes |
| `content-id` | The unique ID for the data element that is returned in the response. If this is not passed, an auto-generated ID is assigned. | No |
| `content` | In the event that the image is part of request-body, use `-F file=@<filename>` in the curl command to pass the image, leaving this parameter as an empty string. <br> If the image is a file on S3, pass the signed url. When content is part of request-body, the list of data elements should have only one object. If more than one object is passed, only the first object is processed. | Yes |
| `content-type` | Used to indicate whether the input is part of the request body or a signed url for an S3 bucket. The default for this property is `inline`. | Yes |
| `encoding` | The file format of the input image. Currently only JPEG and PNG images can be processed. The default for this property is `jpeg`. | Yes |
| `threshold` | The threshold of score (0 to 1) above which the results need to be returned. Use the value 0, to return all results. The default for this property is `0`. | Yes |
| `top-N` | The number of results to be returned (cannot be a negative integer). Use the value 0, to return all results. When used in conjunction with `threshold`, the number of results returned is the lesser of either limit set. The default for this property is `0`. | Yes |
| `custom` | Any custom parameters to be passed. | No |
| `historic-metadata` | An array that can be passed metadata. | No |

The following parameters can be overridden by adding values to them in the `data` array:

- `content-id`
- `content`
- `content-type`
- `encoding`
- `threshold`
- `top-N`
- `historic-metadata`
- `custom`

**Response**

A successful response returns a `response` array that contains a `feature_value` and `feature_name` for each of the visually similar images found in the catalog.

```json
{
  "status": 200,
  "content_id": "test_image.jpg",
  "cas_responses": [
    {
      "status": 200,
      "analyzer_id": "Feature:cintel-deep-product-search:Service-316a8cf750c6440396061c8f73a7a585",
      "content_id": "test_image.jpg",
      "result": {
        "response_type": "feature",
        "response": [
          {
            "feature_value": [
              {
                "feature_value": "678",
                "feature_name": "G34WS945.F1"
              },
              {
                "feature_value": "678",
                "feature_name": "1431RDM JANELLE RAW JACKE"
              },
              {
                "feature_value": "657",
                "feature_name": "GF4045877841 CARLA FLR"
              },
              {
                "feature_name": "1707-686-SGU PATCH XYZ",
                "feature_value": "657"
              },
              {
                "feature_name": "5495MJT AJA BLK",
                "feature_value": "646"
              },
              {
                "feature_name": "IDEAL",
                "feature_value": "645"
              },
              {
                "feature_value": "644",
                "feature_name": "HCAJRA439 CALI JEAN"
              },
              {
                "feature_name": "KT279RK-ONL",
                "feature_value": "644"
              },
              {
                "feature_name": "SP190404-ELLIS",
                "feature_value": "642"
              },
              {
                "feature_name": "GF4174848718 KENDALL DIS",
                "feature_value": "640"
              }
            ],
            "feature_name": "visual_similarity"
          }
        ]
      }
    }
  ],
  "error": []
}
```