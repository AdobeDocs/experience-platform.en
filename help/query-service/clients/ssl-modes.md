---
keywords: Experience Platform;home;popular topics;Query service;query service;connect;connect to query service;SSL;ssl;sslmode;
solution: Experience Platform
title: How to Connect to Query Service Using Verify-full SSL Mode
topic-legacy: connect
description: This document explains how to connect to Query Service using verify-full SSL mode.
---
# How to connect to [!DNL Query Service] using verify-full SSL mode

For increased security, PostgreSQL provides native support for SSL connections to encrypt client/server communications. There are various SSL modes available to cater for different security needs as the different values for the `sslmode` parameter provide different levels of protection. By encrypting your data in motion with SSL certificates, it helps to prevent 'man-in-the-middle' (MITM) attacks, eavesdropping and impersonation.

You are recommended at a minimum, to use `sslmode=require` to ensure a secure connection for your data in motion. However, the `verify-full` SSL mode is recommended in most security-sensitive environments.

"All SSL options carry overhead in the form of encryption and key-exchange, so there is a tradeoff that has to be made between performance and security." 

The table below provides a breakdown of the different SSL modes available and the level of protection they provide.

|  sslmode |  Eavesdropping protection | MITM protection  | Description  |
|---|---|---|---|
| `disable`  | No  | No  | I don't care about security, and I don't want to pay the overhead of encryption.  |
| `allow`  | Partial  | No  | I don't care about security, but I will pay the overhead of encryption if the server insists on it.  |
| `prefer`  | Partial  | No  | I don't care about encryption, but I wish to pay the overhead of encryption if the server supports it.  |
| `require`  | Yes  | No  | I want my data to be encrypted, and I accept the overhead. I trust that the network will make sure I always connect to the server I want.  |
| `verify-ca`  | Yes  | Depends on CA-policy  |  I want my data encrypted, and I accept the overhead. I want to be sure that I connect to a server that I trust. |
| `verify-full`  | Yes  | Yes  | I want my data encrypted, and I accept the overhead. I want to be sure that I connect to a server I trust, and that it's the one I specify.  |

This document provides guidance on how to connect a third-party client to query service using the `verify-full` SSL parameter value.

## Why you must use SSL

"For a connection to be known secure, SSL usage must be configured on both the client and the server before the connection is made. If it is only configured on the server, the client may end up sending sensitive information (e.g. passwords) before it knows that the server requires high security."

  "By default, PostgreSQL will not perform any verification of the server certificate." "The client must be able to verify the server's identity via a chain of trust."

"To allow the client to verify the identity of the server, place a root (self-signed) certificate on the client (`root.crt`) and a leaf certificate signed by the root certificate on the server."

"If the parameter `sslmode` is set to `verify-full` libpq will verify that the server is trustworthy by checking the certificate chain up to the root certificate stored on the client and will also verify that the server host name matches the name stored in the server certificate.


"To allow server certificate verification, one or more root certificates must be placed in the file `~/.postgresql/root.crt` in your home directory."

<!--  -->

If you need stricter security control than `sslmode=require`, you can follow the steps highlighted to connect a third-party client to [!DNL Query Service] using `verify-full` SSL mode.

1. Navigate to: [https://www.digicert.com/kb/digicert-root-certificates.htm](https://www.digicert.com/kb/digicert-root-certificates.htm)
1. Search for `[!DNL DigiCert Global Root CA]` from the list of available Root certificates.
1. Select '[!DNL Download PEM]' to download the file to your local machine.
1. Rename the file to `root.crt`.
1. Copy the file to the postgreSQL folder. The necessary file path is different depending on your operating system. If the folder does not already exist, create the folder. 
    - If you are using a [!DNL macOS] the path is: `/Users/<username>/.postgresql`
    - If you are using a [!DNL Windows] machine the path is: `%appdata%\postgresql`

>[!TIP]
>
>Press [!DNL Windows] key + 'R' and input `%appdata%` into the search field to check which folder it resolves to.

After the `[!DNL DigiCert Global Root CA]` crt file is available in your postgreSQL folder, you can connect to Query Service using the `sslmode=verify-full` option.

<!-- "If you have completed the steps shown above, then the Certificate Revocation List (CRL) entries are also checked as part of the server certificate verification. The location of the root certificate file and the CRL can be changed by setting the connection parameters `sslrootcert` and `sslcrl` or the environment variables `PGSSLROOTCERT` and `PGSSLCRL`. `sslcrldir` or the environment variable `PGSSLCRLDIR` can also be used to specify a directory containing CRL files." -->

