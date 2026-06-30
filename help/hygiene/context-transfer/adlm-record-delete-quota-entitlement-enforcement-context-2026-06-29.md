# ADLM Record Delete Quota: Entitlement vs Enforcement Documentation Alignment

## Suggested filename

`adlm-record-delete-quota-entitlement-enforcement-context-2026-06-29.md`

## Brief description

This chat captures ADLM documentation planning around record delete quota wording, specifically whether public docs should describe fixed quotas, percentage-based entitlement limits, current enforcement behavior, or exception handling.

## Relevant ADLM context only

A documentation issue was raised for the Data Lifecycle / ADLM record delete documentation because the current Experience League page describes monthly submission caps as the lesser of two values: a fixed identifier ceiling or a percentage-based threshold tied to licensed data volume.

The screenshot provided in the chat shows a table titled **Monthly submission entitlement by product**. The table includes percentage-based wording in the **Monthly Cap (Whichever is Less)** column:

- Real-Time CDP or Adobe Journey Optimizer without Privacy and Security Shield or Healthcare Shield add-on: `2,000,000 identifiers or 5% of addressable audience`.
- Real-Time CDP or Adobe Journey Optimizer with Privacy and Security Shield or Healthcare Shield add-on: `15,000,000 identifiers or 10% of addressable audience`.
- Customer Journey Analytics without Privacy and Security Shield or Healthcare Shield add-on: `2,000,000 identifiers or 100 identifiers per million CJA rows of entitlement`.
- Customer Journey Analytics with Privacy and Security Shield or Healthcare Shield add-on: `15,000,000 identifiers or 200 identifiers per million CJA rows of entitlement`.

The table also includes a note stating that most organizations will have lower monthly limits based on their actual addressable audience or CJA row entitlements.

Prabha Matta created Jira ticket **PLAT-291885 — Data Lifecycle Record Delete quota percentage wording clarification** requesting that the percentage-based portion of the quota wording be removed because it has never been implemented. The requested public-facing change was to keep only the fixed monthly cap values.

The Slack discussion showed that the documentation update is not a straightforward correction. It exposed a product/business alignment issue: the percentage-based limits may have been documented for contractual, commercial, GTM, COGS, or margin-protection reasons, even though the service does not currently enforce those limits.

The ADLM restructure relevance is that quota, entitlement, enforcement, exception handling, and customer-facing operational guidance may need to be separated in the information architecture. The current table appears to present a single operational rule, but stakeholder discussion suggests there may be at least three separate concepts:

1. Contractual or commercial entitlement limit.
2. Currently enforced service behavior.
3. Temporary exception handling for high-volume or bulk delete needs.

## Decisions / confirmations

### Documentation change should not be made yet

**Decision:** Hold off on changing the Experience League documentation until stakeholders align on the intended public-facing position.

**Confidence:** Confirmed.

**Provenance:** Assistant recommendation based on Slack/Jira excerpts and user discussion; accepted by the user as the appropriate response strategy.

### The issue should be treated as blocked pending stakeholder alignment

**Decision:** Treat PLAT-291885 as blocked or waiting pending business/product/stakeholder alignment, rather than as a normal documentation cleanup ticket.

**Confidence:** Confirmed.

**Provenance:** Assistant recommendation; based on Klaasjan Tukker’s request for additional analysis before sign-off.

### Public wording must distinguish entitlement, enforcement, and exceptions

**Decision:** Any eventual documentation update should avoid presenting entitlement policy, current enforcement behavior, and exception handling as one undifferentiated rule unless stakeholders explicitly confirm that this is intended.

**Confidence:** Likely.

**Provenance:** Assistant inference from Slack/Jira discussion.

### Use neutral stakeholder language

**Decision:** Avoid saying “Klaasjan refused this change.” Use softer, more accurate wording such as: “Klaasjan has not approved the change yet and has requested additional context before sign-off.”

**Confidence:** Confirmed.

**Provenance:** Assistant recommendation in response to the user’s existing Jira comment.

### Slack response should be short and operational

**Decision:** If responding in Slack, use a concise note that confirms Jordan will hold off on the Experience League update until the intended public-facing position is confirmed.

**Confidence:** Confirmed.

**Provenance:** Final recommended Slack response in this chat.

Recommended Slack wording:

```text
Thanks all. I’ll hold off on making the Experience League update until there is alignment on the intended public-facing position.

From a docs perspective, the main clarification seems to be whether the page should describe the contractual entitlement limit, the currently enforced service behavior, the exception process, or some combination of those.

Once that is confirmed, I can update the wording accordingly.
```

### Do not mention broader ADLM restructure in the senior Slack thread

