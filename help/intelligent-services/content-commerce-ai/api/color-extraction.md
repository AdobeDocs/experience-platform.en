---
keywords: Experience Platform;getting started;content ai;commerce ai;content and commerce ai;color extraction;Color extraction
solution: Experience Platform
title: Getting started in Attribution AI
topic: Getting started
description: 
---

# Color extraction endpoint

The color extraction service when given an image can compute the histogram of pixel colors and sort them by dominant colors into buckets. The colors in the image pixels are bucketed into 40 predominant colors. The colors shown are representative of the color spectrum. Next, the histogram of color values is computed among the 40 colors. The service has two variants:

**Color Extraction of full image**

This method simplistically extracts the color histogram across the entire image.

**Color Extraction with mask**

This method uses a deep-learning based foreground extractor to identify objects in the foreground. The deep-learning based model is trained on a catalog of e-commerce images. Once the foreground object is extracted, the histogram is computed over the dominant colors as previously described.

**API format**

```http
POST /sensei-core/v1/predict
```

**Request**

```SHELL
curl -i -X POST https://sensei-stage-ew1.adobe.io/sensei-core/v1/predict \
  -H 'Authorization: Bearer $API_TOKEN' \
  -H 'Content-Type: multipart/form-data' \
  -H 'cache-control: no-cache,no-cache' \
  -H 'x-api-key: $API_KEY' \
  -F file=@1431RDMJANELLERAWJACKE_2.jpg \
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

