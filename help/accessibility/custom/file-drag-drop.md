---
title: File Drag & Drop Accessibility
topic: guide
type: Documentation
description: Adobe Experience Platform is committed to providing accessible and inclusive features to all individuals.
---

# File drag and drop accessibility

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