---
title: Audience lifecycle in streaming destinations
description: Learn how audience names and mappings in [!DNL Experience Platform] appear in streaming destinations, and when destinations keep the original audience name.
exl-id: 8a9a9e2f-d52f-41c9-ae27-9d2cd797bb85
TQID: https://experienceleague.adobe.com/wYmjqdfHHr-APhlTRJQabz2EwB4AFjDA83z45CwzLgI
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
---
# Audience lifecycle in streaming destinations

This page describes how audience name updates and mappings in [!DNL Experience Platform] are synchronized with streaming destination platforms. When you change an audience name or remove an audience mapping in [!DNL Experience Platform], the behavior varies by destination platform.

Understanding these differences helps you manage audience lifecycle operations and keep your destination platforms aligned with the current state of your audiences.

## Audience name propagation {#audience-name-propagation}

When you activate an audience to a streaming destination, the audience name is sent to the destination during the initial activation. However, audience name update behavior varies by destination:

* **[Destinations that support audience name updates](#name-update-supported)**: If you change an audience name in [!DNL Experience Platform], the updated name will automatically propagate to these destinations.
* **[Destinations that do not support audience name updates](#name-update-not-supported)**: If you change an audience name in [!DNL Experience Platform], the destination will continue to use the original name from the initial activation.

### Destinations with audience name updates {#name-update-supported}

The following streaming destinations support automatic audience name updates when you modify audience names in [!DNL Experience Platform]:

* [Acxiom Audience Connection](/help/destinations/catalog/advertising/acxiom-audience-connection.md)
* [Adobe Campaign Managed Cloud](/help/destinations/catalog/email-marketing/adobe-campaign-managed-services.md)
* [Adobe Advertising DSP](/help/destinations/catalog/advertising/adobe-advertising-dsp-connection.md)
* [Bombora](/help/destinations/catalog/advertising/bombora.md)
* [Criteo](/help/destinations/catalog/advertising/criteo.md)
* [Demandbase](/help/destinations/catalog/advertising/demandbase.md)
* [Demandbase People](/help/destinations/catalog/advertising/demandbase-people.md)
* [Experience Cloud Audiences](/help/destinations/catalog/adobe/experience-cloud-audiences.md)
* [Facebook Custom Audience](/help/destinations/catalog/social/facebook.md)
* [Gainsight PX](/help/destinations/catalog/analytics/gainsight-px.md)
* [LINE](/help/destinations/catalog/mobile-engagement/line.md)
* [(Companies) LinkedIn Matched Audience](/help/destinations/catalog/social/linkedin-b2b.md)
* [LinkedIn Matched Audience](/help/destinations/catalog/social/linkedin.md)
* [(Legacy) (V2) Marketo Engage](/help/destinations/catalog/adobe/marketo-engage.md)
* [PubMatic Connect](/help/destinations/catalog/advertising/pubmatic.md)
* [SendGrid](/help/destinations/catalog/email-marketing/sendgrid.md)
* [Snap Inc](/help/destinations/catalog/advertising/snap-inc.md)
* [TikTok](/help/destinations/catalog/social/tiktok.md)
* [Twitter Custom Audiences](/help/destinations/catalog/social/twitter.md)
* [Yahoo DataX](/help/destinations/catalog/advertising/datax.md)

### No name updates {#no-name-updates}

For destinations not listed above, audience names remain static after the initial activation. If you need to update an audience name for these destinations, complete the following steps:

1. Create a new audience in [!DNL Experience Platform] with the desired name
2. Activate the new audience to the destination

>[!TIP]
>
>To avoid confusion, use descriptive audience names from the first activation, especially when activating to destinations that do not support audience name updates.

## Destinations with audience removal {#support-removal}

When you remove an audience mapping from a streaming destination, [!DNL Experience Platform] tries to remove the corresponding audience from the destination platform. However, not all destinations support this functionality.

The following streaming destinations support automatic audience removal when you unmap an audience from the destination:

* [(API) Oracle Eloqua](/help/destinations/catalog/email-marketing/oracle-eloqua-api.md)
* [(Companies) LinkedIn Matched Audience](/help/destinations/catalog/social/linkedin-b2b.md)
* [(Legacy) (V2) Marketo Engage](/help/destinations/catalog/adobe/marketo-engage.md)
* [Adobe Advertising DSP](/help/destinations/catalog/advertising/adobe-advertising-dsp-connection.md)
* [Bombora Account Audiences](/help/destinations/catalog/advertising/bombora.md)
* [Criteo](/help/destinations/catalog/advertising/criteo.md)
* [Experience Cloud Audiences](/help/destinations/catalog/adobe/experience-cloud-audiences.md)
* [Facebook](/help/destinations/catalog/social/facebook.md)
* [Gainsight PX](/help/destinations/catalog/analytics/gainsight-px.md)
* [HubSpot](/help/destinations/catalog/crm/hubspot.md)
* [LINE](/help/destinations/catalog/mobile-engagement/line.md)
* [LinkedIn Matched Audiences](/help/destinations/catalog/social/linkedin.md)
* [LiveRamp - Distribution](/help/destinations/catalog/advertising/liveramp-distribution.md)
* [Mailchimp Interest Categories](/help/destinations/catalog/email-marketing/mailchimp-interest-categories.md)
* [PubMatic Connect](/help/destinations/catalog/advertising/pubmatic.md)
* [Salesforce Marketing Cloud Account Engagement](/help/destinations/catalog/email-marketing/salesforce-marketing-cloud-account-engagement.md)
* [SendGrid](/help/destinations/catalog/email-marketing/sendgrid.md)
* [Snap Inc](/help/destinations/catalog/advertising/snap-inc.md)
* [TikTok](/help/destinations/catalog/social/tiktok.md)
* [Twitter Custom Audiences](/help/destinations/catalog/social/twitter.md)
* [Yahoo DataX](/help/destinations/catalog/advertising/datax.md)

### Destinations without audience removal {#no-removal-support}

For destinations not listed above, when you unmap an audience from the destination, [!DNL Experience Platform] removes only the mapping. The audience remains active in the destination platform until you manually delete it there.
