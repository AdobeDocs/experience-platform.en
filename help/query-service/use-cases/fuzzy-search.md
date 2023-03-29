---
title: Fuzzy Search in Query Service
description: Learn how to perform a search on your Platform data that combines results from multiple datasets by approximately matching a string of your choice.
---
# Fuzzy search

Use a 'fuzzy' search on your Platform data to return the most likely, approximate matches without the need to search for strings with identical characters. This allows for much a more flexible search of your data and makes your data more accessible by saving time and effort.

Instead of trying to re-format the search strings in order to match them, the fuzzy search analyses the ratio of similarity between two sequences and returns the similarity percentage. [!DNL FuzzyWuzzy] is reccomended for this process as its functions are more suited to help match strings in more complex situations compared to [!DNL regex] or [!DNL difflib].

The use case provided in this document uses a hotel room search across two different company datasets as an example. The document demonstrates how to match strings by their degree of similarity. In this case, comparing the features of a room across the resources of two disparate datasets.

## Getting started {#getting-started}

As part of this process requires you to train a machine learning model, this document assumes a working knowledge of one or more machine learning environments.

This example uses [!DNL Python] and the [!DNL Jupyter Notebook] development environment. Although there are many options available, [!DNL Jupyter Notebook] is recommended because it is an open-source web application that has low computational requirements. It can be [downloaded from the official Jupyter site](https://jupyter.org/). 

Before you begin, you must import the necessary libraries. [!DNL FuzzyWuzzy] is an open-sourced [!DNL Python] library built on top of the [!DNL difflib] library and used to match strings. It uses [!DNL Levenshtein Distance] to calculate the differences between sequences and patterns. [!DNL FuzzyWuzzy] has the following requirements:

- Python 2.4 (or higher)
- Python-Levenshtein

From the command line, use the following command to install [!DNL FuzzyWuzzy]:

```console
pip install fuzzywuzzy
```

Or use the following command to install Python-Levenshtein as well:

```console
pip install fuzzywuzzy[speedup]
```

More technical information on [!DNL Fuzzywuzzy] can be found in their [official documentation](https://pypi.org/project/fuzzywuzzy/).

### Connect to Query Service

You must connect your machine learning model to query service by providing you connection credentials. Both expiring and non expiring credentials can be provided. Please see the [credentials guide](../ui/credentials.md) for more information on how to acquire the necessary credentials. If you are using Jupyter Notebook, please see the full guide on [how to connect to Query Service](../clients/jupyter-notebook.md).

Also, be sure to import the [!DNL numpy] package into your [!DNL Python] environment to enable linear algebra.

```python
import numpy as np
```

The commands below are necessary to connect to Query Service from Jupyter Notebook:

```python
import psycopg2
conn = psycopg2.connect('''
sslmode=require
host=<YOUR_ORGANIZATION_ID>
port=80
dbname=prod:all
user=<YOUR_ADOBE_ID_TO_CONNECT_TO_QUERY_SERVICE>
password=<YOUR_QUERY_SERVICE_PASSWORD>
''')
cur = conn.cursor()
```

Your Jupyter Notebook instance is now connected to Query Service. If the connection is successful, no message will display. If the connection failed, and error will display. 

### Draw data from the Expedio dataset {#expedio-dataset}

Data for analysis is drawn from the first dataset with the following commands. For brevity, the examples have been limited to the first 10 results of the column.

```python
cur.execute('''SELECT * FROM expedio;
''')    
expedio = np.array([r[0] for r in cur])

expedio[:10]
```

Select **Output** to se the returned array.

+++Output

```console
array(['Deluxe King Or Queen Room', 'Kona Tower City / Mountain View',
       'Luxury Double Room', 'Alii Tower Ocean View With King Bed',
       'Club Two Queen', 'Corner Deluxe Studio',
       'Luxury Queen Room With Two Queen Beds', 'Grand Corner King Room',
       'Accessible Club Ocean View Suite With One King Bed',
       'Junior Suite'], dtype='<U66')
```

+++

### Draw data from the Acme dataset {#acme-dataset}

Data for analysis is now drawn from the second dataset with the following commands. Again, for brevity, the examples have been limited to the first 10 results of the column.

```python
cur.execute('''SELECT * FROM acme;
''')    
acme = np.array([r[0] for r in cur])

acme[:10] # first 10 examples of the column
```

Select **Output** to se the returned array.

+++Output

```console
array(['Deluxe King Or Queen Room', 'Kona Tower City / Mountain View',
       'Luxury Double Room', 'Alii Tower Ocean View With King Bed',
       'Club Two Queen', 'Corner Deluxe Studio',
       'Luxury Queen Room With Two Queen Beds', 'Grand Corner King Room',
       'Accessible Club Ocean View Suite With One King Bed',
       'Junior Suite'], dtype='<U66')
```

+++

### Create fuzzy scoring function


