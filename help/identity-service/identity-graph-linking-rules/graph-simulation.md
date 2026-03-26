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

[!DNL Graph Simulation] is a tool in the Identity Service UI that you can use to simulate how an identity graph behaves given a particular combination of identities and how you configure the [Identity Optimization Algorithm](./identity-optimization-algorithm.md).

You can use the [!DNL Graph Simulation] in Identity Service to safely test how identity graphs behave before you apply [!DNL Identity Graph Linking Rules] to real data. By defining example events and configuring the Identity Optimization Algorithm (including namespace priorities and "unique per graph" settings), you can see whether identities merge into a single graph or remain separate, and adjust your configuration accordingly. Use this capability to: 

* Prevent graph collapse (for example, when multiple people share a device or a phone number)
* Tune namespace priorities (for example, whether EMAIL or CRM_ID should be dominant)
* Assess how low‑quality or reused identifiers might impact stitching behavior in your environment.

You can also use the tool to rehearse configuration changes and to debug identity issues seen in downstream applications. For example, when you encounter unexpected audience sizes or merged profiles, you can reconstruct the relevant events in [!DNL Graph Simulation] to understand how your current rules produce those graphs and iterate on safer alternatives. In addition, you can use the provided example scenarios to explain identity behavior and graph collapse risks to your stakeholders, making it easier to gain buy‑in for data quality efforts and identity governance. 

## Understanding the [!DNL Graph Simulation] interface

To access [!DNL Graph Simulation], navigate to the Identity Service workspace in the Adobe Experience Platform user interface and then select **[!UICONTROL Graph Simulation]**.

![Graph Simulation workspace in Identity Service showing the Activity, Algorithm configuration, and Simulated graph areas for building and previewing an identity graph.](../images/graph-simulation/graph-simulation-interface.png)

You can divide [!DNL Graph Simulation] into three sections:

>[!BEGINTABS]

>[!TAB Activity]

Use the **[!UICONTROL Activity]** panel to add identities to simulate a graph. A fully qualified identity must have an identity namespace and its corresponding identity value. You must add at least two identities in order to simulate a graph. You can also select **[!UICONTROL Load]** to input a pre-configured event and algorithm setup or view an existing graph configuration.

![Activity panel with fields to add fully qualified identities (namespace and value) and a Load control to import a saved setup or existing graph.](../images/graph-simulation/activities-panel.png)

>[!TAB Algorithm configuration]

Use the **[!UICONTROL Algorithm configuration]** panel to add and configure the optimization algorithm for your namespaces. You can drag and drop a namespace to modify their respective priority ranking. You can also select **[!UICONTROL Unique Per Graph]** to determine if a namespace is unique.

![Algorithm configuration panel listing namespaces in priority order with drag handles and Unique per graph options for each row.](../images/graph-simulation/algo-panel.png)

>[!TAB Simulated graph]

Use the **[!UICONTROL Simulated graph]** display to inspect the resulting graph based on the events you added and the algorithm you configured. A straight line between two identities means that a link is established. A dotted line indicates that a link has been removed.

![Simulated graph canvas with identity nodes; solid lines show active links and dotted lines show links removed by the algorithm.](../images/graph-simulation/simulation-panel.png)

>[!ENDTABS]

## [!DNL Graph Simulation] workflow

### Add activities

To begin simulating identity graphs, select **[!UICONTROL Add Activity]**.

![Activity section with Add Activity highlighted to open the dialog for a new identity event.](../images/graph-simulation/add-activity.png)

