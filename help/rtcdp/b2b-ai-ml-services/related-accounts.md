---
title: Related accounts in Real-time CDP B2B
type: Documentation
description: Overview and more information about the related accounts feature in Experience Platform Real-time CDP B2B

---
# Related accounts in Real-time CDP B2B

## Overview {#overview}

In the context of account unification, customers may upload or ingest records from multiple data sources, so the same information might be duplicated in different places, with slight variations.

Furthermore, as account records are typically entered manually and the level of data hygiene varies by system, the same real world entity may be entered differently in different systems and may even have conflicting information. The result is the information of a real world entity is scattered across different systems, and it has been a top challenge for B2B customers today to arrive accurate insights and take best actions on their selling targets.

## How it works {#how-it-works}

Daily-run machine learning jobs use a hierarchical algorithm to cluster similar account profiles into groups based on three factors: parent account link, web domain and account name. Following a successful job processing, each member of the account profile group is tagged with the Related Accounts list. You can view the list in the **Related Accounts** tab of Account Profile page, and use in segment definitions.

See more information about the [profile enrichment related accounts jobs](/help/dataflows/ui/b2b/monitor-profile-enrichment.md).

## How to view related accounts {#how-to-view}

You can view related accounts for an account you are browsing in the Experience Platform UI.

See more information about [how to find related accounts in the UI](/help/rtcdp/accounts/account-profile-ui-guide.md#related-accounts-tab).

## How you can use related accounts {#how-to-use}

You can use accounts and related accounts in segmentation. The decision whether to use related accounts in your segment definitions depends on your marketing use case. For example, you could use related accounts for email marketing or advertising campaigns where you might want a larger reach.

See a [segmentation example](/help/rtcdp/segmentation/b2b.md#related-account) that uses related accounts.