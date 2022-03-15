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
    return budgedList.some((i) => i.name === budged.name);
  }

  getId(budgedList, budged) {
    const idArr = budgedList.map((i) => i.name);
    console.log(idArr.indexOf(budged.name));
    return idArr.indexOf(budged.name);
  }

  update(budgedList, budged) {
    budgedList.splice(this.getId(budgedList, budged), 1, budged);
  }

  updateModeEdit(budgedList, id, budged) {
    budgedList.splice(id, 1, budged);
  }

  sortByName(budgedList, asc) {
    return asc === true
      ? budgedList.sort((a, b) => a.name.localeCompare(b.name))
      : budgedList.sort((a, b) => b.name.localeCompare(a.name));
  }

  sortByDate(budgedList, asc) {
    return asc === true
      ? budgedList.sort((a, b) => a.date.localeCompare(b.date))
      : budgedList.sort((a, b) => b.date.localeCompare(a.date));
  }

  sortByDefault(budgedList) {
    return budgedList.sort((a, b) => a.id - b.id);
  }

  sortNums(budgedList) {
    return budgedList.sort((a, b) => a - b);
  }

  search(budgedList, query) {
    return budgedList.filter(
      (i) => i.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }

  delete(budgedList, index) {
    budgedList.splice(index, 1);
  }
}
