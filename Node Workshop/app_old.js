/* console.log("Hello Nodejs");

let a = 20;
let b = 30;
let c = a + b;
console.log(c);


const fs = require('fs');

const input = fs.readFile('codecamp.txt', 'utf-8', (err, data) => {
  console.log(data)
});

console.log("Reading file...") */

//Build in modules
/* const content = fs.readFileSync('codecamp.txt', "utf-8");
console.log(content);


for (let i = 0; i < 20; i++) {
    fs.readFile('codecamp.txt', 'utf8', (err, data) => {
      console.log(data);
    });
  
    fs.readFile('codecamp1.txt', 'utf8', (err, data) => {
      console.log(data);
    });
  } */
  
  ////Asynchronous VS synchronous (Blocking And Non-Blocking)
 /*  function addSync(a, b) {
    return a + b;
  }
  let sum = addSync(1,2);
  function add(a, b, callbackFunction) {
    callbackFunction( null, a + b );
  }
  let sum2;
  add(1, 2, (err, returnValue) => {
    sum2 = returnValue;
  }); */
  

//node
 /*  function setTimeoutAndLog(input, millisec) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log(input)

        if(input === "c"){
            reject("Reject");
        }
        resolve()
      }, millisec)
    }).then(() => {
        console.log("then");
    }).catch((error) => {
        console.log("Error", error);
    });
  } */
 /*  
  setTimeoutAndLog('a', 1000).then(() => {
    return setTimeoutAndLog('b', 1000)
  }).then(() => {
    return setTimeoutAndLog('c', 1000)
  }).then(() => {
    return setTimeoutAndLog('d', 1000)
  }).then(() => {
    return setTimeoutAndLog('e', 1000)
  }) */

/*   (async () => {
      await setTimeoutAndLog('a', 1000);
      await setTimeoutAndLog('b', 1000);
      await setTimeoutAndLog('c', 1000);
      await setTimeoutAndLog('d', 1000);
      await setTimeoutAndLog('e', 1000);
  } )(); */
  

/* const fetch = require("node-fetch");

   async function getUser () {
    try {
      const response = await fetch('https://randomuser.me/api')
      const data = await response.json()
      console.log(response.status)
      console.log(data)
    } catch (err) {
      console.log(err)
    }
   }

  (async () => {
    getUser();
  })();  */
 

/*   fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5b0669fa2b50528e6e0cd5f1c8d81d45/42.3601,-71.0589`)
  .then(response => response.json())
  .then(data => {console.log(data)}) 
 */
  
  console.log("Hello");

  var moment = require('moment');
/*   import * as moment from 'moment';
  import {moment} from 'moment';
  import moment from 'moment'; */

  console.log(moment().format());

  //const fetch = require('node-fetch');

/*   try{
fetch('homework.json').then(response => {
    return response.json();
})
.then(myJson => {
    console.log(myJson);
})
  }catch{
console.log("Error");
  } */

/*   fetch('https://github.com/')
  .then((res) => {
    return res.text();
  })
  .then(body => console.log(body))
  .then("done"); */

/*   const myJSON = '{"name": "Kate", "pet": {"dog": "Corgi", "cat": "Persian"}}';

const myObj = JSON.parse(myJSON);

console.log(`name : ${myObj.name}`);

// Modify myObj...

JSON.stringify(myObj.name); */

/* var http = require('http');

  http.createServer((req, res) => {

      res.write('hello world');
      res.end();
  }).listen(3000); */

  /* var http = require('http');

   http.createServer((req, res) => {
       if(req.url == '/') {
           res.write('hello world');
       } else if(req.url == '/tom'){
           res.write('hello tom')
       } else if(req.url == '/joe'){
           res.write('hello joe')
       }
       res.end();
   }).listen(3000); */

    

/*    var express = require('express')
   var app = express()

   app.get('/bye', function (req, res) {
     res.send('Good bye')
   })

   app.post('/hello', function (req, res) {
       res.send('Hello')
   })



   app.listen(5555) */

 /*   var express = require('express')
var app = express() */

/* app.get('/user/first', function (req, res) {
  res.send('first on user')
})

app.get('/user/second', function (req, res) {
  res.send('second on user')
})

app.listen(3000) */


var express = require('express')
var app = express()

/*  const intercepter = function( request, response, next){
    console.log(`URL : ${req.url}`);
    console.log(`Method : ${req.method}`);
    next();
}

app.use(intercepter);
app.use(express.json()); */
/*
app.get('/', function (req, res) {
    res.send('Got a GET request');
})

app.post('/user', function (req, res) {
    console.log(`URL : ${req.url}`);
    console.log(`Method : ${req.method}`);
    console.log(req.body);
})

app.put('/', function (req, res) {
    res.send('Got a PUT request');
}) */
var userRoute = require('./routes/userRoute')
var postRoute = require('./routes/postRoute')

app.use(express.static('./public/'))
app.use(express.json());
//app.use(intercepter)


app.use('/dog', userRoute)
app.use('/user', userRoute)
app.use('/cat', userRoute)
app.use('/post', userRoute)
app.listen(3000)



   
   