class NewsLoader {
  constructor(containerId, buttonId, maxItems = 5) {
    this.container = document.getElementById(containerId);
    this.button = document.getElementById(buttonId);
    this.count = this.container.children.length;
    this.maxItems = maxItems;
    this.button.addEventListener('click', () => this.loadMore());
    this.updateButtonState();
  }

  loadMore() {
    if (this.count >= this.maxItems) return;
    const nextNews = this.createNewsItem(`Новость ${this.count + 1}`);
    this.container.appendChild(nextNews);
    this.count++;
    this.updateButtonState();
  }

  createNewsItem(text) {
    const article = document.createElement('article');
    article.className = 'news__item';
    article.textContent = text;
    return article;
  }

  updateButtonState() {
    this.button.disabled = this.count >= this.maxItems;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new NewsLoader('news', 'loadMore');
});