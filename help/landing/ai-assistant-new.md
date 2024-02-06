
# Assistant for Adobe Experience Platform

>[!NOTE]
>
>Assistant for Adobe Experience Platform is currently in Alpha. The feature and documentation are subject to change.

Assistant is a UI feature that you can use to navigate and understand Adobe Experience Platform and Real-Time Customer Data Platform concepts and usage information about your objects.

You can query Assistant for information such as:

* Guidance on how to perform tasks pertaining to data and audiences.
* Statuses and metrics of the existing data objects in your organization.
* Use case examples and nuances to better understand your data objects, including attributes, datasets, destinations, schemas, segments, and sources.

Read the guide below to learn how you can use Assistant to help navigate and understand your Experience Platform and Real-Time CDP workflows.

>[!BEGINSHADEBOX]

**How does Assistant work?**

Assistant responds to your submitted questions by querying a database and then translating data from the database into a human-readable answer.

This internal representation of underlying data is also known as the Knowledge Graph - a comprehensive web of concepts, data, and metadata for a given answer. 

The Knowledge Graph consists of sub-graphs that are referenced whenever queries submitted:

* Customer usage data.
* Customer usage data across various meta-stores.
* Experience League documentation.

There are two classes of questions to consider before querying Assistant:

* **Concept Questions**: Concept questions are about Adobe concepts related to data or audiences. Some examples of concept questions include:
  * What is the difference between batch and streaming segmentation?
  * Are there industry data models and how do I use them?
  * What is Real-Time CDP best used for?
* **Usage Questions**: Usage questions are about the data objects inside your organization. Some examples of usage questions include:
  * How many datasets do I have?
  * How many schema attributes have never been used?
  * Which segments have been activated?

>[!ENDSHADEBOX]

## Access Assistant in the Experience Platform UI

To launch the Assistant, select the **[!UICONTROL Assistant icon]** from the top header of the Experience Platform UI.

![The Experience Platform home page, with the Assistant icon selected and the Assistant interface open.]

## Understanding the Assistant interface

The Assistant interface appears, immediately providing you with information to get started. You can use the options provided under [!UICONTROL Ideas to get started] to answer questions and commands such as:

* [!UICONTROL Which of my segments are activated?] 
* [!UICONTROL What is a schema?]
* [!UICONTROL Tell me some common use cases for Real-Time CDP]

![Screenshot of ideas to get started]

* input box
* auto-complete button
* save button

![screenshot of interface]

### Use case example: Use Assistant to expedite your schema creation process

>[!NOTE]
>
>The following workflow is an example and uses the experience event schema creation process to illustrate how you can use Assistant when using the Experience Platform UI.

Consider a use case in which you are creating a **Device Trade in Event Schema**. During the experience event schema creation process, you come across the `eventType` field. At this point, you can either leave your workflow and refer to the the documentation on the [basics of a schema composition](../xdm/schema/composition.md), or you can use Assistant to retrieve immediate answers for your questions and find additional resources through the documentation links that Assistant recommends.

To begin, enter your question in the text box provided. In the example below, Assistant is provided the question: "**What is the eventType field in an ExperienceEvent schema?**"

![Screenshot of question?]

Assistant then queries its knowledge base and computes an answer. After a few moments, Assistant returns an answer and related suggestions that you can use as follow up prompts.

![Screenshot of answer.]