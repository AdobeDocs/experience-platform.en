---
title: Extension Manifest
description: Learn how to configure a JSON manifest file that informs Adobe Experience Platform how to properly consume your extension.
exl-id: 7cac020b-3cfd-4a0a-a2d1-edee1be125d0
---
# Extension manifest

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../term-updates.md) for a consolidated reference of the terminology changes.

In your extension's base directory you must create a file called `extension.json`. This contains critical details about your extension that allows Adobe Experience Platform to properly consume it. Some of the contents are formed after the manner of [npm's `package.json`](https://docs.npmjs.com/files/package.json).

An example `extension.json` can be found the [Hello World extension](https://github.com/adobe/reactor-helloworld-extension/blob/master/extension.json) GitHub repository.

An extension manifest must consist of the following:

| Property | Description |
| --- | --- |
| `name` | The name of your extension. It must be unique from all other extensions and must comply with [naming rules](#naming-rules). **This is used by tags as an identifier and should not be changed after you publish your extension.** |
| `platform` | The platform for your extension. The only value accepted at this moment is `web`. |
| `version` | The version of your extension. It must follow the [semver](https://semver.org/) versioning format. This is consistent with [npm version field](https://docs.npmjs.com/files/package.json#version). |
| `displayName` | The human-readable name of your extension. This will be shown to Platform users. There is no need to mention "tags" or "Extension"; users will already know they are looking at a tag extension. |
| `description` | The description of your extension. This will be shown to Platform users. If your extension empowers users to implement your product on their website, describe what your product does. There is no need to mention "tags" or "Extension"; users will already know they are looking at a tag extension. |
| `iconPath` *(Optional)* | The relative path to the icon that will be displayed for the extension. It should not not begin with a slash. It must reference an SVG file with a `.svg` extension. The SVG should be square and may be scaled by Platform. |
| `author` | The "author" is an object which should be structured as follows: <ul><li>`name`: The name of the extension author. Alternatively, the company name can be used here.</li><li>`url` *(Optional)*: A URL where you can find out more about the extension author.</li><li>`email` *(Optional)*: The email address of the extension author.</li></ul>This is consistent with [npm author field](https://docs.npmjs.com/files/package.json#people-fields-author-contributors) rules. |
| `exchangeUrl` *(Required for public extensions)* | The URL to your extension's listing on Adobe Exchange. It must match the pattern `https://www.adobeexchange.com/experiencecloud.details.######.html`. |
|`viewBasePath` | The relative path to the subdirectory containing all your views and view-related resources (HTML, JavaScript, CSS, images). Platform will host this directory on a web server and load iframe content from it. This is a required field and should not start with a slash. For example, if all your views are contained within `src/view/`, the value of `viewBasePath` would be `src/view/`. |
|`hostedLibFiles` *(Optional)* | Many of our users prefer hosting all tags-related files on their own server. This provides users an increased level of certainty regarding file availability at runtime and they can easily scan the code for security vulnerabilities. If the library portion of your extension needs to load JavaScript files at runtime, it is recommended you use this property to list those files. The listed files will be hosted alongside the tag runtime library. Your extension can then load the files via a URL retrieved using the [getHostedLibFileUrl](./turbine.md#get-hosted-lib-file) method.<br><br>This option contains an array with relative paths of 3rd party library files that need to be hosted. |
| `main` *(Optional)* | The relative path of a library module that should be executed at runtime.<br><br>This module will always be included in the runtime library and executed. Because the module is always included in the runtime library, we recommend only using a "main" module when absolutely necessary and keeping its code size minimal.<br><br>This module is not guaranteed to be executed first; other modules may be executed before it. |
| `configuration` *(Optional)* | This describes the [extension configuration](./configuration.md) portion of the extension. This is necessary if you need users to provide global settings for the extension. See the [appendix](#config-object) for details on how this field should be structured.| 
| `events` *(Optional)* | An array of [event](./web/event-types.md) type definitions. See the appendix section on [type definitions](#type-definitions) for the structure of each object in the array. |
| `conditions` *(Optional)* | An array of [condition](./web/condition-types.md) type definitions. See the appendix section on [type definitions](#type-definitions) for the structure of each object in the array. |
| `actions` *(Optional)* | An array of [action](./web/action-types.md) type definitions. See the appendix section on [type definitions](#type-definitions) for the structure of each object in the array. |
| `dataElements` *(Optional)* | An array of [data element](./web/data-element-types.md) type definitions. See the appendix section on [type definitions](#type-definitions) for the structure of each object in the array. |
| `sharedModules` *(Optional)* | An array of shared module definition objects. Each shared module object in the array should be structured as follows: <ul><li>`name`: The name of the shared module. Note that this name will be used when referencing shared modules from other extensions as described in [Shared Modules](./web/shared.md). This name is never displayed in any user interface. It should be unique from the names of other shared modules within your extension and must comply with [naming rules](#naming-rules). **This is used by tags as an identifier and should not be changed after you publish your extension.**</li><li>`libPath`: The relative path to the shared module. It should not not begin with a slash. It must reference a JavaScript file with a `.js` extension.</li></ul>|

## Appendix

### Naming rules {#naming-rules}

The value of any `name` field within `extension.json` must comply with the following rules:

* Must be less than or equal to 214 characters
* Must not start with a dot or an underscore
* Must not contain uppercase letters
* Must only contain URL-safe characters

These are consistent with [npm package name](https://docs.npmjs.com/files/package.json#name) rules.

### Configuration object properties {#config-object}

The configuration object should be structured as follows:

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>viewPath</code></td>
      <td>The relative URL to the extension configuration view. It should be relative to <code>viewBasePath</code> and should not begin with a slash. It must reference an HTML file with a <code>.html</code> extension. Query string and fragment identifier (hashes) suffixes are acceptable.</td>
    </tr>
    <tr>
      <td><code>schema</code></td>
      <td>An object of <a href="https://json-schema.org/">JSON Schema</a> describing the format of a valid object being saved from the extension configuration view. Since you are the developer of the configuration view, it is your responsibility to ensure that any settings object saved matches this schema. This schema will also be used for validation when users attempt to save data using Platform services.<br><br>An example schema object is as follows:
<pre class="JSON language-JSON hljs">
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "delay": {
      "type": "number",
      "minimum": 1
    }
  },
  "required": [
    "delay"
  ],
  "additionalProperties": false
}
</pre>
      We recommend using a tool like <a href="https://www.jsonschemavalidator.net/">JSON Schema validator</a> to manually test your schema.</td>
    </tr>
    <tr>
      <td><code>transforms</code> <em>(Optional)</em></td>
      <td>An array of objects where each object represents a transformation that should be performed on every corresponding settings object when it is emitted into the runtime library. See the <a href="#transforms">transforms</a> section for more information on why this may be needed and how it is used.</td>
    </tr>
  </tbody>
</table>

### Type definitions {#type-definitions}

A type definition is an object used to describe an event, condition, action, or data element type. The object consists of the following:

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>name</code></td>
      <td>The name of the type. This must be a unique name within the extension. The name must comply with <a href="#naming-rules">naming rules</a>. <strong>This is used by tags as an identifier and should not be changed after you publish your extension.</strong></td>
    </tr>
    <tr>
      <td><code>displayName</code></td>
      <td>The text that will be used to represent the type within the Data Collection user interface. It should be human-readable.</td>
    </tr>
    <tr>
      <td><code>categoryName</code> <em>(Optional)</em></td>
      <td>When provided, the <code>displayName</code> will be listed under the <code>categoryName</code> within the UI. All types with the same <code>categoryName</code> will be listed under the same category. For example, if your extension provided a <code>keyUp</code> event type and a <code>keyDown</code> event type and they both had a <code>categoryName</code> of <code>Keyboard</code>, both event types would be listed under the Keyboard category while the user is selecting from the list of available event types when building a rule. The value of <code>categoryName</code> should be human-readable.</td>
    </tr>
    <tr>
      <td><code>libPath</code></td>
      <td>The relative path to the type&#39;s library module. It should not not begin with a slash. It must reference a JavaScript file with a <code>.js</code> extension.</td>
    </tr>
    <tr>
      <td><code>viewPath</code> <em>(Optional)</em></td>
      <td>The relative URL to the type&#39;s view. It should be relative to <code>viewBasePath</code> and should not begin with a slash. It must reference an HTML file with a <code>.html</code> extension. Query strings and fragment identifiers (hashes) are acceptable. If your type&#39;s library module does not use any settings from a user, you may exclude this property and Platform will instead display a placeholder stating that no configuration is necessary.</td>
    </tr>
    <tr>
      <td><code>schema</code></td>
      <td>An object of <a href="https://json-schema.org/">JSON Schema</a> describing the format of a valid settings object that can be saved by the user. Settings are usually configured and saved by a user using the Data Collection user interface. In these cases, the extension&#39;s view can take necessary steps to validate user-provided settings. On the other hand, some users choose to use tags APIs directly without the aid of any user interface. The purpose of this schema is to allow Platform to properly validate that settings objects saved by users, regardless of whether a user interface is used, are in a format that is compatible with the library module that will act upon the settings object at runtime.<br><br>An example schema object is as follows:<br>
<pre class="JSON language-JSON hljs">
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "delay": {
      "type": "number",
      "minimum": 1
    }
  },
  "required": [
    "delay"
  ],
  "additionalProperties": false
}
</pre>
      We recommend using a tool like <a href="https://www.jsonschemavalidator.net/">JSON Schema validator</a> to manually test your schema.</td>
    </tr>
    <tr>
      <td><code>transforms</code> <em>(Optional)</em></td>
      <td>An array of objects where each object represents a transformation that should be performed on every corresponding settings object when it is emitted into the runtime library. See the section on <a href="#transforms">transforms</a> for more information on why this may be needed and how it is used.</td>
    </tr>
  </tbody>
</table>

### Transforms {#transforms}

For certain specific use cases, extensions need the settings objects saved from a view to be transformed by Platform before they are emitted into the tag runtime library. You may request that one or more of these transforms take place by setting the `transforms` property when defining a type definition within your `extension.json`. The `transforms` property is an array of objects where each object represents a transformation that should take place. 

All transforms require a `type` and a `propertyPath`. The `type` must be one of `function`, `remove`, and `file` and describes which transform Platform should apply to the settings object. The `propertyPath` is a period-delimited string that tells tags where to find the property that needs to be modified within the settings object. Here is an example settings object and some `propertyPath`s:

```js
{
  foo: {
    bar: "A string",
    baz: [
      "A",
      "B",
      "C"
    ]
  }
}
```

* If you set a `propertyPath` of `foo.bar` you would transform the `"A string"` value.
* If you set a `propertyPath` of `foo.baz[]` you would transform each value in the `baz` array.
* If you set a `propertyPath` of `foo.baz` you would transform the `baz` array.

Property paths can use any combination of array and object notation to apply transforms at any level of the settings object.

>[!WARNING]
>
>Using array notation in the `propertyPath` attribute (e.g. `foo.baz[]`) is not yet supported in the extension sandbox*tool.

The sections below describe the available transformations and how to use them.

#### Function transform

The function transform allows code written by Platform users to be executed by a library module within the emitted tag runtime library.

Let's assume we would like to provide a "custom script" action type. The "custom script" action view might provide a textarea wherein the user can enter some code. Let's assume a user entered the following code into the textarea:

`console.log('Welcome, ' + username +'. This is ZomboCom.');`

When the user saves the rule, the settings object saved by the view may look like this:

```javascript
{
  foo: {
    bar: "console.log('Welcome, ' + username +'. This is ZomboCom.');"
  }
}
```

When a rule using our action fires within the tag runtime library, we would like to execute the user's code and pass it a username.

At the point that the settings object is saved from the action type's view, the user's code is simply a string. This is good because it can be properly serialized to and from JSON; however, it's also bad because it would typically be emitted in the tag runtime library as a string as well instead of an executable function. Although you could attempt to execute the code within your action type's library module using [`eval`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) or a [Function constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function), it is highly discouraged due to [content security policies](https://developer.mozilla.org/en-US/docs/Web/Security/CSP) potentially blocking execution.

As a workaround for this situation, using the function transform tells Platform to wrap the user's code in a executable function when it is emitted in the tag runtime library. To solve our example problem, we would define the transform on the type definition in `extension.json` as follows:

```json
{
  "transforms": [
    {
      "type": "function",
      "propertyPath": "foo.bar",
      "parameters": ["username"]
    }
  ]
}
```

* `type` defines the type of transform that should be applied to the settings object.
* `propertyPath` is a period-delimited string that tells Platform where to find the property that needs to be modified within the settings object.
* `parameters` is an array of parameter names that should be included in the wrapping function's signature.

When the settings object is emitted in the tag runtime library, it will be transformed to the following:

```javascript
{
  foo: {
    bar: function(username) {
      console.log('Welcome, ' + username +'. This is ZomboCom.');
    }
  }
}
```

Your library module can then call the function containing the user's code and pass in the `username` argument.

#### File transform

The file transform allows code written by Platform users to be emitted into a file separate from the tag runtime library. The file will be hosted alongside the tag runtime library and can then be loaded as needed by your extension at runtime.

Let's assume we would like to provide a "custom script" action type. The action type's view might provide a textarea wherein the user can enter some code. Let's assume a user entered the following code into the textarea:

`console.log('This is ZomboCom.');`

When the user saves the rule, the settings object saved by the view may look like this:

```js
{
  foo: {
    bar: "console.log('This is ZomboCom.');"
  }
}
```

We would like the user's code to be placed into a separate file instead of included inside in the tag runtime library. When a rule using our action fires within the tag runtime library, we would like to load the user's code by appending a script element to the document body. To solve our example problem, we would define the transform on the action type definition in `extension.json` as follows:

```json
{
  "transforms": [
    {
      "type": "file",
      "propertyPath": "foo.bar"
    }
  ]
}
```

* `type` defines the type of transform that should be applied to the settings object.
* `propertyPath` is a period-delimited string that tells Platform where to find the property that needs to be modified within the settings object.

When the settings object is emitted in the tag runtime library, it will be transformed to the following:

```javascript
{
  foo: {
    bar: "//launch.cdn.com/path/abc.js"
  }
}
```

In this case, the value of `foo.bar` has been transformed to a URL. The exact URL will be determined at the time the library is built. The file will always be given a `.js` extension and delivered using a JavaScript-oriented MIME type. We may add support for other MIME types in the future.

#### Remove transform

By default, all the properties of the settings object are emitted in the tag runtime library. If certain properties are only used for the extension view, especially if they contain sensitive information (eg. secret token), you should use the remove transform to prevent the information from being emitted into the tag runtime library.

Let's assume we would like to provide a new action type. The action type's view might provide an input wherein the user can enter a secret key that will allow connection to a specific API. Let's assume a user entered the following text into the input:

`ABCDEFG`

When the user saves the rule, the settings object saved by the view may look like this:

```js
{
  foo: {
    bar: "ABCDEFG"
  }
}
```

We would like to not include the property `bar` inside in the tag runtime library. To solve our example problem, we would define the transform on the action type definition in `extension.json` as follows:

```json
{
  "transforms": [
    {
      "type": "remove",
      "propertyPath": "foo.bar"
    }
  ]
}
```

* `type` defines the type of transform that should be applied to the settings object.
* `propertyPath` is a period-delimited string that tells Platform where to find the property that needs to be modified within the settings object.

When the settings object is emitted in the tag runtime library, it will be transformed to the following:

```js
{
  foo: {
  }
}
```

In this case, the value of `foo.bar` has been removed from the settings object.
