---
title: Summary Tab
description: Learn how to use the Summary tab in Adobe Experience Platform Debugger.
keywords: debugger;experience Platform Debugger extension;chrome;extension;summary;clear;requests;summary screen;solution;information;analytics;target;dtm;audience manager;launch;id service
seo-description: Experience Platform Debugger Summary Screen
seo-title: Summary Tab
uuid: 46b17eaa-b611-43cf-8c6a-67b2e9b9d940
exl-id: 91234125-15c4-4111-9ee4-f3af093a3c4d
---
# Summary tab

To run Adobe Experience Platform Debugger, open the page you want to examine in the browser, then select the icon (![](images/start-icon.jpg)) on your browser bar. The extension opens on the **Summary** tab.

![](images/summary.jpg)

This screen shows information about each Adobe Experience Cloud solution. The information shown varies by solution, but typically includes information including the solution library and version (for example, "AppMeasurement v2.9") and account identifiers (such as the Analytics report suite ID, the Target client code, the Audience Manager partner ID, and so on)

## Information shown in Experience Platform Debugger  

Experience Platform Debugger shows the following information for each solution:

**Adobe Analytics**

<table id="table_BEB9CC58E59D4D86BC895A8A51D84A2C"> 
 <tbody> 
  <tr> 
   <td colname="col1"> <p>Report Suite(s) </p> </td> 
   <td colname="col2"> <p>A <a href="https://experiencecloud.adobe.com/resources/help/en_US/reference/report_suites_admin.html" format="html" scope="external"> report suite</a> defines the complete, independent reporting on a chosen website, set of websites, or subset of web pages </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Version </p> </td> 
   <td colname="col2"> <p>The <a href="https://experienceleague.adobe.com/docs/analytics/implementation/js/overview.html" format="html" scope="external"> AppMeasurement</a> version defined for the page </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Visitor Version </p> </td> 
   <td colname="col2"> <p>The version of the <a href="https://experienceleague.adobe.com/docs/analytics/import/data-sources/data-types-and-categories/datasrc-visitorid.html" format="html" scope="external"> visitor ID</a> library. </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Page Name </p> </td> 
   <td colname="col2"> <p>The <a href="https://experiencecloud.adobe.com/resources/help/en_US/sc/implement/pageName.html" format="html" scope="external"> pageName</a> variable sent to Analytics that contains a user friendly name of the site. </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Modules </p> </td> 
   <td colname="col2"> <p>The modules loaded by Adobe Analytics </p> </td> 
  </tr> 
 </tbody> 
</table>

**Audience Manager**

<table id="table_784AEABADBDA4D14BB9A7A9CB9EF07C3"> 
 <tbody> 
  <tr> 
   <td colname="col1"> <p>Partner </p> </td> 
   <td colname="col2"> <p>The <a href="https://experiencecloud.adobe.com/resources/help/en_US/aam/r_dil_get_partner.html" format="html" scope="external"> partner name</a> for the DIL instance </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Version </p> </td> 
   <td colname="col2"> <p>The<a href="https://experiencecloud.adobe.com/resources/help/en_US/aam/r_api_return_versions_dil.html" format="html" scope="external"> version number</a> for the DIL instance </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>UUID </p> </td> 
   <td colname="col2"> <p>The <a href="https://experiencecloud.adobe.com/resources/help/en_US/aam/ids-in-aam.html" format="html" scope="external"> Unique User ID</a> associated with the DIL instance </p> </td> 
  </tr> 
 </tbody> 
</table>

**Adobe Experience Platform Tags**

<table id="table_E9574975444A407887E26514D1BB1601"> 
 <tbody> 
  <tr> 
   <td colname="col1"> <p>Name </p> </td> 
   <td colname="col2"> <p>The name of the tag <a href="https://experienceleague.adobe.com/docs/experience-platform/tags/admin/companies-and-properties.html" format="https" scope="external"> property</a> </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Version </p> </td> 
   <td colname="col2"> <p>The version of Turbine</a> </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Build Date </p> </td> 
   <td colname="col2"> <p>The tag <a href="https://experienceleague.adobe.com/docs/experience-platform/tags/publish/libraries.html" format="https" scope="external"> library</a> build date </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Environment </p> </td> 
   <td colname="col2"> <p>The <a href="https://experienceleague.adobe.com/docs/experience-platform/tags/publish/environments/environments.html" format="https" scope="external"> environment</a> used by the tag library </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Extensions </p> </td> 
   <td colname="col2"> <p>The extensions used on the page </p> </td> 
  </tr> 
 </tbody> 
</table>

**Adobe Experience Platform Web SDK**

<table id="table_DC76D63FA6EF4891906B9E1D3E4A8A6C"> 
 <tbody> 
  <tr> 
   <td colname="col1"> <p>Library Version </p> </td> 
   <td colname="col2"> <p>The number of the Adobe Experience Platform Web SDK <a href="https://experienceleague.adobe.com/docs/experience-platform/web-sdk/extension/web-sdk-ext-release-notes.html" format="html" scope="external">library version</a> </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Namespace</p> </td> 
   <td colname="col2"> <p>The name identified in the extension</p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Property ID </p> </td> 
   <td colname="col2"> <p>The name of the tag property specified in the extension </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Edge Domain </p> </td> 
   <td colname="col2"> <p>The domain that the Adobe Experience Platform extension sends and receives data from </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>IMS Organization ID </p> </td> 
   <td colname="col2"> <p>The organization that you would like the data sent to at Adobe, as specified in the extension </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Logging Enabled </p> </td> 
   <td colname="col2"> <p>Specifies whether logging has been enabled for this property</p> </td> 
  </tr> 
 </tbody> 
