---
keywords: Experience Platform;download scores;customer ai;popular topics
solution: Experience Platform
title: Downloading scores in Customer AI
topic: Downloading scores
---

# Downloading scores in Customer AI

something something something dark side... something something something complete...
## Getting started

need to have a customer ai service instance that has completed its training and scoring 

## Finding your dataset ID

dataSet=5e3b2fe3fe4b9f18a8b7a3da

## API 1

https://platform.adobe.io/data/foundation/catalog/batches?&dataSet=5e3b2fe3fe4b9f18a8b7a3da&orderBy=desc:created&limit=1

## Data access API

Link out to the data access api documentation

https://platform.adobe.io/data/foundation/export/batches/035e2520-5e69-11ea-b624-51ecfeba55d0/files

- make call to files/file_id

https://platform.adobe.io/data/foundation/export/files/035e2520-5e69-11ea-b624-51ecfeba55d0-1

## Download your data -o outputname.parquet

https://platform.adobe.io:443/data/foundation/export/files/035e2520-5e69-11ea-b624-51ecfeba55d0-1?path=part-00000-tid-7597930103898538622-a25f1890-efa9-40eb-a2cb-1b378e93d582-528-1-c000.snappy.parquet