---
keywords: Experience Platform;home;popular topics;decision events;decision event;Decision events
solution: Experience Platform
title: Experience Decisioning domain model
topic: overview
description: In this section, the components of Decisioning Service are explained and the ways in which those components interact are detailed. The concepts and their relationships form the *Domain* of the decisioning problem. These fundamental components come into play regardless of how you use Decisioning Service].
---

# Experience [!DNL Decisioning] domain model

In this section, the components of [!DNL Decisioning Service] are explained and the ways in which those components interact are detailed. The concepts and their relationships form the *Domain* of the decisioning problem. These fundamental components come into play regardless of how you use [!DNL Decisioning Service].

## Decision Options

An experience *decision option* is a potential experience that can be presented to a specific customer. An option is also referred to as a choice or alternative. When deciding on the next best option for a customer, [!DNL Decisioning Service] considers options ***d<sub>1</sub>*** to ***d<sub>N</sub>*** from amongst a finite set of options **`D`**.

Decisions are made by identifying the best option amongst a set of available options. One approach is to successively eliminate *decision options* ***d<sub>i</sub>*** from the set ***D*** until either only one is left and then pick a "winner" randomly from the remaining set. Another form of decision making is to rank the remaining (eligible) decision options according to their expected outcome.

### Finite set of Decision Options

In the Experience Decisioning domain, the options from which one or more are selected exist a priori and computing a decision does not create new options on the fly. We say the domain of options is finite at the time the decisions are made. This might seem like a limitation, but a finite set of options gives rise to the possibility of using machine learning algorithms and similar techniques to decide which of the options is “the best one”. Many learning algorithms would not be able to produce a best option amongst a set of infinite alternatives that cannot be compared to each other and for which no sample data exists.

## Decision Outcomes

It is important to differentiate between the output of the decision `d` and the outcome `o`, i.e. the intended results that were stipulated by the decision. A decision often cannot produce an outcome directly. The decision is only selecting (or proposing) the option with the best expected outcome. Between propositions and outcomes many events and interactions occur, often delayed by days or weeks. In more formal terms the outcome is a function of the decision `o = f(d)`.

To find the optimal decision each outcome is assigned a ***utility value*** `U(o) = U(f(d))`.
For the Offer Decisioning use case, that function would calculate the cost to fulfill the offer, and the value gained by the business when the offer is accepted by the customer. The result would be used to find the optimal decision (offer) by maximizing the utility value over all options (offers).

It is generally not possible to predict with certainty what the outcome of a particular decision will be and so a probabilistic approach is necessary. The ***utility value*** `U(o)` becomes the ***expected utility value of a decision option*** `EU(d)`

## Decision Propositions

A *decision proposition* is a selection of decision option that was made in response to an actual decision request. As stated above, the outcomes of a decision may occur much later and the outcomes may not be achieved in one step either. It is therefore important to track the propositions through a various *experience events* so they can be attributed back to the decision options. This feedback loop is used to improve the prediction accuracy for `EU(d)`.

A proposition is persisted as an entity and so has an identifier. The entity holds  references to the selected options, and can record context data that was used in making the decision. Having an identifier also allows other entities to reference it. One such entity is *decision event*. It holds the timestamp, marking when its decision (proposition) was made. A decision event is a recorded occurrence of the action of executing the decision. Other events that reference the proposition entity are experience events. Every experience event can be extended to reference a decision proposition. The interpretation of doing so is that the experience event can be fully or partially attributed to the decision's proposition.

## Decision Strategy - Algorithm

With a finite set of alternatives to choose from, each *decision strategy* is essentially an algorithm - or a function - that takes **`N`** decision options *{d<sub>1</sub>, d<sub>2</sub>, …d<sub>N</sub>}* as input and produces a ranked list of decision options *(d<sub>r1</sub>, d<sub>r2</sub>,…d<sub>rk</sub>)* whereby the first decision option in the list is considered optimal according to an expected utility, the second option in the result list is then considered the second best option and so forth. Typically, the set will have a higher cardinality than the resulting ranked list as the decision algorithm eliminates options that are not eligible and an algorithm may be configured to only return the top **`K`** options, stopping after it finds enough options.
The general decision framework is shown in the following diagram.

![Fig 1](./images/decisioning-optimization.png)

## Decision Activities

*Decision activities* configure the algorithm and supply parameters for a specific decision strategy. The strategy parameters include the constraints applied to the options and the ranking function. All decisions are made in the context of an activity. [!DNL Decisioning Service] hosts many activities, and activities can be reused across channels. At any given time, the best option is evaluated based on the most current set of constraints, rules, and models.  

A decision activity defines the collection of the decision options to be considered. It filters out the subset of all options that are of interest in this activity. This allows the [!DNL Decisioning service] to manage topical categories within the catalog of all options.

A decision activity specifies a *fallback option* should the combined constraints disqualify all other options. That means that there is always an answer to the question: What is currently the "best" option?

Decision activities can specify the place into which the experience is delivered. This reduces further the number of decision options that can be considered and is another constraint imposed by the decision activity. This is called the *placement constraint*. Only those decision options that have content meeting this placement constraint will be considered. This is evaluated in the early stages of the decision strategy. When definitions change the placement constraints of each decision activity are reevaluated and the decision option may come into or fall out of consideration for one or more decision activity.

## Decision Context

So far, only the business *logic* that affects the decision was described. But even more impactful for the output is the input *data* of the decision. This data is called the *decision context* and is different for each user and each time a decision is made - as opposed to constraints, rules and models which are the same for different users for the same activity. The rules, constraints and models also change less frequently. For real-time decisioning, the decision context will need to be determined in real-time as well. 

Decision context data can be divided into user profile related data, business data and internally collected data. 

- *Profile entities* are used to represent end-user data, but not every profile entity represents an individual. It could be a household, a social group, or any other subject. Experience events are time-series data records attached to a profile. If there is an experience, then this data is the *subject* of this experience. 
- On the other side, there are the  *business entities*. They can be thought of as the *objects* of the interactions. Those entities are often referenced in the experience events of profile entities. Examples of business entities are web sites and pages, stores, product details, digital content, product inventory data and so forth.
- The last category of data in the decision context is data that was created during operation of the [!DNL Decisioning Service]. Every decision event falls into that category, together with the responses from customers the proposition data forms an internal data set called the *proposition-response history*.

There are three paths the data can take to become part of the decision context. Record and time series data can be uploaded via dataset files. This path is mainly for bulk synchronization with external systems. Record and time series data can also be streamed into [!DNL Platform] where the data is indexed and joined to form entities. Via the third path, context data can be passed as parameters to the decision request. This form of data is ephemeral in nature and is only relevant for the decision requested. It is not persisted as an entity and is not available for other requests.
