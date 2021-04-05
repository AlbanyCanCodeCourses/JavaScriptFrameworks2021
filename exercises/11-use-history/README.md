# History Challenge

In Visual Studio code, press `command+shift+v` (Mac) or `ctrl+shift+v` (Windows) to open a Markdown preview.

## Reasons for the Challenge

Sometimes you will need to forcefully redirect a user to a new URL. Common use cases are after the user submits a form or after they try to access forbidden content. In this challenge, we will be leverage redirection and React Router's `useEffect` hook.

## Getting Started

Using your command line, you will need to navigate to the this folder, install all dependencies, and start the app.

```bash
cd exercises/11-use-history/
code . # if you would like to open this in a separate VSCode window
yarn install
yarn start
```

NOTE that when you first start this assignment, you will see a blank screen.

## User Stories

As a user, I would like to be redirected to a thank you page after I subscribe to YourStylist.com's newsletter

## Acceptance Criteria

| Route                           | Component or Behavior                        |
| ------------------------------- | -------------------------------------------- |
| http://localhost:3000/subscribe | Subscribe                                    |
| http://localhost:3000/thank-you | ThankYou                                     |
| Any other path                  | Redirects to http://localhost:3000/subscribe |

- When the user types ones of the routes in the table above into an address bar, the application should render the matching component and display the associated content.
- If the URL is something other than http://localhost:3000/subscribe or http://localhost:3000/thank-you, it should redirect the user to http://localhost:3000/subscribe.
- On the subscribe screen, after user enters her email address and clicks on the "Subscribe" button, she should be redirected to the Thank You screen (http://localhost:3000/thank-you). You should accomplish this with React Router's `useHistory`.

## Instructions

Before you begin, you will need to install React Router:

```bash
yarn add react-router-dom
```

You will need to edit each one of these in this exact order. Each file will have comments describing what you need to do.

1. src/components/App/App.jsx
2. src/components/Subscribe/Subscribe.jsx
