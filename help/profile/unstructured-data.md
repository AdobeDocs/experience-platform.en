---
title: Real-Time Customer Profile with Unstructured Data
description:
hide: true
---

# Real-Time Customer Profile with unstructured data

>[!AVAILABILITY]
>
>This feature is currently in **beta**. The functionality and documentation are subject to change. For more information, contact Adobe Customer Care.

In Adobe Experience Platform, Real-Time Customer Profile lets you consolidate your customer data into a unified view by combining data from multiple channels. With support for unstructured data, Experience Platform extends these capabilities, semantically letting you use conversational and other unstructured customer data as part of the profile building blocks.

## Understanding Profile with unstructured data {#understanding}

Real-Time Customer Profile currently combines structured data from multiple channels, including online, offline, CRM, and third party, consolidating this data into a unified view that offers an actionable and timestamped account of every customer interaction. However, this doesn't cover unstructured data ingestion, meaning data from conversations, transcripts, or other multi-modal data (such as PDFs or images) are unavailable to be used with Profile.

Semantic profiles allows Experience Platform profiles have access to unstructured data, which lets you better personalize conversations since the customer context will continue to be shared across multiple platforms, including Brand Concierge. 

Profile with unstructured data provides the following capabilities to Experience Platform customers:

- Understand customer intent
  - You can ingest conversations, messaging, search queries, call transcripts, surveys, and other text-based interactions to enrich the existing customer profile.
- Personalize conversations
  - You can combine profile attributes, audience membership, and conversation history together so Brand Concierge and other customer-facing agents can deliver personalized experiences with continuity across agents, sessions, devices, and channels.
- Activate intent in real time
  - You can extract marketer-defined signals from conversations and activate them through audiences, journeys, and personalization. These downstream activations can be used throughout Experience Platform, including Adobe Journey Optimizer and Target.

## Access prerequisites {#prerequisites}

To use Profile with unstructured data, you **must** meet the following prerequisites:

- Already an existing Adobe Experience Platform user
- Do **not** have the Healthcare Shield add-on
- Have a use case in one of the three following areas:
  - Profile context for AI agents
    - Surface customer profile context to an AI agent so you can personalize interactions in real-time.
  - Unstructured data ingestion
    - Bring unstructured data, such as call transcripts, chat logs, survey responses, or emails into Profile, so it can be used to inform downstream experiences.
  - CDP-powered decisioning on AI agents
    - Use Real-Time CDP to help determine the next-best action, offer, or content for an individual customer or AI agent.

If you fulfill all of these prerequisites, contact Adobe Customer Care for more information on requesting enablement for Profile with unstructured data and Personalization within Brand Concierge.

## Setup {#setup}

Before continuing Profile with unstructured data set up, you'll need to complete the following steps:

- Have an organization with entitlements to the following products:
  - Brand Concierge
  - Access to either Real-Time CDP or Adobe Journey Optimizer
- Create a Brand Concierge configuration
- Enable [Identity Graph Linking Rules](/help/identity-service/identity-graph-linking-rules/overview.md)
- Create a profile-enabled dataset
  - Ingest sample profiles into this dataset

Once you've completed the prerequisite steps, you can configure and validate the profile context. You can either do this through CX Enterprise Coworker or using the API.

>[!BEGINTABS]

>[!TAB CX Enterprise Coworker]

Within Coworker, select **Customizations** followed by **Integrations**.

IMAGE

The **Integrations** page appears. You'll need to add the `rtcdp-mcp` integration to Coworker. Select **Add server** to add an integration.

IMAGE

The **Add integration** popover appears. Add the following details to the popover, then select **Add**.

| Field | Description |
| ----- | ----------- |
| Server name | The name of the server. Set this value to `rtcdp-mcp`. |
| Source URL | The source URL for the MCP. Set this value to `https://cx-enterprise.adobe.io/mcp/server/rtcdp`. |
| Connection type | The method for the MCP to connect to Coworker. Select **HTTP**. |
| Tool timeout | How long it takes for the tool to timeout. Keep this value at 60 seconds. |
| Authentication | How the MCP authenticates. Since this is configured for everyone, select `passthrough`. |

Once you've added the `rtcdp-mcp` integration, you'll need to change your manifest to use the **Semantic Profile AI Assistant**. Select the ICON next to your name, followed by **Settings** to open the Settings popover.

IMAGE

The Settings popover appears. Select **Preferences** and toggle on **Enable debug mode** so you can change the manifest.

IMAGE

With debug mode enabled, select **Manifest** and choose the **Semantic Profile AI Assistant** followed by **Apply** to change the manifest for Coworker.

IMAGE

Now that the integration and the manifest have been set up, you can begin the setup by asking "I want to create a semantic profile configuration" within Coworker.

IMAGE

Coworker will guide you through the steps to set up Profile with unstructured data by proceeding through the following steps:

