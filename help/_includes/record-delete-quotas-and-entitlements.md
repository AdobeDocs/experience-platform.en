# Snippets

## Quotas and processing timelines {#quotas}

Record delete requests are subject to quotas and service-level expectations based on your license entitlement. These limits apply to both UI- and API-based delete requests.

### Quota limits {#quota-limits}

The table below outlines identity deletion quotas by entitlement level.

| Entitlement Type         | Daily Limit | Monthly Limit   | Cap Logic   |
|--------------------------|-------------|-----------------|-------------|
| **All customers**        | 1,000,000 identities/day   | —     | —      |
| **Base entitlement (CDP/AJO)** | 1,000,000 identities/day   | Lesser of 2,000,000 identities/month or 5% of addressable audience entitlement | "Whichever is less" rule applies          |
| **Premium (Shield add-on)** | 1,000,000 identities/day   | Lesser of 15,000,000 identities/month or 10% of addressable audience entitlement | "Whichever is less" rule applies          |
| **CJA customers (Base)** | 1,000,000 identities/day   | Lesser of 2,000,000 identities/month or 200 identifiers per million CJA rows of entitlement | "Whichever is less" rule applies |
| **CJA customers (Shield)** | 1,000,000 identities/day   | Lesser of 15,000,000 identities/month or 200 identifiers per million CJA rows of entitlement | "Whichever is less" rule applies |

Quotas reset at the start of each calendar month. Unused quota does **not** roll over.

>[!NOTE]
>
> Quotas are based on your organization's licensed entitlement and are not currently enforced by system guardrails. However, all activity is monitored and may be reviewed.  
>  
> Record Delete is a **shared service**. Your organization's maximum quota applies across all supported products (Real-Time CDP, AJO, CJA, and Shield add-ons).

### Processing timelines (SLA) {#sla-processing-timelines}

Work orders are processed based on your entitlement level.

| Entitlement Type | Queue Duration         | SLA (Maximum Time to Completion) |
|------------------|------------------------|----------------------------------|
| **Base**         | Up to 15 days          | 30 days                          |
| **Premium (Shield)** | Typically 24 hours   | 15 days                          |

If your organization requires higher limits, contact your Adobe representative for an entitlement review.
