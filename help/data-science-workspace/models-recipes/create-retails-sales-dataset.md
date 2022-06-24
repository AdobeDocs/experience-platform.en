---
keywords: Experience Platform;retail sales recipe;Data Science Workspace;popular topics;recipes
solution: Experience Platform
title: Create the Retail Sales Schema and Dataset
topic-legacy: tutorial
type: Tutorial
description: This tutorial provides you with the prerequisites and assets required for all other Adobe Experience Platform Data Science Workspace tutorials. Upon completion, the Retail Sales schema and datasets will be available for you and members of your IMS Organization on Experience Platform.
exl-id: 1b868c8c-7c92-4f99-8486-54fd7aa1af48
---

# Create the retail sales schema and dataset

This tutorial provides you with the prerequisites and assets required for all other [!DNL Adobe Experience Platform] [!DNL Data Science Workspace] tutorials. Upon completion, the Retail Sales schema and datasets will be available for you and members of your IMS Organization on [!DNL Experience Platform].

## Getting started

Before starting this tutorial, you must have the following prerequisites:
-   Access to [!DNL Adobe Experience Platform]. If you do not have access to an IMS Organization in [!DNL Experience Platform], please speak to your system administrator before proceeding.
-   Authorization to make [!DNL Experience Platform] API calls. Complete the [Authenticate and access Adobe Experience Platform APIs](https://www.adobe.com/go/platform-api-authentication-en) tutorial to obtain the following values in order to successful complete this tutorial:
    -   Authorization: `{ACCESS_TOKEN}`
    -   x-api-key: `{API_KEY}`
    -   x-gw-ims-org-id: `{ORG_ID}`
    -   Client secret: `{CLIENT_SECRET}`
    -   Client certificate: `{PRIVATE_KEY}`
-   Sample data and source files for the [Retail Sales Recipe](../pre-built-recipes/retail-sales.md). Download the assets required for this and other [!DNL Data Science Workspace] tutorials from the [Adobe public Git repository](https://github.com/adobe/experience-platform-dsw-reference/).
-   [Python >= 2.7](https://www.python.org/downloads/) and the following [!DNL Python] packages:
    -   [pip](https://pypi.org/project/pip/)
    -   [PyYAML](https://pyyaml.org/)
    -   [dictor](https://pypi.org/project/dictor/)
    -   [JWT](https://pypi.org/project/jwt/)
-   A working understanding of the following concepts used in this tutorial:
    -   [[!DNL Experience Data Model (XDM)]](../../xdm/home.md)
    -   [Basics of schema composition](../../xdm/schema/field-dictionary.md)

## Create Retail Sales schema and dataset

The Retail Sales schema and datasets are created automatically by using the provided bootstrap script. Follow the steps below in order:

### Configure files

1.  Inside the [!DNL Experience Platform] tutorial resource package, navigate into the directory `bootstrap`, and open `config.yaml` using an appropriate text editor. 
2.  Under the `Enterprise` section, input the following values:

    ```yaml
    Enterprise:
        api_key: {API_KEY}
        org_id: {ORG_ID}
        tech_acct: {technical_account_id}
        client_secret: {CLIENT_SECRET}
        priv_key_filename: {PRIVATE_KEY}
    ```

3.  Edit the values found under the `Platform` section, Example shown below:

    ```yaml
    Platform:
        platform_gateway: https://platform.adobe.io
        ims_token: {ACCESS_TOKEN}
        ingest_data: "True"
        build_recipe_artifacts: "False"
        kernel_type: Python
    ```

    -   `platform_gateway`: The base path for API calls. Do not modify this value.
    -   `ims_token`: Your `{ACCESS_TOKEN}` goes here.
    -   `ingest_data`: For the purpose of this tutorial, set this value as `"True"` in order to create the Retail Sales schemas and datasets. A value of `"False"` will only create the schemas.
    -   `build_recipe_artifacts`: For the purpose of this tutorial, set this value as `"False"` to prevent the script from generating a Recipe artifact.
    -   `kernel_type`: The execution type of the Recipe artifact. Leave this value as `Python` if `build_recipe_artifacts` is set as `"False"`, otherwise specify the correct execution type.

4.  Under the `Titles` section, provide the following information appropriately for the Retail Sales sample data, save and close the file after edits are in place. Example shown below:

    ```yaml
    Titles:
        input_class_title: retail_sales_input_class
        input_mixin_title: retail_sales_input_mixin
        input_mixin_definition_title: retail_sales_input_mixin_definition
        input_schema_title: retail_sales_input_schema
        input_dataset_title: retail_sales_input_dataset
        file_replace_tenant_id: DSWRetailSalesForXDM0.9.9.9.json
        file_with_tenant_id: DSWRetailSales_with_tenant_id.json
        is_output_schema_different: "True"
        output_mixin_title: retail_sales_output_mixin
        output_mixin_definition_title: retail_sales_output_mixin_definition
        output_schema_title: retail_sales_output_title
        output_dataset_title: retail_sales_output_dataset
    ```

### Run the bootstrap script

1.  Open your terminal application and navigate to the [!DNL Experience Platform] tutorial resource directory.
2.  Set the `bootstrap` directory as the current working path and run the `bootstrap.py` [!DNL Python] script by entering the following command:

    ```bash
    python bootstrap.py
    ```

    >[!NOTE]
    >
    >The script may take several minutes to complete.

## Next steps

Upon successful completion of the bootstrap script, the Retail Sales input and output schemas and datasets can be viewed on [!DNL Experience Platform]. See the [preview schema data tutorial](./preview-schema-data.md)
for more information.

You have also successfully ingested Retail Sales sample data into [!DNL Experience Platform] using the provided bootstrap script.

To continue working with the ingested data:
- [Analyze your data using Jupyter Notebooks](../jupyterlab/analyze-your-data.md)
    - Use Jupyter Notebooks in Data Science Workspace to access, explore, visualize, and understand your data.
- [Package source files into a Recipe](./package-source-files-recipe.md)
    - Follow this tutorial to learn how to bring your own Model into [!DNL Data Science Workspace] by packaging source files in an importable Recipe file.
