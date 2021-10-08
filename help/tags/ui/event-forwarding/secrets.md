---
title: Event Forwarding Secrets
description: Learn how to configure secrets in the Data Collection UI to authenticate to your event forwarding properties.
---
# Event forwarding secrets

In event forwarding, a secret is a resource that represents an authentication credential for another system in order to securely exchange data. Therefore, secrets can only be created within event forwarding properties.

There are currently three supported secret types:

| Secret type | Description |
| --- | --- |
| [!UICONTROL Token] | A single string of characters representing an authentication token value that is known and understood by both systems. |
| [!UICONTROL HTTP] | Contains two string attributes for a username and password, respectively. |
| [!UICONTROL OAuth2] | Contains several attributes to support the [OAuth](https://datatracker.ietf.org/doc/html/rfc6749) authentication spec. The system asks you for the required information, then handles the renewal of these tokens for you on a specified interval. |

{style="table-layout:auto"}

This guide provides a high-level overview of how to configure secrets for an event forwarding property in the Data Collection UI.

<!-- (Add once API docs are published)
For detailed guidance on how to manage secrets in the Reactor API, including example JSON of a secret's structure, refer to the [secrets endpoint guide].
-->

## Prerequisites

This guide assumes that you are already familiar with how to manage resources for tags and event forwarding in the Data Collection UI, including how to create a data element and add it to a library. See the guide on [managing resources](../managing-resources/overview.md) if you require an introduction.

You should also have a working understanding of the publishing flow for tags and event forwarding, including how to add resources to a library and install a build onto your website for testing. See the [publishing overview](../publishing/overview.md) for more details.

## Create a secret {#create}

To create a secret, log in to the Data Collection UI and open the event forwarding property you want to add the secret under. Next, select **[!UICONTROL Secrets]** in the left navigation, followed by **[!UICONTROL Create New Secret]**.

![Create new secret](../../images/ui/event-forwarding/secrets/create-new-secret.png)

The next screen allows you to configure the details of the secret. In order for a secret to be useable by event forwarding, it must be assigned to an existing environment. If you do not have any environments created for your event forwarding property, see the guide on [environments](../publishing/environments.md) to guidance on how to configure them before continuing.

>[!NOTE]
>
>If you still want to create and save the secret before adding it to an environment, disable the **[!UICONTROL Attach Secret to Environments]** toggle before filling in the rest of the information. Note that you will have to assign it to an environment later if you want to use the secret.
>
>![Disable environment](../../images/ui/event-forwarding/secrets/env-disabled.png)

Under **[!UICONTROL Target Environment]**, use the dropdown menu to select the environment you want to assign the secret to. Under **[!UICONTROL Secret Name]**, provide a unique name for the secret in the context of the environment.

![Environment and name](../../images/ui/event-forwarding/secrets/env-and-name.png)

A secret can only be assigned to one environment at a time, but you can assign the same credentials to multiple secrets across different environments if you wish. Select **[!UICONTROL Add Environment]** to add another row to the list.

![Add environment](../../images/ui/event-forwarding/secrets/add-env.png)

For each environment you add, you must provide another unique name for the associated secret. If you exhaust all available environments, the **[!UICONTROL Add Environment]** button will be unavailable.

![Add environment unavailable](../../images/ui/event-forwarding/secrets/add-env-greyed.png)

From here, the steps to create the secret differ depending on the type of secret you are creating. Refer to the subsections below for details:

* [[!UICONTROL Token]](#token)
* [[!UICONTROL HTTP]](#http)
* [[!UICONTROL OAuth2]](#oauth2)

### [!UICONTROL Token] {#token}

To create a token secret, select **[!UICONTROL Token]** from the **[!UICONTROL Type]** dropdown. In the **[!UICONTROL Token]** field that appears, provide the authentication string that is recognized by both systems. Select **[!UICONTROL Create Secret]** to save the secret.

![Token secret](../../images/ui/event-forwarding/secrets/token-secret.png)

### [!UICONTROL HTTP] {#http}

To create a simple HTTP secret, select **[!UICONTROL HTTP]** from the **[!UICONTROL Type]** dropdown. In the fields that appear below, provide a username and password for the credential before selecting **[!UICONTROL Create Secret]** to save the secret.

![HTTP secret](../../images/ui/event-forwarding/secrets/http-secret.png)

### [!UICONTROL OAuth2] {#oauth2}

To create a simple OAuth2 secret, select **[!UICONTROL OAuth2]** from the **[!UICONTROL Type]** dropdown. In the fields that appear below, provide your [[!UICONTROL Client ID] and [!UICONTROL Client Secret]](https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/), as well as your [[!UICONTROL Authorization URL]](https://www.oauth.com/oauth2-servers/authorization/the-authorization-request/) for your OAuth integration.

![OAuth2 secret](../../images/ui/event-forwarding/secrets/oauth-secret-1.png)

Under **[!UICONTROL Credential Options]**, you can provide other credential options such as `scope` and `audience` in the form of key-value pairs. To add more rows, select **[!UICONTROL Add another]**.

![Credential options](../../images/ui/event-forwarding/secrets/oauth-secret-2.png)

Finally, provide a **[!UICONTROL Refresh Offset]** value in seconds. This represents the amount of time before the OAuth Token is set to expire, after which the system will perform an automatic refresh.

>[!NOTE]
>
>An OAuth Token requires at least four hours between refreshes, and must also be valid for a minimum of eight hours.

When finished, select **[!UICONTROL Create Secret]** to save the secret.

![Refresh Offset](../../images/ui/event-forwarding/secrets/oauth-secret-3.png)

## Edit a secret

After you have created secrets for a property, you can find them listed in the **[!UICONTROL Secrets]** workspace. To edit the details of an existing secret, select its name from the list.

![Select secret to edit](../../images/ui/event-forwarding/secrets/edit-secret.png)

The next screen allows you to change the name and credentials for the secret.

![Edit secret](../../images/ui/event-forwarding/secrets/edit-secret-config.png)

>[!NOTE]
>
>While the assigned environment is listed on this screen, you cannot reassign the secret to another environment. If you wish to use the same credentials on another environment, you must [create a new secret](#create) instead.

## Delete a secret

To delete an existing secret in the  **[!UICONTROL Secrets]** workspace, select the checkbox next to its name before selecting **[!UICONTROL Delete]**. You can also select multiple secrets to delete them simultaneously.

![Delete secret](../../images/ui/event-forwarding/secrets/delete.png)

## Using secrets in event forwarding

In order to make use of a secret in event forwarding, you must first create a [data element](../managing-resources/data-elements.md) that references the secret itself.

When creating the data element, select the **[!UICONTROL Core]** extension, then select **[!UICONTROL Secret]** for the data element type. The right panel updates and provides dropdown controls to assign up to three secret credentials to the data element: one for [!UICONTROL Development], [!UICONTROL Staging], and [!UICONTROL Production] respectively.

![Data element](../../images/ui/event-forwarding/secrets/data-element.png)

After saving the data element, you can include it in event-forwarding [rules](../managing-resources/rules.md) and add those rules to a [library](../publishing/libraries.md), which in turn can be deployed on your site as a [build](../publishing/builds.md).

<!-- (Add once API docs are published)
## Next steps

This guide covered how to manage secrets in the Data Collection UI. For information on how to interact with secrets using the Reactor API, see the [secrets endpoint guide].
-->
