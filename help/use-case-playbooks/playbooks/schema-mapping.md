---
solution: Experience Platform
title: Schema awareness
description: Learn how to accelerate time to value by leveraging Adobe standard fields and field groups
badgeBeta: label="Beta" type="Informative"
exl-id: 2604ce26-bcf9-46e1-bc10-30252a113159
---

# Data Awareness - Overview

Adobe Experience Platform provides several standard fields and field groups for migrating your data. In certain cases, you may already have your own schemas, fields and field groups and might want to integrate both. To better align your existing fields and enhance schema awareness, you can follow the steps outlined below using your access to the beta application.

## Getting started

* Step 1: First, create an instance from one of the templates. Next, in the **Bill of Material** page for that particular instance, select the **Publish to a different sandbox** button.

![Bill of material page](/help/use-case-playbooks/assets/playbooks/data-awareness/bill-of-material.png)

* Step 2: Once you select the **Publish to a different sandbox** button, a modal appears. Input the name and optional description and select `create`.

![Create package modal](/help/use-case-playbooks/assets/playbooks/data-awareness/create-package-modal.png)

* Step 3: Now, navigate to the **Packages** tab in the sandboxes side nav item, packages tab and finds their package. In the packages tab, find your package. When the user publishes the package, they should see the **+** button enabled next to the name.

![Packages tab](/help/use-case-playbooks/assets/playbooks/data-awareness/packages.png)

* Step 4: Select the **+** button, and you will be redirected to the import workflow. Choose a destination sandbox and select **Next**.

![Import workflow](/help/use-case-playbooks/assets/playbooks/data-awareness/import-package-import-settings.png)

* Step 5: You will see a page where you can begin to map schemas. The **Finish** button is disabled until you map each schema.

![Map schemas](/help/use-case-playbooks/assets/playbooks/data-awareness/import-package-view-dependencies.png)

* Step 6: Map the first schema, which is a profile schema. There are no other target schema options besides the individual union profile schema.

![Map the first schema](/help/use-case-playbooks/assets/playbooks/data-awareness/map-to-existing-fields.png)

* Step 7: Select a target schema from the dropdown. Map the second schema, which is an event schema.

![Select a target schema from dropdown](/help/use-case-playbooks/assets/playbooks/data-awareness/map-to-event-schema.png)

* Step 8: Select a schema from available schemas in the destination sandbox.

![Select a schema](/help/use-case-playbooks/assets/playbooks/data-awareness/map-to-available-schemas.png)

* Step 9: Complete the mapping and select **Save**.

![Save mapping](/help/use-case-playbooks/assets/playbooks/data-awareness/map-to-existing-modal.png)

* Step 10: Now, you can complete the flow by selecting **Finish**.

![Finish the flow](/help/use-case-playbooks/assets/playbooks/data-awareness/complete-flow.png)

* Step 11: On the **Imports** page you can now see the progress of your import.

![Import page showing progress](/help/use-case-playbooks/assets/playbooks/data-awareness/import-progress.png)

* Step 12: The process is now complete.

![Bill of material page](/help/use-case-playbooks/assets/playbooks/data-awareness/packages.png)

## Next steps

After reading this guide, you now have a better understanding of how to leverage Adobe standard fields and field groups and migrate your data seamlessly.