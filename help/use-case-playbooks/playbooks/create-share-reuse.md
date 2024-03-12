---
solution: Experience Platform
title: Create, share, and reuse playbook instances
description: Learn how to create, share, and reuse playbook instances to accomplish your marketing use case.
role: User, Developer
exl-id: b06d8186-c41f-4150-bac4-69c616151ef9
---
# Create, share, and reuse playbook instances

To use a playbook, navigate to **[!UICONTROL Use Case Playbooks] > [!UICONTROL Playbooks]**. Browse and use the various searching and filtering options on the page to select and get started with a specific playbook.

## Create a playbook instance {#create-playbook-instance}

>[!CONTEXTUALHELP]
>id="platform_playbooks_create"
>title="Create instance"
>abstract="Generate a list of assets like journeys, audiences, schemas or destinations to use in journey or activation scenarios."

Before creating a playbook instance, explore the available playbooks to [discover the right playbook for you](/help/use-case-playbooks/playbooks/discover.md). When you are ready to proceed with a playbook and create an instance, select **[!UICONTROL Create Instance]** to proceed with the playbook and generate technical assets.

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

* Different assets are generated for different types of playbooks. These assets are created specifically for the use case achieved through the playbook. For example, a playbook generates a schema, an audience, a journey, and messages. Another playbook generates a schema, an audience, and a destination to activate data to.
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
>Once objects are generated, you can continue to test in the development sandboxes by adding data. You can test the assets as long as you want in the development sandbox and you can replicate the asset logic (audience definitions, journeys, schemas, and so on) in the production sandbox when you are ready. You can move to the development sandbox and then to the production sandbox by using the [data awareness functionality](/help/use-case-playbooks/playbooks/data-awareness.md).

## Reuse playbooks {#reuse-playbooks}

By creating multiple instances of the same playbook, you can implement the same use case later, without modifying the details of your previous implementation of the use case. 

## Share the playbook and the generated assets with other team members {#share-playbook}

You can share the generated instance and assets with other team members. To do this, copy the URL link from the browser and share it with your team to give them an overview of the generated assets.

![URL highlighted in a use case playbook view.](/help/use-case-playbooks/assets/playbooks/ui-guide/playbook-url.png)

## Video walkthrough of the end-to-end playbook process 

Watch this video to learn how to discover, create, publish, and troubleshoot instances of a Use Case Playbook from end-to-end, as well as how to copy the assets generated by the playbook into other sandboxes set up in your organization.

>[!VIDEO](https://video.tv.adobe.com/v/3427058/?learn=on)

## Next steps {#next-steps}

By reading this guide and the one about discovering the right playbook for you, you now know how to interpret the various sections of a playbook and how to use the assets that get generated after you create an instance of a playbook. 

Next, you can browse the playbooks catalog to find the right playbook for your use case and read the [troubleshooting guide](/help/use-case-playbooks/playbooks/troubleshooting.md) if you encounter any issues.
