---
title: Adobe Experience Platform Release Notes
description: Experience Platform release notes September 9, 2020
doc-type: release notes
last-update: September 8, 2020
author: crhoades, ens28527
---

# Adobe Experience Platform release notes 

**Release date: September 9, 2020**

Updates to existing features in Adobe Experience Platform:

* [[!DNL Data Governance]](#governance)
* [[!DNL Privacy Service]](#privacy)

## [!DNL Data Governance] {#governance}

Adobe Experience Platform Data Governance is a series of strategies and technologies used to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data usage. It plays a key role within [!DNL Experience Platform] at various levels, including cataloging, data lineage, data usage labeling, data access policies, and access control on data for marketing actions.

**New features**

| Feature | Description |
| --- | --- |
| Dataset labeling UI enhancements | Several new sorting and filtering controls have been added to the dataset labeling UI in order to make working with large schemas easier: <ul><li>Sort fields by alphabetic order based on the full schema path.</li><li>Perform partial searches on field path names.</li><li>Filter fields with no labels, a selected label, or a label category.</li></ul> |

See the [Data Governance overview](../../data-governance/home.md) for more information on the service.

## [!DNL Privacy Service] {#privacy}

Several legal and organizational regulations give users the right to access or delete their personal data from your data stores upon request. Adobe Experience Platform [!DNL Privacy Service] provides a RESTful API and user interface to help you manage these data requests from your customers. With [!DNL Privacy Service], you can submit requests to access and delete private or personal customer data from Adobe Experience Cloud applications, facilitating automated compliance with legal and organizational privacy regulations.

**New features**

| Feature | Description |
| --- | --- |
| Support for LGPD (Brazil) | Privacy jobs can now be created under Brazil's [!DNL Lei Geral de Proteção de Dados] (LGPD) regulation. These jobs are tracked under the regulation code `lgpd_bra`. |

See the [Privacy Service overview](../../privacy-service/home.md) for more information on the service.