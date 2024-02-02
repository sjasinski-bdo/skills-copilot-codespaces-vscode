// Create web server
// Create a route for comments
// When a request is made to the comments route, read comments from a file and send as a response
// Path: comments.json
// Create a file comments.json with some comments
// comments.json
// [
//   {
//     "username": "troll",
//     "comment": "lol"
//   },
//   {
//     "username": "commenter",
//     "comment": "first!"
//   }
// ]
// Now, when a request is made to the comments route, the server should read the comments from comments.json and send them as a response

const express = require('express');
const app = express();
const fs = require('fs');

app.get('/comments', (req, res) => {
  fs.readFile('comments.json', 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

// Path: users.js
// Create a web server
// Create a route for users
// When a request is made to the users route, read users from a file and send as a response
// Path: users.json
// Create a file users.json with some users
// users.json
// [
//   {
//     "username": "troll"
//   },
//   {
//     "username": "commenter"
//   }
// ]
// Now, when a request is made to the users route, the server should read the users from users.json and send them as a response

const express = require('express');
const fs = require('fs');

app.get('/users', (req, res) => {
  fs.readFile('users.json', 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

// Path: server.js
// Create a web server
// Create a route for comments
// When a request is made to the comments route, read comments from a file and send as a response
// Create a route for users
// When a request is made to