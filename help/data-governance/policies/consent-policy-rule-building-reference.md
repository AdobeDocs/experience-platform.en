---
title: Consent Policy Rule Building: Field Types and Operators Reference
description: A technical reference guide to XDM data types, supported operators, and advanced logic for creating granular consent policy rules in the Adobe Experience Platform UI.
---
# Consent Policy Rule Building: Field Types and Operators Reference

Use this reference on advanced rule logic to set precise, legally valid rules in the **"[!UICONTROL Then]"** clause of the Consent Policy builder in Adobe Experience Platform.

Learn how policy rules work with your consent data's structure and types to precisely enforce customer preferences. This document explains how to filter profiles based on consent by navigating into container fields in your XDM schema to select a primitive field. From there, use the right operator to define the exact value a profile must match.

## Prerequisites

Before using this reference, ensure that your consent policy setup is complete and that you understand the foundational concepts of Adobe Experience Platform's data architecture and governance framework.

Ensure you should meet the following prerequisites:

* **Policy Setup Complete**: You have created or started creating a consent policy in the Adobe Experience Platform UI. For detailed steps, see the [data usage policies user guide](user-guide.md#consent-policy).

* **Familiarity with Data Structures**: This reference requires working knowledge of the following core concepts:
  * **XDM and Union Schema**: Understand how Experience Data Model structures define data relationships and how the union schema represents unified customer profiles. See the [XDM System overview](../../xdm/home.md) to learn more.
  * **Data Governance Framework**: Know how Adobe Experience Platform enforces data usage policies and governance rules. See the [Data Governance overview](../home.md) for details.
  * **Customer Consent Processing**: Understand how consent data is collected, stored, and applied within customer experience workflows. See the [consent processing overview](../../landing/governance-privacy-security/consent/adobe/overview.md).

## II. Core Concepts: Primitive vs. Container Fields

### Supported field types and rule logic

Consent policies support multiple field types, each with specific operators for building rule conditions. Field types are grouped into two categories: **container types** and **primitive types**.

### Container types (schema navigation)

Container types organize consent data but cannot be used directly in policy conditions. They serve as navigation paths to reach the primitive fields that hold actual values.

| Container type | Description |
|----------------|-------------|
| **Object** | A container with a fixed schema that holds multiple fields of different types. |
| **Array** | A container that holds multiple values of the same type. |
| **Map** | A container with dynamic keys that can hold objects or other field types. |

>[!IMPORTANT]
>
>Container fields cannot be selected directly in consent policy conditions. You must navigate into containers to select **primitive fields** (such as string, number, or boolean) for rule building. Container operators are used only for schema navigation, not for setting policy conditions.

### Primitive types (rule conditions)

Primitive fields hold the actual consent data values (for example, `true` or `"weekly"`) and are the only field types that can be used to define policy conditions.

The table below describes each supported primitive type and the available operators.

| Primitive type | Supported operators | Description |
|----------------|---------------------|-------------|
| **String** | `is equal to`, `is not equal to`, `exists`, `does not exist` | Text-based consent attributes. |
| **Number** | `is equal to`, `is not equal to`, `is greater than`, `is less than`, `exists`, `does not exist` | Numeric consent attributes. |
| **Boolean** | `is equal to`, `is not equal to` | True or false consent values. |
| **Date** | `is equal to`, `is not equal to`, `exists`, `does not exist` | Date-based consent attributes. |


## III. Working with Complex Data Structures

### Handling nested and complex schema structures

Complex consent schemas often include nested container structures that support flexible and scalable data management. Because policy rules can only reference primitive fields, you must navigate through container hierarchies to reach the fields that can be used in consent policy conditions. Deeper nesting enables more granular and specific rule targeting.

Common nested container patterns include:

* **Map of map** – Dynamic keys that contain other maps.  
* **Map of object** – Dynamic keys that contain objects with fixed schemas.  
* **Array of map** – Arrays that contain maps with dynamic keys.  
* **Array of object** – Arrays that contain objects with fixed schemas.  
* **Object with map or array properties** – Objects that include map or array fields.

### Field structure example

The following structure serves as the visual reference for rule examples throughout this guide.

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
<!-- ... -->
## IV. Advanced Rule Building by Field Type

### Rule building components and steps

Building effective consent policy rules requires understanding how to navigate your schema structure and apply the correct operators for each field type. Each rule follows the same basic approach: navigate to a primitive field, select the appropriate operator, and define the condition that must be met.

Follow these steps to build a rule:

1. **Select a field** – Navigate through container fields to reach a primitive field.  
2. **Choose an operator** – Select the operator supported by the field type.  
3. **Set a value** – Define the value or condition to match.  
4. **Match map keys** – Choose whether to target a specific key or match across all keys in a map.  
5. **Add conditions** – Combine multiple rules using AND or OR logic as needed.

### Working with boolean fields (implicit consent logic)

Boolean fields store true or false consent values and represent the most common consent attributes. The `is not equal to` operator allows you to include profiles that have not explicitly opted out, supporting implicit consent scenarios.

**Boolean operators and outcomes**

| Operator | Value | Result |
|----------|-------|--------|
| `is equal to` | `true` | Includes profiles with explicit consent (`true`). |
| `is equal to` | `false` | Includes profiles with explicit opt-out (`false`). |
| `is not equal to` | `true` | Includes profiles without explicit consent (`false` or missing). |
| `is not equal to` | `false` | Includes profiles who have not explicitly opted out (`true` or missing). |

**Example: Implicit email consent**

```
Field: consent.marketing.email (boolean)
Operator: is not equal to
Value: false
Result: Includes profiles who have not explicitly opted out of email marketing (includes both true and missing/null values).
```

### Working with map fields (dynamic preferences)

Map fields store key-value pairs with dynamic keys, unlike objects that have fixed schemas. Maps are often used in preference centers where new categories can be added without schema updates. You can target specific keys or use wildcard matching across all keys.

**Specific key matching**

Use this approach to target a specific preference category.

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
<!-- ... -->
## V. Combining Rules (Complex Logic)

### A. Combining Multiple Conditions (AND/OR Logic)

Individual rules can be combined using AND/OR logic to create sophisticated consent policies that target specific audience segments. **AND logic** requires all conditions to be true, creating more restrictive targeting with fewer matching profiles. **OR logic** allows any condition to be true, creating more inclusive targeting that expands your audience reach.

In the consent policy UI, you can toggle between AND and OR conditions using the logic selector that appears between rule conditions.

### B. General Complex Rule Example

This example demonstrates combining basic consent status with preference limitations to create targeted audience segments.

```
Field: consent.marketing.email
Operator: equals true
AND
Field: consent.preferences.frequency
Operator: does not equal "daily"
Result: Include profiles who consent to email marketing but not daily frequency
```

### C. Advanced Logic for Arrays of Objects

Combining conditions within arrays of objects has specific behaviors that depend on whether you use AND or OR logic between the conditions.

**Example: Array of objects with AND conditions**

Use AND logic when all conditions must apply to the *same* array element.

```
Field: consent.preferences["email_preferences"].categories[].enabled (Boolean)
Operator: is equal to
Value: true
AND
Field: consent.preferences["email_preferences"].categories[].type (String)
Operator: is equal to
Value: "promotional"
Result: Includes profiles where the SAME category entry has both enabled=true AND type="promotional"
Note: AND conditions are applied to the same array entry. If you use OR conditions, the profile is included if ANY array entry matches ANY of the conditions.
```

>[!TIP]
>
>**Best practices: AND condition logic**
>
>Keep these key behaviors in mind when building AND-based array conditions:
>
>* **Use** AND logic when all conditions must apply to the **same** array element.
>* **Remember** that AND creates restrictive targeting — fewer profiles will match.
>* **Avoid** expecting AND conditions to match across different array entries — they apply to individual entries.
>* **Don't use** AND logic when you want flexible matching across multiple array elements.

>[!IMPORTANT]
>
>With AND logic, you're looking for array entries that satisfy all your conditions simultaneously - like finding categories that are both enabled AND promotional. This creates more restrictive targeting.

>[!NOTE]
>
>AND conditions apply to the same array entry **only when working with arrays of objects.** For arrays of primitives, AND logic is evaluated at the field level across the entire array.

**Example: Array of objects with OR conditions**

Use OR logic when you want to create inclusive audiences by matching *any* condition across array entries.

```
Field: consent.preferences["email_preferences"].categories[].enabled (Boolean)
Operator: is equal to
Value: true
OR
Field: consent.preferences["email_preferences"].categories[].type (String)
Operator: is equal to
Value: "newsletter"
Result: Includes profiles where ANY category entry has enabled=true OR ANY category entry has type="newsletter"
Note: OR conditions allow matching across different array entries - one entry can match the first condition while another entry matches the second condition.
```

## VI. Next Steps

### Further Resources

Once you have defined your advanced policy rules using this reference, use the resources below to complete your policy configuration and verify its enforcement.

* **Policy Creation Workflow**
    * **Purpose:** Implement the rules you defined in the policy builder UI.
    * **Link:** [Main Consent Policy UI Guide](../consent-policy-ui-guide.md)
* **Consent Policy Evaluation and Enforcement**
    * **Purpose:** Verify how the enabled policy affects audience activation and profile data use.
    * **Link:** [Policy Enforcement Guide](../enforcement/policy-evaluation-enforcement.md)
* **XDM (Experience Data Model) Reference**
    * **Purpose:** Referencing the underlying data structure and definitions of consent attributes.
    * **Link:** [XDM Documentation](../../xdm/xdm-overview.md)

