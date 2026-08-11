---
title: Deliver Audience Now for Streaming Destinations
badgeBeta: label="Beta" type="Informative"
type: Tutorial
description: Learn how to trigger an on-demand full-membership refresh of an audience to a streaming or API-based destination using the Experience Platform UI.
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
subfeature_v2:
  - id: cbd4a8d8-97a6-4ac9-b8d6-b6c1f28d3342
    internal-label: Segments
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
---

# Deliver Audience Now for streaming destinations

>[!IMPORTANT]
>
>To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

## [!UICONTROL Deliver Audience Now] overview {#overview}

>[!CONTEXTUALHELP]
>id="platform_destinations_activationchaining_deliveraudiencenow"
>title="Deliver Audience Now"
>abstract="Select this control to trigger an immediate, on-demand refresh of an audience's full current membership to a streaming or API-based destination. Use this when a destination's time-to-live (TTL) has expired and previously qualified profiles need to be resent."

This article explains how to use the Experience Platform UI to trigger an on-demand refresh of an audience's full membership to streaming and API-based destinations, such as [!DNL Facebook Custom Audiences] and [!DNL The Trade Desk].

Many streaming and API-based destinations apply a time-to-live (TTL) to the audience membership they receive from [!DNL Adobe Experience Platform]. When that TTL expires on the destination side, previously qualified profiles are treated as inactive, even though they remain qualified in Experience Platform. This can cause your addressable audience to shrink mid-campaign.

Use the **[!UICONTROL Deliver Audience Now]** control to resend every currently qualified profile for an audience through the existing streaming activation pipeline, without waiting for the next scheduled refresh. This gives you a self-serve way to counteract destination-side TTL expiration instead of filing a support ticket for a manual backfill.

**[!UICONTROL Deliver Audience Now]** is the streaming counterpart to [Export file now](/help/destinations/ui/export-file-now.md), which serves the same purpose for batch, file-based destinations.

You can also use the Experience Platform APIs for this purpose. Read how to [activate audiences on-demand to streaming destinations via the ad-hoc activation API](/help/destinations/api/ad-hoc-activation-api.md#streaming-destinations).

## v1 scope and limitations {#scope-and-limitations}

Review the following limitations before you use **[!UICONTROL Deliver Audience Now]**.

* This action resends full audience membership regardless of qualification state. It does not perform a differential or changes-only refresh.
* This action does not run automatically or on a schedule. Automatic, TTL-aware refresh is planned for a future release.
* This action is available only for streaming and API-based destinations. File-based destinations continue to use [Export file now](/help/destinations/ui/export-file-now.md).

## Prerequisites {#prerequisites}

To use **[!UICONTROL Deliver Audience Now]**, you must have successfully [connected to a destination](./connect-destination.md) and configured an activation dataflow to a streaming or API-based destination. If you haven't done so already, go to the [destinations catalog](../catalog/overview.md), browse the supported destinations, and configure the destination that you want to use.

## How to deliver an audience on-demand {#how-to-deliver-audience-now}

1. Go to **[!UICONTROL Connections > Destinations]**, select the **[!UICONTROL Browse]** tab, and select your streaming or API-based destination connection.

1. On the destination details page, select the **[!UICONTROL Activation data]** tab.

1. Select one or more audiences that you want to refresh, then select the **[!UICONTROL Deliver Audience Now]** control. This control is available for both a single audience row and a bulk selection of audiences.

1. In the confirmation dialog, select **[!UICONTROL Yes]** to confirm and trigger the refresh.

1. A toast message appears, confirming that the refresh has been queued. Experience Platform creates one streaming job per selected audience.

1. Track the status of each job, such as queued, in-flight, succeeded, failed, or partial, from the **[!UICONTROL Dataflow runs]** tab. Each trigger also creates an entry in the audit log.

## Guardrails {#guardrails}

**[!UICONTROL Deliver Audience Now]** enforces the following daily limits at the sandbox level:

* One on-demand run per dataflow, per audience, per day.
* Five on-demand runs across all dataflows in the sandbox, per day.

If you exceed a guardrail, the trigger is rejected, and the UI shows your remaining quota along with a message indicating when you can try again.

## UI error messages {#ui-error-messages}

When using the **[!UICONTROL Deliver Audience Now]** control, you might encounter any of the following conditions. A trigger is rejected if any of these apply:

* The selected audience isn't mapped to the destination.
* The destination isn't a streaming or API-based destination.
* You don't have the **[!UICONTROL Activate Destinations]** permission.
* A [guardrail](#guardrails) has been exceeded. In this case, the UI shows your remaining quota and a message indicating when you can try again.

## Related information {#related-information}

* [Export files on-demand to batch destinations using the Experience Platform UI](/help/destinations/ui/export-file-now.md)
* [Activate audiences to streaming destinations via the ad-hoc activation API](/help/destinations/api/ad-hoc-activation-api.md#streaming-destinations)
* [Audience lifecycle in streaming destinations](/help/destinations/how-destinations-work/audience-lifecycle-streaming-destinations.md)
