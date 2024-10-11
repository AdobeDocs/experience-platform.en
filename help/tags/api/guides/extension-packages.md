---
title: Sharing Private Extension Packages in the Reactor API
description: Learn how to authorize other businesses to share private extentsion packages in the Reactor API.
exl-id: 3300a630-6d22-46e1-8b1b-b5d12a3ea44c
---
# Sharing private extension packages

>[!NOTE]
>
>Users with the `develop_extensions` permission in the extension package owner organization are able to create, list, and delete extension package usage authorizations for that extension package. Users in an authorized organization who possess the `manage_properties` permission are only allowed to list the extension package usage authorizations for their organization and update their state to `accepted` if they want to use that extension package, or to `rejected` if they don't want to use it.

Owners of extension packages can grant permission for other companies to utilize their private versions through the Reactor API. A usage license for one extension package is granted to each approved business, and this authorization is good for all current and future private versions of the package.

This guide provides a high-level overview of how to configure extension package usage authorizations. For more detailed guidance on how to manage authorizations in the Reactor API, including example JSON of a authorization's structure, refer to the [extension package usage authorization endpoint guide](../endpoints/extension-package-usage-authorizations.md).

## Create an authorization {#create-authorization}

To create a new authorization, you must have the `develop_extensions` right. The following example demonstrates how you can create an extension package usage authorization for an extension package using the `authorized_org_id` of the company you wish to authorize.

**API format**

```http
POST /extension_packages/{EXTENSION_PACKAGE_ID}/extension_package_usage_authorizations
```

| Parameter | Description |
| --- | --- |
| `EXTENSION_PACKAGE_ID` | The `ID` of the extension package that you want to create an authorization for. |

{style="table-layout:auto"}

**Request**

The following request creates a new extension package authorization for the company specified.

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

{style="table-layout:auto"}

The initial state of the authorization is in the `pending_approval` stage. Before using the extension package, the company must approve the authorization. Users of the company are able to browse the private extension package while authorization is pending approval, but they are unable to install it and cannot find it in their extensions catalog. 

## Approve an authorization {#approve-authorization}

To approve an authorization, you must have the `manage_properties` rights. As the authorized company, you will need to send a PATCH request to the extension package usage authorization, including the `ID` of the authorization and set the state set to `approved`.

**API format**

```http
PATCH //extension_package_usage_authorizations/{EXTENSION_PACKAGE_USAGE_AUTHORIZATION_ID}
```

| Parameter | Description |
| --- | --- |
| `EXTENSION_PACKAGE_USAGE_AUTHORIZATION_ID` | The `ID` of the authorization you want to approve. |

{style="table-layout:auto"}

**Request**

The following PATCH request sets the `state` of an authorization to `approved`.

```shell
curl -X PATCH \
  https://reactor.adobe.io/extension_package_usage_authorizations/{EXTENSION_PACKAGE_USAGE_AUTHORIZATION_ID} \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-Api-Key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H "Content-Type: application/vnd.api+json" \
  -d '{
        "data": {
          "attributes": {
	          "state": "approved"
	        },
	        "id": ":extension_package_usage_authorization_id",
	        "type": "extension_package_usage_authorizations"
        }
      }
```

Once the authorization is approved, as the authorized company, you can now install the extension package on your properties.

>[!NOTE]
>
>If the authorization is rejected, the authorized company will not be able to use the extension package.

## Delete an authorization {#delete-authorization}

As the owner of an extension package, you can revoke the authorization at any time by deleting the extension package usage authorization. This will prevent the authorized company from viewing private versions of the extension package in the catalog and installing it on their properties. However, already installed private versions will continue to work as expected after deletion.

**API format**

```http
DELETE //extension_package_usage_authorizations/{EXTENSION_PACKAGE_USAGE_AUTHORIZATION_ID}
```

| Parameter | Description |
| --- | --- |
| `EXTENSION_PACKAGE_USAGE_AUTHORIZATION_ID` | The `ID` of the authorization you want to delete. |

{style="table-layout:auto"}

**Request**

The following DELETE request removes authorization privilages for a company.

```shell
curl -X DELETE \
  https://reactor.adobe.io/extension_package_usage_authorizations/{EXTENSION_PACKAGE_USAGE_AUTHORIZATION_ID} \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-Api-Key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H "Content-Type: application/vnd.api+json" \
```
