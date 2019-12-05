# rn-starter-template

**RNStarterTemplate** is an *opinionated* (by me) starting template for RN projects.


## What is it for?
The idea behind this project is to have a project template for **quick prototyping**.
It has preconfigured tech stack that I use the most, so I can mostly pass over the stop of the project setup and just jump straight into implementation of functionalities.

![Demo](./readme/demo.gif 'Demo presenting the template')


## What's included?

- `react-navigation` with initial boilerplate,
- `redux`, `react-redux`, `redux-logger`, `redux-thunk`, `redux-persist` with a reducer for settings,
- API clients:
  - REST with *Axios*,
  - GraphQL with *Apollo*,
- configured localization with `i18next`, `i18next-pseudo`, `react-i18next`,
- `styled-components` and `styled-system`,
- `lottie-react-native` with example animations for success, failure, loading and empty state,
- `react-native-version-number` and `react-native-version` for native bundles version updates after js package version update by `yarn version`,
- `react-native-config` for *.env* file and preview of it,
- unit and snapshots tests, redux testing with `redux-testkit` and event testing with`react-native-testing-library`
- `eslint` with `airbnb`-based config, but without semicolons at the ends of lines,
- configured `prettier`,
- `prop-types`,
- absolute paths for imports,
- `.gitignore` configured for *RN* and other used tools,
- `.vscode` settings for *Visual Studio Code* to format files on save with [prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode),
- and finally a dev screen with useful settings and previews, that you can access with 4 quick taps at *"Welcome to React"* header,
- default setup for *Danger.js* (it works with *CI* of this repository).

## Firebase

Firebase is used in the project. It needs config files if you want to use it. You can generate those in the [Firebase console](https://firebase.google.com/).

Config files should be put in the platform specific directories:

- `google-services.json` into `android/app`,
- `GoogleService-Info.plist` into `ios`.

## Can I use it?

Yes, **you are welcome to use it** in your projects if you like.
If you have an idea for an improvement of this template - *PR*s are also welcome.
