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

Currently, the following validations are supported:

| Validation check | Type | Threshold |
| ---------------- | ---- | --------- |
| Logical complexity | Critical validation | The audience definition contains too many queries, resulting in unnecessary logical complexity. |
| Sequential events | Critical validation | There are more than 6 sequential events within an audience definition. |
| Aggregated count | Performance optimization | There are more than 3 aggregation functions within an audience definition. |
| Nested data | Performance optimization | There are more than 2 levels of nested data (array or map data types) depth within an audience definition. |
| Audience size | Performance optimization | The audience qualification size is greater than 30% of the total number of profiles in the sandbox. |

### [!BADGE Critical validation]{type=Negative} Logical complexity {#logical-complexity}

>[!CONTEXTUALHELP]
>id="platform_segmentation_segmentbuilder_rewritescheck"
>title="Query efficiency alert"
>abstract="Your audience contains too many queries, which results in unnecessary logical complexity. Please simplify your audience definition before continuing."

>[!CONTEXTUALHELP]
>id="platform_segmentation_segmentbuilder_cnfcomplexitycheck"
>title="Logic complexity"
>abstract="Your audience contains too many queries, which results in unnecessary logical complexity. Please simplify your audience definition before continuing."

The logical complexity validation analyzes the structure of your logical statements (AND, OR, NOT) within your audience definition. Specifically, it looks for audience definitions that will force the system to perform an excessive number of comparisons per profile.

If your audience definition has an excessive number of comparisons per profile, this increased complexity leads to slower evaluation on a per profile basis. As a result, this will eventually increase the overall time taken for audience evaluation.

To avoid triggering this validation, ensure you keep your audience definition simple. If you can't understand your own audience definition, you can assume that it's too complicated and Experience Platform may take longer to evaluate the audience.

**Example**

Let's say you want to find customers who live in certain states. You _could_ write this inefficiently by checking to see if the profile has the value for a state that matches one of the listed 45 values, as follows:

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

Alternatively, let's say you want to find customers who are Canadians on your trial plan. You _could_ write this inefficiently by checking if the profile is not in every plan you want to exclude.

+++ Inefficient audience definition

```
NOT(
    plan.equals("basic") OR
    plan.equals("standard") OR
    plan.equals("premium") OR
    plan.equals("enterprise")
) AND NOT (
    region.equals("us-east") OR
    region.equals("us-west") OR
    region.equals("eu-central") OR
    region.equals("apac")
)
```

+++

Instead, you should be direct and target the specific plan you want to include.

+++ Efficient audience definition

```
plan.equals("trial") AND region.equals("canada")
```

+++

### [!BADGE Critical validation]{type=Negative} Sequential event complexity {#sequential-event-complexity}

>[!CONTEXTUALHELP]
>id="platform_segmentation_segmentbuilder_chaincountcheck"
>title="Event sequence limit"
>abstract="Your audience contains too many sequential events. You can only have a maximum of 6 sequential events within your audience definition. Please remove some sequential events from your audience definition before continuing."

The sequential event complexity validation limits the number of sequential events in a sequence to 6 events.

Sequential segmentation is one of the most computationally complicated operations within Experience Platform, since the system needs to scan a customer's entire history of Experience Events, sort them by timestamp, and verify if the specified order matches your query. As a result, when the chain grows, the number of permutations the system needs to calculate drastically increases.

To avoid triggering this validation, focus on the basics of your sequential chain by defining the beginning, middle, and end of the journey. Immediate steps are often implied within the final conversion.

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

>[!CONTEXTUALHELP]
>id="platform_segmentation_segmentbuilder_countaggregationcheck"
>title="Count filter warning"
>abstract="Your audience has too many aggregation events. You should use a maximum of 3 aggregation events within your audience. To avoid performance issues, you should remove some aggregation events from your audience definition."

The aggregated count check limits the number of aggregation events used within your audience to 3 conditions.

