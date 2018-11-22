import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import * as Prismic from 'prismic-javascript';
import * as PrismicDOM from 'prismic-dom';
import {CONFIG} from '../../prismic-configuration';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({providedIn: 'root'})
export class PrismicService {

    constructor(
        private sanitizer: DomSanitizer,
    ) {
    }

    getApi(): Promise<void | any> {
        return Prismic.api(CONFIG.apiEndpoint, {accessToken: CONFIG.accessToken})
            .then((api) => {
                return api;
            })
            .catch(e => console.log(`Error during connection to your Prismic API: ${e}`));
    }

    getSingle(type): Promise<void | Observable<Object>> {
        return this.getApi().then((api) => {
            return api.getSingle(type)
                .then((document) => {
                    return of(document);
                });
        });
    }

    getDocument(type): Promise<void | Observable<Object>> {
        return this.getApi().then((api) => {
            return api.getByUID('content', type)
                .then((document) => {
                    return of(document);
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

    public toHtml(data) {
        return this.sanitizer.bypassSecurityTrustHtml(PrismicDOM.RichText.asHtml(data));
    }
}
