---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API;unified profile;Unified Profile;unified;Profile;rtcp;XDM graphs
title: General Accessibility Features in Platform
topic: guide
type: Documentation
description: Learn more about the general accessibility features supported by Adobe Experience Platform, including keyboard navigation, color palettes and contrast, and assistive technology support.
---

# Accessibility features in Experience Platform

Adobe Experience Platform is committed to providing accessible and inclusive features to all individuals, including users working with assistive devices, such as speech recognition software and screen readers. This document outlines the general accessibility features supported by Platform, including keyboard navigation, semantic structure, sufficient contrast between foreground elements and background elements, and support for assistive technologies.

## Assistive Technologies

Users with disabilities frequently rely on hardware and software known as "assistive technologies" to access web content and use software products. Adobe Experience Platform supports several types of assistive technologies (AT), including:

* Screen readers and screen magnifiers.
* Speech recognition software.
* Keyboard usage – navigation and shortcuts.
* Assistive hardware, including switch controls, refreshable Braille displays, and other computer input devices.
* UI magnifying tools.

## Screen readers

A screen reader reads text that appears on the computer screen. It also reads non-textual information, such as button labels or image descriptions within an application that are provided in accessibility tags or attributes. Through the use of semantic code and ARIA, interactive elements within the Experience Platform user interface include corresponding labels, accessible names, and roles that identify both their purpose and their current state. This helps to ensure that assistive technologies, such as screen readers, can read out the labels and other information to users so that they can easily interact with the application controls. All interactive elements within Experience Platform include corresponding labels. This ensures that assistive technologies, such as screen readers, can read out the labels to users.

### Recommended screen readers & browsers

Windows latest version, using NVDA or JAWS screen readers (latest version) with the latest version of Google Chrome.

Experience Platform supports built-in MS Windows and macOS accessibility features like high-contrast mode, sticky keys, and slow keys/filter keys. It also provides information about the user interface to the operating system to enable interaction with assistive technologies, including screen readers such as VoiceOver for macOS and NVDA on Windows.

The terms used in the conformance level information are defined as follows:

Supports: The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation.
Partially supports: Some functionality of the product does not meet the criterion.
Does not support: The majority of product functionality does not meet the criterion.
Not applicable: The criterion is not relevant to the product.
Not evaluated: The product has not been evaluated against the criterion. This can only be used in WCAG 2.0 Level AAA.

## Keyboard accessibility

Experience Platform supports full keyboard accessibility, ensuring that any user interface elements that are clickable or actionable with a pointer can also be engaged with a keyboard. Using a keyboard, users can navigate around the Platform user interface, as well as focus upon UI elements and take appropriate actions. Users can also use keyboard navigation for drag and drop interactions within Platform.

The following navigational elements help to facilitate accessibility: 

* **Tab:** The tab key moves between UI elements, shifting focus.
* **Shift + Tab:** Selecting shift and the tab key together moves backwards through the tab order. 
* **Return (Enter):** The return or enter key activates a selected item.
* **Spacebar:** The spacebar can also be used to activate a selected item.

To indicate which UI element currently has focus, a blue border appears around selected elements to indicate that focus is applied. 

![An image showing a blue border appearing around a selected element to indicate that focus is applied.](images/profile-overview-tab.png)

## Color palettes & contrast

Experience Platform strives for [WCAG 2.1 AA](https://www.w3.org/TR/WCAG/) conformance, including requirements for color contrast. The Experience Platform UI provides enough contrast in the application to ensure an accessible viewing experience for users with low vision or color deficiencies.

![An image showing the color palette and contrast present on the homepage of the Experience Platform UI.](images/homepage.png)

## Required field validation

Required fields are validated during multiple workflows such as adding data, creating schemas, and generating segments. If invalid data is entered into a required field or it does not pass validation during saving, the field is highlighted in red and an error icon appears.

![A close up of a required field that has not passed validation. The field appears in red and an error icon is present.](images/field-validation.png)