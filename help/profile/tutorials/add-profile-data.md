---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API;enable profile;Enable profile
title: Add Data to Real-Time Customer Profile
topic-legacy: tutorial
type: Tutorial
description: This tutorial outlines the steps necessary to add data to Real-Time Customer Profile.
exl-id: c2df224b-bf3d-4994-aa3a-9e9f4a6a726c
---

# Add data to [!DNL Real-Time Customer Profile]

This tutorial outlines the steps necessary to add data to [!DNL Real-Time Customer Profile].

## Enable a schema for [!DNL Real-Time Customer Profile]

Data being ingested into [!DNL Experience Platform] for use by [!DNL Real-Time Customer Profile] must conform to an [!DNL Experience Data Model] (XDM) schema that is enabled for [!DNL Profile]. In order for a schema to be enabled for Profile, it must implement either the [!DNL XDM Individual Profile] or [!DNL XDM ExperienceEvent] class.

You can enable a schema for use in [!DNL Real-Time Customer Profile] using the [!DNL Schema Registry] API or the [!DNL Schema Editor] user interface. To get started, follow the tutorials for [creating a schema using APIs](../../xdm/tutorials/create-schema-api.md) or [creating a schema using the Schema Editor UI](../../xdm/tutorials/create-schema-ui.md).

## Add data using batch ingestion

All data uploaded to [!DNL Platform] using batch ingestion is uploaded to individual datasets. Before this data can be used by [!DNL Real-Time Customer Profile], the dataset in question has to be specifically configured. For complete instructions, see the tutorial on [configuring a dataset for Profile and Identity Service](dataset-configuration.md).

Once the dataset has been configured, you can start ingesting data into it. See the [batch ingestion developer guide](../../ingestion/batch-ingestion/api-overview.md) for detailed steps on how to upload files in different formats.

## Add data using streaming ingestion

Any stream-ingested data that is compliant with a [!DNL Profile]-enabled XDM schema will automatically add or overwrite the appropriate record in [!DNL Real-Time Customer Profile]. If more than one identity is supplied in the record, or time series data is consumed, those identities will be mapped in the identity graph without additional configuration. See the [streaming ingestion developer guide](../../ingestion/tutorials/streaming-record-data.md) to learn more.

## Confirm that the upload is successful

When uploading data to a new dataset for the first time, or as part of a process involving a new ETL or data source, it is recommended to carefully check the data to ensure it has been uploaded correctly. 

Using the [!DNL Real-Time Customer Profile] Access API, you can retrieve batch data as it gets loaded into a dataset. If you are unable to retrieve any of the entities you expect, your dataset may not be enabled for [!DNL Profile]. After confirming that your dataset has been enabled, ensure that your source data format and identifiers support your expectations.

For detailed instructions on how to access entities using the [!DNL Real-Time Customer Profile] API, please refer to the [entities endpoint guide](../api/entities.md), also known as the "[!DNL Profile Access] API".

## Update Profile Store data

Occasionally it may be necessary to update data in your organization's Profile Store. For example, you may need to correct records or change an attribute value. This can be done through batch ingestion and requires a Profile-enabled dataset configured with an upsert tag. For more information on how to configure a dataset for attribute updates, please refer to the tutorial for [enabling a dataset for Profile and upsert](../../catalog/datasets/enable-upsert.md).
