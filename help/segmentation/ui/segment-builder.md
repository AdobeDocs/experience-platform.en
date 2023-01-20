---
keywords: Experience Platform;home;popular topics;Segmentation Service;segmentation;segmentation service;user guide;ui guide;segmentation ui guide;segment builder;Segment builder;
solution: Experience Platform
title: Segment Builder UI Guide
description: The Segment Builder in the Adobe Experience Platform UI provides a rich workspace that allows you to interact with Profile data elements. The workspace provides intuitive controls for building and editing rules, such as drag-and-drop tiles used to represent data properties.
exl-id: b27516ea-8749-4b44-99d0-98d3dc2f4c65
---
# [!DNL Segment Builder] UI guide

[!DNL Segment Builder] provides a rich workspace that allows you to interact with [!DNL Profile] data elements. The workspace provides intuitive controls for building and editing rules, such as drag-and-drop tiles used to represent data properties. 

![The segment builder UI is displayed.](../images/ui/segment-builder/segment-builder.png)

## Segment definition building blocks {#building-blocks}

>[!CONTEXTUALHELP]
>id="platform_segments_createsegment_segmentbuilder_fields"
>title="Fields"
>abstract="The three field types that make up a segment are attributes, events, and audiences. Attributes let you use Profile attributes that belong to the XDM Individual Profile class, events let you create an audience based on actions or events that take place using XDM ExperienceEvent data elements, and audiences let you use imported audiences from external sources."

The basic building blocks of segment definitions are attributes and events. In addition, the attributes and events contained in existing audiences can be used as components for new definitions. 

You can see these building blocks in the **[!UICONTROL Fields]** section on the left side of the [!DNL Segment Builder] workspace. **[!UICONTROL Fields]** contains a tab for each of the main building blocks: "[!UICONTROL Attributes]", "[!UICONTROL Events]", and "[!UICONTROL Audiences]".

![The fields section of the Segment Builder is highlighted.](../images/ui/segment-builder/segment-fields.png)

### Attributes

