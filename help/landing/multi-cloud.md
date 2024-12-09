---
solution: Experience Platform
title: Adobe Experience Platform multi-cloud overview
description: Learn what the differences are between running Experience Platform on Microsoft Azure and Amazon Web Services.
---

# Adobe Experience Platform multi-cloud overview

Adobe Experience Platform is available in two versions, running on different cloud platforms: [[!DNL Microsoft Azure]](https://azure.microsoft.com/en-us) and [[!DNL Amazon Web Services (AWS)]](https://aws.amazon.com/). This flexibility allows you to choose the best fit for your business and technical requirements.

This page provides a high-level overview of the two versions and includes guidance on how to choose the right version for your business.

## Available cloud regions {#available-cloud-regions}

Choosing the right cloud region is crucial for meeting data residency requirements and ensuring optimal performance. Below are the available cloud regions for each platform:

### Microsoft Azure regions {#azure-regions}

| Country | Region | Region Code | Location |
|---------|--------|-------------|----------|
| United States of America | East US | VA8 | Virginia |
| United States of America | East US 2 | VA7 | Virginia |
| United States of America | Central US | IA1 | Iowa |
| United States of America | South Central US | TX3 | Texas |
| United States of America | West US 2 | WA1 | Washington |
| United States of America | West US 3 | AZ1 | Phoenix, Arizona |
| United States of America | West Central US | WY1 | Cheyenne, Wyoming |
| United Kingdom | Europe - UK South | GBR9 | London |
| Switzerland | Europe - Switzerland North | CHE2 | Zurich |
| Ireland | Europe - North Europe | IRL3 | |
| Germany | Europe - German West Central | DEU6 | Frankfurt |
| France | Europe - France Central | FRA9 | Paris |
| Netherlands | Europe - West Europe | NDL2 | |
| Canada | Canada Central | CAN2 | Toronto |
| China | Hong Kong | HKG3 | Hong Kong |
| India | Central India | IND2 | Maharashtra |
| Brazil | Brazil South | BRA3 | São Paulo |
| Singapore | Southeast Asia | SGP5 | Singapore |
| Australia | Australia East | AUS5 | New South Wales |
| Australia | Australia Central | AUS8 | Canberra |
| Japan | Japan East | JPN4 | Saitama |
| South Africa | South Africa North | ZAF2 | Pretoria |
| UAE | UAE North | ARE1 | Dubai |
| Qatar | Qatar Central | QAT1 | Doha |

### Amazon Web Services (AWS) regions

| Country | Region | Region Code | Location |
|---------|--------|-------------|----------|
| Africa | AWS Africa (Cape Town) | ZAF3 | Cape Town |
| United States of America | US East | VA6 | Virginia |
| United States of America | US East | OH2 | Ohio |
| United States of America | US West | CA1 | North California |
| United States of America | US West | OR2 | Oregon |
| United Arab Emirates | Middle East | ARE | UAE |
| Canada | Canada | CAN5 | Montreal |
| Japan | Asia Pacific | JAP3 | Tokyo |
| Japan | Asia Pacific | JAP6 | Osaka |
| Hong Kong | Asia Pacific | HKG4 | Hong Kong |
| South Korea | Asia Pacific | KOR1 | Seoul |
| India | Asia Pacific | IND1 | Mumbai |
| Singapore | Asia Pacific | SGP3 | Singapore |
| Australia | Asia Pacific | AUS3 | Sydney |
| Germany | European Union | DEU1 | Frankfurt |
| Sweden | European Union | SWE1 | Stockholm |
| Ireland | European Union | IRL1 | Dublin |
| Great Britain | European Union | GBR11 | London |
| France | European Union | FRA8 | Paris |
| Italy | European Union | ITA1 | Milan |
| Brazil | South America | BRA2 | São Paulo |
| Bahrain | Middle East | BHR1 | Bahrain |

## Differences between Microsoft Azure and AWS versions

The table below highlights the major differences between the Microsoft Azure and AWS versions of Experience Platform.

| Feature / Functionality | Microsoft Azure | Amazon Web Services |
| --- | --- | --- |
| HIPAA compliance | Supported | Not supported |
| Integration with Microsoft services | Seamless | Limited |
| Integration with Amazon services | Limited | Seamless |

## Which cloud is right for me?

Choosing between Experience Platform on Azure or AWS depends on several factors specific to your business:

* **Business and technical needs**: Assess your organization's requirements and long-term cloud strategy.
* **Existing infrastructure**: Consider your current cloud infrastructure and integration needs.
* **Cloud technology reliance**: If your business relies heavily on Microsoft technologies, Azure might be the better fit. If you rely more on Amazon services, AWS could be the better option.
* **Data residency considerations**: Evaluate the data residency requirements for your organization and ensure the chosen cloud platform offers regions that comply with these regulations.

## Feature parity {#feature-parity}

We are committed to offering feature parity across both cloud platforms, for all applications running on Experience Platform, such as:

* [Real-Time Customer Data Platform](../rtcdp/home.md)
* [Adobe Journey Optimizer](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/ajo-home)
* [Customer Journey Analytics](https://experienceleague.adobe.com/en/docs/analytics-platform/using/cja-landing)

However, some functionalities may differ between the Azure and AWS versions. These differences are outlined in the product documentation, where applicable.

## Conclusion {#conclusion}

Experience Platform provides flexibility and choice by offering versions on both Microsoft Azure and Amazon Web Services. Evaluate your business needs and existing infrastructure to make an informed decision on which cloud platform to use.
