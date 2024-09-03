import { NgModule } from '@angular/core'; // Import NgModule decorator from Angular core
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'; // Import RouterModule for routing and PreloadAllModules for preloading strategy

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect the empty path to 'home', with full match strategy
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) }, // Lazy-load the Home module when 'home' path is accessed
  {
    path: 'cat-images',
    loadChildren: () => import('./cat-images/cat-images.module').then( m => m.CatImagesPageModule) // Lazy-load the Cat Images module when 'cat-images' path is accessed
  },
  {
    path: 'cat-details',
    loadChildren: () => import('./cat-details/cat-details.module').then( m => m.CatDetailsPageModule) // Lazy-load the Cat Details module when 'cat-details' path is accessed
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })], // Configure the router module with the defined routes and preload strategy
  exports: [RouterModule] // Export the RouterModule so it can be used throughout the app
})
export class AppRoutingModule { }