The **[!UICONTROL Attributes]** tab allows you to browse [!DNL Profile] attributes belonging to the [!DNL XDM Individual Profile] class. Each folder can be expanded to reveal additional attributes, where each attribute is a tile that can be dragged onto the rule builder canvas in the center of the workspace. The [rule builder canvas](#rule-builder-canvas) is discussed in more detail later in this guide.

![The attributes section of the Segment Builder fields is highlighted.](../images/ui/segment-builder/attributes.png)  

### Events

The **[!UICONTROL Events]** tab allows you to create an audience based on events or actions that took place using [!DNL XDM ExperienceEvent] data elements. You can also find Event Types on the **[!UICONTROL Events]** tab, which are a collection of commonly used events to enable you to create your segments more quickly.

In addition to being able to browse for [!DNL ExperienceEvent] elements, you can also search for Event Types. Event Types use the same coding logic as [!DNL ExperienceEvents], without requiring you to search through the [!DNL XDM ExperienceEvent] class looking for the correct event. For example, using the search bar to search "cart" returns the Event Types "[!UICONTROL AddCart]" and "[!UICONTROL RemoveCart]", which are two very commonly used cart actions when building segment definitions. 

Any type of component can be searched for by typing its name in the search bar, which uses [Lucene's search syntax](https://docs.microsoft.com/en-us/azure/search/query-lucene-syntax). The search results begin to populate as entire words are entered. For example, to build a rule based on the XDM field `ExperienceEvent.commerce.productViews`, start typing "product views" in the search field. Once the word "product" has been typed, search results begin to appear. Each result includes the object hierarchy to which it belongs. 

>[!NOTE]
>
>Custom schema fields defined by your organization may take up to 24 hours to appear and become available for use in building rules. 

You can then easily drag and drop [!DNL ExperienceEvents] and "[!UICONTROL Event Types]" into your segment definition.
  
![The events section of the Segment Builder UI is highlighted.](../images/ui/segment-builder/events.png)  

By default, only populated schema fields from your data store are shown. This includes "[!UICONTROL Event Types]". If the "[!UICONTROL Event Types]" list is not visible, or you are only able to select "[!UICONTROL Any]" as an "[!UICONTROL Event Type]", select the **gear icon** next to **[!UICONTROL Fields]**, then select **[!UICONTROL Show full XDM schema]** under **[!UICONTROL Available Fields]**. Select the **gear icon** again to return to the **[!UICONTROL Fields]** tab and you should now be able to view multiple "[!UICONTROL Event Types]" and schema fields, regardless of whether they contain data or not.

![Radio buttons that let you choose between only showing fields with data or showing all XDM fields are highlighted.](../images/ui/segment-builder/show-populated.png)

#### Adobe Analytics report suite datasets

You can use data from either a single or multiple Adobe Analytics report suites as events within segmentation. 

When using data from a single Analytics report suite, Platform will automatically add descriptors and friendly names to eVars, making it easier to find those fields within [!DNL Segment Builder].

![An image showing how generic variables (eVars) are mapped with a user friendly name.](../images/ui/segment-builder/single-report-suite.png)

When using data from multiple Analytics report suites, Platform **cannot** automatically add descriptors or friendly names to eVars. As a result, before using the data from Analytics report suites, you must map to XDM fields. More information about mapping Analytics variables to XDM can be found in the [Adobe Analytics source connection guide](../../sources/tutorials/ui/create/adobe-applications/analytics.md#mapping).

For example, consider a situation where you had two report suites with the following variables:

| Field | Report Suite Schema A | Report Suite Schema B |
| ----- | --------------------- | --------------------- |
| eVar1 | Referring Domain | Logged in Y/N |
| eVar2 | Page Name | Member Loyalty ID | 
| eVar3 | URL | Page Name |
| eVar4 | Search Terms | Product Name |
| event1 | Clicks | Page Views |
| event2 | Page Views | Cart Additions |
| event3 | Cart Additions | Checkouts |
| event4 | Purchases | Purchases |

In this case, you could map the two report suites with the following schema:

![An image showing how two report suites can be mapped into one union schema.](../images/ui/segment-builder/union-schema.png)

>[!NOTE]
>
>While the generic eVar values still get populated, you should **not** use them in your segment definitions (if possible), since the values could mean different things than what they were originally in their reports.

Once the report suites have been mapped, you can use these newly mapped fields within your Profile-related workflows and segmentation.

| Scenario | Union Schema experience | Segmentation generic variable | Segmentation mapped variable |
| -------- | ----------------------- | ----------------------------- | ---------------------------- |
| Single report suite | Friendly name descriptor is included with generic variables. <br><br>**Example:** Page Name (eVar2) | <ul><li>Friendly name descriptor included with generic variables</li><li>Queries use data from the specific dataset, since it is the only one</li></ul> | Queries can use Adobe Analytics data and potentially other sources. |
| Multiple report suites | No friendly name descriptors are included with generic variables. <br><br>**Example:** eVar2 | <ul><li>Any field with multiple descriptors appear as generic. This means that no friendly names appear in the UI.</li><li>Queries can use data from any datasets that contain the eVar, which may result in mixed or incorrect results.</li></ul> | Queries use correctly combined results from multiple datasets. |
 
### Audiences

The **[!UICONTROL Audiences]** tab lists all audiences imported from external sources, such as Adobe Audience Manager, as well as audiences created within [!DNL Experience Platform].

On the **[!UICONTROL Audiences]** tab, you can see all of the available sources as a group of folders. As you select the folders, available sub-folders and audiences can be seen. Additionally, you can select the folder icon (as shown in the far-right image) in order to view the folder structure (a check mark denotes the folder you are currently in) and easily navigate back through folders by selecting the name of a folder in the tree.

You can hover over the &#9432; next to an audience to view information about the audience including its ID, description, and the folder hierarchy to locate the audience.

![An image demonstrating how the folder hierarchy works for audiences.](../images/ui/segment-builder/audience-folder-structure.png)

You can also search for audiences using the search bar, which utilizes [Lucene's search syntax](https://docs.microsoft.com/en-us/azure/search/query-lucene-syntax). On the **[!UICONTROL Audiences]** tab, selecting a top-level folder causes the search bar to appear, allowing you to search within that folder. Search results only begin to populate once entire words are entered. For example, to find an audience named `Online Shoppers`, start typing "Online" in the search bar. Once the word "Online" has been typed in full, search results containing the word "Online" appear.

## Rule builder canvas {#rule-builder-canvas}

A segment definition is a collection of rules used to describe key characteristics or behavior of a target audience. These rules are created using the rule builder canvas, located in the center of [!DNL Segment Builder].

To add a new rule to your segment definition, drag a tile from the **[!UICONTROL Fields]** tab and drop it onto the rule builder canvas. You will then be presented with context-specific options according to the type of data being added. Available data types include: strings, dates, [!DNL ExperienceEvents], "[!UICONTROL Event Types]", and audiences. 

![The blank rule builder canvas.](../images/ui/segment-builder/rule-builder-canvas.png)

>[!IMPORTANT]
>
>The latest changes to Adobe Experience Platform have updated the usage of the `OR` and `AND` logical operators between events. These updates will not affect existing segments. However, all subsequent updates to existing segments and new segment creations will be affected by these changes. Please read the [time constants update](./segment-refactoring.md) for more information.

When selecting a value for the attribute, you will see a list of enum values that the attribute can be.

![An image that shows the list of enum values that an attribute can be.](../images/ui/segment-builder/enum-list.png)

If selecting a value from this list of enums, the value will be outlined with a solid border. However, for fields that use `meta:enum` (soft) enums, you can also select a value which is **not** from the list of enums. If you create your own value, it will be outlined with a dotted border, along with a warning that this value is not in the enum list.

![A warning that is displayed if you are inserting a value that is not part of the enum list.](../images/ui/segment-builder/enum-warning.png)

If you are creating multiple values, you can add all of them at once by using the bulk upload. Select the ![plus icon]() to show the **[!UICONTROL Add values in bulk]** popover.

IMAGE

On the **[!UICONTROL Add values in bulk]** popover, you can either upload a CSV or TSV file or manually insert comma separated values. 

IMAGE

Please note that there is a maximum of 100 values allowed. If you exceed this amount, you will need to remove some values before adding more.

IMAGE

### Adding audiences

You can drag and drop an audience from the **[!UICONTROL Audience]** tab onto the rule builder canvas to reference audience membership in the new segment definition. This allows you to include or exclude audience membership as an attribute in the new segment rule.

For [!DNL Platform] audiences created using [!DNL Segment Builder], you are given the option to convert the audience into the set of rules that were used in the segment definition for that audience. This conversion makes a copy of the rule logic, that can then be modified without affecting the original segment definition. Make sure that you have saved any recent changes to your segment definition before converting it to rule logic.

>[!NOTE]
>
>When adding an audience from an external source, only the audience membership is referenced. You cannot convert the audience to rules, and therefore the rules used to create the original audience cannot be modified in the new segment definition.

![This image shows how to convert an audience attribute to rules.](../images/ui/segment-builder/add-audience-to-segment.png)

If any conflicts arise when convert audiences to rules, [!DNL Segment Builder] will attempt to preserve the existing options to the best of its ability.  

### Code view

Alternatively, you can view a code-based version of a rule created in the [!DNL Segment Builder]. Once you have created your rule within the rule builder canvas, you can select **[!UICONTROL Code view]** to see your segment as PQL.

![The code view button is highlighted, which allows you to see the segment as PQL.](../images/ui/segment-builder/code-view.png)

Code view provides a button that allows you to copy the value of the segment to use in API calls. To get the latest version of the segment, make sure you have saved your latest changes to the segment.

![The copy code button is highlighted, which allows you to ](../images/ui/segment-builder/copy-code.png)

### Aggregation functions

An aggregation in [!DNL Segment Builder] is a calculation on a group of XDM attributes whose data type is a number (either a double or an integer). The four supported aggregation functions within Segment Builder are SUM, AVERAGE, MIN, and MAX.

To create an aggregation function, select an event from the left rail, and insert it into the [!UICONTROL Events] container.

![The events section is highlighted.](../images/ui/segment-builder/events.png)

After placing the event within the Events container, select the ellipses icon (...), followed by **[!UICONTROL Aggregate]**.

![The aggregate text is highlighted. Selecting this lets you select aggregation functions.](../images/ui/segment-builder/add-aggregation.png)

The aggregation is now added. You can now select the aggregation function, choose what attribute to aggregate, the equality function, as well as the value. For the example below, this segment would qualify any profile that has a sum of purchased values that is greater than $100, even if each individual purchase is less than $100.

![The event rules, which displays an aggregation function.](../images/ui/segment-builder/filled-aggregation.png)

### Count functions {#count-functions}

Count functions in Segment Builder are used to look for specified events and count the number of times they're done. The supported count functions in Segment Builder are "At least", "At most", "Exactly", "Between", and "All".

To create a count function, select an event from the left rail and insert it into the [!UICONTROL Events] container.

![The events fields are highlighted.](../images/ui/segment-builder/events.png)

After placing the event within the Events container, select the [!UICONTROL At least 1] button. 

![The At least is highlighted, showing the area to select to see a full list of count functions.](../images/ui/segment-builder/add-count.png)

The count function is now added. You can now select the count function and the value of the function. The example below would be to include any event that has at least one click.

![A list of the count functions is displayed and highlighted.](../images/ui/segment-builder/select-count.png)

## Containers

Segment rules are evaluated in the order they are listed. Containers allow control over the order of execution through the use of nested queries.

Once you have added at least one tile to the rule builder canvas, you can begin to add containers. To create a new container, select the ellipses (...) in the top-right corner of the tile, then select **[!UICONTROL Add container]**. 

![The add container button is highlighted, which lets you add a container as a child of the first container.](../images/ui/segment-builder/add-container.png)

A new container appears as the child of the first container, but you can adjust the hierarchy by dragging and moving the containers. The default behavior of a container is to "[!UICONTROL Include]" the attribute, event, or audience provided. You can set the rule to "[!UICONTROL Exclude]" profiles that match the container criteria by selecting **[!UICONTROL Include]** in the top-left corner of the tile and selecting "[!UICONTROL Exclude]".

A child container can also be extracted and added inline to the parent container by selecting "unwrap container" on the child container. Select the ellipses (...) in the top-right corner of the child container to access this option.

![Options that let you unwrap or delete the container are highlighted.](../images/ui/segment-builder/include-exclude.png)

Once you select **[!UICONTROL Unwrap container]** the child container is removed and the criteria appear inline. 

>[!NOTE]
>
>When unwrapping containers, be careful that the logic continues to meet the desired segment definition.

![The container is shown after being unwrapped.](../images/ui/segment-builder/unwrapped-container.png)

## Merge policies

[!DNL Experience Platform] enables you to bring data together from multiple sources and combine it in order to see a complete view of each of your individual customers. When bringing this data together, merge policies are the rules that [!DNL Platform] uses to determine how data will be prioritized and what data will be combined to create a profile. 

You can select a merge policy that matches your marketing purpose for this audience or use the default merge policy provided by [!DNL Platform]. You can create multiple merge policies unique to your organization, including creating your own default merge policy. For step-by-step instructions on creating merge policies for your organization, please begin by reading the [merge policies overview](../../profile/merge-policies/overview.md). 

To select a merge policy for your segment definition, select the gear icon on the **[!UICONTROL Fields]** tab, then use the **[!UICONTROL Merge Policy]** dropdown menu to select the merge policy that you wish to use.

![The merge policy selector is highlighted. This lets you choose which  merge policy to select for your segment definition.](../images/ui/segment-builder/merge-policy-selector.png)

## Segment properties {#segment-properties}

>[!CONTEXTUALHELP]
>id="platform_segments_createsegment_segmentbuilder_segmentproperties"
>title="Segment properties"
>abstract="The segment properties section displays an estimate of the size of the resulting segment, displaying the number of qualified profiles in comparison to the total number of profiles. This allows you to adjust your segment definition as necessary before building the audience itself."

>[!CONTEXTUALHELP]
>id="platform_segments_createsegment_segmentbuilder_refreshestimate"
>title="Refresh estimates"
>abstract="You can refresh the estimates of your segment to immediately see a preview of how many profiles would qualify for the proposed segment. Audience estimates are generated by using a sample size of that day's sample data."
>additional-url="https://experienceleague.adobe.com/docs/experience-platform/segmentation/tutorials/create-a-segment.html?lang=en#estimate-and-preview-an-audience" text="Estimate and preview an audience"

When building a segment definition, the **[!UICONTROL Segment Properties]** section on the right-hand side of the workspace displays an estimate of the size of the resulting segment, allowing you to adjust your segment definition as needed before building the audience itself.

The **[!UICONTROL Segment Properties]** section is also where you can specify important information about your segment definition, including its name, description, and evaluation type. Segment definition names are used to identify your segment among those defined by your organization and should therefore be descriptive, concise, and unique. 

As you continue to build your segment definition, you can view a paginated preview of the audience by selecting **[!UICONTROL View Profiles]**.

![The segment definition properties section is highlighted. The segment properties include, but are not limited to, the segment name, description, and evaluation method.](../images/ui/segment-builder/segment-properties.png)

>[!NOTE]
>
>Audience estimates are generated by using a sample size of that day's sample data. If there are less than 1 million entities in your profile store, the full data set is used; for between 1 and 20 million entities, 1 million entities are used; and for over 20 million entities, 5% of the total entities are used. More information about generating segment estimates can be found in the [estimate generation section](../tutorials/create-a-segment.md#estimate-and-preview-an-audience) of the segment creation tutorial.

You can also select your evaluation method. If you know what evaluation method you want to use, you can select the desired evaluation method either using the dropdown list. If you want to know what evaluation types this segment qualifies for, you can select the browse icon ![folder icon with a magnifying glass](../images/ui/segment-builder/segment-evaluation-select-icon.png) to see a list of the available segment evaluation methods.

The [!UICONTROL Evaluation method eligibility] popover appears. This popover displays the available evaluation methods, which are batch, streaming, and edge. The popover shows which evaluation methods are eligible and ineligible. Depending on the parameters you used in your segment definition, it may not qualify for certain evaluation methods. For more information on the requirements for each evaluation method, please read the [streaming segmentation](./streaming-segmentation.md#query-types) or the [edge segmentation](./edge-segmentation.md#query-types) overviews.

![The evaluation method eligibility pop up appears. This displays which methods of segment evaluation are eligible and ineligible for the segment.](../images/ui/segment-builder/select-evaluation-method.png)

If you select an invalid evaluation method, you will be prompted to either change your segment definition rules or change the evaluation method. 

![The evaluation method pop up. If an ineligible segment evaluation method is selected, the pop up explains why it is ineligible.](../images/ui/segment-builder/ineligible-evaluation-method.png)

More information about the different segment definition evaluation methods can be found in the [segmentation overview](../home.md#evaluate-segments).

## Next steps {#next-steps}

Segment Builder provides a rich workflow allowing you to isolate marketable audiences from [!DNL Real-Time Customer Profile] data. After reading this guide you should now be able to:

- Create segment definitions using a combination of attributes, events, and existing audiences as building blocks.  
- Use the rule builder canvas and containers to control the order in which segment rules are executed.
- View estimates of your prospective audience, allowing you to adjust your segment definitions as required.
- Enable all segment definitions for scheduled segmentation.
- Enable specified segment definitions for streaming segmentation.
  
To learn more about [!DNL Segmentation Service], please continue reading the documentation and supplement your learning by watching the related videos. To learn more about the other parts of the [!DNL Segmentation Service] UI, please read the [[!DNL Segmentation Service] user guide](./overview.md)
