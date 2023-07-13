---
solution: Experience Platform
title: PQL Map Functions
description: Profile Query Language (PQL) offers functions to make interaction with maps easier.
exl-id: f23616f2-c0dd-40ce-8cfc-c757542fbd05
---
# Map functions

[!DNL Profile Query Language] (PQL) offers functions to make interaction with maps easier. More information about other PQL functions can be found in the [[!DNL Profile Query Language] overview](./overview.md).

## Get

The `get` function is used to retrieve the value of a map for a given key.

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

The `keys` function is used to retrieve all the keys for a given map.

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

The `values` function is used to retrieve all the values of a given map.

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
