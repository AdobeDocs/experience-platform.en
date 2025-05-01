---
solution: Experience Platform
title: Learn how to author and share your own Playbooks using the AI Assistant.
description: How to author and share your own use case playbooks.
role: User
exl-id: 0bc49710-ad9e-4509-b7e6-55f9b9037aa9
---

# Author and share your own playbooks (Beta)

The [!DNL Playbook Authoring Framework], powered by AI Assistant in Adobe Experience Platform, allows you to create, manage, and share playbooks efficiently within Adobe Experience Platform. 

The framework follows a three-step process:

1. **Metadata capture**: Use AI Assistant or the webform to capture playbook metadata.

2. **Technical association**: Add specific technical assets such as journeys or audiences to the playbook. You retain full control over the playbook creation process within your development sandbox, ensuring alignment with your schemas and other unique data structures.

3. **Playbook distribution**: Share playbooks across different organizations. For example, ACME's Martech Center of Excellence in Germany can create a "golden" playbook and distribute it to regional organizations in Thailand, Australia, etc. to help standardize the marketing use case.

## Create a Playbook

You can create a playbook in two ways: either using the AI Assistant or manually. Read the following sections to learn how to create a playbook with AI Assistant.

### Playbook overview

Follow these steps to create a playbook with the AI Assistant:

In the left navigation panel, select **[!UICONTROL Playbooks]**. 

![Platform UI with the "Playbooks" option highlighted in the left navigation panel.](/help/use-case-playbooks/assets/playbooks/authoring/playbooks.png)

Select **[!UICONTROL New Playbook]**, and then select **Generate playbook with AI Assistant**.

![The playbook creation interface showing the "Generate playbook with AI Assistant" option selected.](/help/use-case-playbooks/assets/playbooks/authoring/generate-playbook.png)

Use the prompt field to describe the use case. For example: 

"Engage ACME customers who browsed running shoes but did not complete the purchase."

![The playbook creation interface highlighting the webform area where users can input a prompt.](/help/use-case-playbooks/assets/playbooks/authoring/prompt.png)

Select **[!UICONTROL Generate]** to create the playbook metadata. 

![The playbook creation interface showing the "Generate" button highlighted in the prompt area.](/help/use-case-playbooks/assets/playbooks/authoring/generate.png)

Once generated, select **[!UICONTROL Edit]** to modify the generated title, description, and metadata as needed.

![A generated playbook with the "Edit" button highlighted, allowing users to modify metadata.](/help/use-case-playbooks/assets/playbooks/authoring/edit.png)

To ensure the data engineers have all the necessary details to set up the use case, fill out the **[!UICONTROL Playbook detail]** section. While optional, these fields help capture key information, making it easier to connect the right technical components. Select **[!UICONTROL Edit]** to add values to the following fields:

* **Industry**
* **Target audience**
* **Marketing channel**

![The playbook details section with the "Edit" button highlighted so that you can add or modify details like industry, target audience, and marketing channel.](/help/use-case-playbooks/assets/playbooks/authoring/edit-details.png)

Once the metadata is generated, select **[!UICONTROL Edit journey map]** to adjust the steps in the journey map as required. 

![The "Edit journey map" button to modify the steps in the journey map.](/help/use-case-playbooks/assets/playbooks/authoring/edit-journey-map-button.png)

![The journey map editor interface so that you can adjust steps after you capture the playbook metadata.](/help/use-case-playbooks/assets/playbooks/authoring/edit-journey-map.png)

Then, proceed to associate the playbook with technical assets. To create a playbook manually, select **[!UICONTROL Create playbook manually]**.

![The "Create playbook manually" option to start a playbook from a blank template.](/help/use-case-playbooks/assets/playbooks/authoring/create-manually.png)

A blank playbook template appears. Fill out details such as **Title** and **Description**. You can also edit the journey map to add events and touchpoints as needed. 

## Associate playbook with technical assets

Regardless of whether you create a playbook manually or with the AI Assistant, you must associate it with the required technical assets. Navigate to the **[!UICONTROL Technical Assets]** tab and select the required product. For this example, select **[!UICONTROL Journey Optimizer]**. 

>[!NOTE]
>
> Support for Real-Time CDP will be added in a future release.

