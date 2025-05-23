---
title: AI Assistant Natural Language to SQL Model Card
description: Learn about the AI Assistant Natural Language to SQL AI model.
hide: true
hidefromtoc: true
exl-id: ca157945-5f74-45d0-9d40-c65d09a8e80d
---
# AI Assistant Operational Insights Natural Language to SQL Model Card

## Model overview {#model-overview}

* The official name of the model is AI Assistant Operational Insights Natural Language to SQL Model ([!DNL NL2SQL]) and was released in its latest GA version in February 2025.
* The model is designed to translate customers' natural language queries about operational insights into SQL queries. These SQL queries are executed over the Adobe Experience Platform knowledge graph, which contains metadata about the customers' Experience Platform entities—such as schemas, datasets, audiences, destinations, and journeys. The results of the SQL queries are then used to generate responses to the customers' original natural language questions.
* The primary users of this model are marketing professionals, data analysts, or customer journey managers—who seeks to understand and act on operational insights within Experience Platform using natural language. They may not be experts in SQL or data engineering but need quick, accurate answers about their Experience Platform entities to make informed decisions and optimize customer experiences.
* This model is part of the AI Assistant for Operational Insights, where it helps users access metadata about their Experience Platform entities such as audiences, journeys, schemas, attributes, datasets, and destinations. Users can ask questions in natural language—like which audiences are activated or which audiences are using a specific schema—and the model translates these into SQL queries over the Experience Platform knowledge graph. This enables users to quickly gain operational visibility and make informed decisions without needing to manually explore or query the system.
* This model addresses key pain points faced by business users and analysts working with Experience Platform, such as the complexity of navigating large volumes of interconnected metadata, the need to manually write SQL queries to retrieve operational insights, and the lack of visibility into how Experience Platform entities like audiences, datasets, and journeys are connected or performing. By enabling natural language access to metadata and automating SQL generation, the model reduces reliance on technical resources, shortens insight discovery time, and empowers users to make faster, data-driven decisions.
* The model should not be used to access or infer Personally Identifiable Information (PII), such as customer names, email addresses, or phone numbers, even if such data exists in the platform. 
* Additionally, it should not be relied upon for compliance or governance checks, such as validating data retention policies, access control rules, or consent status. These tasks require specialized systems and strategies. 

## Model details {#model-details}

* The model type is LLM Prompt with Dynamic In-Context Learning.
* The model input are user natural language queries.
* The model outputs SQL queries in [!DNL Snowflake] syntax, which are executed over Experience Platform Knowledge Graph.

**Example input**

```console
How many datasets were created within the last 10 days?
```

**Example output**

```SQL
SELECT
    COUNT(*) AS datasetCount 
FROM hkg_dim_dataset 
WHERE
    createdTime >= DATEADD(day, -10, CURRENT_DATE);
```

## Model training {#model-training}

* [!DNL NL2SQL] used [!DNL OpenAI] GPT-based models for in-context learning.
* The [!DNL NL2SQL] question bank contains 428 queries from the [!DNL Operational Insights] team and 524 from external teams for alpha use cases.

## Model evaluation {#model-evaluation}

* The model is evaluated using accuracy. For exmaple, out of all [!DNL NL2SQL] requests, how many of the requests yield the correct SQL results. 
* The evaluation process is a combination of rule-based matching (SQL standardization and then direct SQL string matching), LLM-based SQL solver, and human evaluation
* Open sets are used for regression testing, and weekly annotation projects monitor the performance of the model through sampled real customer traffic.
* In terms of adversarial evaluation, there  is a separate in-scope and out-of-scope model which works as a guardrail for [!DNL NL2SQL].

## Model deployment {#model-deployment}

* The LLM model is a GPT-based model hosted by [!DNL Azure OpenAI] APIs.
* The base model is hosted by [!DNL Azure].
* The model is updated regularly, on a weekly basis, through question bank expansion. The mode lis also updated through new prompting strategies and instructions when needed.

## Explainability {#explainability}

The model uses a separate explanation model for SQL.

## Fairness and bias {#fairness-and-bias}

* To ensure the model interprets and generates queries consistently across different user intents and linguistic variations without introducing bias or reinforcing stereotypes, Adobe uses prompt auditing, explainability, and safeguards against generating biased or unethical output.
* The model output is impacted by the In-Context Learning examples, and what the retriever selects into the prompt. The question bank examples contain examples considered representative from PM's perspective, and also we are expanding the question banks based on real customer traffic.

## Robustness {#robustness}

Since most of the queries it receives are not covered in the question bank, the production traffic accuracy reflects the robustness of the model. 

## Privacy and security considerations {#privacy-and-security-considerations}

The model does not process or retain any personally identifiable information (PII), and those information are masked out for SQL generation. For attribute-based access control permission checking, the generated SQL will further be processed by the Experience Platform Knowledge Graph team to ensure governance quality. 

## Ethical considerations {#ethical-considerations}

To avoid exposing PII or sensitive attributes, the model has been designed to support privacy, avoid reinforcing existing data biases, and respect access control boundaries. This includes filtering, tagging, and auditing schema fields for responsible usage.
