//client
const axios = require('axios');
 
// Make a request for our site
axios.get('http://localhost:3001/')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
  });

