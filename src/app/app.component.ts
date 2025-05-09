import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from "@ngx-translate/core";
import { sharedImports } from './utils/shared-imports';

@Component({
	selector: 'app-root',
	imports: [
		RouterOutlet, 
		TranslateModule,
		sharedImports,
	],
	templateUrl: './app.component.html'
})

export class AppComponent {
	title = 'KlimBimGmbH';	

	constructor() { }	

	ngOnInit() { }
}
