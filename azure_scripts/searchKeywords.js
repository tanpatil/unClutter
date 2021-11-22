//Copyright (c) Microsoft Corporation. All rights reserved.
//Licensed under the MIT License.

'use strict';

let https = require('https');
var axios = require('axios')
// **********************************************
// *** Update or verify the following values. ***
// **********************************************

// Replace the subscriptionKey string value with your valid subscription key.
let subscriptionKey2 = '8575538c4ec24c20a4f3d9676fc5d08b';

let axiosConfig = {
  headers: {
      'Ocp-Apim-Subscription-Key' : subscriptionKey2,
  }
};

let bing_web_search = function (search) {
    axios.get(
        'https://api.cognitive.microsoft.com/bing/v7.0/search'+ '?q=' + encodeURIComponent(search),
        {
            headers: {
                'Ocp-Apim-Subscription-Key' : subscriptionKey2,
            }
        }
    )
    .then((res) => {
      //console.log("RESPONSE RECEIVED: ", res.data);
      //console.log(res.data.webPages);
      //console.log(res.data.webPages.value);
       res.data.webPages.value.forEach(item => {
         console.log(item.url);
       })
        // res.data.webPages.forEach(item => {
        //     console.log(item)
        // })
      })
    .catch((err) => {
      //console.log("AXIOS ERROR: ", err);
    })
}

 module.exports = {
     bing_web_search
 }

// Verify the endpoint URI.  At this writing, only one endpoint is used for Bing
// search APIs.  In the future, regional endpoints may be available.  If you
// encounter unexpected authorization errors, double-check this host against
// the endpoint for your Bing Web search instance in your Azure dashboard.
// let host = 'api.cognitive.microsoft.com';
// let path = '/bing/v7.0/search';

// let term = 'Microsoft Cognitive Services';

// function set_term (new_term) {
//     term = new_term;
// }

// let response_handler = function (response) {
//     let body = '';
//     response.on('data', function (d) {
//         body += d;
//     });
//     response.on('end', function () {
//         console.log('\nRelevant Headers:\n');
//         for (var header in response.headers)
//             // header keys are lower-cased by Node.js
//             if (header.startsWith("bingapis-") || header.startsWith("x-msedge-"))
//                  console.log(header + ": " + response.headers[header]);
//         body = JSON.stringify(JSON.parse(body), null, '  ');
//         console.log('\nJSON Response:\n');
//         console.log(body);
//     });
//     response.on('error', function (e) {
//         console.log('Error: ' + e.message);
//     });
// };

// let bing_web_search = function (search) {
//   console.log('Searching the Web for: ' + term);
//   let request_params = {
//         method : 'GET',
//         hostname : host,
//         path : path + '?q=' + encodeURIComponent(search),
//         headers : {
//             'Ocp-Apim-Subscription-Key' : subscriptionKey,
//         }
//     };

//     let req = https.request(request_params, response_handler);
//     req.end();
// }


// if (subscriptionKey.length === 32) {
//     bing_web_search(term);
// } else {
//     console.log('Invalid Bing Search API subscription key!');
//     console.log('Please paste yours into the source code.');
// }