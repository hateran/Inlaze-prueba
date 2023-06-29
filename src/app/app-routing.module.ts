import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoctailDetailComponent } from './pages/coctail-detail/coctail-detail.component';
import { CoctailsComponent } from './pages/coctails/coctails.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'coctail-detail/:name',
    component: CoctailDetailComponent
  },
  {
    path: 'coctails/:char',
    component: CoctailsComponent
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