A standard event only needs to find a single matching event to qualify a user. However, an aggregation event needs to read and analyze a user's **entire history** of events before it can make a decision, leading to slower processing times with more aggregation events used.

To avoid triggering this validation, only use specific counts when it's strictly necessary for the audience definition. If you only need to know if a user has engaged once, for example, you can use the standard "Exists" logic, rather than using a "Count > 0" event.

### [!BADGE Performance optimization]{type=Caution} Nested data complexity {#nested-data-complexity}

>[!CONTEXTUALHELP]
>id="platform_segmentation_segmentbuilder_arraydepthcheck"
>title="Nested data warning"
>abstract="Your audience has too many nested data layers. You should use a maximum of 2 layers of data within your audience. To avoid performance issues, you should flatten your audience definition."

The nested data complexity validation limits the number of nested data within an audience definition to 2 layers. 

While Experience Platform supports the use of array and map objects to store complex data types, unpacking nested structures to find a value requires more complex traversal logic. The deeper data is nested in an array, the longer it takes to retrieve for validation.

If you frequently perform segmentation on a deeply nested attribute, you may need to contact your data engineering team to copy the attribute to a higher level within the profile schema for easier access.

### [!BADGE Performance optimization]{type=Caution} Audience size {#audience-size}

>[!CONTEXTUALHELP]
>id="platform_segmentation_segmentbuilder_profilestorecheck"
>title="Audience size warning"
>abstract="Your audience is written too broadly. You should avoid writing an audience definition that qualifies more than 30% of the total profiles in your sandbox. To avoid performance issues, you should tighten your audience definition."

The audience size validation checks if your audience definition is so broad that more than 30% of the total profiles in your sandbox qualify for the audience.

While Experience Platform can handle large audiences, an audience definition that is too vague (such as All Active Customers) can increase evaluation time and activation latency. 

If you need to create an audience that qualifies more than 30% of your profile store, ensure that the audience's first evaluation is done using flexible audience evaluation. Evaluating the audience with an on-demand evaluation can reduce the overall impact of a large audience on the daily segmentation job.

## Next steps

After reading this guide, you have a better understanding of how Experience Platform runs automatic validations to improve evaluation, stability, and scalability. For more information on creating audiences, read the [Segment Builder documentation](./ui/segment-builder.md).

## Appendix

The following appendix lists frequently asked questions about audience validation in Experience Platform.

### Frequently asked questions {#faq}

**What happens if I ignore the warnings and save the audience?**

+++ Answer

For performance optimization warnings, the audience will be saved and the system will attempt to evaluate it. However, you may experience significantly slower processing times. In extreme situations, if the data volume is high enough, the segmentation job may fail or time out, forcing you to redesign your audience.

For critical validation errors, you will not be able to save the audience.

+++

**Can I request an increase to the "Sequential Event" limit?**

+++ Answer

No, you cannot. This is a hard guardrail designed to protect the stability of the entire Experience Platform environment. If your sequence requires more than 6 steps, it's a strong indicator that the logic should either be simplified or broken into two different audiences (such as an "Engagement" audience and a "Conversion" audience).

+++

**Will these new validations break my existing audiences?**

+++ Answer

These validations run at the time of **authoring**. As a result, your existing audiences will continue to run as they are. However, if you attempt to edit an existing audience that violates these rules, you'll be required to optimize it before you can save your changes.

+++

**I have complex data requirements. How can I avoid the "Nested Data" warning?**

+++ Answer

Avoiding the "Nested data" warning is best solved at the data modeling layer. Some tips include working with your data engineering team to flatten your XDM schema and bringing critical attributes (such as `subscriptionStatus` and `loyaltyTier`) to the top level of the profile.

+++

**Will these checks apply to both Draft and Published audiences?**

+++ Answer

Yes, these checks will apply to *all* audiences evaluated in Experience Platform.

+++
