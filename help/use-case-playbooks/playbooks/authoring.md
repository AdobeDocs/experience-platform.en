---
solution: Experience Platform
title: AI Assistant for Use Cases - Author and share your own Playbooks.
description: How to author and share your own use case playbooks.
role: User
---

# Author and share your own playbooks using AI Assistant

The Playbook Authoring Framework is designed to enable you to create, manage, and share playbooks efficiently within Adobe Experience Platform. 

The framework follows a three-step process:

1. **Metadata capture**: Use metadata capture to gather or generate playbook metadata using AI assistance or manual input.

2. **Technical association**: Add specific technical assets (schemas, segments, profiles) to the playbook. Customers retain full control over playbook creation within their developement sandbox, ensuring alignment with their assets, unique schemas, and other data structures.

3. **Playbook distribution**: Playbooks are then shared across different IMS organizations. For example, Allianz's Martech Center of Excellence in Germany creates a "golden" playbook and distributes it to regional subsidiaries in Thailand, Australia, etc.

## Manually create a Playbook with Adobe's AI Assistant

### Playbook overview

Follow the steps outlined below to create a playbook with Adobe's AI Assitant:

1. From the left navigation pane, select 'Playbooks'. 

![Choose Playbooks from the left hand navigation]()

2. Select 'New Playbook' and then select 'Generate playbook with AI'.

![Select "New Playbook" button]()

![Select "Generate playbook with AI" button]()

3. In the prompt field, describe the use case. Example: "Engage ACME customers who browsed running shoes but did not complete the purchase."

![Select "Generate playbook with AI" button]()

4. Select 'Generate' to create the playbook using Adobe's R2D2 framework.

![Select "Generate playbook with AI" button]()

5. Once generated, select 'Edit' to modify the generated title, description, and metadata as needed.

![Select "Generate playbook with AI" button]()

To ensure that the data engineer has all the necessary details to set up the use case, fill out the 'Playbook detail' section. While these details are optional, this helps capture key information, making it easier to connect the right technical components. Select 'Edit' to add values to the following fields:

* 'Industry'
* 'Target audience,'
* 'Marketing channel'. 

### Technical assets

Currently, the 'Technical assets' tab is only available for Adobe Journey Optimizer (AJO). Support for Real-Time Customer Data Profile (RTCDP) will be added in a future release.

[Image selecting the product]
[capture journey]

When setting up a use case, you need to select an asset - such as a journey, which will be captured under the 'Technical Assets' tab. Once published, the journey's schema and audience details will be automatically extracted. 

>[!NOTE]
>
> You will not be able to edit the Playbook or modify its details after publishing. You can delete and start over. 

All the playbooks that you've created will be available in the Your Playbooks tab

[image]

We can now create instances 

[image of instance]

## Example prompts 

To be added.

## Do's and don'ts

Some pre-requisites list to be added.

## Known limitations

To be added along with screenshots. 

## Content guidelines and moderation

When creating Playbooks, be mindful of the language and content you include. Playbooks are visible across your organization, and any offensive or inappropriate content can be flagged by users.

![Report results]()

### Flagging and review process

If a Playbook is flagged for inappropriate or offensive content, it is automatically reported to Adobe for review. Adobe then reviews the flagged content, and if it is deemed inappropriate, the customer will be notified, and the Playbook will be removed.

## Next steps
