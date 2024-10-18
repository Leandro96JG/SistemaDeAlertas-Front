import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    NotPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [
    provideClientHydration(),
    importProvidersFrom([
      TranslateModule.forRoot({
        loader:{
          provide:TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps:[HttpClient],
        }
      })
    ]),
    provideHttpClient(withInterceptorsFromDi()),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http:HttpClient):TranslateHttpLoader{
  return new TranslateHttpLoader(http,'./i18n/','.json');
}
