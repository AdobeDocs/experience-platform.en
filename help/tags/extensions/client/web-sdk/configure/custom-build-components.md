## Create a custom Web SDK build {#custom-build}

The Web SDK library includes multiple modules for various features like personalization, identity, link tracking, and more. Depending on your use cases, you might only need specific features instead of the entire library. Creating a custom Web SDK build allows you to select only the modules you need, reducing the library size and improving performance.

When you create a custom Web SDK build, the build is used by all of your Web SDK instances.

>[!IMPORTANT]
>
>Disabling Web SDK components can break your existing implementation. Each time you disable a component, make sure to test your implementation thoroughly to make sure that all functionalities that you need are working as expected.
>When you disable a component, you can no longer edit the settings of that component.

To create a custom Web SDK build by using the Web SDK tag extension, follow the steps below.

1. In the tag extension configuration page, expand the **[!UICONTROL Custom build components]** section.
1. Enable or disable the components, based on your needs. You can select from the following components:
    * **[!UICONTROL Activity collector]**: This component enables automatic link collection and activity map tracking.
    * **[!UICONTROL Audiences]**: This components enables Audience Manager integration, including URL and cookie-based destinations, and ID syncs.
    * **[!UICONTROL Consent]**: This component enables consent integrations. Disabling this component disables the following elements:
      * [Set consent](action-types.md#set-consent) action type
    * **[!UICONTROL Context]**: This component enables automatic collection of context data.
    * **[!UICONTROL Event merge]**: _Deprecated_. Disabling this component disables the following elements:
      * [Event merge ID](action-types.md#data) data element
      * **[!UICONTROL Reset event merge ID]** action type
    * **[!UICONTROL Media analytics bridge]**: This component enables Edge Network Streaming Media using the media analytics interface. Disabling this component disables the following elements:
      * [Get Media Analytics Tracker](action-types.md#get-media-analytics-tracker) action type
    * **[!UICONTROL Personalization]**: This component enables the Adobe Target and Adobe Journey Optimizer integrations. Disabling this component disables the following elements:
      * [Apply propositions action](action-types.md) type
    * **[!UICONTROL Rules engine]**: This component enables the Adobe Journey Optimizer on-device decisioning. Disabling this component disables the following elements:
      * [Evaluate rulesets](action-types.md#evaluate-rulesets) action type
      * [Subscribe ruleset items](event-types.md#subscribe-ruleset-items) event type
    * **[!UICONTROL Streaming media]**: This component enables Edge Network Streaming Media. Disabling this component disables the following elements:
      * [Send media event](action-types.md#send-media-event) action type