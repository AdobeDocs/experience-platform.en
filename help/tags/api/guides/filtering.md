---
title: Filtering responses in the Reactor API
description: Learn how to filter results when listing resources in the Reactor API.
exl-id: 8a91f3dd-4ead-4a10-abb1-e71acb0d73b6
---
# Filtering responses in the Reactor API

When using list (GET) endpoints in the Reactor API, you may find it necessary to limit the returned results to a subset of records. To accomplish this, many of the API's list endpoints support the ability to filter by specific attributes. If you wish to make structured queries to the API instead, see the guide on [searching](./search.md).

## Filtering syntax

The following example explains how to implement filters for your GET requests.

**API format**

To filter the response for a given list endpoint, you must supply a `filter` query parameter in the request path.

>[!NOTE]
>
>The template below uses square bracket (`[]`) and space characters for readability. In practice, these characters must be URI-encoded, as outlined in [RFC 3986](https://tools.ietf.org/html/rfc3986). An example of a properly encoded request path is shown later in this guide.
>
>Note that if the structure of your filters is incorrect, no filters are applied and the full result set is returned.

```http
GET {ENDPOINT}?filter[{ATTRIBUTE_NAME}]={OPERATOR} {VALUE}
```

| Property | Description |
| --- | --- |
| `{ENDPOINT}` | A listing endpoint in the Reactor API that supports filter parameters. |
| `{ATTRIBUTE_NAME}` | The name of a specific attribute to filter results by. Keep in mind that different endpoints support different attributes for filtering. Refer to the reference guide for the endpoint you are working with for a list of available filtering attributes. |
| `{OPERATOR}` | The operator which determines how the results are evaluated against the provided `{VALUE}`. Supported operators are listed in the [appendix section](#supported-operators). |
| `{VALUE}` | The value to compare the returned results against. When comparing for equality using the `EQ` operator, the value must be an exact, case-sensitive match in order to be included in the response. |

{style="table-layout:auto"}

**Request**

The example request below retrieves a list of of published libraries by applying a filter that requires the library's `state` attribute to equal `published`.

Before URI encoding, the syntax for this filter in the request path would look similar to the following:

`https://reactor.adobe.io/properties/PR906238a59bbf4262bcedba248f483600/libraries?filter[state]=EQ published`

Once the path and query parameters have been URI-encoded, they can be used in API requests like the one below:

```shell
curl -X GET \
  https://reactor.adobe.io/properties/PR906238a59bbf4262bcedba248f483600/libraries?filter%5Bstate%5D=EQ%20published \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}'
```

## Filtering on multiple values {#multiple-values}

To filter by multiple values for a single attribute, supply the values as a comma-separated list.

```http
GET {ENDPOINT}?filter[{ATTRIBUTE_NAME}]={OPERATOR} {VALUE_1},{VALUE_2}
```

## Using multiple filters

To apply filters for multiple attributes, supply a `filter` parameter for each attribute. Parameters must be separated by ampersand (`&`) characters.

```http
GET {ENDPOINT}?filter[{ATTRIBUTE_NAME_1}]={OPERATOR} {VALUE}&filter[{ATTRIBUTE_NAME_2}]={OPERATOR} {VALUE}
```

>[!NOTE]
>
>If you specify the same attribute in multiple filters on the same request, then only the last provided filter for that attribute will be applied.

## Appendix

The following section contains additional information for working with filters in the Reactor API.

### Supported filter operators {#operators}

The following table lists the supported operator values for filter parameters. Keep in mind that depending on the attribute you are filtering by, not all available filter operators will be applicable, such as using "less than" or "greater than" operators for string attributes.

| Operator | Description |
| --- | --- |
| `EQ` | The attribute must equal the provided value. |
| `NOT` | The attribute must not equal the provided value.  |
| `LT` | The attribute must be less than the provided value. |
| `GT` | The attribute must be greater than the provided value. |
| `BETWEEN` | The attribute must must fall within a specified range of values. When using this operator, [two values](#multiple-values) must be provided to indicate the minimum and maximum values for the desired range. |
| `CONTAINS` | The attribute must contain the provided value, such as a set of characters within a string attribute. |
