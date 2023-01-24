---
title: Bot Filtering in Query Service with Machine Learning
description: This document provides an overview of how to use Query Service and machine learning to determine bot activity and filter their actions from genuine online website visitor traffic.
exl-id: fc9dbc5c-874a-41a9-9b60-c926f3fd6e76
---
# Bot filtering in [!DNL Query Service] with machine learning

Bot activity can impact analytics metrics and damage data integrity. Adobe Experience Platform [!DNL Query Service] can be used to maintain your data quality through the process of bot filtering. 

Bot filtering allows you to maintain your data quality by broadly removing data contamination that results from non-human interaction with your website. This process is achieved through the combination of SQL queries and machine learning.

Bot activity can be identified in a number of ways. The approach taken in this document focuses on activity spikes, in this case, the number of actions taken by a user in a given period of time. Initially, an SQL query arbitrarily sets a threshold for the number of actions taken over a period of time to qualify as bot activity. This threshold is then refined dynamically using a machine learning model to improve the accuracy of these ratios.

This document provides an overview and detailed examples of the SQL bot filtering queries and the machine learning models necessary for you to set up the process in your environment.    

## Getting started

As part of this process requires you to train a machine learning model, this document assumes a working knowledge of one or more machine learning environments. 

This example uses [!DNL Jupyter Notebook] as a development environment. Although there are many options available, [!DNL Jupyter Notebook] is recommended because it is an open-source web application that has low computational requirements. It can be [downloaded from the official site](https://jupyter.org/). 

## Use [!DNL Query Service] to define a threshold for bot activity

The two attributes used to extract data for bot detection are:

* Experience Cloud Visitor ID (ECID, also known as MCID): This provides a universal, persistent ID that identifies your visitors across all Adobe solutions.
* Timestamp: This provides the time and date in UTC format when an activity occurred on the website.  

>[!NOTE]
>
>The use of `mcid` is still found in namespace references to the Experience Cloud Visitor ID as seen in the example below.

The following SQL statement provides an initial example to identify bot activity. The statement assumes that if a visitor performs 50 clicks within one minute, then the user is a bot.

```sql
SELECT * 
FROM   <YOUR_TABLE_NAME> 
WHERE  enduserids._experience.mcid NOT IN (SELECT enduserids._experience.mcid 
                                           FROM   <YOUR_TABLE_NAME> 
                                           GROUP  BY Unix_timestamp(timestamp) / 
                                                     60, 
                                                     enduserids._experience.mcid 
                                           HAVING Count(*) > 50);  
```

The expression filters the ECIDs (`mcid`) of all visitors that meet the threshold but does not address spikes in traffic from other intervals. 

## Improve bot detection with machine learning

The initial SQL statement can be refined to become a feature extraction query for machine learning. The improved query should produce more features for a variety of intervals for training machine learning models with high accuracies.  

The example statement is expanded from one minute with up to 60 clicks, to include five minute and 30 minutes periods with click counts of 300, and 1800 respectively.

The example statement collects the maximum number of clicks for each ECID (`mcid`) over the various durations. The initial statement has been expanded to include one minute (60 seconds), 5 minutes (300 seconds), and one hour (i.e. 1800 seconds) periods.

```sql
SELECT table_count_1_min.mcid AS id, 
       count_1_min, 
       count_5_mins, 
       count_30_mins 
FROM   ( ( (SELECT mcid, 
                 Max(count_1_min) AS count_1_min 
          FROM   (SELECT enduserids._experience.mcid.id AS mcid, 
                         Count(*)                       AS count_1_min 
                  FROM 
       <YOUR_TABLE_NAME> 
                  GROUP  BY Unix_timestamp(timestamp) / 60, 
                            enduserids._experience.mcid.id) 
          GROUP BY mcid) AS table_count_1_min 
           LEFT JOIN (SELECT mcid, 
                             Max(count_5_mins) AS count_5_mins 
                      FROM   (SELECT enduserids._experience.mcid.id AS mcid, 
                                     Count(*)                       AS 
                                     count_5_mins 
                              FROM 
           <YOUR_TABLE_NAME> 
                              GROUP  BY Unix_timestamp(timestamp) / 300, 
                                        enduserids._experience.mcid.id) 
                      GROUP  BY mcid) AS table_count_5_mins 
                  ON table_count_1_min.mcid = table_count_5_mins.mcid ) 
         LEFT JOIN (SELECT mcid, 
                           Max(count_30_mins) AS count_30_mins 
                    FROM   (SELECT enduserids._experience.mcid.id AS mcid, 
                                   Count(*)                       AS 
                                   count_30_mins 
                            FROM 
         <YOUR_TABLE_NAME> 
                            GROUP  BY Unix_timestamp(timestamp) / 1800, 
                                      enduserids._experience.mcid.id) 
                    GROUP  BY mcid) AS table_count_30_mins 
                ON table_count_1_min.mcid = table_count_30_mins.mcid ) 
```

The result of this expression might look similar to the table provided below.

| `id` | `count_1_min`  | `count_5_min` | `count_30_min` |
|---|---|---|---|
| 4833075303848917832 | 1 | 1  | 1 |
| 1469109497068938520 | 1  | 1 | 1 |
| 5045682519445554093 | 1  | 1 | 1 |
| 7148203816406620066 | 3  | 3 | 3 |
| 1013065429311352386 |  1 | 1 | 1 |
| 3077475871984695013 |  7 | 7 | 7 |
| 4151486040344674930 |  2 | 2 | 2 |
| 6563366098591762751 |  6 | 6 | 6 |
| 2403566105776993627 |  4 | 4 | 4 |
| 5710530640819698543 | 1  | 1 | 1 |
| 3675089655839425960 | 1  | 1 | 1 |
| 9091930660723241307 | 1  | 1 | 1 |

## Identify new spike thresholds using machine learning

Next, export the resulting query dataset into CSV format and then import it into [!DNL Jupyter Notebook]. From that environment, you can train a machine learning model using current machine learning libraries. See the troubleshooting guide for more details on [how to export data from [!DNL Query Service] in CSV format](../troubleshooting-guide.md#export-csv)

The ad hoc spike thresholds initially established are not data-driven and therefore lack accuracy. Machine Learning models can be used to train parameters as thresholds. As a result, you can increase the query efficiency by reducing the number of `GROUP BY` keywords by removing unneeded features.

This example uses the Scikit-Learn machine learning library which is installed by default with [!DNL Jupyter Notebook]. The "pandas" python library is also imported for use here. The following commands are input into [!DNL Jupyter Notebook].

```shell
import pandas as ps

df = pd_read.csv('data/bot.csv')
df = df[df['count_1-min'] > 1]
df['is_bot'] = 0
df.loc[df['count_1_min'] > 50,'is_bot'] = 1
df
```

Next, you must train a decision tree classifier on the dataset and observe the logic resulting from the model.

The "Matplotlib" library is used to visualize the decision tree classifier in the example below.

```shell
from sklearn.tree import DecisionTreeClassifier
from sklearn import tree
from matplotlib import pyplot as plt

X = df.iloc[:,:[1,3]]
y = df.iloc[:,-1]

clf = DecisionTreeClassifier(max_leaf_nodes=2, random_state=0)
clf.fit(X,y)

print("Model Accuracy: {:.5f}".format(clf.scre(X,y)))

tree.plot_tree(clf,feature_names=X.columns)
plt.show()
```

The values returned from [!DNL Jupyter Notebook] for this example are as follows.

```text
Model Accuracy: 0.99935
```

![Statistical output from [!DNL Jupyter Notebook] machine learning model.](../images/use-cases/jupiter-notebook-output.png)

The results for the model shown in the example above are over 99% accurate.

As the decision tree classifier can be trained using data from [!DNL Query Service] on a regular cadence using scheduled queries, you can ensure data integrity by filtering bot activity with a high degree of accuracy. By using the parameters derived from the machine learning model, the original queries can be updated with the highly accurate parameters created by the model.

The example model determined with a high degree of accuracy that any visitors with more than 130 interactions in five minutes are bots. This information can now be used to refine your bot filtering SQL queries.

## Next steps

By reading this document, you have a better understanding of how to use [!DNL Query Service] and machine learning to determine and filter bot activity. 

Other documents that demonstrate the benefits of [!DNL Query Service] to your organization's strategic business insights are the [abandoned browse use case](./abandoned-browse.md) example.