**Decision:** Do not mention folding the work into the broader ADLM documentation cleanup in the Slack thread involving Klaasjan, because that may read as unnecessary scope expansion.

**Confidence:** Confirmed.

**Provenance:** Assistant recommendation after the user clarified that Klaasjan is senior / boss’s boss.

## Superseded or rejected ideas

### Immediate removal of percentage-based quota wording

**Rejected / superseded:** Removing the percentage-based quota language immediately, based only on the fact that the service does not currently enforce it.

**Reason:** Akin Ajayi and Klaasjan Tukker raised concerns that the wording may reflect contractual or commercial limits added to protect Adobe from abusive usage and COGS/margin exposure.

**Confidence:** Confirmed.

**Provenance:** Slack excerpts provided by the user.

### Framing the current documentation as simply “incorrect”

**Rejected / superseded:** Treating the current documentation as plainly incorrect.

**Reason:** The more accurate framing is that the documentation may be unclear because it does not distinguish between documented entitlement limits, currently enforced service behavior, and exception handling.

**Confidence:** Likely.

**Provenance:** Assistant inference from stakeholder discussion.

### Saying “Klaasjan refused this change”

**Rejected / superseded:** The phrase “Klaasjan refused this change.”

**Reason:** It is too adversarial for Jira or Slack. Better wording: “Klaasjan has not approved removal of the percentage-based language at this time” or “Klaasjan has requested additional context before sign-off.”

**Confidence:** Confirmed.

**Provenance:** Assistant recommendation.

### Long Slack response including ADLM restructure mention

**Rejected / superseded:** A longer Slack reply that included: “I can update the wording and fold this into the broader ADLM documentation cleanup so quota, timelines, and exception guidance are handled consistently.”

**Reason:** Appropriate as internal planning/status context, but too broad for a senior stakeholder Slack thread where the immediate issue is alignment on public-facing wording.

**Confidence:** Confirmed.

**Provenance:** Assistant recommendation after the user asked which Slack option was safest given Klaasjan’s seniority.

### Abstract Option 2 Slack response

**Rejected / superseded:** “I can document the final decision, but the final decision needs product/business alignment first...”

**Reason:** It is directionally correct but sounds too abstract and may read like Jordan is declaring governance rules to senior leadership.

**Confidence:** Confirmed.

**Provenance:** Assistant evaluation of the Slack options.

## Open questions

### What should the public documentation describe?

**Question:** Should the public Experience League documentation describe the contractual entitlement limit, the currently enforced service behavior, the exception process, or some combination of those?

**Confidence:** Confirmed open question.

**Provenance:** Slack discussion and final recommended Slack response.

### Are the percentage-based limits contractual entitlement limits?

**Question:** Are the percentage-based limits contractually binding entitlement limits, GTM/commercial guardrails, planned enforcement rules, or outdated documentation artifacts?

**Confidence:** Needs confirmation.

**Provenance:** Akin’s Slack comments suggest contractual / commercial importance; Prabha’s ticket frames the percentage wording as incorrect because it is not implemented.

### Why were the percentage-based limits originally documented?

**Question:** What source material, PRD, enablement, GTM plan, or business decision led to this wording being added originally?

**Confidence:** Confirmed open question.

**Provenance:** Klaasjan requested an email summary covering why it was originally written this way.

### What is the exposure to Adobe if the wording is removed?

**Question:** Would removing percentage-based limits weaken Adobe’s position for COGS control, margin protection, abusive usage prevention, or contractual enforcement?

**Confidence:** Confirmed open question.

**Provenance:** Akin’s Slack concern and Klaasjan’s request for exposure analysis.

### What is the exposure to customers if the wording remains?

**Question:** Does keeping the percentage-based wording cause customers to believe lower limits are actively enforced when they are not?

**Confidence:** Likely open question.

**Provenance:** Prabha’s claim that the current documentation is causing customer confusion.

### What usage patterns exist against current entitlements?

**Question:** Which customers are using more than their percentage-based entitlement would allow, and how many would be affected by future enforcement?

**Confidence:** Confirmed open question.

**Provenance:** Akin requested usage data; Duane said a report with usage broken down by orgs can be provided.

### Where should entitlement information come from?

**Question:** Can entitlement information be reliably obtained programmatically from AEP provisioning and projected product context, and should docs reference that capability or only use it internally?

**Confidence:** Needs confirmation.

**Provenance:** Klaasjan said entitlement information can be programmatically obtained from the AEP provisioning system and projected product context.

### Should temporary bulk delete exceptions be documented publicly?

