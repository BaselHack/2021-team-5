const vision = require('@google-cloud/vision');

const productSearchClient = new vision.ProductSearchClient();
const imageAnnotatorClient = new vision.ImageAnnotatorClient();

const getSimilarProductsFile =  async function () {
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
  const results = response['responses'][0]['productSearchResults']['results'];
  return results;
}

module.exports = getSimilarProductsFile;