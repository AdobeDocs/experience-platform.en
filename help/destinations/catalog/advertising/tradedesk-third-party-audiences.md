---
title: The Trade Desk Third-Party Audiences Connection
description: Learn how to send audiences from Adobe Real-Time CDP to The Trade Desk Data Marketplace. Make your audiences available to buyers for programmatic targeting.
---

# [!DNL The Trade Desk] Third-Party Audiences connection {#the-trade-desk-third-party-audiences}

[!DNL The Trade Desk] is a self-service platform for ad buyers. Buyers use it to run remarketing and audience-targeted campaigns across display, video, and mobile inventory sources.

Use this destination to send audiences from [!DNL Adobe Real-Time CDP] to the Data Marketplace in [!DNL The Trade Desk]. Buyers can then license your audiences and target them in programmatic campaigns.

>[!AVAILABILITY]
>
>This destination is available only to data providers based in the United States.

>[!NOTE]
>
>This destination sends audiences to the third-party Data Marketplace in [!DNL The Trade Desk]. To activate your own first-party audiences for remarketing in [!DNL The Trade Desk] campaigns, use [The Trade Desk connection](/help/destinations/catalog/advertising/tradedesk.md) or [The Trade Desk CRM connection](/help/destinations/catalog/advertising/tradedesk-emails.md) instead.

## Use cases {#use-cases}

Use this destination to deliver your audiences to the Data Marketplace in [!DNL The Trade Desk]. After you make the audiences available in the Data Marketplace, buyers can license them. Buyers can then activate the audiences in display, video, and mobile campaigns.

