---
title: Deduplication node
description: Learn about the deduplication node in Audience Composition, including when to use it, how it works, and its expected behavior.
---

# Deduplication node

Use the deduplication node to remove repeated values from a payload or array before continuing through the Audience Composition workflow.

This page provides a working outline for the feature and the expected documentation structure.

## Overview

The deduplication node removes duplicate values in the data that moves through an Audience Composition flow.

Use this node when repeated entries can create noise, invalid downstream logic, or unnecessary processing before ranking, exclusion, or final audience evaluation.

## When to use this node

Use the deduplication node when you need to:

- remove repeated IDs, values, or records from an array
- clean payload data before other operators run
- reduce duplicate entries before ranking or exclusion logic
- prepare data for downstream audience evaluation

## How the node works

The deduplication node takes input data, identifies repeated values, and outputs a cleaned version with duplicates removed.

Document the following behaviors clearly:

- what counts as a duplicate
- whether duplicate matching is value-based or key-based
- how the node handles null or empty values
- what happens when arrays contain nested objects or multiple repeated entries
- whether output order is preserved

## Configuration

Describe the available configuration for the node, including:

- where the node sits in the Audience Composition flow
- any required input fields or mappings
- optional settings or matching rules
- expected output schema

## Example

Provide a simple example with before and after values.

### Example input

```text
["A", "B", "A", "C", "B"]
```

### Example output

```text
["A", "B", "C"]
```

Explain that the output keeps the first occurrence of each repeated value or follows the exact product behavior that is documented in the feature implementation.

## Use cases

Document typical use cases, such as:

- deduplicating payload values before audience logic
- removing repeated data before ranking or exclusion
- preparing payload arrays for downstream processing
- supporting specialized Morgan Stanley and Amex style use cases

## Edge cases and limitations

Explain the expected behavior for:

- null values
- empty arrays
- nested arrays or objects
- repeated entries with different casing or formatting
- ordering and determinism across runs

## Related operators

The deduplication node often appears alongside related Audience Composition operators, such as:

- Payload Rank
- Payload Exclude
- other payload-processing nodes in the same workflow

## Troubleshooting

Include guidance for common issues, such as:

- duplicates still appearing after the node
- unexpected ordering in the output
- empty results after configuration changes
- mismatches between expected and actual payload structure

## FAQ

Include answers to common questions:

- What does the node remove?
- Does it keep the first or last occurrence?
- Does order matter?
- Can it be used with nested data?
- How does it differ from related payload operators?

## Next steps

Use this outline as the basis for the final user documentation. Confirm the exact product behavior in a sandbox or implementation reference before publishing the final page.
