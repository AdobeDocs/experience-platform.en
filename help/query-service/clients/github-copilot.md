---
title: Connect GitHub Copilot and Visual Studio Code to Query Service
description: Learn how to connect GitHub Copilot and Visual Studio Code with Adobe Experience Platform Query Service.
---
# Connect GitHub Copilot and Visual Studio Code to Query Service

>[!IMPORTANT]
>
>Before using this integrated tool, you must understand what data is shared with GitHub. Shared data includes contextual information about the code and files being edited ("prompts") and details about user actions ("user engagement data").  Please review [GitHub Copilot's privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement#github-privacy-statement) to learn about the data they collect. You must also consider the security implications of involving third-party services, as you are responsible for ensuring compliance with your organization's data governance policies. Adobe is not responsible for any data-related concerns or issues that may arise from the use of this tool. Consult the GitHub's documentation for more information.

GitHub Copilot, powered by OpenAI Codex, is an AI-driven tool that enhances your coding experience by suggesting code snippets and entire functions directly within your editor. Integrated with Visual Studio Code (VS Code), Copilot can significantly accelerate your workflow, especially when working with complex queries. Follow this guide to learn how to connect GitHub Copilot and VS Code to the Query Service to write and manage your queries with greater efficiency. For more information on Copilot, visit [GitHub's Copilot product page](https://github.com/pricing) and the [official Copilot documentation](https://docs.github.com/en/copilot/about-github-copilot/what-is-github-copilot).

This document covers the steps required to connect GitHub Copilot and VS Code with Adobe Experience Platform Query Service.

## Get started {#get-started}

This guide requires that you already have access to a GitHub account and have signed up for GitHub Copilot. You can [sign up from the GitHub website](https://github.com/github-copilot/signup). You also need VS Code. You can [download VS Code from their official website](https://code.visualstudio.com/download).

Once you have installed VS Code and activated your Copilot subscription, acquire your connection credentials for Experience Platform. These credentials are located in the [!UICONTROL Credentials] tab of the [!UICONTROL Queries] workspace in the Platform UI. Read the credentials guide to [learn how to find these values in the Platform UI](../ui/credentials.md). Please contact your organization administrator if you do not currently have access to the [!UICONTROL Queries] workspace.

### Required Visual Studio Code extensions {#required-extensions}

The following Visual Studio Code extensions are required to effectively manage and query your Platform SQL databases directly within the code editor. Download and install these extensions.

- [SQLTools](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools): Use the SQLTools extension to manage and query multiple SQL databases. It includes features like a query runner, SQL formatter, and connection explorer, with support for additional drivers to boost developer productivity. Read the overview on Visual Studio Marketplace for more details.
- [SQLTools PostgreSQL/Cockroach Driver](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools-driver-pg): This extension enables you to connect, query, and manage PostgreSQL and CockroachDB databases directly within your code editor.

The next extensions enable GitHub Copilot and its chat features.

- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot): Provides inline coding suggestions as you type.
- [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat): A companion extension that provides conversational AI assistance.

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
|  [!DNL Username]   | This property refers to your organization ID. Enter the **[!UICONTROL Username]** value provided in your Platform Postgres credentials, such as `EF34D5678F9CE01D2E3456FF@AdobeOrg`  |
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

Your VS Code workspace appears with a suggestion from GitHub Copilot.

![A connected SQL session in the ](../images/clients/github-copilot/connected.png)

<!--  -->

## GitHub Copilot quick guide

Once connected to your Platform instance, you can use Copilot as an AI coding assistant to help you write code faster and with more confidence. This section covers its key features and how to use them.

## Getting started with GitHub Copilot

First, ensure that you have the latest version of VS Code installed. An outdated VS Code version can prevent key Copilot features from working as intended. Next, ensure that the [!DNL Enable Auto Completions] setting is enabled. If Copilot is running correctly, the **Copilot icon** (![The Copilot icon](copilot-icon.png)) displays in your status bar (if there is an issue, the Copilot error icon displays instead). Select the **Copilot icon** to open the [!DNL GitHub Copilot Menu]. From the **[!DNL GitHub Copilot Menu]**, select **[!DNL Edit Settings]**

![The VS Code editor with the GitHub Copilot Menu displayed and the Copilot icon and Edit Settings highlighted.](github-copilot-menu.png)

Scroll down the options and ensure the check box is enabled for the [!DNL Enable Auto Completions] setting.

![The settings panel for GitHub Copilot with the Enable Auto Completions check box selected and highlighted.](enable-auto-completions.png)

### Code completions

Once you install the GitHub Copilot extension and log in, it automatically activates a feature called **Ghost Text**, which suggests code completions as you type.

![The VSCode UI with the GitHub Copilot icon highlighted]()

>[!TIP]
>
>If you would like to turn off Copilot for a specific file or language, select the icon in the status bar and disable it.

## 2. Accepting Ghost Text Suggestions

To start using ghost text, simply type your code, and GitHub Copilot suggests completions in real-time.
- **Press Tab** to accept the entire suggestion.
- If you only want part of the suggestion, hold down **Control (or Command on Mac)** and press the **right arrow** to accept partial text.

To dismiss a suggestion, press **Escape**.

>[!NOTE]  
>To ensure you're getting relevant suggestions, make sure Copilot is enabled in your file's language.

## 3. Exploring Alternative Suggestions

If the Ghost Text suggestion isn't quite what you want:
- **Press Control (or Command) + Enter** to open a side panel showing multiple AI-generated suggestions.  
  ![The alternative suggestions panel](./copilot-alternative-suggestions.png)

This allows you to review other possible completions and select the one that fits best.

## 4. Using Inline Chat

You can also chat with Copilot directly in your code:
- **Press Control (or Command) + I** to trigger **Inline Chat**.  
  ![The inline chat window with diff view](./copilot-inline-chat.png)

This feature is great for iterating on your code and refining suggestions in context. You can highlight a block of code, use Inline Chat, and see a diff view showing what changes the AI proposes before accepting them.

## 5. Dedicated Chat View / Sidebar

For a more traditional chat interface:
- Select the **chat icon** in the sidebar to open a dedicated chat window.  
  ![The GitHub Copilot chat sidebar](./copilot-chat-sidebar.png)

The chat interface is perfect for brainstorming, solving coding issues, and discussing implementation details. You can also access chat history by selecting the **history icon** at the top of the chat panel.

## 6. Fixing Errors with Copilot

GitHub Copilot is also available when you encounter issues in your code:
- Look for the **light bulb icon** in your editor when you see an error.  
  ![The light bulb icon for suggestions](./copilot-error-fix.png)

Select it to see if Copilot can suggest a fix or provide an explanation for the error.

>[!NOTE]  
>Copilot can help resolve many common errors, such as syntax mistakes or undefined variables.

## 7. Using Copilot in Other Parts of the Editor

You'll find Copilot helpful in various other places in the editor, like the Terminal or wherever you see the **sparkle icon**.  
  ![The sparkle icon in the terminal](./copilot-sparkle-icon.png)

Just select the icon to see how Copilot can assist.

## Conclusion

Now that you know how to use GitHub Copilot, you can let it handle much of the heavy lifting while you focus on coding. Keep experimenting with Ghost Text, Inline Chat, and other features to streamline your workflow. Happy coding!


<!-- 
Alt Text: "The VS Code editor showing a faint gray text suggestion from GitHub Copilot as Ghost Text next to partially typed code."

Alt Text: "The VS Code editor with a highlighted suggestion being accepted after pressing Tab, showing the completion of the Ghost Text suggestion."

Alt Text: "Side panel in the VS Code editor displaying multiple alternative code suggestions from GitHub Copilot after pressing Control/Command + Enter."

Alt Text: "Inline Chat window within the code editor showing a conversation between the user and Copilot about refining a block of code."

Alt Text: "The VS Code editor displaying a light bulb icon next to an error, with a dropdown menu of suggested fixes from GitHub Copilot."

Alt Text: "Chat sidebar in the code editor with a conversation between the user and Copilot, showing chat history and an input field for brainstorming solutions."

Alt Text: "Sparkle icon in the terminal, indicating GitHub Copilot assistance is available, with a tooltip highlighting the option to get help."
 -->

## Next steps

You are now ready to efficiently query your Platform databases directly from your code editor, and use GitHub Copilot's AI-powered code suggestions to streamline writing and optimizing SQL queries. For more information on how to write and run queries, refer to the [guidance for query execution](../best-practices/writing-queries.md).
