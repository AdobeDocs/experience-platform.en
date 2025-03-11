---
solution: Experience Platform
title: AI Assistant for Use Cases - Author and share your own Playbooks.
description: How to author and share your own use case playbooks.
role: User
---

# Author and share your own playbooks using AI Assistant

The **Playbook Authoring Framework** allows you to create, manage, and share playbooks efficiently within Adobe Experience Platform. 

The framework follows a three-step process:

1. **Metadata capture**: Use AI assistance or manual inpu to generate playbook metadata.

2. **Technical association**: Add specific technical assets (schemas, segments, profiles) to the playbook. You retain full control over the playbook creation process within your developement sandbox, ensuring alignment with your assets, schemas, and other unique data structures.

3. **Playbook distribution**: Share playbooks across different IMS organizations. For example, ACME's Martech Center of Excellence in Germany can create a "golden" playbook and distribute it to regional subsidiaries in Thailand, Australia, etc.

## Manually create a Playbook with Adobe's AI Assistant

### Playbook overview

Follow these steps to create a playbook with Adobe's AI Assitant:

1. In the left navigation pane, select 'Playbooks'. 

![Left navigation with Playbooks highlighted](/help/use-case-playbooks/assets/playbooks/authoring/playbooks.png)

2. Select **New Playbook**, and then select **Generate playbook with AI**. (You can also create a playbook manually, but this guide focuses on AI-generated playbooks).

![Select "New Playbook" button](/help/use-case-playbooks/assets/playbooks/authoring/new-playbook.png)

![Select "Generate playbook with AI" button](/help/use-case-playbooks/assets/playbooks/authoring/generate-playbook.png)

3. In the prompt field, describe the use case. 

**Example**: "Engage ACME customers who browsed running shoes but did not complete the purchase."

![Select "Generate playbook with AI" button](/help/use-case-playbooks/assets/playbooks/authoring/prompt.png)

4. Select 'Generate' to create the playbook using Adobe's R2D2 framework. 

![Select "Generate playbook with AI" button](/help/use-case-playbooks/assets/playbooks/authoring/generate.png)

5. Once generated, select **Edit** to modify the generated title, description, and metadata as needed.

![Select "Generate playbook with AI" button](/help/use-case-playbooks/assets/playbooks/authoring/edit.png)

To ensure the data engineers have all the necessary details to set up the use case, fill out the **Playbook detail** section. While optional, these fields help capture key information, making it easier to connect the right technical components. Select **Edit** to add values to the following fields:

* **Industry**
* **Target audience**
* **Marketing channel**

![Select "Generate playbook with AI" button](/help/use-case-playbooks/assets/playbooks/authoring/edit-details.png)

Once the metadata is generated, proceed to associate the playbook with technical assets.

### Associate playbook with technical assets

Navigate to the **Technical Assets** tab and select the required product. For this example, choose 'Journey Optimizer'. 

>[!NOTE]
>
> Support for Real-Time Customer Data Profile will be added in a future release.

![technical assets adn selecting the product](/help/use-case-playbooks/assets/playbooks/authoring/technical-assets-add-required-product.png)

Select **Select an Asset** to associate this playbook with a journey as shown in the image below. Then select 'Publish playbook' to finalize the playbook. 

[capture journey]

Once published, the playbook automatically extracts and associates the journey's schema and audience details.

[image]

All the created playbooks are available in the **Your Playbooks** tab. You can select any playbook from the catalog to create instances for reuse.

[image]

[image of instance]

>[!NOTE]
>
> Once a playbook is published, it cannot be edited. To make changes, delete the playbook and start over. 

## Example prompts 

To be added.

## Do's and don'ts

Pre-requisites to use the feature to be added.

## Known limitations

To be added along with screenshots. 

## Content guidelines and moderation

When creating playbooks, be mindful of the language and content you include. Playbooks are visible across your organization, and any offensive or inappropriate content can be flagged by users.

![Report results]()

### Flagging and review process

If a Playbook is flagged for inappropriate or offensive content, it is automatically reported to Adobe for review. Adobe then reviews the flagged content, and if it is deemed inappropriate, the customer is notified, and the Playbook is removed.

## Next steps

Now that you understand how to create and publish playbooks using the Adobe's AI Assistant, learn how to get started with the available playbooks and choose the right one for your use case from [Playbooks List](/help/use-case-playbooks/playbooks/choose.md).
