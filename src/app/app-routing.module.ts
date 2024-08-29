import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'cat-images',
    loadChildren: () => import('./cat-images/cat-images.module').then( m => m.CatImagesPageModule)
  },
  {
    path: 'cat-details',
    loadChildren: () => import('./cat-details/cat-details.module').then( m => m.CatDetailsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
