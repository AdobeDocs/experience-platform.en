---
title: Custom Objects With B2B CDP
description: Learn how to create a one-to-many relationship custom object for B2B CDP.
---

# Use custom objects with B2B CDP

B2B CDP supports custom objects with one-to-many (1:M) relationships. You can use these custom objects in segmentation and Query Service use cases. For example, you can model custom CRM objects, track product entitlements and purchases, and manage customer offers.

## Create a relational schema {#create-relational}

To start connecting your custom object using a one-to-many relationship, you'll first need to create a relational schema to model your data.

Under the **[!UICONTROL Data management]** section, select **[!UICONTROL Schemas]**. On the Schema overview page, select **[!UICONTROL Create schema]** followed by **[!UICONTROL Relational]**.

![The Schemas section under Data management is highlighted, as well as the Relational button under the Create schema area.](/help/rtcdp/assets/segmentation/custom-objects/create-relational.png)

The **[!UICONTROL Create relational schema]** page appears. You can add the details of the schema including the display name, description, and the schema behavior. 

![The create a schema page is displayed.](/help/rtcdp/assets/segmentation/custom-objects/create-schema.png)

>[!IMPORTANT]
>
>Currently, only **record** data is supported. Time series data is **not** supported at this time.

| Schema behavior | Description |
| --------------- | ----------- |
| Record | Record data provides information about the attributes of a subject. This subject can be an organization or an individual. |

<!-- | Time series | Time series data provides a snapshot of the system at the time an action was taken either directly or indirectly by a record subject. | -->

## Add your fields {#add-fields}

Once you created your relational schema, you can add the fields for your schema, including marking the primary key and version identifier, in the Schema Editor.

![The add a field button is highlighted within the Schema Editor.](/help/rtcdp/assets/segmentation/custom-objects/add-field.png)

For more information on creating your relational schema, read the [create a schema guide](/help/xdm/ui/resources/schemas.md#create-manually).

## Create a dataset {#create-dataset}

Once you created your schema, you'll need to create a dataset that uses the schema to house your custom objects data.

![The previously created schema is selected on the create dataset page.](/help/rtcdp/assets/segmentation/custom-objects/create-dataset.png)

For more information on creating a dataset, read the [create a dataset guide](/help/catalog/datasets/user-guide.md#create)

## Enable the schema for segmentation {#enable-schema}

>[!NOTE]
>
>If you are **only** using custom objects with Query Service, you do **not** need to enable the schema for segmentation.
>
>Additionally, you can only enable a maximum of **20** schemas per sandbox for segmentation. Once a schema is enabled, you **cannot** disable the schema from segmentation - you have to delete the schema in order to remove it.

Once you've created your dataset, you can now enable the schema for segmentation. You **must** mark the schema as enabled for segmentation in order to use this schema for segmentation use cases with custom objects in B2B CDP.

![The toggle to enable the schema for segmentation is highlighted.](/help/rtcdp/assets/segmentation/custom-objects/enable-for-segmentation.png)

## Add your relationships {#add-relationship}

Now that you've enabled your schema for segmentation, you can continue creating your schema by defining the relationships for the schema's fields. To add a relationship to the field, select **[!UICONTROL Add relationship]** on the field you want to add the relationship to.

![The Add relationship button is highlighted within the Schema Editor.](/help/rtcdp/assets/segmentation/custom-objects/select-add-relationship.png)

The relationship editor appears. You can now define the relationship between the field and the schemas.

![The Add relationship popover is displayed, showing an example of a completed relationship.](/help/rtcdp/assets/segmentation/custom-objects/add-relationship.png)

## Ingest data into the dataset {#ingest-data}

>[!IMPORTANT]
>
>You **must** include a file that includes a `_change_request_type` attribute within the source, as this lets Experience Platform know that the data will be used for custom objects. If you want to insert or update data, set `_change_request_type` to `u` for upsert. If you want to delete data, set `_change_request_type` to `d` for delete. 

With your schema fully created, you can start ingesting data from your source into the dataset. 

To get data from your source to Experience Platform, you'll need to create a dataflow to ingest batch data from your source into the dataset. The following source providers are supported: Amazon S3, SFTP, Data Landing Zone, Marketo Connector, Salesforce CRM, Microsoft Dynamics CRM, and HTTP API connectors.

>[!NOTE]
>
>If you use the Marketo Connector, the Marketo Connector can **automatically** create the schema for the selected custom object if the schema doesn't already exist. 
>
>The created schema will be prefixed with `MKTO_CUST_OBJ_$(Custom object name)` and includes the primaryKey and versionDescriptors by default. However, you **must** manually update the schema if changes are required, since modifications made after the schema is generated are **not** automatically applied.
>
>Similarly to the other connectors, you **must** enable the dataset for segmentation and configure relationships.

Your data within your source must conform to the following specifications:

- The file type is either delimited (such as a CSV or TSV) or JSON
- The file contains one row per primary key in the file
- The file's column names match the schema's field names 

>[!NOTE]
>
>When you create your dataflow, keep the following items in mind:
>
>- You **must** enable **[!UICONTROL Enable change data capture]**. 
>- You **must** select the dataset you previously created.
>- You do **not** need to map the `_change_request_type` field in your dataflow.
>- Your ingestion frequency can be up to once every 15 minutes.

For more information on creating a dataflow, read the [configure a dataflow to ingest batch data from a cloud storage source guide](/help/sources/tutorials/ui/dataflow/batch/cloud-storage.md).

## Use custom object in Audience Builder {#use-custom}

Now that your dataflow has been created, you can use the custom object data within Audience Builder. This custom object data can be used for both people audiences and account audiences. 

The custom object can be found under **[!UICONTROL Attributes]** in Audience Builder following the same relationship path that was created for your custom object schema.

![The custom object is highlighted within Audience Builder.](/help/rtcdp/assets/segmentation/custom-objects/audience-builder.png)

## Next steps {#next-steps}

This guide explains how to add one-to-many relationship custom objects to B2B CDP as well as how to use custom object data in segmentation use cases.

To learn more about Audience Builder, read the [Audience Builder guide](./audience-builder.md).
