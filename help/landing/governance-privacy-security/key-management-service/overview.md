---
title: How to Use Amazon Web Services Key Management Service for Adobe Experience Platform Data encryption
description: Learn how to use Amazon Web Services Key Management Service to set up your encryption keys for data stored in Adobe Experience Platform.
role: Developer, Admin, User
feature: Privacy
hide: yes
hidefromtoc: yes
---
# How to use Amazon Web Services Key Management Service for Adobe Experience Platform data encryption

Enhance your security with Amazon Web Services Key Management Service (KMS). Use KMS to create, manage, and control encryption keys seamlessly across AWS services. Simplify compliance, streamline operations with automation, and eliminate the need to maintain your own key management infrastructure.

This guides details the process to create and manage encryption keys in AWS Key Management Service (KMS) to secure your data in Adobe Experience Platform.

## Prerequisites

Before continuing with this document, you should have a good understanding of the following key concepts and capabilities. They are described below:

- **AWS Key Management Service (KMS)**: Understand the fundamentals of AWS KMS, including how to create, manage, and rotate encryption keys. RTefer to the [official KMS documentation](https://docs.aws.amazon.com/kms/) to learn more.
- **Identity and Access Management (IAM) Policies in AWS**: IAM is a service that enables you to manage access to AWS services and resources securely. Use IAM to:
  - Define which users, groups, and roles have access to specific resources.
  - Specify what actions they are allowed or denied to perform.
  - Implement fine-grained access control by assigning permissions using IAM policies.
Refer to the [IAM Policies for AWS KMS official documentation](https://docs.aws.amazon.com/kms/latest/developerguide/iam-policies.html) for more information.
- **Data Security in Adobe Experience Platform**: Explore how Platform ensures data security and integrates with external services like AWS KMS for encryption. Platform protects data with HTTPS TLS v1.2 for transit, cloud-provider encryption at rest, isolated storage, and customizable authentication and encryption options. See the [governance, privacy, and security overview](../overview.md), or the document on [data encryption in Adobe Experience Platform](../encryption.md) for more information on how your data is kept secure.
- **AWS Management Console**: A central hub where you can access and manage all your AWS services from one web-based application. From here you can use the search bar to quickly find tools, check notifications, manage your account and billing, and customize your settings. Refer to the [official AWS management console documentation](https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/what-is.html) for more information.

## Get started

This guide requires that you already have access to an Amazon Web Services account and access to the management console. Follow the steps below to get started:

1. **Verify Permissions**: Ensure that you have the necessary AWS Identity and Access Management (IAM) permissions to create, manage, and use encryption keys within KMS. To verify your permissions:
   - First, access the [IAM Policy Simulator](https://policysim.aws.amazon.com/).
   - Select your user account or role.
   - Simulate KMS actions like kms:CreateKey or kms:Encrypt.
If the simulation returns an error or you are unsure about your permissions, consult your AWS administrator for assistance.

1. **Check your AWS account configuration**: Confirm that your AWS account is enabled to use AWS KMS services. Most accounts have KMS access enabled by default, but you can review your account setup by visiting the [AWS Management Console](https://aws.amazon.com/console/). For more details, see the [AWS Key Management Service Developer guide](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html).

1. **Select a supported region**: AWS KMS is available in specific regions. Make sure you are operating in a region where KMS is supported. You can view a complete list of supported regions in the [AWS KMS endpoints and quotas list](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/). 

<!--  -->

### Steps to Complete the Workflow:

1. **Log In to AWS Account**
   - Access your AWS account to begin managing your encryption keys.

2. **Navigate to AWS Key Management Service (KMS)**
   - Go to the AWS Management Console and select **Key Management Service (KMS)** from the services menu.

3. **Create a New Key**
   - Choose to create a new key and select **Symmetric Key** as the key type. Asymmetric keys are not covered in this workflow.

4. **Configure Key Details**
   - Provide the required details for the key, including a name, description, and key usage permissions.

5. **Define Key Permissions**
   - Assign users, roles, or AWS services with permission to use the key. This ensures secure and controlled access.

6. **Review and Complete Key Creation**
   - Verify the key details and permissions before completing the setup. Once done, your key will be ready for use.

7. **Integrate the Key with Adobe Experience Platform**
   - Obtain the JSON policy from the Adobe Experience Platform UI and apply it to your AWS KMS key to link it to the platform securely.

8. **Understand Key Revocation Behavior**
   - Be aware that revoking or disabling the key will make your Adobe Experience Platform data inaccessible. This action is irreversible and should be performed with caution.

9. **Monitor and Manage Key Rotation**
   - If required, set up automatic key rotation to enhance security. Note that rotation does not affect data availability in Adobe Experience Platform.

10. **Acknowledge the Irreversible Nature of Customer-Managed Encryption**
    - Once customer-managed encryption is enabled, it cannot be reverted to system-managed encryption. This ensures you retain full control and accountability for your keys.
