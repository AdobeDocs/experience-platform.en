---
title: Audience Builder UI Guide
description: Learn how to use the 
---

# Audience Builder UI Guide

>[!AVAILABILITY]
>
>The updated Audience Builder is currently in **closed beta**. The documentation and the functionality are subject to change.

Audience Builder provides a rich workspace that allows you to interact with Profile data elements. The workspace provides intuitive controls for building and editing your audience's rules.

IMAGE

## Audience Builder workspace {#workspace}

The Audience Builder workspace provides three different types of views: **[!UICONTROL Rule view]**, **[!UICONTROL Code view]**, and **[!UICONTROL Profile view]**. 

- [Rule view](#rule-view): Lets you create the rules to define your audience.
- [Code view](#code-view): Lets you view the PQL that defines your audience. This view is only visible once you have defined a rule for your audience.
- [Profile view](#profile-view): Lets you view a sample of profiles that would qualify for you audience. This view is only visible once an estimate job has run.

## Rule view {#rule-view}

In the rule view canvas, you can add either **attributes** or **events** to the rule building canvas. Attributes let you add either Profile attributes that belong to the XDM Individual Profile class or other previously created audiences, while events let you add actions or events that take place using XDM ExperienceEvent data elements.

### Attributes {#attributes}

The **[!UICONTROL Attributes]** section allows you to browse [!DNL Profile] attributes belonging to the [!DNL XDM Individual Profile] class. 

IMAGE

You can select **Add field** to add an attribute or audience to the rule building canvas or you can select **Add group** to add a container to the canvas. 

IMAGE

If you select **Add field**, the fields popover appears. This popover lets you intelligently search for the field you want to add. 

IMAGE

You can select ![the star icon]() to add the searched field to your list of favorites, which lets you add that field to your audience more quickly for future references.

IMAGE

You can select ![the filter icon]() to adjust the settings for the displayed fields.

For the **[!UICONTROL Field settings]**, you can either show only the fields that contain data or the full XDM schema.

For the **[!UICONTROL Field types]**, you can show **[!UICONTROL Attributes]**, **[!UICONTROL Audiences]**, or **[!UICONTROL Saved conditions]**.

IMAGE

Alternatively, you can view all the available fields for your audience by selecting **[!UICONTROL View All]** in the **[!UICONTROL Browse fields]** area.

IMAGE

In the **[!UICONTROL Browse fields]** area, you can select between **[!UICONTROL Attributes]**, **[!UICONTROL Audiences]**, or **[!UICONTROL Saved conditions]**.

IMAGE

>[!BEGINTABS]

>[!TAB Attributes]

>[!TAB Audiences]

>[!TAB Saved conditions]

>[!ENDTABS]

### Events {#events}

## Profile view {#profile-view}

## Code view {#code-view}