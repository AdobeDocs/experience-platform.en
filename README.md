# Instructions for technical documentation for the Adobe Experience Cloud Platform

**Note: This page (or any readme.md page) will not publish to the customer facing documentation**

## TOC

+ `TOC.md` at the root of the user guide (stored in the **/help/** directory) provides the organization of the topics that are contained in the guide for this solution. 
+ Each user guide will have it's own unique `TOC.md`, in which you can order all the pages/topics as necessary.
+ The first page of all user guides is `overview.md`.

## User Guide

+ The introduction to the user guide is called `overview.md`
+ Each topic in the user guide has it's own distinct directory.
    + If there is a topic in the guide called *Implementation*, the corresponding directory is `/implementation`
+ All image assets are stored in `/assets` at the root of the user guide.
    + All images in the `/assets` directory will be localized.
    + Any images in the `/no-localize` directory will not be localized (there's a surprise!). This can be used to ensure in loc versions that specific assets aren't reproduced unnecessarily.

## User Guide Level Meta Data

+ Meta data which describes the user guide is stored in the `TOC.md`. This includes:
    + product - name of product/capability.
    + cloud - cloud to which this product belongs.
    + audience - audience or archetype at whom the guide is targeted.
    + user-guide - name of the user guide.

## Page Level Meta Data

+ Meta data required to describe a document is stored as part of each individual page. This includes:
    + title - title of the page.
    + description - description of page.
    + seo-title - seo alternative title.
    + seo-description - alternative title for SEO purposes.
    + short-title - (optional field).
    + index - yes / no - will the page be indexed by Adobe's search platform.
    + translate - yes / no - will this page be localized.
    + version - used primarily for AEM and Campaign, to denote the version of the product.
    + private-feature-pack - used primarily for AEM.
    + beta - is this product in beta?
    + redirect - can be used to create a ref to a new page should that be required.
    + doc-type: reference (default) / troubleshooting / developer / tutorial / kb / whitepaper.
    
## More Information

For more publishing instructions, style guides, samples and other resources, please visit the [Collaborative Documentation Repo](https://git.corp.adobe.com/AdobeDocs/collaborative-doc-instructions).
