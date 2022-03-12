export default class Budged {
  id = 0;
  date;
  name;
  customer;
  web;
  webPages;
  webLanguages;
  seo;
  ads;
  total;

  constructor(name, customer, web, webPages, webLanguages, seo, ads, total) {
    this.id = Budged.incrementId();
    this.date = new Date().toLocaleDateString();
    this.name = name;
    this.customer = customer;
    this.web = web;
    this.webPages = webPages;
    this.webLanguages = webLanguages;
    this.seo = seo;
    this.ads = ads;
    this.total = total;
  }
  static incrementId() {
    if (!this.id) this.id = 1;
    else this.id++;
    return this.id;
  }
}
