import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  searchTerm: string = '';
  selectedFilter: string = 'breed';
  cats: any[] = [];
  filteredCats: any[] = [];
  suggestions: any[] = [];
  page: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 1;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCatBreeds();
  }

  getCatBreeds() {
    this.http.get<any>('https://catfact.ninja/breeds').subscribe(
      (response) => {
        this.cats = response.data;
        this.applyFilters();
        this.totalPages = Math.ceil(this.cats.length / this.itemsPerPage);
      },
      (error) => {
        console.error('Error fetching cat breeds:', error);
      }
    );
  }

  applyFilters() {
    const filteredData = this.cats.filter(cat => 
      cat[this.selectedFilter]?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.suggestions = filteredData;  // Store suggestions
    this.totalPages = Math.ceil(filteredData.length / this.itemsPerPage);
    this.filteredCats = filteredData.slice((this.page - 1) * this.itemsPerPage, this.page * this.itemsPerPage);
  }

  selectSuggestion(suggestion: any) {
    this.searchTerm = suggestion[this.selectedFilter];
    this.applyFilters();
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.applyFilters();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.applyFilters();
    }
  }
}
