---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API;unified profile;Unified Profile;unified;Profile;rtcp;XDM graphs
title: Custom accessibility solutions for Experience Platform
topic: guide
type: Documentation
description: Learn more about the custom accessibility solutions within the Adobe Experience Platform user interface.
---

# Custom accessibility solutions for Experience Platform

Adobe Experience Platform is continuously enhanced to meet the needs of all types of users and adhere to the worldwide standards that include individuals with visual, auditory, mobility, or other impairments. This document outlines custom accessibility solutions within the Experience Platform user interface.

## Homepage and UI overview

Color contrast of left nav items, including normal, hover and selection states are now accessible.
Added accessible expand / collapse affordance in the banners
UI items are now keyboard accessible, tab and arrow keys
Focused links + enter open content in 2nd browser window
aria-labels added

![An image showing the homepage of the Adobe Experience Platform UI.](images/homepage.png)

## Left navigation

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

![An image showing multiple versions of the Experience Platform left navigation with accessibility features highlighted.](images/left-navigation.png)

## Embedded video dialog

Videos can be viewed within Experience Platform by using keyboard navigation to highlight and select an available video link. This opens an embedded video dialog within the Platform UI.

![An image showing a blue border appearing around a selected element to indicate that focus is applied.](images/profile-overview-tab.png)

The embedded video dialog can also be navigated using the keyboard. The following steps demonstrate the complete keyboard navigation available for the embedded video dialog:

1) Tab to set focus on play button. Spacebar begins video playback.
2) While video is playing, tab to focus the scrubber. With the scrubber in focus, left and right arrow keys skip video playback ahead and back 5 seconds, respectively.
3) Tab to focus pause/play button. Spacebar pauses/plays video.
4) Tab to focus mute/unmute. Spacebar mutes/unmutes video.
5) Tab to volume up/down affordance. Left and right arrow keys move volume up and down, respectively.
6) Tab to [!UICONTROL Closed Captions] ("cc") affordance. Enter opens the menu, up and down arrows keys select language. Enter key confirms selection.
7) Tab to [!UICONTROL Quality] affordance. Enter opens the menu, up and down arrow keys select video quality. Enter key confirms selection.
8) Tab to full screen affordance. Spacebar or enter key activates full screen view.Escape ("esc") exits full screen mode.
9) Tab to close button. Spacebar or enter key exits video dialog. 

>[!NOTE]
>
>At any time during playback, the escape ("esc") key can be used to close the embedded video dialog.

![An image showing the embedded video dialog with numbers identifying keyboard navigation elements.](images/video-dialog.png)

## File drag and drop accessibility

Summary:
Use the react-spectrum `<DropZone />` and `<IllustratedMessage /> `components instead of custom UI components for all file drag-n-drops. (FileDropHeader.js and UploadArea.js)
Hide the dropzone from keyboard users. No more using the keyboard on the dropzone to open the file menu, so we don't have a redundant keyboard experience with the "choose" button 
For FileDropHeader.js, also hide "choose" button when the dropzone is hidden, after successful upload
File chooser works in a variety of experiences, workflows, dialogs, and right panels

Accessibility Specifications:
Drag and drop component is keyboard accessible (Choose files) button.
Mouse users have drag and drop zone for file upload, invokes the OS file picker UI.
Once file has been uploaded, delete UI is keyboard navigable.
Enter key deletes the upload, choose button is enabled and focused.

## Browse table keyboard navigation

Accessibility for browse tables:
1) Table header, arrow down to enter the browse table. Table headers are selectable when navigating via the Tab key, and you can change the sorting order by pressing Space.
2) Arrow up / down moves down through the rows in the table
3) Row selected/focused, enter key on row provides details in right rail
4) Select enter to select item in the row (screen reader will alert user if new window will open)
5) Row selected/focused use arrow keys to move through each item in the row

Browse table keyboard shortcuts:
HOME: When row focused, HOME will take users to the first item in the row
END: When row focused, END will take users to the last item in the row
Page up key traverses 10 rows up in the table (per page)
Page down key traverses 10 rows down in the table (per page)
Control + HOME goes to first time in table
Control + END goes to first time in table per page

## Schema Editor UI

Accessibility in Schema Editor UI
Tabbing starts with left nav panel
Tab top, left to right to bottom through the UI elements
Tab enters into middle panel at the search field, then into the schema tree.
Schema tree use arrow keys to navigate through the schema tree UI
Arrow up/down to traverse the tree
Arrow left/right to expand/collapse nodes or move between inline actions on the schema tree.
Enter key to activate node details in the right panel
HOME goes top of the tree
END goes bottom of the tree
Schema tree includes aria-labels for screen readers

## Segment Builder UI

The Segment Builder UI is accessible via keyboard navigation and screen readers should recognize markup tags for headings, and can announce the heading along with its level, or provide another audible cue like a beep. Other assistive technologies can change the visual display of a page, using properly coded headings to display an outline or alternate view.

## Query Service Editor

Accessibility in Query Service Editor UI
QS editor color contrast accessibility compliance
Query Service supports keyboard navigation outside of the editor UI (editor UI is embedded Code Mirror)

## Sources and Destinations: System View tab

Accessibility: keyboard navigation
* Tab sets focus on first source connection card
  * Second tab will focus on button inside of card
  * Enter will activate the call to action button inside the card
* Enter on connection card, activates more details in the right panel
  * If right rail activated, tab will focus on right rail options
  * If more than 1 sources connection card tab will move down the connections
  * Up/down arrow keys move up/down from the card lists
  * Tab tabs to middle Profile card
  * Tab tabs to destinations card(s)
  * Tab tabs to right panel UI