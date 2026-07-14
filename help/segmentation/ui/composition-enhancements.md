---
title: Audience Composition Enhancements
description: Learn about the enhancements made to Audience Composition with audience enrichment and faster activation.
hide: true
exl-id: 068a178e-ef50-45f1-bcce-c207ebcd5ef1
TQID: https://experienceleague.adobe.com/CFx-1ILZzkvy91XX8ohinUcnwg4y3YQ52pz2h-BG1Lo
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
subfeature_v2:
  - id: cbd4a8d8-97a6-4ac9-b8d6-b6c1f28d3342
    internal-label: Segments
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
  - id: e5ae22e3-a3b0-46ed-804f-9abf1bbe3e74
    internal-label: Guardrails
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
---
# Audience Composition enhancements

You now have access to **two** enhancements for Audience Composition:

- [Audience enrichment](#audience-enrichment)
- [Faster activation](#faster-activation)

## Audience enrichment {#audience-enrichment}

Audience enrichment lets you output the array of values that let your profiles qualify for the audience you created.

To add audience enrichments to your composition, select the topmost **[!UICONTROL Audience]** block within the canvas. After giving the audience, a name, select **[!UICONTROL Build rule]** to open the rule-builder canvas.

![The Audience block is highlighted, as well as the Build rule button.](/help/segmentation/images/ui/composition-enhancements/select-build-rule.png)

The rule-builder canvas appears. You can now create a filter criteria for your audience enrichment. This filter criteria **must** include an attribute that is within an array. The attribute being an array is dependent on your organization's schema structure. After you created your filter criteria, select **[!UICONTROL View enrichment]** within the right-hand panel.

![The rule builder canvas shows an example of an audience that can have enrichments. The Delivery button is also highlighted.](/help/segmentation/images/ui/composition-enhancements/view-enrichment.png)

 Choose the object array, as well as the fields you want to be used in the enrichment from the list on the left panel. If there is only one array on the profile, the array is automatically selected for you. Select **[!UICONTROL Save]** to return to audience composition.

 <!-- , as well as the fields you want to be used in the enrichment. -->

![The schema tree for the enrichment tree is displayed.](/help/segmentation/images/ui/composition-enhancements/enrichment-tree.png)

Within audience composition, your [!UICONTROL Audience] block is now a "[!UICONTROL Rule builder with enhancement]" type. Select **[!UICONTROL Publish]** to activate your audience with the next daily batch.

![The Audience block is highlighted, showing that an audience with enrichment is added.](/help/segmentation/images/ui/composition-enhancements/rule-builder-with-enrichment.png)

### Behavior details and guardrails

Please keep the following details and guardrails in mind while using audience enrichment:

- You can only use audience enrichment within audiences created within Audience Composition
- The first block used within the composition **must** be a rule-based audience.
- You **cannot** use any other operations within the composition.
- Once published, you **cannot** edit the composition on the rule-based audience.

  - You *can* copy the composition into a draft and edit the draft if you wish to make changes to the base composition or rule-based audience.

- Only **one** object array can be used to generate the enrichment payload within a single audience

  - The payload array can be nested within an object (up to seven layers within the profile schema), but **cannot** be contained in another array.
  - The payload array **must** have 50 or fewer rows.
  - All the columns output within the payload **must** be a primitive type.
  - Only the first **twenty** columns of the array are outputted.

- Only **ten** audience compositions are available for use at this time

## Faster activation {#faster-activation}

Faster activation lets you activate your audience to a downstream destination immediately after the composition has evaluated. As a result, if your destination is set to activate after segment evaluation, you no longer need to wait for 24 hours for the evaluation job to finish.

For more information, read the [activate audiences to batch profile destinations guide](/help/destinations/ui/activate-batch-profile-destinations.md#export-full-files).
