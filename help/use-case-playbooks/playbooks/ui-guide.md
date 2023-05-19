---
solution: Experience Platform
title: Playbooks UI guide
description: Learn how to use the Experience Platform UI to view and make use of playbooks
---

# How to enable and reuse a playbook

To use a playbook, navigate to **Use Case Playground > Playbooks**. There are several playbooks to choose from, so you can make use of the various searching and filtering options on the page.

## Search and filter

Use the search window and filters available on the page to find the right playbook for your use case. 

For example, you can find the playbook that will help you launch a new product.

![Launch new product](/help/use-case-playbooks/assets/playbooks/ui-guide/new-product-launch-search.gif)

Or, you can filter the available playbooks by the channels that you plan to use to reach your customers.

![Filter by channel](/help/use-case-playbooks/assets/playbooks/ui-guide/channel-select-filter.gif)

You can also filter playbooks by the product entitlements that you have access to, Adobe Journey Optimizer or Real-time CDP. 

## View playbook and generate assets

Before you enable a playbook, you can inspect it to make sure it fits your needs. Before being enabled, all playbooks contain the following sections listed below. When you are ready to proceed with your mindmap and generate assets, 

### Mindmap

Use the mindmap section in a playbook to understand the steps of the workflow that the playbook can help you solve.

![Playbook mindmap highlighted](/help/use-case-playbooks/assets/playbooks/ui-guide/playbook-mindmap.png)


### Summary

Inspect the summary section to understand which assets are generated for you once you enable the playbook.

![Playbook summary highlighted](/help/use-case-playbooks/assets/playbooks/ui-guide/playbook-summary.png)

### Projects

Scroll down to the projects section to get an overview of the instances of this playbook which you have already enabled as *plays*. You can use various controls to sort and filter the displayed plays, for example to only see the ones enabled by you. 

![Playbook projects highlighted](/help/use-case-playbooks/assets/playbooks/ui-guide/playbook-projects.png)

## Enable the playbook

Select **[!UICONTROL Enable]** to proceed with the playbook and generate technical assets.

![Playbook after being enabled](/help/use-case-playbooks/assets/playbooks/ui-guide/play-view.png)
 
### Use the configuration controls to edit project metadata

After creating a project based on a playbook, you can personalize it to distinguish it from other projects created from the same playbook. 

![Playbook after being enabled](/help/use-case-playbooks/assets/playbooks/ui-guide/playbook-settings.gif)

Edit the name, description, and notes and select **[!UICONTROL Save]** when you are done.

### Use and edit the generated assets 

Different assets are generated based on the playbook type - Real-Time CDP or Journey Optimizer. These assets are created specifically for the use case achieved through the playbook. For example, segments have the specific segmentation rule to allow them to be used as part of the project. 

You can edit any of the assets created but be aware that if the playbook gets re-enabled, the edited assets are replaced with the newly created ones. This is true for all assets that get created, with the exception of schemas. In the case of schemas, a new one gets created when a playbook is re-enabled, and the edited schema continues to exist.

### Share the playbook and the generated assets with other team members

You can share the generated project and assets with other team members. To do this, copy the URL link from the browser and share it with your team. 
