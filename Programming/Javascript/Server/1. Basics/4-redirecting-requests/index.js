const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url
    
    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    }

    if (url === '/message' && req.method === 'POST') {
        fs.writeFileSync('message.txt', 'Dummy', (err) => { console.error(err) })
        //res.statusCode = 302
        //res.setHeader('Location', '/')
        res.writeHead(302, { Location: '/' })  
        return res.end()
    }
})

server.listen(3000, () => {})