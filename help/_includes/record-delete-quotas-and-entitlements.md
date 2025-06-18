# Snippets

## Quotas and processing timelines {#quotas}

Record Delete requests are subject to daily and monthly identifier submission limits, determined by your organization's license entitlement. These limits apply to both UI- and API-based delete requests.

>[!NOTE]
>
>You can submit up to **1,000,000 identifiers per day**, but this daily volume is still subject to the monthly caps outlined below.

### Monthly submission entitlement by product {#quota-limits}

The table below outlines identifier submission limits by product and entitlement level. For each product, the monthly cap is the lesser of two values: a fixed identifier ceiling or a percentage-based threshold tied to your licensed data volume.

| Product  | Entitlement Description | Monthly Cap (Whichever is Less) |
|----------|-------------------------|---------------------------------|
| Real-Time CDP or Adobe Journey Optimizer | Without Privacy and Security Shield or Healthcare Shield add-on          | 2,000,000 identifiers or 5% of addressable audience                    |
| Real-Time CDP or Adobe Journey Optimizer | With Privacy and Security Shield or Healthcare Shield add-on             | 15,000,000 identifiers or 10% of addressable audience                  |
| Customer Journey Analytics               | Without Privacy and Security Shield or Healthcare Shield add-on          | 2,000,000 identifiers or 200 identifiers per million CJA rows of entitlement |
| Customer Journey Analytics               | With Privacy and Security Shield or Healthcare Shield add-on             | 15,000,000 identifiers or 200 identifiers per million CJA rows of entitlement |

>[!NOTE]
>
> Most organizations will have lower monthly limits based on their actual addressable audience or CJA row entitlements.

Quotas reset on the first day of each calendar month. Unused quota does **not** carry over.

>[!NOTE]
>
>Quotas are based on your organization's licensed monthly entitlement for **submitted identifiers**. These are not enforced by system guardrails but may be monitored and reviewed.  
>
>Record Delete is a **shared service**. Your monthly cap reflects the highest entitlement across Real-Time CDP, Adobe Journey Optimizer, Customer Journey Analytics, and any applicable Shield add-ons.

### Processing timelines for identifier submissions {#sla-processing-timelines}

After submission, record delete requests are queued and processed based on your entitlement level.

| Product & Entitlement Description                                                  | Queue Duration      | Maximum Processing Time (SLA) |
|------------------------------------------------------------------------------------|---------------------|-------------------------------|
| Without Privacy and Security Shield or Healthcare Shield add-on                   | Up to 15 days       | 30 days                       |
| With Privacy and Security Shield or Healthcare Shield add-on                      | Typically 24 hours  | 15 days                       |

If your organization requires higher limits, contact your Adobe representative for an entitlement review.
