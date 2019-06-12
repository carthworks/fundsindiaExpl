import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundsexplorerComponent } from './fundsexplorer/fundsexplorer.component';
import { HomeComponent } from './home/home.component';


// const routes: Routes = [];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {path: 'home', component: HomeComponent},
  {path: 'list', component: FundsexplorerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
