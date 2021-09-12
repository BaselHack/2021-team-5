const { response } = require('express');
const express = require('express');
const cors = require('cors')
const formidableMiddleware = require('express-formidable');
const app = express();
const PORT = process.env.PORT || 3000;
const getSimilarProductsFile = require('./vision-search.service')

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(express.json())
app.use(cors({
    origin: '*'
}
));
app.use(formidableMiddleware())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const extractProduct= (productResponse) => {
    return productResponse.flatMap( productHolder =>
         productHolder["product"])
}

app.post('/product-search', (req, res) => {
    getSimilarProductsFile(req.files.thumbnail.path).then(
        response => {
            if (response.length > 0) {
                res.send(extractProduct(response))
            }
            else {
                res.send([])
            }
        }
    ).catch(err => {
        res.status(500).send(err.message)
    });
})

app.listen(PORT, () => {
  console.log(`Small vision caller is running at ${PORT}`)
})