**Question:** Should public docs describe that temporary exceptions can be granted for spikes in deletion needs, or should exception handling remain internal / support-driven?

**Confidence:** Needs confirmation.

**Provenance:** Prabha said exceptions are typically given for a certain period until customers handle spikes.

## Doc-architecture reasoning

The current record delete quota table appears to combine multiple documentation concepts into a single “monthly cap” rule. This creates ambiguity because different stakeholders are discussing different layers of the product/business model:

- **Entitlement policy:** What customers are contractually or commercially entitled to use.
- **Service enforcement:** What the product currently enforces in code.
- **Operational exception process:** How Adobe handles temporary spikes or one-time bulk delete needs.
- **Customer guidance:** What customers should plan for and expect when submitting record delete requests.

For the ADLM restructure, this suggests that quota guidance should not be treated as a single table-only update. The quota content may need a more explicit page/section model that separates:

1. Monthly fixed submission limits.
2. Percentage-based or entitlement-based limits, if still valid.
3. What is currently enforced versus what is documented as policy.
4. How customers should request temporary exceptions, if this can be public.
5. How limits differ for Real-Time CDP, Adobe Journey Optimizer, Customer Journey Analytics, and Shield add-ons.
6. How entitlement limits relate to addressable audience or CJA rows of entitlement.

A possible architecture direction, pending stakeholder approval, would be to structure the content around these questions:

- **What are the monthly record delete limits?**
- **Which limit applies to my organization?**
- **How are limits calculated?**
- **What happens if I need to delete more than my monthly limit?**
- **Are limits enforced automatically?**

However, the last question is sensitive because public documentation may need to avoid exposing internal implementation details. A safer public-facing pattern may be to describe the approved customer-facing policy and exception path without explicitly saying whether enforcement is or is not implemented in code.

From a documentation governance perspective, the writer should not decide whether the doc reflects current enforcement behavior or contractual entitlement policy. The writer can document the final decision, flag ambiguity, and propose a structure that makes the intended customer-facing position clear.

## Stakeholder context

### Prabha Matta

Prabha initiated the Slack discussion and created Jira **PLAT-291885**. Her position in the provided source material is that the percentage-based quota language should be removed because it has never been implemented and is creating customer confusion.

**Confidence:** Confirmed.

**Provenance:** Slack excerpt and Jira ticket text provided by the user.

### Duane Richards

Duane confirmed that the percentage-based enforcement logic is not currently in the service code. He explained that implementation was delayed because some customers were already using more than their percentage-based allotted delete volume, and stakeholders wanted to observe usage after increasing the base limit to 15M before restricting customers to lower limits.

Duane also stated that the service does not currently have access to entitlement information, but can provide usage reports broken down by org.

**Confidence:** Confirmed.

**Provenance:** Slack excerpt provided by the user.

### Akin Ajayi

Akin pushed back on immediate removal of the percentage-based limits. His concern is that the percentage language may represent a contractual limit added to protect Adobe from abusive usage and preserve COGS/margin. He requested data showing customer usage against current entitlement to determine whether the original assumptions still hold.

**Confidence:** Confirmed.

**Provenance:** Slack excerpt provided by the user.

### Klaasjan Tukker

Klaasjan stated that he cannot sign off on the change at this time. He requested an email summary covering why the wording was originally written this way, why removal is being requested, exposure to Adobe, COGS and customers, the sources of customer confusion, and whether alternatives have been explored.

He also stated that entitlement information can be programmatically obtained from the AEP provisioning system and projected product context.

**Confidence:** Confirmed.

**Provenance:** Slack excerpt provided by the user.

### Mihai Daniel / Zan Chu / Carlos Ortega

These stakeholders were added to the Slack conversation. The chat does not contain substantive positions from them.

**Confidence:** Confirmed for presence; no confirmed position.

**Provenance:** Slack excerpt provided by the user.

### Scott Rhoades, Kristy Duncan, Doug Smith

This chat does not contain stakeholder context for Scott, Kristy, or Doug.

**Confidence:** Confirmed absence within this chat.

**Provenance:** User explicitly asked whether this chat included stakeholder context for Scott, Kristy, or Doug; answer was no.

### Jordan Heasman

Jordan is the documentation owner / technical writer evaluating the appropriate response. The recommended role is to hold the documentation update until stakeholder alignment exists, then update the public wording according to the confirmed business/product position.

**Confidence:** Confirmed.

**Provenance:** User’s role in the chat and assistant recommendations.

## Assumptions / risks

### Risk: Customer confusion continues if the current wording remains unchanged

The percentage-based wording may continue to cause confusion if customers interpret the table as describing currently enforced behavior.

