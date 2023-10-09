---
title: Return and Use Merchandising variables from analytics data
description: Learn how to provide XDM fields and sample queries to access the merchandising variables in your Analytics datasets.
exl-id: 1e2ae095-4152-446f-8b66-dae5512d690e
---
# Return and use merchandising variables from analytics data

Use Query Service to manage the data ingested from Adobe Analytics into Adobe Experience Platform as datasets. The following sections provide sample queries that you can use to access the merchandising variables in your Analytics datasets. See the documentation for more information on [how to ingest and map Adobe Analytics data](https://experienceleague.adobe.com/docs/experience-platform/sources/connectors/adobe-applications/mapping/analytics.html) through the Analytics source

## Merchandising variables {#merchandising-variables}

Merchandising variables can follow one of two syntaxes:

* **Product Syntax**: Associates the eVar value to a product. 
* **Conversion Variable Syntax**: Associates the eVar with a product only if a binding event occurs. You can select the events that act as binding events. 

## Product syntax {#product-syntax}

In Adobe Analytics, custom product-level data can be collected through specially configured variables called merchandising variables. These are based on either an eVar or custom events. The difference between these variables and their typical use is that they represent a separate value for each product found on the hit rather than only a single value for the hit.

These variables are referred to as product syntax merchandising variables. This allows for the collection of information, such as a per-product "discount amount" or information about the product's "location on page" in the customer's search results.

To learn more about using the product syntax, please read the Adobe Analytics documentation on [implementing eVars using product syntax](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/evar-merchandising.html#implement-using-product-syntax).

The sections below outline the XDM fields needed to access the merchandising variables in your [!DNL Analytics] dataset:

### eVars

```console
productListItems[#]._experience.analytics.customDimensions.evars.evar#
```

* `#`: The index of the array you are accessing.
* `evar#`: The specific eVar variable that you are accessing.

### Custom events

```console
productListItems[#]._experience.analytics.event1to100.event#.value
```

* `#`: The index of the array you are accessing.
* `event#`: The specific custom event variable that you are accessing.

## Product syntax use cases {#product-use-cases}

The following use cases focus on returning a merchandising eVar from the `productListItems` array using SQL.

### Return a merchandising eVar and event 

The query below returns a merchandising eVar and event for the first product found in the `productListItems` array.

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

### Explode the productListItems array and return the merchandising eVar and event for each product.

This next query explodes the `productListItems` array and returns each merchandising eVar and event per product. The `_id` field is included to show the relationship to the original hit. The `_id` value is a unique primary key for the dataset.

>[!NOTE]
>
>The explode function separates the elements of an array into multiple rows. It excludes null values.

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
> If you attempt to retrieve a field that does not exist in your current dataset, the "No such struct field" error occurs. Evaluate the reason returned in the error message to identify an available field, then update your query and rerun it.
>
>```console
>ERROR: ErrorCode: 08P01 sessionId: XXXX queryId: XXXX Unknown error encountered. Reason: [No such struct field evar1 in eVar10, eVar13, eVar62, eVar88, eVar2;]
>```

### Conversion variable syntax {#conversion-variable-syntax}

Another type of merchandising variable that is found in Adobe Analytics is conversion variable syntax. Conversion variable syntax is used when the eVar value is not available to be set in the products variable. This scenario typically means that your page has no context of the merchandising channel or finding method. In these cases, you should set the merchandising variable before the user arrives at the product page, and the value persists until the binding event occurs.

For example, the product-finding scenario below illustrates how the required data can be present on a page before the conversion or event related to the product occurs.

1. A user performs an internal search for "winter hat" which sets the conversion syntax enabled merchandising eVar6 to "internal search:winter hat".
2. The user clicks on "waffle beanie" and lands on the product detail page.  
  a. Landing here fires off a `Product View` event for the "waffle beanie" for $12.99.  
  b. Since `Product View` is configured as a binding event, the product "waffle beanie" is now bound to the eVar6 value of "internal search:winter hat". Anytime the "waffle beanie" product is collected, it is associated with "internal search:winter hat". This happens until either the eVar expiration setting is reached, or, a new eVar6 value is set and the binding event occurs with that product again.
3. The user adds the product to their cart, firing the `Cart Add` event.
4. The user performs another internal search for "summer shirt" which sets the conversion syntax enabled merchandising eVar6 to "internal search:summer shirt".
5. The user selects "sporty t-shirt" and lands on the product detail page.  
  a. Landing here fires off a `Product View` event for "sporty t-shirt for $19.99.  
  b. As the `Product View` event is the binding event, the product "sporty t-shirt" is now bound to the eVar6 value of "internal search:summer shirt". The prior product "waffle beanie" is still bound to an eVar6 value of "internal search:waffle beanie".
6. The user adds the product to their cart, firing the `Cart Add` event.
7. The user checks out with both products.

In reporting, the orders, revenue, product views, and cart adds are reportable against eVar6 and align to the activity of the bound product.

| eVar6 (product-finding method) | revenue | orders | product views | cart adds |
| ------------------------------ | ------- | ------ | ------------- | ----- |
| internal search:summer shirt | 19.99 | 1 | 1 | 1 |
| internal search:winter hat | 12.99 | 1 | 1 | 1 |

To learn more about using the conversion variable syntax, please read the Adobe Analytics documentation on [implementing eVars using conversion variable syntax](https://experienceleague.adobe.com/docs/analytics/implementation/vars/page-vars/evar-merchandising.html#implement-using-conversion-variable-syntax).

Displayed below are the XDM fields to produce the conversion variable syntax in your [!DNL Analytics] dataset:

#### eVars

```console
_experience.analytics.customDimensions.evars.evar#
```

* `evar#`: The specific eVar variable that you are accessing.

#### Product

```console
productListItems[#].sku
```

* `#`: The index of the array you are accessing.

## Conversion variable uses cases {#conversion-variable-use-cases} 

The use cases below reflect scenarios that require conversion variable syntax.

### Bind the value to the specific product and event pair

The query below binds the value to the specific product and event pair. In this example, the value is bound to the product view event.

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

### Persist the bound value to subsequent occurrences of the respective product

The sample query below persists the bound value to subsequent occurrences of the respective product. The lowest sub-query establishes the value's relationship with the product on the declared binding event. The next sub-query performs the attribution of that bound value across subsequent interactions with the respective product. The top-level SELECT aggregates the results to produce the reporting.

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

## Next steps

By reading this document, you should have a better understanding of how to return a merchandising eVar using product syntax and bind a value to a specific product with the conversion variable syntax.

If you have not already done so, you should read the [Analytics insights for web and mobile interactions documentation](./analytics-insights.md) next. It provides common use cases and demonstrates how to use Query Service to create actionable insights from web and mobile Adobe Analytics data.
