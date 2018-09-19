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
<h1>The Header</h1>


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

/// recipes/recipe-list.component.html  ////////
<app-recipe-item></app-recipe-item>


/// recipes/recipe-detail.component.ts  ////////

/// recipes/recipe-detail.component.html  ////////



/// recipes/recipe-list/recipe-item.component.ts  ////////

/// recipes/recipe-list/recipe-item.component.html  ////////



/// shopping-list.component.ts  ////////

/// shopping-list.component.html  ////////
<div class="row">
  <div class="col-xs-10">
    <app-shopping-edit></app-shopping-edit>
    <hr />
    <p>The list</p>
  </div>
</div>


/// shopping-list/shopping-edit.component.ts  ////////

/// shopping-list/shopping-edit.component.html  ////////






