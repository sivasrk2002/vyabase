import { Component, OnInit } from '@angular/core';

import { Employee } from './employee';
import { SrkService } from './srk.service';
//import { table } from 'console';
//import { Employee } from './employee';
//import { srkService } from './srk.service';
//import { Httpclient } from '@angular/common/http';
//import { Employee } from'./employee';


@Component({
  selector: 'app-srk',
  templateUrl: './srk.component.html',
  styleUrls: ['./srk.component.scss']
})
export class SrkComponent  implements OnInit {
  employees:Employee[]=[];
  errormessage:string='';



 // employees:Employee [] = [
  // { name: 'siva',id: 'S01',number: 4748483884,role: 'it',status: 'active'},
   //{ name: 'rama',id: 'S02',number: 4743883104,role: 'cse',status: 'lnactive'},
   //{ name: 'krishnan',id: 'S03',number: 5643248384,role: 'mech',status: 'active'},
   //{ name: 'vasee',id: 'S04',number: 4747834884,role: 'civil' ,status: 'inactive'} 
  //]; 


  constructor(private service :SrkService) { }


  ngOnInit(): void {
   this.getdata();
  }

  getdata(){
       this.service.getdata().subscribe((data: any[])=>{
        this.employees=data;
       },)
       //addRecord(table:any, empData: any){
        //const url = `${this.baseURL}/${table}`;
        //return this.http.post(url,empData)
      }
    
      //error:(error)=>{
       // this.errormessage = 'failed to fetch data';
       // console.error(error);
    }
      //};
   // }
 // }

//getData():void{
 // console.log('fetching data...');
  



