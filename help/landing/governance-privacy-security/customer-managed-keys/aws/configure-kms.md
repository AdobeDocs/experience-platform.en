---
title:
description:
---
# Configure AWS KMS for CMK

Use this guide to secure your data with Amazon Web Services (AWS) Key Management Service (KMS) by creating, managing, and controlling encryption keys for Adobe Experience Platform. This integration simplifies compliance, streamlines operations through automation, and eliminates the need to maintain your own key management infrastructure.

> **Next Step**: Expand this section to explain what AWS KMS does and its role in Adobe Experience Platform.

<!-- --- -->

## Prerequisites {#prerequisites}

Before continuing with this document, you should have a good understanding of the following key concepts and capabilities:

- **AWS Key Management Service (KMS)**: Understand the fundamentals of AWS KMS, including how to create, manage, and rotate encryption keys. Refer to the [official KMS documentation](https://docs.aws.amazon.com/kms/) to learn more.
- **Identity and Access Management (IAM) policies in AWS**: IAM is a service that enables you to manage access to AWS services and resources securely. Use IAM to:
  - Define which users, groups, and roles have access to specific resources.
  - Specify what actions users are allowed or denied performing.
  - Implement fine-grained access control by assigning permissions using IAM policies. Refer to the [IAM Policies for AWS KMS official documentation](https://docs.aws.amazon.com/kms/latest/developerguide/iam-policies.html) for more information.
- **Data Security in Experience Platform**: Explore how Platform ensures data security and integrates with external services like AWS KMS for encryption. Platform protects data with HTTPS TLS v1.2 for transit, cloud-provider encryption at rest, isolated storage, and customizable authentication and encryption options. See the [governance, privacy, and security overview](../overview.md), or the document on [data encryption in Platform](../encryption.md) for more information on how your data is kept secure.
- **AWS Management Console**: A central hub where you can access and manage all your AWS services from one web-based application. Use the search bar to quickly find tools, check notifications, manage your account and billing, and customize your settings. Refer to the [official AWS management console documentation](https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/what-is.html) for more information.

> **Next Step**: Add instructions for ensuring users meet these prerequisites, including links to check their AWS account and permissions.

<!-- --- -->

## Verify Permissions

Ensure that you have the necessary AWS Identity and Access Management (IAM) permissions to create, manage, and use encryption keys within KMS. To verify your permissions:

1. Access the [IAM Policy Simulator](https://policysim.aws.amazon.com/).
2. Select your user account or role.
3. Simulate KMS actions like `kms:CreateKey` or `kms:Encrypt`.

If the simulation returns an error or you are unsure about your permissions, consult your AWS administrator for assistance.

> **Next Step**: Confirm if this should remain in the configuration document or move to the UI/API setup.

<!-- --- -->

## Check AWS Account Configuration

Confirm that your AWS account is enabled to use AWS KMS services. Most accounts have KMS access enabled by default, but you can review your account setup by visiting the [AWS Management Console](https://aws.amazon.com/console/). For more details, see the [AWS Key Management Service Developer guide](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html).

> **Next Step**: Consider adding specific checks or screenshots for clarity.

---

## Select a Supported Region

AWS KMS is available in specific regions. Make sure you are operating in a region where KMS is supported. You can view a complete list of supported regions in the [AWS KMS endpoints and quotas list](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/).

> **Next Step**: Add details about region restrictions and their implications for Adobe Experience Platform integration.

---

## Configure Key Settings

To begin setting up and managing your encryption key, log in to your AWS account and navigate to AWS Key Management Service (KMS). From the AWS Management Console and select **Key Management Service (KMS)** from the services menu.

![The search drop down menu of the AWS Management Console with Key Management Service highlighted.](../../images/governance-privacy-security/key-management-service/navigate-to-kms.png)

## Create a new key {#create-a-key}

The [!DNL Configure Key] workflow appears. By default, the key type is set to **[!DNL Symmetric]**, and the key usage is set to **[!DNL Encrypt and Decrypt]**. Ensure that these options are selected before proceeding.

![Step one of the Configure key workflow with Symmetric and Encrypt and Decrypt basic options highlighted.](../../../images/governance-privacy-security/key-management-service/configure-key-basic-options.png)

Expand the **[!DNL Advanced options]** dropdown menu. You are recommended to use the **[!DNL KMS]** option, which allows AWS to create and manage the key material. The **[!DNL KMS]** option is selected by default.
 
>[!NOTE]
>
>If you already have an existing key, you can import external key material or use the AWS [!DNL CloudHSM] key store. These options are not covered in the scope of this document.

/> **Next Step**: Summarize other advanced options like importing external key material or using AWS [!DNL CloudHSM], and indicate why they are excluded from the document.

<!-- --- -->

Next, select the [!DNL Regionality] setting, which specifies the region scope of the key. Select **[!DNL Single-Region key]**, followed by **[!DNL Next]** to proceed onto step two.

>[!IMPORTANT]
>
>AWS enforces region restrictions for KMS keys. This region restriction means that the key must be in the same region as your Adobe account. Adobe can only access KMS keys located within your account's region. Ensure that the region you select matches the region of your Adobe single-tenant account.

![Step one of the Configure key workflow with the AWS region, KMS, and Single region key advanced options highlighted.](../../../images/governance-privacy-security/key-management-service/configure-key-advanced-options.png)

## Label and tag your key {#add-labels-and-tags-to-key}

The second, [!DNL Add labels] stage of the workflow appears. Here, you configure the [!DNL Alias] and [!DNL Tags] fields to help you manage and locate your encryption key from the AWS KMS console.

Enter a descriptive label for your key in the **[!DNL Alias]** input field. The alias acts as a user-friendly identifier, to quickly locate the key using the search bar in the AWS KMS console. To prevent confusion, choose a meaningful name that reflects the key's purpose, such as "Adobe-Platform-Key" or "Customer-Encryption-Key." You can also include a description of the key if the key alias is insufficient to describe its purpose.

Finally, assign metadata to your key by adding key-value pairs in the [!DNL Tags] section. This step is optional, but you should add tags to categorize and filter AWS resources for easier management. For example, if your organization uses multiple Adobe-related resources, you can tag them with "Adobe" or "Experience-Platform." This extra step makes it simple to search for and manage all your associated resources in the AWS Management Console. Select **[!DNL Add tag]** to begin the process.

<!-- I do not have an AWS account with which to document the Add tag process as yet. -->

When you are satisfied with your settings, select **[!DNL Next]** to continue the workflow.

![Step two of the Configure key workflow with the Alias, Description, Tags, and Next highlighted.](../../../images/governance-privacy-security/key-management-service/add-labels.png)

## Define key administrative permissions {#define-key-admins}

Step three of the key creation workflow appears. To ensure secure and controlled access, you can choose which of the IAM users and roles can manage the key. There are two options at this stage, [!DNL Key administrators] and [!DNL Key deletion]. In the **[!DNL Key administrators]** section, select one or more checkboxes next to the name of any user, or role, that you want to grant administrator permissions for this key. 

>[!NOTE]
>
>You cannot create administrators at this stage of the workflow.

In the **[!DNL Key deletion]** section, enable the checkbox to allow key administrators the right to delete this key. If you do not check the checkbox, administrative users are not allowed to perform that operation.

Select **[!DNL Next]** to continue the workflow.

![The Define key administrative permissions stage of the workflow, with checkboxes and next highlighted.](../../../images/governance-privacy-security/key-management-service/define-key-admins.png)

## Grant access to key users {#assign-key-users}

In step four of the workflow, you can [!DNL Define key usage permissions]. From the **[!DNL Key users]** list, select the checkboxes for all IAM users and roles that you want to have permission to use this key. 

From this view, you can also [!DNL Add another AWS account]; however, adding other AWS accounts is strongly discouraged. Adding another account can introduce risks and complicate permission management for encryption and decryption operations. By keeping the key associated with a single AWS account, Adobe ensures secure integration with AWS KMS, minimizing risks and ensuring reliable operation.

Select **[!DNL Next]** to continue the workflow.

![The Define key usage permissions stage of the workflow, with checkboxes and next highlighted.](../../../images/governance-privacy-security/key-management-service/define-key-users.png)

## Review key configuration {#review}

The review stage of the key configuration appears. Verify the key details in the [!DNL Key configuration] and [!DNL Alias and description] sections.

>[!NOTE]
>
>Ensure that the key region is the same as the AWS account.

![The Review stage of the workflow with the Key configuration and Alias and description sections highlighted.](../../../images/governance-privacy-security/key-management-service/review-key-configuration-details.png)

Select **[!DNL Confirm]** to complete the process. You are returned to the KMS Customer Managed Keys workspace that lists all available keys.

## Next Steps

Once AWS KMS is configured, proceed to set up the integration using the [!UICONTROL Platform Encryption Configuration] UI or the Adobe Experience Platform API. To continue the one-time process for setting up the Customer Managed Keys feature, continue with the [UI setup guide](./ui-set-up.md).
