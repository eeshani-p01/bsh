import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DiyComponent } from './diy/diy.component';
import { GuideComponent } from './guide/guide.component';
import { HomeComponent } from './home/home.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'diy',
    component: DiyComponent,
  },
  {
    path: 'guide',
    component: GuideComponent,
  },
  {
    path: 'merchandise',
    component: MerchandiseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
