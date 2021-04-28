# Connecting React to Redux

In Visual Studio code, press `command+shift+v` (Mac) or `ctrl+shift+v` (Windows) to open a Markdown preview.

You will be connecting a presentational React components to the Redux store with a container.

## Getting Started

To begin, install and start the application from this directory:

```shell
cd exercises/18-redux-react/
code . # If you want to open in a new VSCode window
yarn install
yarn start
```

## Instructions

There are two parts to this exercise. You can complete it in any order:

- Open _src/components/Counter/CounterContainer.js_ and setup a container for the Counter that you see on your screen.
- Open _src/components/Todo/Todo.jsx_. Refactor the React component so that it uses what it gets from the container instead of `useState`.
