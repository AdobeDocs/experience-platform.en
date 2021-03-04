---
title: Platform Left Navigation Accessibility
topic: guide
type: Documentation
description: Adobe Experience Platform is committed to providing accessible and inclusive features to all individuals.
---

# Left navigation accessibility

Summary:
Color contrast of left nav items, including normal, hover and selection states are now accessible. 
Added accessible expand / collapse affordance at the bottom of the left nav panel
Left nav items are now keyboard accessible
aria-labels added
Tooltips added when left navigation panel is collapsed

Accessibility Specifications:
User will tab into the left navigation starting with Home, next tab will take users to the expand / collapse affordance at the bottom of the left nav panel.
Shift + tab goes back to Home.
Focus is shown for tab selection
Current selection is shown with highlight and bolded text
Expand / collapse affordance is activated with the enter key
When left nav collapsed, on keyboard nav, tooltip appears and focus ring
Arrow up/down, navigates to each item in the left nav and cycles through (stays in the left nav until tabbed)
Sections are expanded and collapsed with the left/right arrows. 
Enter will open the UI in the right panel, focus remains in left nav until tab is selected
Some feature can be disabled in the left nav. If this occurs, item will be disabled (skips arrow, no enter functionality).
Tooltip appears (aria-label enabled)
Left nav items have aria-labels

![An image showing multiple versions of the Experience Platform left navigation with accessibility features highlighted.](../images/left-navigation.png)