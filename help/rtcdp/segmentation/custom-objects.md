---
title: Custom Objects With B2B CDP
description: ???
---

# Using custom objects with B2B CDP

custom objects info

## Create a relational schema

To start creating a custom object, you'll first need to create a relational schema to model your data.

Under the **Data management** section, select **Schemas**. On the Schema overview page, select **Create schema** followed by **Relational**.

IMAGE

The **Create relational schema** page appears. You can add the details of the schema including the display name, description, and the schema behavior. 

IMAGE

| Schema behavior | Description |
| --------------- | ----------- |
| Record | Record data provides information about the attributes of a subject. This subject can be an organization or an individual. |
| Time series | Time series data provides a snapshot of the system at the time an action was taken either directly or indirectly by a record subject. |

## Add your fields

Once you created your relational schema, you can add the fields for your schema, including marking the primary key and version identifier, in the Schema Editor.

IMAGE

For more information on creating your relational schema, read the [create a schema guide](/help/xdm/ui/resources/schemas.md#create-manually).

### Create a dataset

Once you created your schema, you'll need to create a dataset for the schema's data to go to. 

IMAGE

For more information on creating a dataset, read the [create a dataset guide](/help/catalog/datasets/user-guide.md#create)

## Enable the schema for segmentation

Once you've created your dataset, you can now enable the schema for segmentation. You **must** mark the schema as enabled for segmentation in order to use this schema with custom objects in B2B CDP.

IMAGE

## Add your relationships

Now that you've enabled your schema for segmentation, you can continue creating your schema by defining the relationships for the schema's fields. To add a relationship to the field, select **Add relationship** on the field you want to add the relationship to.

IMAGE

The 

## Ingest data into the dataset

>[!IMPORTANT]
>
>You **must** include a file that includes `_change_request_type` within the source, as this lets Experience Platform know that the data will be used for custom objects.

With your schema fully created, you can start ingesting data from your source into the dataset. 

To get data from your source to Experience Platform, you'll need to create a dataflow to ingest batch data from your source into the dataset.

For more information on creating a dataflow, read the [configure a dataflow to ingest batch data from a cloud storage source guide](/help/sources/tutorials/ui/dataflow/batch/cloud-storage.md).

>[!NOTE]
>
>When you create your dataflow, keep the following items in mind:
>
>- You **must** enable **[!UICONTROL Enable change data capture]**. 
>- You **must** select the dataset you previously created.
>- You do **not** need to map the `_change_request_type` field in your dataflow.

## Use custom object in Audience Builder

Now that your dataflow has been created, you can use the custom object data within Audience Builder.

IMAGE

## Next steps

