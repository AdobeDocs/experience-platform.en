---
keywords: Experience Platform;home;popular topics;Query service;query service;connect;connect to query service;SSL;ssl;sslmode;
solution: Experience Platform
title: Query Service SSL options
description: This document explains the SSL options available for third-party connections to Query Service and how to connect using verify-full SSL mode.
---
# [!DNL Query Service] SSL options

For increased security, Adobe Experience Platform [!DNL Query Service] provides native support for SSL connections to encrypt client/server communications. The different `sslmode` parameter values provide different levels of protection to cater to different security needs. By encrypting your data in motion with SSL certificates, it helps to prevent 'man-in-the-middle' (MITM) attacks, eavesdropping, and impersonation.

Adobe Experience Platform assists you in your General Data Protection Regulation (GDPR) compliance journey by implementing a set of certified security processes and controls. See the [governance, privacy, and security documentation](../../landing/governance-privacy-security/overview.md) to learn more about how to control and monitor the collection and use of customer experience data. These documents detail the potential legal obligations and jurisdictions of your data operations and the necessary organizational policies regarding your data usage. 

This document provides guidance on the available SSL options for third-party client connections to [!DNL Query Service] and how to connect using the `verify-full` SSL parameter value.

## Prerequisites

To acquire the necessary credentials for connecting a third-party client to Experience Platform, you must have access to the Queries workspace in the Platform UI. Please contact your IMS Organization administrator if you do not currently have access to the Queries workspace.

## Available SSL options

Due to the processing overhead of encryption and key exchange in all SSL options, Platform supports various SSL options to best suit your data security needs. 

When establishing a third-party connection to a Platform database, you are recommended to use `sslmode=require` at a minimum to ensure a secure connection for your data in motion. The `verify-full` SSL mode is recommended for use in most security-sensitive environments.

The table below provides a breakdown of the different SSL modes available and the level of protection they provide.

>[!NOTE]
>
> The SSL value `disable` is not supported by Adobe Experience Platform due to the requisite data protection compliance. 

|  sslmode |  Eavesdropping protection | MITM protection  | Description  |
|---|---|---|---|
| `allow`  | Partial  | No  | Security is not a priority, speed and a low processing overhead are more important. This mode only opts for encryption if the server insists on it.  |
| `prefer`  | Partial  | No  | Encryption is not required but the communication will be encrypted if the server supports it.  |
| `require`  | Yes  | No  | Encryption is required on all communications. The network is trusted to connect to the correct server. Server SSL certificate validation is not required. |
| `verify-ca`  | Yes  | Depends on CA-policy  | Encryption is required on all communications. Server validation is required before data is shared. |
| `verify-full`  | Yes  | Yes  | Encryption is required on all communications. Server validation is required before data is shared.  |

## Why you must use SSL

To ensure a secure connection, SSL usage must be configured on both the client and the server before the connection is made. If the SSL is only configured on the server, the client might send sensitive information such as passwords before it is established that the server requires high security.

By default, [!DNL PostgreSQL] does not perform any verification of the server certificate. To verify the server's identity and ensure a secure connection before any sensitive data is sent (as part of the SSL `verify-full` mode), you must place a root (self-signed) certificate on your local machine (`root.crt`) and a leaf certificate signed by the root certificate on the server.

If the `sslmode` parameter is set to `verify-full`, libpq will verify that the server is trustworthy by checking the certificate chain up to the root certificate stored on the client. It then verifies that the server host name matches the name stored in the server certificate.

To allow server certificate verification, you must place one or more root certificates (`root.crt`) in the [!DNL PostgreSQL] file in your home directory. The file path would be similar to `~/.postgresql/root.crt`.

## Enable verify-full SSL mode for use with a third-party [!DNL Query Service] connection 

If you need stricter security control than `sslmode=require`, you can follow the steps highlighted to connect a third-party client to [!DNL Query Service] using `verify-full` SSL mode.

>[!NOTE]
>
>DigiCert is a trusted global provider of high-assurance TLS/SSL, PKI, IoT and signing solutions.

1. Navigate to [the list of available DigiCert root certificates](https://www.digicert.com/kb/digicert-root-certificates.htm)
1. Search for '[!DNL DigiCert Global Root CA]' from the list of available certificates.
1. Select [!DNL **Download PEM**] to download the file to your local machine.
![The list of available DigiCert root certificates with Download PEM highlighted.](../images/clients/ssl-modes/digicert.png)
1. Rename the security certificate file to `root.crt`.
1. Copy the file to the [!DNL PostgreSQL] folder. The necessary file path is different depending on your operating system. If the folder does not already exist, create the folder. 
    - If you are using a [!DNL macOS] the path is: `/Users/<username>/.postgresql`
    - If you are using a [!DNL Windows] machine the path is: `%appdata%\postgresql`

>[!TIP]
>
>To find your `%appdata%` file location on a [!DNL Windows] operating system, press [!DNL Windows] key + 'R' and input `%appdata%` into the search field.

After the `[!DNL DigiCert Global Root CA]` CRT file is available in your [!DNL PostgreSQL] folder, you can connect to [!DNL Query Service] using the `sslmode=verify-full` option.

## Next steps

By reading this document, you have enabled the `verify-full` SSL option and have a better understanding of what SSL options are available to encrypt your data in motion. If you have not done so already, you are recommended to follow the guidance on [connecting a third-party client to [!DNL Query Service]](./overview.md).
