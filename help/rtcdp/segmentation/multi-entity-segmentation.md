---
title: Multi-Entity Segmentation with B2B Segmentation
description: Learn how to author an audience that is evaluated using streaming segmentation that contains a B2B entity.
---

# Multi-entity streaming segmentation

Multi-entity segmentation lets you refer to B2B entities within your audience definition. Previously, you could combine both B2B entities with streaming events in a single audience.

For example, creating an audience such as the following, which has **both** a B2B attribute and a streaming event in a single audience is **not supported**.

![An invalid segment definition that combines a B2B entity with a streaming event.](/help/rtcdp/assets/segmentation/multi-entity/invalid.png)

In order to combine B2B entities with streaming events, you need to create **three** audiences and perform multi-entity streaming segmentation: one that contains the streaming segmentation logic, one that contains the B2B entity, and one that combines the two audiences together.

An example of a multi-entity streaming audience would be an audience that is looking for all account-persons in the healthcare industry to have a page view in the last day.

The audience that contains the B2B entity would look as follows, with **only** the B2B attribute in the definition. This audience is evaluated using **batch** segmentation.

![An audience that only contains the B2B entity.](/help/rtcdp/assets/segmentation/multi-entity/attribute.png)

The audience that contains the streaming event would look as follows, with **only** a streaming event in the definition. This audience is evaluated using **streaming** segmentation.

![An audience that only contains the streaming event.](/help/rtcdp/assets/segmentation/multi-entity/event.png)

After you create the two component audiences, you'll need to create an audience that **includes** both of the constituent audiences. This combined audience is evaluated using **streaming** segmentation.

![An audience that combines both the B2B entity audience and the streaming event audience.](/help/rtcdp/assets/segmentation/multi-entity/combined.png)

