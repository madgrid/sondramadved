import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { ArtItem1Component } from './art-item1/art-item1.component';
import { ArtItem2Component } from './art-item2/art-item2.component';
import { ArtItem3Component } from './art-item3/art-item3.component';
import { ArtMoreComponent } from './art-more/art-more.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'art-item1', component: ArtItem1Component },
  { path: 'art-item2', component: ArtItem2Component },
  { path: 'art-item3', component: ArtItem3Component },
  { path: 'art-more', component: ArtMoreComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
