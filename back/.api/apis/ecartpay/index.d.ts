import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
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
    createToken(): Promise<FetchResponse<200, types.CreateTokenResponse200>>;
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
    createOrder(body?: types.CreateOrderBodyParam, metadata?: types.CreateOrderMetadataParam): Promise<FetchResponse<200, types.CreateOrderResponse200>>;
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
    createCheckout(body: types.CreateCheckoutBodyParam, metadata: types.CreateCheckoutMetadataParam): Promise<FetchResponse<200, types.CreateCheckoutResponse200>>;
    /**
     * This endpoint allows businesses to update key details of an existing checkout, such as
     * customer information or notification settings.
     *
     * @summary Update Checkout
     */
    put_apicheckoutsId1(body: types.PutApicheckoutsId1BodyParam, metadata: types.PutApicheckoutsId1MetadataParam): Promise<FetchResponse<number, unknown>>;
    put_apicheckoutsId1(metadata: types.PutApicheckoutsId1MetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get Checkout
     *
     */
    get_apicheckoutsId(metadata: types.GetApicheckoutsIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Update Item
     *
     */
    put_apicheckoutsCheckout_idItemsId1(body: types.PutApicheckoutsCheckoutIdItemsId1BodyParam, metadata: types.PutApicheckoutsCheckoutIdItemsId1MetadataParam): Promise<FetchResponse<number, unknown>>;
    put_apicheckoutsCheckout_idItemsId1(metadata: types.PutApicheckoutsCheckoutIdItemsId1MetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves a summary of the account’s transactions, including total pay-ins and payouts
     * in the specified currency.
     *
     * @summary Retrieve Transaction Summary
     */
    get_apitransactionssummary(metadata?: types.GetApitransactionssummaryMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieves a detailed list of all transactions in the account.
     *
     * @summary Retrieve All Transactions
     */
    get_apitransactions(metadata?: types.GetApitransactionsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * **Retrieve the payouts that have processed by your account.**
     *
     * Get a list of every payout you have made. You can use Query params to filter your
     * request.
     *
     * @summary Get All Payouts
     */
    getAllPayouts(metadata?: types.GetAllPayoutsMetadataParam): Promise<FetchResponse<number, unknown>>;
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
    createAPayout(body?: types.CreateAPayoutBodyParam, metadata?: types.CreateAPayoutMetadataParam): Promise<FetchResponse<200, types.CreateAPayoutResponse200>>;
    /**
     * Get single payout
     *
     * @summary Get single payout
     */
    getSinglePayout(metadata: types.GetSinglePayoutMetadataParam): Promise<FetchResponse<200, types.GetSinglePayoutResponse200>>;
    /**
     * Update payout items
     *
     * @summary Update payout items
     */
    updatePayoutItems(body: types.UpdatePayoutItemsBodyParam, metadata: types.UpdatePayoutItemsMetadataParam): Promise<FetchResponse<number, unknown>>;
    updatePayoutItems(metadata: types.UpdatePayoutItemsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * If there is no available_at the confirmation will be effective immediately.
     *
     * If you send available_at, it will be available the date you stablished.
     *
     * @summary Confirm payout
     */
    confirmPayout(body: types.ConfirmPayoutBodyParam, metadata: types.ConfirmPayoutMetadataParam): Promise<FetchResponse<200, types.ConfirmPayoutResponse200>>;
    confirmPayout(metadata: types.ConfirmPayoutMetadataParam): Promise<FetchResponse<200, types.ConfirmPayoutResponse200>>;
    /**
     * Download CFDI
     *
     * @summary Download CFDI
     */
    downloadCfdi(metadata: types.DownloadCfdiMetadataParam): Promise<FetchResponse<200, types.DownloadCfdiResponse200>>;
    /**
     * See all your withrawal accounts
     *
     * @summary Retrieve Withdrawals History
     */
    getWithdrawals(metadata?: types.GetWithdrawalsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * See all your withrawal accounts
     *
     * @summary Retrieve Active Withdrawal Bank Accounts
     */
    getActiveWithrawalAccounts(body?: types.GetActiveWithrawalAccountsBodyParam, metadata?: types.GetActiveWithrawalAccountsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * In this section you will be able to add a payment method for your withdrawals. You can
     * add a debit card or add your bank account with "clabe number".
     *
     * @summary Create New Payment Method
     */
    createPaymentMethod(body?: types.CreatePaymentMethodBodyParam, metadata?: types.CreatePaymentMethodMetadataParam): Promise<FetchResponse<200, types.CreatePaymentMethodResponse200>>;
    /**
     * See all your withrawal accounts
     *
     * @summary Get Client Billing Information
     */
    getClientBillingInformation(body: types.GetClientBillingInformationBodyParam, metadata: types.GetClientBillingInformationMetadataParam): Promise<FetchResponse<number, unknown>>;
    getClientBillingInformation(metadata: types.GetClientBillingInformationMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Create Account Gateway Keys
     *
     * @summary Create Account Gateway Keys
     */
    createAccountGatewayKeys(body: types.CreateAccountGatewayKeysBodyParam, metadata: types.CreateAccountGatewayKeysMetadataParam): Promise<FetchResponse<number, unknown>>;
    createAccountGatewayKeys(metadata: types.CreateAccountGatewayKeysMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Once a payment method is created, you can modify its details using the following
     * endpoint.
     *
     * @summary Update Payment Method
     */
    updateAPaymentMethod(body: types.UpdateAPaymentMethodBodyParam, metadata: types.UpdateAPaymentMethodMetadataParam): Promise<FetchResponse<number, unknown>>;
    updateAPaymentMethod(metadata: types.UpdateAPaymentMethodMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * If a payment method is no longer needed, you can delete it using this endpoint.
     *
     * @summary Delete Payment Method
     */
    deleteAPaymentMethod(body: types.DeleteAPaymentMethodBodyParam, metadata: types.DeleteAPaymentMethodMetadataParam): Promise<FetchResponse<number, unknown>>;
    deleteAPaymentMethod(metadata: types.DeleteAPaymentMethodMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Update account gateway
     *
     * @summary Update Account Gateway
     */
    updateAccountGateway(body: types.UpdateAccountGatewayBodyParam, metadata: types.UpdateAccountGatewayMetadataParam): Promise<FetchResponse<number, unknown>>;
    updateAccountGateway(metadata: types.UpdateAccountGatewayMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a list of banks by country. You can use this list to create a dropdown menu or to
     * verify that we operate with the bank you need.
     *
     * @summary Get All Banks by Country
     */
    getAllBanksByCountry(metadata?: types.GetAllBanksByCountryMetadataParam): Promise<FetchResponse<200, types.GetAllBanksByCountryResponse200>>;
    /**
     * This endpoint responds with a single bank. Send the bank id in order to receive the
     * banks detailed information.
     *
     * @summary Get Single Bank
     */
    getSingleBank(metadata: types.GetSingleBankMetadataParam): Promise<FetchResponse<200, types.GetSingleBankResponse200>>;
    /**
     * Retrieve the list of cards that are active in your account.
     *
     * @summary Retrieve All Stored Cards
     */
    getAllCards(metadata?: types.GetAllCardsMetadataParam): Promise<FetchResponse<200, types.GetAllCardsResponse200>>;
    /**
     * Add a card to your account which you will be able to use to receive money or make
     * payments.
     *
     * @summary Create and Store a Card
     */
    createCard(body?: types.CreateCardBodyParam, metadata?: types.CreateCardMetadataParam): Promise<FetchResponse<200, types.CreateCardResponse200>>;
    /**
     * Retrieve the information of an specific card in your accorunt by using this endpoint.
     *
     * @summary Retrieve a Single Card
     */
    getSingleCard(metadata: types.GetSingleCardMetadataParam): Promise<FetchResponse<200, types.GetSingleCardResponse200>>;
    /**
     * Delete card
     *
     * @summary Delete Stored Card
     */
    deleteCard(metadata: types.DeleteCardMetadataParam): Promise<FetchResponse<200, types.DeleteCardResponse200>>;
    /**
     * With this endpoint you can get a list of all the CFDI uses in Mexico. With this you can
     * create a dropdown list with CFDI Uses.
     *
     * @summary Get CFDI uses
     */
    getCfdiUses(metadata?: types.GetCfdiUsesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * With this endpoint you can get a list of all the CFDI uses in Mexico. With this you can
     * create a dropdown list with CFDI Uses.
     *
     * @summary Get Countries
     */
    getCountries(metadata?: types.GetCountriesMetadataParam): Promise<FetchResponse<200, types.GetCountriesResponse200>>;
    /**
     * With this endpoint you can get a list of all the CFDI uses in Mexico. With this you can
     * create a dropdown list with CFDI Uses.
     *
     * @summary Get States
     */
    getStates(metadata?: types.GetStatesMetadataParam): Promise<FetchResponse<200, types.GetStatesResponse200>>;
    /**
     * With this endpoint you can get a list of all the CFDI uses in Mexico. With this you can
     * create a dropdown list with CFDI Uses.
     *
     * @summary Get Zipcode
     */
    getZipcode(metadata?: types.GetZipcodeMetadataParam): Promise<FetchResponse<200, types.GetZipcodeResponse200>>;
    /**
     * With this endpoint you can get a list of all the CFDI uses in Mexico. With this you can
     * create a dropdown list with CFDI Uses.
     *
     * @summary Get Localities
     */
    getLocalities(metadata?: types.GetLocalitiesMetadataParam): Promise<FetchResponse<200, types.GetLocalitiesResponse200>>;
    /**
     * With this endpoint you can get a list of all the CFDI uses in Mexico. With this you can
     * create a dropdown list with CFDI Uses.
     *
     * @summary Get Catalog
     */
    getCatalog(metadata?: types.GetCatalogMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * With this endpoint you can get a list of all the CFDI uses in Mexico. With this you can
     * create a dropdown list with CFDI Uses.
     *
     * @summary Get Billing Form
     */
    getBillingForm(metadata?: types.GetBillingFormMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * With this endpoint you can retrieve the list of exchanges by currency base
     *
     * @summary Retrieve Exchanges by Currency Base
     */
    getExchangesByCurrencyBase(metadata?: types.GetExchangesByCurrencyBaseMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get a complete list of all the exchanges available on **Ecart Pay**
     *
     * @summary Retrieve Available Currencies
     */
    getExchangesAvailable(metadata?: types.GetExchangesAvailableMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Use this template to retreive all the templates saved on your account.
     *
     * @summary Retrieve All Payment Link Templates
     */
    getAllTemplates(metadata?: types.GetAllTemplatesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This endpoint allows you to create a new payment link template.
     *
     * quantity_uses = -1 for infinite uses.
     *
     * @summary Create Payment Link Template
     */
    createTemplate(body?: types.CreateTemplateBodyParam, metadata?: types.CreateTemplateMetadataParam): Promise<FetchResponse<200, types.CreateTemplateResponse200>>;
    /**
     * This request will get you an specific template on your account.
     *
     * @summary Retrieve Specific Payment Link Template
     */
    getTemplate(metadata: types.GetTemplateMetadataParam): Promise<FetchResponse<200, types.GetTemplateResponse200>>;
    /**
     * Use this enpoint to update your templates.
     *
     * @summary Update Payment Link Status
     */
    updateTemplateCopy(body?: types.UpdateTemplateCopyBodyParam, metadata?: types.UpdateTemplateCopyMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get all customers
     *
     * @summary Retrieve Customers
     */
    getAllCustomers(metadata: types.GetAllCustomersMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Create customer
     *
     * @summary Create Customer
     */
    createCustomer(body?: types.CreateCustomerBodyParam, metadata?: types.CreateCustomerMetadataParam): Promise<FetchResponse<200, types.CreateCustomerResponse200>>;
    /**
     * Get customer cards
     *
     * @summary Retrieve Customer Cards
     */
    getCustomerCards(metadata: types.GetCustomerCardsMetadataParam): Promise<FetchResponse<200, types.GetCustomerCardsResponse200>>;
    /**
     * Create customer card
     *
     * @summary Create Customer Card
     */
    createCustomerCard(body: types.CreateCustomerCardBodyParam, metadata: types.CreateCustomerCardMetadataParam): Promise<FetchResponse<200, types.CreateCustomerCardResponse200>>;
    createCustomerCard(metadata: types.CreateCustomerCardMetadataParam): Promise<FetchResponse<200, types.CreateCustomerCardResponse200>>;
    /**
     * Update customer card as default
     *
     * @summary Update Customer Card as Default
     */
    updateCustomerCardAsDefault(metadata: types.UpdateCustomerCardAsDefaultMetadataParam): Promise<FetchResponse<200, types.UpdateCustomerCardAsDefaultResponse200>>;
    /**
     * Delete customer card
     *
     * @summary Delete Customer Card
     */
    deleteCustomerCard(metadata: types.DeleteCustomerCardMetadataParam): Promise<FetchResponse<200, types.DeleteCustomerCardResponse200>>;
    /**
     * Create customer token
     *
     * @summary Create Customer Token
     */
    createCustomerToken(metadata: types.CreateCustomerTokenMetadataParam): Promise<FetchResponse<200, types.CreateCustomerTokenResponse200>>;
    /**
     * ## Add Payment Method for Customer
     *
     * This endpoint allows you to add a payment method for a specific customer.
     *
     * ### Request Body
     *
     * - `name` (string, required): The name associated with the payment method.
     * - `business_name` (string, required): The business name associated with the payment
     * method.
     * - `bank` (string, required): The bank associated with the payment method.
     * - `number` (string, required): The number associated with the payment method.
     * - `method` (string, required): The payment method type.
     * - `country` (string, required): The country associated with the payment method.
     *
     *
     * ### Response
     *
     * - `authorization_id` (string): The authorization ID of the payment method.
     * - `account_id` (string): The account ID of the payment method.
     * - `customer_id` (string): The customer ID associated with the payment method.
     * - `name` (string): The name associated with the payment method.
     * - `bank` (string): The bank associated with the payment method.
     * - `business_name` (string): The business name associated with the payment method.
     * - `number` (string): The number associated with the payment method.
     * - `method` (string): The payment method type.
     * - `country` (string): The country associated with the payment method.
     * - `default` (boolean): Indicates if the payment method is set as default.
     * - `deleted` (boolean): Indicates if the payment method is deleted.
     * - `id` (string): The ID of the payment method.
     *
     *
     * ### Example
     *
     * ``` json
     * {
     *     "authorization_id": "6189be80d3xw1598221a5e95",
     *     "account_id": "5d2d436e333e000449065b",
     *     "customer_id": "65aff37afebx32a42f88c178",
     *     "name": "Main",
     *     "bank": "40002",
     *     "business_name": "John Doe",
     *     "number": "1234567891234567",
     *     "method": "clabe",
     *     "country": "MX",
     *     "default": true,
     *     "deleted": false,
     *     "id": "65b012a47f3wx22421087230"
     * }
     *
     *  ```
     *
     * @summary Create Customer Payment Method
     */
    createCustomerPaymentMethod(body: types.CreateCustomerPaymentMethodBodyParam, metadata: types.CreateCustomerPaymentMethodMetadataParam): Promise<FetchResponse<200, types.CreateCustomerPaymentMethodResponse200>>;
    createCustomerPaymentMethod(metadata: types.CreateCustomerPaymentMethodMetadataParam): Promise<FetchResponse<200, types.CreateCustomerPaymentMethodResponse200>>;
    /**
     * Get all chargebacks
     *
     * @summary Retrieve All Chargebacks
     */
    getAllChargebacks(metadata?: types.GetAllChargebacksMetadataParam): Promise<FetchResponse<200, types.GetAllChargebacksResponse200>>;
    /**
     * Create chargeback
     *
     * @summary Create Chargeback
     */
    createChargeback(body?: types.CreateChargebackBodyParam, metadata?: types.CreateChargebackMetadataParam): Promise<FetchResponse<200, types.CreateChargebackResponse200>>;
    /**
     * Get single chargeback
     *
     * @summary Retrieve a Single Chargeback
     */
    getSingleChargeback(metadata: types.GetSingleChargebackMetadataParam): Promise<FetchResponse<200, types.GetSingleChargebackResponse200>>;
    /**
     * Update chargeback
     *
     * @summary Update Chargeback
     */
    updateChargeback(body: types.UpdateChargebackBodyParam, metadata: types.UpdateChargebackMetadataParam): Promise<FetchResponse<200, types.UpdateChargebackResponse200>>;
    updateChargeback(metadata: types.UpdateChargebackMetadataParam): Promise<FetchResponse<200, types.UpdateChargebackResponse200>>;
    /**
     * Get all gateways
     *
     * @summary Retrieve All Available Payment Gateways
     */
    getAllGateways(metadata?: types.GetAllGatewaysMetadataParam): Promise<FetchResponse<200, types.GetAllGatewaysResponse200>>;
    /**
     * Get single gateway
     *
     * @summary Retrieve Single Payment Gateway
     */
    getSingleGateway(metadata: types.GetSingleGatewayMetadataParam): Promise<FetchResponse<200, types.GetSingleGatewayResponse200>>;
    /**
     * Update gateway
     *
     * @summary Update Payment Gateway
     */
    updateGateway(body: types.UpdateGatewayBodyParam, metadata: types.UpdateGatewayMetadataParam): Promise<FetchResponse<200, types.UpdateGatewayResponse200>>;
    updateGateway(metadata: types.UpdateGatewayMetadataParam): Promise<FetchResponse<200, types.UpdateGatewayResponse200>>;
    /**
     * Update gateway method
     *
     * @summary Update Gateway Method
     */
    updateGatewayMethod(body: types.UpdateGatewayMethodBodyParam, metadata: types.UpdateGatewayMethodMetadataParam): Promise<FetchResponse<200, types.UpdateGatewayMethodResponse200>>;
    updateGatewayMethod(metadata: types.UpdateGatewayMethodMetadataParam): Promise<FetchResponse<200, types.UpdateGatewayMethodResponse200>>;
    /**
     * Get all notifications
     *
     * @summary Get All Notifications
     */
    getAllNotifications(metadata?: types.GetAllNotificationsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Update notification seen
     *
     * @summary Update Notification Seen
     */
    updateNotificationSeen(metadata: types.UpdateNotificationSeenMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get all activity
     *
     * @summary Get All Activity
     */
    getAllActivity(metadata?: types.GetAllActivityMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get Activity
     *
     * @summary Get Activity
     */
    getActivity(metadata: types.GetActivityMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Create order
     *
     * @summary Create Woocommerce Order
     */
    createOrder1(metadata?: types.CreateOrder1MetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Use this endpoint to create a tokenized card.
     *
     * @summary Create Tokenized Card
     */
    createToken1(body: types.CreateToken1BodyParam, metadata?: types.CreateToken1MetadataParam): Promise<FetchResponse<200, types.CreateToken1Response200>>;
    /**
     * Get all scopes
     *
     * @summary Get all Scopes
     */
    getAllScopes(metadata?: types.GetAllScopesMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Create scopes token
     *
     * @summary Create Scopes Token
     */
    createScopesToken(body?: types.CreateScopesTokenBodyParam, metadata?: types.CreateScopesTokenMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get all subscriptions
     *
     * @summary Get All Subscriptions
     */
    getAllSubscriptions(metadata?: types.GetAllSubscriptionsMetadataParam): Promise<FetchResponse<200, types.GetAllSubscriptionsResponse200>>;
    /**
     * Create subscription
     *
     * @summary Create Subscription
     */
    createSubscription(body: types.CreateSubscriptionBodyParam, metadata: types.CreateSubscriptionMetadataParam): Promise<FetchResponse<200, types.CreateSubscriptionResponse200>>;
    /**
     * Get my subscriptions
     *
     * @summary Get My Subscriptions
     */
    getMySubscriptions(metadata?: types.GetMySubscriptionsMetadataParam): Promise<FetchResponse<200, types.GetMySubscriptionsResponse200>>;
    /**
     * Allows customers to update their own subscriptions from their dashboard. This is the
     * endpoint used by the customer portal when they add payment methods.
     *
     * @summary Customer Update Subscription
     */
    updateFromCustomerASubscriptions(body: types.UpdateFromCustomerASubscriptionsBodyParam, metadata: types.UpdateFromCustomerASubscriptionsMetadataParam): Promise<FetchResponse<200, types.UpdateFromCustomerASubscriptionsResponse200>>;
    updateFromCustomerASubscriptions(metadata: types.UpdateFromCustomerASubscriptionsMetadataParam): Promise<FetchResponse<200, types.UpdateFromCustomerASubscriptionsResponse200>>;
    /**
     * Update Customer
     *
     */
    put_apicustomersId(body: types.PutApicustomersIdBodyParam, metadata: types.PutApicustomersIdMetadataParam): Promise<FetchResponse<200, types.PutApicustomersIdResponse200>>;
    put_apicustomersId(metadata: types.PutApicustomersIdMetadataParam): Promise<FetchResponse<200, types.PutApicustomersIdResponse200>>;
    /**
     * Delete Customer
     *
     */
    delete_apicustomersId(metadata: types.DeleteApicustomersIdMetadataParam): Promise<FetchResponse<200, types.DeleteApicustomersIdResponse200>>;
    /**
     * Retrieve Interest-free and Fixed Installments Configuration
     *
     */
    get_apicardsmsiConfiguration(metadata?: types.GetApicardsmsiConfigurationMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Create or Update Custom Interest-free and Fixed Installments configuration
     *
     */
    post_apicardsmsiConfiguration(body?: types.PostApicardsmsiConfigurationBodyParam, metadata?: types.PostApicardsmsiConfigurationMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get Client Billing Information
     *
     */
    get_apibillingsclients(metadata?: types.GetApibillingsclientsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Create Client Billing Information
     *
     */
    post_apibillingsclients(body?: types.PostApibillingsclientsBodyParam, metadata?: types.PostApibillingsclientsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get Order Invoice Creation
     *
     */
    get_apiorderspublicOrder_id(metadata: types.GetApiorderspublicOrderIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Resend Invitation Link
     *
     */
    post_apisubscriptionsIdResendInvitationLink(metadata: types.PostApisubscriptionsIdResendInvitationLinkMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Create a Subscription Template
     *
     */
    post_apisubscriptionsTemplate(body: types.PostApisubscriptionsTemplateBodyParam, metadata?: types.PostApisubscriptionsTemplateMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get All Subcription Templates
     *
     * @summary Get All Subscrption Templates
     */
    get_apisubscriptionsTemplate(metadata?: types.GetApisubscriptionsTemplateMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Turn on/off Interest-free and Fixed Installments Configurations
     *
     */
    post_apicardsmsiactivate(body?: types.PostApicardsmsiactivateBodyParam, metadata?: types.PostApicardsmsiactivateMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Create Order Invoice
     *
     */
    post_apibillings(body?: types.PostApibillingsBodyParam, metadata?: types.PostApibillingsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get Billing Providers
     *
     */
    get_apibillingsproviders(metadata?: types.GetApibillingsprovidersMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Use this endpoint to retrieve information of an specific order.
     *
     * @summary Get Order
     */
    get_apiordersId(metadata: types.GetApiordersIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Update Order
     *
     */
    put_apiordersOrder_id(body: types.PutApiordersOrderIdBodyParam, metadata: types.PutApiordersOrderIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    put_apiordersOrder_id(metadata: types.PutApiordersOrderIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Create a Refund
     *
     */
    post_apiordersOrder_idRefund(body: types.PostApiordersOrderIdRefundBodyParam, metadata: types.PostApiordersOrderIdRefundMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Use the following endpoint to update an existing payment link template. You can adjust
     * various parameters such as the recipient's details, item information, usage limits, and
     * more.
     *
     * @summary Update Payment Link Template
     */
    put_apitemplatesId(body: types.PutApitemplatesIdBodyParam, metadata: types.PutApitemplatesIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    put_apitemplatesId(metadata: types.PutApitemplatesIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Ecart Pay allows you to delete payment link templates when they are no longer needed.
     *
     * @summary Delete Payment Link Template
     */
    delete_apitemplatesId(metadata: types.DeleteApitemplatesIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Retrieve detailed information about a specific transaction, including fees, gateway
     * details, and associated orders.
     *
     * @summary Retrieve a Single Transaction
     */
    get_apitransactionsTransaction_id(metadata: types.GetApitransactionsTransactionIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get Public Checkout
     *
     */
    get_apicheckoutsId1(metadata: types.GetApicheckoutsId1MetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Use this endpoint to get all the relevant information about this order, including the
     * unique transaction CLABE if it has been already generated and assigned to the order.
     *
     * @summary Get Public Order
     */
    get_apiorderspublicId(metadata: types.GetApiorderspublicIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Use this endpoint to activate Bank Transfers for an order and assign a CLABE for
     * customer to pay. This will generate a unique transaction CLABE for this specific order.
     *
     * @summary Configure Order for Bank Transfers
     */
    post_apiordersIdProcess(body: types.PostApiordersIdProcessBodyParam, metadata: types.PostApiordersIdProcessMetadataParam): Promise<FetchResponse<number, unknown>>;
    post_apiordersIdProcess(metadata: types.PostApiordersIdProcessMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Get single subscription
     *
     * @summary Get Single Subscription
     */
    getSingleSubscription(metadata: types.GetSingleSubscriptionMetadataParam): Promise<FetchResponse<200, types.GetSingleSubscriptionResponse200>>;
    /**
     * This critical endpoint adds or removes payment methods to a subscription. When card_ids
     * are added, the system automatically determines the payment processing schedule based on
     * the subscription's trial periods, billing cycles, and payment dates.
     *
     * @summary Update Subscription
     */
    put_apisubscriptionsId(body: types.PutApisubscriptionsIdBodyParam, metadata: types.PutApisubscriptionsIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    put_apisubscriptionsId(metadata: types.PutApisubscriptionsIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This endpoint retrieves a list of invoices associated with registered clients.
     *
     * @summary Get Client Billing Invoices
     */
    get_apiinvoices(metadata?: types.GetApiinvoicesMetadataParam): Promise<FetchResponse<number, unknown>>;
}
declare const createSDK: SDK;
export = createSDK;
