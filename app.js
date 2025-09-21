const http = require('http')

const server = http.createServer((req,res) => {
	res.write("my first web server updated")
	res.end()
})

server.listen(5000)
