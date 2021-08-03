---
title: Sorting Responses in the Reactor API
description: Learn how to filter results when listing resources in the Reactor API.
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
