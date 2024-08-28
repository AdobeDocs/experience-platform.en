---
title: Connect GitHub Copilot and VScode to Query Service
description: Learn how to connect GitHub Copilot and VScode with Adobe Experience Platform Query Service.
---
# GitHub Copilot and VScode to Query Service

GitHub Copilot, powered by OpenAI Codex, is an AI-driven tool that enhances your coding experience by suggesting code snippets and entire functions directly within your editor. Integrated with Visual Studio Code, Copilot can significantly accelerate your workflow, especially when working with complex queries. Follow this guide to learn how to seamlessly connect GitHub Copilot and VS Code to the Query Service to write and manage your queries with greater efficiency. For more information on Copilot, visit [GitHub's Copilot product page](https://github.com/pricing).

<!-- This document covers the steps required to connect GitHub Copilot and VScode with Adobe Experience Platform Query Service. -->

## Getting started

This guide requires that you already have access to GitHub account and have signed up to GitHub Copilot. You can [sign up from the GitHub website](https://github.com/github-copilot/signup). You also need VSCode. You can [download VScode from their official website](https://code.visualstudio.com/download). 

Once you have installed and VScode and have an active Copilot subscription, you must also acquire the necessary credentials for connecting GitHub to Experience Platform. Your connection credentials are held in the [!UICONTROL Queries] workspace in the Platform UI. A full guide to aquiring these credentials can be found here. Please contact your organization administrator if you do not currently have access to the [!UICONTROL Queries] workspace.

- link to sqltools 
- link to second one 

## Create connection

Select the cylinder icon in the left navigation of VSCode, folowed by **[!DNL Add New Connection]** or the cylinder plus icon (![The cylinder plus icon.]()).

![](add-new-connection.png)

The **[!DNL Connection Assistant]** apears. Select the **[!DNL PostgreSQL]** database driver. 

![](postgres-database-driver.png)

### Input connection settings

The [!DNL Connection Settings] view appears. Input your credentials. The values are explained in the table below.

| Property  |  Description |
| --- |--- |
|  Connection name |    |
|  Connect using   |    |
|  Server address   |    |
|  Port   |    |
|  Database   |    |
|  Username   |    |
|  Password   |    |

![The Connection Sssistant workspace with several settings highlighted.](connection-settings.png)

Next, select **[!DNL Use Password]**, followed by **[!DNL Save as plaintext in settings]** from the dropdown men that appears. The [!DNL Password] field appears. Use this text input field to enter your access token.

![The Use password, its dropdown menu and Password field highlighted.](access-token.png)

Finally, to enable SSL, select the to enable [!DNL SSL] input field and choose [!DNL Enabled] from the dropdown menu that appears. 

![The SSL field with Enabled in the dropdown menu highlighted.](ssl-enabled.png)

>[!TIP]
>
>Once you have entered all your credentials you can test your connection before saving the connection. Scroll down to the bottom of the workspace and select **[!DNL Test Connection]**.

![The Connection Assistant workspace with Test Connection highlighted.](test-connection.png)

Once you have correctly input your connection details, select **[!DNL Save Connection]** to confirm your settings.

![The Connection Assistant workspace with Save Connection highlighted.](save-connection.png)

The [!DNL Review connection details] view appears and displays your connection credentials. When you are sure that your connection details are accurate, select **[!DNL Connect Now]**.

![The Review connection details view with Connect Now highlighted.]()

Your visual Code workspace appears with a suggetion from GitHub Copilot.

![](connected.png)
