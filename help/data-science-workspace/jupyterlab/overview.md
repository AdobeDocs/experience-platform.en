---
keywords: Experience Platform;JupyterLab;notebooks;Data Science Workspace;popular topics
solution: Experience Platform
title: JupyterLab user guide
topic: Overview
---

# JupyterLab user guide

JupyterLab is a web-based user interface for <a href="https://jupyter.org/" target="_blank">Project Jupyter</a> and is tightly integrated into Adobe Experience Platform. It provides an interactive development environment for data scientists to work with Jupyter notebooks, code, and data.

This document provides an overview of JupyterLab and its features as well as instructions to perform common actions:
*   [JupyterLab on Adobe Experience Platform](#jupyterlab-on-adobe-experience-platform)
*   [Integration with other Platform services](#integration-with-other-platform-services)
*   [Key features and common operations](#key-features-and-common-operations)
    *   [Access JupyterLab](#access-jupyterlab)
    *   [JupyterLab interface](#jupyterlab-interface)
    *   [Code cells](#code-cells)
    *   [Kernels](#kernels)
    *   [Kernel sessions](#kernel-sessions)
    *   [PySpark/Spark execution resource](#pysparkspark-execution-resource)
    *   [Launcher](#launcher)
*   [Access Platform data using Notebooks](#access-platform-data-using-notebooks)
    *   [Read from a dataset in Python/R](#read-from-a-dataset-in-pythonr)
    *   [Read from a dataset in PySpark/Spark](#read-from-a-dataset-in-pysparkspark)
    *   [Query data using Query Service in Python](#query-data-using-query-service-in-python)
    *   [Filter ExperienceEvent data in Python/R](#filter-experienceevent-data-in-pythonr)
    *   [Filter ExperienceEvent data in PySPark/Spark](#filter-experienceevent-data-in-pysparkspark)

The appendix to this document includes additional useful resources related to JupyterLab:

*   [Supported libraries](#supported-libraries)
*   [Optional SQL flags for Query Service](#optional-sql-flags-for-query-service)

## JupyterLab on Adobe Experience Platform

Experience Platform's JupyterLab integration is accompanied with architectural changes, design considerations, customized notebook extensions, pre-installed libraries, and an Adobe themed interface.

The following list outlines some of the features that are unique to JupyterLab on Platform:

*   **Kernels**
    *   Kernels provide notebook and other JupyterLab front-ends the ability to execute and introspect code in different programming languages. Experience Platform provides additional kernels to support development in Python, R, PySpark, and Spark. See the [kernels](#kernels) section for more details.
*   **Data access**
    *   Access existing datasets directly from within JupyterLab with full support for read and write capabilities.
*   **Platform service integration**
    *   Built-in integrations allows you to utilize other Platform services directly from within JupyterLab. A complete list of supported integrations is provided in the section on [Integration with other Platform services](#integration-with-other-platform-services).
*   **Authentication**
    *   In addition to <a href="https://jupyter-notebook.readthedocs.io/en/latest/security.html" target="_blank">JupyterLab's built-in security model</a>, every interaction between your application and Experience Platform, including Platform service-to-service communication is encrypted and authenticated through the <a href="https://www.adobe.io/authentication/auth-methods.html" target="_blank">Adobe Identity Management System (IMS)</a>.
*   **Development libraries**
    *   In Experience Platform, JupyterLab provides pre-installed libraries for Python, R, and PySpark. See the [appendix](#supported-libraries) for a complete list of supported libraries.
*   **Library controller**
    *   When the the pre-installed libraries are lacking for your needs, additional libraries can be installed for Python and R, and are temporarily stored in isolated containers to maintain the integrity of Platform and keep your data safe. See the [kernels](#kernels) section for more details.
        >[!NOTE] Additional libraries are only available for the session in which they were installed. You must reinstall any additional libraries you require when starting new sessions.

## Integration with other Platform services

Standardization and interoperability are key concepts behind Experience Platform. The integration of JupyterLab on Platform as an embedded IDE allows it to interact with other Platform services, enabling you to utilize Platform to its full potential. The following Platform services are available in JupyterLab:

*   **Data Catalog:** Access and explore datasets with read and write functionalities.
*   **Query Service:** Access and explore datasets using SQL, providing lower data access overheads when dealing with large amounts of data.
*   **Sensei ML Framework:** Model development with the ability to train and score data, as well as recipe creation with a single click.

>[!NOTE] Some Platform service integrations on JupyterLab are limited to specific kernels. Refer to the section on [kernels](#kernels) for more details.

## Key features and common operations

Information regarding key features of JupyterLab and instructions on performing common operations are provided in the sections below:

*  [Access JupyterLab](#access-jupyterlab)
*  [JupyterLab interface](#jupyterlab-interface)
*  [Code cells](#code-cells)
*  [Kernels](#kernels)
*  [Kernel sessions](#kernel-sessions)
*  [PySpark/Spark execution resource](#pysparkspark-execution-resource)
*  [Launcher](#launcher)

### Access JupyterLab

In <a href="https://platform.adobe.com" target="_blank">Adobe Experience Platform</a>, click **Models** from the left navigation column, then click **Notebooks** found in the top navigation to access JupyterLab. Allow some time for JupyterLab to fully initialize.

![](../images/jupyterlab/user-guide/access_jupyterlab.png)

### JupyterLab interface

The JupyterLab interface consists of a menu bar, a collapsible left sidebar, and the main work area containing tabs of documents and activities.

**Menu bar**

The menu bar at the top of the interface has top-level menus that expose actions available in JupyterLab with their keyboard shortcuts:

*   **File:** Actions related to files and directories
*   **Edit:** Actions related to editing documents and other activities
*   **View:** Actions that alter the appearance of JupyterLab
*   **Run:** Actions for running code in different activities such as notebooks and code consoles
*   **Kernel:** Actions for managing kernels
*   **Tabs:** A list of open documents and activities
*   **Settings:** Common settings and an advanced settings editor
*   **Help:** A list of JupyterLab and kernel help links

**Left sidebar**

The left sidebar contains clickable tabs that provides access to the following features:

*   **File browser:** A list of saved notebook documents and directories
*   **Data explorer:** Browse, access, and explore datasets and schemas
*   **Running kernels and terminals:** A list of active kernel and terminal sessions with the ability to terminate
*   **Commands:** A list of useful commands
*   **Cell inspector:** A cell editor that provides access to tools and metadata useful for setting up a notebook for presentation purposes
*   **tabs:** A list of open tabs

Click on a tab to expose its features, or click on an expanded tab to collapse the left sidebar as demonstrated below:

![](../images/jupyterlab/user-guide/left_sidebar_collapse.gif)

**Main work area**

The main work area in JupyterLab enables you to arrange documents and other activities into panels of tabs that can be resized or subdivided. Drag a tab to the center of a tab panel to migrate the tab. Divide a panel by dragging a tab to the left, right, top, or bottom of the panel:

![](../images/jupyterlab/user-guide/main_work_area.gif)

### Code cells

Code cells are the primary content of notebooks. They contain source code in the language of the notebook's associated kernel and the output as a result of executing the code cell. An execution count is displayed to the right of every code cell which represents its order of execution.

![](../images/jupyterlab/user-guide/code_cell.png)

Common cell actions are described below:

*   **Add a cell:** Click the plus symbol (**+**) from the notebook menu to add an empty cell. New cells are placed under the cell that is currently being interacted with, or at the end of the notebook if no particular cell is in focus.

*   **Move a cell:** Place your cursor to the right of the cell you wish to move, then click and drag the cell to a new location. Additionally, moving a cell from one notebook to another replicates the cell along with its contents.

*   **Execute a cell:** Click on the body of the cell you wish to execute and then click the **play** icon (**▶**) from the notebook menu. An asterisk (**\***) is displayed in the cell's execution counter when the kernel is processing the execution, and is replaced with an integer upon completion.

*   **Delete a cell:** Click on the body of the cell you wish to delete and then click the **scissor** icon.

### Kernels

<!-- will need to edit this sparkmagic %% for data bricks not supported -->

Notebook kernels are the language-specific computing engines for processing notebook cells. In addition to Python, JupyterLab provides additional language support in R, PySpark, and Spark. When you open a notebook document, the associated kernel is launched. When a notebook cell is executed, the kernel performs the computation and produces results which may consume significant CPU and memory resources. Note that allocated memory is not freed until the kernel is shut-down.

>[!NOTE] PySpark and Spark functionalities are supported by <a href="https://github.com/jupyter-incubator/sparkmagic" target="_blank">Sparkmagic</a>.

Certain features and functionalities are limited to particular kernels as described in the table below:

| Kernel | Library installation support | Platform integrations |
| :----: | :--------------------------: | :-------------------- |
| **Python** | yes | <ul><li>Sensei ML Framework</li><li>Data Catalog</li><li>Query Service</li></ul> |
| **R** | yes | <ul><li>Sensei ML Framework</li><li>Data Catalog</li></ul> |
| **PySpark** | no | <ul><li>Sensei ML Framework</li><li>Data Catalog</li></ul> |
| **Spark** | no | <ul><li>Sensei ML Framework</li><li>Data Catalog</li></ul> |

### Kernel sessions

Each active notebook or activity on JupyterLab utilizes a kernel session. All active sessions can be found by expanding the **Running terminals and kernels** tab from the left sidebar. The type and state of the kernel for a notebook can be identified by observing the top right of the notebook interface. In the diagram below, the notebook's associated kernel is **Python 3** and the its current state is represented by a grey circle to the right. A hollow circle implies an idling kernel and a solid circle implies a busy kernel.

![](../images/jupyterlab/user-guide/kernel_and_state_1.png)

If the kernel is shut-down or inactive for a prolonged period, then **No Kernel!** with a solid circle is shown. Activate a kernel by clicking the kernel status and selecting the appropriate kernel type as demonstrated below:

![](../images/jupyterlab/user-guide/switch_kernel.gif)

### PySpark/Spark execution resource

<!-- need to update with databricks -->

PySpark and Spark kernels allows you to configure Spark cluster resources within your PySpark or Spark notebook by using the configure command (`%%configure`) and providing a list of configurations. Ideally, these configurations are defined before the Spark application is initialized. Modifying the configurations while the Spark application is active requires an additional force flag after the command (`%%configure -f`) which will restart the application in order for the changes to be applied, as shown below:

```python
%%configure -f 
{
    "numExecutors": 10,
    "executorMemory": "8G",
    "executorCores":4,
    "driverMemory":"2G",
    "driverCores":2,
    "conf": {
        "spark.cores.max": "40"
    }
}
```

>[!TIP] Use the help command (`%%help`) to view all commands available.

All configurable properties are listed in the table below:

| Property | Description | Type |
| :------- | :---------- | :-----:|
| kind | The session kind (required) | `session kind`_ |
| proxyUser | The user to impersonate that will run this session (For example bob) | string |
| jars | Files to be placed on the java `classpath` | list of paths |
| pyFiles | Files to be placed on the `PYTHONPATH` | list of paths |
| files | Files to be placed in executor working directory | list of paths |
| driverMemory | Memory for driver in megabytes or gigabytes (For example 1000M, 2G) | string |
| driverCores | Number of cores used by driver (YARN mode only) | int |
| executorMemory | Memory for executor in megabytes or gigabytes (For example 1000M, 2G) | string |
| executorCores | Number of cores used by executor | int |
| numExecutors | Number of executors (YARN mode only) | int |
| archives | Archives to be uncompressed in the executor working directory (YARN mode only) | list of paths |
| queue | The YARN queue to submit too (YARN mode only) | string |
| name | Name of the application | string |
| conf | Spark configuration property | Map of key=val |

### Launcher

[//]: # (Talk about the different Notebooks, introduce that certain starter notebooks are limited to particular kernels)

The customized *Launcher* provides you with useful notebook templates for their supported kernels to help you kickstart your task, including:

*   **Blank:** An empty notebook file.
*   **Starter:** A pre-filled notebook demonstrating data exploration using sample data.
*   **Retail Sales:** A pre-filled notebook featuring the <a href="https://adobe.ly/2wOgO3L" target="_blank">Retail Sales Recipe</a> using sample data.
*   **Recipe Builder:** A notebook template for creating a recipe in JupyterLab. It is pre-filled with code and commentary that demonstrates and describes the recipe creation process. Refer to the <a href="https://www.adobe.com/go/data-science-create-recipe-notebook-tutorial-en" target="_blank">notebook to recipe tutorial</a> for a detailed walkthrough.
*   **Query Service:** A pre-filled notebook demonstrating the usage of Query Service directly in JupyterLab with provided sample workflows that analyzes data at scale.
*   **XDM Events:** A pre-filled notebook demonstrating data exploration on postvalue Experience Event data, focusing on features common across the data structure.
*   **XDM Queries:** A pre-filled notebook demonstrating sample business queries on Experience Event data.
*   **Aggregation:** A pre-filled notebook demonstrating sample workflows to aggregate large amounts of data into smaller, manageable chunks.
*   **Clustering:** A pre-filled notebook demonstrating the end-to-end machine learning modeling process using clustering algorithms.

Some notebook templates are limited to certain kernels. Template availability for each kernel is mapped in the following table:

<table>
    <tr>
        <td></td>
        <th><strong>Blank</strong></th>
        <th><strong>Starter</strong></th>
        <th><strong>Retail Sales</strong></th>
        <th><strong>Recipe Builder</strong></th>
        <th><strong>Query Service</strong></th>
        <th><strong>XDM Events</strong></th>
        <th><strong>XDM Queries</strong></th>
        <th><strong>Aggregation</strong></th>
        <th><strong>Clustering</strong></th>
    </tr>
    <tr>
        <th><strong>Python</strong></th>
        <td >yes</td>
        <td >yes</td>
        <td >yes</td>
        <td >yes</td>
        <td >yes</td>
        <td >yes</td>
        <td >no</td>
        <td >no</td>
        <td >no</td>
    </tr>
    <tr>
        <th ><strong>R</strong></th>
        <td >yes</td>
        <td >yes</td>
        <td >yes</td>
        <td >no</td>
        <td >no</td>
        <td >no</td>
        <td >no</td>
        <td >no</td>
        <td >no</td>
    </tr>
    <tr>
        <th  ><strong>PySpark</strong></th>
        <td >yes</td>
        <td >yes</td>
        <td >no</td>
        <td >no</td>
        <td >no</td>
        <td >no</td>
        <td >yes</td>
        <td >yes</td>
        <td >no</td>
    </tr>
    <tr>
        <th ><strong>Spark</strong></th>
        <td >yes</td>
        <td >yes</td>
        <td >no</td>
        <td >no</td>
        <td >no</td>
        <td >no</td>
        <td >no</td>
        <td >no</td>
        <td >yes</td>
    </tr>
</table>

To open a new *Launcher*, click **File > New Launcher**. Alternatively, expand the **File browser** from the left sidebar and click the plus symbol (**+**):

![](../images/jupyterlab/user-guide/new_launcher.gif)

## Access Platform data using Notebooks

Each supported kernel provides built-in functionalities that allow you to read Platform data from a dataset within a notebook. However, support for paginating data is limited to Python and R notebooks.

### Read from a dataset in Python/R

Python and R notebooks allow you to paginate data when accessing datasets. Sample code to read data with and without pagination is demonstrated below.

[//]: # (In the following samples, the first step is currently required but once the SDK is complete, users are no longer required to explicitly define client_context)

**Read from a dataset in Python/R without pagination**

Executing the following code will read the entire dataset. If the execution is successful, then data will be saved as a Pandas dataframe referenced by the variable `df`.

```python
# Python

client_context = PLATFORM_SDK_CLIENT_CONTEXT
from platform_sdk.dataset_reader import DatasetReader
dataset_reader = DatasetReader(client_context, "{DATASET_ID}")
df = dataset_reader.read()
df.head()
```

```R
# R

library(reticulate)
use_python("/usr/local/bin/ipython")
psdk <- import("platform_sdk")
py_run_file("../.ipython/profile_default/startup/platform_sdk_context.py")
client_context <- py$PLATFORM_SDK_CLIENT_CONTEXT
DatasetReader <- psdk$dataset_reader$DatasetReader
dataset_reader <- DatasetReader(client_context, "{DATASET_ID}") 
df <- dataset_reader$read() 
df
```

*   `{DATASET_ID}`: The unique identity of the dataset to be accessed

**Read from a dataset in Python/R with pagination**

Executing the following code will read data from the specified dataset. Pagination is achieved by limiting and offsetting data through the functions `limit()` and `offset()` respectively. Limiting data refers to the maximum number of data points to be read, while offsetting refers to the number of data points to skip prior to reading data. If the read operation executes successfully, then data will be saved as a Pandas dataframe referenced by the variable `df`.

```python
# Python

client_context = PLATFORM_SDK_CLIENT_CONTEXT
from platform_sdk.dataset_reader import DatasetReader

dataset_reader = DatasetReader(client_context, "{DATASET_ID}")
df = dataset_reader.limit(100).offset(10).read()
```

```R
# R

library(reticulate)
use_python("/usr/local/bin/ipython")
psdk <- import("platform_sdk")
py_run_file("../.ipython/profile_default/startup/platform_sdk_context.py")
client_context <- py$PLATFORM_SDK_CLIENT_CONTEXT

DatasetReader <- psdk$dataset_reader$DatasetReader
dataset_reader <- DatasetReader(client_context, "{DATASET_ID}") 
df <- dataset_reader$limit(100L)$offset(10L)$read() 
```

*   `{DATASET_ID}`: The unique identity of the dataset to be accessed

### Read from a dataset in PySpark/Spark

With an an active PySpark or Spark notebook opened, expand the **Data Explorer** tab from the left sidebar and double click **Datasets** to view a list of available datasets. Right click on the dataset listing you wish to access and click **Explore Data in Notebook**. The following code cells are generated:

```python
# PySpark

pd0 = spark.read.format("com.adobe.platform.dataset").\
    option('orgId', "YOUR_IMS_ORG_ID@AdobeOrg").\
    load("{DATASET_ID}")
pd0.describe()
pd0.show(10, False)
```

```scala
// Spark

import com.adobe.platform.dataset.DataSetOptions
val dataFrame = spark.read.
    format("com.adobe.platform.dataset").
    option(DataSetOptions.orgId, "YOUR_IMS_ORG_ID@AdobeOrg").
    load("{DATASET_ID}")
dataFrame.printSchema()
dataFrame.show()
```

### Query data using Query Service in Python

JupyterLab on Platform allows you to use SQL in a Python notebook to access data through <a href="https://www.adobe.com/go/query-service-home-en" target="_blank">Adobe Experience Platform Query Service</a>. Accessing data through Query Service can be useful for dealing with large datasets due to its superior running times. Be advised that querying data using Query Service has a processing time limit of ten minutes.

Before you use Query Service in JupyterLab, ensure you have a working understanding of the <a href="https://www.adobe.com/go/query-service-sql-syntax-en" target="_blank">Query Service SQL syntax</a>.

Querying data using Query Service requires you to provide the name of the target dataset. You can generate the necessary code cells by finding the desired dataset using the **Data explorer**. Right click on the dataset listing and click **Query Data in Notebook** to generate the following two code cells in your notebook:

<ol>
<li>

In order to utilize Query Service in JupyterLab, you must first create a connection between your working Python notebook and Query Service. This can be achieved by executing the first generated cell.

```python
qs_connect()
```

</li>
<li>

In the second generated cell, the first line must be defined before the SQL query. By default, the generated cell defines an optional variable (`df0`) which saves the query results as a Pandas dataframe. <br>The `-c QS_CONNECTION` argument is mandatory and tells the kernel to execute the SQL query against Query Service. See the [appendix](#optional-sql-flags-for-query-service) for a list of additional arguments.

```python
%%read_sql df0 -c QS_CONNECTION
SELECT *
FROM name_of_the_dataset
LIMIT 10
/* Querying table "name_of_the_dataset" (datasetId: {DATASET_ID})*/
```

</li>
</ol>

Python variables can be directly referenced within a SQL query by using string-formatted syntax and wrapping the variables in curly brackets (`{}`), as shown in the following example:

```python
table_name = 'name_of_the_dataset'
table_columns = ','.join(['col_1','col_2','col_3'])
```

```python
%%read_sql demo -c QS_CONNECTION
SELECT {table_columns}
FROM {table_name}
```

### Filter ExperienceEvent data in Python/R

In order to access and filter an ExperienceEvent dataset in a Python or R notebook, you must provide the ID of the dataset (`{DATASET_ID}`) along with the filter rules that define a specific time range using logical operators. When a time range is defined, any specified pagination is ignored and the entire dataset is considered. 

A list of filtering operators are described below: 

*   `eq()`: Equal to
*   `gt()`: Greater than
*   `ge()`: Greater than or equal to
*   `lt()`: Less than
*   `le()`: Less than or equal to
*   `And()`: Logical AND operator
*   `Or()`: Logical OR operator

The following cells filter an ExperienceEvent dataset to data existing exclusively between January 1, 2019 and the end of December 31, 2019.

```python
# Python

client_context = PLATFORM_SDK_CLIENT_CONTEXT
from platform_sdk.dataset_reader import DatasetReader

dataset_reader = DatasetReader(client_context, "{DATASET_ID}")
df = dataset_reader.\
    where(dataset_reader["timestamp"].gt("2019-01-01 00:00:00").\
    And(dataset_reader["timestamp"].lt("2019-12-31 23:59:59"))\
).read()
```

```R
# R

library(reticulate)
use_python("/usr/local/bin/ipython")
psdk <- import("platform_sdk")
py_run_file("../.ipython/profile_default/startup/platform_sdk_context.py")
client_context <- py$PLATFORM_SDK_CLIENT_CONTEXT

DatasetReader <- psdk$dataset_reader$DatasetReader
dataset_reader <- DatasetReader(client_context, "{DATASET_ID}") 
df <- dataset_reader$
    where(dataset_reader["timestamp"]$gt("2019-01-01 00:00:00")$
    And(dataset_reader["timestamp"]$lt("2019-12-31 23:59:59"))
)$read()
```

### Filter ExperienceEvent data in PySpark/Spark

Accessing and filtering an ExperienceEvent dataset in a PySpark or Spark notebook requires you to provide the dataset identity (`{DATASET_ID}`), your organization's IMS identity, and the filter rules defining a specific time range. A Filtering time range is defined by using the function `spark.sql()`, where the function parameter is a SQL query string.

The following cells filter an ExperienceEvent dataset to data existing exclusively between January 1, 2019 and the end of December 31, 2019.

```python
# PySpark

pd = spark.read.format("com.adobe.platform.dataset").\
    option("orgId", "YOUR_IMS_ORG_ID@AdobeOrg").\
    load("{DATASET_ID}")

pd.createOrReplaceTempView("event")
timepd = spark.sql("""
    SELECT *
    FROM event
    WHERE timestamp > CAST('2019-01-01 00:00:00.0' AS TIMESTAMP)
    AND timestamp < CAST('2019-12-31 23:59:59.9' AS TIMESTAMP)
""")
```

```scala
// Spark

import com.adobe.platform.dataset.DataSetOptions
val dataFrame = spark.read.
    format("com.adobe.platform.dataset").
    option(DataSetOptions.orgId, "YOUR_IMS_ORG_ID@AdobeOrg").
    load("{DATASET_ID}")

dataFrame.createOrReplaceTempView("event")
val timedf = spark.sql("""
    SELECT * 
    FROM event 
    WHERE timestamp > CAST('2019-01-01 00:00:00.0' AS TIMESTAMP)
    AND timestamp < CAST('2019-12-31 23:59:59.9' AS TIMESTAMP)
""")
```

## Optional SQL flags for Query Service

<table>
    <tr>
        <th ><strong> Flag </strong></th>
        <th ><strong> Description </strong></th>
    </tr>
    <tr>
        <td >
            <code> -h </code>, <code> --help </code>
        </td >
        <td >
            Show the help message and exit.
        </td >
    </tr>
    <tr>
        <td >
            <code> -n </code>, <code> --notify </code>
        </td >
        <td >
            Toggle option for notifying query results.
        </td>
    </tr>
    <tr>
        <td>
            <code> -a </code>, <code> --async </code>
        </td>
        <td >
            Using this flag executes the query asynchonously and can free up the kernel while the query is executing. Be cautious when assigning query results to variables as it may be undefined if the query is not complete.
        </td>
    </tr>
    <tr>
        <td >
            <code> -d </code>, <code> --display </code>
        </td>
        <td >
            Using this flag prevents results from being displayed.
        </td>
    </tr>
</table>