---
title: Test and Validate Dynamic Datastream Configurations
description: "Learn how to use Adobe Experience Platform Assurance to test [!DNL Dynamic Datastream Configuration] rules and confirm event routing across datasets and services."
---

# Test and validate [!DNL Dynamic Datastream Configurations]

Use [!DNL Adobe Experience Platform] Assurance to get real-time visibility into how [!DNL Dynamic Datastream Configuration] rules evaluate and route events. Make it your primary testing tool after configuring rules.

>[!IMPORTANT]
>
>Datastream configuration changes take up to 15 minutes to propagate across the Edge Network. Wait the full propagation window before starting an Assurance session or checking dataset ingestion volumes.

## Set up an Assurance session {#assurance-setup}

1. In the [!DNL Adobe Experience Platform] UI, go to **[!UICONTROL Assurance]** and select **[!UICONTROL Create session]**.
2. Connect your Web SDK or Mobile SDK implementation to the session using the Assurance browser extension (for web) or the Assurance SDK (for mobile).
3. Generate events on your site or app that should trigger different [!DNL Dynamic Datastream Configuration] rules.

For full Assurance setup instructions, see the [Adobe Experience Platform Assurance documentation](/help/assurance/home.md).

## What to look for in Assurance traces {#assurance-traces}

For each event processed by the Edge Network, Assurance displays:

- **Which rule matched:** the specific rule name and conditions that the event qualified for.
- **Routing outcome:** which services received the event and which dataset the Edge Network routed it to.
- **Whether [!DNL Dynamic Datastream Configuration] or client-side overrides were active:** this helps diagnose cases where rules are unexpectedly bypassed. When a client-side override is present, the Edge Network skips [!DNL Dynamic Datastream Configuration] rules for that event. See [datastream configuration overrides](/help/datastreams/overrides.md) for details.

## Testing checklist {#testing-checklist}

Validate each event path in Assurance before moving to platform-level validation.

| Test | What to verify | How |
| ------ | --------------- | ----- |
| **Actionable event routing** | Purchase events land in the profile-enabled dataset | Trigger a purchase event; verify in Assurance that the correct rule matched and Assurance shows the expected dataset as the routing destination |
| **Analytical event routing** | Page views land in the non-profile dataset | Navigate pages; verify in Assurance and confirm events appear in the expected dataset in [!DNL Adobe Experience Platform] |
| **System event suppression** | The Edge Network routes `decisioning.propositionFetch` events to the quarantine dataset, not the primary profile dataset | Load a page with [!DNL Adobe Target] or [!DNL Adobe Journey Optimizer] personalization; verify the `decisioning.propositionFetch` event matches the [system event suppression rule](/help/datastreams/dynamic-configurations/use-cases.md#uc3) |
| **Bot filtering** | Bot-scored events are quarantined or discarded | Use a known bot user-agent or IP that matches your bot detection rules; verify `botDetection.score = 1` in Assurance and confirm the [bot filtering rule](/help/datastreams/dynamic-configurations/use-cases.md#uc4) matches |
| **Default fallback** | Events that match no rule follow the default datastream configuration | Send an event type not covered by any rule; verify it routes to the primary dataset |
| **Rule ordering** | First-match-wins behavior is correct | Send an event that could match multiple rules; verify Assurance shows only the first matching rule applying |
| **Client-side override conflict** | Events with SDK overrides bypass [!DNL Dynamic Datastream Configuration] rules | Send an event with `edgeConfigOverrides` in `sendEvent`; verify in Assurance that the Edge Network skipped [!DNL Dynamic Datastream Configuration] rules for that event |

## Next steps

- Review [best practices for [!DNL Dynamic Datastream Configurations]](/help/datastreams/dynamic-configurations/best-practices.md) for ongoing operational guidance.
- See the [FAQ](/help/datastreams/dynamic-configurations/faq.md) if you encounter unexpected routing behavior.
- Return to [Create Dynamic Datastream Configurations](/help/datastreams/dynamic-configurations/configure.md) to adjust rule conditions or rule order.
