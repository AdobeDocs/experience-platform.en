---
title: Multi-Entity Segmentation with B2B Segmentation
description: Learn how to author an audience that is evaluated using streaming segmentation that contains a B2B entity.
---

# Multi-entity streaming segmentation

Multi-entity segmentation lets you refer to B2B entities within your audience definition. With the new simplification rules to B2B segmentation, you need to create **three** audiences to perform multi-entity streaming segmentation.

## Create a multi-entity audience

To create a multi-entity audience, you'll need to create three different audiences: one that contains the streaming segmentation logic, one that contains the B2B entity, and one that combines the two audiences together.

An example of a multi-entity streaming audience would be an audience that is looking for all account-persons in the Americas to have completed an offer in the last six hours. 

The streaming audience would look as follows:

IMAGE

The audience that contains the B2B entity would look as follows:

IMAGE

After you create the two component audiences, you'll need to create an audience that **includes** both of the constituent audiences.

IMAGE
