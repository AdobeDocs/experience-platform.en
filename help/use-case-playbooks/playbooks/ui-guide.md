---
solution: Experience Platform
title: Playbooks UI guide
description: Learn how to use the Experience Platform UI to view and enable playbooks.
badgeBeta: label="Beta" type="Informative"
---

# (Beta) How to enable and reuse a playbook

>[!AVAILABILITY]
>
>This functionality is currently in Beta and is not available to all users. The documentation and the functionality are subject to change.

To use a playbook, navigate to **[!UICONTROL Use Case Playbooks] > [!UICONTROL Playbooks]**. Browse and use the various searching and filtering options on the page to select and get started with a specific playbook.

## Search and filter {#search-and-filter}

Use the search window and filters available on the page to find the right playbook for your use case. 

For example, you can filter playbooks that you can use based on the stage in the marketing funnel that you want to target - conversion, engagement, or retention. You could also filter the displayed playbooks by the industry that you are in or the product entitlement that you have access to - Adobe Journey Optimizer or Real-time CDP. 

![Filter playbooks by marketing funnel, industry, or product](/help/use-case-playbooks/assets/playbooks/ui-guide/filter-by-funnel-industry-product.gif)

You can also use the search functionality to find the right playbook for you. See below an example of how to find a playbook that helps you engage with users who might have abandoned their shopping cart.

![Engage with users who might have abandoned their cart.](/help/use-case-playbooks/assets/playbooks/ui-guide/engage-abandoned-cart.gif)

Or, you can filter the available playbooks by the channels that you plan to use to reach your customers, as you can see below:

![Filter by channel](/help/use-case-playbooks/assets/playbooks/ui-guide/channel-select-filter.gif)

Experiment with the filters and search option and find the right playbook for you. 

## View playbook and generate assets {#view-playbook-generate-assets}

Before you settle on a playbook and create instances of it, you should inspect it to make sure it fits your needs. To help you better understand the use cases they cover, all playbooks contain the sections listed below. When you are ready to proceed and generate assets, select **[!UICONTROL Create Instance]**.

### Mindmap {#mindmap}

Use the mindmap section in a playbook to understand the steps of the workflow that the playbook can help you solve. Visualize the flow of how all the generated objects can help you achieve the use case, from the perspective of the persona targeted in the use case. 

The mindmap starts with a definition of who is reached in the user journey and describes at every step if something is delivered by Adobe, like a new message or a reminder, or if it is something that the targeted persona did that triggers the next message or event. 

![Playbook mindmap highlighted.](/help/use-case-playbooks/assets/playbooks/ui-guide/playbook-mindmap.png)


### Summary {#summary}

Inspect the summary section to understand which assets are generated once you create instances from the playbook. The assets that get generated for each playbook are tailored to the use case that the playbook enables. Get more information below about all the items in the summary section.

