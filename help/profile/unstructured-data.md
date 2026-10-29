---
title: Real-Time Customer Profile with Unstructured Data
description: Learn how to use Real-Time Customer Profile with unstructured data, which lets you have access to unprocessed data. This lets you better personalize conversations since the customer context can be shared across multiple platforms.
---

# Personalize customer conversations using Real-Time Customer Profile with unstructured data

>[!AVAILABILITY]
>
>This feature is currently in **beta**. The functionality and documentation are subject to change. To participate in this beta, contact Adobe Customer Care or your account representative.

In Adobe Experience Platform, you can consolidate your customer data into a unified view by combining data from multiple channels with Real-Time Customer Profile. With support for unstructured data, Experience Platform extends these capabilities, semantically letting you use conversational and other unstructured customer data as part of the profile building blocks.

## Understanding Profile with unstructured data {#understanding}

Real-Time Customer Profile currently combines structured data from multiple channels, including online, offline, CRM, and third party, consolidating this data into a unified view that offers an actionable and timestamped account of every customer interaction. However, this doesn't cover unstructured data ingestion, meaning data from conversations, transcripts, or other multi-modal data (such as PDFs or images) are unavailable to be used with Profile.

Profile with unstructured data lets you have access to unprocessed data, which lets you better personalize conversations since the customer context will continue to be shared across multiple platforms, including Brand Concierge. 

Profile with unstructured data provides the following capabilities to Experience Platform customers:

- **Understand customer intent**: Ingest conversations, messaging, search queries, call transcripts, surveys, and other text-based interactions to enrich the existing customer profile.
- **Personalize conversations**: Combine profile attributes, audience membership, and conversation history together so Brand Concierge and other customer-facing agents can deliver personalized experiences with continuity across agents, sessions, devices, and channels.
- **Activate intent in real time**: Extract marketer-defined signals from conversations and activate them through audiences, journeys, and personalization. These downstream activations can be used throughout Experience Platform, including Adobe Journey Optimizer and Target.

## Use cases {#use-cases}

Profile with unstructured data lets you use conversational data as an activation signal for further engagements, which allows you to more easily drive inbound personalizations and outbound activations. As a result, you can use these profiles in a variety of use cases:

- **Interest-based activation**: As a retail business, an authenticated shopper mentions a dietary preference in conversation. The extracted signal qualifies them for a "gluten-free" interest audience, which can be used for inbound and outbound activation such as tailored offers and journeys.
- **Negative-experience suppression**: As a big-box retail company, frustration is detected in a customer's conversation. This customer is then suppressed from a promotional audience to avoid sending a tone-deaf outbound message.
- **Intent-based routing and next-session personalization**: As a financial service or fintech company, a customer mentions a life event (such as "married", "moved states", or "new job") in a conversation. These keywords are extracted and used to personalize their next session to match the customer to an advisor who has the relevant domain expertise.

## Sample flow {#sample-flow}

Consider a company that offers financial services to clients. 

In this scenario, one of your clients asks an agent about equities. Since this client is logged in, your agent knows about this user by reading their Real-Time Customer Profile. 

This client then continues the conversation by stating "I've also been meaning to sit down and really review my retirement savings, just haven't gotten around to scheduling it.". By using Profile with unstructured data, Brand Concierge and Experience Platform can extract intent from these conversations, which lets you send personalized responses through the agent.

As a result, Experience Platform can make this client enter the "Financial Planning Interest" audience, and immediately personalize the agent to reply with "Let's make sure your retirement plan is on track — book a free check-in with Alex Agent."

Additionally, since this context is shared between all Experience Platform applications, you can continue the retirement conversation in multiple forms. For example, Adobe Journey Optimizer can automatically send the client an email with a retirement check-in invitation with Alex Agent.

## Beta prerequisites {#prerequisites}

To use Profile with unstructured data, you **must** meet the following prerequisites:

- Already an existing Adobe Experience Platform user
- Do **not** have the Healthcare Shield add-on

If you fulfill all of these prerequisites, contact Adobe Customer Care for more information on requesting enablement for Profile with unstructured data.

## Requirements {#requirements}

Before continuing Profile with unstructured data set up, you'll need to complete the following steps:

- Enable [Identity Graph Linking Rules](/help/identity-service/identity-graph-linking-rules/overview.md)
- Create a profile-enabled dataset
  - Ingest at least one profile into this dataset

Once Profile with unstructured data has been enabled, you can start using this feature by setting up the following steps:

- Ingest unstructured data in Experience Platform
- Configure the profile context to personalize conversations
- Configure signals to extract data from unstructured data for activation

## Ingest unstructured data {#ingest}

In order to use unstructured data as part of your personalization process, you'll first need to ingest that data into Experience Platform.

The method to ingest unstructured data differs, depending on the source of the unstructured data.

>[!BEGINTABS]

>[!TAB Standard raw text]

