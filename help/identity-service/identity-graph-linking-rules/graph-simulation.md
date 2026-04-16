---
title: Graph Simulation UI Guide
description: Learn how to use the Graph Simulation in the Identity Service UI.
exl-id: 89f0cf6e-c43f-40ec-859a-f3b73a6da8c8
---
# [!DNL Graph Simulation] UI guide {#graph-simulation}

>[!CONTEXTUALHELP]
>id="platform_identities_graphsimulation"
>title="Graph Simulation"
>abstract="Simulate graphs to understand how Identity Service links identities, and how the Identity Optimization Algorithm works."

[!DNL Graph Simulation] is a tool in the Identity Service UI that you can use to simulate how an identity graph behaves based on the identities you provide and how you configure the [Identity Optimization Algorithm](./identity-optimization-algorithm.md).

Use it to safely test graph behavior before you apply [!DNL Identity Graph Linking Rules] to production data. By defining example events and configuring the Identity Optimization Algorithm, including namespace priorities and "unique per graph" settings, you can see whether identities merge into one graph or stay separate, then adjust your configuration as needed. Use this capability to:

* Prevent graph collapse (for example, when multiple people share a device or a phone number)
* Tune namespace priorities (for example, whether EMAIL or CRM_ID should be dominant)
* Assess how low‑quality or reused identifiers might affect stitching in your environment.

You can also rehearse configuration changes and debug identity issues that show up in downstream applications. For example, if audience sizes or merged profiles look wrong, you can rebuild the relevant events in [!DNL Graph Simulation] to see how your current rules shape the graph and try safer alternatives.

The built-in example scenarios help you explain identity behavior and graph-collapse risk to stakeholders and support buy‑in for data quality and identity governance.

## Understanding the [!DNL Graph Simulation] interface

To access [!DNL Graph Simulation], navigate to the Identity Service workspace in the Adobe Experience Platform user interface and then select **[!UICONTROL Graph Simulation]**.

![Graph Simulation workspace in Identity Service showing the Activity, Algorithm configuration, and Simulated graph areas for building and previewing an identity graph.](../images/graph-simulation/graph-simulation-interface.png)

The interface is organized into three main sections:

>[!BEGINTABS]

>[!TAB Activity]

Use the **[!UICONTROL Activity]** panel to add identities to simulate a graph. Each identity needs a namespace and a value. You must add at least two identities to run a simulation. You can also select **[!UICONTROL Load]** to import a pre-configured event and algorithm setup or to open an existing graph.

![Activity panel with fields to add fully qualified identities (namespace and value) and a Load control to import a saved setup or existing graph.](../images/graph-simulation/activities-panel.png)

>[!TAB Algorithm configuration]

Use the **[!UICONTROL Algorithm configuration]** panel to add and configure the optimization algorithm for your namespaces. Drag and drop namespace rows to change priority order. You can also select **[!UICONTROL Unique Per Graph]** to mark whether a namespace must be unique within the graph.

![Algorithm configuration panel listing namespaces in priority order with drag handles and Unique per graph options for each row.](../images/graph-simulation/algo-panel.png)

>[!TAB Simulated graph]

Use the **[!UICONTROL Simulated graph]** display to review the graph produced from your activities and algorithm settings. A solid line between two identities means the link is kept; a dotted line means the algorithm removed that link.

![Simulated graph canvas with identity nodes; solid lines show active links and dotted lines show links removed by the algorithm.](../images/graph-simulation/simulation-panel.png)

>[!ENDTABS]

## [!DNL Graph Simulation] workflow

### Add activities

To begin simulating identity graphs, select **[!UICONTROL Add Activity]**.

![Activity section with Add Activity highlighted to open the dialog for a new identity event.](../images/graph-simulation/add-activity.png)

