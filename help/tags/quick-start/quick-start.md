---
title: Quickstart Guide
description: Learn how to quickly get up and running with tags in Adobe Experience Platform.
exl-id: 490ee344-3b18-4189-9293-2378f86fb10d
---
# Quickstart guide

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../term-updates.md) for a consolidated reference of the terminology changes.

Tags are Adobe Experience Platform's next generation of tag management technology. It is built from the ground up to support an open and sustainable ecosystem where anyone can build their own integrations that Adobe customers can deploy to their sites. It is an API first application so anything you can do through the UI you can also do programmatically through an API.

The basic tags workflow:

1. Set up groups and users.
2. Log in.
3. Create a property.
4. Install extensions.
5. Create data elements and rules.
6. Test in your dev environment.
7. Promote to production.

## 1. Set up groups and users

Tags are fully integrated with your Adobe ID. User permissions are managed through the Admin Console with other Adobe products and solutions from the [!DNL Creative Cloud], [!DNL Document Cloud], and Experience Cloud.

Tags have a rights-based user management system. This means that individual rights must be granted explicitly. These rights are assigned to groups, then users are added to the appropriate groups in order to gain access. Even if your organization has access to Data Collection, individual users cannot do anything until an administrator explicitly grants them some rights.

For detailed instructions on how to create groups and add users for tags, see the [data collection permissions guide](../../collection/permissions.md).

## 2. Log in

