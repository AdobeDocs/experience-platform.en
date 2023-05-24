---
solution: Experience Platform
title: Playbooks UI guide
description: Learn how to use the Experience Platform UI to view and enable playbooks.
---

# How to enable and reuse a playbook

To use a playbook, navigate to **Use Cases > Playbooks**. Browse and use the various searching and filtering options on the page to select and get started with a specific playbook.

## Search and filter

Use the search window and filters available on the page to find the right playbook for your use case. 

See an example below of how to find a playbook that helps you launch a new product.

![Launch new product](/help/use-case-playbooks/assets/playbooks/ui-guide/new-product-launch-search.gif)

Or, you can filter the available playbooks by the channels that you plan to use to reach your customers, as you can see below:

![Filter by channel](/help/use-case-playbooks/assets/playbooks/ui-guide/channel-select-filter.gif)

You can also filter playbooks by the product entitlements that you have access to, Adobe Journey Optimizer or Real-time CDP. 

## View playbook and generate assets

Before you enable a playbook, you should inspect it to make sure it fits your needs. Before being enabled, all playbooks contain the following sections listed below. When you are ready to proceed and generate assets, select **[!UICONTROL Enable]**.

### Mindmap

Use the mindmap section in a playbook to understand the steps of the workflow that the playbook can help you solve. Visualize the flow of how all the generated objects can help you achieve the use case, from the perspective of the persona targeted in the use case. 

The mindmap starts with a definition of who is pulled into the journey and describes at every step if something is delivered by Adobe, like a new message or a reminder, or if it is something that the targeted persona did that triggers the next message or event. 

![Playbook mindmap highlighted.](/help/use-case-playbooks/assets/playbooks/ui-guide/playbook-mindmap.png)


### Summary

Inspect the summary section to understand which assets are generated for you once you enable the playbook. The assets that get generated for each playbook are tailored to the use case that the playbook enables. Get more information below about all the items in the summary section.

| Item | Description |
---------|----------|
| **[!UICONTROL Target audience]** | Describes the personas that you are looking to reach through this use case playbook. |
| **[!UICONTROL Channels]** | Describes the channels used to reach the personas targeted in the playbook. |
| **[!UICONTROL Technical assets]** | A list of the technical assets that are generated after you enable the playbook. Note that the generated assets differ by playbook. Refer to the [Understand the generated assets](#understand-assets) section further below for more information about how you can use and reuse the generated assets.  |

{style="table-layout:auto"}

![Playbook summary highlighted](/help/use-case-playbooks/assets/playbooks/ui-guide/playbook-summary.png)

### Projects

Scroll down to the projects section to get an overview of the instances of this playbook which you have already enabled. You can use various controls to sort and filter the displayed projects, for example to only see the ones enabled by you. You can also see various information about each project, as listed below.

|Item | Description |
|---------|----------|
| **[!UICONTROL Name]** | The name of the project based on the playbook. You can customize the name and description of a project. Read the section below on [how to edit project metadata](#edit-project-metadata) for more information. |
| **[!UICONTROL Status]** | Indicates the status of the project. A **[!UICONTROL submitted]** project is ready for use. |
| **[!UICONTROL Created]** | Indicates when the project was created. |
| **[!UICONTROL Created By]** | Indicates who created the project. |
| **[!UICONTROL Last Modified]** | Indicates when the project was last modified. |

{style="table-layout:auto"}

![Playbook projects highlighted](/help/use-case-playbooks/assets/playbooks/ui-guide/playbook-projects.png)

## Enable the playbook

When you are ready to proceed with a playbook and create a project, select **[!UICONTROL Enable]** to proceed with the playbook and generate technical assets.

![Enable a playbook.](/help/use-case-playbooks/assets/playbooks/ui-guide/enable-playbook.png)

This action generates several assets for you to use to achieve the use case described by the playbook.

![Playbook view of generated assets after being enabled.](/help/use-case-playbooks/assets/playbooks/ui-guide/play-view.png)
 
### Use the configuration controls to edit project metadata {#edit-project-metadata}

After creating a project based on a playbook, you can personalize it to distinguish it from other projects created from the same playbook. Select the configuration control as shown below. Edit the name, description, and notes and select **[!UICONTROL Save]** when you are done.

![Edit name and description of a project.](/help/use-case-playbooks/assets/playbooks/ui-guide/playbook-settings.gif)

### Understand the generated assets {#understand-assets}

It is important to understand that the generated assets differ based on the use case you are enabling.

For example, for the **[!UICONTROL Send A Birthday Message To Guests]** playbook, the audience that is created has the rule `birthday=today AND year=any`. 

Similarly, for the **[!UICONTROL Abandoned Cart: Merchandise]** playbook, you can see that a specific journey is created that includes the messages created for this use case.

![Journey created from use case playbook.](/help/use-case-playbooks/assets/playbooks/ui-guide/journey-preview.png)

### Use and edit the generated assets {#use-and-edit-assets}

Different assets are generated based on the playbook type - Real-Time CDP or Journey Optimizer. These assets are created specifically for the use case achieved through the playbook. For example, generated audiences have the specific segmentation rule to allow them to be used as part of the project. 

You can edit any of the assets created but be aware that if the playbook gets re-enabled, the edited assets are replaced with the newly created ones. This is true for all assets that get created, except for schemas. In the case of schemas, a new one gets created when a playbook is re-enabled, and the edited schema continues to exist.

### Share the playbook and the generated assets with other team members

You can share the generated project and assets with other team members. To do this, copy the URL link from the browser and share it with your team.

## Next steps

By reading this UI guide, you now know how to interpret the various sections of a playbook and how to use the assets that get generated after a playbook is enabled. Next, you can browse the playbooks catalog to find the right playbook for your use case and read the trubleshooting guide if you encounter any errors.