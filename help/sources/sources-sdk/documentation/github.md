---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
solution: Experience Platform
title: Use the GitHub Web Interface to Create a Sources Documentation Page
topic-legacy: tutorial
description:
---
# Use the GitHub web interface to create a source documentation page

This document provides steps on how to use the GitHub web interface to author documentation and submit a pull request (PR).

>[!TIP]
>
>The following documents from Adobe's contributing guide can be used to further support your documentation process: <ul><li>[Install Git and Markdown Authoring tools](https://experienceleague.adobe.com/docs/contributor/contributor-guide/setup/install-tools.html?lang=en)</li><li>[Set up Git repository locally for documentation](https://experienceleague.adobe.com/docs/contributor/contributor-guide/setup/local-repo.html?lang=en)</li><li>[GitHub contribution workflow for major changes](https://experienceleague.adobe.com/docs/contributor/contributor-guide/setup/full-workflow.html?lang=en)</li></ul>

## Set up your GitHub environment

The first step in setting up your GitHub environment is to navigate to the [Adobe Experience Platform GitHub repository](https://github.com/AdobeDocs/experience-platform.en).

![platform-repo]()

Next, select **[!UICONTROL Fork]**.

![fork]()

Once the fork is complete, select **[!UICONTROL master]** to create a new branch. Ensure that you provide a descriptive name for your branch as this will be used to contain your work.

![branch]()

In the GitHub folder structure of your forked repository, follow the following steps to navigate your way to the sources API tutorials catalog:

Select **[!UICONTROL help]** -> **[!UICONTROL sources]** -> **[!UICONTROL tutorials]** -> **[!UICONTROL api]** -> **[!UICONTROL create]**. Select the appropriate category for your source from the list. For example, if you are creating a new cloud storage source, select **[!UICONTROL cloud-storage]**.

Name your source file `YOURSOURCE.md` where YOURSOURCE is the name of your source in Platform. For example, if your company is [!DNL Mailchimp], then your file name should be `mailchimp.md`.

## Author the documentation page for your source

To start documenting your new source, paste the content of the [sources template](./template) into the GitHub web editor. You can also download the template HERE.

![paste-template]()

With the template copied over to the GitHub web editor interface, follow the instructions outlined on the template and edit the values containing relevant information for your source.

![edit-template]()

When complete, commit the file in your branch.

![commit]()

## Submit your documentation for review

Once your file is commited, you can open a pull request (PR) to merge your working branch into the master branch of the Adobe documentation repository. Ensure that the branch you have been working on is selected, and then select **[!UICONTROL Pull request]**.

![pull-request]()

Ensure that the base and compare branches are correct. Add a note to the PR, describing your update, and then select [!UICONTROL Create pull request]. This opens a PR to merge the working branch of your work into the master branch of the Adobe repository.

>[!TIP]
>
>Leave the **Allow edits by maintainers** checkbox selected to ensure that the Adobe documentation team can make edits to the PR.

![create-pr]()

At this point, a notification appears that prompts you to sign the Adobe Contributor License Agreement (CLA). This is a mandatory step. After you sign the CLA, refresh the PR page and submit the pull request.

You can confirm that the pull request has been submitted by inspecting the Pull requests tab in https://github.com/AdobeDocs/experience-platform.en.

![confirm-pr]()