For the standard simple identity with raw text use case, you can use an ExperienceEvent schema and dataset to ingest the data in to Experience Platform. This is best used for most use cases, including importing transcripts, conversations, notes, and reviews.

### Create a schema

>[!IMPORTANT]
>
>When you create the schema and dataset, do **not** enable it for either Profile or Identity.

You'll first need to create an XDM ExperienceEvent schema for the dataset. This schema needs to include the following information:

- The `unstructuredContent` field group. For more information about the unstructured content field group, look at the [XDM GitHub](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-unstructured-content.schema.json).
- An identity to mark the known individual. This identity can either be an identity map or a field that's marked as the identity descriptor.

To learn how to create a schema, read the [create a schema guide](/help/xdm/tutorials/create-schema-ui.md).

### Create a dataset

After you create the schema, you can create a dataset that uses this schema. To learn how to create a dataset based off of an existing schema, read the [create a dataset guide](/help/catalog/datasets/user-guide.md#schema).

Once you've created the dataset, you can make a PATCH request to the `v2/dataSets` endpoint while providing the ID of the newly created dataset. This lets you update the dataset for usage with Profile with unstructured data.

+++Sample patch request and response to enable the dataset for Profile with unstructured data.

```shell
curl -X PATCH https://platform.adobe.io/data/foundation/catalog/v2/dataSets/67b3077efa10d92ab7a71858
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
    "extensions": {
        "adobe_unifiedProfile": {
            "semanticProfile": {
                "enablement": {
                    "status": "READY"
                }
            }
        },
        "adobe_dataContent": {
            "channel": "call_transcripts"
        }
    }
  }'
```

A successful response returns HTTP status 200 with the ID of your newly updated dataset.

```json
[
    "@/dataSets/67b3077efa10d92ab7a71858"
]
```

+++

### Ingest data

Now that the schema and dataset are set up, you can now start ingesting data into Experience Platform. You can use a standard source connector to load the data into Experience Platform, as CSV, JSON, and Parquet are all supported. When ingesting the data, put the unstructured text into the `rawText` field and the identity in the `identity` column.

You can now contact Adobe Customer Care with information such as the organization ID, sandbox information, dataset information, and method of ingestion (simple ID with raw text XDM) to complete the setup of data ingestion.

>[!TAB WhatsApp Business]

>[!AVAILABILITY]
>
>The [!DNL WhatsApp] connector is in **closed beta**.

To learn how to set up the [!DNL WhatsApp] connector, read the [[!DNL WhatsApp] connector guide](/help/sources/connectors/marketing-automation/whatsapp.md).

When you set up the WhatsApp connector, the **[!DNL WhatsApp] Webhook Raw Event** dataset is automatically created. This dataset is automatically enabled for Profile with unstructured data with the channel info also applied.

After setting up the [!DNL WhatsApp] connector, contact Adobe Customer Care with information including the organization ID, sandbox information, channel ([!DNL WhatsApp] Business), and the mode (streaming or batch) to allowlist the connector to be used for Profile with unstructured data.

>[!TAB Brand Concierge Conversations]

For Brand Concierge conversations, three datasets that track user prompt, agent response, and feedback are automatically created. 

To enable these datasets for Profile with unstructured data, you need to make a PATCH request to the `v2/dataSets` endpoint while providing the ID of each of the three datasets.

+++Sample patch request and response to enable the dataset for Profile with unstructured data.

```shell
curl -X PATCH https://platform.adobe.io/data/foundation/catalog/v2/dataSets/67b3077efa10d92ab7a71858
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
    "extensions": {
        "adobe_unifiedProfile": {
            "semanticProfile": {
                "enablement": {
                    "status": "READY"
                }
            }
        }
    }
  }'
```

A successful response returns HTTP status 200 with the ID of your newly updated dataset.

```json
[
    "@/dataSets/67b3077efa10d92ab7a71858"
]
```

+++

>[!ENDTABS]

## Configure the profile context

After ingesting unstructured data into Experience Platform, you can configure the profile context to help personalize your conversations. You can configure this profile narrative either using Coworker or using the Experience Platform APIs.

>[!BEGINTABS]

>[!TAB CX Enterprise Coworker]

You can begin the setup by asking "I want to create a semantic profile configuration" within Coworker.

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
| `narrativePrecision` | No | String | The level of precision that the configuration narrative will be. Supported values include `precise`, `fuzzy`, and `value_only`. |
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

Now that the profile context has been created, you can save the configuration against Brand Concierge or any other customer-facing agent.

### Profile context in Brand Concierge {#profile-context-brand-concierge}

In Brand Concierge, select the concierge you want to apply the profile configuration to.

![Brand Concierge is displayed, showing a list of concierges.](/help/profile/images/unstructured-data/select-concierge.png)

Once you've selected the concierge, go the **Personalization** tab and select the previously created configuration.

![The personalization tab is displayed in Brand Concierge.](/help/profile/images/unstructured-data/select-configuration.png)

### Profile context with other customer-facing agents {#profile-context-other}

To use profile context with other customer-facing agents, you'll need to use the Experience Platform API to look up the customer's profile context and to retrieve the conversation history. By retrieving both of these values, your agent can properly retrieve the full and relevant context before starting a conversation.

To look up the customer's profile context, you'll need to make a GET request to the `/semanticprofile/lookup/narrative` endpoint while providing the `entityIdNS`, `entityId`, and `configurationName` as query parameters.

+++ Sample request and response to getting the profile narrative

```shell
curl -X GET "https://platform.adobe.io/data/core/semanticprofile/lookup/narrative?entityIdNS=Email&entityId=jane.doe%2B1@example.com&configurationName=CustomerSummary" \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-sandbox-name: {SANDBOX_NAME}"
```

| Query parameter | Description |
| --------------- | ----------- |
| `entityIdNS` | The identity namespace. This must be a namespace that is defined in your sandbox. Possible values include `Email`, `ECID`, and `CRMID`. |
| `entityId` | The identity value within the namespace. You **must** URL encode reserved characters. |
| `configurationName` | The name of the previously created configuration. | 

A successful response returns HTTP status 200 with information about the profile context.

```json
{
    "requestId": "7f3a9c8e-4d7b-4a6e-9f2c-1b6e8d4a2c91",
    "narrative": "Jane Doe is a member of the 'High Value Loyalty' audience. Her primary email address is jane.doe+1@example.com."
}
```

| Field | Description |
| ----- | ----------- |
| `requestId` | The unique ID generated for the request. |
| `narrative` | The generated natural language profile summary. |

+++

To look up a customer's previous conversation history, you'll need to make a POST request to the `/semanticprofile/query/v1/profile` endpoint, while providing the `entityIdNS` and `entityId` as query parameters.

+++ Sample request and response

```shell
curl -X POST "https://platform.adobe.io.data/core/semanticprofile/query/v1/profile?entityIdNS=Email&entityId=jane.doe%2B1@example.com" \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '{
    "conversations": {}
 }'
```

| Query parameter | Description |
| --------------- | ----------- |
| `entityIdNS` | The identity namespace. This must be a namespace that is defined in your sandbox. Possible values include `Email`, `ECID`, and `CRMID`. |
| `entityId` | The identity value within the namespace. You **must** URL encode reserved characters. |

| Request field | Type | Description |
| ------------- | -------- | ---- | ----------- |
| `conversations` | Object | An object that determines you want to return information about the conversations. By leaving it as an empty object, you automatically will receive information about the interactions, metadata, and signals.  |

A sample response returns HTTP status 200 with information about the conversations for the requested entity.

```json
{
    "conversations": {
        "items": [{
            "conversation_id": "conv-001",
            "channel": "web-chat",
            "created_at": "2026-05-02T14:03:11Z",
            "last_active_at": "2026-05-02T14:21:55Z",
            "participants": [{ 
                "identity_map": { 
                    "Email": [{ 
                        "id": "jane.doe+1@example.com", 
                        "primary": true
                    }] 
                }, 
                "role": "customer", 
                "is_author": true 
            }],
            "interactions": [{
                "interaction_id": "int-001",
                "timestamp": "2026-05-02T14:03:11Z",
                "contents": [{ 
                    "content_value": "Hi, I'd like to upgrade my plan.", 
                    "content_type": "TEXT" 
                }]
            }]
        }],
    "has_more": true,
    "page_token": "eyJjdXJzb3IiOi…"
  }
}
```

+++

After getting both the narrative and conversations, you can feed this information to your third-party AI agents. As a result, the AI agent will have information about who the customer is as well as information about what the customer discussed.

## Configure signals to extract data {#configure-signals}

Once you configure the profile context, you can now configure signals to extract data from your unstructured data.

You can begin this process by going to Coworker and asking "Let me extract signals from conversations". Coworker then asks what type of signals you want to detect from the conversations.

![The "What to detect" is displayed within Coworker.](/help/profile/images/unstructured-data/what-to-detect.png)

Next, Coworker asks what type of brand or business these conversations are part of.

![Coworker asks the user about brand or context for the signal.](/help/profile/images/unstructured-data/type-of-business.png)

Finally, Coworker asks you if you want to create a new signal group or if you want to add to an existing signal group.

![Coworker asks if you want to create a new signal or update an existing signal.](/help/profile/images/unstructured-data/new-or-existing-signal.png)

You can then confirm if the above steps look accurate, and if you want to proceed with the signal creation.

![Coworker asks if you want to confirm if the steps look accurate.](/help/profile/images/unstructured-data/proceed-with-signal-creation.png)

The signal creation begins. Coworker then creates a signal that  automatically gets added to Experience Platform.

![Coworker lists what you need to copy and paste to insert the signal.](/help/profile/images/unstructured-data/signal-criteria.png)

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
