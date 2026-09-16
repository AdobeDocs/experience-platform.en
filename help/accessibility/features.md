---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API;unified profile;Unified Profile;unified;Profile;rtcp;XDM graphs
title: General Accessibility Features in Experience Platform
type: Documentation
description: Learn more about the general accessibility features supported by Adobe Experience Platform, including keyboard navigation, color palettes and contrast, and assistive technology support.
exl-id: 4b7e2f2b-af51-4376-8a63-16c921cc7135
TQID: https://experienceleague.adobe.com/C07M6BduYTECiUbP4K6eUo9C2U9PRdy6z2fbhqhcwxg
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
  - id: cc72dcf1-72e1-48cc-b434-e7c27d62d67c
    internal-label: Accessibility
---
# Accessibility features in Experience Platform

Adobe Experience Platform is committed to providing accessible and inclusive features to all individuals, including users working with assistive devices such as speech recognition software and screen readers. This document outlines the general accessibility features supported by Experience Platform, including keyboard navigation, semantic structure, sufficient contrast between foreground elements and background elements, and support for assistive technologies.

## Assistive technologies

Users with disabilities frequently rely on hardware and software, known as assistive technologies, to access digital content and to use software products. Adobe Experience Platform supports several types of assistive technologies (AT) such as screen readers, zoom, and voice recognition software by following accessibility best practices such as using semantic code, text equivalents, labels, and ARIA where needed. Interactive elements within the Experience Platform user interface (UI) use corresponding labels, accessible names, and roles that identify both their purpose and their current state. This ensures that assistive technologies, such as screen readers, can read out the labels and other information to users so that they can easily interact with the application controls.

## Keyboard accessibility

Experience Platform strives to support full keyboard accessibility.

The following navigational elements facilitate accessibility: 

* The Tab key moves between UI elements, sections, and menu groups.
* Arrow keys move within menu groups to set focus to individual active elements. 
* Shift + Tab moves backwards through the tab order. 
* The Return (Enter) and Spacebar keys activate selected items. 
* The escape key (ESC) acts as a cancel button to close a dialog when present.
* Experience Platform displays a blue border around a selected element to display a clear indication of which UI element currently has focus. 

![A blue border appearing around a selected element to indicate that focus is applied.](images/profile-overview-tab.png)

## Color palettes & contrast

Experience Platform strives for [WCAG 2.1 AA](https://www.w3.org/TR/WCAG/) conformance, including requirements for color contrast. The Experience Platform UI provides enough contrast in the application to ensure an accessible viewing experience for users with low vision or color deficiencies.

![The color palette and contrast present on the homepage of the Experience Platform UI.](images/homepage.png)

## Required field validation

When adding data, creating schemas, or defining segments, required fields are indicated both visually, using an asterisk next to the text label of a field, and programmatically. These fields trigger validation when you enter invalid data in fields and upon saving. If a required field does not pass validation, it is outlined in red with an error icon and a written description of the issue that needs to be fixed also appears.

![A close up of a required field that has not passed validation. The field appears in red and an error icon is present.](images/field-validation.png)