![The "Technical Assets" tab with the "Add required product" button highlighted that you can use to associate technical assets with the playbook.](/help/use-case-playbooks/assets/playbooks/authoring/technical-assets-add-required-product.png)

Choose **[!UICONTROL Select an Asset]** to associate this playbook with a journey as shown in the image below. Then select **Publish playbook** to finalize the playbook. 

![The "Technical Assets" tab with the "Select assets" button highlighted that you can use to associate a journey with the playbook.](/help/use-case-playbooks/assets/playbooks/authoring/select-assets.png)

![Select a journey to associate it with a playbook.](/help/use-case-playbooks/assets/playbooks/authoring/journey.png)

Once published, the playbook automatically extracts and associates the journey's schema and audience details.

![A published playbook showing metadata and associated technical assets.](/help/use-case-playbooks/assets/playbooks/authoring/publish-playbook.png)

All the created playbooks are available in the **Your Playbooks** tab. 

!["Your playbooks" tab displaying a list of created playbooks.](/help/use-case-playbooks/assets/playbooks/authoring/your-playbooks-tab.png)

You can select any playbook from the catalog to create instances for reuse. Refer to the documentation to [learn how to create instances](/help/use-case-playbooks/playbooks/create-share-reuse.md).

![The "Playbook Overview" tab with the "Create instance" option highlighted.](/help/use-case-playbooks/assets/playbooks/authoring/create-instance.png)

>[!NOTE]
>
> Once a playbook is published, it cannot be edited. To make changes, delete the playbook and start over. 

## Example prompts 

The AI Assistant can process various prompt structures and extract key details while filtering out unnecessary information. Below are some examples of user prompts and how they are interpreted by the system:

**Example 1:**

"Create a campaign titled "Complete the Look" in order to increase sales and CLV. The campaign encourages customers purchased kitchenware or furniture to complete a complementary purchase via personalized recommendations and offers related to their purchase. First message the customers with product recommendations. If they don't make any purchases within 7 days, they receive a second message with product recommendations and offers. Use push notifications and email to contact the customers. Target customers who made a purchase in last 7 days in kitchenware or furniture category and have not been targeted in last 30 days. As part of the campaign, we want to measure KPIs such as clicks (email, app,sms, push), CTR, E-Wallet CTR, AOV Conversion.CLV Revenue, Total Purchase events (in-store, digital, call center)."

![An example of a long prompt entered in the text input box to generate a playbook.](/help/use-case-playbooks/assets/playbooks/authoring/long-prompt.png)

**Example 2:**

"Project Name: Fashion Newsletter
Background: (proactive or solving for problem): A journey designed to send fashion newsletters to ACME customers who have subscribed for newsletter communication.
Objective: Send fashion newsletter emails to ACME customers who subscribed for communication.
Promotional details: Customer receives fashion news in the email channel weekly. The email should be personalized and content variations based on gender, language and market.
Project channels/Touchpoints: Email
Target audience: Customers who have subscribed to ACME fashion newsletter communications.
Target KPIs/Engagement Metrics/ROI: 1. Increase Revenue from Products. 2. Drive Customer loyalty."

![An example of an organized, list-style prompt entered in the text input box to generate a playbook.](/help/use-case-playbooks/assets/playbooks/authoring/organized-list-prompt.png)

**Example 3:**

"Nudge shoppers to buy products during an ongoing product promotional campaign. 
Engage with shoppers during an ongoing promotion by sending appropriate communication through email, SMS, or push notifications to buy products. Send them a reminder email after 24 hours of them not engaging with the promotion."

![An example of a concise prompt entered in the text input box to generate a playbook.](/help/use-case-playbooks/assets/playbooks/authoring/concise-prompt.png)

**Example 4:**

"Sell shoes to high school players."

![An example of a one-line prompt entered in the text input box to generate a playbook.](/help/use-case-playbooks/assets/playbooks/authoring/one-liner-prompt.png)

The AI Assistant removes all unnecessary details such as "Project Name" or "Background." It extracts the key elements such as "target audience", "campaign goal", and "marketing channel" and works with any input style.

These examples demonstrate how AI can refine and extract essential details from user prompts. 

>[!NOTE]
>
> Avoid any PII or explicit words while writing your prompts. 

