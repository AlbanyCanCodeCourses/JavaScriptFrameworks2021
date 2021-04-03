# Authentication Server - Authentication and Displaying Content

In Visual Studio code, press `command+shift+v` (Mac) or `ctrl+shift+v` (Windows) to open a Markdown preview.

## Getting Started

Using your command line, you will need to navigate to the resources folder, install all dependencies, and start the server by typing in the commands down below.

```bash
cd authentication-server/
yarn install
yarn start
```

After running the server on your machine, you will be greeted with a message Your server is running on http://localhost:7000.

At any point, if you need to stop the server, press `ctrl+c` .

## This Assignment's API

The API is a REST based API. Here are the different endpoints:

| Endpoint                          | Method | Needs JWT? | Request Body          | Response                                                                                             |
| --------------------------------- | :----: | ---------- | --------------------- | ---------------------------------------------------------------------------------------------------- |
| http://localhost:7000/api/login   |  POST  | no         | username and password | Status 200 - Success - Returns JWT and JWT expiry<br><br>Status 401 - Invalid credentials            |
| http://localhost:7000/api/movies  |  GET   | yes        | -                     | Status 200 - Success - Returns a list of movies<br><br>Status 401 - Missing, invalid, or expired JWT |
| http://localhost:7000/api/logout  | DELETE | yes        | -                     | Status 200 - Success                                                                                 |
| http://localhost:7000/api/refresh |  GET   | no         | -                     | Status 200 - Success - Returns JWT and JWT expiry<br><br>Status 401 - Usually need to login          |

For the login APIs, the following user account will work:

Username: username \
Password: password

### Logging in

To login, send the user's username and password in a POST request to http://localhost:7000/api/login. For example:

```javascript
axios
  .request({
    method: "POST",
    url: "http://localhost:7000/api/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      username: "fluffypanda37",
      password: "1234",
    }),
  })
  .then((response) => {
    // This is how you get the token
    console.log(response.data.token);
  })
  .catch((error) => {
    console.log("error", error);
    if (error.response && error.response.status === 401) {
      // Incorrect username or password
    }
  });
```

If the username and password is correct, you will get back the JWT token and the timestamp of when it will expire.

```json
{
  "message": "You did it! Success!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "expiry": 1616933211937
}
```

If the credentials are not correct, then you will receive an HTTP status of unauthorized (code 401).

### Getting a list of movies

You will send a GET request to http://localhost:7000/api/movies. You will need to include the JWT token that you got from the login request inside of the Authorization header like this:

```javascript
axios.request({
  method: "GET",
  url: "http://localhost:7000/api/movies",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`,
  })
  .then((response) => console.log(response))
  .catch((error) => {
    console.log("error", error);
    if (error.response && error.response.status === 401) {
      // There is some problem with your authentication.
    }
  });
});
```

If your request is successful, you will get a list of movies like this:

```json
{
  "halloween": {
    "title": "Halloween",
    "poster": "https://m.media-amazon.com/images/M/MV5BMmMzNjJhYjUtNzFkZi00MWQ4LWJiMDEtYWM0NTAzNGZjMTI3XkEyXkFqcGdeQXVyOTE2OTMwNDk@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "synopsis": "Laurie Strode comes to her final confrontation with Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago.",
    "releaseDate": "Oct 19, 2018",
    "times": ["11:50 AM", "1:20 PM"]
  }
  // ...
}
```

If there is some problem related to authentication (e.g. no authorization header, invalid JWT, or expired JWT), you will receive a status code of 401.

### Logging out

To logout, send a delete request with your JWT to http://localhost:7000/api/logout. If it is successful, you will receive an HTTP status code of 200.

```javascript
axios
  .request({
    method: "DELETE",
    url: "http://localhost:7000/api/logout",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`,
    },
  })
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
```

### Refreshing your JWT token

There are use cases where your JWT will be lost from state and you will need to get a new one. This happens when:

- the user refreshes the page
- the user opens a new tab
- the user types a new URL into the address bar
- the JWT token is about to expire

By using this end-point, you will be "relogging in" the user behind-the-scenes, without the user knowing that it is happening. This is called a "silent refresh".

To refresh the JWT token, send a GET request to http://localhost:7000/api/refresh.

```javascript
axios
  .request({
    method: "GET",
    url: "http://localhost:7000/api/refresh",
  })
  .then((response) => {
    // This is how you get the token
    console.log(response.data.token);
  })
  .catch((error) => {
    console.log("error", error);
    if (error.response && error.response.status === 401) {
      // In most cases, the user needs to login again
    }
  });
```

The response will be the same as the http://localhost:7000/api/login endpoint. If the user is logged in on the back-end, and the authentication behind-the-scenes is valid (a session cookie with the httpOnly flag is automatically sent with each HTTP request without you having to do anything), then you will receive a new JWT token and expiration. Otherwise, you will receive a HTTP status code of 401. When this happens, you should redirect the user to the login form.

For an in-depth explaination of the silent refresh (and the whole authentication flow in general), see [The Ultimate Guide to handling JWTs on frontend clients (GraphQL)](https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/#silent_refresh).

Be careful with how you implement the silent refresh, because it is prone to infinite loops.

## Notes on Using this Server and the API

To do your assignments, you will need to have two terminal windows open and running at once. If you are using Visual Studio Code, you can click on the split-screen or plus icon in your terminal panel:

![Split screen icon in Visual Studio code](two-terminals.png)

When you start or restart the server, any lingering JWT tokens will be invalid and the _/api/refresh_ end-point will not work. It is a good idea to delete your cookies in your browser's Dev Tools and refresh the screen after starting the server.

You can fake handling a server outage by stopping the server with `ctrl+c` .

You can speed up the JWT expiry by passing an expiry value in milliseconds with the start command. For example, to have the JWT token expire every 10 seconds (10,000 milliseconds), run `yarn start --expiry 10000` .

If you like, you can mimic a real life scenario with a monolithic app (where the back-end and API will have the same URL) by [proxying the server](https://create-react-app.dev/docs/proxying-api-requests-in-development/). What this essentially means is that instead of sending AJAX requests to e.g. http://localhost:7000/api/login, you would send it to _/api/login_. You often do this to avoid CORS issues when developing on your local machine. To this, setup a proxy in your React application's _package.json_ file.

```json
{
  "name": "09-authentication",
  "version": "0.1.0",
  "private": true,
  // ...
  "proxy": "http://localhost:7000/"
}
```

## Resources

- [Introduction to JSON Web Tokens](https://jwt.io/introduction)
- [The Ultimate Guide to handling JWTs on frontend clients (GraphQL)](https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/)
- [Authentication in SPA (ReactJS and VueJS) the right way](https://medium.com/@jcbaey/authentication-in-spa-reactjs-and-vuejs-the-right-way-e4a9ac5cd9a3)
- [Handling JWT in Admin Apps the Right Way](https://marmelab.com/blog/2020/07/02/manage-your-jwt-react-admin-authentication-in-memory.html)
