
export class SearchResult {
    displayName: string;
    productCategory: string;
    url: string;

    constructor(displayName: string, productCategory: string, url: string) {
      this.displayName=displayName;
      this.productCategory=productCategory;
      this.url = url;
    }

  }