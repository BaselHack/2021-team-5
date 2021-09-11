const vision = require('@google-cloud/vision');
const fs = require('fs')

const productSearchClient = new vision.ProductSearchClient();
const imageAnnotatorClient = new vision.ImageAnnotatorClient();

const getSimilarProductsFile =  async function () {
  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  const projectId = 'emerald-mission-325710';
  const location = 'europe-west1';
  const productSetId = 'coop';
  const productCategory = 'packagedgoods-v1';
  const filePath = 'gs://test_pictures/20210911_165400[1].jpg';
  const filter = '';
  const productSetPath = productSearchClient.productSetPath(
    projectId,
    location,
    productSetId
  );
  const request = {
    // The input image can be a GCS link or HTTPS link or Raw image bytes.
    // Example:
    // To use GCS link replace with below code
    // image: {source: {gcsImageUri: filePath}}
    // To use HTTP link replace with below code
    // image: {source: {imageUri: filePath}}
    image: {source: {gcsImageUri: filePath}},
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
  console.log('Search Image:', filePath);
  const results = response['responses'][0]['productSearchResults']['results'];
  console.log('\nSimilar product information:');
  results.forEach(result => {
    console.log('Product id:', result['product'].name.split('/').pop(-1));
    console.log('Product display name:', result['product'].displayName);
    console.log('Product description:', result['product'].description);
    console.log('Product category:', result['product'].productCategory);
  });
  return results;
}

module.exports = getSimilarProductsFile;