import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Sklep odzieżowy';

  clothes = CLOTHES;
  selectedWear: Wear;

  onSelect(wear: Wear): void {
    this.selectedWear = wear;
  }


}
export class Wear {
  id: number;
  name: string;
  image : string;
  description : string;
}

const CLOTHES: Wear[] = [
  { id: 1, name: 'Koszulka', image : 'obrazek', description: 'koszulka na lato' },
  { id: 2, name: 'Kapelusz', image : 'obrazek', description: 'kapelusz na chlodne dni' },
  { id: 3, name: 'Czapka', image : 'obrazek', description: 'czapka z daszkiem' },
  { id: 4, name: 'Adidasy', image : 'obrazek', description: 'wygodne buty sportowe' },
  { id: 5, name: 'Płaszcz', image : 'obrazek', description: 'okrycie na zimne dni' },
  { id: 6, name: 'Spodnie', image : 'obrazek', description: 'bardzo wygodne spodnie z cienkiego materialu' },
  { id: 7, name: 'Kamizelka', image : 'obrazek', description: 'dodaje szyku i animuszu' }
];
