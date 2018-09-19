/* three.js / pixi.js / d3.js */
/*
[ngStyle]="{'background-color': getColor(person.country)}"
[ngStyle]="{'font-size.px':24}"

[ngClass]="{
'text-success':person.country === 'UK',
'text-primary':person.country === 'USA',
'text-danger':person.country === 'HK'}"

*ngFor="let logItem of log; let i = index;"
[ngClass]="{'white-text': i >= 4}" */

// angular-cli.json /////////////////////////////
"style": [
  "../node_modules/bootstrap/dist/css/bootstrap.min.css",
  "styles.css"
  ],
  
// app.component.html ///////
  <app-header></app-header>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <app-recipes></app-recipes>
        <app-shopping-list></app-shopping-list>
     </div>
   </div>
  </div>

/// header.component.ts ////
import { Component } from '@angular/core';

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   
        })

export class HeaderComponent {
  
}


/// header.component.html ////////
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a href="#" class="navbar-brand">Recipe Book</a>
    </div>

  <div class="collapse navbar-collapse">
    <ul class="nav navbar-nav">
      <li><a href="#">Recipes</a></li>
      <li><a href="#">Shopping List</a></li>
    </ul>

    <ul class="nav navbar-nav navbar-right">
      <li class="dropdown">
        <a href="#" class="dropdown-toggle"
                    role="button">Manage
        <span class="caret"></span>
       </a>
        <ul class="dropdown-menu">
          <li><a href="#">Save Data</a></li>
          <li><a href="#">Fetch Data</a></li>
        </ul>
      </li>
    </ul>
  </div>

  </div>
</nav>


/// app.module.ts //////////
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    ],
  
})

/// recipes/recipes.component.ts  ////////

/// recipes/recipes.component.html ////////
<div class="row">
  <div class="col-md-5">
    <app-recipe-list></app-recipe-list>
  </div>
  <div class="col-md-7">
    <app-recipe-detail></app-recipe-detail>
  </div>
</div>

/// recipes/recipe-list.component.ts  ////////
import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
 export class RecipeListComponent implements OnInit {
   
   recipes: Recipe[] = [
     new Recipe('Pizza', 'Italian pizza with tomatoes', 'http://cdn.com/food.jpg'),
     new Recipe('Steak', 'Texas beef steak', 'http://cdn.com/food2.jpg'),
     new Recipe('Soup', 'Creme soup with peas', 'http://cdn.com/food3.jpg')
   ];
   
   constructor() {}
   
   ngOnInit() {
     
   }
 }


/// recipes/recipe-list.component.html  ////////
<div class="row">
  <div class="col-xs-12">
    <button class="btn btn-success">New Recipe</button>
  </div>
</div>
<hr />
      
<div class="row">
  <div class="col-xs-12">
    <a href="#" class="list-group-item clearfix"
                *ngFor="let recipe of recipes"
   >
     <div class="pull-left">
      <h4 class="list-group-item-heading">{{ recipe.name }}</h4>
      <p class="list-group-item-text">{{ recipe.description }}</p>
     </div>
     <span class="pull-right">
       <img [src]="recipe.imagePath"
            alt="{{ recipe.name }}" class="img-responsive"
            style="max-height: 50px;">  
     </span>
    </a>
    <app-recipe-item></app-recipe-item>
  </div>
</div>


/// recipes/recipe-detail.component.ts  ////////

/// recipes/recipe-detail.component.html  ////////
<div class="row">
  <div class="col-xs-12">
    <img src="" alt="" class="img-responsive">
  </div>
</div>

<div class="row">
  <div class="col-xs-12">
    <h1>Recipe Name</h1>
  </div>
</div>

<div class="row">
  <div class="col-xs-12">
    <div class="btn-group">
      <button type="button"
              class="btn btn-primary dropdown-toggle">Manage Recipe 
        <span class="caret"></span></button>
          
      <ul class="dropdown-menu">
        <li><a href="#">Shopping List</a></li>
        <li><a href="#">Edit Recipe</a></li>
        <li><a href="#">Delete Recipe</a></li>
      </ul>
          
    </div>
  </div>
</div>

<div class="row">
  <div class="col-xs-12">
    Description
  </div>
</div>

<div class="row">
  <div class="col-xs-12">
    Ingredients
  </div>
</div>

/// recipes/recipe-list/recipe-item.component.ts  ////////

/// recipes/recipe-list/recipe-item.component.html  ////////


/// recipes/recipe.model.ts ///////
export class Recipe {
   public name: string;
   public description: string;
   public imagePath: string;
   
   constructor(name: string, desc: string, imagePath: string) {
      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
   }
}



/// shopping-list.component.ts  ////////
import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-shopping-list',
   templateUrl: './shopping-list.component.html',
   styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

 ingredients = [];
  
  constructor() {}
  
  ngOnInit() {
    
  }
}

/// shopping-list.component.html  ////////
<div class="row">
  <div class="col-xs-10">
    <app-shopping-edit></app-shopping-edit>
    <hr />
    
    <ul class="list-group">
      <a class="list-group-item" style="cursor: pointer"></a>
    </ul>
  </div>
</div>


/// shopping-list/shopping-edit.component.ts  ////////

/// shopping-list/shopping-edit.component.html  ////////






