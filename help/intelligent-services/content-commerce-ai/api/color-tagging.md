---
keywords: Experience Platform;getting started;content;content tagging;color tagging;color extraction;
solution: Experience Platform
title: Color Tagging in the Content Tagging API
description: The Color Tagging service, when given an image, can compute the histogram of pixel colors and sort them by dominant colors into buckets.
exl-id: 6b3b6314-cb67-404f-888c-4832d041f5ed
---
# Color tagging

The color tagging service, when given an image, can compute a histogram of pixel colors and sort them by dominant colors into buckets. The colors in the image pixels are bucketed into 40 predominant colors which are representative of the color spectrum. A histogram of color values is then computed among those 40 colors. The service has two variants:

**Color tagging (full image)**

This method extracts a color histogram across the entire image.

**Color tagging (with mask)**

This method uses a deep-learning-based foreground extractor to identify objects in the foreground. Once the foreground objects are extracted, a histogram is computed over the dominant colors as previously described for both, the foreground and background regions, along with the entire image.

**Tone Extraction**

On top of the above variants, one can configure the service to retrieve a histogram of tones over the -

- Overall image (when using full image variant)
- Overall image and foreground and background regions (when using the variant with masking).

The following image was used in the example shown in this document:

![test image](../images/QQAsset1.jpg)

**API format**

```http
POST /services/v2/predict
```

**Request - Full Image Variant**

The following example request uses the full-image method for color tagging.

The following request extracts colors from an image based on the input parameters provided in the payload. See the table below the example payload for more information on the input parameters shown.

```SHELL
curl -w'\n' -i -X POST https://sensei.adobe.io/services/v2/predict \
-H 'Prefer: respond-async, wait=59' \
-H "x-api-key: $API_KEY" \
-H "content-type: multipart/form-data" \
-H "authorization: Bearer $API_TOKEN" \
-F 'contentAnalyzerRequests={
  "sensei:name": "Feature:cintel-image-classifier:Service-60887e328ded447d86e01122a4f19c58",
  "sensei:invocation_mode": "synchronous",
  "sensei:invocation_batch": false,
  "sensei:engines": [
    {
      "sensei:execution_info": {
        "sensei:engine": "Feature:cintel-image-classifier:Service-60887e328ded447d86e01122a4f19c58"
      },
      "sensei:inputs": {
        "documents": [{
            "sensei:multipart_field_name": "infile_1",
            "dc:format": "image/jpg"
          }]
      },
      "sensei:params": {
        "application-id": "1234",
        "enable_mask": 0
      },
      "sensei:outputs":{
        "result" : {
          "sensei:multipart_field_name" : "result",
          "dc:format": "application/json"
        }
      }
    }
  ]
}' \
-F 'infile_1=@1431RDMJANELLERAWJACKE_2.jpg'
```

>Note: Additionally, we also set the `retrieve_tone` parameter to `true` in the above request. This enables us to retrieve a tone distribution histogram over warm, neutral and cool tones in the overall, foreground and background regions of the image.

| Property | Description | Mandatory |
| --- | --- | --- |
| `application-id` | The ID of your created application. | Yes |
| `documents` | A list of JSON elements with each item in the list representing one document. | Yes |
| `top_n` | The number of results to be returned (this cannot be a negative integer). Use the value `0` to return all results. When used in conjunction with `threshold`, the number of results returned is the lesser of either limit set. The default for this property is `0`. | No |
| `min_coverage` | Threshold of coverage above which the results need to be returned. Exclude the parameter to return all results. | No |
| `resize_image` | Indicates whether the input image is to be resized. By default the images are resized to 320*320 pixels before color tagging is performed. For debugging purposes we can allow the code to run on full-image as well, by setting this to False. | No |
| `enable_mask` | Enables/Disables color tagging within mask. | No |

| Name | Data Type | Required | Default | Values | Description |
| -----| --------- | -------- | ------- | ------ | ----------- |
| `repo:path` | string | - | - | - | Presigned url of the document from which key phrases are to be extracted. |
| `sensei:repoType` | string | - | - | HTTPS | Type of repo where the image is being stored. |
| `sensei:multipart_field_name` | string | - | - | - | Use this when passing an image file as a multipart argument instead of using presigned urls. |
| `dc:format` | string | Yes | - | “image/jpg”, <br> “image/jpeg”, <br>“image/png”, <br>“image/tiff” | Image encoding is checked against allowed input encoding types before being processed. |

**Response - Full Image Variant**

A successful response returns the details of the extracted colors. Each color is represented by a `feature_value` key, which contains the following information:

- A color name
- The percentage this color appears in relation to the image
- The RGB value of the color

In the first example object below, the `feature_value` of `Mud_Green,0.069,102,72,95` means the color found is mud green, mud green is found in 6.9% of the image, and has an RGB value of 102,72,95.

```json
{
  "status": 200,
  "content_id": "test_image.jpg",
  "cas_responses": [
    {
{
  "statuses": [
    {
      "sensei:engine": "Feature:cintel-image-classifier:Service-60887e328ded447d86e01122a4f19c58",
      "invocations": [
        {
          "sensei:outputs": {
            "result": {
              "sensei:multipart_field_name": "result",
              "dc:format": "application/json"
            }
          },
          "message": null,
          "status": "200"
        }
      ]
    }
  ],
  "request_id": "hsxycVq5Q9KbZ7MWrt6NXcSNWbonSLf3"
}

[
  {
    "request_element_id": "0",
    "colors": {
      "Mud_Green": {
        "coverage": 0.0694,
        "rgb": {
          "red": 102,
          "blue": 72,
          "green": 95
        }
      },
      "Dark_Brown": {
        "coverage": 0.1226,
        "rgb": {
          "red": 113,
          "blue": 77,
          "green": 84
        }
      },
      "Pink": {
        "coverage": 0.0731,
        "rgb": {
          "red": 234,
          "blue": 201,
          "green": 209
        }
      },
      "Dark_Gray": {
        "coverage": 0.1533,
        "rgb": {
          "red": 63,
          "blue": 58,
          "green": 59
        }
      },
      "Olive": {
        "coverage": 0.492,
        "rgb": {
          "red": 177,
          "blue": 126,
          "green": 170
        }
      },
      "Brown": {
        "coverage": 0.0896,
        "rgb": {
          "red": 141,
          "blue": 85,
          "green": 105
        }
      }
    }
  }
]
}
```
