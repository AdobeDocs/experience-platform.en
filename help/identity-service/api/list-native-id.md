---
keywords: Experience Platform;home;popular topics;identity xid;XID
solution: Experience Platform
title: Get the Native ID for an Identity
description: Identity data is typically provided as an ID string value and identity namespace in XDM data ingested, and when supplying an identity for use in an API call. When identities are persisted in Identity Service, an ID is generated and assigned to that identity, called the native XID. Platform APIs requiring identity data support using this more compact form for the aggregated ID and namespace. XID is a base64 encoded string.
role: Developer
exl-id: e734f5d8-e00b-43fa-b06c-97c73e1f7c71
---
# Get the native ID for an identity 

Identity data is typically provided as an ID string value and identity namespace in XDM data ingested, and when supplying an identity for use in an API call. When identities are persisted in [!DNL Identity Service], an ID is generated and assigned to that identity, called the native XID. [!DNL Platform] APIs requiring identity data support using this more compact form for the aggregated ID and namespace. XID is a base64 encoded string.

>[!NOTE]
>
>This format is mainly for internal Adobe use. Native XID as a singular value is more space efficient and is what is used internally within [!DNL Platform] solutions for storage and serialization. However it is not human readable, it is opaque, and requires a separate call to obtain it to use.

Acquire the XID for a given ID value and namespace using the service described in this section.

**API format**

```http
GET https://platform-{REGION}.adobe.io/data/core/identity/identity?namespace={NAMESPACE}&id={ID_VALUE}
```

**Request**

```shell
curl -X GET \
  'https://platform-va7.adobe.io/data/core/identity/identity?namespace=email&id=test@adobetest.com' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

```json
{
    "xid":"BVrqzwVuzbXrLfmnaG3rXrLf3KJg"
}
```
