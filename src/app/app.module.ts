import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StageComponent } from './pages/stage/stage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { DocumentenComponent } from './pages/documenten/documenten.component';
import { CompetentieComponent } from './pages/competentie/competentie.component';
import { FooterComponent } from './components/footer/footer.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TextComponent } from './slices/text/text.component';
import { ImageComponent } from './slices/image/image.component';
import { DocumentenLijstComponent } from './slices/documenten-lijst/documenten-lijst.component';
import { ImageModalComponent } from './components/image-modal/image-modal.component';
import { SubTitleComponent } from './slices/sub-title/sub-title.component';
import { ClickOutsideModule } from 'ng4-click-outside';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

library.add(faGithub, faLinkedin, faEnvelope);

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
        ImageModalComponent,
        SubTitleComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FontAwesomeModule,
        ClickOutsideModule,
        BrowserAnimationsModule,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
