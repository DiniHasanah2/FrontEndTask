import { NgModule } from '@angular/core'; // Import NgModule decorator from Angular core
import { BrowserModule } from '@angular/platform-browser'; // Import BrowserModule, which is required for running the app in a browser
import { RouteReuseStrategy } from '@angular/router'; // Import RouteReuseStrategy for managing route reusing strategies

import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule to enable making HTTP requests
import { FormsModule } from '@angular/forms'; // Import FormsModule to enable template-driven forms
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'; // Import IonicModule for Ionic components and IonicRouteStrategy for routing strategy
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule to manage app routing
import { AppComponent } from './app.component'; // Import the root AppComponent

@NgModule({
  declarations: [AppComponent], // Declare the AppComponent as part of this module
  imports: [
    BrowserModule, // Import BrowserModule to make the app compatible with browsers
    IonicModule.forRoot(), // Initialize the Ionic module with its root configuration
    AppRoutingModule, // Import AppRoutingModule to include app routing setup
    HttpClientModule, // Import HttpClientModule here to enable HTTP client services across the app
    FormsModule // Import FormsModule here to enable form handling within the app
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }], // Provide RouteReuseStrategy with IonicRouteStrategy to handle route caching
  bootstrap: [AppComponent], // Bootstrap the app with the AppComponent
})
export class AppModule {} // Export the AppModule class as the root module of the application
