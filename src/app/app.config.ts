import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import {  provideAnimations } from '@angular/platform-browser/animations';
import { headersInterceptor } from './core/interceptors/headers/headers.interceptor';
import { errorsInterceptor } from './core/interceptors/errors/errors.interceptor';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http, '/i18n/' , '.json');
}


export const appConfig: ApplicationConfig = {
  providers: [

    provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  importProvidersFrom(TranslateModule.forRoot({
    defaultLanguage: 'en',
    loader:{
      provide:TranslateLoader,
      useFactory:HttpLoaderFactory,
      deps:[HttpClient]
    }
  })),
  provideAnimations(),
  provideToastr(),
  provideClientHydration(withEventReplay()),
  provideHttpClient(withFetch(), withInterceptors([headersInterceptor, errorsInterceptor])),
  providePrimeNG({
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: false || 'none'
        }
    }
})
]
};
