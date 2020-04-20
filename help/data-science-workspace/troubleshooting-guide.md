---
keywords: Experience Platform;troubleshooting;Data Science Workspace;popular topics
solution: Experience Platform
title: Data Science Workspace troubleshooting guide
topic: Troubleshooting
---

# Data Science Workspace troubleshooting guide

This document provides answers to frequently asked questions about Adobe Experience Platform Data Science Workspace. For questions and troubleshooting regarding Platform APIs in general, see the [Adobe Experience Platform API troubleshooting guide](../landing/troubleshooting.md).

## JupyterLab environment is not loading in Google Chrome

>[!IMPORTANT] This issue has been resolved but could still be present in the Google Chrome 80.x browser. Please ensure your Chrome browser is up-to-date. 

With the Google Chrome browser version 80.x, all third-party cookies are blocked by default. This policy can prevent JupyterLab from loading within Adobe Experience Platform.

To remedy this issue use the following steps: 

 In your Chrome browser, navigate to the top-right and select **Settings** (alternatively you can copy and paste "chrome://settings/" in the address bar). Next, scroll to the bottom of the page and click the **Advanced** dropdown.
   
![chrome advanced](./images/faq/chrome-advanced.png)

The *Privacy and security* section appears. Next, click on **Site settings** followed by **Cookies and site data**.
   
![chrome advanced](./images/faq/privacy-security.png)

![chrome advanced](./images/faq/cookies.png)

Lastly, toggle “Block third-party cookies” to "OFF". 

![chrome advanced](./images/faq/toggle-off.png)

>[!NOTE] Alternatively, you could disable third-party cookies and whitelist [*.]ds.adobe.net

Navigate to “chrome://flags/” in your address bar. Search for and disable the flag titled *“SameSite by default cookies”* by using the dropdown menu on the right.
   
   ![disable samesite flag](./images/faq/samesite-flag.png)

After Step 2, you are prompted to relaunch your browser. After you relaunch, Jupyterlab should be accessible.

## Why am I unable to access JupyterLab in Safari?

Safari disables third-party cookies by default in Safari < 12. Because your Jupyter virtual machine instance resides on a different domain than its parent frame, Adobe Experience Platform currently requires that third-party cookies be enabled. Please enable third-party cookies or switch to a different browser such as Google Chrome.

For Safari 12, you need to switch your User Agent to 'Chrome' or 'Firefox'. To switch your User Agent, start by opening the *Safari* menu and select **Preferences**. The preferences window appears.

![Safari preferences](./images/faq/preferences.png)

Within the Safari preferences window, select **Advanced**. Then check the *Show Develop menu in menu bar* box. You can close the preferences window after this step is complete.

![Safari advanced](./images/faq/advanced.png)

Next, from the top navigation bar select the **Develop** menu. From within the *Develop* dropdown, hover over *User Agent*. You can select the **Chrome** or **Firefox** User Agent string you would like to use.

![Develop menu](./images/faq/user-agent.png)

## Why am I seeing a '403 Forbidden' message when trying to upload or delete a file in JupyterLab?

If your browser is enabled with advertisement blocking software such as Ghostery or AdBlock Plus, the domain "\*.adobe.net" must be whitelisted in each advertisement blocking software for JupyterLab to operate normally. This is because JupyterLab virtual machines run on a different domain than the Experience Platform domain.

## Why do some parts of my Jupyter Notebook look scrambled or do not render as code?

This can happen if the cell in question is accidentally changed from "Code" to "Markdown". While a code cell is focused, pressing the key combination **ESC+M** changes the type of the cell to Markdown. A cell's type can be changed by the dropdown indicator at the top of the notebook for the selected cell(s). To change a cell type to code, start by selecting the given cell you want to change. Next, click the dropdown that indicates the cell's current type, then select "Code".

![](./images/faq/code_type.png)

## How do I install custom Python libraries?

The Python kernel comes pre-installed with many popular machine learning libraries. However, you can install additional custom libraries by executing the following command within a code cell:

```shell
!pip install {LIBRARY_NAME}
```

For a complete list of pre-installed Python libraries, see the [appendix section of the JupyterLab User Guide](./jupyterlab/overview.md#supported-libraries).

## Can I install custom PySpark libraries?

Unfortunately, you cannot install additional libraries for the PySpark kernel. However, you can contact your Adobe customer service representative to have custom PySpark libraries installed for you.

For a list of pre-installed PySpark libraries, see the [appendix section of the JupyterLab User Guide](./jupyterlab/overview.md#supported-libraries). 

## Is it possible to configure Spark cluster resources for JupyterLab Spark or PySpark kernel?

You can configure resources by adding the following block to the first cell of your notebook:

```python
%%configure -f 
{
    "numExecutors": 10,
    "executorMemory": "8G",
    "executorCores":4,
    "driverMemory":"2G",
    "driverCores":2,
    "conf": {
        "spark.cores.max": "40"
    }
}
```

For more information on Spark cluster resource configuration, including the complete list of configurable properties, see the [JupyterLab User Guide](./jupyterlab/overview.md#pyspark-spark-execution-resource).