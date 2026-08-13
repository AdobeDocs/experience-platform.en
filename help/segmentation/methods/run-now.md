---
title: Run Now Evaluation Guide
description: Learn how to immediately evaluate an audience, using run now evaluation, so you can activate it to a destination.
---

# Run now evaluation guide

>[!AVAILABILITY]
>
>Run now evaluation is currently in beta. For more information, contact Adobe Customer Care.

Run now evaluation lets you **immediately** activate an audience to a destination on demand. With run now evaluation, you don't need to wait for your system schedule to activate your audience and you can move immediately from building your audience to evaluating your audience. 

As a result, you can iterate through the process of audience creation - building, validating, iterating, and activating - much more quickly, since you can move straight from building an audience to activating an audience.

## Guardrails {#guardrails}

With run now evaluation, please keep the following conditions in mind:

- You have a **maximum** of 1000 runs per year.
  - A year is defined as one year starting on the date of your Experience Platform contract for run now evaluations. For example, if you contract started on May 18th, your number of run now evaluation runs will reset every May 18th.
- Run Evaluation results can **only** be sent to the following locations:
  - File-based destinations configured with **After segment evaluation** schedule
  - The **Audience Orchestration Run Now Profile Dataset**

>[!NOTE]
>
>You can purchase additional Run now evaluation runs. For more information, contact Adobe Customer Care.

## Running run now evaluation {#run}

To begin a run now evaluation within the Experience Platform UI, open Audience Portal by selecting **[!UICONTROL Audiences]** in the **[!UICONTROL Customers]** section.

The Audience Portal is displayed, showing a list of all the people audiences for the organization. In Audience Portal, select the audience you want to have evaluated, and select **[!UICONTROL Run now]**.

![The Run now button is highlighted within the more actions.](/help/segmentation/images/methods/run-now/select-run-now.png)

The following table displays the types of audiences that support run now evaluation:

| Audience definition | Supported |
| ------------------- | --------- |
| Profile-only | Yes |
| Experience Event only | No |
| Profile and Experience Event | No |
| Audience that is referred to in another audience | Yes |
| B2B relational entities | Yes |
| B2C multi-entity | Yes |

The **[!UICONTROL Immediate audience evaluation]** popover appears. This popover displays a list of the audiences that will be evaluated, as well as the total number of consumed runs. If the correct audiences are displayed, select **[!UICONTROL Proceed]**.

![The Immediate audience evaluation popover is displayed.](/help/segmentation/images/methods/run-now/immediate-audience-evaluation.png)

The list of **[!UICONTROL Mapped destinations]** are displayed. If the listed destinations are valid to be exported to, you'll be able to select **[!UICONTROL Run now]** to continue.

![The Mapped destinations are displayed within the popover.](/help/segmentation/images/methods/run-now/mapped-destinations.png)

The evaluation immediately begins. While the evaluation runs, a loading screen is displayed. You **must** keep this popup open while the evaluation is running.

![The processing screen is displayed, which is shown after beginning the immediate evaluation.](/help/segmentation/images/methods/run-now/processing.png)

Once the evaluation completes, a summary is displayed. This includes the segmentation job ID, the number of profiles evaluated, the number of runs, and the mapped destinations. 

![The evaluation complete section is displayed, showing information about the run.](/help/segmentation/images/methods/run-now/evaluation-complete.png)

If you select **[!UICONTROL Top 20 results]**, you can see a preview of qualified profiles for the destination, with up to twenty profiles displayed. For the sample profiles, the profile ID and name are shown.

![The Audience preview is displayed.](/help/segmentation/images/methods/run-now/audience-preview.png)

## Frequently asked questions {#faq}

The following section lists frequently asked questions related to run now evaluation.

### If my audience depends on other audiences, does triggering it use more than one run?

Yes. Each audience evaluated using a run now evaluation consumes 1 Run. If your audience depends on other audiences, using a run now evaluation evaluates each of the other audiences and each audience evaluation consumes 1 Run. For example, if your audience depends on three other audiences, 4 Runs will be used. The total number of Runs a given evaluation will consume is displayed within the Run Now popover.

### Can I send my run now evaluation results to my regular scheduled destination?

No, you cannot send run now evaluation results to scheduled audiences. You can only use run now if your destination is a file-based destination that uses the **After segment evaluation** frequency **or** the results are sent to the **Audience Orchestration Run Now Profile Dataset**, you can send your evaluation results to your regular scheduled destinations.

### Does run now evaluation permanently update my customer profiles?

By default, run now evaluation does **not** permanently update your customer profiles.

### Can I trigger run now evaluation on the same audience twice at the same time?

No. You cannot concurrently run evaluation on the same audience.

### How many evaluation runs do I get?

You get **1000** evaluation runs per year. Additional runs are purchasable in packs of 100. For more details, contact Adobe Customer Care.
