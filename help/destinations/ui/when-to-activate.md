---
title: When to activate
description: Learn about the When to activate feature for streaming destinations and how to use it to control which profile changes trigger exports to your destinations.
badgeBeta: label="Beta" type="Informative"
---

# When to activate

>[!IMPORTANT]
>
>This feature is currently in beta. The functionality and documentation are subject to change. This feature is also only available on-demand. Contact your Adobe representative for access.

By default, Adobe Experience Platform exports data to a destination whenever any change occurs to a profile: an attribute update, an audience qualification or disqualification, or an identity change. This can generate a large volume of exports, many of which carry no meaningful change for downstream systems.

**[!UICONTROL When to activate]** gives you fine-grained control over which types of profile changes trigger exports for a given destination dataflow. You can enable or disable each trigger type independently. Disabling a trigger type suppresses exports caused only by that type of change.

## Supported destination types {#supported-destinations}

The **[!UICONTROL When to activate]** feature is supported for the following destination types:

- Streaming API-based destinations
- Enterprise destinations: [[!DNL HTTP API]](/help/destinations/catalog/streaming/http-destination.md), [[!DNL Amazon Kinesis]](/help/destinations/catalog/cloud-storage/amazon-kinesis.md), [[!DNL Azure Event Hubs]](/help/destinations/catalog/cloud-storage/azure-event-hubs.md), and [[!DNL Snowflake Streaming]](/help/destinations/catalog/warehouses/snowflake.md).

## Activation trigger types {#trigger-types}

>[!CONTEXTUALHELP]
>id="platform_destinations_activation_triggers"
>title="When to activate"
>abstract="Select which types of profile changes trigger exports to this destination. All three triggers are enabled by default. <ul><li><b>Attribute changes:</b> Profile attributes are updated from any upstream data source.</li><li><b>Segmentation changes:</b> Profile enters or exits an audience evaluated by Experience Platform Segmentation Service.</li><li><b>Identity changes:</b> Profile identity graph is updated, for example when a new identity is added.</li></ul>

The table below describes each trigger type. Triggers are listed in order of expected export volume, from highest to lowest.

![The When to activate panel showing four checkboxes: Attribute changes, Segmentation changes, External segmentation changes, and Identity changes, all enabled.](../assets/ui/when-to-activate/when-to-activate.png)

>[!NOTE]
>
>All four trigger types are enabled by default. If you had existing dataflows before this feature was released, their behavior is unchanged unless you explicitly update the settings.

| Trigger type | What triggers it | When to disable it |
| --- | --- | --- |
| **[!UICONTROL Attribute changes]** | Any of the profile's mapped attributes are updated. | You want to suppress high-frequency attribute updates from triggering exports to a partner API. |
| **[!UICONTROL Segmentation changes]** | A profile enters or exits an audience evaluated by [!DNL Experience Platform] Segmentation Service. |  |
| **[!UICONTROL Identity changes]** | A profile's identity graph changes, for example when a new identity is added or an existing identity is updated. | A new identity, such as an ECID from a website visit, is added to a profile, and you do not want that to trigger a communication or export to the destination. |

{style="table-layout:auto"}

## Default behavior {#default-behavior}

All three trigger types are enabled on every new and existing dataflow. When you disable one or more triggers, exports caused by that trigger type are suppressed. Exports that result from a combination of trigger types still fire if at least one enabled trigger caused the change.

## Best practices {#best-practices}

The best trigger configuration depends on your use case. Use the following guidance as a starting point.

**Disable identity changes first.** Disabling the identity changes trigger is the lowest-risk first step to reduce export volume. New identities, such as ECIDs from website visits, are added to profiles frequently and rarely represent meaningful changes for your downstream system.

**Disable attribute changes for the largest volume reduction.** The attribute changes trigger fires whenever any mapped attribute is updated, including from daily batch ingestion that restates unchanged values. Disabling this trigger produces the most significant reduction in export volume for most organizations.

**Keep segmentation changes enabled.** Audience entry and exit events are typically the most meaningful signals for downstream systems such as CRMs and ad platforms. Most organizations keep this trigger enabled.

Each organization has different use cases, so different trigger combinations may apply. Contact your Adobe account manager or Customer Care for guidance tailored to your activation setup.

## Configure When to activate {#configure}

You can configure the **[!UICONTROL When to activate]** settings in two places:

- **During activation setup:** The **[!UICONTROL When to activate]** step appears in the activation workflow when you set up a streaming API-based or enterprise destination. See [Activate audiences to streaming destinations](/help/destinations/ui/activate-segment-streaming-destinations.md#when-to-activate) and [Activate audiences to streaming profile export destinations](/help/destinations/ui/activate-streaming-profile-destinations.md#when-to-activate).
- **On existing dataflows:** Use the **[!UICONTROL Edit destination]** control on a dataflow to change the settings at any time. See [Edit activation dataflows](/help/destinations/ui/edit-activation.md#edit-when-to-activate).

## View trigger configuration in the Browse tab {#browse-tab}

The **[!UICONTROL Browse]** tab in the [Destinations workspace](/help/destinations/ui/destinations-workspace.md#browse) shows an **[!UICONTROL Activation trigger]** column. The column displays the triggers currently configured for each dataflow. Use this column to quickly review which profile change types activate each of your destination connections.

![The Browse tab in the Destinations workspace showing the Activation trigger column with trigger types listed for each dataflow.](../assets/ui/when-to-activate/activation-triggers-browse.png)