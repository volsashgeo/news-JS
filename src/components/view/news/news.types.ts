/**
 * Источник новости
 */
export interface NewsSource {
    id: string | null;
    name: string;
}

/**
 * Одна новость, приходящая с API (например, NewsAPI)
 */
export interface NewsArticle {
    source: NewsSource;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string; // ISO 8601
    content: string | null;
}

/**
 * Ответ API со списком новостей
 */
export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: NewsArticle[];
}
