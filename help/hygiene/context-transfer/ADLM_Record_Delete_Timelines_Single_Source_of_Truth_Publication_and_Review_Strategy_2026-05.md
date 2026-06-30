# ADLM Record Delete Timelines — Single Source of Truth, Publication Strategy, and Review Consolidation

## Description

Captures the evolution of the Record Delete Timelines work from draft through engineering review, architecture refinement, stakeholder review strategy, publication decision, and establishment of a canonical customer-facing source of truth as part of the broader ADLM restructuring effort.

---

# Relevant ADLM Context

This conversation centers on restructuring Record Delete timeline documentation into a single canonical reference within the ADLM documentation set.

Primary objectives discussed:

* establish one authoritative customer-facing document for Record Delete timelines
* remove duplicated and conflicting timeline definitions
* separate Standard (30-day) and Shield (15-day) behavior
* simplify customer-facing explanations while preserving technical correctness
* improve user-centered navigation
* prepare the document for long-term ADLM restructuring

The work is tied directly to:

* PLAT-282985
* Data Lifecycle Documentation: User-Centered Restructure (WHY / WHAT / WHEN)

---

# Decisions / Confirmations

## Canonical timelines document

Decision:
Create a dedicated **Data Lifecycle processing timelines** document that becomes the single source of truth for Record Delete processing timelines.

Status:
**Confirmed**

---

## Repository consolidation

Decision:

Remove or reduce duplicate timeline information from:

* ADLM home
* Record Delete UI
* Work Order API
* shared include
* Browse page
* Best Practices

Replace detailed timeline explanations with links to the canonical document.

Status:
**Confirmed**

---

## Information architecture

Decision:

Separate timeline presentation into:

* Standard entitlement
* Privacy and Security Shield / Healthcare Shield

instead of expecting users to mentally translate timelines.

Status:
**Confirmed**

---

## Customer-facing abstraction

Decision:

Avoid exposing:

* internal downstream ordering
* service sequencing
* implementation details
* recovery mechanisms

Expose:

* batching
* processing
* completion
* SLA expectations

Status:
**Confirmed after engineering review**

---

## Shield presentation

Decision:

Represent Shield using a simplified SLA-based model rather than exposing speculative internal phases.

Status:
**Confirmed by engineering**

---

## Work order completion wording

Decision:

Replace customer-facing references to:

* integrity checks
* failed job resubmissions

with higher-level completion/finalization wording.

Reason:

Engineering requested hiding internal recovery mechanics.

Status:
**Confirmed**

---

## Single terminology

Decision:

Standardize workflow terminology around consistent processing phases.

Status:
**Confirmed**

---

## Publication decision

Decision:

Engineering review constituted sufficient factual validation.

Multiple stakeholder review windows elapsed without objections.

Publish rather than continue waiting indefinitely.

Status:
**Confirmed**

---

# Superseded / Rejected Ideas

## Publishing multiple competing timeline tables

Rejected.

Reason:

Conflicted with single source-of-truth architecture.

---

## Exposing downstream system ordering

Rejected.

Engineering clarified:

processing order is asynchronous and not guaranteed.

---

## Explaining internal buffer windows

Rejected.

Engineering recommended hiding implementation details.

---

## Detailed Shield phased breakdown

Originally considered.

Later rejected.

Engineering preferred SLA abstraction.

---

# Open Questions

None blocking publication.

Future refinements may occur if stakeholders later identify factual corrections.

---

# Doc-Architecture Reasoning

Primary architectural principles established:

## Single Source of Truth

One document owns:

* timeline logic
* entitlement behavior
* SLA interpretation

Other pages:

* summarize only
* deep-link to canonical page

---

## User-centered restructuring

Move away from:

feature ownership

toward:

customer questions.

Example:

Customer asks:

"When will my record delete complete?"

One page answers that question completely.

---

## Reduce duplication

Remove:

* repeated tables
* repeated SLA explanations
* competing wording

across ADLM.

---

## Progressive disclosure

High-level conceptual flow first.

Detailed entitlement tables afterward.

API/UI pages contain only operational instructions.

---

# Stakeholder Context

Engineering:

* Duane Richards

  * validated processing model
  * requested removal of implementation details
  * confirmed Shield abstraction

Product / SMEs:

* Prabha Matta
* Carlos Ortega
* Akin Ajayi
* Hui Liu
* Elizabeth Sexton

Management:

* Scott Rhoades
* Kristy Duncan

Discussion included:

* Jira update strategy
* Slack communication
* publication ownership
* review expectations
* escalation avoidance

---

# Assumptions / Risks

## Assumption

Engineering review is the authoritative source for factual correctness.

Confidence:

Confirmed.

---

## Assumption

Remaining stakeholders had multiple opportunities to review.

Confidence:

Confirmed.

---

## Risk

Late stakeholder corrections may require follow-up edits.

Mitigation:

Treat document as living documentation.

---

## Risk

Leaving duplicate timeline content elsewhere would recreate customer confusion.

Mitigation:

Continue restructuring remaining pages.

---

## Risk

Waiting indefinitely for reviews blocks restructuring progress.

Mitigation:

Publish after documented review opportunities and engineering approval.

---

# Chronology

1.

Document drafted.

---

2.

Large review focused on:

* wording
* Adobe style
* architecture

---

3.

Slack history reviewed.

Timeline logic extracted.

---

4.

Engineering review completed.

Key feedback:

* hide internal buffers
* simplify Shield
* remove sequencing

---

5.

Document revised.

---

6.

Canonical timeline document finalized.

---

7.

Repository searched for duplicate timeline content.

Migration strategy established.

---

8.

Publication strategy discussed.

Decision:

publish after documented review window.

---

9.

Jira updates refined.

---

10.

Slack announcement refined.

---

11.

Document published.

---

12.

Remaining restructuring work continues.

---

# Source / Provenance

## Canonical timeline architecture

Source:

User-authored restructuring work.

Confidence:

**Confirmed**

---

## Engineering feedback

Source:

Duane Richards GitHub review comments.

Confidence:

**Confirmed**

---

## Shield abstraction

Source:

Engineering review.

Confidence:

**Confirmed**

---

## Single Source of Truth strategy

Source:

User reasoning developed throughout conversation.

Confidence:

**Confirmed**

---

## Publication after review window

Source:

User discussion plus assistant reasoning.

Confidence:

**Likely**

Reflects sound documentation governance but is organizational rather than policy-driven.

---

## Repository consolidation

Source:

Claude repository analysis plus user review.

Confidence:

**Confirmed**

---

## Jira / Slack communication strategy

Source:

Conversation refinement.

Confidence:

**Confirmed**

---

# Confidence Labels

| Claim                                                                             | Confidence    |
| --------------------------------------------------------------------------------- | ------------- |
| Canonical Record Delete Timelines document should own timeline logic              | **Confirmed** |
| Duplicate timeline definitions should be removed across ADLM                      | **Confirmed** |
| Shield documentation should remain high-level                                     | **Confirmed** |
| Internal recovery/buffer mechanisms should not be customer-facing                 | **Confirmed** |
| Downstream ordering should not be documented                                      | **Confirmed** |
| Engineering review resolved factual blockers                                      | **Confirmed** |
| Publication after multiple review windows was appropriate                         | **Likely**    |
| Remaining ADLM restructuring should redirect legacy references to canonical pages | **Confirmed** |
