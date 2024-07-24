---
title: MTLS API Guide
description: Learn how to use the mTLS Service API to securely retrieve and verify the public certificates issued by Adobe.
role: Developer
---
# MTLS Service API overview

Use the MTLS Service API to securely retrieve public certificates issued by Adobe for your organization. By using this API endpoint, you can ensure that data exchanges between your customers and Adobe Experience Platform are authenticated and encrypted. This provides an additional layer of security as you can externally verify the authenticity of the certificates; thereby enhancing trust in the safeguarding of sensitive information.

## Public certificate

A public certificate is a digital document used to authenticate the identity of a server or client in secure communications. In the context of the mTLS Service API, public certificates issued by Adobe ensure that data exchanges between your organization and Adobe Experience Platform are both authenticated and encrypted. By retrieving and verifying these certificates through the API, you can confirm that the certificates provided by Adobe are genuine, thereby enhancing the security and trustworthiness of your data transactions. This process helps prevent unauthorized access and ensures that your sensitive information is protected.

## Next steps

To begin making calls using the MTLS Service API, read the [getting started guide](./getting-started.md) for important information on required headers, reading sample API calls, and more. Following that, see the [endpoint guide](./public-certificate-endpoint.md) to learn how to make calls.
