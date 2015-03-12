class PagePrinter {
  constructor(sizes) {
    this.sizes = sizes;
  }

  attach() {
    this.style = document.createElement('style');
    document.head.appendChild(this.style);
    this.style.innerHTML = '@page {size: ' + this.sizes.width + 'px ' + this.sizes.height + 'px}';
  }

  detach() {
    this.style.remove();
  }
}
module.exports = PagePrinter;