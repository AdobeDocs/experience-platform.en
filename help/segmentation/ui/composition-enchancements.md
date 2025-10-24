---
title: Audience Composition Enhancements
description: Learn about the enhancements made to Audience Composition with audience enrichment and chained activation.
hide: yes
hidefromtoc: yes
---

# Audience Composition enhancements

You now have access to **two** enhancements for Audience Composition:

- Audience enrichment
- Chained activation

## Audience enrichment

Audience enrichment lets you output the array of values that let your profiles qualify for the audience you created.

To add audience enrichments to your composition, select the topmost **Audience** block within the canvas.

IMAGE

After giving the audience, a name, select **Build rule** to open the rule-builder canvas.

IMAGE

The rule-builder canvas appears. You can now create a filter criteria for your audience enrichment. 

IMAGE

After you created your filter criteria, select **Delivery** within the right-hand panel. Choose the object array you want to use for enrichment from the list on the left panel. If there is only one array on the profile, the array is automatically selected for you. Select **Save** to return to audience composition.

IMAGE

Within audience composition, your Audience block is now a "Rule builder with enhancement" type. Select **Publish** to activate your audience with the next daily batch.

IMAGE

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
  - All the columns output within the payload **must** be a primitive type
  - Only the first **twenty** columns of the array are outputted
- Only **ten** audience compositions are available for use at this time

## Chained activation

Chained activation lets you activate your audience to a downstream destination immediately after the composition has evaluated. As a result, if your destination is set to activate after segment evaluation, you no longer need to wait for 24 hours for the evaluation job to finish.

For more information, read the [activate batch profile destinations guide](/help/destinations/ui/activate-batch-profile-destinations.md#export-full-files).