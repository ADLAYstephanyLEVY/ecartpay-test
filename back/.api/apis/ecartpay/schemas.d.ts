declare const ConfirmPayout: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly available_at: {
                readonly type: "string";
                readonly examples: readonly ["2022-04-21T18:00:00.000Z"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly payout_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["payout_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly examples: readonly ["5fab3b20b40b0a613e1b6f15"];
                };
                readonly amount: {
                    readonly type: "number";
                    readonly examples: readonly [10];
                };
                readonly authorization_id: {
                    readonly type: "string";
                    readonly examples: readonly ["6189be80df291598221a5e95"];
                };
                readonly available_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-04-21T18:00:00.000Z"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-04-18T00:44:39.366Z"];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["MXN"];
                };
                readonly exchange: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                };
                readonly fee: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["625cb4778541531b52506d3b"];
                };
                readonly reference: {
                    readonly type: "string";
                    readonly examples: readonly ["625cb4778541531b52506d38"];
                };
                readonly reference_id: {
                    readonly type: "string";
                    readonly examples: readonly ["2923283981"];
                };
                readonly require_confirmation: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["pending"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-04-18T00:45:00.242Z"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateAPayout: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly amount: {
                readonly type: "number";
                readonly examples: readonly [10];
            };
            readonly currency: {
                readonly type: "string";
                readonly examples: readonly ["MXN"];
            };
            readonly customer_id: {
                readonly type: "string";
                readonly examples: readonly ["657b928db4c08f6f66847b09"];
            };
            readonly payment_method_id: {
                readonly type: "string";
                readonly examples: readonly ["65ae8d76219f93a7c14ceb82"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly examples: readonly ["5dfab0626e963414d2475236"];
                };
                readonly amount: {
                    readonly type: "number";
                    readonly examples: readonly [10];
                };
                readonly authorization_id: {
                    readonly type: "string";
                    readonly examples: readonly ["6189d4c4e1fd65512e9c5264"];
                };
                readonly available_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2021-11-29T20:49:23.889Z"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2021-11-29T20:49:23.891Z"];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["MXN"];
                };
                readonly customer_id: {
                    readonly type: "string";
                    readonly examples: readonly ["657b928db4c08f6f66847b09"];
                };
                readonly exchange: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                };
                readonly fee: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["61a53cd3f6ea776ee3b37498"];
                };
                readonly payment_method_id: {
                    readonly type: "string";
                    readonly examples: readonly ["65ae8d76219f93a7c14ceb82"];
                };
                readonly reference: {
                    readonly type: "string";
                    readonly examples: readonly ["61a53cd3f6ea776ee3b37495"];
                };
                readonly reference_id: {
                    readonly type: "string";
                    readonly examples: readonly ["1236547"];
                };
                readonly require_confirmation: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["paid"];
                };
                readonly transactions: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly account_id: {
                                readonly type: "string";
                                readonly examples: readonly ["TR00001140A"];
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly examples: readonly [10];
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly examples: readonly ["MXN"];
                            };
                            readonly fee: {
                                readonly type: "number";
                                readonly examples: readonly [0];
                            };
                            readonly gateway: {
                                readonly type: "string";
                                readonly examples: readonly ["pay"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["65afee87ec939a1cae6223e9"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["paid"];
                            };
                            readonly transaction_id: {
                                readonly type: "string";
                                readonly examples: readonly ["TR00001140A"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["charge"];
                            };
                        };
                    };
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2021-11-29T20:49:23.891Z"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["payouts validation failed: amount: Cast to DecimalType failed for value \"NaN\" (type number) at path \"amount\""];
                };
                readonly statusCode: {
                    readonly type: "number";
                    readonly examples: readonly [400];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateAccountGatewayKeys: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly currency: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                    readonly examples: readonly ["MXN"];
                };
                readonly examples: readonly ["MXN"];
            };
            readonly private_key: {
                readonly type: "string";
                readonly examples: readonly ["key_zqgc9wWxW12muTSpnYyrzg"];
            };
            readonly public_key: {
                readonly type: "string";
                readonly examples: readonly ["key_H8WXW7qcgqasYqjdvKZMqPA"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly gateway_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["gateway_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const CreateCard: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly exp_month: {
                readonly type: "string";
                readonly examples: readonly ["01"];
            };
            readonly exp_year: {
                readonly type: "string";
                readonly examples: readonly ["2012"];
            };
            readonly name: {
                readonly type: "string";
                readonly examples: readonly ["Ecart Pay"];
            };
            readonly number: {
                readonly type: "string";
                readonly examples: readonly ["4242-4242-4242-4142"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly examples: readonly ["62559ba8085afe001606a916"];
                };
                readonly brand: {
                    readonly type: "string";
                    readonly examples: readonly ["visa"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-04-12T16:35:32.139Z"];
                };
                readonly exp_month: {
                    readonly type: "string";
                    readonly examples: readonly ["01"];
                };
                readonly exp_year: {
                    readonly type: "string";
                    readonly examples: readonly ["2012"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["6255aa54c2c8a9f87135daad"];
                };
                readonly last: {
                    readonly type: "string";
                    readonly examples: readonly ["4142"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Ecart Pay"];
                };
                readonly number: {
                    readonly type: "string";
                    readonly examples: readonly ["U2FsdGVkX1/8Y7XiovRkPZ3vZ0VYqT/AWibdiAN+A1VGAXcQrHbX9A=="];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-04-12T16:35:32.139Z"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateChargeback: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly payout_id: {
                readonly type: "string";
                readonly examples: readonly ["{{payout_id}}"];
            };
            readonly reason: {
                readonly type: "string";
                readonly examples: readonly ["I did not get the product."];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly examples: readonly ["618dac6f05dcae00168cfa2d"];
                };
                readonly amount: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-10-26T18:11:46.451Z"];
                };
                readonly created_by: {
                    readonly type: "string";
                    readonly examples: readonly ["5fab3b20b40b0a613e1b6f15"];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["USD"];
                };
                readonly documents: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly expiration_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-11-02T18:11:46.435Z"];
                };
                readonly files: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly gateway: {
                    readonly type: "string";
                    readonly examples: readonly ["pay"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["653aabe21eded36fa9298387"];
                };
                readonly payout_id: {
                    readonly type: "string";
                    readonly examples: readonly ["653aa3f22d4d6fb3c35a479a"];
                };
                readonly reason: {
                    readonly type: "string";
                    readonly examples: readonly ["I did not get the product."];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["created"];
                };
                readonly transaction_id: {
                    readonly type: "string";
                    readonly examples: readonly ["653aa3f42d4d6fb3c35a47ce"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-10-26T18:11:46.451Z"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateCheckout: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly customer_id: {
                readonly type: "string";
                readonly description: "The ID of the customer.";
            };
            readonly title: {
                readonly type: "string";
                readonly description: "Title of the checkout.";
            };
            readonly subtitle: {
                readonly type: "string";
                readonly description: "Subtitle of the checkout.";
            };
            readonly image_url: {
                readonly type: "string";
                readonly description: "URL of the associated image.";
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "Currency for the transaction.";
                readonly examples: readonly ["MXN"];
            };
            readonly amounts: {
                readonly type: "array";
                readonly items: {
                    readonly type: "number";
                    readonly examples: readonly [100];
                };
                readonly description: "Array of amounts available for selection.";
                readonly examples: readonly [100, 200, 500, 100];
            };
            readonly concept: {
                readonly type: "string";
                readonly description: "Description of the checkout concept.";
                readonly examples: readonly ["Recharge"];
            };
            readonly items: {
                readonly type: "array";
                readonly description: "Details of the items included in the checkout.";
                readonly items: {
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Name of the item.";
                        };
                        readonly quantity: {
                            readonly type: "number";
                        };
                        readonly price: {
                            readonly type: "number";
                        };
                        readonly discount: {
                            readonly type: "number";
                        };
                        readonly is_service: {
                            readonly type: "boolean";
                            readonly description: "Indicates if the item is a service.";
                        };
                        readonly id: {
                            readonly type: "string";
                            readonly description: "ID of the item.";
                        };
                    };
                    readonly type: "object";
                };
            };
            readonly notify_url: {
                readonly type: "string";
                readonly description: "URL for receiving transaction notifications.";
                readonly examples: readonly ["https://example.com/webhooks/checkout?user_id=1"];
            };
            readonly reference_id: {
                readonly type: "string";
                readonly description: "Unique reference ID for the checkout.";
            };
            readonly reference: {
                readonly type: "string";
                readonly description: "Description of the reference.";
            };
        };
        readonly required: readonly ["currency", "amounts", "concept"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly ["Authorization"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly examples: readonly ["5fab3b20b40b0a613e1b6f15"];
                };
                readonly amounts: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "number";
                        readonly examples: readonly [100];
                    };
                    readonly examples: readonly [100, 200, 500, 100];
                };
                readonly concept: {
                    readonly type: "string";
                    readonly examples: readonly ["Recharge"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2024-01-17T16:37:03.012Z"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["65a8022fb3d93442ccf4f207"];
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly notify_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://example.com/webhooks/checkout?user_id=1"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2024-01-17T16:37:03.012Z"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateCustomer: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly first_name: {
                readonly type: "string";
                readonly examples: readonly ["Roberto Alejandro"];
            };
            readonly last_name: {
                readonly type: "string";
                readonly examples: readonly ["de la Cruz Martinez"];
            };
            readonly phone: {
                readonly type: "string";
                readonly examples: readonly ["8114854378"];
            };
            readonly user_id: {
                readonly type: "string";
                readonly examples: readonly ["004"];
            };
            readonly email: {
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly examples: readonly ["5fab3b20b40b0a613e1b6f15"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-12-14T23:41:01.359Z"];
                };
                readonly first_name: {
                    readonly type: "string";
                    readonly examples: readonly ["Roberto Alejandro"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["657b928db4c08f6f66847b09"];
                };
                readonly last_name: {
                    readonly type: "string";
                    readonly examples: readonly ["de la Cruz Martinez"];
                };
                readonly phone: {
                    readonly type: "string";
                    readonly examples: readonly ["8114854378"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-12-14T23:41:01.359Z"];
                };
                readonly user_id: {
                    readonly type: "string";
                    readonly examples: readonly ["004"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateCustomerCard: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly cvc: {
                readonly type: "string";
                readonly examples: readonly ["111"];
            };
            readonly exp_month: {
                readonly type: "string";
                readonly examples: readonly ["10"];
            };
            readonly exp_year: {
                readonly type: "string";
                readonly examples: readonly ["2028"];
            };
            readonly name: {
                readonly type: "string";
                readonly examples: readonly ["Roberto Alejandro de la Cruz"];
            };
            readonly number: {
                readonly type: "string";
                readonly examples: readonly ["4242424242424242"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly customer_id: {
                    readonly type: "string";
                    readonly examples: readonly ["65b9520fe35ed4b1662014d1"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["customer_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly brand: {
                    readonly type: "string";
                    readonly examples: readonly ["visa"];
                };
                readonly default: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["65b954d5e35ed4b1662014ef"];
                };
                readonly last: {
                    readonly type: "string";
                    readonly examples: readonly ["4242"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Roberto Alejandro de la Cruz"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateCustomerPaymentMethod: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly bank: {
                readonly type: "string";
                readonly examples: readonly ["40002"];
            };
            readonly business_name: {
                readonly type: "string";
                readonly examples: readonly ["John Doe"];
            };
            readonly country: {
                readonly type: "string";
                readonly examples: readonly ["MX"];
            };
            readonly method: {
                readonly type: "string";
                readonly examples: readonly ["clabe"];
            };
            readonly name: {
                readonly type: "string";
                readonly examples: readonly ["Main"];
            };
            readonly number: {
                readonly type: "string";
                readonly examples: readonly ["1234567891234567"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly customer_id: {
                    readonly type: "string";
                    readonly examples: readonly ["65b9520fe35ed4b1662014d1"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["customer_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly examples: readonly ["5fab3b20b40b0a613e1b6f15"];
                };
                readonly bank: {
                    readonly type: "string";
                    readonly examples: readonly ["40002"];
                };
                readonly business_name: {
                    readonly type: "string";
                    readonly examples: readonly ["John Doe"];
                };
                readonly country: {
                    readonly type: "string";
                    readonly examples: readonly ["MX"];
                };
                readonly customer_id: {
                    readonly type: "string";
                    readonly examples: readonly ["65b9520fe35ed4b1662014d1"];
                };
                readonly default: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly deleted: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["65b956f1e35ed4b166201512"];
                };
                readonly method: {
                    readonly type: "string";
                    readonly examples: readonly ["clabe"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Main"];
                };
                readonly number: {
                    readonly type: "string";
                    readonly examples: readonly ["1234567891234567"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateCustomerToken: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly customer_id: {
                    readonly type: "string";
                    readonly examples: readonly ["65b9520fe35ed4b1662014d1"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["customer_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly token: {
                    readonly type: "string";
                    readonly examples: readonly ["eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODA0ODNiZWFiOWQ5NDVhODZkYTNjMSIsImN1c3RvbWVyX2lkIjoiNjViOTUyMGZlMzVlZDRiMTY2MjAxNGQxIiwiaWF0IjoxNzA2NjQ1MjA2LCJleHAiOjE3MDY2NDU4MDZ9.vusdtR4K6HYc3hnTSbpye7KsIbpp5ZN79mHY2r8Ro6_kyzFt1M59e7i-cMRjntpkMpGlHO14Om_8LFIi0VaPDQ"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateOrder: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly currency: {
                readonly type: "string";
                readonly examples: readonly ["MXN"];
            };
            readonly email: {
                readonly type: "string";
                readonly examples: readonly ["a.cruz@envia.com"];
            };
            readonly first_name: {
                readonly type: "string";
                readonly examples: readonly ["Moises"];
            };
            readonly items: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Brazalete religioso plateado BR3017"];
                        };
                        readonly price: {
                            readonly type: "number";
                            readonly examples: readonly [243.33];
                        };
                        readonly quantity: {
                            readonly type: "number";
                            readonly examples: readonly [1];
                        };
                    };
                };
            };
            readonly last_name: {
                readonly type: "string";
                readonly examples: readonly ["Garcia"];
            };
            readonly notify_url: {
                readonly type: "string";
                readonly examples: readonly ["https://example.com/customer/$id"];
            };
            readonly phone: {
                readonly type: "string";
                readonly examples: readonly ["9341024062"];
            };
            readonly shipping_address: {
                readonly type: "object";
                readonly properties: {
                    readonly address1: {
                        readonly type: "string";
                        readonly examples: readonly ["Beliario Dominguez"];
                    };
                    readonly address2: {
                        readonly type: "string";
                        readonly examples: readonly ["Semillero"];
                    };
                    readonly city: {
                        readonly type: "string";
                        readonly examples: readonly ["Monterrey"];
                    };
                    readonly country: {
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly examples: readonly ["MX"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Mexico"];
                            };
                        };
                    };
                    readonly first_name: {
                        readonly type: "string";
                        readonly examples: readonly ["Moises"];
                    };
                    readonly last_name: {
                        readonly type: "string";
                        readonly examples: readonly ["Garcia"];
                    };
                    readonly phone: {
                        readonly type: "string";
                        readonly examples: readonly ["9341024062"];
                    };
                    readonly postal_code: {
                        readonly type: "string";
                        readonly examples: readonly ["64000"];
                    };
                    readonly state: {
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly examples: readonly ["TB"];
                            };
                        };
                    };
                };
            };
            readonly shipping_items: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly amount: {
                            readonly type: "number";
                            readonly examples: readonly [160];
                        };
                        readonly carrier: {
                            readonly type: "string";
                            readonly examples: readonly ["OWN"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Express Shipping"];
                        };
                    };
                };
            };
            readonly token: {
                readonly type: "string";
                readonly description: "Tokenized Card";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly examples: readonly ["62559ba8085afe001606a916"];
                };
                readonly authorization_id: {
                    readonly type: "string";
                    readonly examples: readonly ["62559c4712b432a003e92361"];
                };
                readonly confirmed: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-04-12T18:21:43.721Z"];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["MXN"];
                };
                readonly discounts: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly email: {
                    readonly type: "string";
                    readonly examples: readonly ["test@ecartpay.com"];
                };
                readonly fee: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly first_name: {
                    readonly type: "string";
                    readonly examples: readonly ["Moises"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["6255c337c589a8c8e20f865e"];
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly discount: {
                                readonly type: "number";
                                readonly examples: readonly [0];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Brazalete religioso plateado BR3017"];
                            };
                            readonly price: {
                                readonly type: "number";
                                readonly examples: readonly [243.33];
                            };
                            readonly quantity: {
                                readonly type: "number";
                                readonly examples: readonly [1];
                            };
                            readonly tax: {
                                readonly type: "number";
                                readonly examples: readonly [0];
                            };
                            readonly total: {
                                readonly type: "number";
                                readonly examples: readonly [243.33];
                            };
                        };
                    };
                };
                readonly last_name: {
                    readonly type: "string";
                    readonly examples: readonly ["Garcia"];
                };
                readonly notify_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://example.com/customer/290"];
                };
                readonly number: {
                    readonly type: "string";
                    readonly examples: readonly ["OR01667152"];
                };
                readonly pay_link: {
                    readonly type: "string";
                    readonly examples: readonly ["https://sandbox.ecartpay.com/pay/6255c337c589a8c8e20f865e"];
                };
                readonly phone: {
                    readonly type: "string";
                    readonly examples: readonly ["9341000062"];
                };
                readonly redirect_url: {
                    readonly type: "string";
                    readonly examples: readonly ["https://example.com/order/10"];
                };
                readonly risk_notes: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly risk_score: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly shipping_items: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["created"];
                };
                readonly totals: {
                    readonly type: "object";
                    readonly properties: {
                        readonly discount: {
                            readonly type: "number";
                            readonly examples: readonly [0];
                        };
                        readonly shipping: {
                            readonly type: "number";
                            readonly examples: readonly [0];
                        };
                        readonly subtotal: {
                            readonly type: "number";
                            readonly examples: readonly [243.33];
                        };
                        readonly tax: {
                            readonly type: "number";
                            readonly examples: readonly [0];
                        };
                        readonly total: {
                            readonly type: "number";
                            readonly examples: readonly [243.33];
                        };
                    };
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-04-12T18:21:43.721Z"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateOrder1: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const CreatePaymentMethod: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly business_name: {
                readonly type: "string";
                readonly examples: readonly ["846180000400000001"];
            };
            readonly method: {
                readonly type: "string";
                readonly examples: readonly ["clabe"];
            };
            readonly name: {
                readonly type: "string";
                readonly examples: readonly ["Personal"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly business_name: {
                    readonly type: "string";
                    readonly examples: readonly ["846180000400000001"];
                };
                readonly country: {
                    readonly type: "string";
                    readonly examples: readonly ["MX"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["6255a30bd4b006320baff520"];
                };
                readonly method: {
                    readonly type: "string";
                    readonly examples: readonly ["clabe"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Personal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateScopesToken: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly id: {
                readonly type: "string";
                readonly examples: readonly ["65e252b6eba28d7064cd71ba"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const CreateSubscription: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly customer_id: {
                readonly type: "string";
                readonly examples: readonly ["6876eabe755d394aca48f4f4"];
            };
            readonly subscription_id: {
                readonly type: "string";
                readonly examples: readonly ["682b6950141346605d2c23b8"];
            };
            readonly template_id: {
                readonly type: "string";
            };
            readonly amount: {
                readonly type: "number";
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "like \"MXN\" or \"USD\"";
            };
            readonly interval: {
                readonly type: "string";
                readonly enum: readonly ["daily", "weekly", "monthly", "quarterly", "semiannual", "yearly"];
            };
            readonly frequency: {
                readonly type: "number";
            };
            readonly service: {
                readonly type: "string";
                readonly description: "Name or label for the subscription service";
            };
            readonly trial_period_days: {
                readonly type: "number";
            };
            readonly end_date: {
                readonly type: "string";
            };
            readonly benefits: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly merchant_management: {
                readonly type: "boolean";
            };
            readonly notify_url: {
                readonly type: "string";
            };
            readonly billing_cycle: {
                readonly type: "object";
                readonly properties: {
                    readonly day: {
                        readonly type: "number";
                    };
                    readonly month: {
                        readonly type: "number";
                    };
                };
            };
        };
        readonly required: readonly ["customer_id"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly ["Authorization"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly examples: readonly ["5fab3b20b40b0a613e1b6f15"];
                };
                readonly amount: {
                    readonly type: "number";
                    readonly examples: readonly [100];
                };
                readonly attempts: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly card_ids: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["65b955dbe35ed4b166201500"];
                    };
                    readonly examples: readonly ["65b955dbe35ed4b166201500"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2025-05-13T16:54:10.877Z"];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["MXN"];
                };
                readonly customer_id: {
                    readonly type: "string";
                    readonly examples: readonly ["68223896dd296eef1c9a5171"];
                };
                readonly errors: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly frequency: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["68237932a690a499bbda3b25"];
                };
                readonly interval: {
                    readonly type: "string";
                    readonly examples: readonly ["monthly"];
                };
                readonly next_payment_date: {
                    readonly type: "string";
                    readonly examples: readonly ["2025-06-12T16:54:10.854Z"];
                };
                readonly service: {
                    readonly type: "string";
                    readonly examples: readonly ["Gold Plus"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["active"];
                };
                readonly trial_period_days: {
                    readonly type: "number";
                    readonly examples: readonly [30];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2025-05-13T16:54:10.877Z"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateTemplate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly currency: {
                readonly type: "string";
                readonly examples: readonly ["USD"];
            };
            readonly first_name: {
                readonly type: "string";
                readonly examples: readonly ["Stefany"];
            };
            readonly items: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Gold Neck BZ3909"];
                        };
                        readonly price: {
                            readonly type: "number";
                            readonly examples: readonly [2];
                        };
                        readonly quantity: {
                            readonly type: "number";
                            readonly examples: readonly [1];
                        };
                    };
                };
            };
            readonly name: {
                readonly type: "string";
                readonly examples: readonly ["Gold Neck Payment"];
            };
            readonly quantity_uses: {
                readonly type: "number";
                readonly examples: readonly [-1];
            };
            readonly shipping_address: {
                readonly type: "object";
                readonly properties: {
                    readonly address1: {
                        readonly type: "string";
                        readonly examples: readonly ["Belisario Dominguez"];
                    };
                    readonly address2: {
                        readonly type: "string";
                        readonly examples: readonly ["Semillero"];
                    };
                    readonly city: {
                        readonly type: "string";
                        readonly examples: readonly ["Miami"];
                    };
                    readonly country: {
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly examples: readonly ["US"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["United States"];
                            };
                        };
                    };
                    readonly first_name: {
                        readonly type: "string";
                        readonly examples: readonly ["Stefany"];
                    };
                    readonly last_name: {
                        readonly type: "string";
                        readonly examples: readonly ["Porras"];
                    };
                    readonly phone: {
                        readonly type: "string";
                        readonly examples: readonly ["4125684412"];
                    };
                    readonly postal_code: {
                        readonly type: "string";
                        readonly examples: readonly ["33101"];
                    };
                    readonly reference: {
                        readonly type: "string";
                        readonly examples: readonly ["reference"];
                    };
                    readonly state: {
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly examples: readonly ["FL"];
                            };
                        };
                    };
                };
            };
            readonly shipping_items: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly amount: {
                            readonly type: "number";
                            readonly examples: readonly [1];
                        };
                        readonly carrier: {
                            readonly type: "string";
                            readonly examples: readonly ["OWN"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Express Shipping"];
                        };
                    };
                };
            };
            readonly start_date: {
                readonly type: "string";
                readonly examples: readonly ["2021-06-18 12:00:00"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly examples: readonly ["5d2d436e3199ae000449065b"];
                };
                readonly authorization_id: {
                    readonly type: "string";
                    readonly examples: readonly ["6189d4c4e1fd65512e9c5264"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2021-11-29T21:13:33.947Z"];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["USD"];
                };
                readonly discounts: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly end_date: {};
                readonly first_name: {
                    readonly type: "string";
                    readonly examples: readonly ["Stefany"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["61a5427df6ea776ee3b38344"];
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly discount: {
                                readonly type: "number";
                                readonly examples: readonly [0];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Gold Neck BZ3909"];
                            };
                            readonly price: {
                                readonly type: "number";
                                readonly examples: readonly [2];
                            };
                            readonly quantity: {
                                readonly type: "number";
                                readonly examples: readonly [1];
                            };
                            readonly tax: {
                                readonly type: "number";
                                readonly examples: readonly [0];
                            };
                            readonly total: {
                                readonly type: "number";
                                readonly examples: readonly [2];
                            };
                        };
                    };
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Gold Neck Payment"];
                };
                readonly number: {
                    readonly type: "string";
                    readonly examples: readonly ["TE04725186"];
                };
                readonly quantity_uses: {
                    readonly type: "number";
                    readonly examples: readonly [-1];
                };
                readonly shipping_address: {
                    readonly type: "object";
                    readonly properties: {
                        readonly address1: {
                            readonly type: "string";
                            readonly examples: readonly ["Belisario Dominguez"];
                        };
                        readonly address2: {
                            readonly type: "string";
                            readonly examples: readonly ["Semillero"];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly examples: readonly ["Miami"];
                        };
                        readonly country: {
                            readonly type: "object";
                            readonly properties: {
                                readonly code: {
                                    readonly type: "string";
                                    readonly examples: readonly ["US"];
                                };
                                readonly name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["United States"];
                                };
                            };
                        };
                        readonly first_name: {
                            readonly type: "string";
                            readonly examples: readonly ["Stefany"];
                        };
                        readonly last_name: {
                            readonly type: "string";
                            readonly examples: readonly ["Porras"];
                        };
                        readonly phone: {
                            readonly type: "string";
                            readonly examples: readonly ["4125684412"];
                        };
                        readonly postal_code: {
                            readonly type: "string";
                            readonly examples: readonly ["33101"];
                        };
                        readonly reference: {
                            readonly type: "string";
                            readonly examples: readonly ["reference"];
                        };
                        readonly state: {
                            readonly type: "object";
                            readonly properties: {
                                readonly code: {
                                    readonly type: "string";
                                    readonly examples: readonly ["FL"];
                                };
                            };
                        };
                    };
                };
                readonly shipping_items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly amount: {
                                readonly type: "number";
                                readonly examples: readonly [1];
                            };
                            readonly carrier: {
                                readonly type: "string";
                                readonly examples: readonly ["OWN"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Express Shipping"];
                            };
                        };
                    };
                };
                readonly start_date: {
                    readonly type: "string";
                    readonly examples: readonly ["2021-06-18T12:00:00.000Z"];
                };
                readonly totals: {
                    readonly type: "object";
                    readonly properties: {
                        readonly discount: {
                            readonly type: "number";
                            readonly examples: readonly [0];
                        };
                        readonly shipping: {
                            readonly type: "number";
                            readonly examples: readonly [1];
                        };
                        readonly subtotal: {
                            readonly type: "number";
                            readonly examples: readonly [2];
                        };
                        readonly tax: {
                            readonly type: "number";
                            readonly examples: readonly [0];
                        };
                        readonly total: {
                            readonly type: "number";
                            readonly examples: readonly [3];
                        };
                    };
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2021-11-29T21:13:33.947Z"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateToken: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly token: {
                    readonly type: "string";
                    readonly examples: readonly ["eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODA0ODNiZWFiOWQ5NDVhODZkYTNjMSIsInVzZXIiOiJ1bmRlZmluZWQiLCJpYXQiOjE2ODQyNTUzMDAsImV4cCI6MTY4NDI1ODkwMH0.l8aMEUA8E-BZy3o6aiu3mZ5n5g2lH4YOaLN43lfg7dbxf0_dP_CZWvwIYtbhGAhJw7qZYlOfpT6_DoFaWNB9sQ"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateToken1: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly id: {
                readonly type: "string";
                readonly examples: readonly ["65bac7e21bb14b22bfb78533"];
            };
            readonly cvc: {
                readonly type: "string";
            };
            readonly fixed_installments: {
                readonly type: "boolean";
            };
            readonly installments: {
                readonly type: "integer";
                readonly enum: readonly [3, 6, 9, 12, 18];
            };
        };
        readonly required: readonly ["id"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly token: {
                    readonly type: "string";
                    readonly examples: readonly ["ca_1bc7bce46a74ec1d0"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteAPaymentMethod: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly examples: readonly ["Business"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteApicustomersId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Customer ID";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization token";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "string";
                    readonly default: "true";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteApitemplatesId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization token";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const DeleteCard: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteCustomerCard: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly customer_id: {
                    readonly type: "string";
                    readonly examples: readonly ["65b9520fe35ed4b1662014d1"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["65b952fae35ed4b1662014e0"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["customer_id", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DownloadCfdi: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["658b47f407f38aeb09e22173"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetActiveWithrawalAccounts: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly business_name: {
                readonly type: "string";
                readonly examples: readonly ["846180000400000001"];
            };
            readonly method: {
                readonly type: "string";
                readonly examples: readonly ["clabe"];
            };
            readonly name: {
                readonly type: "string";
                readonly examples: readonly ["Personal"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetActivity: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["657207dbdff54facf6944467"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetAllActivity: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["failed,blocked"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly q: {
                    readonly type: "string";
                    readonly examples: readonly ["4242"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly examples: readonly ["100"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly risk_level: {
                    readonly type: "string";
                    readonly examples: readonly ["low,medium"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetAllBanksByCountry: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly country: {
                    readonly type: "string";
                    readonly examples: readonly ["{{country_code}}"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly clave: {
                        readonly type: "string";
                        readonly examples: readonly ["40138"];
                    };
                    readonly country: {
                        readonly type: "string";
                        readonly examples: readonly ["MX"];
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly examples: readonly ["2020-08-11T23:02:18.048Z"];
                    };
                    readonly id: {
                        readonly type: "string";
                        readonly examples: readonly ["5f331fb9f7480d71f16b91e9"];
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly examples: readonly ["ABC CAPITAL"];
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly examples: readonly ["2020-08-11T23:02:18.048Z"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAllCards: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly brand: {
                        readonly type: "string";
                        readonly examples: readonly ["visa"];
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly examples: readonly ["2022-04-12T16:35:32.139Z"];
                    };
                    readonly exp_month: {
                        readonly type: "string";
                        readonly examples: readonly ["01"];
                    };
                    readonly exp_year: {
                        readonly type: "string";
                        readonly examples: readonly ["2012"];
                    };
                    readonly id: {
                        readonly type: "string";
                        readonly examples: readonly ["6255aa54c2c8a9f87135daad"];
                    };
                    readonly last: {
                        readonly type: "string";
                        readonly examples: readonly ["4142"];
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly examples: readonly ["Ecart Pay"];
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly examples: readonly ["2022-04-12T16:36:30.318Z"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAllChargebacks: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly count: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                };
                readonly docs: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly account_id: {
                                readonly type: "string";
                                readonly examples: readonly ["5fab3b20b40b0a613e1b6f15"];
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly examples: readonly [500];
                            };
                            readonly brand: {
                                readonly type: "string";
                                readonly examples: readonly ["mastercard"];
                            };
                            readonly charge_id: {
                                readonly type: "string";
                                readonly examples: readonly ["93474"];
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-05-15T18:11:30.839Z"];
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly examples: readonly ["MXN"];
                            };
                            readonly expiration_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-05-02 06:00:00"];
                            };
                            readonly gateway: {
                                readonly type: "string";
                                readonly examples: readonly ["ecartpay"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["646275d23963944d8d8f01b0"];
                            };
                            readonly membership: {
                                readonly type: "string";
                                readonly examples: readonly ["9031086"];
                            };
                            readonly order_id: {
                                readonly type: "string";
                                readonly examples: readonly ["644c4f07b8cf760e7a6ae019"];
                            };
                            readonly reason: {
                                readonly type: "string";
                                readonly examples: readonly ["68 - Transacciï¿½n de orden telefï¿½nico/correo/internet fraudulenta"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["created"];
                            };
                            readonly transaction: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly account_customer_id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["5e7a532ea09026000426b0cf"];
                                    };
                                    readonly account_id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["5fab3b20b40b0a613e1b6f15"];
                                    };
                                    readonly amount: {
                                        readonly type: "number";
                                        readonly examples: readonly [92.46];
                                    };
                                    readonly charges: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly amount: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["100.00"];
                                                };
                                                readonly capture_id: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["699900032023"];
                                                };
                                                readonly currency: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["MXN"];
                                                };
                                                readonly gateway: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["ecartpay"];
                                                };
                                                readonly paid_at: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["28/04/2023 16:56:35"];
                                                };
                                                readonly payment_method: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly exp_month: {
                                                            readonly type: "string";
                                                            readonly examples: readonly ["10"];
                                                        };
                                                        readonly exp_year: {
                                                            readonly type: "string";
                                                            readonly examples: readonly ["24"];
                                                        };
                                                        readonly last4: {
                                                            readonly type: "string";
                                                            readonly examples: readonly ["4242"];
                                                        };
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly examples: readonly ["Roberto Alejandro"];
                                                        };
                                                    };
                                                };
                                                readonly payment_solution: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["CREDITO/BANCO EXTRANJERO/Visa"];
                                                };
                                                readonly status: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["authorized"];
                                                };
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["ecartpay"];
                                                };
                                            };
                                        };
                                    };
                                    readonly created_at: {
                                        readonly type: "string";
                                        readonly examples: readonly ["2023-04-28T22:56:35.212Z"];
                                    };
                                    readonly currency: {
                                        readonly type: "string";
                                        readonly examples: readonly ["MXN"];
                                    };
                                    readonly current: {
                                        readonly type: "number";
                                        readonly examples: readonly [28816.8];
                                    };
                                    readonly custom_keys: {
                                        readonly type: "boolean";
                                        readonly examples: readonly [false];
                                    };
                                    readonly customer_id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["5fab3b20b40b0a613e1b6f15"];
                                    };
                                    readonly exchange: {
                                        readonly type: "number";
                                        readonly examples: readonly [1];
                                    };
                                    readonly fee: {
                                        readonly type: "number";
                                        readonly examples: readonly [7.54];
                                    };
                                    readonly gateway: {
                                        readonly type: "string";
                                        readonly examples: readonly ["ecartpay"];
                                    };
                                    readonly id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["644c4f23b8cf760e7a6ae090"];
                                    };
                                    readonly order: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly email: {
                                                readonly type: "string";
                                                readonly examples: readonly ["a.cruz@envia.com"];
                                            };
                                            readonly first_name: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Roberto Alejandro"];
                                            };
                                            readonly last_name: {
                                                readonly type: "string";
                                                readonly examples: readonly ["de la Cruz"];
                                            };
                                            readonly number: {
                                                readonly type: "string";
                                                readonly examples: readonly ["OR44468315"];
                                            };
                                            readonly phone: {
                                                readonly type: "string";
                                                readonly examples: readonly ["8123688056"];
                                            };
                                            readonly status: {
                                                readonly type: "string";
                                                readonly examples: readonly ["paid"];
                                            };
                                        };
                                    };
                                    readonly order_id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["644c4f07b8cf760e7a6ae019"];
                                    };
                                    readonly previous: {
                                        readonly type: "number";
                                        readonly examples: readonly [28724.34];
                                    };
                                    readonly reference: {
                                        readonly type: "string";
                                        readonly examples: readonly ["644c4f23b8cf760e7a6ae08e"];
                                    };
                                    readonly reference_id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["644c4f23b8cf760e7a6ae08d"];
                                    };
                                    readonly status: {
                                        readonly type: "string";
                                        readonly examples: readonly ["paid"];
                                    };
                                    readonly token: {
                                        readonly type: "string";
                                        readonly examples: readonly ["5dd46c87cc83a64ec9e8a8d8dc382a633a28d538d1907a355d61bad713cb19abc64955a09c9ec00e481b6c355b41a682cf62c76ea67ba83c42d5c8e341df2a03"];
                                    };
                                    readonly transaction_id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["TR42502045"];
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly examples: readonly ["payment"];
                                    };
                                    readonly updated_at: {
                                        readonly type: "string";
                                        readonly examples: readonly ["2023-04-28T22:56:35.581Z"];
                                    };
                                };
                            };
                            readonly transaction_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-04-15 05:39:00"];
                            };
                            readonly transaction_id: {
                                readonly type: "string";
                                readonly examples: readonly ["644c4f23b8cf760e7a6ae090"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-05-15T18:11:30.839Z"];
                            };
                        };
                    };
                };
                readonly pages: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAllCustomers: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly email: {
                    readonly type: "string";
                    readonly examples: readonly ["a.cruz@envia.com"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Use this to filter";
                };
                readonly phone: {
                    readonly type: "string";
                    readonly examples: readonly ["8114854357"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Use this to filter";
                };
                readonly user_id: {
                    readonly type: "string";
                    readonly examples: readonly ["001"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Use this to filter";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly ["Authorization"];
        }];
    };
};
declare const GetAllGateways: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly active: {
                        readonly type: "boolean";
                        readonly examples: readonly [true];
                    };
                    readonly country: {
                        readonly type: "string";
                        readonly examples: readonly ["US"];
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly examples: readonly ["2023-07-24T01:53:44.452Z"];
                    };
                    readonly currency: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly examples: readonly ["MX"];
                        };
                        readonly examples: readonly ["MX"];
                    };
                    readonly gateway: {
                        readonly type: "string";
                        readonly examples: readonly ["conekta"];
                    };
                    readonly has_keys: {
                        readonly type: "boolean";
                        readonly examples: readonly [true];
                    };
                    readonly icon: {
                        readonly type: "string";
                        readonly examples: readonly ["https://ecartpay.s3.amazonaws.com/gateways/transbank_icon.png"];
                    };
                    readonly id: {
                        readonly type: "string";
                        readonly examples: readonly ["5fab1d5d685fe16ca6ef0a00"];
                    };
                    readonly methods: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly active: {
                                    readonly type: "boolean";
                                    readonly examples: readonly [true];
                                };
                                readonly id: {
                                    readonly type: "string";
                                    readonly examples: readonly ["5ee3cfb4717ce5733fba1ffe"];
                                };
                                readonly title: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Credit/Debit Card"];
                                };
                                readonly type: {
                                    readonly type: "string";
                                    readonly examples: readonly ["card"];
                                };
                            };
                        };
                    };
                    readonly onclick: {
                        readonly type: "boolean";
                        readonly examples: readonly [true];
                    };
                    readonly title: {
                        readonly type: "string";
                        readonly examples: readonly ["Conekta"];
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly examples: readonly ["2023-08-07T23:34:54.825Z"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAllNotifications: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetAllPayouts: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly q: {
                    readonly type: "string";
                    readonly examples: readonly ["query"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search a query";
                };
                readonly reference_id: {
                    readonly type: "string";
                    readonly examples: readonly ["\"Yout reference ID\""];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["any"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetAllScopes: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetAllSubscriptions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "created_at[from]": {
                    readonly type: "string";
                    readonly examples: readonly ["2025-01-01"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly "created_at[to]": {
                    readonly type: "string";
                    readonly examples: readonly ["2025-02-01"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["active"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["MXN"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly interval: {
                    readonly type: "string";
                    readonly examples: readonly ["monthly"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly customer_id: {
                    readonly type: "string";
                    readonly examples: readonly ["68223896dd296eef1c9a5171"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly count: {
                    readonly type: "number";
                    readonly examples: readonly [53];
                };
                readonly docs: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly account_id: {
                                readonly type: "string";
                                readonly examples: readonly ["5fab3b20b40b0a613e1b6f15"];
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly examples: readonly [100];
                            };
                            readonly attempts: {
                                readonly type: "number";
                                readonly examples: readonly [0];
                            };
                            readonly card_ids: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                    readonly examples: readonly ["65b955dbe35ed4b166201500"];
                                };
                                readonly examples: readonly ["65b955dbe35ed4b166201500"];
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2025-05-13T16:54:10.877Z"];
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly examples: readonly ["MXN"];
                            };
                            readonly customer_id: {
                                readonly type: "string";
                                readonly examples: readonly ["68223896dd296eef1c9a5171"];
                            };
                            readonly errors: {
                                readonly type: "array";
                                readonly items: {};
                            };
                            readonly frequency: {
                                readonly type: "number";
                                readonly examples: readonly [1];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["68237932a690a499bbda3b25"];
                            };
                            readonly interval: {
                                readonly type: "string";
                                readonly examples: readonly ["monthly"];
                            };
                            readonly last_payment_date: {
                                readonly type: "string";
                                readonly examples: readonly ["2025-04-23T17:55:04.430Z"];
                            };
                            readonly next_payment_date: {
                                readonly type: "string";
                                readonly examples: readonly ["2025-06-12T16:54:10.854Z"];
                            };
                            readonly service: {
                                readonly type: "string";
                                readonly examples: readonly ["Gold Plus"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["active"];
                            };
                            readonly trial_period_days: {
                                readonly type: "number";
                                readonly examples: readonly [30];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2025-05-13T16:54:10.877Z"];
                            };
                        };
                    };
                };
                readonly pages: {
                    readonly type: "number";
                    readonly examples: readonly [2];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAllTemplates: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetApibillingsclients: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly user: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly country: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetApibillingsproviders: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly keys: {
                    readonly type: "boolean";
                    readonly enum: readonly [true, false];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Boolean flag to include or exclude provider API keys in the response.";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetApicardsmsiConfiguration: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetApicheckoutsId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the checkout.";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization token";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetApicheckoutsId1: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the checkout.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const GetApiinvoices: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly year: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Year of the invoices (e.g. 2025)";
                };
                readonly month: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Month of the invoices (e.g. July)";
                };
                readonly page: {
                    readonly type: "string";
                    readonly default: "1";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number for the pagination";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly default: "20";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of invoices per page";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization token";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetApiordersId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Order id";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization token";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetApiorderspublicId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the order that will be paid for";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const GetApiorderspublicOrderId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly order_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["order_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization token";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetApisubscriptionsTemplate: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Auhtorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetApitransactions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly q: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search string for filtering transactions";
                };
                readonly start_date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter transactions starting from this date (YYYY-MM-DD)";
                };
                readonly end_date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter transactions up to this date (YYYY-MM-DD)";
                };
                readonly type: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by transaction type (e.g., \"payment\", \"charge\")";
                };
                readonly status: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by transaction status (e.g., \"created\", \"paid\", \"reimbursed\")";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization token";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetApitransactionsTransactionId: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly transaction_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the transaction";
                };
            };
            readonly required: readonly ["transaction_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization token";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetApitransactionssummary: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly currency: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The currency for the summary (e.g., \"MXN\").";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization token";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetBillingForm: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["siigo_keys"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly module: {
                    readonly type: "string";
                    readonly examples: readonly ["billings"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly country: {
                    readonly type: "string";
                    readonly examples: readonly ["CO"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetCatalog: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly country: {
                    readonly type: "string";
                    readonly examples: readonly ["GT"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetCfdiUses: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetClientBillingInformation: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly business_name: {
                readonly type: "string";
                readonly examples: readonly ["846180000400000001"];
            };
            readonly method: {
                readonly type: "string";
                readonly examples: readonly ["clabe"];
            };
            readonly name: {
                readonly type: "string";
                readonly examples: readonly ["Personal"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly examples: readonly ["61d70c889766fb0ac56b8bf1"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["account_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetCountries: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["AF"];
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly examples: readonly ["Afghanistan"];
                    };
                    readonly phone_code: {
                        readonly type: "string";
                        readonly examples: readonly ["93"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCustomerCards: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly customer_id: {
                    readonly type: "string";
                    readonly examples: readonly ["65b9520fe35ed4b1662014d1"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["customer_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly brand: {
                        readonly type: "string";
                        readonly examples: readonly ["visa"];
                    };
                    readonly default: {
                        readonly type: "boolean";
                        readonly examples: readonly [true];
                    };
                    readonly id: {
                        readonly type: "string";
                        readonly examples: readonly ["65b9522be35ed4b1662014d8"];
                    };
                    readonly last: {
                        readonly type: "string";
                        readonly examples: readonly ["4242"];
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly examples: readonly ["Roberto Alejandro de la Cruz"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetExchangesAvailable: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetExchangesByCurrencyBase: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly base: {
                    readonly type: "string";
                    readonly examples: readonly ["USD"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetLocalities: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly country: {
                    readonly type: "string";
                    readonly examples: readonly ["MX"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly state: {
                    readonly type: "string";
                    readonly examples: readonly ["GT"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly additional_info: {
                        readonly type: "object";
                        readonly properties: {
                            readonly street: {};
                        };
                    };
                    readonly coordinates: {
                        readonly type: "object";
                        readonly properties: {
                            readonly latitude: {
                                readonly type: "string";
                                readonly examples: readonly ["21.130720"];
                            };
                            readonly longitude: {
                                readonly type: "string";
                                readonly examples: readonly ["-101.636871"];
                            };
                        };
                    };
                    readonly country: {
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly examples: readonly ["MX"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["México"];
                            };
                        };
                    };
                    readonly info: {
                        readonly type: "object";
                        readonly properties: {
                            readonly stat: {
                                readonly type: "string";
                                readonly examples: readonly ["111342"];
                            };
                            readonly stat_8digit: {
                                readonly type: "string";
                                readonly examples: readonly ["11134200"];
                            };
                            readonly time_zone: {
                                readonly type: "string";
                                readonly examples: readonly ["America/Mexico_City"];
                            };
                            readonly utc: {
                                readonly type: "string";
                                readonly examples: readonly ["-06:00"];
                            };
                        };
                    };
                    readonly locality: {
                        readonly type: "string";
                        readonly examples: readonly ["León de Los Aldama"];
                    };
                    readonly regions: {
                        readonly type: "object";
                        readonly properties: {
                            readonly region_1: {
                                readonly type: "string";
                                readonly examples: readonly ["Guanajuato"];
                            };
                            readonly region_2: {
                                readonly type: "string";
                                readonly examples: readonly ["León"];
                            };
                            readonly region_3: {
                                readonly type: "string";
                                readonly examples: readonly [""];
                            };
                            readonly region_4: {
                                readonly type: "string";
                                readonly examples: readonly [""];
                            };
                        };
                    };
                    readonly state: {
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly "1digit": {};
                                    readonly "2digit": {
                                        readonly type: "string";
                                        readonly examples: readonly ["GT"];
                                    };
                                    readonly "3digit": {
                                        readonly type: "string";
                                        readonly examples: readonly ["GUA"];
                                    };
                                };
                            };
                            readonly iso_code: {
                                readonly type: "string";
                                readonly examples: readonly ["MX-GUA"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Guanajuato"];
                            };
                        };
                    };
                    readonly suburbs: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly examples: readonly ["Jardines de Oriente"];
                        };
                        readonly examples: readonly ["Jardines de Oriente", "La Joya", "Los Portones", "Los Ángeles", "Unidad y Esfuerzo Popular", "Villas del Mayab"];
                    };
                    readonly zip_code: {
                        readonly type: "string";
                        readonly examples: readonly ["37258"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetMySubscriptions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly count: {
                    readonly type: "number";
                    readonly examples: readonly [53];
                };
                readonly docs: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly account_id: {
                                readonly type: "string";
                                readonly examples: readonly ["5fab3b20b40b0a613e1b6f15"];
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly examples: readonly [100];
                            };
                            readonly attempts: {
                                readonly type: "number";
                                readonly examples: readonly [0];
                            };
                            readonly card_ids: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                    readonly examples: readonly ["65b955dbe35ed4b166201500"];
                                };
                                readonly examples: readonly ["65b955dbe35ed4b166201500"];
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2025-05-13T16:54:10.877Z"];
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly examples: readonly ["MXN"];
                            };
                            readonly customer_id: {
                                readonly type: "string";
                                readonly examples: readonly ["68223896dd296eef1c9a5171"];
                            };
                            readonly errors: {
                                readonly type: "array";
                                readonly items: {};
                            };
                            readonly frequency: {
                                readonly type: "number";
                                readonly examples: readonly [1];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["68237932a690a499bbda3b25"];
                            };
                            readonly interval: {
                                readonly type: "string";
                                readonly examples: readonly ["monthly"];
                            };
                            readonly last_payment_date: {
                                readonly type: "string";
                                readonly examples: readonly ["2025-04-23T17:55:04.430Z"];
                            };
                            readonly next_payment_date: {
                                readonly type: "string";
                                readonly examples: readonly ["2025-06-12T16:54:10.854Z"];
                            };
                            readonly service: {
                                readonly type: "string";
                                readonly examples: readonly ["Gold Plus"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["active"];
                            };
                            readonly trial_period_days: {
                                readonly type: "number";
                                readonly examples: readonly [30];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2025-05-13T16:54:10.877Z"];
                            };
                        };
                    };
                };
                readonly pages: {
                    readonly type: "number";
                    readonly examples: readonly [2];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetSingleBank: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly clave: {
                    readonly type: "number";
                    readonly examples: readonly [40138];
                };
                readonly country: {
                    readonly type: "string";
                    readonly examples: readonly ["MX"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2020-08-11T23:02:18.048Z"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["5f331fb9f7480d71f16b91e9"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["ABC CAPITAL"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2020-08-11T23:02:18.048Z"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetSingleCard: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly examples: readonly ["62559ba8085afe001606a916"];
                };
                readonly brand: {
                    readonly type: "string";
                    readonly examples: readonly ["visa"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-04-12T16:35:32.139Z"];
                };
                readonly exp_month: {
                    readonly type: "string";
                    readonly examples: readonly ["01"];
                };
                readonly exp_year: {
                    readonly type: "string";
                    readonly examples: readonly ["2012"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["6255aa54c2c8a9f87135daad"];
                };
                readonly last: {
                    readonly type: "string";
                    readonly examples: readonly ["4142"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Ecart Pay"];
                };
                readonly number: {
                    readonly type: "string";
                    readonly examples: readonly ["4242424203424142"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-04-12T16:36:30.318Z"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetSingleChargeback: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly examples: readonly ["5fab3b20b40b0a613e1b6f15"];
                };
                readonly amount: {
                    readonly type: "number";
                    readonly examples: readonly [500];
                };
                readonly brand: {
                    readonly type: "string";
                    readonly examples: readonly ["mastercard"];
                };
                readonly charge_id: {
                    readonly type: "string";
                    readonly examples: readonly ["93474"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-05-15T18:11:30.839Z"];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["MXN"];
                };
                readonly expiration_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-05-02 06:00:00"];
                };
                readonly gateway: {
                    readonly type: "string";
                    readonly examples: readonly ["ecartpay"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["646275d23963944d8d8f01b0"];
                };
                readonly membership: {
                    readonly type: "string";
                    readonly examples: readonly ["9031086"];
                };
                readonly order_id: {
                    readonly type: "string";
                    readonly examples: readonly ["644c4f07b8cf760e7a6ae019"];
                };
                readonly reason: {
                    readonly type: "string";
                    readonly examples: readonly ["68 - Transacciï¿½n de orden telefï¿½nico/correo/internet fraudulenta"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["created"];
                };
                readonly transaction: {
                    readonly type: "object";
                    readonly properties: {
                        readonly account_customer_id: {
                            readonly type: "string";
                            readonly examples: readonly ["5e7a532ea09026000426b0cf"];
                        };
                        readonly account_id: {
                            readonly type: "string";
                            readonly examples: readonly ["5fab3b20b40b0a613e1b6f15"];
                        };
                        readonly amount: {
                            readonly type: "number";
                            readonly examples: readonly [92.46];
                        };
                        readonly charges: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly amount: {
                                        readonly type: "string";
                                        readonly examples: readonly ["100.00"];
                                    };
                                    readonly capture_id: {
                                        readonly type: "string";
                                        readonly examples: readonly ["699900032023"];
                                    };
                                    readonly currency: {
                                        readonly type: "string";
                                        readonly examples: readonly ["MXN"];
                                    };
                                    readonly gateway: {
                                        readonly type: "string";
                                        readonly examples: readonly ["ecartpay"];
                                    };
                                    readonly paid_at: {
                                        readonly type: "string";
                                        readonly examples: readonly ["28/04/2023 16:56:35"];
                                    };
                                    readonly payment_method: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly exp_month: {
                                                readonly type: "string";
                                                readonly examples: readonly ["10"];
                                            };
                                            readonly exp_year: {
                                                readonly type: "string";
                                                readonly examples: readonly ["24"];
                                            };
                                            readonly last4: {
                                                readonly type: "string";
                                                readonly examples: readonly ["4242"];
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                                readonly examples: readonly ["Roberto Alejandro"];
                                            };
                                        };
                                    };
                                    readonly payment_solution: {
                                        readonly type: "string";
                                        readonly examples: readonly ["CREDITO/BANCO EXTRANJERO/Visa"];
                                    };
                                    readonly status: {
                                        readonly type: "string";
                                        readonly examples: readonly ["authorized"];
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly examples: readonly ["ecartpay"];
                                    };
                                };
                            };
                        };
                        readonly created_at: {
                            readonly type: "string";
                            readonly examples: readonly ["2023-04-28T22:56:35.212Z"];
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly examples: readonly ["MXN"];
                        };
                        readonly current: {
                            readonly type: "number";
                            readonly examples: readonly [28816.8];
                        };
                        readonly custom_keys: {
                            readonly type: "boolean";
                            readonly examples: readonly [false];
                        };
                        readonly customer_id: {
                            readonly type: "string";
                            readonly examples: readonly ["5fab3b20b40b0a613e1b6f15"];
                        };
                        readonly exchange: {
                            readonly type: "number";
                            readonly examples: readonly [1];
                        };
                        readonly fee: {
                            readonly type: "number";
                            readonly examples: readonly [7.54];
                        };
                        readonly gateway: {
                            readonly type: "string";
                            readonly examples: readonly ["ecartpay"];
                        };
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["644c4f23b8cf760e7a6ae090"];
                        };
                        readonly order: {
                            readonly type: "object";
                            readonly properties: {
                                readonly email: {
                                    readonly type: "string";
                                    readonly examples: readonly ["a.cruz@envia.com"];
                                };
                                readonly first_name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Roberto Alejandro"];
                                };
                                readonly last_name: {
                                    readonly type: "string";
                                    readonly examples: readonly ["de la Cruz"];
                                };
                                readonly number: {
                                    readonly type: "string";
                                    readonly examples: readonly ["OR44468315"];
                                };
                                readonly phone: {
                                    readonly type: "string";
                                    readonly examples: readonly ["8123688056"];
                                };
                                readonly status: {
                                    readonly type: "string";
                                    readonly examples: readonly ["paid"];
                                };
                            };
                        };
                        readonly order_id: {
                            readonly type: "string";
                            readonly examples: readonly ["644c4f07b8cf760e7a6ae019"];
                        };
                        readonly previous: {
                            readonly type: "number";
                            readonly examples: readonly [28724.34];
                        };
                        readonly reference: {
                            readonly type: "string";
                            readonly examples: readonly ["644c4f23b8cf760e7a6ae08e"];
                        };
                        readonly reference_id: {
                            readonly type: "string";
                            readonly examples: readonly ["644c4f23b8cf760e7a6ae08d"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["paid"];
                        };
                        readonly token: {
                            readonly type: "string";
                            readonly examples: readonly ["5dd46c87cc83a64ec9e8a8d8dc382a633a28d538d1907a355d61bad713cb19abc64955a09c9ec00e481b6c355b41a682cf62c76ea67ba83c42d5c8e341df2a03"];
                        };
                        readonly transaction_id: {
                            readonly type: "string";
                            readonly examples: readonly ["TR42502045"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["payment"];
                        };
                        readonly updated_at: {
                            readonly type: "string";
                            readonly examples: readonly ["2023-04-28T22:56:35.581Z"];
                        };
                    };
                };
                readonly transaction_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-04-15 05:39:00"];
                };
                readonly transaction_id: {
                    readonly type: "string";
                    readonly examples: readonly ["644c4f23b8cf760e7a6ae090"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-05-15T18:11:30.839Z"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetSingleGateway: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly active: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-07-24T01:55:40.635Z"];
                };
                readonly currency: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["MXN"];
                    };
                    readonly examples: readonly ["MXN"];
                };
                readonly gateway: {
                    readonly type: "string";
                    readonly examples: readonly ["ecartpay"];
                };
                readonly has_keys: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["62d5d5dd726026e0794902d7"];
                };
                readonly keys: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly methods: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly active: {
                                readonly type: "boolean";
                                readonly examples: readonly [false];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["62d5d5caac51e72396d2b471"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly examples: readonly ["Debit/Credit Card"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["card"];
                            };
                        };
                    };
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["EcartPay Mexico"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-08-08T00:13:48.922Z"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetSinglePayout: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly payout_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["payout_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly examples: readonly ["5fab3b20b40b0a613e1b6f15"];
                };
                readonly amount: {
                    readonly type: "number";
                    readonly examples: readonly [10];
                };
                readonly authorization_id: {
                    readonly type: "string";
                    readonly examples: readonly ["6189be80df291598221a5e95"];
                };
                readonly available_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-04-18T00:15:55.480Z"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-04-18T00:15:55.482Z"];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["MXN"];
                };
                readonly exchange: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                };
                readonly fee: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["625cadbb8541531b52506bcd"];
                };
                readonly reference: {
                    readonly type: "string";
                    readonly examples: readonly ["625cadbb8541531b52506bca"];
                };
                readonly reference_id: {
                    readonly type: "string";
                    readonly examples: readonly ["3902309"];
                };
                readonly require_confirmation: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["paid"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2022-04-18T00:15:55.482Z"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetSingleSubscription: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly examples: readonly ["5fab3b20b40b0a613e1b6f15"];
                };
                readonly amount: {
                    readonly type: "number";
                    readonly examples: readonly [100];
                };
                readonly attempts: {
                    readonly type: "number";
                    readonly examples: readonly [0];
                };
                readonly card_ids: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["65b955dbe35ed4b166201500"];
                    };
                    readonly examples: readonly ["65b955dbe35ed4b166201500"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2025-05-13T15:49:20.689Z"];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["MXN"];
                };
                readonly customer_id: {
                    readonly type: "string";
                    readonly examples: readonly ["68223896dd296eef1c9a5171"];
                };
                readonly errors: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly frequency: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["68236a007e0fb52bebafdf8c"];
                };
                readonly interval: {
                    readonly type: "string";
                    readonly examples: readonly ["monthly"];
                };
                readonly next_payment_date: {
                    readonly type: "string";
                    readonly examples: readonly ["2025-06-12T15:49:20.671Z"];
                };
                readonly service: {
                    readonly type: "string";
                    readonly examples: readonly ["Gold Plus"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["active"];
                };
                readonly trial_period_days: {
                    readonly type: "number";
                    readonly examples: readonly [30];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2025-05-13T15:49:20.689Z"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetStates: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly country: {
                    readonly type: "string";
                    readonly examples: readonly ["MX"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly code: {
                        readonly type: "object";
                        readonly properties: {
                            readonly "1digit": {};
                            readonly "2digit": {
                                readonly type: "string";
                                readonly examples: readonly ["AG"];
                            };
                            readonly "3digit": {};
                        };
                    };
                    readonly code_2digits: {
                        readonly type: "string";
                        readonly examples: readonly ["AG"];
                    };
                    readonly code_3digits: {
                        readonly type: "string";
                    };
                    readonly code_shopify: {
                        readonly type: "string";
                    };
                    readonly country_code: {
                        readonly type: "string";
                        readonly examples: readonly ["MX"];
                    };
                    readonly hasc: {
                        readonly type: "string";
                        readonly examples: readonly ["MX.AG"];
                    };
                    readonly iso_code: {
                        readonly type: "string";
                        readonly examples: readonly ["MX-AGU"];
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly examples: readonly ["Aguascalientes"];
                    };
                    readonly zone: {};
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTemplate: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly examples: readonly ["5d2d436e3199ae000449065b"];
                };
                readonly authorization_id: {
                    readonly type: "string";
                    readonly examples: readonly ["60f603b246df510b2c18b07a"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2021-11-09T01:10:38.256Z"];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["USD"];
                };
                readonly discounts: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly end_date: {};
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["6189ca8e4d497c0018f22f36"];
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly discount: {
                                readonly type: "number";
                                readonly examples: readonly [0];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Recarga"];
                            };
                            readonly price: {
                                readonly type: "number";
                                readonly examples: readonly [100];
                            };
                            readonly quantity: {
                                readonly type: "number";
                                readonly examples: readonly [1];
                            };
                            readonly tax: {
                                readonly type: "number";
                                readonly examples: readonly [0];
                            };
                            readonly total: {
                                readonly type: "number";
                                readonly examples: readonly [100];
                            };
                        };
                    };
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Recarga 100 usd"];
                };
                readonly number: {
                    readonly type: "string";
                    readonly examples: readonly ["TE53303647"];
                };
                readonly quantity_uses: {
                    readonly type: "number";
                    readonly examples: readonly [-1];
                };
                readonly shipping_items: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly start_date: {
                    readonly type: "string";
                    readonly examples: readonly ["2021-11-09T01:10:22.000Z"];
                };
                readonly totals: {
                    readonly type: "object";
                    readonly properties: {
                        readonly discount: {
                            readonly type: "number";
                            readonly examples: readonly [0];
                        };
                        readonly shipping: {
                            readonly type: "number";
                            readonly examples: readonly [0];
                        };
                        readonly subtotal: {
                            readonly type: "number";
                            readonly examples: readonly [100];
                        };
                        readonly tax: {
                            readonly type: "number";
                            readonly examples: readonly [0];
                        };
                        readonly total: {
                            readonly type: "number";
                            readonly examples: readonly [100];
                        };
                    };
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2021-11-09T01:10:38.256Z"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWithdrawals: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "string";
                    readonly examples: readonly ["1"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly examples: readonly ["20"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly "date_[start]": {
                    readonly type: "string";
                    readonly examples: readonly ["2023-12-18"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly "date_[end]": {
                    readonly type: "string";
                    readonly examples: readonly ["2023-12-25"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["MXN"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "'MXN','USD','BRL','CAD','ARS','COP','EUR','PEN','JPY','RUB','GBP','CLP','UYU','GTQ','INR','CNY','AUD', 'SGD'";
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["paid"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "processing, paid, processing\n\n";
                };
                readonly q: {
                    readonly type: "string";
                    readonly examples: readonly ["TR00000914A"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "reference', 'reference_id', 'transaction.id', 'id'";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetZipcode: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly country: {
                    readonly type: "string";
                    readonly examples: readonly ["MX"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly postal_code: {
                    readonly type: "string";
                    readonly examples: readonly ["37258"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly additional_info: {
                        readonly type: "object";
                        readonly properties: {
                            readonly street: {};
                        };
                    };
                    readonly coordinates: {
                        readonly type: "object";
                        readonly properties: {
                            readonly latitude: {
                                readonly type: "string";
                                readonly examples: readonly ["21.130720"];
                            };
                            readonly longitude: {
                                readonly type: "string";
                                readonly examples: readonly ["-101.636871"];
                            };
                        };
                    };
                    readonly country: {
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly examples: readonly ["MX"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["México"];
                            };
                        };
                    };
                    readonly info: {
                        readonly type: "object";
                        readonly properties: {
                            readonly stat: {
                                readonly type: "string";
                                readonly examples: readonly ["111342"];
                            };
                            readonly stat_8digit: {
                                readonly type: "string";
                                readonly examples: readonly ["11134200"];
                            };
                            readonly time_zone: {
                                readonly type: "string";
                                readonly examples: readonly ["America/Mexico_City"];
                            };
                            readonly utc: {
                                readonly type: "string";
                                readonly examples: readonly ["-06:00"];
                            };
                        };
                    };
                    readonly locality: {
                        readonly type: "string";
                        readonly examples: readonly ["León de Los Aldama"];
                    };
                    readonly regions: {
                        readonly type: "object";
                        readonly properties: {
                            readonly region_1: {
                                readonly type: "string";
                                readonly examples: readonly ["Guanajuato"];
                            };
                            readonly region_2: {
                                readonly type: "string";
                                readonly examples: readonly ["León"];
                            };
                            readonly region_3: {
                                readonly type: "string";
                                readonly examples: readonly [""];
                            };
                            readonly region_4: {
                                readonly type: "string";
                                readonly examples: readonly [""];
                            };
                        };
                    };
                    readonly state: {
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly "1digit": {};
                                    readonly "2digit": {
                                        readonly type: "string";
                                        readonly examples: readonly ["GT"];
                                    };
                                    readonly "3digit": {
                                        readonly type: "string";
                                        readonly examples: readonly ["GUA"];
                                    };
                                };
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["GT"];
                            };
                            readonly iso_code: {
                                readonly type: "string";
                                readonly examples: readonly ["MX-GUA"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Guanajuato"];
                            };
                        };
                    };
                    readonly suburbs: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly examples: readonly ["Jardines de Oriente"];
                        };
                        readonly examples: readonly ["Jardines de Oriente", "La Joya", "Los Portones", "Los Ángeles", "Unidad y Esfuerzo Popular", "Villas del Mayab"];
                    };
                    readonly zip_code: {
                        readonly type: "string";
                        readonly examples: readonly ["37258"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostApibillings: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly currency: {
                readonly type: "string";
            };
            readonly order_id: {
                readonly type: "string";
            };
            readonly items: {
                readonly type: "array";
                readonly items: {
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Name of the item or service";
                        };
                        readonly quantity: {
                            readonly type: "string";
                            readonly description: "Quantity of the item";
                        };
                        readonly price: {
                            readonly type: "string";
                            readonly description: "Price per unit of the item";
                        };
                        readonly discount: {
                            readonly type: "string";
                            readonly description: "Discount amount applied to the item";
                        };
                        readonly total: {
                            readonly type: "string";
                            readonly description: "Total amount for the item (price × quantity - discount)";
                        };
                        readonly tax: {
                            readonly type: "string";
                            readonly description: "Tax amount for the item";
                        };
                        readonly fiscal_code: {
                            readonly type: "string";
                            readonly description: "SAT fiscal product/service code (Clave de Producto/Servicio)";
                        };
                        readonly unit_code: {
                            readonly type: "string";
                            readonly description: "SAT unit of measure code (Clave de Unidad)";
                        };
                        readonly is_service: {
                            readonly type: "string";
                            readonly description: "Boolean indicating if the item is a service (true) or product (false)";
                        };
                        readonly taxes: {
                            readonly type: "string";
                            readonly description: "Tax amount or tax details";
                        };
                    };
                    readonly type: "object";
                };
                readonly default: "590474";
            };
            readonly billing_information: {
                readonly type: "object";
                readonly properties: {
                    readonly currency: {
                        readonly type: "string";
                        readonly description: "Currency for the billing transaction (e.g. MXN)";
                    };
                    readonly payment_method: {
                        readonly type: "string";
                        readonly description: "SAT payment method code (e.g., 04 for credit card)";
                    };
                    readonly payment_method_type: {
                        readonly type: "string";
                        readonly description: "Payment type code - PUE (Pago en una sola exhibición) or PPD (Pago en parcialidades o diferido).";
                    };
                    readonly billing_at: {
                        readonly type: "string";
                        readonly description: "Date when the billing is created (ISO 8601 format)";
                    };
                    readonly state: {
                        readonly type: "string";
                        readonly description: "Full state name duplicate (can be empty if not required)";
                    };
                    readonly state_name: {
                        readonly type: "string";
                        readonly description: "Full state name duplicate (can be empty if not required)";
                    };
                    readonly rfc: {
                        readonly type: "string";
                        readonly description: "Mexican Federal Taxpayer Registry number";
                    };
                    readonly razons: {
                        readonly type: "string";
                        readonly description: "Legal business name or full legal name (Razón Social)";
                    };
                    readonly regimen: {
                        readonly type: "string";
                        readonly description: "Tax regime code assigned by SAT";
                    };
                    readonly email: {
                        readonly type: "string";
                        readonly description: "Primary email address for billing communications";
                    };
                    readonly first_name: {
                        readonly type: "string";
                        readonly description: "First name of the billing contact";
                    };
                    readonly last_name: {
                        readonly type: "string";
                        readonly description: "Last name of the billing contact";
                    };
                    readonly phone: {
                        readonly type: "string";
                        readonly description: "Contact phone number.";
                    };
                    readonly country_code: {
                        readonly type: "string";
                        readonly description: "ISO 3166-1 alpha-2 country code";
                    };
                    readonly postal_code: {
                        readonly type: "string";
                        readonly description: "Postal/ZIP code for the billing address";
                    };
                    readonly address1: {
                        readonly type: "string";
                        readonly description: "Primary street address";
                    };
                    readonly address2: {
                        readonly type: "string";
                        readonly description: "Secondary address line (apartment, suite, building number)";
                    };
                    readonly district: {
                        readonly type: "string";
                        readonly description: "Neighborhood or district name";
                    };
                    readonly state_code: {
                        readonly type: "string";
                        readonly description: "Two-letter state code";
                    };
                    readonly city: {
                        readonly type: "string";
                        readonly description: "City or municipality name.";
                    };
                    readonly id: {
                        readonly type: "string";
                        readonly description: "Billing information ID if updating existing billing data.";
                    };
                    readonly invoice_use: {
                        readonly type: "string";
                        readonly description: "Corresponds to UsoCFDI";
                    };
                    readonly serie: {
                        readonly type: "string";
                    };
                };
                readonly description: "Object containing all billing details";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly country: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ISO country code (e.g., MX for Mexico)";
                };
            };
            readonly required: readonly [];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostApibillingsclients: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly user_id: {
                readonly type: "string";
                readonly description: "The unique identifier for the user in the system.";
            };
            readonly billing_information: {
                readonly type: "object";
                readonly properties: {
                    readonly country_code: {
                        readonly type: "string";
                        readonly description: "ISO 3166-1 alpha-2 country code (e.g., MX, US)";
                    };
                    readonly rfc: {
                        readonly type: "string";
                        readonly description: "Mexican Federal Taxpayer Registry number";
                    };
                    readonly razons: {
                        readonly type: "string";
                        readonly description: "Legal business name or company name ";
                    };
                    readonly regimen: {
                        readonly type: "string";
                        readonly description: "Tax regime code assigned by SAT";
                    };
                    readonly email: {
                        readonly type: "string";
                        readonly description: "Primary email address for billing communications";
                    };
                    readonly first_name: {
                        readonly type: "string";
                        readonly description: "First name of the billing contact";
                    };
                    readonly last_name: {
                        readonly type: "string";
                        readonly description: "Last name of the billing contact";
                    };
                    readonly phone: {
                        readonly type: "string";
                        readonly description: "Contact phone number";
                    };
                    readonly postal_code: {
                        readonly type: "string";
                        readonly description: "Postal/ZIP code for the billing address";
                    };
                    readonly city: {
                        readonly type: "string";
                        readonly description: "City or municipality name";
                    };
                    readonly state: {
                        readonly type: "string";
                        readonly description: "Full state name";
                    };
                    readonly state_name: {
                        readonly type: "string";
                        readonly description: "Full state name (duplicate for validation)";
                    };
                    readonly state_code: {
                        readonly type: "string";
                        readonly description: "Two-letter state code";
                    };
                    readonly address1: {
                        readonly type: "string";
                        readonly description: "Primary street address";
                    };
                    readonly address2: {
                        readonly type: "string";
                        readonly description: "(optional): Secondary address line (apartment, suite, building number)";
                    };
                    readonly district: {
                        readonly type: "string";
                        readonly description: "(optional): Neighborhood or district name";
                    };
                };
                readonly description: "An object containing all billing details";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly provider_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID for the billing provider (e.g. Factura.com = 6227845d6f5e10a27680b38d)";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostApicardsmsiConfiguration: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly commissions: {
                readonly type: "array";
                readonly items: {
                    readonly properties: {
                        readonly installments: {
                            readonly type: "integer";
                            readonly enum: readonly [3, 6, 9, 12, 18];
                        };
                        readonly minimum_amount: {
                            readonly type: "integer";
                        };
                        readonly maximum_amount: {
                            readonly type: "integer";
                        };
                        readonly is_active: {
                            readonly type: "boolean";
                        };
                        readonly fixed_installments: {
                            readonly type: "boolean";
                        };
                    };
                    readonly type: "object";
                };
            };
            readonly amex_fixed_installments: {
                readonly type: "boolean";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostApicardsmsiactivate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly is_active: {
                readonly type: "boolean";
                readonly enum: readonly [true, false];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authrorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostApiordersIdProcess: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly method_id: {
                readonly type: "string";
                readonly default: "66c397dafd263a538b8312a1";
                readonly description: "This ID corresponds to the Payment Gateway. The id \"66c397dafd263a538b8312a1\" corresponds to the Bank Transfer option with Ecart Pay. For further details on other available payment gatways, consult the documentation. ";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the order to configure bank transfers";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const PostApiordersOrderIdRefund: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly amount: {
                readonly type: "number";
                readonly description: "Specify the amount to be refunded.";
            };
            readonly name: {
                readonly type: "string";
                readonly description: "Provide the reason for the refund using one of the following predefined values:";
                readonly enum: readonly ["requested", "duplicate", "fraudulent"];
            };
        };
        readonly required: readonly ["amount", "name"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly order_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the order to refund.";
                };
            };
            readonly required: readonly ["order_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization token";
                };
            };
            readonly required: readonly ["Authorization"];
        }];
    };
};
declare const PostApisubscriptionsIdResendInvitationLink: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Subscription id";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization  header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PostApisubscriptionsTemplate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly amount: {
                readonly type: "number";
                readonly description: "Amount to charge per interval (e.g., `100` = $100.00)";
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "ISO 4217 currency code (like `MXN` or `USD`)";
            };
            readonly interval: {
                readonly type: "string";
                readonly enum: readonly ["daily", "weekly", "monthly", "quarterly", "semiannual", "yearly"];
            };
            readonly frequency: {
                readonly type: "number";
                readonly description: "Frequency multiplier";
            };
            readonly service: {
                readonly type: "string";
                readonly description: "Name or label for the subscription service";
            };
            readonly trial_period_days: {
                readonly type: "number";
                readonly description: "(Optional) Number of days before the first charge";
            };
            readonly benefits: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
                readonly description: "(Optional) List of benefits included in the subscription";
            };
            readonly end_date: {
                readonly type: "string";
                readonly description: "(Optional) ISO date string for subscription termination";
            };
            readonly billing_cycle: {
                readonly type: "object";
                readonly properties: {
                    readonly day: {
                        readonly type: "number";
                    };
                    readonly month: {
                        readonly type: "number";
                    };
                };
            };
        };
        readonly required: readonly ["service", "frequency", "interval", "currency", "amount"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PutApicheckoutsCheckoutIdItemsId1: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
            };
            readonly quantity: {
                readonly type: "number";
            };
            readonly price: {
                readonly type: "number";
            };
            readonly discount: {
                readonly type: "number";
            };
            readonly is_service: {
                readonly type: "boolean";
                readonly enum: readonly [true, false];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly checkout_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the checkout with the item to be updated";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the item within the checkout to be updated.";
                };
            };
            readonly required: readonly ["checkout_id", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization token";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PutApicheckoutsId1: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly notify_url: {
                readonly type: "string";
            };
            readonly customer: {
                readonly type: "object";
                readonly properties: {
                    readonly email: {
                        readonly type: "string";
                    };
                    readonly first_name: {
                        readonly type: "string";
                    };
                    readonly last_name: {
                        readonly type: "string";
                    };
                    readonly phone: {
                        readonly type: "string";
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the checkout to update.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
};
declare const PutApicustomersId: {
    readonly body: {
        readonly properties: {
            readonly first_name: {
                readonly type: "string";
            };
            readonly last_name: {
                readonly type: "string";
            };
            readonly user_id: {
                readonly type: "string";
            };
            readonly phone: {
                readonly type: "string";
            };
            readonly email: {
                readonly type: "string";
            };
        };
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly account_id: {
                    readonly type: "string";
                };
                readonly email: {
                    readonly type: "string";
                };
                readonly first_name: {
                    readonly type: "string";
                };
                readonly last_name: {
                    readonly type: "string";
                };
                readonly phone: {
                    readonly type: "string";
                };
                readonly user_id: {
                    readonly type: "string";
                };
                readonly created_at: {
                    readonly type: "string";
                };
                readonly updated_at: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutApiordersOrderId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly shipping_address: {
                readonly type: "object";
                readonly properties: {
                    readonly country: {
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Two digit code of the country. E.g.: MX for Mexico, US for United States";
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "Name of the country";
                            };
                        };
                    };
                };
            };
            readonly state: {
                readonly type: "object";
                readonly properties: {
                    readonly code: {
                        readonly type: "string";
                        readonly description: "Two digit code of the state. E.g: NL for Nuevo Leon, QR for Quintana Roo.";
                    };
                };
                readonly description: "State, district, province or federal entity.";
            };
            readonly address1: {
                readonly type: "string";
                readonly description: "Address line 1";
            };
            readonly address2: {
                readonly type: "string";
                readonly description: "Address line 2";
            };
            readonly city: {
                readonly type: "string";
            };
            readonly first_name: {
                readonly type: "string";
            };
            readonly last_name: {
                readonly type: "string";
            };
            readonly postal_code: {
                readonly type: "string";
                readonly description: "Postal code or zipcode";
            };
            readonly reference: {
                readonly type: "string";
                readonly description: "Any descriptive reference related to the shipping address";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly order_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the order to update.";
                };
            };
            readonly required: readonly ["order_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization token";
                };
            };
            readonly required: readonly ["Authorization"];
        }];
    };
};
declare const PutApisubscriptionsId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly status: {
                readonly type: "string";
                readonly enum: readonly ["active", "paused", "cancelled"];
                readonly description: "Can be active, paused, or cancelled";
            };
            readonly card_ids: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
                readonly description: "The card id";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the subscription to update";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization token";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const PutApitemplatesId: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly shipping_address: {
                readonly type: "object";
                readonly properties: {
                    readonly first_name: {
                        readonly type: "string";
                    };
                    readonly last_name: {
                        readonly type: "string";
                    };
                    readonly address1: {
                        readonly type: "string";
                        readonly description: "Address line 1";
                    };
                    readonly address2: {
                        readonly type: "string";
                        readonly description: "Address line 2";
                    };
                    readonly country: {
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly description: "Two digit code, e.g; MX for Mexico, US for United States";
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "Country name";
                            };
                        };
                    };
                };
            };
            readonly items: {
                readonly type: "array";
                readonly items: {
                    readonly properties: {
                        readonly discount: {
                            readonly type: "number";
                        };
                        readonly tax: {
                            readonly type: "number";
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly quantity: {
                            readonly type: "number";
                        };
                        readonly price: {
                            readonly type: "number";
                        };
                    };
                    readonly type: "object";
                };
            };
            readonly quantity_uses: {
                readonly type: "number";
                readonly description: "Number of times a payment link can be used. Use -1 for infinite uses. ";
            };
            readonly first_name: {
                readonly type: "string";
            };
            readonly start_date: {
                readonly type: "string";
            };
            readonly cureency: {
                readonly type: "string";
            };
            readonly shippings_items: {
                readonly type: "array";
                readonly items: {
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly amount: {
                            readonly type: "number";
                        };
                        readonly carrier: {
                            readonly type: "string";
                        };
                    };
                    readonly type: "object";
                };
            };
            readonly installments_information: {
                readonly type: "array";
                readonly items: {
                    readonly properties: {
                        readonly quantity: {
                            readonly type: "number";
                        };
                        readonly fixed_installments: {
                            readonly type: "boolean";
                            readonly enum: readonly [true, false];
                        };
                    };
                    readonly type: "object";
                };
            };
            readonly end_date: {
                readonly type: "string";
                readonly format: "date";
                readonly default: "null";
            };
            readonly discounts: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The id of the payment link template to update.";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization token";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const UpdateAPaymentMethod: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly bank: {
                readonly type: "number";
                readonly examples: readonly [40072];
            };
            readonly business_name: {
                readonly type: "string";
                readonly examples: readonly ["Angel Cantu"];
            };
            readonly method: {
                readonly type: "string";
                readonly examples: readonly ["clabe"];
            };
            readonly name: {
                readonly type: "string";
                readonly examples: readonly ["FLUDISA-MXP - Cantu"];
            };
            readonly number: {
                readonly type: "string";
                readonly examples: readonly ["001112125452458751"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const UpdateAccountGateway: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly active: {
                readonly type: "boolean";
                readonly examples: readonly [true];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const UpdateChargeback: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly status: {
                readonly type: "string";
                readonly examples: readonly ["in_review"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly examples: readonly ["5fab3b20b40b0a613e1b6f15"];
                };
                readonly amount: {
                    readonly type: "number";
                    readonly examples: readonly [500];
                };
                readonly brand: {
                    readonly type: "string";
                    readonly examples: readonly ["mastercard"];
                };
                readonly charge_id: {
                    readonly type: "string";
                    readonly examples: readonly ["93474"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-05-15T18:11:30.839Z"];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["MXN"];
                };
                readonly documents: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly expiration_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-05-02 06:00:00"];
                };
                readonly files: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly _id: {
                                readonly type: "string";
                                readonly examples: readonly ["647e686b82dc29dcc9e0f159"];
                            };
                            readonly created_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-06-05T22:57:47.134Z"];
                            };
                            readonly key: {
                                readonly type: "string";
                                readonly examples: readonly ["1686005867021-0-chargebacks_ex.csv"];
                            };
                            readonly mime_type: {
                                readonly type: "string";
                                readonly examples: readonly ["text/csv"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["chargebacks_ex.csv"];
                            };
                            readonly path: {
                                readonly type: "string";
                                readonly examples: readonly ["https://ecartpay.dev.s3.amazonaws.com/1686005867021-0-chargebacks_ex.csv"];
                            };
                            readonly size: {
                                readonly type: "number";
                                readonly examples: readonly [1846];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-06-05T22:57:47.134Z"];
                            };
                        };
                    };
                };
                readonly gateway: {
                    readonly type: "string";
                    readonly examples: readonly ["ecartpay"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["646275d23963944d8d8f01b0"];
                };
                readonly membership: {
                    readonly type: "string";
                    readonly examples: readonly ["9031086"];
                };
                readonly order_id: {
                    readonly type: "string";
                    readonly examples: readonly ["644c4f07b8cf760e7a6ae019"];
                };
                readonly reason: {
                    readonly type: "string";
                    readonly examples: readonly ["68 - Transacciï¿½n de orden telefï¿½nico/correo/internet fraudulenta"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["in_review"];
                };
                readonly transaction_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-04-15 05:39:00"];
                };
                readonly transaction_id: {
                    readonly type: "string";
                    readonly examples: readonly ["644c4f23b8cf760e7a6ae090"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-06-08T18:30:54.061Z"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateCustomerCardAsDefault: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly customer_id: {
                    readonly type: "string";
                    readonly examples: readonly ["65b9520fe35ed4b1662014d1"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["65b9533fe35ed4b1662014e7"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["customer_id", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly default: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["65b9533fe35ed4b1662014e7"];
                };
                readonly last: {
                    readonly type: "string";
                    readonly examples: readonly ["4242"];
                };
                readonly name: {
                    readonly type: "string";
                    readonly examples: readonly ["Roberto Alejandro de la Cruz"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateFromCustomerASubscriptions: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly card_ids: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                    readonly examples: readonly ["65b9533fe35ed4b1662014e7"];
                };
                readonly examples: readonly ["65b9533fe35ed4b1662014e7"];
            };
            readonly status: {
                readonly type: "string";
                readonly examples: readonly ["active"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["6807cab985e9cc2a2b4550c7"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly account_id: {
                    readonly type: "string";
                    readonly examples: readonly ["5fab3b20b40b0a613e1b6f15"];
                };
                readonly activated: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                };
                readonly amount: {
                    readonly type: "number";
                    readonly examples: readonly [100];
                };
                readonly card_ids: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["65b9533fe35ed4b1662014e7"];
                    };
                    readonly examples: readonly ["65b9533fe35ed4b1662014e7"];
                };
                readonly currency: {
                    readonly type: "string";
                    readonly examples: readonly ["MXN"];
                };
                readonly frequency: {
                    readonly type: "number";
                    readonly examples: readonly [1];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["6807cab985e9cc2a2b4550c7"];
                };
                readonly interval: {
                    readonly type: "string";
                    readonly examples: readonly ["yearly"];
                };
                readonly service: {
                    readonly type: "string";
                    readonly examples: readonly ["recurring_payouts"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["active"];
                };
                readonly trial_period_days: {
                    readonly type: "number";
                    readonly examples: readonly [30];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateGateway: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly active: {
                readonly type: "boolean";
                readonly examples: readonly [false];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly active: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-08-07T20:00:59.855Z"];
                };
                readonly gateway: {
                    readonly type: "string";
                    readonly examples: readonly ["mercadopago"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["6154e9398a09f47cf4e0ba0d"];
                };
                readonly keys: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly methods: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly active: {
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly fee: {
                                readonly type: "string";
                                readonly examples: readonly ["fee = 0.20 * exchange"];
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["6154e94c6068bb09ed77e62f"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly examples: readonly [""];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["any"];
                            };
                        };
                    };
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["2023-08-08T17:28:02.645Z"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateGatewayMethod: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly active: {
                readonly type: "boolean";
                readonly examples: readonly [false];
            };
            readonly title: {
                readonly type: "string";
                readonly examples: readonly ["Cards"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly gateway_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["gateway_id", "id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly active: {
                    readonly type: "boolean";
                    readonly examples: readonly [false];
                };
                readonly fee: {
                    readonly type: "string";
                    readonly examples: readonly ["fee = 0.20 * exchange"];
                };
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["62d5d5caac51e72396d2b471"];
                };
                readonly title: {
                    readonly type: "string";
                    readonly examples: readonly ["Cards"];
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["card"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateNotificationSeen: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly notification_id: {
                    readonly type: "string";
                    readonly examples: readonly ["65baccd378a84645bbf60a2a"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["notification_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const UpdatePayoutItems: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly amount: {
                readonly type: "number";
                readonly examples: readonly [10];
            };
            readonly charges: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly amount: {
                            readonly type: "number";
                            readonly examples: readonly [0.5];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Tarifa"];
                        };
                    };
                };
            };
            readonly items: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly discount: {
                            readonly type: "number";
                            readonly examples: readonly [0.5];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Collar Oro Z320"];
                        };
                        readonly price: {
                            readonly type: "number";
                            readonly examples: readonly [5];
                        };
                        readonly quantity: {
                            readonly type: "number";
                            readonly examples: readonly [1];
                        };
                    };
                };
            };
            readonly order_id: {
                readonly type: "string";
                readonly examples: readonly ["625cb5aa8541531b52506de8"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly payout_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["payout_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const UpdateTemplateCopy: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly id: {
                readonly type: "string";
                readonly examples: readonly ["6584803a0369e3f50c08e234"];
            };
            readonly status: {
                readonly type: "string";
                readonly examples: readonly ["accepted"];
            };
            readonly type: {
                readonly type: "string";
                readonly examples: readonly ["business"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly Authorization: {
                    readonly type: "string";
                    readonly default: "{{token}}";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Authorization header";
                };
            };
            readonly required: readonly [];
        }];
    };
};
export { ConfirmPayout, CreateAPayout, CreateAccountGatewayKeys, CreateCard, CreateChargeback, CreateCheckout, CreateCustomer, CreateCustomerCard, CreateCustomerPaymentMethod, CreateCustomerToken, CreateOrder, CreateOrder1, CreatePaymentMethod, CreateScopesToken, CreateSubscription, CreateTemplate, CreateToken, CreateToken1, DeleteAPaymentMethod, DeleteApicustomersId, DeleteApitemplatesId, DeleteCard, DeleteCustomerCard, DownloadCfdi, GetActiveWithrawalAccounts, GetActivity, GetAllActivity, GetAllBanksByCountry, GetAllCards, GetAllChargebacks, GetAllCustomers, GetAllGateways, GetAllNotifications, GetAllPayouts, GetAllScopes, GetAllSubscriptions, GetAllTemplates, GetApibillingsclients, GetApibillingsproviders, GetApicardsmsiConfiguration, GetApicheckoutsId, GetApicheckoutsId1, GetApiinvoices, GetApiordersId, GetApiorderspublicId, GetApiorderspublicOrderId, GetApisubscriptionsTemplate, GetApitransactions, GetApitransactionsTransactionId, GetApitransactionssummary, GetBillingForm, GetCatalog, GetCfdiUses, GetClientBillingInformation, GetCountries, GetCustomerCards, GetExchangesAvailable, GetExchangesByCurrencyBase, GetLocalities, GetMySubscriptions, GetSingleBank, GetSingleCard, GetSingleChargeback, GetSingleGateway, GetSinglePayout, GetSingleSubscription, GetStates, GetTemplate, GetWithdrawals, GetZipcode, PostApibillings, PostApibillingsclients, PostApicardsmsiConfiguration, PostApicardsmsiactivate, PostApiordersIdProcess, PostApiordersOrderIdRefund, PostApisubscriptionsIdResendInvitationLink, PostApisubscriptionsTemplate, PutApicheckoutsCheckoutIdItemsId1, PutApicheckoutsId1, PutApicustomersId, PutApiordersOrderId, PutApisubscriptionsId, PutApitemplatesId, UpdateAPaymentMethod, UpdateAccountGateway, UpdateChargeback, UpdateCustomerCardAsDefault, UpdateFromCustomerASubscriptions, UpdateGateway, UpdateGatewayMethod, UpdateNotificationSeen, UpdatePayoutItems, UpdateTemplateCopy };
