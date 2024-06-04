---
title: Question guide for AI Assistant
description: Read this document to learn example questions that you can use when querying AI Assistant.
---
# Question guide for AI Assistant

Read this document to for a set of example questions that you can use when querying AI Assistant. 

You can also use this document to learn tips on [how to phrase your questions](#phrasing-your-questions) to get optimal responses from AI Assistant.

## Objective-based questions {#objectives-questions}

The following example questions are grouped by objectives that you can accomplish when using AI Assistant:

| Objective | Description | Example |
| --- | --- | --- |
| Learning concepts and continuing workflows | <ul><li>As a novice user, you can use AI Assistant to learn Real-Time CDP and Adobe Journey Optimizer concepts and onboard yourself to products and features that you are unfamiliar with.</li><li>As an experienced user, you can use AI Assistant to solve an edge case that may be blocking your workflow. |<ul><li>How do I set up a dashboard in Journey Analytics?</li><li>Tell me some use-cases for Real-Time CDP.</li></ul> |
| Troubleshooting | Use AI Assistant to learn how to debug basic errors that you may encounter in your workflow. | <ul><li>What does this error {ERROR_MESSAGE} mean?</li><li>Why am I not able to delete the audience named "Luma: Email Audience"?</li></ul> |
| Sandbox hygiene | Use AI Assistant to identify any duplicates or unused objects so you can efficiently maintain your sandbox. | <ul><li>Can you show me audiences that are similar?</li><li>Are there any schemas which do not have an associated dataset?</li></ul> |
| Value analysis | Use AI Assistant to identify your most used data objects and assess any performance indicators or find the most valuable data objects. | <ul><li>How many profiles are in our "Luma: Email Audience" segment definition?</li><li>When were audiences activated to Experience Cloud Audiences destination?</li></ul> |
| Search | Use AI Assistant to find supported Experience Platform objects such as audiences, datasets, destinations, schemas, and sources. | <ul><li>List the audiences containing "Luma" in the name that were created in the last quarter.</li><li>What attributes are in the "Luma: Custom Actions" XDM schema?</li></ul> |
| Impact analysis | Use AI Assistant to identify data objects that have been used in certain workflows so that you can assess the impact of any changes. | <ul><li>Which audiences use `homeAddress.city` in "Luma: PersonProfiles" schema?</li><li>Which datasets are the `consents.marketing.push.val` profile attribute stored in?</li></ul> |

{style="table-layout:auto"}

## Operational insights by entity and product knowledge questions{#objects-questions}

The following questions are grouped by data objects and are classified as either [operational insights](./home.md#operational-insights) or [product knowledge](./home.md#product-knowledge).

| Object | Description |
| --- | --- |
| Audiences - Operational insights | <ul><li>Which audiences use other audiences?</li><li>What is the distribution of the number of profiles across audiences?</li><li>Show me the audiences that were last modified before {RELATIVE_DATE}.</li><li>Which audiences have 0 profiles?</li><li>Is {USE_AUTOCOMPLETE_TO_FILL_AUDIENCE_NAME} used in any other audiences?</li></ul> |
| Attributes - Operational insights | <ul><li>Which audiences have XDM attribute {ATTRIBUTE_PATH} iin their segment definition?</li><li>How many XDM schema attributes are not used in any audiences?</li><li>Which schemas have XDM attribute {ATTRIBUTE_PATH} in them?</li><li>Which XDM attributes are activated?</li><li>Which XDM attributes are used in audiences with more than 10 profiles</li></ul> |
| Dataflows - Operational insights |<ul><li>Which dataflows contribute to {DATASET_NAME} dataset?</li><li>Which source dataflows are not being used or do not have data coming in anymore?</li><li> |
| Datasets - Operational insights | <ul><li>How many datasets have been ingested using the same schema?</li><li>Which source connector is associated with {DATASET_NAME} dataset></li><li>Which datasets are used in each audience?</li><li>Which schemas are not used in any datasets?</li><li>How many datasets do I have?</li></ul> |
| Destinations - Operational insights | <ul><li>Which destinations are in an active state?</li><li>Which destination accounts have 0 audiences activated?</li><li> |
| Journeys - Operational insights | <ul><li>How many journeys do I have?</li><li>Which journeys have been created in {RELATIVE_DATE} (e.g. last week) or {RELATIVE_DATE} (e.g. before/after/on specific date)?</li><li>Show me the list of journeys that were modified in {RELATIVE_DATE} (e.g. last week) or {RELATIVE_DATE} (e.g. before/after/on specific date)?</li><li>List the journeys that I have.</li><li>List the audiences which are used in live journeys.</li></ul> |
| Schemas - Operational insights | <ul><li>Which schema's fields have contributed to the most audiences?</li><li>How many schemas are profile enabled?</li><li>List all schemas modified in the last week.</li><li>Which schemas are not used in any datasets?</li><li>List all schemas created in the last week.</li></ul> |
| Sources - Operational insights | <ul><li>Which sources are in an active state?</li><li>Which source connector is associated with dataset {DATASET_NAME}?</li><li>Which source connector has the highest number of associated accounts?</li><li>Show me the dataflows and their associated source connectors.</li></ul> |
| Pointed learning - Product knowledge (Real-Time CDP and Journey Optimizer) | <ul><li>What can AI Assistant help with?</li><li>What are lookalike audiences?</li><li>How are User Groups related to Roles?</li><li>When should I use a data type vs a field group?</li><li>What is the difference between an identity and a primary or foreign key?</li><li>How is profile richness calculated?</li></ul> |
| Troubleshooting - Product knowledge (Real-Time CDP and Journey Optimizer) | <ul><li>What can AI Assistant help with?</li><li>Can I delete a profile-enabled schema after data is ingested?</li><li>Why can't I delete an audience?</li><li>How long does it take for audiences to be evaluated and for results to be available for targeting?</li></ul> |

{style="table-layout:auto"}

## Phrasing your questions {#phrasing-your-questions}

You must phrase your questions to AI Assistant with clarity and context in order to get as accurate a response as a possible. Refer to the following list of tips for guidance on how to ask a clear question with context:

* State your task and/or question in a concise manner.
* Avoid ambiguous language or overly complex syntax to facilitate comprehension.
* Provide relevant context regarding your task and/or question as context can help AI Assistant generate more relevant responses.

Read the tables below for further guidance on best practices to follow when asking questions to AI Assistant.

The following tables outline best practices you can follow when using AI Assistant:

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

By reading this document, you now have an understanding on how to optimize your questions for AI Assistant. For information on how to use the feature during your workflows, read the [AI Assistant UI guide](ui-guide.md).
