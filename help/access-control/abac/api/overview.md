---
keywords: Experience Platform;home;popular topics;api;attribute-based access control;Attribute-Based Access Control
solution: Experience Platform
title: Attribute-based Access Control API Guide
description: The Attribute-based access control API allows you to programmatically manage roles and policies within Adobe Experience Platform. Follow this guide to learn how to perform key operations using the API.
exl-id: 0fc32354-4869-4392-9501-b1dbea1bc55e
---
# Attribute-based access control API guide

Attribute-based access control is a capability of Adobe Experience Platform that enables administrators to control access to specific objects and/or capabilities based on attributes. Attributes can be metadata added to an object, such as a label added to a schema field or segment. An administrator defines access policies that include attributes to manage user access permissions.

The attribute-based access control API is used to access roles, products, permission categories, and permission sets within Adobe Experience Platform, providing a user interface and RESTful API from which all available library resources are accessible.

These endpoints are outlined below. Please visit the individual endpoint guides for details and refer to the [getting started guide](./getting-started.md) for important information on required headers, reading sample API calls, and more.

## Roles

Roles define the access that an administrator, a specialist, or an end-user has to resources in your organization. In a role-based access control environment, user access provisioning is group through common responsibilities and needs. A role has a given set of permissions and members of your organization can be assigned to one or more roles, depending on the scope of view or write access they need. See the [roles endpoint guide](./roles.md) for more information on working with roles in the API.

## Policies

Policies are statements that bring attributes together to establish permissible and impermissible actions. Policies can either be local or global, and can override other policies. The `/policies` endpoint allows you to programmatically manage policies in your organization. See the [policies endpoint guide](./policies.md) for more information on working with policies in the API.

## Products

The `/products` endpoint in the attribute-based access control API allows you to programmatically manage products as well as permission categories and permission sets associated with products in your organization. See the [products endpoint guide](./products.md) for more information on working with products and their corresponding permission categories and permission sets in the API.

## Next steps

To begin making calls using the attribute-based access control API, read the [getting started guide](./getting-started.md) then select one of the endpoint guides to learn how to use specific endpoints.
