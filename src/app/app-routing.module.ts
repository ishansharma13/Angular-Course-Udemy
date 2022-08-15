import { NgModule } from '@angular/core';
import { Route,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';

const routes: Route[] =[
    {path:'',component:HomeComponent},
    {path:'users',component:UsersComponent},
    {path:'servers',component:ServersComponent},

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }