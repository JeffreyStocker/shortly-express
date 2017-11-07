const parseCookies = (req, res, next) => {
  // console.log('Fuggin cookies here');
  var list = {};
  var cookies = req.headers.cookie;
  
  // check out are really cool string to object formatter that totally wasn't on stack overflow
  // https://stackoverflow.com/questions/3393854/get-and-set-a-single-cookie-with-node-js-http-server
  cookies && cookies.split(';').forEach((cookie) => {
    var parts = cookie.split('=');
    list[parts.shift().trim()] = decodeURI(parts.join('='));
  });
  
  req.cookies = list;
  
  next();
};

module.exports = parseCookies;