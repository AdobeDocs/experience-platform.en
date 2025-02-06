---
keywords: Experience Platform; security; ip-access; QS-Auth; API guide; query service; IP ranges
title: IP Access Endpoint
description: Learn how to manage IP ranges for sandbox access in Query Service using the IP Access API endpoint.
role: Developer
exl-id: fc15ab50-c125-4f00-a311-81fd41697c7d
---
# IP Access endpoint

>[!AVAILABILITY]
>
>This functionality is available to customers who have purchased the Data Distiller add on. For more information, contact your Adobe representative.

To secure data access within a specified Query Service sandbox, use the IP Access endpoint to manage allowed IP ranges. You can use this API to fetch, configure, or delete IP ranges associated with your organization's ID.

You can perform the following actions with the IP Access API:

- **Fetch all IP ranges**
- **Set new IP ranges**
- **Delete existing IP ranges**

This document covers the requests and responses that you can make and receive from the `/security/ip-access` endpoint.

>[!NOTE]
>
>You must have a user token to call this API. See the [getting started guide](./getting-started.md) for information on acquiring the required values for each of the headers.

## Fetch all IP ranges {#fetch-all-ip-ranges}

Retrieve a list of all IP ranges configured for your sandbox. If no IP ranges are set, all IPs are allowed by default, and the response returns an empty list in `allowedIpRanges`.

**API format**

```http
GET /security/ip-access
```

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/queryauth/security/ip-access \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with a list of the sandbox's allowed IP ranges.

```json
{
  "imsOrg": "{ORG_ID}",
  "sandboxName": "prod",
  "channel": "data_distiller",
  "allowedIpRanges": [
    {"ipRange": "136.23.110.0/23", "description": "VPN-1 gateway IPs"},
    {"ipRange": "101.10.1.1"}
  ]
}
```

The following table provides a description and example of the response schema properties:

| Property         | Description | Example    |
|------------------|---------------------------------------------|-----------------------------------------------------------------------------------------------|
| `imsOrg`         | Organization ID for the sandbox.                                                                         | `{ORG_ID}`                       |
| `sandboxName`    | Name of the sandbox where IP restrictions apply.                                                         | `prod`                           |
| `channel`        | The access mode for IP restrictions. Currently The only accepted value is `data_distiller`. This value signifies that IP restrictions are applied to PSQL or JDBC connections. | `data_distiller` |
| `allowedIpRanges`| List of permitted IPs in either CIDR or fixed IP format. Each entry may include an optional description. | `[{"ipRange": "136.23.110.0/23", "description": "VPN-1 gateway IPs"}]` |

>[!NOTE]
>
>The `allowedIpRanges` field can include two types of IP specifications:<br><ul><li>**CIDR**: Standard CIDR notation (for example, `"136.23.110.0/23"`) to define IP ranges.</li><li>**Fixed IP**: Single IPs for individual access permissions (for example, `"101.10.1.1"`).</li></ul>

## Set new IP ranges

Overwrite existing IP ranges by setting a new list for the sandbox. This operation requires a complete list of IP ranges, including any that remain unchanged.

**API format**

```http
PUT /security/ip-access
```

**Request**

```shell
curl -X PUT https://platform.adobe.io/data/foundation/queryauth/security/ip-access \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '{
     "ipRanges": [
       {"ipRange": "136.23.110.0/23", "description": "VPN-1 gateway IPs"},
       {"ipRange": "17.102.17.0/23", "description": "VPN-2 gateway IPs"},
       {"ipRange": "101.10.1.1"},
       {"ipRange": "163.77.30.9", "description": "Test server IP"}
     ]
   }'
```

**Response**

A successful response returns HTTP status 200 with details of the newly configured IP ranges.

```json
{
  "imsOrg": "{ORG_ID}",
  "sandboxName": "prod",
  "channel": "data_distiller",
  "allowedIpRanges": [
    {"ipRange": "136.23.110.0/23", "description": "VPN-1 gateway IPs"},
    {"ipRange": "17.102.17.0/23", "description": "VPN-2 gateway IPs"},
    {"ipRange": "101.10.1.1"},
    {"ipRange": "163.77.30.9", "description": "Test server IP"}
  ]
}
```

## Delete IP ranges {#delete-ip-ranges}

Remove all configured IP ranges for the sandbox. This action deletes the IP ranges and returns the deleted IP list.

>[!NOTE]
>
>The deletion operation applies to the organization (`imsOrg`) ID and affects all IP ranges configured for the sandbox.

**API format**

```http
DELETE /security/ip-access
```

**Request**

```shell
curl -X DELETE https://platform.adobe.io/data/foundation/queryauth/security/ip-access \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with details of the deleted IP ranges.

```json
{
  "imsOrg": "{ORG_ID}",
  "sandboxName": "prod",
  "channel": "data_distiller",
  "deletedIpRanges": [
    {"ipRange": "136.23.110.0/23", "description": "VPN-1 gateway IPs"},
    {"ipRange": "17.102.17.0/23", "description": "VPN-2 gateway IPs"},
    {"ipRange": "101.10.1.1"},
    {"ipRange": "163.77.30.9", "description": "Test server IP"}
  ]
}
```
