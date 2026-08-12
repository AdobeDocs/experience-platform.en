---
title: Update your trust store for Adobe's new mTLS certificate hierarchy
description: Learn how to update your trust store to trust Adobe's new mTLS certificate authority hierarchy ahead of an upcoming certificate migration.
role: Developer, Admin
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: ed0d8d0e-04b9-4326-be72-a0fbca265377
    internal-label: Integrations
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
topic_v2:
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# Update your trust store for Adobe's new mTLS certificate hierarchy {#update-your-trust-store-for-adobes-new-mtls-certificate-hierarchy}

Adobe is updating the certificate authority (CA) hierarchy used to issue the client certificates for outbound Mutual Transport Layer Security (mTLS) connections to your endpoints. If your systems validate Adobe's mTLS client certificate, you need to add Adobe's new root and intermediate CA certificates to your trust store before Adobe begins presenting certificates issued from the new hierarchy. This guide explains what is changing, why, and how to update your trust store across common platforms.

>[!IMPORTANT]
>
>This update is a one-time change to your trust store. It is separate from, and does not replace, the automated certificate retrieval and lifecycle you already use through the [mTLS Service API](../../data-governance/mtls-api/overview.md). You do not need to request, download, or replace Adobe's client certificate as part of this migration.

## Who is affected {#who-is-affected}

This change affects any endpoint you manage that validates Adobe's mTLS client certificate, including receiving endpoints for HTTP API destinations, Adobe Journey Optimizer custom actions, and Event Forwarding integrations. If you already use mTLS with any Adobe Experience Platform integration, review this guide and complete the trust store update described below.

## What you need to do {#what-you-need-to-do}

Add Adobe's new root and intermediate CA certificates to the trust store or trusted CA bundle used by the endpoint that validates Adobe's mTLS client certificate.

Follow this sequence:

