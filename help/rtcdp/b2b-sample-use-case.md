---
keywords: RTCDP;CDP;Real-time Customer Data Platform;real time customer data platform;real time cdp;cdp;rtcdp
title: Example Use Case for Real-time Customer Data Platform B2B Edition
description: This sample scenario provides an example for the configuration of your implementation of Real-time Customer Data Platform B2B Edition.
---
# Example Use Case for Real-time Customer Data Platform B2B Edition

>[!IMPORTANT]
>
>Real-time CDP Business to Business Edition is currently in beta. The documentation and the functionality are subject to change.

Real-time Customer Data Platform B2B Edition expands the existing Real-time CDP and Adobe Experience Platform offerings to support B2B data and workflows. This document provides an example use case that demonstrates the additional benefits provided by the B2B Edition. They include:

- Combine person and account data from different siloed data sources to produce a comprehensive view that enables a better understanding of the customers and more accurate segmentation. See the documentation on [creating XDM schema relationships](./schemas/b2b.md) for use with varied B2B sources for more information. 
- Segment an audience based on attributes of related entities. This includes Accounts, Opportunities, Campaigns, and Marketing Lists. Segments are no longer limited to just Person attributes and Experience Events. See the B2B segmentation documentation for more examples on creating B2B-specific audiences.
  <!-- PLACEHOLDER [B2B segmentation documentation]()  -->
- Natively support the use case of one person related to multiple accounts.

## Use case

Bodea, a technology company, has a new product and wants to specifically target its marketing campaign towards customers who have spent over one million dollars on its products previously.

In order to maximize the efficiency of their marketing campaign, Bodea also wants to target the people associated with that existing account who have done at least $1 million in business AND have visited the new product page in the last month.

However, Bodea has two different lines of business. Bodea's first line of business "Line 1" creates software for the automotive industry. Its second line of business "Line 2" sells 3D printers that create automobile parts. Each line of business has its own sales system: "Sales-System 1" and "Sales-System 2", and different corporate information silos.

Both Line 1 and Line 2 sell to the Townsend company. 

![lines of business diagram](./assets/lines-of-business.png)

As a result of Bodea's two lines of business, the revenue generated from Bodea's customer accounts is not unified in a single view. The Townsend business relationship data is recorded as two separate accounts in each sales system.

As the relevant Townsend information is recorded as Account 1 in Sales-System 1 and Account 2 in Sales-System 2, Bodea's marketing team is unable to efficiently utilize the siloed information.

This prohibits Bodea's marketing team from efficiently targeting specific business contacts at these companies with this new opportunity. 

To date, Townsend has spent more than a million dollars cumulatively on Bodea products across all of their accounts. However, a segment created using their old system would not include anyone from Townsend unless the total spent within a single sales system totaled more than 1 million dollars. This is because the revenue data is siloed in accounts under different sales systems.

As Townsend's spending is split across different sales systems and does not individually total more than one million, the segment would not find anyone qualified in either Sales-System 1 or Sales-System 2.

### Benefits of Real-time CDP B2B Edition

Line 1 has just released a new software product and would like to up-sell it to Bodea’s existing top-tier customer base. Bodea launches a marketing campaign with that specific target audience in mind.

The Real-time CDP B2B Edition allows Bodea to use the combined data from disparate sources:

- In Sales-System 1, Account 1 has two related people (p1@townsend.com and p2@townsend.com) and one closed-won opportunity of $200k ("Opportunity 1").

- In Sales-System 2, Account 2 also has two related people (p2@townsend.com and p3@townsend.com) and one closed-won opportunity of $900k ("Opportunity 2").

For integration and additional corporate control purposes, Bodea also has a Master Data Management (MDM) system where it maintains a record indicating Account 1 in Sales-System 1 and Account 2 in Sales-System 2 are the same company.

In the last month, `p2@townsend.com` visited the new product page and the web visit was recorded in Sales-System 1.

![account info diagram](./assets/account-info.png)

### How Real-time CDP B2B Edition solves the problem

With Real-time CDP B2B Edition, Bodea's marketing team can:

- Bring the data from all of Sales-System 1, Sales-System 2, and the MDM into Real-time CDP B2B Edition and create unique segments using this aggregate data for varied marketing initiatives.

For the purpose of this example, people are being identified by their emails. The combined related data might look as follows:

| People |
|---|
| p1@townsend.com  |
| p2@townsend.com (who visited the new product page in the last month) |
| p3@townsend.com |

| Opportunities (closed-won) |
|---|
| Opportunity 1, $200k  |
| Opportunity 2, $900k  |

- Create a segment that finds all the people who:

  - Have associated opportunities (across ALL accounts) exceed $1 million in value
  - AND
  - Have visited the product page in the last month

- Create an audience who is the most efficient recipient of Bodea's new marketing campaign. In this example, the audience would only consist of `p2@townsend.com` who qualified for the segment. 

## Next steps

By reading this document you now have now been introduced to the types of objectives and problems that can be solved using Real-time CDP B2B Edition. 

The following documentation is recommended to improve your understanding of B2B specific features: 

- [Marketo connector]()
- [B2B Schemas]()
<!-- - [Account Profiles]() -->
<!-- - [B2B Segmentation examples]() -->
<!-- PLACEHOLDERS to tutorial / account profiles / B2B connectors / segmentation examples -->
