const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000
const getSimilarProductsFile = require('./vision-search.service')
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const extractProduct= (productResponse) => {
    return productResponse.flatMap( productHolder =>
         productHolder["product"])
}

app.post('/product-search', (req, res) => {
    console.log(req.body)
    getSimilarProductsFile().then(
        response => {
            if (response.length > 0) {
                res.send(extractProduct(response))
            }
            else {
            }
        }
    );
})

app.listen(port, () => {
  console.log(`Small vision caller is running at ${port}`)
})