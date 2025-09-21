const express = require('express')
const path = require('path')
const logger = require('./logger')
const {products, people} = require('./data.js')
const app = express()


app.use(express.static('./public'), logger) //import all static file stored in dir public

app.get('/',(req,res) =>{
	res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

//app.use(logger)

app.get('/json', (req,res) => {
	res.json(products)
}
)

app.get('/api/products/:productID',(req,res) => {
	const {productID} = req.params
	const singleProduct = products.find((products) => products.id === Number(productID))
	res.json(singleProduct)
})

app.get('/api/v1/query', (req,res) => {
	const {search, limit} = req.query
	let sortedProducts = [...products]

	if (search){
		sortedProducts = sortedProducts.filter((products) => products.name.startsWith(search))
	}
	if (limit){
		sortedproducts = sortedProducts.slice(0, Number(limit))
	}
	if (sortedProducts.length < 1){
		return res.status(200).send("no product found")
	}
	return res.json(sortedProducts)
})

app.all('*', (req, res) => {
	res.status(404).send("page not found")
})

app.listen(1234, () => {
	console.log('listening in port 5000....')
	}
)