- Coworker will ask "What is your use case"?
- After describing your use case, Coworker will provide a list of relevant attributes, based on the use case
- Once you confirm the attributes look fine, Coworker will confirm the following actions. By default, Coworker will have **no** audience descriptions, **precise** profile narrative, **no** data governance labels, and the **default** person namespace.
  - If you want to add the audience descriptions to the profile narrative
  - The preciseness of the profile narrative
  - Adding data governance labels and setting the person namespace

After going through these steps, your Profile with unstructured data context is created.

>[!TAB API calls]

You can set up the Profile with unstructured data context by using the Experience Platform APIs.

Before continuing, read the [getting started guide](/help/profile/api/getting-started.md) for links to related documentation, a guide to reading the sample API calls in this section, and important information regarding required headers that are needed to successfully make calls to any [!DNL Experience Platform] API.

### Get categories {#get-categories}

You'll first need to get the categories for the Profile context. The categories are groupings of profile attributes that are available in your sandbox. 

**API format**

```http
GET /semanticprofile/config/category
```

**Request**

The following request retrieves a list of all the available categories and their attributes within your sandbox.

+++A sample request to retrieve the available categories.

```shell
curl -X GET https://platform.adobe.io.data/core/semanticprofile/config/category \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++


**Response**

A successful response returns HTTP status 200 with a list of the categories available for your organization and sandbox.

+++A sample response that contains a list of the categories and attributes that belong to your organization and sandbox

```json
{
  "requestId": "b2c3d4e5-f6a7-8901-bcde-f23456789012",
  "result": [
    {
      "categories": [
        {
          "name": "Customer Demographics",
          "attributes": [
            "person.name.firstName",
            "person.name.lastName",
            "person.gender",
            "person.maritalStatus"
          ]
        },
        {
          "name": "Contact Information",
          "attributes": [
            "personalEmail.address",
            "mobilePhone.number"
          ]
        }
      ]
    }
  ]
}
```

| Field | Type | Description |
| ----- | ---- | ----------- |
| `requestId` | String | The unique ID for the request. |
| `result` | Array | An array that contains the available categories for your sandbox. |
| `categories.name` | String | The name of the category. |
| `categories.attributes` | Array | An array that contains the list of available attributes within the category. |

+++

### Create a configuration

After getting the available categories for your sandbox, you can create a configuration. The configuration contains the categories and attributes of the profile data, the audiences you want to highlight, the marketing actions, the narrative precision, as well as the namespace.

**API format**

```http
POST /semanticprofile/config/configuration
```

**Request**

The following request creates a Profile with unstructured data configuration, using the Customer Demographics category, including a specified audience, no marketing actions, fuzzy narrative precision, and email namespace.

+++ A sample request to create a profile configuration.

```shell
curl -X POST https://platform.adobe.io/data/core/semanticprofile/config/configuration \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '{
    "data": {
        "name": "CustomerSummary":,
        "configurationDetails": {
            "category": [
                {
                    "name": "Customer Demographics",
                    "attributes": [
                        "person.name.firstName",
                        "person.name.lastName"
                    ]
                }
            ],
            "segments": {
                "limit": 1,
                "selection_mode": "inclusion",
                "inclusion": [
                    {
                        "id": "b2cf20ca-5d07-4ef2-b50a-994eb2c11349",
                        "priority": "1"
                    }
                ],
                "exclusion": []
            },
            "marketingActions": [],
            "narrative_precision": "fuzzy",
            "personNamespace": {
                "isPersonNamespaceEnabled": true,
                "code": ["Email"]
            }
        }
    }
 }'

