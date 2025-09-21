const http = require('http')
const {readFileSync} = require('fs')


const content = readFileSync('./navbar-app/index.html')
const style = readFileSync('./navbar-app/styles.css')
const logo = readFileSync ('./navbar-app/logo.svg')
const logic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
	console.log('server is running')
	if (req.url === '/'){
		res.writeHead(200, {"content-type": "text/html"})
		res.write(content)
		res.end()
	}
	else if (req.url === '/styles.css'){
		res.writeHead(200, {"content-type": "text/css"})
                res.write(style)
		res.end()
	}
	else if (req.url === './logo.svg'){
		res.writeHead(200, {"content-type": "text/svg+xml"})
		res.write(logo)
		res.end()
	}
	else if (req.url === '/browser-app.js'){
		res.writeHead(200, {"content-type": "text/javascript"})
		res.write(logic)
		res.end()
	}
	else if (req.url === '/about'){
		res.writeHead(200, {"content-type": "text/html"})
		res.write("<h1>about pagr</h1>")
		res.end()
	}
	else {
		res.writeHead(404, {"content-type": "text/html"})
		res.write("<h1>not found</h1>")
		res.end()
	}
})

server.listen(5000)
