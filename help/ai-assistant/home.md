---
title: AI Assistant in Adobe Experience Platform Overview
description: Learn about AI Assistant, its nuances and use cases, and how you can use it to expedite your workflow with Adobe Experience Platform and Real-Time Customer Data Platform.
exl-id: cfd4ac22-fff3-4b50-bbc2-85b6328f603c
---
# AI Assistant in Adobe Experience Platform

Read this document to learn about AI Assistant in Adobe Experience Platform.

AI Assistant in Adobe Experience Platform is a conversational experience that you can use to accelerate your workflows in Adobe applications. You can use AI Assistant to better understand product knowledge, troubleshoot problems, or search through information and find operational insights. AI Assistant supports Experience Platform, Real-Time Customer Data Platform, Adobe Journey Optimizer and Customer Journey Analytics.

>[!IMPORTANT]
>
>* You must agree to [a user agreement](https://adobe.sharepoint.com/:w:/s/ExCUserExperience/EVzJv1jFBiZGnaFEufsfIqwBC_9ehv3KaXTkEMTGpQFRpg?e=qzwOo8) before you can use AI Assistant. The user agreement also contains the public beta agreement. This is so that you can use additional AI Assistant features as they roll out in a beta capacity.

![The AI Assistant interface with the first-time user experience triggered.](./images/blank.png)

## Understanding AI Assistant {#understanding-ai-assistant}

AI Assistant responds to your submitted questions by querying a database and then translating data from the database into a human-readable answer.

This internal representation of underlying data is also known as the **[!DNL Knowledge Graph]** - a comprehensive web of concepts, data, and metadata for a given answer. 

The [!DNL Knowledge Graph] consists of sub-graphs that are referenced whenever queries submitted:

* Customer operational insights.
* Customer operational insights across various meta-stores.
* Experience League documentation.

There are two classes of questions to consider before querying AI Assistant:

### Product knowledge {#product-knowledge}

Product knowledge refers to concepts and topics grounded in Experience League documentation. Product knowledge questions can be further specified into the following sub-groups:

| Product knowledge | Examples |
| --- | --- |
| Pointed learning | <ul><li>What is the difference between an identity and a primary or foreign key?</li><li>How is profile richness calculated?</li></ul> |
| Open discovery | <ul><li>How can I export this dataset?</li><li>Are there schemas for healthcare customers?</li></ul> |
| Troubleshooting | <ul><li>Why can't I turn on a schema owned by Adobe for profile?</li><li>Why can't I delete a segment?</li></ul> |

{style="table-layout:auto"}

### Operational insights {#operational-insights}

>[!IMPORTANT]
>
>Operational insights answers are in beta. Anyone that has access to the **View Operational Insights** permission will have access to operational insights answers.

Operational insights refer to answers AI Assistant generates about your meta data objects (attributes, audiences, dataflows, datasets, destinations, journeys, schemas, and sources), including counts, lookups, and lineage impact. It does not look at any data within the sandbox. 

* How many datasets do I have?
* How many schema attributes have never been used?
* Which audiences have been activated?

You can ask AI Assistant questions about your operational insights in the following domains: 

* Attributes
* Audiences
* Dataflows
* Datasets
* Destinations _(Questions regarding accounts and some questions about dataflow cannot be answered at this time.)_
* Journeys
* Schemas _(Questions regarding field groups cannot be answered at this time.)_
* Sources _(Questions regarding accounts cannot be answered at this time.)_

For operational insights questions, answers may not reflect the current state of the UI. The data that backs these questions is updated once every 24 hours. For example, changes that users make in Real-Time CDP during the daytime are synced with the data stores at night, and then they become available for user questions in the morning. You will need to log into a sandbox to inquire about specific data related to objects.

### Feature scope {#feature-scope}

Currently, the scope of AI Assistant is as follows:

* [Product knowledge](./home.md#product-knowledge): AI Assistant can answer product knowledge questions for Experience Platform, Real-Time Customer Data Platform and Adobe Journey Optimizer. You can also delve into product knowledge topics for Customer Journey Analytics, but only through the Customer Journey Analytics UI.
* [Operational insights](./home.md#operational-insights): You can ask AI Assistant with questions on operational insights on the following data objects: attributes, audiences, dataflows, datasets, destinations, journeys, schemas, and sources.

## Feature access {#feature-access}

Access to AI Assistant is governed by the following parameters:

* **Access the application:** You can access AI Assistant in Adobe Experience Platform, Adobe Real-Time CDP, Adobe Journey Optimizer, and [Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/analytics-platform/using/ai-assistant).
* **Contractual access:** Your company must agree to certain [!DNL GenAI]-related legal terms before your organization can use AI Assistant. Contact your organization's administrator or your Adobe Account Team if you are not able to access AI Assistant. 
* **Permissions:** Use the [Permissions UI](../access-control/abac/ui/permissions.md) to grant or revoke access to AI Assistant in your organization. In order to use AI Assistant, a given user must belong to a role that is provisioned with the **Enable AI Assistant** and **View Operational Insights** permissions.
  * As an administrator, you can add the **Enable AI Assistant** to a given role and add a user to that role, to allow them to access AI Assistant in your organization.
  * As an administrator, you can add the **View Operational Insights** to a given role and add a user to that role, to allow them to use AI Assistant's operational insights capabilities. Operational insights are currently in beta.

![The permissions UI page with the Enable AI Assistant and View Operational Insights permissions included in a given role.](./images/permissions.png)

## Example questions {#example-questions}

This section outlines example questions that you can refer to during your workflows. The questions are grouped into three sections: operational insights, objectives, and objects.

### Example questions grouped by operational insights {#operational-insights-questions}

+++Select to view examples of operational insight questions and their respective use cases:

| Question type | Use case| Examples |
| --- | --- | --- | 
| Data lineage | Track usage of one or multiple objects across other Experience Platform objects | <ul><li>Which datasets use the "ACME schema" schema?</li><li>How many datasets have been ingested using the same schema?</li><li>Which datasets have been used in activated audiences?</li><li>List the schemas which have attributes used in activated audiences.</li><li>Show me the audiences that are activated to "ACME Destinations" and have more than 1000 profiles.</li><li>Show me the attributes which are used in the activated audiences which have been modified after Jan 2023.</li><li>What are the datasets ingested via "ACME Amazon S3" source?</li><li>Which dataflows are associated with "ACME Loyalty Dataflow"?</li><li>List the schemas that are related to activated audiences and were created in last 1 year.</li></ul> |
| Distribution and aggregations | Summary-based questions about Experience Platform object usage | <ul><li>What is the percentage of activated audiences?</li><li>How many fields are used in segmentation?</li><li>Which audiences are activated to the most number of destinations?</li><li>List duplicate audiences.</li><li>Show me the audiences activated to "ACME Destinations" and rank them by profile size.</li><li>What is the percentage of the audiences which have not been activated but have more than 100 profiles. Show me their names.</li><li>List the 3 source connectors ingesting data into my datasets.</li><li>List me the top 5 attributes used in activated audiences based on their occurrence.</li></ul> |
| Object lookup | Retrieve or access an Experience Platform object or it's properties. | <ul><li>Which datasets do not have any schema associated with them</li><li>List the attributes used for "ACME Audience"?</li><li>Give me the list of schemas which are profile enabled but have not been modified since their creation.</li><li>Which audiences have been modified in the last week?</li><li>List me the audiences which have the same segment definitions along with their creation date.</li><li>Which datasets are profile enabled and also include how many audiences have been created from each dataset.</li><li>Which source accounts are associated with dataset XYZ?</li><li>Show me the segment definition and modification date of "ACME Audience".</li></ul>|
| Object comparison | Identify duplicate audiences. | <ul><li>Based on their segment definition, list the audiences that are duplicates.</li><li>Which duplicate audiences are activated to "ACME Destinations".</li></ul> |

{style="table-layout:auto"}

+++

### Example questions grouped by objectives {#objectives-questions}

+++Select to view a list of objectives you can accomplish with AI Assistant

| Objective | Description | Example |
| --- | --- | --- |
| Learning concepts and continuing workflows | <ul><li>As a novice user, you can use AI Assistant to learn Real-Time CDP and Adobe Journey Optimizer concepts and onboard yourself to products and features that you are unfamiliar with.</li><li>As an experienced user, you can use AI Assistant to solve an edge case that may be blocking your workflow. |<ul><li>How do I set up a dashboard in Journey Analytics?</li><li>Tell me some use-cases for Real-Time CDP.</li></ul> |
| Troubleshooting | Use AI Assistant to learn how to debug basic errors that you may encounter in your workflow. | <ul><li>What does this error {ERROR_MESSAGE} mean?</li><li>Why am I not able to delete the audience named "Luma: Email Audience"?</li></ul> |
| Sandbox hygiene | Use AI Assistant to identify any duplicates or unused objects so you can efficiently maintain your sandbox. | <ul><li>Can you show me audiences that are similar?</li><li>Are there any schemas which do not have an associated dataset?</li></ul> |
| Value analysis | Use AI Assistant to identify your most used data objects and assess any performance indicators or find the most valuable data objects. | <ul><li>How many profiles are in our "Luma: Email Audience" segment definition?</li><li>When were audiences activated to Experience Cloud Audiences destination?</li></ul> |
| Search | Use AI Assistant to find supported Experience Platform objects such as audiences, datasets, destinations, schemas, and sources. | <ul><li>List the audiences containing "Luma" in the name that were created in the last quarter.</li><li>What attributes are in the "Luma: Custom Actions" XDM schema?</li></ul> |
| Impact analysis | Use AI Assistant to identify data objects that have been used in certain workflows so that you can assess the impact of any changes. | <ul><li>Which audiences use `homeAddress.city` in "Luma: PersonProfiles" schema?</li><li>Which datasets are the `consents.marketing.push.val` profile attribute stored in?</li></ul> |

{style="table-layout:auto"}

+++

### Example questions grouped by objects {#objects-questions}

+++Select to view list of example questions that AI Assistant can help you with:

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

+++

## Phrasing your questions {#phrasing-your-questions}

You must phrase your questions to AI Assistant with clarity and context in order to get as accurate a response as a possible. Refer to the following list of tips for guidance on how to ask a clear question with context:

* State your task and/or question in a concise manner.
* Avoid ambiguous language or overly complex syntax to facilitate comprehension.
* Provide relevant context regarding your task and/or question as context can help AI Assistant generate more relevant responses.

Read the tables below for further guidance on best practices to follow when asking questions to AI Assistant.

+++Select to view examples of best practices to follow when formulating your questions

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

+++

## Next steps

Now that you have a general understanding of AI Assistant, you can now proceed and use AI Assistant during your workflows. Refer to the following documentation for more information:

* [AI Assistant UI guide](./ui-guide.md)
* [Privacy, Security, and Governance in AI Assistant](./privacy.md)
* [FAQ](./faq.md)
