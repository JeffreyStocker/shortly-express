const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {

};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/
/*
incoming request w/ no cookies should make a session
  has unique hash, and store in sessions db
  use unique hash to set a cookie in response headers
  
if request has cookie, 
  verify that cookie is valid (in database)
    If not valid, the should remove cookie, and remove from database

*/
var checkAuthroization = function (req, res, next) {
  
  
  
  
  // if (!models.Sessions.isLoggedIn(userProperty) && models.Sessions.get()) {
    
  // }
};


module.exports.checkLogin = function(req, res, next) {
  //somehow figure out the session info from here
  if (req.cookies) {
    var userProperty = req.parsedCookies; //get from parse cookie
    if (!util.Sessions.isLoggedIn(req.session)) { //if has cookies, and is not logged itn
      res.redirect('/login');
    } else {
      next();
    }
  } else {
    res.redirect('/login');
  }
};


var createCookies = function (req, res, next) {
  res.writeHead(200, {'Set-Cookie': `shortlyid=${req.XXXXXXX}`,
    'Content-Type': 'text/plain'
  });
};


// https://stackoverflow.com/questions/3393854/get-and-set-a-single-cookie-with-node-js-http-server
// http.createServer(function (request, response) {

//   // To Read a Cookie
//   var cookies = parseCookies(request);

//   // To Write a Cookie
//   response.writeHead(200, {
//     'Set-Cookie': 'mycookie=test',
//     'Content-Type': 'text/plain'
//   });
//   response.end('Hello World\n');
// }).listen(8124);

// console.log('Server running at http://127.0.0.1:8124/');