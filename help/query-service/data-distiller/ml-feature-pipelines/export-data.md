---
title: Export Data to external ML Environments
description: Learn how to share a prepared training dataset, created with Data Distiller, to a cloud storage location that your ML environment can read for training and scoring your model.
exl-id: 75022acf-fafd-41d6-8dfa-ff3fd4c4fa7e
---
# Export data to external ML environments

This document demonstrates how to share a prepared training dataset created with Data Distiller to a cloud storage location which your ML environment can read for training and scoring your model. The example here exports the training dataset to the [Data Landing Zone (DLZ)](../../../sources/tutorials/api/create/cloud-storage/data-landing-zone.md). You can change the storage destination as needed to work with your machine learning environment.

The [Flow Service for Destinations](https://developer.adobe.com/experience-platform-apis/references/destinations/) is used to complete the feature pipeline by landing a dataset of computed features into an appropriate cloud storage location.

## Create the source connection {#create-source-connection}

The source connection is responsible for configuring the connection to your Adobe Experience Platform dataset so that the resulting flow knows exactly where to look for the data and in which format.

```python
from aepp import flowservice
flow_conn = flowservice.FlowService()

training_dataset_id = <YOUR_TRAINING_DATASET_ID>

source_res = flow_conn.createSourceConnectionDataLake(
    name=f"[CMLE] Featurized Dataset source connection created by {username}",
    dataset_ids=[training_dataset_id],
    format="parquet"
)
source_connection_id = source_res["id"]
```

## Create the target connection {#create-target-connection}

The target connection is responsible for connecting to the destination filesystem. This requires first creating a base connection to cloud storage account (the Data Landing Zone in this example), then a target connection to a specific file path with specified compression and format options.

The available cloud storage destinations are each identified by a connection spec ID:

| Cloud Storage Type    | Connection Spec ID                   |
|-----------------------|--------------------------------------|
| Amazon S3             | 4fce964d-3f37-408f-9778-e597338a21ee |
| Azure Blob Storage    | 6d6b59bf-fb58-4107-9064-4d246c0e5bb2 |
| Azure Data Lake       | be2c3209-53bc-47e7-ab25-145db8b873e1 |
| Data Landing Zone     | 10440537-2a7b-4583-ac39-ed38d4b848e8 |
| Google Cloud Storage  | c5d93acb-ea8b-4b14-8f53-02138444ae99 |
| SFTP                  | 36965a81-b1c6-401b-99f8-22508f1e6a26 |

```python
connection_spec_id = "10440537-2a7b-4583-ac39-ed38d4b848e8"
base_connection_res = flow_conn.createConnection(data={
    "name": "Base Connection to DLZ created by",
    "auth": None,
    "connectionSpec": {
        "id": connection_spec_id,
        "version": "1.0"
    }
})
base_connection_id = base_connection_res["id"]

target_res = flow_conn.createTargetConnection(
    data={
        "name": "Data Landing Zone target connection",
        "baseConnectionId": base_connection_id,
        "params": {
            "mode": "Server-to-server",
            "compression": config.get("Cloud", "compression_type"),
            "datasetFileType": config.get("Cloud", "data_format"),
            "path": config.get("Cloud", "export_path")
        },
        "connectionSpec": {
            "id": connection_spec_id,
            "version": "1.0"
        }
    }
)
target_connection_id = target_res["id"]
```

## Create the data flow {#create-data-flow}

The final step is to create a data flow between the dataset specified in the source connection and the destination file path specified in the target connection. 

Each available cloud storage type is identified by a flow spec ID:

| Cloud Storage Type    | Flow Spec ID                         |
|-----------------------|--------------------------------------|
| Amazon S3             | 269ba276-16fc-47db-92b0-c1049a3c131f |
| Azure Blob Storage    | 95bd8965-fc8a-4119-b9c3-944c2c2df6d2 |
| Azure Data Lake       | 17be2013-2549-41ce-96e7-a70363bec293 |
| Data Landing Zone     | cd2fc47e-e838-4f38-a581-8fff2f99b63a |
| Google Cloud Storage  | 585c15c4-6cbf-4126-8f87-e26bff78b657 |
| SFTP                  | 354d6aad-4754-46e4-a576-1b384561c440 |

The following code creates a data flow with a schedule set to start far into the future. This allows you to trigger ad hoc flows during the model development. Once you have a trained model, you can update the schedule of the data flow to share the feature dataset on the desired schedule.

```python
import time

on_schedule = False
if on_schedule:
    schedule_params = {
        "interval": 3,
        "timeUnit": "hour",
        "startTime": int(time.time())
    }
else:
    schedule_params = {
        "interval": 1,
        "timeUnit": "day",
        "startTime": int(time.time() + 60*60*24*365) # Start the schedule far in the future
    }

flow_spec_id = "cd2fc47e-e838-4f38-a581-8fff2f99b63a"
flow_obj = {
    "name": "Flow for Feature Dataset to DLZ",
    "flowSpec": {
        "id": flow_spec_id,
        "version": "1.0"
    },
    "sourceConnectionIds": [
        source_connection_id
    ],
    "targetConnectionIds": [
        target_connection_id
    ],
    "transformations": [],
    "scheduleParams": schedule_params
}
flow_res = flow_conn.createFlow(
    obj = flow_obj,
    flow_spec_id = flow_spec_id
)
dataflow_id = flow_res["id"]
```

With the data flow created, you can now trigger an ad hoc flow run to share the feature dataset on demand:

```python
from aepp import connector

connector = connector.AdobeRequest(
  config_object=aepp.config.config_object,
  header=aepp.config.header,
  loggingEnabled=False,
  logger=None,
)

endpoint = aepp.config.endpoints["global"] + "/data/core/activation/disflowprovider/adhocrun"

payload = {
    "activationInfo": {
        "destinations": [
            {
                "flowId": dataflow_id, 
                "datasets": [
                    {"id": created_dataset_id}
                ]
            }
        ]
    }
}

connector.header.update({"Accept":"application/vnd.adobe.adhoc.dataset.activation+json; version=1"})
activation_res = connector.postData(endpoint=endpoint, data=payload)
activation_res
```

## Streamlined sharing to Data Landing Zone

To share a dataset to the Data Landing Zone more easily, the `aepp` library provides a `exportDatasetToDataLandingZone` function that executes the steps above in a single function call:

```python
from aepp import exportDatasetToDataLandingZone

export = exportDatasetToDataLandingZone.ExportDatasetToDataLandingZone()

dataflow_id = export.createDataFlowRunIfNotExists(
    dataset_id = created_dataset_id,
    data_format = data_format, 
    export_path= export_path, 
    compression_type = compression_type, 
    on_schedule = False, 
    config_path = config_path, 
    entity_name = "Flow for Featurized Dataset to DLZ"
)
```

This code creates the source connection, the target connection, and data flow based on the provided parameters, and executes an ad hoc run of the data flow in a single step.
