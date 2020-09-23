# Adobe Experience Platform Data Lake migration to Gen2

Adobe Experience Platform Platform is moving their customers to Gen2 Data Lake. This is a new generation of Data Lake which provides Platform customers benefits such as geo-region replication, finer role-based access controls (RBAC), and better scaling.

## Impact to customers

While Adobe is migrating the customer Data Lake form Gen1 to Gen 2, customers will be able to **read** from the Data Lake, but all capabilities that **write** into the Data Lake will be impacted. Below is a list of impacted capabilities:

- Sources: Data coming in form the sources and various data ingestion workflows will be delayed. The customers will see their data once the migration is complete.
- Query Service: Customers can perform queries but will not be able to write the output of the query into a dataset.
- Real-time Customer Profile: If data is streamed into profile store, there will be no latency observed. In other cases, the data would be available only after the migration. Profile exports won't be available during the migration.
- Data Science Workspace: Data Science Workspace capability will be impacted during the migration.
- Segmentation Service: Audiences derived from batch segmentation cannot be activated during the migration.
- Customer Journey Analytics: Customer Journey Analytics reports will not be as fresh, as batches are not being ingested into the Data Lake.

## Customer communication

Adobe field team will be reaching out to the customer to discuss the impact in detail and discuss the migration date and window. 