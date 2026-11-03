---
solution: Experience Platform
title: Process Manager Overview
description: Learn how to use the Process Manager to orchestrate end-to-end automated workflows with Experience Platform services. 
---

# Process Manager overview

Process Manager provides an in-built orchestration system that lets you chain together various Adobe Experience Platform services together to perform end-to-end flows. Since Process Manager is directly created by Adobe, you don't need to maintain any custom code to manage your orchestrations, and will automatically take care of any API or service upgrades that may be required for your flows. 

Process Manager provides an **active** orchestration system, which lets you take full control of every task within the workflow. As a result, you can decide when each task executes, how many times each task executes, as well as the transition logic between each task. Since every task executes within Process Manager, the entire process is fully tracked, giving you complete visibility and deterministic control over the entire lifecycle.

## Sample use cases

The following section lists some sample use cases for Process Manager.

### Trigger profile export after all data is ingested

In the following scenario, you can ingest data from multiple datasets, proceed to wait for all the data to be ingested, then trigger activation to a dataset after all the data is ingested.

![A sample process showing data coming in from multiple datasets and running segmentation to trigger activation](/help/process-manager/images/home/sample-datasets.png)

### Ingest data, run Data Distiller, and activate the data to a dataset

In the following scenario, you can ingest data from a dataset, run it through Data Distiller, and upon successfully running, export the data to a dataset.

![A sample process showing data going through Data Distiller and exported to a dataset. If it fails, a failure notification is sent.](/help/process-manager/images/home/sample-data-distiller.png)

## Next steps

To learn how to use the Process Manager UI, read the [Process Manager UI guide](/help/process-manager/ui.md). To learn how to use the API to monitor your processes, read the [Process Manager API guide](/help/process-manager/api.md).
