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

This method uses a deep-learning based foreground extractor to identify objects in the foreground. Once the foreground objects are extracted, a histogram is computed over the dominant colors for both the foreground and background regions, along with the entire image.

**Tone extraction**

In addition to the variants mentioned above, you can configure the service to retrieve a histogram of tones for:

- The overall image (when using full image variant)
- The overall image, and foreground and background regions (when using the variant with masking)

The following image was used in the example shown in this document:

![test image](../images/QQAsset1.jpg)

**API format**

```http
POST /services/v2/predict
```

**Request - full image variant**

The following example request uses the full-image method for color tagging and extracts colors from an image based on the input parameters provided in the payload. See the table below the example payload for more information on the input parameters shown.

```SHELL
curl -w'\n' -i -X POST https://sensei.adobe.io/services/v2/predict \
-H 'Prefer: respond-async, wait=59' \
-H "x-api-key: $API_KEY" \
-H "content-type: multipart/form-data" \
-H "authorization: Bearer $API_TOKEN" \
-F 'contentAnalyzerRequests={
  "sensei:name": "Feature:autocrop:Service-af865523d46547e2b17fdf9b38e32a72",
  "sensei:invocation_mode": "synchronous",
  "sensei:invocation_batch": false,
  "sensei:engines": [
    {
      "sensei:execution_info": {
        "sensei:engine": "Feature:autocrop:Service-af865523d46547e2b17fdf9b38e32a72"
      },
      "sensei:inputs": {
        "documents": [{
            "sensei:multipart_field_name": "infile_1",
            "dc:format": "image/jpg"
          }]
      },
      "sensei:params": {
        "top_n": 5,
        "min_coverage": 0.005      
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

**Response - full image variant**

A successful response returns the details of the extracted colors. Each color is represented by a `feature_value` key, which contains the following information:

- A color name
- The percentage this color appears in relation to the image
- The RGB value of the color

`"White":{"coverage":0.5834,"rgb":{"red":254,"green":254,"blue":243}}`means the color found is white, which is found in 58.34% of the image, and has an average RGB value of 254, 254, 243.

```json
{
    "statuses": [{
        "sensei:engine": "Feature:autocrop:Service-af865523d46547e2b17fdf9b38e32a72",
        "invocations": [{
            "sensei:outputs": {
                "result": {
                    "sensei:multipart_field_name": "result",
                    "dc:format": "application/json"
                }
            },
            "message": null,
            "status": "200"
        }]
    }],
    "request_id": "bfpzaJxKDxtgxpjUj5QDrN1jasjUw2RM"
}  
 
