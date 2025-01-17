
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
//import { constructor } from 'console';
//import { constructor } from 'assert';
//import { url } from 'inspector';


@Injectable({
  providedIn: 'root'
})
export class SrkService{
  [x: string]: any;
  //[x: string]: string;
  //[x: string]: any;
   // getdata() {
  allemployee:Employee[]=[];
    //[x: string]: any;
  
  constructor( private HttpClient:HttpClient) {}

       URL='http://localhost:3000/employees';
    getdata() {
      return this.HttpClient.get<Employee[]>(this.URL);
    } 
      
    // postdata() {
    //   return this.HttpClient.post<(this.URL)
    // } 
  

//function getdata() {
  //throw new Error('Function not implemented.');
}

/*import { OnInit } from '@angular/core';
import { srkService } from './srk.service';

export class SrkComponent implements OnInit {
    constructor(private service: srkService) {}

    ngOnInit() {
        this.getdata();
    }

    getdata() {
        this.service.getData();
    }
}


export { srkService };
//export { srkService };

export { srkService }

function getdata() {
  throw new Error('Function not implemented.');
}
function constructor(_private: any, _http: any, HttpClient: typeof HttpClient) {
  throw new Error('Function not implemented.');
}
*/
