---
keywords: delete destination account, destination accounts, how to delete accounts
title: Delete destination accounts
type: Tutorial
description: This tutorial lists the steps to delete destination accounts in the Adobe Experience Platform UI
exl-id: 9b39ba4b-19a4-48a8-a6f1-f860777cdb9e
---
# Delete destination accounts

## Overview {#overview}

The **[!UICONTROL Accounts]** tab shows you details about the connections that you have established with various destinations. Refer to the [Accounts overview](../ui/destinations-workspace.md#accounts) for all the information you can get on each destination account.

This tutorial covers the steps to delete destination accounts that are not needed anymore by using the Experience Platform UI.

![Accounts tab](../assets/ui/update-accounts/destination-accounts.png)

## Delete accounts {#delete}

>[!TIP]
>
>Before deleting the destination account, you must first delete any existing dataflows associated with the destination account. To delete existing destination dataflows, refer to the tutorial on [deleting destination dataflows in the UI](./delete-destinations.md).

Follow the steps below to delete existing destination accounts.

1. Log in to the [Experience Platform UI](https://platform.adobe.com/) and select **[!UICONTROL Destinations]** from the left navigation bar. Select **[!UICONTROL Accounts]** from the top header to view your existing accounts.

    ![Accounts tab](../assets/ui/delete-accounts/accounts-tab.png)

2. Select the filter icon ![Filter-icon](../assets/ui/update-accounts/filter.png) on the top left to launch the sort panel. The sort panel provides a list of all your destinations. You can select more than one destination from the list to see a filtered selection of accounts associated with the selected destinations.

    ![Filter destinations](../assets/ui/delete-accounts/filter-accounts.png)

3. Select the ellipses (`...`) beside the name of the account you intend to delete. A pop-up panel appears, providing options to **[!UICONTROL Activate audiences]**, **[!UICONTROL Edit details]**, and **[!UICONTROL Delete]** the account. Select the ![Delete button](../assets/ui/workspace/pencil-icon.png) **[!UICONTROL Delete]** button to delete the desired account.

    ![Delete destination account](../assets/ui/delete-accounts/delete-accounts.png)

4. A final confirmation dialog box appears, select **[!UICONTROL Delete]** to complete the process.

![Confirm account deletion](../assets/ui/delete-accounts/confirm-account-deletion.png)

## Next steps

By following this tutorial, you have successfully used the destinations workspace to delete existing accounts.

For steps on how to perform these operations programmatically using the [!DNL Flow Service] API, please refer to the tutorial on [deleting connections using the Flow Service API](../api/delete-destination-account.md)
