---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
title: Merkury Enterprise Identity Resolution Documentation self-service template for the UI
description: Learn how to create a Merkury Enterprise Identity Resolution source connection using the Adobe Experience Platform UI.
hide: true
hidefromtoc: true
---
# Create a Merkury Enterprise Identity Resolution source connection and dataflow in the UI

This tutorial provides steps to create a Merkury Enterprise Identity Resolution source connection and dataflow using the Adobe Experience Platform user interface.

## Get started

This tutorial requires a working understanding of the following components of Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
  * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-Time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

### Gather required credentials

In order to access your bucket on Platform, you need to provide valid values for the following credentials:

| Credential | Description |
| --- | --- |
| Access key | The access key ID for your bucket. You can retrieve this value from your [!DNL Merkury] team. |
| Secret key | The secret key ID for your bucket. You can retrieve this value from your [!DNL Merkury] team. |
| Bucket name | This is your Merkury bucket where files will be shared. You can retrieve this value from your [!DNL Merkury] team. |

## Connect your Merkury Account

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation bar to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources for which you can create an account with.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search option.

Under the **[!UICONTROL Data partners]** category, select **[!UICONTROL Merkury Enterprise Identity Resolution]** and then select **[!UICONTROL Add data]**.

![](./merkury-enterprise-identity-resolution-assets/c5503baaad6e0be4a10cc675f6c6ddc5793d4dcb.png){width="6.349206036745406in"
height="2.7777777777777777in"}

The **[!UICONTROL Connect to Merkury]** page appears. On this page, you can either use new credentials or existing credentials.

### Create a new account

If you are using new credentials, select **[!UICONTROL New account]**. On the input form that appears, provide a name, an optional description, and your [!DNL Merkury] credentials. When finished, select **[!UICONTROL Connect to source]** and then allow some time for the new connection to establish.

![](./merkury-enterprise-identity-resolution-assets/cca42dc1b31c64075713b3814dd2d3b5ecc59da1.png){width="5.0in"
height="4.40625in"}

### Use an existing account

To use an existing account, select **[!UICONTROL Existing account]** and then select the [!DNL Merkury] account that you would like to use. Select **[!UICONTROL Next]** to proceed.

![](./merkury-enterprise-identity-resolution-assets/616d2005eddb6ea8828572a523296d5c1172ed2e.png){width="6.943346456692914in"
height="1.9962117235345582in"}

**Configure a dataflow to ingest batch data from a cloud storage source
in the UI**

This tutorial provides steps on how to configure a dataflow to bring
batch data from your source connector to Adobe Experience Platform.

### Supported file formats

Cloud storage sources for batch data supports the following file formats for ingestion:

* Delimiter-separated values (DSV): Any single-character value can be used as a delimiter for DSV-formatted data files.
* [!DNL JavaScript Object Notation] (JSON): JSON-formatted data files must be XDM-compliant.
* [!DNL Apache Parquet]: Parquet-formatted data files must be XDM-compliant.
* Compressed files: JSON and delimited files can be compressed as: `bzip2`, `gzip`, `deflate`, `zipDeflate`, `tarGzip`, and `tar`.

## Add data

After creating your [!DNL Merkury] account, the **[!UICONTROL Add data]** step appears, providing an interface for you to explore your [!DNL Merkury] file hierarchy and select the folder or specific file that you want to bring to Platform.

* The left part of the interface is a directory browser, displaying your [!DNL Merkury] file hierarchy.
* The right part of the interface lets you preview up to 100 rows of data from a compatible folder or file.


![](./merkury-enterprise-identity-resolution-assets/3ecf99b1861044c74bbdf69421532070f364e1e8.png){width="6.651583552055993in"
height="2.3557699037620297in"}

Select the root folder to access your folder hierarchy. From here, you can select a single folder to ingest all files in the folder recursively. When ingesting an entire folder, you must ensure that all files in that folder share the same data format and schema.

![](./merkury-enterprise-identity-resolution-assets/3ecf99b1861044c74bbdf69421532070f364e1e8.png){width="6.176469816272966in"
height="2.1875in"}

