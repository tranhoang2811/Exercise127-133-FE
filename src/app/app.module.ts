import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularEditorModule } from '@kolkov/angular-editor'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise128Component } from './exercise128/exercise128.component';
import { Exercise129Component } from './exercise129/exercise129.component';
import { Exercise130Component } from './exercise130/exercise130.component';
import { Exercise131Component } from './exercise131/exercise131.component';
import { Exercise132Component } from './exercise132/exercise132.component';
import { ClientFashionListComponent } from './exercise133//client/client-fashion-list/client-fashion-list.component';
import { CreateFashionComponent } from './exercise133/admin/create-fashion/create-fashion.component';
import { UpdateFashionComponent } from './exercise133/admin/update-fashion/update-fashion.component';
import { DeleteFashionModalComponent } from './exercise133/admin/delete-fashion-modal/delete-fashion-modal.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FashionDetailComponent } from './exercise133/client/fashion-detail/fashion-detail.component';
import { AdminFashionListComponent } from './exercise133/admin/admin-fashion-list/admin-fashion-list.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise128Component,
    Exercise129Component,
    Exercise130Component,
    Exercise131Component,
    Exercise132Component,
    AdminFashionListComponent,
    CreateFashionComponent,
    UpdateFashionComponent,
    DeleteFashionModalComponent,
    ClientFashionListComponent,
    FashionDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    AngularEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
