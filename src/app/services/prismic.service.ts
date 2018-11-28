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

    public toHtml(data) {
        return this.sanitizer.bypassSecurityTrustHtml(PrismicDOM.RichText.asHtml(data));
    }

    public toHtmlVideo(data) {
        return this.sanitizer.bypassSecurityTrustHtml(data);
    }
}
