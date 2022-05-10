---
description: As part of Destination SDK, Adobe provides developer tools to assist you in configuring and testing your destination. This page describes how to create and test a message transformation template.
title: Create and test a message transformation template
exl-id: 15e7f436-4d33-4172-bd14-ad8dfbd5e4a8
---
# Create and test a message transformation template {#create-template}

## Overview {#overview}

As part of Destination SDK, Adobe provides developer tools to assist you in configuring and testing your destination. This page describes how to create and test a message transformation template. For information on how to test your destination, read [Test your destination configuration](./test-destination.md).

To **create and test a message transformation template** between the target schema in Adobe Experience Platform and the message format supported by your destination, use the *Template authoring tool* described further below.  Read more about the data transformation between source and target schema in the [message format document](./message-format.md#using-templating).

Illustrated below is how creating and testing a message transformation template fits into the [destination configuration workflow](./configure-destination-instructions.md) in Destination SDK:

![Graphic of where the create template step fits into the destination configuration workflow](./assets/create-template-step.png)

## Why you need to create and test a message transformation template {#why-create-message-transformation-template}

One of the first steps in creating your destination in Destination SDK is to think about how the data format for segment membership, identities, and profile attributes is transformed when exported from Adobe Experience Platform to your destination. Find information about the transformation between Adobe XDM schema and your destination schema in the [message format document](./message-format.md#using-templating). 

For the transformation to succeed, you must provide a transformation template, similar to this example: [Create a template that sends segments, identities, and profile attributes](./message-format.md#segments-identities-attributes). 

Adobe provides a template tool that allows you to create and test the message template that transforms data from the Adobe XDM format into the format supported by your destination. The tool has two API endpoints that you can use: 
* Use the *sample template API* to get a sample template.
* Use the *render template API* to render the sample template so you can compare the result against your destination's expected data format. After comparing the exported data against the data format expected by your destination, you can edit the template. This way, the exported data you generate matches the data format expected by your destination.

## Steps to complete before creating the template {#prerequisites}

Before you are ready to create the template, make sure you complete the steps below:

1. [Create a destination server configuration](./destination-server-api.md). The template that you will generate differs, based on the value that you provide for the `maxUsersPerRequest` parameter. 
   * Use `maxUsersPerRequest=1` if you want an API call to your destination to include a single profile, along with its segment qualifications, identities, and profile attributes. 
   * Use `maxUsersPerRequest` with a value greater than one if you want an API call to your destination to include multiple profiles, along with their segment qualifications, identities, and profile attributes. 
2. [Create a destination configuration](./destination-configuration-api.md#create) and add the ID of the destination server configuration in `destinationDelivery.destinationServerId`.
3. [Get the ID of the destination configuration](./destination-configuration-api.md#retrieve-list) that you just created, so you can use it in the template creation tool.
4. Understand [which functions and filters you can use](./supported-functions.md) in the message transformation template.

## How to use the sample template API and render template API to create a template for your destination {#iterative-process}

>[!TIP]
>
>Before crafting and editing your message transformation template, you can start by calling the [render template API endpoint](./render-template-api.md#render-exported-data) with a simple template that exports your raw profiles without applying any transformations. The syntax for the simple template is: <br> `"template": "{% for profile in input.profiles %}{{profile|raw}}{% endfor %}}"`

The process to get and test the template is iterative. Repeat the steps below until the exported profiles match your destination's expected data format.

1. First, [get a sample template](./create-template.md#sample-template-api).
2. Use the sample template as a starting point to create a draft of your own.
3. Call the [render template API endpoint](./create-template.md#render-template-api) with your own template. Adobe generates sample profiles based on your schema and returns the result or any encountered errors.
4. Compare the exported data against the data format expected by your destination. If needed, edit the template.
5. Repeat this process until the exported profiles match your destination's expected data format.

## Get a sample template using the Sample template API {#sample-template-api}

>[!NOTE]
>
>For complete API reference documentation, read [Get sample template API operations](./sample-template-api.md).

Add a destination ID to the call, as shown below, and the response will return a template example corresponding to the destination ID.

``` shell

curl --location --request GET 'https://platform.adobe.io/data/core/activation/authoring/testing/template/sample/5114d758-ce71-43ba-b53e-e2a91d67b67f' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-api-key: {API_KEY}' \
--header 'Authorization: Bearer {ACCESS_TOKEN}' \
--header 'x-gw-ims-org-id: {ORG_ID}' \
--header 'x-sandbox-name: {SANDBOX_NAME}' \

```

If the destination ID you provide corresponds to a destination configuration with [best effort aggregation](./destination-configuration.md#best-effort-aggregation) and `maxUsersPerRequest=1` in the aggregation policy, the request returns a sample template similar to this one:

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
        {#- Alternative syntax for filtering segments by status: -#}
        {% for segment in removedSegments(input.profile.segmentMembership.ups) %}
            "{{ segment.key }}"{%- if not loop.last -%},{%- endif -%}
        {% endfor %}
        ]
    }
}



```

If the destination ID you provide corresponds to a destination server template with [configurable aggregation](./destination-configuration.md#configurable-aggregation) or [best effort aggregation](./destination-configuration.md#best-effort-aggregation) with `maxUsersPerRequest` greater than one, the request returns a sample template similar to this one:

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
                {#- Alternative syntax for filtering segments by status: -#}
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

## Character-escape your template {#character-escape-template}

Before using the template to render profiles that match your destination's expected format, you must character-escape the template, as shown in the screen recording below. 

![Video that shows how to character-escape a template using an online character escaping tool](./assets/escape-characters.gif) 

You can use an online character escaping tool. The demo above uses the [JSON Escape formatter](https://jsonformatter.org/json-escape). 

## Render template API {#render-template-api}

After creating a message transformation template using the [sample template API](./create-template.md#sample-template-api), you can [render the template](./render-template-api.md) to generate exported data based on it. This allows you to verify if the profiles that Adobe Experience Platform would export to your destination match your destination's expected format.

Refer to the API reference for examples of calls that you can make:

* [Render a template with no profiles sent in body](./render-template-api.md#multiple-profiles-no-body)
* [Render a template with profiles sent in body](./render-template-api.md#multiple-profiles-with-body)

Edit the template and make calls to the render template API endpoint until the exported profiles match your destination's expected data format.

## Add your character-escaped template to the destination server configuration

Once you are satisfied with your message transformation template, add it to your [destination server configuration](./server-and-template-configuration.md), in `httpTemplate.requestBody.value`.
