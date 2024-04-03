---
title: Graph Simulation
description: Learn how to use the Graph Simulation in the Identity Service UI.
badge: Beta
---
# Graph Simulation

## What is Graph Simulation?

Graph Simulation is a tool in the Identity Service UI that you can use to simulate how an identity graph behaves given a particular combination of identities and how you configure the [identity optimization algorithm](./identity-optimization-algorithm.md).

Read this document to learn how you can use Graph Simulation to better understand identity graph behavior and how the graph algorithm functions.

## Get to know the Graph Simulation interface

You can access Graph Simulation in the Adobe Experience Platform UI. Select **[!UICONTROL Identities]** from the left navigation and then select **[!UICONTROL Graph Simulation]** from the top header.

The Graph Simulation interface can be divided into three sections:

* Events: Use the **[!UICONTROL Events]** panel to add identities to simulate a graph. A fully qualified identity must have an identity namespace and its corresponding identity value. You must add at least two identities in order to simulate a graph. You can also select **[!UICONTROL Load Example]** to input a pre-configured event and algorithm setup.
* Algorithm Configuration: Use the **[!UICONTROL Algorithm Configuration]** panel to add and configure the optimization algorithm for your namespaces. You can drag and drop a namespace to modify their respective priority ranking. You can also select **[!UICONTROL Unique Per Graph]** to determine if a namespace is unique, which means...
* Simulated Graph Viewer: The simulated graph viewer displays the resulting graph based on the events you added and the algorithm that you configured. A straight line between two nodes means that a link is established. A dotted line indicates that a link has been removed.

## Add events

* Select [!UICONTROL Add Events] to begin adding events.
* Select an identity namespace or use the dropdown menu to select from a list of namespaces. Then, provide an identity value that corresponds with your namespace.

## Configure algorithm

## View simulated graph