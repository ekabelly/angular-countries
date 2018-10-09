import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ErrorPageComponent } from "./error-page/error-page.component";
import { CountriesComponent } from "./countries/countries.component";
import { HomeComponent } from "./home/home.component";
import { CommentsComponent } from "./comments/comments.component";

const appRoute: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' }, //localhost:4200/
    { path: 'countries', component: CountriesComponent },
    { path: 'comments', component: CommentsComponent },
    { path: 'not-found', component: ErrorPageComponent },
    { path: '**',  redirectTo:'/not-found' }
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}