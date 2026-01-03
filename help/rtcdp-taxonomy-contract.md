---
title: Taxonomy Contract Real-Time Customer Data Platform
description: Temporary enforcement contract defining valid RTCDP edition and package metadata, including allowed combinations, defaults, and detection constraints for metadata enforcement MVP automation.
---
# Taxonomy Contract Real-Time Customer Data Platform

**Status:** Temporary (MVP)  
**Authority:** Adobe Legal Product Descriptions
**Applies to:** Documentation metadata only  
**Enforcement mode:** Detection + reporting; additive suggestions only  
**Owner:** Documentation (single owner)  
**Sunset:** Replaced by formal taxonomy redesign (target 2026)
**Contract version**: v0.1

>[!NOTE]
>
>Changes require approval from documentation owner - ens32110.

## 1. Purpose

This contract defines the **only valid taxonomy representation** for Real-Time Customer Data Platform editions and packages during the MVP period.

The contract exists to:

- Prevent uncontrolled metadata drift
- Enable deterministic detection and reporting
- Serve as the non-negotiable baseline for automation and enforcement

This document is intentionally restrictive.

## 2. Source of Truth

All rules in this contract are derived **exclusively** from Adobe legal product descriptions:

- Real-Time Customer Data Platform **B2B Edition**
- Real-Time Customer Data Platform **B2C Edition — Prime & Ultimate Packages**
- Real-Time Customer Data Platform **B2P Edition — Prime & Ultimate Packages**

If a capability, package, or combination is **not explicitly supported** in these documents, it is considered **invalid for taxonomy purposes**.

## 3. Canonical Product Model

```
Real-Time Customer Data Platform
```

RTCDP is treated as a **single product root**.

Editions and packages are modeled as **features**, not as separate products or solutions.

## 4. Authoritative Feature Values

### 4.1 Edition Features (Mutually Exclusive)

Exactly zero or one edition feature may be applied.

- `B2B`
- `B2C`
- `B2P`

No aliases or alternative spellings are permitted.

### 4.2 Package (Tier) Features

Package features are conditional and edition-bound.

- `Prime`
- `Ultimate`

Package features are **mutually exclusive**.

## 5. Valid Edition × Package Combinations

| Edition | Prime | Ultimate | Contract Rationale |
|-------|------|----------|--------------------|
| `B2B` | No | No | B2B Edition is licensed as a standalone edition with no Prime/Ultimate packages |
| `B2C` | Yes | Yes | Prime and Ultimate packages are explicitly defined |
| `B2P` | Yes | Yes | Prime and Ultimate packages are explicitly defined |

### Hard Rules

- `Prime` and `Ultimate` MUST NOT coexist
- `Prime` or `Ultimate` MUST NOT appear without `B2C` or `B2P`
- `B2B + Prime` is invalid
- `B2B + Ultimate` is invalid

These rules reflect **current legal packaging only**.

## 6. Default Interpretation

If **no edition or package features** are present:

> The page is interpreted as **generic RTCDP content** applicable across editions.

Absence of features is not an error and does not imply mislabeling.

## 7. Feature Application Criteria

Edition and package features MUST be applied **only** when content includes at least one of the following:

- Explicit edition or package naming
- Edition-specific data models or entities  
  (for example: Businessperson Profiles vs Person Profiles)
- Package-gated entitlements or limits  
  (for example: Destination SDK access limited to Ultimate)

Marketing positioning or inferred applicability is insufficient.

## 8. Valid Metadata Example

```yaml
---
title: Account Profiles in Real-Time CDP
solution: Real-Time Customer Data Platform
features:
  - B2B
---
```

**Why valid:**
Account Profiles and Businessperson Profiles are explicitly defined and licensed in RTCDP B2B Edition.

## 9. Invalid Metadata Example

```yaml
---
title: Destination SDK overview
solution: Real-Time Customer Data Platform
features:
  - B2B
  - Ultimate
---
```

**Why invalid:**

- `Ultimate` packages do not exist for RTCDP B2B Edition
- The combination violates Section 5 of this contract

No automatic correction is permitted.

## 10. Enforcement Posture

- Detection and reporting only
- Additive suggestions allowed **only** at HIGH confidence
- No automated removals
- Ambiguous cases require manual review
- Contract violations block auto-add behavior

## 11. Explicit Non-Goals

This contract does **not**:

- Define UI badges or rendering behavior
- Resolve marketing or naming inconsistencies
- Model future packaging or roadmap intent
- Infer applicability from weak or indirect language
- Serve as user-facing documentation

## 12. Change Control

Any modification to this contract:

- Invalidates existing detection rules
- Requires re-baselining of gold-set data
- Must be versioned explicitly

This document is the authoritative enforcement baseline for the MVP.

