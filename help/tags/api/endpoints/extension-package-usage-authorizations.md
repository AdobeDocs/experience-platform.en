---
title: Extension package usage authorizations endpoint
description: Learn how to make calls to the /extension_package_usage authorizations endpoint in the Reactor API.
---

# Extension package usage authorizations endpoint

Owners of extension packages can grant use authorizations to other businesses so that they can utilize their private versions of the packages. Each authorized firm is given a usage authorization for a single extension package, which is valid for all future and current private versions of the package.

## Getting started

The endpoint used in this guide is part of the [Reactor API](https://www.adobe.io/experience-platform-apis/references/reactor/). Before continuing, please review the [getting started guide](../getting-started.md) for important information regarding how to authenticate to the API.

## Retrieve extension package usage authorizations for an extension package {#list}

You can retrieve a list of extension package usage authorizations for an extension package by making a GET request.

**API format**

```http
GET /extension_packages/{EXTENSION_PACKAGE_ID}/extension_package_usage_authorizations
```

| Parameter | Description |
| --- | --- |
| `{PROPERTY_ID}` | The `ID` of the property whose extension package usage authorization you want to list. |

{style="table-layout:auto"}

**Request**

```shell
curl -X GET \
  https://reactor.adobe.io/extension_packages/{EXTENSION_PACKAGE_ID}/extension_package_usage_authorizations \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H "Content-Type: application/vnd.api+json" \
  -H 'Accept: application/vnd.api+json;revision=1'
```

**Response**

A successful response returns a list of extension packages.

```json
{
  "data": [
    {
      "id": "EA722482c30fe44b54aa6a7317890b3bdb",
      "type": "extension_package_usage_authorizations",
      "attributes": {
        "created_at": "2024-06-05T23:17:35.776Z",
        "updated_at": "2024-06-05T23:17:35.776Z",
        "name": "Acme",
        "platform": "web",
        "owner_org_id": "{ORG_ID}",
        "owner_org_name": "Reactor QE",
        "authorized_org_id": "{ORG_ID}",
        "authorized_org_name": "Platform UI - INT",
        "state": "pending_approval",
        "created_by_email": "example@adobe.com",
        "created_by_display_name": "George Ciltaru",
        "updated_by_email": "Restricted",
        "updated_by_display_name": "Restricted"
      },
      "relationships": {
        "extension_package": {
          "links": {
            "related": "https://reactor.adobe.io/extension_package_usage_authorizations/EA722482c30fe44b54aa6a7317890b3bdb/extension_package"
          },
          "data": {
            "id": "EPecefc8291ae346c3b3887d5b2da533b8",
            "type": "extension_packages"
          }
        }
      },
      "links": {
        "self": "https://reactor.adobe.io/extension_package_usage_authorizations/EA722482c30fe44b54aa6a7317890b3bdb"
      }
    }
  ],
  "meta": {
    "pagination": {
      "current_page": 1,
      "next_page": null,
      "prev_page": null,
      "total_pages": 1,
      "total_count": 1
    }
  }
}
```

## Create an extension package usage authorization {#create}

Create an extension package usage authorization for each [extension package](./extension-packages.md) and `{ORG_ID}` of the organization you want to authorize. You can create a new extension package usage authorization by making a POST request.

**API format**

```http
POST /extension_packages/{EXTENSION_PACKAGE_ID}/extension_package_usage_authorizations
```

| Parameter | Description |
| --- | --- |
| `EXTENSION_PACKAGE_ID` | The `ID` of the extension package for which you want to create an extension package usage authorization. |

{style="table-layout:auto"}

**Request**

```shell
curl -X POST \
  https://reactor.adobe.io/extension_packages/{EXTENSION_PACKAGE_ID}/extension_package_usage_authorizations \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H "Content-Type: application/vnd.api+json" \
  -d '{
        "data": {
          "attributes": {
            "authorized_org_id": "{ORG_ID}"
          },
          "type": "extension_package_usage_authorizations"
        }
      } 
```

| Property | Description |
| --- | --- |
| `attributes.authorized_org_id` | The `ID` of the organization you want to authorize. |

**Response**

A successful response return the details of the newly created extension package usage authorization.

```json
{
  "data": {
    "id": "EA35d0e731f73645e6972df9fcac101434",
    "type": "extension_package_usage_authorizations",
    "attributes": {
      "created_at": "2024-06-05T23:17:30.308Z",
      "updated_at": "2024-06-05T23:17:30.308Z",
      "name": "Acme",
      "platform": "web",
      "owner_org_id": "{ORG_ID}",
      "owner_org_name": "Reactor QE",
      "authorized_org_id": "{ORG_ID}",
      "authorized_org_name": "Platform UI - INT",
      "state": "pending_approval",
      "created_by_email": "example@adobe.com",
      "created_by_display_name": "George Ciltaru",
      "updated_by_email": "Restricted",
      "updated_by_display_name": "Restricted"
    },
    "relationships": {
      "extension_package": {
        "links": {
          "related": "https://reactor.adobe.io/extension_package_usage_authorizations/EA35d0e731f73645e6972df9fcac101434/extension_package"
        },
        "data": {
          "id": "EP43649cc8856d4f09a7c2a21a4b1e449d",
          "type": "extension_packages"
        }
      }
    },
    "links": {
      "self": "https://reactor.adobe.io/extension_package_usage_authorizations/EA35d0e731f73645e6972df9fcac101434"
    }
  }
}
```


The initial state of the authorization is pending_approval. The authorized company will need to approve the authorization before they can use the ExtensionPackage. While an authorization is pending approval, the authorized company users are allowed to view the private extension package, but their extensions catalog does not contain it and cannot install it. The authorized company can approve or reject the authorization.
In order to approve the authorization, an user with manage_properties rights from the authorized company would send a PATCH request to the ExtensionPackageUsageAuthorization with the id of the authorization and the state set to approved.
curl --request PATCH \
  --url https://reactor.adobe.io/extension_package_usage_authorizations/:extension_package_usage_authorization_id \
  --header 'Accept: application/vnd.api+json;revision=1' \
  --header 'Authorization: Bearer access_token' \
  --header 'Content-Type: application/vnd.api+json' \
  --header 'X-Api-Key: Activation-DTM' \
  --header 'x-gw-ims-org-id: :authorized_org_id' \
  --data '{
  "data": {
    "attributes": {
	  "state": "approved"
	},
	"id": ":extension_package_usage_authorization_id",
	"type": "extension_package_usage_authorizations"
  }
}'
Once the authorization is approved, the authorized company can install the ExtensionPackage on their properties. If the authorization is rejected, the authorized company will not be able to use the ExtensionPackage.
The owner of the ExtensionPackage can revoke the authorization at any time by deleting the ExtensionPackageUsageAuthorization. This will prevent the authorized company from viewing the private versions of the ExtensionPackage in the catalog and from installing it on their properties, but already installed private versions will continue to work as expected.
curl --request DELETE \
  --url https://reactor.adobe.io/extension_package_usage_authorizations/:extension_package_usage_authorization_id \
  --header 'Accept: application/vnd.api+json;revision=1' \
  --header 'Authorization: Bearer access_token' \
  --header 'Content-Type: application/vnd.api+json' \
  --header 'X-Api-Key: Activation-DTM' \
  --header 'x-gw-ims-org-id: :owner_org_id'
}'
