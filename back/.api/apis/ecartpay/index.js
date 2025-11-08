"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'ecartpay/1.0.0 (api/6.1.3)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * **You will need to create a token to make requests to Ecart Pay.**
     *
     * Create your token doing a **post** request using your public and private keys. You can
     * find the keys in your account API Settings section. Once authorized you will receive a
     * _token_ which you will be able to use to make requests to **Ecart Pay** endpoints.
     *
     * The new _token_ has an expiration of 1 hour. So you should create a new token after 1
     * hour in order to avoid getting the Unauthorized error through the API.
     *
     * Make sure you keep your token fully secure and delete the token when you don't need it
     * anymore.
     *
     * The response will have the following structure:
     *
     * - `token`: A string representing the authorization token.
     *
     *
     * Example response:
     *
     * ```
     * {"token":"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODliZTgwZGYyOTE1OTgyMjFhNWU5NSIsImlhdCI6MTcwNjAzNzYzNiwiZXhwIjoxNzA2MDQxMjM2fQ.J-bQwBP3HQEU4YodJw8dx0NuQ-Z2pgs1_GumL-FJHNy4PE9hBZW81BmH9ZwtEV2323xLHsov4YjqSe6hApQ"}
     *
     *  ```
     *
     * @summary Create Authorization Token
     */
    SDK.prototype.createToken = function () {
        return this.core.fetch('/api/authorizations/token', 'post');
    };
    /**
     * This API endpoint allows you to **create orders** by sending an HTTP POST request to the
     * specified URL. The request should include the customer ID, currency, items (with name,
     * quantity, and price), and a notify URL in the payload.
     *
     * The response to this request will have a status code of 200 and will include various
     * details of the created order, such as the order ID, account ID, customer details, order
     * status, items purchased, shipping information, discounts, totals, risk score, fee,
     * confirmation status, creation and update timestamps, and a payment link.
     *
     * - Embed the pay_link in your GUI.
     *
     * - Receive the payment webhook confirmation in the notify_url.
     *
     * - Review the payment is paid by creating a [Get Order
     * ](https://docs.ecartpay.com/#e8e192d2-c653-483d-aa3d-535bc481eba0) request.
     *
     * - Ecart Pay will redirect to the customer the redirect_url for **order confirmation**.
     *
     *
     * #### Im**portant information:**
     *
     *
     * **notify_url (Webhook will be triggered to this url):** You will receive a post
     * notification with the order id to this url when an order status has changed. You can
     * then use the Get Order method to verify order details.
     *
     * **redirect_url (Order Confirmation Landing Page):** The customer will be redirected to
     * this url, once the payment is complete. You should have a success and error page. If you
     * received a successful payment, you should show the order details with the order
     * confirmation.
     *
     * **pay_link (Ready to use Payment Link):** Use this url to get the predefined payment
     * window. Ecart Pay already handles all the necessary security validations for a safe
     * payment transaction.
     *
     * Here is an example of the response:
     *
     * ``` json
     * {
     *     "id": "65b0565f7f9f32242108746a",
     *     "account_id": "5d2d436e3199ae000449065b",
     *     "customer_id": "657b928db4c08f6f66847b09",
     *     "type": "order",
     *     "number": "OR00006612A",
     *     "status": "created",
     *     "first_name": "Roberto Alejandro",
     *     "last_name": "Ramirez Gonzalez",
     *     "phone": "8114999999",
     *     "currency": "MXN",
     *     "country": "MX",
     *     "items": [
     *         {
     *             "name": "Brazalete religioso plateado BR3017",
     *             "quantity": 1,
     *             "price": 243.33,
     *             "discount": 0,
     *             "total": 243.33,
     *             "tax": 0,
     *             "is_service": false,
     *             "taxes": []
     *         }
     *     ],
     *     "shipping_items": [],
     *     "discounts": [],
     *     "totals": {
     *         "subtotal": 243.33,
     *         "total": 243.33,
     *         "tax": 0,
     *         "discount": 0,
     *         "shipping": 0
     *     },
     *     "risk_score": 0,
     *     "risk_notes": [],
     *     "fee": 0,
     *     "confirmed": false,
     *     "confirm": false,
     *     "notify_url": "https://example.com/customer/290",
     *     "auto_billing": false,
     *     "created_at": "2024-01-24T00:14:23.735Z",
     *     "updated_at": "2024-01-24T00:14:23.735Z",
     *     "pay_link": "https://sandbox.ecartpay.com/checkout?id=65b0565f7f9f32242108746a"
     * }
     *
     *  ```
     *
     * @summary Create Order
     */
    SDK.prototype.createOrder = function (body, metadata) {
        return this.core.fetch('/api/orders', 'post', body, metadata);
    };
    /**
     * The HTTP POST request to the specified URL is used to create checkouts in the ecartpay
     * system. The request should include the customer details, currency, amounts, concept, and
     * other relevant information. Upon successful execution, the API returns a status code of
     * 200 along with checkout details including account_id, items, token, public_id, link, and
     * timestamps.
     *
     * ### Request Body
     *
     * - `customer_id` (string) **optional**: The ID of the customer.
     * - `title` (string): Title of the checkout.
     * - `subtitle` (string): Subtitle of the checkout.
     * - `image_url` (string): URL of the image associated with the checkout.
     * - `currency` (string): Currency for the transaction.
     * - `amounts` (array of numbers): Array of amounts.
     * - `concept` (string): Description of the checkout concept.
     * - `notify_url` (string): URL for receiving notifications.
     * - `reference_id` (string): Reference ID for the checkout.
     * - `reference` (string): Reference for the checkout.
     *
     *
     * ### Response
     *
     * - `account_id` (string): ID of the account associated with the checkout.
     * - `title` (string): Title of the checkout.
     * - `subtitle` (string): Subtitle of the checkout.
     * - `image_url` (string): URL of the image associated with the checkout.
     * - `currency` (string): Currency for the transaction.
     * - `amounts` (array of numbers): Array of amounts.
     * - `concept` (string): Description of the checkout concept.
     * - `items` (array of objects): Details of the items included in the checkout.
     *     - `name` (string): Name of the item.
     *     - `quantity` (number): Quantity of the item.
     *     - `price` (number): Price of the item.
     *     - `discount` (number): Discount on the item.
     *     - `is_service` (boolean): Indicates if the item is a service.
     *     - `id` (string): ID of the item.
     * - `customer_id` (string): ID of the customer.
     * - `notify_url` (string): URL for receiving notifications.
     * - `reference_id` (string): Reference ID for the checkout.
     * - `reference` (string): Reference for the checkout.
     * - `token` (string): Token associated with the checkout.
     * - `public_id` (string): Public ID of the checkout.
     * - `link` (string): Link to the checkout.
     * - `id` (string): ID of the checkout.
     * - `created_at` (string): Timestamp indicating the creation time.
     * - `updated_at` (string): Timestamp indicating the last update time.
     *
     *
     * #### Example Response
     *
     * ``` json
     * {
     *     "account_id": "5d2d436e3199ae000449065b",
     *     "title": "Ecart Pay",
     *     "subtitle": "The best payment solution",
     *     "image_url": "https://miimage.com/image.jpg",
     *     "currency": "MXN",
     *     "amounts": [
     *         100,
     *         200,
     *         500,
     *         1000,
     *         1500,
     *         3000
     *     ],
     *     "concept": "Recharge",
     *     "items": [
     *         {
     *             "name": "Recharge",
     *             "quantity": 1,
     *             "price": 100,
     *             "discount": 0,
     *             "is_service": false,
     *             "id": "65b011ba7f9f322421087221"
     *         }
     *     ],
     *     "customer_id": "65aff37afebdf2a42f88c178",
     *     "notify_url": "https://example.com/webhooks/checkout?user_id=1",
     *     "reference_id": "001",
     *     "reference": "Custom recharge",
     *     "token":
     * "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODliZTgwZGYyOTE1OTgyMjFhNWU5NSIsInNjb3BlcyI6WyJ3cml0ZV9jaGVja291dHMiXSwiaWF0IjoxNzA2MDM3NjkwLCJleHAiOjE3MDYwMzg1OTAsImF1ZCI6Imh0dHBzOi8vc2FuZGJveC5lY2FydHBheS5jb20iLCJzdWIiOiJjaGVja291dHMifQ.nZHFH-4diuddAAp8hrUrg7hI0Jzti330zlAIPUz6_AB4g6KSIpJWIEL-HVxk8JPGuq6eBVj80Ji7l6cUmOqofQ",
     *     "public_id": "pub6189be80df291598221a5e93",
     *     "link": "https://sandbox.ecartpay.com/v2/checkout?id=65b011ba7f9f32242108721f",
     *     "id": "65b011ba7f9f32242108721f",
     *     "created_at": "2024-01-23T19:21:30.912Z",
     *     "updated_at": "2024-01-23T19:21:30.912Z"
     * }
     *
     *  ```
     *
     * @summary Create a Checkout
     */
    SDK.prototype.createCheckout = function (body, metadata) {
        return this.core.fetch('/api/checkouts', 'post', body, metadata);
    };
    SDK.prototype.put_apicheckoutsId1 = function (body, metadata) {
        return this.core.fetch('/api/checkouts/{id}', 'put', body, metadata);
    };
    /**
     * Get Checkout
     *
     */
    SDK.prototype.get_apicheckoutsId = function (metadata) {
        return this.core.fetch('/api/checkouts/{id}', 'get', metadata);
    };
    SDK.prototype.put_apicheckoutsCheckout_idItemsId1 = function (body, metadata) {
        return this.core.fetch('/api/checkouts/{checkout_id}/items/{id}', 'put', body, metadata);
    };
    /**
     * Retrieves a summary of the account’s transactions, including total pay-ins and payouts
     * in the specified currency.
     *
     * @summary Retrieve Transaction Summary
     */
    SDK.prototype.get_apitransactionssummary = function (metadata) {
        return this.core.fetch('/api/transactions/summary', 'get', metadata);
    };
    /**
     * Retrieves a detailed list of all transactions in the account.
     *
     * @summary Retrieve All Transactions
     */
    SDK.prototype.get_apitransactions = function (metadata) {
        return this.core.fetch('/api/transactions', 'get', metadata);
    };
    /**
     * **Retrieve the payouts that have processed by your account.**
     *
     * Get a list of every payout you have made. You can use Query params to filter your
     * request.
     *
     * @summary Get All Payouts
     */
    SDK.prototype.getAllPayouts = function (metadata) {
        return this.core.fetch('/api/payouts', 'get', metadata);
    };
    /**
     * **Creating payouts to other accounts is very simple.**
     *
     * You can send money to any person that has an account registered in Ecart Pay. This is
     * very useful because you can send money from your account to their account for FREE. Once
     * they receive the money, they can withdraw the balance to their own account in any of the
     * countries that Ecart Pay operates.
     *
     * You can also add items to the payout, so the recipient will know exactly wich items you
     * are paying them. This is a very useful tool for marketplaces and drop shipping
     * solutions. Review the examples in the documentations to review the payload body.
     *
     * | **key** | **type** | **options** |
     * | --- | --- | --- |
     * | email | string | The customer or provider **email**. |
     * | reference_id | string | A **unique ID** which you will be able to use only once. |
     * | amount | int | The **amount** you want to send to the customer. |
     * | currency | string | The **currency** of the payment. (You can use any currency allowed
     * by Ecart Pay) |
     * | require_confirmation | boolean | **true**: [Needs to be confirmed
     * afterwards.](https://docs.ecartpay.com/#a4cf59d6-9bc9-4ecd-b1b1-9eed8f3157a6)
     * <br>**false**: The payment is credited instantly. |
     * |  |  |  |
     *
     * @summary Create a Payout
     * @throws FetchError<500, types.CreateAPayoutResponse500> Payout with items
     */
    SDK.prototype.createAPayout = function (body, metadata) {
        return this.core.fetch('/api/payouts', 'post', body, metadata);
    };
    /**
     * Get single payout
     *
     * @summary Get single payout
     */
    SDK.prototype.getSinglePayout = function (metadata) {
        return this.core.fetch('/api/payouts/{payout_id}', 'get', metadata);
    };
    SDK.prototype.updatePayoutItems = function (body, metadata) {
        return this.core.fetch('/api/payouts/{payout_id}', 'put', body, metadata);
    };
    SDK.prototype.confirmPayout = function (body, metadata) {
        return this.core.fetch('/api/payouts/{payout_id}/confirm', 'put', body, metadata);
    };
    /**
     * Download CFDI
     *
     * @summary Download CFDI
     */
    SDK.prototype.downloadCfdi = function (metadata) {
        return this.core.fetch('/api/invoices/cfdi/download/{id}', 'get', metadata);
    };
    /**
     * See all your withrawal accounts
     *
     * @summary Retrieve Withdrawals History
     */
    SDK.prototype.getWithdrawals = function (metadata) {
        return this.core.fetch('/api/withdrawals', 'get', metadata);
    };
    /**
     * See all your withrawal accounts
     *
     * @summary Retrieve Active Withdrawal Bank Accounts
     */
    SDK.prototype.getActiveWithrawalAccounts = function (body, metadata) {
        return this.core.fetch('/api/accounts/payments/method', 'get', body, metadata);
    };
    /**
     * In this section you will be able to add a payment method for your withdrawals. You can
     * add a debit card or add your bank account with "clabe number".
     *
     * @summary Create New Payment Method
     */
    SDK.prototype.createPaymentMethod = function (body, metadata) {
        return this.core.fetch('/api/accounts/payments/method', 'post', body, metadata);
    };
    SDK.prototype.getClientBillingInformation = function (body, metadata) {
        return this.core.fetch('/_/accounts/{account_id}/billing-information', 'get', body, metadata);
    };
    SDK.prototype.createAccountGatewayKeys = function (body, metadata) {
        return this.core.fetch('/api/accounts/gateways/{gateway_id}/keys', 'post', body, metadata);
    };
    SDK.prototype.updateAPaymentMethod = function (body, metadata) {
        return this.core.fetch('/api/accounts/payments/method/{id}', 'put', body, metadata);
    };
    SDK.prototype.deleteAPaymentMethod = function (body, metadata) {
        return this.core.fetch('/api/accounts/payments/method/{id}', 'delete', body, metadata);
    };
    SDK.prototype.updateAccountGateway = function (body, metadata) {
        return this.core.fetch('/api/accounts/gateways/{id}', 'put', body, metadata);
    };
    /**
     * Get a list of banks by country. You can use this list to create a dropdown menu or to
     * verify that we operate with the bank you need.
     *
     * @summary Get All Banks by Country
     */
    SDK.prototype.getAllBanksByCountry = function (metadata) {
        return this.core.fetch('/api/banks', 'get', metadata);
    };
    /**
     * This endpoint responds with a single bank. Send the bank id in order to receive the
     * banks detailed information.
     *
     * @summary Get Single Bank
     */
    SDK.prototype.getSingleBank = function (metadata) {
        return this.core.fetch('/api/banks/{id}', 'get', metadata);
    };
    /**
     * Retrieve the list of cards that are active in your account.
     *
     * @summary Retrieve All Stored Cards
     */
    SDK.prototype.getAllCards = function (metadata) {
        return this.core.fetch('/api/cards', 'get', metadata);
    };
    /**
     * Add a card to your account which you will be able to use to receive money or make
     * payments.
     *
     * @summary Create and Store a Card
     */
    SDK.prototype.createCard = function (body, metadata) {
        return this.core.fetch('/api/cards', 'post', body, metadata);
    };
    /**
     * Retrieve the information of an specific card in your accorunt by using this endpoint.
     *
     * @summary Retrieve a Single Card
     */
    SDK.prototype.getSingleCard = function (metadata) {
        return this.core.fetch('/api/cards/{id}', 'get', metadata);
    };
    /**
     * Delete card
     *
     * @summary Delete Stored Card
     */
    SDK.prototype.deleteCard = function (metadata) {
        return this.core.fetch('/api/cards/{id}', 'delete', metadata);
    };
    /**
     * With this endpoint you can get a list of all the CFDI uses in Mexico. With this you can
     * create a dropdown list with CFDI Uses.
     *
     * @summary Get CFDI uses
     */
    SDK.prototype.getCfdiUses = function (metadata) {
        return this.core.fetch('/api/catalogs/economic_activity', 'get', metadata);
    };
    /**
     * With this endpoint you can get a list of all the CFDI uses in Mexico. With this you can
     * create a dropdown list with CFDI Uses.
     *
     * @summary Get Countries
     */
    SDK.prototype.getCountries = function (metadata) {
        return this.core.fetch('/_/geocodes/countries', 'get', metadata);
    };
    /**
     * With this endpoint you can get a list of all the CFDI uses in Mexico. With this you can
     * create a dropdown list with CFDI Uses.
     *
     * @summary Get States
     */
    SDK.prototype.getStates = function (metadata) {
        return this.core.fetch('/_/geocodes/states', 'get', metadata);
    };
    /**
     * With this endpoint you can get a list of all the CFDI uses in Mexico. With this you can
     * create a dropdown list with CFDI Uses.
     *
     * @summary Get Zipcode
     */
    SDK.prototype.getZipcode = function (metadata) {
        return this.core.fetch('/_/geocodes/zipcode', 'get', metadata);
    };
    /**
     * With this endpoint you can get a list of all the CFDI uses in Mexico. With this you can
     * create a dropdown list with CFDI Uses.
     *
     * @summary Get Localities
     */
    SDK.prototype.getLocalities = function (metadata) {
        return this.core.fetch('/_/geocodes/localities', 'get', metadata);
    };
    /**
     * With this endpoint you can get a list of all the CFDI uses in Mexico. With this you can
     * create a dropdown list with CFDI Uses.
     *
     * @summary Get Catalog
     */
    SDK.prototype.getCatalog = function (metadata) {
        return this.core.fetch('/api/catalogs/number_type', 'get', metadata);
    };
    /**
     * With this endpoint you can get a list of all the CFDI uses in Mexico. With this you can
     * create a dropdown list with CFDI Uses.
     *
     * @summary Get Billing Form
     */
    SDK.prototype.getBillingForm = function (metadata) {
        return this.core.fetch('/api/forms', 'get', metadata);
    };
    /**
     * With this endpoint you can retrieve the list of exchanges by currency base
     *
     * @summary Retrieve Exchanges by Currency Base
     */
    SDK.prototype.getExchangesByCurrencyBase = function (metadata) {
        return this.core.fetch('/api/exchanges', 'get', metadata);
    };
    /**
     * Get a complete list of all the exchanges available on **Ecart Pay**
     *
     * @summary Retrieve Available Currencies
     */
    SDK.prototype.getExchangesAvailable = function (metadata) {
        return this.core.fetch('/api/exchanges/available', 'get', metadata);
    };
    /**
     * Use this template to retreive all the templates saved on your account.
     *
     * @summary Retrieve All Payment Link Templates
     */
    SDK.prototype.getAllTemplates = function (metadata) {
        return this.core.fetch('/api/templates', 'get', metadata);
    };
    /**
     * This endpoint allows you to create a new payment link template.
     *
     * quantity_uses = -1 for infinite uses.
     *
     * @summary Create Payment Link Template
     */
    SDK.prototype.createTemplate = function (body, metadata) {
        return this.core.fetch('/api/templates', 'post', body, metadata);
    };
    /**
     * This request will get you an specific template on your account.
     *
     * @summary Retrieve Specific Payment Link Template
     */
    SDK.prototype.getTemplate = function (metadata) {
        return this.core.fetch('/api/templates/{id}/info', 'get', metadata);
    };
    /**
     * Use this enpoint to update your templates.
     *
     * @summary Update Payment Link Status
     */
    SDK.prototype.updateTemplateCopy = function (body, metadata) {
        return this.core.fetch('/api/webhooks/verification', 'post', body, metadata);
    };
    /**
     * Get all customers
     *
     * @summary Retrieve Customers
     */
    SDK.prototype.getAllCustomers = function (metadata) {
        return this.core.fetch('/api/customers', 'get', metadata);
    };
    /**
     * Create customer
     *
     * @summary Create Customer
     */
    SDK.prototype.createCustomer = function (body, metadata) {
        return this.core.fetch('/api/customers', 'post', body, metadata);
    };
    /**
     * Get customer cards
     *
     * @summary Retrieve Customer Cards
     */
    SDK.prototype.getCustomerCards = function (metadata) {
        return this.core.fetch('/api/customers/{customer_id}/cards', 'get', metadata);
    };
    SDK.prototype.createCustomerCard = function (body, metadata) {
        return this.core.fetch('/api/customers/{customer_id}/cards', 'post', body, metadata);
    };
    /**
     * Update customer card as default
     *
     * @summary Update Customer Card as Default
     */
    SDK.prototype.updateCustomerCardAsDefault = function (metadata) {
        return this.core.fetch('/api/customers/{customer_id}/cards/{id}/default', 'put', metadata);
    };
    /**
     * Delete customer card
     *
     * @summary Delete Customer Card
     */
    SDK.prototype.deleteCustomerCard = function (metadata) {
        return this.core.fetch('/api/customers/{customer_id}/cards/{id}', 'delete', metadata);
    };
    /**
     * Create customer token
     *
     * @summary Create Customer Token
     */
    SDK.prototype.createCustomerToken = function (metadata) {
        return this.core.fetch('/api/customers/{customer_id}/token', 'post', metadata);
    };
    SDK.prototype.createCustomerPaymentMethod = function (body, metadata) {
        return this.core.fetch('/api/customers/{customer_id}/payment-methods', 'post', body, metadata);
    };
    /**
     * Get all chargebacks
     *
     * @summary Retrieve All Chargebacks
     */
    SDK.prototype.getAllChargebacks = function (metadata) {
        return this.core.fetch('/api/chargebacks', 'get', metadata);
    };
    /**
     * Create chargeback
     *
     * @summary Create Chargeback
     */
    SDK.prototype.createChargeback = function (body, metadata) {
        return this.core.fetch('/api/chargebacks', 'post', body, metadata);
    };
    /**
     * Get single chargeback
     *
     * @summary Retrieve a Single Chargeback
     */
    SDK.prototype.getSingleChargeback = function (metadata) {
        return this.core.fetch('/api/chargebacks/{id}', 'get', metadata);
    };
    SDK.prototype.updateChargeback = function (body, metadata) {
        return this.core.fetch('/api/chargebacks/{id}', 'put', body, metadata);
    };
    /**
     * Get all gateways
     *
     * @summary Retrieve All Available Payment Gateways
     */
    SDK.prototype.getAllGateways = function (metadata) {
        return this.core.fetch('/api/gateways', 'get', metadata);
    };
    /**
     * Get single gateway
     *
     * @summary Retrieve Single Payment Gateway
     */
    SDK.prototype.getSingleGateway = function (metadata) {
        return this.core.fetch('/api/gateways/{id}', 'get', metadata);
    };
    SDK.prototype.updateGateway = function (body, metadata) {
        return this.core.fetch('/api/gateways/{id}', 'put', body, metadata);
    };
    SDK.prototype.updateGatewayMethod = function (body, metadata) {
        return this.core.fetch('/api/gateways/{gateway_id}/methods/{id}', 'put', body, metadata);
    };
    /**
     * Get all notifications
     *
     * @summary Get All Notifications
     */
    SDK.prototype.getAllNotifications = function (metadata) {
        return this.core.fetch('/api/billings/filters', 'get', metadata);
    };
    /**
     * Update notification seen
     *
     * @summary Update Notification Seen
     */
    SDK.prototype.updateNotificationSeen = function (metadata) {
        return this.core.fetch('/api/notifications/{notification_id}/seen', 'put', metadata);
    };
    /**
     * Get all activity
     *
     * @summary Get All Activity
     */
    SDK.prototype.getAllActivity = function (metadata) {
        return this.core.fetch('/api/activity', 'get', metadata);
    };
    /**
     * Get Activity
     *
     * @summary Get Activity
     */
    SDK.prototype.getActivity = function (metadata) {
        return this.core.fetch('/api/activity/{id}', 'get', metadata);
    };
    /**
     * Create order
     *
     * @summary Create Woocommerce Order
     */
    SDK.prototype.createOrder1 = function (metadata) {
        return this.core.fetch('/api/woocomerce/orders', 'post', metadata);
    };
    /**
     * Use this endpoint to create a tokenized card.
     *
     * @summary Create Tokenized Card
     */
    SDK.prototype.createToken1 = function (body, metadata) {
        return this.core.fetch('/api/tokens', 'post', body, metadata);
    };
    /**
     * Get all scopes
     *
     * @summary Get all Scopes
     */
    SDK.prototype.getAllScopes = function (metadata) {
        return this.core.fetch('/api/scopes', 'get', metadata);
    };
    /**
     * Create scopes token
     *
     * @summary Create Scopes Token
     */
    SDK.prototype.createScopesToken = function (body, metadata) {
        return this.core.fetch('/api/scopes/token', 'post', body, metadata);
    };
    /**
     * Get all subscriptions
     *
     * @summary Get All Subscriptions
     */
    SDK.prototype.getAllSubscriptions = function (metadata) {
        return this.core.fetch('/api/subscriptions', 'get', metadata);
    };
    /**
     * Create subscription
     *
     * @summary Create Subscription
     */
    SDK.prototype.createSubscription = function (body, metadata) {
        return this.core.fetch('/api/subscriptions', 'post', body, metadata);
    };
    /**
     * Get my subscriptions
     *
     * @summary Get My Subscriptions
     */
    SDK.prototype.getMySubscriptions = function (metadata) {
        return this.core.fetch('/api/subscriptions/my-subscriptions', 'get', metadata);
    };
    SDK.prototype.updateFromCustomerASubscriptions = function (body, metadata) {
        return this.core.fetch('/api/subscriptions/from-customer/{id}', 'put', body, metadata);
    };
    SDK.prototype.put_apicustomersId = function (body, metadata) {
        return this.core.fetch('/api/customers/{id}', 'put', body, metadata);
    };
    /**
     * Delete Customer
     *
     */
    SDK.prototype.delete_apicustomersId = function (metadata) {
        return this.core.fetch('/api/customers/{id}', 'delete', metadata);
    };
    /**
     * Retrieve Interest-free and Fixed Installments Configuration
     *
     */
    SDK.prototype.get_apicardsmsiConfiguration = function (metadata) {
        return this.core.fetch('/api/cards/msi-configuration', 'get', metadata);
    };
    /**
     * Create or Update Custom Interest-free and Fixed Installments configuration
     *
     */
    SDK.prototype.post_apicardsmsiConfiguration = function (body, metadata) {
        return this.core.fetch('/api/cards/msi-configuration', 'post', body, metadata);
    };
    /**
     * Get Client Billing Information
     *
     */
    SDK.prototype.get_apibillingsclients = function (metadata) {
        return this.core.fetch('/api/billings/clients', 'get', metadata);
    };
    /**
     * Create Client Billing Information
     *
     */
    SDK.prototype.post_apibillingsclients = function (body, metadata) {
        return this.core.fetch('/api/billings/clients', 'post', body, metadata);
    };
    /**
     * Get Order Invoice Creation
     *
     */
    SDK.prototype.get_apiorderspublicOrder_id = function (metadata) {
        return this.core.fetch('/api/orders/public/{order_id}', 'get', metadata);
    };
    /**
     * Resend Invitation Link
     *
     */
    SDK.prototype.post_apisubscriptionsIdResendInvitationLink = function (metadata) {
        return this.core.fetch('/api/subscriptions/{id}/resend-invitation-link', 'post', metadata);
    };
    /**
     * Create a Subscription Template
     *
     */
    SDK.prototype.post_apisubscriptionsTemplate = function (body, metadata) {
        return this.core.fetch('/api/subscriptions-template', 'post', body, metadata);
    };
    /**
     * Get All Subcription Templates
     *
     * @summary Get All Subscrption Templates
     */
    SDK.prototype.get_apisubscriptionsTemplate = function (metadata) {
        return this.core.fetch('/api/subscriptions-template', 'get', metadata);
    };
    /**
     * Turn on/off Interest-free and Fixed Installments Configurations
     *
     */
    SDK.prototype.post_apicardsmsiactivate = function (body, metadata) {
        return this.core.fetch('/api/cards/msi/activate', 'post', body, metadata);
    };
    /**
     * Create Order Invoice
     *
     */
    SDK.prototype.post_apibillings = function (body, metadata) {
        return this.core.fetch('/api/billings', 'post', body, metadata);
    };
    /**
     * Get Billing Providers
     *
     */
    SDK.prototype.get_apibillingsproviders = function (metadata) {
        return this.core.fetch('/api/billings/providers', 'get', metadata);
    };
    /**
     * Use this endpoint to retrieve information of an specific order.
     *
     * @summary Get Order
     */
    SDK.prototype.get_apiordersId = function (metadata) {
        return this.core.fetch('/api/orders/{id}', 'get', metadata);
    };
    SDK.prototype.put_apiordersOrder_id = function (body, metadata) {
        return this.core.fetch('/api/orders/{order_id}', 'put', body, metadata);
    };
    /**
     * Create a Refund
     *
     */
    SDK.prototype.post_apiordersOrder_idRefund = function (body, metadata) {
        return this.core.fetch('/api/orders/{order_id}/refund', 'post', body, metadata);
    };
    SDK.prototype.put_apitemplatesId = function (body, metadata) {
        return this.core.fetch('/api/templates/{id}', 'put', body, metadata);
    };
    /**
     * Ecart Pay allows you to delete payment link templates when they are no longer needed.
     *
     * @summary Delete Payment Link Template
     */
    SDK.prototype.delete_apitemplatesId = function (metadata) {
        return this.core.fetch('/api/templates/{id}', 'delete', metadata);
    };
    /**
     * Retrieve detailed information about a specific transaction, including fees, gateway
     * details, and associated orders.
     *
     * @summary Retrieve a Single Transaction
     */
    SDK.prototype.get_apitransactionsTransaction_id = function (metadata) {
        return this.core.fetch('/api/transactions/{transaction_id}', 'get', metadata);
    };
    /**
     * Get Public Checkout
     *
     */
    SDK.prototype.get_apicheckoutsId1 = function (metadata) {
        return this.core.fetch('/api/checkout/{id}', 'get', metadata);
    };
    /**
     * Use this endpoint to get all the relevant information about this order, including the
     * unique transaction CLABE if it has been already generated and assigned to the order.
     *
     * @summary Get Public Order
     */
    SDK.prototype.get_apiorderspublicId = function (metadata) {
        return this.core.fetch('/api/orders/public/{id}', 'get', metadata);
    };
    SDK.prototype.post_apiordersIdProcess = function (body, metadata) {
        return this.core.fetch('/api/orders/{id}/process', 'post', body, metadata);
    };
    /**
     * Get single subscription
     *
     * @summary Get Single Subscription
     */
    SDK.prototype.getSingleSubscription = function (metadata) {
        return this.core.fetch('/api/subscriptions/{id}', 'get', metadata);
    };
    SDK.prototype.put_apisubscriptionsId = function (body, metadata) {
        return this.core.fetch('/api/subscriptions/{id}', 'put', body, metadata);
    };
    /**
     * This endpoint retrieves a list of invoices associated with registered clients.
     *
     * @summary Get Client Billing Invoices
     */
    SDK.prototype.get_apiinvoices = function (metadata) {
        return this.core.fetch('/api/invoices', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
