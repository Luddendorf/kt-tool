import { Injectable } from '@angular/core';
import { Receipt } from './receipt';
import { RECEIPTS } from './mock-receipts';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root',
  })
  
 export class ReceiptService {
   
   constructor(private messageService: MessageService) {}
 
  getReceipts(): Observable<Receipt[]> {
  
  this.messageService.add('ReceiptService: fetched receipts');
  return of(RECEIPTS);
  
  }
 
 }
 
 // receipts.component.ts ///
 import { ReceiptService } from '../receipt.service';
 
  receipts: Receipt[];
  
  constructor(private receiptService: ReceiptService) {}
  
  getReceipts(): void {
     this.receiptService.getReceipts()
        .subscribe(receipts => this.receipts = receipts);
  }
  
  ngOnInit() {
    this.getReceiptS();
  }
  
  // message.service.ts
  
  import { Injectable } from '@angular/core';
  
  @Injectable({
    providedIn: 'root',
  })
  export class MessageService {
     messages: string[] = [];
     
     add(message: string) {
       this.messages.push(message);
     }
     
     clear() {
      this.messages = [];
      }
      
      
     
     
     
  }
  
    
