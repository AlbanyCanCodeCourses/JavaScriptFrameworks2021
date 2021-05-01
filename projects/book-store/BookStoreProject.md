# Project 2: Book Store (Final Project)

**Due May 31, 2021 End of Day**

For your second project, you will be creating a book store web application, similar to Barnes & Noble and Amazon. Users who visit your book store signin, search for books, select books and view detailed book information. They can also save books to three different lists or “shelves”:

1. “Want to Read”
2. “Currently Reading”
3. “Read”

Together, these shelves will make up their “bookshelf”. You will include functionality for users to manage the contents of their bookshelves.

## Project Goals

- To put together and make practical use of what was taught in class.
- To learn about developer practices, like setting up an application, maintaining your own git repository and writing a _README.md_.
- To build a portfolio piece to show off to potential employers.

This project will put together these topics that were covered in class:

- Global state management with the Context API (or alternatively, Redux)
- AJAX and the `useEffect` (or lifecycle) hooks
- Routing
- Authentication

## Project Requirements

Your book store must meet all the following application setup, UI and coding requirements.

### Application Setup Requirements

- You must create a git repository for your application and it must be hosted publicly on Github.
- Your application should be easy to install and start. **IF WE CANNOT INSTALL OR START YOUR APPLICATION, IT IS AN AUTOMATIC FAILURE.**
- Your application should not crash at any point.
- You should include a _README.md_ file within the root of the git repository. The _README.md_ should have clear instructions on how to install and start the project.

Note that we will go over setting up the project in class.

### Screens & UI Requirements

Your project should have four screens:

1. Signin
2. Search
3. Book Details
4. Bookshelf

#### Signin Screen

- Users should be able to signin with a username and password.
- If a user enters the wrong credentials, display a message telling the user that their credentials are not correct.

#### Search Screen

![Searching for a book](book-store-search-screen.png)

- Users should be able to search for different book titles.
- At least the book title, author(s) and a thumbnail of the book cover should appear in the search results. The API does not include the same information every time, so use conditional rendering; check to see if the data is there before displaying it on the screen.
- If there are no matching titles, display a message on the screen telling the user that no search results are found.
- Each book should link to the _Book Details_ screen.

#### Book Details Screen

![The Book Details screen](book-store-book-details-screen.png)

- Users will be able to view more detailed information on a single book.
- You will be getting the book information from an API. In addition to the book title, author(s) and cover image, include at least three other types of information about the book. Again, the API does not include the same information every time, so use conditional rendering; check to see if the data is there before displaying it on the screen.
- Users should be able to change which "shelf" a book belongs to.

#### Bookshelf Screen

- This page should contain three book lists or “shelves”:
  1. Want to Read
  2. Currently Reading
  3. Read

![The bookshelf](book-store-bookshelf-screen.png)

- Users should be able to see which shelf each book belongs to.
- Users should be able to move a book from one shelf to another.
- Users should be able to remove a book from their bookshelf.
- Each book should link to the _Book Details_ screen.

### Routing & Navigational Requirements

Routing is a system for resource navigation. When a user clicks on a link, they navigate to the screen. Our router is what controls what screen the user gets.

- The application should have the following paths:

| Screen       | Must Be Logged In | Route              | Footnotes                                       |
| ------------ | ----------------- | ------------------ | ----------------------------------------------- |
| Signin       | No                | /                  |                                                 |
| Search       | Yes               | /search            |                                                 |
| Book Details | Yes               | /book/evuwdDLfAyYC | where _evuwdDLfAyYC_ is an example of a book ID |
| Bookshelf    | Yes               | /bookshelf         |                                                 |

- When a user successfully signs in, they should be redirected to their bookshelf.
- The user must be logged in to view the _Search_, _Book Details_ or _Bookshelf_ screens. If they are not, redirect them to the _Signin_ screen. (Hint: use protected routes.)
- When logged in, the user should be able to navigate to their _Bookshelf_ and the _Search_ screens from every page except the _Signin_ screen.

![An example of navigating to the Bookshelf and Search screens with a navbar](book-store-navbar-screen.png)

- In both the _Search_ and _Bookshelf_ screens, clicking on the book should navigate to the _Book Details_ screen.

![Navigating to the Book Details screen from the Bookshelf and Search screens](book-store-link-to-book-details-screen.png)

