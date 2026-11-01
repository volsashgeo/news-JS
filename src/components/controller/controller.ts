import AppLoader from '../controller/appLoader';
import type { NewsResponse } from '../view/news/news.types';
import type { SourcesResponse } from '../view/sources/sources.types';
import type { NewsCallback, SourcesCallback } from './controller.types';

class AppController extends AppLoader {
    public getSources(callback: SourcesCallback): void {
        super.getResp<SourcesResponse>({ endpoint: 'sources' }, callback);
    }

    public getNews(event: MouseEvent, callback: NewsCallback): void {
        const target = event.target;
        const container = event.currentTarget;

        if (!(target instanceof HTMLElement) || !(container instanceof HTMLElement)) {
            return;
        }

        let node: HTMLElement | null = target;

        while (node && node !== container) {
            if (node.classList.contains('source__item')) {
                const sourceId = node.getAttribute('data-source-id');

                if (sourceId && container.getAttribute('data-source') !== sourceId) {
                    container.setAttribute('data-source', sourceId);
                    super.getResp<NewsResponse>({ endpoint: 'everything', options: { sources: sourceId } }, callback);
                }
                return;
            }
            node = node.parentElement;
        }
    }
}

export default AppController;
