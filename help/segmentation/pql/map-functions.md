---
solution: Experience Platform
title: PQL Map Functions
description: Profile Query Language (PQL) offers functions to make interaction with maps easier.
exl-id: f23616f2-c0dd-40ce-8cfc-c757542fbd05
TQID: https://experienceleague.adobe.com/N5vM8IXEV9vCj8LkmfXHEuTLpXBxJVCuyb9IiBWzJbM
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
# Map functions

[!DNL Profile Query Language] (PQL) offers functions to make interaction with maps easier. More information about other PQL functions can be found in the [[!DNL Profile Query Language] overview](./overview.md).

## Get

The `get` function is used to retrieve the value of a map for a given key as an object.

**Format**

```sql
{MAP}.get({STRING})
```

**Example**

The following PQL query gets the value of the identity map for the key `example@example.com`.

```sql
identityMap.get("example@example.com")
```

## Keys

The `keys` function is used to retrieve all the keys for a given map as an array or list.

**Format**

```sql
{MAP}.keys()
```

**Example**

The following PQL query gets all the keys for the map `identityMap`.

```sql
identityMap.keys()
```

## Values

The `values` function is used to retrieve all the values of a given map as an array or list.

**Format**

```sql
{MAP}.values()
```

**Example**

The following PQL query gets all the values for the map `identityMap`.

```sql
identityMap.values()
```

## Next steps

Now that you have learned about map functions, you can use them within your PQL queries. For more information about other PQL functions, please read the [Profile Query Language overview](./overview.md).
