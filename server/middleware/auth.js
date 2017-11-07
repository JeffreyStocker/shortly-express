const models = require('../models');
const Promise = require('bluebird');
const utils = require('../lib/hashUtils');

module.exports.createSession = (req, res, next) => {
  if (!Object.keys(req.cookies).length) {
    models.Sessions.create()
    .then((data) => {
      return models.Sessions.get({id: data.insertId});
    }).then((data) => {
      console.log('wait');
      req.session = {hash: data.hash};
      console.log('rs: ', req.session);
      next();
    })
    .catch((err) => {
      console.log('createSession: error ', err);
      next();
    });
  }
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
  next();
  
  
  
  
  // if (!models.Sessions.isLoggedIn(userProperty) && models.Sessions.get()) {
    
  // }
};


module.exports.checkLogin = function(req, res, next) {
  console.log(req.url);
  //somehow figure out the session info from here
  if (Object.keys(req.cookies).length) {
    console.log('COOKIES', req.cookies);
    var userProperty = req.parsedCookies; //get from parse cookie
    if (!utils.Sessions.isLoggedIn(req.session)) { //if has cookies, and is not logged itn
      res.redirect('/login');
    } else {
      next();
    }
  } else if (req.url !== '/login' && req.url !== '/signup') {
    res.redirect('/login');
  } else {
    next();
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