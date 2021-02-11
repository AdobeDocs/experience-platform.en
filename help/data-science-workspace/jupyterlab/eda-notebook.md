---
keywords: Experience Platform;JupyterLab;notebooks;Data Science Workspace;popular topics;analyze data notebooks;eda;exploratory data analysis;data science
solution: Experience Platform
title: Exploratory Data Analysis (EDA) Notebook
topic: overview
type: Tutorial
description: This guide focuses on how to use the exploratory data analysis (EDA) Notebook to discover patterns in web data, aggregate events with a prediction goal, clean aggregated data, and understand the relationship between predictors and a goal.
---

# Exploring web based data for predictive models using the exploratory data analysis (EDA) notebook

The exploratory data analysis (EDA) notebook is designed to assist you with discovering patterns in data, checking data sanity, and summarizing the relevant data for predictive models.

The EDA notebook example was optimized with web-based data in mind and consists of two parts. Part one starts with using Query Service to view trends and data snapshots. Next, with a goal in mind for exploratory data analysis, the data is aggregated at the profile and visitor level. Part two starts by performing descriptive analysis on aggregated data using Python libraries. This notebook showcases visualizations such as histograms, scatter plots, boxplots, and a correlation matrix to derive actionable insights used to determine which features are most likely to be helpful in predicting a goal.

## Getting started

Before reading this guide, please review the [[!DNL JupyterLab] user guide](./overview.md) for a high-level introduction to [!DNL JupyterLab] and its role within Data Science Workspace. Additionally, if you are using your own data, please review the [data access in [!DNL Jupyterlab] notebooks](./access-notebook-data.md) documentation. This guide contains important information on notebook data limits.

This notebook uses a midvalues dataset in the form of Adobe Analytics Experience Events data found in the Analytics Analysis Workspace. In order to use the EDA notebook, you are required to define your data table with the following values `target_table` and `target_table_id`. Any midvalues dataset can be used.

## Data discovery

This section contains configuration steps and example queries used to view trends such as the "top ten cities by user activity" or "top ten viewed products".

### Configuration of libraries

JupyterLab supports multiple libraries. The following code can be pasted and run in a code cell to collect and install all the required packages used in this example. You can use additional or alternative packages outside of this example for your own data analysis. For a list of the supported packages, copy and paste `!pip list --format=columns` in a new cell.

```python
!pip install colorama
import chart_studio.plotly as py
import plotly.graph_objs as go
from plotly.offline import iplot
from scipy import stats
import numpy as np
import warnings
warnings.filterwarnings('ignore')
from scipy.stats import pearsonr
import matplotlib.pyplot as plt
from scipy.stats import pearsonr
import pandas as pd
import math
import re
import seaborn as sns
from datetime import datetime
import colorama
from colorama import Fore, Style
pd.set_option('display.max_columns', None)
pd.set_option('display.max_rows', None)
pd.set_option('display.width', 1000)
pd.set_option('display.expand_frame_repr', False)
pd.set_option('display.max_colwidth', -1)
```

### Connect to Adobe Experience Platform Query Service