</table>

**Adobe Experience Cloud ID Service**

<table id="table_274CFCEFA8F34D16BB546B4669EC0209"> 
 <tbody> 
  <tr> 
   <td colname="col1"> <p>Experience Cloud Org ID </p> </td> 
   <td colname="col2"> <p>Your <a href="https://experiencecloud.adobe.com/resources/help/en_US/mcvid/" format="https" scope="external"> Organization ID</a> </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Version </p> </td> 
   <td colname="col2"> <p>The version of the<a href="https://experienceleague.adobe.com/docs/analytics/import/data-sources/data-types-and-categories/datasrc-visitorid.html" format="html" scope="external"> visitor ID</a> library </p> </td> 
  </tr> 
 </tbody> 
</table>

**Adobe Target**

<table id="table_D30E0CD20FB04E41862B22655136E043"> 
 <tbody> 
  <tr> 
   <td colname="col1"> <p>Client Code </p> </td> 
   <td colname="col2"> <p>Your Target <a href="https://experienceleague.adobe.com/docs/target/using/implement-target/client-side/at-js-implementation/deploy-at-js/implementing-target-without-a-tag-manager.html" format="html" scope="external"> Client Code </a> </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Version </p> </td> 
   <td colname="col2"> <p>Your current <a href="https://experienceleague.adobe.com/docs/target/using/implement-target/client-side/at-js-implementation/target-atjs-versions.html" format="html" scope="external"> at.js</a> or mbox.js version </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Global Request Name </p> </td> 
   <td colname="col2"> <p>The<a href="https://experienceleague.adobe.com/docs/target/using/implement-target/client-side/global-mbox/understanding-global-mbox.html" format="html" scope="external"> global mbox</a> refers to the single server call made at the top of each web page in your Target implementation </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Page Load Event </p> </td> 
   <td colname="col2"> <p>The type of <a href="https://experienceleague.adobe.com/docs/experience-platform/tags/extensions/adobe/target/overview.html" format="html" scope="external">event</a> that fires when the page loads </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Request Name </p> </td> 
   <td colname="col2"> <p>The name of a request around a <a href="https://experienceleague.adobe.com/docs/target/using/implement-target/client-side/global-mbox/understanding-global-mbox.html" format="html" scope="external"> location</a> on the page. Available without authentication only if you implement the Debugging event listener in your code or tag manager and turn on the necessary <a href="https://experienceleague.adobe.com/docs/target/using/administer/response-tokens.html" format="html" scope="external"> response tokens</a> in the Target UI. </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Activity Name </p> </td> 
   <td colname="col2"> <p>The name of the Target <a href="https://experienceleague.adobe.com/docs/target/using/activities/activities.html" format="html" scope="external"> campaign or activity</a>. Available without authentication only if you implement the Debugging event listener in your code or tag manager and turn on the necessary <a href="https://experienceleague.adobe.com/docs/target/using/administer/response-tokens.html" format="html" scope="external"> response tokens</a> in the Target UI. </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Activity ID </p> </td> 
   <td colname="col2"> <p>The ID of the Target activity. Available without authentication only if you implement the Debugging event listener in your code or tag manager and turn on the necessary <a href="https://experienceleague.adobe.com/docs/target/using/administer/response-tokens.html" format="html" scope="external"> response tokens</a> in the Target UI. </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Experience Name </p> </td> 
   <td colname="col2"> <p>The name of the Target <a href="https://experienceleague.adobe.com/docs/target/using/experiences/experiences.html" format="html" scope="external"> experience</a>. Available without authentication only if you implement the Debugging event listener in your code or tag manager and turn on the necessary <a href="https://experienceleague.adobe.com/docs/target/using/administer/response-tokens.html" format="html" scope="external"> response tokens</a> in the Target UI. </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Experience ID </p> </td> 
   <td colname="col2"> <p>The ID of the Target experience. Available without authentication only if you implement the Debugging event listener in your code or tag manager and turn on the necessary <a href="https://experienceleague.adobe.com/docs/target/using/administer/response-tokens.html" format="html" scope="external"> response tokens</a> in the Target UI. </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Offer Name</p> </td> 
   <td colname="col2"> <p>The name of the Target <a href="https://experienceleague.adobe.com/docs/target/using/experiences/offers/manage-content.html" format="html" scope="external"> offer</a>. Available without authentication only if you implement the Debugging event listener in your code or tag manager and turn on the necessary <a href="https://experienceleague.adobe.com/docs/target/using/administer/response-tokens.html" format="html" scope="external"> response tokens</a> in the Target UI. </p> </td> 
  </tr> 
  <tr> 
   <td colname="col1"> <p>Offer ID </p> </td> 
   <td colname="col2"> <p>The ID of the Target offer. Available without authentication only if you implement the Debugging event listener in your code or tag manager and turn on the necessary <a href="https://experienceleague.adobe.com/docs/target/using/administer/response-tokens.html" format="html" scope="external"> response tokens</a> in the Target UI. </p> </td> 
  </tr> 
 </tbody> 
</table>
