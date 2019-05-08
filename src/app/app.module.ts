import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudListComponent } from './components/crud-list/crud-list.component';
import { CrudFormComponent } from './components/crud-form/crud-form.component';
import { NavegationComponent } from './components/navegation/navegation.component';

import { FormsModule } from '@angular/forms';
import { CrudEditComponent } from './components/crud-edit/crud-edit.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { CrudViewComponent } from './components/crud-view/crud-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudListComponent,
    CrudFormComponent,
    NavegationComponent,
    CrudEditComponent,
    FiltroPipe,
    CrudViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
