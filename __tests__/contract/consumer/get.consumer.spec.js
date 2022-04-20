"use strict"

const { getRequest } = require("../helpers/sendRequest")
const { PactV3, MatchersV3 } = require('@pact-foundation/pact/v3');
const { fromProviderState } = MatchersV3;
const path = require("path")


const provider = new PactV3({
    log: path.resolve(process.cwd(), "__tests__/contract/logs", "mockserver-integration.log"),
    dir: path.resolve(process.cwd(), "__tests__/contract/pacts"),
    logLevel: 'TRACE',
    pactfileWriteMode: "overwrite",
    consumer: 'getidentityConsumer',
    provider: 'getidentityProvider',
});

describe("Validate pact of identity", () => {

    describe("Validate pact get identity", () => {

        test("Validate successful get of an identity without QR associated", async () => {

            provider
                .given('A message with a 200 OK without QR associated', { id: '45' })
                .uponReceiving('I want to get a new identity without QR')
                .withRequest({
                    method: 'GET',
                    path: fromProviderState('/public/v2/posts/${id}/comments', '/public/v2/posts/100/comments'),
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": `Bearer c71a5d82d1d52eb305b9302363ff68502737cca35426d880cc9a5c934f0c1730`
                    }
                })
                .willRespondWith({
                    status: 200,
                    body: [
                        {
                            "id": 107,
                            "post_id": 100,
                            "name": "Rakesh Nair",
                            "email": "nair_rakesh@schoen.io",
                            "body": "Sed vel ad. Ea similique tempora. In a iusto."
                        }
                    ]
                });

            return provider.executeTest(async (mockserver) => {
                const response = await getRequest(mockserver.url, "/public/v2/posts/100/comments");
                expect(response.status).toEqual(200)
            });
        })

        test("Validate successful get of an identity with QR associated", async () => {
            provider
                .given('A message with a 200 OK with QR associated', { id: '50' })
                .uponReceiving('I want to get a new identity with QR')
                .withRequest({
                    method: 'GET',
                    path: fromProviderState('/public/v2/posts/${id}/comments', '/public/v2/posts/101/comments'),
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": `Bearer c71a5d82d1d52eb305b9302363ff68502737cca35426d880cc9a5c934f0c1730`
                    }
                })
                .willRespondWith({
                    status: 200,
                    body: []
                });

            return provider.executeTest(async (mockserver) => {
                const response = await getRequest(mockserver.url, "/public/v2/posts/101/comments");
                expect(response.status).toEqual(200)
            });
        })

    })
});