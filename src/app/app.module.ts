import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { LocalWeatherComponent } from './components/local-weather/local-weather.component';
import { WeatherService } from './services/weather.service';
import { HomeComponent } from './app.component';
import { LocalWeatherModule } from './components/local-weather/local-weather.module';
import { UserWeatherComponent } from './components/user-weather/user-weather.component';
import { UserWeatherModule } from './components/user-weather/user-weather.module';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactsModule } from './components/contacts/contacts.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userWeatherReducer } from './reducers/user-weather.reducer';

let routes: Routes = [
  { path: 'local-weather', component: LocalWeatherComponent },
  { path: 'user-weather', component: UserWeatherComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '', component: LocalWeatherComponent }
];

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
        LocalWeatherModule,
        UserWeatherModule,
        ContactsModule,
        StoreModule.provideStore({
            cities: userWeatherReducer
        }),
        StoreDevtoolsModule.instrumentOnlyWithExtension({
            maxAge: 5
        })
    ],
    providers: [WeatherService],
    bootstrap: [HomeComponent]
})
export class HomeModule {
}
