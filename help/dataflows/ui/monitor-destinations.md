## [!UICONTROL Dataflow runs]

The [!UICONTROL Dataflow runs] tab provides metric data on your dataflow runs to batch destinations. A list of individual runs and their particular metrics is displayed, along with the following totals for profile records:

* **[!UICONTROL Profile records activated]**: The total count of profile records that were created or updated for activation.
* **[!UICONTROL Profile records skipped]**:  The total count of profile records that are skipped for activation based on profile exits or missing attributes.

![](../assets/ui/details-page/dataflow-runs.png)

>[!NOTE]
>
>Dataflow runs are generated based on the destination dataflow's schedule frequency. A separate dataflow run is made for each merge policy applied to a segment.

To view the details of a particular dataflow run, select the run's start time from the list. The details page for a dataflow run contains additional information such as the size of data processed and a list of any errors that occurred with details for error diagnostics.

![](../assets/ui/details-page/dataflow.png)