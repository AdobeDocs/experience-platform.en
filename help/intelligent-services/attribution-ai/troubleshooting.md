---
keywords: Experience Platform;getting started;attribution ai;popular topics;attribution ai input;attribution ai output;attribution ai troubleshooting;attribution ai errors
solution: Experience Platform, Real-time Customer Data Platform
feature: Attribution AI
title: Attribution AI error troubleshooting
description: Find answers to common errors in Attribution AI.
type: Documentation
exl-id: c2ff700a-1e36-4ba2-876c-9f8b56344241
---
# Attribution AI error troubleshooting

This document provides answers to frequently asked questions about Attribution AI.

## Unable to access Attribution AI in Chrome incognito

Loading errors in Google Chrome's incognito mode are present because of updates in Google Chrome's incognito mode security settings. The issue is actively being worked on with Chrome to make experience.adobe.com a trusted domain.

<img src='./images/faq/error.PNG' width=500 /><br />

### Recommended fix

To workaround this issue you need to add experience.adobe.com as a site that can always use cookies. Start by navigating to **chrome://settings/cookies**. Next, scroll down to the **Customized behaviors** section followed by selecting the **Add** button next to "sites that can always use cookies". In the popover that appears, copy and paste `[*.]experience.adobe.com` then select the **Including third-party cookies** on this site checkbox. Once complete, select **Add** and reload Attribution AI in incognito.

![recommended fix](./images/faq/cookies2.gif)
