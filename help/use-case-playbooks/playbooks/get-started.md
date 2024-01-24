---
solution: Experience Platform
title: Get started
description: Learn how to get started with the Use Case Playbooks functionality.
exl-id: 1c39792e-49fe-4c5f-9796-fa29f60b7461
---

# Get started

This document guides you through the process to set up your account for use case playbooks, designed for Real-Time Customer Data platforms and Journey Optimizer. The three main configuration steps are to create a sandbox, configure user permissions, and set up Journey Optimizer channel surfaces for email, push, and SMS.

➡️ Discover this feature in video

## Create a development sandbox {#create-development-sandbox}

To get started and get access to the [[!UICONTROL Use Case Playbooks]](/help/use-case-playbooks/playbooks/overview.md) functionality, [create a new development sandbox](/help/sandboxes/ui/user-guide.md#create) (make sure you do not select a production sandbox) with the name (not the title) containing either `-ucp` or `-UCP` in the suffix, as shown below.

![Create a development sandbox for use case playbooks](/help/use-case-playbooks/assets/playbooks/get-started/create-sandbox-ucp.png)

You should now see [!UICONTROL Playbooks] in the left rail under [!UICONTROL Use Case Playbooks] or under [!UICONTROL Marketer Playground].

![Use Case Playbooks in the UI after creating sandbox.](/help/use-case-playbooks/assets/playbooks/get-started/ucp-sandbox-in-ui.png)

If you do not see [!UICONTROL Playbooks] in the left rail as shown above, use this link `https://experience.adobe.com/#/@<YOUR_ORG>/sname:<YOUR_SANDBOX_NAME>/platform/mexp/templates` to navigate there directly. In the link, `<YOUR_ORG>` is the name of your organization and `<YOUR_SANDBOX_NAME>` is the name of the development sandbox you created. 

### Sandbox configuration for Adobe Journey Optimizer users {#sandbox-configuration-journey-optimizer}

If your organization is licensed for [Adobe Journey Optimizer](https://experienceleague.adobe.com/docs/journey-optimizer/using/ajo-home.html), you'll need to configure the channel presets in your sandbox, which define the technical parameters required for your messages. [Learn how to set up channel surfaces in Adobe Journey Optimizer](https://experienceleague.adobe.com/docs/journey-optimizer/using/configuration/channel-surfaces.html).

## Grant your team the required access permissions {#grant-access-permissions}

To get started with [!UICONTROL Use Case Playbooks], the members of your marketing operations team need the right permissions. You can grant your team permissions as follows:

* Marketing operations team members who only want to browse the playbooks can get **read** permission.
* Marketing operations team members who want to create instances from playbooks can get **read and write** permissions.

You can also choose either to add the sandbox to existing roles or create a new role with all the necessary permissions. 

## Configure channel surfaces {#configure-channel-surfaces}

To create instances of playbooks, you will need to configure channel surfaces for e-mail, push, and SMS. 

### E-mail channel surface

Go to Channels in the Journey Optimizer interface. Configure the surface for marketing emails, specifying subdomains and IP pools.Enter names, email addresses, and additional settings. Submit to create the marketing channel surface.

### Push channel surface

Confirm that the app surfaces are configured. Next, select the channel, platforms, and apps. Submit to create the push channel surface.

### SMS channel surface

Create an SMS API credential, and select the preferred vendor (e.g., Twilio). Name the SMS channel surface (e.g., SMS Marketing), select the configuration, and enter a sender number. Submit to save the SMS channel surface.

## Video walkthrough

This video is designed to take you through the steps needed to create your sandbox, configure permissions and configure channel surfaces for e-mail, push and SMS.

>[!VIDEO](https://video.tv.adobe.com/v/3426987?learn=on)

## Next steps {#next-steps}

After reading this document, you now know how to get started with [!UICONTROL Use Case Playbooks] and have a better understanding of how to create and configure playbooks, read how to [discover the right playbook](/help/use-case-playbooks/playbooks/discover.md) for you and then [create instances from it](/help/use-case-playbooks/playbooks/create-share-reuse.md).