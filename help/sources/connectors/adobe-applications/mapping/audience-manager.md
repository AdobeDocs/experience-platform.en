---
keywords: Experience Platform;home;popular topics;Audience Manager mapping;audience manager mapping
solution: Experience Platform
title: Mapping Fields for the Adobe Audience Manager Source Connector
description: Learn how to map Adobe Audience Manager data (Realtime, Onboarded, and Profile data) to corresponding Experience Data Model (XDM) fields for the Audience Manager source connector.
exl-id: b800ba43-c308-4334-adce-3d554d50cefb
TQID: https://experienceleague.adobe.com/b66eV0ZpS9ofdSX31eGxtMAHNcLAkSkfqDnDrBicRL8
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
    internal-label: Metadata
---
# Audience Manager field mappings

The tables below contain the mappings between the fields in Adobe Audience Manager data (Realtime, Onboarded, and Profile data) and their corresponding XDM fields.

Please see the [XDM field dictionary](../../../../xdm/schema/field-dictionary.md) for more information on each XDM Field.

## Realtime data

Type: Realtime data

| Realtime Data Field | XDM Field |
| --- | --- |
| `requestIds[]` | `ExperienceEvent.identityMap["ECID"]` |
| `requestIds[]` | `ExperienceEvent.endUserIds` - *Only for namespaces present in endUserIds and only first value.* |
| `primaryDeviceId` | `ExperienceEvent.identityMap["CORE"]` |
| `primaryDeviceId` | ExperienceEvent.endUserIds - *Only for namespaces present in endUserIds and only first value.* |
| `trait[]` | `ExperienceEvent.segmentMemberships["AAMTraits"]` |
| `segments[]` | `ExperienceEvent.segmentMemberships["AAMSegments"]` |
| `mergeRules[]` |`ExperienceEvent.profileStitch[]` |
| `timestamps` | `ExperienceEvent.timeStamp` |
| `deviceMetadata` | `ExperienceEvent.device` <ul><li>primaryHardwareType → type</li><li>manufacturer → manufacturer</li><li>marketingName → model</li><li>modelNumber → model</li></ul>|
| `location` | `ExperienceEvent.placeContext.geo` <ul><li>d_country → countryCode</li><li>d_state → stateProvince</li><li>d_city → city</li><li>d_postal → postalCode</li><li>d_lat → latitude</li><li>d_longitude → longitude</li></ul> |
| `request_user_agent` | `ExperienceEvent.environment.browserDetails` <ul><li>h_user-agent → userAgent</li><li>h_accept-language → acceptLanguage</li></ul> |
| `client_ip` | `ExperienceEvent.environment` <ul><li>d_os_name → os name </li><li>d_os_version → os_version</li></ul> |

{style="table-layout:auto"}

## Profile data

Type: Profile XDM

| Profile Field | XDM Field |
| --- | --- |
| `ids` | `identityMap` |
| `smem` | `ExperienceEvent.segmentMemberships["AAMSegments"]` |
| `tmem` | `ExperienceEvent.segmentMemberships["AAMTraits"]` |

{style="table-layout:auto"}
