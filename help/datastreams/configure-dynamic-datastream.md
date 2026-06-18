---
title: Create [!DNL Dynamic Datastream Configurations]
description: "Learn how to add routing rules to a [!DNL Dynamic Datastream Configuration] and route events to specific datasets and Experience Cloud services based on event data."
exl-id: 528ddf89-ad87-4021-b5a6-8e25b4469ac4
TQID: https://experienceleague.adobe.com/9wUD6vPq5i-OsBDqy57fa2j5QD2-wZiiOpAVgMnGIp4
product_v2:
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: df80eeb1-8d72-467e-b0df-9d51c7d3a0a1
    internal-label: Audience Manager
  - id: e1971122-7081-4556-9222-8a31bd71800c
    internal-label: Experience Cloud Services
  - id: e43347a8-f2c5-4aa4-8623-6f13875d7e3a
    internal-label: Target
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: abc02dd6-664f-446a-9aaa-675bc0f2fe4a
    internal-label: Sources
  - id: ca3d6bf4-a4af-4944-936b-8de1eb09f149
    internal-label: Datastreams
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---

# Create [!DNL Dynamic Datastream Configurations]

By default, the [!DNL Adobe Experience Platform Edge Network] sends all events that reach a datastream to all [!DNL Experience Cloud] [services](/help/datastreams/configure.md#add-services) you have enabled for your datastreams. Depending on your use cases, this may not always be the ideal workflow.

Dynamic datastream configurations address this through sets of rules that you define for each service enabled for your datastream, which control what [!DNL Experience Cloud] solution receives each type of data.

## [!DNL Dynamic Datastream Configurations] guide {#guide}

If you are new to [!DNL Dynamic Datastream Configurations] or are planning a production implementation, read the full guide before configuring rules. The guide covers the event taxonomy, dataset strategies, use cases, best practices, and testing approach.

* [Overview](/help/datastreams/dynamic-configurations/overview.md) — How rules are evaluated, the event taxonomy, and mutual exclusivity with client-side overrides
* [Prerequisites and planning checklist](/help/datastreams/dynamic-configurations/prerequisites.md) — Datastream setup, schema and dataset preparation, and event inventory
* [Configuration patterns](/help/datastreams/dynamic-configurations/configuration-patterns.md) — Actionable first versus Analytical first dataset strategies
* [Use cases](/help/datastreams/dynamic-configurations/use-cases.md) — Six common routing scenarios with example rule tables
* [End-to-end example](/help/datastreams/dynamic-configurations/example.md) — A complete e-commerce implementation
* [Best practices](/help/datastreams/dynamic-configurations/best-practices.md) — Rule design, dataset strategy, and operational guidance
* [Test and validate](/help/datastreams/dynamic-configurations/testing.md) — Assurance-based testing checklist
* [FAQ](/help/datastreams/dynamic-configurations/faq.md) — Common questions about rule behavior and system interactions

## Prerequisites {#prerequisites}

To create a dynamic configuration for your datastream, there are two conditions you must meet:

* You must have created *at least* one datastream to work with. See the documentation on how to [create a datastream](/help/datastreams/configure.md) for detailed information.
* You must have *at least* one [!DNL Experience Cloud] service added to your datastream. See the documentation on how to [add a service](/help/datastreams/configure.md#add-services) to a datastream for detailed information.

After you have created a datastream and added an Experience Cloud service to it, you can then [create a dynamic configuration](#create-dynamic-configuration).

## Guardrails {#guardrails}

Dynamic datastream configurations have specific limits and performance constraints to ensure optimal system performance and data processing efficiency. The following guardrails apply when configuring dynamic datastream rules:

| Guardrail | Limit | Limit type |
|---------|------------|------|
| Maximum number of [!DNL Dynamic Datastream Configurations] per datastream for Experience Platform services | 5 | Performance guardrail |
| Maximum number of [!DNL Dynamic Datastream Configurations] per datastream for Event Forwarding | 5 | Performance guardrail |
| Maximum number of [!DNL Dynamic Datastream Configurations] per datastream for [!DNL Adobe Analytics] | 5 | Performance guardrail |
| Maximum number of [!DNL Dynamic Datastream Configurations] per datastream for [!DNL Adobe Target] | 5 | Performance guardrail |
| Maximum number of [!DNL Dynamic Datastream Configurations] per datastream for [!DNL Adobe Audience Manager] | 5 | Performance guardrail |
| Maximum number of conditions (predicates) that you can combine within a single rule | 100 | Performance guardrail |
| Maximum time allowed for evaluating all [!DNL Dynamic Datastream Configurations] per datastream before timing out | 25 ms | System-enforced guardrail |

## Dynamic datastream configurations versus datastream configuration overrides {#dynamic-versus-overrides}

Dynamic datastream configurations and [datastream configuration overrides](/help/datastreams/overrides.md) are mutually exclusive functionalities.

You cannot use [!DNL Dynamic Datastream Configurations] along with datastream configuration overrides. You must choose one or the other.

If you enable both, configuration overrides take precedence and the system ignores the [!DNL Dynamic Datastream Configuration] rules.

## Create a [!DNL Dynamic Datastream Configuration] {#create-dynamic-configuration}

After you have [created a datastream](/help/datastreams/configure.md) and [added a service](/help/datastreams/configure.md#add-services) to it, follow these steps to add a dynamic configuration to the service.

1. Go to the **[!UICONTROL Data Collection]** > **[!UICONTROL Datastreams]** page and select the datastream that you created.
    
    ![Datastreams user interface showing the list of datastreams.](assets/dynamic-datastreams/select-datastream.png)

1. Select the **[!UICONTROL Edit]** option on the service for which you want to define a dynamic configuration.
    
    ![Datastreams user interface showing the services added to a datastream.](assets/dynamic-datastreams/select-service.png)

1. In the **[!UICONTROL Configure]** page, select **[!UICONTROL Save and Edit Dynamic Configuration]**.

    ![Datastreams user interface showing the datastream configuration page.](assets/dynamic-datastreams/save-and-edit.png)

1. Select **[!UICONTROL Add Dynamic Configuration]**.
    
    ![Datastreams user interface showing the dynamic configuration page before any rules are added.](assets/dynamic-datastreams/add-dynamic-config.png)

1. From the **[!UICONTROL Resources]** panel, drag and drop the items that you want to build your rule with to the right side of the window. You can combine multiple resources to build complex rules.

    Use each resource's options, such as **[!UICONTROL equals]**, **[!UICONTROL does not equal]**, **[!UICONTROL exists]**, and more, to fine tune your rules.

    ![Datastreams user interface showing the dynamic configuration rule builder with resources being dragged.](assets/dynamic-datastreams/drag-resources.png)

1. In the **[!UICONTROL Configuration]** section, enable or disable the services for each rule, depending on whether you want the data sent to each service. If you disable a service, the routing is disabled and *no data* is sent to the downstream service.

    ![Datastreams user interface showing the dynamic configuration rule with service toggles.](assets/dynamic-datastreams/enable-service.png)

1. When you are done configuring your rules, select **[!UICONTROL Save]**.

## Rule priority considerations {#rule-priority}

You can define multiple rules for each [!DNL Dynamic Datastream Configuration]. However, if your data matches the conditions of multiple rules, only the first matching rule in the list is taken into consideration, and all the other matching rules are ignored.

To achieve the desired data routing behavior, pay attention to the order in which you arrange the rules.

To configure the rule order, you can drag and drop the rule windows in the order you want.

![Reordering dynamic datastream rules using drag and drop.](assets/dynamic-datastreams/move-rules.gif)

## Rule eligibility criteria {#eligibility-criteria}

Dynamic datastream configurations must meet specific eligibility criteria to ensure high performance and reliable routing.

### Supported data types {#supported-data-types}

Dynamic datastream configuration rules work with specific data types to ensure optimal performance and reliable data routing. Understanding which data types are supported helps you create effective rules that process your data efficiently.

| Data Type | Status | Notes |
|-----------|--------|-------|
| String | Allowed | - |
| Number (Integer, Long, Short, Byte) | Allowed | - |
| Enum | Allowed | - |
| Boolean | Allowed | - |
| Date | Allowed | - |
| Array | Not allowed | Rules based on arrays are not supported, as they can degrade performance. |
| Map | Not allowed | Rules based on maps are not supported, as they can degrade performance. |

### Supported operators {#supported-operators}

Rules can use the following operators, depending on the data type:

| Data type | Supported operators |
|-----------|-------------------|
| **String** | `equals`, `starts with`, `ends with`, `contains`, `exists`, `does not equal`, `does not start with`, `does not end with`, `does not contain`, `does not exist` |
| **Number (Long, Integer, Short, Byte)** | `equals`, `does not equal`, `greater than`, `less than`, `greater than or equal to`, `less than or equal to`, `exists`, `does not exist` |
| **Boolean** | `equals true/false`, `does not equal true/false` |
| **Enum** | `equals`, `does not equal`, `exists`, `does not exist` |
| **Date** | `today`, `yesterday`, `this month`, `this year`, `custom date`, `in last`, `from`, `during`, `within`, `before`, `after`, `rolling range`, `in next`, `exists`, `does not exist` |
| **Logical** | `INCLUDE`, `ANY/ALL` (equivalent to [!DNL AND]/[!DNL OR]) |

>[!NOTE]
>
>The **[!UICONTROL EXCLUDE]** operator is not directly supported, but you can achieve equivalent logic using **[!UICONTROL INCLUDE]** with negated comparison operators (for example, "does not equal").

### Rule structure {#rule-structure}

Rules must be flat logical expressions. Nested logical expressions (using containers or multiple levels of [!DNL AND]/[!DNL OR]) are not supported. If you need complex logic, break it into multiple flat rules.

For example, consider the following complex rule.

![Example of a nested complex rule with multiple AND/OR conditions.](assets/dynamic-datastreams/complex-rule.png)

You can break this rule into the following simpler rules:

![The first simplified rule, replacing the nested complex rule.](assets/dynamic-datastreams/simple-rule-1.png)

![The second simplified rule, replacing the nested complex rule.](assets/dynamic-datastreams/simple-rule-2.png)

## Next steps

* Review [best practices for [!DNL Dynamic Datastream Configurations]](/help/datastreams/dynamic-configurations/best-practices.md) for rule design, dataset strategy, and operational guidance.
* See [Dynamic datastream configuration use cases](/help/datastreams/dynamic-configurations/use-cases.md) for complete rule configurations.
* Follow [Test and validate [!DNL Dynamic Datastream Configurations]](/help/datastreams/dynamic-configurations/testing.md) to verify your rules are routing correctly.
