// console.log('100: ', 100)
// console.log('200: ', 200)
// console.log('300: ', 300)
// console.log('400: ', 400)
// console.log('500: ', 500)
// console.log('600: ', 600)
// console.log('700: ', 700)
// console.log('800: ', 800)
// console.log('900: ', 900)
// console.log('910: ', 910)
// console.log('920: ', 920)

const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/html' })
  res.end('<h1>hello world</h1>')
})

server.listen(3000, () => {
  console.log('listening on 3000 port')
})
