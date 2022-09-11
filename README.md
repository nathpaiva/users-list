## Last updated 5/10/22

## DO NOT SPEND MORE THAN 4 HRS ON THIS TASK

## Getting Started

- install node 16.x
- `npm install`
- `npm start`

## Instructions

- Build any additional components from scratch. DO NOT use any additional components from the Material library. Showcase your HTML/CSS/Javascript skills.
- Refactor/augment the existing code so that it meets the acceptance criteria below and your personal coding standards.
- Comment freely to convey thoughts/patterns/decisions in the code

## Acceptance Criteria

1. There's a bug with the top navigation. Get the top nav working so that we can switch between the two tabs.

2. Currently data is hardcoded. Remove the hardcoded data and retrieve data using this endpoint https://randomuser.me/api/?results=2000 to populate the users page. The end result should look like `./mocks/users-mock.png`. Do your best to match the font, but any will do. BONUS: add an animation on load of the tiles

3. When I click on a tile in the Users tab, the tile you clicked on should highlight (tile background can just be yellow instead of gray) and the Selected User tab should show a more detailed profile of that user that looks like `./mocks/selected-user/mock.png`. Do your best to match the font, but any will do.

4. Both views should be mobile friendly and show us examples of responsive design. There is not a specific mock for this and you may use your discretion on what is mobile friendly.

## Submission

- remove the node_modules folder
- zip up the project folder and please send it back to the recruiter

# Nath's notes:

- I opted to upgrades the React and also added the Typescript, so I could have a better environment to code.
- As I know T2 use emotionJs, so I added this dependency to create the application.
- I didn't have enoughs time to add tests :( I'm really sorry about that, but I'd like to invite you to check this repo [quiz](https://github.com/nathpaiva/quiz) that I have some test examples, but definitely now a days I have more understood and knowledge related to tests and code.

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

### The end

I hope you peeps enjoy my work, looking forward to meet you all.

Thank you,

[Nath Paiva 🛴: github](https://github.com/nathpaiva)

[Linkedin](https://www.linkedin.com/in/nathpaiva/)
