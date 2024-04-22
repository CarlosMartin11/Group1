import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';
const appRoutes: Routes = [{ path: 'home', component: HomeComponent
},
{
path: 'list', component: ListComponent,
},
{
path: 'about', component: AboutComponent
}
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }