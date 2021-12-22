'use strict';
let fs = require ('fs');
let https = require ('https');
var axios = require('axios')
var search = require('./searchKeywords')
let subscriptionKey = 'd700a4004e97434bb00094cfcea432a9';
function translate(text,language) {
  return new Promise((resolve, reject) => {
    var postData = JSON.stringify ([{'Text' : text}]);

    let axiosConfig = {
      headers: {
          'Content-Type' : 'application/json',
          'Ocp-Apim-Subscription-Key' : subscriptionKey,
          'X-ClientTraceId' : get_guid (),
      }
    };

  //   let host = 'api.cognitive.microsofttranslator.com';
  // let path = '/translate?api-version=3.0';
    let params = language;
    axios.post('https://api.cognitive.microsofttranslator.com/translate?api-version=3.0'+params, postData, axiosConfig)
    .then((res) => {
      //console.log("RESPONSE RECEIVED: ", res.data);
      res.data.forEach(item => {
        item.translations.forEach(obj => {
          resolve(obj)
        })
      })
        //item.keyPhrases.forEach(keyP => {
          //console.log(keyP)
          //search.bing_web_search(keyP);
        //})
      //})
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
      reject(e)
    })
  })
}

let get_guid = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

//translate("Hello World!","&to=en")
module.exports = {
     translate
 }
// 'use strict';

// let fs = require ('fs');
// let https = require ('https');

// // **********************************************
// // *** Update or verify the following values. ***
// // **********************************************

// // Replace the subscriptionKey string value with your valid subscription key.
// let subscriptionKey = 'd700a4004e97434bb00094cfcea432a9';

// let host = 'api.cognitive.microsofttranslator.com';
// let path = '/translate?api-version=3.0';

// // Translate to German and Italian.
// let params = '&to=de&to=it';

// let text = 'Hello, world!';

// let response_handler = function (response) {
//     let body = '';
//     response.on ('data', function (d) {
//         body += d;
//     });
//     response.on ('end', function () {
//         let json = JSON.stringify(JSON.parse(body), null, 4);
//         console.log(json.translations);
//     });
//     response.on ('error', function (e) {
//         console.log ('Error: ' + e.message);
//     });
// };

// let get_guid = function () {
//   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//     var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//     return v.toString(16);
//   });
// }

// let Translate = function (content) {
//     let request_params = {
//         method : 'POST',
//         hostname : host,
//         path : path + params,
//         headers : {
//             'Content-Type' : 'application/json',
//             'Ocp-Apim-Subscription-Key' : subscriptionKey,
//             'X-ClientTraceId' : get_guid (),
//         }
//     };

//     let req = https.request (request_params, response_handler);
//     req.write (content);
//     req.end ();
// }

// let content = JSON.stringify ([{'Text' : text}]);

// Translate (content);