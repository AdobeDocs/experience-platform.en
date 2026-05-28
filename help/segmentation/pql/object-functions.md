---
solution: Experience Platform
title: PQL Object Functions
description: Profile Query Language (PQL) offers functions to make interaction with objects simpler.
exl-id: e65257d8-5bc8-46c8-8487-33bc7ce4059b
TQID: https://experienceleague.adobe.com/IMiDHJ3jbAsE2vSuIYYdqYYZkBpMk1GeToS0oqi3Qw4
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
subfeature_v2:
  - id: cbd4a8d8-97a6-4ac9-b8d6-b6c1f28d3342
    internal-label: Segments
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
---
# Object functions

[!DNL Profile Query Language] (PQL) offers functions to make interaction with objects simpler. More information about other PQL functions can be found in the [[!DNL Profile Query Language] overview](./overview.md).

## Is null

The `isNull` function determines if an object reference does not exist as a boolean.

**Format**

```sql
{OBJECT}.isNull()
```

**Example**

The following PQL query checks if the person's home address does not exist.

```sql
person.homeAddress.isNull()
```

## Is not null

The `isNotNull` function determines if an object reference exists as a boolean.

**Format**

```sql
{OBJECT}.isNotNull()
```

**Example**

The following PQL query checks if the person's home address exists.

```sql
person.homeAddress.isNotNull()
```

## Next steps

Now that you have learned about object functions, you can use them within your PQL queries. For more information about other PQL functions, please read the [Profile Query Language overview](./overview.md).
