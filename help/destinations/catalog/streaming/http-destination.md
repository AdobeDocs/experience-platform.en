---
keywords: streaming; HTTP destination
title: HTTP connection
keywords: streaming;
title: HTTP API connection
description: The HTTP API destination in Adobe Experience Platform allows you to send profile data to third-party HTTP endpoints.
exl-id: 165a8085-c8e6-4c9f-8033-f203522bb288
---
# (Beta) HTTP API connection

>[!IMPORTANT]
>
>The HTTP API destination in Platform is currently in beta. The documentation and the functionality are subject to change.

## Overview {#overview}

The HTTP API destination is an [!DNL Adobe Experience Platform] streaming destination that helps you send profile data to third-party HTTP endpoints.

To send profile data to HTTP endpoints, you must first [connect to the destination](#connect-destination) in [!DNL Adobe Experience Platform].

## Use cases {#use-cases}

The HTTP destination is targeted towards customers who need to export XDM profile data and audience segments to generic HTTP endpoints.

HTTP endpoints can be either customers' own systems  or third-party solutions.

## Prerequisites {#prerequisites}

>[!IMPORTANT]
>
>Contact your Adobe representatives or Adobe Customer Care if you would like to enable the HTTP API destination beta functionality for your company.

To use the HTTP API destination to export data out of Experience Platform, you must meet the following prerequisites:

* You must have an HTTP endpoint that supports REST API.
* Your HTTP endpoint must support the Experience Platform profile schema. No transformation to a 3rd-party payload schema is supported in the HTTP API destination. Refer to the [exported data](#exported-data) section for an example of the Experience Platform output schema.
* Your HTTP endpoint must support headers.
* Your HTTP endpoint must support [OAuth 2.0 client credentials](https://datatracker.ietf.org/doc/html/rfc6749#section-4.4) authentication. This requirement is valid while the HTTP API destination is in the beta phase.
* The client credential needs to be included in the body of POST requests to your endpoint, as shown in the example below.

```shell
curl --location --request POST '<YOUR_API_ENDPOINT>' \
--header 'Content-Type: application/x-www-form-urlencoded;charset=UTF-8' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'client_id=<CLIENT_ID>' \
--data-urlencode 'client_secret=<CLIENT_SECRET>'
```


You can also use [Adobe Experience Platform Destination SDK](/help/destinations/destination-sdk/overview.md) to set up an integration and send Experience Platform profile data to an HTTP endpoint.

## Connect to the destination {#connect-destination}

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

* **[!UICONTROL httpEndpoint]**: the [!DNL URL] of the HTTP endpoint that you want to send the profile data to.
  * Optionally, you can add query parameters to the [!UICONTROL httpEndpoint] [!DNL URL].
* **[!UICONTROL authEndpoint]**: the [!DNL URL] of the HTTP endpoint used for [!DNL OAuth2] authentication.
* **[!UICONTROL Client ID]**: the [!DNL clientID] parameter used in the [!DNL OAuth2] client credentials.
* **[!UICONTROL Client Secret]**: the [!DNL clientSecret] parameter used in the [!DNL OAuth2] client credentials.

  >[!NOTE]
  >
  >Only [!DNL OAuth2] client credentials are currently supported.

* **[!UICONTROL Name]**: enter a name by which you will recognize this destination in the future.
* **[!UICONTROL Description]**: enter a description that will help you identify this destination in the future.
* **[!UICONTROL Custom Headers]**: enter any custom headers that you want to be included in the destination calls, following this format: `header1:value1,header2:value2,...headerN:valueN`.

  >[!IMPORTANT]
  >
  >The current implementation requires at least one custom header. This limitation will be resolved in a future update.

## Activate segments to this destination {#activate}

See [Activate audience data to streaming profile export destinations](../../ui/activate-streaming-profile-destinations.md) for instructions on activating audience segments to this destination.

### Destination attributes {#attributes}

In the [[!UICONTROL Select attributes]](../../ui/activate-streaming-profile-destinations.md#select-attributes) step, Adobe recommends that you select a unique identifier from your [union schema](../../../profile/home.md#profile-fragments-and-union-schemas). Select the unique identifier and any other XDM fields that you want to export to the destination.

## Profile export behavior {#profile-export-behavior}

Experience Platform optimizes the profile export behavior to your HTTP API destination, to only export data to your API endpoint when relevant updates to a profile have occurred following segment qualification or other significant events. Profiles are exported to your destination in the following situations:

* The profile update was triggered by a change in segment membership for at least one of the segments mapped to the destination. For example, the profile has qualified for one of the segments mapped to the destination or has exited one of the segments mapped to the destination.
* The profile update was triggered by a change in the [identity map](/help/xdm/field-groups/profile/identitymap.md). For example, a profile who had already qualified for one of the segments mapped to the destination has been added a new identity in the identity map attribute.
* The profile update was triggered by a change in attributes for at least one of the attributes mapped to the destination. For example, one of the attributes mapped to the destination in the mapping step is added to a profile.

In all the cases described above, only the profiles where relevant updates have occurred are exported to your destination. For example, if a segment mapped to the destination flow has a hundred members, and five new profiles qualify for the segment, the export to your destination is incremental and only includes the five new profiles.

Note that the all the mapped attributes are exported for a profile, no matter where the changes lie. So, in the example above all the mapped attributes for those five new profiles will be exported even if the attributes themselves haven't changed.

## Exported data {#exported-data}

Your exported [!DNL Experience Platform] data lands in your [!DNL HTTP] destination in JSON format. For example, the export below contains a profile that has qualified for a certain segment and exited another segment, and it includes the profile attribute first name, last name, date of birth, and personal email address. The identities for this profile are ECID and email.

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
    "ups": {
      "7841ba61-23c1-4bb3-a495-00d3g5fe1e93": {
        "lastQualificationTime": "2020-05-25T21:24:39Z",
        "status": "exited"
      },
      "59bd2fkd-3c48-4b18-bf56-4f5c5e6967ae": {
        "lastQualificationTime": "2020-05-25T23:37:33Z",
        "status": "existing"
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