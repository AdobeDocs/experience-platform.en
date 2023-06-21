---
title: Inline Templates
description: Learn how to reuse multiple conditions in numerous queries with inline templates.
---
# Inline templates

Inline templates allow you to reuse multiple conditions in numerous queries. You can save criteria in a template and then reuse them in multiple queries. Reusable SQL templates reduce development efforts and also the risk of errors from copying long statements between queries. With inline templates, you can make changes in one location and have those changes reflect in any query that references this template. 

This document covers the use and limitations of inline templates within the Query Editor.

## Prerequisites

Inline templates are supported by both the UI and the Query Service API. Before continuing with this guide, read the documentation on how to [create a query template through the API](../api/query-templates.md#create-a-query-template) or with the [Query Editor](../ui/user-guide.md#query-authoring).

## Inline template syntax {#syntax}

Once a query is saved, it is known as a template. When the template references another template within the statement, it is called an inline template. Inline templates are indicated in your SQL by using the hash symbol (#) followed by the template name. An example of this syntax is `#YOUR_TEMPLATE_NAME`.

## Use case {#use-case}

The following SQL templates demonstrate the utility of inline templates, with an example to count the number of US customers from any region who spent more than the 'max revenue' and ordered before June 2023. The benefit of the inline template is that you can easily edit the child template (in this case the max revenue and order date) and not have to change the parent template. 

**Example**

```sql
#parent_template : SELECT count(*) FROM customer WHERE region=NA AND country=US AND revenue > #revenue_max
#revenue_max: SELECT max(revenue) FROM revenue_table WHERE order_date > '01-06-2023'
```

When executing the query, Query Service replaces the template name starting from the hash symbol with the named template's SQL statement.

>[!NOTE]
>
>Query templates can call any number of other inline templates. There is no restriction on the number of inline templates that you can invoke from a single query. Templates can also be nested within other inline templates.

You can use templates to store one or multiple conditions. They do not need to be a complete query by themselves. If your template contains a valid query, you can execute the query simply by calling the template name preceded with a hash symbol. For example, if you stored `SELECT * FROM JUNE_2023_LOYALTY_MEMBERS;` as a template  named `JUNE_2023_LOYALTY_MEMBERS`, the command  `#JUNE_2023_LOYALTY_MEMBERS;` would execute the valid query contained inside the template. 

>![NOTE]
>
>Within the Adobe Experience Platform UI, inline templates in the form of parameterized queries are only supported at the parent level. This means that parameterized queries only work when used in the original template. The child template must be a static template and cannot have dynamic parameters.

## Next steps

After reading this document, you now know how to reference other templates within your SQL, either in the Query Editor or through the Query Service API.  

Additionally, you should read the [anonymous block guide](./anonymous-block.md), which explains how to minimize development overheads by chaining one or more SQL statements that are executed in sequence.
