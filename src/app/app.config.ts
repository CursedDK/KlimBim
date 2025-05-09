import { provideAnimations } from "@angular/platform-browser/animations";
import { ApplicationConfig, CUSTOM_ELEMENTS_SCHEMA, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, provideHttpClient } from "@angular/common/http";

export function createTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http, './i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  	providers: [
		provideAnimations(), 
		provideZoneChangeDetection({ eventCoalescing: true }), 
		provideRouter(routes), 
		provideHttpClient(),
		importProvidersFrom(
			TranslateModule.forRoot({
				loader: {
					provide: TranslateLoader,
					useFactory: createTranslateLoader,
					deps: [HttpClient]
				},
				defaultLanguage: 'en',
				isolate: false // this allows shared TranslateService instance across components
			})
		)
	],
};
