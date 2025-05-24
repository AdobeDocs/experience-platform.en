## Configure identity settings {#identity}

This section allows you to define the behavior of the Web SDK when it comes to handling user identification.

![Image showing the identity settings of the Web SDK tag extension in the Tags UI](assets/web-sdk-ext-identity.png)

* **[!UICONTROL Migrate ECID from VisitorAPI]**: This option is enabled by default. When this feature is enabled, the SDK can read the `AMCV` and `s_ecid` cookies and set the `AMCV` cookie used by [!DNL Visitor.js]. This feature is important when migrating to Web SDK, as some pages might still be using [!DNL Visitor.js]. This option allows the SDK to continue to use the same [!DNL ECID] so that users are not identified as two separate users.
* **[!UICONTROL Use third-party cookies]**: When this option is enabled, Web SDK attempts to store a user identifier in a third-party cookie. If successful, the user is identified as a single user as they navigate across multiple domains, rather than being identified as a separate user on each domain. If this option is enabled, the SDK might still be unable to store the user identifier in a third-party cookie if the browser does not support third-party cookies or has been configured by the user to not allow third-party cookies. In this case, the SDK only stores the identifier in the first-party domain.

    >[!IMPORTANT]
    >>Third-party cookies are not compatible with the [first-party device ID](../../../../web-sdk/identity/first-party-device-ids.md) functionality in Web SDK.
    >You can either use first-party device IDs, or you can use third-party cookies, but you cannot use both features simultaneously.