| Item | Description |
---------|----------|
| **[!UICONTROL Target audience]** | Describes the personas that you are looking to reach through this use case playbook. |
| **[!UICONTROL Marketing Channels]** | Describes the channels used to reach the personas targeted in the playbook. |
| **[!UICONTROL Technical assets]** | A list of the technical assets that are generated after you create instances of the playbook. The generated assets differ by playbook, depending on the use case. Some playbooks might generate schemas, segments, and journeys. Others may generate destinations. Refer to the [Understand the generated assets](#understand-assets) section further below for more information about how you can use and reuse the generated assets.  |

{style="table-layout:auto"}

![Playbook summary highlighted](/help/use-case-playbooks/assets/playbooks/ui-guide/playbook-summary.png)

### Instances {#instances}

Scroll down to the instances section to get an overview of the instances of this playbook which you or members of your team have already created. You can use various controls to sort and filter the displayed instances, for example to only see the ones created by you. You can also see various information about each instance, as listed below.

|Item | Description |
|---------|----------|
| **[!UICONTROL Name]** | The name of the instance based on the playbook. You can customize the name and description of an instance. Read the section below on [how to edit instance metadata](#edit-instance-metadata) for more information. |
| **[!UICONTROL Status]** | Indicates the status of the instance. A **[!UICONTROL submitted]** instance is ready for use. |
| **[!UICONTROL Created]** | Indicates when the instance was created. |
| **[!UICONTROL Created By]** | Indicates who created the instance. |
| **[!UICONTROL Last Modified]** | Indicates when the instance was last modified. |

{style="table-layout:auto"}

![Playbook instance highlighted.](/help/use-case-playbooks/assets/playbooks/ui-guide/playbook-instances.png)

## Enable the playbook {#enable-playbook}

When you are ready to proceed with a playbook and create an instance, select **[!UICONTROL Create Instance]** to proceed with the playbook and generate technical assets.

![Create an instance of a playbook.](/help/use-case-playbooks/assets/playbooks/ui-guide/create-playbook-instance.png)

This action generates several assets for you to use to achieve the use case described by the playbook.

![Playbook view of generated assets after being enabled.](/help/use-case-playbooks/assets/playbooks/ui-guide/play-view.png)
 
### Use the configuration controls to edit instance names and descriptions {#edit-instance-metadata}

After creating an instance based on a playbook, you can personalize it to distinguish it from other instances created from the same playbook. Select the configuration control as shown below. Edit the name, description, and notes and select **[!UICONTROL Save]** when you are done.

![Edit name and description of an instance.](/help/use-case-playbooks/assets/playbooks/ui-guide/playbook-settings.gif)

### Understand the generated assets {#understand-assets}

>[!IMPORTANT]
>
>No need to worry! This is a safe space to experiment and you can't break anything. There is no data associated yet with any of the assets that you create. You must first ingest data in order to achieve the use cases.

It is important to understand that the generated assets differ based on the use case you are enabling:

* Different assets are generated for different types of playbooks. These assets are created specifically for the use case achieved through the playbook. For example, a playbook generates a schema, a segment, a journey, and messages. Another playbook generates a schema, a segment, and a destination to activate data to.
* The assets themselves differ between playbooks. For example, for the **[!UICONTROL Send A Birthday Message To Guests]** playbook, the audience that is created has the rule `birthday=today AND year=any`. 

To illustrate an example, for the **[!UICONTROL Abandoned Cart: Merchandise]** playbook, you can see that a specific journey is created that includes the messages created for this use case.

![Journey created from use case playbook.](/help/use-case-playbooks/assets/playbooks/ui-guide/journey-preview.png)

### Use and edit the generated assets {#use-and-edit-assets}

As you explore the assets that get generated after you create an instance of a playbook, you can edit any of the assets created. 

If either you or someone on your team create another instance of the playbook, the edited assets are kept and new assets are created for the new instance of the playbook.

The behavior described above is true for all assets that get created, except for schemas. In the case of schemas, new schemas are not created when a new instance of a playbook is created, so you will be using the edited schema from another instance of the playbook in the newly created instance.

>[!TIP]
>
>Test in the development sandbox, and move to production when ready.
>
>Once objects are generated, you can continue to test in the development sandboxes by adding data. You can test the assets as long as you want in the development sandbox and you can replicate the asset logic (segment definitions, journeys, schemas, and so on) in the production sandbox when you are ready.

### Reuse playbooks {#reuse-playbooks}

By creating multiple instances of the same playbook, you can implement the same use case later, without modifying the details of your previous implementation of the use case. 

### Share the playbook and the generated assets with other team members {#share-playbook}

You can share the generated instance and assets with other team members. To do this, copy the URL link from the browser and share it with your team to give them an overview of the generated assets.

![URL highlighted in a use case playbook view.](/help/use-case-playbooks/assets/playbooks/ui-guide/playbook-url.png)

## Next steps {#next-steps}

By reading this UI guide, you now know how to interpret the various sections of a playbook and how to use the assets that get generated after you create an instance of a playbook. Next, you can browse the playbooks catalog to find the right playbook for your use case and read the troubleshooting guide if you encounter any errors.