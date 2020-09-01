---
keywords: Experience Platform;home;popular topics;sandbox troubleshooting
solution: Experience Platform
title: Sandboxes troubleshooting guide
topic: troubleshooting guide
description: This document provides answers to frequently asked questions about sandboxes in Adobe Experience Platform.
---

# Sandboxes troubleshooting guide

This document provides answers to frequently asked questions about sandboxes in Adobe Experience Platform. For questions and troubleshooting related to other Platform services, please refer to the [Experience Platform troubleshooting guide](../landing/troubleshooting.md).

Sandboxes partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications. See the [sandboxes overview](home.md) for more information.

## What is a sandbox?

Sandboxes are virtual partitions within a single instance of Experience Platform. Each sandbox maintains its own independent library of Platform resources (including schemas, datasets, profiles, and so on). All content and actions taken within a sandbox are confined to only that sandbox and do not affect any other sandboxes. See the [sandboxes overview](home.md) for more information.

## What types of sandboxes are available, and what are their differences?

There are two sandbox types available in Experience Platform:

* Production sandbox
* Non-production sandbox

Experience Platform provides a single **production sandbox**, which cannot be deleted or reset. Only one production sandbox can exist for a single Platform instance.

By contrast, multiple **non-production sandboxes** can be created by sandbox administrators for a single Platform instance. Non-production sandboxes allow you to test features, run experiments, and make custom configurations without impacting your production sandbox. In addition, non-production sandboxes have a reset feature that removes all customer-created resources from the sandbox. Non-production sandboxes cannot be converted to production sandboxes. A default Experience Platform license grants you five sandboxes (one production and four non-production). You can add packs of ten non-production sandboxes up to a maximum of 75 total sandboxes. Please contact your IMS Org Administrator or your Adobe sales representative for more details.

See the [sandboxes overview](./home.md) for more information.

## Can I access a resource from more than one sandbox?

Sandboxes are isolated partitions of a single Platform instance, with each sandbox maintaining its own independent library of resources. A resource that exists in one sandbox cannot be accessed from any other sandbox, regardless of sandbox type (production or non-production).

## How many production sandboxes can I have?

Experience Platform only supports one production sandbox per IMS Organization, which is provided out-of-the-box. While the production sandbox can be renamed, it cannot be deleted or reset. Users with Sandbox Administration permissions can only create, reset, and delete non-production sandboxes.

## How many non-production sandboxes can I have?

Experience Platform currently allows up to 15 non-production sandboxes to be active within a single IMS Organization.

## I just created a sandbox. How do I set permissions for the users who will be working with this sandbox?

The Adobe Admin Console links users to sandboxes and permissions through the use of **product profiles**. After creating a new sandbox, navigate to the _Permissions_ tab of the product profile you wish to grant access to, then click **Sandboxes**. From here, you can add or remove access to the new sandbox in the same manner as other permissions.

If you wish to add unique permissions to users of a particular sandbox, you may need to create a new product profile with the appropriate sandboxes and permissions applied, and assign those users to that profile.

See the [access control user guide](../access-control/ui/overview.md) for more information on managing sandboxes and permissions in the Admin Console.