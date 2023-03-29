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

Before you begin, you must import the necessary libraries. [!DNL FuzzyWuzzy] is an open-sourced [!DNL Python] library that is used to match strings. It uses [!DNL Levenshtein Distance] to calculate the differences between sequences and patterns. [!DNL FuzzyWuzzy] has the following requirements:

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


