import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- ngModel lives here

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  declarations: [ // Components, pipes and directives
    AppComponent,
    HeroDetailComponent
  ],
  imports: [	// only classes that are NGModule
    BrowserModule,
    FormsModule  // <-- import FormsModule before binding with  [(ngModule)]
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
