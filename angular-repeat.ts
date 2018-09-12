import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templaeUrl: './app.component.html',
    styleUrls: ['./app.component.css']
    })
    
export class AppComponent {
   title = 'Receipts for vegans';
}

<h1>{{ title }}</h1>
<app-receipts></app-receipts>

//// receipts.component.ts

import { Component, OnInit } from '@angular/core';

import { Receipt } from '../receipt';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
  
  export class ReceiptsComponent implements OnInit {
  
  receipt: Receipt = {
    id: 1,
    name: 'Smashed Potato';
   };
   
   
  constructor() {}
  
  ngOnInit() {
   
  }
  
  }
  
 //  receipts.component.html
 <h2>{{ receipt.name | uppercase }} Details</h2>
 <div><span>id: </span>{{ receipt.id }}</div>
 <div><span>name: </span>{{ receipt.name }}</div>
 
 // after refactoring:
 <div>
   <label>
     <input [(ngModel)]="receipt.name" placeholder="name" />
   </label>
 </div>

//// receipt.ts
export class Receipt {
   id: number;
   name: string;
}


// app.module.ts (@NgModule)

import { FormsModule } from '@angular/forms';

import { ReceiptsComponent } from './receipts/receipts.component';

imports: [
  BrowserModule,
  FormsModule
],
declarations: [
  AppComponent,
  ReceiptsComponent
  ],
  