[{
    "overall": {
        "colors": {
            "White": {
                "coverage": 0.5834,
                "rgb": {
                    "red": 254,
                    "green": 254,
                    "blue": 243
                }
            },
            "Orange": {
                "coverage": 0.254,
                "rgb": {
                    "red": 249,
                    "green": 165,
                    "blue": 45
                }
            },
            "Gold": {
                "coverage": 0.0817,
                "rgb": {
                    "red": 253,
                    "green": 188,
                    "blue": 58
                }
            },
            "Mustard": {
                "coverage": 0.0727,
                "rgb": {
                    "red": 253,
                    "green": 207,
                    "blue": 84
                }
            },
            "Cream": {
                "coverage": 0.0082,
                "rgb": {
                    "red": 253,
                    "green": 236,
                    "blue": 174
                }
            }
        }
    }
}]
```

Notice that the result here has color extracted on the "overall" image region.

**Request - masked image variant**

The following example request uses the masking method for color tagging. This is enabled by setting the `enable_mask` parameter to `true` in the request.

```SHELL
curl -w'\n' -i -X POST https://sensei.adobe.io/services/v2/predict \
-H 'Prefer: respond-async, wait=59' \
-H "x-api-key: $API_KEY" \
-H "content-type: multipart/form-data" \
-H "authorization: Bearer $API_TOKEN" \
-F 'contentAnalyzerRequests={
  "sensei:name": "Feature:autocrop:Service-af865523d46547e2b17fdf9b38e32a72",
  "sensei:invocation_mode": "synchronous",
  "sensei:invocation_batch": false,
  "sensei:engines": [
    {
      "sensei:execution_info": {
        "sensei:engine": "Feature:autocrop:Service-af865523d46547e2b17fdf9b38e32a72"
      },
      "sensei:inputs": {
        "documents": [{
            "sensei:multipart_field_name": "infile_1",
            "dc:format": "image/jpg"
          }]
      },
      "sensei:params": {
        "top_n": 5,
        "min_coverage": 0.005,
        "enable_mask": true,
        "retrieve_tone": true     
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

>[!NOTE] 
>
>Additionally, the `retrieve_tone` parameter is also set to `true` in the above request. This enables us to retrieve a tone distribution histogram over warm, neutral, and cool tones in the overall, foreground and background regions of the image.

**Response - masked image variant**

```json
{
    "statuses": [{
        "sensei:engine": "Feature:autocrop:Service-af865523d46547e2b17fdf9b38e32a72",
        "invocations": [{
            "sensei:outputs": {
                "result": {
                    "sensei:multipart_field_name": "result",
                    "dc:format": "application/json"
                }
            },
            "message": null,
            "status": "200"
        }]
    }],
    "request_id": "gpeCyJsrJvOWd94WwZOyPBPrKi2BQyla"
}  
 
 
[{
    "overall": {
        "colors": {
            "White": {
                "coverage": 0.5834,
                "rgb": {
                    "red": 254,
                    "green": 254,
                    "blue": 243
                }
            },
            "Orange": {
                "coverage": 0.254,
                "rgb": {
                    "red": 249,
                    "green": 165,
                    "blue": 45
                }
            },
            "Gold": {
                "coverage": 0.0817,
                "rgb": {
                    "red": 253,
                    "green": 188,
                    "blue": 58
                }
            },
            "Mustard": {
                "coverage": 0.0727,
                "rgb": {
                    "red": 253,
                    "green": 207,
                    "blue": 84
                }
            },
            "Cream": {
                "coverage": 0.0082,
                "rgb": {
                    "red": 253,
                    "green": 236,
                    "blue": 174
                }
            }
        },
        "tones": {
            "warm": 0.4084,
            "neutral": 0.5916,
            "cool": 0
        }
    },
    "foreground": {
        "colors": {
            "Orange": {
                "coverage": 0.6022,
                "rgb": {
                    "red": 249,
                    "green": 165,
                    "blue": 45
                }
            },
            "Gold": {
                "coverage": 0.1935,
                "rgb": {
                    "red": 253,
                    "green": 188,
                    "blue": 58
                }
            },
            "Mustard": {
                "coverage": 0.1722,
                "rgb": {
                    "red": 253,
                    "green": 207,
                    "blue": 84
                }
            },
            "Cream": {
                "coverage": 0.0173,
                "rgb": {
                    "red": 253,
                    "green": 235,
                    "blue": 170
                }
            },
            "Yellow": {
                "coverage": 0.0148,
                "rgb": {
                    "red": 254,
                    "green": 229,
                    "blue": 117
                }
            }
        },
        "tones": {
            "warm": 0.9827,
            "neutral": 0.0173,
            "cool": 0
        }
    },
    "background": {
        "colors": {
            "White": {
                "coverage": 0.9923,
                "rgb": {
                    "red": 254,
                    "green": 254,
                    "blue": 243
                }
            },
            "Dark_Brown": {
                "coverage": 0.0077,
                "rgb": {
                    "red": 83,
                    "green": 68,
                    "blue": 57
                }
            }
        },
        "tones": {
            "warm": 0,
            "neutral": 1.0,
            "cool": 0
        }
    }
}]
```

In addition to the colors from the overall image, you can also see colors from the foreground and background regions now. Since tone retrieval is enabled for each of the above regions, you can also retrieve a tone's histogram.

**Input parameters**

| Name | Data Type | Required | Default | Values | Description |
| --- | --- | --- | --- | --- | --- |
| `documents` | array (Document-Object) | Yes | - | See below | List of JSON elements with each item in the list representing one document. |
| `top_n` | number | No | 0 | Non-negative integer | Number of results to be returned. 0, to return all results. When used in conjunction with threshold, the number of results returned will be lesser of either limits. |
| `min_coverage` | number | No | 0.05 | Real number | Threshold of coverage above which the results need to be returned. Exclude parameter to return all results. |
| `resize_image` | number | No | True | True/False | Whether to resize the input image or not. By default, the images are resized to 320*320 pixels before color extraction is performed. For debugging purposes we can allow the code to run on full-image as well, by setting this to `False`. |
| `enable_mask` | number | No | False | True/False | Enables/Disables color extraction |
| `retrieve_tone` | number | No | False| True/False | Enables/Disables tone extraction |

**Document object**

| Name | Data Type | Required | Default | Values | Description |
| -----| --------- | -------- | ------- | ------ | ----------- |
| `repo:path` | string | - | - | - | Presigned URL of the document. |
| `sensei:repoType` | string | - | - | HTTPS | Type of repo where the image is being stored. |
| `sensei:multipart_field_name` | string | - | - | - | Use this when passing the image file as a multipart argument instead of using presigned URLs. |
| `dc:format` | string | Yes | - | "image/jpg",<br>"image/jpeg",<br>"image/png",<br>"image/tiff"| Image encoding is checked against allowed input encoding types before being processed.|