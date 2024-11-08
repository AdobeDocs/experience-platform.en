---
keywords: Experience Platform; security; ip-access; validation; API guide; query service; IP verification
title: IP Validation Endpoint
description: Learn how to validate IP access for sandboxes in Query Service using the IP Validation API endpoint.
role: Developer
---
# IP Validation endpoint

To verify if a specified IP address has access to a designated sandbox in the Query Service, use the IP Validation API endpoint. This check confirms whether access restrictions apply or if an IP address is permitted to access data within a sandbox.

## Validate IP for sandbox access {#validate-ip-for-sandbox-access}

Use the IP Validation endpoint to check whether a given IP address is allowed to access data for the specified sandbox. If no IP restrictions are configured for the sandbox, all IP addresses are permitted by default. If there are existing IP or CIDR restrictions, this API verifies if the specified IP address matches any configured ranges.

**API format**

```http
POST /security/validate/ip-access
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/query/security/validate/ip-access \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '{
       "ipAddress": "197.2.0.2"
     }'
```

**Response**

A successful response returns HTTP status 200 with a boolean indicating whether the IP is allowed.

```json
{
"isAllowed": true
}
```

### Token requirements

This endpoint is accessible with both **user tokens** and **service tokens**, with no specific role requirements needed to access the endpoint.

>[!NOTE]
>
>The `isAllowed` field in the response returns `true` if the provided IP is permitted to access the sandbox and `false` otherwise. This API supports validating access dynamically and ensures security compliance for sandbox environments.
