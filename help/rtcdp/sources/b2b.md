---
title: Sources in Real-Time Customer Data Platform B2B Edition
description: An overview of the role of sources in Adobe Real-Time Customer Data Platform B2B Edition.
feature: Sources, Data Ingestion, Get Started, B2B
badgeB2B: label="B2B Edition" type="Informative" url="https://experienceleague.adobe.com/docs/experience-platform/rtcdp/intro/rtcdp-intro/overview.html#rtcdp-editions" newtab=true
exl-id: eeea4b2e-67c5-4491-9b8e-4b8987e44777
TQID: https://experienceleague.adobe.com/D2sQBwXOeLnNT3KTBtRZBCBOSRbOQZSqa-8kCfd24Ac
product_v2:
  - id: fdddec33-c9cb-4459-b8b6-2664395a6f10
    internal-label: Real-Time Customer Data Platform
feature_v2:
  - id: ba929a52-9339-4154-9487-317dc875a3c7
    internal-label: Use cases
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
topic_v2:
  - id: fd2e3797-f2ea-4b36-a9af-52acf5e90513
    internal-label: Customer profiles
---
# Sources in Real-Time Customer Data Platform B2B Edition

>[!NOTE]
>
>If you are not using Adobe Real-Time Customer Data Platform B2B Edition, see the [sources overview](./sources-overview.md) instead.

Adobe Real-Time Customer Data Platform B2B Edition allows you to bring your B2B data through various sources including the [[!DNL Marketo Engage]](../../sources/connectors/adobe-applications/marketo/marketo.md) source connector, Salesforce, Amazon S3, and ADLS among others. This range of sources provides you with the ability to structure, label, and enhance incoming data using services.

To understand how sources fit into your B2B workflow, please see the [end-to-end tutorial](../b2b-tutorial.md#ingest-your-data-into-experience-platform).

See the [source connectors overview](../../sources/home.md) for more information on the types of sources available in Adobe Experience Platform.

>[!IMPORTANT]
>
>You must have access to [Real-Time Customer Data Platform B2B Edition](../../rctcdp/../rtcdp/b2b-overview.md) in order for B2B schemas to participate in [Real-Time Customer Profile](../proile/../../profile/home.md).

The following documents provide more information on using [!DNL Marketo] to bring B2B data to Experience Platform:

* For information on how to connect your [!DNL Marketo] data to Experience Platform, see the tutorial on [creating a Marketo source connector in the UI](../../sources/tutorials/ui/create/adobe-applications/marketo.md).
* For information on the underlying setup for the B2B namespaces and schemas, see the documentation for [B2B namespaces and schemas](../../sources/connectors/adobe-applications/marketo/marketo-namespaces.md).
* For information on finding your [!DNL Marketo] Munchkin ID and generating your credentials, see the [[!DNL Marketo] authentication guide](../../sources/connectors/adobe-applications/marketo/marketo-auth.md).
* For information on the specific mapping rules that apply to [!DNL Marketo] datasets, see the documentation on [[!DNL Marketo] field mappings](../../sources/connectors/adobe-applications//mapping/marketo.md).
