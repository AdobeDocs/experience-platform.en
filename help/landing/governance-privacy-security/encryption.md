---
title: Data Encryption in Adobe Experience Platform
description: Learn how data is encrypted in transit and at rest in Adobe Experience Platform.
exl-id: 184b2b2d-8cd7-4299-83f8-f992f585c336
---
# Data encryption in Adobe Experience Platform

Adobe Experience Platform is a powerful and extensible system that centralizes and standardizes customer experience data across enterprise solutions. All data utilized by Platform is encrypted in transit and at rest to keep your data secure. This document describes Platform's encryption processes at a high level.

The following process flow diagram illustrates how data is ingested, encrypted, and persisted by Experience Platform:

![A diagram that illustrates how data is ingested, encrypted, and persisted by Experience Platform.](../images/governance-privacy-security/encryption/flow.png)

## Data in transit {#in-transit}

All data in transit between Platform and any external component is conducted over secure, encrypted connections using HTTPS [TLS v1.2](https://datatracker.ietf.org/doc/html/rfc5246) or [OAuth 2.0 Mutual-TLS](https://datatracker.ietf.org/doc/draft-ietf-oauth-mtls/17/).

In general, data is brought into Platform in three ways:

- [Data collection](../../collection/home.md) capabilities allow websites and mobile applications to send data to the Platform Edge Network for staging and preparation for ingestion.
- [Source connectors](../../sources/home.md) stream data directly to Platform from Adobe Experience Cloud applications and other enterprise data sources.
- Non-Adobe ETL (extract, transform, load) tools send data to the [batch ingestion API](../../ingestion/batch-ingestion/overview.md) for consumption.

After data has been brought into the system and [encrypted at rest](#at-rest), it can then be enriched by Platform services and brought out of the system in the following ways:

- [Destinations](../../destinations/home.md) allow you to activate data to Adobe applications and partner applications.
- Native Platform applications such as [Customer Journey Analytics](https://experienceleague.adobe.com/docs/analytics-platform/using/cja-overview/cja-overview.html) and [Adobe Journey Optimizer](https://experienceleague.adobe.com/docs/journey-optimizer/using/ajo-home.html) can also make use of the data.

### mTLS Protocol Support:

<!-- Release notes blurb below -->

<!-- Build customer trust with the strengthened security measures of the Mutual Transport Layer Security (mTLS) protocol. Experience Platform HTTP API destination and Adobe Journey Optimizer custom actions now support the mTLS protocol when sending data to configured endpoints. No additional configuration is required in your custom action or HTTP API destination to activate mTLS; this process occurs automatically when an mTLS-enabled endpoint is detected.
Although Adobe does not require the use of the Common Name (CN) or the Subject Alternative Name (SAN) for additional validation, you should validate the certificate within your environment or infrastructure if your endpoints require this additional information. You can [download the Adobe Journey Optimizer public certificate here](LINK_TBC) and the [Destinations Service public certificate here](LINK_TBC).
See the [Experience Platform data encryption documentation](LINK_TBC) for more information on network connection protocols when exporting data to third-party systems.   -->

<!-- ################ -->

<!-- Mutual TLS (mTLS) is an AEP-driven feature that provides added security for sending data between AJO and a customer's endpoint. In AJO, mTLS will be used in conjunction with the Custom Action activity. However, there is nothing to configure within AJO to enable mTLS - when Custom Actions senses that the endpoint it is trying to reach is mTLS-enabled, it will fetch the certificate from the AEP keystore and provide it to the endpoint as required for mTLS connections. -->

You can now use Mutual Transport Layer Security (mTLS) to ensure enhanced security in a communication exchanges between Experience Platform, Adobe Journey Optimizer and your third-party systems. mTLS is an end-to-end security method for mutual authentication that ensures that both parties sharing information are who they claim to be before data is shared. mTLS includes an additional step compared to TLS, in which the server also asks for the client's certificate and verifies it at their end. That extra step makes this protocol more secure than TLS.

In Adobe Journey Optimizer, mTLS is used in conjunction with [custom actions](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/orchestrate-journeys/about-journey-building/using-custom-actions). No additional [configuration for AJO custom actions](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/configuration/configure-journeys/action-journeys/about-custom-action-configuration) is required on your part to enable mTLS. 

When the endpoint for the custom actions is mTLS-enabled, the system fetches the certificate from the Adobe Experience Platform keystore and automatically provides it to the endpoint (as is required for mTLS connections). 

>[!IMPORTANT]
>
>No additional configuration is required in your Adobe Journey Optimizer custom action or journey to activate mTLS; this process occurs automatically when an mTLS-enabled endpoint is detected. Although Adobe does not require the use of the Common Name (CN) or the Subject Alternative Name (SAN) for additional validation, you should validate the certificate within your environment or infrastructure if your endpoints require this additional information. For this reason, the CN and SANs for each certificate are available in the documentation and as part of the certificate and can be used as an additional layer of ownership validation if you wish to do so.
>NOTE: RFC 2818, published in May 2000, deprecates the use of the Common Name (CN) field in HTTPS certificates for subject name verification. Instead, it recommends using the "Subject Alternative Name" extension (SAN) of the "dns name" type.

If you intend to use mTLS with these Adobe Journey Optimizer and Experience Platform HTTP API destination workflows, the server address you put into the AJO customer action UI or the Destinations UI must have TLS protocols disabled and ONLY mTLS enabled. If the TLS 1.2 protocol is still enabled on that endpoint, no certificate is sent for the client authentication. This means that to use mTLS with these workflows, your "recieving" server endpoint must be an mTLS **only** enabled connection endpoint.

### Download certificates {#download-certificates}

>[!NOTE]
>
>Adobe Journey Optimizer custom actions now support Mutual TLS (mTLS) protocol. No additional configuration is required in your custom action or journey to activate mTLS; this process occurs automatically when an mTLS-enabled endpoint is detected. If your endpoints require the Common Name (CN) or the Subject Alternative Name (SAN) for additional validation, you can [download the Adobe Journey Optimizer public certificate here](../images/governance-privacy-security/encryption/AJO-public-certificate.pem). 

If you want to check the CN or SAN to do additional third party validation, can can download the relevant certificates here:

- [The Adobe Journey Optimizer public certificate](../images/governance-privacy-security/encryption/AJO-public-certificate.pem) 
- [The Destinations Service public certificate](../images/governance-privacy-security/encryption/destinations-public-cert.pem).

<!-- 
The doc update should include the corresponding certificate (Custom actions are used to connect and send messages or API calls to third-party systems). Users should validate the specific outbound connection certificate on their side, checking the CN and expiry date of the certificate. You can use this placeholder and I will insert the link personally {AJO Public Cert}. 
-->

<!-- >[!NOTE]
>
>Adobe Platform Destinations Service HTTP API supports mTLS protocol & share corresponding certificate (you can use this placeholder and I will insert the link personally {Destinations_public_Cert}. -->

## Data at rest {#at-rest}

Data that is ingested and used by Platform is stored in the data lake, a highly granular data store containing all data managed by the system, regardless of origin or file format. All data persisted in the data lake is encrypted, stored, and managed in an isolated [[!DNL Microsoft Azure Data Lake] Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction) instance that is unique to your organization.

For details on how data at rest is encrypted in Azure Data Lake Storage, see the [official Azure documentation](https://learn.microsoft.com/en-us/azure/storage/common/storage-service-encryption).

## Next steps

This document provided a high-level overview of how data is encrypted in Platform. For more information on security procedures in Platform, see the overview on [governance, privacy, and security](./overview.md) on Experience League, or take a look at the [Platform security whitepaper](https://www.adobe.com/content/dam/cc/en/security/pdfs/AEP_SecurityOverview.pdf).
