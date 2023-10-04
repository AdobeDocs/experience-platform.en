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

With Identity Settings you can:

* Configure limits to prevent two person identifiers from merging into one identity graph, so that a single identity graph only represents a single person.
  * The limits that you configure are then enforced by identity optimization algorithm.
* Configure priorities to associate online events conducted by the authenticated individual to a given user.

**Limits**

* Namespace lim

**Identity optimization algorithm**

The identity optimization algorithm is a rule that ensures that the limits are honored. The algorithm honors the most recent links and remove the oldest to make sure that a given identity graph stays within the limits that a user has defined.

**Priority**

Namespace priority defines which namespaces are more important than others. This information is used to define primary identities to store profile fragments