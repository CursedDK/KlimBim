import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContactService {
	constructor(private http: HttpClient) {}

	sendContactForm(data: { name: string; email: string; message: string }) {
		
        var header = { 
            headers: new HttpHeaders({
                'Content-Type' : 'application/json',    
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            })
        } 

		return this.http.post('http://localhost:3000/send-email', data, header);
	}
}
