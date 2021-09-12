const vision = require('@google-cloud/vision');
const fs = require('fs')

const productSearchClient = new vision.ProductSearchClient();
const imageAnnotatorClient = new vision.ImageAnnotatorClient();

const getSimilarProductsFile =  async function (filePath) {
    console.log(filePath);
  const projectId = 'emerald-mission-325710';
  const location = 'europe-west1';
  const productSetId = 'coop';
  const productCategory = 'packagedgoods-v1';
  const filter = '';
  const productSetPath = productSearchClient.productSetPath(
    projectId,
    location,
    productSetId
  );
  const content = fs.readFileSync(filePath, 'base64');
  const request = {
    image: {content: content},
    features: [{type: 'PRODUCT_SEARCH', "maxResults": 1}],
    imageContext: {
      productSearchParams: {
        productSet: productSetPath,
        productCategories: [productCategory],
        filter: filter,
      },
    },
  };
  const [response] = await imageAnnotatorClient.batchAnnotateImages({
    requests: [request],
  });
  const results = response['responses'][0]['productSearchResults']['results'];
  console.log(results);
  return results;
}

module.exports = getSimilarProductsFile;