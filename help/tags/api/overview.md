---
title: Reactor API Guide
description: The Reactor API allows developers to programmatically manage all resources for tags in Adobe Experience Platform. Follow this guide to learn how to perform key operations using the API.
exl-id: 153eab11-db08-499e-80d1-c56f254372ce
---
# [!DNL Reactor] API guide

The Reactor API provides several endpoints that allow you to programmatically manage all resources for tags in Adobe Experience Platform.

These endpoints are outlined below. Please visit the individual endpoint guides for details and refer to the [getting started guide](./getting-started.md) for important information on how to authenticate to the API.

To view all available endpoints and CRUD operations, visit the [Reactor API reference](https://www.adobe.io/experience-platform-apis/references/reactor/).

## Companies

A company represents the organization of a tags user, typically a business. These companies match 1:1 with organization IDs. API users will only have visibility into the companies to which they have access.

See the [companies endpoint guide](./endpoints/companies.md) to learn how to view available companies in the API.

## Properties

A property is a container that holds most of the other resources available within the Reactor API. The only resources that are not owned by a property are audit events, companies, extension packages, and profiles. A property belongs to exactly one company, and a company can have many properties.

See the [properties endpoint guide](./endpoints/properties.md) to learn how to manage properties in the API.

## Data elements

A data element functions as a variable which points to an important piece of data within your application. Data elements are used within rules and extension configurations. When the rule is triggered at runtime in a browser or an application, the value of the data element is resolved and used within the rule.

See the [data elements endpoint guide](./endpoints/data-elements.md) to learn how to manage data elements in the API.

## Rules

Rules control the behavior of the resources contained in a deployed library. A rule is a group of one or more rule components, and exists to tie the rule components together in a logical way.

See the [rules endpoint guide](./endpoints/rules.md) to learn how to manage rules in the API.

## Rule components

Rule components are the individual items that make up a rule. Rule components have three basic types:

* **Events**: What triggers a rule
* **Conditions**: What the rule checks to determine an action
* **Actions**: What the rule executes depending on whether the condition is met

See the [rules endpoint guide](./endpoints/rules.md) to learn how to manage rules in the API.

## Extension packages

An extension package represents a grouping of individual capabilities that can be made available to a tags user. Most commonly these capabilities come in the form of rule components and data elements, but can also include main modules and shared modules. The capabilities provided by an extension package are installed as an extension when it is included in a library.

See the [extension packages endpoint guide](./endpoints/extension-packages.md) to learn how to manage extension packages in the API.

## Extensions

An extension represents the installed instance of an extension package. An extension makes the features defined by an extension package available to a property. These features are leveraged when creating data elements and rule components.

See the [extensions endpoint guide](./endpoints/extensions.md) to learn how to manage extensions in the API.

## Libraries

A library is a collection of resources (extensions, rules, and data elements) that represent the desired behavior of a property. Libraries are compiled into builds, and those builds are assigned to different environments as they move down the publishing flow from testing to production.

See the [libraries endpoint guide](./endpoints/libraries.md) to learn how to manage libraries in the API.

## Builds

A tag library is compiled into a build in order for it to be assigned to an environment for testing and deployment. The contents of a build varies depending on the resources included in the library, the configuration of the environment to which the build is assigned, and the platform of the property that the build belongs to.

See the [builds endpoint guide](./endpoints/builds.md) to learn how to manage builds in the API.

## Environments

An environment indicates the specific host where a build can be deployed, and whether the build should be deployed as a set of files or compressed in an archive format. In the Reactor API, environments are separate from hosts themselves, which are managed by the `/hosts` endpoint.

See the [builds endpoint guide](./endpoints/builds.md) to learn how to manage builds in the API.

## Hosts

A host represents a hosted destination where a library build can be delivered and ultimately deployed. Hosts can be either Akamai or SFTP servers.

See the [hosts endpoint guide](./endpoints/hosts.md) to learn how to manage hosts in the API.

## App configurations

App configurations allow credentials to be stored and retrieved for later use. See the [app configurations endpoint guide](./endpoints/app-configurations.md) to learn how to manage app configurations in the API.

## Audit events

An audit event is a record of a specific change to another tag resource, generated at the time the change is made. These are system events which can be subscribed to through the use of a callback function.

See the [audit events endpoint guide](./endpoints/audit-events.md) to learn how to manage audit events in the API.

## Callbacks

A callback is a message that Platform sends to a URL host whenever a new audit event is generated. See the [callbacks endpoint guide](./endpoints/callbacks.md) to learn how to manage callbacks in the API.

## Notes

Notes are textual annotations that you can add to certain tag resources, such as data elements, extensions, libraries, properties, rules, and rule components. See the [notes endpoint guide](./endpoints/notes.md) to learn how to manage notes in the API.

## Profile

A profile contains all the information about the logged-in user, including all the Adobe Orgs to which they belong, the product profiles they belong to within each Org, and the rights they have from each product profile.

See the [profile endpoint guide](./endpoints/profile.md) to learn how to view this information in the API.

## Search

The `/search` endpoint provides a way to find resources matching a desired criteria, expressed as a query. All queries are scoped to your current company and accessible properties. See the [search endpoint guide](./endpoints/search.md) to learn how use this functionality.

## Secrets

A secret contains credentials that allow event forwarding to authenticate to another system for secure data exchange. See the [secrets guide](./guides/secrets.md) for an overview on how secrets function in event forwarding, and the [secrets endpoint guide](./endpoints/secrets.md) to learn how to manage them in the Reactor API.

## Next steps

To begin making calls using the Schema Registry API, read the [getting started guide](./getting-started.md) then select one of the endpoint guides to learn how to use specific endpoints.
