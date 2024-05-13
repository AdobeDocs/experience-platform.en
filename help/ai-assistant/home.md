---
title: AI Assistant for Adobe Experience Platform Overview
description: Learn about AI Assistant, its nuances and use cases, and how you can use it to expedite your workflow with Adobe Experience Platform and Real-Time Customer Data Platform.
hide: true
hidefromtoc: true
---
# AI Assistant for Adobe Experience Platform

Read this document to learn about AI Assistant for Adobe Experience Platform.

AI Assistant is a UI feature that you can use to understand concepts, troubleshoot problems, and generate insights about your Adobe Experience Platform and Real-Time Customer Data Platform data objects.

You can query AI Assistant for information such as:

* Guidance on how to perform tasks pertaining to data and audiences.
* Statuses and metrics of the existing data objects in your organization.
* Use case examples and nuances to better understand your Experience Platform and Real-Time CDP data objects.

>[!BEGINSHADEBOX]

**How does AI Assistant work?**

AI Assistant responds to your submitted questions by querying a database and then translating data from the database into a human-readable answer.

This internal representation of underlying data is also known as the [!DNL Knowledge Graph] - a comprehensive web of concepts, data, and metadata for a given answer. 

The [!DNL Knowledge Graph] consists of sub-graphs that are referenced whenever queries submitted:

* Customer usage data.
* Customer usage data across various meta-stores.
* Experience League documentation.

There are two classes of questions to consider before querying AI Assistant:

**Concept Questions**: Concept questions are about Adobe concepts related to data or audiences. Some examples of concept questions include:

* What is the difference between batch and streaming segmentation?
* How do I build a segment?
* What is an identity map?

**Usage Questions**: Usage questions are about the data objects inside your organization's sandbox. Some examples of usage questions include:

* How many datasets do I have?
* How many schema attributes have never been used?
* Which audiences have been activated?

>[!ENDSHADEBOX]

## Objectives that you can accomplish with AI Assistant {#objectives}

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

For usage data queries, answers may not reflect the current state of the UI. The data backing these questions is updated once every 24 hours. For example, changes that users make in Real-Time CDP during the daytime are synced with the data stores at night, and then they become available for user questions in the morning. You may need to format your questions as: 
`When was the audience with the title "ACME Audience" created?` instead of, `When was the "ACME AUdience" audience created?`.

You will need to log into a sandbox to inquire about specific data related to objects like audiences, schemas, datasets, attributes, and destinations.

### Example data usage questions {#example-data-usage-questions}

Read the table below for examples of data usage questions and their respective use cases:

| Question type | Use case| Examples |
| --- | --- | --- | 
| Data lineage | Track usage of one or multiple objects across other Experience Platform objects | <ul><li>Which datasets use the "ACME schema" schema?</li><li>How many datasets have been ingested using the same schema?</li><li>Which datasets have been used in activated audiences?</li><li>List the schemas which have attributes used in activated audiences.</li><li>Show me the audiences that are activated to "ACME Destinations" and have more than 1000 profiles.</li><li>Show me the attributes which are used in the activated audiences which have been modified after Jan 2023.</li><li>What are the datasets ingested via "ACME Amazon S3" source?</li><li>Which dataflows are associated with "ACME Loyalty Dataflow"?</li><li>List the schemas that are related to activated audiences and were created in last 1 year.</li></ul> |
| Distribution and aggregations | Summary-based questions about Experience Platform object usage | <ul><li>What is the percentage of activated audiences?</li><li>How many fields are used in segmentation?</li><li>Which audiences are activated to the most number of destinations?</li><li>List duplicate audiences.</li><li>Show me the audiences activated to "ACME Destinations" and rank them by profile size.</li><li>What is the percentage of the audiences which have not been activated but have more than 100 profiles. Show me their names.</li><li>List the 3 source connectors ingesting data into my datasets.</li><li>List me the top 5 attributes used in activated audiences based on their occurrence.</li></ul> |
| Object lookup | Retrieve or access an Experience Platform object or it's properties. | <ul><li>Which datasets do not have any schema associated with them</li><li>List the attributes used for "ACME Audience"?</li><li>Give me the list of schemas which are profile enabled but have not been modified since their creation.</li><li>Which audiences have been modified in the last week?</li><li>List me the audiences which have the same segment definitions along with their creation date.</li><li>Which datasets are profile enabled and also include how many audiences have been created from each dataset.</li><li>Which source accounts are associated with dataset XYZ?</li><li>Show me the segment definition and modification date of "ACME Audience".</li></ul>|
| Object comparison | Identify duplicate audiences. | <ul><li>Based on their segment definition, list the audiences that are duplicates.</li><li>Which duplicate audiences are activated to "ACME Destinations".</li></ul> |

