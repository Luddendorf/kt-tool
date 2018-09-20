import { Directive, ElementRefб HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
 export class HighlightDirective {
   constructor(el: ElementRef) {
     el.nativeElement.style.backgroundColor = 'yellow';
   }
 }
 
 export class BoldDirective {
   constructor(private 
   
   }
   
   
 }
 


import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Potatoes', 10)
  ];
  
  constructor() {}
  
  ngOnInit() {}
  
}

//  shopping-list.component.html  ////////
<div class="row">
  <div class="col-xs-10">
   <app-shopping-edit></app-shopping-edit>
   <hr />
   
   <ul class="list-group">
     <a
       class="list-group-item"
       style="cursor: pointer"
       *ngFor="let ingredient of ingredients">
         {{ ingredient.name }} ({{ ingredient.amount }})
     </a>
   </ul>
 </div>
 </div>
 
//  shopping-edit.component.html  ////////
<div class="row">
  <div class="col-xs-10">
  
    <form>
      <div class="row">
       <div class="col-sm-5 form-group">
         <label for="name">Name</label>
         <input type="text" id="name" class="form-control">
       </div>
       
       <div class="col-sm-5 form-group">
         <label for="amount">Amount</label>
         <input type="number" id="amount" class="form-control>
       </div>
       
       <div class="row">
       <div class="col-xs-12">
         <button class="btn btn-success" type="submit">Add</button>
         <button class="btn btn-danger" type="button">Delete</button>
         <button class="btn btn-primary" type="button">Clear</button>
       </div>
       </div>
       
      </div>
    </form>
    
</div>
</div>



















