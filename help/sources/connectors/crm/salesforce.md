---
title: Salesforce Source Connector Overview
description: Learn how to connect Salesforce to Adobe Experience Platform using APIs or the user interface.
exl-id: 597778ad-3cf8-467c-ad5b-e2850967fdeb
---
# [!DNL Salesforce]

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

Experience Platform provides support for ingesting data from a third-party CRM system. Support for CRM providers include [!DNL Salesforce].

## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

## Field mapping from [!DNL Salesforce] to XDM

To establish a source connection between [!DNL Salesforce] and Platform, the [!DNL Salesforce] source data fields must be mapped to their appropriate target XDM fields prior to being ingested into Platform.

See the following for detailed information on the field mapping rules between [!DNL Salesforce] datasets and Platform:

- [Contacts](../adobe-applications/mapping/salesforce.md#contact)
- [Leads](../adobe-applications/mapping/salesforce.md#lead)
- [Accounts](../adobe-applications/mapping/salesforce.md#account)
- [Opportunities](../adobe-applications/mapping/salesforce.md#opportunity)
- [Opportunity contact roles](../adobe-applications/mapping/salesforce.md#opportunity-contact-role)
- [Campaigns](../adobe-applications/mapping/salesforce.md#campaign)
- [Campaign members](../adobe-applications/mapping/salesforce.md#campaign-member)
- [Account contact relation](../adobe-applications/mapping/salesforce.md#account-contact-relation)

## Set up the [!DNL Salesforce] namespace and schema auto-generation utility

To use the [!DNL Salesforce] source as part of [!DNL B2B-CDP], you must first set up a [!DNL Postman] utility to auto-generate your [!DNL Salesforce] namespaces and schemas. The following documentation provides additional information on setting up the [!DNL Postman] utility:

- You can download the namespace and schema auto-generation utility collection and environment from this [GitHub repository](https://github.com/adobe/experience-platform-postman-samples/tree/master/Postman%20Collections/CDP%20Namespaces%20and%20Schemas%20Utility).
- For information on using Platform APIs including details on how to gather values for required headers and read sample API calls, see the guide on [getting started with Platform APIs](../../../landing/api-guide.md).
- For information on how to generate your credentials for Platform APIs, see the tutorial on [authenticating and accessing Experience Platform APIs](../../../landing/api-authentication.md).
- For information on how to set up [!DNL Postman] for Platform APIs, see the tutorial on [setting up developer console and [!DNL Postman]](../../../landing/postman.md).

With a Platform developer console and [!DNL Postman] set up, you can now start applying the appropriate environment values to your [!DNL Postman] environment.

The following table contains example values as well as additional information on populating your [!DNL Postman] environment:

| Variable | Description | Example |
| --- | --- | --- |
| `CLIENT_SECRET` | A unique identifier used to generate your `{ACCESS_TOKEN}`. See the tutorial on [authenticating and accessing Experience Platform APIs](../../../landing/api-authentication.md) for information on how to retrieve your `{CLIENT_SECRET}`. | `{CLIENT_SECRET}` |
| `JWT_TOKEN` | The JSON Web Token (JWT) is an authentication credential used to generate your {ACCESS_TOKEN}. See the tutorial on [authenticating and accessing Experience Platform APIs](../../../landing/api-authentication.md) for information on how to generate your `{JWT_TOKEN}`. | `{JWT_TOKEN}` |
| `API_KEY` | A unique identifier used to authenticate calls to Experience Platform APIs. See the tutorial on [authenticating and accessing Experience Platform APIs](../../../landing/api-authentication.md) for information on how to retrieve your `{API_KEY}`. | `c8d9a2f5c1e03789bd22e8efdd1bdc1b` |
| `ACCESS_TOKEN` | The authorization token required to complete calls to Experience Platform APIs. See the tutorial on [authenticating and accessing Experience Platform APIs](../../../landing/api-authentication.md) for information on how to retrieve your `{ACCESS_TOKEN}`. | `Bearer {ACCESS_TOKEN}` |
| `META_SCOPE` | With regards to [!DNL Marketo], this value is fixed and is alway set to: `ent_dataservices_sdk`. | `ent_dataservices_sdk` |
| `CONTAINER_ID` | The `global` container holds all standard Adobe and Experience Platform partner provided classes, schema field groups, data types, and schemas. With regards to [!DNL Marketo], this value is fixed and is always set to `global`. | `global` |
| `PRIVATE_KEY` | A credential used to authenticate your [!DNL Postman] instance to Experience Platform APIs. See the tutorial on setting up developer console and [setting up developer console and [!DNL Postman]](../../../landing/postman.md) for instructions on how to retrieve your {PRIVATE_KEY}. | `{PRIVATE_KEY}` |
| `TECHNICAL_ACCOUNT_ID` | A credential used to integrate to Adobe I/O. | `D42AEVJZTTJC6LZADUBVPA15@techacct.adobe.com` |
| `IMS` | The Identity Management System (IMS) provides the framework for authentication to Adobe services. With regards to [!DNL Marketo], this value is fixed and is always set to: `ims-na1.adobelogin.com`. | `ims-na1.adobelogin.com` |
| `IMS_ORG` | A corporate entity that can own or license products and services and allow access to its members. See the tutorial on [setting up developer console and [!DNL Postman]](../../../landing/postman.md) for instructions on how to retrieve your `{ORG_ID}` information. | `ABCEH0D9KX6A7WA7ATQE0TE@adobeOrg` |
| `SANDBOX_NAME` | The name of the virtual sandbox partition that you are using. | `prod` |
| `TENANT_ID` | An ID used to ensure that the resources you create are namespaced properly and are contained within your organization. | `b2bcdpproductiontest` |
| `PLATFORM_URL` | The URL endpoint that you are making API calls to. This value is fixed and is always set to: `http://platform.adobe.io/`. | `http://platform.adobe.io/` |
| `munchkinId` | The unique ID for your [!DNL Marketo] account. See the tutorial on [authenticating your [!DNL Marketo] instance](../adobe-applications/marketo/marketo-auth.md) for information on how to retrieve your `munchkinId`. | `123-ABC-456` |
| `sfdc_org_id` | The organization ID for your [!DNL Salesforce] account. See the following [[!DNL Salesforce] guide](https://help.salesforce.com/articleView?id=000325251&type=1&mode=1) for more information on acquiring your [!DNL Salesforce] organization ID. | `00D4W000000FgYJUA0` |
| `has_abm` | A boolean value that indicates if you are subscribed to [!DNL Marketo Account-Based Marketing]. | `false` |
| `has_msi` | A boolean value that indicates if you are subscribed to [!DNL Marketo Sales Insight]. | `false` |

{style="table-layout:auto"}

### Run the scripts

With your [!DNL Postman] collection and environment set up, you can now run the script through the [!DNL Postman] interface.

In the [!DNL Postman] interface, select the root folder of the auto-generator utility and then select **[!DNL Run]** from the top header.

![root-folder](../../images/tutorials/create/salesforce/root-folder.png)

The [!DNL Runner] interface appears. From here, ensure that all the checkboxes are selected and then select **[!DNL Run Namespaces and Schemas Autogeneration Utility]**.

![run-generator](../../images/tutorials/create/salesforce/run-generator.png)

A successful request creates the B2B namespaces and schemas according to beta specifications.

## Set up your [!DNL Salesforce] source for Experience Platform on Amazon Web Services {#aws}

Follow the steps below to learn how you can set up your [!DNL Salesforce] account for Experience Platform on Amazon Web Services (AWS).

### Prerequisites

To connect your [!DNL Salesforce] account to Experience Platform in an AWS region, you must have the following:

- A [!DNL Salesforce] account with API access.
- A [!DNL Salesforce Connected App] that you can then use to enable JWT_BEARER OAuth flow.
- The necessary permissions in [!DNL Salesforce] to access data.

You must also add the following IP addresses to your allowlist, in order to connect your [!DNL Salesforce] account to Experience Platform on Amazon Web Services (AWS):

- `34.193.63.59`
- `44.217.93.240`
- `44.194.79.229`

### Create a [!DNL Salesforce Connected App]

First, use the following to create certificate/key-pair of PEM files.

```shell
openssl req -newkey rsa:4096 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem  
```

1. In the [!DNL Salesforce] dashboard, select settings (![The settings icon.](/help/images/icons/settings.png)) and then select **[!DNL Setup]**.
2. Navigate to [!DNL App Manager] and then select **[!DNL New Connection App]**.
3. Provide a name for  your app and allow for the rest of the fields to be auto-filled.
4. Enable the box for [!DNL Enable OAuth Settings].
5. Set a callback URL. Since this will not be used for JWT, you can use `https://localhost`.
6. Enable the box for [!DNL Use Digital Signatures].
7. Upload the cert.perm file that was created earlier.

#### Add required permissions

Add the following permissions:

1. Manage user data via APIs (api)
2. Access custom permissions (custom_permissions)
3. Access the identity URL service (id, profile, email, address, phone)
4. Access unique identifiers (openid)
5. Perform requests at any time (refresh_token, offline_access)

Once your permissions are added, ensure that you enable the box for **[!DNL Issue JSON Web Token (JWT)-based access tokens for named user]**.

Next, select **[!DNL Save]**, **[!DNL Continue]**, and then **[!DNL Manage Customer Details]**. Use the consumer details panel to retrieve the following:

- **Consumer key**: You will later use this consumer key as your client ID, when authenticating your [!DNL Salesforce] account to Experience Platform.
- **Consumer secret**: You will later use this consumer secret as your client ID, when authenticating your [!DNL Salesforce] account to Experience Platform.

### Authorize your [!DNL Salesforce] user to the Connected App

Follow the steps below to get authorization to use the Connected App:

1. Navigate to **[!DNL Manage Connected Apps]**.
2. Select **[!DNL Edit]**.
3. Configure **[!DNL Permitted Users]** as **[!DNL Admin approved users are pre-authorized]** and then select **[!DNL Save]**.
4. Navigate to **[!DNL Settings] > [!DNL Manage Users] > [!DNL Profiles]**.
5. Edit the profile associated with your user.
6. Navigate to **[!DNL Connected App Access]** and then select the app you created in an earlier step.

### Generate JWT bearer token

Follow the steps below to generate your JWT bearer token.

#### Convert key-pair into pkcs12

To generate your JWT bearer token, you must first use the following command to convert your certificate/key-pair into pkcs12 format. During this step, you must also **set an export password** when prompted.

```shell
openssl pkcs12 -export -in cert.pem -inkey key.pem -name jwtcert >jwtcert.p12
```

#### Create java keystore based on pkcs12

Next, use the following command to create a java keystore based on the pkcs12 that you just generated. During this step, you must also a **set a destination keystore password** when prompted. Additionally, you must provide the previous export password as your source keystore password.

```shell
keytool -importkeystore -srckeystore jwtcert.p12 -destkeystore keystore.jks -srcstoretype pkcs12 -alias jwtcert
```

#### Confirm that your keystroke.jks includes a jwtcert alias

Next, use the follow command to confirm that your keystroke.jks includes a jwtcert alias. During this step, you will be prompted to provide the destination keystore password that was generated in the previous step.

```shell
keytool -keystore keystore.jks -list
```

#### Generate signed token

Finally, use the java class JWTExample below to generate your signed token. 

```java
package org.example;
 
import org.apache.commons.codec.binary.Base64;
 
import java.io.*;
import java.security.*;
import java.text.MessageFormat;
 
public class Main {
 
    public static void main(String[] args) {
 
        String header = "{\"alg\":\"RS256\"}";
        String claimTemplate = "'{'\"iss\": \"{0}\", \"sub\": \"{1}\", \"aud\": \"{2}\", \"exp\": \"{3}\"'}'";
 
        try {
            StringBuffer token = new StringBuffer();
 
            //Encode the JWT Header and add it to our string to sign
            token.append(Base64.encodeBase64URLSafeString(header.getBytes("UTF-8")));
 
            //Separate with a period
            token.append(".");
 
            //Create the JWT Claims Object
            String[] claimArray = new String[5];
            claimArray[0] = "{CLIENT_ID}";
            claimArray[1] = "{AUTHORIZED_SALESFORCE_USERNAME}";
            claimArray[2] = "{SALESFORCE_LOGIN_URL}";
            claimArray[3] = Long.toString((System.currentTimeMillis() / 1000) + 2629746*4);
            MessageFormat claims;
            claims = new MessageFormat(claimTemplate);
            String payload = claims.format(claimArray);
 
            //Add the encoded claims object
            token.append(Base64.encodeBase64URLSafeString(payload.getBytes("UTF-8")));
 
            //Load the private key from a keystore
            KeyStore keystore = KeyStore.getInstance("JKS");
            keystore.load(new FileInputStream("path/to/keystore"), "keystorepassword".toCharArray());
            PrivateKey privateKey = (PrivateKey) keystore.getKey("jwtcert", "privatekeypassword".toCharArray());
 
            //Sign the JWT Header + "." + JWT Claims Object
            Signature signature = Signature.getInstance("SHA256withRSA");
            signature.initSign(privateKey);
            signature.update(token.toString().getBytes("UTF-8"));
            String signedPayload = Base64.encodeBase64URLSafeString(signature.sign());
 
            //Separate with a period
            token.append(".");
 
            //Add the encoded signature
            token.append(signedPayload);
 
            System.out.println(token.toString());
 
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

| Property | Configurations |
| --- | --- |
| `claimArray[0]` | Update `claimArray[0]` with your client ID. |
| `claimArray[1]` | Update `claimArray[1]` with the [!DNL Salesforce] username that is authorized against the app. |
| `claimArray[2]` | Update `claimArray[2]` with your [!DNL Salesforce] login URL. |
| `claimArray[3]` | Update `claimArray[3]` with an expiration date formatted in milliseconds since epoch time. For example `3660624000000` is 12-31-2085. |
| `/path/to/keystore` | Replace `/path/to/keystore` with the correct path to your keystore.jks |
| `keystorepassword` |  Replace `keystorepassword` with your destination keystore password. | 
| `privatekeypassword` | Replace `privatekeypassword` with your source keystore password. |

## Next steps

Once you have completed prerequisite set up for your [!DNL Salesforce] account, you can proceed to connect your [!DNL Salesforce] account to Experience Platform and ingest your CRM data. Read the documentation below for more information:

### Connect [!DNL Salesforce] to Platform using APIs

The documentation below provides information on how to connect [!DNL Salesforce] to Platform using APIs or the user interface:

- [Create a Salesforce base connection using the Flow Service API](../../tutorials/api/create/crm/salesforce.md)
- [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
- [Create a dataflow for a CRM source using the Flow Service API](../../tutorials/api/collect/crm.md)

### Connect [!DNL Salesforce] to Platform using the UI

- [Create a Salesforce source connection in the UI](../../tutorials/ui/create/crm/salesforce.md)
- [Create a dataflow for a CRM connection in the UI](../../tutorials/ui/dataflow/crm.md)