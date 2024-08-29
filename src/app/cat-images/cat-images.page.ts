import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cat-images',
  templateUrl: './cat-images.page.html',
  styleUrls: ['./cat-images.page.scss'],
})
export class CatImagesPage implements OnInit {
  cats: any[] = [];

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  ngOnInit() {
    this.getCatImages();
  }

  getCatImages() {
    this.http.get<any>('https://catfact.ninja/breeds').subscribe(
      (response) => {
        this.cats = response.data.slice(0, 25).map((cat: any, index: number) => ({
          ...cat,
          image: `assets/imgs/image${index + 1}.jpg`
        }));
      },
      (error) => {
        console.error('Error fetching cat images:', error);
      }
    );
  }

  openCatDetails(cat: any) {
    this.navCtrl.navigateForward(['/cat-details', { cat: JSON.stringify(cat) }]);
  }
}
