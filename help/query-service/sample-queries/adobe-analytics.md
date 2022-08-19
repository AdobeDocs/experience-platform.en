---
keywords: Experience Platform;home;popular topics;query service;Query service;sample queries;sample query;adobe analytics;
solution: Experience Platform
title: Sample Queries for Adobe Analytics Data
topic-legacy: queries
description: Data from selected Adobe Analytics report suites is transformed into XDM ExperienceEvents and ingested into Adobe Experience Platform as datasets. This document outlines a number of use cases where Query Service makes use of this data and includes sample queries designed to work with your Adobe Analytics datasets.
exl-id: 96da3713-c7ab-41b3-9a9d-397756d9dd07
---
# Sample queries for Adobe Analytics data

Data from selected Adobe Analytics report suites is transformed into data conforming to the [!DNL XDM ExperienceEvent] class and ingested into Adobe Experience Platform as datasets. 

This document outlines a number of use cases where Adobe Experience Platform [!DNL Query Service] makes use of this data. See the documentation on [Analytics field mapping](../../sources/connectors/adobe-applications/mapping/analytics.md) for more information on mapping to [!DNL Experience Events].

See the [analytics use case documentation](../use-cases/analytics-insights.md) to learn how to use Query Service to create actionable insights from ingested Adobe Analytics data.

## Deduplication  

[!DNL Query Service] supports data deduplication. See the [Data deduplication in [!DNL Query Service] documentation](../best-practices/deduplication.md) for information on how to generate new values at the time of querying [!DNL Experience Event] datasets.

## Merchandising variables (product syntax)

The following sections provide XDM fields and sample queries that you can use to access the merchandising variables in your [!DNL Analytics] dataset.

### Product syntax

In Adobe Analytics, custom product-level data can be collected through specially configured variables called merchandising variables. These are based on either an eVar or custom events. The difference between these variables and their typical use is that they represent a separate value for each product found on the hit rather than only a single value for the hit.

These variables are referred to as product syntax merchandising variables. This allows for collection of information, such as a per product "discount amount" or information about the product's "location on page" in the customer's search results.

