//const amount = 9

//if (amount < 10){
 //   console.log(' Small Number')
//}
//else{
  //  console.log ('Large number')
//}

//console.log('My first Node')


//setInterval(() => {
    //console.log('Hello World')
//}, 10000);

//Modules

//const names = require('./test.js');
//const sayHi = require('./test1.js');

//require('./test2.js')
//sayHi ('susan')
//sayHi(names.john)
//sayHi(names.peter)

// const os = require('os');

// const user = os.userInfo();

// console.log(user)


// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// }

// console.log(currentOS)

// const {readFile, writeFile} = require('fs')

// readFile('./content/second.txt', 'utf8', (err, result)=>{
//   if(err){
//     console.log(err)
//     return
//   }
//   console.log(result)
// })


// const http = require('http')

// const server = http.createServer((req, res) => {
//   console.log(req)
//   res.write('Welcome to our server')
//   res.end()
// })
// server.listen(5000)

const http = require('http')
const server = http.createServer((req, res) =>{
  if(req.url === '/'){
    res.end('Welcome yo our home page')
  }
  if(req.url === '/about'){
    res.end('Welcome to our about page')
  }
  res.end(`
  <h1> OOPS! </h1>
  <p> We cant seem to find this page</p>
  <a href="/">back home</a>`)
})

server.listen(5000)