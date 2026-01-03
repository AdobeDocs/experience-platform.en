---
title: Hard-Signal Dictionary
description: ...
---
# Hard-Signal Dictionary (v0.1)

**Scope:** MVP metadata enforcement detection only  
**Derivation:** Strict implementation of Taxonomy Contract Sections 5 and 7  
**Inference:** None  
**ML:** None  
**Rule count:** 12 (intentionally capped)

## Edition Signals

### Rule B2B-01

- **rule_id:** `b2b_explicit_edition`
- **applies_to:** `B2B`
- **signal_type:** `explicit_string`
- **match_pattern:**  
  `Real[- ]?Time Customer Data Platform \(?B2B Edition\)?`
- **confidence_weight:** `0.7`
- **exclusions:** none

### Rule B2B-02

- **rule_id:** `b2b_businessperson_profile`
- **applies_to:** `B2B`
- **signal_type:** `explicit_string`
- **match_pattern:**  
  `Businessperson Profile(s)?`
- **confidence_weight:** `0.6`
- **exclusions:**  
  - pages explicitly scoped to `B2P`

### Rule B2B-03

- **rule_id:** `b2b_account_profile_with_businessperson`
- **applies_to:** `B2B`
- **signal_type:** `explicit_string`
- **match_pattern:**  
  `Account Profile(s)?.{0,200}Businessperson Profile(s)?|Businessperson Profile(s)?.{0,200}Account Profile(s)?`
- **confidence_weight:** `0.6`
- **exclusions:**  
  - `B2P Edition`
  - `Consumer Audience`

### Rule B2C-01

- **rule_id:** `b2c_explicit_edition`
- **applies_to:** `B2C`
- **signal_type:** `explicit_string`
- **match_pattern:**  
  `Real[- ]?Time Customer Data Platform \(?B2C Edition\)?`
- **confidence_weight:** `0.7`
- **exclusions:** none

### Rule B2C-02

- **rule_id:** `b2c_consumer_audience`
- **applies_to:** `B2C`
- **signal_type:** `explicit_string`
- **match_pattern:**  
  `Consumer Audience`
- **confidence_weight:** `0.5`
- **exclusions:**  
  - `Business Audience`
  - `Businessperson Profile`

### Rule B2P-01

- **rule_id:** `b2p_explicit_edition`
- **applies_to:** `B2P`
- **signal_type:** `explicit_string`
- **match_pattern:**  
  `Real[- ]?Time Customer Data Platform \(?B2P Edition\)?`
- **confidence_weight:** `0.7`
- **exclusions:** none

### Rule B2P-02

- **rule_id:** `b2p_dual_profile_model`
- **applies_to:** `B2P`
- **signal_type:** `explicit_string`
- **match_pattern:**  
  `Person Profile(s)?.{0,200}Businessperson Profile(s)?|Businessperson Profile(s)?.{0,200}Person Profile(s)?`
- **confidence_weight:** `0.6`
- **exclusions:** none

## Package (Tier) Signals

> Package signals are valid **only when paired with an edition** (`B2B`, `B2C`, or `B2P`) per Section 5 of the contract.

### Rule PRIME-01

- **rule_id:** `prime_explicit_product_name`
- **applies_to:** `Prime`
- **signal_type:** `explicit_string`
- **match_pattern:**  
  `Real-Time Customer Data Platform Prime|Real-Time CDP Prime`
- **confidence_weight:** `0.6`
- **exclusions:** none

### Rule PRIME-02

- **rule_id:** `prime_collaboration_2500`
- **applies_to:** `Prime`
- **signal_type:** `entitlement_phrase`
- **match_pattern:**  
  `2,500 Collaboration Credits`
- **confidence_weight:** `0.6`
- **exclusions:**  
  - `5,000 Collaboration Credits`

### Rule ULT-01

- **rule_id:** `ultimate_explicit_product_name`
- **applies_to:** `Ultimate`
- **signal_type:** `explicit_string`
- **match_pattern:**  
  `Real-Time Customer Data Platform Ultimate|Real-Time CDP Ultimate`
- **confidence_weight:** `0.6`
- **exclusions:** none

### Rule ULT-02

- **rule_id:** `ultimate_destination_sdk_entitlement`
- **applies_to:** `Ultimate`
- **signal_type:** `entitlement_phrase`
- **match_pattern:**  
  `Access to (the )?Destination SDK|Destination SDK enabling Customer to build custom destination connectors`
- **confidence_weight:** `0.6`
- **exclusions:** none

## Contract-Violation Detectors (Non-Additive)

> These rules **never add features**.  
> They exist solely to enforce Section 5 constraints.

### Rule VIO-01

- **rule_id:** `invalid_prime_and_ultimate_coexist`
- **applies_to:** `Prime|Ultimate`
- **signal_type:** `feature_name`
- **match_pattern:**  
  front-matter contains both `Prime` **and** `Ultimate`
- **confidence_weight:** `0.7`
- **exclusions:** none

### Rule VIO-02

- **rule_id:** `invalid_package_without_edition`
- **applies_to:** `Prime|Ultimate`
- **signal_type:** `feature_name`
- **match_pattern:**  
  front-matter contains `Prime` or `Ultimate` **without** `B2B`, `B2C`, or `B2P`
- **confidence_weight:** `0.7`
- **exclusions:** none

## Notes (Implementation-Critical)

- No rule implies eligibility on its own
- HIGH confidence requires **multiple aligned signals**
- Violations block auto-add behavior
- Absence of signals is valid and expected
- Any new rule must trace back to the taxonomy contract

