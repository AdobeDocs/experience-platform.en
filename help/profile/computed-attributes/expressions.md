---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API
title: Sample PQL Expressions for Computed Attributes
type: Documentation
description: Computed attributes are functions used to aggregate event-level data into profile-level attributes. These functions require the use of valid Profile Query Language (PQL) expressions. This guide outlines some of the most commonly used PQL expressions for computed attributes.
exl-id: 7c80e2d3-919a-47f9-a59f-833a70f02a8f
hide: true
hidefromtoc: true
---
# (Alpha) Sample PQL expressions for computed attributes

>[!IMPORTANT]
>
>Computed attribute functionality is currently in alpha and is not available to all users. The documentation and the functionality are subject to change.

In Adobe Experience Platform, computed attributes are functions used to aggregate event-level data into profile-level attributes. These functions are automatically computed so that they can be used across segmentation, activation, and personalization. Each computed attribute is defined with basic information, such as a name and description, the schema class and path to the field in which the value will be held, and an expression, whose computed value is the value that you would like to store in the computed attribute.

The expressions used in computed attributes are created using [!DNL Profile Query Language] (PQL), an Experience Data Model (XDM) compliant query language which is designed to support the definition and execution of queries for Real-Time Customer Profile data.

Computed attributes currently support the following functions: sum, count, min, max, and boolean. This guide outlines some of the most commonly used PQL expressions that you can use when defining your own computed attributes for your organization. For more information on PQL and links to additional formatting guidelines and samples of supported queries, please visit the [PQL overview](../../segmentation/pql/overview.md).

## Streaming expressions

The following table provides details for commonly used query expressions supported in streaming mode.

|Description|PQL expression|Input type:<br/>Profile or Experience Event (EE[])|Result type|
|---|---|---|---|
|Count of downloads of images in the last 7 days.|xEvent[(timestamp occurs < 7 days before now) and eventType="download" and contentType = "image"].count()|Profile & EE[]|Integer|
|Sum of customer spend on sporting goods in the last 7 days.|xEvent[(timestamp occurs < 7 days before now) and eventType="transaction" and category = "sporting goods"].sum(commerce.order.priceTotal)|Profile & EE[]|Integer or Double|
|Average customer spend on sporting goods in the last 7 days.<br/><br/>**Note:** Requires the creation of three computed attributes.|**ca1:** xEvent[(timestamp occurs < 7 days before now) and eventType="transaction" and category = "sporting goods"].sum(commerce.order.priceTotal)<br/><br/>**ca2:** xEvent[(timestamp occurs < 7 days before now) and eventType="transaction" and category = "sporting goods"].count()<br/><br/>**ca3:** ca1 / ca2|Profile & EE[]|Double|
|Has the customer spent more than $100 on sporting goods last 7 days?<br/><br/>**Note:** Requires the creation of two computed attributes.|**ca1:** xEvent[(timestamp occurs < 7 days before now) and eventType="transaction" and category = "sporting goods"].sum(commerce.order.priceTotal)<br/><br/>**ca2:** ca1 > 100|Profile & EE[]|Boolean|
|Has the customer made a purchase in the last 7 days?|chain(xEvent, timestamp, [A: WHAT(eventType = "transaction") WHEN(< 7 days before now)])|Profile & EE[]|Boolean|
|Lowest user spend on sporting goods in the last 7 days.|xEvent[(timestamp occurs < 7 days before now) and eventType="transaction" and category = "sporting goods"].min(commerce.order.priceTotal)|Profile & EE[]|Integer or Double|
|Highest user spend on sporting goods in the last 7 days.|xEvent[(timestamp occurs < 7 days before now) and eventType="transaction" and category = "sporting goods"].max(commerce.order.priceTotal)|Profile & EE[]|Integer or Double|
|Count of downloads of each downloaded product, in the last 7 days, indexed by product.|xEvent[(timestamp occurs < 7 days before now) and eventType="download"].groupBy(product).map((K, G) => mapEntry(K, G.count()))|Profile & EE[]|Map[String, Integer]|
|Sum of numeric property over downloads of each downloaded product, in the last 7 days, indexed by product.|xEvent[(timestamp occurs < 7 days before now) and eventType="download"].groupBy(product).map((K, G) => mapEntry(K, G.sum(commerce.order.priceTotal)))|Profile & EE[]|Map[String, Integer] or Map[String, Double]|
|Average of numeric property over downloads of each downloaded product, in the last 7 days, indexed by product.<br/><br/>**Note:** Requires the creation of three computed attributes.|**ca1:** xEvent[(timestamp occurs < 7 days before now) and eventType="download"].groupBy(product).map((K, G) => mapEntry(K, G.sum(commerce.order.priceTotal)))<br/><br/>**ca2:** xEvent[(timestamp occurs < 7 days before now) and eventType="download"].groupBy(product).map((K, G) => mapEntry(K, G.count()))<br/><br/>**ca3:** ca2 / ca1|Profile & EE[]|Map[String, Double]|
|Minimum of numeric property over downloads of each downloaded product, in the last 7 days, indexed by product.|xEvent[(timestamp occurs < 7 days before now) and eventType="download"].groupBy(product).map((K, G) => mapEntry(K, G.min(commerce.order.priceTotal)))|Profile & EE[]|Map[String, Integer] or Map[String, Double]|
|Maximum of numeric property over downloads of each downloaded product, in the last 7 days, indexed by product.|xEvent[(timestamp occurs < 7 days before now) and eventType="download"].groupBy(product).map((K, G) => mapEntry(K, G.max(commerce.order.priceTotal)))|Profile & EE[]|Map[String, Integer] or Map[String, Double]|
|Numeric expression on profile, not referencing events.|if(person.gender = "female", 60, 65)|Profile|Integer or Double|
|Boolean expression on profile, not referencing events.|person.birthYear >= 2000|Profile|Boolean|
|String expression on profile, not referencing events.|if(homeAddress.countryCode in ["US","MX","CA"], "NA", "ROW")|Profile|String|

## Batch expressions

The following table provides details for query expressions that are only available in batch mode, meaning they are not currently available in streaming.

|Description|PQL expression|Input type:<br/>Profile or Experience Event (EE[])|Result type|
|---|---|---|---|
|Whether or not the sum of numeric expression over product downloads in the last 7 days exceeds 100, indexed by product.|xEvent[(timestamp occurs < 7 days before now) and eventType="download"].groupBy(product).map((K, G) => mapEntry(K, G.sum(commerce.order.priceTotal) > 100))|Profile & EE[]|Map[String, Boolean]|
|Whether or not the average of numeric expression over product downloads in the last 7 days exceeds 100, indexed by product.|xEvent[(timestamp occurs < 7 days before now) and eventType="download"].groupBy(product).map((K, G) => mapEntry(K, G.average(commerce.order.priceTotal) > 100))|Profile & EE[]|Map[String, Boolean]|
|Accumulation of various metrics for each downloaded product, in the last 7 days, indexed by product.|xEvent[(timestamp occurs < 7 days before now) and eventType="download"].groupBy(product).map((K, G) => mapEntry(K, {"count": G.count(), "sum": G.sum(commerce.order.priceTotal)}))|Profile & EE[]|Map[String, Object] where Object is a custom XDM type|
