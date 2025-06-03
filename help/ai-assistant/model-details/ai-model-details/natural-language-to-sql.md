---
title: AI Assistant Natural Language to SQL Model Details
description: Learn about the AI Assistant Natural Language to SQL AI model.
hide: true
hidefromtoc: true
exl-id: ca157945-5f74-45d0-9d40-c65d09a8e80d
---
# AI Assistant Operational Insights Natural Language to SQL Model Details

## Model overview {#model-overview}

* **Model name and version**: Adobe Experience Platform AI Assistant Operational Insights Natural Language to SQL Model ([!DNL NL2SQL]).
* **Model release date**: February 2025
* **Model purpose**: The model is designed to translate customers' natural language queries about operational insights into SQL queries. These SQL queries are executed over the Adobe Experience Platform knowledge graph, which contains metadata about the customers' Experience Platform entities—such as schemas, datasets, audiences, destinations, and journeys. The results of the SQL queries are then used to generate responses to the customers' original natural language questions.
* **Intended users**: The primary users of this model are marketing professionals, data analysts, or customer journey managers—who seeks to understand and act on operational insights within Experience Platform using natural language. They may not be experts in SQL or data engineering but need quick, accurate answers about their Experience Platform entities to make informed decisions and optimize customer experiences.
* **Use cases**: This model helps users access metadata about their Experience Platform entities such as audiences, journeys, schemas, attributes, datasets, and destinations. Users can ask questions in natural language—like which audiences are activated or which audiences are using a specific schema—and the model translates these into SQL queries over the Experience Platform knowledge graph. This enables users to quickly gain operational visibility and make informed decisions without needing to manually explore or query the system.
* **Pain points**: This model addresses key pain points faced by business users and analysts working with Experience Platform, such as the complexity of navigating large volumes of interconnected metadata, the need to manually write SQL queries to retrieve operational insights, and the lack of visibility into how Experience Platform entities like audiences, datasets, and journeys are connected or performing. By enabling natural language access to metadata and automating SQL generation, the model reduces reliance on technical resources, shortens insight discovery time, and empowers users to make faster, data-driven decisions.

## Model details {#model-details}

* **Model type**: LLM Prompt with Dynamic In-Context Learning
* **Input**: User natural language queries.
* **Output**: The model outputs SQL queries in [!DNL Snowflake] syntax, which will be executed over Experience Platform knowledge graph.

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

## Model evaluation {#model-evaluation}

* **Evaluation metrics and procedures**: The model is evaluated using accuracy. For example, out of all [!DNL NL2SQL] requests, how many of the requests yield the correct SQL results. The evaluation process is a combination of rule-based matching (SQL standardization and then direct SQL string matching), LLM-based SQL solver, and human evaluation.
* **Evaluation data and preprocessing**: We use open set(s) for regression test and we also have weekly annotation projects to monitor the performance of the model through sampled real customer traffic.

## Model deployment {#model-deployment}

* **Model monitoring**: The base model is hosted by [!DNL Azure].
* **Model update**: The model is updated regularly, on a weekly basis, through question bank expansion. The model is also updated through new prompting strategies and instructions when needed.

## Fairness and bias {#fairness-and-bias}

* **Model fairness**: To ensure the model interprets and generates queries consistently across different user intents and linguistic variations without introducing bias or reinforcing stereotypes, Adobe uses prompt auditing, explainability, and safeguards against generating biased or unethical output.
* **Data biases**: The model output is impacted by the In-Context Learning examples, and what the retriever selects into the prompt. The question bank examples contain examples considered representative from Product Management's perspective. Depending on the use case, customers should consider how potential biases in model outputs may align with or impact their intended application.

## Ethical considerations {#ethical-considerations}

**Ethical considerations associated with the model**: To avoid exposing PII or sensitive attributes, the model has been designed to avoid reinforcing existing data biases, and respect access control boundaries. This includes filtering, tagging, and auditing schema fields for responsible usage.
