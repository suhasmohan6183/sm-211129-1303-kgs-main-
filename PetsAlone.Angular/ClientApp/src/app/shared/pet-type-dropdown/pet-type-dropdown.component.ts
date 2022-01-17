import { Component, EventEmitter, Inject,OnInit, Output } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-type-dropdown',
  templateUrl: './pet-type-dropdown.component.html'
})

export class PetTypeDropdownComponent implements OnInit {

  @Output() dropDownValue = new EventEmitter();
  dropDownDetails: any = [];
  constructor() { }

  ngOnInit() {
    
    this.dropDownDetails = [{
      value: 0,
      description: 'Please Select'
    }, {
        value: 1,
        description: 'Cat'
      },
      {
        value: 2,
        description: 'Dog'
      },
      {
        value: 3,
        description: 'Hamster'
      },
      {
        value: 4,
        description: 'Bird'
      },
      {
        value: 5,
        description: 'Rabbit'
      },
      {
        value: 6,
        description: 'Fish'
      },
      {
        value: 7,
        description: 'Lizard'
      },
      {
        value: 8,
        description: 'Horse'
      },
      {
        value: 9,
        description: 'Gerbil'
      },
      {
        value: 10,
        description: 'Tortoise'
      }
      ]
  }

  onDropdownChange(value: any) {
    this.dropDownValue.emit(value);
  }

  
}
