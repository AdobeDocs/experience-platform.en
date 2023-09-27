---
title: Configure Identity Settings in Identity Service
description: Learn how to configure Identity Settings in Identity Service.
hide: true
hidefromtoc: true
badge: Alpha
---
# Configure Identity Settings in Identity Service

>[!IMPORTANT]
>
>The following feature and documentation are in Alpha.

**Problem statement**

With Adobe Experience Platform Identity Service and Real-Time Customer Profile, it is easy to assume that your data is ingested perfectly. However, there are possible scenarios where certain data could try to merge multiple profiles.

**Identity Settings objectives**

With Identity Settings (feature name?) you can:

* Configure limits to prevent two person identifiers from merging into one identity graph, so that a single identity graph only represents a single person.
  * The limits that you configure are then enforced by identity optimization algorithm.
* Configure priorities to associate online events conducted by the authenticated individual to a given user.

**Limits**

