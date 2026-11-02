import AppLoader from '../controller/appLoader';
import type { NewsResponse } from '../view/news/news.types';
import type { SourcesResponse } from '../view/sources/sources.types';
import type { NewsCallback, SourcesCallback } from './controller.types';

class AppController extends AppLoader {
    public getSources(callback: SourcesCallback): void {
        super.getResp<SourcesResponse>({ endpoint: 'sources' }, callback);
    }

public getNews(event: Event, callback: NewsCallback): void {
    const target = event.target;

    if (!(target instanceof HTMLSelectElement)) {
        return;
    }

    const sourceId = target.value;

    if (sourceId && target.getAttribute('data-source') !== sourceId) {
        target.setAttribute('data-source', sourceId);
        super.getResp<NewsResponse>(
            { endpoint: 'everything', options: { sources: sourceId } },
            callback
        );
    }
}
}

export default AppController;
