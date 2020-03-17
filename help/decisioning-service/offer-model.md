---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Offer Decisioning domain model
topic: overview
---

# Offer Decisioning domain model overview

Offer decisioning is a use case of Decisioning Service within which you formalize and centrally manage the rules and predictions used for engaging customers with offers. Offer decisioning is considered a type of _**content decisioning**_. In this use case, the _**decision options**_ are referred to as _**offers**_, and are characterized as such by the content attached to them. For an introduction of the object model used by the Decisioning Service, please refer to [Decisioning Service Domain Model](decisioning-service-domain-model.md).

The objective is to present the end user with a "Best Offer" in any channel based on targeting criteria, cost and frequency constraints, as well as prior interactions across channels including prior Offers proposed. 

Like with all decisioning use cases, the decision options (offers) are managed in a repoistory shared by any number of application. Offers could be created by different departments of your organization or by partners, and those offers could be added and removed daily. 

Offers are visually placed into larger experiences by the application that is delivering the experience. _**Placements**_, sometimes called spots or slots, are important components for crafting a strategy. Designing an offer strategy often starts with the definition of those placements. An offer typically has multiple _**content representations**_ so that it can be correctly integrated into a variety of experiences, where each has varying dimensional or other constraints and requires different media formats.

Offers frequently have an association with physical goods or services and there is a cost calculation involved. An organization needs to be able to limit the resources that are consumed by offers and therefore needs to be able to _**cap**_ the total number of times an offer can be proposed. 

The predicted value of an accepted offer to the organization is the optimization criteria and stands against the cost of making an offer. Cost, likelihood of acceptance and predicted value is used to rank the offers. The Best Offer is the one with the highest predicted positive impact on the goals of your offer activities.

Offer Decisioning considers the interactions an end-user had, _**across many channels**_ and applications, it leverages an end-user’s profile and experience event data. For instance, a call center application can use Offer Decisioning to enable or suppress an offer based on purchases made and reviews posted by the end-user; or an email management application can rely on Offer Decisioning to select the Next Best Offer in a weekly newsletter based on the browsing history on a website.

Offers have other interesting properties. Frequently, there is a defined _**schedule**_ or date and time range when the offer is valid and by when the offer needs to be invalidated.

Lastly, the appeal of an offer deteriorates with the frequency by which it is presented. An Offer that is not accepted after being proposed repeatedly is a lost opportunity because a different offer could have been presented. For that reason, end-user _**fatigue**_ must be managed.

## Offer Decision Strategy at a glance

The overall approach is to narrow the selection of Offers until all constraints are satisfied, then apply the Ranking model to the remaining Options, and then optimize across multiple activities using Capping Constraints (de-duplication & avoidance of fallback choices).

| Strategy Component | Realized as |
| --- | --- |
| Decision activities | Offer activities |
| Decision options | Offer with content representations |
| Fallback options | Fallback offer with content representations |
| Finite set of decision options | Offer inventory (a.k.a. offer library) |
| Topical categories | Offer filter based on tags and offer identifiers |
| Decision outputs | Proposition of one offer per activity, for multiple activities at once |
| Decision outcomes | Expected experience event with reference to the offer, e.g. `eventType='opened'` |
| Decision algorithm | Internal service logic, parameterized |
| Constraints | Placement constraints, calendar constraints, global and per user capping constraints, de-duplication constraints |
| Decision rules | Eligibility rules |
| Model for *expected utility* | Offer rank or priority |
