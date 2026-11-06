---
title: Paginating responses in the Reactor API
description: Learn how to paginate results when listing resources in the Reactor API.
exl-id: bccb6e78-4ac8-4786-b398-6e55109d99dd
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
subfeature_v2:
  - id: 1a2b3c4d-0005-4005-8005-000000000005
    internal-label: Reactor API
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Paginating responses in the Reactor API

Responses returned by the Reactor API are paginated. The default page size is 25 elements. Details about the pagination are reported in the `meta.pagination` section of the API response object:

```json
"meta": {
  "pagination": {
      "current_page": 1,
      "next_page": 2,
      "prev_page": null,
      "total_pages": 4,
      "total_count": 90
  }
}
```

It is possible to get a specific page and to modify the size of a page by including a `page` query parameter in the request path.

## Retrieve a specific page

To get a specific page:

```http
GET /{RESOURCE_TYPE}/{RESOURCE_ID}?page[number]={PAGE_NUMBER}
```

## Change the page size

To change the page size:

```http
GET /{RESOURCE_TYPE}/{RESOURCE_ID}?page[size]={PAGE_SIZE}
```

Different options can be combined together:

```http
GET /{RESOURCE_TYPE}/{RESOURCE_ID}?page[size]={PAGE_SIZE}&page[number]={PAGE_NUMBER}
```
