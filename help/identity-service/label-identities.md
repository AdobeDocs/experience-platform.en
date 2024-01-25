---
keywords: Experience Platform;home;popular topics;label identities
title: Label a Field as an Identity in the UI
description: Fields that contain personally identifiable information (PII) can be labeled as identity fields. A value provided in an identity field is interpreted as an identity by Identity Service. The namespace of the identity is specified as a part of labeling the field.
hide: true
hidefromtoc: true
exl-id: c3097030-0242-404f-9e4c-72a7fa574011
---
# Label a field as an identity in the UI

Fields that contain personally identifiable information (PII) can be labeled as identity fields. A value provided in an identity field is interpreted as an identity by [!DNL Identity Service]. The namespace of the identity is specified as a part of labeling the field.

The following criteria must be met for a field to be labeled as identity:

* Only string type fields can be used for identity
* Identities are only recognized in record and time series data
* Only PII fields should be marked as identity. Choosing a field representing more generic data would result in less precise relationships and potentially errors accessing related identities from the identity graph

For instructions on how to label identity fields in the UI, see the guide on [defining identity fields in the UI](../xdm/ui/fields/identity.md).

## Next steps

For more information on [!DNL Identity Service], see the [[!DNL Identity Service] overview](./home.md).
