# Filename

2026-06-29_adlm-record-delete-timelines-canonical-doc-and-restructure.md

# Title

ADLM Record Delete Timeline Canonicalization and Documentation Restructure

# Description

This chat captures the design, drafting, validation, and repository integration of a new canonical "Data Lifecycle processing timelines" document as part of the broader ADLM documentation restructure. It establishes the architectural rationale for a single source of truth, identifies affected documentation, defines stakeholder review strategy, and records unresolved engineering questions requiring SME confirmation.

---

# Relevant ADLM Context

The work centers on PLAT-282985 ("Record delete timelines and SLA clarification") but expands it into a broader documentation architecture improvement.

Rather than updating timeline information independently in multiple locations, the decision was made to create a dedicated canonical document:

`help/hygiene/data-lifecycle-processing-timelines.md`

This page becomes the authoritative customer-facing explanation for:

- Standard (30-day) record delete processing
- Privacy and Security Shield / Healthcare Shield (15-day) processing
- Processing phases
- SLA behavior
- Queueing behavior
- Relationship to quotas
- Monitoring work orders

All remaining documentation should summarize timeline behavior and link to this document rather than duplicating timeline logic.

---

# Decisions / Confirmations

## Canonical document created

Decision:
Create a dedicated processing timelines page instead of embedding timeline explanations inside:

- home.md
- ui/record-delete.md
- api/workorder.md
- quota documentation

Confidence:
**Confirmed**

Source:
User decision following document architecture discussion.

---

## Single Source of Truth

Decision:

Timeline logic should exist in one location only.

Other pages should:

- summarize
- provide task-specific context
- deep link to the canonical document

Confidence:
**Confirmed**

Source:
User decision reinforced throughout review process.

---

## Separate Standard and Shield sections

Decision:

Do not require customers to mentally translate between:

- 30-day Standard
- 15-day Shield

Instead create independent sections.

Confidence:
**Confirmed**

Source:
Slack discussion (Carlos Ortega, Prabha Matta) and user architectural decision.

---

## High-level customer abstraction

Decision:

Avoid documenting:

- internal sequencing
- implementation details
- service ordering
- engineering internals

Instead describe observable customer behavior.

Confidence:
**Confirmed**

Source:
Slack discussion (Elizabeth Sexton, Hui Liu, Duane Richards).

---

## Shield represented conservatively

Decision:

Represent Shield using SLA-based behavior rather than publishing speculative phased timelines.

Confidence:
**Confirmed (pending SME review before any future change)**

Source:
User decision based on Slack review.

---

## Repository-wide cleanup

Decision:

Remove duplicated timeline tables throughout ADLM documentation.

Replace with:

- brief summaries
- links to canonical page

Confidence:
**Confirmed**

Source:
Claude repository scan.

---

# Superseded / Rejected Ideas

## Duplicate timeline tables

Rejected.

Reason:

Created conflicting customer guidance.

---

## Multiple competing "source of truth" pages

Rejected.

Reason:

Made timeline behavior difficult to maintain.

---

## Publishing Akin's phased Shield model immediately

Rejected.

Reason:

Only proposed in Slack.

No evidence it became approved customer-facing guidance.

---

## Documenting system ordering

Rejected.

Example:

"Data Lake is always last"

Reason:

Engineering clarified ordering is not guaranteed.

Slack later removed this wording.

---

# Open Questions

## Shield batching wording

Needs confirmation.

Current wording:

> typically batched within approximately 24 hours

Questions:

- should time/volume triggering be documented?
- should wording remain simplified?

Confidence:
Needs confirmation

---

## Shield processing model

Question:

Should customer docs remain SLA-based?

Or publish:

- Day 1–2
- Day 2–10
- Day 10–15

Confidence:
Needs confirmation

---

## Shield buffer

Question:

Should Shield expose a separate buffer phase?

Or remain:

"within 15-day SLA"

Confidence:
Needs confirmation

---

## Standard processing windows