When the pop-up window for [!UICONTROL Activity #1] appears, choose an identity namespace and enter its value. You can pick a namespace from the dropdown or type a few letters to filter the list. After you select a namespace, enter the matching identity value.

>[!TIP]
>
>You do not have to use real identity values when using [!DNL Graph Simulation].

The [!UICONTROL Activity] interface updates to show your first activity.

![Activity list showing Activity #1 with a chosen namespace and identity value after the first event is added.](../images/graph-simulation/activity-one.png)

Select **[!UICONTROL Add Activity]** again and complete a second activity. You need at least two fully qualified identities (namespace plus value) to generate a graph.

![Activity list with two events (Activity #1 and Activity #2), each with namespace and value, ready for simulation.](../images/graph-simulation/activity-two.png)

### Configure algorithm

>[!IMPORTANT]
>
>The algorithm you configure controls how Identity Service treats the namespaces in your activities. Nothing you set up in the [!DNL Graph Simulation UI] is saved to Identity Service identity settings.

After your activities are in place, configure the algorithm for the simulation. Select **[!UICONTROL Add config]**.

![Algorithm configuration area with Add config selected to begin adding namespace priority and uniqueness rules.](../images/graph-simulation/add-config.png)

Add each namespace you want the algorithm to consider. Use the dropdown to search, or type the first few letters to narrow the list.

* **Namespace priority**: You control the order of importance for each namespace within your identity graph. For example, if your graph uses CRMID, ECID, Email, and Apple IDFA, you can set their priority to reflect which should be considered first when linking identities. The namespace at the top of your list will have the highest priority.
* **Unique namespace**: When a namespace is marked as unique, Identity Service ensures that only one identity with that namespace appears in a graph. For example, if Email is set as unique, each graph will contain only one Email identity. If multiple identities with the same Email are present, the oldest connection will be removed to maintain uniqueness.

Drag namespace rows into priority order: the top row is highest priority and the bottom is lowest. To treat a namespace as unique within the graph, select its **[!UICONTROL Unique Per Graph]** checkbox.

When you are ready, select **[!UICONTROL Simulate]**.

![Algorithm configuration with namespaces reordered for priority, Unique per graph checkboxes set as needed, and Simulate available to run the simulation.](../images/graph-simulation/add-namespaces.png)

### View simulated graph

The [!UICONTROL Simulated Graph] section shows the graph or graphs produced from your activities and algorithm configuration.

| Graph icons | Description |
| --- | --- |
| Solid line | A solid line represents an established link between two identities. |
| Dotted line | A dotted line represents a removed link between two identities. |
| Number on line | A number on a line indicates when that link was formed relative to the others. The lowest number (1) is the earliest link. |

![Simulated graph output: identities as nodes, links labeled with sequence numbers where applicable, matching the solid-line and dotted-line legend.](../images/graph-simulation/simulated-graph.png)

## Additional features

You can also edit or delete activities, enter activities in text mode, load a sample scenario, or pull in an existing graph from Identity Service.

### Edit activity {#edit-activity}

To edit an activity, select the ellipses (`...`) beside a given activity, and then select **[!UICONTROL Edit]**.

![Row actions menu beside an activity open with Edit chosen to change that activity's namespace or value.](../images/graph-simulation/edit.png)

### Delete activity {#delete-activity}

To delete an activity, select the ellipses (`...`) beside a given activity, and then select **[!UICONTROL Delete]**.

![Row actions menu beside an activity open with Delete chosen to remove that activity from the simulation.](../images/graph-simulation/delete.png)

### Use text mode {#use-text-mode}

You can use text mode to configure your activities. To use text mode, select the settings icon, and then select **[!UICONTROL Text (Advanced users)]**.

![Settings control opened to reveal Text (Advanced users) for switching activities entry to text mode.](../images/graph-simulation/use-text-mode.png)

In text mode, type each identity as `namespace:value`. Separate multiple identities in the same event with a comma (`,`). Start a new line for each event.

![Activities shown as plain text: each line is an event, identities written as namespace:value pairs separated by commas.](../images/graph-simulation/text-mode-display.png)

### Load example {#load-example}

Select **[!UICONTROL Load example]** to load a ready-made graph with preset activities and algorithm settings.

![Load control used to open options including loading a built-in example scenario with preset activities and algorithm.](../images/graph-simulation/load.png)

A dialog lists the scenarios you can open:

| Example graph | Description | Example |
| --- | --- | --- |
| Shared Device | Two different users sign in on the same device. | A husband and wife share an iPad for browsing and e-commerce. |
| Invalid (non-unique) phone | Two different users register with the same phone number. | A mother and daughter use a shared home phone number to sign up for e-commerce accounts. |
| "Bad" identity values | Implementation errors send duplicate or placeholder IDs (for example, the same IDFA for many users). | Web SDK sends a `user_null` value on every activity because of a code defect. |

![Example graph chooser dialog listing Shared Device, Invalid (non-unique) phone, and "Bad" identity values with short descriptions for each scenario.](../images/graph-simulation/example-graph.png)

Choose a scenario to load [!DNL Graph Simulation] with matching activities and algorithm settings. You can edit the result like any other simulation.

![Graph Simulation after loading an example scenario: Activity and Algorithm configuration panels prefilled alongside the resulting simulated graph.](../images/graph-simulation/shared-device.png)

### Load existing graph {#load-existing-graph}

You can use [!DNL Graph Simulation] to load an existing graph and view its activities, algorithm configuration, and graph.

Select **[!UICONTROL Load]** and then select **[!UICONTROL Existing graph]**.

![Load menu expanded with Existing graph selected to import a graph already stored in Identity Service.](../images/graph-simulation/load-existing.png)

In the dialog, enter a namespace and identity value that belong to the graph you want to inspect.

![Identify existing graph dialog with fields to enter a namespace and identity value that belongs to the graph you want to load.](../images/graph-simulation/identify-graph.png)

When the load succeeds, [!DNL Graph Simulation] shows the graph that contains that identity.

>[!TIP]
>
>After you configure your settings on the first [Identity Settings](./identity-settings-ui.md) screen, you can use the **load existing graphs** option to simulate your graph based on those exact settings. The simulation will use the configuration you defined.

![Graph Simulation populated from an existing graph: activities, algorithm settings, and the simulated graph view reflect the loaded identity graph.](../images/graph-simulation/existing-graph-loaded.png)

## Next steps

You can use [!DNL Graph Simulation] to see how Identity Service links identities under different rules before you change production settings. To go deeper, refer to the following documentation:

* [[!DNL Identity Graph Linking Rules] overview](./overview.md)
* [Identity Optimization Algorithm](./identity-optimization-algorithm.md)
* [Implementation guide](./implementation-guide.md)
* [Troubleshooting and FAQ](./troubleshooting.md)
* [Examples of graph configurations](./example-configurations.md)
* [Namespace priority](./namespace-priority.md)
* [Identity settings UI](./identity-settings-ui.md)
