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

Building effective consent policy rules requires understanding how to navigate your schema structure and apply the appropriate operators for each field type. Every rule follows the same fundamental approach: navigate to a primitive field, select the appropriate operator, and define the matching criteria.

The five essential steps for building a rule are:

1. **Select field** - Navigate through container types to reach a primitive field
2. **Choose operator** - Select the appropriate operator for the primitive type
3. **Set value** - Define the value or condition to match against
4. **Map key matching** - Choose specific key or any key matching for Map fields
5. **Add conditions** - Combine multiple rules using AND/OR logic as needed

### A. Working with Boolean Fields (Implicit Consent Logic)

Boolean fields represent the most common consent attributes, storing simple true/false consent status. The `is not equal to` operator provides powerful flexibility for targeting profiles who haven't explicitly opted out, enabling implicit consent scenarios.

**Boolean Operators and Outcomes:**

| Operator | Value | Result |
|----------|-------|--------|
| `is equal to` | `true` | Includes profiles with explicit consent (true) |
| `is equal to` | `false` | Includes profiles with explicit opt-out (false) |
| `is not equal to` | `true` | Includes profiles without explicit consent (false or missing) |
| `is not equal to` | `false` | Includes profiles who haven't explicitly opted out (true or missing) |

**Example: Implicit email consent**

```
Field: consent.marketing.email (Boolean)
Operator: is not equal to
Value: false
Result: Include profiles who haven't explicitly opted out of email marketing (includes both true values and missing/null values)
```

### B. Working with Map Fields (Dynamic Preferences)

Map fields provide dynamic key-value storage, unlike Objects which have fixed schemas. Maps are ideal for preference centers where new preference categories can be added without schema changes. You can target either specific keys or use wildcard matching across all keys.

**Specific Key Matching:**

Use this approach when targeting a particular preference category.

```
Field: consent.preferences["email_preferences"].frequency (String) - navigated from Map
Operator: is equal to
Value: "weekly"
Result: Include profiles who have set email frequency to weekly (only for email_preferences key)
```

**Any Key Matching:**

Use the "find any matching item" checkbox to match across all dynamic keys in the Map.

```
Field: consent.preferences.*.frequency (String) - using "find any matching item" checkbox
Operator: is equal to
Value: "weekly"
Result: Include profiles who have set frequency to weekly in ANY preference category (email_preferences, sms_preferences, or push_preferences)
```

### C. Working with Object Fields (Fixed Navigation)

Object fields serve as straightforward containers with fixed schemas. They are used purely for navigation to reach nested primitive fields and cannot be used directly in policy conditions.

**Navigation Example:**

```
consent.marketing (Object) → navigate to → consent.marketing.email (Boolean)
```

**Example use case:**

```
Field: consent.marketing.email (Boolean) - navigated from Object
Operator: is equal to
Value: true
Result: Include profiles who have explicitly consented to marketing emails
```

### D. Working with Array Fields (Multiple Values)

Array fields contain multiple values of the same type and require different approaches depending on whether they hold primitive values or complex objects. Navigation and operator selection varies based on the array contents.

**Array of Primitives Example:**

Use the `contains` operator to check for specific values within the array.

```
Field: consent.communication_channels (Array of Strings)
Operator: contains
Value: "email"
Result: Include profiles who have consented to email communication
```

**Array of Objects Example:**

Navigate into the array to access primitive fields within the objects.

```
Field: consent.preferences["email_preferences"].categories[].type - navigated from Array
Operator: is equal to
Value: "promotional"
Result: Include profiles where any email category is "promotional"
```

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

