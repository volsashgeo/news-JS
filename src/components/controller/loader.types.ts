export type LoaderOptions = Record<string, string | number | boolean>;

export interface LoaderRequest {
    endpoint: string;
    options?: LoaderOptions;
}

export interface LoaderConfig {
    baseLink: string;
    options?: LoaderOptions;
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type LoaderCallback<T = unknown> = (data: T) => void;
