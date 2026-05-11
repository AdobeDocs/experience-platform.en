---
keywords: Experience Platform;home;popular topics;shopify;Shopify;
solution: Experience Platform
title: Shopify Source Connector Overview
description: Learn how to connect Shopify to Adobe Experience Platform using APIs or the user interface.
exl-id: 636b31a7-e5f9-434a-acd1-226096522495
---
# [!DNL Shopify] source connector

The [!DNL Shopify] (batch) source connector lets you reliably bring your [!DNL Shopify] storefront data into Adobe applications on a schedule that works for you. Instead of streaming every event in real time, you configure it to collect data from your [!DNL Shopify] shop at regular intervals (batches), giving you predictable, controlled ingestion.

Using secure API access to your [!DNL Shopify] store, you can set up the connector to regularly pull key entities—such as customers, orders, products, and related metadata—and map them into your data model. This allows you to:

- Build a unified view of your customers' commerce behavior across channels.
- Use your [!DNL Shopify] data to drive audience segmentation, personalization, and reporting.
- Eliminate manual exports by relying on automated, repeatable imports at scale.

By centralizing your [!DNL Shopify] data through scheduled batch jobs, the [!DNL Shopify] (batch) source connector helps you create a dependable foundation for insights and experience orchestration, while reducing the operational effort required to keep your data up to date.

The documentation below provides information on how to connect [!DNL Shopify] to Experience Platform using APIs or the user interface:

## Connect [!DNL Shopify] to Experience Platform using APIs

- [Create a Shopify base connection using the Flow Service API](../../tutorials/api/create/ecommerce/shopify.md)
- [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
- [Create a dataflow for an eCommerce source using the Flow Service API](../../tutorials/api/collect/ecommerce.md)

## Connect [!DNL Shopify] to Experience Platform using the UI

- [Create a Shopify source connection in the UI](../../tutorials/ui/create/ecommerce/shopify.md)
- [Create a dataflow for an eCommerce source connection in the UI](../../tutorials/ui/dataflow/ecommerce.md)

## Limitations

The following columns are not supported in **Table** mode:

- `amountSpent`
- `totalPriceSet`
- `lineItems.quantity`
- `lineItems.name`
- `lineItems.sku`
- `transactions.formattedGateway`
- `variants.sku`

You must use **Query** mode in order to support these columns.

### Customers

View the following for examples of queries for the Customers table.

>[!BEGINTABS]

>[!TAB Basic Query]

```graphql
query customers {
  customers(first: 10) {
    edges {
      node {
        id
        firstName
        lastName
        defaultEmailAddress {
          emailAddress
          marketingState
        }
        defaultPhoneNumber {
          marketingState
        }
        amountSpent {
          amount
          currencyCode
        }
        numberOfOrders
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
```

>[!TAB With filters]

```graphql
query customers {
  customers(first: 250, query: "first_name:John* AND orders_count:>3") {
    edges {
      node {
        id
        firstName
        lastName
        defaultEmailAddress {
          emailAddress
          marketingState
        }
        defaultPhoneNumber {
          marketingState
        }
        amountSpent {
          amount
          currencyCode
        }
        numberOfOrders
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
```

>[!ENDTABS]

### Orders

View the following for an example query for the Orders table.

#### Basic query

```graphql
query orders {
  orders(first: 250) {
    edges {
      node {
        name
        email
        displayFinancialStatus
        totalPriceSet {
          presentmentMoney {
            amount
            currencyCode
          }
          shopMoney {
            amount
            currencyCode
          }
        }
        discountCode
        createdAt
        billingAddress {
          address1
          address2
          city
          zip
          province
          countryCodeV2
        }
        shippingAddress {
          address1
          address2
          zip
          province
          countryCodeV2
        }
        transactions {
          formattedGateway
        }
        lineItems(first: 250) {
          edges {
            node {
              quantity
              name
              sku
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
```

### Products

View the following for examples of queries for the Products table.

>[!BEGINTABS]

>[!TAB Basic Query]

```graphql
query products {
  products(first: 250) {
    edges {
      node {
        title
        createdAt
        variants(first: 250) {
          edges {
            node {
              sku
            }
          }
        }
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

>[!TAB With filters]

```graphql
query products {
  products(
    first: 250
    query: "created_at:>='2025-07-07T00:00:00Z' created_at:<='2025-07-31T23:59:59Z'"
  ) {
    edges {
      node {
        title
        createdAt
        variants(first: 250) {
          edges {
            node {
              sku
            }
          }
        }
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

>[!ENDTABS]

### Filter support

Filters are supported in queries. Use filters on any fields to s

### Pagination support

Pagination is only supported on the top-level resource you query (the "outer" table). For example, if you request products and include variants for each product, products are considered the outer table and variants are nested within them. You can include as many nested tables as required in your query, but only the outer table—such as products in this case—supports pagination.

[!DNL Shopify] limits the number of items returned per page to 250. This means that for any requested table or nested table, you can retrieve up to 250 records in a single query. If there are more than 250 items in the outer table, you can use pagination to fetch additional pages of results for that table.

Currently, pagination is not supported for nested tables. However, this rarely poses an issue. Nested tables (for example, product variants in a products query) typically contain fewer than 250 records for each outer table entry. In practice, if you filter and structure your queries appropriately, the lack of pagination on nested data should not be a limitation.

When constructing your queries, think of the relationship between outer and nested tables as similar to an inner join in SQL: for each item in the outer table, any related nested data is included up to the maximum page size.

If you anticipate nested tables might occasionally exceed this limit, consider filtering or restructuring your queries to manage the data volume.
