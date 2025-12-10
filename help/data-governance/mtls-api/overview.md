---
title: MTLS API Guide
description: Learn how to use the mTLS Service API to securely retrieve and verify the public certificates issued by Adobe.
role: Developer
exl-id: eb40691a-a866-4acb-849b-c5dce2d74224
---
# MTLS Service API overview

Use the MTLS Service API to securely retrieve public certificates issued by Adobe for your organization's applications. This API ensures that data exchanges between your customers and Adobe Experience Platform are authenticated and encrypted, providing an additional layer of security. By externally verifying the authenticity of the certificates, you can enhance trust and safeguard sensitive information.

## Public certificate

A public certificate is a digital document used to authenticate the identity of a server or client in secure communications. In the context of the mTLS Service API, these certificates ensure that data exchanges with Adobe Experience Platform are authenticated and encrypted. Retrieving and verifying these certificates through the API confirms their genuineness, enhancing the security and trustworthiness of your data transactions and protecting sensitive information. To learn how to retrieve your public certificate, see the [endpoint guide](./public-certificate-endpoint.md) to learn how to make calls.

## Next steps

To begin making calls using the MTLS Service API, read the [getting started guide](./getting-started.md) for important information on required headers, reading sample API calls, and more.
