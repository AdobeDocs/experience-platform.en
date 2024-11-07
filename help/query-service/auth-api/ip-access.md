---
keywords: Experience Platform; security; ip-access; QS-Auth; API guide; query service; IP ranges
solution: Experience Platform
title: IP Access API Endpoint
description: Guide to managing IP ranges for sandbox access in Query Service using the IP Access API endpoint.
role: Developer
---
# IP Access Endpoint

To secure data access within a specified Query Service sandbox, use the IP Access endpoint to manage allowed IP ranges. You can use this API to fetch, configure, or delete IP ranges associated with your organization's ID.

This document covers the requests and responses you can make and receive from the `/security/ip-access` endpoint.

## Available actions

The following actions are supported by the IP Access API:

- **Fetch all IP ranges**
- **Set new IP ranges**
- **Delete existing IP ranges**

>[!NOTE]
>
>You must have a user token to call this API. See the [getting started guide]() for information on  values required for each of the headers.

## Fetch all IP ranges {#fetch-all-ip-ranges}

Retrieve a list of all IP ranges configured for your sandbox. If no IP ranges are set, all IPs are allowed by default, and the response returns an empty list in `allowedIpRanges`.

**API format**

```http
GET /security/ip-access
```

**Request**

```shell
curl -X GET https://platform.adobe.io/data/foundation/query/security/ip-access \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response includes the sandbox's allowed IP ranges.

```json
{
  "imsOrg": "21CB1E5A66758BC10A495FE6@AdobeOrg",
  "sandboxName": "prod",
  "channel": "data_distiller",
  "allowedIpRanges": [
    {"ipRange": "136.23.110.0/23", "description": "VPN-1 gateway IPs"},
    {"ipRange": "101.10.1.1"}
  ]
}
```

>[!NOTE]
>
>The `channel` value, currently `data_distiller`, signifies IP restrictions applied to data access modes such as PSQL or JDBC. In future updates, IP restrictions may extend to other access modes, like Web-Socket connections from the UI or Query APIs.

### IP Range Types

The `allowedIpRanges` field can include two types of IP specifications:

- **CIDR**: Standard CIDR notation (e.g., `"136.23.110.0/23"`) to define IP ranges.
- **Fixed IP**: Single IPs for individual access permissions (e.g., `"101.10.1.1"`).

## Set New IP Ranges

Overwrite existing IP ranges by setting a new list for the sandbox. This operation requires a complete list of IP ranges, including any that remain unchanged.

**API format**

```http
PUT /security/ip-access
```

**Request**

```shell
curl -X PUT https://platform.adobe.io/data/foundation/query/security/ip-access \
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

A successful response includes the newly configured IP ranges.

```json
{
  "imsOrg": "21CB1E5A66758BC10A495FE6@AdobeOrg",
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

## Delete IP Ranges

Remove all configured IP ranges for the sandbox. This action will delete the IP ranges and return the deleted IP list.

**API format**

```http
DELETE /security/ip-access
```

**Request**

```shell
curl -X DELETE https://platform.adobe.io/data/foundation/query/security/ip-access \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response includes the deleted IP ranges.

```json
{
  "imsOrg": "21CB1E5A66758BC10A495FE6@AdobeOrg",
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

>[!NOTE]
>
>The deletion operation applies to the IMS Org ID and affects all IP ranges configured for the sandbox.
