---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Enabled core policies endpoint
topic: developer guide
---

# Enabled core policies endpoint

By default, only enabled data usage policies participate in evaluation. The `/enabledCorePolicies` endpoint allows you to manage the list of enabled core policies for your organization using single API calls.

>[!NOTE]
>
>Only core policies can be enabled or disabled by this endpoint. To enable or disable custom policies, see the section on [updating a policy](./policies.md#update) in the `/policies` endpoint guide.

## Getting started

The API endpoints used in this guide is part of the [Policy Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/dule-policy-service.yaml). Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Retrieve the list of enabled core policies

You can retrieve the current list of enabled policies by making a GET request to the `/enabledCorePolicies` endpoint.

**API format**

```http
GET /enabledCorePolicies
```

**Request**

```sh
curl -X GET \
  https://platform.adobe.io/data/foundation/dulepolicy/enabledCorePolicies \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the list of enabled core policies under a `policyIds` array.

```json
{
  "policyIds": [
    "corepolicy_0001",
    "corepolicy_0002",
    "corepolicy_0003",
    "corepolicy_0004",
    "corepolicy_0005",
    "corepolicy_0006",
    "corepolicy_0007",
    "corepolicy_0008"
  ],
  "imsOrg": "{IMS_ORG}",
  "created": 1529696681413,
  "createdClient": "{CLIENT_ID}",
  "createdUser": "{USER_ID}",
  "updated": 1529697651972,
  "updatedClient": "{CLIENT_ID}",
  "updatedUser": "{USER_ID}",
  "_links": {
    "self": {
      "href": "https://platform.adobe.io:443/data/foundation/dulepolicy/enabledCorePolicies"
    }
  }
}
```

## Update the list of enabled core policies

You can update the list of enabled policies by making a PUT request to the `/enabledCorePolicies` endpoint.

**API format**

```http
PUT /enabledCorePolicies
```

**Request**

The following request updates the list of enabled core policies based on the IDs provided in the payload.

```sh
curl -X GET \
  https://platform.adobe.io/data/foundation/dulepolicy/enabledCorePolicies \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "policyIds": [
          "corepolicy_0001",
          "corepolicy_0002",
          "corepolicy_0007",
          "corepolicy_0008"
        ]
      }'
```

| Property | Description |
| --- | --- |
| `policyIds` | A list of core policy IDs that are to be enabled. Any core policies that are not included are set to `DRAFT` status and will not participate in evaluation unless specified otherwise with the `includeDraft` query parameter. | 

**Response**

A successful response returns the updated list of enabled core policies under a `policyIds` array.

```json
{
  "policyIds": [
    "corepolicy_0001",
    "corepolicy_0002",
    "corepolicy_0007",
    "corepolicy_0008"
  ],
  "imsOrg": "{IMS_ORG}",
  "created": 1529696681413,
  "createdClient": "{CLIENT_ID}",
  "createdUser": "{USER_ID}",
  "updated": 1595876052649,
  "updatedClient": "{CLIENT_ID}",
  "updatedUser": "{USER_ID}",
  "_links": {
    "self": {
      "href": "https://platform.adobe.io:443/data/foundation/dulepolicy/enabledCorePolicies"
    }
  }
}
```

## Next steps

After viewing and updating the list of enabled core policies, you can use the policy evaluation endpoints in the Policy Service API to see if the expected policies are being enforced. See the [policy evaluation endpoints guide](./evaluation.md) for more information.