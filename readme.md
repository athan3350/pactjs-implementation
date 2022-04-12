# :tada: **pactjs-implementation** :tada:

> ## Table of Contents

- [transfers-be-automation-test-pact](#Module-or-Project-name)
- [Table of Contents](#Table-of-Contents)
- [What is contract testing?](#what-is-contract-testing)
- [What is Pact?](#what-is-pact)
- [Requirements](#Requirements)
- [The project directory structure](#The-project-directory-structure)
- [Inputs](#Inputs)
- [Installation](#Installation)
- [Example usage](#Example-usage)
- [ used technology stack  ](#Further-Reading--Useful-Links)


## **What is contract testing?**

> Contract testing is a technique for checking and ensuring the interoperability of software applications in isolation and enables teams to deploy their microservices independently of one another. Contracts are used to define the interactions between API consumers and providers. The two participants must meet the requirements set out in these contracts, such as endpoint definitions and request and response structures.

## **What is Pact?**

> Pact is a code-first consumer-driven contract testing tool. Consumer contracts, also called Pacts, are defined in code and are generated after successfully running the consumer tests. The Pact files use JSON format and are used to spin up a Pact Mock Service to test and verify the compatibility of the provider API.

> The tool also offers the so-called Pact Mock Provider, with which developers can implement and test the consumer using a mocked API. This, in turn, accelerates development time, as teams don't have to wait for the provider to be available.

## **Requirements**

> You need to have previously installed the following tools

> [![node](https://img.shields.io/badge/node-v16.x.x-green.svg)](https://nodejs.org/es/download/)


| Name      | Version |  
| --------- | ------- |  
| node |  \>= 14.x.x |

## **The project directory structure**

​ The project is compiled for node js and follows the standard directory structure used in most Jest projects:

```Gherkin
transfers-be-automation-test-pact
+ __test__                                  | Location of automation source.
    + contract                              | This folder contains the code to build the consumer and provider side.
        + constants                         | The constants to be used during automation are stored.
        + consumer                          | This folder contains the code that generates the contracts of the test cases to be validated.
        + data                              | This folder contains the data structure necessary to generate the contracts of the test cases to be validated.
        + provider                          | This folder contains the logic to compare the contracts created on the consumer side with the real APIs
    + helpers                               | This folder contains the common classes that will be reused in test automation.
```

## **Inputs**

| Name | Description | Values |  
| ------------------ | -------------------------- |  -------------------------- |  
|none |none|none|

## **Outputs**

| Name               | Description                |  
| ------------------ | -------------------------- |  
| none |none |

## **Installation**

We use [Node](https://nodejs.org/en/), Node.js® is a runtime environment for JavaScript built with V8.

* `git clone git clone https://github.com/athan3350/pactjs-implementation.git` this repository
* change into the new directory `cd pactjs-implementation`.
* install all dependency `npm install`

## **Example usage**

>For executing the consumer side locally:

```bash  
  npm run test:consumer:test
```


>For executing the provider side locally:

```bash  
  npm run test:provider:test
```
## **Additional info**

Dummy API:

>curl --location --request GET 'https://gorest.co.in/public/v2/posts/100/comments' \
--header 'Authorization: Bearer c71a5d82d1d52eb305b9302363ff68502737cca35426d880cc9a5c934f0c1730'

## **used technology stack**

* [MarkDown guide](https://www.markdownguide.org/getting-started/)
* [Contract testing](https://docs.pact.io/#:~:text=Contract%20testing%20is%20a%20technique,documented%20in%20a%20%22contract%22.)
* [Pact JS](https://github.com/pact-foundation/pact-workshop-js)

> Authors:  
> Sebas
> That's it, We hope you like it 🐱
