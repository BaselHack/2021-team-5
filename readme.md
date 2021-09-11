# BaselHack_Product_Search
Product Search project for BaselHack 2021

## How To
* Create a Google account with credit card / billing enabled. 
* Follow the instructions from the quick start guide of the Google Vision API Product Search: [https://cloud.google.com/vision/product-search/docs/quickstart]
* Upload the pictures into a Bucket on Google storage. 
* Upload the CSV describing the pictures into a Bucket on Google storage. 
* Create a service principal, download the token, set the environment variable.  
* Make sure this service principal has access to the bucket with the CSV and the pictures. Otherwise you get a strange ERROR 400. 
* Run the request to start the training. It will return a request to ask for the status. 
* It seems to be required to put all your products into one 'ProductSet' because you have to provide it in the request. 

### Proxy
[https://levelup.gitconnected.com/fixing-cors-errors-with-angular-cli-proxy-e5e0ef143f85]

npm install cors

const cors = require('cors');
app.use(cors({
    origin: ['https://www.section.io', 'https://www.google.com/']
}));
