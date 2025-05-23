
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ContactService {
	env = environment;
	constructor(private http: HttpClient) {}

	sendContactForm(data: { name: string; email: string; message: string }) {

        var header = { 
            headers: new HttpHeaders({
                'Content-Type' : 'application/json'
            })
        } 

		return this.http.post(this.env.apiBaseUrl + 'send-email', data, header);
	}
}
