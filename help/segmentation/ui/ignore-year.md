---
solution: Experience Platform
title: Ignore Year Time Constraint Update
description: Learn how to resolve an issue with the ignore year time constraint.
exl-id: 44bb8817-e32d-4806-ad4e-b1840313e768
TQID: https://experienceleague.adobe.com/YlDmagm4R89atrkwq3vq7zlAdZztLrWub63akfpa-uo
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
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
---
# Ignore year time constraint update {#ignore-year}

>[!CONTEXTUALHELP]
>id="platform_audiences_segmentBuilder_ignoreYear"
>title="Ignore year update"
>abstract="The ignore year time constraint has been updated. Please re-save your audience."

>[!IMPORTANT]
>
>You can only use the "ignore year" time constraint in a segment definition evaluated using **batch segmentation**. Adding the "ignore year" time constraint to your segment definition will make the resulting audience **ineligible** for streaming or edge segmentation.

The February 2024 release for Adobe Experience Platform has introduced changes to Adobe Experience Platform Segmentation Service which resolves an issue with the "ignore year" option in audience creation and evaluation.

The "ignore year" option is designed to disregard the year component of a date when performing audience evaluations. You can use this option in situations where the temporal relationship between different events is important but the specific year is unimportant, such as a birth date field. 

However, during leap years such as 2024, the underlying system failed to properly handle this option, resulting in inaccurate audience evaluations. As a result if "ignore year" is enabled in a leap year, the audience evaluation would miss one day.

If you created an audience before this fix was released, you just need to re-save the audience in the Segment Builder in order to apply the fix. If you're unsure if your audience is affected by this resolution, the Segment Builder will prompt the user if the existing audience is affected by this issue.
