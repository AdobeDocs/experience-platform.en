---
title: Sorting and Filtering Responses in the Flow Service API
description: This tutorial covers the syntax for sorting and filtering using query parameters in the Flow Service API, including some advanced use cases.
exl-id: 029c3199-946e-4f89-ba7a-dac50cc40c09
---
# Sorting and filtering responses in the Flow Service API

When performing listing (GET) requests in the [Flow Service API](https://www.adobe.io/experience-platform-apis/references/flow-service/), you can use query parameters to sort and filter responses. This guide provides a reference for how to use these parameters for different use cases.

## Sorting

You can sort responses by using an `orderby` query param. The following resources can be sorted in the API:

* [Connections](https://www.adobe.io/experience-platform-apis/references/flow-service/#tag/Connections)
* [Source connections](https://www.adobe.io/experience-platform-apis/references/flow-service/#tag/Source-connections)
* [Target connections](https://www.adobe.io/experience-platform-apis/references/flow-service/#tag/Target-connections)
* [Flows](https://www.adobe.io/experience-platform-apis/references/flow-service/#tag/Flows)
* [Runs](https://www.adobe.io/experience-platform-apis/references/flow-service/#tag/Runs)

To use the parameter, you must set its value to the specific property you want to sort by (for example, `?orderby=name`). You can prepend the value with a plus sign (`+`) for ascending order or minus sign (`-`) for descending order. If no ordering prefix is provided, the list is sorted in ascending order by default.

```http
GET /flows?orderby=name
GET /flows?orderby=-name
```

You can also combine a sorting parameter with a filtering parameter by using an "and" symbol (`&`).

```http
GET /flows?property=state==enabled&orderby=createdAt
```

## Filtering

You can filter responses by using a `property` parameter with a key-value expression. For example, `?property=id==12345` only returns resources whose `id` property equals exactly `12345`.

Filtering can be applied generically on any property in an entity as long as the valid path to that property is known.

>[!NOTE]
>
>If a property is nested within an array item, you must append square brackets (`[]`) to the array in the path. See the section on [filtering on array properties](#arrays) for examples.

**Return all source connections where source table name is `lead`:**

```http
GET /sourceConnections?property=params.tableName==lead
```

**Return all flows for a specific segment ID:**

```http
GET /flows?property=transformations[].params.segmentSelectors.selectors[].value.id==5722a16f-5e1f-4732-91b6-3b03943f759a
```

### Combining filters

Multiple `property` filters can be included in a query provided they are separated by "and" characters (`&`). An AND relationship is assumed when combining filters, meaning that an entity must satisfy all filters in order for it to be included in the response.

**Return all enabled flows for a segment ID:**

```http
GET /flows?property=transformations[].params.segmentSelectors.selectors[].value.id==5722a16f-5e1f-4732-91b6-3b03943f759a&property=state==enabled
```

### Filtering on array properties {#arrays}

You can filter based on the properties of items within arrays by appending `[]` to the name of the array property.

**Return flows that are associated with specific source connections:**

```http
GET /flows?property=sourceConnectionIds[]==9874984,6980696
```

**Return flows that have a transformation containing a specific selector value ID:**

```http
GET /flows?property=transformations[].params.segmentSelectors.selectors[].value.id==5722a16f-5e1f-4732-91b6-3b03943f759a
```

**Return source connections that have a column with a specific `name` value:**

```http
GET /sourceConnections?property=params.columns[].name==firstName
```

**Look up the flow run ID for a destination by filtering on segment ID:**

```http
GET /runs?property=metrics.recordSummary.targetSummaries[].entitySummaries[].id==segment:068d6e2c-b546-4c73-bfb7-9a9d33375659
```

### `count`

Any filtering query can be appended with `count` query parameter with a value of `true` to return the count of the results. The API response contains a `count` property whose value represents count of total filtered items. The actual filtered items are not returned in this call.

**Return the count of enabled flows in the system:**

```http
GET /flows?property=state==enabled&count=true
```

The response to the above query would look like the following:

```json
{
  "count": 95
}
```

### Filterable properties by resource

Depending on the Flow Service entity you are retrieving, different properties can be used for filtering. The tables below break down the root-level fields for each resource that are commonly employed in filtering use cases.

**`connectionSpec`**

| Property | Example |
| --- | --- |
| `id` | `/connectionSpecs?property=id==736873,9485095` |
| `name` | `/connectionSpecs?property=name==TestConn` |
| `providerId` | `/connectionSpecs?property=providerId==3897933` |
| `attributes.{ATTRIBUTE_NAME}` | `/connectionSpecs?property=attributes.sampleAttribute="abc"` |

{style="table-layout:auto"}

**`flowSpec`**

| Property | Example |
| --- | --- |
| `id` | `/flowSpecs?property=id==736873,9485095` |
| `name` | `/flowSpecs?property=name==TestConn` |
| `providerId` | `/flowSpecs?property=providerId==3897933` |

{style="table-layout:auto"}

**`connection`**

| Property | Example |
| --- | --- |
| `id` | `/connections?property=id==736873,9485095` |
| `name` | `/connections?property=name==TestConn` |
| `description` | `/connections?property=description==Test%20description` |
| `connectionSpec.id` | `/connections?property=connectionSpec.id==938903,849048` |
| `state` | `/connections?property=state==enabled` |

{style="table-layout:auto"}

**`sourceConnection`**

| Property | Example |
| --- | --- |
| `id` | `/sourceConnections?property=id==736873,9485095` |
| `connectionSpec.id` | `/sourceConnections?property=connectionSpec.id==938903,849048` |
| `baseConnectionId` | `/sourceConnections?property=baseConnectionId==983908,4908095` |

{style="table-layout:auto"}

**`targetConnection`**

| Property | Example |
| --- | --- |
| `id` | `/targetConnections?property=id==736873,9485095` |
| `connectionSpec.id` | `/targetConnections?property=connectionSpec.id==938903,849048` |
| `baseConnectionId` | `/targetConnections?property=baseConnectionId==983908,4908095` |

{style="table-layout:auto"}

**`flow`**

| Property | Example |
| --- | --- |
| `id` | `/flows?property=id==736873,9485095` |
| `name` | `/flows?property=name==TestFlow` |
| `description` | `/flows?property=description==Test%20description` |
| `flowSpec.id` | `/flows?property=flowSpec.id==938903,849048` |
| `state` | `/flows?property=state==enabled` |
| `sourceConnectionIds` | `/flows?property=sourceConnectionIds[]==9874984,6980696` |
| `targetConnectionIds` | `/flows?property=targetConnectionIds[]==598590,690666` |

{style="table-layout:auto"}

**`run`**

| Property | Example |
| --- | --- |
| `id` | `/runs?property=id==736873,9485095` |
| `flowId` | `/runs?property=flowId==8749844` |
| `state` | `/runs?property=state==inProgress` |

{style="table-layout:auto"}

## Use cases {#use-cases}

Read this section for some specific examples of how you can use filtering and sorting to return information about certain connectors or to assist you in debugging issues. If there are any additional use cases that you would like Adobe to add, please use the **[!UICONTROL Detailed feedback options]** on the page to submit a request.

**Filter to return connections to a certain destination only**

You can use filters to return connections to certain destinations only. First, query the `connectionSpecs` endpoint like below:

```http
GET /connectionSpecs
```

Then, search for your desired `connectionSpec` by inspecting the `name` parameter. For example, search for Amazon Ads, or Pega, or SFTP, and so on in the `name` parameter. The corresponding `id` is the `connectionSpec` that you can search by in the next API call. 

For example, filter your destinations to only return existing connections to Amazon S3 connections:

```http
GET /connections?property=connectionSpec.id==4890fc95-5a1f-4983-94bb-e060c08e3f81
```

**Filter to return dataflows to destinations only**

When querying the `/flows` endpoint, instead of returning all sources and destinations dataflows, you can use a filter to only return dataflows to destinations. To do this, use `isDestinationFlow` as query parameter, like this: 

```http
GET /flows?property=inheritedAttributes.properties.isDestinationFlow==true
```

**Filter to return dataflows to a certain source or destination only**

You can filter dataflows to return dataflows to a certain destination or from a certain source only. For example, filter your destinations to only return existing connections to Amazon S3 connections:

```http
GET /flows?property=inheritedAttributes.targetConnections[].connectionSpec.id==4890fc95-5a1f-4983-94bb-e060c08e3f81
```

**Filter to get all runs of a dataflow for a specific time-period**

You can filter dataflow runs of a dataflow to only look at runs in a certain time interval, like below:

```
GET /runs?property=flowId==<flow-id>&property=metrics.durationSummary.startedAtUTC>1593134665781&property=metrics.durationSummary.startedAtUTC<1653134665781
```

**Filter to return failed dataflows only**

For debugging purposes, you can filter and see all the failed dataflow runs for a certain source or destination dataflow, like below:

```http
GET /runs?property=flowId==<flow-id>&property=metrics.statusSummary.status==Failed
```

## Next steps

This guide covered how to use the `orderby` and `property` query parameters to sort and filter responses in the Flow Service API. For step-by-step guides on how to use the API for common workflows in Platform, see the API tutorials contained in the [sources](../../sources/home.md) and [destinations](../../destinations/home.md) documentation.
