import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
 export class HighlightDirective {
   constructor(el: ElementRef) {
     el.nativeElement.style.backgroundColor = 'yellow';
   }
   
   @Input('appHighlight') hightlightColor: string;
   
   @HostListener('mouseleave') onMouseLeave() {
     this.highlight(null); 
   }
   
   private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color; 
   }
 }
 
// app.component.html ////
<p appHighLight highlightColor="color">Highlighted in yellow</p>
<p appHigLight [highlightColor]="orange">Hightlighted in orange</p>

<p [appHighlight]="color">Highlight me!</p>


 export class BoldDirective {
   constructor(private element: ElementRef, private renderer: Renderer2) {
    
     this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
   }
   
   @HostListener("mouseenter") onMouseEnter() {
      this.setFontWeight("bold"); 
   }
   
   @HostListener("mouseleave") onMouseLeave() {
      this.setFontWeight("normal"); 
   }
   
   private setFontWeight(val: string) {
     this.renderer.setStyle(this.element.nativeElement, "font-weight", val); 
   }
   
 }
 servers = [];

onRemoveServer(id: number) {
   const position = id + 1;
   this.servers.splice(position, 1);
}
// child.component.ts ///////
@Component({
  selector: 'child-comp',
  template: '<input [ngModel]="userName" (ngModelChange)="onNameChange($event)" />
})

export class ChildComponent {
  
  @Input() userName: string;
  @Output() userNameChange = new EventEmitter<string>();
  
  onNameChange(model: string) {
    
    this.userName = model;
    this.userNameChange.emit(model);
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

///  cockpit.component.ts  ///////
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

export class CockpitComponent implements OnInit {
  
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  
  // newServerName = '';
  // newServerContent = '';
  
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  
  
  onAddServer(nameInput: HTMLInputElement) {
    
    console.log(this.serverContentInput);
    
    this.serverCreated
      .emit({serverName: nameInput.value,
                             serverContent: this.serverContentInput.nativeElement.value});
  }
  
  onAddBlueprint(nameInput: HTMLInputElement) {
     this.blueCreated
       .emit({serverName: nameInput.value,
                            serverContent: this.serverContentInput.nativeElement.value});
  }
  
}

///  cockpit.component.html  ///////
<div class="row">
  <div class="col-xs-10">
    
    <p>Add new Servers or blueprints!</p>

    <label>Server Name</label>
  <!--  <input type="text" class="form-control" [(ngModel)]="newServerName"> -->
    
    <input type="text"
           class="form-control"
           #serverNameInput>
      
    <label>Server Content</label>
    <input type="text"
           class="form-control"
           #serverContentInput>
      
    <br>
      
    <button class="btn btn-primary"
            (click)="onAddServer(serverNameInput)">Add Server</button>
    <button class="btn btn-primary"
            (click)="onAddBlueprint(serverNameInput)">Add Server Blueprint</button>
    
  </div>
</div>

// server-element.component.ts /////////
import { Component, OnInit, Input, ViewIncapsulation, OnChanges,
         SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector:
  templateUrl:
  styleUrls:
  encapsulation: ViewEncapsulation.Emulated        ///None, Native
})

  export class ServerElementComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked {
    
     @Input('srvElement') element: {type: string, name: string, content: string};
     @Input() name: string;
    
    @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
    @ViewChild('header') headerEl: ElementRef;
    
    @ContentChild(JokeComponent) jokeContentChild: JokeComponent;
    
    
    constructor() {
      console.log('Constructor called!');
    }
    
    ngOnChanges(changes: SimpleChanges) {
      console.log('ngOnChanges called!');
      console.log(changes);
    }
    
    ngOnInit() {
      console.log('ngOnInit called!');
    }
    
    ngDoCheck() {
      console.log('ngDoCheck called!');
    }
    
    ngAfterContentInit() {
      console.log('ngAfterContentInit called!');
      
      ${this.jokeContentChild};
    }
    
    ngAfterContentChecked() {
       console.log('ngAfterContentChecked called!');
    }
    
    ngAfterViewInit() {
      console.log('ngAfterViewInit called');
      ${this.jokeViewChild};
      
      this.headerEl.nativeElement.textContent = "Best Joke machine!";
    }
    
    ngAfterViewChecked() {
      console.log('ngAfterViewChecked called');
    }
  }


// server-element.component.html /////////
<div class="panel panel-default">
  <!-- <div class="panel-heading">{{ element.name }}</div> -->
  <div class="panel-heading">{{ name }}</div>
  <div class="panel-body">
    <ng-content></ng-content>

  </div>
</div>

// app.component.ts /////////
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test'}];
  
  onServerAdded(servertData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }
  
  onBlueAdded(blueData: {serverName: string, serverContent: string}) {
     this.serverElements.push({
       type: 'blueprint',
       name: blueData.serverName,
       content: blueData.serverContent
     });
  }
  
  onChangeFirst() {
     this.serverElements[0].name = 'Changed!';
  }
  
  onDestroyFirst() {
      this.serverElements.splice(0, 1);
  }
  
}


// app.component.html ////////
<div class="container">
 <app-cockpit
    (serverCreated)="onServerAdded($event)"
    (bpCreated)="onBlueAdded($event)"
></app-cockpit>
 <hr>
  <div class="row">
  <div class="col-xs-12">
    
    <button class="btn btn-danger"
            (click)="onDestroyFirst()"
    >Destroy first Component</button>
    
    <button class="btn btn-primary"
            (click)="onChangeFirst()"
      >Change first Element</button>

    <app-server-element
      *ngFor="let serverElement of serverElements"
      [srvElement]="serverElement"
      [name]="serverElement.name"
      >
    
<p>
  <strong *ngIf="serverElement.type === 'server'"
           style="...">{{ serverElement.content }}</strong>
  <em *ngIf="serverElement.type === 'blueprint'">{{ serverElement.content }}</em>
</p>
    
    </app-server-element>
  </div>
  </div>

</div>


ngOnChanges ngOnChanges

ngOnInit ngDoCheck ngAfterContentInit ngAfterContentChecked ngAfterViewInit

ngOnChanges ngOnInit ngDoCheck






















