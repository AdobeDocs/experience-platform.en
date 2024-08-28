---
title: Connect GitHub Copilot and VS Code to Query Service
description: Learn how to connect GitHub Copilot and VS Code with Adobe Experience Platform Query Service.
---
# Connect GitHub Copilot and VS Code to Query Service

GitHub Copilot, powered by OpenAI Codex, is an AI-driven tool that enhances your coding experience by suggesting code snippets and entire functions directly within your editor. Integrated with Visual Studio Code (VS Code), Copilot can significantly accelerate your workflow, especially when working with complex queries. Follow this guide to learn how to connect GitHub Copilot and VS Code to the Query Service to write and manage your queries with greater efficiency. For more information on Copilot, visit [GitHub's Copilot product page](https://github.com/pricing).

This document covers the steps required to connect GitHub Copilot and VS Code with Adobe Experience Platform Query Service.

## Get started {#get-started}

This guide requires that you already have access to a GitHub account and have signed up to GitHub Copilot. You can [sign up from the GitHub website](https://github.com/github-copilot/signup). You also need VS Code. You can [download VS Code from their official website](https://code.visualstudio.com/download). 

Once you have installed and VS Code and have an active Copilot subscription, acquire your connection credentials for Experience Platform. Your connection credentials are held in the [!UICONTROL Credentials] tab of the [!UICONTROL Queries] workspace in the Platform UI. Read the credentials guide to [learn how to find these values in the Platform UI](../ui/credentials.md). Please contact your organization administrator if you do not currently have access to the [!UICONTROL Queries] workspace.

### Required Visual Studio Code extensions {#required-extensions}

The following Visual Studio Code extensions are required to effectively manage and query your Platform SQL databases directly within the code editor. Download and install these extensions.

- [SQLTools](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools): Use the SQLTools extension to manage and query multiple SQL databases. It includes features like a query runner, SQL formatter, and connection explorer, with support for additional drivers to boost developer productivity. Read the overview on Visual Studio Marketplace for more details.
- [SQLTools PostgreSQL/Cockroach Driver](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools-driver-pg): This extension enables you to connect, query, and manage PostgreSQL and CockroachDB databases directly within your code editor. 

## Create connection {#create-connection}

Select the cylinder icon (![The cylinder icon.](../images/clients/github-copilot/cylinder-icon.png)) in the left navigation of VS Code, followed by **[!DNL Add New Connection]** or the cylinder plus icon (![The cylinder plus icon.](../images/clients/github-copilot/cylinder-plus-icon.png)).

![The Visual Studio Code UI with the SQL Tool extension and Add new connection highlighted.](../images/clients/github-copilot/add-new-connection.png)

The **[!DNL Connection Assistant]** appears. Select the **[!DNL PostgreSQL]** database driver. 

![The SQLTools settings page in VS Code with PostgreSQl highlighted.](../images/clients/github-copilot/postgres-database-driver.png)

### Input connection settings {#input-connection-settings}

The [!DNL Connection Settings] view appears. Enter your Platform connection credentials into the appropriate fields of the SQLTools [!DNL Connection Assistant]. The required values are explained in the table below.

| Property  |  Description |
| --- |--- |
|  [!DNL Connection name] | Provide a "[!DNL Connection name]" like `Prod_MySQL_Server` that is descriptive and clearly indicates its purpose (for example, a production environment for a MySQL server). Best practices include:<br><ul><li>Following your organization's naming conventions to ensure that it is unique within the system.</li><li>Keep it concise to maintain clarity and avoid confusion with other connections.</li><li>Include relevant details about the connection's function or environment in the name.</li></ul>  |
|  [!DNL Connect using]   | Use the **[!DNL Server and Port]** option to specify the server's address (hostname) and the port number to establish a direct connection to Platform  |
|  [!DNL Server address]  | Enter the **[!UICONTROL Host]** value provided in your Platform Postgres credentials, such as `acmeprod.platform-query.adobe.io`. |
|  [!DNL Port]   | This value is typically `80` for Platform services.   |
|  [!DNL Database]   | Enter the **[!UICONTROL Database]** value provided in your Platform Postgres credentials, such as `prod:all`.  |
|  [!DNL Username]   | This property refers your organization ID. Enter the **[!UICONTROL Username]** value provided in your Platform Postgres credentials, such as `EF34D5678F9CE01D2E3456FF@AdobeOrg`  |
|  [!DNL Password]   | This property is your access token. Enter the **[!UICONTROL Password]** value provided in your Platform Postgres credentials. |

![The Connection Assistant workspace with several settings highlighted.](../images/clients/github-copilot/connection-settings.png)

Next, select **[!DNL Use Password]**, followed by **[!DNL Save as plaintext in settings]** from the dropdown menu that appears. The [!DNL Password] field appears. Use this text input field to enter your access token.

![The Use password, its dropdown menu and Password field highlighted.](../images/clients/github-copilot/access-token.png)

Finally, to enable SSL, select the [!DNL SSL] input field and choose [!DNL Enabled] from the dropdown menu that appears. 

![The SSL field with Enabled in the dropdown menu highlighted.](../images/clients/github-copilot/ssl-enabled.png)

>[!TIP]
>
>Once you have entered all your credentials, you can test your connection before saving the connection. Scroll down to the bottom of the workspace and select **[!DNL Test Connection]**.
>
>![The Connection Assistant workspace with Test Connection highlighted.](../images/clients/github-copilot/test-connection.png "The Connection Assistant workspace with Test Connection highlighted."){width="100" zoomable="yes"}

Once you have correctly input your connection details, select **[!DNL Save Connection]** to confirm your settings.

![The Connection Assistant workspace with Save Connection highlighted.](../images/clients/github-copilot/save-connection.png)

The [!DNL Review connection details] view appears and displays your connection credentials. When you are sure that your connection details are accurate, select **[!DNL Connect Now]**.

![The Review connection details view with Connect Now highlighted.](../images/clients/github-copilot/review-and-connect.png)

Your visual Code workspace appears with a suggestion from GitHub Copilot.

![A connected SQL session in the ](../images/clients/github-copilot/connected.png)

You are now ready to efficiently query your Platform databases directly from your code editor, and use GitHub Copilot's AI-powered code suggestions to streamline writing and optimizing SQL queries.
