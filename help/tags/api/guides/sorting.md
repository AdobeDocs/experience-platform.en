---
title: Sorting Responses in the Reactor API
description: Learn how to filter results when listing resources in the Reactor API.
exl-id: 49dcf0b6-4ce8-41d9-9e3a-e44f5c0ff905
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
# Sorting responses in the Reactor API

Listing endpoints in the Reactor API allow you to sort returned resources based on specified attributes. You can configure the sort order of the response by by supplying a `sort` parameter in the request path.

## Sort ascending

Resources may be sorted by an attribute in ascending order by specifying the
attribute by which to sort, and prefixing it with a `+`:

`GET /companies/:company_id/properties?sort=+name`

## Sort descending

Resources may be sorted by an attribute in descending order by specifying the
attribute by which to sort, and prefixing it with a `-`:

`GET /companies/:company_id/properties?sort=-name`

## Multiple sorts

To sort by multiple values, supply the sort directives as a comma-separated
list:

`GET /companies/:company_id/properties?sort=+name,-org_id`
