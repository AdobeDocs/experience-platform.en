---
title: Connect to Data Distiller from a Jupyter Notebook
description: Learn how to connect to Data Distiller from a Jupyter Notebook.
exl-id: e6238b00-aaeb-40c0-a90f-9aebb1a1c421
---
# Connect to Data Distiller from a Jupyter Notebook

To enrich your machine learning pipelines with high-value customer experience data, you must first connect to Data Distiller from [!DNL Jupyter Notebooks]. This document covers the steps to connect to Data Distiller from a [!DNL Python] notebook in your machine learning environment.

## Getting started

This guide assumes that you are familiar with interactive [!DNL Python] notebooks and have access to a notebook environment. The notebook may be hosted within a cloud-based machine learning environment, or locally with [[!DNL Jupyter Notebook]](https://jupyter.org/).

### Obtain connection credentials {#obtain-credentials}

To connect to Data Distiller and other Adobe Experience Platform services, you need an Experience Platform API credential. API credentials can be created in the  [Adobe Developer Console](https://developer.adobe.com/console/home) by someone with Developer access to the Experience Platform. You are recommended to create an Oauth2 API credential specifically for data science workflows and have an Adobe system admin from your organization assign the credential to a role with appropriate permissions.

See [Authenticate and access Experience Platform APIs](../../../landing/api-authentication.md) for detailed instructions on creating an API credential and obtaining the required permissions.

Recommended permissions for data science include:

- Sandbox(es) that will be used for data science (usually `prod`)
- Data modeling: [!UICONTROL Manage Schemas]
- Data management: [!UICONTROL Manage Datasets]
- Data ingestion: [!UICONTROL View Sources]
- Destinations: [!UICONTROL Manage and Activate Dataset Destinations]
- Query Service: [!UICONTROL Manage Queries]

By default, a role (and API credentials assigned to that role) is blocked from accessing any labeled data. Subject to the organization's data governance policies, a System Admin may grant the role access to certain labeled data that is deemed appropriate for data science usage. Platform customers are responsible to manage label access and policies appropriately in order to comply with relevant regulations and organizational policies.

### Store credentials in a separate configuration file {#store-credentials}

To keep your credential secure, it is recommended that you avoid writing credential information directly into your code. Instead, keep the credential information in a separate configuration file and read in the values needed to connect to the Experience Platform and Data Distiller. 

As an example, you can create a file called `config.ini` and include the following information (along with any other information, such as dataset IDs, that would useful to save between sessions):

```ini
[Credential]
ims_org_id=<YOUR_IMS_ORG_ID>
sandbox_name=<YOUR_SANDBOX_NAME>
client_id=<YOUR_CLIENT_ID>
client_secret=<YOUR_CLIENT_SECRET>
scopes=openid, AdobeID, read_organizations, additional_info.projectedProductContext, session
tech_acct_id=<YOUR_TECHNICAL_ACCOUNT_ID>
```

In your notebook, you can then read the credential information into memory using the `configParser` package from the standard [!DNL Python] library:

```python
from configparser import ConfigParser

# Create a ConfigParser object to read and store information from config.ini
config = ConfigParser()
config_path = '<PATH_TO_YOUR_CONFIG.INI_FILE>'
config.read(config_path)
```

You can then reference credential values within your code as follows:

```python
org_id = config.get('Credential', 'ims_org_id')
```

## Install aepp Python library {#install-python-library}

[aepp](https://github.com/adobe/aepp/tree/main) is an Adobe-managed open-source [!DNL Python] library that provides functions for connecting to Data Distiller and submitting queries, as making requests to other Experience Platform services. The `aepp` library in turn relies on the PostgreSQL database adapter package  `psycopg2` for interactive Data Distiller queries. It is possible to connect to Data Distiller and query Experience Platform datasets with `psycopg2` alone, but `aepp` provides greater convenience and additional functionality to make requests to all Experience Platform API services.

To install or upgrade `aepp` and `psycopg2` in your environment, you can use the `%pip` magic command in your notebook:

```python
%pip install --upgrade aepp
%pip install --upgrade psycopg2-binary
```

You can then configure the `aepp` library with your credential using the following code:

```python
from configparser import ConfigParser

# Create a ConfigParser object to read and store information from config.ini
config = ConfigParser()
config_path = '<PATH_TO_YOUR_CONFIG.INI_FILE>'
config.read(config_path)

# Configure aepp with your credentials
import aepp

aepp.configure(
  org_id=config.get('Credential', 'ims_org_id'),
  sandbox=config.get('Credential', 'sandbox_name'),
  client_id=config.get('Credential', 'client_id'), 
  secret=config.get('Credential', 'client_secret'),
  scopes=config.get('Credential', 'scopes'),
  tech_id=config.get('Credential', 'tech_acct_id')
)
```

## Create a connection to Data Distiller {#create-connection}

Once `aepp` is configured with your credentials, you can use the following code to create a connection to Data Distiller and start an interactive session as follows:

```python
from aepp import queryservice

dd_conn = queryservice.QueryService().connection()
dd_cursor = queryservice.InteractiveQuery2(dd_conn)
```

You can then query the datasets in your Experience Platform sandbox. Given the id of a dataset you want to query, you can retrieve the corresponding table name from the Catalog service and run queries on the table:

```python
table_name = 'ecommerce_events'
simple_query = f'''SELECT * FROM {table_name} LIMIT 5'''
dd_cursor.query(simple_query)
```

### Connect to a single dataset for faster query performance {#connect-to-single-dataset}

By default, the Data Distiller connection connects to all datasets in your sandbox. For faster queries and reduced resource usage, you can instead connect to a specific dataset of interest. You can do this by changing the `dbname` in the Data Distiller connection object to `{sandbox}:{table_name}`:

```python
from aepp import queryservice

sandbox = config.get('Credential', 'sandbox_name')
table_name = 'ecommerce_events'

dd_conn = queryservice.QueryService().connection()
dd_conn['dbname'] = f'{sandbox}:{table_name}'
dd_cursor = queryservice.InteractiveQuery2(dd_conn)
```

## Next Steps

By reading this document, you have learned how to connect to Data Distiller from a [!DNL Python] notebook in your machine learning environment. The next step in creating feature pipelines from Experience Platform to feed custom models in your machine learning environment is to [explore and analyze your datasets](./exploratory-analysis.md).
