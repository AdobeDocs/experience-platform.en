---
title: Consent Policy Rule Building: Field Types and Operators Reference
description: A technical reference guide to XDM data types, supported operators, and advanced logic for creating granular consent policy rules in the Adobe Experience Platform UI.
---
# Consent Policy Rule Building: Field Types and Operators Reference

Briefly state the purpose: This document provides the technical specifications needed to build highly specific and legally compliant rules in the **"Then"** condition of a consent policy. Emphasize the core takeaway: You must navigate your schema structure to target **primitive fields** with precise operators. 

<!-- Sets the context and value proposition for the reader immediately. -->

## Prerequisites

This document serves as a technical reference for advanced consent policy rule building and assumes you have completed basic policy setup and possess foundational knowledge of Adobe Experience Platform's data architecture and governance framework.

* **Policy Setup Complete**: You must have already created or started creating a consent policy in the Adobe Experience Platform UI. For a step-by-step guide on how to initiate and configure a policy in the UI, see the [Placeholder: Link to UI Guide].

* **Familiarity with Data Structures**: This reference requires working knowledge of the following core concepts:
  * **XDM and Union Schema**: Understanding of Experience Data Model structure and how union schemas represent unified customer profiles. See [Placeholder: Link to XDM Docs].
  * **Data Governance Framework**: Knowledge of Adobe Experience Platform's data usage policies and enforcement mechanisms. See [Placeholder: Link to Data Governance Overview].
  * **Customer Consent Processing**: Basic understanding of how consent data is collected, stored, and applied in customer experience workflows. See [Placeholder: Link to Consent Processing Guide].


## II. Core Concepts: Primitive vs. Container Fields

### Supported Field Types and Rule Logic

Consent policies support various field types with specific operators for building rules. Field types are organized into two categories: **container types** and **primitive types**.

### A. Container Types (Schema Navigation)

Container types structure your consent data but cannot be used directly in policy conditions. They serve as navigation points to reach the primitive fields that hold actual values.

| Container Type | Description |
|----------------|-------------|
| **Object** | Container with fixed schema that holds multiple fields of different types |
| **Array** | Container that holds multiple values of the same type |
| **Map** | Container with dynamic keys that can hold Objects or other field types |

>[!IMPORTANT]
>
>**Container fields cannot be selected directly in consent policy conditions.** You must navigate into containers to select primitive fields (String, Number, Boolean) for rule building. Container operators are used for schema navigation, not for policy conditions.

### B. Primitive Types (Rule Conditions)

Primitive fields hold the actual data values (for example, `true`, "weekly") and are the only field types that can be used to set policy conditions.

Refer to the table below for descriptions of supported primitive types and the operators for each type.

| Primitive Type | Supported Operators | Description |
|----------------|-------------------|-------------|
| **String** | `is equal to`, `is not equal to`, `exists`, `does not exist` | Text-based consent attributes |
| **Number** | `is equal to`, `is not equal to`, `is greater than`, `is less than`, `exists`, `does not exist` | Numeric consent attributes |
| **Boolean** | `is equal to`, `is not equal to` | True/false consent values |
| **Date** | `is equal to`, `is not equal to`, `exists`, `does not exist` | Date-based consent attributes |

## III. Working with Complex Data Structures

### A. Handling Nested and Complex Schema Structures

Complex consent schemas often use nested container structures to allow for flexible and scalable data management. Since you can only set policy rules on primitive fields, you must navigate through this hierarchy to reach the primitive fields that can be used in consent policy conditions. The deeper the nesting, the more specific your consent rules can be.

Common nested container patterns include:

* **Map of Map**: Dynamic keys containing other Maps
* **Map of Object**: Dynamic keys containing Objects with fixed schemas
* **Array of Map**: Arrays containing Maps with dynamic keys
* **Array of Object**: Arrays containing Objects with fixed schemas
* **Object with Map/Array properties**: Objects containing Map or Array fields

### B. Field Structure Example

The following structure serves as the primary visual reference for all rule examples throughout this guide.

```
consent.marketing (Object)
├── email (Boolean)
├── sms (Boolean)
├── preferences (Map with dynamic keys)
│   ├── "email_preferences" (Object)
│   │   ├── frequency (String)
│   │   └── channels (Array of Strings)
│   ├── "sms_preferences" (Object)
│   │   ├── frequency (String)
│   │   └── opt_in_time (Date)
│   └── "push_preferences" (Object)
│       ├── frequency (String)
│       └── categories (Array of Strings)
└── lastUpdated (Date)
```

## IV. Advanced Rule Building by Field Type

### Rule Building Components and Steps

Introductory paragraph: Summarize the five steps for building a rule (Select field, Choose operator, Set value, Map key matching, Add conditions).

<!-- Acts as a transition to the detailed use-case examples. -->

### A. Working with Boolean Fields (Implicit Consent Logic)

Explain the significance of Boolean fields for simple consent status.  
Detail the flexibility of the `is not equal to` operator.  
**Table:** Clearly list the four available operators and explain the outcome of each (e.g., `does not equal false` → "Include profiles who haven't explicitly opted out").  
**Example:** Include *Example 1* and the *Boolean example use case* from the source content.

<!-- Highlights a specific, powerful nuance required for compliant consent management. -->

### B. Working with Map Fields (Dynamic Preferences)

Explain the difference between **Object** (fixed) and **Map** (dynamic keys).  
Introduce the two key matching options: **Specific Key Matching** and **Any Key Matching** (the wildcard `*`).  
**Examples:** Include *Example 2* (Specific Key) and *Example 3* (Any Key) from the source content, using the `consent.preferences` structure as context.

<!-- Addresses the complexity of preference centers, which often rely on Map fields. -->

### C. Working with Object Fields (Fixed Navigation)

Explain Object fields are straightforward containers for navigation.  
**Example:** Include the `consent.marketing (Object) -> navigate to -> consent.marketing.email (Boolean)` example.

<!-- Provides a distinct contrast to Map fields. -->

### D. Working with Array Fields (Multiple Values)

Explain Array fields hold multiple values of the same type.  
Provide examples for both **Array of primitives** (using `contains`) and **Array of Objects** (navigating to an index).

<!-- Covers the logic needed for multi-select preferences (e.g., communication channels). -->

## V. Combining Rules (Complex Logic)

### Combining Multiple Conditions (AND/OR Logic)

Explain how to use the **AND/OR** logic gate to combine rules to achieve a precise segment of consented users.  
Reference the image showing the UI logic (`multiple-rules.png`).

<!-- Connects the individual rule-building concepts into a complete policy workflow. -->

### Complex Rule Example

Include **Example 4: Complex rule with multiple conditions** from the source content.  
Provide a clear breakdown of how the **AND** condition restricts the resulting audience.

<!-- Provides a final, authoritative illustration of advanced policy building. -->

## VI. Next Steps

### Further Resources

Link to the main **Consent Policy UI Guide** (for how to implement/save the rule).  
Link to the **Policy Enforcement** guide (for how to verify the policy).  
Link to the **XDM** documentation (for general schema reference).

<!-- A standard practice to guide the reader to the next logical step in their workflow. -->

