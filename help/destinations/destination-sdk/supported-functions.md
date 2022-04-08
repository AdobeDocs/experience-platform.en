---
description: This page addresses the message format and the profile transformation in data exported from Adobe Experience Platform to destinations.
title: Message format
---
# Supported transformation functions in Destination SDK

## Overview {#overview}

Experience Platform Destination SDK uses [Pebble templates](https://pebbletemplates.io/) to allow you to transform and filter the data exported out of Experience Platform to your destination into the format you need.

The Experience Platform Pebble implementation has a couple of changes to the out-of-the box version provided by Pebble. Also, in addition to the out-of-the-box functions provided by Pebble, Adobe has created some additional functions that you can use with Destination SDK.

## Prerequisites

To understand the concepts and functions in this reference page, read the [Message format](/help/destinations/destination-sdk/message-format.md) document first. You need to understand the [structure of profiles](/help/destinations/destination-sdk/message-format.md#profile-structure) in Experience Platform before you can use Pebble templates to transform and filter exported data.

Before you advance to the functions documented below, review templating examples in the section [Using a templating language for the identity, attributes, and segment membership transformations](/help/destinations/destination-sdk/message-format.md#using-templating). The examples in there start off very simple and increase in complexity. 

## Supported Pebble functions {#supported-functions}

From the Pebble tags section, Destination SDK only supports: 
* [filter](https://pebbletemplates.io/wiki/tag/filter/)
* [for](https://pebbletemplates.io/wiki/tag/for/)
* [if](https://pebbletemplates.io/wiki/tag/if/)
* [set](https://pebbletemplates.io/wiki/tag/set/)

From the Pebble filter section, Destination SDK supports `date` (shown in detail in an example further below), ADD OTHER SUPPORTED FUNCTIONS

From the Pebble functions section, Adobe does *not* support the [range](https://pebbletemplates.io/wiki/function/range/) function.

## Example of how the `date` function is used {#date-function}

To exemplify how Pebble functions are used in Destination SDK, see below how the date function is used.

### Use case {#use-case}

You want to change the `lastQualificationTime` timestamp from the default [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) value that Experience Platform exports to another value preferred by your destination.

### Example {#example}

#### Input

```json
2022-02-08T18:34:24.000+0000
```

#### Format

```java
{{ segment.value.lastQualificationTime | date(existingFormat="yyyy-MM-dd'T'HH:mm:sss.SSSX", format="yyyy-MM-dd'T'HH:mm:ssX") }}
```

#### Output

```json
"lastQualificationTime": "2022-02-21T18:34:24Z
```

### Link in Pebble documentation

https://pebbletemplates.io/wiki/filter/date/ 

## Functions added by Adobe

in addition to the out-of-the-box functions provided by Pebble, Adobe has created some additional functions that you can use for your data exports.

### addedSegments and removedSegments functions

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

### Added and removed filters

#### Use case

These filters are similar to `addedSegments` and `removedSegments`, described above. The only difference is that they are implemented as filters as opposed to functions.

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
added: {% for s in input.profile.segmentMembership.ups | added %}<{{s.key}}>{% endfor %};|removed: {% for s in input.profile.segmentMembership.ups | removed %}<{{s.key}}>{% endfor %};
```

##### Output

```json
added: <111111><333333>;|removed: <222222>;
```

## Next steps

You now know which Pebble functions and filters are supported in Destination SDK. Next, you should review the following pages:

* [Create and test a message transformation template](/help/destinations/destination-sdk/create-template.md)
* [Render template API operations](/help/destinations/destination-sdk/render-template-api.md)