// Our database file needs access to the environment variables, but this file is run outside of our app.  So we must require dotenv seperately.
require('dotenv').config();

var mongoose = require('./database');
var User = require('../models/User');
var Project = require('../models/Project');

// var users = [
//   {
//     name: "Arthur",
//     email: "arthur@arthur.com",
//     typeOfUser: true
//   },
//   {
//     name: "Andres",
//     email: "andres@andres.com",
//     typeOfUser: false
//   }
// ]


// User.remove({}, function(err) {
//   if(err) console.log(err);
//   User.create(users, function(err, savedUsers) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Database seeded with " + savedUsers.length + " users.");
//       mongoose.connection.close();
//     }
//     process.exit();
//   });
// });

var projects = [
  {
    name: "ATT",
    description: "Start project",
    tasks: [{
      description: "Send proposal", completed: false
    },
    {
      description: "Kick-of Meeting",
      completed: false
    },
    {
      description: "Sitesurvey",
      completed: true
    }]
  },
  {
    name: "Verizon",
    description: "Star project",
    tasks: [{
      description: "Send proposal", completed: false
    },
    {
      description: "Kick-of Meeting",
      completed: false
    },
    {
      description: "Sitesurvey",
      completed: true
    }]
  }
]
Project.remove({}, function(err) {
  if(err) console.log(err);
  Project.create(projects, function(err, savedProject) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + savedProject.length + " projects.");
      mongoose.connection.close();
    }
    process.exit();
  });
});
