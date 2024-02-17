---
solution: Experience Platform
title: Ignore Year Time Constraint Update
description: Learn how to resolve an issue with the ignore year time constraint.
---

# Ignore year time constraint update {#ignore-year}

The February 2024 release for Adobe Experience Platform has introduced changes to Adobe Experience Platform Segmentation Service which resolves an issue with the "ignore year" option in audience creation and evaluation.

The "ignore year" option is designed to disregard the year component of a date when performing audience evaluations. This option is useful in situations where the temporal relationship between different events is important but the specific year is unimportant, such as a birth date field. 

However, during leap years such as 2024, the underlying system failed to properly handle this option, resulting in inaccurate audience evaluations. As a result if "ignore year" is enabled in a leap year, the audience evaluation would miss one day.

If you created an audience before this fix was released, you just need to re-save the audience in the Segment Builder in order to apply the fix. If you're unsure if your audience is affected by this resolution, the Segment Builder will prompt the user if the existing audience is affected by this issue.