**Confidence:** Likely.

**Provenance:** Prabha’s Slack/Jira rationale.

### Risk: Adobe exposure if percentage wording is removed without approval

Removing the percentage-based limits may weaken Adobe’s public entitlement position or reduce protection against abusive usage, high COGS, or margin exposure.

**Confidence:** Likely.

**Provenance:** Akin’s Slack comments and Klaasjan’s request for exposure analysis.

### Risk: Documentation may reveal internal implementation ambiguity

If the doc states that percentage limits are not enforced in code, it may expose internal implementation details or invite higher usage.

**Confidence:** Inferred.

**Provenance:** Assistant inference from the stakeholder discussion.

### Risk: The current table conflates policy and implementation

The table may be inaccurate or misleading because it does not clarify whether the caps are contractual entitlements, enforced technical limits, or operational guidance.

**Confidence:** Likely.

**Provenance:** Assistant inference from the Slack discussion and screenshot.

### Risk: Exceptions process may be inconsistently understood

Customers may not know whether high-volume delete spikes can be accommodated through temporary exceptions.

**Confidence:** Likely.

**Provenance:** Prabha’s Slack comment that exceptions are typically given for certain periods, contrasted with the current table’s strict cap presentation.

### Assumption: The ADLM restructure should include quota and exception guidance

The conversation supports the assumption that quota, timelines, limits, and exception handling are part of the broader ADLM documentation cleanup.

**Confidence:** Inferred.

**Provenance:** Assistant recommendation; not yet confirmed as a formal ADLM restructure decision in this chat.

### Assumption: The writer should not make a business decision through documentation wording

Jordan should wait for product/business alignment before changing public quota wording.

**Confidence:** Confirmed as recommended strategy.

**Provenance:** Assistant recommendation accepted in follow-up discussion.

## Chronology of important reasoning

### 1. Current documentation screenshot established the problem surface

The screenshot showed an Experience League table where monthly record delete caps are defined as the lesser of a fixed identifier count or a percentage / entitlement-based threshold.

**Confidence:** Confirmed.

**Provenance:** User-provided screenshot.

### 2. Prabha initiated a Slack request to remove percentage-based wording

Prabha stated that the percentage part of the limit has never been implemented and requested its removal from public docs.

**Confidence:** Confirmed.

**Provenance:** Slack excerpt provided by the user.

### 3. Akin raised business and contractual concerns

Akin asked for understanding before making the change and noted GTM, COGS, margin, and contractual-limit considerations.

**Confidence:** Confirmed.

**Provenance:** Slack excerpt provided by the user.

### 4. Duane confirmed the service does not enforce percentage limits

Duane said the percentage-based enforcement was held off and does not currently exist in the code.

**Confidence:** Confirmed.

**Provenance:** Slack excerpt provided by the user.

### 5. Prabha clarified current operational handling

Prabha said customers can currently send requests based on fixed quotas: 2M/month for normal customers and 15M/month for premium/PSS customers. For larger needs, exceptions are typically granted temporarily until the spike is handled.

**Confidence:** Confirmed.

**Provenance:** Slack excerpt provided by the user.

### 6. Duane explained why enforcement was delayed

Duane said Adam had worked with many customers already using more than their percentage allotment, and wanted to understand impact after increasing the base limit to 15M before shutting customers down to lower limits. Duane gave BofA as an example: 95M addressable audiences would imply a 9.5M/month limit, but they are currently using the 15M max limit.

**Confidence:** Confirmed.

**Provenance:** Slack excerpt provided by the user.

### 7. Akin requested usage data against entitlement

Akin requested data to determine whether customers now require higher entitlement than the originally defined limits provided.

**Confidence:** Confirmed.

**Provenance:** Slack excerpt provided by the user.

### 8. Duane said entitlement data is not available in the service, but usage by org can be reported

Duane said the service does not have access to entitlement information yet, but can provide usage broken down by org.

**Confidence:** Confirmed.

**Provenance:** Slack excerpt provided by the user.

### 9. Klaasjan said entitlement information can be obtained from provisioning systems

Klaasjan stated that entitlement information can be programmatically obtained from AEP provisioning and projected product context.

**Confidence:** Confirmed.

**Provenance:** Slack excerpt provided by the user.

### 10. Klaasjan did not approve the documentation change and requested an email summary

Klaasjan requested a summary covering the original rationale, removal rationale, Adobe exposure, COGS, customer exposure, sources of confusion, and alternatives.

**Confidence:** Confirmed.

**Provenance:** Slack excerpt provided by the user.

### 11. Jordan added a Jira comment summarizing status and risk

