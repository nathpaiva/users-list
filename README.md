[![Netlify Status](https://api.netlify.com/api/v1/badges/95393da5-6fb5-4f33-b75c-d7039990d58b/deploy-status)](https://app.netlify.com/sites/classy-kangaroo-70b853/deploys)
[![wakatime](https://wakatime.com/badge/user/2aeba48e-4558-4f58-965a-fc1cd46ba978/project/eb0a98c4-7a50-45de-9aa1-fd1461d4a565.svg)](https://wakatime.com/badge/user/2aeba48e-4558-4f58-965a-fc1cd46ba978/project/eb0a98c4-7a50-45de-9aa1-fd1461d4a565)

## Instructions

- Build any additional components from scratch. DO NOT use any additional components from the Material library. Showcase your `HTML/CSS/Javascript` skills.
- Refactor/augment the existing code so that it meets the acceptance criteria below and your personal coding standards.
- Comment freely to convey thoughts/patterns/decisions in the code

## Acceptance Criteria

1. There's a bug with the top navigation. Get the top nav working so that we can switch between the two tabs.

2. Currently data is hardcoded. Remove the hardcoded data and retrieve data using this endpoint https://randomuser.me/api/?results=2000 to populate the users page. The end result should look like `./mocks/users-mock.png`. Do your best to match the font, but any will do. BONUS: add an animation on load of the tiles

3. When I click on a tile in the Users tab, the tile you clicked on should highlight (tile background can just be yellow instead of gray) and the Selected User tab should show a more detailed profile of that user that looks like `./mocks/selected-user/mock.png`. Do your best to match the font, but any will do.

4. Both views should be mobile friendly and show us examples of responsive design. There is not a specific mock for this and you may use your discretion on what is mobile friendly.

## Project Architecture

```bash
.
├── components
│ ├── CardUser
│ ├── GlobalCss
│ ├── Header
│ ├── InfinityScroll
│ ├── Loader
│ ├── TabPanel
│ ├── TabProvider
│ ├── UserProvider
│ └── index.ts
├── constants
│ └── index.ts
├── helpers
│ └── index.ts
├── hooks
│ ├── index.ts
│ └── useFetchApi.ts
├── index.tsx
├── pages
│ ├── FullProfile
│ ├── Main.tsx
│ └── UserList
├── react-app-env.d.ts
├── setupTests.ts
└── type.d.ts
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
- CSS - SASS - Emotion

## Test developed with:

- [Jest](https://jestjs.io/)

## To run the project you need to install:

- [Node](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)

### And clone the repository

```sh
$ git clone git@github.com:nathpaiva/take-two.git
```

## Before starting the project you must install the dependencies:

```sh
$ yarn
```

## To start the project you must run the command:

```sh
$ yarn start
```

- This command to access [http://localhost:2000](http://localhost:2000)

## If you want to run the tests

```sh
$ yarn test
```

## To build the project, by running the command

```sh
$ yarn build
```
