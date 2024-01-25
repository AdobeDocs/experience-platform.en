---
solution: Experience Platform
title: Get started
description: Learn how to get started with the Use Case Playbooks functionality.
exl-id: 1c39792e-49fe-4c5f-9796-fa29f60b7461
---

# Get started

This document guides you through the process to set up your account for Use Case Playbooks, designed for Real-Time Customer Data Platform and Journey Optimizer. The three main configuration steps are: create a sandbox, configure user permissions, and configure Journey Optimizer channel surfaces for e-mail, push, and SMS.

## Configure Use Case Playbooks - Video walkthrough {#video}

This video is designed to take you through the steps needed to create your sandbox, configure permissions and configure channel surfaces for e-mail, push and SMS in Journey Optimizer.

>[!VIDEO](https://video.tv.adobe.com/v/3426987?learn=on)

## Create a development sandbox {#create-development-sandbox}

Use Case Playbooks uses a special type of developement sandbox. To get started and get access to the [[!UICONTROL Use Case Playbooks]](/help/use-case-playbooks/playbooks/overview.md) functionality, [create a new development sandbox](/help/sandboxes/ui/user-guide.md#create) (make sure you do not select a production sandbox) with the name (not the title) containing either `-ucp` or `-UCP` in the suffix, as shown below.

![Create a development sandbox for use case playbooks](/help/use-case-playbooks/assets/playbooks/get-started/create-sandbox-ucp.png)

You should now see [!UICONTROL Playbooks] in the left rail under [!UICONTROL Use Case Playbooks] or under [!UICONTROL Marketer Playground].

![Use Case Playbooks in the UI after creating sandbox.](/help/use-case-playbooks/assets/playbooks/get-started/ucp-sandbox-in-ui.png)

If you do not see [!UICONTROL Playbooks] in the left rail as shown above, use this link `https://experience.adobe.com/#/@<YOUR_ORG>/sname:<YOUR_SANDBOX_NAME>/platform/mexp/templates` to navigate there directly. In the link, `<YOUR_ORG>` is the name of your organization and `<YOUR_SANDBOX_NAME>` is the name of the development sandbox you created. 

### Sandbox configuration for Adobe Journey Optimizer users {#sandbox-configuration-journey-optimizer}

If your organization is licensed for [Adobe Journey Optimizer](https://experienceleague.adobe.com/docs/journey-optimizer/using/ajo-home.html), you'll need to configure the channel presets in your sandbox, which define the technical parameters required for your messages. [Learn how to set up channel surfaces in Adobe Journey Optimizer](https://experienceleague.adobe.com/docs/journey-optimizer/using/configuration/channel-surfaces.html).

## Grant your team the required access permissions {#grant-access-permissions}

To get started with [!UICONTROL Use Case Playbooks], members of your marketing team will need the right permissions so that they can view the list of created playbooks or create playbooks themselves.To quickly add permissions, include the new use case playbook sandbox in roles that you've already configured, including those used for other development sandboxes. Alternatively, you could also consider adding new role(s) with the required permissions.

**Setting Up a Role for Playbooks:**

Set up a new role with the necessary permissions for essential playbook tasks. Create the role and add the new sandbox to it, as shown below.

**Permissions for playbook instances**

When a user creates a playbook instance, they generate assets like schemas, audiences, and journeys are generated. Users need permissions to create these objects.

**Permissions for schemas**

To create schemas, utilize data modeling items to view and manage schemas. Also, allow the attachment of identities to schema fields.

![Snapshot of all the permission items needed to create all instances of the playbooks](/help/use-case-playbooks/assets/playbooks/get-started/.png)

**Adding users to the Role**

Add yourself as a user to this role. If you create a pared-down role for another set of users with view-only access, include only the necessary view items associated with these permissions.

To get started with [!UICONTROL Use Case Playbooks], grant permissions to your marketing operations team as needed:

* Marketing operations team members who only want to browse the playbooks can get **read** permission.
* Marketing operations team members who want to create instances from playbooks can get **read and write** permissions.

You can also choose to add the sandbox to existing roles or create a new role with the required permissions.

## Configure channel surfaces in Journey Optimizer {#configure-channel-surfaces}

To create instances of playbooks in Journey Optimizer, you will need to configure channel surfaces for e-mail, push, and SMS. 

### E-mail channel surface

Go to `Channels` in the Journey Optimizer interface. Configure separate subdomains and IP pools for marketing emails and transactional messaging, if not already configured. These are best practices to ensure that transactional messages such as order confirmation e-mails, get through to your customers. Enter names, email addresses, and additional settings. Select **Submit** at the top-right of the page to create the marketing channel surface.

### SMS channel surface

To create an SMS channel surface, first create an SMS API credential, and select the preferred vendor (e.g., Sinch). Name the SMS channel surface (e.g., SMS Marketing), select the configuration, and enter a sender number. Select **Submit** at the top-right of the page to save the SMS channel surface.

Also configure channels for playbooks that contain transactional messages like order confirmations.

### Push channel surface

Confirm that the app surfaces are configured. Next, select the channel, platforms, and apps. Submit to create the push channel surface.

## Next steps {#next-steps}

Get started with [!UICONTROL Use Case Playbooks] and have a better understanding of how to create and configure playbooks, read how to [discover the right playbook](/help/use-case-playbooks/playbooks/discover.md) for you and then [create instances from it](/help/use-case-playbooks/playbooks/create-share-reuse.md).