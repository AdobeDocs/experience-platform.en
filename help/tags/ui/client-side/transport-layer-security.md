---
title: Transport Layer Security (TLS) Information
description: Information regarding what TLS versions and ciphers are used
exl-id: 04948cd8-6cf0-4159-a9d3-3130b97af106
---
# Transport Layer Security (TLS) Information

Transport Layer Security (TLS) is a cryptographic protocol that provides end-to-end security for data sent between applications over the internet. For more detailed information on TLS, read the [TLS basics](https://www.internetsociety.org/deploy360/tls/basics/) documentation.

Tags in Adobe Experience Platform are a tag management system that is designed to dynamically load scripts on your website. TLS secures the communication between the Adobe host `assets.adobedtm.com` and your website when these scripts are loaded.

There are multiple TLS versions available, and it supports a number of different ciphers.. Not all versions and ciphers are the same as some are considered less or more secure than others.

## Supported TLS versions and Ciphers

The Adobe host option currently supports the following TLS versions and ciphers:

```
PORT    STATE SERVICE
443/tcp open  https
| ssl-enum-ciphers:
|   TLSv1.2:
|     ciphers:
|       TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 (secp256r1) - A
|       TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 (secp256r1) - A
|       TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256 (secp256r1) - A
|       TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256 (secp256r1) - A
|       TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 (secp256r1) - A
|       TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 (secp256r1) - A
|     compressors:
|       NULL
|     cipher preference: server
|   TLSv1.3:
|     ciphers:
|       TLS_AKE_WITH_AES_128_GCM_SHA256 (secp256r1) - A
|       TLS_AKE_WITH_AES_256_GCM_SHA384 (secp256r1) - A
|       TLS_AKE_WITH_CHACHA20_POLY1305_SHA256 (secp256r1) - A
|     cipher preference: client
|_  least strength: A
```

### Self-hosting

If you are [self-hosting](../publishing/hosts/self-hosting-libraries.md) your library, then the TLS versions supported will be determined by your own hosting service.
