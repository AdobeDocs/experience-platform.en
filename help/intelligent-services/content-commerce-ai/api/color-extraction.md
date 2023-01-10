---
keywords: Experience Platform;getting started;content ai;commerce ai;content and commerce ai;color extraction;Color extraction
solution: Experience Platform
title: Color Extraction in the Content and Commerce AI API
description: The color extraction service, when given an image, can compute the histogram of pixel colors and sort them by dominant colors into buckets.
exl-id: 6b3b6314-cb67-404f-888c-4832d041f5ed
---
# Color extraction

>[!NOTE]
>
>[!DNL Content and Commerce AI] is in beta. The documentation is subject to change.

The color extraction service, when given an image, can compute a histogram of pixel colors and sort them by dominant colors into buckets. The colors in the image pixels are bucketed into 40 predominant colors which are representative of the color spectrum. A histogram of color values is then computed among those 40 colors. The service has two variants:

**Color extraction (full image)**

This method extracts a color histogram across the entire image.

**Color extraction (with mask)**

This method uses a deep-learning-based foreground extractor to identify objects in the foreground. The model is trained on a catalog of e-commerce images. Once the foreground object is extracted, a histogram is computed over the dominant colors as previously described.

The following image was used in the example shown in this document:

![test image](../images/QQAsset1.jpg)

**API format**

```http
POST /services/v1/predict
```

**Request**

The following example request uses the full-image method for color extraction.

The following request extracts colors from a image based on the input parameters provided in the payload. See the table below the example payload for more information on the input parameters shown.

>[!CAUTION]
>
>`analyzer_id` determines which [!DNL Sensei Content Framework] is used. Please check that you have the proper `analyzer_id` before making your request. For color extraction service, the `analyzer_id` ID is:
>`Feature:image-color-histogram:Service-6fe52999293e483b8e4ae9a95f1b81a7`

```SHELL
curl -i -X POST https://sensei.adobe.io/services/v1/predict \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: multipart/form-data' \
  -H 'x-api-key: {API_KEY}' \
  -H 'cache-control: no-cache,no-cache' \
  -F file=@test_image.jpg \
  -F 'contentAnalyzerRequests={
   "enable_diagnostics":"true",
   "requests":[
     {
         "analyzer_id": "Feature:image-color-histogram:Service-6fe52999293e483b8e4ae9a95f1b81a7",
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
            "custom": {"exclude_mask": 1}
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
| `data` | An array that contains JSON objects. Each object in the array represents an image. Any parameters passed as part of this array overrides the global parameters specified outside the `data` array. Any of the remaining properties outlined below in this table can be overridden from within `data`.  | Yes |
| `content-id` | The unique ID for the data element that is returned in the response. If this is not passed, an auto-generated ID is assigned. | No |
| `content` | The content to be analyzed by the color extraction service. In the event that the image is part of the request body, use `-F file=@<filename>` in the curl command to pass the image, leaving this parameter as an empty string. <br> If the image is a file on S3, pass the signed url. When content is part of the request body, the list of data elements should have only one object. If more than one object is passed, only the first object is processed. | Yes |
| `content-type` | Used to indicate whether the input is part of the request body or a signed url for an S3 bucket. The default for this property is `inline`. | No |
| `encoding` | The file format of the input image. Currently only JPEG and PNG images can be processed. The default for this property is `jpeg`. | No |
| `threshold` | The threshold of score (0 to 1) above which the results need to be returned. Use the value `0` to return all results. The default for this property is `0`. | No |
| `top-N` | The number of results to be returned (cannot be a negative integer). Use the value `0` to return all results. When used in conjunction with `threshold`, the number of results returned is the lesser of either limit set. The default for this property is `0`. | No |
| `custom` | Any custom parameters to be passed. | No |
| `historic-metadata` | An array that can be passed metadata. | No |

**Response**

A successful response returns the details of the extracted colors. Each color is represented by a `feature_value` key, which contains the following information:

- A color name
- The percentage this color appears in relation to the image
- The RGB value of the color

In the first example object below, the `feature_value` of `White,0.59,251,251,243` means the color found is white, white is found in 59% of the image, and has an RGB value of 251,251,243.

```json
{
  "status": 200,
  "content_id": "test_image.jpg",
  "cas_responses": [
    {
      "status": 200,
      "analyzer_id": "Feature:image-color-histogram:Service-e952f4acd7c2425199b476a2eb459635",
      "content_id": "test_image.jpg",
      "result": {
        "response_type": "feature",
        "response": [
          {
            "feature_value": [
              {
                "feature_name": "color_name_and_rgb",
                "feature_value": "White,0.59,251,251,243"
              },
              {
                "feature_value": "Orange,0.30,248,169,48",
                "feature_name": "color_name_and_rgb"
              },
              {
                "feature_name": "color_name_and_rgb",
                "feature_value": "Mustard,0.08,251,199,77"
              },
              {
                "feature_name": "color_name_and_rgb",
                "feature_value": "Gold,0.02,250,191,55"
              }
            ],
            "feature_name": "color"
          }
        ]
      }
    }
  ],
  "error": []
}
```

| Property | Description |
| --- | --- |
| `content_id` | The name of the image that was uploaded in your POST request. |
| `feature_value` | An array whose objects contain keys with the same property name. These keys contain a string that represents the color name, a percentage this color appears in relation to the image sent in the `content_id`, and the RGB value of the color. |
