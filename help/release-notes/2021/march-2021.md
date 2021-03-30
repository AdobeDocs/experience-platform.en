---
title: Adobe Experience Platform Release Notes
description: Experience Platform release notes for March 31, 2021.
doc-type: release notes
last-update: March 31, 2021
author: ens72741
---

# Adobe Experience Platform release notes 

**Release date: March 31, 2021**

New features in Adobe Experience Platform:


Updates to existing features in Adobe Experience Platform:

- [[!DNL Data Prep]](#data-prep)
- [[!DNL Segmentation Service]](#segmentation)

[!DNL Data Prep] allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM).

| Feature | Description |
| ------- | ----------- |
| Add to array function | Updated functionality to support arrays as a parameter. |
| To array function | Updated functionality to support objects as a parameter. |

For more information, please see the [[!DNL Data Prep] overview](../../data-prep/home.md).

## Segmentation Service {#segmentation}

Adobe Experience Platform Segmentation Service provides a user interface and RESTful API that allows you to build segments and generate audiences from your [!DNL Real-time Customer Profile] data. These segments are centrally configured and maintained on [!DNL Platform], making them readily accessible by any Adobe application.

[!DNL Segmentation Service] defines a particular subset of profiles by describing the criteria that distinguishes a marketable group of people within your customer base. Segments can be based on record data (such as demographic information) or time series events representing customer interactions with your brand.

**New features**

| Feature | Description |
| ------- | ----------- |
| (Beta) Edge segmentation | Edge segmentation lets users instantaneously evaluate segments definitions. More information about edge segmentation can be found in the [segmentation UI overview](../../segmentation/ui/overview.md).  |
| (Beta) Incremental segmentation | Increases the freshness of existing segment definitions evaluated used batch segmentation to up to an hour. |

For more information on [!DNL Segmentation Service], please see the [Segmentation overview](../../segmentation/home.md).