[!DNL JupyterLab] on Platform allows you to use SQL in a [!DNL Python] notebook to access data through [Query Service](https://www.adobe.com/go/query-service-home-en). Accessing data through [!DNL Query Service] can be useful for dealing with large datasets due to its superior running times. Be advised that querying data using [!DNL Query Service] has a processing time limit of ten minutes.

Before you use [!DNL Query Service] in [!DNL JupyterLab], ensure you have a working understanding of the [[!DNL Query Service] SQL syntax](https://www.adobe.com/go/query-service-sql-syntax-en).

In order to utilize Query Service in JupyterLab, you must first create a connection between your working Python notebook and Query Service. This can be achieved by executing the following cell.

```python
qs_connect()
```

### Define the midvalues dataset for exploration

In order to begin querying and exploring data, a midvalues dataset table must be supplied. Copy and replace the `table_name` and `table_id` values with your own data table values.

<!-- how do we find the table name and table id? -->

```python
target_table = "table_name"
target_table_id = "table_id"
```

once complete this cell should look similar to the following example:

```python
target_table = "cross_industry_demo_midvalues"
target_table_id = "5f7c40ef488de5194ba0157a"
```

### Explore the dataset for available dates

Using the cell provided below, you are able to view the date range covered in the table. The purpose of exploring the number of days, first date, and last date data is to assist with selecting a date range for further in depth analysis.

```python
%%read_sql -c QS_CONNECTION
SELECT distinct Year(timestamp) as Year, Month(timestamp) as Month, count(distinct DAY(timestamp)) as Count_days, min(DAY(timestamp)) as First_date, max(DAY(timestamp)) as Last_date, count(timestamp) as Count_hits
from {target_table}
group by Month(timestamp), Year(timestamp)
order by Year, Month;
```

Running the cell produces the following output:

![query date output]()

### Configure dates for dataset discovery

After determining the available dates for dataset discovery, the parameters below need to be updated. The dates configured in this cell are only used for data discovery in the form of queries. The dates will be updated to suitable ranges for exploratory data analysis later in this guide.

```python
target_year = "2020" ## The target year
target_month = "02" ## The target month
target_day = "(01,02,03)" ## The target days
```

### Dataset discovery

Once you have configured all your parameters, started query service, and have a date range, you are ready to begin reading rows of data. It is suggested that you limit the number of rows.

```python
from platform_sdk.dataset_reader import DatasetReader
from datetime import date
dataset_reader = DatasetReader(PLATFORM_SDK_CLIENT_CONTEXT, dataset_id=target_table_id)
# If you do not see any data or would like to expand the default date range, change the following query
Table = dataset_reader.limit(5).read()
```

To view the number of columns available in the dataset use the following cell:

```python
print("\nNumber of columns:",len(Table.columns))
```

To view the rows of the dataset, use the following cell. In this example the number of rows are limited to five.

```python
Table.head(5)
```

![table row output]()

Once you have an idea of what data is contained in the dataset, it can be valuable to further breakdown the dataset. In this example, the column names and data types for each of the columns are listed. In this example, the output is used to check if the data type is correct or not. You may create only a few breakdowns or a dozen depending on the data and what you are trying to understand from it.

```python
ColumnNames_Types = pd.DataFrame(Table.dtypes)
ColumnNames_Types = ColumnNames_Types.reset_index()
ColumnNames_Types.columns = ["Column_Name", "Data_Type"]
ColumnNames_Types
```

![column name and data types list]()

### Dataset trend exploration

The following section contains four example queries used to explore trends and patterns in data. The examples provided below are not exhaustive but cover some of the more commonly looked at features.

**Hourly activity count for a given day**

This query analyzes the number of actions and clicks throughout the day. The output is represented in the form of a table containing metrics on the activity count for each hour of the day.

```sql
%%read_sql query_2_df -c QS_CONNECTION

SELECT Substring(timestamp, 12, 2)                        AS Hour, 
       Count(enduserids._experience.aaid.id) AS Count 
FROM   {target_table}
WHERE  Year(timestamp) = {target_year} 
       AND Month(timestamp) = {target_month}  
       AND Day(timestamp) in {target_day}
GROUP  BY Hour
ORDER  BY Hour;
```

![query 1 output]()

After confirming the query works, the data can presented in a univariate plot histogram for visual clarity.

```python
trace = go.Bar(
    x = query_2_df['Hour'],
    y = query_2_df['Count'],
    name = "Activity Count"
)

layout = go.Layout(
    title = 'Activity Count by Hour of Day',
    width = 1200,
    height = 600,
    xaxis = dict(title = 'Hour of Day'),
    yaxis = dict(title = 'Count')
)

fig = go.Figure(data = [trace], layout = layout)
iplot(fig)
```

![bar graph output for query 1]()

**Top 10 viewed pages for a given day**

This query analyzes which pages are the most viewed for a given day. The output is represented in the form of a table containing metrics on the page name and page view count.

```sql
%%read_sql query_4_df -c QS_CONNECTION

SELECT web.webpagedetails.name                 AS Page_Name, 
       Sum(web.webpagedetails.pageviews.value) AS Page_Views 
FROM   {target_table}
WHERE  Year(timestamp) = {target_year}
       AND Month(timestamp) = {target_month}
       AND Day(timestamp) in {target_day}
GROUP  BY web.webpagedetails.name 
ORDER  BY page_views DESC 
LIMIT  10;
```

After confirming the query works, the data can presented in a univariate plot histogram for visual clarity.

```python
trace = go.Bar(
    x = query_4_df['Page_Name'],
    y = query_4_df['Page_Views'],
    name = "Page Views"
)

layout = go.Layout(
    title = 'Top Ten Viewed Pages For a Given Day',
    width = 1000,
    height = 600,
    xaxis = dict(title = 'Page_Name'),
    yaxis = dict(title = 'Page_Views')
)

fig = go.Figure(data = [trace], layout = layout)
iplot(fig)
```

![top ten viewed pages]()

**Top ten cities grouped by user activity**

This query analyzes which cities the data is originating from.

```sql
%%read_sql query_6_df -c QS_CONNECTION

SELECT concat(placeContext.geo.stateProvince, ' - ', placeContext.geo.city) AS state_city, 
       Count(timestamp)                                                     AS Count
FROM   {target_table}
WHERE  Year(timestamp) = {target_year}
       AND Month(timestamp) = {target_month}
       AND Day(timestamp) in {target_day}
GROUP  BY state_city
ORDER  BY Count DESC
LIMIT  10;
```

After confirming the query works, the data can presented in a univariate plot histogram for visual clarity.

```python
trace = go.Bar(
    x = query_6_df['state_city'],
    y = query_6_df['Count'],
    name = "Activity by City"
)

layout = go.Layout(
    title = 'Top Ten Cities by User Activity',
    width = 1200,
    height = 600,
    xaxis = dict(title = 'City'),
    yaxis = dict(title = 'Count')
)

fig = go.Figure(data = [trace], layout = layout)
iplot(fig)
```

![top ten cities]()

**Top ten viewed products**

This query provides a list of the top ten viewed products. In the example below, the `Explode()` function is used to return each product in the `productlistitems` object to its own row. This allows you to do a nested query to aggregate product views for different SKU's.

```sql
%%read_sql query_7_df -c QS_CONNECTION

SELECT Product_List_Items.sku AS Product_SKU,
       Sum(Product_Views) AS Total_Product_Views
FROM  (SELECT Explode(productlistitems) AS Product_List_Items, 
              commerce.productviews.value   AS Product_Views 
       FROM   {target_table}
       WHERE  Year(timestamp) = {target_year}
              AND Month(timestamp) = {target_month}
              AND Day(timestamp) in {target_day}
              AND commerce.productviews.value IS NOT NULL) 
GROUP BY Product_SKU 
ORDER BY Total_Product_Views DESC
LIMIT  10;
```

After confirming the query works, the data can presented in a univariate plot histogram for visual clarity.

```python
trace = go.Bar(
    x = "SKU-" + query_7_df['Product_SKU'],
    y = query_7_df['Total_Product_Views'],
    name = "Product View"
)

layout = go.Layout(
    title = 'Top Ten Viewed Products',
    width = 1200,
    height = 600,
    xaxis = dict(title = 'SKU'),
    yaxis = dict(title = 'Product View Count')
)

fig = go.Figure(data = [trace], layout = layout)
iplot(fig)
```

![top ten product views]()

After exploring the trends and patterns of the data, you should have a good idea as to what features you want to build for a prediction of a goal. Skimming through tables can quickly highlight the form of each data attribute, obvious misrepresentations, and large outliers in the values and start to suggest candidate relationships to explore between attributes.

## Exploratory data analysis

