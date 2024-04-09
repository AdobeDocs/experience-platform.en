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

* To begin, select **[!UICONTROL Add Events]**.
* Select an identity namespace or use the dropdown menu to select from a list of namespaces. Then, provide an identity value that corresponds with your namespace. **Note**: the identity value that you input for Graph Simulation purposes can be a simple placeholder and does not need to be a real identity value. In the example below, `{CRMID: Tom}` is added as the first identity.
* After you input your first identity, select plus (`+`) to add a second identity. There must be a minimum of at least two fully qualified identities in order for a graph to be rendered. Once you have added your second identity, select **[!UICONTROL Save]**. In the example below, `{ECID: 111}` is added as the second identity. This creates the first event as `{CRMID: Tom}, {ECID: 111}`.
* To add a second event, select **[!UICONTROL Add Events]** and repeat the steps above. This time, add `{CRMID: Summer}` as the first identity and `{ECID: 111}` as the second identity, thus creating a second event of: `{CRMID: Summer}, {ECID: 111}`.

### Load example

To set up an example graph with a pre-configured algorithm, select **[!UICONTROL Load example]**. A pop-up window appears, providing you with available graph scenarios you can choose from:

| Example graph | Description | Example |
| --- | --- | --- |
| Shared Device | Shared device refers to scenarios where two different users log in to the same single device.| A husband and wife share an iPad for internet browsing and e-commerce. |
| Invalid (non-unique) phone | Invalid or non-unique phone refers to scenarios where two different users use the same phone number to create an account. | A mother and her daughter use their shared home phone number to sign up for any e-commerce accounts. |
| "Bad" identity values | "Bad" identity values refer to scenarios where Identity Service generates non-unique IDFAs due to erroneous implementation. | A user signs up to your e-commerce website and provides invalid values for email or phone. |

Select any of the options to load Graph Simulation with pre-configured events and algorithm. You can still make further configurations to any pre-loaded graph scenario examples.

When finished, select **[!UICONTROL Simulate]**.

### Use text version

You can also use text mode to configure events. To use text mode, select the gear (?) icon, and then select **[!UICONTROL Text (Advanced users)]**.

You can manually input your identities with text mode. Use a colon (`:`) to distinguish the identity value that corresponds with the namespace that you input, and then use a comma (`,`) to separate your identities. To distinguish different events from one another, use a new line for each event.

### Edit event

To edit an event, select the ellipses (`...`) beside a given event, and then select **[!UICONTROL Edit]**.

### Delete event

To delete an event, select the ellipses (`...`) beside a given event, and then select **[!UICONTROL Delete]**.

## Configure algorithm

The algorithm that you configure will dictate how Identity Service treats the namespaces that you inputted in your events. To begin, select the plus (`+`) icon in the bottom corner of the algorithm configuration panel.

* Update the display name to match the namespace in your events. You can type in your namespace or use the dropdown menu to search. 
* Next, use the plus (`+`) icon to add another namespace configuration to match your second identity.
* You can configure the priority rankings of your namespaces by dragging and dropping...
* Select the checkbox under the [!UICONTROL Unique per graph] column to indicate your unique namespace(s).

### On namespace priorities

### On namespaces uniqueness

If a namespace is marked as "unique per graph", then the identity graph may only have one identity that contains that namespace. 

| Algorithm configuration | Description |
| --- | --- |
| Display name |
| Identity symbol |
| Identity type |
| Unique per graph |

When finished, select **[!UICONTROL Simulate]**.

## View simulated graph