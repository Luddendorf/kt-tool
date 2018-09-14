
<div *ngIf="receipt">
  <h2>{{ hero.name | uppercase }}</h2>
  <div><span>id: </span>{{ hero.id }}</span></div>

<div>
  <label>
    <input [(ngModel)]="hero.name" placeholder="name"/>
  </label>
</div>    
    
 </div>

//receipt-detail.component.ts ///////////
import { Receipt } from '../receipt';

import { Component, OnInit, Input } from '@angular/core';

 @Input() receipt: Receipt;

<app-receipt-detail [receipt]="selectedReceipt"></app-receipt-detail>

<ul class="receipts">
  <li *ngFor="let receipt of receipts">
    [class.selected]="receipt === selectedReceipt"
    (click)="onSelect(receipt)">
    <span class="badge">{{ receipt.id }}</span>{{ receipt.name }}
  </li>
</ul>

<app-receipt-detail [receipt]="selectedReceipt"></app-receipt-detail>
