import { NgModule } from "@angular/core";

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ProductsComponent } from './products/products.component';
import { ProductGaurdService } from "./product-gaurd.service";

const appRoute: Routes = [
    {path: '', component: HomeComponent },
    {path: 'Home', component: HomeComponent },
    {path: 'About', component: AboutComponent },
    {path: 'Contact', component: ContactComponent },
    {path: 'Products', component: ProductsComponent, canActivate:[ProductGaurdService]},
    // {path: 'Products/Products/:id', component: ProductsComponent },
    {path: '**', component: ErrorComponent }
  ]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoute)
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule{

}