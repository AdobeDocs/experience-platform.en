---
title: Create Audience API Endpoint
description: Learn how to create a Policy-Enforcement-Service-only audience.
hide: yes
hidefromtoc: yes
---

# Create audience endpoint

You can use this endpoint to create an external audience that can interact with Policy Enforcement Service.

## Getting started

>[!IMPORTANT]
>
>The endpoints in this guide are prefixed with `/core/ais`, as opposed to `/core/ups`.

In order to use Experience Platform APIs, you must have completed the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in [!DNL Experience Platform] API calls, as shown below:

- Authorization: `Bearer {ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{ORG_ID}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Experience Platform] APIs require a header that specifies the name of the sandbox in which the operation will take place:

- x-sandbox-name: `{SANDBOX_NAME}`
  
>[!NOTE]
>
>For more information on working with sandboxes in [!DNL Experience Platform], see the [sandboxes overview documentation](../../sandboxes/home.md).

**API format**

>[!IMPORTANT]
>
>You **must** include the `createAudienceMetaOnly=true` query parameter as part of the request.

```http
POST /audiences?createAudienceMetaOnly=true
```

**Request**

>[!IMPORTANT]
>
>You **must** include the `Accept: application/vnd.adobe.external.audiences+json; version=2` header as part of the API request.

```shell
curl -X POST https://platform.adobe.io/core/ais/audiences?createAudienceMetaOnly=true \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'\
 -H 'Accept: application/vnd.adobe.external.audiences+json; version=2'
 -d '{
    "name": "Sample audience name",
    "description" "A sample description for the audience.",
    "namespace": "agora",
    "originName": "Agora_Collaboration"
 }'
```

| Property | Type | Description |
| -------- | ---- | ----------- |
| `name` | String | The name for the audience. |
| `description` | String | An optional description for the audience. |
| `namespace` | String | The namespace for the audience. |
| `originName` | String | The name of the audience's origin. |

**Response**

A successful response returns HTTP status 200 with information about the newly created audience.

```json
{
    "name": "Sample audience name",
    "audienceId": "4a815904-f2f9-4237-82fb-55605bcc2ad7"
}
```

| Property | Type | Description |
| -------- | ---- | ----------- |
| `name` | String | The name of the audience you created. |
| `audienceId` | String | The ID of the audience you created. |