Need confirmation that customer-facing approximation remains:

- Day 15–25
- Day 25–30

Confidence:
Needs confirmation

---

## Customer abstraction level

Confirm documentation should continue avoiding:

- service sequencing
- internal processing order
- named downstream systems

Confidence:
Needs confirmation

---

# Doc Architecture Reasoning

Primary architectural principle:

**One conceptual topic → one canonical document**

Task pages:

- explain the task
- summarize related concepts
- deep link to canonical references

Reference pages:

- own the complete explanation
- become stable citation targets
- prevent conflicting documentation

The canonical timeline document separates:

- conceptual understanding
- operational expectations
- task execution

This aligns with broader ADLM restructuring toward:

- decision-oriented navigation
- reduced duplication
- durable information architecture

---

# Stakeholder Context

## Jordan

Owner of:

- documentation architecture
- canonical document
- repository cleanup
- review coordination

---

## Prabha Matta

Primary stakeholder requesting clearer customer-facing timelines.

Requested:

- clearer SLA communication
- distinction between Standard and Shield

---

## Carlos Ortega

Supported:

- separate Standard vs Shield sections
- reducing customer ambiguity

Provided timeline proposals.

---

## Akin Ajayi

Suggested:

possible phased Shield timeline.

Not yet treated as approved customer documentation.

---

## Duane Richards

Engineering SME.

Clarified:

- batching behavior
- time vs volume trigger
- downstream adaptation
- uncertainty around service-specific buffering

---

## Hui Liu

Clarified:

- Day 25 is guideline
- SLA is commitment
- avoid implying deterministic processing order

---

## Elizabeth Sexton

Recommended:

avoid exposing "sausage making."

Supported high-level customer abstraction.

---

# Assumptions / Risks

## Assumption

Customer documentation should describe:

observable behavior

rather than:

internal implementation.

Confidence:
Likely

---

## Risk

Publishing phased Shield timelines prematurely could create unsupported commitments.

Confidence:
Confirmed

---

## Risk

Leaving timeline logic duplicated across repository will create future drift.

Confidence:
Confirmed

---

## Risk

Engineering behavior may evolve independently of documentation.

Canonical ownership reduces maintenance risk.

Confidence:
Likely

---

# Chronology

1. Decision made to create a dedicated processing timelines document.
2. Outline designed around customer mental model.
3. Draft iteratively refined through:
   - UX review
   - production readiness review
   - factual review
4. Repository scanned to locate competing timeline sources.
5. Strategy changed from "update many pages" to:
   - canonical page
   - summarize elsewhere
6. Remaining engineering questions isolated for SME review.
7. Planned next step:
   repository cleanup after SME approval.

---

# Source / Provenance Notes

| Topic | Source | Confidence |
|---------|---------|------------|
| Canonical document | User decision | Confirmed |
| Single source of truth | User + assistant reasoning | Confirmed |
| Separate Standard / Shield sections | Slack discussion | Confirmed |
| Avoid system ordering | Slack (Hui, Elizabeth, Duane) | Confirmed |
| Shield phased model | Slack proposal (Akin) | Needs confirmation |
| Repository duplicate timeline locations | Claude repository analysis | Confirmed |
| Repository cleanup strategy | User decision | Confirmed |
| Outstanding SME questions | User synthesis + Slack | Confirmed |

---

# Confidence Labels

| Claim | Confidence |
|--------|------------|
| Canonical timeline document should exist | Confirmed |
| Repository should link rather than duplicate | Confirmed |
| Standard vs Shield split is preferred | Confirmed |
| Customer abstraction over implementation detail | Confirmed |
| Shield phased timeline should be published | Needs confirmation |
| Shield buffer definition | Needs confirmation |
| Standard day ranges remain valid | Needs confirmation |
| Repository cleanup after approval | Confirmed |

---

# Suggested Markdown Filename

`2026-06-29_adlm-record-delete-timelines-canonical-doc-and-restructure.md`