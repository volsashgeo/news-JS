import './news.css';
import type { NewsArticle } from './news.types';

class News {
    public draw(data: NewsArticle[]): void {
        const news: NewsArticle[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        if (!newsItemTemp) {
            throw new Error('Template #newsItemTemp not found');
        }

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

            if (idx % 2) {
                newsClone.querySelector('.news__item')?.classList.add('alt');
            }

            const photoEl = newsClone.querySelector<HTMLElement>('.news__meta-photo');
            if (photoEl) {
                photoEl.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }

            const authorEl = newsClone.querySelector<HTMLElement>('.news__meta-author');
            if (authorEl) {
                authorEl.textContent = item.author || item.source.name;
            }

            const dateEl = newsClone.querySelector<HTMLElement>('.news__meta-date');
            if (dateEl) {
                dateEl.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            const titleEl = newsClone.querySelector<HTMLElement>('.news__description-title');
            if (titleEl) titleEl.textContent = item.title;

            const sourceEl = newsClone.querySelector<HTMLElement>('.news__description-source');
            if (sourceEl) sourceEl.textContent = item.source.name;

            const contentEl = newsClone.querySelector<HTMLElement>('.news__description-content');
            if (contentEl) contentEl.textContent = item.description;

            const linkEl = newsClone.querySelector<HTMLAnchorElement>('.news__read-more a');
            if (linkEl) linkEl.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector<HTMLElement>('.news');
        if (newsContainer) {
            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        }
    }
}

export default News;
