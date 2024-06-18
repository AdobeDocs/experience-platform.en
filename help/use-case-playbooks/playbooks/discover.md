---
solution: Experience Platform
title: Discover playbooks
description: Explore various cases which can help you discover use case playbooks.
role: User
exl-id: 3dae6ad6-adb3-4606-ad63-c0d4ef6beeba
---
# Discover playbooks

You can now access use case playbooks in the Adobe Experience Platform UI. Select **[!UICONTROL Playbooks]** from the left navigation to directly land on the gallery page.

![Direct access to use case playbooks in the left navigation bar](/help/use-case-playbooks/assets/playbooks/get-started/left-nav-playbooks.png)

Select any playbook to go to the details page and then select **[!UICONTROL Go to an inspirational sandbox]**. A confirmation modal appears. Select **Confirm** to go to the inspirational sandbox where you can explore and experiment with the different use cases. 

![Go to inspirational sandbox](/help/use-case-playbooks/assets/playbooks/get-started/inspirational-sandbox.png)

If you haven't already setup any inspirational sandboxes, select **[!UICONTROL Create an inspirational Sandbox]**. A modal appears. Enter the **Name** and **Title** in the required field boxes and select **Create**. Once you create the inspirational sandbox, ensure to [define permissions](/help/access-control/home.md) before you navigate back to the use case playbooks details page to create an instance.

![Create an inspirational sandbox](/help/use-case-playbooks/assets/playbooks/get-started/create-inspirational-sandbox.png)

If you select a use case playbook from outside an inspirational sandbox, you won't be able to create an instance. On the details page, select **Go to inspirational sandbox** to go to an existing inspirational sandbox and then select **[!UICONTROL Create instance]**.

If you do not have the permission to create sandboxes, please contact your administrator for assistance in creating an inspirational sandbox.

![No permissions to create sandbox](/help/use-case-playbooks/assets/playbooks/get-started/no-permissions-to-create-sandbox.png)

If you have reached the limit on the number of sandboxes that have been allocated to you, a message appears asking you to contact your organization administrator to increase the limit or deactivate or remove some active sandboxes. Once the sandbox creation is within the limit, you can proceed to create the inspirational sandbox.

![Sandbox limit reached](/help/use-case-playbooks/assets/playbooks/get-started/sandbox-limit-reached.png)

Note that when you create an inspirational sandbox, channel surfaces for e-mail, push, and SMS notificationsare not are not automatically setup. Contact your IT administrator to manually configure them or the instance creation might fail. 

![Configure channel presets](/help/use-case-playbooks/assets/playbooks/get-started/configure-channel-presets.png)

## Configure sandbox and channel surfaces in Journey Optimizer {#configure-channel-surfaces}

If your organization is licensed for [Adobe Journey Optimizer](https://experienceleague.adobe.com/docs/journey-optimizer/using/ajo-home.html), and you're looking to use the playbooks designed for Journey Optimizer, you'll need to configure the channel presets in your sandbox, which define the technical parameters required for your messages. [Learn how to set up channel surfaces in Adobe Journey Optimizer](https://experienceleague.adobe.com/docs/journey-optimizer/using/configuration/channel-surfaces.html).

To create instances of playbooks in Journey Optimizer, you need to configure channel surfaces for e-mail, push, and SMS notifications. 

### E-mail channel surface

Go to `Channels` in the Journey Optimizer interface. Configure separate subdomains and IP pools for marketing emails and transactional messaging, if not already configured. These are best practices to ensure that transactional messages such as order confirmation e-mails, get through to your customers. Enter names, email addresses, and additional settings. Select **Submit** at the top-right of the page to create the marketing channel surface. Read the documentation on [how to set up e-mail channel surfaces](https://experienceleague.adobe.com/docs/journey-optimizer/using/email/configure-email/email-settings.html).

### SMS channel surface

To create an SMS channel surface, first create an SMS API credential, and select the preferred vendor (for example, Sinch). Name the SMS channel surface (for example, SMS Marketing), select the configuration, and enter a sender number. Select **Submit** at the top-right of the page to save the SMS channel surface. Read the documentation on [how to set up SMS channel surfaces](https://experienceleague.adobe.com/docs/journey-optimizer/using/sms/sms-configuration.html?lang=en#message-preset-sms).

Also configure channels for playbooks that contain transactional messages like order confirmations.

### Push channel surface

Confirm that the app surfaces are configured either from the Experience Platform or Data Collections interface. This is how app surfaces look like in the Data Collections environment. 

## Next steps {#next-steps}

Now that you've read this document, you should know how to setup an inspirational sandbox and be familiar with different ways of accessing use case playbooks within Platform. As a next step, read about how to [find](/help/use-case-playbooks/playbooks/find.md) the right playbook. 

