---
description: Learn how to use the destination testing API to generate a test message transformation template for your destination.
title: Generate a sample message transformation template
exl-id: d18a06f7-0c3a-4b4d-a7d5-011690d00e2c
TQID: https://experienceleague.adobe.com/xodA-ag0DqHYcdzsIq4awGRkEhU-ss-XSC1iDsQ-lM0
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
topic_v2:
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
---
# Generate a sample message transformation template {#get-sample-template-api-operations}

>[!IMPORTANT]
>
>**API endpoint**: `https://platform.adobe.io/data/core/activation/authoring/testing/template/sample`

This page lists and describes all the API operations that you can perform using the `/authoring/testing/template/sample` API endpoint, to generate a [message transformation template](../../functionality/destination-server/message-format.md#using-templating) for your destination. For a description of the functionality supported by this endpoint, read [create template](create-template.md). 

## Getting started with sample template API operations {#get-started}

Before continuing, please review the [getting started guide](../../getting-started.md) for important information that you need to know to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## Get sample template {#generate-sample-template}

You can get a sample template by making a GET request to the `authoring/testing/template/sample/` endpoint and providing the destination ID of the destination configuration based on which you are creating your template.

>[!TIP]
>
>* The destination ID that you should use here is the `instanceId` that corresponds to a destination configuration, created using the `/destinations` endpoint. See the [retrieve a destination configuration](../../authoring-api/destination-configuration/retrieve-destination-configuration.md) for more details.

**API format**

```http
GET authoring/testing/template/sample/{DESTINATION_ID}
```

| Parameter | Description |
| -------- | ----------- |
| `{DESTINATION_ID}` | The ID of the destination configuration for which you are generating a message transformation template. |

{style="table-layout:auto"}

**Request**

The following request generates a new sample template, configured by the parameters provided in the payload.

```shell

curl --location --request GET 'https://platform.adobe.io/data/core/activation/authoring/testing/template/sample/5114d758-ce71-43ba-b53e-e2a91d67b67f' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-api-key: {API_KEY}' \
--header 'Authorization: Bearer {ACCESS_TOKEN}' \
--header 'x-gw-ims-org-id: {ORG_ID}' \
--header 'x-sandbox-name: {SANDBOX_NAME}' \

```

**Response**

A successful response returns HTTP status 200 with a sample template that you can edit to match your expected data format.

If the destination ID you provide corresponds to a destination configuration with [best effort aggregation](../../functionality/destination-configuration/aggregation-policy.md) and `maxUsersPerRequest=1` in the aggregation policy, the request returns a sample template similar to this one:

```python
{#- THIS is an example template for a single profile -#}
{#- A '-' at the beginning or end of a tag removes all whitespace on that side of the tag. -#}
{
    "identities": [
    {%- for idMapEntry in input.profile.identityMap -%}
    {%- set namespace = idMapEntry.key -%}
        {%- for identity in idMapEntry.value %}
        {
            "type": "{{ namespace }}",
            "id": "{{ identity.id }}"
        }{%- if not loop.last -%},{%- endif -%}
        {%- endfor -%}{%- if not loop.last -%},{%- endif -%}
    {% endfor %}
    ],
    "AdobeExperiencePlatformSegments": {
        "add": [
        {%- for segment in input.profile.segmentMembership.ups | added %}
            "{{ segment.key }}"{%- if not loop.last -%},{%- endif -%}
        {% endfor %}
        ],
        "remove": [
        {#- Alternative syntax for filtering audiences by status: -#}
        {% for segment in removedSegments(input.profile.segmentMembership.ups) %}
            "{{ segment.key }}"{%- if not loop.last -%},{%- endif -%}
        {% endfor %}
        ]
    }
}
```

If the destination ID you provide corresponds to a destination server template with [configurable aggregation](../../functionality/destination-configuration/aggregation-policy.md#configurable-aggregation) or [best effort aggregation](../../functionality/destination-configuration/aggregation-policy.md#best-effort-aggregation) with `maxUsersPerRequest` greater than one, the request returns a sample template similar to this one:

```python
{#- THIS is an example template for multiple profiles -#}
{#- A '-' at the beginning or end of a tag removes all whitespace on that side of the tag. -#}
{
    "profiles": [
    {%- for profile in input.profiles %}
        {
            "identities": [
            {%- for idMapEntry in profile.identityMap -%}
            {%- set namespace = idMapEntry.key -%}
                {%- for identity in idMapEntry.value %}
                {
                    "type": "{{ namespace }}",
                    "id": "{{ identity.id }}"
                }{%- if not loop.last -%},{%- endif -%}
                {%- endfor -%}{%- if not loop.last -%},{%- endif -%}
            {% endfor %}
            ],
            "AdobeExperiencePlatformSegments": {
                "add": [
                {%- for segment in profile.segmentMembership.ups | added %}
                    "{{ segment.key }}"{%- if not loop.last -%},{%- endif -%}
                {% endfor %}
                ],
                "remove": [
                {#- Alternative syntax for filtering audiences by status: -#}
                {% for segment in removedSegments(profile.segmentMembership.ups) %}
                    "{{ segment.key }}"{%- if not loop.last -%},{%- endif -%}
                {% endfor %}
                ]
            }
        }{%- if not loop.last -%},{%- endif -%}
    {% endfor %}
    ]
}

```

## API error handling {#api-error-handling}

Destination SDK API endpoints follow the general Experience Platform API error message principles. See [API status codes](../../../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../../../landing/troubleshooting.md#request-header-errors) in the Experience Platform troubleshooting guide.

## Next steps {#next-steps}

After reading this document, you now know how to generate a message transformation template using the `/authoring/testing/template/sample` API endpoint. Next, you can use the [Render template API endpoint](render-template-api.md) to generate exported profiles based on the template and compare them against your destination's expected data format.
