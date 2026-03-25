---
keywords: streaming; HTTP destination
title: HTTP API connection
description: Use the HTTP API destination in Adobe Experience Platform to send profile data to a third-party HTTP endpoint to run your own analytics or perform any other operations you may need on profile data exported out of Experience Platform.
badgeUltimate: label="Ultimate" type="Positive"
exl-id: 165a8085-c8e6-4c9f-8033-f203522bb288
---
# HTTP API connection

## Overview {#overview}

>[!IMPORTANT]
>
> This destination is available only to [Adobe Real-Time Customer Data Platform Ultimate](https://helpx.adobe.com/legal/product-descriptions/real-time-customer-data-platform.html) customers.

The HTTP API destination is an Experience Platform streaming destination that helps you send profile data to third-party HTTP endpoints.

To send profile data to HTTP endpoints, you must first [connect to the destination](#connect-destination) in Experience Platform.

## Use cases {#use-cases}

Use the HTTP API destination to export XDM profile data and audiences to generic HTTP endpoints. There, you can run your own analytics or perform any other operations you may need on profile data exported out of Experience Platform.

HTTP endpoints can be either customers' own systems or third-party solutions.

## Supported audiences {#supported-audiences}

This section describes which types of audiences you can export to this destination.

| Audience origin | Supported | Description |
|---------|----------|----------|
| [!DNL Segmentation Service] | Yes | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).|
| All other audience origins | Yes | This category includes all audience origins outside of audiences generated through the [!DNL Segmentation Service]. Read about the [various audience origins](/help/segmentation/ui/audience-portal.md#customize). Some examples include: <ul><li> custom upload audiences [imported](../../../segmentation/ui/audience-portal.md#import-audience) into Experience Platform from CSV files,</li><li> look-alike audiences, </li><li> federated audiences, </li><li> audiences generated in other Experience Platform apps such as [!DNL Adobe Journey Optimizer], </li><li> and more. </li></ul> |

{style="table-layout:auto"}

Supported audiences by audience data type:

| Audience data type | Supported | Description | Use cases |
|--------------------|-----------|-------------|-----------|
| [People audiences](/help/segmentation/types/people-audiences.md) | Yes | Based on customer profiles. Use them to target specific groups of people for marketing campaigns. | Frequent buyers, cart abandoners |
| [Account audiences](/help/segmentation/types/account-audiences.md) | No | Target individuals within specific organizations for account-based marketing strategies. | B2B marketing |
| [Prospect audiences](/help/segmentation/types/prospect-audiences.md) | No | Target individuals who are not yet customers but share characteristics with your target audience. | Prospecting with third-party data |
| [Dataset exports](/help/catalog/datasets/overview.md) | No | Collections of structured data stored in the [!DNL Adobe Experience Platform] Data Lake. | Reporting, data science workflows |

{style="table-layout:auto"}


## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
| ---------|----------|---------|
| Export type | **[!UICONTROL Profile-based]** | You are exporting all members of an audience, together with the desired schema fields (for example: email address, phone number, last name), as chosen in the mapping screen of the [destination activation workflow](../../ui/activate-segment-streaming-destinations.md#mapping).|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Prerequisites {#prerequisites}

To use the HTTP API destination to export data out of Experience Platform, you must meet the following prerequisites:

* You must have an HTTP endpoint that supports REST API.
* Your HTTP endpoint must support the Experience Platform profile schema. No transformation to a 3rd-party payload schema is supported in the HTTP API destination. Refer to the [exported data](#exported-data) section for an example of the Experience Platform output schema.
* Your HTTP endpoint must support headers.
* Your HTTP endpoint must respond within 2 seconds to ensure proper data processing and avoid timeout errors.
* If you plan to use mTLS: Your data receiving endpoint must have TLS disabled and only mTLS enabled.

>[!TIP]
>
> You can also use [Adobe Experience Platform Destination SDK](/help/destinations/destination-sdk/overview.md) to set up an integration and send Experience Platform profile data to an HTTP endpoint.

## mTLS protocol support and certificate {#mtls-protocol-support}

You can use [!DNL Mutual Transport Layer Security] (mTLS) to ensure enhanced security in outbound connections to your HTTP API destination connections.

mTLS is a mutual authentication protocol that ensures that both parties sharing information are who they claim to be before data is shared. mTLS includes an additional step compared to standard TLS, in which the server also requests and verifies the client's certificate, while the client verifies the server's certificate.

### mTLS considerations {#mtls-considerations}

mTLS support for HTTP API destinations applies **only to the data receiving endpoint** where profile exports are sent (the **[!UICONTROL HTTP Endpoint]** field in [destination details](#destination-details)).

### Configuring mTLS for data export {#configuring-mtls}

To use mTLS with HTTP API destinations, the **[!UICONTROL HTTP Endpoint]** (data receiving endpoint) you configure in the [destination details](#destination-details) page must have TLS protocols disabled and only mTLS enabled. If the TLS 1.2 protocol is still enabled on the endpoint, no certificate is sent for the client authentication. This means that to use mTLS with your HTTP API destination, your data receiving server endpoint must be an mTLS-only enabled connection endpoint.

### Retrieve and inspect certificate details {#certificate}

If you want to inspect certificate details such as the Common Name (CN) and Subject Alternative Names (SAN) for additional third-party validation, use the API to retrieve the certificate and extract those fields from the response.

See the [public certificate endpoint documentation](../../../data-governance/mtls-api/public-certificate-endpoint.md) for more information.

## IP address allowlist {#ip-address-allowlist}

To meet customers' security and compliance requirements, Experience Platform provides a list of static IPs that you can allowlist for the HTTP API destination. See [IP address allowlist for streaming destinations](/help/destinations/catalog/streaming/ip-address-allow-list.md) for the complete list of IPs to allowlist.

## Supported authentication types {#supported-authentication-types}

The HTTP API destination supports several authentication types to your HTTP endpoint:

* HTTP endpoint with no authentication;
* Bearer token authentication;
* [OAuth 2.0 client credentials](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/) authentication with the body form, with [!DNL client ID], [!DNL client secret], and [!DNL grant type] in the body of the HTTP request, as shown in the example below.

```shell
curl --location --request POST '<YOUR_API_ENDPOINT>' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'client_id=<CLIENT_ID>' \
--data-urlencode 'client_secret=<CLIENT_SECRET>'
```

* [OAuth 2.0 client credentials](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/) with basic authorization, with an authorization header which contains URL-encoded [!DNL client ID] and [!DNL client secret].

```shell
curl --location --request POST 'https://some-api.com/token' \
--header 'Authorization: Basic base64(clientId:clientSecret)' \
--header 'Content-type: application/x-www-form-urlencoded; charset=UTF-8' \
--data-urlencode 'grant_type=client_credentials'
```

* [OAuth 2.0 password grant](https://www.oauth.com/oauth2-servers/access-tokens/password-grant/).

## Connect to the destination {#connect-destination}

>[!IMPORTANT]
>
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). When connecting to this destination, you must provide the following information:

### Authentication information {#authentication-information}

>[!CONTEXTUALHELP]
>id="platform_destinations_connect_http_clientcredentialstype"
>title="Client credentials type"
>abstract="Select **Body Form Encoded** to include the client ID and client secret in the body of the request or **Basic Authorization** to include client ID and client secret in an authorization header. View examples in the documentation."

#### Bearer token authentication {#bearer-token-authentication}

If you select the **[!UICONTROL Bearer token]** authentication type to connect to your HTTP endpoint, enter the information below and select **[!UICONTROL Connect to destination]**:

![The HTTP API authentication screen with the [!UICONTROL Bearer token] field.](../../assets/catalog/http/http-api-authentication-bearer.png)

* **[!UICONTROL Bearer token]**: Enter the bearer token to authenticate to your HTTP location.

#### No authentication {#no-authentication}

If you select the **[!UICONTROL None]** authentication type to connect to your HTTP endpoint:

![The HTTP API authentication screen with the [!UICONTROL None] authentication type selected.](../../assets/catalog/http/http-api-authentication-none.png)

When you select this authentication option, you only need to select **[!UICONTROL Connect to destination]** and the connection to your endpoint is established.

#### OAuth 2 Password authentication {#oauth-2-password-authentication}

If you select the **[!UICONTROL OAuth 2 Password]** authentication type to connect to your HTTP endpoint, enter the information below and select **[!UICONTROL Connect to destination]**:

![The HTTP API authentication screen with [!UICONTROL OAuth 2 Password] fields.](../../assets/catalog/http/http-api-authentication-oauth2-password.png)

* **[!UICONTROL Access Token URL]**: The URL on your side which issues access tokens and, optionally, refresh tokens.
* **[!UICONTROL Client ID]**: The `client ID` that your system assigns to Adobe Experience Platform.
* **[!UICONTROL Client Secret]**: The `client secret` that your system assigns to Adobe Experience Platform.
* **[!UICONTROL Username]**: The username to access your HTTP endpoint.
* **[!UICONTROL Password]**: The password to access your HTTP endpoint.

#### OAuth 2 Client Credentials authentication {#oauth-2-client-credentials-authentication}

If you select the **[!UICONTROL OAuth 2 Client Credentials]** authentication type to connect to your HTTP endpoint, enter the information below and select **[!UICONTROL Connect to destination]**:

![The HTTP API authentication screen with [!UICONTROL OAuth 2 Client Credentials] fields.](../../assets/catalog/http/http-api-authentication-oauth2-client-credentials.png)

>[!WARNING]
>
>When using [!UICONTROL OAuth 2 Client Credentials] authentication, the [!UICONTROL Access Token URL] can have a maximum of one query parameter. Adding an [!UICONTROL Access Token URL] with more query parameters can lead to issues when connecting to your endpoint.

* **[!UICONTROL Access Token URL]**: The URL on your side which issues access tokens and, optionally, refresh tokens.
* **[!UICONTROL Client ID]**: The `client ID` that your system assigns to Adobe Experience Platform.
* **[!UICONTROL Client Secret]**: The `client secret` that your system assigns to Adobe Experience Platform.
* **[!UICONTROL Client Credentials Type]**: Select the type of OAuth 2 Client Credentials grant supported by your endpoint:
  * **[!UICONTROL Body Form Encoded]**: In this case, the `client ID` and `client secret` are included *in the body of the request* sent to your destination. For an example, see the [Supported authentication types](#supported-authentication-types) section.
  * **[!UICONTROL Basic Authorization]**: In this case, the `client ID` and `client secret` are included *in an `Authorization` header* after being base64 encoded and sent to your destination. For an example, see the [Supported authentication types](#supported-authentication-types) section.

### Fill in destination details {#destination-details}

>[!CONTEXTUALHELP]
>id="platform_destinations_connect_http_headers"
>title="Headers"
>abstract="Enter any custom headers that you want to be included in the destination calls, following this format: `header1:value1,header2:value2,...headerN:valueN`"

>[!CONTEXTUALHELP]
>id="platform_destinations_connect_http_endpoint"
>title="HTTP Endpoint"
>abstract="The URL of the HTTP endpoint where you want to send the profile data to. This is your data receiving endpoint and supports mTLS if configured."

>[!CONTEXTUALHELP]
>id="platform_destinations_connect_http_includesegmentnames"
>title="Include Segment Names"
>abstract="Toggle if you want the data export to include the names of the audiences you are exporting. View the documentation for a data export example with this option selected."

>[!CONTEXTUALHELP]
>id="platform_destinations_connect_http_includesegmenttimestamps"
>title="Include Segment Timestamps"
>abstract="Toggle if you want the data export to include the UNIX timestamp when the audiences were created and updated, as well as the UNIX timestamp when the audiences were mapped to the destination for activation. View the documentation for a data export example with this option selected."

>[!CONTEXTUALHELP]
>id="platform_destinations_connect_http_queryparameters"
>title="Query Parameters"
>abstract="Optionally, you can add query parameters to the HTTP endpoint URL. Format the query parameters you use like this: `parameter1=value&parameter2=value`."

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

![The HTTP API destination details screen with completed fields.](../../assets/catalog/http/http-api-destination-details.png)

* **[!UICONTROL Name]**: Enter a name by which you will recognize this destination in the future.
* **[!UICONTROL Description]**: Enter a description that will help you identify this destination in the future.
* **[!UICONTROL Headers]**: Enter any custom headers that you want to be included in the destination calls, following this format: `header1:value1,header2:value2,...headerN:valueN`.
* **[!UICONTROL HTTP Endpoint]**: The URL of the HTTP endpoint where you want to send the profile data to. This is your data receiving endpoint. If you are using mTLS, this endpoint must have TLS disabled and only mTLS enabled.
* **[!UICONTROL Query parameters]**: Optionally, you can add query parameters to the HTTP endpoint URL. Format the query parameters you use like this: `parameter1=value&parameter2=value`.
* **[!UICONTROL Include Segment Names]**: Toggle if you want the data export to include the names of the audiences you are exporting. **Note**: Audience names are only included for audiences that are mapped to the destination. Unmapped audiences that appear in the export will not include the `name` field. For an example of a data export with this option selected, refer to the [Exported data](#exported-data) section further below.
* **[!UICONTROL Include Segment Timestamps]**: Toggle if you want the data export to include the UNIX timestamp when the audiences were created and updated, as well as the UNIX timestamp when the audiences were mapped to the destination for activation. For an example of a data export with this option selected, refer to the [Exported data](#exported-data) section further below.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destination alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
>
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* [Consent policy evaluation](/help/data-governance/enforcement/auto-enforcement.md#consent-policy-evaluation) is currently not supported in exports to the HTTP API destination. [Read more](/help/destinations/ui/activate-streaming-profile-destinations.md#consent-policy-evaluation).

See [Activate audience data to streaming profile export destinations](../../ui/activate-streaming-profile-destinations.md) for instructions on activating audiences to this destination.

### Destination attributes {#attributes}

In the [[!UICONTROL Select attributes]](../../ui/activate-streaming-profile-destinations.md#select-attributes) step, Adobe recommends that you select a unique identifier from your [union schema](../../../profile/home.md#profile-fragments-and-union-schemas). Select the unique identifier and any other XDM fields that you want to export to the destination.

## Profile export behavior {#profile-export-behavior}

Experience Platform optimizes the profile export behavior to your HTTP API destination, to only export data to your API endpoint when relevant updates to a profile have occurred following audience qualification or other significant events. Profiles are exported to your destination in the following situations:

* The profile update was determined by a change in audience membership for at least one of the audiences mapped to the destination. For example, the profile has qualified for one of the audiences mapped to the destination or has exited one of the audiences mapped to the destination.
* The profile update was determined by a change in the [identity map](/help/xdm/field-groups/profile/identitymap.md). For example, a profile that had already qualified for one of the audiences mapped to the destination has had a new identity added to the identity map attribute.
* The profile update was determined by a change in attributes for at least one of the attributes mapped to the destination. For example, one of the attributes mapped to the destination in the mapping step is added to a profile.

In all the cases described above, only the profiles where relevant updates have occurred are exported to your destination. For example, if an audience mapped to the destination flow has a hundred members, and five new profiles qualify for the audience, the export to your destination is incremental and only includes the five new profiles.

>[!NOTE]
>
>All the mapped attributes are exported for a profile, no matter where the changes lie. So, in the example above all the mapped attributes for those five new profiles will be exported even if the attributes themselves haven't changed.

### What determines a data export and what is included in the export {#what-determines-export-what-is-included}

Regarding the data that is exported for a given profile, it is important to understand the two different concepts of *what determines a data export to your HTTP API destination* and *which data is included in the export*.

|What determines a destination export | What is included in the destination export |
|---------|----------|
|<ul><li>Mapped attributes and audiences serve as the cue for a destination export. This means that if the `segmentMembership` status of a profile changes to `realized` or `exiting` or any mapped attributes are updated, a destination export would be kicked off.</li><li>Since identities cannot currently be mapped to HTTP API destinations, changes in any identity on a given profile also determine destination exports.</li><li>A change for an attribute is defined as any update on the attribute, whether or not it is the same value. This means that an overwrite on an attribute is considered a change even if the value itself has not changed.</li></ul> | <ul><li>The `segmentMembership` object includes the audience mapped in the activation dataflow, for which the status of the profile has changed following a qualification or audience exit event. Note that other unmapped audiences for which the profile qualified can be part of the destination export, if these audiences belong to the same [merge policy](/help/profile/merge-policies/overview.md) as the audience mapped in the activation dataflow. <br> **Important**: When the **[!UICONTROL Include Segment Names]** option is enabled, segment names are only included for audiences that are mapped to the destination. Unmapped audiences that appear in the export will not include the `name` field, even if the option is enabled. </li><li>All identities in the `identityMap` object are included as well (Experience Platform currently does not support identity mapping in the HTTP API destination).</li><li>Only the mapped attributes are included in the destination export.</li></ul> |

{style="table-layout:fixed"}

For example, consider this dataflow to an HTTP destination where three audiences are selected in the dataflow, and four attributes are mapped to the destination.

![An example of an HTTP API destination dataflow.](/help/destinations/assets/catalog/http/profile-export-example-dataflow.png)

A profile export to the destination is triggered when a profile qualifies for or exits one of the *three mapped audiences*. In the data export, the `segmentMembership` object (see [Exported Data](#exported-data) below) can also include unmapped audiences, if that profile is a member of them and they share the same merge policy as the audience that triggered the export. For example, if a profile qualifies for the **Customer with DeLorean Cars** audience but is also a member of the **Watched "Back to the Future"** movie and **Science fiction fans** audiences, those two audiences also appear in the `segmentMembership` object—provided they share the same merge policy with the **Customer with DeLorean Cars** audience.

From a profile attributes point of view, any changes to the four attributes mapped above will determine a destination export and any of the four mapped attributes present on the profile will be present in the data export.

## Historical data backfill {#historical-data-backfill}

When you add a new audience to an existing destination, or when you create a new destination and map audiences to it, Experience Platform exports historical audience qualification data to the destination. Profiles which qualified for the audience *before* the audience was added to the destination are exported to the destination within approximately one hour.

## Exported data {#exported-data}

Your exported Experience Platform data lands in your HTTP destination in JSON format. For example, the export below contains a profile that has qualified for a certain audience, is a member of another two audiences, and exited another audience. The export also includes the profile attribute first name, last name, date of birth, and personal email address. The identities for this profile are ECID and email.

```json
{
  "person": {
    "birthDate": "YYYY-MM-DD",
    "name": {
      "firstName": "John",
      "lastName": "Doe"
    }
  },
  "personalEmail": {
    "address": "john.doe@acme.com"
  },
  "segmentMembership": {
   "ups":{
      "7841ba61-23c1-4bb3-a495-00d3g5fe1e93":{
         "lastQualificationTime":"2022-01-11T21:24:39Z",
         "status":"exited"
      },
      "59bd2fkd-3c48-4b18-bf56-4f5c5e6967ae":{
         "lastQualificationTime":"2022-01-02T23:37:33Z",
         "status":"realized"
      },
      "947c1c46-008d-40b0-92ec-3af86eaf41c1":{
         "lastQualificationTime":"2021-08-25T23:37:33Z",
         "status":"realized"
      },
      "5114d758-ce71-43ba-b53e-e2a91d67b67f":{
         "lastQualificationTime":"2022-01-11T23:37:33Z",
         "status":"realized"
      }
   }
},
  "identityMap": {
    "ecid": [
      {
        "id": "14575006536349286404619648085736425115"
      },
      {
        "id": "66478888669296734530114754794777368480"
      }
    ],
    "email_lc_sha256": [
      {
        "id": "655332b5fa2aea4498bf7a290cff017cb4"
      },
      {
        "id": "66baf76ef9de8b42df8903f00e0e3dc0b7"
      }
    ]
  }
}

```

Below are further examples of exported data, depending on the UI settings you select in the connect destination flow for the **[!UICONTROL Include Segment Names]** and **[!UICONTROL Include Segment Timestamps]** options:

+++ The data export sample below includes audience names in the `segmentMembership` section

```json
"segmentMembership": {
        "ups": {
          "5b998cb9-9488-4ec3-8d95-fa8338ced490": {
            "lastQualificationTime": "2019-04-15T02:41:50+0000",
            "status": "realized",
            "createdAt": 1648553325000,
            "updatedAt": 1648553330000,
            "mappingCreatedAt": 1649856570000,
            "mappingUpdatedAt": 1649856570000,
            "name": "First name equals John"
          },
          "354e086f-2e11-49a2-9e39-e5d9a76be683": {
            "lastQualificationTime": "2020-04-15T02:41:50+0000",
            "status": "realized"
          }
        }
      }
```

>[!NOTE]
>
>In this example, the first audience (`5b998cb9-9488-4ec3-8d95-fa8338ced490`) is mapped to the destination and includes the `name` field. The second audience (`354e086f-2e11-49a2-9e39-e5d9a76be683`) is not mapped to the destination and does not include the `name` field, even though the **[!UICONTROL Include Segment Names]** option is enabled.

+++

+++ The data export sample below includes audience timestamps in the `segmentMembership` section

```json
"segmentMembership": {
        "ups": {
          "5b998cb9-9488-4ec3-8d95-fa8338ced490": {
            "lastQualificationTime": "2019-04-15T02:41:50+0000",
            "status": "realized",
            "createdAt": 1648553325000,
            "updatedAt": 1648553330000,
            "mappingCreatedAt": 1649856570000,
            "mappingUpdatedAt": 1649856570000
          }
        }
      }
```

+++

## Limits and retry policy {#limits-retry-policy}

95 percent of the time, Experience Platform attempts to offer a throughput latency of less than 10 minutes for successfully sent messages with a rate of less than 10 thousand requests per second for each dataflow to an HTTP destination.

When requests to your HTTP API destination fail, Experience Platform stores them and retries twice.

## Troubleshooting {#troubleshooting}

To ensure reliable data delivery and avoid timeout issues, make sure that your HTTP endpoint responds within 2 seconds to Experience Platform requests, as specified in the [prerequisites](#prerequisites) section. Responses that take longer will result in timeout errors.
