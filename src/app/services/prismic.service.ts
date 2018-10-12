import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import * as Prismic from 'prismic-javascript';
import {CONFIG} from '../../prismic-configuration';

@Injectable({providedIn: 'root'})
export class PrismicService {

    constructor() {
    }

    getApi(): Promise<void | any> {
        return Prismic.api(CONFIG.apiEndpoint, {accessToken: CONFIG.accessToken})
            .then((api) => {
                return api;
            })
            .catch(e => console.log(`Error during connection to your Prismic API: ${e}`));
    }

    getHomepageDocument(): Promise<void | Observable<Object>> {
        return this.getApi().then((api) => {
            return api.getSingle('homepage')
                .then((home) => {
                    return of(home);
                });
        });
    }

    getStageDocument(): Promise<void | Observable<Object>> {
        return this.getApi().then((api) => {
            return api.getByUID('content', 'stage')
                .then((stage) => {
                    return of(stage);
                });
        });
    }

    getDocumentenDocument(): Promise<void | Observable<Object>> {
        return this.getApi().then((api) => {
            return api.getByUID('content', 'documenten')
                .then((documenten) => {
                    return of(documenten);
                });
        });
    }

    getNavbarDocument(): Promise<void | Observable<Object>> {
        return this.getApi().then((api) => {
            return api.getSingle('navigation')
                .then((nav) => {
                    return of(nav);
                });
        });
    }

    getPageDocument(uid: string): Promise<void | Observable<Object>> {
        return this.getApi().then((api) => {
            return api.getByUID('content', uid)
                .then((content) => {
                    return of(content);
                });
        });
    }
}
