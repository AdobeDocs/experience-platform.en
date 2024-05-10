---
title: AI Assistant for Adobe Experience Platform
description: Learn how to use AI Assistant to navigate and understand Experience Platform and Real-Time Customer Data Platform concepts, and usage information about your objects.
badge: Beta
hide: true
hidefromtoc: true
---
# AI Assistant UI Guide

>[!NOTE]
>
>AI Assistant for Adobe Experience Platform is currently in Beta. The feature and documentation are subject to change.

Read this guide to learn how you can use AI Assistant in the UI.

## Access AI Assistant in the Experience Platform UI

To launch AI Assistant, select the **[!UICONTROL AI Assistant icon]** from the top header of the Experience Platform UI.

![The Experience Platform home page, with the AI Assistant icon selected and the AI Assistant interface open.](./images/ai-assistant/ai-assistant.png)

The AI Assistant interface appears, immediately providing you with information to get started. You can use the options provided under [!UICONTROL Ideas to get started] to answer questions and commands such as:

* [!UICONTROL Which of my audiences are activated?] 
* [!UICONTROL What is a schema?]
* [!UICONTROL Tell me some common use cases for Real-Time CDP]

![The "ideas to get started" section of AI Assistant.](./images/ai-assistant/ideas-to-get-started.png)

To interact with AI Assistant, use the input box to type in your queries or commands. You can also use the (**`+`**) symbol to utilize the auto-complete function and the bookmark icon to access your bookmarked queries and commands.

![The AI Assistant input box highlighted.](./images/ai-assistant/interact.png)

## Use case example: Use AI Assistant to expedite your schema creation process

>[!NOTE]
>
>The following workflow is an example that uses the experience event schema creation process to illustrate how you can use AI Assistant when using the Experience Platform UI.

Consider a use case in which you are creating a **Device Trade in Event Schema**. During the experience event schema creation process, you come across the `eventType` field. "At this point, you have the option to either exit your workflow and refer to the [basics of a schema composition](../xdm/schema/composition.md) documentation, or you can use AI Assistant to retrieve answers to your questions and find additional resources through the documentation links recommended by AI Assistant."

To begin, enter your question in the text box provided. In the example below, AI Assistant is provided the question: "**What is the eventType field in an ExperienceEvent schema?**"

