---
title: AI Assistant for Adobe Experience Platform Overview
description: 
badge: Beta
hide: true
hidefromtoc: true
---

# AI Assistant for Adobe Experience Platform

AI Assistant is a UI feature that you can use to understand concepts, troubleshoot problems, and generate insights about your Adobe Experience Platform and Real-Time Customer Data Platform data objects.

You can query AI Assistant for information such as:

* Guidance on how to perform tasks pertaining to data and audiences.
* Statuses and metrics of the existing data objects in your organization.
* Use case examples and nuances to better understand your data objects, including: 
  * Attributes
  * Audiences
  * Dataflows
  * Datasets
  * Destinations
  * Schemas
  * Sources

**How does AI Assistant work?**

AI Assistant responds to your submitted questions by querying a database and then translating data from the database into a human-readable answer.

This internal representation of underlying data is also known as the [!DNL Knowledge Graph] - a comprehensive web of concepts, data, and metadata for a given answer. 

The [!DNL Knowledge Graph] consists of sub-graphs that are referenced whenever queries submitted:

* Customer usage data.
* Customer usage data across various meta-stores.
* Experience League documentation.

There are two classes of questions to consider before querying AI Assistant:

**Concept Questions**: Concept questions are about Adobe concepts related to data or audiences. Some examples of concept questions include:

* "What is the difference between batch and streaming segmentation?"
* "How do I build a segment?"
* "What is an identity map?"

**Usage Questions**: Usage questions are about the data objects inside your organization's sandbox. Some examples of usage questions include:

* "How many datasets do I have?"
* "How many schema attributes have never been used?"
* "Which audiences have been activated?"

## Objectives that you can accomplish with AI Assistant

You can use AI Assistant for objectives such as:

| Objective | Description | Example |
| --- | --- | --- |
| Learning concepts and continuing workflows | <ul><li>As a novice user, you can use AI Assistant to learn Real-Time CDP and Adobe Journey Optimizer concepts and onboard yourself to products and features that you are unfamiliar with.</li><li>As an experienced user, you can use AI Assistant to solve an edge case that may be blocking your workflow. |<ul><li>How do I set up a dashboard in Journey Analytics?</li><li>Tell me some use-cases for Real-Time CDP.</li></ul> |
| Troubleshooting | Use AI Assistant to learn how to debug basic errors that you may encounter in your workflow. | <ul><li>What does this error {ERROR_MESSAGE} mean?</li><li>Why am I not able to delete the audience named "Luma: Email Audience"?</li></ul> |
| Sandbox hygiene | Use AI Assistant to identify any duplicates or unused objects so you can efficiently maintain your sandbox. | <ul><li>Can you show me audiences that are similar?</li><li>Are there any schemas which do not have an associated dataset?</li></ul> |
| Value analysis | Use AI Assistant to identify your most used data objects and assess any performance indicators or find the most valuable data objects. | <ul><li>How many profiles are in our "Luma: Email Audience" segment definition?</li><li>When were audiences activated to Experience Cloud Audiences destination?</li></ul> |
| Search | Use AI Assistant to find supported Experience Platform objects such as audiences, datasets, destinations, schemas, and sources. | <ul><li>List the audiences containing "Luma" in the name that were created in the last quarter.</li><li>What attributes are in the "Luma: Custom Actions" XDM schema?</li></ul> |
| Impact analysis | Use AI Assistant to identify data objects that have been used in certain workflows so that you can assess the impact of any changes. | <ul><li>Which audiences use `homeAddress.city` in "Luma: PersonProfiles" schema?</li><li>Which datasets are the `consents.marketing.push.val` profile attribute stored in?</li></ul> |

{style="table-layout:auto"}

## Data usage {#data-usage}

You can ask AI Assistant questions about your data usage in the following domains: 

* Attributes
* Audiences
* Dataflows
* Datasets
* Destinations _(Questions regarding accounts and some questions about dataflow cannot be answered at this time.)_
* Schemas _(Questions regarding field groups cannot be answered at this time.)_
* Sources _(Questions regarding accounts cannot be answered at this time.)_

For usage data queries, answers may not reflect the current state of the UI. The data backing these questions is updated once every 24 hours. For example, changes that users make in Real-Time CDP during the daytime are synced with the data stores at night, and then they become available for user questions in the morning. You may need to format your questions as: "When was the audience with the title {TITLE} created?" instead of, "When was the {TITLE} audience created?"

You will need to log into a sandbox to inquire about specific data related to objects like audiences, schemas, datasets, attributes, and destinations.

### Example data usage questions {#example-data-usage-questions}

+++Select to see a list of example data usage questions

| Question type | Description | Examples |
| --- | --- | --- | 
| Data lineage | Track usage of one or multiple objects across other Experience Platform objects | <ul><li>Which dataset(s) use {SCHEMA_NAME} schema?</li><li>How many datasets have been ingested using the same schema?</li><li>Which datasets have been used in activated audiences?</li><li>List the schemas which have attributes used in activated audiences.</li><li>Show me the audiences which are activated to {DESTINATION_ACCOUNT_NAME} and have more than 1000 profiles.</li><li>Show me the attributes which are used in the activated audiences which have been modified after Jan 2023.</li><li>What are the datasets ingested via {SOURCE_NAME}?</li><li>Which dataflows are associated with {DATAFLOW_NAME}</li><li>List the schemas that are related to activated audiences and were created in last 1 year.</li></ul> |
| Distribution and aggregations | Summary-based questions about Experience Platform object usage | <ul><li>What is the percentage of activated audiences?</li><li>How many fields are used in segmentation?</li><li>Which audiences are activated to the most number of destinations?</li><li>List duplicate audiences.</li><li>Show me the audiences activated to {DESTINATION_ACCOUNT_NAME} and rank them by profile size.</li><li>What is the percentage of the audiences which have not been activated but have more than 100 profiles. Show me their names.</li><li>List the 3 source connectors ingesting data into my datasets.</li><li>List me the top 5 attributes used in activated audiences based on their occurrence.</li></ul> |
| Object lookup | Retrieve or access an Experience Platform object or it's properties. | <ul><li>Which datasets do not have any schema associated with them</li><li>List the attributes used for {AUDIENCE_NAME}?</li><li>Give me the list of schemas which are profile enabled but have not been modified since their creation.</li><li>Which audiences have been modified in the last week?</li><li>List me the audiences which have the same segment definitions along with their creation date.</li><li>Which datasets are profile enabled and also include how many audiences have been created from each dataset.</li><li>Which source accounts are associated with dataset XYZ?</li><li>Show me the segment definition and modification date of {AUDIENCE_NAME}.</li></ul>|

{style="table-layout:auto"}

+++

## Phrasing your questions {#phrasing-your-questions}