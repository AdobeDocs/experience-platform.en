---
title: Audience lifecycle in Experience Platform and streaming destinations
description: Learn how audience names and mappings from Experience Platform are reflected in streaming destination platforms.
---

# Audience lifecycle in streaming destinations

This page describes how audience name updates and mappings in Experience Platform are synchronized with streaming destination platforms. When you modify audience names or remove audience mappings in Experience Platform, the behavior varies depending on the destination platform's capabilities.

Understanding these differences is important for managing audience lifecycle operations and ensuring your destination platforms reflect the current state of your audiences in Experience Platform.

## Audience name propagation behavior {#audience-name-propagation}

When you activate an audience to a streaming destination, the audience name is sent to the destination during the initial activation. However, audience name update behavior varies by destination:

* **[Destinations that support audience name updates](#name-update-supported)**: If you change an audience name in Experience Platform, the updated name will automatically propagate to these destinations.
* **[Destinations that do not support audience name updates](#name-update-not-supported)**: If you change an audience name in Experience Platform, the destination will continue to use the original name from the initial activation.

### Destinations which support audience name updates {#name-update-supported}

The following streaming destinations support automatic audience name updates when you modify audience names in Experience Platform:

* [Acxiom Audience Connection](../catalog/advertising/acxiom-audience-connection.md)
* [Adobe Campaign Managed Cloud](../catalog/email-marketing/adobe-campaign-managed-services.md)
* [Advertising Cloud DSP](../catalog/advertising/adobe-advertising-cloud-connection.md)
* [Bombora](../catalog/advertising/bombora.md)
* [Criteo](../catalog/advertising/criteo.md)
* [Demandbase](../catalog/advertising/demandbase.md)
* [Demandbase People](../catalog/advertising/demandbase-people.md)
* [Experience Cloud Audiences](../catalog/adobe/experience-cloud-audiences.md)
* [Facebook Custom Audience](../catalog/social/facebook.md)
* [Gainsight PX](../catalog/analytics/gainsight-px.md)
* [LINE](../catalog/mobile-engagement/line.md)
* [(Companies) LinkedIn Matched Audience](../catalog/social/linkedin-b2b.md)
* [LinkedIn Matched Audience](../catalog/social/linkedin.md)
* [(Legacy) (V2) Marketo Engage](../catalog/adobe/marketo-engage.md)
* [PubMatic Connect](../catalog/advertising/pubmatic.md)
* [SendGrid](../catalog/email-marketing/sendgrid.md)
* [Snap Inc](../catalog/advertising/snap-inc.md)
* [TikTok](../catalog/social/tiktok.md)
* [Twitter Custom Audiences](../catalog/social/twitter.md)
* [Yahoo DataX](../catalog/advertising/datax.md)

### Destinations which do not support audience name updates {#name-update-not-supported}

For destinations not listed above, audience names remain static after the initial activation. If you need to update an audience name for these destinations, you must:

1. Create a new audience in Experience Platform with the desired name
2. Activate the new audience to the destination

>[!TIP]
>
>To avoid confusion, use descriptive audience names from the first activation, especially when activating to destinations that do not support audience name updates.

## Destinations which support audience removal {#support-removal}

When you remove (unmap) an audience from a streaming destination, Experience Platform attempts to remove the corresponding audience from the destination platform. However, not all destinations support this functionality.

The following streaming destinations support automatic audience removal when you unmap an audience from the destination:

* [(API) Oracle Eloqua](../catalog/email-marketing/oracle-eloqua-api.md)
* [(Companies) LinkedIn Matched Audience](../catalog/social/linkedin-b2b.md)
* [(Legacy) (V2) Marketo Engage](../catalog/adobe/marketo-engage.md)
* [Adobe Advertising Cloud DSP](../catalog/advertising/adobe-advertising-cloud-connection.md)
* [Bombora Account Audiences](../catalog/advertising/bombora.md)
* [Criteo](../catalog/advertising/criteo.md)
* [Experience Cloud Audiences](../catalog/adobe/experience-cloud-audiences.md)
* [Facebook](../catalog/social/facebook.md)
* [Gainsight PX](../catalog/analytics/gainsight-px.md)
* [HubSpot](../catalog/crm/hubspot.md)
* [LINE](../catalog/mobile-engagement/line.md)
* [LinkedIn Matched Audiences](../catalog/social/linkedin.md)
* [LiveRamp - Distribution](../catalog/advertising/liveramp-distribution.md)
* [Mailchimp Interest Categories](../catalog/email-marketing/mailchimp-interest-categories.md)
* [PubMatic Connect](../catalog/advertising/pubmatic.md)
* [Salesforce Marketing Cloud Account Engagement](../catalog/email-marketing/salesforce-marketing-cloud-account-engagement.md)
* [SendGrid](../catalog/email-marketing/sendgrid.md)
* [Snap Inc](../catalog/advertising/snap-inc.md)
* [TikTok](../catalog/social/tiktok.md)
* [Twitter Custom Audiences](../catalog/social/twitter.md)
* [Yahoo DataX](../catalog/advertising/datax.md)

### Destinations which do not support audience removal

For destinations not listed above, when you unmap an audience from the destination, Experience Platform only removes the mapping. The audience in the destination platform remains active until you manually delete it in the partner platform.
