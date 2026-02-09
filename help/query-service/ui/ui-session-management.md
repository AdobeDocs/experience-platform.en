---
title: Manage Query Service sessions in Adobe Experience Platform
description: Learn how administrators can view, monitor, and end active Query Service sessions to free idle capacity and maintain reliable Data Distiller workflows.
---
# Manage Query Service sessions

Use this guide to manage active Query Service sessions from the Adobe Experience Platform user interface. Session management helps administrators identify idle sessions, free shared capacity, and maintain reliable Data Distiller usage across sandboxes without disrupting active queries.

## Permissions required for session management {#permissions}

Session management is available only to organizations with Data Distiller entitlements.

To view and end sessions, you must:

- Belong to an IMS organization with Data Distiller access
- Have the **Manage Query Session** permission assigned

Users without the required permissions can access Query Service but cannot view or manage active sessions.

>[!IMPORTANT]
>
>This feature is intended for administrators. End users running queries cannot manage sessions.

## View active sessions {#view-active-sessions}

Administrators can view all active Query Service sessions across sandboxes in the IMS organization.

Navigate to the Query Service workspace and select the **Admin** tab to open session management.

![Admin tab showing Session Management table in Query Service workspace](../images/query-service/session-management-admin-tab.png)

The session management table updates in near real time and lists all sessions currently consuming Query Service capacity.

Each row represents a single session opened in the Query Editor.

## Session status and idle time {#session-status}

The session table provides information to help you decide whether a session can be safely ended.

Session details include:

- User identifier and username
- Sandbox name
- Session status
- Idle time
- Remaining session time

### Session status

Session status indicates whether a session can be ended:

- **Inactive** indicates the user is not actively running a query. These sessions can be ended.
- **Active** indicates a query is currently running. Ending the session is disabled while the query is in progress.

When a session becomes active, the **End session** control is unavailable until query execution completes.

### Idle time and remaining session time

Idle time shows how long a session has been open without user interaction.

Remaining session time indicates how long the session can stay open before it is automatically closed by the system. Sessions automatically expire after the maximum allowed duration (two hours of inactivity) to free capacity for other users.

## End idle sessions {#end-idle-sessions}

You can end idle sessions to free capacity for other users.

From the session management table, select **End session** for an inactive session.

![End session button selected for an inactive session in the Session Management table](../images/query-service/end-session-confirmation.png)

A confirmation dialog appears to prevent accidental termination. Confirm the action to end the session.

After the session ends:

- The session is removed from the table
- Capacity becomes available immediately
- The action is recorded for auditing

>[!NOTE]
>
>You cannot end sessions that are actively running queries. This safeguard prevents interruption of in-progress workloads and avoids duplicate compute usage.

## Session behavior after termination {#session-behavior-after-termination}

When a session is ended by an administrator, the affected user is not disconnected immediately.

If the user attempts to run a query after termination:

- The system detects the ended session
- The connection is re-established automatically
- Query editor content remains intact

![Query Editor showing reconnection message after session termination](../images/query-service/query-editor-reconnect-message.png)

This behavior ensures users do not lose work written in the editor and can continue once a new session is established.

## Audit logs for session management {#audit-logs}

Session management actions are logged to provide visibility and accountability.

Audit logs record:

- The session ID
- The user whose session was ended
- The administrator who performed the action
- The time of the action

Use audit logs to review session termination history and investigate unexpected disconnections.

For more information about viewing audit logs, see the [audit log documentation](PLACEHOLDER.md).

## Next steps {#next-steps}

- [Review Query Service capacity and usage trends in the Data Distiller license usage documentation](PLACEHOLDER.md)
- [Learn how users create and run queries in the Query Editor user guide](PLACEHOLDER.md)
- [Monitor scheduled workloads using the scheduled queries monitoring documentation](PLACEHOLDER.md)

