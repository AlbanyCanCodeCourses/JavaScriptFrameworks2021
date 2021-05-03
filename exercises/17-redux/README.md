# Redux Exercise

In Visual Studio code, press `command+shift+v` (Mac) or `ctrl+shift+v` (Windows) to open a Markdown preview.

You will be working on the redux only part of the application. The UI has already been completed for you.

Remember, Redux contains three main players:

- Store
- Actions
- Reducer

# Getting Started

```bash
cd exercises/17-redux/
code . # If you want to open this in a new VSCode window.
yarn install
yarn start
```

When you first start the application, you will see this error:

> Could not find "store" in the context of "Connect(App)". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to Connect(App) in connect options.

# Instructions

## Part 1 - Store

When you start the app, you see the error because you need to setup the Redux store. Open _src/index.js_ and follow the instructions.

## Part 2 - Decrease Action and Reducer

There is a counter on the page. You will make the _Decrease_ button subtract 1 from the total count. To make this happen, you will edit these files:

1. _src/constants/actionTypes.js_
2. _src/actions.js_
3. _src/reducer.js_

Come up with a name to describe decreasing the count. This will be your "action type". In _actionTypes.js_, export a constant similar to _INCREASE_COUNT_.

In _actions.js_, complete the function _decreaseCount_. It should have an action type with the name you came up with.

In _reducer.js_, create a new case in the switch state that will modify state so that the count in Redux's state will be subtracted by 1. Look at what we did for _INCREASE_COUNT_ as an example.

## Part 2 - Toggle Action and Reducer

Repeat of the steps in Part 2, but with a different action. You will be creating an action to toggle text on the screen. In the reducer, you will be setting a value in state called "isVisible". When "isVisible" is true, the text will be displayed. If you need to, take a look at _src/components/App.js_ to see what the UI needs from state.

## Part 3 - Pick A Color Action and Reducer

When the user clicks on a color, they should see a checkmark appear by the color.

Again, repeat the steps in Part 2. You will be setting a color in state to "red", "yellow", or "green". If you need to, take a look at _src/components/App.js_ to see what the UI needs from state.

## Part 4 - Todo Input Action and Reducer

We are going to create a controlled input, but the Redux store is going to control the input instead of a `useState`. The input's value is equal to something in state ("todoInput"). Typing should set something in state.

Again, repeat the steps in Part 2. You need to set "todoInput" in state. If you need to, take a look at _src/components/App.js_ to see what the UI needs from state.

## Part 5 - Updating the Todo List Action and Reducer

When the user submits the TODO list form, the input you set in Part 4 should be added to a todo list in state.

Again, repeat the steps in Part 2. You will add the user input to the "todos" in state. If you need to, take a look at _src/components/App.js_ to see what the UI needs from state.
