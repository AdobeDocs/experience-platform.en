---
title: Adobe Experience Platform Release Notes
description: Experience Platform release notes October, 2020
doc-type: release notes
last-update: October, 2020
author: crhoades, ens28527
---

# Adobe Experience Platform release notes 

**Release date: October 2020**

- [Data Prep](#data-prep)

## Data Prep {#data-prep}

Data Prep allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

**Key features**

| Feature | Description |
| ------- | ----------- |
| `is_set` function | The `is_set` function allows you to check the presence of an attribute within the source data. `is_set` can be used in combination with `is_empty` to check both the presence of the attribute and the presence of the value within the attribute. |
| `get_values` function | The `get_values` function allows you to get the values from the input map for any given key. |

For more information, please read the [Data Prep overview](../../data-prep/home.md).