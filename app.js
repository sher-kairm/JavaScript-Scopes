const http = require('http')
const hostname = '127.0.0.1'
const port = 5500;
const server = http.createServer((req, res)=>{
    res.statusCode = 5500;
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World!')
})

server.listen(port, hostname,()=>{
console.log(`Server is running at http://${hostname} :${port}`)
},1000)

