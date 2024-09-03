import { HttpClient } from '@angular/common/http'; // Import HttpClient to make HTTP requests
import { Component, OnInit } from '@angular/core'; // Import Component and OnInit from Angular core

@Component({
  selector: 'app-home', // Defines the HTML tag to use for this component
  templateUrl: './home.page.html', // Path to the HTML template file
  styleUrls: ['./home.page.scss'], // Path to the CSS/SCSS styling file
})
export class HomePage implements OnInit {
  searchTerm: string = ''; // Stores the user's search term input
  selectedFilter: string = 'breed'; // Defines the selected filter type, default is 'breed'
  cats: any[] = []; // Array to hold the list of cat breeds fetched from the API
  filteredCats: any[] = []; // Array to hold the filtered list of cat breeds
  suggestions: any[] = []; // Array to store suggestions based on the user's input
  page: number = 1; // Current page number for pagination
  itemsPerPage: number = 5; // Number of items to display per page
  totalPages: number = 1; // Total number of pages calculated based on the number of items

  constructor(private http: HttpClient) {} // Inject HttpClient into the constructor for making HTTP requests

  ngOnInit() {
    this.getCatBreeds(); // Call getCatBreeds() when the component initializes
  }

  // Method to fetch the list of cat breeds from the API
  getCatBreeds() {
    this.http.get<any>('https://catfact.ninja/breeds').subscribe(
      (response) => {
        this.cats = response.data; // Store the fetched cat breeds data in the 'cats' array
        this.applyFilters(); // Apply filters to the data
        this.totalPages = Math.ceil(this.cats.length / this.itemsPerPage); // Calculate total pages
      },
      (error) => {
        console.error('Error fetching cat breeds:', error); // Log errors to the console if the request fails
      }
    );
  }

  // Method to filter the cat breeds based on the search term and selected filter
  applyFilters() {
    const filteredData = this.cats.filter(cat => 
      cat[this.selectedFilter]?.toLowerCase().includes(this.searchTerm.toLowerCase()) // Filter logic
    );
    this.suggestions = filteredData;  // Store the filtered data as suggestions
    this.totalPages = Math.ceil(filteredData.length / this.itemsPerPage); // Recalculate total pages based on filtered data
    this.filteredCats = filteredData.slice((this.page - 1) * this.itemsPerPage, this.page * this.itemsPerPage); // Paginate the filtered data
  }

  // Method to handle the selection of a suggestion from the list
  selectSuggestion(suggestion: any) {
    this.searchTerm = suggestion[this.selectedFilter]; // Update the search term with the selected suggestion
    this.applyFilters(); // Reapply filters with the new search term
  }

  // Method to navigate to the next page of results
  nextPage() {
    if (this.page < this.totalPages) { // Check if the next page exists
      this.page++; // Increment the page number
      this.applyFilters(); // Reapply filters to update the displayed results
    }
  }

  // Method to navigate to the previous page of results
  prevPage() {
    if (this.page > 1) { // Check if the previous page exists
      this.page--; // Decrement the page number
      this.applyFilters(); // Reapply filters to update the displayed results
    }
  }
}
