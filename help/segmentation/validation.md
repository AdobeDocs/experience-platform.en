---
title: Audience validation
description: Learn how Experience Platform validates your audiences to ensure they perform well further downstream.
---

# Audience validation

When you write an audience definition in Adobe Experience Platform, audience validation provides built-in validations and guardrails to ensure your audiences are not only accurate, but also stable and scalable.

By adhering to audience definition best practices, you ensure your audiences can evaluate faster, ensure your logic remains efficient even when your audience size grows, and reduce the risk of evaluation failures during high-traffic periods.

## Validation types {#validation-types}

When audience validation runs on your audiences, there are two different types of constructs that can be violated: Critical validation constructs and performance optimization constructs.

If a critical validation construct is violated, the system will prevent you from saving your audience to protect the stability of your sandbox. If a performance optimization construct is violated, you will be able to save your audience, but it is *highly recommended* you update your audience definition to avoid performance issues.

## Validation checks {#validation-checks}

>[!CONTEXTUALHELP]
>id="platform_segmentation_segmentbuilder_rewritescheck"
>title="Query efficiency alert"
>abstract=""

>[!CONTEXTUALHELP]
>id="platform_segmentation_segmentbuilder_countaggregationcheck"
>title="Count filter warning"
>abstract=""

>[!CONTEXTUALHELP]
>id="platform_segmentation_segmentbuilder_arraydepthcheck"
>title="Nested data warning"
>abstract=""

Currently, the following validation checks are supported:

| Validation check | Type | Threshold |
| ---------------- | ---- | --------- |
| Logical complexity | Critical validation | The audience definition is too complicated. |
| Sequential events | Critical validation | There are more than 6 sequential events within an audience definition. |
| Aggregated count | Performance optimization | There are more than 3 aggregation functions within an audience definition. |
| Nested data | Performance optimization | There are more than 2 levels of nested data (array or map data types) depth within an audience definition. |
| Audience size | Performance optimization | The audience qualification size is greater than 30% of the total number of profiles in the sandbox. |

### [!BADGE Critical validation]{type=Negative} Logical complexity {#logical-complexity}

>[!CONTEXTUALHELP]
>id="platform_segmentation_segmentbuilder_cnfcomplexitycheck"
>title="Logic complexity"
>abstract=""

The logical complexity validation check analyzes the structure of your logical statements (AND, OR, NOT) within your audience definition. Specifically, it looks for audience definitions that will force the system to perform an excessive number of comparisons per profile.

If your audience definition has an excessive number of comparisons per profile, this increased complexity leads to slower evaluation on a per profile basis. As a result, this will eventually increase the overall time taken for audience evaluation.

To avoid triggering this validation check, ensure you keep your audience definition simple. If you can't understand your own audience definition, you can assume that it's too complicated and Experience Platform may take longer to evaluate the audience.

**Example**

Let's say you have a company and you want to find customers who live in certain states. You _could_ write this inefficiently by checking to see if the profile has the value for a state that matches one of the listed 45 values, as follows:

+++ Inefficient audience definition

```
State.equals("AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA","HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT")
```

+++

However, by using a not check, you only need to check if the profile does not have one of the 5 listed values, resulting in a much more efficient query.

+++ Efficient audience definition

```
not(State.equals("VT", "VA", "WA", "WV", "WI", "WY" ))
```

+++

### [!BADGE Critical validation]{type=Negative} Sequential event complexity {#sequential-event-complexity}

>[!CONTEXTUALHELP]
>id="platform_segmentation_segmentbuilder_chaincountcheck"
>title="Event sequence limit"
>abstract=""

The sequential event complexity validation check limits the number of sequential events in a sequence to 6 events.

Sequential segmentation is one of the most computationally complicated operations within Experience Platform, since the system needs to scan a customer's entire history of Experience Events, sort them by timestamp, and verify if the specified order matches your query. As a result, when the chain grows, the number of permutations the system needs to calculate drastically increases.

To avoid triggering this validation check, focus on the basics of your sequential chain by defining the beginning, middle, and end of the journey. Immediate steps are often implied within the final conversion.

**Example**

Let's say you want to target users who have viewed a product, added it to the cart, and purchased it. You _could_ write this inefficiently by checking every individual state of the user's path. For example, the following query goes through this sequence of events: Logs into website -> Searches for product -> Views a product page -> Adds to cart -> Navigates to checkout -> Purchase event 

+++ Inefficient audience definition

```
chain(xEvent, timestamp, [ A: WHAT(eventType = "login"), B: WHAT(eventType = "search"), C: WHAT(eventType = "productView"), D: WHAT(eventType = "addToCart"), E: WHAT(eventType = "checkout"), F: WHAT(eventType = "purchase") ])
```

+++

However, by reducing the sequence to its beginning, middle, and end, you only need to have a sequence of events that is 3 events long, resulting in a more efficient query. For example, the following query goes through this sequence of events: Views a product page -> Adds to cart -> Purchase event

+++ Efficient audience definition

```
chain(xEvent, timestamp, [ A: WHAT(eventType = "productView"), B: WHAT(eventType = "addToCart"), C: WHAT(eventType = "purchase") ])
```

+++

### [!BADGE Performance optimization]{type=Caution} Aggregated count {#aggregated-count}

The aggregated count validation check

### [!BADGE Performance optimization]{type=Caution} Nested data complexity {#nested-data-complexity}

### [!BADGE Performance optimization]{type=Caution} Audience size {#audience-size}

## Next steps

## Appendix

### Frequently asked questions {#faq}