{style="table-layout:auto"}

## Phrasing your questions {#phrasing-your-questions}

You must phrase your questions to AI Assistant with clarity and context in order to get as accurate a response as a possible. Refer to the following list of tips for guidance on how to ask a clear question with context:

* State your task and/or question in a concise manner.
* Avoid ambiguous language or overly complex syntax to facilitate comprehension.
* Provide relevant context regarding your task and/or question as context can help AI Assistant generate more relevant responses.

Read the table below for further guidance on best practices to follow when asking questions to AI Assistant:

| Do | Example |
| --- | --- |
| <ul><li>Be specific about the object or information that you want to retrieve or analyze.</li><li>Try placing your data object names in quotes. If you only know a part of the object name, you may also specify that in the question.</li><li>Use [object auto-complete](./ui-guide.md#use-auto-complete) to help AI Assistant better understand the context of your query.</li></ul> | <ul><li>Which datasets use the "Luma - Loyalty" schema?</li><li>Show me the activated segments which have "Luma" in their names. Rank them by profile count.</li></ul> |
| <ul><li>Avoid ambiguity and use clear language</li><li>Use precise terminology to ensure better clarity in your query.</li><li>When asking questions regarding Adobe Experience Platform, try to use terminology specific to Experience Platform to improve relevance of responses.</li></ul> | <ul><li>How many profiles do I have in "ACME Audience".</li><li>Show me the top 5 XDM attributes used in activated audiences.</li></ul> |
| <ul><li>Provide context or specify a criteria to filter your results.</li><li>Use a filter criteria in the questions to limit the volume of data in the response.</li></ul> | <ul><li>Show me audiences that have not been activated and were created more than 6 months ago and have never been modified.</li><li>Show me audiences activated to "ACME Destination" and have more than 10000 profiles.</li></ul> |

{style="table-layout:auto"}

| Don't | Example |
| --- | --- |
| Use vague or ambiguous language. | <ul><li>Give me information about datasets.</li><li>How many users do I have in "ACME Audience"?</li><li>Show segments.</li><li>List attributes.</li></ul>|
| Make incomplete requests. | "Luma - Loyalty Dataset" |
| Assume knowledge without contexts. | <ul><li>Audiences in the last 6 months.</li><li>Build a query for me.</li></ul>|
| Formulate overly complex queries. | Provide a comprehensive analysis of data lineage across all objects and their dependencies. |
| Omit criteria or parameters. | Show me datasets. |

{style="table-layout:auto"}

## Next steps

Now that you have a general understanding of AI Assistant, you can now proceed and use AI Assistant during your workflows. For more information, read the [AI Assistant UI guide](./ui-guide.md).

## Additional information {#additional-information}

Refer to this section for additional information on the AI Assistant for Experience Platform.

### Caveats and limitations {#caveats-and-limitations}

The following section outlines current caveats and limitations to considers when using AI Assistant.

#### Limited small talk

You can engage in small talk with the AI Assistant, but this capacity is currently limited.

#### Capability questions

The AI Assistant may give an inaccurate impression of what it can do. It may answer the following types of questions incorrectly:

| Example question | Note |
| --- | --- |
| Can you answer questions on {ENTITY}? | As long as the AI Assistant is able to find a single page referencing a given entity in its index, then it will respond yes. |
| Do you know **x** language? | The AI Assistant currently only supports English, but may answer "yes" due to the underlying model being able to support it. |
| Can you do...? | The AI Assistant may answer yes, even though it cannot. |

### Tips {#tips}

The following section outlines some tips and workarounds to consider when using AI Assistant.

#### Questions may be answered with the wrong information source

There are instances when your question about your usage data can result in an answer based on the documentation. This is because the AI Assistant can incorrectly route your question to the wrong information source. You can prevent this by:

* Rephrasing your question to use more SQL-like language
* Explicitly calling out the information source to use.

Read the table below for examples:

| Bad question | Good question | Notes |
| --- | --- | --- |
| What is my biggest audience? | What is my biggest audience? Using data. | Explicitly tell the AI Assistant that you want the answer to be based on data. |
| What is my biggest audience? | List my biggest audience. | There are instances where a "what..." question can be mistaken for a documentation-based question. Using a command like "list" is a stronger indicator that you are asking a question with data in context. |
| How many datasets do I have? | Count my datasets. | The original question works for audiences, but it may not work with datasets. |