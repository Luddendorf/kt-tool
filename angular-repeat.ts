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
import { RECEIPTS } from '../mock.receipts';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
  
  export class ReceiptsComponent implements OnInit {
  /*
  receipt: Receipt = {
    id: 1,
    name: 'Smashed Potato';
   }; */
   selectedReceipt: Receipt;
   
   receipts = RECEIPTS;
    
   onSelect(receipt: Receipt): void {
     this.selectedReceipt = receipt;   
}
   
  constructor() {}
  
  ngOnInit() {
   
  }
  
  }
  
 //  receipts.component.html
<div *ngIf="selectedReceipt">
  
 <h2>{{ selectedReceipt.name | uppercase }} Details</h2>
 <div><span>id: </span>{{ selectedReceipt.id }}</div>
 <div><span>name: </span>{{ selectedReceipt.name }}</div>
 
 // after refactoring:
 <div>
   <label>
     <input [(ngModel)]="selectedReceipt.name" placeholder="name" />
   </label>
 </div>

</div>

// refactoring 2:
<h2>My Receipts</h2>
<ul class="receipts">
    <li *ngFor="let receipt of receipts"
        (click)="onSelect(receipt)"
        [class.selected]="receipt === selectedReceipt">
      <span class="badge">{{receipt.id}}</span> {receipt.name}}
    </li>
</ul>


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
 
  //  mock-receipts.ts
  import { Receipt } from './receipt';

export const RECEIPTS: Receipt[] = [
    { id: 11, name: 'Pizza' },
    { id: 12, name: 'Burger' },
    { id: 13, name: 'Fried chicken' },
    { id: 14, name: 'Coca-cola' },
    { id: 15, name: 'Pasta' }
    ];




