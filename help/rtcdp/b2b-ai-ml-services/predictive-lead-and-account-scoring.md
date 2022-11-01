---
title: Predictive lead and account scoring in Real-Time CDP B2B
type: Documentation
description: An overview and more information about the predictive lead and account scoring feature in Experience Platform CDP B2B.
exl-id: d3afbabb-005d-4537-831a-857c88043759
---
# Predictive lead and account scoring in Real-Time CDP B2B

B2B marketers face multiple challenges at the top of the marketing funnel. In order to be effective, B2B marketers need an automated way to qualify the large number of people so that they can focus on the high-value targets. The qualification should be aligned with the ultimate sales outcome, not just the marketing conversion.

Accounts, are the ultimate entities that purchase B2B products and services. In order to market and sell effectively, B2B marketers are required to know not only the individual’s, but also the account’s, likelihood to buy. 

Account based marketing, in particular, strategize accounts as the marketing targets. Account propensity-to-buy scores greatly help the B2B marketers to prioritize among the accounts to maximize their return on investment.

The predictive lead and account scoring service addresses the above challenges by learning from and predicting for the opportunity stage conversion events, and aggregating person activities onto the account level to produce the account scores. The scores are readily available as custom fields on person profiles and account profiles, and can be easily included as segment criteria to refine your audience. Top influential factors are also available at both the aggregate and the unit level to help B2B marketers better understand what elements drove the scores.

## Understanding predictive lead and account scoring {#how-it-works}

>[!NOTE]
>
>[!DNL Marketo] data source is currently required as it's the only data source that can provide the conversion events at the person profile level.

Predictive Lead and Account Scoring uses a tree-based (random forest/gradient boosting) machine learning method to build the predictive lead scoring model.

Administrators have the ability to configure multiple profile scoring goals, also referred to as models, one for each configured conversion event, allowing for separate scores to be generated for each configured goal. 

Predictive lead and account scoring supports the following conversion goal types and fields:

| Goal type | Fields |
| --- | --- |
| `leadOperation.convertLead` | <ul><li>`leadOperation.convertLead.convertedStatus`</li><li>`leadOperation.convertLead.assignTo`</li></ul> |
| `opportunityEvent.opportunityUpdated` | <ul><li>`opportunityEvent.dataValueChanges.attributeName`</li><li>`opportunityEvent.dataValueChanges.newValue`</li><li>`opportunityEvent.dataValueChanges.oldValue`</li>Example: `opportunityEvent.dataValueChanges.attributeName` equals `Stage` and `opportunityEvent.dataValueChanges.newValue` equals `Contract`</ul> |

The algorithm takes the following attributes and input data into consideration:

* Person profile

| XDM field | Required/ Optional |
| --- | --- |
| `personComponents.sourceAccountKey.sourceKey` | Required |
| `workAddress.country` | Optional |
| `extSourceSystemAudit.createdDate` | Required |
| `extendedWorkDetails.jobTitle` | Optional |

>[!NOTE]
> 
>The algorithm only inspects `sourceAccountKey.sourceKey` field in the Person:personComponents field group.

* Account profile

| XDM field | Required/ Optional |
| --- | --- |
| `accountKey.sourceKey` | Required |
| `extSourceSystemAudit.createdDate` | Required |
| `accountOrganization.industry` | Optional |
| `accountOrganization.numberOfEmployees` | Optional |
| `accountOrganization.annualRevenue.amount` | Optional |

* Experience Event

| XDM field | Required/ Optional |
| --- | --- |
| `_id` | Required |
| `personKey.sourceKey` | Required|
| `timestamp` | Required |
| `eventType` | Required |

Multiple models are supported, with the following hard limits set in place:

* Each production sandbox is entitled to five models.
* Each development sandbox is entitled to one model.

The data quality requirements are as follows:

* Ideally there is two year’s of most recent data for training purposes. 
* The minimum length of data required is six months plus prediction window. 
* For each prediction goal, at least 10 qualified conversion events are required.

Scoring jobs are run daily and the results are saved as profile attributes and account attributes, which can then be used in segment definitions and personalization. Out-of-the-box analytics insights are also available on the account overview dashboard.

See the documentation for more information about how to [manage predictive lead and account scoring](/help/rtcdp/b2b-ai-ml-services/manage-predictive-lead-and-account-scoring.md) service.

## View predictive lead and account scoring results {#how-to-view}

After the job run, the results are saved in a new system dataset for each model under the name `LeadsAI.Scores` - ***the score name***. Each score field group can be located at `{CUSTOM_FIELD_GROUP}.LeadsAI.the_score_name`.

| Attribute | Description |
| --- | --- |
|Score | The relative likelihood for a profile to achieve the predicted goal within the defined time frame. This value is not to be treated as a probability percentage but rather the likelihood of a profile compared to the overall population. This score ranges from 0 to 100. |
| Percentile | This value provides information regarding the performance of a profile relative to other similarly scored profiles. Percentiles range from 1 to 100. |
| Model type | The selected model type, indicates whether this is a person or account score. |
|Score date | The date on which scoring occurred. |
|Influential factors | Predicted reasons on why a profile is likely to convert. Factors are comprised of the following attributes:<ul><li>Code: The profile or behavioral attribute which positively influences a profile’s predicted score.</li><li>Value: The value of the profile or behavioral attribute.</li><li>Importance: Indicates the weight that the profile or behavioral attribute has on the predicted score (low, medium, high).</li></ul> |

### View customer profile scores

To view the predictive scores for a person profile, select **[!UICONTROL Profiles]** under the customer section in the left panel, and then enter the identity namespace and identity value. Once finished, select **[!UICONTROL View]**.

Next, select the profile from the list.

![Customer profile](/help/rtcdp/accounts/images/b2b-view-customer-profile.png)

The **[!UICONTROL Detail]** page now includes the predictive scores. Click the chart icon next to the predictive score.

![Customer profile predictive score](/help/rtcdp/accounts/images/b2b-view-customer-profile-predictive-score.png)

A popup dialog shows the score, the overall score distribution, the top influential factors for this score, and the score goal definition.

![Customer profile predictive score details](/help/rtcdp/accounts/images/b2b-view-customer-profile-predictive-score-details.png)

## Monitoring predictive lead and account scoring jobs {#monitoring-jobs}

You can monitor basic metrics and daily job-run status through the dashboard. The metrics include:

* Total person/account profiles scored 
* Next scoring job (date)
* Next training job (date)

For more information, see the documentation on [monitoring jobs for predictive lead and account scoring](/help/dataflows/ui/b2b/monitor-profile-enrichment.md).
