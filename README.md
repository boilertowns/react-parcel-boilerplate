<h1 align="center">♨️ React Parcel Boilerplate</h1>

<div align="center">
  <p>
    A React boilerplate with opinionated setup to help you quickly kickstart your applications.
  </p>
  <img src="https://img.shields.io/github/license/boilertowns/react-parcel-boilerplate?style=flat-square" alt="MIT license" >
</div>

## The Setup

- [React v18][react-url]
- [React Router v6][react-router-url]
- [TypeScript][typescript-url]
- UI development with [Storybook][storybook-url]
- Unit test with [Testing-library][testing-library-url]
- E2E testing with [Playwright][playwright-url]
- Linting with [Eslint][eslint-url] and code formatting with [Prettier][prettier-url]
- Conventional commit messages with [Commitlint][commitlint-url]
- Develop and build production with [Parcel][parcel-url]

## Get Started

- Use [Boilertowns](https://github.com/boilertowns/create-boilertowns) CLI.

  ```sh
  # npm
  npm create boilertowns@latest -- -b react-parcel-boilerplate

  # yarn
  yarn create boilertowns -b react-parcel-boilerplate

  # pnpm
  pnpm create boilertowns -b react-parcel-boilerplate

  # bun
  bun create boilertowns/react-parcel-boilerplate [project-name]
  ```

- Click the green "Use this template" button to generate a new repository with the same structure and files.

  <img src="https://docs.github.com/assets/cb-36544/images/help/repository/use-this-template-button.png" alt="Use this template button" width="500">

  [Ref: Github Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)

## Development

- Run the app in development environment:

  ```sh
  pnpm dev
  ```

- Run components unit tests with jest:

  ```sh
  pnpm test
  ```

- Run e2e tests with playwright:

  ```sh
  pnpm test:e2e
  ```

- Build the app in production mode:

  ```sh
  pnpm build
  ```

- Run the app in production mode. It uses static files from `build` folder.

  ```sh
  pnpm serve
  ```

## GitHub Actions

This boilerplate uses [GitHub Actions](https://github.com/features/actions) to perform unit test on Pull Request. You can see the details at [pr-test.yml](./.github/workflows/pr-test.yml).

## Contributing

**react-parcel-boilerplate** ❤️ your contributions. If you have any ideas, suggestions, fixes, feel free to contribute.

[boilertowns-url]: https://github.com/boilertowns
[react-url]: https://beta.reactjs.org
[react-router-url]: https://reactrouter.com
[typescript-url]: https://www.typescriptlang.org
[storybook-url]: https://storybook.js.org
[eslint-url]: https://eslint.org
[commitlint-url]: https://github.com/conventional-changelog/commitlint
[prettier-url]: https://prettier.io
[playwright-url]: https://playwright.dev
[testing-library-url]: https://testing-library.com
[react-boilerplate-url]: https://github.com/react-boilerplate/react-boilerplate
[bulletproof-react-url]: https://github.com/alan2207/bulletproof-react
[parcel-url]: https://parceljs.org/
