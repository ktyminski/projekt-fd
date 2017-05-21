import { Injectable } from '@angular/core';

import { Wear } from '.././model/wear';
import { CLOTHES } from '.././database/clothesbase';

@Injectable()
export class WearService {

  getClothes(): Promise<Wear[]> {
    return Promise.resolve(CLOTHES);
  }
  getSingleCloth(id: number): Promise<Wear> {
    return this.getClothes()
           .then(clothes => clothes.find(wear => wear.id === id));
  }

}
