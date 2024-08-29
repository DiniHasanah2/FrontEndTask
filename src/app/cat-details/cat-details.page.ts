import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.page.html',
  styleUrls: ['./cat-details.page.scss'],
})
export class CatDetailsPage implements OnInit {
  cat: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const catData = this.route.snapshot.paramMap.get('cat');
    
    // Check if catData is not null before parsing
    if (catData) {
      this.cat = JSON.parse(catData);
    } else {
      // Handle the case where catData is null
      console.error('Cat data is null');
      this.cat = {}; // or provide default values
    }
  }
}
