import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Claim } from '../model/claim.interface';
@Injectable({
  providedIn: 'root'
})

export class ClaimService {
private apiUrl = '/api/claims';			

  constructor(private http: HttpClient) { }

  getClaims(): Observable<Claim[]>{
				return this.http.get<Claim[]>(this.apiUrl);
	}

}
