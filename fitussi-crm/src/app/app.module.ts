import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClientsComponent } from './clients/clients.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ProductsComponent } from './products/products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { routing } from './app.routing';
import { HeaderSidebarComponent } from './header-sidebar/header-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientsComponent,
    ViewClientComponent,
    EditClientComponent,
    AddClientComponent,
    ProductsComponent,
    ViewProductComponent,
    EditProductComponent,
    AddProductComponent,
    HeaderSidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
