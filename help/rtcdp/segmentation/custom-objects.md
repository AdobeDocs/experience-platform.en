---
title: Custom Objects With B2B CDP
description: ???
---

# Using custom objects with B2B CDP

custom objects info

## Create a custom object

### Create a relational schema

To start creating a custom object, you'll first need to create a relational schema to model your data.

Under the **Data management** section, select **Schemas**. On the Schema overview page, select **Create schema** followed by **Relational**.

IMAGE

The **Create relational schema** page appears. You can add the details of the schema including the display name, description, and the schema behavior. 

IMAGE

| Schema behavior | Description |
| --------------- | ----------- |
| Record | Record data provides information about the attributes of a subject. This subject can be an organization or an individual. |
| Time series | Time series data provides a snapshot of the system at the time an action was taken either directly or indirectly by a record subject. |

### Add your fields

Once you created your relational schema, you can add the fields for your schema, including marking the primary key and version identifier, in the Schema Editor.

IMAGE

For more information on creating your relational schema, read the [create a schema guide](/help/xdm/ui/resources/schemas.md#create-manually).

### Create a dataset

Once you created your schema, you'll need to create a dataset for the schema's data to go to. 

IMAGE

### Enable the schema for segmentation

In order to use this schema with custom objects in B2B CDP, you **must** mark the schema as enabled for segmentation. Make sure you select **Enable for segmentation** when you create your schema.

IMAGE

## Add your relationships

Now that you've added your fields to your schema, you can define the relationships for those fields. To add a relationship to the field, select **Add relationship** on the field you want to add the relationship to.

IMAGE

The 

how to use them in segment builder

## Next steps