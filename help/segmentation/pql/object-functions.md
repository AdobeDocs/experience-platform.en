---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Object functions
topic: developer guide
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