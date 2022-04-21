"use strict"

const { VerifierV3 } = require('@pact-foundation/pact/v3');
const path = require("path")

describe("Validate pact of identity", () => {

    it("validate the pact of an identity get", () => {

        let opts = {
            consumerVersionTags: ['QA'],
            providerVersionTags: ['QA'],
            providerVersion: '1.0.0',
            providerBaseUrl: 'https://gorest.co.in',
            changeOrigin: true,
            logLevel: 'TRACE',
            provider: 'getidentityProvider',
            pactUrls: [
                path.resolve(
                  process.cwd(),
                  `./__tests__/contract/pacts/getidentityConsumer-getidentityProvider.json`
                ),
              ],
            stateHandlers: {
                'A message with a 200 OK without QR associated': {
                    setup: (params) => {
                        console.log("Entering to the state");
                        console.log(params);
                        return Promise.resolve({ id: 100 });
                    }
                }
            },
        }

        return new VerifierV3(opts).verifyProvider()
            .then((res) => {
                console.log('Pact Verification Complete!: Get identity ', res);
            }).catch((res) => {
                throw new Error('Pact Verification FAIL!: Get identity ', res);
            });
    })

})