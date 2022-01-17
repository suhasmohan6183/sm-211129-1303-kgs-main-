import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";

@Injectable({providedIn:"root"})
export class PetService {

  constructor(public http: HttpClient) { }

  getAllPets(): Observable<any> {
    return this.http.get('/api/pets/all');
  }

  addPet(petName: string, missingSince: string, petType: string): Observable<any> {
    return this.http.post('/api/pets/add',
      JSON.stringify({ petName: petName, missingSince: missingSince, petType: petType }),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
      }
    );
  }
}
