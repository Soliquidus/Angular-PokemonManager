import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Routage
import {AppRoutingModule} from './app-routing.module';

// Composants
import {AppComponent} from './app.component';
import {GenerationsComponent} from './components/generations/generations.component';
import {PokemonsComponent} from './components/pokemons/pokemons.component';
import {PokemonComponent} from './components/pokemon/pokemon.component';

// locale: France
import {LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeFR from '@angular/common/locales/fr';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {CreationComponent} from './components/account/creation/creation.component';
import {ConnectionComponent} from './components/account/connection/connection.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonsComponent,
    PokemonComponent,
    NavBarComponent,
    CreationComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
