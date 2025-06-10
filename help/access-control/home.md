---
keywords: Experience Platform;home;popular topics;access control;adobe admin console
solution: Experience Platform
title: Access control overview
description: Access control for Adobe Experience Platform is provided through the Adobe Admin Console. This functionality leverages product profiles in Admin Console, which link users with permissions and sandboxes.
exl-id: 591d59ad-2784-4ae4-a509-23649ce712c9
---
# Access control overview

Access control for Adobe Experience Platform is provided through the **[!UICONTROL Permissions]** in [Adobe Experience Cloud](https://experience.adobe.com/). This functionality leverages roles and policies, which link users with permissions and sandboxes.

## Access control hierarchy and workflow

In order to configure access control for Experience Platform, you must have system or product administrator privileges for an organization that has an Experience Platform product. The minimum role that can grant or withdraw permissions is a product administrator. Other administrator roles that can manage permissions are system administrators (no restrictions). See the Adobe Help Center article on [administrative roles](https://helpx.adobe.com/enterprise/using/admin-roles.html) for more information.

>[!NOTE]
>
>From this point on, any mentions of "administrator" in this document refer to a product administrator or higher (as outlined above).

A high-level workflow for gaining and assigning access permissions can be summarized as follows:

- After licensing Adobe Experience Platform, or an Application/App Service that uses Experience Platform, an email is sent to the administrator specified during licensing.
- The administrator logs in to [Adobe Admin Console](#adobe-admin-console) and selects **Adobe Experience Platform** from the list of products on the overview page.
- To grant access to Experience Platform, it is recommended that the administrator add users to the default product profile: `AEP-Default-All-Users`. 
- In Experience Platform Permissions, the administrator can create new roles or edit the permissions and users for any existing roles.
- When creating or editing a role, the administrator adds users to the role using the **[!UICONTROL users]** tab, and grants permissions to these users (such as "[!UICONTROL Read Datasets]" or "[!UICONTROL Manage Schemas]") by editing the role's permissions. Similarly, the administrator can assign access to sandboxes using the same editing option.
- When users log in to the Experience Platform user interface, their access to Experience Platform capabilities is driven by the permissions that have been granted to them from the previous step. For example, if a user does not have the [!UICONTROL View Datasets] permission, the **[!UICONTROL Datasets]** tab in the side menu will not be visible to that user.

For more detailed steps on how to manage access control in Experience Platform, see the [access control user guide](./ui/overview.md).

All calls to Experience Platform APIs are validated for permissions, and will return errors if the appropriate permission(s) are not found in the current user context. Within the UI, elements will be hidden or altered depending on permissions granted to the current user.

## Permissions {#platform-permissions}

[!UICONTROL Permissions] provides a central location for managing Experience Platform access for your organization. Through [!UICONTROL Permissions], you can grant groups of users access permissions for various Experience Platform capabilities, such as [!UICONTROL Manage Datasets], [!UICONTROL View Datasets], or [!UICONTROL Manage Profiles].

### Roles

In the [!UICONTROL Roles] section, permissions are assigned to users through the use of roles. Roles allow you to grant permissions to one or multiple users, and also contain their access to the scope of the sandboxes that are assigned to them through roles. Users can be assigned to one or multiple roles belonging to your organization.

### Default roles

Experience Platform comes with two pre-configured default roles. The following table outlines what is provided in each default profile, including the sandbox they grant access to as well as the permissions they grant within the scope of that sandbox.

| Role | Sandbox access | Permissions |
| --- | --- | --- |
| Default production all access | Prod | All permissions applicable to Experience Platform, except for Sandbox Administration permissions. |
| Sandbox Administrators | N/A | Provides access to the `Prod` sandbox and to Sandbox Administration permissions. |

## Sandboxes and permissions

Non-Production sandboxes are a form of data virtualization that allow you to isolate data from other sandboxes and are typically used for development experiments, testing, or trials. A role's permissions give the role's users access to Experience Platform features within the sandbox environments to which they've been granted access to. A default Experience Platform license grants you five sandboxes (one production and four non-production). You can add packs of ten non-production sandboxes up to a maximum of 75 sandboxes in total. Please contact your organization's administrator or your Adobe sales representative for more details.

For more information about sandboxes in Experience Platform, please refer to the [sandboxes overview](../sandboxes/home.md).

### Access to sandboxes

Access to sandboxes is managed through roles. For detailed steps on how to enable access to a sandbox for a role, see the [attribute based access control roles guide](./abac/ui/roles.md).

Users can be granted access to one or more sandboxes within a role. If one user is included in two or more roles, that user will have access to all sandboxes included in those roles.

The "Sandbox Management" permission allows users to manage, view, or reset sandboxes.

### Resource permissions {#permissions}

Resource permissions grant access to specific Experience Platform capabilities. Resources are broken down into categories that contain a set of relevant permissions, which can be individually assigned to roles. 

In [!UICONTROL Permissions], a role's resources workspace displays the sandboxes and permissions that are active for that role:

![A role's resource workspace with a list of selected categories and permissions.](./images/permissions.png)

The following table outlines the available resource categories for both Experience Platform and applications managed through Permissions:

| Category | Description |
| --- | --- |
| [!DNL Adobe Mix Modeler] | Configure, manage, and view permissions for [!DNL Adobe Mix Modeler]. |
| [!DNL AI Assistant] | Configure permissions for [!DNL AI Assistant]. |
| [!DNL Alerts] | Configure manage, resolve, and view permissions for alerts and alerts history. |
| [!DNL B2B Account Lists] | Configure manage, view, and publish permissions for B2B account lists, including actions such as add, remove, import, and delete accounts from account lists. |
| [!DNL B2B Admin Configurations] | Configure manage and view permissions for B2B admin configurations, including digital asset management connections, asset repositories, and events. |
| [!DNL B2B Assets] | Configure manage and view permissions for B2B assets, including emails, SMS, landing pages, fragments, templates, and images. |
| [!DNL B2B Buying Groups] | Configure manage and view permissions for B2B buying groups, including features such as solution interests, roles templates, and buying group status. |
| [!DNL B2B Channel Configurations] | Configure manage and view permissions for B2B channel configurations, including settings such as communication limits, API credentials, and security settings. |
| [!DNL B2B Dashboards] | Configure view permissions for B2B dashboards, including features such as account engagement, buying group stages, surging accounts, and contact coverage. |
| [!DNL B2B Journeys] | Configure manage, view, and publish permissions for B2B journeys, including features such as account and person actions, event listeners, and split paths. |
| [!DNL Campaigns] | Configure manage, publish, and view permissions to campaigns in Journey Optimizer. |
| [!DNL Channel Configurations] | Configure manage, view, and export channel configurations features such as subdomains, IP pools, message presets, PTR records, suppression lists, landing page settings, SMS settings, and file routing. |
| [!DNL Collaborations] | Configure manage and view permissions to Real-Time Customer Data Profile Collaboration features. |
| [!DNL Computed Attributes] | Configure manage and view permissions to draft or published computed attributes. |
| [!DNL Customer Managed Keys] | Configure manage permissions to customer managed keys. |
| [!DNL Dashboards] | Configure manage and view permissions to standard, custom, and licensed dashboards. |
| [!DNL Data Collection] | Configure manage and view permissions to datastreams. |
| [!DNL Data Governance] | Configure manage, apply, and view permissions to data Ggvernance features such as labels, policies, and activity logs. |
| [!DNL Data Ingestion] | Configure manage and view permissions to data ingestion features such as sources and audience share. |
| [!DNL Data Lifecycle] | Configure manage and view permissions to data hygiene features. |
| [!DNL Data Management] | Configure manage and view permissions to data management features such as datasets and monitoring datasets and streams. |
| [!DNL Data Modeling] | Configure manage and view permissions to data modeling features such as schemas, relationships, and identity metadata. |
| [!DNL Data Science Workspace] | Configure manage permissions to [!DNL Data Science Workspace]. |
| [!DNL Decision Management] | Configure manage and view permissions to decisions, offers, and ranking strategy features in decision management. |
| [!DNL Destinations] | Configure manage and view permissions to destinations, including features such as activation and authoring with Destinations SDK. |
| [!DNL Federated Data] | Configure manage and view permissions to federated data features. |
| [!DNL Identity Management] | Configure manage and view permissions to Identity Service features such as identity namespaces and the identity graph. |
| [!DNL Intelligent Service] | Configure manage and view permissions to attribution AI and customer AI in intelligent service. |
| [!DNL IP Warmup Configurations] | Configure manage and view permissions to IP warmup plans and view permissions to view IP warmup reports. |
| [!DNL Journey Optimizer Library] | Configure manage permissions to library items in Adobe Journey Optimizer. |
| [!DNL Journey Optimizer Rules] | Configure manage and view permissions to frequency rules in Adobe Journey Optimizer. |
| [!DNL Journeys] | Configure manage, publish, and view permissions to journeys, including features such as journeys report, events, data sources, and actions. |
| [!DNL Messages] | Configure manage, publish, and view permissions to messages, including features such as messages preview and test. |
| [!DNL Privacy Service] | Configure manage and view permissions to Privacy Service features. |
| [!DNL Profile Management] | Configure manage, view, export, and evaluation permissions to profile service features such as audiences, profiles, and merge policies. |
| [!DNL Prospects] | Configure manage and view permissions to prospects schemas, profiles, and audiences, including features such as seeing the prospect accordion. |
| [!DNL Query Service] | Configure manage permissions to query service features such as non-expiring credential and structured SQL queries. |
| [!DNL Reports] | Configure view permissions to channel reports. |
| [!DNL Sandbox Administration] | Configure manage, view, and reset permissions when administering sandboxes. |
| [!DNL Traits Configuration] | Configure manage and view traits via the computed attributes UI. |
| [!DNL Translation Services] | Configure manage and view permissions to translation services for projects, tasks, reviews, inhouse, settings, and providers. |

The following table outlines the available permissions for Experience Platform in the role, with descriptions of the specific Experience Platform capabilities they grant access to. For detailed steps on how to add permissions to a role, see the [attribute based access control roles guide](./abac/ui/roles.md).

| Category | Permission | Description |
| --- | --- | --- |
| [!DNL Adobe Mix Modeler] | [!UICONTROL Manage Adobe Mix Modeler Harmonized Data] | The ability to view and modify harmonized data. |
| [!DNL Adobe Mix Modeler] | [!UICONTROL View Adobe Mix Modeler Harmonized Data] | Read-only access to harmonized data. |
| [!DNL Adobe Mix Modeler] | [!UICONTROL Manage Adobe Mix Modeler Models Configurations] | The ability to view and modify models configurations. |
| [!DNL Adobe Mix Modeler] | [!UICONTROL View Adobe Mix Modeler Models Configurations] | Read-only access to models configurations. |
| [!DNL Adobe Mix Modeler] | [!UICONTROL Manage Adobe Mix Modeler Models Plans Configurations] | The ability to view and modify plans configurations. |
| [!DNL Adobe Mix Modeler] | [!UICONTROL View Adobe Mix Modeler Models Plans Configurations] | Read-only access to plans configurations. |
| [!DNL AI Assistant] | [!UICONTROL Enable AI Assistant] | Ability to ask the [!DNL [AI assistant]](../ai-assistant/access.md) questions. |
| [!DNL AI Assistant] | [!UICONTROL View Operational Insights] | Access to obtain responses to [operational insights](../ai-assistant/home.md##operational-insights) queries. |
| [!DNL AI Assistant] | [!UICONTROL Generate Content] | Enable users to generate content using the [!DNL AI Assistant]. |
| [!DNL AI Assistant] | [!UICONTROL Manage Brand Kit] | Enable users to create brand guidelines using the [!DNL AI Assistant]. |
| [!DNL Alerts] | [!UICONTROL View Alerts History] | Read-only access for alerts history. |
| [!DNL Alerts] | [!UICONTROL Resolve Alerts] | Access to read, edit, and delete alerts. |
| [!DNL Alerts] | [!UICONTROL View Alerts] | Read-only access for alerts. |
| [!DNL Alerts] | [!UICONTROL Manage Alerts] | Access to read, create, edit, and delete alerts. |
| [!DNL B2B Account Lists] | [!UICONTROL Manage B2B Account Lists] | Ability to view and access **[!UICONTROL Account Lists]** in the left nav. Users with access to **[!UICONTROL Account Lists]** should have access to all Account Lists CRUD functions: `/accounts-list`. |
| [!DNL B2B Admin Configurations] | [!UICONTROL Manage B2B Admin Configurations] | Ability to view and access **[!UICONTROL B2B Admin Configurations]** in the left nav. Users with access to **[!UICONTROL B2B Admin Configurations]** should have access to all SMS API Credentials CRUD functions: `/admin-configs`. |
| [!DNL B2B Assets] | [!UICONTROL Manage B2B Assets] | Ability to view and access **[!UICONTROL Assets]** in the left nav. Users with access to **[!UICONTROL Assets]** should have access to all Assets CRUD functions: `/assets-listing`. |
| [!DNL B2B Assets] | [!UICONTROL Manage B2B Templates] | Ability to view and access **[!UICONTROL Templates]** in the left nav. Users with access to **[!UICONTROL Templates]** should have access to all Templates CRUD functions: `/b2b-content-templates`. |
| [!DNL B2B Assets] | [!UICONTROL Manage B2B Fragments] | Ability to view and access **[!UICONTROL Fragments]** in the left nav. Users with access to **[!UICONTROL Fragments]** should have access to all Fragments CRUD functions: `/fragments`. |
| [!DNL B2B Buying Groups] | [!UICONTROL Manage B2B Buying Groups] | Ability to view and access **[!UICONTROL Buying Groups]** in the left nav. Users with access to **[!UICONTROL Buying Groups]** should have access to all Buying Groups CRUD functions: `/buying-groups`. |
| [!DNL B2B Dashboards] | [!UICONTROL Manage B2B Engagement Dashboards] | Ability to view and access **[!UICONTROL Dashboard]** in the left nav. Users with access to **[!UICONTROL Dashboards]** should have access to all Dashboards CRUD functions: `/insights-dashboard`. |
| [!DNL B2B Channel Configurations] | [!UICONTROL Manage B2B Channels Configurations] | Ability to view and access **[!UICONTROL Channels]** in the left nav. Users with access to **[!UICONTROL Channels]** should have access to all Channels CRUD functions: `/channels-config`. |
| [!DNL B2B Journeys] | [!UICONTROL Manage B2B Account Journeys] | Ability to view and access **[!UICONTROL Account Journeys]** in the left nav. Users with access to **[!UICONTROL Account Journeys]** should have access to all Account Journeys CRUD functions: `/account-journeys`. |
| [!DNL Campaigns] | [!UICONTROL Manage Campaigns] | Access to read, create, edit, and delete campaigns. |
| [!DNL Campaigns] | [!UICONTROL Approve and Publish Campaigns] | The ability to approve and publish campaigns. | 
| [!DNL Campaigns] | [!UICONTROL Publish Campaigns] | Ability to publish campaigns. |
| [!DNL Campaigns] | [!UICONTROL View Campaigns] | Read-only access to campaigns. |
| [!DNL Campaigns] | [!UICONTROL View Campaigns Report] | Read-only access to campaign reports. |
| [!DNL Channel Configurations] | [!UICONTROL View Messages General Settings] | Read-only access to messages general settings. |
| [!DNL Channel Configurations] | [!UICONTROL Manage Subdomains Delegations] | Access to read, create, edit, and delete subdomain delegations. |
| [!DNL Channel Configurations] | [!UICONTROL Manage IP Pools] | Access to read, create, and edit IP pools. |
| [!DNL Channel Configurations] | [!UICONTROL Manage Messages General Settings] | Access to read, create, edit, and delete messages general settings. |
| [!DNL Channel Configurations] | [!UICONTROL Manage Messages Presets] | Access to read, create, edit, and delete messages presets. |
| [!DNL Channel Configurations] | [!UICONTROL View Messages Presets] | Read-only access to messages presets. |
| [!DNL Channel Configurations] | [!UICONTROL Manage PTR Records] | Access to read and edit PTR records. |
| [!DNL Channel Configurations] | [!UICONTROL View PTR Records] | Read-only access to PTR records. |
| [!DNL Channel Configurations] | [!UICONTROL Manage Suppression] | Access to read, create, edit, and delete suppression rules. |
| [!DNL Channel Configurations] | [!UICONTROL View Suppression List] | Read-only access to the suppression list. |
| [!DNL Channel Configurations] | [!UICONTROL Export Suppression List] | Access to export the suppression list as a CSV file. |
| [!DNL Channel Configurations] | [!UICONTROL Manage Landing Page Settings] | Access to read, create, edit, and delete landing page settings. |
| [!DNL Channel Configurations] | [!UICONTROL Manage SMS Settings] | Access to read, create, edit, and delete SMS settings. |
| [!DNL Channel Configurations] | [!UICONTROL Manage SMS Subdomains] | Access to read, create, edit, and delete SMS subdomains. |
| [!DNL Channel Configurations] | [!UICONTROL Manage File Routing] | Access to read, create, edit, and delete file routings. |
| [!DNL Channel Configurations] | [!UICONTROL View File Routing] | Read-only access to file routings. |
| [!DNL Channel Configurations] | [!UICONTROL Manage Seedlist] | The ability to create and edit the Seedlist. |
| [!DNL Channel Configurations] | [!UICONTROL Manage Language Settings] | The ability to create and edit the language settings. |
| [!DNL Channel Configurations] | [!UICONTROL Manage Web Subdomains] | The ability to create and edit CJM web subdomains. |
| [!DNL Channel Configurations] | [!UICONTROL Manage Push Credentials] | The ability to create, edit, and delete push credentials. |
| [!DNL Collaborations] | [!UICONTROL Manage Collaboration Instances] | View, create, update, and delete an organization's collaboration instances. Discover other organizations' collaboration instances. |
| [!DNL Collaborations] | [!UICONTROL Read Collaboration Instances] | Read an organization's collaboration instances and discover other organizations' collaboration instances. |
| [!DNL Collaborations] | [!UICONTROL Manage Connection Invites] | View, create, and delete connection invites initiated by your organization. Accept and decline connection invite initiated by other organizations. |
| [!DNL Collaborations] | [!UICONTROL Read Connection Invites] | Read-only access to connection invites. |
| [!DNL Collaborations] | [!UICONTROL Manage Collaboration Connections] | An advertiser can view, create, and update settings as well as submit and delete connections. A publisher can view, accept, or decline connections. |
| [!DNL Collaborations] | [!UICONTROL Read Collaboration Connections] | Read-only access to connections. |
| [!DNL Collaborations] | [!UICONTROL Manage Audience Data] | Onboard and discover audiences. Update public, private, and custom audiences and manage Audience Inventory metadata settings. |
| [!DNL Collaborations] | [!UICONTROL Read Audience Data] | Read and discover audiences. |
| [!DNL Collaborations] | [!UICONTROL Manage Measurement Data] | Onboard, update, and delete measurement data. |
| [!DNL Collaborations] | [!UICONTROL Read Measurement Data] | Read-only access to measurement data. |
| [!DNL Collaborations] | [!UICONTROL Manage Projects] | View, create, update, and delete projects for any of the discover, share, activate, and measurement activities. |
| [!DNL Collaborations] | [!UICONTROL Read Projects] | View projects for any of the discover, share, activate, and measurement activities. |
| [!DNL Collaborations] | [!UICONTROL Read User Activities] | Read-only access to user activities. |
| [!DNL Collaborations] | [!UICONTROL Export User Activities] | Export user activities. |
| [!DNL Collaborations] | [!UICONTROL Read Collaboration Credit Monitoring] | Credit monitoring at the organization and instance level. |
| [!DNL Computed Attributes] | [!UICONTROL View Computed attributes] | Read-only access for computed attributes tab, inventory, and details. |
| [!DNL Computed Attributes] | [!UICONTROL Manage Computed attributes] | Access to read, create, delete drafts, and deactivate computed attributes. |
| [!DNL Customer Managed Keys] | [!UICONTROL Manage Customer Managed Keys] | Access to view and configure customer managed keys. |
| [!DNL Dashboards] | [!UICONTROL View License Usage Dashboard] | Read-only access to view the license usage dashboard. |
| [!DNL Dashboards] | [!UICONTROL Manage Standard Dashboards] | Add custom attributes that are not yet in the data warehouse. |
| [!DNL Dashboards] | [!UICONTROL View Standard Dashboards] | Read-only access to the Profiles, Destinations, and Segments dashboards. Also enables access to Dashboards in the left navigation and the Dashboards inventory and integrations tab. |
| [!DNL Dashboards] | [!UICONTROL Manage Custom Dashboards] | Access to create or edit a dashboard. |
| [!DNL Dashboards] | [!UICONTROL View Custom Dashboards] | Read-only access to user defined dashboards. |
| [!DNL Dashboards] | [!UICONTROL Manage Report Schedules] | Ability to create schedules. |
| [!DNL Data Collection] | [!UICONTROL Manage Datastreams] | Access to read, create, and edit datastreams. |
| [!DNL Data Collection] | [!UICONTROL View Datastreams] | Read-only access to datastreams. |
| [!DNL Data Governance] | [!UICONTROL Manage Usage Labels] | Access to read, create, and delete usage labels. |
| [!DNL Data Governance] | [!UICONTROL Manage Data Usage Policies] | Access to read, create, edit, and delete data usage policies. |
| [!DNL Data Governance] | [!UICONTROL View Data Usage Policies] | Read-only access for data usage policies belonging to your organization. |
| [!DNL Data Governance] | [!UICONTROL View User Activity Log] | Read-only access to view recorded [audit logs](../landing/governance-privacy-security/audit-logs/overview.md) of Experience Platform activities. |
| [!DNL Data Governance] | [!UICONTROL View Privacy Console] | Read-only access to privacy consoles. |
| [!DNL Data Ingestion] | [!UICONTROL Manage Sources] | Access to read, create, edit, and disable sources. |
| [!DNL Data Ingestion] | [!UICONTROL View Sources] | Read-only access to available sources in the **[!UICONTROL Catalog]** tab and authenticated sources in the **[!UICONTROL Browse]** tab. |
| [!DNL Data Ingestion] | [!DNL Manage Audience Share Connections] | Access to create, accept, and decline partner sharing to connect two organizations and enable [!DNL Segment Match] flows. |
| [!DNL Data Ingestion] | [!DNL Manage Audience Share] | Access to read, create, edit, and publish [!DNL Segment Match] feeds with active partners. |
| [!DNL Data Lifecycle] | [!UICONTROL View Data Lifecycle] | Read-only access for data lifecycle.|
| [!DNL Data Lifecycle] | [!UICONTROL Manage Data Lifecycle] | Access to read, create, edit, and delete data lifecycle. |
| [!DNL Data Modeling] | [!UICONTROL Manage Schemas] | Access to read, create, edit, and delete schemas and related resources. |
| [!DNL Data Modeling] | [!UICONTROL View Schemas] | Read-only access to schemas and related resources. |
| [!DNL Data Modeling] | [!UICONTROL Manage Relationships] | Access to read, create, edit, and delete schema relationships. |
| [!DNL Data Modeling] | [!UICONTROL Manage Identity Metadata] | Access to read, create, edit, and delete identity metadata for schemas. |
| [!DNL Data Management] | [!UICONTROL Manage Datasets] | Access to read, create, edit, and delete datasets. Read-only access for schemas. |
| [!DNL Data Management] | [!UICONTROL View Datasets] | Read-only access for datasets and schemas. |
| [!DNL Data Management] | [!UICONTROL Data Monitoring] | Read-only access to monitoring datasets and streams. |
| [!DNL Data Science Workspace] | [!UICONTROL Manage Data Science Workspace] | Access to read, create, edit, and delete in [!DNL Data Science Workspace]. |
| [!DNL Decision Management] | [!UICONTROL Manage Experience Decisioning] | Ability to manage experience decisioning entities. |
| [!DNL Decision Management] | [!UICONTROL View Experience Decisioning] | Read-only access to experience decisioning entities. |
| [!DNL Decision Management] | [!UICONTROL Manage Decisions] | Access to read, create, edit, and delete decisioning entities. |
| [!DNL Decisions Management] | [!UICONTROL View Decisions] | Read-only access to decision entities. | 
| [!DNL Decision Management] | [!UICONTROL Manage Offers] | Access to read, create, edit, and delete all offers and components. Read-only access to decisions and collections. |
| [!DNL Decsion Management] | [!UICONTROL Manage Ranking Strategies] | Access to read, create, edit, and delete custom reports and use action features. | 
| [!DNL Destinations] | [!UICONTROL View Destinations] | Read-only access to view available destinations in the **[!UICONTROL Catalog]** tab and authenticated destinations in the **[!UICONTROL Browse]** tab. |
| [!DNL Destinations] | [!UICONTROL Manage Destinations] | Access to read, create, and delete destinations connections and destination accounts. |
| [!DNL Destinations] | [!UICONTROL Activate Destinations] | Ability to activate data to active destinations that have been created. This permission also requires either [!UICONTROL View Destinations] or [!UICONTROL Manage Destinations] to be granted to the user who will activate destinations.|
| [!DNL Destinations] | [!UICONTROL Activate Segment without Mapping] | The ability to activate audiences to existing destinations, without displaying the [mapping step](../destinations/ui/activate-batch-profile-destinations.md#mapping). Users can add and remove audiences in activation workflows, but cannot add or remove mapped attributes or identities. This permission also requires the [!UICONTROL View Destinations] permission to be granted to the user who will activate data to destinations. |
| [!DNL Destinations] | [!UICONTROL Manage and Activate Dataset Destinations] | Ability to read, create, edit, and disable dataset export flows. Ability to also activate data to active datasets that have been created. This permission also requires the [!UICONTROL View Destinations] permission to be granted to the user who will activate data to destinations. |
| [!DNL Destinations] | [!UICONTROL Destination Authoring] | Ability to author destinations using [Adobe Experience Platform Destination SDK](../destinations/destination-sdk/overview.md). |
| [!DNL Federated Data] | [!UICONTROL Manage Federated Data] | The ability to access all federated data features such as creating schemas, models, and compositions. |
| [!DNL Identity Management] | [!UICONTROL Manage Identity Namespaces] | Access to read, create, edit, and delete identity namespaces. |
| [!DNL Identity Management] | [!UICONTROL View Identity Namespaces] | Read-only access for identity namespaces. |
| [!DNL Identity Management] | [!UICONTROL View Identity Graph] | Read-only access for identity graphs. |
| [!DNL Identity Management] | [!UICONTROL Manage Identity Settings] | Access to read, create, and edit identity settings. |
| [!DNL Identity Management] | [!UICONTROL View Identity Settings] | Read-only access to identity settings. |
| [!DNL Intelligent Services] | [!UICONTROL View Attribution AI] | Read-only access for Attribution AI settings and insights. |
| [!DNL Intelligent Services] | [!UICONTROL Manage Attribution AI] | Access to read, create, edit, and delete Attribution AI models. |
| [!DNL Intelligent Services] | [!UICONTROL View Customer AI] | Access to read or view Customer AI models. |
| [!DNL Intelligent Services] | [!UICONTROL Manage Customer AI] | Access to create, update, delete, enable, or disable Customer AI models. |
| [!DNL IP Warmup Configurations] | [!UICONTROL View IP Warmup Plans] | Read-only access to IP warmup plans. |
| [!DNL IP Warmup Configurations] | [!UICONTROL Manage IP Warmup Plans] | The ability to manage IP warmup plans. |
| [!DNL IP Warmup Configurations] | [!UICONTROL View IP Warmup Reports] | Read-only access to IP warmup reports. |
| [!DNL Journeys] | [!UICONTROL Manage Journeys] | Access to read, create, edit, and delete journeys. |
| [!DNL Journeys] | [!UICONTROL View Journeys] | Read-only access to journeys. |
| [!DNL Journeys] | [!UICONTROL View Journeys Report] | Read-only access to journeys report. |
| [!DNL Journeys] | [!UICONTROL Manage Journeys Events, Data Sources and Actions] | Access to read, create, edit, and delete events, data sources, or actions. |
| [!DNL Journeys] | [!UICONTROL View Journeys Events, Data Sources and Actions] | Read-only access to events, data sources, or actions. |
| [!DNL Journeys] | [!UICONTROL Approve and Publish Journeys] | Ability to approve and publish journeys when a policy is applied. |
| [!DNL Journeys] | [!UICONTROL Publish Journeys] | Ability to publish journeys. |
| [!DNL Journey Optimizer Library] | [!UICONTROL Manage Library Items] | The ability to add and delete saved expressions. |
| [!DNL Journey Optimizer Library] | [!UICONTROL Publish Fragments] | The ability to publish content fragments. |
| [!DNL Journey Optimizer Library] | [!UICONTROL Simulate Content] | Access to the simulate content option for previewing and proofing. |
| [!DNL Journey Optimizer Rules] | [!UICONTROL View Frequency Rules] | Read-only access to frequency rules. |
| [!DNL Journey Optimizer Rules] | [!UICONTROL Manage Frequency Rules] | Access to read, create, edit, or delete frequency rules. |
| [!DNL Messages] | [!UICONTROL Manage Messages] | Access to read, create, edit, and delete messages. |
| [!DNL Messages] | [!UICONTROL View Messages] | Read-only access to messages. |
| [!DNL Messages] | [!UICONTROL View Messages Report] | Access to read and edit message reports. |
| [!DNL Messages] | [!UICONTROL Publish Messages] | Ability to publish messages. |
| [!DNL Messages] | [!UICONTROL Manage Messages Preview and Test] | Ability to approve and publish messages when a policy is applied. |
| [!DNL Privacy Service] | [!UICONTROL Manage Privacy Service] | Access to read and write privacy workflows. |
| [!DNL Privacy Service] | [!UICONTROL View Privacy Service] | Read-only access to privacy workflows. |
| [!DNL Profile Management] | [!UICONTROL Manage Profiles] | Access to read, create, edit, and delete datasets that are used for customer profiles. Read-only access to available profiles. |
| [!DNL Profile Management] | [!UICONTROL View Profiles] | Read-only access to available profiles. |
| [!DNL Profile Management] | [!UICONTROL Manage Segments] | Access to read, create, edit, and delete audiences. |
| [!DNL Profile Management] | [!UICONTROL View Segments] | Read-only access to available audiences. |
| [!DNL Profile Management] | [!UICONTROL Manage Merge Policies] | Access to read, create, edit, and delete merge policies. |
| [!DNL Profile Management] | [!UICONTROL View Merge Policies] | Read-only access to available merge policies. |
| [!DNL Profile Management] | [!UICONTROL Import Audiences] | Ability to use the CSV upload workflow to import new audiences. |
| [!DNL Profile Management] | [!UICONTROL Export Audience Segment] | Ability to export an evaluated audience to a dataset. |
| [!DNL Profile Management] | [!UICONTROL Evaluate a Segment to an Audience] | Ability to generate profiles for an audience by evaluating a segment definition. |
| [!DNL Profile Management] | [!UICONTROL View B2B AI] | Read-only access to settings and configurations for all B2B AI/ML services. |
| [!DNL Profile Management] | [!UICONTROL Manage B2B AI] | Access to read, create, edit, and delete settings and configurations for all B2B AI/ML services. |
| [!DNL Profile Management] | [!UICONTROL View B2B Profile] | Read-only access to B2B entity profiles (such as Account, Opportunity, and so on), settings and configurations for all B2B AI/ML services, and B2B dashboard widgets. |
| [!DNL Profile Management] | [!UICONTROL Manage B2B Profile] | Access to read, create, edit, and delete B2B entity profiles (such as Account, Opportunity, and so on). Read-only access for settings and configurations for all B2B AI/ML services, and B2B dashboard widgets. |
| [!DNL Profile Management] | [!UICONTROL Manage Lookalikes] | Ability to create or delete look-alike audiences. |
| [!DNL Profile Management] | [!UICONTROL View B2B Experience] | Ability to view B2B profiles and attributes. |
| [!DNL Profile Management] | [!UICONTROL View Profile Settings] | Read-only access to all profile settings. |
| [!DNL Profile Management] | [!UICONTROL Manage Profile Settings] | Access to read and edit all profile settings. |
| [!DNL Prospects] | [!UICONTROL View Prospects] | Read-only access to prospect schemas, profiles, audiences, and the prospect accordion. |
| [!DNL Prospects] | [!UICONTROL Manage Prospects] | Ability to create and manage prospect schemas, profiles, and audiences. Read-only access to the prospect accordion. |
| [!DNL Query Service] | [!UICONTROL Manage Queries] | Access to read, create, edit, and delete structured SQL queries for Experience Platform data. |
| [!DNL Query Service] | [!UICONTROL Manage Query Service Integration] | Access to create, update, and delete non-expiring credentials for Query Service access. |
| [!DNL Query Service] | [!UICONTROL Manage Query Sessions] | Ability to evict existing sessions. |
| [!DNL Query Service] | [!UICONTROL Manage Allow List] | Ability to manage IP restrictions for your organization. |
| [!DNL Reports] | [!UICONTROL View Channel Reports] | The ability to view and modify channel reports. |
| [!DNL Sandbox Administration] | [!UICONTROL Manage Sandboxes] | Access to read, create, edit, and delete sandboxes. |
| [!DNL Sandbox Administration] | [!UICONTROL View Sandboxes] | Read-only access for sandboxes belonging to your organization. |
| [!DNL Sandbox Administration] | [!UICONTROL Reset a Sandbox] | Ability to reset a sandbox. |
| [!DNL Sandbox Administration] | [!UICONTROL Manage Packages] | Access to create, import, or export packages. |
| [!DNL Sandbox Administration] | [!UICONTROL Share Packages] | Access to share packages across different organizations. |
| [!DNL Traits Configurations] | [!UICONTROL View Traits] | Read-only access for traits. |
| [!DNL Traits Configurations] | [!UICONTROL Manage Traits] | Access to manage traits. |
| [!DNL Translation Service] | [!UICONTROL Manage Translation Projects] | The ability to manage translation projects. |
| [!DNL Translation Service] | [!UICONTROL View Translation Projects] | Read-only access to translation projects. |
| [!DNL Translation Service] | [!UICONTROL Manage Translation Tasks] | The ability to manage translation tasks. |
| [!DNL Translation Service] | [!UICONTROL View Translation Tasks] | Read-only access to translation tasks. |
| [!DNL Translation Service] | [!UICONTROL Manage Translation Reviews] | The ability to manage translation reviews. |
| [!DNL Translation Service] | [!UICONTROL View Translation Reviews] | Read-only access to translation reviews. |
| [!DNL Translation Service] | [!UICONTROL Manage Translation In-house] | The ability to manage translation in-house. |
| [!DNL Translation Service] | [!UICONTROL View Translation In-house] | Read-only access to translation in-house. |
| [!DNL Translation Service] | [!UICONTROL Manage Translation Settings] | The ability for administrators to manage translation settings. |
| [!DNL Translation Service] | [!UICONTROL Manage Translation Providers] | The ability to manage translation providers. |

## Next steps

By reading this guide, you have been introduced to the main principles of access control in Experience Platform. You can now continue to the [attribute based access control user guide](./abac/overview.md) for detailed steps on how use Experience Cloud to create roles and assign permissions for Experience Platform.
