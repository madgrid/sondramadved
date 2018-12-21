import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ArtItem1Component } from './art-item1/art-item1.component';
import { ArtItem2Component } from './art-item2/art-item2.component';
import { ArtItem3Component } from './art-item3/art-item3.component';
import { ArtMoreComponent } from './art-more/art-more.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ArtItem1Component,
    ArtItem2Component,
    ArtItem3Component,
    ArtMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
