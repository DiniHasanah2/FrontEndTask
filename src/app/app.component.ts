import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  cats: any[] = [];
  searchTerm: string = '';
  selectedFilter: string = 'breed';
  filteredCats: any[] = [];
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
        this.totalPages = Math.ceil(this.cats.length / this.itemsPerPage);
        this.updateFilteredCats();
      },
      (error) => {
        console.error('Error fetching cat breeds:', error);
      }
    );
  }

  updateFilteredCats() {
    const start = (this.page - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.filteredCats = this.cats
      .filter(cat => {
        const value = cat[this.selectedFilter].toLowerCase();
        return value.includes(this.searchTerm.toLowerCase());
      })
      .slice(start, end);
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.updateFilteredCats();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.updateFilteredCats();
    }
  }
}
