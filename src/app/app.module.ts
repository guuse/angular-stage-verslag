import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {StageComponent} from './stage/stage.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {DocumentenComponent} from './documenten/documenten.component';
import { CompetentieComponent } from './competentie/competentie.component';
import { FooterComponent } from './footer/footer.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMoneyBillAlt  } from '@fortawesome/free-regular-svg-icons';
import { TextComponent } from './text/text.component';
import { ImageComponent } from './image/image.component';
import { DocumentenLijstComponent } from './documenten-lijst/documenten-lijst.component';


library.add(faFacebook, faGithub, faLinkedin, faMoneyBillAlt);

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        StageComponent,
        NavbarComponent,
        DocumentenComponent,
        CompetentieComponent,
        FooterComponent,
        TextComponent,
        ImageComponent,
        DocumentenLijstComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
