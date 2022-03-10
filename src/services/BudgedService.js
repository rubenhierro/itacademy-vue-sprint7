export default class {
  getTotalBudged(web, webPages, webLanguages, seo, ads) {
    let total = 0;
    let subtotal = 0;
    const webPrice = 500;
    const webItem = 30;
    const seoPrice = 300;
    const adsPrice = 200;

    if (web === true) {
      subtotal += webPrice;
      webPages > 0 ? (subtotal += webPages * webItem) : null;
      webLanguages > 0 ? (subtotal += webLanguages * webItem) : null;
    }

    if (seo === true) {
      total += seoPrice;
    }

    if (ads === true) {
      total += adsPrice;
    }

    return total + subtotal;
  }
}
