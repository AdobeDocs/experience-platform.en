---
title: Manage Your Data Lifecycle with TTL API Use Cases and Best Practices
description: Learn how to evaluate, set, and manage row-level TTL for datasets using APIs in Adobe Experience Platform. This guide provides best practices, use cases, and step-by-step instructions to optimize data hygiene and storage efficiency while ensuring effective data lifecycle management.
---
# Manage Your data lifecycle with TTL: API use cases and best practices

Managing data efficiently is critical to maintaining performance, controlling costs, and ensuring clean datasets. You can perform row-level expiration Time-To-Live (TTL) to automatically remove outdated data from your Adobe Experience Platform datasets, keeping your storage optimized and relevant. 

This guide explains how to evaluate, set, and manage TTL with the Catalog API to streamline data lifecycle management. By implementing TTL, you can reduce storage costs by automatically removing outdated data, maintain data hygiene by keeping datasets focused and relevant, and enhance query performance by minimizing outdated records. Effective TTL management also helps optimize data retention to align with business needs, keeping your datasets efficient and cost-effective.

In this guide, you'll learn when and why to apply TTL to your datasets so you can configure the optimal settings for your data lifecycle. You'll also learn how to check, set, and update TTL values using API calls for seamless workflow integration. Additionally, this guide covers best practices to help you avoid common pitfalls and implement TTL effectively, keeping your data optimized and well-managed. 

>[!IMPORTANT]
>
> TTL is designed to help users optimize data lifecycle management and improve storage efficiency. It is not a tool for compliance purposes. Compliance may require broader strategies beyond TTL settings.

## Why use TTL for row-level data management

As datasets grow, efficient data management is crucial for maintaining performance, controlling costs, and retaining only relevant information. Use row-level data expiration to automatically remove outdated records, optimize storage, and automate data workflows, eliminating the need for manual intervention.

You should consider using row-level data expiration if your datasets contain time-sensitive data that becomes less useful after a certain period. TTL helps you:  

- **Reduce storage costs** by automatically expiring outdated records, preventing unnecessary data accumulation.  
- **Improve system performance** by minimizing the volume of irrelevant data that can slow down queries and increase processing time.  
- **Simplify data hygiene** by ensuring that datasets remain lean and manageable, reducing the risk of outdated or inaccurate information affecting decision-making.  

### Industry example

As an example, consider a video streaming platform that tracks user interactions, such as video views, searches, and recommendations. Recent engagement data is crucial for personalization, whereas older activity logs (for example, interactions from over a year ago) are likely no longer relevant. Using row expiration, the streaming platform can automatically remove outdated logs, to ensure that only the most relevant data is used for analytics and recommendations.


<!--  -->
<!-- - Explain **when and why** customers should consider using TTL for datasets.  
- Highlight scenarios where TTL adds value:
  - Managing storage costs by expiring outdated rows.
  - Optimizing dataset performance by removing irrelevant data.
  - Simplifying data hygiene workflows.  
- **Avoid mentioning compliance** here, per ARB feedback. -->

## Prerequisites and planning

- **Pre-API Evaluation Steps**:
  - Questions users should ask before setting TTL:
    - Is this dataset suitable for TTL?
    - How frequently is the dataset queried, and does historical data matter?  
  - **Considerations**:  
    - Dataset relevance over time.  
    - Impact of TTL on downstream processes.  
    - Storage cost vs. retention value.  
- **Planning Queries**:  
  - Provide examples of queries to assess dataset size or relevance:

    ```sql
    SELECT COUNT(1) FROM [datasetName] WHERE timestamp > date_sub(now(), INTERVAL 30 DAY);
    ```
  
  - Explain how these queries help users determine appropriate TTL values.

## Get started with TTL management

Section intro.

>[!NOTE]
>
>This document covers row-level expiration, which deletes individual expired rows within a dataset while keeping the dataset itself intact. It does not apply to dataset expiration, which removes entire datasets and is managed by a separate feature. For dataset-level expiration, refer to the [dataset expiration API documentation](../../hygiene/api/dataset-expiration.md).

### How to Check Current TTL Settings

- **Endpoint**: `GET /v2/datasets/{ID}`  
- Provide an example API call to retrieve TTL settings, showing where `rowExpiration` is located in the metadata:  
  
  ```console
  GET https://platform.adobe.io/data/foundation/catalog/v2/datasets/{datasetID}
  ```

### How to set TTL for a dataset

- **Endpoint**: `PATCH /v2/datasets/{ID}`  
- Provide a clear, real-world example of setting TTL, such as:  
  
  ```json
  {
      "extensions": {
          "adobe_lakeHouse": {
              "rowExpiration": {
                  "ttlValue": "P3M"  // 3 months
              }
          }
      }
  }
  ```  

- **Explain what this does** and how users can adapt it for their needs.

### How to Update TTL

- Clarify that updating TTL uses the same `PATCH` method. Include example scenarios where TTL might need to be extended or shortened.  
- Example:
    
  ```json
  "ttlValue": "P6M"  // Extend to 6 months
  ```

## Best practices for setting TTL

- Provide recommendations on TTL duration based on dataset usage:
  - Frequently accessed datasets: shorter TTL (e.g., 30-90 days).  
  - Archival datasets: longer TTL (e.g., 1 year).  
- Mention common pitfalls to avoid (e.g., setting TTL too short and losing valuable data).

## Limitations of TTL

- Explicitly call out what TTL cannot do:
  - TTL is for row-level expiration, not full dataset deletion.  
  - TTL cannot be removed once set; it can only be updated.  
  - Explain that TTL is not suitable for compliance requirements.  

## FAQs and Common Use Cases

- FAQs:
  - Can I remove a TTL? (Answer: No, but you can update it.)
  - What happens if I don't set TTL? (Answer: Rows are retained indefinitely.)  
- Use Cases:
  - Highlight scenarios like "Managing log data for cost efficiency" or "Cleaning up irrelevant event data in the Data Lake."

<!-- ## References and Related Resources**   -->
## Next steps

- Include links to:  
  - Catalog API documentation.  
  - Internal wiki resources on TTL.  
  - Related Experience League articles.

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
