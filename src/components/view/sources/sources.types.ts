export interface NewsSource {
    id: string | null;
    name: string;
    description: string | null;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface SourcesResponse {
    status: string;
    sources: NewsSource[];
}

export interface SourcesRequestParams {
    apiKey: string;
    category?: string;
    language?: string;
    country?: string;
}
