
export class SearchResult {
    displayName: string;
    productCategory: string;
    url: string;
    imageUrl1: string;
    imageUrl2: string;

    constructor(displayName: string, productCategory: string, url: string, imageUrl1: string, imageUrl2: string) {
      this.displayName=displayName;
      this.productCategory=productCategory;
      this.url = url;
      this.imageUrl1 = imageUrl1;
      this.imageUrl2 = imageUrl2;
    }

  }