---
title: Stripe
description: Learn how to ingest payments data from your Stripe account to Adobe Experience Platform
badge: Beta
exl-id: 191d217e-036d-491a-b7dd-abcad74625ba
---
# [!DNL Stripe]

>[!NOTE]
>
>The [!DNL Stripe] source is in beta. Please read the [sources overview](../../home.md#terms-and-conditions) for more information on using beta-labeled sources.

Thousands of businesses of all sizes utilize [!DNL Stripe] both online and in person to accept payments, generate new sources of revenue, and expand globally with the help of Adobe Experience Platform, Adobe Commerce, and [!DNL Magento Open Source].

Use the [!DNL Stripe] source in Experience Platform to ingest data captured during the purchase flow by your customers. Once ingested, use this data to create personalized offers and unlock richer business insights.

>[!TIP]
>
>For questions about the [!DNL Stripe] source on Experience Platform, contact [!DNL Stripe] at adobe-partnership<span>@stripe.com.

>[!BEGINSHADEBOX]

**Sample use case for the [!DNL Stripe] source**

Your business allows customers to purchase items on your online store with the option to **buy now** and **pay later** (using [!DNL Klarna], [!DNL Afterpay], [!DNL Affirm], or [!DNL Zip]).

Use the [!DNL Stripe] data source to analyze the use of **buy now** and **pay later** options and experiment with personalized offers to these customers. For example, consider recommending add-on items to expand the number of items in their shopping cart before checkout.

>[!ENDSHADEBOX]

Read the document below for information on how you can set up your [!DNL Stripe] source account, retrieve the necessary credentials, and create your schemas.

## Prerequisites {#prerequisites}

The following sections provide information on prerequisite setup that you must complete before connecting your [!DNL Stripe] account to Experience Platform.

### Retrieve your access token

* Log in to the [[!DNL Stripe] dashboard](https://dashboard.stripe.com/login) using your [!DNL Stripe] email address and password.
* In the [!DNL Developers] dashboard, select **[!DNL API keys for developers]**.
* Under the **API keys** tab, select **[!DNL Reveal test key]** to reveal your access token.
* You can now use this token as your access token when connecting your [!DNL Stripe] account to Experience Platform, using either the [!DNL Flow Service] API or the Experience Platform UI.

### Gather required credentials

In order to connect your [!DNL Stripe] account to Experience Platform, you must provide values for the following authentication credentials:

>[!BEGINTABS]

>[!TAB API]

You must provide the following credentials when connecting your [!DNL Stripe] account using the [!DNL Flow Service] API.

| Credential | Description |
| --- | --- |
| `accessToken` | Your [!DNL Stripe] OAuth 2 Refresh Code authentication token. |
| `connectionSpec.id` | The connection spec ID of the [!DNL Stripe] source. This ID is fixed as: `cc2c31d6-7b8c-4581-b49f-5c8698aa3ab3`. |

>[!TAB UI]

You must provide the following credentials when connecting your [!DNL Stripe] account using the Experience Platform user interface.

| Credential | Description |
| --- | --- |
| Access token | Your [!DNL Stripe] OAuth 2 Refresh Code authentication token. |

>[!ENDTABS]

For more information on using [!DNL Stripe] APIs, read the [[!DNL Stripe] documentation on API keys](https://docs.stripe.com/keys).

### Create an Experience Data Model (XDM) schema

The [!DNL Stripe] source supports ingestion of data from the following resource paths:

* Charges
* Subscriptions
* Refunds
* Balance Transactions
* Customers
* Prices

You must create an XDM schema to describe a dataset, which can store the fields and data types that will be sent from [!DNL Stripe] to Experience Platform.

>[!BEGINTABS]

>[!TAB Charges]

In [!DNL Stripe], **charges** represent attempts to move money into your [!DNL Stripe]. Read the [[!DNL Stripe] API guide on charges](https://docs.stripe.com/api/charges) for more information on specific charge attributes.

+++Select to view the Stripe Charge object  

```json
{
  "id": "ch_3MmlLrLkdIwHu7ix0snN0B15",
  "object": "charge",
  "amount": 1099,
  "amount_captured": 1099,
  "amount_refunded": 0,
  "application": null,
  "application_fee": null,
  "application_fee_amount": null,
  "balance_transaction": "txn_3MmlLrLkdIwHu7ix0uke3Ezy",
  "billing_details": {
    "address": {
      "city": null,
      "country": null,
      "line1": null,
      "line2": null,
      "postal_code": null,
      "state": null
    },
    "email": null,
    "name": null,
    "phone": null
  },
  "calculated_statement_descriptor": "Stripe",
  "captured": true,
  "created": 1679090539,
  "currency": "usd",
  "customer": null,
  "description": null,
  "disputed": false,
  "failure_balance_transaction": null,
  "failure_code": null,
  "failure_message": null,
  "fraud_details": {},
  "invoice": null,
  "livemode": false,
  "metadata": {},
  "on_behalf_of": null,
  "outcome": {
    "network_status": "approved_by_network",
    "reason": null,
    "risk_level": "normal",
    "risk_score": 32,
    "seller_message": "Payment complete.",
    "type": "authorized"
  },
  "paid": true,
  "payment_intent": null,
  "payment_method": "card_1MmlLrLkdIwHu7ixIJwEWSNR",
  "payment_method_details": {
    "card": {
      "brand": "visa",
      "checks": {
        "address_line1_check": null,
        "address_postal_code_check": null,
        "cvc_check": null
      },
      "country": "US",
      "exp_month": 3,
      "exp_year": 2024,
      "fingerprint": "mToisGZ01V71BCos",
      "funding": "credit",
      "installments": null,
      "last4": "4242",
      "mandate": null,
      "network": "visa",
      "three_d_secure": null,
      "wallet": null
    },
    "type": "card"
  },
  "receipt_email": null,
  "receipt_number": null,
  "receipt_url": "https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xTTJKVGtMa2RJd0h1N2l4KOvG06AGMgZfBXyr1aw6LBa9vaaSRWU96d8qBwz9z2J_CObiV_H2-e8RezSK_sw0KISesp4czsOUlVKY",
  "refunded": false,
  "review": null,
  "shipping": null,
  "source_transfer": null,
  "statement_descriptor": null,
  "statement_descriptor_suffix": null,
  "status": "succeeded",
  "transfer_data": null,
  "transfer_group": null
}
```

+++

>[!TAB Subscriptions]

In [!DNL Stripe], you can use **subscriptions** to charge a customer on a recurring basis. Read the [[!DNL Stripe] API guide on subscriptions](https://docs.stripe.com/api/subscriptions) for more information on specific subscription attributes.

+++Select to view the Stripe Subscription object

```json
{
  "id": "sub_1MowQVLkdIwHu7ixeRlqHVzs",
  "object": "subscription",
  "application": null,
  "application_fee_percent": null,
  "automatic_tax": {
    "enabled": false,
    "liability": null
  },
  "billing_cycle_anchor": 1679609767,
  "billing_thresholds": null,
  "cancel_at": null,
  "cancel_at_period_end": false,
  "canceled_at": null,
  "cancellation_details": {
    "comment": null,
    "feedback": null,
    "reason": null
  },
  "collection_method": "charge_automatically",
  "created": 1679609767,
  "currency": "usd",
  "current_period_end": 1682288167,
  "current_period_start": 1679609767,
  "customer": "cus_Na6dX7aXxi11N4",
  "days_until_due": null,
  "default_payment_method": null,
  "default_source": null,
  "default_tax_rates": [],
  "description": null,
  "discount": null,
  "ended_at": null,
  "invoice_settings": {
    "issuer": {
      "type": "self"
    }
  },
  "items": {
    "object": "list",
    "data": [
      {
        "id": "si_Na6dzxczY5fwHx",
        "object": "subscription_item",
        "billing_thresholds": null,
        "created": 1679609768,
        "metadata": {},
        "plan": {
          "id": "price_1MowQULkdIwHu7ixraBm864M",
          "object": "plan",
          "active": true,
          "aggregate_usage": null,
          "amount": 1000,
          "amount_decimal": "1000",
          "billing_scheme": "per_unit",
          "created": 1679609766,
          "currency": "usd",
          "interval": "month",
          "interval_count": 1,
          "livemode": false,
          "metadata": {},
          "nickname": null,
          "product": "prod_Na6dGcTsmU0I4R",
          "tiers_mode": null,
          "transform_usage": null,
          "trial_period_days": null,
          "usage_type": "licensed"
        },
        "price": {
          "id": "price_1MowQULkdIwHu7ixraBm864M",
          "object": "price",
          "active": true,
          "billing_scheme": "per_unit",
          "created": 1679609766,
          "currency": "usd",
          "custom_unit_amount": null,
          "livemode": false,
          "lookup_key": null,
          "metadata": {},
          "nickname": null,
          "product": "prod_Na6dGcTsmU0I4R",
          "recurring": {
            "aggregate_usage": null,
            "interval": "month",
            "interval_count": 1,
            "trial_period_days": null,
            "usage_type": "licensed"
          },
          "tax_behavior": "unspecified",
          "tiers_mode": null,
          "transform_quantity": null,
          "type": "recurring",
          "unit_amount": 1000,
          "unit_amount_decimal": "1000"
        },
        "quantity": 1,
        "subscription": "sub_1MowQVLkdIwHu7ixeRlqHVzs",
        "tax_rates": []
      }
    ],
    "has_more": false,
    "total_count": 1,
    "url": "/v1/subscription_items?subscription=sub_1MowQVLkdIwHu7ixeRlqHVzs"
  },
  "latest_invoice": "in_1MowQWLkdIwHu7ixuzkSPfKd",
  "livemode": false,
  "metadata": {},
  "next_pending_invoice_item_invoice": null,
  "on_behalf_of": null,
  "pause_collection": null,
  "payment_settings": {
    "payment_method_options": null,
    "payment_method_types": null,
    "save_default_payment_method": "off"
  },
  "pending_invoice_item_interval": null,
  "pending_setup_intent": null,
  "pending_update": null,
  "quantity": 1,
  "schedule": null,
  "start_date": 1679609767,
  "status": "active",
  "test_clock": null,
  "transfer_data": null,
  "trial_end": null,
  "trial_settings": {
    "end_behavior": {
      "missing_payment_method": "create_invoice"
    }
  },
  "trial_start": null
}
```

+++

>[!TAB Refunds]

In [!DNL Stripe], you can use **refunds** to refund a previously created charge. Read the [[!DNL Stripe] API guide on refunds](https://docs.stripe.com/api/refunds) for more information on specific refund attributes.

+++Select to view the Stripe Refund object

```json
{
  "id": "re_1Nispe2eZvKYlo2Cd31jOCgZ",
  "object": "refund",
  "amount": 1000,
  "balance_transaction": "txn_1Nispe2eZvKYlo2CYezqFhEx",
  "charge": "ch_1NirD82eZvKYlo2CIvbtLWuY",
  "created": 1692942318,
  "currency": "usd",
  "destination_details": {
    "card": {
      "reference": "123456789012",
      "reference_status": "available",
      "reference_type": "acquirer_reference_number",
      "type": "refund"
    },
    "type": "card"
  },
  "metadata": {},
  "payment_intent": "pi_1GszsK2eZvKYlo2CfhZyoZLp",
  "reason": null,
  "receipt_number": null,
  "source_transfer_reversal": null,
  "status": "succeeded",
  "transfer_reversal": null
}
```

+++

>[!TAB Balance Transactions]

In [!DNL Stripe], **balance transactions** represent the movement of funds between your [!DNL Stripe] accounts. Read the [[!DNL Stripe] API guide on balance transactions](https://docs.stripe.com/api/balance_transactions) for more information on specific balance transaction attributes.

+++Select to view the Stripe Balance Transaction object

```json
{
  "id": "txn_1MiN3gLkdIwHu7ixxapQrznl",
  "object": "balance_transaction",
  "amount": -400,
  "available_on": 1678043844,
  "created": 1678043844,
  "currency": "usd",
  "description": null,
  "exchange_rate": null,
  "fee": 0,
  "fee_details": [],
  "net": -400,
  "reporting_category": "transfer",
  "source": "tr_1MiN3gLkdIwHu7ixNCZvFdgA",
  "status": "available",
  "type": "transfer"
}
```

+++

>[!TAB Customers]

In [!DNL Stripe], **customers** represent a given customer of your business. For information on specific customer attributes, Read the [[!DNL Stripe] API guide on customers](https://docs.stripe.com/api/customers) for more information on specific customer attributes.

+++Select to view the Stripe Customer object

```json
{
  "id": "cus_NffrFeUfNV2Hib",
  "object": "customer",
  "address": null,
  "balance": 0,
  "created": 1680893993,
  "currency": null,
  "default_source": null,
  "delinquent": false,
  "description": null,
  "discount": null,
  "email": "jennyrosen@example.com",
  "invoice_prefix": "0759376C",
  "invoice_settings": {
    "custom_fields": null,
    "default_payment_method": null,
    "footer": null,
    "rendering_options": null
  },
  "livemode": false,
  "metadata": {},
  "name": "Jenny Rosen",
  "next_invoice_sequence": 1,
  "phone": null,
  "preferred_locales": [],
  "shipping": null,
  "tax_exempt": "none",
  "test_clock": null
}
```

+++

>[!TAB Prices]

In [!DNL Stripe], **prices** represent the unit cost, currency, and the optional billing cycle for both recurring and one-time purchase of products. Read the [[!DNL Stripe] API guide on prices](https://docs.stripe.com/api/prices) for more information on specific price attributes.

+++Select to view the Stripe Price object

```json
{
  "id": "price_1MoBy5LkdIwHu7ixZhnattbh",
  "object": "price",
  "active": true,
  "billing_scheme": "per_unit",
  "created": 1679431181,
  "currency": "usd",
  "custom_unit_amount": null,
  "livemode": false,
  "lookup_key": null,
  "metadata": {},
  "nickname": null,
  "product": "prod_NZKdYqrwEYx6iK",
  "recurring": {
    "aggregate_usage": null,
    "interval": "month",
    "interval_count": 1,
    "trial_period_days": null,
    "usage_type": "licensed"
  },
  "tax_behavior": "unspecified",
  "tiers_mode": null,
  "transform_quantity": null,
  "type": "recurring",
  "unit_amount": 1000,
  "unit_amount_decimal": "1000"
}
```

+++

>[!ENDTABS]


### IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

### Configure permissions on Experience Platform

You must have both **[!UICONTROL View Sources]** and **[!UICONTROL Manage Sources]** permissions enabled for your account in order to connect your [!DNL Stripe] account to Experience Platform. Contact your product administrator to obtain the necessary permissions. For more information, read the [access control UI guide](../../../access-control/ui/overview.md).

## Next steps

Once you have completed your prerequisite setup, you can proceed to connect and ingest your [!DNL Stripe] data to Experience Platform. Read the following guides to learn how to ingest [!DNL Stripe] payments data to Experience Platform using APIs or the user interface:

* [Ingest payments data from your Stripe account to Experience Platform using the Flow Service API](../../tutorials/api/create/payments/stripe.md).
* [Ingest payments data from your Stripe account to Experience Platform using the user interface](../../tutorials/ui/create/payments/stripe.md).
