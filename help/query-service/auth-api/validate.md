---
keywords: Experience Platform; security; ip-access; validation; API guide; query service; IP verification
title: IP Validation Endpoint
description: Learn how to validate IP access for sandboxes in Query Service using the IP Validation API endpoint.
role: Developer
exl-id: 4ce9ab1c-e333-4ed5-a430-43ffec36a46d
---
# IP Validation endpoint

>[!AVAILABILITY]
>
>This functionality is available to customers who have purchased the Data Distiller add on. For more information, contact your Adobe representative.

Use the IP Validation API endpoint to verify whether a specified IP address is permitted to access a designated sandbox in Query Service. This check confirms if access restrictions apply or if an IP address is permitted to access data within a sandbox.

## Validate IP for sandbox access {#validate-ip-for-sandbox-access}

Use the IP Validation endpoint to check whether a given IP address is allowed to access data for the specified sandbox. If no IP restrictions are configured for the sandbox, all IP addresses are permitted by default. If there are existing IP or CIDR restrictions, this API verifies if the specified IP address matches any configured ranges.

>[!NOTE]
>
>You can access this endpoint with either **user tokens** or **service tokens**. No specific role requirements are needed.

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

>[!NOTE]
>
>The `isAllowed` field in the response returns `true` if the provided IP is permitted to access the sandbox and `false` otherwise. This API supports dynamically validating access and ensuring security compliance for sandbox environments.

```json
{
"isAllowed": true
}
```
