import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatImagesPage } from './cat-images.page';

const routes: Routes = [
  {
    path: '',
    component: CatImagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatImagesPageRoutingModule {}
