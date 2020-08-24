---
keywords: Experience Platform;JupyterLab;notebooks;Data Science Workspace;popular topics;jupyterlab
solution: Experience Platform
title: JupyterLab user guide
topic: Overview
description: JupyterLab is a web-based user interface for Project Jupyter and is tightly integrated into Adobe Experience Platform. It provides an interactive development environment for data scientists to work with Jupyter notebooks, code, and data.
---

# [!DNL JupyterLab] user guide

[!DNL JupyterLab] is a web-based user interface for [Project Jupyter](https://jupyter.org/) and is tightly integrated into Adobe Experience Platform. It provides an interactive development environment for data scientists to work with Jupyter notebooks, code, and data.

This document provides an overview of [!DNL JupyterLab] and its features as well as instructions to perform common actions.

## [!DNL JupyterLab] on [!DNL Experience Platform]

Experience Platform's JupyterLab integration is accompanied with architectural changes, design considerations, customized notebook extensions, pre-installed libraries, and an Adobe-themed interface.

The following list outlines some of the features that are unique to JupyterLab on Platform:

| Feature | Description |
| --- | --- |
| **Kernels** | Kernels provide notebook and other [!DNL JupyterLab] front-ends the ability to execute and introspect code in different programming languages. [!DNL Experience Platform] provides additional kernels to support development in [!DNL Python], R, PySpark, and [!DNL Spark]. See the [kernels](#kernels) section for more details. |
| **Data access** | Access existing datasets directly from within [!DNL JupyterLab] with full support for read and write capabilities. |
| **[!DNL Platform] service integration** | Built-in integrations allows you to utilize other [!DNL Platform] services directly from within [!DNL JupyterLab]. A complete list of supported integrations is provided in the section on [Integration with other Platform services](#service-integration). |
| **Authentication** | In addition to <a href="https://jupyter-notebook.readthedocs.io/en/latest/security.html" target="_blank">JupyterLab's built-in security model</a>, every interaction between your application and Experience Platform, including Platform service-to-service communication is encrypted and authenticated through the <a href="https://www.adobe.io/authentication/auth-methods.html" target="_blank">[!DNL Adobe Identity Management System] (IMS)</a>. |
| **Development libraries** | In [!DNL Experience Platform], [!DNL JupyterLab] provides pre-installed libraries for [!DNL Python], R, and PySpark. See the [appendix](#supported-libraries) for a complete list of supported libraries. |
| **Library controller** | When the the pre-installed libraries are lacking for your needs, additional libraries can be installed for Python and R, and are temporarily stored in isolated containers to maintain the integrity of [!DNL Platform] and keep your data safe. See the [kernels](#kernels) section for more details. |

>[!NOTE]
>
>Additional libraries are only available for the session in which they were installed. You must reinstall any additional libraries you require when starting new sessions.

## Integration with other [!DNL Platform] services {#service-integration}

Standardization and interoperability are key concepts behind [!DNL Experience Platform]. The integration of [!DNL JupyterLab] on [!DNL Platform] as an embedded IDE allows it to interact with other [!DNL Platform] services, enabling you to utilize [!DNL Platform] to its full potential. The following [!DNL Platform] services are available in [!DNL JupyterLab]:

*   **[!DNL Catalog Service]:** Access and explore datasets with read and write functionalities.
*   **[!DNL Query Service]:** Access and explore datasets using SQL, providing lower data access overheads when dealing with large amounts of data.
*   **[!DNL Sensei ML Framework]:** Model development with the ability to train and score data, as well as recipe creation with a single click.
*   **[!DNL Experience Data Model (XDM)]:** Standardization and interoperability are key concepts behind Adobe Experience Platform. [Experience Data Model (XDM)](https://www.adobe.com/go/xdm-home-en), driven by Adobe, is an effort to standardize customer experience data and define schemas for customer experience management.

>[!NOTE]
>
>Some [!DNL Platform] service integrations on [!DNL JupyterLab] are limited to specific kernels. Refer to the section on [kernels](#kernels) for more details.

## Key features and common operations

Information regarding key features of [!DNL JupyterLab] and instructions on performing common operations are provided in the sections below:

*  [Access JupyterLab](#access-jupyterlab)
*  [JupyterLab interface](#jupyterlab-interface)
*  [Code cells](#code-cells)
*  [Kernels](#kernels)
*  [Kernel sessions](#kernel-sessions)
*  [PySpark/Spark execution resource](#execution-resource)
*  [Launcher](#launcher)

### Access [!DNL JupyterLab] {#access-jupyterlab}

In [Adobe Experience Platform](https://platform.adobe.com), select **Notebooks** from the left navigation column. Allow some time for [!DNL JupyterLab] to fully initialize.

![](../images/jupyterlab/user-guide/access_jupyterlab.png)

### [!DNL JupyterLab] interface {#jupyterlab-interface}

The [!DNL JupyterLab] interface consists of a menu bar, a collapsible left sidebar, and the main work area containing tabs of documents and activities.

**Menu bar**

The menu bar at the top of the interface has top-level menus that expose actions available in [!DNL JupyterLab] with their keyboard shortcuts:

*   **File:** Actions related to files and directories
*   **Edit:** Actions related to editing documents and other activities
*   **View:** Actions that alter the appearance of [!DNL JupyterLab]
*   **Run:** Actions for running code in different activities such as notebooks and code consoles
*   **Kernel:** Actions for managing kernels
*   **Tabs:** A list of open documents and activities
*   **Settings:** Common settings and an advanced settings editor
*   **Help:** A list of [!DNL JupyterLab] and kernel help links

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

The main work area in [!DNL JupyterLab] enables you to arrange documents and other activities into panels of tabs that can be resized or subdivided. Drag a tab to the center of a tab panel to migrate the tab. Divide a panel by dragging a tab to the left, right, top, or bottom of the panel:

![](../images/jupyterlab/user-guide/main_work_area.gif)

### Code cells {#code-cells}

Code cells are the primary content of notebooks. They contain source code in the language of the notebook's associated kernel and the output as a result of executing the code cell. An execution count is displayed to the right of every code cell which represents its order of execution.

![](../images/jupyterlab/user-guide/code_cell.png)

Common cell actions are described below:

*   **Add a cell:** Click the plus symbol (**+**) from the notebook menu to add an empty cell. New cells are placed under the cell that is currently being interacted with, or at the end of the notebook if no particular cell is in focus.

*   **Move a cell:** Place your cursor to the right of the cell you wish to move, then click and drag the cell to a new location. Additionally, moving a cell from one notebook to another replicates the cell along with its contents.

*   **Execute a cell:** Click on the body of the cell you wish to execute and then click the **play** icon (**▶**) from the notebook menu. An asterisk (**\***) is displayed in the cell's execution counter when the kernel is processing the execution, and is replaced with an integer upon completion.

*   **Delete a cell:** Click on the body of the cell you wish to delete and then click the **scissor** icon.

### Kernels {#kernels}

Notebook kernels are the language-specific computing engines for processing notebook cells. In addition to [!DNL Python], [!DNL JupyterLab] provides additional language support in R, PySpark, and [!DNL Spark] (Scala). When you open a notebook document, the associated kernel is launched. When a notebook cell is executed, the kernel performs the computation and produces results which may consume significant CPU and memory resources. Note that allocated memory is not freed until the kernel is shut-down.

Certain features and functionalities are limited to particular kernels as described in the table below:

| Kernel | Library installation support | [!DNL Platform] integrations |
| :----: | :--------------------------: | :-------------------- |
| **[!DNL Python]** | Yes | <ul><li>[!DNL Sensei ML Framework]</li><li>[!DNL Catalog Service]</li><li>[!DNL Query Service]</li></ul> |
| **R** | Yes | <ul><li>[!DNL Sensei ML Framework]</li><li>[!DNL Catalog Service]</li></ul> |
| **Scala** | No | <ul><li>[!DNL Sensei ML Framework]</li><li>[!DNL Catalog Service]</li></ul> |

### Kernel sessions {#kernel-sessions}

Each active notebook or activity on [!DNL JupyterLab] utilizes a kernel session. All active sessions can be found by expanding the **Running terminals and kernels** tab from the left sidebar. The type and state of the kernel for a notebook can be identified by observing the top right of the notebook interface. In the diagram below, the notebook's associated kernel is **[!DNL Python] 3** and the its current state is represented by a grey circle to the right. A hollow circle implies an idling kernel and a solid circle implies a busy kernel.

![](../images/jupyterlab/user-guide/kernel_and_state_1.png)

If the kernel is shut-down or inactive for a prolonged period, then **No Kernel!** with a solid circle is shown. Activate a kernel by clicking the kernel status and selecting the appropriate kernel type as demonstrated below:

![](../images/jupyterlab/user-guide/switch_kernel.gif)

### Launcher {#launcher}

[//]: # (Talk about the different Notebooks, introduce that certain starter notebooks are limited to particular kernels)

The customized *Launcher* provides you with useful notebook templates for their supported kernels to help you kickstart your task, including:

| Template | Description |
| --- | --- |
| Blank | An empty notebook file. |
| Starter | A pre-filled notebook demonstrating data exploration using sample data. |
| Retail Sales | A pre-filled notebook featuring the <a href="https://adobe.ly/2wOgO3L" target="_blank">Retail Sales Recipe</a> using sample data. |
| Recipe Builder | A notebook template for creating a recipe in [!DNL JupyterLab]. It is pre-filled with code and commentary that demonstrates and describes the recipe creation process. Refer to the <a href="https://www.adobe.com/go/data-science-create-recipe-notebook-tutorial-en" target="_blank">notebook to recipe tutorial</a> for a detailed walkthrough. |
| [!DNL Query Service] | A pre-filled notebook demonstrating the usage of [!DNL Query Service] directly in [!DNL JupyterLab] with provided sample workflows that analyzes data at scale. |
| XDM Events | A pre-filled notebook demonstrating data exploration on postvalue Experience Event data, focusing on features common across the data structure. |
| XDM Queries | A pre-filled notebook demonstrating sample business queries on Experience Event data. |
| Aggregation | A pre-filled notebook demonstrating sample workflows to aggregate large amounts of data into smaller, manageable chunks. |
| Clustering | A pre-filled notebook demonstrating the end-to-end machine learning modeling process using clustering algorithms. |

Some notebook templates are limited to certain kernels. Template availability for each kernel is mapped in the following table:

<table>
    <tr>
        <td></td>
        <th><strong>Blank</strong></th>
        <th><strong>Starter</strong></th>
        <th><strong>Retail Sales</strong></th>
        <th><strong>Recipe Builder</strong></th>
        <th><strong>[!DNL Query Service]</strong></th>
        <th><strong>XDM Events</strong></th>
        <th><strong>XDM Queries</strong></th>
        <th><strong>Aggregation</strong></th>
        <th><strong>Clustering</strong></th>
    </tr>
    <tr>
        <th><strong>[!DNL Python]</strong></th>
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
        <th  ><strong>PySpark 3 ([!DNL Spark] 2.4)</strong></th>
        <td >no</td>
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
        <th ><strong>Scala</strong></th>
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

### GPU and memory server configuration in [!DNL Python]/R

In [!DNL JupyterLab] select the gear icon in the top-right corner to open *Notebook server configuration*. You can toggle GPU on and allocate the amount of memory you need by using the slider. The amount of memory you can allocate depends on how much your organization has provisioned. Select **[!UICONTROL Update configs]** to save.

>[!NOTE]
>Only one GPU is provisioned per organization for Notebooks. If the GPU is in use, you need to wait for the user that has currently reserved the GPU to release it. This can be done by logging out or leaving the GPU in an idle state for four or more hours.

![](../images/jupyterlab/user-guide/notebook-gpu-config.png)

## Access [!DNL Platform] data using Notebooks

Each supported kernel provides built-in functionalities that allow you to read [!DNL Platform] data from a dataset within a notebook. However, support for paginating data is limited to [!DNL Python] and R notebooks.

### Notebook data limits

The following information defines the max amount of data that can be read, what type of data was used, and the estimated timeframe reading the data takes. For [!DNL Python] and R, a notebook server configured at 40GB RAM was used for the benchmarks. For PySpark and Scala, a databricks cluster configured at 64GB RAM, 8 cores, 2 DBU with a maximum of 4 workers was used for the benchmarks outlined below.

The ExperienceEvent schema data used varied in size starting from one thousand (1K) rows ranging up-to one billion (1B) rows. Note that for the PySpark and [!DNL Spark] metrics, a date span of 10 days was used for the XDM data.

The ad-hoc schema data was pre-processed using [!DNL Query Service] Create Table as Select (CTAS). This data also varied in size starting from one thousand (1K) rows ranging up-to one billion (1B) rows.

#### [!DNL Python] notebook data limits

**XDM ExperienceEvent schema:** You should be able to read a maximum of 2 million rows (~6.1 GB data on disk) of XDM data in less than 22 minutes. Adding additional rows may result in errors.

| Number of Rows          | 1K     | 10K    | 100K  | 1M    | 2M    |
| ----------------------- | ------ | ------ | ----- | ----- | ----- |
| Size on disk (MB)       | 18.73  | 187.5  | 308   | 3000  | 6050  |
| SDK (in seconds)        | 20.3   | 86.8   | 63    | 659   | 1315  | 

**ad-hoc schema:** You should be able to read a maximum of 5 million rows (~5.6 GB data on disk) of non-XDM (ad-hoc) data in less than 14 minutes. Adding additional rows may result in errors.

| Number of Rows          | 1K      | 10K     | 100K  | 1M    | 2M    | 3M    | 5M     |
| ----------------------- | ------- | ------- | ----- | ----- | ----- | ----- | ------ |
| Size on disk (in MB)    | 1.21    | 11.72   | 115   | 1120  | 2250  | 3380  | 5630   |
| SDK (in seconds)        | 7.27    | 9.04    | 27.3  | 180   | 346   | 487   | 819    |

#### R notebook data limits

**XDM ExperienceEvent schema:** You should be able to read a maximum of 1 million rows of XDM data (3GB data on disk) in under 13 minutes.

| Number of Rows          | 1K     | 10K    | 100K  | 1M    |
| ----------------------- | ------ | ------ | ----- | ----- |
| Size on disk (MB)       | 18.73  | 187.5  | 308   | 3000  |
| R Kernel  (in seconds)  | 14.03  | 69.6   | 86.8  | 775   |

**ad-hoc schema:** You should be able to read a maximum of 3 million rows of ad-hoc data (293MB data on disk) in around 10 minutes.

| Number of Rows          | 1K      | 10K     | 100K  | 1M    | 2M    | 3M    |
| ----------------------- | ------- | ------- | ----- | ----- | ----- | ----- |
| Size on disk (in MB)    | 0.082   | 0.612   | 9.0   | 91    | 188   | 293   |
| R SDK (in sec)          | 7.7     | 4.58    | 35.9  | 233   | 470.5 | 603   |

#### PySpark ([!DNL Python] kernel) notebook data limits:

**XDM ExperienceEvent schema:** On Interactive mode you should be able to read a maximum of 5 million rows (~13.42GB data on disk) of XDM data in around 20 minutes. Interactive mode only supports up-to 5 million rows. If you wish to read larger datasets, it's suggested you switch to Batch mode. On Batch mode you should be able to read a maximum of 500 million rows (~1.31TB data on disk) of XDM data in around 14 hours.

| Number of rows          | 1K     | 10K    | 100K  | 1M    | 2M    | 3M    | 5M      | 10M     | 50M      | 100M   | 500M   |
|-------------------------|--------|--------|-------|-------|-------|-------|---------|---------|----------|--------|--------|
| Size on disk            | 2.93MB | 4.38MB | 29.02 | 2.69GB| 5.39GB| 8.09GB| 13.42GB | 26.82GB | 134.24GB |268.39GB| 1.31TB |
| SDK (Interactive mode)  | 33s    | 32.4s  | 55.1s | 253.5s| 489.2s| 729.6s| 1206.8s |    -    |    -     |   -    |  -     |
| SDK (Batch mode)        | 815.8s | 492.8s |379.1s |637.4s |624.5s | 869.2s| 1104.1s | 1786s   | 5387.2s  |10624.6s| 50547s |

**ad-hoc schema:** On Interactive mode you should be able to read a maximum of 1 billion rows (~1.05TB data on disk) of non-XDM data in less than 3 minutes. On Batch mode you should be able to read a maximum of 1 billion rows (~1.05TB data on disk) of non-XDM data in around 18 minutes.

| Number of rows| 1K     | 10K     | 100K    | 1M    | 2M    | 3M    | 5M     | 10M    | 50M     | 100M   | 500M    | 1B    |
|--------------|--------|---------|---------|-------|-------|-------|--------|--------|---------|--------|---------|-------|
| Size On Disk | 1.12MB | 11.24MB | 109.48MB| 2.69GB| 2.14GB| 3.21GB| 5.36GB | 10.71GB| 53.58GB |107.52GB| 535.88GB| 1.05TB|
| SDK Interactive mode (in seconds) | 28.2s  | 18.6s   |20.8s    |20.9s  |23.8s  |21.7s  |24.7s   | 22s    |28.4s    |40s     |97.4s    |154.5s |
| SDK Batch mode (in seconds) | 428.8s | 578.8s  |641.4s  |538.5s |630.9s |467.3s |411s    | 675s    |702s     |719.2s  |1022.1s  |1122.3s|

#### [!DNL Spark] (Scala kernel) notebook data limits:

**XDM ExperienceEvent schema:** On Interactive mode you should be able to read a maximum of 5 million rows (~13.42GB data on disk) of XDM data in around 18 minutes. Interactive mode only supports up-to 5 million rows. If you wish to read larger datasets, it's suggested you switch to Batch mode. On Batch mode you should be able to read a maximum of 500 million rows (~1.31TB data on disk) of XDM data in around 14 hours.

| Number of rows | 1K     | 10K    | 100K  | 1M    | 2M    | 3M    | 5M      | 10M     | 50M      | 100M   | 500M   |
|---------------|--------|--------|-------|-------|-------|-------|---------|---------|----------|--------|--------|
| Size On Disk  | 2.93MB | 4.38MB | 29.02 | 2.69GB| 5.39GB| 8.09GB| 13.42GB | 26.82GB | 134.24GB |268.39GB| 1.31TB |
| SDK Interactive mode (in seconds) | 37.9s  | 22.7s  | 45.6s | 231.7s| 444.7s| 660.6s | 1100s  |     -   |    -     |   -    |  -     |
| SDK Batch mode (in seconds) | 374.4s | 398.5s |527s   |487.9s |588.9s |829s   |939.1s   | 1441s    |5473.2s  |10118.8 |49207.6 |

**ad-hoc schema:** On Interactive mode you should be able to read a maximum of 1 billion rows (~1.05TB data on disk) of non-XDM data in less than 3 minutes. On Batch mode you should be able to read a maximum of 1 billion rows (~1.05TB data on disk) of non-XDM data in around 16 minutes.

| Number of rows | 1K     | 10K     | 100K    | 1M    | 2M    | 3M    | 5M      | 10M     | 50M     | 100M   | 500M    | 1B    |
|--------------|--------|---------|---------|-------|-------|-------|---------|---------|---------|--------|---------|-------|
| Size On Disk | 1.12MB | 11.24MB | 109.48MB| 2.69GB| 2.14GB| 3.21GB| 5.36GB  | 10.71GB | 53.58GB |107.52GB| 535.88GB| 1.05TB|
| SDK Interactive mode (in seconds)   | 35.7s  | 31s     |19.5s    |25.3s  |23s    |33.2s  |25.5s    | 29.2s   |29.7s    |36.9s   |83.5s    |139s   |
| SDK Batch mode (in seconds)   | 448.8s | 459.7s  |519s    |475.8s |599.9s |347.6s |407.8s   | 397s    |518.8s   |487.9s  |760.2s   |975.4s |

### Read from a dataset in [!DNL Python]/R

[!DNL Python] and R notebooks allow you to paginate data when accessing datasets. Sample code to read data with and without pagination is demonstrated below.

[//]: # (In the following samples, the first step is currently required but once the SDK is complete, users are no longer required to explicitly define client_context)

#### Read from a dataset in [!DNL Python]/R without pagination

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

#### Read from a dataset in [!DNL Python]/R with pagination

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

### Read from a dataset in PySpark/[!DNL Spark]/Scala

With an an active PySpark or Scala notebook opened, expand the **Data Explorer** tab from the left sidebar and double click **Datasets** to view a list of available datasets. Right-click on the dataset listing you wish to access and click **Explore Data in Notebook**. The following code cells are generated:

#### PySpark ([!DNL Spark] 2.4) {#pyspark2.4}

With the introduction of Spark 2.4, [`%dataset`](#magic) custom magic is supplied. 

```python
# PySpark 3 (Spark 2.4)

%dataset read --datasetId {DATASET_ID} --dataFrame pd0
pd0.describe()
pd0.show(10, False)
```

#### Scala ([!DNL Spark] 2.4) {#spark2.4}

```scala
// Scala (Spark 2.4)

// initialize the session
import org.apache.spark.sql.{Dataset, SparkSession}
val spark = SparkSession.builder().master("local").getOrCreate()

val dataFrame = spark.read.format("com.adobe.platform.query")
    .option("user-token", sys.env("PYDASDK_IMS_USER_TOKEN"))
    .option("ims-org", sys.env("IMS_ORG_ID"))
    .option("api-key", sys.env("PYDASDK_IMS_CLIENT_ID"))
    .option("service-token", sys.env("PYDASDK_IMS_SERVICE_TOKEN"))
    .option("mode", "batch")
    .option("dataset-id", "{DATASET_ID}")
    .load()
dataFrame.printSchema()
dataFrame.show()
```

>[!TIP]
>In Scala, you can use `sys.env()` to declare and return a value from within `option`.

### Using %dataset magic in PySpark 3 ([!DNL Spark] 2.4) notebooks {#magic}

With the introduction of [!DNL Spark] 2.4, `%dataset` custom magic is supplied for use in new PySpark 3 ([!DNL Spark] 2.4) notebooks ([!DNL Python] 3 kernel).

**Usage**

`%dataset {action} --datasetId {id} --dataFrame {df}`

**Description**

A custom [!DNL Data Science Workspace] magic command for reading or writing a dataset from a [!DNL Python] notebook ([!DNL Python] 3 kernel).

* **{action}**: The type of action to perform on the dataset. Two actions are available "read" or "write".
* **--datasetId {id}**: Used to supply the id of the dataset to read or write. This is a required argument.
* **--dataFrame {df}**: The pandas dataframe. This is a required argument.
  * When the action is "read", {df} is the variable where results of the dataset read operation are available.
  * When the action is "write", this dataframe {df} is written to the dataset.
* **--mode (optional)**: Allowed parameters are "batch", and "interactive". By default the mode is set to "interactive". It is recommended to use "batch" mode when reading large amounts of data.

**Examples**

* **Read example**: `%dataset read --datasetId 5e68141134492718af974841 --dataFrame pd0`
* **Write example**: `%dataset write --datasetId 5e68141134492718af974842 --dataFrame pd0`

### Query data using [!DNL Query Service] in [!DNL Python]

[!DNL JupyterLab] on [!DNL Platform] allows you to use SQL in a [!DNL Python] notebook to access data through <a href="https://www.adobe.com/go/query-service-home-en" target="_blank">Adobe Experience Platform Query Service</a>. Accessing data through [!DNL Query Service] can be useful for dealing with large datasets due to its superior running times. Be advised that querying data using [!DNL Query Service] has a processing time limit of ten minutes.

Before you use [!DNL Query Service] in [!DNL JupyterLab], ensure you have a working understanding of the <a href="https://www.adobe.com/go/query-service-sql-syntax-en" target="_blank">[!DNL Query Service] SQL syntax</a>.

Querying data using [!DNL Query Service] requires you to provide the name of the target dataset. You can generate the necessary code cells by finding the desired dataset using the **Data explorer**. Right click on the dataset listing and click **Query Data in Notebook** to generate the following two code cells in your notebook:


In order to utilize [!DNL Query Service] in [!DNL JupyterLab], you must first create a connection between your working [!DNL Python] notebook and [!DNL Query Service]. This can be achieved by executing the first generated cell.

```python
qs_connect()
```

In the second generated cell, the first line must be defined before the SQL query. By default, the generated cell defines an optional variable (`df0`) which saves the query results as a Pandas dataframe. <br>The `-c QS_CONNECTION` argument is mandatory and tells the kernel to execute the SQL query against [!DNL Query Service]. See the [appendix](#optional-sql-flags-for-query-service) for a list of additional arguments.

```python
%%read_sql df0 -c QS_CONNECTION
SELECT *
FROM name_of_the_dataset
LIMIT 10
/* Querying table "name_of_the_dataset" (datasetId: {DATASET_ID})*/
```

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

### Filter ExperienceEvent data in [!DNL Python]/R

In order to access and filter an ExperienceEvent dataset in a [!DNL Python] or R notebook, you must provide the ID of the dataset (`{DATASET_ID}`) along with the filter rules that define a specific time range using logical operators. When a time range is defined, any specified pagination is ignored and the entire dataset is considered. 

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

### Filter ExperienceEvent data in PySpark/[!DNL Spark]

Accessing and filtering an ExperienceEvent dataset in a PySpark or Scala notebook requires you to provide the dataset identity (`{DATASET_ID}`), your organization's IMS identity, and the filter rules defining a specific time range. A Filtering time range is defined by using the function `spark.sql()`, where the function parameter is a SQL query string.

The following cells filter an ExperienceEvent dataset to data existing exclusively between January 1, 2019 and the end of December 31, 2019.

#### PySpark 3 ([!DNL Spark] 2.4) {#pyspark3-spark2.4}

```python
# PySpark 3 (Spark 2.4)

from pyspark.sql import SparkSession
spark = SparkSession.builder.getOrCreate()

%dataset read --datasetId {DATASET_ID} --dataFrame df

df.createOrReplaceTempView("event")
timepd = spark.sql("""
    SELECT *
    FROM event
    WHERE timestamp > CAST('2019-01-01 00:00:00.0' AS TIMESTAMP)
    AND timestamp < CAST('2019-12-31 23:59:59.9' AS TIMESTAMP)
""")
timepd.show()
```

#### Scala ([!DNL Spark] 2.4) {#scala-spark}

```scala
// Spark (Spark 2.4)

// Turn off extra logging
import org.apache.log4j.{Level, Logger}
Logger.getLogger("org").setLevel(Level.OFF)
Logger.getLogger("com").setLevel(Level.OFF)

import org.apache.spark.sql.{Dataset, SparkSession}
val spark = org.apache.spark.sql.SparkSession.builder().appName("Notebook")
  .master("local")
  .getOrCreate()

// Stage Exploratory
val dataSetId: String = "{DATASET_ID}"
val orgId: String = sys.env("IMS_ORG_ID")
val clientId: String = sys.env("PYDASDK_IMS_CLIENT_ID")
val userToken: String = sys.env("PYDASDK_IMS_USER_TOKEN")
val serviceToken: String = sys.env("PYDASDK_IMS_SERVICE_TOKEN")
val mode: String = "batch"

var df = spark.read.format("com.adobe.platform.query")
  .option("user-token", userToken)
  .option("ims-org", orgId)
  .option("api-key", clientId)
  .option("mode", mode)
  .option("dataset-id", dataSetId)
  .option("service-token", serviceToken)
  .load()
df.createOrReplaceTempView("event")
val timedf = spark.sql("""
    SELECT * 
    FROM event 
    WHERE timestamp > CAST('2019-01-01 00:00:00.0' AS TIMESTAMP)
    AND timestamp < CAST('2019-12-31 23:59:59.9' AS TIMESTAMP)
""")
timedf.show()
```

>[!TIP]
>
>
>In Scala, you can use `sys.env()` to declare and return a value from within `option`. This eliminates the need to define variables if you know they are only going to be used a single time. The following example takes `val userToken` from the above example and declares it in-line within `option` as an alternative:
> ```scala
> .option("user-token", sys.env("PYDASDK_IMS_USER_TOKEN"))
> ```

## Supported libraries {#supported-libraries}

### [!DNL Python] / R

| Library | Version|
| :------ | :------ |
| notebook | 6.0.0 |
| requests | 2.22.0 |
| plotly | 4.0.0 |
| folium | 0.10.0 |
| ipywidgets | 7.5.1 |
| bokeh | 1.3.1 |
| gensim | 3.7.3 |
| ipyparallel | 0.5.2 |
| jq | 1.6 |
| keras | 2.2.4 |
| nltk | 3.2.5 |
| pandas | 0.22.0 |
| pandasql | 0.7.3 |
| pillow | 6.0.0 |
| scikit-image | 0.15.0 |
| scikit-learn | 0.21.3 |
| scipy | 1.3.0 |
| scrapy | 1.3.0 |
| seaborn | 0.9.0 |
| statsmodels | 0.10.1 |
| elastic | 5.1.0.17 |
| ggplot | 0.11.5 |
| py-xgboost | 0.90 |
| opencv | 3.4.1 |
| pyspark | 2.4.3 |
| pytorch | 1.0.1 |
| wxpython | 4.0.6  |
| colorlover | 0.3.0 |
| geopandas | 0.5.1 |
| pyshp | 2.1.0 |
| shapely | 1.6.4 |
| rpy2 | 2.9.4 |
| r-essentials | 3.6 |
| r-arules | 1.6_3 |
| r-fpc | 2.2_3 |
| r-e1071 | 1.7_2 |
| r-gam | 1.16.1 |
| r-gbm | 2.1.5 |
| r-ggthemes | 4.2.0 |
| r-ggvis | 0.4.4 |
| r-igraph | 1.2.4.1 |
| r-leaps | 3.0 |
| r-manipulate | 1.0.1 |
| r-rocr | 1.0_7 |
| r-rmysql | 0.10.17 |
| r-rodbc | 1.3_15 |
| r-rsqlite | 2.1.2 |
| r-rstan | 2.19.2 |
| r-sqldf | 0.4_11 |
| r-survival | 2.44_1.1 |
| r-zoo | 1.8_6 |
| r-stringdist | 0.9.5.2 |
| r-quadprog | 1.5_7 |
| r-rjson| 0.2.20 |
| r-forecast | 8.7 |
| r-rsolnp | 1.16 |
| r-reticulate | 1.12 |
| r-mlr | 2.14.0 |
| r-viridis | 0.5.1 |
| r-corrplot | 0.84 |
| r-fnn | 1.1.3 |
| r-lubridate | 1.7.4 |
| r-randomforest | 4.6_14 |
| r-tidyverse | 1.2.1 |
| r-tree | 1.0_39 |
| pymongo | 3.8.0 |
| pyarrow | 0.14.1 |
| boto3 | 1.9.199 |
| ipyvolume | 0.5.2 |
| fastparquet | 0.3.2 |
| python-snappy | 0.5.4 |
| ipywebrtc | 0.5.0 |
| jupyter_client | 5.3.1 |
| wordcloud | 1.5.0 |
| graphviz | 2.40.1 |
| python-graphviz | 0.11.1 |
| azure-storage | 0.36.0 |
| [!DNL jupyterlab] | 1.0.4 |
| pandas_ml | 0.6.1 |
| tensorflow-gpu | 1.14.0 |
| nodejs | 12.3.0 |
| mock | 3.0.5 |
| ipympl | 0.3.3 |
| fonts-anacond | 1.0 |
| psycopg2 | 2.8.3 |
| nose | 1.3.7 |
| autovizwidget | 0.12.9 |
| altair | 3.1.0 |
| vega_datasets | 0.7.0 |
| papermill | 1.0.1 |
| sql_magic | 0.0.4 |
| iso3166 | 1.0 |
| nbimporter | 0.3.1 |

### PySpark

| Library | Version |
| :------ | :------ |
| requests | 2.18.4 |
| gensim | 2.3.0 |
| keras | 2.0.6 |
| nltk | 3.2.4 |
| pandas | 0.20.1 |
| pandasql | 0.7.3 |
| pillow | 5.3.0 |
| scikit-image | 0.13.0 |
| scikit-learn | 0.19.0 |
| scipy | 0.19.1 |
| scrapy | 1.3.3 |
| statsmodels | 0.8.0 |
| elastic | 4.0.30.44 |
| py-xgboost | 0.60 |
| opencv | 3.1.0 |
| pyarrow | 0.8.0 |
| boto3 | 1.5.18 |
| azure-storage-blob | 1.4.0 |
| [!DNL python] | 3.6.7 |
| mkl-rt | 11.1 |

## Optional SQL flags for [!DNL Query Service] {#optional-sql-flags-for-query-service}

This table outlines the optional SQL flags that can be used for [!DNL Query Service].

| **Flag** | **Description** |
| --- | --- |
| `-h`, `--help` | Show the help message and exit. |
| `-n`, `--notify` | Toggle option for notifying query results. |
| `-a`, `--async` | Using this flag executes the query asynchonously and can free up the kernel while the query is executing. Be cautious when assigning query results to variables as it may be undefined if the query is not complete. |
| `-d`, `--display` | Using this flag prevents results from being displayed. |

