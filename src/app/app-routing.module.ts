import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercise128Component } from './exercise128/exercise128.component';
import { Exercise129Component } from './exercise129/exercise129.component';
import { Exercise130Component } from './exercise130/exercise130.component';
import { Exercise131Component } from './exercise131/exercise131.component';
import { Exercise132Component } from './exercise132/exercise132.component';
import { AdminFashionListComponent } from './exercise133/admin/admin-fashion-list/admin-fashion-list.component';
import { CreateFashionComponent } from './exercise133/admin/create-fashion/create-fashion.component';
import { UpdateFashionComponent } from './exercise133/admin/update-fashion/update-fashion.component';
import { ClientFashionListComponent } from './exercise133/client/client-fashion-list/client-fashion-list.component';
import { FashionDetailComponent } from './exercise133/client/fashion-detail/fashion-detail.component';

const routes: Routes = [
  {
    path: 'exercise-128',
    component: Exercise128Component,
  },
  {
    path: 'exercise-129',
    component: Exercise129Component,
  },
  {
    path: 'exercise-130',
    component: Exercise130Component,
  },
  {
    path: 'exercise-131',
    component: Exercise131Component,
  },
  {
    path: 'exercise-132',
    component: Exercise132Component,
  },
  {
    path: 'exercise-133/admin',
    component: AdminFashionListComponent,
  },
  {
    path: 'exercise-133/admin/new',
    component: CreateFashionComponent,
  },
  {
    path: 'exercise-133/admin/:id',
    component: UpdateFashionComponent,
  },
  {
    path: 'exercise-133/client',
    component: ClientFashionListComponent,
  },
  {
    path: 'exercise-133/client/:id',
    component: FashionDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