Jordan’s Jira comment stated that documented contractual limits are not enforced in code, enforcement discussion is ongoing, abusive usage exposure exists, implementation was delayed because customers were using more than their allotted percentage, usage reporting was requested, and Klaasjan requested further analysis.

**Confidence:** Confirmed with minor wording issues.

**Provenance:** Jira comment provided by the user.

### 12. Assistant recommended reframing the issue

The assistant recommended treating the issue as blocked pending stakeholder alignment and avoiding the phrase “incorrect documentation” unless stakeholders agree. The assistant suggested framing the issue as unclear because it does not distinguish entitlement limits, current enforcement behavior, and exception handling.

**Confidence:** Confirmed as assistant recommendation.

**Provenance:** Assistant response in this chat.

### 13. Assistant recommended concise Slack response

After the user clarified Klaasjan’s seniority, the assistant recommended a short Slack response that holds the update pending alignment and avoids broader ADLM restructure mention.

**Confidence:** Confirmed.

**Provenance:** Assistant response in this chat.

## Source / provenance notes for major points

| Major point | Source / provenance | Confidence |
|---|---|---|
| Current Experience League table includes fixed caps plus percentage-based thresholds | User-provided screenshot | Confirmed |
| Prabha requested removal of percentage wording | Slack excerpt and Jira ticket | Confirmed |
| Rationale for removal is that percentage enforcement has never been implemented | Slack excerpt and Jira ticket | Confirmed |
| Akin raised GTM, COGS, margin, abusive usage, and contractual limit concerns | Slack excerpt | Confirmed |
| Duane confirmed enforcement does not exist in code | Slack excerpt | Confirmed |
| Prabha said current operational limits are 2M/month normal and 15M/month premium/PSS | Slack excerpt | Confirmed |
| Temporary exceptions are typically granted for high-volume spikes | Slack excerpt | Confirmed |
| BofA example: 95M addressable audience implies 9.5M/month by percentage, but current use is max 15M | Slack excerpt | Confirmed |
| Usage-by-org report can be produced, but entitlement information is not currently available to the service | Slack excerpt | Confirmed |
| Entitlement information can be obtained from AEP provisioning and projected product context | Slack excerpt from Klaasjan | Confirmed |
| Klaasjan has not signed off and requested an email summary | Slack excerpt | Confirmed |
| Documentation should pause pending alignment | Assistant recommendation | Confirmed as recommended strategy |
| Documentation issue is really entitlement vs enforcement vs exception architecture | Assistant inference from Slack/Jira | Likely |
| Broader ADLM restructure should treat quota/timelines/exceptions consistently | Assistant inference | Inferred |
| No Scott/Kristy/Doug stakeholder context is present in this chat | User question and assistant answer | Confirmed |

## Draft / review / status planning related to ADLM

For status reporting or ADLM planning, this item can be framed as:

```text
Record delete quota wording: Identified that the requested doc update is blocked on product/business alignment. Current Experience League wording combines entitlement limits, currently enforced behavior, and exception handling. Stakeholders are reviewing whether public docs should describe contractual entitlement limits, current service enforcement, exception handling, or a combination of these. Documentation update is paused pending sign-off.
```

For a Jira update, use neutral status language:

```text
Current status: this documentation change is blocked pending stakeholder alignment.

Based on the Slack discussion, the percentage-based limits documented in Experience League are not currently enforced in the service. However, there is concern that the percentage-based language may reflect a contractual or commercial entitlement limit originally added to protect Adobe from abusive usage and manage COGS/margin exposure.

Before making a public documentation change, stakeholders need to confirm whether the documentation should describe:

1. the contractual entitlement limit,
2. the currently enforced service behavior,
3. the exception process for temporary bulk delete needs,
4. or some combination of the above.

Klaasjan has not approved removal of the percentage-based language at this time. He has requested an email summary covering why the limits were originally documented this way, why removal is being requested, the exposure to Adobe, COGS and customers, the source of customer confusion, and whether alternatives have been considered.

From a documentation perspective, the current confusion appears to come from the doc presenting the monthly cap as a single rule, without clearly distinguishing entitlement policy, enforcement behavior, and exception handling.
```

For Slack, use the shorter version:

```text
Thanks all. I’ll hold off on making the Experience League update until there is alignment on the intended public-facing position.

From a docs perspective, the main clarification seems to be whether the page should describe the contractual entitlement limit, the currently enforced service behavior, the exception process, or some combination of those.

Once that is confirmed, I can update the wording accordingly.
```

## Final recommended Markdown filename

`adlm-record-delete-quota-entitlement-enforcement-context-2026-06-29.md`
