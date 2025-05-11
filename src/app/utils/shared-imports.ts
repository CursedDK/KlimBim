
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { DatenschutzComponent } from '../datenschutz/datenschutz.component';
import { ImpressumComponent } from '../impressum/impressum.component';
import { UnderConstructionComponent } from '../under-construction/under-construction.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../services/ContactService';
export const sharedImports = [
	// Components 
	HeaderComponent,
	FooterComponent,
	DatenschutzComponent,
	ImpressumComponent,

	// Modules 
	CommonModule,
	ReactiveFormsModule
]

export const sharedServices = [
	// Services
	ContactService
]

export const sharedComponents = [
	// Components
	UnderConstructionComponent
]