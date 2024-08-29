import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatImagesPageRoutingModule } from './cat-images-routing.module';

import { CatImagesPage } from './cat-images.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatImagesPageRoutingModule
  ],
  declarations: [CatImagesPage]
})
export class CatImagesPageModule {}
