---
keywords: identities rtcdp;rtcdp identities;real-time cdp identities
title: Identities in Real-Time Customer Data Platform
description: Adobe Experience Platform Identity Service helps you to gain a better view of your customers and their behavior by bridging together identities across devices and systems.
exl-id: 2b0d84de-9710-412e-ace7-56e3977245aa
---
# Identities overview

Adobe Experience Platform [!DNL Identity Service] helps you to gain a better view of your customers and their behavior by bridging together identities across devices and systems. Typically, your customers interact with your brand across multiple channels, this could include browsing your website online, making a purchase in-store, joining your loyalty program, or calling a help desk for support, to name a few. Across these multiple systems, there is an identity created for that customer, and [!DNL Identity Service] makes it possible to bring those identities together to see the complete picture.

Now, instead of five separate customers interacting with your brand across five different channels, you can see that this is the same customer, and you can ensure they receive a consistent, personalized, relevant experience through each interaction. As more information becomes known about your customer (for example, an anonymous browser of your website decides to sign up for an account and log-in) that information is stitched together and the picture of your customer becomes increasingly more clear.

## Identity namespaces

Identity namespaces are a component of [!DNL Identity Service] and serve as indicators providing additional context to customer identities. An example of a commonly used ID namespace would be "Email", where the use of the same email address across multiple websites allows you to stitch together several different identities, each with a unique customer ID, as actually belonging to the same customer. [!DNL Experience Platform] allows you to use ID namespaces to search for individual profiles within the user interface. For more information on viewing profiles, please see the [profile browse overview](profile-browse.md). To learn more about identity namespaces, see the [identity namespace overview](../../identity-service/namespaces.md).

## Identity graphs

An identity graph is a map of relationships between different identity namespaces, providing you with a visual representation of how your customer interacts with your brand across different channels. All customer identity graphs are collectively managed and updated by [!DNL Identity Service] in near real-time, in response to customer activity.

[!DNL Identity Service] manages an identity graph visible by only your organization and built based on your data, referred to as the private graph. [!DNL Identity Service] augments your private graph when an ingested data record contains more than one identity, adding a relationship between the identities found.

## Next steps

Identities, and the relationships between them, are defined and maintained by [!DNL Identity Service] and leveraged by [!DNL Real-Time Customer Profile] to build a complete picture of each individual customer and their interactions. To learn more, please visit the [Identity Service documentation](../../identity-service/home.md).