![AI Assistant for Experience Platform with the following question prepared for querying: "What is the eventType field in an ExperienceEvent schema?](./images/ai-assistant/question.png)

AI Assistant then queries its knowledge base and computes an answer. After a few moments, AI Assistant returns an answer and related suggestions that you can use as follow up prompts.

![AI Assistant for Experience Platform with an answer to the previous query.](./images/ai-assistant/answer.png)

After receiving a response from AI Assistant, you can select from a number of options to decide how you want to proceed.

### Save your query {#save-your-query}

+++Select to view an example of how to save a query

To save your query, select the bookmark icon beside your question.

![Screenshot of a selected bookmark.](./images/ai-assistant/save-your-query.png)

To access your saved queries, select the bookmark icon below the input box, then select the query you would like to run.

![Screenshot of bookmark icon and a list of saved queries.](./images/ai-assistant/bookmarks.png)

+++

### View data in your sandbox {#view-data-in-your-sandbox}

+++Select to view example

Depending on your query, AI Assistant provides additional information pertaining to the data in your sandbox. To view how the response to your query applies to your sandbox, select **[!UICONTROL In your sandbox].** 

During this step, AI Assistant may provide direct links to the UI pages of certain objects in question. In the example below, AI Assistant provides direct links to the [!UICONTROL Schemas] and [!UICONTROL Segments] UI pages.

![Screenshot of "In your sandbox" option.](./images/ai-assistant/in-your-sandbox.png)

+++

### Verify the response {#verify-the-response}

+++Select to view an example of how to display sources

To view citations and validate AI Assistant's response, select **[!UICONTROL Show sources]**. AI Assistant provides links to documentation that corroborates its response. You can also use the queries that AI Assistant provides under [!UICONTROL Related suggestions] to further explore topics related to your original query.

![Screenshot of "Show sources".](./images/ai-assistant/show-sources.png)

+++

### Data usage and visualization {#data-usage-and-visualization}

+++Select to view an example of data usage questions and data visualization

For AI Assistant to respond to a query about data usage within your organization, you have to be in an active sandbox.

In the example below, AI Assistant is provided with the following query: **"Show me segment definitions with over 1000 profiles and include activation status."** AI Assistant then responds with a chart visualizing your segment and profile data.

![Follow up question about data usage.](./images/ai-assistant/data-usage-question.png)

You can hover over an individual bar to view specific data. You can also select the expand icon for a larger view of the chart.

![Follow up question illustrating data visualization.](./images/ai-assistant/data-visualization.png)

An expanded view of the visualization appears. You can use the expanded modal to further inspect your data and is especially useful when visualization returns with a large number of columns.

![Expanded chart.](./images/ai-assistant/chart-expanded.png)

When prompted with a data usage question, AI Assistant provides an explanation of how it computed the answer. In the example below, AI Assistant outlines the steps it took in order to display segment definitions with over 1000 profiles and their respective activation statuses.

![Follow up question about segment definitions illustrating how AI Assistant computed the answer.](./images/ai-assistant/results-explained.png)

You can also provide filters and modifications to your queries, and you can instruct AI Assistant to render its findings based on the filters that you include. For example, you can ask AI Assistant to show you a trend of the count segment definitions in the order of their created date, remove segment definitions with zero total profiles, and use month names instead of integers when displaying the data.

+++

### Use auto-complete {#use-auto-complete}

+++Select to view an example of auto-complete

You can use the autocomplete function to receive a list of data objects that exist in your sandbox. Autocomplete recommendations are available for the following domains: audiences, schemas, datasets, sources, and destinations.

You can use autocomplete by including the plus symbol (**`+`**) in your query. As an alternative, you can also select the plus sign (**`+`**) located at the bottom of the text input box. A window appears with a list of recommended data objects from your sandbox.

![Example of auto-complete](./images/ai-assistant/auto-complete-one.png)

Next, select the data object that you want to query to complete your question and then submit your question.

![Example of auto-complete with question and answer](./images/ai-assistant/auto-complete-two.png)

+++

### Use multi-turn {#use-multi-turn}

+++Select to view an example of multi-turn

You can use AI Assistant's multi-turn capabilities to have a more natural conversation during your experience. AI Assistant is able to answer follow-up questions, given. that context can be inferred from an earlier interaction.

In the example below, AI Assistant is asked for the total number of dataflows in the current organization.

![Example of multi-turn](./images/ai-assistant/multi-turn-one.png)

Next, AI Assistant receives another follow-up request. This time, AI Assistant responds by listing the dataflows that currently exist in your organization.

![Example of multi-turn with question and answer](./images/ai-assistant/multi-turn-two.png)

+++

## Documentation {#documentation}

Currently, the documentation index covers Adobe Experience Platform (Real-Time CDP and Audiences). The index is updated periodically.

The documentation retrieval model is trained on Experience Platform (Real-Time CDP and Audiences). Questions outside the scope of Adobe Experience Platform such as, questions about other Adobe products like Adobe Target and the Creative Cloud suite cannot be answered.

## Provide feedback {#feedback}

>[!BEGINSHADEBOX]

**Your feedback is requested**

During this Alpha stage, you are invited to provide feedback on the responses that you receive from the AI Assistant. All responses and submitted feedback are reviewed in order to continue to improve the AI Assistant experience.

To provide feedback, select either thumbs up or thumbs down after receiving a response from the AI Assistant, and then input your feedback in the provided text box. Next, select **[!UICONTROL Submit feedback]** to submit.

>[!ENDSHADEBOX]

+++Provide feedback

>[!BEGINTABS]

>[!TAB Thumbs up]

Select the thumbs up icon to provide feedback on what went well with your experience with the AI Assistant.

![The positive feedback window.](./images/ai-assistant/thumbs-up.png)

>[!TAB Thumbs down]

Select the thumbs down icon to provide feedback on what could be improved upon based on your experience with the AI Assistant. During this step, you can also provide specific comments regarding your experience. Feedback provided in the comments is reviewed daily.

![The negative feedback window.](./images/ai-assistant/thumbs-down.png)

>[!TAB Flag]

Select the flag icon to provide further reports on your experience using the AI Assistant.

![The report results window.](./images/ai-assistant/flag.png)

>[!ENDTABS]

+++

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
| "Can you answer questions on {ENTITY}?" | As long as the AI Assistant is able to find a single page referencing a given entity in its index, then it will respond yes. |
| "Do you know **x** language?" | The AI Assistant currently only supports English, but may answer "yes" due to the underlying model being able to support it. |
| "Can you do...?" | The AI Assistant may answer yes, even though it cannot. |

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
