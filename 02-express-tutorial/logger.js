const { writeFileSync }  = require('fs')
//let path = require('path')
const logger = (req, res, next) => {
	const method = req.method
	const url = req.url
	const time = new Date().getFullYear()
	//path = path.join(__dirname,'./logs/logs.txt')
	const lg = method + ' ' + url + ' ' + time + '\n'

	writeFileSync('./logs/logs.txt', lg, {'flag' : 'a'})
	console.log('file logged')
	next()
	
}


module.exports = logger
