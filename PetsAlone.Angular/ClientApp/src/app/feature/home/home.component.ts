import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PetService } from '../../core/services/pet-service';
import { PetDetail } from '../../core/models/petdetail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  petsData: PetDetail[];
  cachedPetsData: PetDetail[];

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private petService: PetService) { }

  ngOnInit() {

    this.activatedRoute.data.subscribe(data => {
      this.petsData = data.petData;
      this.cachedPetsData = this.petsData;
    });
  }

  onDropDownChange(petType: any) {
    let numPetType = Number(petType);

    if (numPetType == 0) {
      this.petsData = this.cachedPetsData;
    } else {
      this.petsData = this.cachedPetsData.filter(x => x.petType == numPetType);
    }
  }
}
