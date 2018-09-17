import {Injectable} from '@angular/core';
import {Competentie} from './competentie';
import {COMPETENTIES} from './mock-competenties';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CompetentieService {

    getCompetenties(): Observable<Competentie[]> {
        return of(COMPETENTIES);
    }

    getCompetentie(id: number): Observable<Competentie> {
        return of(COMPETENTIES.find(competentie => competentie.id === id));
    }

    constructor() {
    }
}
