---
keywords: Visual similarity;visual similarity;ccai api
solution: Experience Platform
title: Visual Similarity in the Content and Commerce AI API
description: The visual similarity service, when given an image, automatically finds visually similar images from a catalog.
exl-id: fe31d9be-ee42-44fa-b83f-3b8a718cb4e3
---
# Visual similarity 

>[!NOTE]
>
>[!DNL Content and Commerce AI] is in beta. The documentation is subject to change.

The visual similarity service, when given an image, automatically finds visually similar images from a catalog. 

The following image was used in the example request shown in this document:

![test image](../images/Query_Image.jpeg)

**API format**

```http
POST /services/v1/predict
```

**Request**

The following request retrieves visually similar images from a catalog, based on the input parameters provided in the payload. See the table below the example payload for more information on the input parameters shown.

>[!CAUTION]
>
>`analyzer_id` determines which [!DNL Sensei Content Framework] is used. Please check that you have the proper `analyzer_id` before making your request. Contact the Content and Commerce AI beta team to receive your `analyzer_id` for this service.

```SHELL
curl -i -X POST https://sensei.adobe.io/services/v1/predict \
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

| Property | Description | Mandatory |
| --- | --- | --- |
| `analyzer_id` | The [!DNL Sensei] service ID that your request is deployed under. This ID determines which of the [!DNL Sensei Content Frameworks] are used. For custom services, please contact the Content and Commerce AI team to set up a custom ID. | Yes |
| `application-id` | The ID of your created application. | Yes |
| `data` | An array that contains a JSON object with each object in the array representing an image. Any parameters passed as part of this array overrides the global parameters specified outside the `data` array. Any of the remaining properties outlined below in this table can be overridden from within `data`.  | Yes |
| `content-id` | The unique ID for the data element that is returned in the response. If this is not passed, an auto-generated ID is assigned. | No |
| `content` | The content to be analyzed by the visual similarity service. In the event that the image is part of the request body, use `-F file=@<filename>` in the curl command to pass the image, leaving this parameter as an empty string. <br> If the image is a file on S3, pass the signed url. When content is part of the request body, the list of data elements should have only one object. If more than one object is passed, only the first object is processed. | Yes |
| `content-type` | Used to indicate whether the input is part of the request body or a signed url for an S3 bucket. The default for this property is `inline`. | No |
| `encoding` | The file format of the input image. Currently only JPEG and PNG images can be processed. The default for this property is `jpeg`. | No |
| `threshold` | The threshold of score (0 to 1) above which the results need to be returned. Use the value `0` to return all results. The default for this property is `0`. | No |
| `top-N` | The number of results to be returned (cannot be a negative integer). Use the value `0` to return all results. When used in conjunction with `threshold`, the number of results returned is the lesser of either limit set. The default for this property is `0`. | No |
| `custom` | Any custom parameters to be passed. | No |
| `historic-metadata` | An array that can be passed metadata. | No |

**Response**

A successful response returns a `response` array that contains a `feature_value` and `feature_name` for each of the visually similar images found in the catalog.

The following visually similar images were returned in the example response shown below:

![similar images](../images/results.jpg)

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
