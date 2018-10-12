import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StageComponent } from './stage/stage.component';
import { DocumentenComponent } from './documenten/documenten.component';
import { HomeComponent } from './home/home.component';
import { CompetentieComponent } from './competentie/competentie.component';
import { ModuleWithProviders } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './route.reuse';


const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, data: {state: 'home'}},
    {path: 'stage', component: StageComponent, data: {state: 'stage'}},
    {path: 'documenten', component: DocumentenComponent, data: {state: 'documenten'}},
    {path: 'competenties/:uid', component: CompetentieComponent, data: {state: 'competentie'}}
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule],
    providers: [
        {provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
    ],
})


export class AppRoutingModule {
}
