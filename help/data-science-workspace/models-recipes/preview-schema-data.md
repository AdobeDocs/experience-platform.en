---
keywords: Experience Platform;preview schema data;Data Science Workspace;popular topics
solution: Experience Platform
title: Preview the Retail Sales Schema and Dataset
type: Tutorial
description: The following document outlines previewing schemas and datasets on Adobe Experience Platform.
exl-id: dca9835b-4f76-42cc-b262-b20323bf4356
TQID: https://experienceleague.adobe.com/P9JwetjjhK-cBXGuDloDodQqkRH1rS8tWhSxSlMENUk
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: eb30f47f-d87a-400f-8f78-63ce7979ff56
    internal-label: Machine learning
---
# Preview the retail sales schema and dataset

>[!NOTE]
>
>Data Science Workspace is no longer available for purchase.
>
>This documentation is intended for existing customers with prior entitlements to Data Science Workspace.

Upon successful completion of the bootstrap script from the [retail sales schema and dataset](./create-retails-sales-dataset.md) tutorial. Output schemas and datasets can be viewed on [!DNL Experience Platform]. To view the schemas and datasets follow the steps below:

Select the **[!UICONTROL Schemas]** tab located in the left-navigation and find the input schema created by the bootstrap script. The name of the schema will correspond to what was defined in `config.yaml` from the previous step. View the schema details and it's composition by clicking into it.

![](../images/models-recipes/access-data/schema.PNG)

Select the **[!UICONTROL Datasets]** tab located in the left navigation and open the input dataset that was created by selecting the name of the dataset. The name of the dataset corresponds to what was defined in `config.yaml` from the previous step. 

![](../images/models-recipes/access-data/dataset.PNG)

Select **[!UICONTROL Preview Dataset]** located at the top-right to preview a subset of the dataset.

![](../images/models-recipes/access-data/preview.PNG)

## Next steps

You have now successfully ingested Retail Sales sample data into [!DNL Experience Platform] using the provided bootstrap script.

To continue working with the ingested data:

- [Analyze your data using Jupyter Notebooks](../jupyterlab/analyze-your-data.md)
    - Use Jupyter Notebooks in [!DNL Data Science Workspace] to access, explore, visualize, and understand your data.
- [Package source files into a Recipe](./package-source-files-recipe.md)
    - Follow this tutorial to learn how to bring your own Model into [!DNL Data Science Workspace] by packaging source files in an importable Recipe file.
