# Title

Privacy Service vs Data Hygiene Documentation Boundary Analysis

# Description

Analysis of documentation architecture surrounding Privacy Service and Data Hygiene record deletion workflows. Identifies a documentation architecture issue affecting the planned ADLM restructure and records follow-up questions that must be resolved before restructuring related content.

---

# Relevant ADLM Context

During review of the Data Lifecycle documentation, a Privacy Service engineer (Duane Richards) identified that two related documentation pages present different record deletion approaches:

- Privacy Service:
  - `POST /data/core/privacy/jobs`
- Data Hygiene:
  - `POST /data/core/hygiene/workorder`

Additional investigation showed:

- Privacy Service documentation documents:
  - `POST https://platform.adobe.io/data/core/privacy/jobs`
- Data Lifecycle documentation also documents:
  - `POST https://platform.adobe.io/data/core/privacy/jobs`
- Another Data Lifecycle page documents:
  - `POST https://platform.adobe.io/data/core/hygiene/workorder`

Relevant documentation pages:

Privacy Service

https://experienceleague.adobe.com/en/docs/experience-platform/privacy/api/privacy-jobs#create-job

Data Lifecycle

https://experienceleague.adobe.com/en/docs/experience-platform/data-lifecycle/api/jobs

https://experienceleague.adobe.com/en/docs/experience-platform/data-lifecycle/api/workorder

The discussion concluded that the immediate concern is less about endpoint correctness and more about documentation architecture and workflow separation.

---

# Decisions / Confirmations

## Confirmed

The issue should be treated as an input into the broader ADLM restructure rather than an isolated page correction.

Current restructuring priorities remain unchanged.

Continue with the planned restructuring sequence:

1. Timeline/source-of-truth work
2. WHY/context
3. WHAT/use cases
4. Cross-service consistency

This issue should be incorporated during the workflow organization phase rather than handled independently.

The Epic should be updated to preserve rationale and future restructuring guidance.

No director-level escalation (Kristy) is required at this stage.

---

# Superseded / Rejected Ideas

## Rejected

Immediately removing or replacing the Data Lifecycle `/jobs` documentation.

Reason:

There is insufficient evidence that `POST /data/core/privacy/jobs` no longer serves a supported Data Hygiene purpose.

Confirmation is required before restructuring or removing related documentation.

---

# Open Questions

Highest priority:

Does

`POST /data/core/privacy/jobs`

still have a supported Data Hygiene-specific purpose outside Privacy Service regulatory workflows?

Related questions:

- What are the intended usage boundaries between:

  - `/data/core/privacy/jobs`

  and

  - `/data/core/hygiene/workorder`

- Should both remain documented?

- If so:

  - how should they be positioned?
  - which users should discover each?
  - what navigation relationship should exist?

---

# Doc-Architecture Reasoning

Current documentation appears to present Privacy Service and Data Hygiene deletion workflows too closely together without sufficiently distinguishing:

- user intent
- governance purpose
- workflow selection
- expected audience

This results in a reasonable user question:

> Which delete workflow should I use?

The discussion concluded that the problem appears to be documentation architecture rather than endpoint correctness.

A future ADLM restructure should organize documentation around user intent instead of technical implementation history.

Desired separation:

Privacy Service

- regulatory compliance
- data subject rights requests

Data Hygiene / ADLM

- operational lifecycle management
- record deletion
- data minimization
- quotas
- timelines
- work orders

However:

Whether `/data/core/privacy/jobs` still participates in Data Hygiene workflows remains unconfirmed.

---

# Stakeholder Context

## Duane Richards

Privacy Service engineer.

Raised the documentation inconsistency after reviewing documentation.

Considered an important technical reviewer for future restructuring of lifecycle/delete workflows.

The user intends to involve Duane during future restructuring.

## Kristy

Decision:

No update required yet.

Reason:

Issue is still investigative and does not yet require director-level communication.

Epic updates provide sufficient documentation trail.

---

# Assumptions / Risks

## Assumptions

The documentation architecture has evolved incrementally over time.

The overlap may reflect historical layering rather than incorrect documentation.

These remain assumptions pending engineering confirmation.

## Risks

Restructuring before confirming endpoint intent could:

- remove valid documentation
- misrepresent supported workflows
- incorrectly separate related functionality

---

# Chronology

1.

Duane identified differing documentation formats.

2.

Initial hypothesis:

Possible legacy/current documentation conflict.

3.

Further review determined:

Privacy Service documentation and Data Lifecycle documentation both reference

`POST /data/core/privacy/jobs`

4.

Discussion shifted away from endpoint correctness toward documentation architecture.

5.

Need identified to confirm intended product behavior before restructuring.

6.

Decision made to:

- capture findings in the Epic
- incorporate during ADLM restructuring
- avoid immediate escalation.

---

# Source / Provenance

## User-provided

- Slack message from Duane Richards.
- Existing ADLM restructuring Epic.
- Existing restructuring sequence.
- Intent to use findings during future restructure.

## Documentation references

Privacy Service documentation

https://experienceleague.adobe.com/en/docs/experience-platform/privacy/api/privacy-jobs#create-job

Data Lifecycle jobs

https://experienceleague.adobe.com/en/docs/experience-platform/data-lifecycle/api/jobs

Data Lifecycle work orders

https://experienceleague.adobe.com/en/docs/experience-platform/data-lifecycle/api/workorder

## Assistant inference

- Documentation architecture is likely the primary issue rather than endpoint correctness.
- User-intent organization would reduce ambiguity.

Explicitly treated as inference rather than confirmed fact.

---

# Confidence

| Claim | Confidence |
|---------|------------|
| Privacy Service docs document `/data/core/privacy/jobs` | **Confirmed** |
| Data Lifecycle `/jobs` documents `/data/core/privacy/jobs` | **Confirmed** |
| Data Lifecycle `/workorder` documents `/data/core/hygiene/workorder` | **Confirmed** |
| Current documentation creates workflow ambiguity | **Likely** |
| Issue is primarily documentation architecture rather than endpoint correctness | **Likely** |
| `/data/core/privacy/jobs` no longer has an operational Data Hygiene role | **Needs confirmation** |
| Documentation overlap exists because of historical layering | **Inferred** |
| Future restructure should separate workflows by user intent | **Likely** |