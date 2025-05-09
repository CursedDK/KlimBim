import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { TranslateService } from '@ngx-translate/core';

bootstrapApplication(AppComponent, appConfig)
	.then(appRef => {
		const translate = appRef.injector.get(TranslateService);
	
		const browserLang = translate.getBrowserLang();
		const selectedLang = ['en', 'de'].includes(browserLang!) ? browserLang! : 'en';
	
		translate.setDefaultLang('en');
		translate.use(selectedLang);
	})
  	.catch((err) => {
		console.error(err)
	});
