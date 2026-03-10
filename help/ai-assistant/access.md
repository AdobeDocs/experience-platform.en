---
title: Access AI Assistant (Legacy) in Experience Platform
description: Learn how you can access AI Assistant in the Experience Cloud UI.
exl-id: c4cdff25-512c-4b4c-be91-ad9360067a0a
---
# Access AI Assistant (Legacy) in Experience Platform

>[!IMPORTANT]
>
>This document applies to AI Assistant (Legacy). For information on AI Assistant (Next-Gen), read the [AI Assistant UI guide](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/ai-assistant/ai-assistant-ui) in the [AI in Experience Cloud](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/home) documentation.

Refer to the following table for a comparison of AI Assistant (Legacy) and AI Assistant (Next-Gen):

| Feature Area | AI Assistant (Legacy) | AI Assistant (Next-Gen) |
| --- | --- | --- |
| User experience | AI Assistant (Legacy) is available in a right-rail panel only. | AI Assistant (Next-Gen) is available in both right-rail panel and immersive full-screen experience. |
| Scope of capabilities | You can use AI Assistant (Legacy) for both product knowledge and operational insights. | You can use  AI Assistant (Next-Gen) for product knowledge, operational insights, as well as advanced agentic skills and multi-step task execution. |
| Platform architecture | AI Assistant (Legacy) is not built on the Agent Orchestrator stack. | AI Assistant (Next-Gen) is powered by [Adobe Experience Platform Agent Orchestrator](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/agents/agent-orchestrator), enabling extensibility and advanced coordination across capabilities. |
| Application coverage | AI Assistant (Legacy) is an application-specific implementation. | You can use AI Assistant (Next-Gen) for a unified AI Assistant experience across all Adobe Experience Cloud applications. |
| Access and permission model | Application-scoped access model aligned to individual product boundaries. | All users get access to AI Assistant (Next-Gen) and associated Experience Platform agents. **Note**: <ul><li>**Adobe Experience Manager**: Your administrator must grant you the permission to access AI Assistant (Next-Gen) through the [Adobe Admin Console](https://helpx.adobe.com/enterprise/using/admin-console.html).</li><li>**Customer Journey Analytics**: Your administrator must grant you the permission to access AI Assistant through [Customer Journey Analytics Access Control](https://experienceleague.adobe.com/en/docs/analytics-platform/using/technotes/access-control?lang=en). This allows you to ask product knowledge and data insights questions. |

You can access AI Assistant (Legacy) across several applications in Adobe Experience Cloud.

>[!NOTE]
>
>If you receive a pop up message in permissions UI that informs you that your organization must first agree to additional legal terms in order to gain access to AI Assistant (Legacy), then contact your Adobe account team for guidance on these terms.

## Get started {#get-started}

You must complete two prerequisite steps before you can access AI Assistant (Legacy).

1. Your organization must first agree to legal terms. For more information, contact your Adobe Account Team.
2. Your administrators must grant you sufficient permissions to access AI Assistant (Legacy).

If you do not have either of these two prerequisite steps completed, then you will see the following messages when you select the AI Assistant (Legacy) chat icon in the Experience Platform UI.

>[!BEGINTABS]

>[!TAB Your organization cannot use AI Assistant (Legacy)]

You will see the following message if you are using an organization that is not legally eligible to use AI Assistant (Legacy). In this scenario, you must contact your Adobe account team to resolve access.

![The pop-up message that appears on Experience Platform UI if the organization cannot use AI Assistant (Legacy).](./images/access/modal-one.png)

>[!TAB You do not have the right permissions]

If your organization is legally eligible to use AI Assistant (Legacy) and you still cannot access the feature, then you will see the following message on Experience Platform UI. This scenario means that you do not have the sufficient permissions to access the feature and you must contact your administrators to resolve permissions.

![The pop-up message that appears on Experience Platform UI if you do not have the necessary permissions for AI Assistant (Legacy).](./images/access/modal-two.png)

>[!ENDTABS]

## Get access to AI Assistant (Legacy) {#get-access-to-ai-assistant}

Access to AI Assistant (Legacy) is governed by the following parameters:

* **Access the application:** You can access AI Assistant (Legacy) in Adobe Experience Platform, Adobe Real-Time CDP, Adobe Journey Optimizer, and [Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/analytics-platform/using/ai-assistant).
<!-- * **Contractual access:** Your company must agree to certain [!DNL GenAI]-related legal terms before your organization can use AI Assistant (Legacy). Contact your organization's administrator or your Adobe Account Team if you are not able to access AI Assistant (Legacy).  -->
* **Permissions:** Use the [Permissions UI](../access-control/abac/ui/permissions.md) to grant or revoke access to AI Assistant (Legacy) in your organization. In order to use AI Assistant (Legacy), a given user must belong to a role that is provisioned with the **Enable AI Assistant** and **View Operational Insights** permissions.
  * As an administrator, you can add the **Enable AI Assistant** to a given role and add a user to that role, to allow them to access AI Assistant (Legacy) in your organization. **Note**: This permission allows the said user to access AI Assistant (Legacy), it does not grant them any administrative capacities to then give others access to AI Assistant (Legacy).
  * As an administrator, you can add the **View Operational Insights** to a given role and add a user to that role, to allow them to use AI Assistant (Legacy)'s operational insights capabilities.

Use the [permissions UI](../access-control/abac/ui/roles.md) to grant permissions to use AI Assistant (Legacy) in Experience Platform and Journey Optimizer. For information on how to access AI Assistant (Legacy) in Customer Journey Analytics. Read the documentation in [Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/analytics-platform/using/ai-assistant).

![The permissions UI page with the Enable AI Assistant (Legacy) and View Operational Insights permissions included in a given role.](./images/access/access-permissions.png)

Once you have the necessary permissions, you can access AI Assistant (Legacy) by selecting the AI Assistant (Legacy) icon on the top header of the application that you are using.

![AI Assistant (Legacy) with first-time user experience.](./images/access/access-home.png)

Watch the following video to learn how to configure access to AI Assistant (Legacy) for your organizations and users.

>[!VIDEO](https://video.tv.adobe.com/v/3436470/?learn=on)

## Next steps

Once you have complete access to AI Assistant (Legacy), you can proceed to using the feature during your workflows, read the [AI Assistant (Legacy) UI guide](./ui-guide.md) for more information.
