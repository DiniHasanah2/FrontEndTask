import { HttpClient } from '@angular/common/http'; // Import HttpClient to make requests to external APIs
import { Component, OnInit } from '@angular/core'; // Import Component decorator and OnInit interface

@Component({
  selector: 'app-root', // Defines the selector for this component
  templateUrl: 'app.component.html', // Links to the component's HTML template
  styleUrls: ['app.component.scss'], // Links to the component's styles
})
export class AppComponent implements OnInit { 
  cats: any[] = []; // Array to store cat breeds
  searchTerm: string = ''; // Search term input by the user
  selectedFilter: string = 'breed'; // Default filter set to 'breed'
  filteredCats: any[] = []; // Array to store filtered cat breeds
  page: number = 1; // Current page number for pagination
  itemsPerPage: number = 5; // Number of items to display per page
  totalPages: number = 1; // Total number of pages available

  constructor(private http: HttpClient) {} // Inject HttpClient service into the component

  ngOnInit() {
    this.getCatBreeds(); // Fetch cat breeds when the component initializes
  }

  getCatBreeds() {
    this.http.get<any>('https://catfact.ninja/breeds').subscribe(
      (response) => {
        this.cats = response.data; // Store the fetched cat breeds data
        this.totalPages = Math.ceil(this.cats.length / this.itemsPerPage); // Calculate total pages based on the number of cats and items per page
        this.updateFilteredCats(); // Update the filtered cats for the current page
      },
      (error) => {
        console.error('Error fetching cat breeds:', error); // Log any errors that occur during the API request
      }
    );
  }

  updateFilteredCats() {
    const start = (this.page - 1) * this.itemsPerPage; // Calculate the starting index for the current page
    const end = start + this.itemsPerPage; // Calculate the ending index for the current page
    this.filteredCats = this.cats
      .filter(cat => {
        const value = cat[this.selectedFilter].toLowerCase(); // Get the value of the selected filter (e.g., breed)
        return value.includes(this.searchTerm.toLowerCase()); // Filter cats based on the search term
      })
      .slice(start, end); // Slice the filtered array to get only the items for the current page
  }

  nextPage() {
    if (this.page < this.totalPages) { // Check if there are more pages available
      this.page++; // Increment the page number
      this.updateFilteredCats(); // Update the filtered cats for the new page
    }
  }

  prevPage() {
    if (this.page > 1) { // Check if the current page is greater than 1
      this.page--; // Decrement the page number
      this.updateFilteredCats(); // Update the filtered cats for the new page
    }
  }
}
