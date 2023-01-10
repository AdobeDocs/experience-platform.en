---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;Segmentation Service;pql;PQL;Profile Query Language;object functions;object;
solution: Experience Platform
title: PQL Object Functions
description: Profile Query Language (PQL) offers functions to make interaction with objects simpler.
exl-id: e65257d8-5bc8-46c8-8487-33bc7ce4059b
---
# Object functions

[!DNL Profile Query Language] (PQL) offers functions to make interaction with objects simpler. More information about other PQL functions can be found in the [[!DNL Profile Query Language] overview](./overview.md).

## Is null

The `isNull` function determines if an object reference does not exist.

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

The `isNotNull` function determines if an object reference exists.

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
