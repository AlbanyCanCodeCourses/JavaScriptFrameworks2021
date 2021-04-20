# Typescript

In Visual Studio code, press `command+shift+v` (Mac) or `ctrl+shift+v` (Windows) to open a Markdown preview.

## Reasons for Challenge

Typescript is a very marketable skill for those of you who are job searching. It is a very useful tool that stops you from introducing type related bugs from application.

## Examples and Documentation

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)
- [TypeScript and React: Components](https://fettblog.eu/typescript-react/components/)
- [TutorialsTeacher](https://www.tutorialsteacher.com/typescript)

## Getting Started & Instructions

You will be refactoring two of your previous assignments to use TypeScript.

- exercises/02-props/
- exercises/05-forms/

To convert these assignments to TypeScript assignment, you will need to navigate to the root of each and then install all React TypeScript dependencies. For example, for the _02-props_, you would do:

```
cd exercises/02-props/
code . # if you would like to open this in a separate VSCode window
yarn add typescript @types/node @types/react @types/react-dom
```

Rename the _index.js_ file as _index.tsx_. Rename all files that contain React components so that they end with _.tsx_. Then start your server with `yarn start`.

## Acceptance Criteria

- Your application starts without any errors.
- All files with React components to end with the _.tsx_ extension
- All of your code has typed annotations.
- You do not use the `any` type.