## Content guidelines and moderation

When creating playbooks, be mindful of the language and content you include. Playbooks are visible across your organization, and any offensive or inappropriate content can be flagged by users.

### Flagging and review process

If a playbook is flagged for inappropriate or offensive content, it is automatically reported to Adobe for review. Adobe then reviews the flagged content, and if it is deemed inappropriate, the customer is notified, and the Playbook is removed.

## Share playbooks across sandboxes {#share-playbooks-sandboxes}

When you create and publish a playbook in one sandbox, it automatically becomes available across all sandboxes within your organization. This eliminates the need for manual sharing and allows you to create instances of the playbook in any other sandbox seamlessly.

>[!TIP]
>
>If the playbook references fields that aren't available in the union schema of the target sandbox or lack the requisite permissions, you may see an error message when trying to create the instance. That message calls out the missing fields and/or missing permissions.

If any fields are missing from your union schema, a dialog box will highlight them during the import. 

![A dialog box listing fields missing from the union schema during the playbook import process.](/help/use-case-playbooks/assets/playbooks/authoring/missing-fields.png)

## Sharing your playbooks across organizations {#sharing-playbooks-organizations}

Sharing playbooks across organizations helps ensure consistency and efficiency when multiple teams need to follow the same best practices. To share a playbook from one organization to another, follow these steps: 

1. **Log into the source organization**: Navigate to the organization that contains the playbook you created and want to share from the **[!UICONTROL Your playbooks]** tab.
2. **Publish the playbook**: If the playbook isn't already published, you must publish it before sharing.

    >[!NOTE]
    >
    >A partnership must be established between the source and target organizations to enable playbook sharing. Learn how to [create an organization partnership request](/help/sandboxes/ui/sharing-packages-across-orgs.md#create-an-organization-partnership-request).

3. **Initiate the share**: Once the playbook is published and a partnership is established, select **[!UICONTROL Share Playbook]**.
4. **Select the target organization**: Choose the organization you want to share the playbook with when prompted.
5. **Confirm and share**: Confirm your selection. You will receive confirmation messages indicating successful sharing.
6. **Verify the target organization**: Log into the target organization to verify that the playbook is available.
7. **Import the playbook**: Select **[!UICONTROL Import]** to bring the playbook into the target organization. You can view it in the **Playbooks** tab.

If the playbook doesn't appear, ensure it is published and that the organization partnernship is active.

>[!IMPORTANT]
>
>Transitive playbook sharing is not supported. If you share a playbook from one organization to another and then import it, it cannot be shared again from the receiving organization to a third organization.

## Required permissions {#required-permissions} 

To access the sandbox and use this feature, you need the following permissions:

### Sandbox permissions 

These permissions are required to access the sandbox environment where the feature exists: 

* **Manage sandbox**
* **View sandbox**

* **Package sharing permissions**: 

These permissions are required for internal sharing functionality:

* [**Manage package**](/help/sandboxes/ui/sandbox-tooling.md)
* [**Share package**](/help/sandboxes/ui/sharing-packages-across-orgs.md)

These permissions will allow you to:

* Enter the sandbox environment
* Access the feature within the sandbox
* Manage and share packages as needed

These permissions are located in the **[!UICONTROL Sandboxes]** section of the permissions list. 

![The permissions list with relevant permissions for managing and sharing playbooks highlighted.](/help/use-case-playbooks/assets/playbooks/authoring/permissions.png)

### Journeys and related objects - permissions

When building Journeys that use Playbooks, you'll likely reference other objects such as **Channels**, **Audiences**, and other entities. Each of these has its own permission set. 

These are the key permissions for Journey-related actions, such as: 

* **View journey**
* **Manage journey**
* Permissions related to objects like Audiences, and Channels

You will also need the following audience permissions: 

* **Segment read**
* **Profile read**
* **Dataset read**

As Journeys are highly flexible and can involve many interconnected objects, their [full permissions](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/access-control/privacy/high-low-permissions) are documented separately and can vary based on your particular use case.

## Next steps

Now that you understand how to create, publish and share playbooks using the AI Assistant, learn how to get started with the available playbooks and choose the right one for your use case from [Playbooks List](/help/use-case-playbooks/playbooks/choose.md).