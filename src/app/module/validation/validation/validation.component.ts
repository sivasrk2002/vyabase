import { Component } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl:'./validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent {

    FormData: any = {};

  
  formdata(_formdata: any) {
    throw new Error('Method not implemented.');
  }
  }
