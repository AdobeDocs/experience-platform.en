---
title: Paginating responses in the Reactor API
description: Learn how to paginate results when listing resources in the Reactor API.
---
# Paginating responses in the Reactor API

Responses returned by the Reactor API are paginated. The default page size is 25 elements. Details about the pagination are reported in the `meta.pagination `section of the API response object:

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
