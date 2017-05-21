import { Component } from '@angular/core';

import { Wear } from './model/wear';
import { WearService } from './services/wear.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WearService]
})

export class AppComponent {

  constructor(private wearService: WearService) {

  }

  getClothes(): void {
    this.wearService.getClothes()
    .then(clothes => this.clothes = clothes);
  }


  title = 'Sklep odzieżowy';

  clothes : Wear[];
  selectedWear: Wear;

  onSelect(wear: Wear): void {
    this.selectedWear = wear;
  }

  ngOnInit(): void {
    this.getClothes();
  }
}
