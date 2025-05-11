import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { sharedImports } from '../utils/shared-imports';
import { ContactService } from '../services/ContactService';

@Component({
  selector: 'app-home',
  imports: [
	sharedImports
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
	contactForm: FormGroup;
	contactService: ContactService = inject(ContactService);

	constructor(private fb: FormBuilder) {
		this.contactForm = this.fb.group({
			name: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			message: ['', Validators.required],
		});
	}

	onSubmit(): void {
		if (this.contactForm.valid) {
			console.log((this.contactForm.value))
			this.contactService.sendContactForm(this.contactForm.value).subscribe({
				next: () => console.log('Nachricht gesendet!'),
				error: () => console.log('Fehler beim Senden.'),
			});
		}
	}
}
