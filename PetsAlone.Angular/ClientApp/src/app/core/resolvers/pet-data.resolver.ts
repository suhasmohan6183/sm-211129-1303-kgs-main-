import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { PetService } from "../services/pet-service";


@Injectable({ providedIn: "root" })
export class PetDataResolver implements Resolve<any>{

  constructor(private petService: PetService) {}

  resolve() {
    return this.petService.getAllPets();     
    }

}
