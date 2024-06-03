---
title: AI Assistant in Adobe Experience Platform
description: Learn how to use AI Assistant to navigate and understand Experience Platform and Real-Time Customer Data Platform concepts, and usage information about your objects.
hide: true
hidefromtoc: true
---
# AI Assistant UI Guide

Read this guide to learn how you can use AI Assistant in the Adobe Experience Platform UI.

## Access AI Assistant in the Experience Platform UI

To launch AI Assistant, select the **[!UICONTROL AI Assistant icon]** from the top header of the Experience Platform UI.

![The Experience Platform home page, with the AI Assistant icon selected and the AI Assistant interface open.](./images/ai-assistant.png)

The AI Assistant interface appears, immediately providing you with information to get started. You can use the options provided under [!UICONTROL Ideas to get started] to answer questions and commands such as:

* [!UICONTROL Which of my audiences are activated?] 
* [!UICONTROL What is a schema?]
* [!UICONTROL Tell me some common use cases for Real-Time CDP]

## AI Assistant UI guide

>[!NOTE]
>
>The following workflow is an example that uses the experience event schema creation process to illustrate how you can use AI Assistant when using the Experience Platform UI.

Consider a use case in which you are creating a **Device Trade in Event Schema**. During the experience event schema creation process, you come across the `eventType` field. "At this point, you have the option to either exit your workflow and refer to the [basics of a schema composition](../xdm/schema/composition.md) documentation, or you can use AI Assistant to retrieve answers to your questions and find additional resources through the documentation links recommended by AI Assistant."

To begin, enter your question in the text box provided. In the example below, AI Assistant is provided the question: "**What is the eventType field in an ExperienceEvent schema?**"

![AI Assistant for Experience Platform with the following question prepared for querying: "What is the eventType field in an ExperienceEvent schema?](./images/question.png)

AI Assistant then queries its knowledge base and computes an answer. After a few moments, AI Assistant returns an answer and related suggestions that you can use as follow up prompts.

![AI Assistant for Experience Platform with an answer to the previous query.](./images/answer.png)

After receiving a response from AI Assistant, you can select from a number of options to decide how you want to proceed.

### AI Assistant features {#features}

This section outlines the different features of AI Assistant that you can use during your workflows on Experience Platform.

### View operational data objects {#view-operational-data-objects}

Depending on your query, AI Assistant provides additional information pertaining to the data in your sandbox. To view how the response to your query applies to your particular sandbox, select **[!UICONTROL In your sandbox].** 

When viewing data pertaining to your sandbox, AI Assistant may provide direct links to specific UI pages that display your queried data.

+++Select to view example

In this example, AI Assistant returns additional information regarding the existing XDM schemas in your sandbox, including their total count and the five most commonly used fields.

![The "in your sandbox" dropdown window open, displaying additional information on your schemas.](./images/in-your-sandbox.png)

+++

### View citations {#view-citations}

You can verify responses returned to you by AI Assistant by reviewing citations available with every product knowledge answer.

+++Select to view an example of how to display sources

To view citations and validate AI Assistant's response, select **[!UICONTROL Show sources]**. 

![The AI Assistant response with "Show sources" selected.](./images/show-sources.png)

AI Assistant updates the interface and provides you with links to documentation that corroborate the initial response. Additionally, when citations are enabled, AI Assistant updates the response to include footnotes to indicate the specific parts of the answer that reference the provided documentation. 

![A dropdown menu of the citations that AI Assistant provides for concept questions.](./images/citations.png)

You can also use the suggestions that AI Assistant provides under **[!UICONTROL Related suggestions]** to further explore topics related to your original question.

![A list of suggestions provided by AI Assistant.](./images/related-suggestions.png)

+++

### Operational insights {#operational-insights}

You must be in an active sandbox in order for AI Assistant to sufficiently respond to a question about your operational insights.

+++Select to view an example of an operational insights question

In the example below, AI Assistant is asked the following query: **"Show me dataflows that were created using the Amazon S3 source"**, AI Assistant then responds with a table listing your dataflows and their corresponding IDs. To view the whole table of data, select the expand icon on the top right.

![Follow up question about operational insights.](./images/usage-data-question.png)

An expanded view of the table appears, providing you with a more comprehensive list of dataflows based on the parameters of your query.

![A view of the expanded table.](./images/table.png)

When prompted with an operational insights question, AI Assistant provides an explanation of how it computed the answer. In the example below, AI Assistant outlines the steps it took in order to identify the dataflows that were created using the [!DNL Amazon S3] source.

![Follow up question about segment definitions illustrating how AI Assistant computed the answer.](./images/answer-explained.png)

You can also provide filters and modifications to your questions, and you can instruct AI Assistant to render its findings based on the filters that you include. For example, you can ask AI Assistant to show you a trend of the count of segment definitions in the order of their created date, remove segment definitions with zero total profiles, and use month names instead of integers when displaying the data.

+++

### Use auto-complete {#use-auto-complete}

You can use the autocomplete function to receive a list of data objects that exist in your sandbox. Autocomplete recommendations are available for the following domains: audiences, schemas, datasets, sources, and destinations.

+++Select to view an example of auto-complete

You can use autocomplete by including the plus symbol (**`+`**) in your query. As an alternative, you can also select the plus sign (**`+`**) located at the bottom of the text input box. A window appears with a list of recommended data objects from your sandbox.

![Example of auto-complete](./images/autocomplete.png)

+++

### Use multi-turn {#use-multi-turn}

You can use AI Assistant's multi-turn capabilities to have a more natural conversation during your experience. AI Assistant is able to answer follow-up questions, given. that context can be inferred from an earlier interaction.

+++Select to view an example of multi-turn

In the example below, AI Assistant is first asked for the total number of dataflows and then is asked to list the 10 most recent dataflows.

![Example of multi-turn](./images/multi-turn.png)

+++

## Provide feedback {#feedback}

You can provide feedback of your experience with AI Assistant using the options provided with answer.

To provide feedback, select either thumbs up, thumbs down, or a flag after receiving a response from the AI Assistant, and then input your feedback in the provided text box. 

![The feedback option in AI Assistant.](./images/provide-feedback.png)

To reset, select the ellipses (**`...`**) on the AI Assistant interface and then select **[!UICONTROL Start new conversation]**. This informs AI Assistant that you intend on changing topics and can be particularly helpful when troubleshooting queries that are either failing or referencing incorrect information.

+++Select to view more examples

>[!BEGINTABS]

>[!TAB Thumbs up]

Select the thumbs up icon to provide feedback on what went well with your experience with the AI Assistant.

![The positive feedback window.](./images/thumbs-up.png)

>[!TAB Thumbs down]

Select the thumbs down icon to provide feedback on what could be improved upon based on your experience with the AI Assistant. During this step, you can also provide specific comments regarding your experience. Feedback provided in the comments is reviewed daily.

![The negative feedback window.](./images/thumbs-down.png)

>[!TAB Flag]

Select the flag icon to provide further reports on your experience using the AI Assistant.

![The report results window.](./images/flag.png)

>[!ENDTABS]

+++