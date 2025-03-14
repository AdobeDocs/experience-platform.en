---
title: Audience Builder in Real-Time Customer Data Platform
description: Learn how to use the Audience Builder in Real-Time CDP to create audiences.
feature: Get Started, Audiences
badgeB2B: label="B2B Edition" type="Informative" url="https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform-b2b-edition-prime-and-ultimate-packages.html newtab=true"
---

# Audience Builder in Real-Time Customer Data Platform

Built on top of Adobe Experience Platform, [!DNL Adobe Real-Time Customer Data Platform] is able to make use of the full Audience Builder capabilities that are a part of [!DNL Experience Platform]. The workspace provides intuitive controls for building and editing rules, such as drag-and-drop tiles used to represent data properties. 

IMAGE

## Fields {#fields}

When using Audience Builder for accounts, you can use account attributes or existing audiences as your audience's fields.

You can select the (settings icon) to adjust the settings for the displayed fields.

IMAGE

>[!NOTE]
>
>The **[!UICONTROL Field options]** section is currently in beta, and is available only to select customers. Please contact Adobe Customer Care for more information.

The [!UICONTROL Settings] section is displayed. In this section, you can update which fields are displayed as well as the relationship of the fields.

For the **[!UICONTROL Field options]**, you can either show only the fields that contain data or the full XDM schema.

For the **[!UICONTROL Relationship of fields]**, you can either use the standard relations for your organization or you can show the relation selectors.

IMAGE

### Attributes {#attributes}

The Attributes tab allows you to browse Account attributes belonging to the XDM Business Account class. Each folder can be expanded to reveal additional attributes, where each attribute is a tile that can be dragged onto the [rule builder canvas](#rule-builder-canvas) in the center of the workspace.

IMAGE

When selecting an attribute, you can see summary data by selecting the (information icon). The summary data includes information such as top values, an explanation of what the field is, as well as the percentage of accounts that contain values for this attribute.

IMAGE

If an attribute is populated by less than 25% of accounts, the (data alert icon) will be displayed instead. The same summary data will be displayed for the attribute, regardless.

IMAGE

For a more detailed guide on the Audience Builder, read the [Audience Builder user guide](../../segmentation/ui/segment-builder.md).

### Audiences {#audinces}

The **[!UICONTROL Audiences]** tab lists all the people-based and account-based audiences available within Experience Platform.

You can hover over the (information icon) next to an audience to view information about the audience including its ID, description, and the folder hierarchy to locate the audience.

IMAGE

## Rule builder canvas {#rule-builder-canvas}

An audience created in Audience Builder is a collection of rules used to describe key characteristics or behaviors of a target audience. These rules are created using the rule builder canvas, located in the center of Audience Builder.

To add a new rule to your segment definition, drag a tile from the **[!UICONTROL Fields]** tab and drop it onto the rule builder canvas. 

IMAGE

For more information on using the rule builder canvas, read the [Segment Builder documentation](../../segmentation/ui/segment-builder.md#rule-builder-canvas).

### Containers {#containers}

Audience rules are evaluated in the order they are listed. You can use containers to allow greater control over the order of execution, through the usage of nested queries.

For more information on containers, read the [Segment Builder documentation](../../segmentation/ui/segment-builder.md#containers).

## Audience properties {#properties}

The **[!UICONTROL Audience properties]** section displays information about the audience including an estimated size of the audience. You can also specify details about your audience, including its name, description, and tags.

IMAGE

The **[!UICONTROL Qualified accounts]** indicates the actual number of accounts that match the audience's rules. This number updates every 24 hours, after the segmentation job has ran.

The **[!UICONTROL Estimated accounts]** indicates the approximate number of accounts based off of the sample job. You can update this value after adding new rules or conditions and selecting **[!UICONTROL Refresh estimate]**.

IMAGE

You can select **[!UICONTROL View accounts]** to see a sampling of the accounts that would qualify for the audience with the current rules.

IMAGE

The **[!UICONTROL Code view]** provides a text-based-code description of the audience's rules.

IMAGE

You can select **[!UICONTROL Apply access labels]** to apply the relevant access labels for the audience. More information on access labels can be found in the ???.

IMAGE

The rest of the audience properties section lets you edit details related to the account audience, including the name, description, and tags.

IMAGE

You **cannot** change the evaluation method for account audiences, as all account audiences are evaluated using batch segmentation.

## Next steps {#next-steps}

Audience Builder provides a rich workflow that lets you create audiences from your XDM Business Account data.

To learn more about Segmentation Service for profile data, please read the [Segmentation Service overview](../../segmentation/home.md).