To make your audiences available to buyers, follow the steps in [Validate in The Trade Desk](#validate-trade-desk).

## Prerequisites {#prerequisites}

Before you set up this destination, complete the following tasks:

* Contact your [!DNL The Trade Desk] account team to confirm that your organization is enrolled as a data provider.
* Get your data provider ID from your [!DNL The Trade Desk] account team.
* Generate an API token in [!DNL Open TTD] with your [!DNL The Trade Desk] API credentials.
* To activate TDID ([!DNL The Trade Desk] ID), make sure that a mapping between ECID (Experience Cloud ID) and TDID exists in [!DNL Adobe Experience Platform]. To set up the mapping, follow the [prerequisites for The Trade Desk connection](/help/destinations/catalog/advertising/tradedesk.md#prerequisites).

## Supported identities {#supported-identities}

This destination activates the identities described in the following table. Learn more about [identities](/help/identity-service/features/namespaces.md).

| Target identity | Description | Considerations |
|---|---|---|
| TDID | [!DNL The Trade Desk] ID | A cookie-based identifier that [!DNL The Trade Desk] assigns. You cannot set a TDID directly on a profile. ID syncs map the ECID on a profile to a TDID. [!DNL Experience Platform] activates a TDID when a profile has an ECID and an ECID-to-TDID mapping exists. |
| GAID | Google Advertising ID | Mobile device identifier for [!DNL Android]. |
| IDFA | Apple ID for Advertisers | Mobile device identifier for [!DNL iOS]. |
| UID2 | Unified ID 2.0 | A UID2 token that you generate outside of [!DNL Experience Platform], for example through your own UID2 integration. Bring the token into [!DNL Experience Platform] as a profile attribute or a custom identity namespace. [!DNL Experience Platform] does not convert email addresses, phone numbers, or other identifiers into UID2 tokens. |

{style="table-layout:auto"}

## Supported audiences {#supported-audiences}

This section describes which types of audiences you can export to this destination.

| Audience origin | Supported | Description |
|---|---|---|
| [!DNL Segmentation Service] | Yes | Audiences generated through the [!DNL Experience Platform] [Segmentation Service](/help/segmentation/home.md). |
| All other audience origins | Yes | This category includes all audience origins outside of audiences generated through the [!DNL Segmentation Service]. Read about the [various audience origins](/help/segmentation/ui/audience-portal.md#customize). Some examples include: <ul><li>custom upload audiences [imported](/help/segmentation/ui/audience-portal.md#import-audience) into [!DNL Experience Platform] from CSV files</li><li>look-alike audiences</li><li>federated audiences</li><li>audiences generated in other [!DNL Experience Platform] apps, such as [!DNL Adobe Journey Optimizer]</li></ul> |

{style="table-layout:auto"}

The following table describes supported audiences by audience data type.

| Audience data type | Supported | Description | Use cases |
|---|---|---|---|
| [People audiences](/help/segmentation/types/people-audiences.md) | Yes | Based on customer profiles, so you can target specific groups of people for marketing campaigns. | Frequent buyers, cart abandoners |
| [Account audiences](/help/segmentation/types/account-audiences.md) | No | Target individuals within specific organizations for account-based marketing strategies. | B2B marketing |
| [Prospect audiences](/help/segmentation/types/prospect-audiences.md) | No | Target individuals who are not yet customers but share characteristics with your target audience. | Prospecting with third-party data |
| [Dataset exports](/help/catalog/datasets/overview.md) | No | Collections of structured data stored in the [!DNL Experience Platform] data lake. | Reporting, data science workflows |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

The following table describes the export type and frequency for this destination.

| Item | Type | Notes |
|---|---|---|
| Export type | **[!UICONTROL Audience export]** | You export all members of an audience with the identifiers that [!DNL The Trade Desk] supports, such as TDID, GAID, IDFA, or UID2. |
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are always-on, API-based connections. [!DNL The Trade Desk] receives profile updates in real time as profiles qualify for or exit an audience. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations). |

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
>
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to get the required permissions.

To connect to this destination, follow the steps in the [destination configuration tutorial](/help/destinations/ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the next two sections.

### Authenticate to destination {#authenticate}

To authenticate to the destination, select **[!UICONTROL New account]**, fill in the required fields, and select **[!UICONTROL Connect to destination]**.

![The Configure new destination screen shows the Account name, Description, and Bearer token fields for a new account.](/help/destinations/assets/catalog/advertising/tradedesk/third-party-audiences-authenticate.png){width="500" zoomable="yes"}

* **[!UICONTROL Account name]**: Required. A name to identify this account.
* **[!UICONTROL Description]**: Optional. A description to help you identify this account.
* **[!UICONTROL Bearer token]**: Required. Enter the API token that you generated in [!DNL Open TTD]. For details about the token, read [Prerequisites](#prerequisites).

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields. An asterisk next to a field in the UI indicates that the field is required.

![The Configure new destination screen shows the Name, Description, Data Provider ID, and Audience membership expiration (days) fields.](/help/destinations/assets/catalog/advertising/tradedesk/third-party-audiences-destination-details.png){width="500" zoomable="yes"}

* **[!UICONTROL Name]**: Required. A name to identify this destination.
* **[!UICONTROL Description]**: Optional. A description to help you identify this destination.
* **[!UICONTROL Data Provider ID]**: Required. Your data provider ID from your [!DNL The Trade Desk] account team.
* **[!UICONTROL Audience membership expiration (days)]**: Required. The number of days that [!DNL The Trade Desk] keeps a profile in an audience after the profile qualifies. The default is 90 days.

### Enable alerts {#enable-alerts}

Enable alerts to receive notifications about the status of the dataflow to your destination. Select an alert from the list to subscribe to notifications. For more information, read [Subscribe to destinations alerts using the UI](/help/destinations/ui/alerts.md).

When you finish providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
>
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to get the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![The activation workflow shows the Select identity namespace option highlighted.](/help/destinations/assets/overview/export-identities-to-destination.png "The activation workflow shows the Select identity namespace option highlighted."){width="100" zoomable="yes"}

To activate audiences to this destination, follow the instructions in [Activate profiles and audiences to streaming audience export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md).

### Map attributes and identities {#map}

In the **[!UICONTROL Mapping]** step of the activation workflow, map source identities to the target identities that this destination supports. Follow these practices:

* Map at least one supported identity. [!DNL Experience Platform] cannot activate a profile that has no mapped identity.
* Map more than one supported identity to reach more of the profiles in your audiences.
* For UID2, map a profile attribute or custom identity namespace that already contains a UID2 token. Generate the token outside of [!DNL Experience Platform]. This destination does not convert email addresses, phone numbers, or other identifiers into UID2 tokens.

## Validate data export {#exported-data}

[!DNL Experience Platform] sends audience memberships to the third-party data endpoint of [!DNL The Trade Desk]. Each request contains your data provider ID and a list of profiles. Each profile includes one identifier and the audiences that the profile belongs to. The following example shows a request with one IDFA value.

```json
{
  "DataProviderId": "your-data-provider-id",
  "Items": [
    {
      "DAID": "E2C892CF-AAF3-471D-BD13-8DCB9C61DC67",
      "Data": [
        {
          "Name": "e745063a-3902-4268-9ded-197183a57fa6",
          "TTLInMinutes": 129600
        }
      ]
    }
  ]
}
```

The request uses the following fields:

* `DataProviderId`: The value of the **[!UICONTROL Data Provider ID]** field.
* `DAID` or `UID2`: The profile identifier. IDFA values use the `DAID` field. UID2 tokens use the `UID2` field.
* `Name`: The ID of the [!DNL Experience Platform] audience. [!DNL The Trade Desk] uses this value as the segment name.
* `TTLInMinutes`: The **[!UICONTROL Audience membership expiration (days)]** value, converted to minutes.

### Validate in [!DNL Experience Platform] {#validate-experience-platform}

To confirm that [!DNL Experience Platform] exports your audiences, complete the following steps:

1. In [!DNL Experience Platform], go to **[!UICONTROL Destinations]** > **[!UICONTROL Browse]**.
1. Select your destination.
1. Select the **[!UICONTROL Dataflow runs]** tab.
1. Confirm that the activation runs complete successfully with the expected number of profiles.

For details about dataflow run metrics, statuses, and errors, read [Monitor dataflows for streaming destinations](/help/dataflows/ui/monitor-destinations.md#dataflow-runs-for-streaming-destinations).

### Validate in [!DNL The Trade Desk] {#validate-trade-desk}

[!DNL The Trade Desk] calls each exported audience a segment. After [!DNL The Trade Desk] receives your audiences, complete the following steps to make the segments available for targeting:

1. Sign in to [Open TTD](https://open.thetradedesk.com/provider/third-party-segments-dashboard).
1. Select **[!UICONTROL Manage Segments]**, then select **[!UICONTROL Create New]**.
1. Find the segment whose name matches the ID of the audience that you exported from [!DNL Experience Platform].
1. Assign taxonomy and rates to the segment to make the segment available in the Data Marketplace.

>[!IMPORTANT]
>
>Buyers cannot view or target a segment until you assign taxonomy and rates to the segment in [!DNL Open TTD].

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations comply with data usage policies when they handle your data. To learn how [!DNL Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

Use the following resources to learn more about this destination and related identifiers:

* [The Trade Desk connection](/help/destinations/catalog/advertising/tradedesk.md)
* [The Trade Desk CRM connection](/help/destinations/catalog/advertising/tradedesk-emails.md)
* [Unified ID 2.0 documentation](https://unifiedid.com/docs/intro)
