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

The Experience Platform user interface meets required contrast ratios for normal text, graphics, and UI components. The colors of the user interface have also been chosen to support accessibility for all users, including those with visual disabilities. 

In Platform, UI elements that are clickable or actionable with a pointed can also be engaged using a keyboard. This includes the left navigation, video players, tables, and more.

Experience Platform strives to meet the Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA) web standards, including the addition of ARIA labels to UI elements.

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

## Video dialog keyboard accessibility

The embedded video dialog can also be navigated using the keyboard. The following table outlines the complete keyboard navigation available for the embedded video dialog.

|Dialog Element|Keyboard accessibility|Description|
|---|---|---|
|Play & Pause|Tab<br/>Spacebar|Use the tab key to set focus on play button. The spacebar begins video playback and pauses video playback.|
|Scrubber|Tab<br/>Left arrow<br/>Right arrow|When video is playing, use tab key to focus scrubber. With the scrubber in focus, left and right arrow keys skip video playback ahead and back 5 seconds, respectively.|
|Mute|Tab<br/>Spacebar|Use the tab key to focus the mute volume element. Use the spacebar to mute or unmute video playback.|
|Volume|Tab<br/>Left arrow<br/>Right arrow|Use tab key to focus on volume element. Left and right arrow keys move volume up and down, respectively.|
|[!UICONTROL Closed Captions] ("cc")|Tab<br/>Enter<br/>Up arrow<br/>Down arrow|Tab to [!UICONTROL Closed Captions] ("cc") element. Use the enter key to open the menu, and up and down arrows keys to select a language for captions. The enter key confirms your selection.|
|[!UICONTROL Quality]|Tab<br/>Enter<br/>Up arrow<br/>Down arrow|Use tab to focus the [!UICONTROL Quality] element. Use enter to open the menu and the up and down arrow keys to select video quality. The enter key confirms your selection.|
|Full Screen|Tab<br/>Spacebar or Enter<br/>Escape|Use tab to focus the full screen element. Use the spacebar or enter key to activate full screen view. The escape ("esc") key exits full screen mode.|
|Close|Tab<br/>Spacebar or Enter|Use tab to focus the close button. Use the spacebar or enter key to exit the video dialog.|

>[!NOTE]
>
>At any time during playback, the escape ("esc") key can be used to close the embedded video dialog.

![An image showing the embedded video dialog with numbers identifying keyboard navigation elements.](images/video-dialog.png)

## File drag and drop

In Experience Platform, all file selection drag and drop zones are keyboard accessible. Using the tab button to highlight [!UICONTROL Choose files] and using enter or spacebar to select the button, invokes the file selection UI for the users operating system.

After a file has been uploaded, a delete icon becomes keyboard navigable to remove the selected file and upload a new one. Users can use the tab key to focus on the delete icon and enter or spacebar to select it. Once the file is removed, the [!UICONTROL Choose files] button is automatically in focus and able to be selected.

Alternatively, if the file that is uploaded is not in the correct format, an error message appears with an error icon displayed to alert the user and the [!UICONTROL Choose files] button is automatically in focus and selectable.

![An image showing a file drag and drop zone with an error message and the choose files button in focus.](images/drag-and-drop.png)

Using a mouse to select the drag and drop zone also invokes the file selection UI, or a mouse user can select a file and drag onto the zone to begin uploading.

![An image showing a file drag and drop zone in focus as a mouse user drags a file into the zone.](images/drag-and-drop-mouse-over.png)

## Table browse

All tables within the Experience Platform user interface are keyboard accessible. Browsing and interacting with table rows and columns is possible through a series of keyboard shortcuts.

1) Table header, arrow down to enter the browse table. Table headers are selectable when navigating via the Tab key, and you can change the sorting order by pressing Space.
2) Arrow up / down moves down through the rows in the table
3) Row selected/focused, enter key on row provides details in right rail
4) Select enter to select item in the row (screen reader will alert user if new window will open)
5) Row selected/focused use arrow keys to move through each item in the row

### Browse table keyboard accessibility

|Keyboard accessibility|Description|
|---|---|
|HOME (Function + left arrow)|When row focused, takes users to the first item in the row|
|END (Function + right arrow)|When row focused, takes users to the last item in the row|
|Page up|Page up key traverses 10 rows up in the table (per page)|
|Page down|Page down key traverses 10 rows down in the table (per page)|
|Control + HOME|goes to first time in table|
|Control + END|goes to first time in table per page|

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