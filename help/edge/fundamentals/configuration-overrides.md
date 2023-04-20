---
title: Configuration overrides
description: Learn how to override datastream configurations using the Web SDK.
---

# Configuration overrides



## Supported commands {#supported-commands}

Configuration overrides are supported by the following Web SDK commands:

* [sendEvent](tracking-events.md)
* [setConsent](../consent/iab-tcf/overview.md)
* [getIdentity](../identity/overview.md)
* [appendIdentityToUrl](../identity/id-sharing.md#cross-domain-sharing)
* [configure](configuring-the-sdk.md)

## Using configuration overrides {#using}

The `edgeConfigOverrides` command creates datastream overrides that are passed on to the [!DNL Edge Network] on the next command, or, in the case of `configure`, for every request.

### Sending configuration overrides via the `sendEvent` command {#send-event}

The example below shows what a configuration override could look like on a `sendEvent` command.

```js
alloy("sendEvent", {
  xdm: {
    /* ... */
  },
  edgeConfigOverrides: {
    com_adobe_experience_platform: {
      datasets: {
        event: {
          datasetId: "my-dataset-id"
        },
        profile: {
          datasetId: "www"
        }
      }
    },
    com_adobe_analytics: {
      reportSuites: ["my-report-suite"]
    },
    com_adobe_identity: {
      idSyncContainerId: "new-id-sync-container"
    },
    com_adobe_target: {
      propertyToken: "new-property-token"
    }
  }
});
```

### Sending configuration overrides via the `configure` command {#send-configure}

The example below shows what a configuration override could look like on a `configure` command.

```js
alloy("configure", {
  defaultConsent: "in",
  edgeDomain: "etc",
  edgeBasePath: "ee",
  edgeConfigId: "etc",
  orgId: "org",
  debugEnabled: true,
  edgeConfigOverrides: {
    "com_adobe_experience_platform": {
      "datasets": {
        "event": { 
          datasetId: "my-dataset-id"
        },
        "profile": { 
          datasetId: "www"
        }
      }
    },
    "com_adobe_analytics": {
      "reportSuites": [
        "my-report-suite"
      ]
    },
    "com_adobe_identity": {
      "idSyncContainerId": "new-id-sync-container"
    },
    "com_adobe_target": {
      "propertyToken": "new-property-token"
    }
  },
  onBeforeEventSend: function() { /* … */ });
};
```

The examples above generate an [!DNL Edge Network] payload that looks like this:

```json
{
  "meta": {
    "configOverrides": {
      "com_adobe_experience_platform": {
        "datasets": {
          "event": {
            "datasetId": "werewr"
          },
          "profile": {
            "datasetId": "www"
          }
        }
      },
      "com_adobe_analytics": {
        "reportSuites": [
          "sdfsfd"
        ]
      },
      "com_adobe_identity": {
        "idSyncContainerId": "rrr"
      },
      "com_adobe_target": {
        "propertyToken": "rrr"
      }
    },
    "state": {  }
  },
  "events": [  ],
  "query": {
    "identity": {
      "fetch": [
        "ECID"
      ]
    }
  }
}
```

When a configuration override is set with the `configure` command, the override is included on all supported commands. You can override globally-specified options through the `configuration` option on individual commands.

