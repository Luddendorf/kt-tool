import { BrowserModule } form '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
   BrowserModule,
   FormsModule,
   HttpModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


/// app.component.html ///

<h3>I'm in the AppComponent!</h3>
<hr />
<app-server></app-server>

ng generate component servers

// server.component.html //
<p>{{ 'Server' }} with ID {{ serverId }} is {{ getServerStatus() }}</p>


// server.component.ts //
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  
  getServerStatus() {
    return this.serverStatus;
  } 
}



// app.component.html //
<div class="container">
 <div class="row">
  <div class="col-xs-12">
  <h3>I'm in the AppComponent!</h3>
  <hr />
  <!-- <app-servers></app-servers> -->
  <!-- <div app-servers></div> -->
  <!-- <div class="app-servers"></div> -->
  <app-servers></app-servers>
  </div>
 </div>
</div>

// servers.component.ts //
import { Component, OnInit } from '@angular/core';

/*
@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  template: `<app-server></app-server>
             <app-server></app-server>`,
  // styleUrls: ['./servers.component.css']
  styles: [`
    h3 { color: dodgerblue; }
  `]
}) */

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})


export class ServersComponent implements OnInit {
  
  allowNewServer = false;
  serverName = 'TestServer';
  
  serverCreationStatus = 'No server was created.';
  
  serverCreated = false;
  
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  
  ngOnInit() {}
  
  onCreateServer() {
    
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }
  
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  
}

// servers.component.html //

<label>Server Name</label>
<input
    type="text"
    class="form-control"
    (input)="onUpdateServerName($event)"/>
      
<input
    type="text"
    class="form-control"
    [(ngModel)]="serverName">
      
<p>{{ serverName }}</p>      
      
<button class="btn btn-primary"
        [disabled]="!allowNewServer"
        (click)="onCreateServer()"
>Add Server</button>
<!--
<p [innerText]="allowNewServer"> /* {{ allowNewServer }} */</p> -->

<p *ngIf="serverCreated">Server was created, server name is {{ serverName }}</p>

<ng-template #noServer><p>No server was created!</p></ng-template>

<app-server></app-server>
<app-server></app-server>

/// app.component.css ///
h3 {
  color: darkblue;
}

//  app-turn-green.directive.ts //
@Directive({
   selector: '[appTurnGreen]'
})
export class TurnGreenDirective {
    
}


