[![Netlify Status](https://api.netlify.com/api/v1/badges/95393da5-6fb5-4f33-b75c-d7039990d58b/deploy-status)](https://app.netlify.com/sites/list-users-infityscroll/deploys)
[![wakatime](https://wakatime.com/badge/user/2aeba48e-4558-4f58-965a-fc1cd46ba978/project/5de4987f-276b-448d-99ee-bbaf44373897.svg)](https://wakatime.com/badge/user/2aeba48e-4558-4f58-965a-fc1cd46ba978/project/5de4987f-276b-448d-99ee-bbaf44373897)

## Users list

This project creates a users list consuming the [Random user API](https://randomuser.me). The project requests thousands of users to handle this data performative way.

## Project Architecture

```bash
src/
├── components
│   ├── CardUser
│   │   ├── CardUser.tsx
│   │   ├── __tests__
│   │   │   ├── CardUser.test.tsx
│   │   │   └── mock.ts
│   │   ├── components
│   │   │   ├── CardDescription.tsx
│   │   │   ├── CardDetail.tsx
│   │   │   ├── CardImage.tsx
│   │   │   ├── CardUserContainer.tsx
│   │   │   ├── CardUserContext.tsx
│   │   │   ├── __tests__
│   │   │   │   ├── CardDescription.test.tsx
│   │   │   │   ├── CardDetail.test.tsx
│   │   │   │   ├── CardImage.test.tsx
│   │   │   │   ├── CardUserContainer.test.tsx
│   │   │   │   └── CardUserContext.test.tsx
│   │   │   └── index.ts
│   │   ├── index.ts
│   │   └── type.d.ts
│   ├── GlobalCss
│   │   ├── GlobalCss.tsx
│   │   ├── animations.ts
│   │   ├── cardAnimation.ts
│   │   ├── cssVariables.ts
│   │   ├── index.ts
│   │   └── resetCss.ts
│   ├── GlobalErrorMessage
│   │   ├── GlobalErrorMessage.tsx
│   │   └── index.ts
│   ├── GlobalLoader
│   │   ├── GlobalLoader.tsx
│   │   └── index.ts
│   ├── Header
│   │   ├── Header.tsx
│   │   └── index.ts
│   ├── InfinityScroll
│   │   ├── InfinityScrollContext.ts
│   │   ├── InfinityScrollControl.tsx
│   │   ├── InfinityScrollProvider.tsx
│   │   ├── index.ts
│   │   ├── reduceInfinity.ts
│   │   ├── type.d.ts
│   │   └── useInfinityScroll.tsx
│   ├── Loader
│   │   ├── Loader.tsx
│   │   ├── __tests__
│   │   │   └── Loader.test.tsx
│   │   └── index.ts
│   ├── TabPanel
│   │   ├── TabPanel.tsx
│   │   └── index.ts
│   ├── TabProvider
│   │   ├── TabProvider.tsx
│   │   └── index.ts
│   ├── UserProvider
│   │   ├── UserProvider.tsx
│   │   └── index.ts
│   └── index.ts
├── constants
│   └── index.ts
├── helpers
│   └── index.ts
├── hooks
│   ├── index.ts
│   └── useFetchApi.ts
├── index.tsx
├── input.css
├── pages
│   ├── FullProfile
│   │   ├── FullProfile.tsx
│   │   └── index.ts
│   ├── Main.tsx
│   └── UserList
│       ├── UsersList.tsx
│       └── index.ts
├── type.d.ts
└── vite-env.d.ts
```

The project is spited by:

- `pages`: responsible for having each page the project contains.
- `components`: responsible for containing the sharable components. In the case, that the component has more complexity the component folder could contain an internal `component` folder, a `hook`, `type` etc.
- `constants`: has the sharable values which are used inside the application
- `hooks`: has the sharable `hooks` which all pages or components can take advantage

---

## Project developed with:

- Typescript
- HTML
- CSS in JS - Emotion

## Test developed with:

- [Vitest](https://vitest.dev/)

## To run the project you need to install:

- [Node](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)

### And clone the repository

```sh
$ git clone git@github.com:nathpaiva/users-list.git
```

## Before starting the project you must install the dependencies:

```sh
$ yarn
```

## To start the project you must run the command:

```sh
$ yarn start
```

- This command to access [http://localhost:3000](http://localhost:3000)

## If you want to run the tests

```sh
$ yarn test
```

## To build the project, by running the command

```sh
$ yarn build
```
