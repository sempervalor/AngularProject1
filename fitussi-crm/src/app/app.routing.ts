import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ClientsComponent } from "./clients/clients.component";
import { ViewClientComponent } from "./view-client/view-client.component";
import { AddClientComponent } from "./add-client/add-client.component";
import { EditClientComponent } from "./edit-client/edit-client.component";
import { ProductsComponent } from "./products/products.component";
import { ViewProductComponent } from "./view-product/view-product.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";

const APP_ROUTES: Routes = [
  {path: 'edit-product', component: EditProductComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: 'view-product', component: ViewProductComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'edit-client', component: EditClientComponent},
  {path: 'add-client', component: AddClientComponent},
  {path: 'view-client', component: ViewClientComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: AppComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
