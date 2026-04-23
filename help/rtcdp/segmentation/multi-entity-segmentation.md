---
title: Multi-Entity Segmentation with B2B Segmentation
description: Learn how to author an audience that is evaluated using streaming segmentation that contains a B2B entity.
---

# Multi-entity streaming segmentation

Multi-entity segmentation lets you refer to B2B entities within your audience definition. Previously, you could combine both B2B entities with streaming events in a single audience.

For example, creating an audience such as the following, which has **both** a B2B attribute and a streaming event in a single audience is **not allowed**.

![An invalid segment definition that combines a B2B entity with a streaming event.](/help/rtcdp/assets/segmentation/multi-entity/invalid.png)

With the new simplification rules to B2B segmentation, you need to create **three** audiences to perform multi-entity streaming segmentation: one that contains the streaming segmentation logic, one that contains the B2B entity, and one that combines the two audiences together.

An example of a multi-entity streaming audience would be an audience that is looking for all account-persons in the healthcare industry to have a page view in the last day.

The audience that contains the B2B entity would look as follows, with **only** the B2B attribute in the definition.

![An audience that only contains the B2B entity.](/help/rtcdp/assets/segmentation/multi-entity/b2b.png)

The streaming audience would look as follows, with **only** a streaming event in the definition.

![An audience that only contains the streaming event.](/help/rtcdp/assets/segmentation/multi-entity/streaming.png)

After you create the two component audiences, you'll need to create an audience that **includes** both of the constituent audiences.

![An audience that combines both the B2B entity audience and the streaming event audience.](/help/rtcdp/assets/segmentation/multi-entity/combined.png)

