# React atomic components
[![Actions Status](https://github.com/conradob/omnipresent-challenge/actions/workflows/tests.yml/badge.svg)](https://github.com/conradob/react-atomic-components/actions)

## Features

- Typesystem
- Atomic commits
- Atomic components
- Unit tests
- E2E tests
- Theme support for entire app

## Tech

- [ReactJS](https://reactjs.org/) built bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [Typescript](https://www.typescriptlang.org/) static typing.
- [React Query](https://react-query.tanstack.com/) for fetch, cache and update data.
- [Style Components](https://styled-components.com/) CSS-inJS tool
- [Jest](https://jestjs.io/) JS Testing Framework.
- [Testing Library](https://testing-library.com/) Testing utilities
- [Cypress](https://www.cypress.io/) End-to-end testing.
- [Docker](https://www.docker.com/) Run application and services in containers.

## Todos
- [ ] Fields to list issues from other repositories
- [ ] Filters
- [ ] Pagination
- [ ] Write more tests

## Installation

Install the dependencies and devDependencies.

```sh
cd omnipresent-challenge
npm install
```

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## End-to-end

### With containers

It's possible to run E2E tests with containers using [Docker](https://www.docker.com/)

```sh
docker-compose up
```

### Whout containers

##### Installation

```sh
cd e2e
npm install
```

##### Available Scripts

Make sure to start the react app before running the following scripts.

###### `npx cypress open`

Opens the Cypress Test Runner.

###### `npx cypress run`

Run all tests headlessly in the Electron browser.
