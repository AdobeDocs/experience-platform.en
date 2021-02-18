---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API
title: PQL Expressions for Computed Attributes
topic: guide
type: Documentation
description: Computed attributes enable you to automatically compute the value of fields based on other values, calculations, and expressions. Computed attributes operate on Real-time Customer Profile data, meaning you can aggregate values across all records and events stored in Adobe Experience Platform. 
---

# (Alpha) Sample PQL expressions for computed attributes

>[!IMPORTANT]
>
>Computed attribute functionality is currently in alpha and is not available to all users. The documentation and the functionality are subject to change.

In Adobe Experience Platform, computed attributes enable you to create fields containing values that are automatically computed from other values, calculations, and expressions. Each computed attribute is defined with basic information, such as a name and description, the schema class and path to the field in which the value will be held, and an expression, whose computed value is the value that you would like to store in the computed attribute.

The expressions used in computed attributes are created using [!DNL Profile Query Language] (PQL), an Experience Data Model (XDM) compliant query language which is designed to support the definition and execution of queries for Real-time Customer Profile data. 

This guide outlines some of the most commonly used PQL expressions that you can use when defining your own computed attributes for your organization. For more information on PQL and links to additional formatting guidelines and samples of supported queries, please visit the [PQL overview](../../segmentation/pql/overview.md).

|Description|PQL expression|Input type:<br/>Profile or Experience Event (EE[])|Result type|
|---|---|---|---|
|Count of downloads of PhotoShop in the last 7 days.|xEvent[(timestamp occurs < 7 days before now) and eventType="download" and product = "PS"].count()|Profile & EE[]|Integer|
|Sum of numeric property over all downloads of PhotoShop in last 7 days.|xEvent[(timestamp occurs < 7 days before now) and eventType="download" and product = "PS"].sum(commerce.order.priceTotal)|Profile & EE[]|Integer or Double|
|Average of numeric property over all downloads of PhotoShop in last 7 days.<br/><br/>**Note:** Requires the creation of three computed attributes.|**ca1:** xEvent[(timestamp occurs < 7 days before now) and eventType="download" and product = "PS"].sum(commerce.order.priceTotal)<br/><br/>**ca2:** xEvent[(timestamp occurs < 7 days before now) and eventType="download" and product = "PS"].count()<br/><br/>**ca3:** ca1 / ca2|Profile & EE[]|Double|
|Whether or not the sum of numeric expression over all PhotoShop downloads in the last 7 days exceeds 100.<br/><br/>**Note:** Requires the creation of two computed attributes.|**ca1:** xEvent[(timestamp occurs < 7 days before now) and eventType="download" and product = "PS"].sum(commerce.order.priceTotal)<br/><br/>**ca2:** ca1 > 100|Profile & EE[]|Boolean|
|Whether or not there has been a download of PhotoShop over the last 7 days.|chain(xEvent, timestamp, [A: WHAT(eventType = "download") WHEN(< 7 days before now)])|Profile & EE[]|Boolean|
|Minimum of numeric property over all downloads of PhotoShop in last 7 days.|xEvent[(timestamp occurs < 7 days before now) and eventType="download" and product = "PS"].min(commerce.order.priceTotal)|Profile & EE[]|Integer or Double|
|Maximum of numeric property over all downloads of PhotoShop in last 7 days.|xEvent[(timestamp occurs < 7 days before now) and eventType="download" and product = "PS"].max(commerce.order.priceTotal)|Profile & EE[]|Integer or Double|
|Count of downloads of each downloaded product, in the last 7 days, indexed by product.|xEvent[(timestamp occurs < 7 days before now) and eventType="download"].groupBy(product).map((K, G) => mapEntry(K, G.count()))|Profile & EE[]|Map[String, Integer]|
|Sum of numeric property over downloads of each downloaded product, in the last 7 days, indexed by product.|xEvent[(timestamp occurs < 7 days before now) and eventType="download"].groupBy(product).map((K, G) => mapEntry(K, G.sum(commerce.order.priceTotal)))|Profile & EE[]|Map[String, Integer] or Map[String, Double]|
|Average of numeric property over downloads of each downloaded product, in the last 7 days, indexed by product.<br/><br/>**Note:** Requires the creation of three computed attributes.|**ca1:** xEvent[(timestamp occurs < 7 days before now) and eventType="download"].groupBy(product).map((K, G) => mapEntry(K, G.sum(commerce.order.priceTotal)))<br/><br/>**ca2:** xEvent[(timestamp occurs < 7 days before now) and eventType="download"].groupBy(product).map((K, G) => mapEntry(K, G.count()))<br/><br/>**ca3:** ca2 / ca1|Profile & EE[]|Map[String, Double]|
|Whether or not the sum of numeric expression over product downloads in the last 7 days exceeds 100, indexed by product.|xEvent[(timestamp occurs < 7 days before now) and eventType="download"].groupBy(product).map((K, G) => mapEntry(K, G.sum(commerce.order.priceTotal) > 100))|Profile & EE[]|Map[String, Boolean]|
|Whether or not the average of numeric expression over product downloads in the last 7 days exceeds 100, indexed by product.|xEvent[(timestamp occurs < 7 days before now) and eventType="download"].groupBy(product).map((K, G) => mapEntry(K, G.average(commerce.order.priceTotal) > 100))|Profile & EE[]|Map[String, Boolean]|
|Minimum of numeric property over downloads of each downloaded product, in the last 7 days, indexed by product.|xEvent[(timestamp occurs < 7 days before now) and eventType="download"].groupBy(product).map((K, G) => mapEntry(K, G.min(commerce.order.priceTotal)))|Profile & EE[]|Map[String, Integer] or Map[String, Double]|
|Maximum of numeric property over downloads of each downloaded product, in the last 7 days, indexed by product.|xEvent[(timestamp occurs < 7 days before now) and eventType="download"].groupBy(product).map((K, G) => mapEntry(K, G.max(commerce.order.priceTotal)))|Profile & EE[]|Map[String, Integer] or Map[String, Double]|
|Accumulation of various metrics for each downloaded product, in the last 7 days, indexed by product.|xEvent[(timestamp occurs < 7 days before now) and eventType="download"].groupBy(product).map((K, G) => mapEntry(K, {"count": G.count(), "sum": G.sum(commerce.order.priceTotal)}))|Profile & EE[]|Map[String, Object] where Object is a custom XDM type|
|Numeric expression on profile, not referencing events.|if(person.gender = "female", 60, 65)|Profile|Integer or Double|
|Boolean expression on profile, not referencing events.|person.birthYear >= 2000|Profile|Boolean|
|String expression on profile, not referencing events.|if(homeAddress.countryCode in ["US","MX","CA"], "NA", "ROW")|Profile|String|