---
title: Inline Templates
description: 
---
# Inline templates

Inline templates are great if you want to reuse multiple conditions in numerous queries. You can save these criteria in a template and then reuse them in multiple queries. This reduces effort and reduces the risk of errors.

Inline templates are indicated in your statements through the use of the hash (#) followed by the template name.

Inline templates allows your queries to be parameterized. Query Service replaces the template name starting from the hash tag with the statement saved as a template in that name.





Templates can be used to store one, or multiple conditions, and need not be a complete query by themselves. If your template contains a valid query, you can execute the query simply by calling the template name preceded with a hash tag. For example `#YOUR_TEMPLATE_NAME;` would execute the valid query contain inside the template. 




Once a query is saved it is known as a template. When the template uses another template in-line, it is called a nested template. Query templates can call any number of other inline templates. There is no restriction on the number of inline templates you can invoke from a single query. Templates can also be nested within other inline templates. 

The following SQL demonstrates an example of a pramaterized query. 

```sql
SELECT * FROM #databaseName.#tableName WHERE #template5;
```

and the following templates are called to complete the query.

```sql
databaseName = 'acmeProfiles2023'
tableName = 'loyaltyMembers'
template5 = 'city: #cityName;'
cityName = 'Reykjavík'
```

In this scenario, there would be statements saved as query templates for `databaseName`, `tableName`, `template5`, and `cityName`.

## Update parameterized templates

You can replace parameterized templates through either the UI, or the API.

**Request**

```sql
SELECT * FROM csv1000 ROWS WHERE id = '1000' AND firstname = 'elin' AND lastname = 'holder' AND gender = 'male' AND email = 'abc1000@gmail.com' AND city = 'surprise' AND country = 'usa' AND postalcode = '14579' limit 5;
```

* `your_test_template_01`: `email = '$email' AND #your_test_template_02`
* `your_test_template_02`:`street = '$street' AND email = '$email' AND #your_test_template_03 AND #your_test_template_03` 
* `your_test_template_03`: `$fieldName = '$fieldValue`


### Update parameters through the UI

<!-- Description -->

### Update parameters through the API

Changes to query templates can be made using a PUT request to the query templates endpoint. Complete instructions on how to do this can be found in the [query templates endpoint guide](../api/query-templates.md#update-a-specified-query-template) and the [accelerated queries endpoint guide](../api/accelerated-queries#run-accelerated-query). 

If a template uses multiple parameterized values then these must be provided in an array of values. Paramateterized queries that do not have any other nested information can be provided in flat JSON.


If parameter in the query and the parameter in the template may have the same name, you must distinguish between the two.

If you do not prove a value of parameter inside a nested template, the value is taken from its parent template.

<!--  We could provide them in this in a flat JSON, but if it is using templates we need to provide it in a nested just because parameter in a query and parameter in the in the template right?
They may have same name, so we need to  right?


It's where it's parent or it's it's parents, wherever it in the higher in the up in the hierarchy it will get the parameter reduced from there, otherwise it will use what is provided and it's own element OK. -->



You can use the CLI to use parameterized queries. but you must use the PREPARE statement and include the (query ?) in JSON format in within the command.  
You can check the parameters and templates but entering the SHOW TEMPLATES command. 




You can escape characters inside template names that include spaces / single quote marks / backslashes by putting them inside single quote marks and escaping them with a backslash 

Best practice is to avoid using spaces, single quote, and backslash in template names 
 

>[!NOTE]
>
>There is no limit in the size of queries that can be stored as templates.

