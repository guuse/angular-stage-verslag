import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StageComponent} from './stage/stage.component';
import {DocumentenComponent} from './documenten/documenten.component';
import {HomeComponent} from './home/home.component';
import {CompetentieComponent} from './competentie/competentie.component';
import {ModuleWithProviders} from '@angular/core';


const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'stage', component: StageComponent},
    {path: 'documenten', component: DocumentenComponent},
    {path: 'competenties/:id', component: CompetentieComponent}
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule {
}
