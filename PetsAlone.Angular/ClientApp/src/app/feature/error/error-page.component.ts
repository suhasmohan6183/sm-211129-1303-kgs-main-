import { Component, Inject,OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './error-page.component.html'
})

export class ErrorPageComponent implements OnInit {
  
  public message= 'An unexpected error has occured. Sorry for the inconvenience.';
  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    var data = this.activatedRoute.snapshot.data;

    if (data.page != undefined) {
      switch (data.page) {
        case '401': this.message = 'Access denied due to insufficient permissions'; break;
        case '402': this.message = 'The page you are looking for is not available'; break;
        default: break;

      }
    }
  }

  
}
