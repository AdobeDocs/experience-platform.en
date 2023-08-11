---
title: AI Assistant for Adobe Experience Platform
description: Learn how to use the AI Assistant for Adobe Experience Platform.
badge: Alpha
hide: true
hidefromtoc: true
---
# AI Assistant for Adobe Experience Platform

>[!NOTE]
>
>The AI Assistant for Adobe Experience Platform is currently in Alpha. The feature and documentation are subject to change.

The AI Assistant for Adobe Experience Platform is a UI feature that you can use to navigate and understand Experience Platform and Real-Time Customer Data Platform concepts.

You can query the AI Assistant for information such as:

* Guidance on how to perform tasks pertaining to data and audiences.
* Statuses and metrics of the existing data objects in your organization.
* Use case examples and nuances to better understand your data objects, such as segments, schemas, datasets, attributes, and destinations.

This document provides information on how you can access and use the AI Assistant to ask questions and receive answers about Experience Platform and Real-Time CDP concepts.

>[!IMPORTANT]
>
>* *AI Assistant uses an automated chatbot. Your use of this automated chatbot constitutes consent that the personal information you provide in the chat session will be collected, used, disclosed, and retained by Adobe and service providers acting on Adobe's behalf in accordance with the [Adobe Privacy Policy](https://www.adobe.com/privacy/policy.html). Please do not provide sensitive personal information (such as financial or health information) in the chatbot.*
>
>* *AI Assistant is integrated with Azure OpenAI, and your chatbot inputs are shared with Azure and may be used to improve chatbot performance. Please note that for AI Assistant to work, you must have read access to data within the service*

>[!BEGINSHADEBOX]

**How does the AI Assistant work?**

The AI Assistant responds to your submitted questions by querying a database and then translating data from the database into a human-readable answer.

This internal representation of underlying data is also known as the Knowledge Graph - a comprehensive web of concepts, data, and metadata for a given answer. 

The Knowledge Graph consists of sub-graphs that are referenced whenever queries submitted:

* Customer data and metadata.
* Customer usage data across various meta-stores.
* Merged profiles (including IDs, attributes, events, segment memberships) and B2B objects across Real-Time Customer Profile.
* Data sizes (at rest) and rates (in motion) observed across various time frames (seconds to days).
* Metadata of system jobs such as ingestion, segmentation, exports, activation, audits, and data governance enforcements.

>[!ENDSHADEBOX]

## Access the AI Assistant for Experience Platform in the UI

You can access the AI Assistant from the header navigation in the Experience Platform UI.

Select the **[!UICONTROL AI Assistant icon]** from the header to launch the AI Assistant panel.

![The Experience Platform UI home page with the AI Assistant icon selected.](./images/ai-assistant/ai-assistant.png)

From here, you can input your question in the text box and query the AI Assistant for concepts regarding data or audiences. You can also ask questions about your data objects to better understand how you can use them for your respective use case. 

>[!NOTE]
>
>The following example workflow uses the ExperienceEvent schema creation process to illustrate how you can use the AI Assistant when using the Experience Platform UI.

### Use the AI Assistant to expedite your schema creation process

Consider a use case in which you are creating a **Device Trade in Event Schema**. During the ExperienceEvent schema creation process, you come across the `eventType` field. At this point, you can either leave your workflow and refer to the the documentation on the [basics of a schema composition](../xdm/schema/composition.md), or you can use the AI Assistant to retrieve immediate answers for your questions. 

To begin, select the AI Assistant icon from the top header and then input your question in the text box provided. In the example below, the AI Assistant is provided the question: "What is the eventType field in an Experience Event schema?"

![The AI Assistant for Experience Platform with the following question prepared for querying: "What is the eventType field in an ExperienceEvent schema?](./images/ai-assistant/question.png)

The AI Assistant then queries its knowledge base and computes an answer. After a few moments, the AI Assistant returns the following:

![The AI Assistant for Experience Platform with an answer to the previous query.](./images/ai-assistant/answer.png)

You can further learn more about a particular topic by asking a follow up question. In the next example, the AI Assistant is asked how the eventType can be used in segmentation.

![A follow up question and answer displayed on the AI Assistant for Experience Platform.](./images/ai-assistant/follow-up-question.png)

With every answer, the AI Assistant provides you with the option to view the documentation that it cites for information and provide feedback.

![The AI Assistant for Experience Platform displaying options you can choose from after a query.](./images/ai-assistant/options.png)

>[!BEGINTABS]

>[!TAB Show source]

Select **[!UICONTROL Show source]** for a list of links to the documentation that the AI Assistant references to compute its response.

![The links to the citations displayed in the AI Assistant.](./images/ai-assistant/citations.png)

>[!TAB Thumbs up]

Select the thumbs up icon to provide feedback on what went well with your experience with the AI Assistant.

![The positive feedback window.](./images/ai-assistant/positive-feedback.png)

>[!TAB Thumbs down]

Select the thumbs down icon to provide feedback on what could be improved upon based on your experience with the AI Assistant.

![The negative feedback window.](./images/ai-assistant/negative-feedback.png)

>[!TAB Flag]

Select the flag icon to provide further reports on your experience using the AI Assistant.

![The report results window.](./images/ai-assistant/report-results.png)

>[!ENDTABS]

### Ideas to get started

The AI Assistant for Experience Platform also provides you with prompts that you can use to get started with Experience Platform.

![The provided prompts in the AI Assistant panel.](./images/ai-assistant/ideas-to-get-started.png)

>[!BEGINTABS]

>[!TAB How do I get started ingesting data?]

To query the AI Assistant regarding data ingestion, select **[!UICONTROL How do I get started ingesting data?]**

![The given prompt on ingesting data and the answer from the AI Assistant.](./images/ai-assistant/ingest-data.png)

>[!TAB Guide me on building a journey]

For a guide on building a journey, select **[!UICONTROL Guide me on building a journey.]**

![The given prompt on building a journey and the answer from the AI Assistant.](./images/ai-assistant/build-a-journey.png)

>[!TAB Tell me the most common use cases for campaigns]

You can also query the AI Assistant for use case examples. For example, select **[!UICONTROL Tell me the most common use cases for campaigns.]**

![The given prompt on use cases for campaigns and the answer from the AI Assistant.](./images/ai-assistant/campaigns-use-cases.png)

>[!ENDTABS]

