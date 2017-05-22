//import { Wear } from '.././model/wear';

import { InMemoryDbService } from 'angular-in-memory-web-api';
export class CLOTHES implements InMemoryDbService {
  createDb() {
    let clothes = [
      { id: 1, name: 'Koszulka', image : 'obrazek', description: 'koszulka na lato', price: 69.97 },
      { id: 2, name: 'Kapelusz', image : 'obrazek', description: 'kapelusz na chlodne dni', price: 89.29 },
      { id: 3, name: 'Czapka', image : 'obrazek', description: 'czapka z daszkiem', price: 70.00 },
      { id: 4, name: 'Adidasy', image : 'obrazek', description: 'wygodne buty sportowe', price: 169.99 },
      { id: 5, name: 'Płaszcz', image : 'obrazek', description: 'okrycie na zimne dni', price: 246.99 },
      { id: 6, name: 'Spodnie', image : 'obrazek', description: 'bardzo wygodne spodnie z cienkiego materialu', price: 119.56 },
      { id: 7, name: 'Kamizelka', image : 'obrazek', description: 'dodaje szyku i animuszu', price: 108.50 }
    ];
    return {clothes};
  }
}
