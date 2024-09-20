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

In these situations, you can calculate some basic information ahead of time for specific categories. However, when you need to analyze data across different categories and times, you have two options: redo the calculations from scratch or use a hypercube in EQS. Hypercubes let you combine and organize data efficiently, allowing you to slice and analyze it in multiple ways without reprocessing everything. They use special functions to estimate final results quickly and accurately. Hypercubes provide significant benefits for complex analytical tasks. These benefits include enhancing data processing efficiency, scalability, and flexibility. 

- **Size Efficiency**: Query Service compresses millions or billions of data points into compact sketches, significantly reducing data size for query processing while maintaining scalability.
- **Mergeability**: Sketches are mergeable across dimensions and partitions, allowing you to union data without recalculating, thus boosting performance and simplifying the overall system design.
- **Cost-Effective**: By reducing the need for reprocessing historical raw data, Query Service saves on compute resources, making real-time and interactive queries more feasible and cost-effective.


<!--  -->

## Functions Overview

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

![Infographic showing the creation of sketches using Query Service. The diagram illustrates how ExperienceEvents with Commerce, Product Info, and Web dimensions are processed into sketches, which are then used to approximate unique counts.](../../images/data-distiller/hypercube-overview.png)

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

![Diagram showing multiple sketches from ExperienceEvents being merged into a single sketch to create approximate unique counts across various dimensions.](../../images/data-distiller/merge-sketches.png)

## Enhancements and Future Capabilities

Future updates to Query Service will include the ability to update sketches, which will allow for handling missed runs or late-arriving data. This feature will provide even more flexibility and efficiency in managing large-scale data.

## Conclusion

By using hypercubes and the associated sketch functions in Experience Query Service, you can achieve highly efficient data processing for complex, multi-dimensional analyses without the heavy burden of reprocessing historical data. This approach saves time, reduces costs, and provides the flexibility needed for real-time, interactive queries, making it an essential tool for big data analysis in Adobe Experience Platform.

Next, explore further documentation to deepen your understanding of how to utilize these functions effectively for your specific data needs.


