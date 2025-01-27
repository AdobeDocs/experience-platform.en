---
title:
description:
---
# Dataset TTL API Guide

## So you think you want to set a TTL

No specific API call required.

This section should focus on explaining the concept of TTL (Time-To-Live) and its impact on data lifecycle management. TTL helps manage data retention by automatically expiring datasets after a specified period. 

You can reference general catalog-related API documentation for further details.

## Why you DO

No specific API call required.

Setting TTL can be beneficial for various reasons, including:

- Compliance with data retention policies.
- Cost management by reducing storage needs.
- Ensuring outdated data does not impact analytics.

This section should provide insight into when TTL should be considered and its strategic benefits.

## Why you DONT

No specific API call required.

Setting a TTL might not be suitable in cases such as:

- Data that must be retained indefinitely for regulatory reasons.
- Use cases where historical analysis is critical.
- Risk of accidental data loss due to misconfiguration.

Referencing TTL retrieval methods can help users make informed decisions.

## What should your TTL for Lake be?

No specific API call required.

When determining the appropriate TTL, consider:

- The data's relevance over time.
- Compliance requirements.
- Storage cost vs. retention value.

Provide recommendations based on industry best practices and use cases.

## How do you set it?

**Endpoint:** `PATCH /v2/datasets/{ID}`  

**Example API Call:**  

```console
PATCH https://platform.adobe.io/data/foundation/catalog/v2/datasets/{datasetID} 
Authorization: Bearer {ACCESS_TOKEN}
x-api-key: {API_KEY}
Content-Type: application/json

{ 
    "ttlInSeconds": 5184000 // Example: Extending to 60 days in seconds 
}
```

**Explanation:**  

Updating TTL follows the same process as setting it initially. Users should review compliance policies before making changes.

## How do you check what it is?

**Endpoint:** `GET /v2/datasets/{ID}`  

**Example API Call:**  

```console
GET https://platform.adobe.io/data/foundation/catalog/v2/datasets/{datasetID} 
Authorization: Bearer {ACCESS_TOKEN} 
x-api-key: {API_KEY}
```

**Sample Response:**  

```json
{ 
    "id": "12345", 
    "name": "Sample Dataset", 
    "ttlInSeconds": 2592000, 
    "created": "2023-01-01T00:00:00Z" 
}
```


**Explanation:**  
The response includes the `ttlInSeconds` value, which indicates the current TTL setting. Convert this to human-readable format when reviewing TTL configurations.

## How do you remove it? (Spoiler, you can't)

No API call available.

TTL values cannot be removed once set. Users can modify the TTL duration but not delete it entirely. 

Consider providing workarounds or best practices to manage dataset expiration effectively.

