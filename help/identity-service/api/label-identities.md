---
keywords: Experience Platform;home;popular topics;label identities
solution: Experience Platform
title: Label a Field as an Identity
description: Fields that contain personally identifiable information (PII) can be labeled as identity fields. A value provided in an identity field is interpreted as an identity by Identity Service. The namespace of the identity is specified as a part of labeling the field.
exl-id: f0b3f18b-7302-4a0b-b444-2d4b59787681
---
# Label a field as an identity

Fields that contain personally identifiable information (PII) can be labeled as identity fields. A value provided in an identity field is interpreted as an identity by [!DNL Identity Service]. The namespace of the identity is specified as a part of labeling the field.

The following criteria must be met for a field to be labeled as identity:

- Only string type fields can be used for identity
- Identities are only recognized in record and time series data
- Only PII fields should be marked as identity. Choosing a field representing more generic data would result in less precise relationships and potentially errors accessing related identities from the identity graph

For instructions on how to use the Schema Registry API to label a field as identity, visit [descriptors endpoint guide](../../xdm/api/descriptors.md#create).

## Next steps

Proceed to the next tutorial to [list cluster identities](./list-cluster-identites.md)
