import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StageComponent} from './stage/stage.component';
import {DocumentenComponent} from './documenten/documenten.component';
import {HomeComponent} from './home/home.component';
import {CompetentieComponent} from './competentie/competentie.component';
import {ModuleWithProviders} from '@angular/core';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'not-found', component: PageNotFoundComponent},
    {path: 'home', component: HomeComponent},
    {path: 'stage', component: StageComponent},
    {path: 'documenten', component: DocumentenComponent},
    {path: 'competenties/:uid', component: CompetentieComponent}
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})


export class AppRoutingModule {
}
