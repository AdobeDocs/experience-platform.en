---
title: Sorting Responses in the Reactor API
description: Learn how to filter results when listing resources in the Reactor API.
exl-id: 49dcf0b6-4ce8-41d9-9e3a-e44f5c0ff905
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
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
