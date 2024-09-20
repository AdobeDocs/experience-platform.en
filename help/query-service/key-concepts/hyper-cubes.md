---
title: Efficient Big Data Analysis with Hypercubes in Experience Query Service
description: Learn how to use Hypercubes in Adobe Experience Platform's Experience Query Service to optimize big data analysis with approximate unique counting, reducing the need for full data reprocessing.
---

<!-- 
keywords: Experience Platform;query service;Query service;hyper cubes;
title: Hyper Cubes
description: Learn how to use Query Service to count unique events efficiently without reprocessing all historical data each time. Use sketches (small summaries of large data—that can be updated and merged), to make complex counting tasks faster and resource-efficient. This approach simplifies big data analysis by allowing incremental updates, reducing computation, and speeding up query responses.
 -->

# Efficient big data analysis with hypercubes

>[!AVAILABILITY]
>
>This functionality is only available to users who have purchased the [Data Distiller SKU](../data-distiller/overview.md).

Learn how to use hypercubes in Adobe Experience Platform's Experience Query Service to perform advanced data analysis with enhanced efficiency. This document covers how to use advanced functions from the [Apache Datasketches library](https://datasketches.apache.org/) to handle distinct counts and other complex calculations incrementally without reprocessing historical data each time.

In big data analysis, generating metrics such as distinct counts, quantiles, most-frequent items, joins, and graph analysis often involves non-additive counting (where results can't simply be summed up from subgroups). Traditional methods require reprocessing all historical data, which can be resource-intensive and time-consuming. Use sketches (compact probabilistic summaries of large data), and advanced Query Service functions to streamline this process by reducing the need for reprocessing.

## Key functions of hypercubes {#key-functions}

<!-- Is Key purposes a better title? -->

Hypercubes offer several powerful functions to enhance data analysis efficiency and flexibility. 

1. **Unique User or Count Distinct Queries**: Use SQL capabilities to generate unique counts of users interacting with various dimensions of data, such as product views, site visits, or commerce activity, without repeatedly reprocessing raw data.
2. **Incremental Processing**: Query Service supports incremental updates, allowing you to fold and merge data points across dimensions and time without recalculating everything from scratch.
3. **Multi-dimensional Analysis**: Hypercubes enable multi-dimensional slicing and dicing of data, creating summary rows that represent combinations of dimensions, which can be used to generate insights with minimal computation overhead.

## Use cases for hypercubes {#use-cases}

Use hypercubes to efficiently generate distinct counts for various user interactions without fully reprocessing data each time. The following are some practical scenarios for their use:

- Analyze unique visitors that view specific products during a defined time period.
- Identify users who interacted with multiple specified products during a defined time period, to aid in cross-sell analysis.
- Discover patterns in user preferences by distinguishing users who engaged with one product but not another over a set time period.
- Combine online and offline interaction data to get a comprehensive view of user behavior over a given period.
- Track user movement across different activities within an event to optimize layout and services.

## Benefits of using hypercubes

In these situations, you can pre-calculate basic information for specific categories. However, when analyzing data across multiple dimensions and time periods, you have to either recalculate everything from raw data or use a Query Service hypercube. Hypercubes streamline the process by organizing data efficiently which allows flexible slicing and multi-dimensional analysis without reprocessing. They use advanced functions to estimate results quickly and accurately to offer key benefits such as improved processing efficiency, scalability, and adaptability for complex analytical tasks.

### Data size efficiency for query processing

Query Service can compresses millions or billions of data points into a compact form called a sketch. This sketch has a significantly reducing data size for query processing which makes it much easier and faster to work with and maintains scalability. No matter how large the original data gets, the size of the sketch stays small, which makes analyzing big data much more manageable and efficient.

The diagram below illustrates how Commerce, Product Info, and Web dimension ExperienceEvents are processed into sketches, which are then used to approximate unique counts.

![Infographic showing the creation of sketches using Query Service. The diagram illustrates how ExperienceEvents with Commerce, Product Info, and Web dimensions are processed into sketches, which are then used to approximate unique counts.](../../images/data-distiller/hypercube-overview.png)

### Merge sketches to makes data analysis faster and easier

<!-- 
The ability to merge sketches allows you to efficiently combine data across dimensions and partitions without recalculating, simplifying data management and design while enhancing performance.
 -->

Sketches created using Query Service can be merged across different dimensions or partitions. This mergeability boosts performance and removes the need for recalculation.
To avoid recalculating and enhance processing speed, you can merge sketches from different categories or groups. Query Service also simplifies the design by organizing your data into a hypercube, where each row becomes a summary of its partition (a collection of dimensions) alongside the sketch column. Each row of the hyper-cube contains the dimension combination but does not have any raw data. When executing a query, you need to specify the dimensional columns you want to use for building additive metrics and then merge the sketches for those rows.

![The diagram shows multiple sketches from ExperienceEvents being merged into a single sketch to create approximate unique counts across various dimensions.](../../images/data-distiller/merge-sketches.png)

### Cost-effectiveness {#cost-effectiveness}

Customer data is often large-scale, but you can eliminate the need to reprocess historical data by using incremental processing. Sketches are much smaller and allow for faster, real-time results while saving on compute resources and costs. This data transformation makes interactive queries more feasible and efficient.

## Limitations

Currently, sketches cannot be updated once created. Future updates will introduce the capability to update sketches, allowing you to handle missed runs and late-arriving data more effectively.

## Functions Overview

This section outlines how each function optimizes data processing and enhances analytical capabilities through the efficient use of sketches and hypercubes. It details their purpose, example syntax, parameters, and expected output.

### Create unique count estimates with HLL sketches 

`hll_build_agg` is an aggregate function that creates an HLL (HyperLogLog) sketch. This is a compact, probabilistic method for estimating the number of unique values within a column or expression in a grouped dataset.

#### Function Definition

```sql
hll_build_agg(column [, lgConfigK])
```

**Usage:**

The following example demonstrates how the function can be structured within a query.

```sql
SELECT
   [dim1, dim2 ... ,] hll_build_agg(coalesce(col1, col2, col3)) AS sketch_col
FROM fact_sketch_table
  [GROUP BY dimension1, dimension2 ...]
```

#### Parameters

| Parameter   | Description                                                                                         |
|-------------|-----------------------------------------------------------------------------------------------------|
| `column`    | The column or column name on which to create a sketch.                                              |
| `lgConfigK` | *Int* (Optional) The log-base-2 of K, where K is the number of buckets or slots for the HLL Sketch. Min value: 4. Max value: 12. Default value: 12. |

#### Output

| Output Column   | Description                                                                                         |
|-----------------|-----------------------------------------------------------------------------------------------------|
| `sketch_res`    |  A column of type String containing the stringified HLL Sketch. |

#### SQL example

The following example builds an aggregate sketch on the `customer_id` column:

```sql
SELECT
  country,
  hll_build_agg(customer_id, 10) AS sketch
FROM
  EXPLODE(
    ARRAY<STRUCT<country STRING, customer_id STRING, invoice_id STRING>>[
      ('UA', 'customer_id_1', 'invoice_id_11'),
      ('CZ', 'customer_id_2', 'invoice_id_22'),
      ('CZ', 'customer_id_2', 'invoice_id_23'),
      ('BR', 'customer_id_3', 'invoice_id_31'),
      ('UA', 'customer_id_2', 'invoice_id_24')
    ])
GROUP BY country;
```

**SQL example output:**

| Country |                           Sketch                           |
|---------|------------------------------------------------------------|
| UA      | AgEHBAMAAgCR9mUEulKKCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==   |
| CZ      | AgEHBAMAAQC6UooJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==   |
| BR      | AgEHBAMAAQCcmH0HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==   |

<!-- ........................... -->

### Estimate distinct counts with HLL sketches

`hll_estimate` is a scalar function that provides an estimation of the distinct count within each row of a dataset. Unlike aggregate functions, `hll_estimate` operates row-wise and is used for estimating the distinct count from a sketch within individual rows. 

>[!NOTE]
>
>This cannot be used as an aggregated function. For aggregated counts, use `sketch_count`.

#### Function Definition

```sql
hll_estimate(sketch_col)
```

**Usage:**

```sql
SELECT
   [col1, col2 ... ,] hll_estimate(sketch_column) AS estimate
FROM fact_sketch_table
```

#### Parameters

| Parameter       | Description                                                                                      |
|-----------------|--------------------------------------------------------------------------------------------------|
| `sketch_column` | Column containing a stringified HLL Sketch. It estimates the distinct count for the sketch in each row. |

#### Output

| Output Column   | Description                                                                                      |
|-----------------|--------------------------------------------------------------------------------------------------|
| `estimate`      | A column of type Double providing the estimation of the sketch, rounded to two decimal places.   |

#### SQL Example

The following example estimates the distinct count of customers by country using the `hll_estimate` function on an HLL sketch:

```sql
SELECT
  country,
  hll_estimate(hll_build_agg(customer_id, 10)) AS distinct_customers_by_country
FROM
  (
    SELECT
      country,
      hll_build_agg(customer_id, 10) AS sketch
    FROM 
      EXPLODE(
        ARRAY<STRUCT<country STRING, customer_id STRING, invoice_id STRING>>[
          ('UA', 'customer_id_1', 'invoice_id_11'),
          ('CZ', 'customer_id_2', 'invoice_id_22'),
          ('CZ', 'customer_id_2', 'invoice_id_23'),
          ('BR', 'customer_id_3', 'invoice_id_31'),
          ('UA', 'customer_id_2', 'invoice_id_24')
        ])
    GROUP BY country
  );
```

**SQL Example Output:**

| Country | distinct_customers_by_country |
|---------|-------------------------------|
| UA      | 2.00                          |
| CZ      | 1.00                          |
| BR      | 1.00                          |


<!-- ........................... -->

### hll_build_agg

**Purpose**: Creates an HLL Sketch for approximate distinct counting within a group.

**Function**:
```sql
hll_build_agg(column [, lgConfigK])
```

**Usage**:
```sql
SELECT 
    [dim1, dim2, ...], hll_build_agg(coalesce(col1, col2, col3)) AS sketch_col
FROM fact_sketch_table
[GROUP BY dimension1, dimension2 ...]
```

**Parameters**:
- `column`: The column or column name to create a sketch on.
- `lgConfigK`: Optional parameter that controls the number of buckets or slots for the HLL Sketch. Default value is `12`.

**Output**:
- A column with a stringified HLL Sketch.

**SQL Example**:
```sql
SELECT 
    country, 
    hll_build_agg(customer_id) AS sketch
FROM 
    EXPLODE(ARRAY<STRUCT<country STRING, customer_id STRING, invoice_id STRING>>[
        ('UA', 'customer_id_1', 'invoice_id_11'),
        ('CZ', 'customer_id_2', 'invoice_id_22'),
        ('CZ', 'customer_id_2', 'invoice_id_23'),
        ('BR', 'customer_id_3', 'invoice_id_31'),
        ('UA', 'customer_id_2', 'invoice_id_24')
    ])
GROUP BY country;
```



### hll_merge_agg

**Purpose**: Merges multiple sketches within a group to produce a new sketch as output.

**Function**:
```sql
hll_merge_agg(sketch_col [, allowDifferentLgConfigK])
```

**Usage**:
```sql
SELECT 
    [dim1, dim2, ...], hll_merge_agg(sketch_column.sketch) AS estimate
FROM fact_sketch_table
[GROUP BY dimension1, dimension2 ...]
```

**Parameters**:
- `sketch_column`: Column containing stringified HLL Sketch.
- `allowDifferentLgConfigK`: Boolean parameter that allows merging of sketches with different configurations if set to true.

**Output**:
- A stringified HLL Sketch representing the merged data.

**SQL Example**:
```sql
SELECT 
    hll_merge_agg(hll_sketch) AS uniq_customers_with_invoice
FROM 
    (
        SELECT 
            country, 
            hll_build_agg(customer_id) AS hll_sketch
        FROM 
            EXPLODE(ARRAY<STRUCT<country STRING, customer_id STRING, invoice_id STRING>>[
                ('UA', 'customer_id_1', 'invoice_id_11'),
                ('BR', 'customer_id_3', 'invoice_id_31'),
                ('CZ', 'customer_id_2', 'invoice_id_22'),
                ('BR', 'customer_id_3', 'invoice_id_31'),
                ('UA', 'customer_id_2', 'invoice_id_24')
            ])
        GROUP BY country
        UNION
        SELECT 
            country, 
            hll_build_agg(customer_id) AS hll_sketch
        FROM 
            EXPLODE(ARRAY<STRUCT<country STRING, customer_id STRING, invoice_id STRING>>[
                ('UA', 'customer_id_1', 'invoice_id_21'),
                ('MX', 'customer_id_3', 'invoice_id_31'),
                ('UA', 'customer_id_2', 'invoice_id_21')
            ])
        GROUP BY country
    )
GROUP BY customer_id;
```

## Enhancements and Future Capabilities

Future updates to Query Service will include the ability to update sketches, which will allow for handling missed runs or late-arriving data. This feature will provide even more flexibility and efficiency in managing large-scale data.

## Conclusion

By using hypercubes and the associated sketch functions in Experience Query Service, you can achieve highly efficient data processing for complex, multi-dimensional analyses without the heavy burden of reprocessing historical data. This approach saves time, reduces costs, and provides the flexibility needed for real-time, interactive queries, making it an essential tool for big data analysis in Adobe Experience Platform.

Next, explore further documentation to deepen your understanding of how to utilize these functions effectively for your specific data needs.