### AJAX UI Requirements

- Loading and AJAX errors should not crash your application.
- Display error messages when AJAX requests fail.

### Coding Requirements

- This application should contain at least four React components. Each of the four screens outlined earlier should be a separate, high-level React Component. (You can choose to use hooks, extend the React Component class, or mix and match. It is up to you.)
- You must use the React Router library.
- You must have a signin form and authenticate users.
- You must have protected routes (routes that the user must be logged in to see).
- You must use the Context API (recommended) or Redux to store state that is shared universally between most components.
- For components that are functions, you should handle AJAX calls inside the `useEffect()` hooks. For components where you extend the React Component class, you should make AJAX requests inside of `componentDidMount()` and other lifecycle hooks.
- AJAX errors should be caught.
- Styling must be included, but you will not be graded on how visually appealing your application is or how well your CSS is written.

## Styling Your Project

We do not have example HTML or CSS for this project. We suggest that you use a CSS framework like [Bootstrap](https://getbootstrap.com/), [Foundation](https://get.foundation/sites.html) or [UIKit](https://getuikit.com/). Here are a few different ways to include styling:

- Add a CDN link to the _index.html_ file of your project.
- Install a CSS library with yarn. Import the library's entry CSS file in your _index.js_ file.
- Install an NPM library like [Reactstrap](https://reactstrap.github.io/) with yarn. Follow the library's documentation and import the components from the library where needed.

## Back-End Book Store Server And API

As a part of this project, you will be making AJAX requests to the back-end book store server. The server has an API that will allow you to signin, search for books, find details about a single book, look up books in a user’s book store and update books in a user’s book store. In order for this to be a part of your Github portfolio, we have a written a server in Node.js, which you will install and run locally.

### Getting Started

You will copy the entire server directory from the class’s _JavaScriptFrameworks2020_ Github repository and paste it inside your own Book Store project repository. It can be found in _projects/2-book-store/server/_. From the command line, navigate into the new server folder, install all of the node packages, and start the server.

```
cd server
yarn install
yarn start
```

When the server starts and is working, you should see this message appear in the command line:

```
Your server is running on http://localhost:7000/
Press ctrl+c to stop
```

To avoid CORS errors, update the _package.json_ of your React app so that it proxy's the server's traffic. (What this essentially means is that instead of sending AJAX requests to e.g. _http://localhost:7000/api/signin_, you would send it to _/api/signin_. This will make it easier for those of you who want to host your project.)

```json
{
  "name": "book-store",
  "version": "0.1.0",
  "private": true,
  // ...
  "proxy": "http://localhost:7000/"
}
```

You will need to have both this back-end server and your project's React server running at the same time.

### API End-Points

The API is a REST based API that will return JSON data. Here is an overview of the API end-points. You will need to plugin the _bookId_, _shelfKey_ and _bookTitle_ into the URL.

| Action                                | Method | URL                                | Need JWT? |
| ------------------------------------- | ------ | ---------------------------------- | --------- |
| Signin and get a JWT token            | POST   | /api/signin                        | No        |
| Get a list of books in a bookshelf    | GET    | /api/bookshelf                     | Yes       |
| Add a book to the bookshelf           | PUT    | /api/bookshelf/_bookId_/_shelfKey_ | Yes       |
| Remove a book from the bookshelf      | PUT    | /api/bookshelf/_bookId_/none       | Yes       |
| Move a book from one shelf to another | PUT    | /api/bookshelf/_bookId_/_shelfKey_ | Yes       |
| View details on a single book         | GET    | /api/book/_bookId_                 | Yes       |
| Search for books                      | GET    | /api/book/search/_bookTitle_       | Yes       |

#### Signin

You will need to include the username and password in the request body, like this:

```json
{
  "username": "hermione",
  "password": "granger"
}
```

You have two users you can signin with:

> Username: harry \
> Password: potter

> Username: hermione \
> Password: granger

POST a request the URL _/api/signin_. If the username and password is correct, you will get a response with a JWT token like this:

```json
{
  "message": "You did it! Success!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNzI1IiwiaWF0IjoxNTg3MjQ1MzMxfQ.lC7PVh4Miwc_r6GO6UWelJAqDYBvaInC-qepdX_7Jdw"
}
```

If they are not correct, you will get a response like this below. The server will return a 401 Unauthorized error and, if you are using Axios, you must handle it within the catch block.

```json
{
  "message": "Unauthorized. Your username or password is not correct."
}
```

**One thing to note about the tokens is that they will be different each time you restart the back-end server. This means you will need to signin and get a new JWT token every time you restart.**

In every other AJAX request, you must include the JWT token you received in the _Authorization_ header. Here is an example with Axios:

```javascript
// You should not hardcode this
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNzI1IiwiaWF0IjoxNTg3MjQ1MzMxfQ.lC7PVh4Miwc_r6GO6UWelJAqDYBvaInC-qepdX_7Jdw";

axios("/api/bookshelf", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
```

See the AJAX requests in [Example 12a](../../examples/12a-authentication-quick-dirty) and [Example 12b](../../examples/12b-authentication-routing) for an example of authentication with JWT tokens.

#### Get a List of Books in a User's Bookshelf

To lookup books in a user’s bookshelf, you will make a GET request to
_/api/bookshelf_. A token must be in the request, or you will get a 401 Unauthorized error.

Here is an example of a success response:

```json
{
  "books": {
    "wantToRead": [],
    "currentlyReading": [],
    "read": [
      {
        "id": "dgYvDwAAQBAJ", // This is the book ID, which you will use in other AJAX requests
        "title": "Eloquent JavaScript, 2nd Ed.",
        // Additional information
        "shelf": "read"
      }
    ]
  }
}
```

#### Add a Book to the Bookshelf

In order to add a book to a bookshelf, you need both the book ID and shelf key. The three shelf keys are:

- wantToRead
- currentlyReading
- read

This is a PUT request. You will need to plug in both the book ID and shelf key into the URL. For example, if I had a book with the ID _dgYvDwAAQBAJ_ and I wanted to add it to my “Currently Reading” bookshelf, I would send the request to: \
_/api/bookshelf/dgYvDwAAQBAJ/currentlyReading_

A token must be in the request, or you will get a 401 Unauthorized.

The response will be the same as getting all books in a bookshelf.

#### Remove a Book from the Bookshelf

This request is similar to adding a book to a bookshelf, but you will replace the shelf key with _none_. For example, if I'm removing a book with the ID _dgYvDwAAQBAJ_ from my bookshelf, I would send a PUT request to: \
_/api/bookshelf/dgYvDwAAQBAJ/none_

A token must be in the request, or you will get a 401 Unauthorized.

The response will be the same as getting all books in a bookshelf.

#### Move a Book from One Shelf to Another

An example of when you would make this request is when a user wants to move a book from the “Currently Reading” to the “Read” category. In order to do this, you will need both the book ID and the new desired book shelf. If my book ID is _dgYvDwAAQBAJ_, and I want to move it to the "Read" shelf, I would send a PUT request to: \
_/api/bookshelf/dgYvDwAAQBAJ/read_

A token must be in the request, or you will get a 401 Unauthorized.

The response will be the same as getting books in a bookshelf.

#### View Details on a Single Book

In order to get the complete details on a single book, you need the book ID. If the book ID is _dgYvDwAAQBAJ_, you would send a GET request to this URL: \
_/api/book/dgYvDwAAQBAJ_

Here is an example response:

```json
{
  "book": {
    "id": "jAUODAAAQBAJ", // This is the book ID, which you will use in other AJAX requests
    "title": "Needful Things",
    "authors": ["Stephen King"],
    // Additional information
    "shelf": "currentlyReading"
  }
}
```

#### Search for Books

You will need to make a GET request.

If the user types text into the search bar, (e.g. "salmon fishing"), replace any white space with "+" and plugin the search entry into the url like this:
_/api/book/search/salmon+fishing_

Here is an example of a response:

```json
{
  "status": "complete",
  "books": [
    {
      "id": "0ETIjwEACAAJ",
      "title": "The Fisherman",
      // Additional information
      "shelf": "none"
    },
    {
      /* Book # 2 */
    },
    {
      /* Book # 3 */
    }
  ]
}
```

If no search results are found, your response will contain an empty array of books like this:

```json
{
  "status": "complete",
  "message": "No books matching \"agskdjaghsdgd\" found.",
  "books": []
}
```

Our API is a wrapper around the Google API, which is rate limited. This means that after a certain number of requests per day (in the thousands), you will not be able to search for books. In order to get around this, the book store API will not search for books on every single request. It will only process the last request in a rapid succession of requests. When you get this response back from the server, you should simply ignore the response. It simply means that the server is waiting for the user to finish typing.

```json
{
  "status": "searching"
}
```

## Tips

Create diagrams of each component, what it puts in state, what is shared in the global state, what AJAX requests it makes, what data it sends and receives, and how the user will navigate from one component to the next.

A good place to start is with routing. Create a bunch of components that say, at first, "Hello World". Link the components to each other where needed.

Use React Router's `<Link>` tag to navigate to new components.

You can copy and paste a lot of your code from the [12b Authentication and Routing exercise](../../exercises/12b-authentication) into this project.

In most places, it is recommended that you store data and other state in React component's local state. The Context API or Redux should really only be used for state that is shared between most components.

The book IDs will drive most of your application. You will receive books IDs in your response when you make an AJAX request to search for a book, open the bookshelf or modify a bookshelf. You should place book IDs into `<Link>` paths to new screens (see how we linked to the movie details page in the [React Router example](https://codesandbox.io/s/react-router-v52-l8w48?file=/src/components/App/App.jsx). You will also need to carry the books IDs from one AJAX request to another when a user modifies their bookshelf or views details on a single book.

You may find it helpful to use [Postman](https://www.postman.com/) to test our your AJAX requests before building them into React.

When making AJAX requests, try to log your response (`console.log`) at first so that you can figure out which part of the response contains the data that you need. Alternatively, you view AJAX requests within the "Network" tab of your browser's DevTools.

Try to make your components stateless. For example, say the user is on the _Search_ screen and she is searching for _gardening_. She user thens clicks on a book called _The Art of Gardening_ and is taken to the _Book Details_ page. Now, you may decide to carry over the details like title and author from the search results to the _Book Details_ screen. However, I recommend that you simply make an AJAX request within the Book Details component to look up the information you need instead of relying on the data from the search results. Here is why:

1. You will need to make an AJAX request on the _Book Details_ screen anyways. If the user refreshes the page, the component will lose its state.
2. Carrying over state from one component to the next is difficult.
3. If your components are stateless, then your code is reusable.

Talk to your instructors and talk to them earlier on. They can guide you on designing the architecture and overflow flow of your application so that you are not stuck the night before the project is due.

### Code Quality

While your grade is not determined on whether or not you follow these code quality tips, we encourage you to code to a professional standard. One of the goals of this project is to help you build a portfolio. Just like an interviewer will judge you on your attire, employers will judge you on the neatness of your code.

- Your _README.md_ should be written in Markdown. It should also describe your project, explain the purpose of the project, give instructions on how to install and start both your project and the server and credit yourself as the author. Here are some resources on creating _README.md_ files:
  - [_README.md_ template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
  - [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- Choose descriptive and specific names for React components, constants, functions and anything else that is named.
- You must not leave any debugging statements in your code. Remove any `console.log()` statements from your code before committing.
- Add comments to the parts of your code that is difficult to understand. (You will make a good impression if you use JSDoc. See [Code documentation for JavaScript with JSDoc: an introduction](https://www.valentinog.com/blog/jsdoc/), [Jsdoc cheatsheet](https://devhints.io/jsdoc) and [JSDoc Manual](https://jsdoc.app/)).
- Do not commit anything that is commented out for debugging purposes. Before submitting, make sure you only have actual comments within comment tags.
- Remove any components or code that is not being used. (This affects application load time as well as code quality.)
- Use proper indentation. (Prettier can take care of this.)
- Add anything that should not be committed to your _.gitigore_ file.

## Project Submission

You must create a new git repository for this project. Within your project, you will need to include a _package.json_ and _README.md_ file in the project root directory. All files must be included to install, build, and run your application. You are limited to Node.js packages. Instructions on how to install or start your application must be written in the _README.md_. While not required to do so, we suggest you write your _README.md_ in Markdown.

Before the project is due, you must share a link to your GitHub repository to both on the instructors in Slack.

## Project Help

Your instructors are will provide one hour per week to help you with your projects. Please reach out to them at least one day in advance. You can contact them on Slack.
