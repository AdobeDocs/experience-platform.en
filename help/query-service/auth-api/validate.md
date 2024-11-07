---
keywords: Experience Platform; security; ip-access; validation; API guide; query service; IP verification
solution: Experience Platform
title: IP Validation API Endpoint
description: Guide to validating IP access for sandboxes in Query Service using the IP Validation API endpoint.
role: Developer
---
# IP Validation Endpoint

The IP Validation API endpoint allows you to verify if a specified IP address has access to a designated sandbox in the [!DNL Query Service]. This check is useful for confirming if access restrictions apply or if an IP address is permitted to access data within a sandbox.

## Action Supported

The IP Validation API supports the following action:

- **Validate IP for sandbox access**

## Validate IP for Sandbox Access

The IP Validation API checks whether a given IP address is allowed to access data for the specified sandbox. If no IP restrictions are configured for the sandbox, all IP addresses are permitted by default. If there are existing IP or CIDR restrictions, this API will verify if the specified IP address matches any configured ranges.

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

A successful response will return a boolean indicating whether the IP is allowed.

```json
{
"isAllowed": true
}
```

### Token Requirements

This endpoint is accessible with both **user tokens** and **service tokens**, with no specific role requirements needed to access the endpoint.

>[!NOTE]
>
>The `isAllowed` field in the response will return `true` if the provided IP is permitted to access the sandbox and `false` otherwise. This API supports validating access dynamically and ensures security compliance for sandbox environments.

