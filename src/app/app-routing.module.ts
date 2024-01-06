import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { StartupPageComponent } from './authentication/startup-page/startup-page.component';

const routes: Routes = [

  // {path: ' ', redirectTo: 'auth/startup', pathMatch: 'full'},
  {path: 'auth/startup', component: StartupPageComponent},
  {path:'home', component: HomeComponent},
  {path:'search', component: SearchComponent},
  {path:'movie/:id', component: MovieDetailsComponent},
  { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