After tag rights have been added to your Adobe ID, you need to log in to the Experience Platform UI or Data Collection UI. You can do this by navigating directly to the [Experience Cloud login screen](https://experience.adobe.com/), and selecting either **[!UICONTROL Data Collection]** or **[!UICONTROL Experience Platform]**.

>[!NOTE]
>
>If you have a single account with rights to multiple organizations, the organization can be changed by selecting the organization name in the Control bar along the top of the screen and choosing a different organization from the dropdown list.

## 3. Create a property 

Once you have logged into the UI, the first thing to do is create a property. A property is basically a container that you fill with extensions, rules, data elements, and libraries as you deploy tags to your site. Many people create a property for each website (or group of closely related sites) where they want to deploy the same set of tags.

For more about creating properties, see [Create a property](../ui/administration/companies-and-properties.md).

## 4. Install extensions

An extension is an integration built by Adobe or an Adobe partner that adds new and endless options for the tags that you can deploy to your sites. If you think of a tag as an operating system, extensions are the apps that you install to do the specific things you need it to do.

All new properties come with the [Core extension](../extensions/client/core/overview.md) installed. Mobile properties come with additional extensions. The Core extension is built by Adobe to provide a robust default set of data element types for your data layer and event types for your rules. Most actions you will want to perform (get an ECID, send [!DNL Adobe Analytics] beacons, load the [!DNL Target] global mbox, etc) will come from extensions that you install from the catalog.

What makes tags in Platform truly unique is that these extensions can be built by anyone. Do you need to drop a Facebook remarketing pixel on your site? Check out the extension that Facebook built. Do you want the same for Twitter or Linked In? Use those extensions. Do you need to run a survey? Look at Question Pro or Foresee. Do you need to manage privacy and consent from your end-users to help out with [!DNL GDPR]? Take a good look at Evidon and Trust Arc. Would you like to see granular insight into the behavior of individual users on your site? Maybe take a look at Clicktale. For more information, For more information, see the section on [adding a new extension](../ui/managing-resources/extensions/overview.md#add-a-new-extension).

## 5. Create data elements and rules

**Data elements** are pointers to the information that you want to collect and send to different places on your page:

* A defined data layer in JSON
* DOM elements
* Cookies
* Session and local storage
* Just about everything else

After the data element is defined, you can use the element anywhere throughout the UI for any extension. See the documentation on [Data Elements](../ui/managing-resources/data-elements.md) for more detailed information.

**Rules** are at the logical core of your implementation and control the what, when, where, and how of all the tags on your site. Define an event, set conditions and exceptions, then define the actions and order. Finally, publish your changes to see the results. For more information, see [Rules](../ui/managing-resources/rules.md).

## 6. Test in your Dev environment 

### Libraries and builds

Tag builds are never published automatically. Each set of changes you make is encapsulated into a [library](../ui/publishing/libraries.md). Each library you create automatically inherits anything upstream (published, approved, or submitted) as a baseline, so all you need to do is define the changes you'd like to make. This library serves as the blueprint for a [build](../ui/publishing/builds.md). A build is the actual set of JavaScript files that are deployed and used.

It is important to understand the relationship between your web page, your hosting location, and tags.

1. Your host server provides a location to publish the build. The build itself contains the JavaScript files required by the library. 
   
   Each environment has a relationship with a host, and the host provides an endpoint indicating where to deliver the build. The host can belong to only one property, although a property can have many hosts.

2. An embed code is provided in the form  `<script>` tag that goes into the `<head>` sections of your website HTML.

   When you create an environment and attach a host, the environment automatically generates a unique embed code that allows you to integrate its assigned build into your site. The `<script>` code is used to deploy the library build at runtime.

3. When a user browses your site, the embed code `<script>` tag retrieves the build from your host server and performs your defined actions within the browser.

### Hosts

A host is a connection between a tag property and your hosting location. Tags currently support either Adobe managed hosting via an [!DNL Akamai] host or self-hosting through an SFTP host. Whenever you produce a build, tags connect to the server defined by your host and delivers the build.

If you are self-hosting, a tag build can push directly to your servers through SFTP or you can push it to [!DNL Akamai] and download it using your environment's Archive option.

For more information, see [Hosts](../ui/publishing/hosts/hosts-overview.md).

### Environments

Each library is created inside an environment. An environment defines how you want your build to look when it is published. You can specify:

* **Host:** Each environment needs a host which determines the endpoint where any builds created in this environment will be pushed.
* **Archive:** The default setting is to deploy your build as a minified .js file. If you are using custom code, you may have multiple files which reference each other. These can be combined into a single zip file and encrypted.

After you have saved your environment, it generates the embed code which you can copy and paste into your website. Note that the embed code will not work until you have created a library and produced a build. For more information, see [Environments](../ui/publishing/environments.md).

### Publish a build to Dev

The publishing process is described in the steps below.

1. Create a host.
1. Create a dev environment using the host you created.
1. Deploy the embed code from your dev environment to your dev test site.
1. Create a library and assign it to the dev environment you created.
1. Build your library.

## 7. Promote to production 

After you have tested your build in your dev environment, make sure to create your stage and production environments and put the embedded codes in the necessary places. You can reuse existing hosts for this purpose.

Promoting a library all the way through to production typically requires coordination among different people with the appropriate rights.

* A Developer (someone with the Develop right) submits the library, which moves the library to the Submitted state.
* An Approver (someone with the Approve right) can build the library to the stage environment and can approve it after testing. This moves the library to the approved state. Only one library can be submitted and approved at a time.
* A Publisher (someone with the Publish right) can build the library to the production environment.

You can assign all these rights to a single person.

For more information about the different states and options available during the publishing process, see [Approval Workflow](../ui/publishing/publishing-flow.md).

## Additional resources

To learn more about tags, refer to these resources:

* **[Data Collection Community](https://forums.adobe.com/community/experience-cloud/platform/launch)**: Ask and answer questions, submit ideas, vote on the ideas of others. Log in with your Adobe ID.
* **[Developer Docs](../api/overview.md)**: Get involved with the tags developer community to build extensions or use the tags APIs
* **[Tutorials Overview](https://experienceleague.adobe.com/docs/core-services-learn/tutorials/overview.html)**: These documents introduce you to tags concepts including event forwarding and Mobile SDK in Android Apps.
