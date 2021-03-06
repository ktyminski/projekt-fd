import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Wear } from '.././model/wear';

@Injectable()
export class WearService {

   private clothesUrl = 'api/clothes';
   private headers = new Headers({'Content-Type': 'application/json'});

   constructor(private http: Http) { }

  getClothes(): Promise<Wear[]> {
    return this.http
      .get(this.clothesUrl)
      .toPromise()
      .then(response => { console.log(response);   return response.json().data as Wear[]})
      .catch(this.handleError);
  }

  getSingleCloth(id: number): Promise<Wear> {
    const url = `${this.clothesUrl}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => { console.log(response);   return response.json().data as Wear})
      .catch(this.handleError);
  }

update(wear: Wear): Promise<Wear> {
  const url = `${this.clothesUrl}/${wear.id}`;
  return this.http
    .put(url, JSON.stringify(wear), {})
    .toPromise()
    .then(() => wear)
    .catch(this.handleError);
}

create(name: string, price: number, description: string, image: string): Promise<Wear> {
  return this.http
    .post(this.clothesUrl, JSON.stringify({name: name,  price: price, description: description, image:image}), {})
    .toPromise()
    .then(res => res.json().data as Wear)
    .catch(this.handleError);
}

delete(id: number): Promise<void> {
  const url = `${this.clothesUrl}/${id}`;
  return this.http
    .delete(url, {})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
  console.error('Cos poszlo nie tak', error);
  return Promise.reject(error.message || error);
}

}
