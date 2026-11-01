import type { NewsResponse } from '../view/news/news.types';
import type { SourcesResponse } from '../view/sources/sources.types';

export type SourcesCallback = (data: SourcesResponse) => void;

export type NewsCallback = (data: NewsResponse) => void;

// export interface NewsClickEvent extends Event {
//   target: EventTarget & HTMLElement;
//   currentTarget: EventTarget & HTMLElement;
// }
