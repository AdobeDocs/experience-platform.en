---
keywords: RTCDP;CDP;Real-time Customer Data Platform;real time customer data platform;real time cdp;cdp;rtcdp
title: Example Use Case for Real-time Customer Data Platform B2B Edition
description: This sample scenario provides an example for the configuration of your implementation of Real-time Customer Data Platform B2B Edition.
---
# Getting started with Real-time Customer Data Platform B2B Edition

>[!IMPORTANT]
>
>The Real-time CDP Business to Business Edition is currently in beta. The documentation and the functionality are subject to change.

<!-- This is for the tutorial -->

<!-- This getting started guide leads you through a sample implementation of the Real-time Customer Data Platform (Real-time CDP) B2B Edition. Although this guide will use specific examples, links to additional information will assist you in your set up. -->

This example use case demonstrates the additional benefits of the Real-time CDP B2B Edition to:

- Unify person and account data from different siloed data sources to produce a comprehensive view that enables a better understanding of the customers and more accurate segmentation. See the documentation for information on [creating XDM schema relationships](help/rtcdp/b2b-overview.md) for use with varied B2B sources. 
- Segment an audience based on attributes of related entities. This includes Accounts, Opportunities, Campaigns and Marketing Lists. Segments are no longer limited to just Person attributes and Experience Events. See the [B2B segmentation documentation](./segmentation/segmentation-overview.md) for more examples on creating B2B specific audiences. 
- Naturally support the use case of one person related to multiple accounts.

## Use Case

<!-- {GOAL}  -->

Bodea, a technology company, has a new product and wants to specifically target its marketing campaign towards previous customers who have spent over one million dollars on its products previously.

<!-- {PROBLEM in brief}  -->

However, the revenue generated from Bodea's customer accounts are not unified in a single view. This prohibits Bodea's marketing team from efficiently targeting their specific business contacts at these companies with this new opportunity. 

<!-- {CURRENT SITUATION}  -->

Bodea has two different lines of business, 'Line 1' and 'Line 2'. Each has its own sales system, Sales-System 1 and Sales-System 2. Both Line 1 and Line 2 sell to the Townsend company. 

However, the Townsend account is recorded as two separate accounts in each Sales-System.

Line 1 just released a new product and would like to up-sell it to Bodea’s existing top-tier customer base. Bodea launches a marketing campaign with the following targeting audience in mind.

<!-- {Problem - expanded} -->

However, because the Townsend Account is recorded as Account 1 in Sales-System 1, and Account record Account 2 in Sales-System 2.

A segment created to find customers who have spent over one million dollars on its products would not include anyone from Townsend because the segment would not find anyone qualified in either Sales-System 1 or Sales-System 2.

<!-- {Specific objectives} -->

Bodea also wants to find all people who visited the new product page in the last month and are related to any Account that Bodea had done at least $1m business in total in the past to maximize the efficiency of their marketing campaign.

<!-- {CURRENT DATA SITUATION} -->

Using the combined data from disparate sources:

In Sales-System 1, Account 1 has two related people – p1@townsend.com and p2@townsend.com, and one closed-won Opportunity 1 of $200k.

In Sales-System 2, Account 2 has also two related people – p2@townsend.com and p3@townsend.com, and one closed-won Opportunity 2 of $900k.

For integration or some other corporate control purposes, Bodea also has a MDM (Master Data Management) system where it maintains a record indicating Account 1 in Sales-System 1 and Account 2 in Sales-System 2 are the same company.

In the last month, p2@townsend.com visited the new product page and the web visit was recorded in Sales-System 1.

<!-- {HOW B2B SOLVES THE PROBLEM} -->

With Real-time CDP B2B Edition, Bodea's marketing team can:

- bring the data from all of Sales-System 1, Sales-System 2 and the MDM into B2B CDP. This would create a unified Townsend Account that combines all the opportunities and people associated with these opportunities. 

- This segment would provide the following related data:

**People**
p1@townsend.com
p2@townsend.com, visited the new product page in the last month
p3@townsend.com
**Opportunities**
Opportunity 1, $200k
Opportunity 2, $900k

Now the segment above would include p2@a.om who is the most efficient recipient of Bodea's new marketing campaign.

<!-- Note frm Erik: (Account id from the MDM would be required - Form Erik) -->

## Next steps

By reading this document you now have an understanding of the types of objectives and problems that can be solved using the Real-time CDP B2B Edition. The following documentation is recommended to improve your understanding of B2B specific features: 

- [How to build schema](help/rtcdp/b2b-overview.md)
- [How to ingest data](help/rtcdp/b2b-overview.md)
- [How to access profiles](help/rtcdp/b2b-overview.md)
- [B2B specific segments](help/rtcdp/b2b-overview.md)
- [How to define and enforce data governance policies](help/rtcdp/b2b-overview.md)