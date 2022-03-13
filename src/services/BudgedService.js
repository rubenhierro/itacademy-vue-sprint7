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

    if (seo === true) total += seoPrice;

    if (ads === true) total += adsPrice;

    return total + subtotal;
  }

  exist(budgedList, budged) {
    return budgedList.some((i) => i.id === budged.id);
  }

  getId(budgedList, budged) {
    const idArr = budgedList.map((i) => i.id);
    console.log(idArr.indexOf(budged.id));
    return idArr.indexOf(budged.id);
  }

  update(budgedList, budged) {
    budgedList.splice(this.getId(budgedList, budged), 1, budged);
  }

  sortByName(budgedList, mode) {
    return mode === "asc"
      ? budgedList.sort((a, b) => a.name - b.name)
      : budgedList.sort((a, b) => b.name - a.name);
  }

  sortByDate(budgedList, mode) {
    return mode === "asc"
      ? budgedList.sort((a, b) => a.date - b.date)
      : budgedList.sort((a, b) => b.date - a.date);
  }

  sortByDefault(budgedList) {
    return budgedList.sort((a, b) => a.id - b.id);
  }
}
