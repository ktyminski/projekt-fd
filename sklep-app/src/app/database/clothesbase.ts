//import { Wear } from '.././model/wear';

import { InMemoryDbService } from 'angular-in-memory-web-api';

import { dane } from './image'
export class CLOTHES implements InMemoryDbService {
  createDb() {
    let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"

    let clothes = [
      { id: 1, name: 'Koszulka', image : dane[0], description: description, price: 69.97 },
      { id: 2, name: 'Kapelusz', image : dane[1], description: description, price: 89.29 },
      { id: 3, name: 'Czapka', image : dane[2], description: description, price: 70.44 },
      { id: 4, name: 'Adidasy', image : dane[3], description: description, price: 169.99 },
      { id: 5, name: 'Płaszcz', image : dane[2], description: description, price: 246.99 },
      { id: 6, name: 'Spodnie', image : dane[1], description: description, price: 119.56 },
      { id: 7, name: 'Kamizelka', image : dane[0], description: description, price: 108.50 }
    ];
    return {clothes};
  }
}
