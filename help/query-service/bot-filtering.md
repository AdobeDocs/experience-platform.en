---
title: Bot Filtering in Query Service with Machine Learning
description: This document provides an overview of how to use Query Service and machine learning to determine bot activity and filter their actions from genuine online website visitor traffic.
---
# Bot Filtering in [!DNL Query Service] with Machine Learning

Bot activity can impact analytics metrics and damage data integrity. Adobe Experience Platform Query Service can be used to maintain your data quality through the process of bot filtering. 

Bot filtering allows you to maintain your data quality by broadly removing data contamination that results from non-human interaction with your website. This process is achieved through the combination of machine learning and SQL queries.

Bot activity can be identified in a number of ways. The approach taken in this document focuses on the number of actions taken by a user in a given period of time. Initially an SQL query sets a ratio of actions over time to qualify the presence of bot activity. The ratio that qualifies these actions as bot activity is then refined dynamically using a machine learning model to improve the accuracy of these thresholds.

This document provides an overview and detailed examples of the SQL bot filtering queries and the machine learning models required for you to set up the process in your environment.    

## Prerequsites

As part of this process requires you to train a machine learning model, this document assumes a working knowledge of one or more machine learning environments. 

This example uses [!DNL Jupiter Notebook] as a development environment. Although there are many options available, [!DNL Jupiter Notebook] is recommended because it is an open source web application that has low computational requirements. It can be [downloaded from the official site](https://jupyter.org/). 

## Use [!DNL Query Service] to define a threshold for bot activity

The two main attributes used to extract data for bot detection are:

* Marketing Cloud ID (MCID): This provides a universal, persistent ID that identifies your visitors across all the solutions in the online platform.
* Timestamp: This provides the time and date in UTC format when an an activity occurred on the website.  

The following SQL statement provides a simple example to identify bot activity. The statement assumes that if a visitor performs 50 clicks within one minute, then the user is a bot.

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

The expression filters the MCIDs of all visitors that meet the threshold but does not address spikes in traffic from other intervals. 

## Improve bot detection with machine learning

The initial SQL statement must be refined to allow for a variety of different intervals and ensure that the established thresholds are suitable to determine bot traffic with high accuracies.

The example statement is expanded to include one minute, five minutes, and 30 minutes periods with click counts of 60, 300 and 1800 respectively.

```sql
SELECT table1.mcid AS id, 
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
          GROUP  BY mcid) AS table1 
           LEFT JOIN (SELECT mcid, 
                             Max(count_5_mins) AS count_5_mins 
                      FROM   (SELECT enduserids._experience.mcid.id AS mcid, 
                                     Count(*)                       AS 
                                     count_5_mins 
                              FROM 
           <YOUR_TABLE_NAME> 
                              GROUP  BY Unix_timestamp(timestamp) / 300, 
                                        enduserids._experience.mcid.id) 
                      GROUP  BY mcid) AS table2 
                  ON table1.mcid = table2.mcid ) 
         LEFT JOIN (SELECT mcid, 
                           Max(count_30_mins) AS count_30_mins 
                    FROM   (SELECT enduserids._experience.mcid.id AS mcid, 
                                   Count(*)                       AS 
                                   count_30_mins 
                            FROM 
         <YOUR_TABLE_NAME> 
                            GROUP  BY Unix_timestamp(timestamp) / 1800, 
                                      enduserids._experience.mcid.id) 
                    GROUP  BY mcid) AS table3 
                ON table1.mcid = table3.mcid ) 
```

<!-- Q) Can we rename table1, table2, and table3 to be more descriptive? -->

The result of this expression might look similar to the table provided below.

| `id` | `count_1_min`  | `count_5_min` | `count_30_min` |
|---|---|---|---|
| 4833075303848917832 | 1 | 1  | 1  |
| 1469109497068938520  | 1  | 1  |  1 |
| 5045682519445554093 | 1  | 1 | 1  |
| 7148203816406620066 |   |   |   |
| 1013065429311352386 |   |   |   |
| 3077475871984695013 |   |   |   |
| 4151486040344674930 |   |   |   |
| 6563366098591762751 |   |   |   |
| 2403566105776993627 |   |   |   |
| 5710530640819698543 |   |   |   |
| 3675089655839425960 |   |   |   |
| 9091930660723241307 |   |   |   |

The results of using a variety of different intervals, a machine learning model can  

## Identify bot activity within your data

Marketing Cloud ID (MCID) 

