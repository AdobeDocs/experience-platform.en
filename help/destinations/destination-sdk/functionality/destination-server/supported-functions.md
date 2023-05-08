---
description: Experience Platform Destination SDK uses Pebble templates, allowing you to transform the data exported from Experience Platform into the format required by your destination.
title: Supported transformation functions in Destination SDK
---

# Supported transformation functions in Destination SDK

Experience Platform Destination SDK uses [[!DNL Pebble] templates](https://pebbletemplates.io/), allowing you to transform the data exported from Experience Platform into the format required by your destination.

The Experience Platform [!DNL Pebble] implementation has some changes, compared to the out-of-the box version provided by [!DNL Pebble]. Also, in addition to the out-of-the-box functions provided by [!DNL Pebble], Adobe has created some additional functions that you can use with Destination SDK.

>[!IMPORTANT]
>
>All parameter names and values supported by Destination SDK are **case sensitive**. To avoid case sensitivity errors, please use the parameters names and values exactly as shown in the documentation.

## Where to use {#where-to-use}

Use the supported functions listed further below on this page when [creating a message transformation template](../../testing-api/streaming-destinations/create-template.md) for the data exported out of Experience Platform to your destination. 

The message transformation template is used in the [destination server configuration](templating-specs.md) for streaming destinations.

## Prerequisites {#prerequisites}

To understand the concepts and functions in this reference page, read the [message format](message-format.md) document first. You need to understand the [structure of a profile](message-format.md#profile-structure) in Experience Platform before you can use [!DNL Pebble] templates to transform and the exported data.

Before you advance to the functions documented below, review the templating examples in the section [Using a templating language for the identity, attributes, and segment membership transformations](message-format.md#using-templating). The examples in there start off very simple and increase in complexity.

## Supported [!DNL Pebble] functions {#supported-functions}

From the [!DNL Pebble] tags section, Destination SDK only supports:

* [filter](https://pebbletemplates.io/wiki/tag/filter/)
* [for](https://pebbletemplates.io/wiki/tag/for/)
* [if](https://pebbletemplates.io/wiki/tag/if/)
* [set](https://pebbletemplates.io/wiki/tag/set/)

>[!TIP]
>
>Using `for` is different when iterating through *array* or *map* elements in a template. When you iterate through an array, you can obtain the element directly. When you iterate through a map, you obtain each map entry, which has a key-value pair.
>
> * For an example of an array element, think about the identities in an [identityMap](message-format.md#identities) namespace, where you could iterate through elements such as `identityMap.gaid`, `identityMap.email`, or similar.
> * For an example of a map element, think about [segmentMembership](message-format.md#segment-membership).

From the [!DNL Pebble] filter section, Destination SDK supports all functions. An example further below shows how the `date` function can be used within Destination SDK.

From the [!DNL Pebble] functions section, Adobe does *not* support the [range](https://pebbletemplates.io/wiki/function/range/) function.

## Example of how the `date` function is used {#date-function}

To exemplify how [!DNL Pebble] functions are used in Destination SDK, see below how the date function ([link in Pebble documentation](https://pebbletemplates.io/wiki/filter/date/)) is used to transform the format of a timestamp.

### Use case

You want to change the `lastQualificationTime` timestamp from the default [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) value that Experience Platform exports to another value preferred by your destination.

### Example

#### Input

```json
{
"lastQualificationTime": "2022-02-08T18:34:24.000+0000"
}
```

#### Format

```java
{{ lastQualificationTime | date(existingFormat="yyyy-MM-dd'T'HH:mm:sss.SSSX", format="yyyy-MM-dd'T'HH:mm:ssX") }}
```

#### Output

```json
{
"lastQualificationTime": "2022-02-21T18:34:24Z"
}
```

## Functions added by Adobe {#functions-added-by-adobe}

In addition to the out-of-the-box functions provided by [!DNL Pebble], see below the additional functions created by Adobe that you can use for your data exports.

### `addedSegments` and `removedSegments` functions {#addedsegments-removedsegments-functions}

#### Use case

These functions can be used on order to obtain a list of segments that were added to or removed from a profile.

#### Example

##### Input

```json
{
  "identityMap": {
    "myIdNamespace": [
      {
        "id": "external_id1"
      },
      {
        "id": "external_id2"
      }
    ]
  },
  "segmentMembership": {
    "ups": {
      "111111": {
        "lastQualificationTime": "2019-11-20T13:15:49Z",
        "status": "realized"
      },
      "222222": {
        "lastQualificationTime": "2019-11-20T13:15:49Z",
        "status": "exited"
      },
      "333333": {
        "lastQualificationTime": "2019-11-20T13:15:49Z",
        "status": "realized"
      }
    }
  }
}
```

##### Format

```java
added: {% for s in addedSegments(segmentMembership.ups) %}<{{s.key}}>{% endfor %}; removed: {% for s in removedSegments(segmentMembership.ups) %}<{{s.key}}>{% endfor %}
```

##### Output

```json
added: <111111><333333>; removed: <222222>
```

<!--

### Added and removed segments filters {#added-and-removed-segmnts-filters}

#### Use case {#use-case}

These filters are similar to `addedSegments` and `removedSegments`, described above. The only difference is that they are implemented as filters as opposed to functions.

#### Example {#example}

##### Input {#input}

```json
{
  "identityMap": {
    "myIdNamespace": [
      {
        "id": "external_id1"
      },
      {
        "id": "external_id2"
      }
    ]
  },
  "segmentMembership": {
    "ups": {
      "111111": {
        "lastQualificationTime": "2019-11-20T13:15:49Z",
        "status": "realized"
      },
      "222222": {
        "lastQualificationTime": "2019-11-20T13:15:49Z",
        "status": "exited"
      },
      "333333": {
        "lastQualificationTime": "2019-11-20T13:15:49Z",
        "status": "realized"
      }
    }
  }
}
```

##### Format {#format}

```java
added: {% for s in input.profile.segmentMembership.ups | added %}<{{s.key}}>{% endfor %};|removed: {% for s in input.profile.segmentMembership.ups | removed %}<{{s.key}}>{% endfor %};
```

##### Output {#output}

```json
added: <111111><333333>;|removed: <222222>;
```

-->

## Next steps {#next-steps}

You now know which [!DNL Pebble] functions are supported in Destination SDK, as well as how to use them to adjust the format of the exported data to fit your needs. Next, you should review the following pages:

* [Create and test a message transformation template](../testing-api/streaming-destinations/create-template.md)
* [Render template API operations](../testing-api/streaming-destinations/render-template-api.md)