Once you have selected a folder, the right interface updates to a preview of the contents and structure of the first file in the selected folder.

![](./merkury-enterprise-identity-resolution-assets/1b77ad9a11000927fdefcb5b03cc4ef339da781b.png){width="6.625087489063867in"
height="2.0427351268591427in"}

During this step, you can make several configurations to your data, before proceeding. First, select **[!UICONTROL Data format]** and then select the appropriate data format for your file in the dropdown panel that appears.

The following table displays the appropriate data formats for the supported file types:

| File type | Data format |
| --- | --- |
| CSV | [!UICONTROL Delimited]|
| JSON | [!UICONTROL JSON] |
| Parquet | [!UICONTROL XDM Parquet] |

### Select a column delimiter

After configuring your data format, you can set a column delimiter when ingesting delimited files. Select the **[!UICONTROL Delimiter]** option and then select a delimiter from the dropdown menu. The menu displays the most frequently used options for delimiters, including a comma (`,`), a tab (`\t`), and a pipe (`|`). 

If you prefer to use a custom delimiter, select **[!UICONTROL Custom]** and enter a single-character delimiter of your choice in the pop up input bar.

### Ingest compressed files

You can also ingest compressed JSON or delimited files by specifying their compression type.

In the [!UICONTROL Select data] step, select a compressed file for ingestion and then select its appropriate file type and whether it's XDM-compliant or not. Next, select **[!UICONTROL Compression type]** and then select the appropriate compressed file type for your source data.

To bring a specific file to Platform, select a folder, and then select the file that you want to ingest. During this step, you can also preview file contents of other files within a given folder by using the preview icon beside a file name. 

When finished, select **[!UICONTROL Next]**.

## Provide dataflow details

The [!UICONTROL Dataflow detail] page allows you to select whether you want to use an existing dataset or a new dataset. During this process, you can also configure your data to be ingested to Profile, and enable settings like [!UICONTROL Error diagnostics], [!UICONTROL Partial ingestion], and [!UICONTROL Alerts].

### Use an existing dataset

To ingest data into an existing dataset, select **[!UICONTROL Existing dataset]**. You can either retrieve an existing dataset using the [!UICONTROL Advanced search] option or by scrolling through the list of existing datasets in the dropdown menu. Once you have selected a dataset, provide a name and a description for your dataflow.

![](./merkury-enterprise-identity-resolution-assets/37fbc55857978f56a86b21c734336638aec6cb4a.png){width="5.681089238845145in"
height="3.8229002624671917in"}

### Use a new dataset

To ingest into a new dataset, select **[!UICONTROL New dataset]** and then provide an output dataset name and an optional description. Next, select a schema to map to using the [!UICONTROL Advanced search] option or by scrolling through the list of existing schemas in the dropdown menu. Once you have selected a schema, provide a name and a description for your dataflow.

![](./merkury-enterprise-identity-resolution-assets/4164df81759304c6cef0d3a63c64ecc661ffde55.png){width="4.2565102799650045in"
height="4.887858705161855in"}

### Enable Profile and error diagnostics

Next, select the **[!UICONTROL Profile dataset]** toggle to enable your dataset for Profile. This allows you to create a holistic view of an entity's attributes and behaviors. Data from all Profile-enabled datasets will be included in Profile and changes are applied when you save your dataflow.

[!UICONTROL Error diagnostics] enables detailed error message generation for any erroneous records that occur in your dataflow, while [!UICONTROL Partial ingestion] allows you to ingest data containing errors, up to a certain threshold that you manually define. See the [partial batch ingestion overview](../../../../../ingestion/batch-ingestion/partial.md) for more information.

### Enable alerts

You can enable alerts to receive notifications on the status of your dataflow. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to sources alerts using the UI](../../alerts.md).

When you are finished providing details to your dataflow, select **[!UICONTROL Next]**.

![](./merkury-enterprise-identity-resolution-assets/a7492c766da7f5e37c022e0cbeab8fa63b279fc1.png){width="4.354166666666667in"
height="5.0in"}

## Map data fields to an XDM schema

