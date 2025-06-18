# Snippets

## Quotas and processing timelines {#quotas}

Record delete requests are subject to quotas and service-level expectations based on your license entitlement. These limits apply to both UI- and API-based delete requests.

### Quota limits

The table below outlines identity deletion quotas by entitlement level.

| Entitlement Type    | Daily Limit                | Monthly Limit             | Percentage Cap                          |
|---------------------|----------------------------|---------------------------|------------------------------------------|
| **All customers**   | 1,000,000 identities/day   | —                         | —                                        |
| **Base entitlement**| 1,000,000 identities/day   | Up to 2,000,000/month     | Capped at 5% of addressable audience     |
| **Premium (Shield)**| 1,000,000 identities/day   | Up to 15,000,000/month    | Capped at 10% of addressable audience    |
| **CJA customers**   | Same as Base or Premium    | Same as Base or Premium   | Based on entitlement                     |

Quotas reset at the start of each calendar month. Unused quota does **not** roll over if you start submitting late in the month.

>[!NOTE]
>
> These quotas are based on entitlements defined in your license agreement. They are not currently enforced by system guardrails. However, usage may be monitored and reviewed periodically.

### Processing timelines (SLA)

Work orders are processed based on your entitlement level:

- **Base**: Queued for up to 15 days before processing. The SLA is 30 days.
- **Premium**: Queued for 24 hours before processing. The SLA is 15 days.

If your organization requires higher limits, contact your Adobe representative for an entitlement review.

>[!TIP]
> 
>For a centralized summary of entitlements, quotas, SLAs, and exception rules, refer to the [Quota reference guide](../api/quota.md).
