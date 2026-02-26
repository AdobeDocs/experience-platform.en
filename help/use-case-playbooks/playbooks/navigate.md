---
solution: Experience Platform
title: Navigate to Use Case Playbooks
description: Learn how to navigate a gallery of playbooks and get started with an inspirational sandbox.
role: User
exl-id: 1f5dae75-1136-4be3-9132-01d36a4066ca
---
# Navigate to Use Case Playbooks

Use Case Playbooks are available at no extra cost to all Adobe Experience Platform customers. To access a rich gallery of use case playbooks in the Experience Platform UI, select **[!UICONTROL Playbooks]** from the left navigation. 

![Use case playbook gallery.](/help/use-case-playbooks/assets/playbooks/discover/playbooks-gallery.png)

![Direct access to use case playbooks in the left navigation bar.](/help/use-case-playbooks/assets/playbooks/discover/left-nav-playbooks.png)

Select any playbook to go to the details page and then select **[!UICONTROL Go to an inspirational sandbox]**. A confirmation modal appears. Select **Confirm** to go to the inspirational sandbox where you can explore and experiment with the different use cases. 

If you do not have the permission to create sandboxes, please contact your administrator for assistance in creating an inspirational sandbox.

>[!TIP]
>
>An inspirational sandbox is a development sandbox within Adobe Experience Platform where you can create, test, experiment with different use cases before implementing them in a live production environment. 

![Go to inspirational sandbox.](/help/use-case-playbooks/assets/playbooks/discover/inspirational-sandbox.png)

If you haven't already set up any inspirational sandboxes, select **[!UICONTROL Create an inspirational Sandbox]**. A modal appears. Enter the **Name** and **Title** in the required field boxes and select **Create**. Once you create the inspirational sandbox, ensure to [define permissions](/help/access-control/home.md) before you navigate back to the use case playbooks details page to create an instance.

![Create an inspirational sandbox.](/help/use-case-playbooks/assets/playbooks/discover/create-inspirational-sandbox.png)

![Enter name and title to create an inspirational sandbox.](/help/use-case-playbooks/assets/playbooks/discover/create-inspirational-sandbox-modal.png)

If you select a use case playbook from outside an inspirational sandbox, you won't be able to create an instance. On the details page, select **Go to inspirational sandbox** to go to an existing inspirational sandbox and then select **[!UICONTROL Create instance]**.

If you do not have the permission to create sandboxes, please contact your administrator for assistance in creating an inspirational sandbox.

![No permissions to create sandbox.](/help/use-case-playbooks/assets/playbooks/discover/no-permissions-to-create-sandbox.png)

If you have reached the limit on the number of sandboxes that have been allocated to you, a message appears asking you to contact your organization administrator to increase the limit or deactivate or remove some active sandboxes. Once your sandbox limit has been adjusted or your number of active sandboxes has been reduced, you can proceed to create the inspirational sandbox.

![Sandbox limit reached.](/help/use-case-playbooks/assets/playbooks/discover/sandbox-limit-reached.png)

Note that when you create an inspirational sandbox, channel surfaces for e-mail, push, and SMS notificationsare not are not automatically set up. Contact your IT administrator to manually configure them or the instance creation might fail. 

![Configure channel presets.](/help/use-case-playbooks/assets/playbooks/discover/configure-channel-presets.png)

## Configure sandbox and channel surfaces in Journey Optimizer {#configure-channel-surfaces}

If your organization is licensed for [Adobe Journey Optimizer](https://experienceleague.adobe.com/docs/journey-optimizer/using/ajo-home.html), and you're looking to use the playbooks designed for Journey Optimizer, you'll need to configure the channel presets in your sandbox, which define the technical parameters required for your messages. [Learn how to set up channel surfaces in Adobe Journey Optimizer](https://experienceleague.adobe.com/docs/journey-optimizer/using/configuration/channel-surfaces.html).

To create instances of playbooks in Journey Optimizer, you need to configure channel surfaces for e-mail, push, and SMS notifications. 

### E-mail channel surface

Go to `Channels` in the Journey Optimizer interface. Configure separate subdomains and IP pools for marketing emails and transactional messaging, if not already configured. These are best practices to ensure that transactional messages such as order confirmation e-mails, get through to your customers. Enter names, email addresses, and additional settings. Select **Submit** at the top-right of the page to create the marketing channel surface. Read the documentation on [how to set up e-mail channel surfaces](https://experienceleague.adobe.com/docs/journey-optimizer/using/email/configure-email/email-settings.html).

### SMS channel surface

To create an SMS channel surface, first create an SMS API credential, and select the preferred vendor (for example, Sinch). Name the SMS channel surface (for example, SMS Marketing), select the configuration, and enter a sender number. Select **Submit** at the top-right of the page to save the SMS channel surface. Read the documentation on [how to set up SMS channel surfaces](https://experienceleague.adobe.com/docs/journey-optimizer/using/sms/sms-configuration.html?lang=en#message-preset-sms).

Also configure channels for playbooks that contain transactional messages like order confirmations.

### Push channel surface

Confirm that the channel configurations are configured either from the Experience Platform or Data Collections interface. This is how channel configurations look like in the Data Collections environment. 

## Next steps {#next-steps}

Now that you've read this document, you should know how to setup an inspirational sandbox and be familiar with different ways of accessing use case playbooks within Experience Platform. As a next step, read about how to [choose](/help/use-case-playbooks/playbooks/choose.md) the right playbook.
