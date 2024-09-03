import { Component, OnInit } from '@angular/core'; // Import Component and OnInit from Angular core
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute to access route parameters

@Component({
  selector: 'app-cat-details', // Defines the HTML tag to use for this component
  templateUrl: './cat-details.page.html', // Path to the HTML template file
  styleUrls: ['./cat-details.page.scss'], // Path to the CSS/SCSS styling file
})
export class CatDetailsPage implements OnInit {
  cat: any; // Property to store the cat data passed through the route

  constructor(private route: ActivatedRoute) {} // Inject ActivatedRoute to access the route parameters

  ngOnInit() {
    const catData = this.route.snapshot.paramMap.get('cat'); 
    // Retrieve the 'cat' parameter from the route using snapshot.paramMap.get()

    // Check if catData is not null before parsing
    if (catData) {
      this.cat = JSON.parse(catData); // Parse the cat data from JSON string to JavaScript object
    } else {
      // Handle the case where catData is null
      console.error('Cat data is null'); // Log an error message if catData is null
      this.cat = {}; // Initialize 'cat' with an empty object or provide default values
    }
  }
}