```

| Field | Required | Type | Description |
| ----- | -------- | ---- | ----------- |
| `name` | Yes | String | The name of the configuration. This is used as the key in the Narrative API. |
| `configurationDetails` | Yes | Object | An object that contains details for the configuration, including the categories, audience details, marketing actions, narrative precision, and namespace. |
| `category` | Yes | Array | An array that contains information about the categories that you want your configuration to use. |
| `category.name` | Yes | String | The name of the category you want to use. This **must** match a value from the GET categories API call. |
| `category.attributes` | Yes | Array | An array of attributes that you want to use. These attributes **must** be part of the category you used. |
| `segments` | No | Object | An object that contains the audiences you want to add to the configuration. |
| `segments.limit` | No | Number | The maximum number of audiences you want to add to the configuration. |
| `segments.selection_mode` | No | String | The method which the audiences are chosen. At this time, only `inclusion` is supported. |
| `segments.inclusion` | No | Array | An array that contains the audiences you want to include. The audiences are written as objects that contain both the segment definition ID and the priority, where a lower number means a higher priority (so "1" is the highest priority). |
| `marketingActions` | No | Array | An array that contains the marketing actions you want to apply to the configuration. For more information on marketing actions, read the [marketing actions endpoint guide](/help/data-governance/api/marketing-actions.md). |
| `narrativePrecision` | No | String | The level of precision that the configuration narrative will be. Supported values include `precise` and `fuzzy`. |
| `personNamespace` | No | Object | An object that contains details of the identity namespace for the configuration. If this field is left blank, the sandbox's default namespace will be used. |
| `personNamespace.isPersonNamespaceEnabled` | No | Boolean | If set to `true`, the namespaces listed in `personNamespace.code` are used. Otherwise, the sandbox's default namespace will be used. |
| `personNamespace.code` | No | Array | An array that lists the identity namespace codes you want the narrative to use. |

+++

**Response**

A successful response returns HTTP status 200 with a unique request ID and the details of your newly created configuration.

+++ A sample response that contains the newly created configuration.

```json
{
    "requestId": "aaaa479b53a61598",
    "result": {
        [
            "CustomerSummary"
        ],
        "configurations": [
            {
                "name": "",
                "configurationDetails": {
                    "category": [
                        {
                            "name": "Customer Demographics",
                            "llm_desc": "",
                            "attributes": [
                                {
                                    "field": "person.name.firstName",
                                    "xdm_desc": "First Name",
                                    "llm_desc": ""
                                },
                                {
                                    "field": "person.name.lastName",
                                    "xdm_desc": "Last Name",
                                    "llm_desc": ""
                                }
                            ]                            
                        }
                    ]
                },
                "segments": {
                    "limit": 1,
                    "selection_mode": "inclusion",
                    "inclusion": [
                        {
                            "id": "b2cf20ca-5d07-4ef2-b50a-994eb2c11349",
                            "priority": "1",
                            "name": "High Value Customers",
                            "description": "Customers with LTV > $500",
                            "totalProfiles": 125000
                        }
                    ],
                    "exclusion": []
                },
                "marketingActions": [],
                "narrative_precision": "fuzzy",
                "personNamespace": {
                    "isPersonNamespaceEnabled": true,
                    "code": [
                        {
                            "code": "Email",
                            "name": "Email"
                        }
                    ]
                }
            }
        ]
    }
}
```

+++

>[!ENDTABS]

Now that the profile context has been created, you can save the configuration against Brand Concierge.

In Brand Concierge, select the concierge you want to apply the profile configuration to.

IMAGE

Once you've selected the concierge, go the **Personalization** tab and select the previously created configuration.

IMAGE

## Use cases {#use-cases}

Profile with unstructured data lets you use conversational data as an activation signal for further engagements, which allows you to more easily drive inbound personalizations and outbound activations. As a result, you can use these profiles in a variety of use cases:

- Interest-based activation
  - As a retail business, an authenticated shopper mentions a dietary preference in conversation. The extracted signal qualifies them for a "gluten-free" interest audience, which can be used for inbound and outbound activation such as tailored offers and journeys.
- Negative-experience suppression
  - As a big-box retail company, frustration is detected in a customer's conversation. This customer is then suppressed from a promotional audience to avoid sending a tone-deaf outbound message.
- Intent-based routing and next-session personalization
  - As a financial service or fintech company, a customer mentions a life event (such as "married", "moved states", or "new job") in a conversation. These keywords are extracted and used to personalize their next session to match the customer to an advisor who has the relevant domain expertise.

## Sample flow {#sample-flow}

Let's say that you have a company that offers financial services to clients. 

In this scenario, one of your clients asks an agent about equities. By using Profile with unstructured data, Brand Concierge and Experience Platform can extract intent from these conversations, which lets you send personalized responses through the agent.

Additionally, since this context is shared between all Experience Platform applications, you can continue the equity conversation in multiple forms. For example, you can send the client a follow up email asking about equities, or connect with the client on other platforms like WhatsApp with the full profile context.

## Frequently asked questions {#faq}

The following section lists frequently asked questions related to profiles with unstructured data.

### Are profiles with unstructured data separate from a normal customer profile?

+++ Answer

No. Profile unstructured data **extends** Real-Time Customer Profile. As a result, you can use your existing profile foundational data in addition to the unstructured data. This does **not** replace the existing Real-Time Customer Profile.

+++

### What is the profile context/profile narrative?

+++ Answer

The profile context (profile narrative) is the consolidated information provided to an AI agent to improve an interaction. The context can combine the following data:

- Profile attributes
- Audience membership
- Behavioral history
- Browsing activity
- Previous conversations

+++

### What is a signal?

+++ Answer

A signal is a structured, activation-ready representation of meaning that is detected within an unstructured interaction. Examples of signals include the following:

- Product interest
- Cancellation intent
- A stated preference
- A life event
- A negative experience
- An industry
- A buyer role

Signals can either be defined by marketers or created by the system by analyzing individual signals discovered within the data.

+++

### How does a signal differ from the raw conversation?

+++ Answer

A signal represents a defined business concept that can be stored with profile-related event data, while the raw conversation is the unstructured source data.

+++

### Does Profile with unstructured data only support Brand Concierge?

+++ Answer

No. Profile with unstructured data supports Adobe, customer-built, and third-party customer-facing agents. 

+++

### What data sources can I use?

+++ Answer

The following sources are supported:

- Brand Concierge and non-Brand Concierge conversations
- WhatsApp conversations
- Search queries
- Call-center transcripts
- Chat logs
- Surveys
- Webinar and sales-call transcripts
- Other text-based interactions

+++
