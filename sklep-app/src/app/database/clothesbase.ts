//import { Wear } from '.././model/wear';

import { InMemoryDbService } from 'angular-in-memory-web-api';
export class CLOTHES implements InMemoryDbService {
  createDb() {
    let clothes = [
      { id: 1, name: 'Koszulka', image : 'obrazek', description: 'koszulka na lato' },
      { id: 2, name: 'Kapelusz', image : 'obrazek', description: 'kapelusz na chlodne dni' },
      { id: 3, name: 'Czapka', image : 'obrazek', description: 'czapka z daszkiem' },
      { id: 4, name: 'Adidasy', image : 'obrazek', description: 'wygodne buty sportowe' },
      { id: 5, name: 'Płaszcz', image : 'obrazek', description: 'okrycie na zimne dni' },
      { id: 6, name: 'Spodnie', image : 'obrazek', description: 'bardzo wygodne spodnie z cienkiego materialu' },
      { id: 7, name: 'Kamizelka', image : 'obrazek', description: 'dodaje szyku i animuszu' }
    ];
    return {clothes};
  }
}
