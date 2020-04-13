---
title: Social Network Destinations Workflow
seo-title: Social Network Destinations Workflow
description: Instructions to connect to your social network ad accounts
seo-description: Instructions to connect to your social network ad accounts
---

# (Beta) Social Network destinations authentication workflow {#social-network-destinations-workflow}


>[!IMPORTANT]
>
>The workflow to create social network destinations in Adobe Real-time CDP is currently in beta and is not available to all users. The documentation and the functionality are subject to change.

## Workflow to create cloud storage destinations

This tutorial uses Facebook as an example, but the workflow in Adobe Real-time Customer Data Platform will be the same for all Social Network destinations, once more are added to the product.

1. In **[!UICONTROL Connections > Destinations]**, scroll to the **[!UICONTROL Social]** category. Select your preferred social network destination, then select **[!UICONTROL Connect destination]**.

    ![Connect to social network destination](/help/rtcdp/destinations/assets/facebook-catalog-view.png)

2. In the **Authentication** step, if you had previously set up a connection to your social network destination, select **[!UICONTROL Existing Account]** and select your existing connection. Or, you can select **[!UICONTROL New Account]** to set up a new connection to your social network destination. Select **[!UICONTROL Connect to destination]** and this will take you to the selected social network destination to log in and connect Adobe Experience Cloud to your social network Ad account.

    >[!NOTE]
    >
    >Adobe Real-time CDP supports credentials validation in the authentication process and displays an error message if you input incorrect credentials to your social network account ID. This ensures that you don't complete the workflow with incorrect credentials.

    ![Connect to social network destination - authentication step](/help/rtcdp/destinations/assets/facebook-pre-connect-view.png)

3. Once your credentials are confirmed and Adobe Experience Cloud is connected to your social network, you can select **[!UICONTROL Next]** to proceed to the **[!UICONTROL Setup]** step.

    ![Credentials confirmed](/help/rtcdp/destinations/assets/facebook-post-connection-view.png)

4. In the **[!UICONTROL Setup]** step, enter a **[!UICONTROL Name]** and a **[!UICONTROL Description]** for your activation flow and fill in the **[!UICONTROL Account ID]** of your social network ad account. Select **[!UICONTROL Create Destination]** after you filled in the fields above.

    >[!IMPORTANT]
    >
    >For Facebook destinations. **[!UICONTROL Account ID]** is your Facebook Ad Account ID. You can find this ID in the Facebook Ads Manager. Prefix the ID with `act_` as shown below: 

    ![Connect to social network destination - setup step](/help/rtcdp/destinations/assets/social-network-step.png)

5. Your destination is now created. You can select **[!UICONTROL Save & Exit]** if you want to activate segments later on or you can select **[!UICONTROL Next]** to continue the workflow and select segments to activate. In either case, see the next section, [Activate segments to social networks](#activate-segments), for the rest of the workflow.

## Activate segments to social networks {#activate-segments}

For instructions on how to activate segments to social networks, see [Activate Data to Destinations](/help/rtcdp/destinations/activate-destinations.md).