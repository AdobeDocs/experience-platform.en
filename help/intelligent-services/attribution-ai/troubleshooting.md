---
keywords: Experience Platform;getting started;attribution ai;popular topics;attribution ai input;attribution ai output;attribution ai troubleshooting;attribution ai errors
solution: Experience Platform, Real-Time Customer Data Platform
feature: Attribution AI
title: Attribution AI error troubleshooting
description: Find answers to common errors in Attribution AI.
type: Documentation
exl-id: c2ff700a-1e36-4ba2-876c-9f8b56344241
TQID: https://experienceleague.adobe.com/USuhMP2k6AWQKAh27k4KPSQ99WDws5VLydTy5w1WfKc
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: fdddec33-c9cb-4459-b8b6-2664395a6f10
    internal-label: Real-Time Customer Data Platform
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
topic_v2:
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
---
# Attribution AI error troubleshooting

This document provides answers to frequently asked questions about Attribution AI.

## Unable to access Attribution AI in Chrome incognito

Loading errors in Google Chrome's incognito mode are present because of updates in Google Chrome's incognito mode security settings. The issue is actively being worked on with Chrome to make experience.adobe.com a trusted domain.

![Error image](./images/faq/error.PNG){width=500}

### Recommended fix

To workaround this issue you need to add experience.adobe.com as a site that can always use cookies. Start by navigating to **chrome://settings/cookies**. Next, scroll down to the **Customized behaviors** section followed by selecting the **Add** button next to "sites that can always use cookies". In the popover that appears, copy and paste `[*.]experience.adobe.com` then select the **Including third-party cookies** on this site checkbox. Once complete, select **Add** and reload Attribution AI in incognito.

![recommended fix](./images/faq/cookies2.gif)
