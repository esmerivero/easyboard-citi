var request = require("request");
var options = { method: 'POST',
  url: 'https://sandbox.apihub.citi.com/gcb/api/clientCredentials/oauth2/token/mx/gcb',
  headers:
   { 'content-type': 'application/x-www-form-urlencoded',
     authorization: 'Basic NjkyOGViMmUtZmZjYy00ZDA4LWJjM2ItMDBlMTQwYzAxYzU2OnNMMXdWMGpLNHlRMm1EMWhSMWtJNXFJNGVEN2ZFNmlMNW9QMXhMNHZEMXdHMmNZM2tMCgo=',
     accept: 'application/json' },
  form: { grant_type: 'opfog', scope: 'gamkaw' } };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);
});
