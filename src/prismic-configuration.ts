export interface PrismicConfiguration {
    apiEndpoint: string;
    accessToken?: string;
    linkResolver: Function;
}

export const CONFIG: PrismicConfiguration = {
    apiEndpoint: 'https://stageverslag.prismic.io/api/v2',
    linkResolver(doc) {
        return '/';
    }
};
