---
title: Supplement first-party profiles
description: Learn how to use the prospecting functionality in Real-time CDP to supplement your own first-party profiles
---
# Supplement first-party profiles

Use the prospecting functionality in Real-Time CDP to supplement first-party profiles with partner-provided attributes for improving the quality of the data and for richer and more precise segmentation.

See also https://adobe-my.sharepoint.com/personal/giurgiu_adobe_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fgiurgiu%5Fadobe%5Fcom%2FDocuments%2FRecordings%2FPartner%20data%20in%20RTCDP%20%2D%20documentation%20for%20beta%2D20230516%5F133209%2DMeeting%20Recording%2Emp4&ga=1 at around 8 minutes in. 

## How it works

CUSTOMER licenses attributes from PARTNER
CUSTOMER extends their Profile data & governance model to accommodate PARTNER provided attributes
CUSTOMER exports audiences they want enriched keyed off-of PII/hashed-PII to PARTNER
PARTNER appends licensed attributes for profiles they're able to match against
Optionally a Partner ID can be included and ingested into the partner scoped ID namespace
RTCDP appends enriched attributes into profile
 
## In the product

You need to create a new identity type of type Partner ID. Link to how to create a new identity and to the Partner ID identity type

Create a new schema or extend an existing schema to include attributes that you are expecting to get back from the partner. 

## Limitations

Partner IDs are not ingested into Identity service. 

## Other prospecting use cases


