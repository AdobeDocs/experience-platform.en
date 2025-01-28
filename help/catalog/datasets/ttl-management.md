---
title: Manage your Data Lifecycle with TTL API Use Cases and Best Practices
description:
---
# Manage your data lifecycle with TTL: API use cases and best practices

<!-- # A practical API guide to dataset retention and TTL management -->

<!-- What does it do? -->
<!-- why does a user want to do that? -->

<!-- ## So you think you want to set a TTL -->

## Why consider this use case

<!-- 1. Highlight use cases and value realization:
    Explain when and why customers should set TTL. (This section should focus on explaining the concept of TTL (Time-To-Live) and its impact on data lifecycle management.)
    What TTL should be set. Illustrate scenarios where TTL improves data management outcomes. -->

<!-- Explain the benefit of the use case  -->
<!-- Explain the scenario of the use case and shy readers wold find themselves in that situation -->
<!-- Explain the benefit of the use case in more detail  -->
<!-- Sell it. mention other features /aspects of the tool. -->

## Prerequisites and planning

<!-- What do you as a user need to consider 
1. Guide users on pre-API evaluation steps:
     Help users evaluate their datasets to decide if TTL is appropriate. (What queries to use.)
     Explain considerations such as compliance, storage costs, and data hygiene.
-->

## Why you DO

Setting TTL can be beneficial for various reasons, including:

- Compliance with data retention policies.
- Cost management by reducing storage needs.
- Ensuring outdated data does not impact analytics.

This section should provide insight into when TTL should be considered and its strategic benefits.

<!-- 
1. Provide query examples for decision-making:
    Include API examples to:
    Check if a TTL is already applied to a dataset. 
    Retrieve current TTL settings.
    Perform TTL forecasting to predict the impact of retention policies.
 -->

## Why you DONT

Setting a TTL might not be suitable in cases such as:

- Data that must be retained indefinitely for regulatory reasons.
- Use cases where historical analysis is critical.
- Risk of accidental data loss due to misconfiguration.

Referencing TTL retrieval methods can help users make informed decisions.

## What should your TTL for Lake be?

When determining the appropriate TTL, consider:

- The data's relevance over time.
- Compliance requirements.
- Storage cost vs. retention value.

Provide recommendations based on industry best practices and use cases.

<!-- 
1. Detail API workflows for TTL management:
    Provide clear instructions for:
    Setting a new TTL for a dataset.
    Updating existing TTL settings. (PATCH /v2/dataSets/{id})
    Verifying configurations post-implementation.
 -->

## How do you set it?

**Endpoint:** `PATCH /v2/datasets/{ID}`  

**Example API Call:**  

```console
PATCH https://platform.adobe.io/data/foundation/catalog/v2/datasets/{datasetID} 
Authorization: Bearer {ACCESS_TOKEN}
x-api-key: {API_KEY}
Content-Type: application/json

{ 
    "ttlInSeconds": 5184000 // Example: Extending to 60 days in seconds 
}
```

**Explanation:**  

Updating TTL follows the same process as setting it initially. Users should review compliance policies before making changes.

## How do you check what it is?

**Endpoint:** `GET /v2/datasets/{ID}`  

**Example API Call:**  

```console
GET https://platform.adobe.io/data/foundation/catalog/v2/datasets/{datasetID} 
Authorization: Bearer {ACCESS_TOKEN} 
x-api-key: {API_KEY}
```

**Sample Response:**  

```json
{ 
    "id": "12345", 
    "name": "Sample Dataset", 
    "ttlInSeconds": 2592000, 
    "created": "2023-01-01T00:00:00Z" 
}
```


**Explanation:**  
The response includes the `ttlInSeconds` value, which indicates the current TTL setting. Convert this to human-readable format when reviewing TTL configurations.

## How do you remove it? (Spoiler, you can't)

No API call available.

TTL values cannot be removed once set. Users can modify the TTL duration but not delete it entirely. 

Consider providing workarounds or best practices to manage dataset expiration effectively.

<!-- 
Limitations
'How does a customer update Event Dataset Lake TTL?'
'Can you remove it? No
 -->

<!--  -->
<!-- 
The ask is to create an **API-based use case playbook** focused on **helping users evaluate and implement a data retention policy using TTL**. Beyond just documenting API calls, the playbook should guide users through **strategic decision-making** and provide actionable steps. Here's what Adam likely envisions:

### **Key Aspects of the API-Based Playbook:**

1. **Pre-API Evaluation Steps:**
   - Guidance on **how users should evaluate their datasets** to decide if TTL is appropriate.
   - Considerations for **compliance, storage costs, and data lifecycle needs.**
   - Examples of questions users should answer:
     - "Does this dataset need a retention policy?"
     - "What is the most appropriate TTL value for this dataset?"
     - "How would TTL impact downstream processes?"

2. **Query Examples for Decision-Making:**
   - Examples of **API queries users should make to assess their current dataset state** before applying or modifying TTL:
     - **Check if a TTL is already applied** to a dataset.
     - **Retrieve current TTL settings.**
   - Queries for **TTL forecasting** or predicting the impact of a proposed TTL.

3. **API Steps to Manage TTL:**
   - Detailed **step-by-step guidance** for:
     - **Setting a new TTL** for a dataset.
     - **Updating an existing TTL.**
     - Verifying the TTL configuration after applying changes.
   - A note on **why TTL cannot be removed** and how users can manage this limitation.

4. **Value Realization and Use Case Scenarios:**
   - **Why and when users should set TTL.**
   - Use cases highlighting the **value of automating data retention policies** (e.g., cost efficiency, compliance, data hygiene).
   - Best practices for setting TTL for **event datasets in the Data Lake.**

5. **Collaboration and Refinement:**
   - Adam suggests working with @fdiao to refine the document. This implies that **Fdiao has expertise or oversight** on either the API or the strategic use case approach and should be consulted for alignment and accuracy.

### **Additional Considerations Based on Adam's Notes:**
- The **focus is on customer use cases** and **value realization**, not just technical API instructions.
- The playbook should bridge the gap between **strategic use case guidance** and **API implementation details.**
- It needs to **remain actionable and followable**, making it clear how users can make decisions and execute them step-by-step with the API.

---

### **Summary of What Adam Wants:**
Adam is asking for an **API-based use case playbook** that helps users:
1. Understand the **value of TTL** and decide when and how to use it.
2. Perform **queries to assess the dataset's current state** and evaluate TTL needs.
3. Follow **step-by-step API instructions** to set, update, and verify TTL configurations.
4. Integrate **examples and guidance** to help customers strategically manage data retention policies.

By focusing on both **decision-making (the why)** and **execution (the how)**, this document should empower users to optimize their data lifecycle with TTL effectively.
 -->
