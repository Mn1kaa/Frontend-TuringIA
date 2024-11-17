import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './domains/main_page/main/main.component';
import { AdminComponent } from './domains/admin/admin.component';

const routes: Routes = [

  {path:'',component:MainComponent},
  {path:'admin',component:AdminComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
