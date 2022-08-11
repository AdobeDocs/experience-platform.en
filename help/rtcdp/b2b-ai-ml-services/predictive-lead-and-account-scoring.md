---
title: Predictive lead and account scoring in Real-time CDP B2B
type: Documentation
description: An overview and more information about the predictive lead and account scoring feature in Experience Platform CDP B2B.
---
# Predictive lead and account scoring in Real-time CDP B2B

## Overview {#overview}

Account-based marketing marketers require propensity scores at the account level so that they can focus on marketing to the top accounts or take different approaches with prospect accounts at different propensity levels. Marketers often face the dilemma of acquiring as many prospects as possible to increase their reach. The challenge with more prospects is the time and effort marketers expend going through each prospect manually to qualify the best prospects for their propensity to convert/ buy. 

An AI-driven approach would address this inaccurate, tedious and time-consuming process, as long as there is sufficient data in the system for the algorithm to learn and derive the propensity pattern, and use it to predict future outcomes. This requires no human instructions as it will learn the pattern from the data, and requires no manual recalibration as it self-adjusts as the data change.

Predictive lead and account scoring helps marketers to focus on high-value leads and account early in the process by replacing the manual processes with an automated computation job that produces relative predictive propensity scores for all prospects in the system. This feature eliminates the need for rule-based scoring rules which rely on human heuristics which require constant recalibration.

## Understanding predictive lead and account scoring {#how-it-works}

>[!NOTE]
>
> [!DNL Marketo] data source is currently required as it's the only data source that can provide the conversion events at the person/ profile level.

Administrators have the ability to configure multiple profile scoring goals, one for each configured success event, allowing for separate scores to be generated for each configured goal. Administrators can configure profile scoring goals with opportunity attributes: creation, status values, close win and so on. 

Predictive lead and account scoring supports the following conversion goal types and fields:

| Goal type | Fields |
| --- | --- |
| `leadOperation.convertLead` | <ul><li>`leadOperation.convertLead.convertedStatus`</li><li>`leadOperation.convertLead.assignTo`</li>Example: `leadOperation.convertLead.convertedStatus` equals `true`</ul> |
| `opportunityEvent.opportunityUpdated` | <ul><li>`opportunityEvent.dataValueChanges.attributeName`</li><li>`opportunityEvent.dataValueChanges.newValue`</li><li>`opportunityEvent.dataValueChanges.oldValue`</li>Example: `opportunityEvent.dataValueChanges.attributeName` equals `status` and `opportunityEvent.dataValueChanges.newValue` equals `Contract`</ul> |

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
> The algorithm currently only works with the person-account relationship from the Person:personComponents field group.

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

* One model for each goal.
* Each production sandbox is entitled to five models.
* Each development sandbox is entitled to one model.

Scores are run daily and saved as profile attributes and account attributes, which can then be used in segment definitions and personalization. Canned analytics insights are also available on the account overview dashboard.

See the documentation for more information about how to [manage a predictive lead and account score](/help/rtcdp/b2b-ai-ml-services/manage-predictive-lead-and-account-scoring.md).

## View predictive lead and account scoring output {#how-to-view}

After the job run, the results are saved in a new system dataset for each model under the name **LeadsAI Scores - *the score name***. Each score field group can be located at **custom field group>.LeadsAI.*the score name***.

The following data is output once a job has completed:

| XDM field | Required/ Optional |
| --- | --- |
| Attribute | Description |
|Score | The relative likelihood for a customer to achieve the predicted goal within the defined time frame. This value is not to be treated as a probability percentage but rather the likelihood of an individual compared to the overall population. This score ranges from 0 to 100. |
| Percentile | This value provides information regarding the performance of a profile relative to other similarly scored profiles. For example, a profile with a percentile rank of 99 for churn indicates that it is at a higher risk of churning compared to 99% of all other profiles that were scored. Percentiles range from 1 to 100. |
| Model type | The selected model type, indicates whether this is a person or account score. |
|Score date | The date on which scoring occurred. |
|Influential factors | Predicted reasons on why a profile is likely to convert. Factors are comprised of the following attributes:<ul><li>Code: The profile or behavioral attribute which positively influences a profile’s predicted score.</li><li>Value: The value of the profile or behavioral attribute.</li><li>Importance: Indicates the weight that the profile or behavioral attribute has on the predicted score (low, medium, high).</li></ul> |

### View customer profile scores

To view the customer predictive scores, select the **[!UICONTROL Profiles]** tab under the customer section in the left panel. Enter the identity namespace and identity value and select **[!UICONTROL View]**.

Select the profile from the list.

![Customer profile](/help/rtcdp/accounts/images/b2b-view-customer-profile.png)

You are taken to the **[!UICONTROL Detail]** tab for the profile. This tab contains customer profile details and predictive scores. Select the graph icon beside the predictive score.

![Customer profile predictive score](/help/rtcdp/accounts/images/b2b-view-customer-profile-predictive-score.png)

A score dialog box appears which shows a view of scores, the date the score was generated, events and conditions used to generate the score.

![Customer profile predictive score details](/help/rtcdp/accounts/images/b2b-view-customer-profile-predictive-score-details.png)

## Monitoring predictive lead and account scoring jobs {#monitoring-jobs}

You can monitor basic metrics and daily job-run status through the dashboard. The metrics include:

* Total person/account profiles scored 
* Next scoring job (date)
* Next training job (date)

See the documentation for more information about the [monitoring jobs for predictive lead and account scoring](/help/dataflows/ui/b2b/monitor-profile-enrichment.md).
