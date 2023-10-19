import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercise128Component } from './exercise128/exercise128.component';
import { Exercise129Component } from './exercise129/exercise129.component';
import { Exercise130Component } from './exercise130/exercise130.component';
import { Exercise131Component } from './exercise131/exercise131.component';
import { Exercise132Component } from './exercise132/exercise132.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
