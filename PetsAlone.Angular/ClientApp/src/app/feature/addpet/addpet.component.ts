import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PetService } from '../../core/services/pet-service';

@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.component.html',
})
export class AddPetComponent {
  PetsData: any = [];
  model: any = {};
  petTypeValue: string;
  validPetType = false;
   
  ServerMessage: any;
  IsSuccess: boolean;
  ShowServerMessage = false;


  constructor(private http: HttpClient, private petService: PetService) { }

  ngOnInit() {
  }

  addMissingPet() {
    this.petService.addPet(this.model.name, this.model.missingsince, this.petTypeValue)
      .subscribe(result => {
        if (result.status == 200) {
          this.IsSuccess = true;
        } else if (result.status == 400) {
          this.IsSuccess = false;
        }
        this.ShowServerMessage = true;
        this.ServerMessage = result.message;
      });
  }

  onDropDownChange(value: any) {
    this.petTypeValue = value;

    this.validPetType = this.petTypeValue != undefined && Number(this.petTypeValue) > 0;
  }
}