The [!UICONTROL Mapping] step appears, providing you with an interface to map the source fields from your source schema to their appropriate target XDM fields in the target schema.

Platform provides intelligent recommendations for auto-mapped fields based on the target schema or dataset that you selected. You can manually adjust mapping rules to suit your use cases. Based on your needs, you can choose to map fields directly, or use data prep functions to transform source data to derive computed or calculated values. For comprehensive steps on using the mapper interface and calculated fields, see the [Data Prep UI guide](../../../../../data-prep/ui/mapping.md).

Once your source data is successfully mapped, select **[!UICONTROL Next]**.

![](./merkury-enterprise-identity-resolution-assets/e94eb1a624c639e79c69f526adf42ec8c577b9b3.png){width="7.364078083989502in"
height="1.5034995625546808in"}

## Schedule ingestion runs

The [!UICONTROL Scheduling] step appears, allowing you to configure an ingestion schedule to automatically ingest the selected source data using the configured mappings. By default, scheduling is set to `Once`. To adjust your ingestion frequency, select **[!UICONTROL Frequency]** and then select an option from the dropdown menu.

>[!TIP]
>
>Interval and backfill are not visible during a one-time ingestion.

![](./merkury-enterprise-identity-resolution-assets/dba5692ae6c41a2e47de3251464cc0ef868e3d4f.png){width="5.0in"
height="2.125in"}

If you set your ingestion frequency to `Minute`, `Hour`, `Day`, or `Week`, then you must set an interval to establish a set time frame between every ingestion. For example, an ingestion frequency set to `Day` and  an interval set to `15` means that your dataflow is scheduled to ingest data every 15 days.

During this step, you can also enable **backfill** and define a column for the incremental ingestion of data. Backfill is used to ingest historical data, while the column you define for incremental ingestion allows new data to be differentiated from existing data.

See the table below for more information on scheduling configurations.

| Field | Description |
| --- | --- |
| Frequency | The frequency in which an ingestion happens. Selectable frequencies include `Once`, `Minute`, `Hour`, `Day`, and `Week`. |
| Interval | An integer that sets the interval for the selected frequency. The interval's value should be a non-zero integer and should be set to greater than or equal to 15. |
| Start time | A UTC timestamp indicating when the very first ingestion is set to occur. Start time must be greater than or equal to your current UTC time. |
| Backfill | A boolean value that determines what data is initially ingested. If backfill is enabled, all current files in the specified path will be ingested during the first scheduled ingestion. If backfill is disabled, only the files that are loaded in between the first run of ingestion and the start time will be ingested. Files loaded prior to start time will not be ingested. |

![A screenshot of a computer Description automatically
generated](./merkury-enterprise-identity-resolution-assets/media/image12.png){width="6.748530183727034in"
height="1.9993241469816272in"}


>[!NOTE]
>
>For batch ingestion, every ensuing dataflow selects files to be ingested from your source based on their **last modified** timestamp. This means that batch dataflows select files from the source that are either new or have been modified since the last flow run. Furthermore, you must ensure that there's a sufficient time span between file upload and a scheduled flow run because files that are not entirely uploaded to your cloud storage account before the scheduled flow run time may not be picked up for ingestion.

When finished configuring your ingestion schedule, select **[!UICONTROL Next]**.

## Review your dataflow

The **[!UICONTROL Review]** step appears, allowing you to review your new dataflow before it is created. Details are grouped within the following categories:

* **[!UICONTROL Connection]**: Shows the source type, the relevant path of the chosen source file, and the amount of columns within that source file.
* **[!UICONTROL Assign dataset & map fields]**: Shows which dataset the source data is being ingested into, including the schema that the dataset adheres to.
* **[!UICONTROL Scheduling]**: Shows the active period, frequency, and interval of the ingestion schedule.

Once you have reviewed your dataflow, click **[!UICONTROL Finish]** and allow some time for the dataflow to be created.

![](./merkury-enterprise-identity-resolution-assets/d73a264c1f8e991d4e8aac0d3bada41175cf9feb.png){width="6.627603893263342in"
height="1.7673611111111112in"}
