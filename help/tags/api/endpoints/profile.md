---
title: Profiles endpoint
description: Learn how to make calls to the /profiles endpoint in the Reactor API.
---
# Profile endpoint

In the Reactor API, a profile represents an Adobe Experience Platform user. The Reactor API does not maintain its own database of users and permissions, and instead relies on Adobe IDs managed by [Adobe’s identity management system (IMS)](https://helpx.adobe.com/enterprise/using/identity.html).

A profile contains all the information about the logged in user, including all the IMS Organizations to which they belong, the product profiles they belong to within each Org, and the rights they have from each product profile.

## Getting started

The endpoint used in this guide is part of the [Reactor API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/reactor.yaml). Before continuing, please review the [getting started guide](../getting-started.md) for important information regarding how to authenticate to the API.

## Retrieve the current profile {#lookup}

You can retrieve the details of the currently logged-in profile by making a GET request to the `/profile` endpoint.

**API format**

```http
GET /profile
```

**Request**

```shell
curl -X GET \
  https://reactor.adobe.io/profile \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'Accept: application/vnd.api+json;revision=1'
```

**Response**

A successful response returns the details of the profile.

```json
{
  "data": {
    "id": "UR0bd696624e844d6ba5bfc248ba1eca11",
    "type": "users",
    "attributes": {
      "active_org": "{IMS_ORG_1}",
      "expires_in": 0,
      "display_name": "John Smith",
      "job_function": null,
      "email": "jsmith@example.com",
      "organizations": {
        "{IMS_ORG_1}": {
          "name": "Example IMS Org A",
          "admin": true,
          "active": true,
          "login_companies": [

          ],
          "product_contexts": [
            "dma_audiencemanager_int",
            "dma_tartan",
            "dma_dtm",
            "dma_reactor",
            "dma_auditor"
          ],
          "tenant_id": "{TENANT_ID_1}"
        },
        "{IMS_ORG_2}": {
          "name": "Example IMS Org B",
          "admin": false,
          "active": false,
          "login_companies": [

          ],
          "product_contexts": [
            "dma_reactor",
            "dma_auditor",
            "dma_tartan"
          ],
          "tenant_id": "{TENANT_ID_2}"
        }
      }
    },
    "links": {
      "self": "https://reactor.adobe.io/profile"
    },
    "meta": {
      "rights": [
        "manage_companies"
      ]
    }
  }
}
```