To learn more about using the product syntax, please read the Adobe Analytics documentation on [implementing eVars using product syntax](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/evar-merchandising.html?lang=en#implement-using-product-syntax).

The sections below outline the XDM fields needed to access the merchandising variables in your [!DNL Analytics] dataset:

#### eVars

```console
productListItems[#]._experience.analytics.customDimensions.evars.evar#
```

- `#`: The index of the array you are accessing.
- `evar#`: The specific eVar variable that you are accessing.

#### Custom events

```console
productListItems[#]._experience.analytics.event1to100.event#.value
```

- `#`: The index of the array you are accessing.
- `event#`: The specific custom event variable that you are accessing.

#### Sample queries

Here is a sample query returning a merchandising eVar and event for the first product found in the `productListItems`.

```sql
SELECT
  productListItems[0]._experience.analytics.customDimensions.evars.eVar1,
  productListItems[0]._experience.analytics.event1to100.event1.value
FROM adobe_analytics_midvalues
WHERE timestamp = to_timestamp('2019-07-23')
  AND productListItems[0].SKU IS NOT NULL
  AND productListItems[0]._experience.analytics.customDimensions.evars.eVar1 IS NOT NULL
  AND productListItems[0]._experience.analytics.event1to100.event1.value IS NOT NULL
LIMIT 10
```

This next query explodes the `productListItems` array and returns each merchandising eVar and event per product. The `_id` field is included to show the relationship to the original hit. The `_id` value is a unique primary key for the dataset.

```sql
SELECT
  _id,
  productItem._experience.analytics.customDimensions.evars.eVar1,
  productItem._experience.analytics.event1to100.event1.value
FROM (
  SELECT
    _id,
    explode(productListItems) as productItem
  FROM adobe_analytics_midvalues
  WHERE TIMESTAMP = to_timestamp('2019-07-23')
  AND productListItems[0].SKU IS NOT NULL
  AND productListItems[0]._experience.analytics.customDimensions.evars.eVar1 IS NOT NULL
  AND productListItems[0]._experience.analytics.event1to100.event1.value IS NOT NULL
)
LIMIT 20
```

>[!NOTE]
>
> If you attempt to retrieve a field that doesn't exist in your current dataset, the "No such struct field" error will occur. Evaluate the reason returned in the error message to identify an available field, then update your query and rerun.
>
>```console
>ERROR: ErrorCode: 08P01 sessionId: XXXX queryId: XXXX Unknown error encountered. Reason: [No such struct field evar1 in eVar10, eVar13, eVar62, eVar88, eVar2;]
>```

### Conversion syntax

Another type of merchandising variable that is found in Adobe Analytics is conversion syntax. With product syntax, the value is collected at the same time as the product, but this requires the data to be present on the same page. There are scenarios where the data occurs on a page prior to the conversion or event of interest related to the product. For example, consider the use case for the product-finding method.

1. A user performs and internal search for "winter hat" which sets the Conversion Syntax enabled Merchandising eVar6 to "internal search:winter hat"
2. The user clicks on "waffle beanie" and lands on the product detail page.  
  a. Landing here fires off a `Product View` event for the "waffle beanie" for $12.99.  
  b. Since `Product View` is configured as a binding event, the product "waffle beanie" is now bound to the eVar6 value of "internal search:winter hat". Anytime the "waffle beanie" product is collected it will be associated to "internal search:winter hat" until either (1) the expiration setting is reached or (2) a new eVar6 value is set and the binding event occurs with that product again.
3. The user adds the product to their cart, firing the `Cart Add` event.
4. The user performs another internal search for "summer shirt" which sets the Conversion Syntax enabled Merchandising eVar6 to "internal search:summer shirt"
5. The user click on "sporty t-shirt" and lands on the product detail page.  
  a. Landing here fires off a `Product View` event for "sporty t-shirt for $19.99.  
  b. The `Product View` event is still our binding event so now the product "sporty t-shirt" is now bound to the eVar6 value of "internal search:summer shirt" and the prior product "waffle beanie" is still bound to an eVar6 value of "internal search:waffle beanie".
6. The user adds the product to their cart, firing the `Cart Add` event.
7. The user checks out with both products.

In reporting, the orders, revenue, product views, and cart adds will be reportable against eVar6 and will align to the activity of the bound product.

| eVar6 (product-finding method) | revenue | orders | product views | cart adds |
| ------------------------------ | ------- | ------ | ------------- | ----- |
| internal search:summer shirt | 19.99 | 1 | 1 | 1 |
| internal search:winter hat | 12.99 | 1 | 1 | 1 |

To learn more about using the conversion syntax, please read the Adobe Analytics documentation on [implementing eVars using conversion syntax](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/evar-merchandising.html?lang=en#implement-using-conversion-variable-syntax).

Here are the XDM fields to produce the conversion syntax in your [!DNL Analytics] dataset:

#### eVars

```console
_experience.analytics.customDimensions.evars.evar#
```

- `evar#`: The specific eVar variable that you are accessing.

#### Product

```console
productListItems[#].sku
```

- `#`: The index of the array you are accessing.

#### Sample queries

Here is a sample query binding the value to the specific product and event pair, in this case the product view event.

```sql
SELECT
  endUserIds._experience.aaid.id AS AAID,
  timestamp,
  CASE WHEN commerce.productViews.value = 1 THEN ATTRIBUTION_LAST_TOUCH(timestamp, 'bindConversionSyntaxMerchVariable_eVar1', _experience.analytics.customDimensions.eVars.eVar1)
  OVER(PARTITION BY endUserIds._experience.aaid.id
       ORDER BY timestamp
       ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW).value
  END AS eVar1Bind,
  EXPLODE(productListItems) AS Product_List,
  commerce.productViews.value AS prodView,
  commerce.purchases.value AS purchase
FROM adobe_analytics_midvalues
WHERE commerce.productViews.value = 1 OR commerce.purchases.value = 1 OR _experience.analytics.customDimensions.eVars.eVar1 IS NOT NULL
LIMIT 100
```

Here is a sample query persisting the bound value to subsequent occurrences of the respective product. The lowest sub-query establishes the values relationship with the product on the declared binding event. The next sub-query performs the attribution of that bound value across subsequent interactions with the respective product. And the top level select aggregates the results to produce the reporting.

```sql
SELECT
  Product_List.SKU,
  eVar1101ConversionSyntax,
  SUM(prodView) AS Product_Views,
  SUM(purchase) AS Purchases
FROM
(
  SELECT
    Product_List,
    ATTRIBUTION_LAST_TOUCH(timestamp, 'ConversionSyntax_eVar1', eVar1Bind)
      OVER(PARTITION BY AAID, Product_List.SKU
           ORDER BY timestamp
           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW).value
    AS eVar1ConversionSyntax,
    prodView,
    purchase
  FROM
  (
    SELECT
      endUserIds._experience.aaid.id AS AAID,
      timestamp,
      CASE WHEN commerce.productViews.value = 1 THEN ATTRIBUTION_LAST_TOUCH(timestamp, 'bindConversionSyntaxMerchVariable_eVar1', _experience.analytics.customDimensions.eVars.eVar1)
      OVER(PARTITION BY endUserIds._experience.aaid.id
           ORDER BY timestamp
           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW).value
      END AS eVar1Bind,
      EXPLODE(productListItems) AS Product_List,
      commerce.productViews.value AS prodView,
      commerce.purchases.value AS purchase
    FROM adobe_analytics_midvalues
    WHERE commerce.productViews.value = 1 OR commerce.purchases.value = 1 OR _experience.analytics.customDimensions.eVars.eVar1 IS NOT NULL
  )
)
WHERE eVar1ConversionSyntax IS NOT NULL
GROUP BY 1, 2
ORDER BY 3 DESC
LIMIT 100
```
