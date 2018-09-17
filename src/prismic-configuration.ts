export interface PrismicConfiguration {
    apiEndpoint: string;
    accessToken?: string;
    linkResolver: Function;
}

export const CONFIG: PrismicConfiguration = {
    apiEndpoint: 'https://cmstestingsite.prismic.io/api/v2',
    linkResolver(doc) {
        return '/';
    }
};
