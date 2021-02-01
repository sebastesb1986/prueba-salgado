import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';



const routes: Routes = [

  { path:"user", component:UsersComponent },
   {path:"users/:id", component:UsersComponent },
  //RUTA 404
  { path:'**', pathMatch: 'full', redirectTo: 'user' },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})

export class AppRoutingModule { }