When the pop-up window for [!UICONTROL Activity #1] appears, begin by entering your identity namespace and corresponding identity value. You can select a namespace from the dropdown menu, or start typing a few letters to quickly find and choose the appropriate option. After selecting a namespace, enter the identity value that matches it. Repeat this process to add a second identity as you need at least two fully qualified identities to generate an identity graph.

>[!TIP]
>
>You do not have to use real identity values when using [!DNL Graph Simulation].

The [!UICONTROL Activity] interface updates to display your first activity.

![Activity list showing Activity #1 with a chosen namespace and identity value after the first event is added.](../images/graph-simulation/activity-one.png)

Next, repeat the same steps and add a second activity.

![Activity list with two events (Activity #1 and Activity #2), each with namespace and value, ready for simulation.](../images/graph-simulation/activity-two.png)

### Configure algorithm

>[!IMPORTANT]
>
>The algorithm that you configure dictates how Identity Service treats the namespaces that you inputted in your activities. Any configuration that you put together in the [!DNL Graph Simulation UI] are not saved in identity settings.

Once you have added your activities, you can now configure the algorithm that will be used to simulate your graph. To begin, select **[!UICONTROL Add config]**.

![Algorithm configuration area with Add config selected to begin adding namespace priority and uniqueness rules.](../images/graph-simulation/add-config.png)

Next, enter a namespace that you want to use for the algorithm. You can use the dropdown to search for the namespace or type-in the first few letters to see a list of recommendations.

* **Namespace priority**: You control the order of importance for each namespace within your identity graph. For example, if your graph uses CRMID, ECID, Email, and Apple IDFA, you can set their priority to reflect which should be considered first when linking identities. The namespace at the top of your list will have the highest priority.
* **Unique namespace**: When a namespace is marked as unique, Identity Service ensures that only one identity with that namespace appears in a graph. For example, if Email is set as unique, each graph will contain only one Email identity. If multiple identities with the same Email are present, the oldest connection will be removed to maintain uniqueness.

To configure namespace priority, select and drag the namespace rows to the priority ordering that you want, with the top row representing higher priority and the bottom row representing lower priority. To designate a namespace as unique, select the **[!UICONTROL Unique Per Graph]** checkbox.

When finished, select **[!UICONTROL Simulate]**.

![Algorithm configuration with namespaces reordered for priority, Unique per graph checkboxes set as needed, and Simulate available to run the simulation.](../images/graph-simulation/add-namespaces.png)

### View simulated graph

The [!UICONTROL Simulated Graph] section displays the identity graph(s) generated based on the activities that you added and the algorithm that you configured.

| Graph icons | Description |
| --- | --- |
| Solid line | A solid line represents an established link between two identities. |
| Dotted line | A dotted line represents a removed link between two identities. |
| Number on line | A number on a line represents the timestamp of when that given link was generated. The lowest number (1), represents the earliest established link. |

![Simulated graph output: identities as nodes, links labeled with sequence numbers where applicable, matching the solid-line and dotted-line legend.](../images/graph-simulation/simulated-graph.png)

## Additional features

Read the sections below for information on the additional features of [!DNL Graph Simulation].

### Edit activity {#edit-activity}

To edit an activity, select the ellipses (`...`) beside a given activity, and then select **[!UICONTROL Edit]**.

![Row actions menu beside an activity open with Edit chosen to change that activity's namespace or value.](../images/graph-simulation/edit.png)

### Delete activity {#delete-activity}

To delete an activity, select the ellipses (`...`) beside a given activity, and then select **[!UICONTROL Delete]**.

![Row actions menu beside an activity open with Delete chosen to remove that activity from the simulation.](../images/graph-simulation/delete.png)

### Use text mode {#use-text-mode}

You can use text mode to configure your activities. To use text mode, select the settings icon, and then select **[!UICONTROL Text (Advanced users)]**.

![Settings control opened to reveal Text (Advanced users) for switching activities entry to text mode.](../images/graph-simulation/use-text-mode.png)

You can manually input your identities with text mode. Use a colon (`:`) to distinguish the identity value that corresponds with the namespace that you input, and then use a comma (`,`) to separate your identities. To distinguish different events from one another, use a new line for each event.

![Activities shown as plain text: each line is an event, identities written as namespace:value pairs separated by commas.](../images/graph-simulation/text-mode-display.png)

### Load example {#load-example}

Select **[!UICONTROL Load example]** to set up an example graph with a pre-set algorithm and activity configuration.  

![Load control used to open options including loading a built-in example scenario with preset activities and algorithm.](../images/graph-simulation/load.png)

A pop-up window appears, providing you with available graph scenarios you can choose from:

| Example graph | Description | Example |
| --- | --- | --- |
| Shared Device | Shared device refers to scenarios where two different users log in to the same single device.| A husband and wife share an iPad for internet browsing and e-commerce. |
| Invalid (non-unique) phone | Invalid or non-unique phone refers to scenarios where two different users use the same phone number to create an account. | A mother and her daughter use their shared home phone number to sign up for any e-commerce accounts. |
| "Bad" identity values | "Bad" identity values refer to scenarios where Identity Service generates non-unique IDFAs due to erroneous implementation. | WebSDK erroneously sends a `user_null` value for every activity due to code implementation issues. |

![Example graph chooser dialog listing Shared Device, Invalid (non-unique) phone, and "Bad" identity values with short descriptions for each scenario.](../images/graph-simulation/example-graph.png)

Select any of the options to load [!DNL Graph Simulation] with pre-configured events and algorithm. You can still make further configurations to any pre-loaded graph scenario examples.

![Graph Simulation after loading an example scenario: Activity and Algorithm configuration panels prefilled alongside the resulting simulated graph.](../images/graph-simulation/shared-device.png)

### Load existing graph {#load-existing-graph}

You can use [!DNL Graph Simulation] to load an existing graph and view its activities, algorithm configuration, and graph.

Select **[!UICONTROL Load]** and then select **[!UICONTROL Existing graph]**.

![Load menu expanded with Existing graph selected to import a graph already stored in Identity Service.](../images/graph-simulation/load-existing.png)

Use the pop-up window and provide a namespace and identity value combination from an existing graph. 

![Identify existing graph dialog with fields to enter a namespace and identity value that belongs to the graph you want to load.](../images/graph-simulation/identify-graph.png)

When successful, the graph that contains the identity you inputted appears.

![Graph Simulation populated from an existing graph: activities, algorithm settings, and the simulated graph view reflect the loaded identity graph.](../images/graph-simulation/existing-graph-loaded.png)

## Next steps

By reading this document, you now know how to use the [!DNL Graph Simulation] tool to better understand how your identity data is treated given a particular set of rules and configurations. For more information, read the following documents:

* [[!DNL Identity Graph Linking Rules] overview](./overview.md)
* [Identity Optimization Algorithm](./identity-optimization-algorithm.md)
* [Implementation guide](./implementation-guide.md)
* [Troubleshooting and FAQ](./troubleshooting.md)
* [Examples of graph configurations](./example-configurations.md)
* [Namespace priority](./namespace-priority.md)
* [Identity settings UI](./identity-settings-ui.md)
