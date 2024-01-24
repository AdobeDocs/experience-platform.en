---
keywords: Experience Platform;home;popular topics;Query service;query service;connect;connect to query service;aqua data studio;Aqua Data Studio;Looker;looker;Postico;postico;Power BI;power bi;psql;rstudio;PSQL;RStudio;Tableau;tableau;
solution: Experience Platform
title: Connect Clients to Query Service
description: This document explains how to connect to Query Service from a variety of desktop client applications and how to verify those connections.
exl-id: 2ba20179-5adb-4259-a120-231a40e78054
---
# Connect clients to [!DNL Query Service]

This section explains how to connect to [!DNL Query Service] from a variety of desktop client applications and how to verify those connections. [!DNL Query Service] uses the [!DNL PostgreSQL] protocol, so the instructions in this section explain how to use [!DNL PostgreSQL] tools and drivers to connect and write queries.

>[!IMPORTANT]
>
>The TLS/SSL certificates on Production environments for the Query Service Interactive Postgres API were refreshed on Wednesday 24th January 2024.<br>Although this is an annual requirement, on this occasion the root certificate in the chain has also changed as Adobe's TLS/SSL certificate provider have updated their certificate hierarchy. This can impact certain Postgres clients if their list of Certificate Authorities are missing the root cert. For example, a PSQL CLI client may need to have the root certs added to an explicit file `~/postgresql/root.crt`, otherwise this can result in an error. For example, `psql: error: SSL error: certificate verify failed`. See the [official PostgreSQL documentation](https://www.postgresql.org/docs/current/libpq-ssl.html#LIBQ-SSL-CERTIFICATES) for more information on this issue.<br>The root certificate to add can be downloaded from [https://cacerts.digicert.com/DigiCertGlobalRootG2.crt.pem](https://cacerts.digicert.com/DigiCertGlobalRootG2.crt.pem).

Instructions are provided for the following clients:

- [[!DNL Aqua Data Studio]](./aqua-data-studio.md)
- [[!DNL DbVisualizer]](./dbvisulaizer.md)
- [[!DNL Looker]](./looker.md)
- [[!DNL Postico (Mac)]](./postico.md)
- [[!DNL Power BI (PC)]](./power-bi.md)
- [[!DNL PSQL]](./psql.md)
- [[!DNL RStudio]](./rstudio.md)
- [[!DNL Tableau]](./tableau.md)
