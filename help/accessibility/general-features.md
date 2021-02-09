---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API;unified profile;Unified Profile;unified;Profile;rtcp;XDM graphs
title: General Accessibility Features in Platform
topic: guide
type: Documentation
description: Adobe Experience Platform is committed to providing accessible and inclusive features to all individuals.
---

# General accessibility features

## Keyboard accessibility
Experience Platform supports full keyboard accessibility

Keyboard navigation in Experience Platform works top > down, and left > right. The following navigational elements facilitate accessibility: the tab key moves between UI elements, shift + tab moves backwards through the tab order. The Return ( Enter ) and Spacebar keys activate the selected item.

Blue border around the selected element indicates a focus is applied to display a clear indication of which UI element currently has focus. Experience Platform has an equivalent keyboard navigation for drag & drop interactions.

## Color palettes & contrast
Experience Platform strives for WCAG 2.1 AA conformance, including requirements for color contrast. Experience Platform user interface strives to provide enough contrast in the application to ensure an accessible viewing experience for users with low vision or color deficiencies.

## Required field validation in various features
When adding data, creating schemas and segments, required fields are validated when you enter invalid data in fields and or upon saving. If a required field does not pass validation, it will be outlined in red with an error icon. A written description appears of the issue that needs to be fixed.

## Support for Assistive Technologies

Users with disabilities frequently rely on hardware and software known as "assistive technologies" to access web content and use software products. Adobe Experience Platform supports several types of assistive technologies (AT) such as screen readers.

A screen reader reads text that appears on the computer screen. It also reads non-textual information, such as button labels or image descriptions in the application, provided in accessibility tags or attributes. Through the use of semantic code and ARIA, interactive elements within Experience Platform user interface includes corresponding labels, accessible names, and roles that identify both their purpose and their current state. This ensures that assistive technologies, such as screen readers, can read out the labels and other information to users so that they can easily interact with the application controls. All interactive elements within the Experience Platform user interface include corresponding labels. This ensures that assistive technologies, such as screen readers, can read out the labels to users.

### Recommended screen readers & browsers

Windows latest version, using NVDA or JAWS screen readers (latest version) with the latest version of Google Chrome.

Experience Platform supports built-in MS Windows and macOS accessibility features like high-contrast mode, sticky keys, and slow keys/filter keys. It also provides information about the user interface to the operating system to enable interaction with assistive technologies, including screen readers such as VoiceOver for macOS and NVDA on Windows.

The terms used in the conformance level information are defined as follows:

Supports: The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation.
Partially supports: Some functionality of the product does not meet the criterion.
Does not support: The majority of product functionality does not meet the criterion.
Not applicable: The criterion is not relevant to the product.
Not evaluated: The product has not been evaluated against the criterion. This can only be used in WCAG 2.0 Level AAA.