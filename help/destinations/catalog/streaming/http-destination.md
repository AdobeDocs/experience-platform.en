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
* Your HTTP endpoint must support [OAuth 2.0 client credentials](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/) authentication. This requirement is valid while the HTTP API destination is in the beta phase.
* The client credential needs to be included in the body of POST requests to your endpoint, as shown in the example below.

```shell
curl --location --request POST '<YOUR_API_ENDPOINT>' \
--header 'Content-Type: application/x-www-form-urlencoded' \
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

## Product considerations {#product-considerations}

Experience Platform does not stream out data to HTTP endpoints through a fixed set of static IPs. Therefore, Adobe cannot provide a list of static IPs that you can allowlist for the HTTP API destination.  

## Profile export behavior {#profile-export-behavior}

Experience Platform optimizes the profile export behavior to your HTTP API destination, to only export data to your API endpoint when relevant updates to a profile have occurred following segment qualification or other significant events. Profiles are exported to your destination in the following situations:

* The profile update was triggered by a change in segment membership for at least one of the segments mapped to the destination. For example, the profile has qualified for one of the segments mapped to the destination or has exited one of the segments mapped to the destination.
* The profile update was triggered by a change in the [identity map](/help/xdm/field-groups/profile/identitymap.md). For example, a profile who had already qualified for one of the segments mapped to the destination has been added a new identity in the identity map attribute.
* The profile update was triggered by a change in attributes for at least one of the attributes mapped to the destination. For example, one of the attributes mapped to the destination in the mapping step is added to a profile.

In all the cases described above, only the profiles where relevant updates have occurred are exported to your destination. For example, if a segment mapped to the destination flow has a hundred members, and five new profiles qualify for the segment, the export to your destination is incremental and only includes the five new profiles.

Note that the all the mapped attributes are exported for a profile, no matter where the changes lie. So, in the example above all the mapped attributes for those five new profiles will be exported even if the attributes themselves haven't changed.

### What triggers an update and what is included in the export {#what-triggers-export-what-is-included}

Regarding the data that is exported for a given profile, it is important to understand the two different concepts of *what triggers a data export to your HTTP API destination* and *which data is included in the export*.

|What triggers a destination export | What is included in the destination export |
|---------|----------|
|<ul><li>Mapped attributes and segments serve as the trigger for a destination update. This means that if any mapped segments change states (from null to realized or from realized/existing to exiting) or any mapped attributes are updated, a destination export would be triggered.</li><li>Since identities cannot currently be mapped to HTTP API destinations, changes in any identity on a given profile also serve as a trigger for destination exports.</li><li>A change for an attribute is defined as any update on the attribute, whether or not it is the same value. This means that an overwrite on an attribute is considered a change even if the value itself has not changed.</li></ul> | <ul><li>All segments (with the latest membership status), no matter if they are mapped in the dataflow or not, are included in the `segmentMembership` object.</li><li>All identities in the `identityMap` object are included as well (Experience Platform currently does not support identity mapping in the HTTP API destination).</li><li>Only the mapped attributes are included in the destination export.</li></ul> |

{style="table-layout:fixed"}

For example, consider this dataflow to an HTTP destination where three segments are selected in the dataflow, and four attributes are mapped to the destination.  

![HTTP API destination dataflow](/help/destinations/assets/catalog/http/profile-behavior-example.png)

<!--

![HTTP API destination dataflow](/help/destinations/assets/catalog/http/dataflow-destination.png)

![Mapped attributes](/help/destinations/assets/catalog/http/mapped-attributes.png)

-->

A profile export to the destination can be triggered by a profile qualifying for or exiting one of the *three mapped segments*. However, in the data export, in the `segmentMembership` object (see [Exported Data](#exported-data) section below), other unmapped segments might appear, if that particular profile is a member of them. If a profile qualifies for the Customer with DeLorean Cars segment but is also a member of the Watched "Back to the Future" movie and Science fiction fans segments, then these other two segments will also be present in the `segmentMembership` object of the data export, even though these are not mapped in the dataflow.

From a profile attributes point of view, any changes to the four attributes mapped above trigger a destination export and any of the four mapped attributes present on the profile will be present in the data export.

<!--

**What triggers a destination export:**

Mapped attributes and segments serve as the trigger for a destination update. This means that if any mapped segments change states (from null to realized or from realized/existing to exiting) or any mapped attributes are updated, a destination export would be triggered.

* Since identities cannot currently be mapped to HTTP API destinations, changes in any identity on a given profile also serve as a trigger for destination exports.
* A change for an attribute is defined as any update on the attribute, whether or not it’s the same value, i.e. an overwrite on an attribute is considered a change even if the value itself hasn’t changed.

**What is included in the destination export:**

* All segments (with the latest membership status), no matter if they’re mapped or not, will be sent in the `segmentMembership` object.
* All identities in the `identityMap` object will be sent as well (Experience Platform currently does not support identity mapping in the HTTP API destination).
* Only the mapped attributes are included in the destination export.

-->

## Exported data {#exported-data}

Your exported [!DNL Experience Platform] data lands in your [!DNL HTTP] destination in JSON format. For example, the export below contains a profile that has qualified for a certain segment, is a member of another two segments, and exited another segment. The export also includes the profile attribute first name, last name, date of birth, and personal email address. The identities for this profile are ECID and email.

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
         "status":"existing"
      },
      "947c1c46-008d-40b0-92ec-3af86eaf41c1":{
         "lastQualificationTime":"2021-08-25T23:37:33Z",
         "status":"existing"
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