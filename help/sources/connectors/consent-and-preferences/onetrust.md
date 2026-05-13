---
title: OneTrust Integration Source Connector Overview
description: Learn how to connect OneTrust Integration to Adobe Experience Platform using APIs or the user interface.
exl-id: f2229d4d-8aa6-483a-9156-403309f80007
TQID: https://experienceleague.adobe.com/zfabZWFAfpWKcRj5-zRiVSvuFUZaD5qibCnp22Hp1lc
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# [!DNL OneTrust Integration] source

>[!NOTE]
>
>The [!DNL OneTrust Integration] source only supports ingestion of consent and preferences data and not cookies. For issues with the source connector, contact [[!DNL OneTrust] support](https://support.onetrust.com).

[!DNL OneTrust] is a privacy, security, and trust management platform designed to help organizations manage data responsibly, comply with regulations, and build trust with customers and stakeholders. It provides a unified suite of tools for data governance, risk management, and compliance automation.

Use the [!DNL OneTrust Integration] source to connect your account and ingest consent and preference data to Experience Platform.

>[!IMPORTANT]
>
>With the [!DNL OneTrust Integration] source, each run only ingests new data that was created after the previous run, even if the previous run did not complete successfully.

## Connect [!DNL OneTrust Integration] to Experience Platform using APIs

- [Create a [!DNL OneTrust Integration] source connection and dataflow using the Flow Service API](../../tutorials/api/create/consent-and-preferences/onetrust.md)

## Connect [!DNL OneTrust Integration] to Experience Platform using the UI

- [Create a [!DNL OneTrust Integration] source connection in the UI](../../tutorials/ui/create/consent-and-preferences/onetrust.md)
- [Create a dataflow for a consent and preferences source connection in the UI](../../tutorials/ui/dataflow/consent-and-preferences.md)
