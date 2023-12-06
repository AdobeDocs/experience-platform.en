---
title: decisionScopes
description: Include decision scopes used in offer decisioning.
---
# `decisionScopes`

The `decisionScopes` property allows you to deliver and render personalized offers that are managed in Offer Decisioning. It is a core part of providing ability to render offer-based content on your site.

This property accepts Base64 decision scopes. You can include multiple decision scopes in a `sendEvent` call.

>[!IMPORTANT]
>
>You must enable **[!UICONTROL Offer Decisioning]** in datastream settings before using this variable. The [!UICONTROL Offer Decisioning] checkbox is in the configuration settings of the Adobe Experience Platform service in a given datastream.

## Decision scopes in the Web SDK tag extension

Provide the desired decision scopes in the [!UICONTROL Scopes] field within the actions of a tag rule. You can also provide a data element that represents an array of scopes.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, and set the [!UICONTROL Action Type] to **[!UICONTROL Send event]**.
1. Scroll down to the [!UICONTROL Personalization] section and locate the [!UICONTROL Scopes] field.
1. Enter the desired Base64 scopes into the field, or provide a data element containing the desired scopes.
1. Click **[!UICONTROL Keep Changes]**, then run your publishing workflow.

## Decision scopes using the Web SDK JavaScript library

Set the `decisionScopes` string array when running the `sendEvent` command. Each string represents the decision scope in Base64 format. You can include one or more strings in the array.

```js
alloy("sendEvent", {
  "decisionScopes": [
    "eyJhY3Rpdml0eUlkIjoieGNvcmU6b2ZmZXItYWN0aXZpdHk6MTIxYWIwOWMx...TEifQ==",
    "eyJhY3Rpdml0eUlkIjoieGNvcmU6b2ZmZXItYWN0aXZpdHk6MTIxYWIyNWI5...mIifQ=="
  ]
});
```

