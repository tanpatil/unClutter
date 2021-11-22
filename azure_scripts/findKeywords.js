var axios = require('axios')
//var search = require('./searchKeywords')
let subscriptionKey = 'ef4f101e2121440581ff9ebfaf09dfd0';
let subscriptionKey2 = '8575538c4ec24c20a4f3d9676fc5d08b';
var urls = new Array();
urls = [];
const findKeys =  function (data) {
  
  var postData = {
    "documents": [
              {
                "id": "1",
               "text": data
              }
    ]};
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        'Ocp-Apim-Subscription-Key' : subscriptionKey,
        'Accept' : 'application/json;charset=UTF-8',
    }
  };

  axios.post('https://southcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases', postData, axiosConfig)
  .then((res) => {
    //console.log("RESPONSE RECEIVED: ", res.data);
    for (var i = 0; i < res.data.documents.length; i++) {
      for (var j = 0; j < res.data.documents[i].keyPhrases.length; j++) {
        console.log(res.data.documents[i].keyPhrases[j])
        //console.log(urls)
         bing_web_search(res.data.documents[i].keyPhrases[j])
      }
    }
    // res.data.documents.forEach(item => {
    //   item.keyPhrases.forEach(keyP => {
    //     //console.log(keyP)
    //     bing_web_search(keyP);
    //   })
    // })
    
  })
  .catch((err) => {
    console.log("AXIOS ERROR: ", err);
  })
}

const bing_web_search = function (search) {
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
      var i = 0;
      for (; i < res.data.webPages.value.length; i++) {
        urls.push(res.data.webPages.value[i].url)
        console.log(urls)
      }
        // res.data.webPages.forEach(item => {
        //     console.log(item)
        // })

      })
    .catch((err) => {
      //console.log("AXIOS ERROR: ", err);
    })
}

findKeys("This is my favorite trail. It has beautiful views and many places to stop and rest")
module.exports = {
     findKeys
 }
