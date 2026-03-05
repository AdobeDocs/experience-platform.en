---
title: graph simulation UI draft
description: this is a draft for a revamped graph simulation UI doc.
---
# [!DNL Graph Simulation] UI guide

[!DNL Graph Simulation] is a tool in the Identity Service UI that you can use to simulate how an identity graph behaves given a particular combination of identities and how you configure the [Identity Optimization Algorithm](./identity-optimization-algorithm.md).

You can use the [!DNL Graph Simulation] in Identity Service to safely test how identity graphs behave before you apply [!DNL Identity Graph Linking Rules] to real data. By defining example events and configuring the Identity Optimization Algorithm (including namespace priorities and "unique per graph" settings), you can see whether identities merge into a single graph or remain separate, and adjust your configuration accordingly. Use this capability to: 

* Prevent graph collapse (for example, when multiple people share a device or a phone number)
* Tune namespace priorities (for example, whether EMAIL or CRM_ID should be dominant)
* Assess how low‑quality or reused identifiers might impact stitching behavior in your environment.

You can also use the tool to rehearse configuration changes and to debug identity issues seen in downstream applications. For example, when you encounter unexpected audience sizes or merged profiles, you can reconstruct the relevant events in [!DNL Graph Simulation] to understand how your current rules produce those graphs and iterate on safer alternatives. In addition, you can use the provided example scenarios to explain identity behavior and graph collapse risks to your stakeholders, making it easier to gain buy‑in for data quality efforts and identity governance. 

## Understanding the [!DNL Graph Simulation] interface

To access [!DNL Graph Simulation], navigate to the Identity Service workspace in the Adobe Experience Platform user interface and then select **[!UICONTROL Graph Simulation]**.

You can divide [!DNL Graph Simulation] into three sections:

>[!BEGINTABS]

>[!TAB Activity]

Use the **[!UICONTROL Activity]** panel to add identities to simulate a graph. A fully qualified identity must have an identity namespace and its corresponding identity value. You must add at least two identities in order to simulate a graph. You can also select **[!UICONTROL Load]** to input a pre-configured event and algorithm setup or view an existing graph configuration.

![The Activity panel.]

>[!TAB Algorithm configuration]

Use the **[!UICONTROL Algorithm configuration]** panel to add and configure the optimization algorithm for your namespaces. You can drag and drop a namespace to modify their respective priority ranking. You can also select **[!UICONTROL Unique Per Graph]** to determine if a namespace is unique.

![The Algorithm configuration panel.]

>[!TAB Simulated graph]

Use the **[!UICONTROL Simulated graph]** display to inspect the resulting graph based on the events you added and the algorithm you configured. A straight line between two identities means that a link is established. A dotted line indicates that a link has been removed.

![The Simulated graph panel.]

>[!ENDTABS]

## [!DNL Graph Simulation] workflow

1. Add activities
2. Configure algorithm
3. Simulate graph

To begin simulating identity graphs, select **[!UICONTROL Add Activity]**.

![The Add Activity button selected.]

A pop-up window appears for [!UICONTROL Activity #1]. From here, input your identity namespace and identity value combination. You can use the dropdown menu to select an identity namespace. Alternatively, you can enter the first few letters of a namespace and then select the options provided in the dropdown menu. Once you have selected your namespace, provide an identity value that corresponds with your namespace.

>[!TIP]
>
>You do not have to use real identity values when using [!DNL Graph Simulation].

![A pop-up window displaying Activity #1]