1. Add the new root and intermediate CA certificates to your trust store, alongside your existing trusted certificates.
2. Keep your current trusted hierarchy in place. You don't remove it as part of this update.
3. Apply or reload the trust configuration, if your platform requires it.
4. Verify the update, as described in [Verify your trust store update](#verify).
5. Leave both hierarchies trusted for the remainder of the transition.

This is a trust store update only. You do NOT need to:

- Request a new client certificate from Adobe.
- Change how mTLS is enabled or configured in your Adobe integrations.
- Modify how you retrieve certificates through the mTLS Service API.

## When to complete this update {#when-to-update}

Complete this update as soon as possible rather than waiting for a specific connection to be affected. Because a trust store can hold multiple valid hierarchies at the same time, adding the new root and intermediate now has no effect on your current, working connections.

Adobe is transitioning mTLS client certificates to the new certificate hierarchy from mid-2026 and continuing through spring 2027.

## What happens if you don't update {#what-happens-if-you-dont-update}

Once Adobe presents a certificate issued from the new hierarchy on a connection to your endpoint, the TLS handshake fails if your trust store doesn't yet include the new root and intermediate certificates. This surfaces as a connection or delivery failure on the affected integration. For example, a destination delivery failure or a failed custom action call, until you update your trust store.

## How do you know you're ready? {#readiness}

Verifying your certificate files is not the same as confirming your production endpoint is ready. Certificate verification confirms that the downloaded files are valid and correctly chained, but does not confirm that the service terminating your Adobe mTLS connection is using the updated trust configuration.

After completing the platform-specific steps below, follow the steps described in the [Verify your trust store update](#verify) section to confirm your certificate files and chain are valid. Adobe does not currently provide a universal end-to-end test that confirms your production endpoint is using the updated configuration. Confirm readiness using whatever validation method your platform or environment supports.

## What is changing {#what-is-changing}

Adobe issues mTLS client certificates to authenticate outbound connections to endpoints you control, such as an [HTTP API destination](../../destinations/catalog/streaming/http-destination.md) receiving endpoint, an Adobe Journey Optimizer custom action, or an Event Forwarding integration. Adobe is moving these certificates from a certificate hierarchy shared between server and client authentication to a hierarchy dedicated solely to client authentication.

This means the root and intermediate certificate authorities behind Adobe's mTLS client certificate are changing. This change does not affect how the certificate functions or how you configure mTLS in your Adobe integrations.

## Why this is changing {#why-this-is-changing}

Industry standards for certificate authorities now require certificates used for server authentication and client authentication to be issued from separate hierarchies. This separation helps prevent certificates from being used outside their intended purpose.  The requirement applies broadly across the public-trust certificate ecosystem. It is not specific to Adobe or any single integration.

## The new certificate hierarchy {#new-certificate-hierarchy}

The following table compares the current certificate hierarchy to the new one.

| | Current hierarchy | New hierarchy |
| --- | --- | --- |
| Extended key usage | TLS Web Server Authentication + TLS Web Client Authentication | TLS Web Client Authentication only |
| Intermediate CA | [!DNL DigiCert Global G2 TLS RSA SHA256 2020 CA1] | [!DNL DigiCert Assured ID Client CA G2] |
| Root CA | [!DNL DigiCert Global Root G2] | [!DNL DigiCert Assured ID Root G2] |

{style="table-layout:auto"}

Both hierarchies are issued by [!DNL DigiCert], but they are separate root programs. A trust store that only trusts [!DNL DigiCert Global Root G2] will not trust a certificate issued from the new hierarchy.

### Download the new CA certificates {#download-certificates}

Add both of the following certificates to your trust store. Some platforms may require only the root certificate if they automatically retrieve intermediate certificates. Adobe recommends that you add both the root and intermediate certificates to ensure the complete chain is available for validation.

| Certificate | Type | Common name | Download |
| --- | --- | --- | --- |
| [!DNL DigiCert Assured ID Root G2] | Root | `DigiCert Assured ID Root G2` | [DigiCertAssuredIDRootG2.crt](http://cacerts.digicert.com/DigiCertAssuredIDRootG2.crt) |
| [!DNL DigiCert Assured ID Client CA G2] | Intermediate | `DigiCert Assured ID Client CA G2` | [DigiCertAssuredIDClientCAG2.crt](http://cacerts.digicert.com/DigiCertAssuredIDClientCAG2.crt) |

{style="table-layout:auto"}

[!DNL DigiCert] distributes both files in DER format. Most of the platforms covered later in this guide use PEM format, so convert both files to PEM unless you are using [!DNL Windows].

>[!NOTE]
>
>[!DNL Windows] accepts the original `.crt` (DER) files directly. Every other platform in this guide uses the converted `.pem` files.

```shell
curl -O http://cacerts.digicert.com/DigiCertAssuredIDRootG2.crt
curl -O http://cacerts.digicert.com/DigiCertAssuredIDClientCAG2.crt

openssl x509 -inform DER -in DigiCertAssuredIDRootG2.crt -out DigiCertAssuredIDRootG2.pem
openssl x509 -inform DER -in DigiCertAssuredIDClientCAG2.crt -out DigiCertAssuredIDClientCAG2.pem
```

Before you continue, confirm that you downloaded the expected certificates and that they form a valid chain. Verify that each certificate's subject matches the expected common name, then verify that the intermediate certificate chains to the root:

```shell
openssl x509 -in DigiCertAssuredIDRootG2.pem -noout -subject -issuer
openssl x509 -in DigiCertAssuredIDClientCAG2.pem -noout -subject -issuer
openssl verify -CAfile DigiCertAssuredIDRootG2.pem DigiCertAssuredIDClientCAG2.pem
```

A successful chain verification returns `DigiCertAssuredIDClientCAG2.pem: OK`.

<!-- TODO: Q) Should Adobe mirror these certificate files instead of linking directly to cacerts.digicert.com? Also, should we include the certificate fingerprints/thumbprints in this guide before publication? -->

## Update your trust store {#update-trust-store}

The steps to add a new CA certificate to your trust store depend on the platform or software that terminates the mTLS connection at your endpoint. Each section below assumes you've already downloaded and converted the certificates as described in [Download the new CA certificates](#download-certificates) section. The following sections cover common platforms and configurations.

### Linux and OpenSSL {#linux-openssl}

This updates the system-wide CA bundle used by [!DNL OpenSSL] and most TLS libraries on Debian- and Ubuntu-based distributions.

>[!NOTE]
>
>On RHEL, CentOS, or Fedora, copy the PEM files to `/etc/pki/ca-trust/source/anchors/` and run `sudo update-ca-trust` instead.

Copy the [PEM files you downloaded and converted](#download-certificates) into the system CA directory, then rebuild the trust bundle:

```shell
sudo cp DigiCertAssuredIDRootG2.pem /usr/local/share/ca-certificates/DigiCertAssuredIDRootG2.crt
sudo cp DigiCertAssuredIDClientCAG2.pem /usr/local/share/ca-certificates/DigiCertAssuredIDClientCAG2.crt
sudo update-ca-certificates
```

### Custom CA bundle files {#custom-ca-bundle}

If your service references a custom CA bundle file (for example, through `--cacert`, `SSL_CERT_FILE`, or `CURL_CA_BUNDLE`), append the [new certificates you downloaded](#download-certificates) directly to that file:

```shell
cat DigiCertAssuredIDRootG2.pem >> /path/to/your/ca-bundle.crt
cat DigiCertAssuredIDClientCAG2.pem >> /path/to/your/ca-bundle.crt
```

Make sure each certificate block is separated by a newline, with no extra whitespace between the end of one `-----END CERTIFICATE-----` block and the start of the next `-----BEGIN CERTIFICATE-----` block.

### Java (keytool) {#java-keytool}

Java applications use their own trust store, typically a file named `cacerts`, rather than the operating system trust store, so you need to import the [certificates you downloaded](#download-certificates) there directly. First, locate your JVM's `cacerts` file:

```shell
JAVA_CACERTS="$(dirname $(dirname $(readlink -f $(which java))))/lib/security/cacerts"
```

Then import both certificates (the default `cacerts` password is `changeit`):

```shell
keytool -importcert -trustcacerts \
  -alias digicert-assured-id-root-g2 \
  -file DigiCertAssuredIDRootG2.pem \
  -keystore "$JAVA_CACERTS" \
  -storepass changeit \
  -noprompt

keytool -importcert -trustcacerts \
  -alias digicert-assured-id-client-ca-g2 \
  -file DigiCertAssuredIDClientCAG2.pem \
  -keystore "$JAVA_CACERTS" \
  -storepass changeit \
  -noprompt
```

Confirm both certificates were added:

```shell
keytool -list -keystore "$JAVA_CACERTS" -storepass changeit -alias digicert-assured-id-root-g2
keytool -list -keystore "$JAVA_CACERTS" -storepass changeit -alias digicert-assured-id-client-ca-g2
```

>[!NOTE]
>
>If your application uses a custom trust store (specified with `-Djavax.net.ssl.trustStore=/path/to/truststore.jks`), import the certificates into that file instead of the JVM's default `cacerts` file.

### [!DNL nginx] {#nginx}

[!DNL nginx] uses the `ssl_client_certificate` directive to specify which CAs it trusts for client certificate validation. Append the [new certificates you downloaded](#download-certificates) to the bundle file referenced by that directive:

```shell
cat DigiCertAssuredIDRootG2.pem >> /etc/nginx/ssl/trusted-client-cas.pem
cat DigiCertAssuredIDClientCAG2.pem >> /etc/nginx/ssl/trusted-client-cas.pem
```

Test the configuration and reload [!DNL nginx] to apply the change:

```shell
nginx -t && nginx -s reload
```

### [!DNL Apache httpd] {#apache-httpd}

[!DNL Apache httpd] uses the `SSLCACertificateFile` directive to specify trusted client CAs. Append the [new certificates you downloaded](#download-certificates) to the bundle file referenced by that directive:

```shell
cat DigiCertAssuredIDRootG2.pem >> /etc/httpd/ssl/trusted-client-cas.pem
cat DigiCertAssuredIDClientCAG2.pem >> /etc/httpd/ssl/trusted-client-cas.pem
```

Test the configuration and restart [!DNL Apache httpd] to apply the change:

```shell
apachectl configtest && apachectl graceful
```

### [!DNL Windows] {#windows}

Use `certutil` from an elevated command prompt to add the [certificates you downloaded](#download-certificates) to the appropriate stores:

```shell
certutil -addstore Root DigiCertAssuredIDRootG2.crt
certutil -addstore CA DigiCertAssuredIDClientCAG2.crt
```

Alternatively, you can use the [!DNL Windows] graphical interface to add the certificates to the local computer's certificate stores. To do this, open the Certificates snap-in in [!DNL Microsoft Management Console] (MMC) and follow these steps:

1. Run `mmc.exe`.
2. Select **[!DNL File]** > **[!DNL Add/Remove Snap-in]**.
3. In the **[!DNL Add or Remove Snap-ins]** window, select **[!DNL Certificates]**, then select **[!DNL Add]**.
4. In the **[!DNL Certificates snap-in]** window, select **[!DNL Computer account]**, then select **[!DNL Next]**.
5. In the **[!DNL Select Computer]** window, leave **[!DNL Local computer]** selected, then select **[!DNL Finish]**.
6. In the **[!DNL Add or Remove Snap-in]** window, select **[!DNL OK]**.
7. In the console tree, expand **[!DNL Certificates (Local Computer)]** > **[!DNL Trusted Root Certification Authorities]** > **[!DNL Certificates]**.
8. Right-click **[!DNL Certificates]**, select **[!DNL All Tasks]** > **[!DNL Import]**, and import `DigiCertAssuredIDRootG2.crt`.
9. Expand **[!DNL Intermediate Certification Authorities]** > **[!DNL Certificates]**.
10. Right-click **[!DNL Certificates]**, select **[!DNL All Tasks]** > **[!DNL Import]**, and import `DigiCertAssuredIDClientCAG2.crt`.

>[!NOTE]
>
>For the `certutil` commands, use the original `.crt` files as downloaded, not the converted `.pem` versions. Either format works when using the MMC snap-in.

### [!DNL AWS] {#aws}

[!DNL AWS] uses different mTLS trust store mechanisms depending on which service terminates the connection.

For [!DNL Amazon API Gateway] REST APIs using mutual TLS, upload a combined PEM bundle of the [certificates you downloaded](#download-certificates) to [!DNL Amazon S3], then update your custom domain to reference it.

>[!NOTE]
>
>If you already have a trust store bundle with other CAs you still need, include them in the combined bundle as well — the command below creates a bundle containing only the two new certificates.

```shell
cat DigiCertAssuredIDRootG2.pem DigiCertAssuredIDClientCAG2.pem > truststore.pem
aws s3 cp truststore.pem s3://your-bucket/truststore.pem

aws apigateway update-domain-name \
  --domain-name api.example.com \
  --patch-operations op=replace,path=/mutualTlsAuthentication/truststoreUri,value=s3://your-bucket/truststore.pem
```

>[!IMPORTANT]
>
>[!DNL API Gateway] caches the trust store. After updating the S3 object, bump `truststoreVersion` (or change the URI) so [!DNL API Gateway] picks up the change:
>
>```shell
>aws apigateway update-domain-name \
>  --domain-name api.example.com \
>  --patch-operations op=replace,path=/mutualTlsAuthentication/truststoreVersion,value=$(date +%s)
>```

For an [!DNL Application Load Balancer] or [!DNL Network Load Balancer] using mutual TLS, use the ELBv2 API to create or update the trust store that contains the CA certificates used to validate client certificates:

```shell
aws elbv2 create-trust-store \
  --name digicert-assured-id-trust-store \
  --ca-certificates-bundle-s3-bucket your-bucket \
  --ca-certificates-bundle-s3-key truststore.pem
```

If you already have a trust store for this listener, update it instead of creating a new one:

```shell
aws elbv2 modify-trust-store \
  --trust-store-arn arn:aws:elasticloadbalancing:us-east-1:123456789012:truststore/your-trust-store/abc123 \
  --ca-certificates-bundle-s3-bucket your-bucket \
  --ca-certificates-bundle-s3-key truststore.pem
```

Then associate the trust store with the listener that handles the mTLS connection:

```shell
aws elbv2 modify-listener \
  --listener-arn arn:aws:elasticloadbalancing:us-east-1:123456789012:listener/app/my-alb/abc123/def456 \
  --mutual-authentication Mode=verify,TrustStoreArn=arn:aws:elasticloadbalancing:us-east-1:123456789012:truststore/your-trust-store/abc123
```

If you manage this configuration with [!DNL CloudFormation], update `AWS::ApiGateway::DomainName` to reference the updated trust store through `MutualTlsAuthentication.TruststoreUri`, or update `AWS::ElasticLoadBalancingV2::TrustStore` to include the new CA certificates. For [!DNL Terraform], update `aws_api_gateway_domain_name` (`mutual_tls_authentication.truststore_uri`) or `aws_lb_trust_store` with the corresponding trust store changes.


### [!DNL Azure] {#azure}

For [!DNL Azure Application Gateway], upload the [root and intermediate certificates you downloaded](#download-certificates) as trusted client certificates, then attach them to the SSL profile that has client authentication enabled:
<!-- For [!DNL Azure Application Gateway], add the [root and intermediate certificates you downloaded](#download-certificates) as a trusted client CA chain in the SSL profile used for client certificate validation. Associate the SSL profile with the HTTPS listener that receives Adobe's mTLS connections. -->

```shell
az network application-gateway root-cert create \
  --gateway-name myAppGateway \
  --resource-group myResourceGroup \
  --name DigiCertAssuredIDRootG2 \
  --cert-file DigiCertAssuredIDRootG2.pem

az network application-gateway root-cert create \
  --gateway-name myAppGateway \
  --resource-group myResourceGroup \
  --name DigiCertAssuredIDClientCAG2 \
  --cert-file DigiCertAssuredIDClientCAG2.pem

az network application-gateway ssl-profile update \
  --gateway-name myAppGateway \
  --resource-group myResourceGroup \
  --name myMtlsSslProfile \
  --client-auth-configuration verify-client-cert-issuer-dn=true \
  --trusted-client-certificates DigiCertAssuredIDRootG2 DigiCertAssuredIDClientCAG2
```

For [!DNL Azure API Management], add the root and intermediate CA certificates to the CA certificate stores used by the managed gateway. This allows [!DNL Azure API Management] to establish trust when validating Adobe's client certificate against the new hierarchy.

```shell
az apim certificate create \
  --resource-group myResourceGroup \
  --service-name myApiManagement \
  --certificate-id digicert-assured-id-root-g2 \
  --certificate-file DigiCertAssuredIDRootG2.pem

az apim certificate create \
  --resource-group myResourceGroup \
  --service-name myApiManagement \
  --certificate-id digicert-assured-id-client-ca-g2 \
  --certificate-file DigiCertAssuredIDClientCAG2.pem
```

You can also add the CA certificates in the Azure portal. From your API Management instance, select **[!UICONTROL Security]** > **[!UICONTROL Certificates]** > **[!UICONTROL CA certificates]**.

If you manage this configuration with [!DNL Terraform], update the trusted client certificate configuration in `azurerm_application_gateway` (`ssl_profile.trusted_client_certificate_names`) or the CA certificate configuration in `azurerm_api_management_certificate`.

### [!DNL Google Cloud] {#google-cloud}

[!DNL Google Cloud Load Balancing] uses a Certificate Manager `TrustConfig` to define the CAs trusted for mTLS.

>[!NOTE]
>
>If you already have a `TrustConfig` with other trusted CAs, update it to include the new trust anchor and intermediate rather than creating a new one, using `gcloud certificate-manager trust-configs update` with a revised YAML file.

Create a trust configuration file that adds the [new root and intermediate CA certificates you downloaded](#download-certificates) to the set of certificates trusted for client authentication:

```yaml
trustStores:
  - trustAnchors:
      - pemCertificate: |
          <paste contents of DigiCertAssuredIDRootG2.pem here>
    intermediateCas:
      - pemCertificate: |
          <paste contents of DigiCertAssuredIDClientCAG2.pem here>
```

Create the `TrustConfig` resource:

```shell
gcloud certificate-manager trust-configs create digicert-assured-id-trust-config \
  --source=trust-config.yaml \
  --location=global
```

Then create a server TLS policy that references the trust config:

```yaml
mtlsPolicy:
  clientValidationMode: REJECT_INVALID
  clientValidationTrustConfig: projects/YOUR_PROJECT/locations/global/trustConfigs/digicert-assured-id-trust-config
```

```shell
gcloud network-security server-tls-policies create my-mtls-policy \
  --source=server-tls-policy.yaml \
  --location=global
```

Attach the `ServerTlsPolicy` to your target HTTPS proxy:

```shell
gcloud compute target-https-proxies update my-https-proxy \
  --server-tls-policy=my-mtls-policy \
  --region=global
```

If you manage this configuration with [!DNL Terraform], update `google_certificate_manager_trust_config` to include the new root CA in `trust_stores.trust_anchors` and the new intermediate CA in `trust_stores.intermediate_cas`.

## Verify your trust store update {#verify}

After updating your trust store, verify that a certificate issued from the new hierarchy validates against the new CA chain. Build a combined bundle from the new root and intermediate CA certificates, then use it to verify a certificate issued for client authentication:

```shell
cat DigiCertAssuredIDRootG2.pem DigiCertAssuredIDClientCAG2.pem > digicert-assured-id-chain.pem
openssl verify -CAfile digicert-assured-id-chain.pem -purpose sslclient client-cert.pem
```

If you have a client certificate issued from the new hierarchy, replace `client-cert.pem` with the path to that certificate. A successful result confirms that OpenSSL can validate the certificate against the new CA chain for TLS client authentication.

If you don't have a client certificate issued from the new hierarchy, you can still verify that the intermediate certificate validates against the new root:

```shell
openssl verify -CAfile DigiCertAssuredIDRootG2.pem DigiCertAssuredIDClientCAG2.pem
```

A successful result returns `DigiCertAssuredIDClientCAG2.pem: OK`, confirming that the intermediate certificate validates against the new root.

To confirm that a certificate is issued for client authentication only, inspect its extended key usage:

```shell
openssl x509 -in client-cert.pem -noout -ext extendedKeyUsage
```

For a client-authentication-only certificate, the extended key usage should include `TLS Web Client Authentication` and not `TLS Web Server Authentication`.

## Troubleshooting {#troubleshooting}

Use the following symptoms to identify whether a connection failure is related to this migration.

| Symptom | Likely cause |
| --- | --- |
| TLS handshake failures on a previously working mTLS connection, with no other configuration changes made | Your trust store doesn't yet include the new root and intermediate CA certificates. |
| Certificate validation errors referencing an unknown or untrusted issuer | Your trust store is missing the intermediate certificate, the root certificate, or both. |
| Failures affecting only some mTLS-authenticated connections and not others | Individual connections transition to the new hierarchy at different times. Endpoints without the updated trust store will fail only for connections already using the new hierarchy. |
| Certificate import fails, or the imported certificate looks corrupted | You're using the wrong file format for your platform. Most platforms in this guide require the converted `.pem` files; Windows requires the original `.crt` (DER) files. See [Download the new CA certificates](#download-certificates). |

{style="table-layout:auto"}

If you continue to see failures after adding the new root and intermediate certificates, verify that they were added to the trust store or bundle used by the service terminating the connection. If required by your platform, also confirm that the service was reloaded or restarted to apply the updated trust configuration.

## Frequently asked questions {#faq}

**Do I need to do anything?**

Yes. If your endpoint validates Adobe's mTLS client certificate, add Adobe's new root and intermediate CA certificates to your trust store. No other configuration changes are required.

**Is this related to the automated certificate retrieval available through the mTLS Service API?**

No. The [mTLS Service API](../../data-governance/mtls-api/overview.md) automates retrieval and lifecycle of Adobe's client certificate, and that automation is unaffected by this change. Updating your trust store to include the new CA hierarchy is a separate, one-time action you take on your own systems.

**Will my existing integration stop working?**

Not immediately. See [What happens if you don't update](#what-happens-if-you-dont-update) for when and how an integration is affected.

**Do I need to replace my client certificate?**

No. Adobe's client certificate is issued and rotated automatically, as it is today. Your responsibility is limited to trusting the new issuing CA hierarchy on your side.

**Can I add the new CA hierarchy before Adobe starts using it?**

Yes, and Adobe recommends doing so. See [When to complete this update](#when-to-update) for why adding it early doesn't disrupt your existing connections.

**When will this affect my integration?**

The transition is phased, from mid-2026 and continuing through spring 2027. See [When to complete this update](#when-to-update) for what to do in the meantime.

## Related documentation {#related-documentation}

Use the following resources to learn more about mTLS configuration, certificate retrieval, and certificate lifecycle management in Experience Platform.

- [Data encryption in Adobe Experience Platform](./encryption.md) for a broader overview of how Experience Platform encrypts data in transit and at rest, including mTLS support.
- [mTLS Service API overview](../../data-governance/mtls-api/overview.md) for retrieving Adobe's public client certificate programmatically.
- [Public certificate endpoint](../../data-governance/mtls-api/public-certificate-endpoint.md) for details on the automated certificate lifecycle.
- [HTTP API destination](../../destinations/catalog/streaming/http-destination.md) for configuring mTLS on an HTTP API destination.
